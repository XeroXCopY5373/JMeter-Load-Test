/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 258.0, "minX": 0.0, "maxY": 27976.0, "series": [{"data": [[0.0, 258.0], [0.1, 263.0], [0.2, 269.0], [0.3, 272.0], [0.4, 273.0], [0.5, 276.0], [0.6, 279.0], [0.7, 279.0], [0.8, 294.0], [0.9, 296.0], [1.0, 301.0], [1.1, 308.0], [1.2, 320.0], [1.3, 320.0], [1.4, 326.0], [1.5, 334.0], [1.6, 350.0], [1.7, 353.0], [1.8, 356.0], [1.9, 358.0], [2.0, 362.0], [2.1, 366.0], [2.2, 383.0], [2.3, 388.0], [2.4, 393.0], [2.5, 402.0], [2.6, 402.0], [2.7, 409.0], [2.8, 413.0], [2.9, 416.0], [3.0, 423.0], [3.1, 424.0], [3.2, 432.0], [3.3, 433.0], [3.4, 442.0], [3.5, 448.0], [3.6, 448.0], [3.7, 454.0], [3.8, 458.0], [3.9, 463.0], [4.0, 473.0], [4.1, 501.0], [4.2, 505.0], [4.3, 507.0], [4.4, 517.0], [4.5, 529.0], [4.6, 537.0], [4.7, 541.0], [4.8, 559.0], [4.9, 559.0], [5.0, 562.0], [5.1, 564.0], [5.2, 566.0], [5.3, 566.0], [5.4, 567.0], [5.5, 573.0], [5.6, 582.0], [5.7, 586.0], [5.8, 589.0], [5.9, 591.0], [6.0, 598.0], [6.1, 604.0], [6.2, 605.0], [6.3, 611.0], [6.4, 613.0], [6.5, 624.0], [6.6, 625.0], [6.7, 630.0], [6.8, 645.0], [6.9, 665.0], [7.0, 666.0], [7.1, 670.0], [7.2, 670.0], [7.3, 672.0], [7.4, 679.0], [7.5, 697.0], [7.6, 699.0], [7.7, 721.0], [7.8, 725.0], [7.9, 730.0], [8.0, 731.0], [8.1, 744.0], [8.2, 754.0], [8.3, 763.0], [8.4, 776.0], [8.5, 778.0], [8.6, 791.0], [8.7, 793.0], [8.8, 797.0], [8.9, 799.0], [9.0, 805.0], [9.1, 813.0], [9.2, 819.0], [9.3, 823.0], [9.4, 825.0], [9.5, 836.0], [9.6, 848.0], [9.7, 856.0], [9.8, 861.0], [9.9, 871.0], [10.0, 887.0], [10.1, 897.0], [10.2, 907.0], [10.3, 909.0], [10.4, 922.0], [10.5, 926.0], [10.6, 933.0], [10.7, 944.0], [10.8, 944.0], [10.9, 961.0], [11.0, 971.0], [11.1, 972.0], [11.2, 977.0], [11.3, 986.0], [11.4, 988.0], [11.5, 989.0], [11.6, 992.0], [11.7, 998.0], [11.8, 1000.0], [11.9, 1003.0], [12.0, 1004.0], [12.1, 1009.0], [12.2, 1010.0], [12.3, 1010.0], [12.4, 1011.0], [12.5, 1014.0], [12.6, 1016.0], [12.7, 1017.0], [12.8, 1020.0], [12.9, 1025.0], [13.0, 1026.0], [13.1, 1027.0], [13.2, 1035.0], [13.3, 1035.0], [13.4, 1036.0], [13.5, 1037.0], [13.6, 1039.0], [13.7, 1040.0], [13.8, 1041.0], [13.9, 1047.0], [14.0, 1050.0], [14.1, 1050.0], [14.2, 1056.0], [14.3, 1056.0], [14.4, 1060.0], [14.5, 1061.0], [14.6, 1063.0], [14.7, 1064.0], [14.8, 1067.0], [14.9, 1068.0], [15.0, 1070.0], [15.1, 1072.0], [15.2, 1072.0], [15.3, 1073.0], [15.4, 1074.0], [15.5, 1078.0], [15.6, 1082.0], [15.7, 1083.0], [15.8, 1087.0], [15.9, 1095.0], [16.0, 1095.0], [16.1, 1097.0], [16.2, 1098.0], [16.3, 1101.0], [16.4, 1101.0], [16.5, 1103.0], [16.6, 1104.0], [16.7, 1107.0], [16.8, 1108.0], [16.9, 1108.0], [17.0, 1110.0], [17.1, 1111.0], [17.2, 1115.0], [17.3, 1115.0], [17.4, 1116.0], [17.5, 1117.0], [17.6, 1118.0], [17.7, 1119.0], [17.8, 1119.0], [17.9, 1120.0], [18.0, 1122.0], [18.1, 1122.0], [18.2, 1126.0], [18.3, 1126.0], [18.4, 1128.0], [18.5, 1129.0], [18.6, 1130.0], [18.7, 1130.0], [18.8, 1132.0], [18.9, 1134.0], [19.0, 1138.0], [19.1, 1141.0], [19.2, 1142.0], [19.3, 1143.0], [19.4, 1144.0], [19.5, 1146.0], [19.6, 1147.0], [19.7, 1148.0], [19.8, 1149.0], [19.9, 1153.0], [20.0, 1154.0], [20.1, 1155.0], [20.2, 1156.0], [20.3, 1159.0], [20.4, 1159.0], [20.5, 1162.0], [20.6, 1162.0], [20.7, 1163.0], [20.8, 1165.0], [20.9, 1166.0], [21.0, 1167.0], [21.1, 1168.0], [21.2, 1170.0], [21.3, 1171.0], [21.4, 1172.0], [21.5, 1172.0], [21.6, 1174.0], [21.7, 1175.0], [21.8, 1176.0], [21.9, 1176.0], [22.0, 1177.0], [22.1, 1179.0], [22.2, 1179.0], [22.3, 1181.0], [22.4, 1182.0], [22.5, 1183.0], [22.6, 1185.0], [22.7, 1185.0], [22.8, 1186.0], [22.9, 1187.0], [23.0, 1189.0], [23.1, 1190.0], [23.2, 1191.0], [23.3, 1191.0], [23.4, 1193.0], [23.5, 1196.0], [23.6, 1196.0], [23.7, 1196.0], [23.8, 1197.0], [23.9, 1198.0], [24.0, 1200.0], [24.1, 1202.0], [24.2, 1203.0], [24.3, 1203.0], [24.4, 1204.0], [24.5, 1204.0], [24.6, 1205.0], [24.7, 1205.0], [24.8, 1206.0], [24.9, 1209.0], [25.0, 1212.0], [25.1, 1212.0], [25.2, 1213.0], [25.3, 1213.0], [25.4, 1213.0], [25.5, 1213.0], [25.6, 1214.0], [25.7, 1215.0], [25.8, 1218.0], [25.9, 1218.0], [26.0, 1218.0], [26.1, 1219.0], [26.2, 1220.0], [26.3, 1222.0], [26.4, 1224.0], [26.5, 1225.0], [26.6, 1226.0], [26.7, 1227.0], [26.8, 1228.0], [26.9, 1228.0], [27.0, 1231.0], [27.1, 1232.0], [27.2, 1232.0], [27.3, 1233.0], [27.4, 1233.0], [27.5, 1234.0], [27.6, 1234.0], [27.7, 1235.0], [27.8, 1236.0], [27.9, 1237.0], [28.0, 1237.0], [28.1, 1238.0], [28.2, 1238.0], [28.3, 1239.0], [28.4, 1240.0], [28.5, 1240.0], [28.6, 1240.0], [28.7, 1241.0], [28.8, 1242.0], [28.9, 1242.0], [29.0, 1243.0], [29.1, 1243.0], [29.2, 1243.0], [29.3, 1244.0], [29.4, 1245.0], [29.5, 1245.0], [29.6, 1245.0], [29.7, 1245.0], [29.8, 1246.0], [29.9, 1247.0], [30.0, 1248.0], [30.1, 1249.0], [30.2, 1250.0], [30.3, 1250.0], [30.4, 1254.0], [30.5, 1254.0], [30.6, 1254.0], [30.7, 1255.0], [30.8, 1255.0], [30.9, 1255.0], [31.0, 1257.0], [31.1, 1257.0], [31.2, 1257.0], [31.3, 1259.0], [31.4, 1259.0], [31.5, 1260.0], [31.6, 1260.0], [31.7, 1261.0], [31.8, 1261.0], [31.9, 1262.0], [32.0, 1262.0], [32.1, 1262.0], [32.2, 1263.0], [32.3, 1264.0], [32.4, 1264.0], [32.5, 1264.0], [32.6, 1265.0], [32.7, 1266.0], [32.8, 1266.0], [32.9, 1266.0], [33.0, 1266.0], [33.1, 1266.0], [33.2, 1266.0], [33.3, 1267.0], [33.4, 1268.0], [33.5, 1268.0], [33.6, 1269.0], [33.7, 1269.0], [33.8, 1270.0], [33.9, 1271.0], [34.0, 1272.0], [34.1, 1272.0], [34.2, 1273.0], [34.3, 1273.0], [34.4, 1274.0], [34.5, 1274.0], [34.6, 1275.0], [34.7, 1275.0], [34.8, 1275.0], [34.9, 1276.0], [35.0, 1278.0], [35.1, 1279.0], [35.2, 1279.0], [35.3, 1279.0], [35.4, 1279.0], [35.5, 1280.0], [35.6, 1280.0], [35.7, 1280.0], [35.8, 1280.0], [35.9, 1281.0], [36.0, 1282.0], [36.1, 1283.0], [36.2, 1283.0], [36.3, 1284.0], [36.4, 1284.0], [36.5, 1286.0], [36.6, 1286.0], [36.7, 1287.0], [36.8, 1288.0], [36.9, 1288.0], [37.0, 1289.0], [37.1, 1289.0], [37.2, 1289.0], [37.3, 1290.0], [37.4, 1290.0], [37.5, 1291.0], [37.6, 1291.0], [37.7, 1291.0], [37.8, 1293.0], [37.9, 1293.0], [38.0, 1293.0], [38.1, 1294.0], [38.2, 1295.0], [38.3, 1295.0], [38.4, 1296.0], [38.5, 1296.0], [38.6, 1297.0], [38.7, 1297.0], [38.8, 1299.0], [38.9, 1299.0], [39.0, 1300.0], [39.1, 1300.0], [39.2, 1301.0], [39.3, 1301.0], [39.4, 1301.0], [39.5, 1302.0], [39.6, 1303.0], [39.7, 1303.0], [39.8, 1303.0], [39.9, 1303.0], [40.0, 1303.0], [40.1, 1304.0], [40.2, 1304.0], [40.3, 1304.0], [40.4, 1305.0], [40.5, 1305.0], [40.6, 1306.0], [40.7, 1307.0], [40.8, 1308.0], [40.9, 1308.0], [41.0, 1309.0], [41.1, 1309.0], [41.2, 1310.0], [41.3, 1311.0], [41.4, 1312.0], [41.5, 1313.0], [41.6, 1314.0], [41.7, 1314.0], [41.8, 1314.0], [41.9, 1314.0], [42.0, 1316.0], [42.1, 1316.0], [42.2, 1316.0], [42.3, 1316.0], [42.4, 1317.0], [42.5, 1317.0], [42.6, 1318.0], [42.7, 1318.0], [42.8, 1318.0], [42.9, 1319.0], [43.0, 1320.0], [43.1, 1321.0], [43.2, 1322.0], [43.3, 1322.0], [43.4, 1322.0], [43.5, 1323.0], [43.6, 1324.0], [43.7, 1324.0], [43.8, 1325.0], [43.9, 1325.0], [44.0, 1325.0], [44.1, 1325.0], [44.2, 1325.0], [44.3, 1327.0], [44.4, 1327.0], [44.5, 1328.0], [44.6, 1328.0], [44.7, 1329.0], [44.8, 1329.0], [44.9, 1330.0], [45.0, 1330.0], [45.1, 1330.0], [45.2, 1332.0], [45.3, 1332.0], [45.4, 1332.0], [45.5, 1335.0], [45.6, 1335.0], [45.7, 1336.0], [45.8, 1337.0], [45.9, 1338.0], [46.0, 1339.0], [46.1, 1339.0], [46.2, 1339.0], [46.3, 1340.0], [46.4, 1341.0], [46.5, 1341.0], [46.6, 1342.0], [46.7, 1342.0], [46.8, 1343.0], [46.9, 1343.0], [47.0, 1344.0], [47.1, 1344.0], [47.2, 1345.0], [47.3, 1346.0], [47.4, 1346.0], [47.5, 1346.0], [47.6, 1346.0], [47.7, 1347.0], [47.8, 1348.0], [47.9, 1348.0], [48.0, 1349.0], [48.1, 1349.0], [48.2, 1351.0], [48.3, 1351.0], [48.4, 1353.0], [48.5, 1354.0], [48.6, 1356.0], [48.7, 1357.0], [48.8, 1358.0], [48.9, 1358.0], [49.0, 1358.0], [49.1, 1359.0], [49.2, 1360.0], [49.3, 1361.0], [49.4, 1363.0], [49.5, 1363.0], [49.6, 1364.0], [49.7, 1364.0], [49.8, 1365.0], [49.9, 1366.0], [50.0, 1368.0], [50.1, 1368.0], [50.2, 1369.0], [50.3, 1369.0], [50.4, 1369.0], [50.5, 1370.0], [50.6, 1372.0], [50.7, 1372.0], [50.8, 1373.0], [50.9, 1374.0], [51.0, 1375.0], [51.1, 1375.0], [51.2, 1375.0], [51.3, 1376.0], [51.4, 1376.0], [51.5, 1377.0], [51.6, 1378.0], [51.7, 1378.0], [51.8, 1380.0], [51.9, 1380.0], [52.0, 1382.0], [52.1, 1383.0], [52.2, 1383.0], [52.3, 1384.0], [52.4, 1385.0], [52.5, 1385.0], [52.6, 1386.0], [52.7, 1387.0], [52.8, 1387.0], [52.9, 1388.0], [53.0, 1390.0], [53.1, 1392.0], [53.2, 1393.0], [53.3, 1393.0], [53.4, 1393.0], [53.5, 1394.0], [53.6, 1395.0], [53.7, 1396.0], [53.8, 1396.0], [53.9, 1400.0], [54.0, 1400.0], [54.1, 1402.0], [54.2, 1403.0], [54.3, 1404.0], [54.4, 1405.0], [54.5, 1406.0], [54.6, 1406.0], [54.7, 1407.0], [54.8, 1410.0], [54.9, 1411.0], [55.0, 1413.0], [55.1, 1414.0], [55.2, 1416.0], [55.3, 1417.0], [55.4, 1417.0], [55.5, 1418.0], [55.6, 1419.0], [55.7, 1420.0], [55.8, 1422.0], [55.9, 1423.0], [56.0, 1424.0], [56.1, 1425.0], [56.2, 1426.0], [56.3, 1430.0], [56.4, 1430.0], [56.5, 1436.0], [56.6, 1436.0], [56.7, 1437.0], [56.8, 1438.0], [56.9, 1439.0], [57.0, 1440.0], [57.1, 1442.0], [57.2, 1443.0], [57.3, 1444.0], [57.4, 1445.0], [57.5, 1447.0], [57.6, 1447.0], [57.7, 1449.0], [57.8, 1449.0], [57.9, 1451.0], [58.0, 1452.0], [58.1, 1454.0], [58.2, 1458.0], [58.3, 1467.0], [58.4, 1467.0], [58.5, 1469.0], [58.6, 1473.0], [58.7, 1474.0], [58.8, 1477.0], [58.9, 1481.0], [59.0, 1486.0], [59.1, 1487.0], [59.2, 1493.0], [59.3, 1494.0], [59.4, 1502.0], [59.5, 1503.0], [59.6, 1505.0], [59.7, 1505.0], [59.8, 1507.0], [59.9, 1507.0], [60.0, 1508.0], [60.1, 1508.0], [60.2, 1510.0], [60.3, 1510.0], [60.4, 1511.0], [60.5, 1520.0], [60.6, 1530.0], [60.7, 1533.0], [60.8, 1534.0], [60.9, 1537.0], [61.0, 1539.0], [61.1, 1541.0], [61.2, 1542.0], [61.3, 1544.0], [61.4, 1544.0], [61.5, 1544.0], [61.6, 1545.0], [61.7, 1552.0], [61.8, 1552.0], [61.9, 1555.0], [62.0, 1556.0], [62.1, 1558.0], [62.2, 1559.0], [62.3, 1561.0], [62.4, 1562.0], [62.5, 1566.0], [62.6, 1567.0], [62.7, 1569.0], [62.8, 1571.0], [62.9, 1574.0], [63.0, 1577.0], [63.1, 1579.0], [63.2, 1582.0], [63.3, 1582.0], [63.4, 1583.0], [63.5, 1586.0], [63.6, 1588.0], [63.7, 1590.0], [63.8, 1591.0], [63.9, 1591.0], [64.0, 1593.0], [64.1, 1596.0], [64.2, 1597.0], [64.3, 1598.0], [64.4, 1600.0], [64.5, 1600.0], [64.6, 1603.0], [64.7, 1604.0], [64.8, 1607.0], [64.9, 1608.0], [65.0, 1610.0], [65.1, 1612.0], [65.2, 1614.0], [65.3, 1618.0], [65.4, 1620.0], [65.5, 1623.0], [65.6, 1623.0], [65.7, 1626.0], [65.8, 1626.0], [65.9, 1629.0], [66.0, 1630.0], [66.1, 1632.0], [66.2, 1635.0], [66.3, 1639.0], [66.4, 1641.0], [66.5, 1649.0], [66.6, 1650.0], [66.7, 1652.0], [66.8, 1654.0], [66.9, 1654.0], [67.0, 1657.0], [67.1, 1669.0], [67.2, 1670.0], [67.3, 1670.0], [67.4, 1671.0], [67.5, 1673.0], [67.6, 1676.0], [67.7, 1677.0], [67.8, 1679.0], [67.9, 1685.0], [68.0, 1687.0], [68.1, 1688.0], [68.2, 1692.0], [68.3, 1694.0], [68.4, 1696.0], [68.5, 1697.0], [68.6, 1699.0], [68.7, 1701.0], [68.8, 1706.0], [68.9, 1714.0], [69.0, 1715.0], [69.1, 1717.0], [69.2, 1721.0], [69.3, 1736.0], [69.4, 1745.0], [69.5, 1749.0], [69.6, 1754.0], [69.7, 1758.0], [69.8, 1759.0], [69.9, 1760.0], [70.0, 1761.0], [70.1, 1763.0], [70.2, 1765.0], [70.3, 1769.0], [70.4, 1771.0], [70.5, 1772.0], [70.6, 1778.0], [70.7, 1779.0], [70.8, 1780.0], [70.9, 1781.0], [71.0, 1783.0], [71.1, 1784.0], [71.2, 1786.0], [71.3, 1789.0], [71.4, 1794.0], [71.5, 1796.0], [71.6, 1798.0], [71.7, 1801.0], [71.8, 1804.0], [71.9, 1805.0], [72.0, 1806.0], [72.1, 1806.0], [72.2, 1814.0], [72.3, 1815.0], [72.4, 1825.0], [72.5, 1826.0], [72.6, 1828.0], [72.7, 1829.0], [72.8, 1832.0], [72.9, 1836.0], [73.0, 1837.0], [73.1, 1840.0], [73.2, 1842.0], [73.3, 1845.0], [73.4, 1846.0], [73.5, 1849.0], [73.6, 1851.0], [73.7, 1855.0], [73.8, 1856.0], [73.9, 1857.0], [74.0, 1859.0], [74.1, 1861.0], [74.2, 1861.0], [74.3, 1866.0], [74.4, 1866.0], [74.5, 1875.0], [74.6, 1876.0], [74.7, 1889.0], [74.8, 1889.0], [74.9, 1892.0], [75.0, 1892.0], [75.1, 1897.0], [75.2, 1906.0], [75.3, 1908.0], [75.4, 1913.0], [75.5, 1914.0], [75.6, 1917.0], [75.7, 1917.0], [75.8, 1920.0], [75.9, 1921.0], [76.0, 1924.0], [76.1, 1925.0], [76.2, 1927.0], [76.3, 1930.0], [76.4, 1934.0], [76.5, 1936.0], [76.6, 1941.0], [76.7, 1942.0], [76.8, 1944.0], [76.9, 1944.0], [77.0, 1950.0], [77.1, 1955.0], [77.2, 1957.0], [77.3, 1960.0], [77.4, 1961.0], [77.5, 1965.0], [77.6, 1966.0], [77.7, 1967.0], [77.8, 1968.0], [77.9, 1973.0], [78.0, 1974.0], [78.1, 1975.0], [78.2, 1976.0], [78.3, 1977.0], [78.4, 1978.0], [78.5, 1979.0], [78.6, 1979.0], [78.7, 1981.0], [78.8, 1981.0], [78.9, 1981.0], [79.0, 1984.0], [79.1, 1985.0], [79.2, 1987.0], [79.3, 1987.0], [79.4, 1988.0], [79.5, 1988.0], [79.6, 1988.0], [79.7, 1990.0], [79.8, 1991.0], [79.9, 1994.0], [80.0, 1996.0], [80.1, 1997.0], [80.2, 2000.0], [80.3, 2001.0], [80.4, 2001.0], [80.5, 2001.0], [80.6, 2002.0], [80.7, 2002.0], [80.8, 2003.0], [80.9, 2003.0], [81.0, 2006.0], [81.1, 2008.0], [81.2, 2008.0], [81.3, 2014.0], [81.4, 2018.0], [81.5, 2023.0], [81.6, 2026.0], [81.7, 2028.0], [81.8, 2029.0], [81.9, 2031.0], [82.0, 2034.0], [82.1, 2034.0], [82.2, 2038.0], [82.3, 2042.0], [82.4, 2045.0], [82.5, 2047.0], [82.6, 2048.0], [82.7, 2053.0], [82.8, 2054.0], [82.9, 2061.0], [83.0, 2062.0], [83.1, 2065.0], [83.2, 2076.0], [83.3, 2078.0], [83.4, 2079.0], [83.5, 2080.0], [83.6, 2083.0], [83.7, 2085.0], [83.8, 2090.0], [83.9, 2091.0], [84.0, 2098.0], [84.1, 2107.0], [84.2, 2116.0], [84.3, 2118.0], [84.4, 2120.0], [84.5, 2121.0], [84.6, 2125.0], [84.7, 2126.0], [84.8, 2127.0], [84.9, 2132.0], [85.0, 2134.0], [85.1, 2134.0], [85.2, 2155.0], [85.3, 2157.0], [85.4, 2159.0], [85.5, 2169.0], [85.6, 2169.0], [85.7, 2181.0], [85.8, 2197.0], [85.9, 2201.0], [86.0, 2210.0], [86.1, 2231.0], [86.2, 2236.0], [86.3, 2239.0], [86.4, 2240.0], [86.5, 2290.0], [86.6, 2308.0], [86.7, 2324.0], [86.8, 2329.0], [86.9, 2340.0], [87.0, 2350.0], [87.1, 2364.0], [87.2, 2366.0], [87.3, 2394.0], [87.4, 2397.0], [87.5, 2409.0], [87.6, 2445.0], [87.7, 2466.0], [87.8, 2480.0], [87.9, 2481.0], [88.0, 2538.0], [88.1, 2551.0], [88.2, 2557.0], [88.3, 2582.0], [88.4, 2594.0], [88.5, 2607.0], [88.6, 2660.0], [88.7, 2664.0], [88.8, 2681.0], [88.9, 2684.0], [89.0, 2706.0], [89.1, 2732.0], [89.2, 2767.0], [89.3, 2767.0], [89.4, 2771.0], [89.5, 2787.0], [89.6, 2792.0], [89.7, 2828.0], [89.8, 2868.0], [89.9, 2874.0], [90.0, 2886.0], [90.1, 2903.0], [90.2, 2910.0], [90.3, 2918.0], [90.4, 2929.0], [90.5, 2966.0], [90.6, 2980.0], [90.7, 2995.0], [90.8, 3020.0], [90.9, 3034.0], [91.0, 3040.0], [91.1, 3057.0], [91.2, 3096.0], [91.3, 3130.0], [91.4, 3161.0], [91.5, 3175.0], [91.6, 3178.0], [91.7, 3214.0], [91.8, 3260.0], [91.9, 3265.0], [92.0, 3277.0], [92.1, 3278.0], [92.2, 3307.0], [92.3, 3316.0], [92.4, 3401.0], [92.5, 3419.0], [92.6, 3480.0], [92.7, 3482.0], [92.8, 3608.0], [92.9, 3625.0], [93.0, 3638.0], [93.1, 3688.0], [93.2, 3721.0], [93.3, 3723.0], [93.4, 3819.0], [93.5, 3910.0], [93.6, 3941.0], [93.7, 4043.0], [93.8, 4071.0], [93.9, 4121.0], [94.0, 4153.0], [94.1, 4188.0], [94.2, 4188.0], [94.3, 4254.0], [94.4, 4272.0], [94.5, 4317.0], [94.6, 4327.0], [94.7, 4467.0], [94.8, 4493.0], [94.9, 4590.0], [95.0, 4596.0], [95.1, 4935.0], [95.2, 5058.0], [95.3, 5126.0], [95.4, 5207.0], [95.5, 5247.0], [95.6, 5326.0], [95.7, 5380.0], [95.8, 5424.0], [95.9, 5689.0], [96.0, 5812.0], [96.1, 5972.0], [96.2, 6307.0], [96.3, 8227.0], [96.4, 8510.0], [96.5, 8874.0], [96.6, 9058.0], [96.7, 9377.0], [96.8, 9939.0], [96.9, 10588.0], [97.0, 17325.0], [97.1, 17714.0], [97.2, 22089.0], [97.3, 22174.0], [97.4, 22266.0], [97.5, 22277.0], [97.6, 22314.0], [97.7, 22319.0], [97.8, 22336.0], [97.9, 22337.0], [98.0, 22392.0], [98.1, 22416.0], [98.2, 22437.0], [98.3, 22451.0], [98.4, 22467.0], [98.5, 22515.0], [98.6, 22556.0], [98.7, 22648.0], [98.8, 22691.0], [98.9, 22699.0], [99.0, 22756.0], [99.1, 22887.0], [99.2, 22994.0], [99.3, 23036.0], [99.4, 23048.0], [99.5, 23111.0], [99.6, 23284.0], [99.7, 23570.0], [99.8, 23585.0], [99.9, 27264.0]], "isOverall": false, "label": "api/scholarships/rqms/submit", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 229.0, "series": [{"data": [[600.0, 24.0], [700.0, 20.0], [800.0, 18.0], [900.0, 25.0], [1000.0, 68.0], [1100.0, 118.0], [1200.0, 229.0], [1300.0, 227.0], [1400.0, 83.0], [1500.0, 77.0], [1600.0, 65.0], [1700.0, 46.0], [1800.0, 53.0], [1900.0, 77.0], [2000.0, 59.0], [2100.0, 27.0], [2300.0, 13.0], [2200.0, 11.0], [2400.0, 8.0], [2500.0, 8.0], [2600.0, 8.0], [2700.0, 10.0], [2800.0, 6.0], [2900.0, 11.0], [3000.0, 7.0], [3100.0, 6.0], [3200.0, 9.0], [3300.0, 3.0], [3400.0, 6.0], [3600.0, 5.0], [3700.0, 3.0], [3800.0, 2.0], [3900.0, 3.0], [4000.0, 4.0], [4300.0, 3.0], [4200.0, 4.0], [4100.0, 5.0], [4500.0, 3.0], [4400.0, 2.0], [4700.0, 1.0], [4900.0, 1.0], [5100.0, 1.0], [5000.0, 2.0], [5200.0, 3.0], [5300.0, 3.0], [5400.0, 1.0], [5500.0, 1.0], [5600.0, 1.0], [5800.0, 1.0], [5700.0, 1.0], [5900.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [8400.0, 1.0], [8200.0, 1.0], [8500.0, 1.0], [8900.0, 1.0], [8800.0, 1.0], [9000.0, 1.0], [9300.0, 1.0], [9600.0, 1.0], [9900.0, 1.0], [10500.0, 1.0], [16600.0, 1.0], [17300.0, 1.0], [17700.0, 1.0], [22500.0, 3.0], [22200.0, 3.0], [22400.0, 7.0], [22300.0, 7.0], [22000.0, 1.0], [21800.0, 1.0], [22100.0, 2.0], [22600.0, 4.0], [23000.0, 4.0], [23500.0, 2.0], [22900.0, 1.0], [22700.0, 1.0], [23200.0, 1.0], [23100.0, 1.0], [22800.0, 2.0], [23300.0, 1.0], [24900.0, 1.0], [27200.0, 1.0], [27900.0, 1.0], [200.0, 15.0], [300.0, 23.0], [400.0, 24.0], [500.0, 30.0]], "isOverall": false, "label": "api/scholarships/rqms/submit", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 27900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1523.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1523.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 6.732620320855614, "minX": 1.76878794E12, "maxY": 20.0, "series": [{"data": [[1.76878806E12, 20.0], [1.768788E12, 19.816287878787875], [1.76878812E12, 19.41025641025641], [1.76878794E12, 6.732620320855614]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76878812E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 570.6923076923076, "minX": 1.0, "maxY": 7432.333333333333, "series": [{"data": [[2.0, 860.1428571428571], [8.0, 2354.777777777778], [9.0, 3118.8], [10.0, 2934.0], [11.0, 1717.3333333333335], [3.0, 729.5714285714287], [12.0, 5082.666666666667], [13.0, 2085.25], [14.0, 7432.333333333333], [15.0, 4004.0], [1.0, 697.25], [4.0, 570.6923076923076], [16.0, 6405.6], [17.0, 5483.2], [18.0, 2833.8965517241377], [19.0, 1275.666666666667], [5.0, 656.2499999999999], [20.0, 2344.112171837706], [6.0, 659.0666666666667], [7.0, 1013.5217391304348]], "isOverall": false, "label": "api/scholarships/rqms/submit", "isController": false}, {"data": [[18.187664041994754, 2263.175853018379]], "isOverall": false, "label": "api/scholarships/rqms/submit-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3839.733333333333, "minX": 1.76878794E12, "maxY": 20768.966666666667, "series": [{"data": [[1.76878806E12, 19504.516666666666], [1.768788E12, 20768.966666666667], [1.76878812E12, 11966.483333333334], [1.76878794E12, 6155.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76878806E12, 10205.066666666668], [1.768788E12, 10841.6], [1.76878812E12, 6406.4], [1.76878794E12, 3839.733333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76878812E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1689.6631016042777, "minX": 1.76878794E12, "maxY": 2430.3237179487196, "series": [{"data": [[1.76878806E12, 2386.8752515090564], [1.768788E12, 2251.089015151516], [1.76878812E12, 2430.3237179487196], [1.76878794E12, 1689.6631016042777]], "isOverall": false, "label": "api/scholarships/rqms/submit", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76878812E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1678.5561497326203, "minX": 1.76878794E12, "maxY": 2429.9198717948693, "series": [{"data": [[1.76878806E12, 2386.605633802815], [1.768788E12, 2250.645833333336], [1.76878812E12, 2429.9198717948693], [1.76878794E12, 1678.5561497326203]], "isOverall": false, "label": "api/scholarships/rqms/submit", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76878812E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 122.35294117647055, "minX": 1.76878794E12, "maxY": 816.7605633802813, "series": [{"data": [[1.76878806E12, 816.7605633802813], [1.768788E12, 738.2102272727275], [1.76878812E12, 477.7435897435898], [1.76878794E12, 122.35294117647055]], "isOverall": false, "label": "api/scholarships/rqms/submit", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76878812E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1068.0, "minX": 1.76878794E12, "maxY": 1068.0, "series": [{"data": [[1.76878794E12, 1068.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76878794E12, 1068.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76878794E12, 1068.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76878794E12, 1068.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76878794E12, 1068.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76878794E12, 1068.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76878794E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1068.0, "minX": 1.0, "maxY": 2664.0, "series": [{"data": [[2.0, 1068.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1828.0], [8.0, 1415.0], [9.0, 1290.0], [10.0, 1344.0], [11.0, 1330.0], [3.0, 2641.0], [12.0, 1327.5], [13.0, 1444.0], [14.0, 1993.0], [4.0, 1168.0], [1.0, 2664.0], [16.0, 1990.5], [17.0, 2000.0], [5.0, 1322.0], [6.0, 1284.0], [7.0, 1375.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1060.0, "minX": 1.0, "maxY": 2664.0, "series": [{"data": [[2.0, 1060.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1828.0], [8.0, 1415.0], [9.0, 1290.0], [10.0, 1343.5], [11.0, 1330.0], [3.0, 2640.5], [12.0, 1327.0], [13.0, 1444.0], [14.0, 1993.0], [4.0, 1168.0], [1.0, 2664.0], [16.0, 1990.5], [17.0, 2000.0], [5.0, 1322.0], [6.0, 1281.0], [7.0, 1375.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.4, "minX": 1.76878794E12, "maxY": 8.85, "series": [{"data": [[1.76878806E12, 8.283333333333333], [1.768788E12, 8.85], [1.76878812E12, 4.866666666666666], [1.76878794E12, 3.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76878812E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76878794E12, "maxY": 8.3, "series": [{"data": [[1.76878794E12, 0.016666666666666666]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.76878806E12, 0.5], [1.768788E12, 0.5], [1.76878812E12, 0.5], [1.76878794E12, 0.9666666666666667]], "isOverall": false, "label": "422", "isController": false}, {"data": [[1.76878806E12, 7.783333333333333], [1.768788E12, 8.3], [1.76878812E12, 4.7], [1.76878794E12, 2.1333333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76878812E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76878794E12, "maxY": 8.8, "series": [{"data": [[1.76878794E12, 0.016666666666666666]], "isOverall": false, "label": "api/scholarships/rqms/submit-success", "isController": false}, {"data": [[1.76878806E12, 8.283333333333333], [1.768788E12, 8.8], [1.76878812E12, 5.2], [1.76878794E12, 3.1]], "isOverall": false, "label": "api/scholarships/rqms/submit-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76878812E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76878794E12, "maxY": 8.8, "series": [{"data": [[1.76878794E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76878806E12, 8.283333333333333], [1.768788E12, 8.8], [1.76878812E12, 5.2], [1.76878794E12, 3.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76878812E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

