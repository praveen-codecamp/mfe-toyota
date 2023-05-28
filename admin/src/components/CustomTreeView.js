import React, { useState, useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Checkbox, Grid, Typography } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import palette from "../../../shared/theme/palette";

const data = [
  {
    id: "1",
    name: "Dashboard",
    children: [
      {
        id: "2",
        name: "Child 1",
        parent: "1",
        children: [
          {
            id: "5",
            name: "Grandchild 1",
            parent: "2",
            children: [
              {
                id: "9",
                name: "Great-grandchild 1",
                parent: "5",
              },
              {
                id: "10",
                name: "Great-grandchild 2",
                parent: "5",
              },
            ],
          },
          {
            id: "6",
            name: "Grandchild 2",
            parent: "2",
            children: [
              {
                id: "11",
                name: "Great-grandchild 3",
                parent: "6",
              },
              {
                id: "12",
                name: "Great-grandchild 4",
                parent: "6",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        name: "Child 2",
        parent: "1",
        children: [
          {
            id: "7",
            name: "Grandchild 3",
            parent: "3",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Account",
    children: [
      {
        id: "8",
        name: "Child 3",
        parent: "4",
        children: [
          {
            id: "13",
            name: "Grandchild 4",
            parent: "8",
            children: [
              {
                id: "14",
                name: "Great-grandchild 5",
                parent: "13",
              },
              {
                id: "15",
                name: "Great-grandchild 6",
                parent: "13",
              },
            ],
          },
          {
            id: "16",
            name: "Grandchild 5",
            parent: "8",
            children: [
              {
                id: "17",
                name: "Great-grandchild 7",
                parent: "16",
              },
              {
                id: "18",
                name: "Great-grandchild 8",
                parent: "16",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "19",
    name: "Payment",
    children: [
      {
        id: "20",
        name: "Child 4",
        parent: "19",
        children: [
          {
            id: "21",
            name: "Grandchild 6",
            parent: "20",
            children: [
              {
                id: "22",
                name: "Great-grandchild 9",
                parent: "21",
              },
              {
                id: "23",
                name: "Great-grandchild 10",
                parent: "21",
              },
            ],
          },
          {
            id: "24",
            name: "Grandchild 7",
            parent: "20",
          },
        ],
      },
    ],
  },
];
//BFS algorithm to find node by his ID
const bfsSearch = (graph, targetId) => {
  const queue = [...graph];

  while (queue.length > 0) {
    const currNode = queue.shift();
    if (currNode.id === targetId) {
      return currNode;
    }
    if (currNode.children) {
      queue.push(...currNode.children);
    }
  }
  return []; // Target node not found
};
export default function CustomTreeView() {
  const [selectedNodes, setSelectedNodes] = useState([]);
  useEffect(() => {
    console.log("Selected Nodes:");
    console.log(JSON.stringify(selectedNodes, null, 4));
  }, [selectedNodes]);

  // Retrieve all ids from node to his children's
  function getAllIds(node, idList = []) {
    idList.push(node.id);
    if (node.children) {
      node.children.forEach((child) => getAllIds(child, idList));
    }
    return idList;
  }
  // Get IDs of all children from specific node
  const getAllChild = (id) => {
    return getAllIds(bfsSearch(data, id));
  };

  // Get all father IDs from specific node
  const getAllFathers = (id, list = []) => {
    const node = bfsSearch(data, id);
    if (node.parent) {
      list.push(node.parent);

      return getAllFathers(node.parent, list);
    }

    return list;
  };

  function isAllChildrenChecked(node, list) {
    const allChild = getAllChild(node.id);
    const nodeIdIndex = allChild.indexOf(node.id);
    allChild.splice(nodeIdIndex, 1);

    return allChild.every((nodeId) =>
      selectedNodes.concat(list).includes(nodeId)
    );
  }

  const handleNodeSelect = (event, nodeId) => {
    event.stopPropagation();
    const allChild = getAllChild(nodeId);
    const fathers = getAllFathers(nodeId);

    if (selectedNodes.includes(nodeId)) {
      // Need to de-check
      setSelectedNodes((prevSelectedNodes) =>
        prevSelectedNodes.filter((id) => !allChild.concat(fathers).includes(id))
      );
    } else {
      // Need to check
      const ToBeChecked = allChild;
      for (let i = 0; i < fathers.length; ++i) {
        if (isAllChildrenChecked(bfsSearch(data, fathers[i]), ToBeChecked)) {
          ToBeChecked.push(fathers[i]);
        }
      }
      setSelectedNodes((prevSelectedNodes) =>
        [...prevSelectedNodes].concat(ToBeChecked)
      );
    }
  };

  const handleExpandClick = (event) => {
    // prevent the click event from propagating to the checkbox
    event.stopPropagation();
  };

  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      onClick={handleExpandClick}
      label={
        <Grid container spacing={1} justifyContent={"inherit"}>
          <Grid item>
            <Checkbox
              checked={selectedNodes.indexOf(nodes.id) !== -1}
              tabIndex={-1}
              disableRipple
              onClick={(event) => handleNodeSelect(event, nodes.id)}
            />
          </Grid>
          <Grid item sx={{ mt: 1.3 }}>
            <FolderIcon sx={{ color: palette.folderColor }} />
          </Grid>
          <Grid item sx={{ mt: 1.3 }}>
            <Typography display={"inline"} variant="body2">
              {nodes.name}
            </Typography>
          </Grid>
        </Grid>
      }
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      multiSelect
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      selected={selectedNodes}
    >
      {data.map((node) => renderTree(node))}
    </TreeView>
  );
}
