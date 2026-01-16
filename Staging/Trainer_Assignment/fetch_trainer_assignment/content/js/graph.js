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
        data: {"result": {"minY": 707.0, "minX": 0.0, "maxY": 24168.0, "series": [{"data": [[0.0, 707.0], [0.1, 707.0], [0.2, 777.0], [0.3, 789.0], [0.4, 789.0], [0.5, 793.0], [0.6, 809.0], [0.7, 809.0], [0.8, 810.0], [0.9, 810.0], [1.0, 813.0], [1.1, 813.0], [1.2, 813.0], [1.3, 816.0], [1.4, 816.0], [1.5, 821.0], [1.6, 823.0], [1.7, 829.0], [1.8, 829.0], [1.9, 846.0], [2.0, 856.0], [2.1, 856.0], [2.2, 872.0], [2.3, 877.0], [2.4, 901.0], [2.5, 901.0], [2.6, 902.0], [2.7, 914.0], [2.8, 914.0], [2.9, 917.0], [3.0, 919.0], [3.1, 921.0], [3.2, 921.0], [3.3, 922.0], [3.4, 936.0], [3.5, 936.0], [3.6, 946.0], [3.7, 951.0], [3.8, 954.0], [3.9, 954.0], [4.0, 959.0], [4.1, 977.0], [4.2, 977.0], [4.3, 985.0], [4.4, 986.0], [4.5, 998.0], [4.6, 998.0], [4.7, 1003.0], [4.8, 1003.0], [4.9, 1003.0], [5.0, 1005.0], [5.1, 1012.0], [5.2, 1014.0], [5.3, 1014.0], [5.4, 1018.0], [5.5, 1019.0], [5.6, 1019.0], [5.7, 1034.0], [5.8, 1044.0], [5.9, 1049.0], [6.0, 1049.0], [6.1, 1062.0], [6.2, 1064.0], [6.3, 1064.0], [6.4, 1066.0], [6.5, 1112.0], [6.6, 1142.0], [6.7, 1142.0], [6.8, 1166.0], [6.9, 1183.0], [7.0, 1183.0], [7.1, 1185.0], [7.2, 1264.0], [7.3, 1272.0], [7.4, 1272.0], [7.5, 1278.0], [7.6, 1279.0], [7.7, 1279.0], [7.8, 1283.0], [7.9, 1291.0], [8.0, 1296.0], [8.1, 1296.0], [8.2, 1306.0], [8.3, 1307.0], [8.4, 1307.0], [8.5, 1307.0], [8.6, 1320.0], [8.7, 1324.0], [8.8, 1324.0], [8.9, 1329.0], [9.0, 1330.0], [9.1, 1330.0], [9.2, 1350.0], [9.3, 1353.0], [9.4, 1361.0], [9.5, 1361.0], [9.6, 1372.0], [9.7, 1375.0], [9.8, 1375.0], [9.9, 1380.0], [10.0, 1385.0], [10.1, 1387.0], [10.2, 1387.0], [10.3, 1389.0], [10.4, 1393.0], [10.5, 1393.0], [10.6, 1396.0], [10.7, 1412.0], [10.8, 1415.0], [10.9, 1415.0], [11.0, 1416.0], [11.1, 1419.0], [11.2, 1419.0], [11.3, 1433.0], [11.4, 1439.0], [11.5, 1439.0], [11.6, 1447.0], [11.7, 1461.0], [11.8, 1478.0], [11.9, 1478.0], [12.0, 1490.0], [12.1, 1528.0], [12.2, 1528.0], [12.3, 1529.0], [12.4, 1535.0], [12.5, 1536.0], [12.6, 1536.0], [12.7, 1536.0], [12.8, 1540.0], [12.9, 1540.0], [13.0, 1545.0], [13.1, 1546.0], [13.2, 1548.0], [13.3, 1548.0], [13.4, 1551.0], [13.5, 1551.0], [13.6, 1551.0], [13.7, 1552.0], [13.8, 1554.0], [13.9, 1559.0], [14.0, 1559.0], [14.1, 1559.0], [14.2, 1559.0], [14.3, 1559.0], [14.4, 1565.0], [14.5, 1565.0], [14.6, 1567.0], [14.7, 1567.0], [14.8, 1573.0], [14.9, 1586.0], [15.0, 1586.0], [15.1, 1590.0], [15.2, 1591.0], [15.3, 1597.0], [15.4, 1597.0], [15.5, 1599.0], [15.6, 1602.0], [15.7, 1602.0], [15.8, 1602.0], [15.9, 1624.0], [16.0, 1635.0], [16.1, 1635.0], [16.2, 1643.0], [16.3, 1657.0], [16.4, 1657.0], [16.5, 1661.0], [16.6, 1667.0], [16.7, 1673.0], [16.8, 1673.0], [16.9, 1680.0], [17.0, 1688.0], [17.1, 1688.0], [17.2, 1689.0], [17.3, 1690.0], [17.4, 1691.0], [17.5, 1691.0], [17.6, 1700.0], [17.7, 1708.0], [17.8, 1708.0], [17.9, 1711.0], [18.0, 1712.0], [18.1, 1715.0], [18.2, 1715.0], [18.3, 1718.0], [18.4, 1728.0], [18.5, 1728.0], [18.6, 1728.0], [18.7, 1728.0], [18.8, 1730.0], [18.9, 1730.0], [19.0, 1735.0], [19.1, 1736.0], [19.2, 1736.0], [19.3, 1742.0], [19.4, 1745.0], [19.5, 1746.0], [19.6, 1746.0], [19.7, 1749.0], [19.8, 1750.0], [19.9, 1750.0], [20.0, 1750.0], [20.1, 1751.0], [20.2, 1752.0], [20.3, 1752.0], [20.4, 1756.0], [20.5, 1757.0], [20.6, 1757.0], [20.7, 1763.0], [20.8, 1763.0], [20.9, 1765.0], [21.0, 1765.0], [21.1, 1776.0], [21.2, 1777.0], [21.3, 1777.0], [21.4, 1785.0], [21.5, 1786.0], [21.6, 1786.0], [21.7, 1786.0], [21.8, 1788.0], [21.9, 1789.0], [22.0, 1789.0], [22.1, 1792.0], [22.2, 1794.0], [22.3, 1794.0], [22.4, 1795.0], [22.5, 1796.0], [22.6, 1796.0], [22.7, 1796.0], [22.8, 1796.0], [22.9, 1796.0], [23.0, 1796.0], [23.1, 1797.0], [23.2, 1799.0], [23.3, 1803.0], [23.4, 1803.0], [23.5, 1805.0], [23.6, 1806.0], [23.7, 1806.0], [23.8, 1806.0], [23.9, 1806.0], [24.0, 1809.0], [24.1, 1809.0], [24.2, 1809.0], [24.3, 1813.0], [24.4, 1813.0], [24.5, 1814.0], [24.6, 1814.0], [24.7, 1816.0], [24.8, 1816.0], [24.9, 1817.0], [25.0, 1818.0], [25.1, 1818.0], [25.2, 1819.0], [25.3, 1821.0], [25.4, 1821.0], [25.5, 1821.0], [25.6, 1822.0], [25.7, 1823.0], [25.8, 1823.0], [25.9, 1824.0], [26.0, 1828.0], [26.1, 1833.0], [26.2, 1833.0], [26.3, 1836.0], [26.4, 1839.0], [26.5, 1839.0], [26.6, 1853.0], [26.7, 1856.0], [26.8, 1859.0], [26.9, 1859.0], [27.0, 1861.0], [27.1, 1863.0], [27.2, 1863.0], [27.3, 1868.0], [27.4, 1868.0], [27.5, 1870.0], [27.6, 1870.0], [27.7, 1874.0], [27.8, 1875.0], [27.9, 1875.0], [28.0, 1875.0], [28.1, 1879.0], [28.2, 1881.0], [28.3, 1881.0], [28.4, 1887.0], [28.5, 1888.0], [28.6, 1888.0], [28.7, 1888.0], [28.8, 1894.0], [28.9, 1897.0], [29.0, 1897.0], [29.1, 1905.0], [29.2, 1905.0], [29.3, 1905.0], [29.4, 1906.0], [29.5, 1906.0], [29.6, 1907.0], [29.7, 1907.0], [29.8, 1909.0], [29.9, 1913.0], [30.0, 1913.0], [30.1, 1917.0], [30.2, 1921.0], [30.3, 1922.0], [30.4, 1922.0], [30.5, 1925.0], [30.6, 1927.0], [30.7, 1927.0], [30.8, 1927.0], [30.9, 1928.0], [31.0, 1930.0], [31.1, 1930.0], [31.2, 1930.0], [31.3, 1930.0], [31.4, 1930.0], [31.5, 1931.0], [31.6, 1933.0], [31.7, 1938.0], [31.8, 1938.0], [31.9, 1939.0], [32.0, 1941.0], [32.1, 1941.0], [32.2, 1943.0], [32.3, 1946.0], [32.4, 1950.0], [32.5, 1950.0], [32.6, 1954.0], [32.7, 1961.0], [32.8, 1961.0], [32.9, 1969.0], [33.0, 1971.0], [33.1, 1973.0], [33.2, 1973.0], [33.3, 1974.0], [33.4, 1974.0], [33.5, 1974.0], [33.6, 1978.0], [33.7, 1981.0], [33.8, 1981.0], [33.9, 1981.0], [34.0, 1986.0], [34.1, 1988.0], [34.2, 1988.0], [34.3, 1990.0], [34.4, 1993.0], [34.5, 1993.0], [34.6, 1999.0], [34.7, 2006.0], [34.8, 2009.0], [34.9, 2009.0], [35.0, 2010.0], [35.1, 2012.0], [35.2, 2012.0], [35.3, 2013.0], [35.4, 2018.0], [35.5, 2020.0], [35.6, 2020.0], [35.7, 2020.0], [35.8, 2023.0], [35.9, 2023.0], [36.0, 2024.0], [36.1, 2024.0], [36.2, 2027.0], [36.3, 2027.0], [36.4, 2030.0], [36.5, 2032.0], [36.6, 2032.0], [36.7, 2034.0], [36.8, 2038.0], [36.9, 2040.0], [37.0, 2040.0], [37.1, 2041.0], [37.2, 2043.0], [37.3, 2043.0], [37.4, 2044.0], [37.5, 2047.0], [37.6, 2048.0], [37.7, 2048.0], [37.8, 2051.0], [37.9, 2052.0], [38.0, 2052.0], [38.1, 2052.0], [38.2, 2059.0], [38.3, 2061.0], [38.4, 2061.0], [38.5, 2061.0], [38.6, 2063.0], [38.7, 2063.0], [38.8, 2064.0], [38.9, 2065.0], [39.0, 2067.0], [39.1, 2067.0], [39.2, 2068.0], [39.3, 2069.0], [39.4, 2069.0], [39.5, 2070.0], [39.6, 2077.0], [39.7, 2078.0], [39.8, 2078.0], [39.9, 2081.0], [40.0, 2083.0], [40.1, 2083.0], [40.2, 2085.0], [40.3, 2086.0], [40.4, 2088.0], [40.5, 2088.0], [40.6, 2088.0], [40.7, 2088.0], [40.8, 2088.0], [40.9, 2091.0], [41.0, 2094.0], [41.1, 2096.0], [41.2, 2096.0], [41.3, 2097.0], [41.4, 2099.0], [41.5, 2099.0], [41.6, 2099.0], [41.7, 2101.0], [41.8, 2108.0], [41.9, 2108.0], [42.0, 2113.0], [42.1, 2113.0], [42.2, 2113.0], [42.3, 2114.0], [42.4, 2116.0], [42.5, 2117.0], [42.6, 2117.0], [42.7, 2118.0], [42.8, 2119.0], [42.9, 2119.0], [43.0, 2121.0], [43.1, 2122.0], [43.2, 2123.0], [43.3, 2123.0], [43.4, 2123.0], [43.5, 2123.0], [43.6, 2123.0], [43.7, 2127.0], [43.8, 2129.0], [43.9, 2131.0], [44.0, 2131.0], [44.1, 2131.0], [44.2, 2132.0], [44.3, 2132.0], [44.4, 2132.0], [44.5, 2133.0], [44.6, 2133.0], [44.7, 2134.0], [44.8, 2135.0], [44.9, 2136.0], [45.0, 2136.0], [45.1, 2137.0], [45.2, 2141.0], [45.3, 2141.0], [45.4, 2145.0], [45.5, 2145.0], [45.6, 2146.0], [45.7, 2146.0], [45.8, 2147.0], [45.9, 2147.0], [46.0, 2147.0], [46.1, 2148.0], [46.2, 2149.0], [46.3, 2153.0], [46.4, 2153.0], [46.5, 2154.0], [46.6, 2154.0], [46.7, 2154.0], [46.8, 2170.0], [46.9, 2173.0], [47.0, 2175.0], [47.1, 2175.0], [47.2, 2178.0], [47.3, 2179.0], [47.4, 2179.0], [47.5, 2179.0], [47.6, 2180.0], [47.7, 2181.0], [47.8, 2181.0], [47.9, 2183.0], [48.0, 2183.0], [48.1, 2183.0], [48.2, 2184.0], [48.3, 2185.0], [48.4, 2186.0], [48.5, 2186.0], [48.6, 2186.0], [48.7, 2186.0], [48.8, 2186.0], [48.9, 2188.0], [49.0, 2189.0], [49.1, 2191.0], [49.2, 2191.0], [49.3, 2193.0], [49.4, 2196.0], [49.5, 2196.0], [49.6, 2198.0], [49.7, 2198.0], [49.8, 2199.0], [49.9, 2199.0], [50.0, 2199.0], [50.1, 2201.0], [50.2, 2201.0], [50.3, 2202.0], [50.4, 2202.0], [50.5, 2202.0], [50.6, 2202.0], [50.7, 2202.0], [50.8, 2203.0], [50.9, 2203.0], [51.0, 2209.0], [51.1, 2210.0], [51.2, 2212.0], [51.3, 2212.0], [51.4, 2213.0], [51.5, 2214.0], [51.6, 2214.0], [51.7, 2217.0], [51.8, 2220.0], [51.9, 2222.0], [52.0, 2222.0], [52.1, 2228.0], [52.2, 2228.0], [52.3, 2228.0], [52.4, 2231.0], [52.5, 2232.0], [52.6, 2237.0], [52.7, 2237.0], [52.8, 2238.0], [52.9, 2239.0], [53.0, 2239.0], [53.1, 2242.0], [53.2, 2242.0], [53.3, 2247.0], [53.4, 2247.0], [53.5, 2249.0], [53.6, 2250.0], [53.7, 2250.0], [53.8, 2250.0], [53.9, 2253.0], [54.0, 2253.0], [54.1, 2253.0], [54.2, 2254.0], [54.3, 2255.0], [54.4, 2255.0], [54.5, 2256.0], [54.6, 2257.0], [54.7, 2258.0], [54.8, 2258.0], [54.9, 2258.0], [55.0, 2260.0], [55.1, 2260.0], [55.2, 2264.0], [55.3, 2265.0], [55.4, 2274.0], [55.5, 2274.0], [55.6, 2277.0], [55.7, 2277.0], [55.8, 2277.0], [55.9, 2279.0], [56.0, 2282.0], [56.1, 2282.0], [56.2, 2286.0], [56.3, 2286.0], [56.4, 2287.0], [56.5, 2287.0], [56.6, 2289.0], [56.7, 2290.0], [56.8, 2290.0], [56.9, 2291.0], [57.0, 2292.0], [57.1, 2293.0], [57.2, 2293.0], [57.3, 2295.0], [57.4, 2301.0], [57.5, 2301.0], [57.6, 2302.0], [57.7, 2302.0], [57.8, 2303.0], [57.9, 2303.0], [58.0, 2305.0], [58.1, 2306.0], [58.2, 2306.0], [58.3, 2308.0], [58.4, 2308.0], [58.5, 2310.0], [58.6, 2310.0], [58.7, 2313.0], [58.8, 2318.0], [58.9, 2318.0], [59.0, 2324.0], [59.1, 2325.0], [59.2, 2330.0], [59.3, 2330.0], [59.4, 2335.0], [59.5, 2335.0], [59.6, 2335.0], [59.7, 2339.0], [59.8, 2339.0], [59.9, 2339.0], [60.0, 2339.0], [60.1, 2340.0], [60.2, 2342.0], [60.3, 2342.0], [60.4, 2342.0], [60.5, 2347.0], [60.6, 2349.0], [60.7, 2349.0], [60.8, 2350.0], [60.9, 2354.0], [61.0, 2354.0], [61.1, 2354.0], [61.2, 2362.0], [61.3, 2363.0], [61.4, 2363.0], [61.5, 2364.0], [61.6, 2369.0], [61.7, 2369.0], [61.8, 2369.0], [61.9, 2372.0], [62.0, 2373.0], [62.1, 2373.0], [62.2, 2375.0], [62.3, 2376.0], [62.4, 2376.0], [62.5, 2377.0], [62.6, 2381.0], [62.7, 2383.0], [62.8, 2383.0], [62.9, 2389.0], [63.0, 2389.0], [63.1, 2389.0], [63.2, 2391.0], [63.3, 2395.0], [63.4, 2397.0], [63.5, 2397.0], [63.6, 2398.0], [63.7, 2402.0], [63.8, 2402.0], [63.9, 2405.0], [64.0, 2405.0], [64.1, 2407.0], [64.2, 2407.0], [64.3, 2408.0], [64.4, 2410.0], [64.5, 2410.0], [64.6, 2422.0], [64.7, 2424.0], [64.8, 2425.0], [64.9, 2425.0], [65.0, 2427.0], [65.1, 2429.0], [65.2, 2429.0], [65.3, 2430.0], [65.4, 2433.0], [65.5, 2434.0], [65.6, 2434.0], [65.7, 2436.0], [65.8, 2436.0], [65.9, 2436.0], [66.0, 2437.0], [66.1, 2449.0], [66.2, 2451.0], [66.3, 2451.0], [66.4, 2456.0], [66.5, 2462.0], [66.6, 2462.0], [66.7, 2462.0], [66.8, 2473.0], [66.9, 2473.0], [67.0, 2474.0], [67.1, 2474.0], [67.2, 2478.0], [67.3, 2478.0], [67.4, 2479.0], [67.5, 2479.0], [67.6, 2479.0], [67.7, 2482.0], [67.8, 2484.0], [67.9, 2484.0], [68.0, 2484.0], [68.1, 2488.0], [68.2, 2495.0], [68.3, 2495.0], [68.4, 2505.0], [68.5, 2507.0], [68.6, 2515.0], [68.7, 2515.0], [68.8, 2518.0], [68.9, 2520.0], [69.0, 2520.0], [69.1, 2525.0], [69.2, 2531.0], [69.3, 2534.0], [69.4, 2534.0], [69.5, 2534.0], [69.6, 2537.0], [69.7, 2537.0], [69.8, 2542.0], [69.9, 2545.0], [70.0, 2546.0], [70.1, 2546.0], [70.2, 2556.0], [70.3, 2556.0], [70.4, 2556.0], [70.5, 2557.0], [70.6, 2569.0], [70.7, 2570.0], [70.8, 2570.0], [70.9, 2577.0], [71.0, 2582.0], [71.1, 2582.0], [71.2, 2585.0], [71.3, 2590.0], [71.4, 2597.0], [71.5, 2597.0], [71.6, 2602.0], [71.7, 2603.0], [71.8, 2603.0], [71.9, 2604.0], [72.0, 2607.0], [72.1, 2609.0], [72.2, 2609.0], [72.3, 2613.0], [72.4, 2618.0], [72.5, 2618.0], [72.6, 2625.0], [72.7, 2638.0], [72.8, 2652.0], [72.9, 2652.0], [73.0, 2656.0], [73.1, 2656.0], [73.2, 2656.0], [73.3, 2662.0], [73.4, 2667.0], [73.5, 2670.0], [73.6, 2670.0], [73.7, 2672.0], [73.8, 2682.0], [73.9, 2682.0], [74.0, 2687.0], [74.1, 2694.0], [74.2, 2709.0], [74.3, 2709.0], [74.4, 2711.0], [74.5, 2721.0], [74.6, 2721.0], [74.7, 2730.0], [74.8, 2735.0], [74.9, 2736.0], [75.0, 2736.0], [75.1, 2737.0], [75.2, 2738.0], [75.3, 2738.0], [75.4, 2740.0], [75.5, 2741.0], [75.6, 2742.0], [75.7, 2742.0], [75.8, 2744.0], [75.9, 2747.0], [76.0, 2747.0], [76.1, 2758.0], [76.2, 2765.0], [76.3, 2771.0], [76.4, 2771.0], [76.5, 2772.0], [76.6, 2777.0], [76.7, 2777.0], [76.8, 2778.0], [76.9, 2782.0], [77.0, 2782.0], [77.1, 2782.0], [77.2, 2788.0], [77.3, 2789.0], [77.4, 2789.0], [77.5, 2800.0], [77.6, 2805.0], [77.7, 2820.0], [77.8, 2820.0], [77.9, 2829.0], [78.0, 2849.0], [78.1, 2849.0], [78.2, 2854.0], [78.3, 2856.0], [78.4, 2856.0], [78.5, 2866.0], [78.6, 2869.0], [78.7, 2874.0], [78.8, 2874.0], [78.9, 2879.0], [79.0, 2884.0], [79.1, 2884.0], [79.2, 2890.0], [79.3, 2894.0], [79.4, 2924.0], [79.5, 2924.0], [79.6, 2925.0], [79.7, 2941.0], [79.8, 2941.0], [79.9, 2948.0], [80.0, 2962.0], [80.1, 2964.0], [80.2, 2964.0], [80.3, 2966.0], [80.4, 2993.0], [80.5, 2993.0], [80.6, 3009.0], [80.7, 3055.0], [80.8, 3057.0], [80.9, 3057.0], [81.0, 3060.0], [81.1, 3075.0], [81.2, 3075.0], [81.3, 3183.0], [81.4, 3183.0], [81.5, 3199.0], [81.6, 3199.0], [81.7, 3200.0], [81.8, 3237.0], [81.9, 3237.0], [82.0, 3241.0], [82.1, 3245.0], [82.2, 3263.0], [82.3, 3263.0], [82.4, 3275.0], [82.5, 3295.0], [82.6, 3295.0], [82.7, 3295.0], [82.8, 3349.0], [82.9, 3442.0], [83.0, 3442.0], [83.1, 3450.0], [83.2, 3469.0], [83.3, 3469.0], [83.4, 3478.0], [83.5, 3495.0], [83.6, 3516.0], [83.7, 3516.0], [83.8, 3561.0], [83.9, 3562.0], [84.0, 3562.0], [84.1, 3623.0], [84.2, 3728.0], [84.3, 3750.0], [84.4, 3750.0], [84.5, 3826.0], [84.6, 3840.0], [84.7, 3840.0], [84.8, 3889.0], [84.9, 3921.0], [85.0, 3966.0], [85.1, 3966.0], [85.2, 3997.0], [85.3, 4017.0], [85.4, 4017.0], [85.5, 4184.0], [85.6, 4262.0], [85.7, 4301.0], [85.8, 4301.0], [85.9, 4326.0], [86.0, 4426.0], [86.1, 4426.0], [86.2, 21344.0], [86.3, 21352.0], [86.4, 21353.0], [86.5, 21353.0], [86.6, 21357.0], [86.7, 21358.0], [86.8, 21358.0], [86.9, 21359.0], [87.0, 21359.0], [87.1, 21361.0], [87.2, 21361.0], [87.3, 21361.0], [87.4, 21361.0], [87.5, 21361.0], [87.6, 21362.0], [87.7, 21362.0], [87.8, 21364.0], [87.9, 21364.0], [88.0, 21365.0], [88.1, 21367.0], [88.2, 21367.0], [88.3, 21368.0], [88.4, 21369.0], [88.5, 21371.0], [88.6, 21371.0], [88.7, 21371.0], [88.8, 21376.0], [88.9, 21376.0], [89.0, 21378.0], [89.1, 21379.0], [89.2, 21379.0], [89.3, 21379.0], [89.4, 21380.0], [89.5, 21381.0], [89.6, 21381.0], [89.7, 21387.0], [89.8, 21390.0], [89.9, 21390.0], [90.0, 21394.0], [90.1, 21395.0], [90.2, 21395.0], [90.3, 21395.0], [90.4, 21396.0], [90.5, 21397.0], [90.6, 21397.0], [90.7, 21400.0], [90.8, 21401.0], [90.9, 21413.0], [91.0, 21413.0], [91.1, 21414.0], [91.2, 21417.0], [91.3, 21417.0], [91.4, 21430.0], [91.5, 21436.0], [91.6, 21438.0], [91.7, 21438.0], [91.8, 21439.0], [91.9, 21439.0], [92.0, 21439.0], [92.1, 21452.0], [92.2, 21457.0], [92.3, 21466.0], [92.4, 21466.0], [92.5, 21470.0], [92.6, 21487.0], [92.7, 21487.0], [92.8, 21498.0], [92.9, 21510.0], [93.0, 21530.0], [93.1, 21530.0], [93.2, 21544.0], [93.3, 21572.0], [93.4, 21572.0], [93.5, 21618.0], [93.6, 21701.0], [93.7, 21756.0], [93.8, 21756.0], [93.9, 21769.0], [94.0, 21771.0], [94.1, 21771.0], [94.2, 21773.0], [94.3, 21791.0], [94.4, 21794.0], [94.5, 21794.0], [94.6, 21797.0], [94.7, 21797.0], [94.8, 21797.0], [94.9, 21806.0], [95.0, 21815.0], [95.1, 21817.0], [95.2, 21817.0], [95.3, 21817.0], [95.4, 21821.0], [95.5, 21821.0], [95.6, 21822.0], [95.7, 21822.0], [95.8, 21825.0], [95.9, 21825.0], [96.0, 21828.0], [96.1, 21847.0], [96.2, 21847.0], [96.3, 21854.0], [96.4, 21857.0], [96.5, 21857.0], [96.6, 21857.0], [96.7, 21868.0], [96.8, 21881.0], [96.9, 21881.0], [97.0, 21913.0], [97.1, 21925.0], [97.2, 21929.0], [97.3, 21929.0], [97.4, 22103.0], [97.5, 22109.0], [97.6, 22109.0], [97.7, 22160.0], [97.8, 22164.0], [97.9, 22172.0], [98.0, 22172.0], [98.1, 22315.0], [98.2, 22329.0], [98.3, 22329.0], [98.4, 22343.0], [98.5, 22364.0], [98.6, 22373.0], [98.7, 22373.0], [98.8, 22376.0], [98.9, 22393.0], [99.0, 22393.0], [99.1, 22417.0], [99.2, 22420.0], [99.3, 22463.0], [99.4, 22463.0], [99.5, 22537.0], [99.6, 22709.0], [99.7, 22709.0], [99.8, 23176.0], [99.9, 24168.0]], "isOverall": false, "label": "/api/trainer/schedule/assignment", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 60.0, "series": [{"data": [[700.0, 4.0], [800.0, 13.0], [900.0, 16.0], [1000.0, 13.0], [1100.0, 5.0], [1200.0, 7.0], [1300.0, 18.0], [1400.0, 10.0], [1500.0, 25.0], [1600.0, 14.0], [1700.0, 41.0], [1800.0, 41.0], [1900.0, 40.0], [2000.0, 50.0], [2100.0, 60.0], [2300.0, 45.0], [2200.0, 52.0], [2400.0, 33.0], [2500.0, 23.0], [2600.0, 19.0], [2700.0, 23.0], [2800.0, 14.0], [2900.0, 8.0], [3000.0, 5.0], [3100.0, 3.0], [3200.0, 8.0], [3300.0, 1.0], [3400.0, 5.0], [3500.0, 3.0], [3700.0, 2.0], [3600.0, 1.0], [3800.0, 3.0], [3900.0, 3.0], [4000.0, 1.0], [4300.0, 2.0], [4100.0, 1.0], [4200.0, 1.0], [4400.0, 1.0], [21400.0, 16.0], [21500.0, 4.0], [21300.0, 32.0], [22100.0, 5.0], [21600.0, 1.0], [21700.0, 9.0], [22300.0, 7.0], [21800.0, 15.0], [21900.0, 3.0], [22400.0, 3.0], [22500.0, 1.0], [23100.0, 1.0], [22700.0, 1.0], [24100.0, 1.0]], "isOverall": false, "label": "/api/trainer/schedule/assignment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 623.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 86.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 623.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.7684436E12, "maxY": 20.0, "series": [{"data": [[1.76844366E12, 19.065217391304348], [1.76844378E12, 19.54653937947494], [1.7684436E12, 10.0], [1.76844372E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76844378E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1306.0, "minX": 1.0, "maxY": 15673.0, "series": [{"data": [[8.0, 12281.0], [2.0, 2964.0], [9.0, 11851.5], [10.0, 11975.0], [11.0, 11735.5], [12.0, 12004.0], [3.0, 1540.0], [13.0, 12940.0], [14.0, 11894.0], [15.0, 14993.333333333332], [16.0, 15071.0], [4.0, 2474.0], [1.0, 2777.0], [17.0, 15380.333333333332], [18.0, 15528.333333333332], [19.0, 15673.0], [20.0, 4480.304283604136], [5.0, 1565.0], [6.0, 2546.0], [7.0, 1306.0]], "isOverall": false, "label": "/api/trainer/schedule/assignment", "isController": false}, {"data": [[19.603085553997186, 4835.396914446006]], "isOverall": false, "label": "/api/trainer/schedule/assignment-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 67.08333333333333, "minX": 1.7684436E12, "maxY": 4300377.966666667, "series": [{"data": [[1.76844366E12, 114010.01666666666], [1.76844378E12, 4300377.966666667], [1.7684436E12, 156.25], [1.76844372E12, 1982457.7166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76844366E12, 617.1666666666666], [1.76844378E12, 5621.583333333333], [1.7684436E12, 67.08333333333333], [1.76844372E12, 3260.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76844378E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2278.040572792362, "minX": 1.7684436E12, "maxY": 21725.4, "series": [{"data": [[1.76844366E12, 21558.76086956522], [1.76844378E12, 2278.040572792362], [1.7684436E12, 21725.4], [1.76844372E12, 5731.724279835393]], "isOverall": false, "label": "/api/trainer/schedule/assignment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76844378E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1576.4057279236283, "minX": 1.7684436E12, "maxY": 21722.6, "series": [{"data": [[1.76844366E12, 21474.47826086957], [1.76844378E12, 1576.4057279236283], [1.7684436E12, 21722.6], [1.76844372E12, 5227.695473251027]], "isOverall": false, "label": "/api/trainer/schedule/assignment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76844378E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 92.6801909307877, "minX": 1.7684436E12, "maxY": 21306.4, "series": [{"data": [[1.76844366E12, 21170.15217391305], [1.76844378E12, 92.6801909307877], [1.7684436E12, 21306.4], [1.76844372E12, 4254.806584362142]], "isOverall": false, "label": "/api/trainer/schedule/assignment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76844378E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 707.0, "minX": 1.7684436E12, "maxY": 22420.0, "series": [{"data": [[1.76844366E12, 22373.0], [1.7684436E12, 22164.0], [1.76844372E12, 22420.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76844366E12, 21357.0], [1.7684436E12, 21413.0], [1.76844372E12, 707.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76844366E12, 21651.2], [1.7684436E12, 22164.0], [1.76844372E12, 21426.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76844366E12, 22373.0], [1.7684436E12, 22164.0], [1.76844372E12, 22420.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76844366E12, 21401.0], [1.7684436E12, 21452.0], [1.76844372E12, 2224.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76844366E12, 22157.0], [1.7684436E12, 22164.0], [1.76844372E12, 21922.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76844372E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1003.0, "minX": 1.0, "maxY": 21818.0, "series": [{"data": [[1.0, 21390.5], [2.0, 21400.5], [9.0, 1792.0], [11.0, 1003.0], [3.0, 21371.0], [13.0, 1769.5], [7.0, 3966.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 21807.0], [8.0, 2139.0], [9.0, 2195.0], [10.0, 2057.5], [11.0, 2017.5], [3.0, 2088.0], [12.0, 2092.0], [13.0, 2462.0], [14.0, 2558.0], [1.0, 21818.0], [4.0, 2225.5], [16.0, 2239.0], [5.0, 1821.0], [6.0, 1977.0], [7.0, 2116.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1003.0, "minX": 1.0, "maxY": 21447.0, "series": [{"data": [[1.0, 21389.5], [2.0, 21400.0], [9.0, 1792.0], [11.0, 1003.0], [3.0, 21370.0], [13.0, 1768.5], [7.0, 3966.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 21441.5], [8.0, 1524.0], [9.0, 1595.5], [10.0, 1401.0], [11.0, 1376.0], [3.0, 1511.5], [12.0, 1392.0], [13.0, 1672.0], [14.0, 1656.5], [1.0, 21447.0], [4.0, 1533.0], [16.0, 1345.5], [5.0, 1130.0], [6.0, 1385.5], [7.0, 1490.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.7684436E12, "maxY": 6.65, "series": [{"data": [[1.76844366E12, 0.9], [1.76844378E12, 6.65], [1.7684436E12, 0.2833333333333333], [1.76844372E12, 4.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76844378E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.7684436E12, "maxY": 6.983333333333333, "series": [{"data": [[1.76844366E12, 0.5833333333333334], [1.7684436E12, 0.08333333333333333], [1.76844372E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76844366E12, 0.18333333333333332], [1.76844378E12, 6.983333333333333], [1.76844372E12, 3.216666666666667]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76844378E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.7684436E12, "maxY": 6.983333333333333, "series": [{"data": [[1.76844366E12, 0.5833333333333334], [1.7684436E12, 0.08333333333333333], [1.76844372E12, 0.8333333333333334]], "isOverall": false, "label": "/api/trainer/schedule/assignment-success", "isController": false}, {"data": [[1.76844366E12, 0.18333333333333332], [1.76844378E12, 6.983333333333333], [1.76844372E12, 3.216666666666667]], "isOverall": false, "label": "/api/trainer/schedule/assignment-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76844378E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.7684436E12, "maxY": 6.983333333333333, "series": [{"data": [[1.76844366E12, 0.5833333333333334], [1.7684436E12, 0.08333333333333333], [1.76844372E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76844366E12, 0.18333333333333332], [1.76844378E12, 6.983333333333333], [1.76844372E12, 3.216666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76844378E12, "title": "Total Transactions Per Second"}},
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

