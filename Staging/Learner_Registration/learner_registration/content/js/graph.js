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
        data: {"result": {"minY": 238.0, "minX": 0.0, "maxY": 24520.0, "series": [{"data": [[0.0, 238.0], [0.1, 238.0], [0.2, 239.0], [0.3, 240.0], [0.4, 242.0], [0.5, 243.0], [0.6, 245.0], [0.7, 246.0], [0.8, 246.0], [0.9, 250.0], [1.0, 254.0], [1.1, 254.0], [1.2, 255.0], [1.3, 264.0], [1.4, 270.0], [1.5, 276.0], [1.6, 277.0], [1.7, 298.0], [1.8, 306.0], [1.9, 320.0], [2.0, 323.0], [2.1, 324.0], [2.2, 325.0], [2.3, 333.0], [2.4, 338.0], [2.5, 343.0], [2.6, 349.0], [2.7, 350.0], [2.8, 355.0], [2.9, 361.0], [3.0, 365.0], [3.1, 368.0], [3.2, 371.0], [3.3, 376.0], [3.4, 383.0], [3.5, 385.0], [3.6, 389.0], [3.7, 392.0], [3.8, 396.0], [3.9, 401.0], [4.0, 415.0], [4.1, 425.0], [4.2, 428.0], [4.3, 428.0], [4.4, 434.0], [4.5, 440.0], [4.6, 449.0], [4.7, 458.0], [4.8, 458.0], [4.9, 462.0], [5.0, 463.0], [5.1, 464.0], [5.2, 466.0], [5.3, 466.0], [5.4, 468.0], [5.5, 481.0], [5.6, 482.0], [5.7, 485.0], [5.8, 486.0], [5.9, 488.0], [6.0, 489.0], [6.1, 491.0], [6.2, 500.0], [6.3, 506.0], [6.4, 510.0], [6.5, 517.0], [6.6, 526.0], [6.7, 528.0], [6.8, 533.0], [6.9, 536.0], [7.0, 569.0], [7.1, 570.0], [7.2, 580.0], [7.3, 593.0], [7.4, 600.0], [7.5, 604.0], [7.6, 613.0], [7.7, 616.0], [7.8, 632.0], [7.9, 648.0], [8.0, 660.0], [8.1, 680.0], [8.2, 687.0], [8.3, 703.0], [8.4, 715.0], [8.5, 722.0], [8.6, 738.0], [8.7, 747.0], [8.8, 749.0], [8.9, 758.0], [9.0, 765.0], [9.1, 774.0], [9.2, 780.0], [9.3, 785.0], [9.4, 813.0], [9.5, 818.0], [9.6, 825.0], [9.7, 829.0], [9.8, 832.0], [9.9, 840.0], [10.0, 844.0], [10.1, 846.0], [10.2, 868.0], [10.3, 872.0], [10.4, 872.0], [10.5, 877.0], [10.6, 878.0], [10.7, 880.0], [10.8, 885.0], [10.9, 886.0], [11.0, 890.0], [11.1, 897.0], [11.2, 898.0], [11.3, 899.0], [11.4, 900.0], [11.5, 904.0], [11.6, 912.0], [11.7, 918.0], [11.8, 922.0], [11.9, 930.0], [12.0, 931.0], [12.1, 934.0], [12.2, 939.0], [12.3, 950.0], [12.4, 957.0], [12.5, 959.0], [12.6, 963.0], [12.7, 964.0], [12.8, 967.0], [12.9, 970.0], [13.0, 971.0], [13.1, 977.0], [13.2, 982.0], [13.3, 985.0], [13.4, 992.0], [13.5, 996.0], [13.6, 1000.0], [13.7, 1001.0], [13.8, 1003.0], [13.9, 1005.0], [14.0, 1006.0], [14.1, 1008.0], [14.2, 1010.0], [14.3, 1011.0], [14.4, 1013.0], [14.5, 1015.0], [14.6, 1016.0], [14.7, 1019.0], [14.8, 1027.0], [14.9, 1030.0], [15.0, 1033.0], [15.1, 1034.0], [15.2, 1041.0], [15.3, 1041.0], [15.4, 1042.0], [15.5, 1047.0], [15.6, 1052.0], [15.7, 1054.0], [15.8, 1059.0], [15.9, 1063.0], [16.0, 1065.0], [16.1, 1067.0], [16.2, 1067.0], [16.3, 1070.0], [16.4, 1072.0], [16.5, 1072.0], [16.6, 1075.0], [16.7, 1076.0], [16.8, 1081.0], [16.9, 1082.0], [17.0, 1083.0], [17.1, 1085.0], [17.2, 1086.0], [17.3, 1092.0], [17.4, 1097.0], [17.5, 1099.0], [17.6, 1101.0], [17.7, 1106.0], [17.8, 1107.0], [17.9, 1108.0], [18.0, 1108.0], [18.1, 1110.0], [18.2, 1111.0], [18.3, 1115.0], [18.4, 1116.0], [18.5, 1118.0], [18.6, 1120.0], [18.7, 1120.0], [18.8, 1120.0], [18.9, 1124.0], [19.0, 1135.0], [19.1, 1135.0], [19.2, 1141.0], [19.3, 1143.0], [19.4, 1143.0], [19.5, 1148.0], [19.6, 1149.0], [19.7, 1151.0], [19.8, 1154.0], [19.9, 1154.0], [20.0, 1156.0], [20.1, 1159.0], [20.2, 1161.0], [20.3, 1163.0], [20.4, 1164.0], [20.5, 1166.0], [20.6, 1167.0], [20.7, 1167.0], [20.8, 1168.0], [20.9, 1170.0], [21.0, 1171.0], [21.1, 1172.0], [21.2, 1173.0], [21.3, 1176.0], [21.4, 1179.0], [21.5, 1181.0], [21.6, 1183.0], [21.7, 1184.0], [21.8, 1185.0], [21.9, 1189.0], [22.0, 1189.0], [22.1, 1190.0], [22.2, 1192.0], [22.3, 1192.0], [22.4, 1192.0], [22.5, 1193.0], [22.6, 1194.0], [22.7, 1195.0], [22.8, 1195.0], [22.9, 1197.0], [23.0, 1198.0], [23.1, 1198.0], [23.2, 1199.0], [23.3, 1199.0], [23.4, 1201.0], [23.5, 1203.0], [23.6, 1203.0], [23.7, 1206.0], [23.8, 1206.0], [23.9, 1207.0], [24.0, 1208.0], [24.1, 1208.0], [24.2, 1209.0], [24.3, 1210.0], [24.4, 1210.0], [24.5, 1212.0], [24.6, 1212.0], [24.7, 1213.0], [24.8, 1215.0], [24.9, 1216.0], [25.0, 1216.0], [25.1, 1217.0], [25.2, 1217.0], [25.3, 1221.0], [25.4, 1222.0], [25.5, 1224.0], [25.6, 1225.0], [25.7, 1225.0], [25.8, 1226.0], [25.9, 1226.0], [26.0, 1226.0], [26.1, 1227.0], [26.2, 1227.0], [26.3, 1227.0], [26.4, 1228.0], [26.5, 1228.0], [26.6, 1230.0], [26.7, 1230.0], [26.8, 1231.0], [26.9, 1232.0], [27.0, 1233.0], [27.1, 1234.0], [27.2, 1234.0], [27.3, 1236.0], [27.4, 1236.0], [27.5, 1236.0], [27.6, 1236.0], [27.7, 1238.0], [27.8, 1239.0], [27.9, 1240.0], [28.0, 1241.0], [28.1, 1242.0], [28.2, 1242.0], [28.3, 1243.0], [28.4, 1245.0], [28.5, 1245.0], [28.6, 1246.0], [28.7, 1246.0], [28.8, 1247.0], [28.9, 1248.0], [29.0, 1250.0], [29.1, 1250.0], [29.2, 1250.0], [29.3, 1251.0], [29.4, 1251.0], [29.5, 1252.0], [29.6, 1252.0], [29.7, 1252.0], [29.8, 1253.0], [29.9, 1254.0], [30.0, 1254.0], [30.1, 1255.0], [30.2, 1255.0], [30.3, 1256.0], [30.4, 1256.0], [30.5, 1257.0], [30.6, 1257.0], [30.7, 1257.0], [30.8, 1258.0], [30.9, 1259.0], [31.0, 1259.0], [31.1, 1259.0], [31.2, 1260.0], [31.3, 1260.0], [31.4, 1261.0], [31.5, 1261.0], [31.6, 1262.0], [31.7, 1263.0], [31.8, 1264.0], [31.9, 1264.0], [32.0, 1266.0], [32.1, 1267.0], [32.2, 1268.0], [32.3, 1268.0], [32.4, 1268.0], [32.5, 1269.0], [32.6, 1270.0], [32.7, 1271.0], [32.8, 1272.0], [32.9, 1273.0], [33.0, 1274.0], [33.1, 1274.0], [33.2, 1274.0], [33.3, 1276.0], [33.4, 1276.0], [33.5, 1276.0], [33.6, 1278.0], [33.7, 1279.0], [33.8, 1280.0], [33.9, 1280.0], [34.0, 1281.0], [34.1, 1281.0], [34.2, 1283.0], [34.3, 1283.0], [34.4, 1284.0], [34.5, 1286.0], [34.6, 1287.0], [34.7, 1287.0], [34.8, 1288.0], [34.9, 1289.0], [35.0, 1289.0], [35.1, 1289.0], [35.2, 1290.0], [35.3, 1290.0], [35.4, 1291.0], [35.5, 1291.0], [35.6, 1294.0], [35.7, 1294.0], [35.8, 1295.0], [35.9, 1296.0], [36.0, 1297.0], [36.1, 1297.0], [36.2, 1298.0], [36.3, 1298.0], [36.4, 1299.0], [36.5, 1300.0], [36.6, 1300.0], [36.7, 1300.0], [36.8, 1301.0], [36.9, 1302.0], [37.0, 1303.0], [37.1, 1303.0], [37.2, 1305.0], [37.3, 1305.0], [37.4, 1305.0], [37.5, 1306.0], [37.6, 1306.0], [37.7, 1307.0], [37.8, 1307.0], [37.9, 1307.0], [38.0, 1308.0], [38.1, 1309.0], [38.2, 1309.0], [38.3, 1311.0], [38.4, 1311.0], [38.5, 1311.0], [38.6, 1313.0], [38.7, 1313.0], [38.8, 1313.0], [38.9, 1314.0], [39.0, 1315.0], [39.1, 1315.0], [39.2, 1315.0], [39.3, 1316.0], [39.4, 1317.0], [39.5, 1317.0], [39.6, 1318.0], [39.7, 1318.0], [39.8, 1319.0], [39.9, 1319.0], [40.0, 1319.0], [40.1, 1320.0], [40.2, 1322.0], [40.3, 1323.0], [40.4, 1325.0], [40.5, 1326.0], [40.6, 1326.0], [40.7, 1329.0], [40.8, 1330.0], [40.9, 1330.0], [41.0, 1331.0], [41.1, 1332.0], [41.2, 1333.0], [41.3, 1333.0], [41.4, 1334.0], [41.5, 1334.0], [41.6, 1334.0], [41.7, 1336.0], [41.8, 1336.0], [41.9, 1337.0], [42.0, 1338.0], [42.1, 1338.0], [42.2, 1339.0], [42.3, 1339.0], [42.4, 1339.0], [42.5, 1340.0], [42.6, 1341.0], [42.7, 1342.0], [42.8, 1344.0], [42.9, 1344.0], [43.0, 1345.0], [43.1, 1346.0], [43.2, 1346.0], [43.3, 1346.0], [43.4, 1347.0], [43.5, 1348.0], [43.6, 1348.0], [43.7, 1348.0], [43.8, 1349.0], [43.9, 1351.0], [44.0, 1352.0], [44.1, 1353.0], [44.2, 1354.0], [44.3, 1356.0], [44.4, 1356.0], [44.5, 1356.0], [44.6, 1357.0], [44.7, 1358.0], [44.8, 1358.0], [44.9, 1359.0], [45.0, 1360.0], [45.1, 1361.0], [45.2, 1361.0], [45.3, 1362.0], [45.4, 1363.0], [45.5, 1363.0], [45.6, 1363.0], [45.7, 1364.0], [45.8, 1365.0], [45.9, 1366.0], [46.0, 1368.0], [46.1, 1368.0], [46.2, 1370.0], [46.3, 1370.0], [46.4, 1371.0], [46.5, 1371.0], [46.6, 1372.0], [46.7, 1373.0], [46.8, 1375.0], [46.9, 1375.0], [47.0, 1375.0], [47.1, 1377.0], [47.2, 1377.0], [47.3, 1380.0], [47.4, 1380.0], [47.5, 1383.0], [47.6, 1385.0], [47.7, 1385.0], [47.8, 1387.0], [47.9, 1387.0], [48.0, 1389.0], [48.1, 1391.0], [48.2, 1393.0], [48.3, 1394.0], [48.4, 1395.0], [48.5, 1397.0], [48.6, 1401.0], [48.7, 1402.0], [48.8, 1404.0], [48.9, 1405.0], [49.0, 1405.0], [49.1, 1408.0], [49.2, 1409.0], [49.3, 1410.0], [49.4, 1412.0], [49.5, 1412.0], [49.6, 1416.0], [49.7, 1416.0], [49.8, 1418.0], [49.9, 1420.0], [50.0, 1421.0], [50.1, 1421.0], [50.2, 1423.0], [50.3, 1423.0], [50.4, 1425.0], [50.5, 1428.0], [50.6, 1429.0], [50.7, 1433.0], [50.8, 1434.0], [50.9, 1438.0], [51.0, 1441.0], [51.1, 1443.0], [51.2, 1444.0], [51.3, 1445.0], [51.4, 1448.0], [51.5, 1451.0], [51.6, 1453.0], [51.7, 1454.0], [51.8, 1458.0], [51.9, 1459.0], [52.0, 1462.0], [52.1, 1465.0], [52.2, 1466.0], [52.3, 1471.0], [52.4, 1471.0], [52.5, 1474.0], [52.6, 1482.0], [52.7, 1482.0], [52.8, 1484.0], [52.9, 1489.0], [53.0, 1490.0], [53.1, 1494.0], [53.2, 1499.0], [53.3, 1503.0], [53.4, 1504.0], [53.5, 1506.0], [53.6, 1507.0], [53.7, 1512.0], [53.8, 1513.0], [53.9, 1517.0], [54.0, 1520.0], [54.1, 1523.0], [54.2, 1525.0], [54.3, 1527.0], [54.4, 1528.0], [54.5, 1530.0], [54.6, 1533.0], [54.7, 1535.0], [54.8, 1535.0], [54.9, 1537.0], [55.0, 1538.0], [55.1, 1540.0], [55.2, 1541.0], [55.3, 1545.0], [55.4, 1548.0], [55.5, 1554.0], [55.6, 1557.0], [55.7, 1562.0], [55.8, 1563.0], [55.9, 1563.0], [56.0, 1571.0], [56.1, 1573.0], [56.2, 1574.0], [56.3, 1578.0], [56.4, 1580.0], [56.5, 1583.0], [56.6, 1584.0], [56.7, 1587.0], [56.8, 1594.0], [56.9, 1595.0], [57.0, 1597.0], [57.1, 1607.0], [57.2, 1609.0], [57.3, 1615.0], [57.4, 1618.0], [57.5, 1620.0], [57.6, 1629.0], [57.7, 1632.0], [57.8, 1635.0], [57.9, 1641.0], [58.0, 1643.0], [58.1, 1647.0], [58.2, 1656.0], [58.3, 1660.0], [58.4, 1665.0], [58.5, 1668.0], [58.6, 1672.0], [58.7, 1676.0], [58.8, 1682.0], [58.9, 1689.0], [59.0, 1690.0], [59.1, 1705.0], [59.2, 1714.0], [59.3, 1717.0], [59.4, 1722.0], [59.5, 1730.0], [59.6, 1733.0], [59.7, 1741.0], [59.8, 1742.0], [59.9, 1748.0], [60.0, 1752.0], [60.1, 1755.0], [60.2, 1761.0], [60.3, 1768.0], [60.4, 1771.0], [60.5, 1781.0], [60.6, 1783.0], [60.7, 1793.0], [60.8, 1797.0], [60.9, 1799.0], [61.0, 1800.0], [61.1, 1804.0], [61.2, 1805.0], [61.3, 1810.0], [61.4, 1812.0], [61.5, 1815.0], [61.6, 1817.0], [61.7, 1817.0], [61.8, 1824.0], [61.9, 1825.0], [62.0, 1827.0], [62.1, 1829.0], [62.2, 1830.0], [62.3, 1835.0], [62.4, 1838.0], [62.5, 1842.0], [62.6, 1842.0], [62.7, 1847.0], [62.8, 1855.0], [62.9, 1856.0], [63.0, 1856.0], [63.1, 1857.0], [63.2, 1860.0], [63.3, 1861.0], [63.4, 1863.0], [63.5, 1865.0], [63.6, 1866.0], [63.7, 1872.0], [63.8, 1873.0], [63.9, 1875.0], [64.0, 1877.0], [64.1, 1881.0], [64.2, 1888.0], [64.3, 1889.0], [64.4, 1892.0], [64.5, 1895.0], [64.6, 1895.0], [64.7, 1898.0], [64.8, 1901.0], [64.9, 1902.0], [65.0, 1908.0], [65.1, 1909.0], [65.2, 1911.0], [65.3, 1911.0], [65.4, 1912.0], [65.5, 1916.0], [65.6, 1917.0], [65.7, 1918.0], [65.8, 1921.0], [65.9, 1922.0], [66.0, 1922.0], [66.1, 1924.0], [66.2, 1925.0], [66.3, 1926.0], [66.4, 1927.0], [66.5, 1929.0], [66.6, 1931.0], [66.7, 1933.0], [66.8, 1933.0], [66.9, 1934.0], [67.0, 1934.0], [67.1, 1936.0], [67.2, 1936.0], [67.3, 1937.0], [67.4, 1938.0], [67.5, 1939.0], [67.6, 1940.0], [67.7, 1941.0], [67.8, 1942.0], [67.9, 1942.0], [68.0, 1943.0], [68.1, 1943.0], [68.2, 1944.0], [68.3, 1945.0], [68.4, 1947.0], [68.5, 1947.0], [68.6, 1947.0], [68.7, 1948.0], [68.8, 1948.0], [68.9, 1950.0], [69.0, 1950.0], [69.1, 1951.0], [69.2, 1951.0], [69.3, 1952.0], [69.4, 1952.0], [69.5, 1953.0], [69.6, 1953.0], [69.7, 1955.0], [69.8, 1955.0], [69.9, 1956.0], [70.0, 1958.0], [70.1, 1959.0], [70.2, 1960.0], [70.3, 1961.0], [70.4, 1962.0], [70.5, 1963.0], [70.6, 1963.0], [70.7, 1964.0], [70.8, 1968.0], [70.9, 1968.0], [71.0, 1969.0], [71.1, 1970.0], [71.2, 1970.0], [71.3, 1972.0], [71.4, 1973.0], [71.5, 1974.0], [71.6, 1975.0], [71.7, 1975.0], [71.8, 1977.0], [71.9, 1977.0], [72.0, 1977.0], [72.1, 1978.0], [72.2, 1978.0], [72.3, 1978.0], [72.4, 1980.0], [72.5, 1980.0], [72.6, 1981.0], [72.7, 1981.0], [72.8, 1982.0], [72.9, 1984.0], [73.0, 1986.0], [73.1, 1987.0], [73.2, 1987.0], [73.3, 1987.0], [73.4, 1989.0], [73.5, 1990.0], [73.6, 1990.0], [73.7, 1990.0], [73.8, 1991.0], [73.9, 1992.0], [74.0, 1992.0], [74.1, 1992.0], [74.2, 1992.0], [74.3, 1993.0], [74.4, 1993.0], [74.5, 1994.0], [74.6, 1995.0], [74.7, 1995.0], [74.8, 1997.0], [74.9, 1998.0], [75.0, 1999.0], [75.1, 1999.0], [75.2, 2000.0], [75.3, 2001.0], [75.4, 2002.0], [75.5, 2003.0], [75.6, 2005.0], [75.7, 2005.0], [75.8, 2005.0], [75.9, 2006.0], [76.0, 2006.0], [76.1, 2008.0], [76.2, 2009.0], [76.3, 2010.0], [76.4, 2011.0], [76.5, 2011.0], [76.6, 2011.0], [76.7, 2011.0], [76.8, 2011.0], [76.9, 2012.0], [77.0, 2012.0], [77.1, 2013.0], [77.2, 2014.0], [77.3, 2014.0], [77.4, 2014.0], [77.5, 2015.0], [77.6, 2017.0], [77.7, 2021.0], [77.8, 2021.0], [77.9, 2021.0], [78.0, 2022.0], [78.1, 2023.0], [78.2, 2026.0], [78.3, 2027.0], [78.4, 2027.0], [78.5, 2029.0], [78.6, 2029.0], [78.7, 2029.0], [78.8, 2030.0], [78.9, 2030.0], [79.0, 2031.0], [79.1, 2033.0], [79.2, 2034.0], [79.3, 2035.0], [79.4, 2036.0], [79.5, 2036.0], [79.6, 2037.0], [79.7, 2037.0], [79.8, 2039.0], [79.9, 2039.0], [80.0, 2040.0], [80.1, 2040.0], [80.2, 2041.0], [80.3, 2042.0], [80.4, 2042.0], [80.5, 2043.0], [80.6, 2044.0], [80.7, 2044.0], [80.8, 2045.0], [80.9, 2047.0], [81.0, 2048.0], [81.1, 2049.0], [81.2, 2049.0], [81.3, 2050.0], [81.4, 2050.0], [81.5, 2051.0], [81.6, 2052.0], [81.7, 2053.0], [81.8, 2053.0], [81.9, 2053.0], [82.0, 2054.0], [82.1, 2054.0], [82.2, 2054.0], [82.3, 2055.0], [82.4, 2057.0], [82.5, 2057.0], [82.6, 2058.0], [82.7, 2059.0], [82.8, 2060.0], [82.9, 2061.0], [83.0, 2063.0], [83.1, 2063.0], [83.2, 2064.0], [83.3, 2065.0], [83.4, 2066.0], [83.5, 2067.0], [83.6, 2067.0], [83.7, 2067.0], [83.8, 2068.0], [83.9, 2069.0], [84.0, 2069.0], [84.1, 2070.0], [84.2, 2071.0], [84.3, 2072.0], [84.4, 2073.0], [84.5, 2074.0], [84.6, 2075.0], [84.7, 2077.0], [84.8, 2080.0], [84.9, 2081.0], [85.0, 2083.0], [85.1, 2083.0], [85.2, 2084.0], [85.3, 2085.0], [85.4, 2086.0], [85.5, 2087.0], [85.6, 2087.0], [85.7, 2089.0], [85.8, 2089.0], [85.9, 2091.0], [86.0, 2092.0], [86.1, 2093.0], [86.2, 2096.0], [86.3, 2096.0], [86.4, 2100.0], [86.5, 2104.0], [86.6, 2104.0], [86.7, 2107.0], [86.8, 2108.0], [86.9, 2109.0], [87.0, 2113.0], [87.1, 2114.0], [87.2, 2117.0], [87.3, 2126.0], [87.4, 2126.0], [87.5, 2137.0], [87.6, 2137.0], [87.7, 2140.0], [87.8, 2148.0], [87.9, 2152.0], [88.0, 2163.0], [88.1, 2163.0], [88.2, 2166.0], [88.3, 2172.0], [88.4, 2174.0], [88.5, 2177.0], [88.6, 2179.0], [88.7, 2184.0], [88.8, 2189.0], [88.9, 2191.0], [89.0, 2194.0], [89.1, 2206.0], [89.2, 2207.0], [89.3, 2213.0], [89.4, 2221.0], [89.5, 2225.0], [89.6, 2235.0], [89.7, 2236.0], [89.8, 2256.0], [89.9, 2268.0], [90.0, 2271.0], [90.1, 2272.0], [90.2, 2290.0], [90.3, 2295.0], [90.4, 2302.0], [90.5, 2305.0], [90.6, 2309.0], [90.7, 2316.0], [90.8, 2321.0], [90.9, 2331.0], [91.0, 2351.0], [91.1, 2352.0], [91.2, 2358.0], [91.3, 2360.0], [91.4, 2378.0], [91.5, 2390.0], [91.6, 2425.0], [91.7, 2456.0], [91.8, 2476.0], [91.9, 2532.0], [92.0, 2560.0], [92.1, 2567.0], [92.2, 2576.0], [92.3, 2640.0], [92.4, 2693.0], [92.5, 2703.0], [92.6, 2710.0], [92.7, 2757.0], [92.8, 2812.0], [92.9, 2813.0], [93.0, 2829.0], [93.1, 2856.0], [93.2, 2860.0], [93.3, 2873.0], [93.4, 2881.0], [93.5, 2884.0], [93.6, 2905.0], [93.7, 2909.0], [93.8, 2944.0], [93.9, 2952.0], [94.0, 2959.0], [94.1, 3021.0], [94.2, 3073.0], [94.3, 3100.0], [94.4, 3268.0], [94.5, 3277.0], [94.6, 3395.0], [94.7, 3412.0], [94.8, 3443.0], [94.9, 3538.0], [95.0, 3549.0], [95.1, 3723.0], [95.2, 3874.0], [95.3, 3935.0], [95.4, 3980.0], [95.5, 4108.0], [95.6, 4142.0], [95.7, 4218.0], [95.8, 4229.0], [95.9, 4389.0], [96.0, 4458.0], [96.1, 4458.0], [96.2, 4717.0], [96.3, 4737.0], [96.4, 4798.0], [96.5, 4892.0], [96.6, 4923.0], [96.7, 5051.0], [96.8, 5502.0], [96.9, 6031.0], [97.0, 6751.0], [97.1, 7082.0], [97.2, 7357.0], [97.3, 8668.0], [97.4, 8677.0], [97.5, 21494.0], [97.6, 21684.0], [97.7, 21922.0], [97.8, 22122.0], [97.9, 22166.0], [98.0, 22260.0], [98.1, 22320.0], [98.2, 22334.0], [98.3, 22348.0], [98.4, 22367.0], [98.5, 22369.0], [98.6, 22405.0], [98.7, 22419.0], [98.8, 22473.0], [98.9, 22478.0], [99.0, 22482.0], [99.1, 22548.0], [99.2, 22565.0], [99.3, 22572.0], [99.4, 22645.0], [99.5, 22668.0], [99.6, 23129.0], [99.7, 23366.0], [99.8, 23831.0], [99.9, 24169.0]], "isOverall": false, "label": "/api/learner/registration", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 214.0, "series": [{"data": [[600.0, 14.0], [700.0, 17.0], [800.0, 33.0], [900.0, 36.0], [1000.0, 64.0], [1100.0, 94.0], [1200.0, 214.0], [1300.0, 196.0], [1400.0, 75.0], [1500.0, 62.0], [1600.0, 33.0], [1700.0, 31.0], [1800.0, 61.0], [1900.0, 169.0], [2000.0, 182.0], [2100.0, 43.0], [2300.0, 20.0], [2200.0, 21.0], [2400.0, 4.0], [2500.0, 7.0], [2600.0, 4.0], [2700.0, 5.0], [2800.0, 13.0], [2900.0, 8.0], [3000.0, 3.0], [3100.0, 2.0], [3300.0, 2.0], [3200.0, 2.0], [3400.0, 4.0], [3500.0, 3.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 3.0], [4100.0, 4.0], [4300.0, 1.0], [4200.0, 3.0], [4400.0, 3.0], [4500.0, 1.0], [4800.0, 2.0], [4700.0, 4.0], [4900.0, 1.0], [5000.0, 2.0], [5300.0, 1.0], [5500.0, 1.0], [6000.0, 1.0], [6300.0, 1.0], [6700.0, 1.0], [7000.0, 1.0], [7200.0, 1.0], [7300.0, 1.0], [7500.0, 1.0], [8600.0, 2.0], [21400.0, 2.0], [21600.0, 2.0], [21900.0, 2.0], [22500.0, 5.0], [22100.0, 2.0], [22200.0, 2.0], [22300.0, 9.0], [22400.0, 7.0], [23300.0, 2.0], [22600.0, 3.0], [22800.0, 1.0], [23100.0, 1.0], [23800.0, 2.0], [24500.0, 1.0], [24100.0, 1.0], [200.0, 28.0], [300.0, 34.0], [400.0, 38.0], [500.0, 20.0]], "isOverall": false, "label": "/api/learner/registration", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1621.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1621.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 16.42973523421589, "minX": 1.76887488E12, "maxY": 20.0, "series": [{"data": [[1.768875E12, 20.0], [1.76887506E12, 16.44230769230769], [1.76887488E12, 16.42973523421589], [1.76887494E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76887506E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1218.5185185185187, "minX": 2.0, "maxY": 8672.5, "series": [{"data": [[8.0, 6415.0], [2.0, 8672.5], [9.0, 1250.739130434782], [10.0, 1223.5769230769233], [11.0, 1218.5185185185187], [12.0, 1313.5172413793102], [3.0, 1535.0], [13.0, 1478.1851851851852], [14.0, 1530.6071428571431], [15.0, 1780.28], [16.0, 1583.0645161290317], [4.0, 1504.0], [17.0, 1742.2500000000002], [18.0, 1803.8666666666666], [19.0, 2186.620689655172], [20.0, 2246.1050613496923], [5.0, 1689.0], [6.0, 1444.0], [7.0, 1645.0]], "isOverall": false, "label": "/api/learner/registration", "isController": false}, {"data": [[18.805178791615287, 2133.751541307026]], "isOverall": false, "label": "/api/learner/registration-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2064.4, "minX": 1.76887488E12, "maxY": 21477.7, "series": [{"data": [[1.768875E12, 21167.683333333334], [1.76887506E12, 2117.3], [1.76887488E12, 19260.933333333334], [1.76887494E12, 21289.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.768875E12, 21358.6], [1.76887506E12, 2064.4], [1.76887488E12, 19492.7], [1.76887494E12, 21477.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76887506E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1806.3116089613038, "minX": 1.76887488E12, "maxY": 2890.634615384616, "series": [{"data": [[1.768875E12, 2280.2230483271387], [1.76887506E12, 2890.634615384616], [1.76887488E12, 1806.3116089613038], [1.76887494E12, 2212.5194085027715]], "isOverall": false, "label": "/api/learner/registration", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76887506E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1806.1059063136456, "minX": 1.76887488E12, "maxY": 2890.4807692307695, "series": [{"data": [[1.768875E12, 2280.1524163568774], [1.76887506E12, 2890.4807692307695], [1.76887488E12, 1806.1059063136456], [1.76887494E12, 2212.3142329020347]], "isOverall": false, "label": "/api/learner/registration", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76887506E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 5.0769230769230775, "minX": 1.76887488E12, "maxY": 820.6395112016293, "series": [{"data": [[1.768875E12, 160.41821561338293], [1.76887506E12, 5.0769230769230775], [1.76887488E12, 820.6395112016293], [1.76887494E12, 744.9316081330871]], "isOverall": false, "label": "/api/learner/registration", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76887506E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 23302.0, "minX": 1.76887488E12, "maxY": 23302.0, "series": [{"data": [[1.76887488E12, 23302.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76887488E12, 23302.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76887488E12, 23302.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76887488E12, 23302.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76887488E12, 23302.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76887488E12, 23302.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76887488E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1290.0, "minX": 1.0, "maxY": 23302.0, "series": [{"data": [[2.0, 23302.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1632.0], [8.0, 1980.0], [9.0, 1303.0], [10.0, 1424.5], [11.0, 1318.5], [12.0, 1290.0], [3.0, 2065.0], [13.0, 1483.0], [14.0, 1820.0], [15.0, 1844.5], [4.0, 2390.0], [1.0, 7357.0], [17.0, 1857.0], [5.0, 1641.0], [6.0, 1763.5], [7.0, 1330.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1289.5, "minX": 1.0, "maxY": 23299.0, "series": [{"data": [[2.0, 23299.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1632.0], [8.0, 1980.0], [9.0, 1302.0], [10.0, 1424.5], [11.0, 1318.5], [12.0, 1289.5], [3.0, 2065.0], [13.0, 1483.0], [14.0, 1820.0], [15.0, 1844.5], [4.0, 2390.0], [1.0, 7357.0], [17.0, 1857.0], [5.0, 1641.0], [6.0, 1763.5], [7.0, 1330.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.76887482E12, "maxY": 9.016666666666667, "series": [{"data": [[1.76887482E12, 0.1], [1.768875E12, 8.966666666666667], [1.76887506E12, 0.5333333333333333], [1.76887488E12, 8.416666666666666], [1.76887494E12, 9.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76887506E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76887488E12, "maxY": 8.516666666666667, "series": [{"data": [[1.76887488E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.768875E12, 0.5], [1.76887488E12, 0.48333333333333334], [1.76887494E12, 0.5]], "isOverall": false, "label": "422", "isController": false}, {"data": [[1.768875E12, 8.466666666666667], [1.76887506E12, 0.8666666666666667], [1.76887488E12, 7.683333333333334], [1.76887494E12, 8.516666666666667]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76887506E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76887488E12, "maxY": 9.016666666666667, "series": [{"data": [[1.76887488E12, 0.016666666666666666]], "isOverall": false, "label": "/api/learner/registration-success", "isController": false}, {"data": [[1.768875E12, 8.966666666666667], [1.76887506E12, 0.8666666666666667], [1.76887488E12, 8.166666666666666], [1.76887494E12, 9.016666666666667]], "isOverall": false, "label": "/api/learner/registration-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76887506E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.76887488E12, "maxY": 9.016666666666667, "series": [{"data": [[1.76887488E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.768875E12, 8.966666666666667], [1.76887506E12, 0.8666666666666667], [1.76887488E12, 8.166666666666666], [1.76887494E12, 9.016666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76887506E12, "title": "Total Transactions Per Second"}},
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

