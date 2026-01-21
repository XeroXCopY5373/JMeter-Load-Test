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
        data: {"result": {"minY": 342.0, "minX": 0.0, "maxY": 24112.0, "series": [{"data": [[0.0, 342.0], [0.1, 343.0], [0.2, 344.0], [0.3, 350.0], [0.4, 352.0], [0.5, 352.0], [0.6, 353.0], [0.7, 353.0], [0.8, 358.0], [0.9, 380.0], [1.0, 400.0], [1.1, 407.0], [1.2, 417.0], [1.3, 417.0], [1.4, 421.0], [1.5, 423.0], [1.6, 425.0], [1.7, 426.0], [1.8, 429.0], [1.9, 438.0], [2.0, 440.0], [2.1, 444.0], [2.2, 447.0], [2.3, 450.0], [2.4, 457.0], [2.5, 464.0], [2.6, 492.0], [2.7, 512.0], [2.8, 515.0], [2.9, 526.0], [3.0, 527.0], [3.1, 543.0], [3.2, 545.0], [3.3, 553.0], [3.4, 558.0], [3.5, 563.0], [3.6, 588.0], [3.7, 592.0], [3.8, 604.0], [3.9, 606.0], [4.0, 609.0], [4.1, 615.0], [4.2, 616.0], [4.3, 620.0], [4.4, 620.0], [4.5, 622.0], [4.6, 624.0], [4.7, 626.0], [4.8, 634.0], [4.9, 634.0], [5.0, 651.0], [5.1, 663.0], [5.2, 665.0], [5.3, 666.0], [5.4, 673.0], [5.5, 682.0], [5.6, 683.0], [5.7, 691.0], [5.8, 693.0], [5.9, 694.0], [6.0, 694.0], [6.1, 695.0], [6.2, 697.0], [6.3, 698.0], [6.4, 723.0], [6.5, 727.0], [6.6, 736.0], [6.7, 736.0], [6.8, 737.0], [6.9, 739.0], [7.0, 741.0], [7.1, 745.0], [7.2, 751.0], [7.3, 763.0], [7.4, 765.0], [7.5, 766.0], [7.6, 771.0], [7.7, 772.0], [7.8, 791.0], [7.9, 791.0], [8.0, 793.0], [8.1, 802.0], [8.2, 803.0], [8.3, 804.0], [8.4, 807.0], [8.5, 813.0], [8.6, 813.0], [8.7, 814.0], [8.8, 818.0], [8.9, 820.0], [9.0, 829.0], [9.1, 832.0], [9.2, 835.0], [9.3, 840.0], [9.4, 840.0], [9.5, 851.0], [9.6, 852.0], [9.7, 862.0], [9.8, 862.0], [9.9, 868.0], [10.0, 870.0], [10.1, 872.0], [10.2, 879.0], [10.3, 879.0], [10.4, 880.0], [10.5, 880.0], [10.6, 883.0], [10.7, 883.0], [10.8, 884.0], [10.9, 890.0], [11.0, 892.0], [11.1, 903.0], [11.2, 906.0], [11.3, 908.0], [11.4, 912.0], [11.5, 913.0], [11.6, 916.0], [11.7, 918.0], [11.8, 928.0], [11.9, 928.0], [12.0, 928.0], [12.1, 935.0], [12.2, 939.0], [12.3, 939.0], [12.4, 940.0], [12.5, 941.0], [12.6, 941.0], [12.7, 943.0], [12.8, 947.0], [12.9, 947.0], [13.0, 954.0], [13.1, 958.0], [13.2, 960.0], [13.3, 962.0], [13.4, 964.0], [13.5, 967.0], [13.6, 968.0], [13.7, 971.0], [13.8, 983.0], [13.9, 985.0], [14.0, 986.0], [14.1, 987.0], [14.2, 987.0], [14.3, 988.0], [14.4, 990.0], [14.5, 991.0], [14.6, 993.0], [14.7, 995.0], [14.8, 997.0], [14.9, 999.0], [15.0, 999.0], [15.1, 1005.0], [15.2, 1008.0], [15.3, 1012.0], [15.4, 1013.0], [15.5, 1015.0], [15.6, 1017.0], [15.7, 1020.0], [15.8, 1026.0], [15.9, 1027.0], [16.0, 1029.0], [16.1, 1032.0], [16.2, 1032.0], [16.3, 1034.0], [16.4, 1034.0], [16.5, 1038.0], [16.6, 1039.0], [16.7, 1039.0], [16.8, 1040.0], [16.9, 1041.0], [17.0, 1042.0], [17.1, 1043.0], [17.2, 1046.0], [17.3, 1047.0], [17.4, 1048.0], [17.5, 1052.0], [17.6, 1059.0], [17.7, 1059.0], [17.8, 1060.0], [17.9, 1061.0], [18.0, 1062.0], [18.1, 1062.0], [18.2, 1063.0], [18.3, 1065.0], [18.4, 1068.0], [18.5, 1068.0], [18.6, 1072.0], [18.7, 1073.0], [18.8, 1078.0], [18.9, 1080.0], [19.0, 1081.0], [19.1, 1088.0], [19.2, 1091.0], [19.3, 1096.0], [19.4, 1097.0], [19.5, 1099.0], [19.6, 1108.0], [19.7, 1109.0], [19.8, 1110.0], [19.9, 1110.0], [20.0, 1114.0], [20.1, 1116.0], [20.2, 1116.0], [20.3, 1120.0], [20.4, 1123.0], [20.5, 1123.0], [20.6, 1124.0], [20.7, 1124.0], [20.8, 1124.0], [20.9, 1125.0], [21.0, 1126.0], [21.1, 1127.0], [21.2, 1129.0], [21.3, 1130.0], [21.4, 1131.0], [21.5, 1131.0], [21.6, 1135.0], [21.7, 1139.0], [21.8, 1140.0], [21.9, 1148.0], [22.0, 1152.0], [22.1, 1152.0], [22.2, 1153.0], [22.3, 1154.0], [22.4, 1157.0], [22.5, 1157.0], [22.6, 1158.0], [22.7, 1162.0], [22.8, 1164.0], [22.9, 1173.0], [23.0, 1177.0], [23.1, 1180.0], [23.2, 1180.0], [23.3, 1184.0], [23.4, 1185.0], [23.5, 1187.0], [23.6, 1188.0], [23.7, 1190.0], [23.8, 1192.0], [23.9, 1192.0], [24.0, 1197.0], [24.1, 1198.0], [24.2, 1199.0], [24.3, 1201.0], [24.4, 1206.0], [24.5, 1209.0], [24.6, 1210.0], [24.7, 1210.0], [24.8, 1214.0], [24.9, 1214.0], [25.0, 1218.0], [25.1, 1221.0], [25.2, 1223.0], [25.3, 1224.0], [25.4, 1225.0], [25.5, 1227.0], [25.6, 1227.0], [25.7, 1228.0], [25.8, 1228.0], [25.9, 1231.0], [26.0, 1231.0], [26.1, 1233.0], [26.2, 1245.0], [26.3, 1247.0], [26.4, 1248.0], [26.5, 1252.0], [26.6, 1258.0], [26.7, 1260.0], [26.8, 1261.0], [26.9, 1264.0], [27.0, 1265.0], [27.1, 1270.0], [27.2, 1270.0], [27.3, 1272.0], [27.4, 1273.0], [27.5, 1279.0], [27.6, 1282.0], [27.7, 1283.0], [27.8, 1286.0], [27.9, 1289.0], [28.0, 1290.0], [28.1, 1290.0], [28.2, 1292.0], [28.3, 1293.0], [28.4, 1296.0], [28.5, 1301.0], [28.6, 1301.0], [28.7, 1303.0], [28.8, 1304.0], [28.9, 1304.0], [29.0, 1305.0], [29.1, 1306.0], [29.2, 1309.0], [29.3, 1310.0], [29.4, 1311.0], [29.5, 1312.0], [29.6, 1312.0], [29.7, 1314.0], [29.8, 1314.0], [29.9, 1316.0], [30.0, 1317.0], [30.1, 1318.0], [30.2, 1319.0], [30.3, 1321.0], [30.4, 1325.0], [30.5, 1327.0], [30.6, 1328.0], [30.7, 1330.0], [30.8, 1330.0], [30.9, 1335.0], [31.0, 1335.0], [31.1, 1337.0], [31.2, 1339.0], [31.3, 1342.0], [31.4, 1344.0], [31.5, 1344.0], [31.6, 1348.0], [31.7, 1348.0], [31.8, 1353.0], [31.9, 1354.0], [32.0, 1357.0], [32.1, 1358.0], [32.2, 1358.0], [32.3, 1360.0], [32.4, 1362.0], [32.5, 1364.0], [32.6, 1365.0], [32.7, 1365.0], [32.8, 1367.0], [32.9, 1369.0], [33.0, 1371.0], [33.1, 1376.0], [33.2, 1378.0], [33.3, 1380.0], [33.4, 1381.0], [33.5, 1381.0], [33.6, 1382.0], [33.7, 1382.0], [33.8, 1385.0], [33.9, 1387.0], [34.0, 1387.0], [34.1, 1388.0], [34.2, 1388.0], [34.3, 1389.0], [34.4, 1393.0], [34.5, 1393.0], [34.6, 1395.0], [34.7, 1400.0], [34.8, 1404.0], [34.9, 1406.0], [35.0, 1406.0], [35.1, 1410.0], [35.2, 1416.0], [35.3, 1420.0], [35.4, 1422.0], [35.5, 1422.0], [35.6, 1425.0], [35.7, 1426.0], [35.8, 1426.0], [35.9, 1429.0], [36.0, 1429.0], [36.1, 1430.0], [36.2, 1430.0], [36.3, 1433.0], [36.4, 1435.0], [36.5, 1440.0], [36.6, 1440.0], [36.7, 1441.0], [36.8, 1444.0], [36.9, 1445.0], [37.0, 1448.0], [37.1, 1449.0], [37.2, 1451.0], [37.3, 1453.0], [37.4, 1456.0], [37.5, 1457.0], [37.6, 1459.0], [37.7, 1462.0], [37.8, 1463.0], [37.9, 1464.0], [38.0, 1465.0], [38.1, 1465.0], [38.2, 1467.0], [38.3, 1468.0], [38.4, 1469.0], [38.5, 1473.0], [38.6, 1473.0], [38.7, 1474.0], [38.8, 1476.0], [38.9, 1480.0], [39.0, 1480.0], [39.1, 1481.0], [39.2, 1481.0], [39.3, 1483.0], [39.4, 1484.0], [39.5, 1485.0], [39.6, 1487.0], [39.7, 1488.0], [39.8, 1489.0], [39.9, 1490.0], [40.0, 1491.0], [40.1, 1491.0], [40.2, 1492.0], [40.3, 1493.0], [40.4, 1494.0], [40.5, 1495.0], [40.6, 1498.0], [40.7, 1501.0], [40.8, 1502.0], [40.9, 1504.0], [41.0, 1505.0], [41.1, 1505.0], [41.2, 1508.0], [41.3, 1509.0], [41.4, 1512.0], [41.5, 1513.0], [41.6, 1513.0], [41.7, 1514.0], [41.8, 1515.0], [41.9, 1517.0], [42.0, 1517.0], [42.1, 1520.0], [42.2, 1524.0], [42.3, 1526.0], [42.4, 1531.0], [42.5, 1531.0], [42.6, 1532.0], [42.7, 1533.0], [42.8, 1534.0], [42.9, 1540.0], [43.0, 1540.0], [43.1, 1541.0], [43.2, 1542.0], [43.3, 1543.0], [43.4, 1543.0], [43.5, 1544.0], [43.6, 1546.0], [43.7, 1546.0], [43.8, 1547.0], [43.9, 1548.0], [44.0, 1550.0], [44.1, 1552.0], [44.2, 1552.0], [44.3, 1553.0], [44.4, 1553.0], [44.5, 1555.0], [44.6, 1557.0], [44.7, 1557.0], [44.8, 1560.0], [44.9, 1561.0], [45.0, 1563.0], [45.1, 1564.0], [45.2, 1573.0], [45.3, 1574.0], [45.4, 1576.0], [45.5, 1581.0], [45.6, 1582.0], [45.7, 1585.0], [45.8, 1585.0], [45.9, 1588.0], [46.0, 1589.0], [46.1, 1589.0], [46.2, 1593.0], [46.3, 1595.0], [46.4, 1595.0], [46.5, 1596.0], [46.6, 1600.0], [46.7, 1600.0], [46.8, 1602.0], [46.9, 1607.0], [47.0, 1609.0], [47.1, 1609.0], [47.2, 1610.0], [47.3, 1612.0], [47.4, 1613.0], [47.5, 1613.0], [47.6, 1614.0], [47.7, 1614.0], [47.8, 1615.0], [47.9, 1617.0], [48.0, 1619.0], [48.1, 1621.0], [48.2, 1622.0], [48.3, 1624.0], [48.4, 1627.0], [48.5, 1631.0], [48.6, 1634.0], [48.7, 1634.0], [48.8, 1637.0], [48.9, 1637.0], [49.0, 1640.0], [49.1, 1640.0], [49.2, 1642.0], [49.3, 1643.0], [49.4, 1643.0], [49.5, 1645.0], [49.6, 1646.0], [49.7, 1649.0], [49.8, 1650.0], [49.9, 1653.0], [50.0, 1653.0], [50.1, 1656.0], [50.2, 1657.0], [50.3, 1658.0], [50.4, 1658.0], [50.5, 1659.0], [50.6, 1660.0], [50.7, 1660.0], [50.8, 1660.0], [50.9, 1664.0], [51.0, 1664.0], [51.1, 1664.0], [51.2, 1666.0], [51.3, 1668.0], [51.4, 1669.0], [51.5, 1669.0], [51.6, 1674.0], [51.7, 1674.0], [51.8, 1678.0], [51.9, 1680.0], [52.0, 1680.0], [52.1, 1681.0], [52.2, 1682.0], [52.3, 1685.0], [52.4, 1687.0], [52.5, 1687.0], [52.6, 1688.0], [52.7, 1689.0], [52.8, 1692.0], [52.9, 1693.0], [53.0, 1695.0], [53.1, 1695.0], [53.2, 1700.0], [53.3, 1700.0], [53.4, 1700.0], [53.5, 1702.0], [53.6, 1702.0], [53.7, 1704.0], [53.8, 1706.0], [53.9, 1708.0], [54.0, 1708.0], [54.1, 1710.0], [54.2, 1711.0], [54.3, 1712.0], [54.4, 1714.0], [54.5, 1715.0], [54.6, 1718.0], [54.7, 1720.0], [54.8, 1721.0], [54.9, 1721.0], [55.0, 1723.0], [55.1, 1728.0], [55.2, 1729.0], [55.3, 1731.0], [55.4, 1732.0], [55.5, 1734.0], [55.6, 1734.0], [55.7, 1735.0], [55.8, 1738.0], [55.9, 1738.0], [56.0, 1739.0], [56.1, 1740.0], [56.2, 1741.0], [56.3, 1750.0], [56.4, 1750.0], [56.5, 1753.0], [56.6, 1753.0], [56.7, 1753.0], [56.8, 1755.0], [56.9, 1756.0], [57.0, 1757.0], [57.1, 1758.0], [57.2, 1760.0], [57.3, 1760.0], [57.4, 1760.0], [57.5, 1762.0], [57.6, 1763.0], [57.7, 1767.0], [57.8, 1767.0], [57.9, 1768.0], [58.0, 1769.0], [58.1, 1769.0], [58.2, 1772.0], [58.3, 1773.0], [58.4, 1775.0], [58.5, 1780.0], [58.6, 1782.0], [58.7, 1783.0], [58.8, 1784.0], [58.9, 1787.0], [59.0, 1788.0], [59.1, 1793.0], [59.2, 1794.0], [59.3, 1794.0], [59.4, 1794.0], [59.5, 1795.0], [59.6, 1803.0], [59.7, 1806.0], [59.8, 1809.0], [59.9, 1809.0], [60.0, 1821.0], [60.1, 1821.0], [60.2, 1825.0], [60.3, 1828.0], [60.4, 1830.0], [60.5, 1831.0], [60.6, 1833.0], [60.7, 1834.0], [60.8, 1842.0], [60.9, 1842.0], [61.0, 1849.0], [61.1, 1850.0], [61.2, 1851.0], [61.3, 1851.0], [61.4, 1851.0], [61.5, 1854.0], [61.6, 1855.0], [61.7, 1862.0], [61.8, 1862.0], [61.9, 1867.0], [62.0, 1871.0], [62.1, 1875.0], [62.2, 1878.0], [62.3, 1878.0], [62.4, 1880.0], [62.5, 1881.0], [62.6, 1887.0], [62.7, 1890.0], [62.8, 1891.0], [62.9, 1893.0], [63.0, 1894.0], [63.1, 1897.0], [63.2, 1898.0], [63.3, 1900.0], [63.4, 1905.0], [63.5, 1905.0], [63.6, 1906.0], [63.7, 1912.0], [63.8, 1913.0], [63.9, 1915.0], [64.0, 1919.0], [64.1, 1921.0], [64.2, 1923.0], [64.3, 1925.0], [64.4, 1928.0], [64.5, 1932.0], [64.6, 1937.0], [64.7, 1939.0], [64.8, 1941.0], [64.9, 1941.0], [65.0, 1944.0], [65.1, 1946.0], [65.2, 1949.0], [65.3, 1949.0], [65.4, 1951.0], [65.5, 1954.0], [65.6, 1954.0], [65.7, 1959.0], [65.8, 1962.0], [65.9, 1975.0], [66.0, 1979.0], [66.1, 1982.0], [66.2, 1984.0], [66.3, 1986.0], [66.4, 1989.0], [66.5, 1989.0], [66.6, 1997.0], [66.7, 1998.0], [66.8, 1999.0], [66.9, 2003.0], [67.0, 2004.0], [67.1, 2006.0], [67.2, 2007.0], [67.3, 2011.0], [67.4, 2012.0], [67.5, 2013.0], [67.6, 2017.0], [67.7, 2018.0], [67.8, 2026.0], [67.9, 2027.0], [68.0, 2028.0], [68.1, 2031.0], [68.2, 2031.0], [68.3, 2034.0], [68.4, 2037.0], [68.5, 2038.0], [68.6, 2041.0], [68.7, 2041.0], [68.8, 2046.0], [68.9, 2048.0], [69.0, 2050.0], [69.1, 2053.0], [69.2, 2056.0], [69.3, 2057.0], [69.4, 2058.0], [69.5, 2059.0], [69.6, 2059.0], [69.7, 2062.0], [69.8, 2065.0], [69.9, 2072.0], [70.0, 2075.0], [70.1, 2075.0], [70.2, 2081.0], [70.3, 2084.0], [70.4, 2098.0], [70.5, 2103.0], [70.6, 2104.0], [70.7, 2105.0], [70.8, 2105.0], [70.9, 2107.0], [71.0, 2109.0], [71.1, 2111.0], [71.2, 2111.0], [71.3, 2112.0], [71.4, 2113.0], [71.5, 2113.0], [71.6, 2118.0], [71.7, 2120.0], [71.8, 2123.0], [71.9, 2123.0], [72.0, 2128.0], [72.1, 2133.0], [72.2, 2135.0], [72.3, 2139.0], [72.4, 2142.0], [72.5, 2145.0], [72.6, 2149.0], [72.7, 2149.0], [72.8, 2154.0], [72.9, 2155.0], [73.0, 2159.0], [73.1, 2159.0], [73.2, 2161.0], [73.3, 2161.0], [73.4, 2162.0], [73.5, 2168.0], [73.6, 2170.0], [73.7, 2171.0], [73.8, 2175.0], [73.9, 2180.0], [74.0, 2180.0], [74.1, 2182.0], [74.2, 2185.0], [74.3, 2187.0], [74.4, 2200.0], [74.5, 2201.0], [74.6, 2209.0], [74.7, 2213.0], [74.8, 2214.0], [74.9, 2215.0], [75.0, 2220.0], [75.1, 2225.0], [75.2, 2225.0], [75.3, 2230.0], [75.4, 2230.0], [75.5, 2232.0], [75.6, 2233.0], [75.7, 2236.0], [75.8, 2237.0], [75.9, 2240.0], [76.0, 2242.0], [76.1, 2249.0], [76.2, 2250.0], [76.3, 2257.0], [76.4, 2258.0], [76.5, 2260.0], [76.6, 2261.0], [76.7, 2266.0], [76.8, 2267.0], [76.9, 2268.0], [77.0, 2269.0], [77.1, 2276.0], [77.2, 2282.0], [77.3, 2284.0], [77.4, 2284.0], [77.5, 2285.0], [77.6, 2286.0], [77.7, 2292.0], [77.8, 2292.0], [77.9, 2294.0], [78.0, 2298.0], [78.1, 2303.0], [78.2, 2308.0], [78.3, 2308.0], [78.4, 2315.0], [78.5, 2316.0], [78.6, 2329.0], [78.7, 2333.0], [78.8, 2333.0], [78.9, 2337.0], [79.0, 2338.0], [79.1, 2346.0], [79.2, 2348.0], [79.3, 2352.0], [79.4, 2357.0], [79.5, 2358.0], [79.6, 2363.0], [79.7, 2367.0], [79.8, 2370.0], [79.9, 2385.0], [80.0, 2388.0], [80.1, 2396.0], [80.2, 2399.0], [80.3, 2405.0], [80.4, 2407.0], [80.5, 2413.0], [80.6, 2416.0], [80.7, 2417.0], [80.8, 2425.0], [80.9, 2425.0], [81.0, 2430.0], [81.1, 2431.0], [81.2, 2435.0], [81.3, 2441.0], [81.4, 2442.0], [81.5, 2454.0], [81.6, 2454.0], [81.7, 2455.0], [81.8, 2455.0], [81.9, 2469.0], [82.0, 2469.0], [82.1, 2471.0], [82.2, 2476.0], [82.3, 2477.0], [82.4, 2478.0], [82.5, 2479.0], [82.6, 2492.0], [82.7, 2501.0], [82.8, 2502.0], [82.9, 2519.0], [83.0, 2522.0], [83.1, 2533.0], [83.2, 2536.0], [83.3, 2540.0], [83.4, 2541.0], [83.5, 2541.0], [83.6, 2545.0], [83.7, 2545.0], [83.8, 2547.0], [83.9, 2555.0], [84.0, 2573.0], [84.1, 2582.0], [84.2, 2583.0], [84.3, 2595.0], [84.4, 2598.0], [84.5, 2604.0], [84.6, 2611.0], [84.7, 2616.0], [84.8, 2628.0], [84.9, 2639.0], [85.0, 2655.0], [85.1, 2662.0], [85.2, 2670.0], [85.3, 2672.0], [85.4, 2676.0], [85.5, 2689.0], [85.6, 2690.0], [85.7, 2705.0], [85.8, 2725.0], [85.9, 2739.0], [86.0, 2740.0], [86.1, 2741.0], [86.2, 2749.0], [86.3, 2756.0], [86.4, 2771.0], [86.5, 2779.0], [86.6, 2795.0], [86.7, 2803.0], [86.8, 2804.0], [86.9, 2847.0], [87.0, 2852.0], [87.1, 2864.0], [87.2, 2873.0], [87.3, 2878.0], [87.4, 2878.0], [87.5, 2884.0], [87.6, 2895.0], [87.7, 2903.0], [87.8, 2907.0], [87.9, 2913.0], [88.0, 2915.0], [88.1, 2923.0], [88.2, 2939.0], [88.3, 2957.0], [88.4, 2960.0], [88.5, 2965.0], [88.6, 2973.0], [88.7, 2976.0], [88.8, 2995.0], [88.9, 2995.0], [89.0, 3003.0], [89.1, 3010.0], [89.2, 3023.0], [89.3, 3037.0], [89.4, 3051.0], [89.5, 3062.0], [89.6, 3072.0], [89.7, 3116.0], [89.8, 3128.0], [89.9, 3145.0], [90.0, 3160.0], [90.1, 3163.0], [90.2, 3179.0], [90.3, 3199.0], [90.4, 3208.0], [90.5, 3259.0], [90.6, 3270.0], [90.7, 3292.0], [90.8, 3332.0], [90.9, 3340.0], [91.0, 3356.0], [91.1, 3365.0], [91.2, 3378.0], [91.3, 3420.0], [91.4, 3424.0], [91.5, 3442.0], [91.6, 3518.0], [91.7, 3528.0], [91.8, 3560.0], [91.9, 3572.0], [92.0, 3591.0], [92.1, 3615.0], [92.2, 3647.0], [92.3, 3657.0], [92.4, 3657.0], [92.5, 3708.0], [92.6, 3748.0], [92.7, 3749.0], [92.8, 3806.0], [92.9, 3832.0], [93.0, 3901.0], [93.1, 3922.0], [93.2, 3974.0], [93.3, 4007.0], [93.4, 4011.0], [93.5, 4028.0], [93.6, 4031.0], [93.7, 4050.0], [93.8, 4051.0], [93.9, 4105.0], [94.0, 4117.0], [94.1, 4125.0], [94.2, 4263.0], [94.3, 4263.0], [94.4, 4319.0], [94.5, 4372.0], [94.6, 4444.0], [94.7, 4450.0], [94.8, 4492.0], [94.9, 4524.0], [95.0, 4539.0], [95.1, 4626.0], [95.2, 4640.0], [95.3, 4649.0], [95.4, 4664.0], [95.5, 4738.0], [95.6, 4952.0], [95.7, 4961.0], [95.8, 5047.0], [95.9, 5300.0], [96.0, 5429.0], [96.1, 5675.0], [96.2, 5881.0], [96.3, 5985.0], [96.4, 6090.0], [96.5, 6427.0], [96.6, 7861.0], [96.7, 8049.0], [96.8, 8296.0], [96.9, 9029.0], [97.0, 21450.0], [97.1, 21463.0], [97.2, 21722.0], [97.3, 21736.0], [97.4, 21821.0], [97.5, 21975.0], [97.6, 21986.0], [97.7, 22131.0], [97.8, 22182.0], [97.9, 22313.0], [98.0, 22322.0], [98.1, 22399.0], [98.2, 22465.0], [98.3, 22485.0], [98.4, 22521.0], [98.5, 22536.0], [98.6, 22749.0], [98.7, 22816.0], [98.8, 22905.0], [98.9, 23016.0], [99.0, 23172.0], [99.1, 23213.0], [99.2, 23213.0], [99.3, 23417.0], [99.4, 23435.0], [99.5, 23576.0], [99.6, 23661.0], [99.7, 23775.0], [99.8, 23940.0], [99.9, 24021.0], [100.0, 24112.0]], "isOverall": false, "label": "/api/auth/login/trainer", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 94.0, "series": [{"data": [[600.0, 37.0], [700.0, 25.0], [800.0, 43.0], [900.0, 56.0], [1000.0, 65.0], [1100.0, 66.0], [1200.0, 60.0], [1300.0, 89.0], [1400.0, 85.0], [1500.0, 85.0], [1600.0, 94.0], [1700.0, 91.0], [1800.0, 53.0], [1900.0, 50.0], [2000.0, 52.0], [2100.0, 56.0], [2200.0, 52.0], [2300.0, 31.0], [2400.0, 35.0], [2500.0, 25.0], [2600.0, 17.0], [2800.0, 14.0], [2700.0, 15.0], [2900.0, 19.0], [3000.0, 9.0], [3100.0, 10.0], [3200.0, 6.0], [3300.0, 8.0], [3400.0, 3.0], [3500.0, 8.0], [3700.0, 3.0], [3600.0, 6.0], [3800.0, 4.0], [3900.0, 4.0], [4000.0, 8.0], [4100.0, 5.0], [4300.0, 3.0], [4200.0, 3.0], [4400.0, 3.0], [4500.0, 4.0], [4600.0, 5.0], [4700.0, 2.0], [4900.0, 3.0], [5000.0, 1.0], [5300.0, 1.0], [5600.0, 1.0], [5400.0, 1.0], [5500.0, 1.0], [5800.0, 1.0], [5900.0, 2.0], [6000.0, 1.0], [6100.0, 1.0], [6400.0, 1.0], [7800.0, 1.0], [8100.0, 1.0], [8000.0, 1.0], [8200.0, 1.0], [9000.0, 2.0], [21500.0, 1.0], [21400.0, 2.0], [21700.0, 2.0], [22500.0, 3.0], [21800.0, 1.0], [21900.0, 3.0], [22300.0, 3.0], [22000.0, 1.0], [22400.0, 3.0], [22200.0, 1.0], [22100.0, 2.0], [23400.0, 2.0], [22700.0, 2.0], [23200.0, 3.0], [23100.0, 1.0], [22900.0, 2.0], [23000.0, 1.0], [23300.0, 1.0], [23500.0, 1.0], [22800.0, 1.0], [23800.0, 1.0], [24100.0, 1.0], [23600.0, 2.0], [23700.0, 1.0], [23900.0, 1.0], [24000.0, 1.0], [300.0, 14.0], [400.0, 24.0], [500.0, 15.0]], "isOverall": false, "label": "/api/auth/login/trainer", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1332.0, "series": [{"data": [[0.0, 25.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 60.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1332.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.97047970479705, "minX": 1.76895972E12, "maxY": 20.0, "series": [{"data": [[1.76895978E12, 20.0], [1.76895984E12, 20.0], [1.7689599E12, 18.895348837209294], [1.76895972E12, 14.97047970479705]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7689599E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1173.0, "minX": 1.0, "maxY": 22399.0, "series": [{"data": [[8.0, 6249.25], [2.0, 21463.0], [9.0, 1922.5714285714278], [10.0, 1576.4499999999998], [11.0, 1810.588235294117], [12.0, 2092.0], [3.0, 21450.0], [13.0, 1632.3333333333333], [14.0, 1661.7083333333335], [15.0, 1726.111111111111], [16.0, 1693.3571428571427], [4.0, 9085.0], [1.0, 22131.0], [17.0, 1916.2857142857138], [18.0, 2090.4583333333335], [19.0, 2057.9], [20.0, 2480.476231633535], [5.0, 1707.0], [6.0, 22399.0], [7.0, 1173.0]], "isOverall": false, "label": "/api/auth/login/trainer", "isController": false}, {"data": [[18.910175438596504, 2431.3922807017548]], "isOverall": false, "label": "/api/auth/login/trainer-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1089.3333333333333, "minX": 1.76895972E12, "maxY": 4769794.266666667, "series": [{"data": [[1.76895978E12, 4687814.733333333], [1.76895984E12, 4769794.266666667], [1.7689599E12, 1731660.8333333333], [1.76895972E12, 2475435.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76895978E12, 3084.3333333333335], [1.76895984E12, 3135.0], [1.7689599E12, 1089.3333333333333], [1.76895972E12, 1716.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7689599E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1954.6236162361622, "minX": 1.76895972E12, "maxY": 3121.8081395348845, "series": [{"data": [[1.76895978E12, 2602.0328542094453], [1.76895984E12, 2284.626262626262], [1.7689599E12, 3121.8081395348845], [1.76895972E12, 1954.6236162361622]], "isOverall": false, "label": "/api/auth/login/trainer", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7689599E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1566.2929292929293, "minX": 1.76895972E12, "maxY": 2520.965116279071, "series": [{"data": [[1.76895978E12, 1957.630390143736], [1.76895984E12, 1566.2929292929293], [1.7689599E12, 2520.965116279071], [1.76895972E12, 1658.5092250922519]], "isOverall": false, "label": "/api/auth/login/trainer", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7689599E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 355.59958932238123, "minX": 1.76895972E12, "maxY": 1359.8546511627908, "series": [{"data": [[1.76895978E12, 355.59958932238123], [1.76895984E12, 473.14949494949536], [1.7689599E12, 1359.8546511627908], [1.76895972E12, 1022.3394833948348]], "isOverall": false, "label": "/api/auth/login/trainer", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7689599E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 342.0, "minX": 1.76895972E12, "maxY": 23213.0, "series": [{"data": [[1.76895978E12, 23213.0], [1.76895984E12, 4105.0], [1.7689599E12, 22131.0], [1.76895972E12, 22506.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76895978E12, 2788.6], [1.76895984E12, 1767.4], [1.7689599E12, 22131.0], [1.76895972E12, 19497.200000000044]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76895978E12, 23213.0], [1.76895984E12, 4105.0], [1.7689599E12, 22131.0], [1.76895972E12, 22506.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76895978E12, 13737.599999999988], [1.76895984E12, 2948.8999999999987], [1.7689599E12, 22131.0], [1.76895972E12, 22074.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76895978E12, 2200.0], [1.76895984E12, 620.0], [1.7689599E12, 21450.0], [1.76895972E12, 342.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76895978E12, 2523.5], [1.76895984E12, 1659.0], [1.7689599E12, 21463.0], [1.76895972E12, 412.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7689599E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 353.0, "minX": 1.0, "maxY": 21463.0, "series": [{"data": [[1.0, 21463.0], [4.0, 1404.0], [8.0, 2606.5], [9.0, 2101.5], [5.0, 353.0], [10.0, 2688.5], [6.0, 430.5], [13.0, 883.0], [7.0, 1680.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1294.5], [2.0, 2371.0], [9.0, 1668.5], [10.0, 1506.5], [11.0, 1615.0], [3.0, 1576.5], [12.0, 1875.0], [13.0, 1852.0], [14.0, 2111.0], [15.0, 2771.0], [4.0, 1789.0], [1.0, 5635.0], [19.0, 2705.0], [5.0, 1625.0], [6.0, 1548.5], [7.0, 1714.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 352.0, "minX": 1.0, "maxY": 21463.0, "series": [{"data": [[1.0, 21463.0], [4.0, 1404.0], [8.0, 2606.5], [9.0, 2101.5], [5.0, 352.0], [10.0, 2688.5], [6.0, 430.0], [13.0, 883.0], [7.0, 1680.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 793.0], [2.0, 1814.0], [9.0, 1197.0], [10.0, 1022.0], [11.0, 1172.5], [3.0, 1143.0], [12.0, 1206.0], [13.0, 1253.5], [14.0, 1432.0], [15.0, 497.0], [4.0, 1152.0], [1.0, 5099.5], [19.0, 1785.0], [5.0, 993.5], [6.0, 1000.0], [7.0, 1262.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.533333333333333, "minX": 1.76895972E12, "maxY": 8.25, "series": [{"data": [[1.76895978E12, 8.116666666666667], [1.76895984E12, 8.25], [1.7689599E12, 2.533333333333333], [1.76895972E12, 4.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7689599E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76895972E12, "maxY": 7.75, "series": [{"data": [[1.76895978E12, 0.5], [1.76895984E12, 0.5], [1.7689599E12, 0.05], [1.76895972E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76895978E12, 7.616666666666666], [1.76895984E12, 7.75], [1.7689599E12, 2.816666666666667], [1.76895972E12, 4.016666666666667]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7689599E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76895972E12, "maxY": 7.75, "series": [{"data": [[1.76895978E12, 0.5], [1.76895984E12, 0.5], [1.7689599E12, 0.05], [1.76895972E12, 0.5]], "isOverall": false, "label": "/api/auth/login/trainer-success", "isController": false}, {"data": [[1.76895978E12, 7.616666666666666], [1.76895984E12, 7.75], [1.7689599E12, 2.816666666666667], [1.76895972E12, 4.016666666666667]], "isOverall": false, "label": "/api/auth/login/trainer-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7689599E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76895972E12, "maxY": 7.75, "series": [{"data": [[1.76895978E12, 0.5], [1.76895984E12, 0.5], [1.7689599E12, 0.05], [1.76895972E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76895978E12, 7.616666666666666], [1.76895984E12, 7.75], [1.7689599E12, 2.816666666666667], [1.76895972E12, 4.016666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7689599E12, "title": "Total Transactions Per Second"}},
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

