import React from "react";
import "./index.css";

const Header = ({
  onChangeActiveLane,
  onChangeRunning,
  onChangeColor,
  onChangeDirection,
  onChangeXFrom,
  onChangeYFrom,
  onChangeXTo,
  onChangeYTo,
  onSearch,
}) => {
  return (
    <div className="flex-container">
      <div>
        <label>Lane Code</label>
        <input></input>
      </div>
      <div>
        <label>Active Lane</label>
        <select onChange={onChangeActiveLane}>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
      </div>
      <div>
        <label>Parking Lane No. Running</label>
        <select onChange={onChangeRunning}>
          <option value="ltr">Left - Right</option>
          <option value="rtl">Right - Left</option>
        </select>
      </div>
      <div>
        <label>Color</label>
        <select onChange={onChangeColor}>
          <option value="#E63946">Red (Pantone)</option>
          <option value="#F1FAEE">Honeydew</option>
          <option value="#A8DADC">Non Photo blue</option>
          <option value="#457B9D">Cerulean</option>
          <option value="#1D3557">Berkeley Blue</option>
        </select>
      </div>
      <div>
        <label>Parking Direction</label>
        <select onChange={onChangeDirection}>
          <option value="up">Up</option>
          <option value="down">Down</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div>
        <label>Size From</label>
        <select onChange={onChangeXFrom}>
          <option value="1">X1</option>
          <option value="2">X2</option>
          <option value="3">X3</option>
          <option value="4">X4</option>
          <option value="5">X5</option>
          <option value="6">X6</option>
          <option value="7">X7</option>
          <option value="8">X8</option>
          <option value="9">X9</option>
          <option value="10">X10</option>
          <option value="11">X11</option>
          <option value="12">X12</option>
          <option value="13">X13</option>
          <option value="14">X14</option>
          <option value="15">X15</option>
          <option value="16">X16</option>
          <option value="17">X17</option>
          <option value="18">X18</option>
          <option value="19">X19</option>
          <option value="20">X20</option>
          <option value="21">X21</option>
          <option value="22">X22</option>
          <option value="23">X23</option>
          <option value="24">X24</option>
          <option value="25">X25</option>
        </select>
        <select onChange={onChangeYFrom}>
          <option value="1">Y1</option>
          <option value="2">Y2</option>
          <option value="3">Y3</option>
          <option value="4">Y4</option>
          <option value="5">Y5</option>
          <option value="6">Y6</option>
          <option value="7">Y7</option>
          <option value="8">Y8</option>
          <option value="9">Y9</option>
          <option value="10">Y10</option>
          <option value="11">Y11</option>
          <option value="12">Y12</option>
          <option value="13">Y13</option>
          <option value="14">Y14</option>
          <option value="15">Y15</option>
          <option value="16">Y16</option>
          <option value="17">Y17</option>
          <option value="18">Y18</option>
          <option value="19">Y19</option>
          <option value="20">Y20</option>
        </select>
      </div>
      <div>
        <label>Size To</label>
        <select onChange={onChangeXTo}>
          <option value="1">X1</option>
          <option value="2">X2</option>
          <option value="3">X3</option>
          <option value="4">X4</option>
          <option value="5">X5</option>
          <option value="6">X6</option>
          <option value="7">X7</option>
          <option value="8">X8</option>
          <option value="9">X9</option>
          <option value="10">X10</option>
          <option value="11">X11</option>
          <option value="12">X12</option>
          <option value="13">X13</option>
          <option value="14">X14</option>
          <option value="15">X15</option>
          <option value="16">X16</option>
          <option value="17">X17</option>
          <option value="18">X18</option>
          <option value="19">X19</option>
          <option value="20">X20</option>
          <option value="21">X21</option>
          <option value="22">X22</option>
          <option value="23">X23</option>
          <option value="24">X24</option>
          <option value="25">X25</option>
        </select>
        <select onChange={onChangeYTo}>
          <option value="1">Y1</option>
          <option value="2">Y2</option>
          <option value="3">Y3</option>
          <option value="4">Y4</option>
          <option value="5">Y5</option>
          <option value="6">Y6</option>
          <option value="7">Y7</option>
          <option value="8">Y8</option>
          <option value="9">Y9</option>
          <option value="10">Y10</option>
          <option value="11">Y11</option>
          <option value="12">Y12</option>
          <option value="13">Y13</option>
          <option value="14">Y14</option>
          <option value="15">Y15</option>
          <option value="16">Y16</option>
          <option value="17">Y17</option>
          <option value="18">Y18</option>
          <option value="19">Y19</option>
          <option value="20">Y20</option>
        </select>
      </div>
      <button onClick={onSearch}>Plan</button>
    </div>
  );
};

export default Header;
