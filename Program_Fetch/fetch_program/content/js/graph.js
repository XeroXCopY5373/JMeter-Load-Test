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
        data: {"result": {"minY": 387.0, "minX": 0.0, "maxY": 22299.0, "series": [{"data": [[0.0, 387.0], [0.1, 422.0], [0.2, 427.0], [0.3, 442.0], [0.4, 483.0], [0.5, 489.0], [0.6, 498.0], [0.7, 520.0], [0.8, 522.0], [0.9, 531.0], [1.0, 535.0], [1.1, 546.0], [1.2, 546.0], [1.3, 551.0], [1.4, 568.0], [1.5, 587.0], [1.6, 596.0], [1.7, 598.0], [1.8, 620.0], [1.9, 624.0], [2.0, 644.0], [2.1, 652.0], [2.2, 666.0], [2.3, 687.0], [2.4, 699.0], [2.5, 728.0], [2.6, 740.0], [2.7, 747.0], [2.8, 751.0], [2.9, 757.0], [3.0, 763.0], [3.1, 774.0], [3.2, 779.0], [3.3, 782.0], [3.4, 786.0], [3.5, 793.0], [3.6, 796.0], [3.7, 799.0], [3.8, 802.0], [3.9, 803.0], [4.0, 808.0], [4.1, 812.0], [4.2, 816.0], [4.3, 822.0], [4.4, 825.0], [4.5, 827.0], [4.6, 829.0], [4.7, 831.0], [4.8, 832.0], [4.9, 835.0], [5.0, 838.0], [5.1, 840.0], [5.2, 846.0], [5.3, 847.0], [5.4, 851.0], [5.5, 859.0], [5.6, 859.0], [5.7, 861.0], [5.8, 861.0], [5.9, 867.0], [6.0, 870.0], [6.1, 874.0], [6.2, 876.0], [6.3, 879.0], [6.4, 889.0], [6.5, 890.0], [6.6, 892.0], [6.7, 894.0], [6.8, 898.0], [6.9, 901.0], [7.0, 911.0], [7.1, 914.0], [7.2, 914.0], [7.3, 929.0], [7.4, 933.0], [7.5, 935.0], [7.6, 944.0], [7.7, 951.0], [7.8, 954.0], [7.9, 954.0], [8.0, 960.0], [8.1, 965.0], [8.2, 970.0], [8.3, 970.0], [8.4, 971.0], [8.5, 975.0], [8.6, 976.0], [8.7, 977.0], [8.8, 985.0], [8.9, 987.0], [9.0, 988.0], [9.1, 989.0], [9.2, 989.0], [9.3, 993.0], [9.4, 996.0], [9.5, 997.0], [9.6, 997.0], [9.7, 1001.0], [9.8, 1004.0], [9.9, 1004.0], [10.0, 1006.0], [10.1, 1006.0], [10.2, 1007.0], [10.3, 1011.0], [10.4, 1011.0], [10.5, 1014.0], [10.6, 1015.0], [10.7, 1018.0], [10.8, 1019.0], [10.9, 1023.0], [11.0, 1028.0], [11.1, 1032.0], [11.2, 1039.0], [11.3, 1042.0], [11.4, 1045.0], [11.5, 1047.0], [11.6, 1054.0], [11.7, 1061.0], [11.8, 1063.0], [11.9, 1066.0], [12.0, 1067.0], [12.1, 1069.0], [12.2, 1074.0], [12.3, 1075.0], [12.4, 1077.0], [12.5, 1077.0], [12.6, 1080.0], [12.7, 1081.0], [12.8, 1081.0], [12.9, 1088.0], [13.0, 1090.0], [13.1, 1096.0], [13.2, 1096.0], [13.3, 1099.0], [13.4, 1100.0], [13.5, 1101.0], [13.6, 1107.0], [13.7, 1109.0], [13.8, 1110.0], [13.9, 1117.0], [14.0, 1125.0], [14.1, 1126.0], [14.2, 1127.0], [14.3, 1129.0], [14.4, 1129.0], [14.5, 1133.0], [14.6, 1137.0], [14.7, 1138.0], [14.8, 1142.0], [14.9, 1142.0], [15.0, 1144.0], [15.1, 1146.0], [15.2, 1153.0], [15.3, 1155.0], [15.4, 1157.0], [15.5, 1171.0], [15.6, 1171.0], [15.7, 1173.0], [15.8, 1187.0], [15.9, 1187.0], [16.0, 1195.0], [16.1, 1200.0], [16.2, 1204.0], [16.3, 1204.0], [16.4, 1205.0], [16.5, 1211.0], [16.6, 1215.0], [16.7, 1228.0], [16.8, 1229.0], [16.9, 1231.0], [17.0, 1236.0], [17.1, 1237.0], [17.2, 1240.0], [17.3, 1245.0], [17.4, 1252.0], [17.5, 1263.0], [17.6, 1263.0], [17.7, 1269.0], [17.8, 1270.0], [17.9, 1276.0], [18.0, 1277.0], [18.1, 1283.0], [18.2, 1287.0], [18.3, 1289.0], [18.4, 1293.0], [18.5, 1294.0], [18.6, 1299.0], [18.7, 1302.0], [18.8, 1306.0], [18.9, 1307.0], [19.0, 1307.0], [19.1, 1308.0], [19.2, 1310.0], [19.3, 1312.0], [19.4, 1317.0], [19.5, 1319.0], [19.6, 1326.0], [19.7, 1328.0], [19.8, 1332.0], [19.9, 1336.0], [20.0, 1336.0], [20.1, 1337.0], [20.2, 1339.0], [20.3, 1341.0], [20.4, 1342.0], [20.5, 1350.0], [20.6, 1355.0], [20.7, 1356.0], [20.8, 1358.0], [20.9, 1360.0], [21.0, 1371.0], [21.1, 1376.0], [21.2, 1376.0], [21.3, 1379.0], [21.4, 1382.0], [21.5, 1389.0], [21.6, 1390.0], [21.7, 1393.0], [21.8, 1398.0], [21.9, 1399.0], [22.0, 1404.0], [22.1, 1405.0], [22.2, 1409.0], [22.3, 1412.0], [22.4, 1418.0], [22.5, 1420.0], [22.6, 1420.0], [22.7, 1431.0], [22.8, 1432.0], [22.9, 1435.0], [23.0, 1441.0], [23.1, 1442.0], [23.2, 1445.0], [23.3, 1448.0], [23.4, 1451.0], [23.5, 1457.0], [23.6, 1459.0], [23.7, 1469.0], [23.8, 1476.0], [23.9, 1484.0], [24.0, 1487.0], [24.1, 1493.0], [24.2, 1495.0], [24.3, 1496.0], [24.4, 1497.0], [24.5, 1505.0], [24.6, 1505.0], [24.7, 1511.0], [24.8, 1513.0], [24.9, 1516.0], [25.0, 1516.0], [25.1, 1519.0], [25.2, 1521.0], [25.3, 1525.0], [25.4, 1528.0], [25.5, 1537.0], [25.6, 1541.0], [25.7, 1541.0], [25.8, 1545.0], [25.9, 1546.0], [26.0, 1547.0], [26.1, 1547.0], [26.2, 1552.0], [26.3, 1557.0], [26.4, 1557.0], [26.5, 1558.0], [26.6, 1566.0], [26.7, 1572.0], [26.8, 1576.0], [26.9, 1579.0], [27.0, 1583.0], [27.1, 1586.0], [27.2, 1598.0], [27.3, 1600.0], [27.4, 1601.0], [27.5, 1605.0], [27.6, 1608.0], [27.7, 1610.0], [27.8, 1617.0], [27.9, 1621.0], [28.0, 1623.0], [28.1, 1624.0], [28.2, 1628.0], [28.3, 1629.0], [28.4, 1630.0], [28.5, 1636.0], [28.6, 1640.0], [28.7, 1644.0], [28.8, 1646.0], [28.9, 1647.0], [29.0, 1648.0], [29.1, 1648.0], [29.2, 1649.0], [29.3, 1654.0], [29.4, 1659.0], [29.5, 1661.0], [29.6, 1662.0], [29.7, 1662.0], [29.8, 1663.0], [29.9, 1669.0], [30.0, 1669.0], [30.1, 1673.0], [30.2, 1677.0], [30.3, 1682.0], [30.4, 1685.0], [30.5, 1686.0], [30.6, 1689.0], [30.7, 1692.0], [30.8, 1696.0], [30.9, 1698.0], [31.0, 1700.0], [31.1, 1703.0], [31.2, 1704.0], [31.3, 1710.0], [31.4, 1712.0], [31.5, 1712.0], [31.6, 1719.0], [31.7, 1719.0], [31.8, 1723.0], [31.9, 1727.0], [32.0, 1730.0], [32.1, 1742.0], [32.2, 1743.0], [32.3, 1746.0], [32.4, 1748.0], [32.5, 1749.0], [32.6, 1754.0], [32.7, 1769.0], [32.8, 1771.0], [32.9, 1771.0], [33.0, 1777.0], [33.1, 1778.0], [33.2, 1785.0], [33.3, 1790.0], [33.4, 1791.0], [33.5, 1791.0], [33.6, 1793.0], [33.7, 1796.0], [33.8, 1799.0], [33.9, 1799.0], [34.0, 1803.0], [34.1, 1808.0], [34.2, 1809.0], [34.3, 1809.0], [34.4, 1810.0], [34.5, 1812.0], [34.6, 1813.0], [34.7, 1816.0], [34.8, 1817.0], [34.9, 1819.0], [35.0, 1822.0], [35.1, 1824.0], [35.2, 1827.0], [35.3, 1827.0], [35.4, 1829.0], [35.5, 1834.0], [35.6, 1841.0], [35.7, 1842.0], [35.8, 1845.0], [35.9, 1845.0], [36.0, 1847.0], [36.1, 1848.0], [36.2, 1850.0], [36.3, 1851.0], [36.4, 1851.0], [36.5, 1852.0], [36.6, 1856.0], [36.7, 1856.0], [36.8, 1856.0], [36.9, 1858.0], [37.0, 1858.0], [37.1, 1859.0], [37.2, 1860.0], [37.3, 1869.0], [37.4, 1869.0], [37.5, 1872.0], [37.6, 1874.0], [37.7, 1875.0], [37.8, 1876.0], [37.9, 1876.0], [38.0, 1880.0], [38.1, 1887.0], [38.2, 1890.0], [38.3, 1891.0], [38.4, 1891.0], [38.5, 1892.0], [38.6, 1892.0], [38.7, 1893.0], [38.8, 1893.0], [38.9, 1893.0], [39.0, 1894.0], [39.1, 1895.0], [39.2, 1897.0], [39.3, 1897.0], [39.4, 1897.0], [39.5, 1898.0], [39.6, 1899.0], [39.7, 1900.0], [39.8, 1901.0], [39.9, 1903.0], [40.0, 1906.0], [40.1, 1907.0], [40.2, 1910.0], [40.3, 1914.0], [40.4, 1916.0], [40.5, 1918.0], [40.6, 1918.0], [40.7, 1921.0], [40.8, 1922.0], [40.9, 1924.0], [41.0, 1926.0], [41.1, 1927.0], [41.2, 1930.0], [41.3, 1933.0], [41.4, 1934.0], [41.5, 1935.0], [41.6, 1937.0], [41.7, 1938.0], [41.8, 1938.0], [41.9, 1940.0], [42.0, 1941.0], [42.1, 1944.0], [42.2, 1947.0], [42.3, 1947.0], [42.4, 1952.0], [42.5, 1953.0], [42.6, 1955.0], [42.7, 1955.0], [42.8, 1959.0], [42.9, 1960.0], [43.0, 1962.0], [43.1, 1963.0], [43.2, 1966.0], [43.3, 1968.0], [43.4, 1972.0], [43.5, 1976.0], [43.6, 1977.0], [43.7, 1977.0], [43.8, 1979.0], [43.9, 1982.0], [44.0, 1983.0], [44.1, 1984.0], [44.2, 1987.0], [44.3, 1988.0], [44.4, 1988.0], [44.5, 1993.0], [44.6, 1994.0], [44.7, 1994.0], [44.8, 1995.0], [44.9, 1996.0], [45.0, 1996.0], [45.1, 1997.0], [45.2, 2002.0], [45.3, 2003.0], [45.4, 2004.0], [45.5, 2008.0], [45.6, 2011.0], [45.7, 2013.0], [45.8, 2013.0], [45.9, 2016.0], [46.0, 2017.0], [46.1, 2017.0], [46.2, 2021.0], [46.3, 2022.0], [46.4, 2022.0], [46.5, 2024.0], [46.6, 2024.0], [46.7, 2025.0], [46.8, 2026.0], [46.9, 2028.0], [47.0, 2028.0], [47.1, 2028.0], [47.2, 2029.0], [47.3, 2029.0], [47.4, 2035.0], [47.5, 2036.0], [47.6, 2038.0], [47.7, 2039.0], [47.8, 2039.0], [47.9, 2040.0], [48.0, 2043.0], [48.1, 2044.0], [48.2, 2045.0], [48.3, 2048.0], [48.4, 2049.0], [48.5, 2051.0], [48.6, 2053.0], [48.7, 2054.0], [48.8, 2055.0], [48.9, 2057.0], [49.0, 2057.0], [49.1, 2061.0], [49.2, 2062.0], [49.3, 2065.0], [49.4, 2067.0], [49.5, 2069.0], [49.6, 2073.0], [49.7, 2073.0], [49.8, 2073.0], [49.9, 2075.0], [50.0, 2075.0], [50.1, 2077.0], [50.2, 2079.0], [50.3, 2081.0], [50.4, 2081.0], [50.5, 2085.0], [50.6, 2086.0], [50.7, 2089.0], [50.8, 2094.0], [50.9, 2095.0], [51.0, 2097.0], [51.1, 2101.0], [51.2, 2101.0], [51.3, 2104.0], [51.4, 2104.0], [51.5, 2105.0], [51.6, 2106.0], [51.7, 2107.0], [51.8, 2107.0], [51.9, 2108.0], [52.0, 2111.0], [52.1, 2112.0], [52.2, 2117.0], [52.3, 2119.0], [52.4, 2119.0], [52.5, 2123.0], [52.6, 2123.0], [52.7, 2129.0], [52.8, 2130.0], [52.9, 2130.0], [53.0, 2130.0], [53.1, 2132.0], [53.2, 2133.0], [53.3, 2134.0], [53.4, 2135.0], [53.5, 2135.0], [53.6, 2136.0], [53.7, 2139.0], [53.8, 2139.0], [53.9, 2140.0], [54.0, 2141.0], [54.1, 2143.0], [54.2, 2144.0], [54.3, 2147.0], [54.4, 2149.0], [54.5, 2149.0], [54.6, 2151.0], [54.7, 2152.0], [54.8, 2153.0], [54.9, 2154.0], [55.0, 2155.0], [55.1, 2156.0], [55.2, 2157.0], [55.3, 2158.0], [55.4, 2158.0], [55.5, 2159.0], [55.6, 2161.0], [55.7, 2161.0], [55.8, 2165.0], [55.9, 2165.0], [56.0, 2167.0], [56.1, 2170.0], [56.2, 2170.0], [56.3, 2171.0], [56.4, 2173.0], [56.5, 2173.0], [56.6, 2176.0], [56.7, 2178.0], [56.8, 2179.0], [56.9, 2180.0], [57.0, 2182.0], [57.1, 2183.0], [57.2, 2185.0], [57.3, 2185.0], [57.4, 2187.0], [57.5, 2188.0], [57.6, 2189.0], [57.7, 2191.0], [57.8, 2192.0], [57.9, 2196.0], [58.0, 2199.0], [58.1, 2199.0], [58.2, 2201.0], [58.3, 2203.0], [58.4, 2205.0], [58.5, 2205.0], [58.6, 2206.0], [58.7, 2207.0], [58.8, 2207.0], [58.9, 2207.0], [59.0, 2208.0], [59.1, 2210.0], [59.2, 2213.0], [59.3, 2214.0], [59.4, 2216.0], [59.5, 2216.0], [59.6, 2217.0], [59.7, 2219.0], [59.8, 2221.0], [59.9, 2222.0], [60.0, 2223.0], [60.1, 2225.0], [60.2, 2225.0], [60.3, 2226.0], [60.4, 2230.0], [60.5, 2231.0], [60.6, 2233.0], [60.7, 2233.0], [60.8, 2235.0], [60.9, 2236.0], [61.0, 2236.0], [61.1, 2237.0], [61.2, 2238.0], [61.3, 2240.0], [61.4, 2240.0], [61.5, 2244.0], [61.6, 2246.0], [61.7, 2248.0], [61.8, 2252.0], [61.9, 2256.0], [62.0, 2257.0], [62.1, 2257.0], [62.2, 2258.0], [62.3, 2258.0], [62.4, 2259.0], [62.5, 2259.0], [62.6, 2262.0], [62.7, 2263.0], [62.8, 2267.0], [62.9, 2267.0], [63.0, 2268.0], [63.1, 2269.0], [63.2, 2271.0], [63.3, 2272.0], [63.4, 2273.0], [63.5, 2274.0], [63.6, 2275.0], [63.7, 2275.0], [63.8, 2275.0], [63.9, 2278.0], [64.0, 2284.0], [64.1, 2285.0], [64.2, 2288.0], [64.3, 2289.0], [64.4, 2291.0], [64.5, 2292.0], [64.6, 2293.0], [64.7, 2294.0], [64.8, 2294.0], [64.9, 2296.0], [65.0, 2297.0], [65.1, 2298.0], [65.2, 2299.0], [65.3, 2299.0], [65.4, 2300.0], [65.5, 2301.0], [65.6, 2304.0], [65.7, 2305.0], [65.8, 2305.0], [65.9, 2307.0], [66.0, 2309.0], [66.1, 2311.0], [66.2, 2311.0], [66.3, 2319.0], [66.4, 2322.0], [66.5, 2324.0], [66.6, 2325.0], [66.7, 2327.0], [66.8, 2329.0], [66.9, 2331.0], [67.0, 2332.0], [67.1, 2333.0], [67.2, 2336.0], [67.3, 2337.0], [67.4, 2338.0], [67.5, 2341.0], [67.6, 2343.0], [67.7, 2343.0], [67.8, 2345.0], [67.9, 2347.0], [68.0, 2349.0], [68.1, 2353.0], [68.2, 2354.0], [68.3, 2356.0], [68.4, 2356.0], [68.5, 2359.0], [68.6, 2362.0], [68.7, 2365.0], [68.8, 2366.0], [68.9, 2367.0], [69.0, 2369.0], [69.1, 2371.0], [69.2, 2372.0], [69.3, 2374.0], [69.4, 2375.0], [69.5, 2378.0], [69.6, 2378.0], [69.7, 2379.0], [69.8, 2379.0], [69.9, 2383.0], [70.0, 2383.0], [70.1, 2385.0], [70.2, 2391.0], [70.3, 2391.0], [70.4, 2391.0], [70.5, 2395.0], [70.6, 2396.0], [70.7, 2401.0], [70.8, 2401.0], [70.9, 2404.0], [71.0, 2404.0], [71.1, 2405.0], [71.2, 2411.0], [71.3, 2415.0], [71.4, 2420.0], [71.5, 2421.0], [71.6, 2421.0], [71.7, 2425.0], [71.8, 2425.0], [71.9, 2426.0], [72.0, 2426.0], [72.1, 2429.0], [72.2, 2430.0], [72.3, 2438.0], [72.4, 2448.0], [72.5, 2453.0], [72.6, 2453.0], [72.7, 2456.0], [72.8, 2459.0], [72.9, 2460.0], [73.0, 2460.0], [73.1, 2464.0], [73.2, 2464.0], [73.3, 2466.0], [73.4, 2467.0], [73.5, 2471.0], [73.6, 2471.0], [73.7, 2473.0], [73.8, 2474.0], [73.9, 2474.0], [74.0, 2475.0], [74.1, 2476.0], [74.2, 2477.0], [74.3, 2481.0], [74.4, 2482.0], [74.5, 2486.0], [74.6, 2493.0], [74.7, 2495.0], [74.8, 2500.0], [74.9, 2502.0], [75.0, 2514.0], [75.1, 2514.0], [75.2, 2521.0], [75.3, 2521.0], [75.4, 2527.0], [75.5, 2528.0], [75.6, 2528.0], [75.7, 2531.0], [75.8, 2531.0], [75.9, 2534.0], [76.0, 2541.0], [76.1, 2543.0], [76.2, 2550.0], [76.3, 2553.0], [76.4, 2554.0], [76.5, 2561.0], [76.6, 2568.0], [76.7, 2571.0], [76.8, 2572.0], [76.9, 2578.0], [77.0, 2580.0], [77.1, 2585.0], [77.2, 2587.0], [77.3, 2591.0], [77.4, 2600.0], [77.5, 2601.0], [77.6, 2609.0], [77.7, 2609.0], [77.8, 2611.0], [77.9, 2616.0], [78.0, 2618.0], [78.1, 2619.0], [78.2, 2620.0], [78.3, 2629.0], [78.4, 2634.0], [78.5, 2634.0], [78.6, 2642.0], [78.7, 2642.0], [78.8, 2642.0], [78.9, 2643.0], [79.0, 2650.0], [79.1, 2652.0], [79.2, 2652.0], [79.3, 2664.0], [79.4, 2668.0], [79.5, 2669.0], [79.6, 2670.0], [79.7, 2674.0], [79.8, 2674.0], [79.9, 2678.0], [80.0, 2683.0], [80.1, 2693.0], [80.2, 2695.0], [80.3, 2699.0], [80.4, 2706.0], [80.5, 2708.0], [80.6, 2712.0], [80.7, 2718.0], [80.8, 2721.0], [80.9, 2726.0], [81.0, 2737.0], [81.1, 2739.0], [81.2, 2741.0], [81.3, 2748.0], [81.4, 2752.0], [81.5, 2762.0], [81.6, 2763.0], [81.7, 2770.0], [81.8, 2778.0], [81.9, 2783.0], [82.0, 2786.0], [82.1, 2787.0], [82.2, 2789.0], [82.3, 2789.0], [82.4, 2800.0], [82.5, 2801.0], [82.6, 2806.0], [82.7, 2812.0], [82.8, 2815.0], [82.9, 2818.0], [83.0, 2819.0], [83.1, 2824.0], [83.2, 2829.0], [83.3, 2832.0], [83.4, 2834.0], [83.5, 2840.0], [83.6, 2840.0], [83.7, 2841.0], [83.8, 2852.0], [83.9, 2859.0], [84.0, 2863.0], [84.1, 2873.0], [84.2, 2875.0], [84.3, 2881.0], [84.4, 2883.0], [84.5, 2885.0], [84.6, 2887.0], [84.7, 2895.0], [84.8, 2898.0], [84.9, 2900.0], [85.0, 2918.0], [85.1, 2922.0], [85.2, 2923.0], [85.3, 2926.0], [85.4, 2930.0], [85.5, 2935.0], [85.6, 2957.0], [85.7, 2961.0], [85.8, 2971.0], [85.9, 2973.0], [86.0, 2975.0], [86.1, 2983.0], [86.2, 2999.0], [86.3, 3001.0], [86.4, 3004.0], [86.5, 3016.0], [86.6, 3027.0], [86.7, 3041.0], [86.8, 3045.0], [86.9, 3049.0], [87.0, 3051.0], [87.1, 3061.0], [87.2, 3071.0], [87.3, 3072.0], [87.4, 3077.0], [87.5, 3105.0], [87.6, 3106.0], [87.7, 3111.0], [87.8, 3113.0], [87.9, 3138.0], [88.0, 3151.0], [88.1, 3156.0], [88.2, 3159.0], [88.3, 3173.0], [88.4, 3179.0], [88.5, 3182.0], [88.6, 3203.0], [88.7, 3212.0], [88.8, 3213.0], [88.9, 3217.0], [89.0, 3222.0], [89.1, 3225.0], [89.2, 3235.0], [89.3, 3251.0], [89.4, 3268.0], [89.5, 3312.0], [89.6, 3328.0], [89.7, 3338.0], [89.8, 3358.0], [89.9, 3392.0], [90.0, 3407.0], [90.1, 3416.0], [90.2, 3419.0], [90.3, 3431.0], [90.4, 3459.0], [90.5, 3461.0], [90.6, 3473.0], [90.7, 3480.0], [90.8, 3493.0], [90.9, 3522.0], [91.0, 3547.0], [91.1, 3550.0], [91.2, 3565.0], [91.3, 3571.0], [91.4, 3596.0], [91.5, 3613.0], [91.6, 3617.0], [91.7, 3629.0], [91.8, 3636.0], [91.9, 3643.0], [92.0, 3645.0], [92.1, 3646.0], [92.2, 3687.0], [92.3, 3701.0], [92.4, 3706.0], [92.5, 3723.0], [92.6, 3724.0], [92.7, 3751.0], [92.8, 3752.0], [92.9, 3757.0], [93.0, 3761.0], [93.1, 3776.0], [93.2, 3782.0], [93.3, 3793.0], [93.4, 3844.0], [93.5, 3857.0], [93.6, 3860.0], [93.7, 3868.0], [93.8, 3872.0], [93.9, 3881.0], [94.0, 3921.0], [94.1, 3923.0], [94.2, 3928.0], [94.3, 3957.0], [94.4, 3999.0], [94.5, 4028.0], [94.6, 4047.0], [94.7, 4062.0], [94.8, 4077.0], [94.9, 4087.0], [95.0, 4088.0], [95.1, 4143.0], [95.2, 4187.0], [95.3, 4198.0], [95.4, 4223.0], [95.5, 4236.0], [95.6, 4302.0], [95.7, 4312.0], [95.8, 4343.0], [95.9, 4381.0], [96.0, 4391.0], [96.1, 4398.0], [96.2, 4412.0], [96.3, 4425.0], [96.4, 4432.0], [96.5, 4467.0], [96.6, 4509.0], [96.7, 4557.0], [96.8, 4589.0], [96.9, 4619.0], [97.0, 4669.0], [97.1, 4676.0], [97.2, 4694.0], [97.3, 4711.0], [97.4, 4722.0], [97.5, 4747.0], [97.6, 4811.0], [97.7, 4923.0], [97.8, 4964.0], [97.9, 4969.0], [98.0, 4989.0], [98.1, 4993.0], [98.2, 5087.0], [98.3, 5186.0], [98.4, 5203.0], [98.5, 5253.0], [98.6, 5334.0], [98.7, 5539.0], [98.8, 5634.0], [98.9, 5891.0], [99.0, 6007.0], [99.1, 6077.0], [99.2, 6481.0], [99.3, 6572.0], [99.4, 8368.0], [99.5, 9388.0], [99.6, 10272.0], [99.7, 11488.0], [99.8, 11641.0], [99.9, 21982.0]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 115.0, "series": [{"data": [[600.0, 11.0], [700.0, 21.0], [800.0, 49.0], [900.0, 45.0], [1000.0, 59.0], [1100.0, 42.0], [1200.0, 41.0], [1300.0, 52.0], [1400.0, 40.0], [1500.0, 45.0], [1600.0, 58.0], [1700.0, 47.0], [1800.0, 91.0], [1900.0, 86.0], [2000.0, 94.0], [2100.0, 112.0], [2200.0, 115.0], [2300.0, 84.0], [2400.0, 65.0], [2500.0, 41.0], [2600.0, 47.0], [2800.0, 39.0], [2700.0, 32.0], [2900.0, 22.0], [3000.0, 19.0], [3100.0, 18.0], [3200.0, 14.0], [3300.0, 8.0], [3400.0, 14.0], [3500.0, 9.0], [3600.0, 14.0], [3700.0, 16.0], [3800.0, 11.0], [3900.0, 7.0], [4000.0, 9.0], [4200.0, 4.0], [4300.0, 9.0], [4100.0, 5.0], [4600.0, 6.0], [4400.0, 7.0], [4500.0, 4.0], [4700.0, 6.0], [4800.0, 1.0], [4900.0, 7.0], [5100.0, 2.0], [5000.0, 2.0], [5200.0, 3.0], [5300.0, 1.0], [5400.0, 1.0], [5500.0, 2.0], [5600.0, 1.0], [5800.0, 2.0], [6000.0, 2.0], [6500.0, 1.0], [6400.0, 2.0], [7000.0, 1.0], [8300.0, 1.0], [8600.0, 1.0], [9300.0, 1.0], [10200.0, 1.0], [10800.0, 1.0], [11400.0, 1.0], [11600.0, 2.0], [22200.0, 1.0], [21900.0, 1.0], [300.0, 1.0], [400.0, 9.0], [500.0, 17.0]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 25.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1462.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 96.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1462.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.739130434782609, "minX": 1.7682864E12, "maxY": 20.0, "series": [{"data": [[1.76828664E12, 17.95698924731184], [1.76828652E12, 20.0], [1.7682864E12, 2.739130434782609], [1.76828658E12, 20.0], [1.76828646E12, 13.696280991735529]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828664E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 730.2, "minX": 1.0, "maxY": 6210.5, "series": [{"data": [[2.0, 3967.1428571428573], [8.0, 967.3600000000001], [9.0, 1119.7037037037037], [10.0, 1049.206896551724], [11.0, 1210.4285714285713], [3.0, 1209.0], [12.0, 1437.642857142857], [13.0, 1342.8709677419354], [14.0, 1505.2272727272725], [15.0, 1632.3870967741932], [1.0, 6210.5], [4.0, 1634.2727272727273], [16.0, 1741.185185185185], [17.0, 1866.5714285714287], [18.0, 2075.7666666666664], [19.0, 2127.6428571428573], [5.0, 952.1578947368422], [20.0, 2468.8912097476077], [6.0, 730.2], [7.0, 929.72]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}, {"data": [[17.701831964624155, 2200.426405559061]], "isOverall": false, "label": "/api/program/fetch/-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 90.85, "minX": 1.7682864E12, "maxY": 4736645.766666667, "series": [{"data": [[1.76828664E12, 940281.9166666666], [1.76828652E12, 4736645.766666667], [1.7682864E12, 4200.95], [1.76828658E12, 4715962.266666667], [1.76828646E12, 4564189.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76828664E12, 367.35], [1.76828652E12, 1947.35], [1.7682864E12, 90.85], [1.76828658E12, 1935.5], [1.76828646E12, 1911.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828664E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 943.1304347826086, "minX": 1.7682864E12, "maxY": 2930.1397849462364, "series": [{"data": [[1.76828664E12, 2930.1397849462364], [1.76828652E12, 2425.087221095332], [1.7682864E12, 943.1304347826086], [1.76828658E12, 2452.326530612241], [1.76828646E12, 1636.0991735537198]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828664E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 942.5652173913044, "minX": 1.7682864E12, "maxY": 2222.3870967741927, "series": [{"data": [[1.76828664E12, 2222.3870967741927], [1.76828652E12, 1885.3286004056797], [1.7682864E12, 942.5652173913044], [1.76828658E12, 1882.9755102040815], [1.76828646E12, 1260.9752066115711]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828664E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.9061224489795907, "minX": 1.7682864E12, "maxY": 460.0645161290322, "series": [{"data": [[1.76828664E12, 460.0645161290322], [1.76828652E12, 3.9716024340770786], [1.7682864E12, 41.391304347826086], [1.76828658E12, 3.9061224489795907], [1.76828646E12, 7.495867768595039]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828664E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 687.0, "minX": 1.7682864E12, "maxY": 6572.0, "series": [{"data": [[1.76828664E12, 6433.0], [1.76828652E12, 5186.0], [1.7682864E12, 1778.0], [1.76828658E12, 4722.0], [1.76828646E12, 6572.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76828664E12, 6433.0], [1.76828652E12, 3156.0], [1.7682864E12, 687.0], [1.76828658E12, 2311.0], [1.76828646E12, 898.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76828664E12, 6433.0], [1.76828652E12, 4991.9], [1.7682864E12, 1306.4000000000003], [1.76828658E12, 4417.0], [1.76828646E12, 5487.800000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76828664E12, 6433.0], [1.76828652E12, 5186.0], [1.7682864E12, 1778.0], [1.76828658E12, 4722.0], [1.76828646E12, 6572.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76828664E12, 6433.0], [1.76828652E12, 4081.5], [1.7682864E12, 838.0], [1.76828658E12, 3419.0], [1.76828646E12, 3646.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76828664E12, 6433.0], [1.76828652E12, 5124.4], [1.7682864E12, 1706.799999999999], [1.76828658E12, 4615.5], [1.76828646E12, 5930.749999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828664E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 867.0, "minX": 1.0, "maxY": 13367.0, "series": [{"data": [[2.0, 967.5], [8.0, 3723.5], [9.0, 3419.0], [10.0, 2915.0], [3.0, 867.0], [12.0, 4722.0], [13.0, 4396.0], [14.0, 3800.0], [1.0, 1422.0], [4.0, 1109.5], [17.0, 4088.0], [18.0, 4571.5], [5.0, 921.0], [6.0, 6433.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1358.0], [2.0, 1689.0], [9.0, 1344.0], [10.0, 2206.0], [11.0, 2029.5], [12.0, 2130.0], [3.0, 2139.0], [13.0, 2222.5], [14.0, 2219.0], [15.0, 1701.0], [16.0, 2197.5], [4.0, 2088.0], [1.0, 13367.0], [17.0, 2401.0], [18.0, 2557.0], [5.0, 2109.5], [20.0, 2443.0], [6.0, 1940.0], [7.0, 2023.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 867.0, "minX": 1.0, "maxY": 11336.5, "series": [{"data": [[2.0, 967.0], [8.0, 3723.5], [9.0, 3419.0], [10.0, 2915.0], [3.0, 867.0], [12.0, 4722.0], [13.0, 4396.0], [14.0, 3800.0], [1.0, 1418.0], [4.0, 1109.0], [17.0, 4088.0], [18.0, 4571.5], [5.0, 921.0], [6.0, 6433.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1093.0], [2.0, 1155.5], [9.0, 1007.0], [10.0, 1579.0], [11.0, 1582.5], [12.0, 1660.0], [3.0, 1199.0], [13.0, 1723.5], [14.0, 1790.0], [15.0, 1323.0], [16.0, 1666.0], [4.0, 1648.5], [1.0, 11336.5], [17.0, 1606.0], [18.0, 1765.5], [5.0, 1634.0], [20.0, 1546.0], [6.0, 1543.0], [7.0, 1569.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.7682864E12, "maxY": 8.333333333333334, "series": [{"data": [[1.76828664E12, 1.2166666666666666], [1.76828652E12, 8.216666666666667], [1.7682864E12, 0.45], [1.76828658E12, 8.166666666666666], [1.76828646E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828664E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7682864E12, "maxY": 7.716666666666667, "series": [{"data": [[1.76828664E12, 0.016666666666666666], [1.76828652E12, 0.5], [1.7682864E12, 0.38333333333333336], [1.76828658E12, 0.48333333333333334], [1.76828646E12, 0.6333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76828664E12, 1.5333333333333334], [1.76828652E12, 7.716666666666667], [1.76828658E12, 7.683333333333334], [1.76828646E12, 7.433333333333334]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76828664E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7682864E12, "maxY": 7.716666666666667, "series": [{"data": [[1.76828664E12, 0.016666666666666666], [1.76828652E12, 0.5], [1.7682864E12, 0.38333333333333336], [1.76828658E12, 0.48333333333333334], [1.76828646E12, 0.6333333333333333]], "isOverall": false, "label": "/api/program/fetch/-success", "isController": false}, {"data": [[1.76828664E12, 1.5333333333333334], [1.76828652E12, 7.716666666666667], [1.76828658E12, 7.683333333333334], [1.76828646E12, 7.433333333333334]], "isOverall": false, "label": "/api/program/fetch/-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828664E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7682864E12, "maxY": 7.716666666666667, "series": [{"data": [[1.76828664E12, 0.016666666666666666], [1.76828652E12, 0.5], [1.7682864E12, 0.38333333333333336], [1.76828658E12, 0.48333333333333334], [1.76828646E12, 0.6333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76828664E12, 1.5333333333333334], [1.76828652E12, 7.716666666666667], [1.76828658E12, 7.683333333333334], [1.76828646E12, 7.433333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76828664E12, "title": "Total Transactions Per Second"}},
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

