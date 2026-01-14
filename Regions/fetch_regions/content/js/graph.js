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
        data: {"result": {"minY": 230.0, "minX": 0.0, "maxY": 24553.0, "series": [{"data": [[0.0, 230.0], [0.1, 231.0], [0.2, 231.0], [0.3, 232.0], [0.4, 233.0], [0.5, 235.0], [0.6, 236.0], [0.7, 238.0], [0.8, 240.0], [0.9, 241.0], [1.0, 243.0], [1.1, 246.0], [1.2, 251.0], [1.3, 252.0], [1.4, 253.0], [1.5, 287.0], [1.6, 337.0], [1.7, 359.0], [1.8, 365.0], [1.9, 390.0], [2.0, 396.0], [2.1, 397.0], [2.2, 450.0], [2.3, 455.0], [2.4, 458.0], [2.5, 476.0], [2.6, 477.0], [2.7, 489.0], [2.8, 502.0], [2.9, 503.0], [3.0, 506.0], [3.1, 508.0], [3.2, 517.0], [3.3, 524.0], [3.4, 533.0], [3.5, 534.0], [3.6, 538.0], [3.7, 544.0], [3.8, 550.0], [3.9, 554.0], [4.0, 569.0], [4.1, 574.0], [4.2, 578.0], [4.3, 579.0], [4.4, 581.0], [4.5, 584.0], [4.6, 593.0], [4.7, 595.0], [4.8, 597.0], [4.9, 604.0], [5.0, 609.0], [5.1, 611.0], [5.2, 612.0], [5.3, 612.0], [5.4, 626.0], [5.5, 631.0], [5.6, 634.0], [5.7, 640.0], [5.8, 648.0], [5.9, 664.0], [6.0, 664.0], [6.1, 671.0], [6.2, 672.0], [6.3, 683.0], [6.4, 690.0], [6.5, 693.0], [6.6, 697.0], [6.7, 704.0], [6.8, 708.0], [6.9, 711.0], [7.0, 716.0], [7.1, 719.0], [7.2, 734.0], [7.3, 735.0], [7.4, 742.0], [7.5, 744.0], [7.6, 759.0], [7.7, 764.0], [7.8, 767.0], [7.9, 768.0], [8.0, 770.0], [8.1, 772.0], [8.2, 781.0], [8.3, 788.0], [8.4, 791.0], [8.5, 792.0], [8.6, 794.0], [8.7, 801.0], [8.8, 803.0], [8.9, 811.0], [9.0, 819.0], [9.1, 824.0], [9.2, 824.0], [9.3, 830.0], [9.4, 846.0], [9.5, 849.0], [9.6, 852.0], [9.7, 857.0], [9.8, 871.0], [9.9, 875.0], [10.0, 875.0], [10.1, 888.0], [10.2, 891.0], [10.3, 894.0], [10.4, 897.0], [10.5, 903.0], [10.6, 915.0], [10.7, 919.0], [10.8, 923.0], [10.9, 929.0], [11.0, 948.0], [11.1, 952.0], [11.2, 961.0], [11.3, 972.0], [11.4, 979.0], [11.5, 980.0], [11.6, 986.0], [11.7, 990.0], [11.8, 994.0], [11.9, 998.0], [12.0, 1005.0], [12.1, 1007.0], [12.2, 1012.0], [12.3, 1017.0], [12.4, 1021.0], [12.5, 1029.0], [12.6, 1031.0], [12.7, 1032.0], [12.8, 1038.0], [12.9, 1045.0], [13.0, 1047.0], [13.1, 1053.0], [13.2, 1053.0], [13.3, 1056.0], [13.4, 1056.0], [13.5, 1058.0], [13.6, 1062.0], [13.7, 1068.0], [13.8, 1072.0], [13.9, 1074.0], [14.0, 1075.0], [14.1, 1078.0], [14.2, 1080.0], [14.3, 1082.0], [14.4, 1083.0], [14.5, 1090.0], [14.6, 1091.0], [14.7, 1093.0], [14.8, 1096.0], [14.9, 1101.0], [15.0, 1104.0], [15.1, 1106.0], [15.2, 1109.0], [15.3, 1112.0], [15.4, 1115.0], [15.5, 1118.0], [15.6, 1123.0], [15.7, 1125.0], [15.8, 1134.0], [15.9, 1139.0], [16.0, 1156.0], [16.1, 1156.0], [16.2, 1164.0], [16.3, 1165.0], [16.4, 1169.0], [16.5, 1170.0], [16.6, 1171.0], [16.7, 1171.0], [16.8, 1179.0], [16.9, 1185.0], [17.0, 1188.0], [17.1, 1189.0], [17.2, 1190.0], [17.3, 1203.0], [17.4, 1205.0], [17.5, 1211.0], [17.6, 1218.0], [17.7, 1227.0], [17.8, 1233.0], [17.9, 1234.0], [18.0, 1234.0], [18.1, 1243.0], [18.2, 1243.0], [18.3, 1246.0], [18.4, 1247.0], [18.5, 1249.0], [18.6, 1249.0], [18.7, 1257.0], [18.8, 1261.0], [18.9, 1264.0], [19.0, 1266.0], [19.1, 1269.0], [19.2, 1271.0], [19.3, 1275.0], [19.4, 1276.0], [19.5, 1277.0], [19.6, 1285.0], [19.7, 1286.0], [19.8, 1290.0], [19.9, 1291.0], [20.0, 1294.0], [20.1, 1299.0], [20.2, 1300.0], [20.3, 1300.0], [20.4, 1304.0], [20.5, 1305.0], [20.6, 1306.0], [20.7, 1308.0], [20.8, 1312.0], [20.9, 1317.0], [21.0, 1320.0], [21.1, 1321.0], [21.2, 1321.0], [21.3, 1323.0], [21.4, 1327.0], [21.5, 1329.0], [21.6, 1330.0], [21.7, 1334.0], [21.8, 1334.0], [21.9, 1337.0], [22.0, 1337.0], [22.1, 1339.0], [22.2, 1342.0], [22.3, 1346.0], [22.4, 1348.0], [22.5, 1357.0], [22.6, 1360.0], [22.7, 1365.0], [22.8, 1365.0], [22.9, 1367.0], [23.0, 1367.0], [23.1, 1367.0], [23.2, 1368.0], [23.3, 1369.0], [23.4, 1373.0], [23.5, 1377.0], [23.6, 1382.0], [23.7, 1383.0], [23.8, 1388.0], [23.9, 1389.0], [24.0, 1395.0], [24.1, 1397.0], [24.2, 1397.0], [24.3, 1399.0], [24.4, 1403.0], [24.5, 1409.0], [24.6, 1411.0], [24.7, 1415.0], [24.8, 1418.0], [24.9, 1421.0], [25.0, 1421.0], [25.1, 1421.0], [25.2, 1424.0], [25.3, 1425.0], [25.4, 1426.0], [25.5, 1428.0], [25.6, 1428.0], [25.7, 1430.0], [25.8, 1431.0], [25.9, 1441.0], [26.0, 1445.0], [26.1, 1448.0], [26.2, 1449.0], [26.3, 1453.0], [26.4, 1462.0], [26.5, 1465.0], [26.6, 1465.0], [26.7, 1467.0], [26.8, 1469.0], [26.9, 1470.0], [27.0, 1470.0], [27.1, 1471.0], [27.2, 1476.0], [27.3, 1476.0], [27.4, 1478.0], [27.5, 1481.0], [27.6, 1482.0], [27.7, 1484.0], [27.8, 1485.0], [27.9, 1488.0], [28.0, 1491.0], [28.1, 1492.0], [28.2, 1495.0], [28.3, 1496.0], [28.4, 1497.0], [28.5, 1499.0], [28.6, 1502.0], [28.7, 1503.0], [28.8, 1507.0], [28.9, 1511.0], [29.0, 1513.0], [29.1, 1515.0], [29.2, 1519.0], [29.3, 1522.0], [29.4, 1522.0], [29.5, 1523.0], [29.6, 1528.0], [29.7, 1530.0], [29.8, 1530.0], [29.9, 1536.0], [30.0, 1538.0], [30.1, 1541.0], [30.2, 1542.0], [30.3, 1543.0], [30.4, 1544.0], [30.5, 1547.0], [30.6, 1547.0], [30.7, 1551.0], [30.8, 1553.0], [30.9, 1553.0], [31.0, 1562.0], [31.1, 1563.0], [31.2, 1563.0], [31.3, 1566.0], [31.4, 1568.0], [31.5, 1568.0], [31.6, 1569.0], [31.7, 1571.0], [31.8, 1574.0], [31.9, 1575.0], [32.0, 1577.0], [32.1, 1578.0], [32.2, 1581.0], [32.3, 1582.0], [32.4, 1583.0], [32.5, 1584.0], [32.6, 1585.0], [32.7, 1587.0], [32.8, 1588.0], [32.9, 1592.0], [33.0, 1599.0], [33.1, 1599.0], [33.2, 1602.0], [33.3, 1604.0], [33.4, 1604.0], [33.5, 1606.0], [33.6, 1606.0], [33.7, 1609.0], [33.8, 1611.0], [33.9, 1611.0], [34.0, 1612.0], [34.1, 1615.0], [34.2, 1617.0], [34.3, 1623.0], [34.4, 1623.0], [34.5, 1629.0], [34.6, 1630.0], [34.7, 1634.0], [34.8, 1637.0], [34.9, 1641.0], [35.0, 1642.0], [35.1, 1648.0], [35.2, 1655.0], [35.3, 1657.0], [35.4, 1659.0], [35.5, 1661.0], [35.6, 1667.0], [35.7, 1667.0], [35.8, 1674.0], [35.9, 1676.0], [36.0, 1679.0], [36.1, 1680.0], [36.2, 1683.0], [36.3, 1684.0], [36.4, 1686.0], [36.5, 1687.0], [36.6, 1690.0], [36.7, 1694.0], [36.8, 1698.0], [36.9, 1699.0], [37.0, 1700.0], [37.1, 1700.0], [37.2, 1702.0], [37.3, 1704.0], [37.4, 1709.0], [37.5, 1712.0], [37.6, 1713.0], [37.7, 1715.0], [37.8, 1716.0], [37.9, 1716.0], [38.0, 1721.0], [38.1, 1722.0], [38.2, 1723.0], [38.3, 1729.0], [38.4, 1733.0], [38.5, 1733.0], [38.6, 1735.0], [38.7, 1739.0], [38.8, 1740.0], [38.9, 1743.0], [39.0, 1744.0], [39.1, 1747.0], [39.2, 1748.0], [39.3, 1749.0], [39.4, 1752.0], [39.5, 1756.0], [39.6, 1756.0], [39.7, 1758.0], [39.8, 1759.0], [39.9, 1760.0], [40.0, 1761.0], [40.1, 1762.0], [40.2, 1764.0], [40.3, 1766.0], [40.4, 1775.0], [40.5, 1776.0], [40.6, 1778.0], [40.7, 1779.0], [40.8, 1782.0], [40.9, 1782.0], [41.0, 1784.0], [41.1, 1784.0], [41.2, 1787.0], [41.3, 1787.0], [41.4, 1790.0], [41.5, 1791.0], [41.6, 1793.0], [41.7, 1795.0], [41.8, 1796.0], [41.9, 1800.0], [42.0, 1802.0], [42.1, 1803.0], [42.2, 1808.0], [42.3, 1810.0], [42.4, 1811.0], [42.5, 1812.0], [42.6, 1813.0], [42.7, 1817.0], [42.8, 1818.0], [42.9, 1822.0], [43.0, 1823.0], [43.1, 1827.0], [43.2, 1828.0], [43.3, 1829.0], [43.4, 1831.0], [43.5, 1831.0], [43.6, 1832.0], [43.7, 1836.0], [43.8, 1840.0], [43.9, 1845.0], [44.0, 1846.0], [44.1, 1849.0], [44.2, 1850.0], [44.3, 1850.0], [44.4, 1855.0], [44.5, 1856.0], [44.6, 1862.0], [44.7, 1862.0], [44.8, 1862.0], [44.9, 1865.0], [45.0, 1866.0], [45.1, 1867.0], [45.2, 1874.0], [45.3, 1876.0], [45.4, 1883.0], [45.5, 1883.0], [45.6, 1887.0], [45.7, 1889.0], [45.8, 1892.0], [45.9, 1894.0], [46.0, 1899.0], [46.1, 1900.0], [46.2, 1901.0], [46.3, 1905.0], [46.4, 1906.0], [46.5, 1911.0], [46.6, 1912.0], [46.7, 1915.0], [46.8, 1917.0], [46.9, 1919.0], [47.0, 1919.0], [47.1, 1919.0], [47.2, 1920.0], [47.3, 1924.0], [47.4, 1926.0], [47.5, 1928.0], [47.6, 1933.0], [47.7, 1938.0], [47.8, 1938.0], [47.9, 1938.0], [48.0, 1940.0], [48.1, 1943.0], [48.2, 1945.0], [48.3, 1946.0], [48.4, 1957.0], [48.5, 1958.0], [48.6, 1962.0], [48.7, 1962.0], [48.8, 1966.0], [48.9, 1967.0], [49.0, 1967.0], [49.1, 1968.0], [49.2, 1970.0], [49.3, 1970.0], [49.4, 1973.0], [49.5, 1974.0], [49.6, 1978.0], [49.7, 1979.0], [49.8, 1987.0], [49.9, 1988.0], [50.0, 1994.0], [50.1, 1996.0], [50.2, 1996.0], [50.3, 1998.0], [50.4, 1998.0], [50.5, 2000.0], [50.6, 2000.0], [50.7, 2002.0], [50.8, 2004.0], [50.9, 2006.0], [51.0, 2010.0], [51.1, 2011.0], [51.2, 2013.0], [51.3, 2014.0], [51.4, 2015.0], [51.5, 2019.0], [51.6, 2021.0], [51.7, 2025.0], [51.8, 2027.0], [51.9, 2029.0], [52.0, 2030.0], [52.1, 2033.0], [52.2, 2039.0], [52.3, 2039.0], [52.4, 2042.0], [52.5, 2045.0], [52.6, 2047.0], [52.7, 2049.0], [52.8, 2050.0], [52.9, 2051.0], [53.0, 2056.0], [53.1, 2057.0], [53.2, 2058.0], [53.3, 2059.0], [53.4, 2062.0], [53.5, 2063.0], [53.6, 2066.0], [53.7, 2066.0], [53.8, 2072.0], [53.9, 2073.0], [54.0, 2079.0], [54.1, 2080.0], [54.2, 2082.0], [54.3, 2086.0], [54.4, 2086.0], [54.5, 2087.0], [54.6, 2089.0], [54.7, 2093.0], [54.8, 2095.0], [54.9, 2096.0], [55.0, 2098.0], [55.1, 2100.0], [55.2, 2102.0], [55.3, 2105.0], [55.4, 2106.0], [55.5, 2106.0], [55.6, 2107.0], [55.7, 2116.0], [55.8, 2119.0], [55.9, 2120.0], [56.0, 2121.0], [56.1, 2121.0], [56.2, 2123.0], [56.3, 2123.0], [56.4, 2124.0], [56.5, 2127.0], [56.6, 2128.0], [56.7, 2129.0], [56.8, 2132.0], [56.9, 2132.0], [57.0, 2135.0], [57.1, 2135.0], [57.2, 2136.0], [57.3, 2136.0], [57.4, 2138.0], [57.5, 2139.0], [57.6, 2140.0], [57.7, 2141.0], [57.8, 2142.0], [57.9, 2143.0], [58.0, 2146.0], [58.1, 2148.0], [58.2, 2149.0], [58.3, 2152.0], [58.4, 2152.0], [58.5, 2156.0], [58.6, 2156.0], [58.7, 2159.0], [58.8, 2159.0], [58.9, 2163.0], [59.0, 2163.0], [59.1, 2169.0], [59.2, 2169.0], [59.3, 2175.0], [59.4, 2176.0], [59.5, 2180.0], [59.6, 2181.0], [59.7, 2182.0], [59.8, 2184.0], [59.9, 2192.0], [60.0, 2193.0], [60.1, 2194.0], [60.2, 2195.0], [60.3, 2197.0], [60.4, 2198.0], [60.5, 2199.0], [60.6, 2202.0], [60.7, 2204.0], [60.8, 2208.0], [60.9, 2209.0], [61.0, 2210.0], [61.1, 2212.0], [61.2, 2213.0], [61.3, 2215.0], [61.4, 2219.0], [61.5, 2220.0], [61.6, 2224.0], [61.7, 2224.0], [61.8, 2228.0], [61.9, 2228.0], [62.0, 2229.0], [62.1, 2229.0], [62.2, 2232.0], [62.3, 2232.0], [62.4, 2236.0], [62.5, 2241.0], [62.6, 2243.0], [62.7, 2244.0], [62.8, 2245.0], [62.9, 2247.0], [63.0, 2247.0], [63.1, 2251.0], [63.2, 2252.0], [63.3, 2256.0], [63.4, 2256.0], [63.5, 2261.0], [63.6, 2261.0], [63.7, 2270.0], [63.8, 2270.0], [63.9, 2273.0], [64.0, 2273.0], [64.1, 2274.0], [64.2, 2277.0], [64.3, 2279.0], [64.4, 2282.0], [64.5, 2283.0], [64.6, 2285.0], [64.7, 2285.0], [64.8, 2291.0], [64.9, 2292.0], [65.0, 2292.0], [65.1, 2292.0], [65.2, 2293.0], [65.3, 2295.0], [65.4, 2301.0], [65.5, 2302.0], [65.6, 2307.0], [65.7, 2308.0], [65.8, 2310.0], [65.9, 2316.0], [66.0, 2316.0], [66.1, 2318.0], [66.2, 2319.0], [66.3, 2322.0], [66.4, 2327.0], [66.5, 2328.0], [66.6, 2332.0], [66.7, 2336.0], [66.8, 2336.0], [66.9, 2337.0], [67.0, 2339.0], [67.1, 2340.0], [67.2, 2342.0], [67.3, 2343.0], [67.4, 2343.0], [67.5, 2348.0], [67.6, 2350.0], [67.7, 2352.0], [67.8, 2354.0], [67.9, 2356.0], [68.0, 2357.0], [68.1, 2359.0], [68.2, 2359.0], [68.3, 2360.0], [68.4, 2367.0], [68.5, 2367.0], [68.6, 2369.0], [68.7, 2370.0], [68.8, 2371.0], [68.9, 2372.0], [69.0, 2374.0], [69.1, 2375.0], [69.2, 2376.0], [69.3, 2376.0], [69.4, 2378.0], [69.5, 2385.0], [69.6, 2388.0], [69.7, 2391.0], [69.8, 2396.0], [69.9, 2397.0], [70.0, 2398.0], [70.1, 2400.0], [70.2, 2402.0], [70.3, 2405.0], [70.4, 2409.0], [70.5, 2409.0], [70.6, 2415.0], [70.7, 2416.0], [70.8, 2418.0], [70.9, 2419.0], [71.0, 2421.0], [71.1, 2425.0], [71.2, 2426.0], [71.3, 2428.0], [71.4, 2428.0], [71.5, 2430.0], [71.6, 2430.0], [71.7, 2431.0], [71.8, 2433.0], [71.9, 2437.0], [72.0, 2438.0], [72.1, 2442.0], [72.2, 2442.0], [72.3, 2444.0], [72.4, 2451.0], [72.5, 2454.0], [72.6, 2455.0], [72.7, 2459.0], [72.8, 2460.0], [72.9, 2467.0], [73.0, 2467.0], [73.1, 2468.0], [73.2, 2468.0], [73.3, 2469.0], [73.4, 2471.0], [73.5, 2471.0], [73.6, 2481.0], [73.7, 2484.0], [73.8, 2484.0], [73.9, 2486.0], [74.0, 2489.0], [74.1, 2491.0], [74.2, 2495.0], [74.3, 2497.0], [74.4, 2501.0], [74.5, 2502.0], [74.6, 2513.0], [74.7, 2513.0], [74.8, 2516.0], [74.9, 2520.0], [75.0, 2522.0], [75.1, 2522.0], [75.2, 2525.0], [75.3, 2528.0], [75.4, 2529.0], [75.5, 2530.0], [75.6, 2537.0], [75.7, 2540.0], [75.8, 2541.0], [75.9, 2545.0], [76.0, 2547.0], [76.1, 2550.0], [76.2, 2554.0], [76.3, 2562.0], [76.4, 2564.0], [76.5, 2565.0], [76.6, 2566.0], [76.7, 2571.0], [76.8, 2571.0], [76.9, 2577.0], [77.0, 2579.0], [77.1, 2582.0], [77.2, 2583.0], [77.3, 2584.0], [77.4, 2588.0], [77.5, 2591.0], [77.6, 2600.0], [77.7, 2605.0], [77.8, 2612.0], [77.9, 2613.0], [78.0, 2616.0], [78.1, 2618.0], [78.2, 2624.0], [78.3, 2625.0], [78.4, 2631.0], [78.5, 2632.0], [78.6, 2636.0], [78.7, 2639.0], [78.8, 2647.0], [78.9, 2648.0], [79.0, 2653.0], [79.1, 2655.0], [79.2, 2656.0], [79.3, 2659.0], [79.4, 2659.0], [79.5, 2662.0], [79.6, 2662.0], [79.7, 2663.0], [79.8, 2664.0], [79.9, 2670.0], [80.0, 2674.0], [80.1, 2677.0], [80.2, 2677.0], [80.3, 2682.0], [80.4, 2683.0], [80.5, 2685.0], [80.6, 2685.0], [80.7, 2709.0], [80.8, 2711.0], [80.9, 2715.0], [81.0, 2719.0], [81.1, 2722.0], [81.2, 2725.0], [81.3, 2727.0], [81.4, 2730.0], [81.5, 2730.0], [81.6, 2732.0], [81.7, 2732.0], [81.8, 2736.0], [81.9, 2740.0], [82.0, 2741.0], [82.1, 2741.0], [82.2, 2749.0], [82.3, 2749.0], [82.4, 2751.0], [82.5, 2753.0], [82.6, 2754.0], [82.7, 2755.0], [82.8, 2760.0], [82.9, 2764.0], [83.0, 2769.0], [83.1, 2770.0], [83.2, 2779.0], [83.3, 2781.0], [83.4, 2781.0], [83.5, 2786.0], [83.6, 2786.0], [83.7, 2793.0], [83.8, 2795.0], [83.9, 2798.0], [84.0, 2798.0], [84.1, 2802.0], [84.2, 2803.0], [84.3, 2817.0], [84.4, 2823.0], [84.5, 2830.0], [84.6, 2835.0], [84.7, 2839.0], [84.8, 2842.0], [84.9, 2846.0], [85.0, 2857.0], [85.1, 2860.0], [85.2, 2862.0], [85.3, 2866.0], [85.4, 2873.0], [85.5, 2876.0], [85.6, 2879.0], [85.7, 2881.0], [85.8, 2890.0], [85.9, 2890.0], [86.0, 2908.0], [86.1, 2911.0], [86.2, 2926.0], [86.3, 2927.0], [86.4, 2937.0], [86.5, 2938.0], [86.6, 2941.0], [86.7, 2944.0], [86.8, 2952.0], [86.9, 2956.0], [87.0, 2968.0], [87.1, 2970.0], [87.2, 2977.0], [87.3, 2982.0], [87.4, 2985.0], [87.5, 2986.0], [87.6, 2986.0], [87.7, 2991.0], [87.8, 2993.0], [87.9, 3000.0], [88.0, 3011.0], [88.1, 3022.0], [88.2, 3028.0], [88.3, 3039.0], [88.4, 3050.0], [88.5, 3075.0], [88.6, 3080.0], [88.7, 3089.0], [88.8, 3094.0], [88.9, 3101.0], [89.0, 3104.0], [89.1, 3110.0], [89.2, 3117.0], [89.3, 3119.0], [89.4, 3125.0], [89.5, 3132.0], [89.6, 3135.0], [89.7, 3155.0], [89.8, 3171.0], [89.9, 3175.0], [90.0, 3184.0], [90.1, 3186.0], [90.2, 3201.0], [90.3, 3206.0], [90.4, 3214.0], [90.5, 3249.0], [90.6, 3263.0], [90.7, 3264.0], [90.8, 3277.0], [90.9, 3280.0], [91.0, 3285.0], [91.1, 3292.0], [91.2, 3303.0], [91.3, 3314.0], [91.4, 3315.0], [91.5, 3327.0], [91.6, 3336.0], [91.7, 3341.0], [91.8, 3358.0], [91.9, 3364.0], [92.0, 3367.0], [92.1, 3378.0], [92.2, 3425.0], [92.3, 3467.0], [92.4, 3483.0], [92.5, 3530.0], [92.6, 3549.0], [92.7, 3574.0], [92.8, 3587.0], [92.9, 3611.0], [93.0, 3628.0], [93.1, 3660.0], [93.2, 3667.0], [93.3, 3680.0], [93.4, 3685.0], [93.5, 3703.0], [93.6, 3715.0], [93.7, 3735.0], [93.8, 3749.0], [93.9, 3749.0], [94.0, 3784.0], [94.1, 3800.0], [94.2, 3805.0], [94.3, 3824.0], [94.4, 3869.0], [94.5, 3901.0], [94.6, 3916.0], [94.7, 3927.0], [94.8, 3971.0], [94.9, 3997.0], [95.0, 4034.0], [95.1, 4079.0], [95.2, 4100.0], [95.3, 4116.0], [95.4, 4170.0], [95.5, 4186.0], [95.6, 4235.0], [95.7, 4270.0], [95.8, 4324.0], [95.9, 4377.0], [96.0, 4400.0], [96.1, 4450.0], [96.2, 4515.0], [96.3, 4622.0], [96.4, 4637.0], [96.5, 4769.0], [96.6, 4776.0], [96.7, 4832.0], [96.8, 4841.0], [96.9, 4871.0], [97.0, 4961.0], [97.1, 5163.0], [97.2, 5198.0], [97.3, 5216.0], [97.4, 5279.0], [97.5, 5343.0], [97.6, 5495.0], [97.7, 5651.0], [97.8, 6093.0], [97.9, 6804.0], [98.0, 6860.0], [98.1, 6916.0], [98.2, 7840.0], [98.3, 9143.0], [98.4, 9539.0], [98.5, 10532.0], [98.6, 21421.0], [98.7, 21464.0], [98.8, 21885.0], [98.9, 21911.0], [99.0, 22068.0], [99.1, 22186.0], [99.2, 22356.0], [99.3, 22431.0], [99.4, 22693.0], [99.5, 22746.0], [99.6, 22821.0], [99.7, 23084.0], [99.8, 23399.0], [99.9, 24477.0], [100.0, 24553.0]], "isOverall": false, "label": "/api/tesda/regions", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 80.0, "series": [{"data": [[600.0, 27.0], [700.0, 30.0], [800.0, 26.0], [900.0, 22.0], [1000.0, 43.0], [1100.0, 36.0], [1200.0, 43.0], [1300.0, 61.0], [1400.0, 62.0], [1500.0, 68.0], [1600.0, 56.0], [1700.0, 73.0], [1800.0, 61.0], [1900.0, 66.0], [2000.0, 68.0], [2100.0, 80.0], [2200.0, 71.0], [2300.0, 70.0], [2400.0, 64.0], [2500.0, 47.0], [2600.0, 46.0], [2700.0, 49.0], [2800.0, 28.0], [2900.0, 29.0], [3000.0, 15.0], [3100.0, 19.0], [3300.0, 14.0], [3200.0, 15.0], [3400.0, 4.0], [3500.0, 7.0], [3600.0, 9.0], [3700.0, 8.0], [3800.0, 6.0], [3900.0, 7.0], [4000.0, 4.0], [4300.0, 2.0], [4200.0, 4.0], [4100.0, 5.0], [4600.0, 3.0], [4400.0, 3.0], [4500.0, 2.0], [4800.0, 4.0], [4700.0, 3.0], [5000.0, 1.0], [4900.0, 1.0], [5100.0, 2.0], [5300.0, 2.0], [5200.0, 3.0], [5600.0, 2.0], [5400.0, 1.0], [6000.0, 1.0], [6300.0, 1.0], [6900.0, 1.0], [6800.0, 2.0], [7400.0, 1.0], [7800.0, 1.0], [9100.0, 1.0], [9400.0, 1.0], [9500.0, 1.0], [10500.0, 1.0], [10600.0, 1.0], [21400.0, 2.0], [21900.0, 2.0], [21800.0, 2.0], [22000.0, 1.0], [22200.0, 1.0], [22300.0, 1.0], [22100.0, 1.0], [22400.0, 2.0], [22600.0, 1.0], [23100.0, 1.0], [23300.0, 1.0], [22800.0, 2.0], [22700.0, 1.0], [23000.0, 1.0], [24500.0, 1.0], [24400.0, 1.0], [200.0, 23.0], [300.0, 8.0], [400.0, 9.0], [500.0, 31.0]], "isOverall": false, "label": "/api/tesda/regions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1386.0, "series": [{"data": [[0.0, 27.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 26.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 37.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1386.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 12.061224489795915, "minX": 1.76835606E12, "maxY": 20.0, "series": [{"data": [[1.76835624E12, 19.411764705882344], [1.76835612E12, 19.484662576687104], [1.76835618E12, 20.0], [1.76835606E12, 12.061224489795915]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76835624E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1665.4, "minX": 1.0, "maxY": 4170.0, "series": [{"data": [[8.0, 3663.285714285714], [2.0, 3208.0], [9.0, 1796.65], [10.0, 1859.8823529411768], [11.0, 2034.4117647058824], [12.0, 1741.0952380952383], [3.0, 2197.0], [13.0, 1665.4], [14.0, 1745.653846153846], [15.0, 2144.904761904762], [16.0, 1790.814814814815], [4.0, 2120.0], [1.0, 2682.0], [17.0, 1951.25925925926], [18.0, 2093.2799999999997], [19.0, 2264.3333333333335], [20.0, 2413.669148056248], [5.0, 2229.0], [6.0, 1836.0], [7.0, 4170.0]], "isOverall": false, "label": "/api/tesda/regions", "isController": false}, {"data": [[18.909891598915973, 2335.6910569105758]], "isOverall": false, "label": "/api/tesda/regions-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 578.2, "minX": 1.76835606E12, "maxY": 4977967.533333333, "series": [{"data": [[1.76835624E12, 3300495.3833333333], [1.76835612E12, 4691601.7], [1.76835618E12, 4977967.533333333], [1.76835606E12, 1197137.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76835624E12, 1270.4666666666667], [1.76835612E12, 1923.4], [1.76835618E12, 2033.5333333333333], [1.76835606E12, 578.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76835624E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1845.6598639455776, "minX": 1.76835606E12, "maxY": 2533.987730061346, "series": [{"data": [[1.76835624E12, 2309.845201238392], [1.76835612E12, 2533.987730061346], [1.76835618E12, 2303.6131528046417], [1.76835606E12, 1845.6598639455776]], "isOverall": false, "label": "/api/tesda/regions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76835624E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1498.476780185757, "minX": 1.76835606E12, "maxY": 1949.077709611453, "series": [{"data": [[1.76835624E12, 1498.476780185757], [1.76835612E12, 1949.077709611453], [1.76835618E12, 1568.8433268858787], [1.76835606E12, 1606.9999999999998]], "isOverall": false, "label": "/api/tesda/regions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76835624E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.7466150870406203, "minX": 1.76835606E12, "maxY": 1155.8231292517, "series": [{"data": [[1.76835624E12, 4.566563467492267], [1.76835612E12, 569.1779141104298], [1.76835618E12, 3.7466150870406203], [1.76835606E12, 1155.8231292517]], "isOverall": false, "label": "/api/tesda/regions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76835624E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 230.0, "minX": 1.76835606E12, "maxY": 22461.0, "series": [{"data": [[1.76835612E12, 22461.0], [1.76835618E12, 1690.0], [1.76835606E12, 21961.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76835612E12, 1247.0], [1.76835618E12, 347.0], [1.76835606E12, 230.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76835612E12, 2705.400000000002], [1.76835618E12, 1658.6], [1.76835606E12, 19394.500000000044]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76835612E12, 22461.0], [1.76835618E12, 1690.0], [1.76835606E12, 21961.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76835612E12, 1573.0], [1.76835618E12, 1521.5], [1.76835606E12, 244.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76835612E12, 12686.949999999986], [1.76835618E12, 1682.3], [1.76835606E12, 21687.65]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76835618E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 236.0, "minX": 1.0, "maxY": 11442.0, "series": [{"data": [[2.0, 11442.0], [4.0, 236.0], [8.0, 1339.0], [1.0, 2801.0], [9.0, 1625.0], [5.0, 252.0], [6.0, 1119.0], [3.0, 1632.0], [7.0, 242.0], [14.0, 1440.5], [15.0, 1274.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1759.0], [2.0, 2174.0], [9.0, 2041.0], [10.0, 1733.0], [11.0, 2425.0], [3.0, 1789.0], [12.0, 2217.0], [13.0, 2244.0], [14.0, 2256.5], [15.0, 2371.0], [4.0, 1973.0], [1.0, 2308.0], [16.0, 3128.0], [17.0, 2437.5], [18.0, 2463.5], [5.0, 1966.0], [6.0, 1812.0], [7.0, 2029.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 236.0, "minX": 1.0, "maxY": 11440.5, "series": [{"data": [[2.0, 11440.5], [4.0, 236.0], [8.0, 1339.0], [1.0, 2801.0], [9.0, 1625.0], [5.0, 252.0], [6.0, 1119.0], [3.0, 1632.0], [7.0, 241.0], [14.0, 1440.5], [15.0, 1274.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1214.0], [2.0, 1588.5], [9.0, 1277.0], [10.0, 1257.0], [11.0, 1607.0], [3.0, 1151.0], [12.0, 1547.5], [13.0, 1414.0], [14.0, 1549.5], [15.0, 1593.0], [4.0, 1252.0], [1.0, 1521.0], [16.0, 1918.5], [17.0, 1616.0], [18.0, 1647.5], [5.0, 1352.0], [6.0, 1248.0], [7.0, 1473.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.716666666666667, "minX": 1.76835606E12, "maxY": 8.616666666666667, "series": [{"data": [[1.76835624E12, 5.05], [1.76835612E12, 8.216666666666667], [1.76835618E12, 8.616666666666667], [1.76835606E12, 2.716666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76835624E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76835606E12, "maxY": 8.116666666666667, "series": [{"data": [[1.76835612E12, 0.5], [1.76835618E12, 0.5], [1.76835606E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76835624E12, 5.383333333333334], [1.76835612E12, 7.65], [1.76835618E12, 8.116666666666667], [1.76835606E12, 1.95]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76835624E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76835606E12, "maxY": 8.116666666666667, "series": [{"data": [[1.76835612E12, 0.5], [1.76835618E12, 0.5], [1.76835606E12, 0.5]], "isOverall": false, "label": "/api/tesda/regions-success", "isController": false}, {"data": [[1.76835624E12, 5.383333333333334], [1.76835612E12, 7.65], [1.76835618E12, 8.116666666666667], [1.76835606E12, 1.95]], "isOverall": false, "label": "/api/tesda/regions-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76835624E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76835606E12, "maxY": 8.116666666666667, "series": [{"data": [[1.76835612E12, 0.5], [1.76835618E12, 0.5], [1.76835606E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76835624E12, 5.383333333333334], [1.76835612E12, 7.65], [1.76835618E12, 8.116666666666667], [1.76835606E12, 1.95]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76835624E12, "title": "Total Transactions Per Second"}},
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

