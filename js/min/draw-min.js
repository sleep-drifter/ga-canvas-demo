function onMouseUp(e){if(makeRectangle){var t=new Path.Rectangle({from:start,to:new Point(e.point)});t.strokeColor="black",t.fillColor="rgba(255,255,255,0.7)"}guide.segments[0].point=[0,0],guide.segments[1].point=[0,0],guide.segments[2].point=[0,0],guide.segments[3].point=[0,0],makeRectangle=!1}var start,rect,makeRectangle=!1,textArray=[],guide=new Path.Rectangle({point:[0,0],size:[1,1],strokeColor:"#6996FF"});guide.dashArray=[8,4],tool.distanceThreshold=50,tool.onMouseDown=function(e){start=new Point(e.point),makeRectangle&&(guide.position=start),textArray=[];var t=project.activeLayer.getItems({selected:!0});for(i=0;i<t.length;i++)t[i].selected=!1,"Path"===t[i].className&&(t[i].fillColor="rgba(255,255,255,0.7)")},tool.onMouseDrag=function(e){var t=e.point.x,o=e.point.y,n=e.point.x-start.x,i=(start-e.point).length;i>25&&(guide.segments[0].point=[start.x,e.point.y],guide.segments[1].point=start,guide.segments[2].point=[e.point.x,start.y],guide.segments[3].point=e.point,makeRectangle=!0)};var clickHandler=function(e){console.log("run click");var t=project.activeLayer.hitTest(e.point);if(makeRectangle===!1&&null!==t){var o=t.item;"PointText"!==o.className?o.selected===!0?(o.selected=!1,o.fillColor="rgba(255,255,255,0.7)"):(o.selected=!0,o.fillColor="rgba(0,0,0,0.1)"):"PointText"===o.className&&(o.selected===!0?o.selected=!1:o.selected=!0)}},typeHandler=function(e){console.log("run 2x click");var t=new PointText({point:new Point(e.point),content:"Click to add text",fillColor:"#333",fontFamily:"helvetica",fontSize:16});t.data="tag",t.selected=!0};project.activeLayer.on("click",clickHandler),$("canvas").dblclick(typeHandler),tool.onKeyDown=function(e){var t=e.key;if(console.log(t),"r"===t){var o=project.activeLayer.getItems({selected:!0});for(console.log(o),i=0;i<o.length;i++)o[i].remove()}};