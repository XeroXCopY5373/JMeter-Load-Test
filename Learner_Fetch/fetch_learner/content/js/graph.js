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
        data: {"result": {"minY": 284.0, "minX": 0.0, "maxY": 28359.0, "series": [{"data": [[0.0, 284.0], [0.1, 286.0], [0.2, 288.0], [0.3, 289.0], [0.4, 291.0], [0.5, 292.0], [0.6, 292.0], [0.7, 295.0], [0.8, 297.0], [0.9, 300.0], [1.0, 300.0], [1.1, 308.0], [1.2, 308.0], [1.3, 311.0], [1.4, 313.0], [1.5, 315.0], [1.6, 319.0], [1.7, 319.0], [1.8, 349.0], [1.9, 369.0], [2.0, 381.0], [2.1, 383.0], [2.2, 388.0], [2.3, 393.0], [2.4, 408.0], [2.5, 411.0], [2.6, 424.0], [2.7, 428.0], [2.8, 436.0], [2.9, 438.0], [3.0, 447.0], [3.1, 451.0], [3.2, 466.0], [3.3, 472.0], [3.4, 473.0], [3.5, 483.0], [3.6, 494.0], [3.7, 499.0], [3.8, 504.0], [3.9, 521.0], [4.0, 524.0], [4.1, 525.0], [4.2, 535.0], [4.3, 538.0], [4.4, 543.0], [4.5, 547.0], [4.6, 549.0], [4.7, 560.0], [4.8, 571.0], [4.9, 575.0], [5.0, 586.0], [5.1, 590.0], [5.2, 599.0], [5.3, 601.0], [5.4, 602.0], [5.5, 606.0], [5.6, 617.0], [5.7, 620.0], [5.8, 625.0], [5.9, 642.0], [6.0, 643.0], [6.1, 648.0], [6.2, 658.0], [6.3, 662.0], [6.4, 662.0], [6.5, 670.0], [6.6, 672.0], [6.7, 675.0], [6.8, 681.0], [6.9, 686.0], [7.0, 692.0], [7.1, 695.0], [7.2, 703.0], [7.3, 722.0], [7.4, 729.0], [7.5, 730.0], [7.6, 748.0], [7.7, 748.0], [7.8, 754.0], [7.9, 761.0], [8.0, 763.0], [8.1, 767.0], [8.2, 770.0], [8.3, 777.0], [8.4, 781.0], [8.5, 814.0], [8.6, 828.0], [8.7, 831.0], [8.8, 832.0], [8.9, 837.0], [9.0, 839.0], [9.1, 840.0], [9.2, 843.0], [9.3, 850.0], [9.4, 861.0], [9.5, 863.0], [9.6, 866.0], [9.7, 871.0], [9.8, 874.0], [9.9, 876.0], [10.0, 881.0], [10.1, 881.0], [10.2, 884.0], [10.3, 887.0], [10.4, 897.0], [10.5, 899.0], [10.6, 899.0], [10.7, 908.0], [10.8, 909.0], [10.9, 912.0], [11.0, 913.0], [11.1, 914.0], [11.2, 916.0], [11.3, 919.0], [11.4, 921.0], [11.5, 925.0], [11.6, 928.0], [11.7, 930.0], [11.8, 932.0], [11.9, 935.0], [12.0, 937.0], [12.1, 938.0], [12.2, 942.0], [12.3, 943.0], [12.4, 946.0], [12.5, 946.0], [12.6, 950.0], [12.7, 953.0], [12.8, 955.0], [12.9, 956.0], [13.0, 960.0], [13.1, 962.0], [13.2, 963.0], [13.3, 967.0], [13.4, 975.0], [13.5, 979.0], [13.6, 986.0], [13.7, 994.0], [13.8, 996.0], [13.9, 996.0], [14.0, 998.0], [14.1, 1000.0], [14.2, 1001.0], [14.3, 1005.0], [14.4, 1005.0], [14.5, 1005.0], [14.6, 1010.0], [14.7, 1012.0], [14.8, 1013.0], [14.9, 1015.0], [15.0, 1019.0], [15.1, 1021.0], [15.2, 1025.0], [15.3, 1027.0], [15.4, 1029.0], [15.5, 1032.0], [15.6, 1033.0], [15.7, 1034.0], [15.8, 1038.0], [15.9, 1045.0], [16.0, 1049.0], [16.1, 1051.0], [16.2, 1051.0], [16.3, 1054.0], [16.4, 1057.0], [16.5, 1060.0], [16.6, 1066.0], [16.7, 1066.0], [16.8, 1067.0], [16.9, 1068.0], [17.0, 1070.0], [17.1, 1075.0], [17.2, 1077.0], [17.3, 1078.0], [17.4, 1082.0], [17.5, 1082.0], [17.6, 1084.0], [17.7, 1086.0], [17.8, 1086.0], [17.9, 1088.0], [18.0, 1091.0], [18.1, 1091.0], [18.2, 1093.0], [18.3, 1096.0], [18.4, 1098.0], [18.5, 1103.0], [18.6, 1104.0], [18.7, 1109.0], [18.8, 1109.0], [18.9, 1110.0], [19.0, 1112.0], [19.1, 1116.0], [19.2, 1118.0], [19.3, 1123.0], [19.4, 1128.0], [19.5, 1133.0], [19.6, 1134.0], [19.7, 1135.0], [19.8, 1138.0], [19.9, 1139.0], [20.0, 1142.0], [20.1, 1142.0], [20.2, 1145.0], [20.3, 1148.0], [20.4, 1149.0], [20.5, 1149.0], [20.6, 1150.0], [20.7, 1151.0], [20.8, 1154.0], [20.9, 1157.0], [21.0, 1159.0], [21.1, 1159.0], [21.2, 1160.0], [21.3, 1164.0], [21.4, 1166.0], [21.5, 1167.0], [21.6, 1169.0], [21.7, 1171.0], [21.8, 1171.0], [21.9, 1174.0], [22.0, 1175.0], [22.1, 1177.0], [22.2, 1178.0], [22.3, 1186.0], [22.4, 1187.0], [22.5, 1187.0], [22.6, 1193.0], [22.7, 1196.0], [22.8, 1198.0], [22.9, 1199.0], [23.0, 1201.0], [23.1, 1204.0], [23.2, 1205.0], [23.3, 1206.0], [23.4, 1209.0], [23.5, 1212.0], [23.6, 1215.0], [23.7, 1216.0], [23.8, 1216.0], [23.9, 1218.0], [24.0, 1219.0], [24.1, 1221.0], [24.2, 1222.0], [24.3, 1226.0], [24.4, 1229.0], [24.5, 1230.0], [24.6, 1232.0], [24.7, 1234.0], [24.8, 1236.0], [24.9, 1239.0], [25.0, 1240.0], [25.1, 1241.0], [25.2, 1245.0], [25.3, 1246.0], [25.4, 1247.0], [25.5, 1250.0], [25.6, 1251.0], [25.7, 1251.0], [25.8, 1254.0], [25.9, 1255.0], [26.0, 1257.0], [26.1, 1265.0], [26.2, 1273.0], [26.3, 1273.0], [26.4, 1276.0], [26.5, 1277.0], [26.6, 1278.0], [26.7, 1279.0], [26.8, 1280.0], [26.9, 1282.0], [27.0, 1282.0], [27.1, 1283.0], [27.2, 1283.0], [27.3, 1284.0], [27.4, 1286.0], [27.5, 1287.0], [27.6, 1288.0], [27.7, 1288.0], [27.8, 1291.0], [27.9, 1292.0], [28.0, 1294.0], [28.1, 1296.0], [28.2, 1297.0], [28.3, 1300.0], [28.4, 1301.0], [28.5, 1302.0], [28.6, 1303.0], [28.7, 1304.0], [28.8, 1306.0], [28.9, 1307.0], [29.0, 1307.0], [29.1, 1309.0], [29.2, 1310.0], [29.3, 1310.0], [29.4, 1311.0], [29.5, 1313.0], [29.6, 1314.0], [29.7, 1315.0], [29.8, 1318.0], [29.9, 1324.0], [30.0, 1325.0], [30.1, 1326.0], [30.2, 1330.0], [30.3, 1330.0], [30.4, 1332.0], [30.5, 1333.0], [30.6, 1335.0], [30.7, 1336.0], [30.8, 1337.0], [30.9, 1338.0], [31.0, 1342.0], [31.1, 1342.0], [31.2, 1344.0], [31.3, 1344.0], [31.4, 1345.0], [31.5, 1347.0], [31.6, 1350.0], [31.7, 1353.0], [31.8, 1353.0], [31.9, 1354.0], [32.0, 1354.0], [32.1, 1355.0], [32.2, 1356.0], [32.3, 1357.0], [32.4, 1358.0], [32.5, 1359.0], [32.6, 1359.0], [32.7, 1362.0], [32.8, 1362.0], [32.9, 1363.0], [33.0, 1365.0], [33.1, 1366.0], [33.2, 1368.0], [33.3, 1369.0], [33.4, 1370.0], [33.5, 1370.0], [33.6, 1371.0], [33.7, 1373.0], [33.8, 1376.0], [33.9, 1378.0], [34.0, 1379.0], [34.1, 1381.0], [34.2, 1382.0], [34.3, 1382.0], [34.4, 1383.0], [34.5, 1384.0], [34.6, 1384.0], [34.7, 1386.0], [34.8, 1386.0], [34.9, 1386.0], [35.0, 1387.0], [35.1, 1390.0], [35.2, 1390.0], [35.3, 1394.0], [35.4, 1394.0], [35.5, 1396.0], [35.6, 1396.0], [35.7, 1397.0], [35.8, 1398.0], [35.9, 1399.0], [36.0, 1399.0], [36.1, 1400.0], [36.2, 1402.0], [36.3, 1402.0], [36.4, 1406.0], [36.5, 1411.0], [36.6, 1412.0], [36.7, 1414.0], [36.8, 1416.0], [36.9, 1416.0], [37.0, 1417.0], [37.1, 1420.0], [37.2, 1420.0], [37.3, 1426.0], [37.4, 1427.0], [37.5, 1427.0], [37.6, 1429.0], [37.7, 1440.0], [37.8, 1443.0], [37.9, 1445.0], [38.0, 1446.0], [38.1, 1449.0], [38.2, 1450.0], [38.3, 1450.0], [38.4, 1452.0], [38.5, 1452.0], [38.6, 1454.0], [38.7, 1456.0], [38.8, 1456.0], [38.9, 1457.0], [39.0, 1460.0], [39.1, 1465.0], [39.2, 1466.0], [39.3, 1467.0], [39.4, 1468.0], [39.5, 1470.0], [39.6, 1470.0], [39.7, 1475.0], [39.8, 1476.0], [39.9, 1480.0], [40.0, 1480.0], [40.1, 1483.0], [40.2, 1483.0], [40.3, 1484.0], [40.4, 1484.0], [40.5, 1486.0], [40.6, 1490.0], [40.7, 1493.0], [40.8, 1495.0], [40.9, 1495.0], [41.0, 1501.0], [41.1, 1502.0], [41.2, 1505.0], [41.3, 1505.0], [41.4, 1508.0], [41.5, 1508.0], [41.6, 1509.0], [41.7, 1510.0], [41.8, 1513.0], [41.9, 1513.0], [42.0, 1517.0], [42.1, 1520.0], [42.2, 1521.0], [42.3, 1523.0], [42.4, 1524.0], [42.5, 1526.0], [42.6, 1529.0], [42.7, 1530.0], [42.8, 1536.0], [42.9, 1538.0], [43.0, 1539.0], [43.1, 1543.0], [43.2, 1543.0], [43.3, 1544.0], [43.4, 1544.0], [43.5, 1547.0], [43.6, 1549.0], [43.7, 1550.0], [43.8, 1555.0], [43.9, 1556.0], [44.0, 1559.0], [44.1, 1560.0], [44.2, 1562.0], [44.3, 1567.0], [44.4, 1568.0], [44.5, 1574.0], [44.6, 1574.0], [44.7, 1574.0], [44.8, 1575.0], [44.9, 1583.0], [45.0, 1584.0], [45.1, 1588.0], [45.2, 1588.0], [45.3, 1589.0], [45.4, 1590.0], [45.5, 1598.0], [45.6, 1599.0], [45.7, 1604.0], [45.8, 1604.0], [45.9, 1609.0], [46.0, 1609.0], [46.1, 1609.0], [46.2, 1612.0], [46.3, 1612.0], [46.4, 1613.0], [46.5, 1614.0], [46.6, 1615.0], [46.7, 1615.0], [46.8, 1618.0], [46.9, 1618.0], [47.0, 1621.0], [47.1, 1624.0], [47.2, 1624.0], [47.3, 1632.0], [47.4, 1633.0], [47.5, 1634.0], [47.6, 1636.0], [47.7, 1638.0], [47.8, 1639.0], [47.9, 1639.0], [48.0, 1643.0], [48.1, 1644.0], [48.2, 1645.0], [48.3, 1645.0], [48.4, 1645.0], [48.5, 1647.0], [48.6, 1648.0], [48.7, 1650.0], [48.8, 1652.0], [48.9, 1655.0], [49.0, 1655.0], [49.1, 1656.0], [49.2, 1659.0], [49.3, 1659.0], [49.4, 1661.0], [49.5, 1663.0], [49.6, 1665.0], [49.7, 1667.0], [49.8, 1671.0], [49.9, 1673.0], [50.0, 1673.0], [50.1, 1678.0], [50.2, 1679.0], [50.3, 1680.0], [50.4, 1680.0], [50.5, 1684.0], [50.6, 1685.0], [50.7, 1686.0], [50.8, 1686.0], [50.9, 1691.0], [51.0, 1695.0], [51.1, 1698.0], [51.2, 1700.0], [51.3, 1702.0], [51.4, 1703.0], [51.5, 1703.0], [51.6, 1708.0], [51.7, 1709.0], [51.8, 1715.0], [51.9, 1716.0], [52.0, 1717.0], [52.1, 1719.0], [52.2, 1719.0], [52.3, 1720.0], [52.4, 1726.0], [52.5, 1728.0], [52.6, 1731.0], [52.7, 1736.0], [52.8, 1737.0], [52.9, 1742.0], [53.0, 1743.0], [53.1, 1745.0], [53.2, 1746.0], [53.3, 1747.0], [53.4, 1747.0], [53.5, 1749.0], [53.6, 1751.0], [53.7, 1755.0], [53.8, 1758.0], [53.9, 1758.0], [54.0, 1761.0], [54.1, 1761.0], [54.2, 1762.0], [54.3, 1763.0], [54.4, 1765.0], [54.5, 1766.0], [54.6, 1770.0], [54.7, 1774.0], [54.8, 1775.0], [54.9, 1775.0], [55.0, 1777.0], [55.1, 1778.0], [55.2, 1781.0], [55.3, 1783.0], [55.4, 1784.0], [55.5, 1786.0], [55.6, 1786.0], [55.7, 1790.0], [55.8, 1790.0], [55.9, 1797.0], [56.0, 1797.0], [56.1, 1799.0], [56.2, 1799.0], [56.3, 1803.0], [56.4, 1803.0], [56.5, 1804.0], [56.6, 1807.0], [56.7, 1807.0], [56.8, 1810.0], [56.9, 1810.0], [57.0, 1811.0], [57.1, 1812.0], [57.2, 1814.0], [57.3, 1817.0], [57.4, 1820.0], [57.5, 1820.0], [57.6, 1822.0], [57.7, 1825.0], [57.8, 1826.0], [57.9, 1830.0], [58.0, 1833.0], [58.1, 1834.0], [58.2, 1836.0], [58.3, 1837.0], [58.4, 1838.0], [58.5, 1841.0], [58.6, 1842.0], [58.7, 1844.0], [58.8, 1845.0], [58.9, 1847.0], [59.0, 1847.0], [59.1, 1848.0], [59.2, 1848.0], [59.3, 1848.0], [59.4, 1851.0], [59.5, 1853.0], [59.6, 1856.0], [59.7, 1858.0], [59.8, 1863.0], [59.9, 1864.0], [60.0, 1868.0], [60.1, 1870.0], [60.2, 1870.0], [60.3, 1871.0], [60.4, 1876.0], [60.5, 1876.0], [60.6, 1878.0], [60.7, 1881.0], [60.8, 1882.0], [60.9, 1886.0], [61.0, 1887.0], [61.1, 1888.0], [61.2, 1892.0], [61.3, 1894.0], [61.4, 1896.0], [61.5, 1900.0], [61.6, 1900.0], [61.7, 1901.0], [61.8, 1901.0], [61.9, 1903.0], [62.0, 1903.0], [62.1, 1904.0], [62.2, 1905.0], [62.3, 1907.0], [62.4, 1908.0], [62.5, 1910.0], [62.6, 1913.0], [62.7, 1917.0], [62.8, 1925.0], [62.9, 1926.0], [63.0, 1928.0], [63.1, 1930.0], [63.2, 1930.0], [63.3, 1935.0], [63.4, 1936.0], [63.5, 1936.0], [63.6, 1937.0], [63.7, 1938.0], [63.8, 1941.0], [63.9, 1942.0], [64.0, 1943.0], [64.1, 1947.0], [64.2, 1949.0], [64.3, 1954.0], [64.4, 1955.0], [64.5, 1956.0], [64.6, 1958.0], [64.7, 1959.0], [64.8, 1962.0], [64.9, 1964.0], [65.0, 1965.0], [65.1, 1965.0], [65.2, 1967.0], [65.3, 1967.0], [65.4, 1968.0], [65.5, 1970.0], [65.6, 1971.0], [65.7, 1972.0], [65.8, 1973.0], [65.9, 1974.0], [66.0, 1974.0], [66.1, 1975.0], [66.2, 1976.0], [66.3, 1983.0], [66.4, 1986.0], [66.5, 1988.0], [66.6, 1988.0], [66.7, 1990.0], [66.8, 1991.0], [66.9, 1992.0], [67.0, 1993.0], [67.1, 1994.0], [67.2, 1997.0], [67.3, 1997.0], [67.4, 2002.0], [67.5, 2002.0], [67.6, 2005.0], [67.7, 2006.0], [67.8, 2007.0], [67.9, 2007.0], [68.0, 2009.0], [68.1, 2010.0], [68.2, 2012.0], [68.3, 2012.0], [68.4, 2014.0], [68.5, 2015.0], [68.6, 2015.0], [68.7, 2016.0], [68.8, 2016.0], [68.9, 2019.0], [69.0, 2020.0], [69.1, 2021.0], [69.2, 2022.0], [69.3, 2023.0], [69.4, 2025.0], [69.5, 2028.0], [69.6, 2028.0], [69.7, 2033.0], [69.8, 2034.0], [69.9, 2035.0], [70.0, 2038.0], [70.1, 2038.0], [70.2, 2038.0], [70.3, 2038.0], [70.4, 2040.0], [70.5, 2041.0], [70.6, 2041.0], [70.7, 2042.0], [70.8, 2045.0], [70.9, 2046.0], [71.0, 2049.0], [71.1, 2050.0], [71.2, 2051.0], [71.3, 2052.0], [71.4, 2052.0], [71.5, 2061.0], [71.6, 2063.0], [71.7, 2066.0], [71.8, 2066.0], [71.9, 2069.0], [72.0, 2069.0], [72.1, 2072.0], [72.2, 2072.0], [72.3, 2073.0], [72.4, 2074.0], [72.5, 2074.0], [72.6, 2075.0], [72.7, 2077.0], [72.8, 2079.0], [72.9, 2081.0], [73.0, 2083.0], [73.1, 2084.0], [73.2, 2086.0], [73.3, 2087.0], [73.4, 2089.0], [73.5, 2090.0], [73.6, 2091.0], [73.7, 2091.0], [73.8, 2093.0], [73.9, 2093.0], [74.0, 2093.0], [74.1, 2093.0], [74.2, 2094.0], [74.3, 2101.0], [74.4, 2108.0], [74.5, 2114.0], [74.6, 2114.0], [74.7, 2117.0], [74.8, 2117.0], [74.9, 2123.0], [75.0, 2124.0], [75.1, 2125.0], [75.2, 2126.0], [75.3, 2127.0], [75.4, 2135.0], [75.5, 2136.0], [75.6, 2136.0], [75.7, 2142.0], [75.8, 2145.0], [75.9, 2146.0], [76.0, 2146.0], [76.1, 2147.0], [76.2, 2147.0], [76.3, 2153.0], [76.4, 2153.0], [76.5, 2158.0], [76.6, 2159.0], [76.7, 2160.0], [76.8, 2160.0], [76.9, 2162.0], [77.0, 2162.0], [77.1, 2164.0], [77.2, 2164.0], [77.3, 2167.0], [77.4, 2168.0], [77.5, 2169.0], [77.6, 2172.0], [77.7, 2175.0], [77.8, 2177.0], [77.9, 2177.0], [78.0, 2180.0], [78.1, 2181.0], [78.2, 2183.0], [78.3, 2183.0], [78.4, 2184.0], [78.5, 2185.0], [78.6, 2189.0], [78.7, 2189.0], [78.8, 2193.0], [78.9, 2193.0], [79.0, 2193.0], [79.1, 2195.0], [79.2, 2196.0], [79.3, 2199.0], [79.4, 2200.0], [79.5, 2203.0], [79.6, 2205.0], [79.7, 2207.0], [79.8, 2212.0], [79.9, 2213.0], [80.0, 2214.0], [80.1, 2216.0], [80.2, 2219.0], [80.3, 2220.0], [80.4, 2223.0], [80.5, 2225.0], [80.6, 2232.0], [80.7, 2237.0], [80.8, 2239.0], [80.9, 2250.0], [81.0, 2255.0], [81.1, 2260.0], [81.2, 2262.0], [81.3, 2264.0], [81.4, 2265.0], [81.5, 2270.0], [81.6, 2271.0], [81.7, 2276.0], [81.8, 2279.0], [81.9, 2281.0], [82.0, 2282.0], [82.1, 2284.0], [82.2, 2284.0], [82.3, 2289.0], [82.4, 2290.0], [82.5, 2295.0], [82.6, 2296.0], [82.7, 2296.0], [82.8, 2299.0], [82.9, 2306.0], [83.0, 2309.0], [83.1, 2309.0], [83.2, 2314.0], [83.3, 2314.0], [83.4, 2324.0], [83.5, 2325.0], [83.6, 2330.0], [83.7, 2333.0], [83.8, 2343.0], [83.9, 2346.0], [84.0, 2349.0], [84.1, 2350.0], [84.2, 2353.0], [84.3, 2357.0], [84.4, 2360.0], [84.5, 2368.0], [84.6, 2377.0], [84.7, 2379.0], [84.8, 2380.0], [84.9, 2390.0], [85.0, 2392.0], [85.1, 2397.0], [85.2, 2402.0], [85.3, 2405.0], [85.4, 2409.0], [85.5, 2416.0], [85.6, 2419.0], [85.7, 2419.0], [85.8, 2427.0], [85.9, 2427.0], [86.0, 2434.0], [86.1, 2443.0], [86.2, 2457.0], [86.3, 2468.0], [86.4, 2474.0], [86.5, 2487.0], [86.6, 2504.0], [86.7, 2506.0], [86.8, 2509.0], [86.9, 2514.0], [87.0, 2515.0], [87.1, 2536.0], [87.2, 2537.0], [87.3, 2538.0], [87.4, 2538.0], [87.5, 2545.0], [87.6, 2545.0], [87.7, 2564.0], [87.8, 2577.0], [87.9, 2584.0], [88.0, 2594.0], [88.1, 2600.0], [88.2, 2608.0], [88.3, 2616.0], [88.4, 2624.0], [88.5, 2639.0], [88.6, 2663.0], [88.7, 2664.0], [88.8, 2671.0], [88.9, 2672.0], [89.0, 2676.0], [89.1, 2684.0], [89.2, 2688.0], [89.3, 2690.0], [89.4, 2715.0], [89.5, 2723.0], [89.6, 2738.0], [89.7, 2795.0], [89.8, 2810.0], [89.9, 2812.0], [90.0, 2812.0], [90.1, 2858.0], [90.2, 2874.0], [90.3, 2891.0], [90.4, 2894.0], [90.5, 2935.0], [90.6, 2939.0], [90.7, 2966.0], [90.8, 2971.0], [90.9, 2974.0], [91.0, 2998.0], [91.1, 3015.0], [91.2, 3050.0], [91.3, 3083.0], [91.4, 3099.0], [91.5, 3140.0], [91.6, 3163.0], [91.7, 3187.0], [91.8, 3190.0], [91.9, 3228.0], [92.0, 3270.0], [92.1, 3293.0], [92.2, 3303.0], [92.3, 3333.0], [92.4, 3349.0], [92.5, 3375.0], [92.6, 3481.0], [92.7, 3484.0], [92.8, 3556.0], [92.9, 3635.0], [93.0, 3670.0], [93.1, 3713.0], [93.2, 3724.0], [93.3, 3801.0], [93.4, 3830.0], [93.5, 3861.0], [93.6, 3937.0], [93.7, 3955.0], [93.8, 3971.0], [93.9, 3989.0], [94.0, 4022.0], [94.1, 4032.0], [94.2, 4045.0], [94.3, 4078.0], [94.4, 4334.0], [94.5, 4391.0], [94.6, 4446.0], [94.7, 4493.0], [94.8, 4496.0], [94.9, 4595.0], [95.0, 4635.0], [95.1, 4691.0], [95.2, 4720.0], [95.3, 4730.0], [95.4, 4732.0], [95.5, 4753.0], [95.6, 4777.0], [95.7, 4821.0], [95.8, 4827.0], [95.9, 4891.0], [96.0, 4900.0], [96.1, 4939.0], [96.2, 5016.0], [96.3, 5116.0], [96.4, 5315.0], [96.5, 5326.0], [96.6, 5773.0], [96.7, 6671.0], [96.8, 8298.0], [96.9, 9522.0], [97.0, 21495.0], [97.1, 21521.0], [97.2, 21929.0], [97.3, 22005.0], [97.4, 22038.0], [97.5, 22186.0], [97.6, 22234.0], [97.7, 22339.0], [97.8, 22367.0], [97.9, 22397.0], [98.0, 22431.0], [98.1, 22494.0], [98.2, 22499.0], [98.3, 22563.0], [98.4, 22650.0], [98.5, 22777.0], [98.6, 22822.0], [98.7, 22830.0], [98.8, 22927.0], [98.9, 22939.0], [99.0, 23095.0], [99.1, 23130.0], [99.2, 23146.0], [99.3, 23199.0], [99.4, 23266.0], [99.5, 23335.0], [99.6, 23492.0], [99.7, 23775.0], [99.8, 24968.0], [99.9, 25391.0]], "isOverall": false, "label": "/api/learner/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 114.0, "series": [{"data": [[600.0, 28.0], [700.0, 18.0], [800.0, 32.0], [900.0, 51.0], [1000.0, 64.0], [1100.0, 66.0], [1200.0, 77.0], [1300.0, 114.0], [1400.0, 72.0], [1500.0, 68.0], [1600.0, 81.0], [1700.0, 74.0], [1800.0, 77.0], [1900.0, 85.0], [2000.0, 102.0], [2100.0, 74.0], [2300.0, 34.0], [2200.0, 51.0], [2400.0, 21.0], [2500.0, 22.0], [2600.0, 18.0], [2800.0, 10.0], [2700.0, 6.0], [2900.0, 9.0], [3000.0, 6.0], [3100.0, 6.0], [3300.0, 6.0], [3200.0, 4.0], [3400.0, 3.0], [3500.0, 2.0], [3700.0, 3.0], [3600.0, 3.0], [3800.0, 3.0], [3900.0, 6.0], [4000.0, 6.0], [4300.0, 2.0], [4100.0, 1.0], [4400.0, 4.0], [4500.0, 2.0], [4600.0, 3.0], [4700.0, 8.0], [4800.0, 4.0], [4900.0, 3.0], [5000.0, 1.0], [5100.0, 1.0], [5300.0, 2.0], [5200.0, 1.0], [5400.0, 1.0], [5700.0, 1.0], [6600.0, 1.0], [7100.0, 1.0], [8200.0, 1.0], [9500.0, 1.0], [21400.0, 2.0], [21500.0, 2.0], [22000.0, 2.0], [22400.0, 4.0], [22300.0, 5.0], [22500.0, 2.0], [22100.0, 2.0], [22200.0, 1.0], [21900.0, 1.0], [22600.0, 2.0], [22700.0, 1.0], [22800.0, 2.0], [23400.0, 1.0], [23200.0, 2.0], [22900.0, 4.0], [23100.0, 4.0], [23300.0, 2.0], [23000.0, 1.0], [23700.0, 1.0], [24900.0, 1.0], [25300.0, 1.0], [24700.0, 1.0], [28300.0, 1.0], [200.0, 13.0], [300.0, 22.0], [400.0, 20.0], [500.0, 22.0]], "isOverall": false, "label": "/api/learner/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 28300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 27.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1368.0, "series": [{"data": [[0.0, 27.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 28.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 39.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1368.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 12.409638554216876, "minX": 1.76828706E12, "maxY": 20.0, "series": [{"data": [[1.76828712E12, 19.62851405622491], [1.76828718E12, 20.0], [1.76828706E12, 12.409638554216876], [1.76828724E12, 19.360269360269353]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828724E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1482.5238095238096, "minX": 1.0, "maxY": 21929.0, "series": [{"data": [[8.0, 3931.8571428571427], [2.0, 21525.0], [9.0, 1482.5238095238096], [10.0, 2058.625], [11.0, 1911.7222222222226], [12.0, 1689.9999999999998], [3.0, 21929.0], [13.0, 1739.7916666666665], [14.0, 1678.1111111111115], [15.0, 1874.8400000000013], [16.0, 2094.666666666667], [4.0, 3320.0], [1.0, 21450.0], [17.0, 2002.6000000000001], [18.0, 2210.791666666667], [19.0, 2074.5357142857147], [20.0, 2438.327745180221], [5.0, 3670.0], [6.0, 3187.0], [7.0, 5116.0]], "isOverall": false, "label": "/api/learner/fetch/", "isController": false}, {"data": [[18.881668946648436, 2393.580711354309]], "isOverall": false, "label": "/api/learner/fetch/-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 655.7, "minX": 1.76828706E12, "maxY": 4815798.983333333, "series": [{"data": [[1.76828712E12, 4775153.916666667], [1.76828718E12, 4815798.983333333], [1.76828706E12, 1392659.1833333333], [1.76828724E12, 3004489.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76828712E12, 1967.1], [1.76828718E12, 1978.95], [1.76828706E12, 655.7], [1.76828724E12, 1173.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828724E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1863.4337349397588, "minX": 1.76828706E12, "maxY": 2534.151696606785, "series": [{"data": [[1.76828712E12, 2366.248995983934], [1.76828718E12, 2534.151696606785], [1.76828706E12, 1863.4337349397588], [1.76828724E12, 2498.5959595959575]], "isOverall": false, "label": "/api/learner/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828724E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1627.8253012048199, "minX": 1.76828706E12, "maxY": 2098.5988023952077, "series": [{"data": [[1.76828712E12, 1930.4176706827297], [1.76828718E12, 2098.5988023952077], [1.76828706E12, 1627.8253012048199], [1.76828724E12, 2094.141414141414]], "isOverall": false, "label": "/api/learner/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828724E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 217.06734006734, "minX": 1.76828706E12, "maxY": 1150.6566265060242, "series": [{"data": [[1.76828712E12, 850.3815261044172], [1.76828718E12, 552.1177644710577], [1.76828706E12, 1150.6566265060242], [1.76828724E12, 217.06734006734]], "isOverall": false, "label": "/api/learner/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828724E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 284.0, "minX": 1.76828706E12, "maxY": 22939.0, "series": [{"data": [[1.76828712E12, 22650.0], [1.76828718E12, 22939.0], [1.76828706E12, 22005.0], [1.76828724E12, 21929.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76828712E12, 672.0], [1.76828718E12, 1365.0], [1.76828706E12, 284.0], [1.76828724E12, 21450.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76828712E12, 2764.2000000000007], [1.76828718E12, 3933.3000000000047], [1.76828706E12, 19380.400000000045], [1.76828724E12, 21929.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76828712E12, 22650.0], [1.76828718E12, 22939.0], [1.76828706E12, 22005.0], [1.76828724E12, 21929.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76828712E12, 1067.0], [1.76828718E12, 1739.5], [1.76828706E12, 301.5], [1.76828724E12, 21525.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76828712E12, 10972.199999999972], [1.76828718E12, 15559.64999999999], [1.76828706E12, 21738.8], [1.76828724E12, 21929.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828724E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 296.0, "minX": 1.0, "maxY": 21727.0, "series": [{"data": [[1.0, 21727.0], [4.0, 333.5], [17.0, 9522.0], [9.0, 1396.0], [5.0, 2008.5], [10.0, 1596.5], [11.0, 1965.0], [3.0, 313.0], [6.0, 296.0], [12.0, 1100.0], [13.0, 944.0], [7.0, 1198.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1452.5], [2.0, 1519.5], [9.0, 1709.0], [10.0, 1544.0], [11.0, 1400.0], [12.0, 1946.5], [3.0, 2841.5], [13.0, 2014.0], [14.0, 2162.0], [15.0, 2020.0], [1.0, 1803.0], [4.0, 1875.5], [17.0, 4622.5], [5.0, 1504.0], [6.0, 1611.0], [7.0, 1358.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 295.5, "minX": 1.0, "maxY": 21727.0, "series": [{"data": [[1.0, 21727.0], [4.0, 333.0], [17.0, 9522.0], [9.0, 1396.0], [5.0, 2008.5], [10.0, 1596.5], [11.0, 1965.0], [3.0, 313.0], [6.0, 295.5], [12.0, 1100.0], [13.0, 944.0], [7.0, 1198.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1048.0], [2.0, 1279.5], [9.0, 1371.0], [10.0, 1095.0], [11.0, 991.0], [12.0, 1459.0], [3.0, 2473.5], [13.0, 1493.0], [14.0, 1758.0], [15.0, 1746.0], [1.0, 1437.0], [4.0, 1532.0], [17.0, 3983.0], [5.0, 1089.0], [6.0, 1077.5], [7.0, 1022.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.033333333333333, "minX": 1.76828706E12, "maxY": 8.366666666666667, "series": [{"data": [[1.76828712E12, 8.366666666666667], [1.76828718E12, 8.35], [1.76828706E12, 3.033333333333333], [1.76828724E12, 4.616666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828724E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76828706E12, "maxY": 7.85, "series": [{"data": [[1.76828712E12, 0.5166666666666667], [1.76828718E12, 0.5], [1.76828706E12, 0.5], [1.76828724E12, 0.05]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76828712E12, 7.783333333333333], [1.76828718E12, 7.85], [1.76828706E12, 2.2666666666666666], [1.76828724E12, 4.9]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828724E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76828706E12, "maxY": 7.85, "series": [{"data": [[1.76828712E12, 0.5166666666666667], [1.76828718E12, 0.5], [1.76828706E12, 0.5], [1.76828724E12, 0.05]], "isOverall": false, "label": "/api/learner/fetch/-success", "isController": false}, {"data": [[1.76828712E12, 7.783333333333333], [1.76828718E12, 7.85], [1.76828706E12, 2.2666666666666666], [1.76828724E12, 4.9]], "isOverall": false, "label": "/api/learner/fetch/-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828724E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76828706E12, "maxY": 7.85, "series": [{"data": [[1.76828712E12, 0.5166666666666667], [1.76828718E12, 0.5], [1.76828706E12, 0.5], [1.76828724E12, 0.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76828712E12, 7.783333333333333], [1.76828718E12, 7.85], [1.76828706E12, 2.2666666666666666], [1.76828724E12, 4.9]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828724E12, "title": "Total Transactions Per Second"}},
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

