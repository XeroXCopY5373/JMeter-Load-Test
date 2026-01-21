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
        data: {"result": {"minY": 219.0, "minX": 0.0, "maxY": 23556.0, "series": [{"data": [[0.0, 219.0], [0.1, 222.0], [0.2, 223.0], [0.3, 224.0], [0.4, 225.0], [0.5, 227.0], [0.6, 227.0], [0.7, 228.0], [0.8, 228.0], [0.9, 230.0], [1.0, 230.0], [1.1, 232.0], [1.2, 233.0], [1.3, 237.0], [1.4, 238.0], [1.5, 240.0], [1.6, 299.0], [1.7, 333.0], [1.8, 351.0], [1.9, 366.0], [2.0, 376.0], [2.1, 394.0], [2.2, 407.0], [2.3, 408.0], [2.4, 413.0], [2.5, 415.0], [2.6, 420.0], [2.7, 425.0], [2.8, 430.0], [2.9, 433.0], [3.0, 435.0], [3.1, 437.0], [3.2, 439.0], [3.3, 450.0], [3.4, 463.0], [3.5, 475.0], [3.6, 485.0], [3.7, 486.0], [3.8, 492.0], [3.9, 507.0], [4.0, 509.0], [4.1, 518.0], [4.2, 532.0], [4.3, 532.0], [4.4, 533.0], [4.5, 533.0], [4.6, 539.0], [4.7, 557.0], [4.8, 567.0], [4.9, 595.0], [5.0, 607.0], [5.1, 611.0], [5.2, 614.0], [5.3, 622.0], [5.4, 624.0], [5.5, 632.0], [5.6, 647.0], [5.7, 648.0], [5.8, 655.0], [5.9, 656.0], [6.0, 662.0], [6.1, 671.0], [6.2, 679.0], [6.3, 684.0], [6.4, 695.0], [6.5, 701.0], [6.6, 707.0], [6.7, 711.0], [6.8, 716.0], [6.9, 719.0], [7.0, 724.0], [7.1, 731.0], [7.2, 738.0], [7.3, 745.0], [7.4, 749.0], [7.5, 754.0], [7.6, 755.0], [7.7, 762.0], [7.8, 766.0], [7.9, 778.0], [8.0, 785.0], [8.1, 786.0], [8.2, 786.0], [8.3, 801.0], [8.4, 807.0], [8.5, 807.0], [8.6, 812.0], [8.7, 813.0], [8.8, 816.0], [8.9, 823.0], [9.0, 828.0], [9.1, 837.0], [9.2, 844.0], [9.3, 851.0], [9.4, 858.0], [9.5, 860.0], [9.6, 863.0], [9.7, 866.0], [9.8, 868.0], [9.9, 869.0], [10.0, 872.0], [10.1, 877.0], [10.2, 878.0], [10.3, 880.0], [10.4, 881.0], [10.5, 892.0], [10.6, 893.0], [10.7, 902.0], [10.8, 903.0], [10.9, 904.0], [11.0, 904.0], [11.1, 916.0], [11.2, 918.0], [11.3, 927.0], [11.4, 930.0], [11.5, 934.0], [11.6, 935.0], [11.7, 936.0], [11.8, 936.0], [11.9, 942.0], [12.0, 944.0], [12.1, 945.0], [12.2, 950.0], [12.3, 950.0], [12.4, 952.0], [12.5, 952.0], [12.6, 965.0], [12.7, 968.0], [12.8, 975.0], [12.9, 977.0], [13.0, 988.0], [13.1, 992.0], [13.2, 996.0], [13.3, 1000.0], [13.4, 1002.0], [13.5, 1003.0], [13.6, 1006.0], [13.7, 1010.0], [13.8, 1016.0], [13.9, 1018.0], [14.0, 1021.0], [14.1, 1022.0], [14.2, 1024.0], [14.3, 1025.0], [14.4, 1025.0], [14.5, 1031.0], [14.6, 1031.0], [14.7, 1033.0], [14.8, 1037.0], [14.9, 1037.0], [15.0, 1040.0], [15.1, 1043.0], [15.2, 1043.0], [15.3, 1050.0], [15.4, 1051.0], [15.5, 1051.0], [15.6, 1051.0], [15.7, 1057.0], [15.8, 1057.0], [15.9, 1060.0], [16.0, 1066.0], [16.1, 1067.0], [16.2, 1068.0], [16.3, 1069.0], [16.4, 1073.0], [16.5, 1075.0], [16.6, 1077.0], [16.7, 1078.0], [16.8, 1081.0], [16.9, 1082.0], [17.0, 1084.0], [17.1, 1084.0], [17.2, 1084.0], [17.3, 1098.0], [17.4, 1100.0], [17.5, 1103.0], [17.6, 1105.0], [17.7, 1111.0], [17.8, 1114.0], [17.9, 1120.0], [18.0, 1127.0], [18.1, 1130.0], [18.2, 1133.0], [18.3, 1137.0], [18.4, 1137.0], [18.5, 1139.0], [18.6, 1142.0], [18.7, 1143.0], [18.8, 1147.0], [18.9, 1149.0], [19.0, 1154.0], [19.1, 1156.0], [19.2, 1159.0], [19.3, 1161.0], [19.4, 1161.0], [19.5, 1163.0], [19.6, 1167.0], [19.7, 1169.0], [19.8, 1174.0], [19.9, 1179.0], [20.0, 1185.0], [20.1, 1187.0], [20.2, 1189.0], [20.3, 1189.0], [20.4, 1191.0], [20.5, 1194.0], [20.6, 1195.0], [20.7, 1195.0], [20.8, 1197.0], [20.9, 1198.0], [21.0, 1199.0], [21.1, 1202.0], [21.2, 1203.0], [21.3, 1203.0], [21.4, 1205.0], [21.5, 1207.0], [21.6, 1209.0], [21.7, 1211.0], [21.8, 1213.0], [21.9, 1215.0], [22.0, 1215.0], [22.1, 1217.0], [22.2, 1219.0], [22.3, 1222.0], [22.4, 1227.0], [22.5, 1228.0], [22.6, 1231.0], [22.7, 1231.0], [22.8, 1232.0], [22.9, 1232.0], [23.0, 1234.0], [23.1, 1234.0], [23.2, 1235.0], [23.3, 1237.0], [23.4, 1240.0], [23.5, 1243.0], [23.6, 1243.0], [23.7, 1245.0], [23.8, 1246.0], [23.9, 1247.0], [24.0, 1251.0], [24.1, 1257.0], [24.2, 1262.0], [24.3, 1265.0], [24.4, 1266.0], [24.5, 1267.0], [24.6, 1273.0], [24.7, 1273.0], [24.8, 1274.0], [24.9, 1277.0], [25.0, 1280.0], [25.1, 1281.0], [25.2, 1282.0], [25.3, 1283.0], [25.4, 1286.0], [25.5, 1287.0], [25.6, 1289.0], [25.7, 1290.0], [25.8, 1292.0], [25.9, 1294.0], [26.0, 1299.0], [26.1, 1302.0], [26.2, 1302.0], [26.3, 1302.0], [26.4, 1303.0], [26.5, 1304.0], [26.6, 1305.0], [26.7, 1306.0], [26.8, 1310.0], [26.9, 1310.0], [27.0, 1311.0], [27.1, 1315.0], [27.2, 1319.0], [27.3, 1319.0], [27.4, 1320.0], [27.5, 1322.0], [27.6, 1322.0], [27.7, 1324.0], [27.8, 1325.0], [27.9, 1326.0], [28.0, 1331.0], [28.1, 1333.0], [28.2, 1338.0], [28.3, 1344.0], [28.4, 1345.0], [28.5, 1346.0], [28.6, 1349.0], [28.7, 1351.0], [28.8, 1354.0], [28.9, 1355.0], [29.0, 1357.0], [29.1, 1358.0], [29.2, 1363.0], [29.3, 1365.0], [29.4, 1366.0], [29.5, 1367.0], [29.6, 1368.0], [29.7, 1372.0], [29.8, 1373.0], [29.9, 1377.0], [30.0, 1378.0], [30.1, 1383.0], [30.2, 1383.0], [30.3, 1388.0], [30.4, 1389.0], [30.5, 1391.0], [30.6, 1393.0], [30.7, 1395.0], [30.8, 1396.0], [30.9, 1397.0], [31.0, 1411.0], [31.1, 1412.0], [31.2, 1413.0], [31.3, 1418.0], [31.4, 1418.0], [31.5, 1419.0], [31.6, 1421.0], [31.7, 1424.0], [31.8, 1425.0], [31.9, 1425.0], [32.0, 1428.0], [32.1, 1428.0], [32.2, 1428.0], [32.3, 1429.0], [32.4, 1429.0], [32.5, 1431.0], [32.6, 1431.0], [32.7, 1436.0], [32.8, 1440.0], [32.9, 1441.0], [33.0, 1441.0], [33.1, 1448.0], [33.2, 1448.0], [33.3, 1450.0], [33.4, 1451.0], [33.5, 1452.0], [33.6, 1454.0], [33.7, 1456.0], [33.8, 1458.0], [33.9, 1461.0], [34.0, 1465.0], [34.1, 1467.0], [34.2, 1472.0], [34.3, 1473.0], [34.4, 1474.0], [34.5, 1475.0], [34.6, 1476.0], [34.7, 1477.0], [34.8, 1478.0], [34.9, 1482.0], [35.0, 1483.0], [35.1, 1484.0], [35.2, 1485.0], [35.3, 1488.0], [35.4, 1488.0], [35.5, 1489.0], [35.6, 1491.0], [35.7, 1492.0], [35.8, 1494.0], [35.9, 1495.0], [36.0, 1496.0], [36.1, 1497.0], [36.2, 1499.0], [36.3, 1501.0], [36.4, 1504.0], [36.5, 1507.0], [36.6, 1508.0], [36.7, 1508.0], [36.8, 1509.0], [36.9, 1509.0], [37.0, 1512.0], [37.1, 1512.0], [37.2, 1514.0], [37.3, 1515.0], [37.4, 1515.0], [37.5, 1517.0], [37.6, 1521.0], [37.7, 1522.0], [37.8, 1526.0], [37.9, 1528.0], [38.0, 1528.0], [38.1, 1530.0], [38.2, 1532.0], [38.3, 1533.0], [38.4, 1537.0], [38.5, 1537.0], [38.6, 1540.0], [38.7, 1541.0], [38.8, 1543.0], [38.9, 1546.0], [39.0, 1548.0], [39.1, 1548.0], [39.2, 1549.0], [39.3, 1549.0], [39.4, 1554.0], [39.5, 1557.0], [39.6, 1559.0], [39.7, 1561.0], [39.8, 1563.0], [39.9, 1564.0], [40.0, 1565.0], [40.1, 1568.0], [40.2, 1568.0], [40.3, 1572.0], [40.4, 1576.0], [40.5, 1577.0], [40.6, 1578.0], [40.7, 1580.0], [40.8, 1580.0], [40.9, 1583.0], [41.0, 1586.0], [41.1, 1587.0], [41.2, 1589.0], [41.3, 1590.0], [41.4, 1591.0], [41.5, 1592.0], [41.6, 1592.0], [41.7, 1596.0], [41.8, 1598.0], [41.9, 1598.0], [42.0, 1598.0], [42.1, 1605.0], [42.2, 1607.0], [42.3, 1609.0], [42.4, 1611.0], [42.5, 1612.0], [42.6, 1612.0], [42.7, 1614.0], [42.8, 1615.0], [42.9, 1620.0], [43.0, 1620.0], [43.1, 1620.0], [43.2, 1621.0], [43.3, 1621.0], [43.4, 1622.0], [43.5, 1628.0], [43.6, 1629.0], [43.7, 1631.0], [43.8, 1637.0], [43.9, 1637.0], [44.0, 1639.0], [44.1, 1642.0], [44.2, 1643.0], [44.3, 1645.0], [44.4, 1646.0], [44.5, 1648.0], [44.6, 1649.0], [44.7, 1652.0], [44.8, 1654.0], [44.9, 1658.0], [45.0, 1658.0], [45.1, 1661.0], [45.2, 1664.0], [45.3, 1670.0], [45.4, 1673.0], [45.5, 1676.0], [45.6, 1676.0], [45.7, 1677.0], [45.8, 1679.0], [45.9, 1682.0], [46.0, 1684.0], [46.1, 1687.0], [46.2, 1688.0], [46.3, 1692.0], [46.4, 1694.0], [46.5, 1694.0], [46.6, 1697.0], [46.7, 1699.0], [46.8, 1707.0], [46.9, 1708.0], [47.0, 1710.0], [47.1, 1718.0], [47.2, 1719.0], [47.3, 1721.0], [47.4, 1723.0], [47.5, 1726.0], [47.6, 1727.0], [47.7, 1732.0], [47.8, 1734.0], [47.9, 1737.0], [48.0, 1739.0], [48.1, 1740.0], [48.2, 1742.0], [48.3, 1743.0], [48.4, 1743.0], [48.5, 1744.0], [48.6, 1747.0], [48.7, 1750.0], [48.8, 1752.0], [48.9, 1752.0], [49.0, 1753.0], [49.1, 1755.0], [49.2, 1756.0], [49.3, 1759.0], [49.4, 1760.0], [49.5, 1760.0], [49.6, 1763.0], [49.7, 1764.0], [49.8, 1764.0], [49.9, 1765.0], [50.0, 1766.0], [50.1, 1766.0], [50.2, 1769.0], [50.3, 1770.0], [50.4, 1773.0], [50.5, 1777.0], [50.6, 1781.0], [50.7, 1785.0], [50.8, 1786.0], [50.9, 1788.0], [51.0, 1795.0], [51.1, 1796.0], [51.2, 1796.0], [51.3, 1800.0], [51.4, 1800.0], [51.5, 1800.0], [51.6, 1801.0], [51.7, 1802.0], [51.8, 1804.0], [51.9, 1805.0], [52.0, 1806.0], [52.1, 1809.0], [52.2, 1816.0], [52.3, 1819.0], [52.4, 1822.0], [52.5, 1822.0], [52.6, 1823.0], [52.7, 1828.0], [52.8, 1829.0], [52.9, 1829.0], [53.0, 1831.0], [53.1, 1831.0], [53.2, 1834.0], [53.3, 1836.0], [53.4, 1839.0], [53.5, 1840.0], [53.6, 1844.0], [53.7, 1845.0], [53.8, 1847.0], [53.9, 1849.0], [54.0, 1851.0], [54.1, 1851.0], [54.2, 1854.0], [54.3, 1855.0], [54.4, 1858.0], [54.5, 1859.0], [54.6, 1861.0], [54.7, 1862.0], [54.8, 1864.0], [54.9, 1864.0], [55.0, 1865.0], [55.1, 1869.0], [55.2, 1871.0], [55.3, 1872.0], [55.4, 1873.0], [55.5, 1874.0], [55.6, 1875.0], [55.7, 1875.0], [55.8, 1877.0], [55.9, 1878.0], [56.0, 1880.0], [56.1, 1886.0], [56.2, 1886.0], [56.3, 1889.0], [56.4, 1890.0], [56.5, 1890.0], [56.6, 1892.0], [56.7, 1894.0], [56.8, 1894.0], [56.9, 1896.0], [57.0, 1898.0], [57.1, 1898.0], [57.2, 1898.0], [57.3, 1899.0], [57.4, 1899.0], [57.5, 1903.0], [57.6, 1903.0], [57.7, 1905.0], [57.8, 1906.0], [57.9, 1907.0], [58.0, 1909.0], [58.1, 1912.0], [58.2, 1913.0], [58.3, 1914.0], [58.4, 1915.0], [58.5, 1918.0], [58.6, 1920.0], [58.7, 1921.0], [58.8, 1921.0], [58.9, 1923.0], [59.0, 1924.0], [59.1, 1924.0], [59.2, 1926.0], [59.3, 1926.0], [59.4, 1929.0], [59.5, 1931.0], [59.6, 1932.0], [59.7, 1933.0], [59.8, 1934.0], [59.9, 1934.0], [60.0, 1937.0], [60.1, 1942.0], [60.2, 1943.0], [60.3, 1945.0], [60.4, 1947.0], [60.5, 1950.0], [60.6, 1952.0], [60.7, 1952.0], [60.8, 1953.0], [60.9, 1957.0], [61.0, 1958.0], [61.1, 1959.0], [61.2, 1962.0], [61.3, 1963.0], [61.4, 1964.0], [61.5, 1965.0], [61.6, 1965.0], [61.7, 1966.0], [61.8, 1966.0], [61.9, 1968.0], [62.0, 1971.0], [62.1, 1973.0], [62.2, 1976.0], [62.3, 1978.0], [62.4, 1978.0], [62.5, 1979.0], [62.6, 1981.0], [62.7, 1982.0], [62.8, 1984.0], [62.9, 1987.0], [63.0, 1989.0], [63.1, 1990.0], [63.2, 1991.0], [63.3, 1991.0], [63.4, 1993.0], [63.5, 1994.0], [63.6, 1995.0], [63.7, 1997.0], [63.8, 1997.0], [63.9, 1999.0], [64.0, 2002.0], [64.1, 2002.0], [64.2, 2003.0], [64.3, 2006.0], [64.4, 2006.0], [64.5, 2009.0], [64.6, 2012.0], [64.7, 2013.0], [64.8, 2014.0], [64.9, 2014.0], [65.0, 2018.0], [65.1, 2022.0], [65.2, 2023.0], [65.3, 2026.0], [65.4, 2026.0], [65.5, 2027.0], [65.6, 2030.0], [65.7, 2032.0], [65.8, 2034.0], [65.9, 2036.0], [66.0, 2038.0], [66.1, 2038.0], [66.2, 2040.0], [66.3, 2041.0], [66.4, 2042.0], [66.5, 2043.0], [66.6, 2044.0], [66.7, 2045.0], [66.8, 2049.0], [66.9, 2051.0], [67.0, 2051.0], [67.1, 2053.0], [67.2, 2060.0], [67.3, 2061.0], [67.4, 2062.0], [67.5, 2063.0], [67.6, 2069.0], [67.7, 2069.0], [67.8, 2072.0], [67.9, 2074.0], [68.0, 2075.0], [68.1, 2076.0], [68.2, 2077.0], [68.3, 2079.0], [68.4, 2082.0], [68.5, 2083.0], [68.6, 2083.0], [68.7, 2088.0], [68.8, 2088.0], [68.9, 2091.0], [69.0, 2091.0], [69.1, 2092.0], [69.2, 2094.0], [69.3, 2096.0], [69.4, 2096.0], [69.5, 2097.0], [69.6, 2101.0], [69.7, 2101.0], [69.8, 2105.0], [69.9, 2112.0], [70.0, 2112.0], [70.1, 2115.0], [70.2, 2116.0], [70.3, 2116.0], [70.4, 2118.0], [70.5, 2119.0], [70.6, 2120.0], [70.7, 2123.0], [70.8, 2123.0], [70.9, 2124.0], [71.0, 2128.0], [71.1, 2129.0], [71.2, 2133.0], [71.3, 2135.0], [71.4, 2136.0], [71.5, 2138.0], [71.6, 2139.0], [71.7, 2139.0], [71.8, 2143.0], [71.9, 2147.0], [72.0, 2148.0], [72.1, 2150.0], [72.2, 2150.0], [72.3, 2151.0], [72.4, 2151.0], [72.5, 2154.0], [72.6, 2155.0], [72.7, 2157.0], [72.8, 2159.0], [72.9, 2161.0], [73.0, 2168.0], [73.1, 2170.0], [73.2, 2172.0], [73.3, 2173.0], [73.4, 2175.0], [73.5, 2179.0], [73.6, 2179.0], [73.7, 2184.0], [73.8, 2185.0], [73.9, 2185.0], [74.0, 2188.0], [74.1, 2189.0], [74.2, 2190.0], [74.3, 2191.0], [74.4, 2193.0], [74.5, 2194.0], [74.6, 2197.0], [74.7, 2201.0], [74.8, 2201.0], [74.9, 2202.0], [75.0, 2204.0], [75.1, 2206.0], [75.2, 2210.0], [75.3, 2212.0], [75.4, 2213.0], [75.5, 2215.0], [75.6, 2215.0], [75.7, 2219.0], [75.8, 2226.0], [75.9, 2226.0], [76.0, 2227.0], [76.1, 2228.0], [76.2, 2228.0], [76.3, 2229.0], [76.4, 2232.0], [76.5, 2233.0], [76.6, 2234.0], [76.7, 2234.0], [76.8, 2236.0], [76.9, 2238.0], [77.0, 2240.0], [77.1, 2242.0], [77.2, 2243.0], [77.3, 2244.0], [77.4, 2247.0], [77.5, 2250.0], [77.6, 2250.0], [77.7, 2257.0], [77.8, 2258.0], [77.9, 2259.0], [78.0, 2261.0], [78.1, 2262.0], [78.2, 2263.0], [78.3, 2266.0], [78.4, 2268.0], [78.5, 2272.0], [78.6, 2280.0], [78.7, 2281.0], [78.8, 2289.0], [78.9, 2291.0], [79.0, 2292.0], [79.1, 2293.0], [79.2, 2295.0], [79.3, 2302.0], [79.4, 2304.0], [79.5, 2305.0], [79.6, 2306.0], [79.7, 2313.0], [79.8, 2313.0], [79.9, 2317.0], [80.0, 2322.0], [80.1, 2325.0], [80.2, 2327.0], [80.3, 2333.0], [80.4, 2334.0], [80.5, 2336.0], [80.6, 2339.0], [80.7, 2340.0], [80.8, 2343.0], [80.9, 2345.0], [81.0, 2345.0], [81.1, 2347.0], [81.2, 2350.0], [81.3, 2355.0], [81.4, 2358.0], [81.5, 2360.0], [81.6, 2366.0], [81.7, 2370.0], [81.8, 2371.0], [81.9, 2374.0], [82.0, 2376.0], [82.1, 2377.0], [82.2, 2381.0], [82.3, 2386.0], [82.4, 2387.0], [82.5, 2389.0], [82.6, 2390.0], [82.7, 2399.0], [82.8, 2406.0], [82.9, 2407.0], [83.0, 2409.0], [83.1, 2411.0], [83.2, 2412.0], [83.3, 2412.0], [83.4, 2415.0], [83.5, 2417.0], [83.6, 2418.0], [83.7, 2419.0], [83.8, 2419.0], [83.9, 2430.0], [84.0, 2430.0], [84.1, 2440.0], [84.2, 2444.0], [84.3, 2445.0], [84.4, 2453.0], [84.5, 2458.0], [84.6, 2458.0], [84.7, 2468.0], [84.8, 2473.0], [84.9, 2491.0], [85.0, 2506.0], [85.1, 2508.0], [85.2, 2511.0], [85.3, 2517.0], [85.4, 2520.0], [85.5, 2523.0], [85.6, 2527.0], [85.7, 2529.0], [85.8, 2536.0], [85.9, 2540.0], [86.0, 2541.0], [86.1, 2554.0], [86.2, 2558.0], [86.3, 2562.0], [86.4, 2572.0], [86.5, 2578.0], [86.6, 2587.0], [86.7, 2588.0], [86.8, 2590.0], [86.9, 2604.0], [87.0, 2609.0], [87.1, 2613.0], [87.2, 2614.0], [87.3, 2620.0], [87.4, 2629.0], [87.5, 2640.0], [87.6, 2646.0], [87.7, 2648.0], [87.8, 2651.0], [87.9, 2659.0], [88.0, 2663.0], [88.1, 2678.0], [88.2, 2698.0], [88.3, 2712.0], [88.4, 2720.0], [88.5, 2729.0], [88.6, 2734.0], [88.7, 2738.0], [88.8, 2740.0], [88.9, 2751.0], [89.0, 2770.0], [89.1, 2791.0], [89.2, 2801.0], [89.3, 2805.0], [89.4, 2810.0], [89.5, 2838.0], [89.6, 2850.0], [89.7, 2851.0], [89.8, 2854.0], [89.9, 2860.0], [90.0, 2873.0], [90.1, 2885.0], [90.2, 2892.0], [90.3, 2900.0], [90.4, 2911.0], [90.5, 2918.0], [90.6, 2927.0], [90.7, 2943.0], [90.8, 2952.0], [90.9, 2979.0], [91.0, 2991.0], [91.1, 3002.0], [91.2, 3005.0], [91.3, 3006.0], [91.4, 3023.0], [91.5, 3060.0], [91.6, 3062.0], [91.7, 3083.0], [91.8, 3101.0], [91.9, 3103.0], [92.0, 3130.0], [92.1, 3133.0], [92.2, 3136.0], [92.3, 3142.0], [92.4, 3190.0], [92.5, 3194.0], [92.6, 3208.0], [92.7, 3214.0], [92.8, 3218.0], [92.9, 3233.0], [93.0, 3233.0], [93.1, 3251.0], [93.2, 3269.0], [93.3, 3270.0], [93.4, 3294.0], [93.5, 3308.0], [93.6, 3317.0], [93.7, 3341.0], [93.8, 3360.0], [93.9, 3363.0], [94.0, 3374.0], [94.1, 3390.0], [94.2, 3397.0], [94.3, 3442.0], [94.4, 3448.0], [94.5, 3464.0], [94.6, 3479.0], [94.7, 3479.0], [94.8, 3511.0], [94.9, 3570.0], [95.0, 3643.0], [95.1, 3669.0], [95.2, 3699.0], [95.3, 3743.0], [95.4, 3772.0], [95.5, 3781.0], [95.6, 3825.0], [95.7, 3889.0], [95.8, 3891.0], [95.9, 3920.0], [96.0, 4025.0], [96.1, 4037.0], [96.2, 4080.0], [96.3, 4147.0], [96.4, 4150.0], [96.5, 4202.0], [96.6, 4211.0], [96.7, 4235.0], [96.8, 4269.0], [96.9, 4332.0], [97.0, 4349.0], [97.1, 4366.0], [97.2, 4442.0], [97.3, 4490.0], [97.4, 4573.0], [97.5, 4601.0], [97.6, 4667.0], [97.7, 4760.0], [97.8, 4826.0], [97.9, 4986.0], [98.0, 5101.0], [98.1, 5168.0], [98.2, 5846.0], [98.3, 6809.0], [98.4, 7366.0], [98.5, 8802.0], [98.6, 9135.0], [98.7, 11908.0], [98.8, 22244.0], [98.9, 22314.0], [99.0, 22376.0], [99.1, 22597.0], [99.2, 22721.0], [99.3, 22783.0], [99.4, 22894.0], [99.5, 22977.0], [99.6, 23051.0], [99.7, 23171.0], [99.8, 23218.0], [99.9, 23437.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 107.0, "series": [{"data": [[600.0, 24.0], [700.0, 30.0], [800.0, 39.0], [900.0, 43.0], [1000.0, 68.0], [1100.0, 60.0], [1200.0, 82.0], [1300.0, 80.0], [1400.0, 88.0], [1500.0, 95.0], [1600.0, 77.0], [1700.0, 75.0], [1800.0, 101.0], [1900.0, 107.0], [2000.0, 93.0], [2100.0, 83.0], [2200.0, 76.0], [2300.0, 57.0], [2400.0, 37.0], [2500.0, 31.0], [2600.0, 23.0], [2800.0, 18.0], [2700.0, 15.0], [2900.0, 13.0], [3000.0, 12.0], [3100.0, 12.0], [3300.0, 12.0], [3200.0, 16.0], [3400.0, 9.0], [3500.0, 3.0], [3600.0, 5.0], [3700.0, 5.0], [3800.0, 4.0], [3900.0, 3.0], [4000.0, 5.0], [4200.0, 6.0], [4300.0, 5.0], [4100.0, 3.0], [4500.0, 2.0], [4400.0, 3.0], [4600.0, 3.0], [4800.0, 1.0], [4700.0, 2.0], [4900.0, 2.0], [5000.0, 1.0], [5100.0, 2.0], [5300.0, 1.0], [5800.0, 1.0], [6000.0, 1.0], [6800.0, 1.0], [7300.0, 1.0], [7900.0, 1.0], [9100.0, 1.0], [8800.0, 1.0], [11200.0, 1.0], [11900.0, 1.0], [22300.0, 3.0], [22200.0, 1.0], [22400.0, 1.0], [22100.0, 1.0], [22500.0, 1.0], [23300.0, 1.0], [23000.0, 3.0], [22700.0, 3.0], [22800.0, 2.0], [22900.0, 1.0], [23400.0, 1.0], [23100.0, 1.0], [23200.0, 1.0], [23500.0, 1.0], [200.0, 27.0], [300.0, 9.0], [400.0, 28.0], [500.0, 18.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 23500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 38.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1495.0, "series": [{"data": [[0.0, 48.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 63.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 38.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1495.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.239215686274508, "minX": 1.76895594E12, "maxY": 20.0, "series": [{"data": [[1.76895606E12, 20.0], [1.76895612E12, 19.49184782608696], [1.768956E12, 19.092369477911657], [1.76895594E12, 7.239215686274508]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895612E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 447.9090909090909, "minX": 1.0, "maxY": 3404.1333333333337, "series": [{"data": [[2.0, 447.9090909090909], [8.0, 986.5185185185187], [9.0, 1068.2857142857144], [10.0, 1181.1538461538462], [11.0, 1206.9090909090908], [3.0, 667.375], [12.0, 1520.1052631578946], [13.0, 2961.6666666666665], [14.0, 3404.1333333333337], [15.0, 2326.1], [1.0, 843.4285714285714], [4.0, 710.75], [16.0, 2293.703703703704], [17.0, 1801.40625], [18.0, 1955.0000000000005], [19.0, 2239.04], [5.0, 615.4444444444445], [20.0, 2310.442011354421], [6.0, 968.1176470588235], [7.0, 1019.8076923076926]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}, {"data": [[17.631995133819938, 2095.710462287108]], "isOverall": false, "label": "/api/learner/educational-attainment-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1088.0, "minX": 1.76895594E12, "maxY": 5030147.65, "series": [{"data": [[1.76895606E12, 5030147.65], [1.76895612E12, 3455757.566666667], [1.768956E12, 4784784.783333333], [1.76895594E12, 2014989.8166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76895606E12, 2231.4666666666667], [1.76895612E12, 1570.1333333333334], [1.768956E12, 2124.8], [1.76895594E12, 1088.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895612E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 934.580392156863, "minX": 1.76895594E12, "maxY": 2440.298279158699, "series": [{"data": [[1.76895606E12, 2440.298279158699], [1.76895612E12, 2403.6902173913027], [1.768956E12, 2100.795180722892], [1.76895594E12, 934.580392156863]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895612E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 620.1529411764703, "minX": 1.76895594E12, "maxY": 1993.0841300191205, "series": [{"data": [[1.76895606E12, 1993.0841300191205], [1.76895612E12, 1743.203804347825], [1.768956E12, 1470.3353413654604], [1.76895594E12, 620.1529411764703]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895612E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.888586956521744, "minX": 1.76895594E12, "maxY": 691.0898661567882, "series": [{"data": [[1.76895606E12, 691.0898661567882], [1.76895612E12, 4.888586956521744], [1.768956E12, 173.4156626506025], [1.76895594E12, 13.545098039215686]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895612E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 219.0, "minX": 1.76895594E12, "maxY": 22153.0, "series": [{"data": [[1.76895606E12, 22153.0], [1.76895612E12, 4158.0], [1.768956E12, 4147.0], [1.76895594E12, 1530.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76895606E12, 2852.000000000001], [1.76895612E12, 3568.0000000000045], [1.768956E12, 3432.000000000001], [1.76895594E12, 535.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76895606E12, 22153.0], [1.76895612E12, 4158.0], [1.768956E12, 4147.0], [1.76895594E12, 1530.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76895606E12, 10895.199999999973], [1.76895612E12, 4114.0], [1.768956E12, 4047.45], [1.76895594E12, 923.2999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76895606E12, 366.0], [1.76895612E12, 1051.0], [1.768956E12, 632.0], [1.76895594E12, 219.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76895606E12, 1294.0], [1.76895612E12, 1564.0], [1.768956E12, 1224.0], [1.76895594E12, 343.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895612E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 234.0, "minX": 1.0, "maxY": 3471.0, "series": [{"data": [[8.0, 1124.0], [9.0, 1545.5], [10.0, 413.0], [11.0, 1521.5], [12.0, 1548.0], [3.0, 2863.0], [13.0, 1325.0], [14.0, 3236.0], [1.0, 1530.0], [4.0, 753.5], [17.0, 687.5], [18.0, 401.0], [5.0, 442.0], [6.0, 234.0], [7.0, 3194.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1593.5], [2.0, 1906.5], [9.0, 1652.0], [10.0, 2042.0], [11.0, 2003.0], [3.0, 1760.0], [12.0, 1910.0], [13.0, 1704.5], [14.0, 1817.5], [15.0, 2087.0], [4.0, 1652.0], [1.0, 3142.0], [16.0, 2120.0], [17.0, 1948.0], [18.0, 2247.5], [19.0, 3471.0], [5.0, 1870.0], [6.0, 1438.0], [7.0, 1647.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 233.5, "minX": 1.0, "maxY": 3236.0, "series": [{"data": [[8.0, 1124.0], [9.0, 1545.5], [10.0, 413.0], [11.0, 1521.5], [12.0, 1548.0], [3.0, 2863.0], [13.0, 1325.0], [14.0, 3236.0], [1.0, 1519.0], [4.0, 753.5], [17.0, 687.5], [18.0, 401.0], [5.0, 441.5], [6.0, 233.5], [7.0, 3194.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1092.5], [2.0, 1235.5], [9.0, 1096.0], [10.0, 1542.0], [11.0, 1534.0], [3.0, 1418.0], [12.0, 1283.0], [13.0, 1161.0], [14.0, 1188.0], [15.0, 1563.0], [4.0, 1011.5], [1.0, 2360.5], [16.0, 1677.0], [17.0, 1481.0], [18.0, 1558.5], [19.0, 2268.0], [5.0, 1131.0], [6.0, 1008.5], [7.0, 1094.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.466666666666667, "minX": 1.76895594E12, "maxY": 8.716666666666667, "series": [{"data": [[1.76895606E12, 8.716666666666667], [1.76895612E12, 5.8], [1.768956E12, 8.416666666666666], [1.76895594E12, 4.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895612E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76895594E12, "maxY": 8.2, "series": [{"data": [[1.76895606E12, 0.5166666666666667], [1.76895612E12, 0.5], [1.768956E12, 0.5], [1.76895594E12, 0.9666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76895606E12, 8.2], [1.76895612E12, 5.633333333333334], [1.768956E12, 7.8], [1.76895594E12, 3.283333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895612E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76895594E12, "maxY": 8.2, "series": [{"data": [[1.76895606E12, 0.5166666666666667], [1.76895612E12, 0.5], [1.768956E12, 0.5], [1.76895594E12, 0.9666666666666667]], "isOverall": false, "label": "/api/learner/educational-attainment-success", "isController": false}, {"data": [[1.76895606E12, 8.2], [1.76895612E12, 5.633333333333334], [1.768956E12, 7.8], [1.76895594E12, 3.283333333333333]], "isOverall": false, "label": "/api/learner/educational-attainment-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895612E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76895594E12, "maxY": 8.2, "series": [{"data": [[1.76895606E12, 0.5166666666666667], [1.76895612E12, 0.5], [1.768956E12, 0.5], [1.76895594E12, 0.9666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76895606E12, 8.2], [1.76895612E12, 5.633333333333334], [1.768956E12, 7.8], [1.76895594E12, 3.283333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895612E12, "title": "Total Transactions Per Second"}},
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

