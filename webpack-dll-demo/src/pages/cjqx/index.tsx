/*
 * @Author: 程羽 chengyu@iri.cn
 * @Date: 2022-07-19 09:17:21
 * @LastEditors: 程羽
 * @LastEditTime: 2022-07-20 15:05:30
 * @Description:
 */
/**
 * 测井曲线图
 * 罗瑛
 */
 import React, { useLayoutEffect } from "react";
// import * as geo from "../../resources/bin/geotoolkit.react";


function Cjqx() {
  // useLayoutEffect(() => {
  //   new geo.geotoolkit.plot.Plot({
  //     canvasElement: document.getElementById("widgetCanvas"),
  //     autoUpdate: true,
  //   });
  // }, []);

  return (
    <div>
      <h2 className="headerTitle">测井曲线图</h2>
      <div className="canvasContainer">
        <canvas id="widgetCanvas" height="700px" width="850px"></canvas>
      </div>
      <div id="tooltip-container"></div>
    </div>
  );
}

module.exports = Cjqx
