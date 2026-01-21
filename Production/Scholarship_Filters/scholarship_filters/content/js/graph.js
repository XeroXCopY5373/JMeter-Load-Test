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
        data: {"result": {"minY": 219.0, "minX": 0.0, "maxY": 26252.0, "series": [{"data": [[0.0, 219.0], [0.1, 220.0], [0.2, 220.0], [0.3, 221.0], [0.4, 224.0], [0.5, 224.0], [0.6, 225.0], [0.7, 226.0], [0.8, 226.0], [0.9, 226.0], [1.0, 228.0], [1.1, 228.0], [1.2, 228.0], [1.3, 229.0], [1.4, 230.0], [1.5, 233.0], [1.6, 237.0], [1.7, 240.0], [1.8, 244.0], [1.9, 251.0], [2.0, 255.0], [2.1, 267.0], [2.2, 274.0], [2.3, 284.0], [2.4, 288.0], [2.5, 313.0], [2.6, 340.0], [2.7, 355.0], [2.8, 429.0], [2.9, 461.0], [3.0, 465.0], [3.1, 530.0], [3.2, 540.0], [3.3, 560.0], [3.4, 647.0], [3.5, 649.0], [3.6, 728.0], [3.7, 739.0], [3.8, 741.0], [3.9, 746.0], [4.0, 769.0], [4.1, 772.0], [4.2, 782.0], [4.3, 791.0], [4.4, 792.0], [4.5, 799.0], [4.6, 802.0], [4.7, 803.0], [4.8, 804.0], [4.9, 814.0], [5.0, 815.0], [5.1, 822.0], [5.2, 829.0], [5.3, 835.0], [5.4, 835.0], [5.5, 836.0], [5.6, 837.0], [5.7, 838.0], [5.8, 847.0], [5.9, 851.0], [6.0, 854.0], [6.1, 857.0], [6.2, 872.0], [6.3, 881.0], [6.4, 882.0], [6.5, 883.0], [6.6, 885.0], [6.7, 898.0], [6.8, 905.0], [6.9, 905.0], [7.0, 908.0], [7.1, 909.0], [7.2, 919.0], [7.3, 921.0], [7.4, 926.0], [7.5, 926.0], [7.6, 934.0], [7.7, 942.0], [7.8, 943.0], [7.9, 946.0], [8.0, 947.0], [8.1, 950.0], [8.2, 956.0], [8.3, 956.0], [8.4, 968.0], [8.5, 970.0], [8.6, 972.0], [8.7, 974.0], [8.8, 975.0], [8.9, 977.0], [9.0, 979.0], [9.1, 981.0], [9.2, 983.0], [9.3, 986.0], [9.4, 988.0], [9.5, 990.0], [9.6, 991.0], [9.7, 997.0], [9.8, 998.0], [9.9, 999.0], [10.0, 1001.0], [10.1, 1002.0], [10.2, 1003.0], [10.3, 1009.0], [10.4, 1009.0], [10.5, 1009.0], [10.6, 1012.0], [10.7, 1012.0], [10.8, 1013.0], [10.9, 1015.0], [11.0, 1015.0], [11.1, 1015.0], [11.2, 1019.0], [11.3, 1019.0], [11.4, 1019.0], [11.5, 1021.0], [11.6, 1022.0], [11.7, 1023.0], [11.8, 1023.0], [11.9, 1024.0], [12.0, 1029.0], [12.1, 1030.0], [12.2, 1031.0], [12.3, 1032.0], [12.4, 1032.0], [12.5, 1033.0], [12.6, 1033.0], [12.7, 1034.0], [12.8, 1035.0], [12.9, 1036.0], [13.0, 1037.0], [13.1, 1038.0], [13.2, 1039.0], [13.3, 1041.0], [13.4, 1041.0], [13.5, 1042.0], [13.6, 1045.0], [13.7, 1046.0], [13.8, 1047.0], [13.9, 1049.0], [14.0, 1050.0], [14.1, 1050.0], [14.2, 1051.0], [14.3, 1052.0], [14.4, 1054.0], [14.5, 1056.0], [14.6, 1056.0], [14.7, 1057.0], [14.8, 1058.0], [14.9, 1058.0], [15.0, 1058.0], [15.1, 1059.0], [15.2, 1061.0], [15.3, 1062.0], [15.4, 1062.0], [15.5, 1063.0], [15.6, 1064.0], [15.7, 1065.0], [15.8, 1068.0], [15.9, 1068.0], [16.0, 1069.0], [16.1, 1070.0], [16.2, 1070.0], [16.3, 1072.0], [16.4, 1074.0], [16.5, 1074.0], [16.6, 1075.0], [16.7, 1081.0], [16.8, 1083.0], [16.9, 1085.0], [17.0, 1089.0], [17.1, 1090.0], [17.2, 1091.0], [17.3, 1093.0], [17.4, 1097.0], [17.5, 1097.0], [17.6, 1101.0], [17.7, 1102.0], [17.8, 1102.0], [17.9, 1102.0], [18.0, 1103.0], [18.1, 1103.0], [18.2, 1106.0], [18.3, 1106.0], [18.4, 1107.0], [18.5, 1109.0], [18.6, 1110.0], [18.7, 1111.0], [18.8, 1113.0], [18.9, 1114.0], [19.0, 1114.0], [19.1, 1118.0], [19.2, 1118.0], [19.3, 1119.0], [19.4, 1120.0], [19.5, 1122.0], [19.6, 1124.0], [19.7, 1131.0], [19.8, 1131.0], [19.9, 1135.0], [20.0, 1137.0], [20.1, 1138.0], [20.2, 1139.0], [20.3, 1140.0], [20.4, 1141.0], [20.5, 1141.0], [20.6, 1146.0], [20.7, 1147.0], [20.8, 1148.0], [20.9, 1151.0], [21.0, 1151.0], [21.1, 1151.0], [21.2, 1152.0], [21.3, 1153.0], [21.4, 1155.0], [21.5, 1157.0], [21.6, 1159.0], [21.7, 1160.0], [21.8, 1165.0], [21.9, 1166.0], [22.0, 1167.0], [22.1, 1169.0], [22.2, 1169.0], [22.3, 1170.0], [22.4, 1172.0], [22.5, 1172.0], [22.6, 1173.0], [22.7, 1173.0], [22.8, 1174.0], [22.9, 1177.0], [23.0, 1181.0], [23.1, 1182.0], [23.2, 1183.0], [23.3, 1186.0], [23.4, 1188.0], [23.5, 1191.0], [23.6, 1192.0], [23.7, 1193.0], [23.8, 1193.0], [23.9, 1197.0], [24.0, 1201.0], [24.1, 1202.0], [24.2, 1205.0], [24.3, 1206.0], [24.4, 1207.0], [24.5, 1208.0], [24.6, 1210.0], [24.7, 1211.0], [24.8, 1212.0], [24.9, 1213.0], [25.0, 1216.0], [25.1, 1218.0], [25.2, 1219.0], [25.3, 1220.0], [25.4, 1225.0], [25.5, 1227.0], [25.6, 1229.0], [25.7, 1231.0], [25.8, 1231.0], [25.9, 1231.0], [26.0, 1235.0], [26.1, 1235.0], [26.2, 1236.0], [26.3, 1237.0], [26.4, 1237.0], [26.5, 1238.0], [26.6, 1239.0], [26.7, 1239.0], [26.8, 1240.0], [26.9, 1241.0], [27.0, 1242.0], [27.1, 1242.0], [27.2, 1245.0], [27.3, 1245.0], [27.4, 1246.0], [27.5, 1247.0], [27.6, 1247.0], [27.7, 1248.0], [27.8, 1251.0], [27.9, 1253.0], [28.0, 1253.0], [28.1, 1256.0], [28.2, 1257.0], [28.3, 1257.0], [28.4, 1260.0], [28.5, 1263.0], [28.6, 1263.0], [28.7, 1263.0], [28.8, 1265.0], [28.9, 1265.0], [29.0, 1269.0], [29.1, 1270.0], [29.2, 1272.0], [29.3, 1274.0], [29.4, 1281.0], [29.5, 1282.0], [29.6, 1284.0], [29.7, 1288.0], [29.8, 1288.0], [29.9, 1290.0], [30.0, 1295.0], [30.1, 1295.0], [30.2, 1296.0], [30.3, 1297.0], [30.4, 1299.0], [30.5, 1299.0], [30.6, 1302.0], [30.7, 1303.0], [30.8, 1305.0], [30.9, 1309.0], [31.0, 1312.0], [31.1, 1313.0], [31.2, 1316.0], [31.3, 1316.0], [31.4, 1318.0], [31.5, 1321.0], [31.6, 1321.0], [31.7, 1321.0], [31.8, 1324.0], [31.9, 1325.0], [32.0, 1325.0], [32.1, 1329.0], [32.2, 1329.0], [32.3, 1330.0], [32.4, 1333.0], [32.5, 1334.0], [32.6, 1336.0], [32.7, 1337.0], [32.8, 1338.0], [32.9, 1340.0], [33.0, 1340.0], [33.1, 1342.0], [33.2, 1342.0], [33.3, 1343.0], [33.4, 1344.0], [33.5, 1345.0], [33.6, 1347.0], [33.7, 1348.0], [33.8, 1349.0], [33.9, 1352.0], [34.0, 1352.0], [34.1, 1352.0], [34.2, 1354.0], [34.3, 1354.0], [34.4, 1355.0], [34.5, 1355.0], [34.6, 1358.0], [34.7, 1359.0], [34.8, 1360.0], [34.9, 1362.0], [35.0, 1364.0], [35.1, 1365.0], [35.2, 1367.0], [35.3, 1367.0], [35.4, 1368.0], [35.5, 1371.0], [35.6, 1372.0], [35.7, 1374.0], [35.8, 1374.0], [35.9, 1377.0], [36.0, 1377.0], [36.1, 1378.0], [36.2, 1379.0], [36.3, 1381.0], [36.4, 1383.0], [36.5, 1386.0], [36.6, 1388.0], [36.7, 1389.0], [36.8, 1392.0], [36.9, 1392.0], [37.0, 1395.0], [37.1, 1395.0], [37.2, 1396.0], [37.3, 1396.0], [37.4, 1397.0], [37.5, 1401.0], [37.6, 1402.0], [37.7, 1402.0], [37.8, 1404.0], [37.9, 1404.0], [38.0, 1406.0], [38.1, 1407.0], [38.2, 1409.0], [38.3, 1411.0], [38.4, 1415.0], [38.5, 1417.0], [38.6, 1420.0], [38.7, 1424.0], [38.8, 1428.0], [38.9, 1429.0], [39.0, 1430.0], [39.1, 1431.0], [39.2, 1433.0], [39.3, 1434.0], [39.4, 1436.0], [39.5, 1438.0], [39.6, 1440.0], [39.7, 1441.0], [39.8, 1441.0], [39.9, 1442.0], [40.0, 1448.0], [40.1, 1448.0], [40.2, 1451.0], [40.3, 1451.0], [40.4, 1452.0], [40.5, 1453.0], [40.6, 1456.0], [40.7, 1456.0], [40.8, 1459.0], [40.9, 1459.0], [41.0, 1460.0], [41.1, 1462.0], [41.2, 1463.0], [41.3, 1463.0], [41.4, 1467.0], [41.5, 1467.0], [41.6, 1468.0], [41.7, 1471.0], [41.8, 1471.0], [41.9, 1472.0], [42.0, 1476.0], [42.1, 1476.0], [42.2, 1479.0], [42.3, 1480.0], [42.4, 1482.0], [42.5, 1482.0], [42.6, 1484.0], [42.7, 1485.0], [42.8, 1487.0], [42.9, 1488.0], [43.0, 1491.0], [43.1, 1493.0], [43.2, 1493.0], [43.3, 1494.0], [43.4, 1499.0], [43.5, 1501.0], [43.6, 1507.0], [43.7, 1508.0], [43.8, 1508.0], [43.9, 1513.0], [44.0, 1514.0], [44.1, 1515.0], [44.2, 1517.0], [44.3, 1517.0], [44.4, 1518.0], [44.5, 1519.0], [44.6, 1523.0], [44.7, 1524.0], [44.8, 1527.0], [44.9, 1527.0], [45.0, 1529.0], [45.1, 1530.0], [45.2, 1531.0], [45.3, 1531.0], [45.4, 1532.0], [45.5, 1532.0], [45.6, 1533.0], [45.7, 1534.0], [45.8, 1535.0], [45.9, 1536.0], [46.0, 1538.0], [46.1, 1539.0], [46.2, 1540.0], [46.3, 1542.0], [46.4, 1543.0], [46.5, 1549.0], [46.6, 1551.0], [46.7, 1551.0], [46.8, 1553.0], [46.9, 1554.0], [47.0, 1554.0], [47.1, 1555.0], [47.2, 1560.0], [47.3, 1560.0], [47.4, 1561.0], [47.5, 1561.0], [47.6, 1563.0], [47.7, 1566.0], [47.8, 1566.0], [47.9, 1569.0], [48.0, 1570.0], [48.1, 1574.0], [48.2, 1575.0], [48.3, 1575.0], [48.4, 1577.0], [48.5, 1578.0], [48.6, 1579.0], [48.7, 1579.0], [48.8, 1579.0], [48.9, 1580.0], [49.0, 1585.0], [49.1, 1587.0], [49.2, 1589.0], [49.3, 1594.0], [49.4, 1597.0], [49.5, 1600.0], [49.6, 1603.0], [49.7, 1604.0], [49.8, 1604.0], [49.9, 1608.0], [50.0, 1609.0], [50.1, 1611.0], [50.2, 1614.0], [50.3, 1615.0], [50.4, 1616.0], [50.5, 1620.0], [50.6, 1622.0], [50.7, 1622.0], [50.8, 1627.0], [50.9, 1629.0], [51.0, 1630.0], [51.1, 1637.0], [51.2, 1640.0], [51.3, 1641.0], [51.4, 1645.0], [51.5, 1647.0], [51.6, 1649.0], [51.7, 1650.0], [51.8, 1652.0], [51.9, 1653.0], [52.0, 1653.0], [52.1, 1654.0], [52.2, 1654.0], [52.3, 1659.0], [52.4, 1659.0], [52.5, 1662.0], [52.6, 1664.0], [52.7, 1665.0], [52.8, 1667.0], [52.9, 1669.0], [53.0, 1669.0], [53.1, 1671.0], [53.2, 1672.0], [53.3, 1673.0], [53.4, 1679.0], [53.5, 1681.0], [53.6, 1682.0], [53.7, 1682.0], [53.8, 1682.0], [53.9, 1683.0], [54.0, 1684.0], [54.1, 1684.0], [54.2, 1684.0], [54.3, 1685.0], [54.4, 1689.0], [54.5, 1692.0], [54.6, 1693.0], [54.7, 1697.0], [54.8, 1702.0], [54.9, 1702.0], [55.0, 1705.0], [55.1, 1708.0], [55.2, 1710.0], [55.3, 1712.0], [55.4, 1712.0], [55.5, 1712.0], [55.6, 1717.0], [55.7, 1722.0], [55.8, 1730.0], [55.9, 1730.0], [56.0, 1733.0], [56.1, 1735.0], [56.2, 1738.0], [56.3, 1740.0], [56.4, 1741.0], [56.5, 1744.0], [56.6, 1746.0], [56.7, 1748.0], [56.8, 1752.0], [56.9, 1753.0], [57.0, 1754.0], [57.1, 1757.0], [57.2, 1757.0], [57.3, 1760.0], [57.4, 1764.0], [57.5, 1764.0], [57.6, 1766.0], [57.7, 1767.0], [57.8, 1770.0], [57.9, 1772.0], [58.0, 1774.0], [58.1, 1778.0], [58.2, 1778.0], [58.3, 1778.0], [58.4, 1782.0], [58.5, 1783.0], [58.6, 1784.0], [58.7, 1787.0], [58.8, 1788.0], [58.9, 1789.0], [59.0, 1790.0], [59.1, 1795.0], [59.2, 1796.0], [59.3, 1799.0], [59.4, 1799.0], [59.5, 1799.0], [59.6, 1804.0], [59.7, 1807.0], [59.8, 1807.0], [59.9, 1809.0], [60.0, 1812.0], [60.1, 1817.0], [60.2, 1821.0], [60.3, 1821.0], [60.4, 1821.0], [60.5, 1825.0], [60.6, 1827.0], [60.7, 1830.0], [60.8, 1834.0], [60.9, 1836.0], [61.0, 1838.0], [61.1, 1839.0], [61.2, 1840.0], [61.3, 1842.0], [61.4, 1849.0], [61.5, 1849.0], [61.6, 1851.0], [61.7, 1863.0], [61.8, 1864.0], [61.9, 1864.0], [62.0, 1866.0], [62.1, 1870.0], [62.2, 1871.0], [62.3, 1872.0], [62.4, 1876.0], [62.5, 1877.0], [62.6, 1880.0], [62.7, 1880.0], [62.8, 1881.0], [62.9, 1887.0], [63.0, 1887.0], [63.1, 1888.0], [63.2, 1891.0], [63.3, 1891.0], [63.4, 1892.0], [63.5, 1895.0], [63.6, 1895.0], [63.7, 1896.0], [63.8, 1901.0], [63.9, 1902.0], [64.0, 1903.0], [64.1, 1909.0], [64.2, 1911.0], [64.3, 1912.0], [64.4, 1914.0], [64.5, 1914.0], [64.6, 1914.0], [64.7, 1916.0], [64.8, 1916.0], [64.9, 1918.0], [65.0, 1919.0], [65.1, 1919.0], [65.2, 1920.0], [65.3, 1922.0], [65.4, 1924.0], [65.5, 1925.0], [65.6, 1930.0], [65.7, 1931.0], [65.8, 1932.0], [65.9, 1933.0], [66.0, 1934.0], [66.1, 1943.0], [66.2, 1948.0], [66.3, 1951.0], [66.4, 1954.0], [66.5, 1958.0], [66.6, 1958.0], [66.7, 1962.0], [66.8, 1964.0], [66.9, 1969.0], [67.0, 1970.0], [67.1, 1983.0], [67.2, 1988.0], [67.3, 1988.0], [67.4, 1991.0], [67.5, 1991.0], [67.6, 1998.0], [67.7, 2000.0], [67.8, 2000.0], [67.9, 2002.0], [68.0, 2003.0], [68.1, 2008.0], [68.2, 2010.0], [68.3, 2012.0], [68.4, 2016.0], [68.5, 2017.0], [68.6, 2022.0], [68.7, 2023.0], [68.8, 2027.0], [68.9, 2030.0], [69.0, 2032.0], [69.1, 2036.0], [69.2, 2039.0], [69.3, 2040.0], [69.4, 2044.0], [69.5, 2048.0], [69.6, 2049.0], [69.7, 2049.0], [69.8, 2054.0], [69.9, 2066.0], [70.0, 2068.0], [70.1, 2069.0], [70.2, 2070.0], [70.3, 2074.0], [70.4, 2076.0], [70.5, 2076.0], [70.6, 2077.0], [70.7, 2077.0], [70.8, 2082.0], [70.9, 2083.0], [71.0, 2095.0], [71.1, 2095.0], [71.2, 2097.0], [71.3, 2101.0], [71.4, 2102.0], [71.5, 2103.0], [71.6, 2103.0], [71.7, 2107.0], [71.8, 2111.0], [71.9, 2111.0], [72.0, 2117.0], [72.1, 2123.0], [72.2, 2128.0], [72.3, 2131.0], [72.4, 2131.0], [72.5, 2133.0], [72.6, 2137.0], [72.7, 2140.0], [72.8, 2141.0], [72.9, 2145.0], [73.0, 2147.0], [73.1, 2151.0], [73.2, 2154.0], [73.3, 2155.0], [73.4, 2156.0], [73.5, 2164.0], [73.6, 2164.0], [73.7, 2165.0], [73.8, 2168.0], [73.9, 2169.0], [74.0, 2170.0], [74.1, 2177.0], [74.2, 2182.0], [74.3, 2183.0], [74.4, 2185.0], [74.5, 2186.0], [74.6, 2186.0], [74.7, 2191.0], [74.8, 2195.0], [74.9, 2197.0], [75.0, 2204.0], [75.1, 2207.0], [75.2, 2209.0], [75.3, 2219.0], [75.4, 2223.0], [75.5, 2227.0], [75.6, 2230.0], [75.7, 2231.0], [75.8, 2233.0], [75.9, 2238.0], [76.0, 2238.0], [76.1, 2241.0], [76.2, 2245.0], [76.3, 2245.0], [76.4, 2252.0], [76.5, 2261.0], [76.6, 2263.0], [76.7, 2265.0], [76.8, 2273.0], [76.9, 2275.0], [77.0, 2281.0], [77.1, 2285.0], [77.2, 2286.0], [77.3, 2292.0], [77.4, 2300.0], [77.5, 2300.0], [77.6, 2302.0], [77.7, 2304.0], [77.8, 2313.0], [77.9, 2316.0], [78.0, 2324.0], [78.1, 2326.0], [78.2, 2330.0], [78.3, 2337.0], [78.4, 2346.0], [78.5, 2352.0], [78.6, 2361.0], [78.7, 2362.0], [78.8, 2365.0], [78.9, 2369.0], [79.0, 2369.0], [79.1, 2382.0], [79.2, 2389.0], [79.3, 2390.0], [79.4, 2399.0], [79.5, 2402.0], [79.6, 2402.0], [79.7, 2408.0], [79.8, 2411.0], [79.9, 2422.0], [80.0, 2422.0], [80.1, 2427.0], [80.2, 2430.0], [80.3, 2433.0], [80.4, 2436.0], [80.5, 2439.0], [80.6, 2443.0], [80.7, 2448.0], [80.8, 2449.0], [80.9, 2449.0], [81.0, 2455.0], [81.1, 2460.0], [81.2, 2464.0], [81.3, 2468.0], [81.4, 2470.0], [81.5, 2474.0], [81.6, 2479.0], [81.7, 2480.0], [81.8, 2481.0], [81.9, 2483.0], [82.0, 2484.0], [82.1, 2485.0], [82.2, 2495.0], [82.3, 2508.0], [82.4, 2512.0], [82.5, 2520.0], [82.6, 2531.0], [82.7, 2531.0], [82.8, 2534.0], [82.9, 2539.0], [83.0, 2544.0], [83.1, 2554.0], [83.2, 2561.0], [83.3, 2563.0], [83.4, 2576.0], [83.5, 2578.0], [83.6, 2584.0], [83.7, 2603.0], [83.8, 2605.0], [83.9, 2621.0], [84.0, 2630.0], [84.1, 2632.0], [84.2, 2632.0], [84.3, 2641.0], [84.4, 2649.0], [84.5, 2656.0], [84.6, 2668.0], [84.7, 2668.0], [84.8, 2672.0], [84.9, 2677.0], [85.0, 2682.0], [85.1, 2682.0], [85.2, 2700.0], [85.3, 2703.0], [85.4, 2704.0], [85.5, 2725.0], [85.6, 2730.0], [85.7, 2732.0], [85.8, 2733.0], [85.9, 2735.0], [86.0, 2742.0], [86.1, 2745.0], [86.2, 2782.0], [86.3, 2784.0], [86.4, 2785.0], [86.5, 2800.0], [86.6, 2814.0], [86.7, 2816.0], [86.8, 2819.0], [86.9, 2820.0], [87.0, 2821.0], [87.1, 2828.0], [87.2, 2832.0], [87.3, 2834.0], [87.4, 2837.0], [87.5, 2842.0], [87.6, 2853.0], [87.7, 2875.0], [87.8, 2882.0], [87.9, 2884.0], [88.0, 2909.0], [88.1, 2912.0], [88.2, 2929.0], [88.3, 2942.0], [88.4, 2946.0], [88.5, 2954.0], [88.6, 2999.0], [88.7, 3019.0], [88.8, 3024.0], [88.9, 3030.0], [89.0, 3056.0], [89.1, 3056.0], [89.2, 3061.0], [89.3, 3066.0], [89.4, 3068.0], [89.5, 3099.0], [89.6, 3100.0], [89.7, 3109.0], [89.8, 3138.0], [89.9, 3140.0], [90.0, 3142.0], [90.1, 3165.0], [90.2, 3171.0], [90.3, 3179.0], [90.4, 3188.0], [90.5, 3190.0], [90.6, 3199.0], [90.7, 3217.0], [90.8, 3233.0], [90.9, 3238.0], [91.0, 3282.0], [91.1, 3297.0], [91.2, 3300.0], [91.3, 3309.0], [91.4, 3326.0], [91.5, 3350.0], [91.6, 3376.0], [91.7, 3380.0], [91.8, 3391.0], [91.9, 3438.0], [92.0, 3448.0], [92.1, 3449.0], [92.2, 3459.0], [92.3, 3478.0], [92.4, 3495.0], [92.5, 3551.0], [92.6, 3556.0], [92.7, 3563.0], [92.8, 3569.0], [92.9, 3578.0], [93.0, 3585.0], [93.1, 3645.0], [93.2, 3648.0], [93.3, 3649.0], [93.4, 3716.0], [93.5, 3769.0], [93.6, 3789.0], [93.7, 3853.0], [93.8, 3896.0], [93.9, 3899.0], [94.0, 3968.0], [94.1, 3975.0], [94.2, 3992.0], [94.3, 4135.0], [94.4, 4164.0], [94.5, 4165.0], [94.6, 4421.0], [94.7, 4525.0], [94.8, 4581.0], [94.9, 4847.0], [95.0, 5189.0], [95.1, 5351.0], [95.2, 5558.0], [95.3, 5885.0], [95.4, 5889.0], [95.5, 6443.0], [95.6, 6443.0], [95.7, 6767.0], [95.8, 7166.0], [95.9, 21891.0], [96.0, 21925.0], [96.1, 21969.0], [96.2, 22141.0], [96.3, 22151.0], [96.4, 22244.0], [96.5, 22316.0], [96.6, 22327.0], [96.7, 22476.0], [96.8, 22500.0], [96.9, 22571.0], [97.0, 22691.0], [97.1, 22704.0], [97.2, 22705.0], [97.3, 22962.0], [97.4, 23028.0], [97.5, 23102.0], [97.6, 23186.0], [97.7, 23212.0], [97.8, 23213.0], [97.9, 23264.0], [98.0, 23281.0], [98.1, 23444.0], [98.2, 23495.0], [98.3, 23555.0], [98.4, 23586.0], [98.5, 23606.0], [98.6, 23654.0], [98.7, 23693.0], [98.8, 23856.0], [98.9, 23865.0], [99.0, 23949.0], [99.1, 24020.0], [99.2, 24037.0], [99.3, 24081.0], [99.4, 24291.0], [99.5, 24743.0], [99.6, 24776.0], [99.7, 24886.0], [99.8, 25062.0], [99.9, 26062.0], [100.0, 26252.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 100.0, "series": [{"data": [[600.0, 2.0], [700.0, 13.0], [800.0, 30.0], [900.0, 43.0], [1000.0, 100.0], [1100.0, 86.0], [1200.0, 87.0], [1300.0, 92.0], [1400.0, 80.0], [1500.0, 80.0], [1600.0, 71.0], [1700.0, 63.0], [1800.0, 57.0], [1900.0, 52.0], [2000.0, 48.0], [2100.0, 48.0], [2200.0, 33.0], [2300.0, 27.0], [2400.0, 38.0], [2500.0, 19.0], [2600.0, 20.0], [2700.0, 17.0], [2800.0, 20.0], [2900.0, 9.0], [3000.0, 12.0], [3100.0, 14.0], [3200.0, 7.0], [3300.0, 9.0], [3400.0, 8.0], [3500.0, 8.0], [3600.0, 4.0], [3700.0, 4.0], [3800.0, 4.0], [3900.0, 4.0], [4000.0, 1.0], [4100.0, 3.0], [4200.0, 1.0], [4400.0, 1.0], [4500.0, 3.0], [4800.0, 1.0], [5100.0, 1.0], [5300.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [5800.0, 2.0], [5900.0, 1.0], [6400.0, 2.0], [6700.0, 1.0], [6800.0, 1.0], [7100.0, 1.0], [22300.0, 2.0], [22500.0, 2.0], [22200.0, 1.0], [22100.0, 3.0], [22400.0, 2.0], [21900.0, 3.0], [21800.0, 1.0], [23400.0, 3.0], [23500.0, 2.0], [23000.0, 1.0], [23100.0, 3.0], [23200.0, 5.0], [22700.0, 2.0], [22800.0, 1.0], [22600.0, 2.0], [22900.0, 1.0], [23800.0, 3.0], [23600.0, 4.0], [24000.0, 4.0], [23900.0, 2.0], [24200.0, 1.0], [25000.0, 1.0], [24700.0, 2.0], [24800.0, 2.0], [26000.0, 1.0], [26200.0, 1.0], [200.0, 33.0], [300.0, 3.0], [400.0, 4.0], [500.0, 5.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 26200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1211.0, "series": [{"data": [[0.0, 40.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 75.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1211.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.470588235294117, "minX": 1.7689569E12, "maxY": 20.0, "series": [{"data": [[1.7689569E12, 3.470588235294117], [1.76895708E12, 20.0], [1.76895696E12, 15.614243323442132], [1.76895714E12, 14.272727272727273], [1.76895702E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895714E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1213.1304347826087, "minX": 1.0, "maxY": 4233.142857142857, "series": [{"data": [[2.0, 1213.1304347826087], [8.0, 1377.6499999999999], [9.0, 1730.4375], [10.0, 1865.5625], [11.0, 1889.875], [3.0, 4233.142857142857], [12.0, 1783.2857142857147], [13.0, 2078.375], [14.0, 2008.666666666667], [15.0, 2049.1176470588234], [1.0, 2750.0], [4.0, 3998.0], [16.0, 2022.8000000000002], [17.0, 1792.3750000000002], [18.0, 2486.8823529411766], [19.0, 1765.1], [5.0, 3000.0], [20.0, 2797.716779825412], [6.0, 2763.3571428571427], [7.0, 2719.6]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}, {"data": [[17.9030803906837, 2642.2546957175036]], "isOverall": false, "label": "/api/learner/educational-attainment-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 140.8, "minX": 1.7689569E12, "maxY": 4876717.116666666, "series": [{"data": [[1.7689569E12, 389061.68333333335], [1.76895708E12, 4876717.116666666], [1.76895696E12, 3138858.55], [1.76895714E12, 337378.5833333333], [1.76895702E12, 3639734.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7689569E12, 290.1333333333333], [1.76895708E12, 2163.2], [1.76895696E12, 1437.8666666666666], [1.76895714E12, 140.8], [1.76895702E12, 1646.9333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895714E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 875.8088235294117, "minX": 1.7689569E12, "maxY": 6721.424242424242, "series": [{"data": [[1.7689569E12, 875.8088235294117], [1.76895708E12, 2376.1400394477323], [1.76895696E12, 2480.0445103857564], [1.76895714E12, 6721.424242424242], [1.76895702E12, 3095.8575129533674]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895714E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 323.2941176470589, "minX": 1.7689569E12, "maxY": 6118.606060606061, "series": [{"data": [[1.7689569E12, 323.2941176470589], [1.76895708E12, 1723.8402366863909], [1.76895696E12, 1075.053412462908], [1.76895714E12, 6118.606060606061], [1.76895702E12, 1783.7849740932647]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895714E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 22.75, "minX": 1.7689569E12, "maxY": 5117.818181818182, "series": [{"data": [[1.7689569E12, 22.75], [1.76895708E12, 839.800788954635], [1.76895696E12, 508.8902077151335], [1.76895714E12, 5117.818181818182], [1.76895702E12, 1044.3316062176173]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895714E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 219.0, "minX": 1.7689569E12, "maxY": 23865.0, "series": [{"data": [[1.7689569E12, 1218.0], [1.76895708E12, 23865.0], [1.76895696E12, 22327.0], [1.76895702E12, 23186.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7689569E12, 334.8000000000001], [1.76895708E12, 1136.2], [1.76895696E12, 1168.3000000000002], [1.76895702E12, 2537.5000000000027]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7689569E12, 1218.0], [1.76895708E12, 23865.0], [1.76895696E12, 22327.0], [1.76895702E12, 23186.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7689569E12, 743.3499999999995], [1.76895708E12, 11383.849999999984], [1.76895696E12, 10699.449999999984], [1.76895702E12, 11959.949999999986]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7689569E12, 219.0], [1.76895708E12, 786.0], [1.76895696E12, 226.0], [1.76895702E12, 274.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7689569E12, 228.0], [1.76895708E12, 1023.0], [1.76895696E12, 770.5], [1.76895702E12, 1039.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895708E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 228.0, "minX": 1.0, "maxY": 5620.0, "series": [{"data": [[8.0, 676.0], [9.0, 1039.0], [5.0, 228.0], [10.0, 989.0], [3.0, 233.0], [12.0, 999.0], [6.0, 1023.0], [13.0, 426.0], [7.0, 251.0], [14.0, 526.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1842.5], [8.0, 1831.5], [9.0, 1895.0], [10.0, 1493.0], [11.0, 1570.0], [3.0, 1748.0], [12.0, 1542.0], [13.0, 1440.0], [14.0, 2356.5], [1.0, 5620.0], [4.0, 1644.5], [5.0, 1711.0], [6.0, 1866.0], [7.0, 1738.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 228.0, "minX": 1.0, "maxY": 1301.0, "series": [{"data": [[8.0, 676.0], [9.0, 1039.0], [5.0, 228.0], [10.0, 989.0], [3.0, 233.0], [12.0, 998.0], [6.0, 1023.0], [13.0, 425.5], [7.0, 251.0], [14.0, 526.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 450.0], [8.0, 762.0], [9.0, 718.0], [10.0, 786.5], [11.0, 732.0], [3.0, 459.0], [12.0, 776.0], [13.0, 720.5], [14.0, 1276.5], [1.0, 1301.0], [4.0, 429.5], [5.0, 573.0], [6.0, 554.0], [7.0, 612.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.7689569E12, "maxY": 8.45, "series": [{"data": [[1.7689569E12, 1.25], [1.76895708E12, 8.45], [1.76895696E12, 5.833333333333333], [1.76895714E12, 0.21666666666666667], [1.76895702E12, 6.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895714E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.7689569E12, "maxY": 7.95, "series": [{"data": [[1.7689569E12, 0.5], [1.76895708E12, 0.5], [1.76895696E12, 0.5], [1.76895702E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7689569E12, 0.6333333333333333], [1.76895708E12, 7.95], [1.76895696E12, 5.116666666666666], [1.76895714E12, 0.55], [1.76895702E12, 5.933333333333334]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895714E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.7689569E12, "maxY": 7.95, "series": [{"data": [[1.7689569E12, 0.5], [1.76895708E12, 0.5], [1.76895696E12, 0.5], [1.76895702E12, 0.5]], "isOverall": false, "label": "/api/learner/educational-attainment-success", "isController": false}, {"data": [[1.7689569E12, 0.6333333333333333], [1.76895708E12, 7.95], [1.76895696E12, 5.116666666666666], [1.76895714E12, 0.55], [1.76895702E12, 5.933333333333334]], "isOverall": false, "label": "/api/learner/educational-attainment-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895714E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.7689569E12, "maxY": 7.95, "series": [{"data": [[1.7689569E12, 0.5], [1.76895708E12, 0.5], [1.76895696E12, 0.5], [1.76895702E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7689569E12, 0.6333333333333333], [1.76895708E12, 7.95], [1.76895696E12, 5.116666666666666], [1.76895714E12, 0.55], [1.76895702E12, 5.933333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895714E12, "title": "Total Transactions Per Second"}},
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

