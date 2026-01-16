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
        data: {"result": {"minY": 292.0, "minX": 0.0, "maxY": 22145.0, "series": [{"data": [[0.0, 292.0], [0.1, 294.0], [0.2, 294.0], [0.3, 294.0], [0.4, 300.0], [0.5, 301.0], [0.6, 304.0], [0.7, 307.0], [0.8, 310.0], [0.9, 315.0], [1.0, 327.0], [1.1, 332.0], [1.2, 350.0], [1.3, 356.0], [1.4, 411.0], [1.5, 418.0], [1.6, 453.0], [1.7, 478.0], [1.8, 489.0], [1.9, 490.0], [2.0, 497.0], [2.1, 499.0], [2.2, 505.0], [2.3, 524.0], [2.4, 542.0], [2.5, 545.0], [2.6, 546.0], [2.7, 549.0], [2.8, 560.0], [2.9, 570.0], [3.0, 579.0], [3.1, 583.0], [3.2, 590.0], [3.3, 595.0], [3.4, 602.0], [3.5, 612.0], [3.6, 613.0], [3.7, 624.0], [3.8, 633.0], [3.9, 635.0], [4.0, 659.0], [4.1, 665.0], [4.2, 667.0], [4.3, 670.0], [4.4, 680.0], [4.5, 683.0], [4.6, 686.0], [4.7, 690.0], [4.8, 703.0], [4.9, 713.0], [5.0, 730.0], [5.1, 731.0], [5.2, 745.0], [5.3, 754.0], [5.4, 755.0], [5.5, 768.0], [5.6, 774.0], [5.7, 778.0], [5.8, 786.0], [5.9, 788.0], [6.0, 789.0], [6.1, 790.0], [6.2, 799.0], [6.3, 802.0], [6.4, 812.0], [6.5, 821.0], [6.6, 825.0], [6.7, 828.0], [6.8, 840.0], [6.9, 842.0], [7.0, 847.0], [7.1, 851.0], [7.2, 852.0], [7.3, 857.0], [7.4, 859.0], [7.5, 869.0], [7.6, 886.0], [7.7, 890.0], [7.8, 893.0], [7.9, 894.0], [8.0, 912.0], [8.1, 919.0], [8.2, 926.0], [8.3, 931.0], [8.4, 936.0], [8.5, 938.0], [8.6, 951.0], [8.7, 955.0], [8.8, 957.0], [8.9, 968.0], [9.0, 968.0], [9.1, 972.0], [9.2, 978.0], [9.3, 979.0], [9.4, 984.0], [9.5, 993.0], [9.6, 1005.0], [9.7, 1007.0], [9.8, 1010.0], [9.9, 1012.0], [10.0, 1029.0], [10.1, 1048.0], [10.2, 1051.0], [10.3, 1058.0], [10.4, 1059.0], [10.5, 1060.0], [10.6, 1063.0], [10.7, 1066.0], [10.8, 1069.0], [10.9, 1072.0], [11.0, 1076.0], [11.1, 1077.0], [11.2, 1083.0], [11.3, 1087.0], [11.4, 1090.0], [11.5, 1092.0], [11.6, 1099.0], [11.7, 1105.0], [11.8, 1110.0], [11.9, 1116.0], [12.0, 1121.0], [12.1, 1126.0], [12.2, 1129.0], [12.3, 1130.0], [12.4, 1135.0], [12.5, 1144.0], [12.6, 1145.0], [12.7, 1149.0], [12.8, 1149.0], [12.9, 1164.0], [13.0, 1170.0], [13.1, 1170.0], [13.2, 1178.0], [13.3, 1182.0], [13.4, 1183.0], [13.5, 1190.0], [13.6, 1195.0], [13.7, 1199.0], [13.8, 1201.0], [13.9, 1211.0], [14.0, 1212.0], [14.1, 1217.0], [14.2, 1220.0], [14.3, 1226.0], [14.4, 1227.0], [14.5, 1230.0], [14.6, 1230.0], [14.7, 1236.0], [14.8, 1243.0], [14.9, 1246.0], [15.0, 1248.0], [15.1, 1257.0], [15.2, 1262.0], [15.3, 1266.0], [15.4, 1271.0], [15.5, 1271.0], [15.6, 1275.0], [15.7, 1275.0], [15.8, 1275.0], [15.9, 1280.0], [16.0, 1285.0], [16.1, 1286.0], [16.2, 1289.0], [16.3, 1295.0], [16.4, 1296.0], [16.5, 1300.0], [16.6, 1303.0], [16.7, 1305.0], [16.8, 1309.0], [16.9, 1310.0], [17.0, 1310.0], [17.1, 1318.0], [17.2, 1329.0], [17.3, 1331.0], [17.4, 1335.0], [17.5, 1337.0], [17.6, 1338.0], [17.7, 1339.0], [17.8, 1349.0], [17.9, 1350.0], [18.0, 1362.0], [18.1, 1366.0], [18.2, 1368.0], [18.3, 1370.0], [18.4, 1381.0], [18.5, 1383.0], [18.6, 1389.0], [18.7, 1392.0], [18.8, 1392.0], [18.9, 1393.0], [19.0, 1402.0], [19.1, 1410.0], [19.2, 1414.0], [19.3, 1415.0], [19.4, 1418.0], [19.5, 1421.0], [19.6, 1424.0], [19.7, 1428.0], [19.8, 1429.0], [19.9, 1436.0], [20.0, 1436.0], [20.1, 1445.0], [20.2, 1450.0], [20.3, 1452.0], [20.4, 1453.0], [20.5, 1455.0], [20.6, 1455.0], [20.7, 1456.0], [20.8, 1460.0], [20.9, 1462.0], [21.0, 1467.0], [21.1, 1472.0], [21.2, 1474.0], [21.3, 1475.0], [21.4, 1475.0], [21.5, 1475.0], [21.6, 1477.0], [21.7, 1480.0], [21.8, 1484.0], [21.9, 1489.0], [22.0, 1490.0], [22.1, 1491.0], [22.2, 1494.0], [22.3, 1495.0], [22.4, 1496.0], [22.5, 1498.0], [22.6, 1500.0], [22.7, 1500.0], [22.8, 1505.0], [22.9, 1511.0], [23.0, 1512.0], [23.1, 1514.0], [23.2, 1516.0], [23.3, 1517.0], [23.4, 1519.0], [23.5, 1520.0], [23.6, 1522.0], [23.7, 1526.0], [23.8, 1527.0], [23.9, 1528.0], [24.0, 1529.0], [24.1, 1532.0], [24.2, 1532.0], [24.3, 1536.0], [24.4, 1540.0], [24.5, 1540.0], [24.6, 1542.0], [24.7, 1548.0], [24.8, 1550.0], [24.9, 1553.0], [25.0, 1560.0], [25.1, 1561.0], [25.2, 1562.0], [25.3, 1564.0], [25.4, 1566.0], [25.5, 1570.0], [25.6, 1570.0], [25.7, 1570.0], [25.8, 1578.0], [25.9, 1581.0], [26.0, 1587.0], [26.1, 1591.0], [26.2, 1594.0], [26.3, 1599.0], [26.4, 1600.0], [26.5, 1601.0], [26.6, 1608.0], [26.7, 1609.0], [26.8, 1611.0], [26.9, 1613.0], [27.0, 1613.0], [27.1, 1614.0], [27.2, 1615.0], [27.3, 1618.0], [27.4, 1619.0], [27.5, 1621.0], [27.6, 1625.0], [27.7, 1627.0], [27.8, 1629.0], [27.9, 1634.0], [28.0, 1635.0], [28.1, 1637.0], [28.2, 1646.0], [28.3, 1647.0], [28.4, 1647.0], [28.5, 1649.0], [28.6, 1650.0], [28.7, 1652.0], [28.8, 1653.0], [28.9, 1654.0], [29.0, 1659.0], [29.1, 1660.0], [29.2, 1661.0], [29.3, 1663.0], [29.4, 1670.0], [29.5, 1672.0], [29.6, 1674.0], [29.7, 1676.0], [29.8, 1684.0], [29.9, 1687.0], [30.0, 1689.0], [30.1, 1689.0], [30.2, 1697.0], [30.3, 1705.0], [30.4, 1712.0], [30.5, 1712.0], [30.6, 1713.0], [30.7, 1715.0], [30.8, 1715.0], [30.9, 1717.0], [31.0, 1718.0], [31.1, 1718.0], [31.2, 1725.0], [31.3, 1725.0], [31.4, 1726.0], [31.5, 1728.0], [31.6, 1729.0], [31.7, 1731.0], [31.8, 1734.0], [31.9, 1734.0], [32.0, 1741.0], [32.1, 1746.0], [32.2, 1748.0], [32.3, 1750.0], [32.4, 1752.0], [32.5, 1754.0], [32.6, 1757.0], [32.7, 1760.0], [32.8, 1760.0], [32.9, 1762.0], [33.0, 1765.0], [33.1, 1766.0], [33.2, 1767.0], [33.3, 1771.0], [33.4, 1771.0], [33.5, 1775.0], [33.6, 1776.0], [33.7, 1777.0], [33.8, 1781.0], [33.9, 1782.0], [34.0, 1783.0], [34.1, 1786.0], [34.2, 1786.0], [34.3, 1786.0], [34.4, 1790.0], [34.5, 1793.0], [34.6, 1794.0], [34.7, 1795.0], [34.8, 1797.0], [34.9, 1798.0], [35.0, 1799.0], [35.1, 1802.0], [35.2, 1802.0], [35.3, 1804.0], [35.4, 1804.0], [35.5, 1807.0], [35.6, 1810.0], [35.7, 1811.0], [35.8, 1813.0], [35.9, 1815.0], [36.0, 1818.0], [36.1, 1818.0], [36.2, 1819.0], [36.3, 1824.0], [36.4, 1825.0], [36.5, 1826.0], [36.6, 1827.0], [36.7, 1827.0], [36.8, 1833.0], [36.9, 1835.0], [37.0, 1836.0], [37.1, 1839.0], [37.2, 1840.0], [37.3, 1841.0], [37.4, 1841.0], [37.5, 1844.0], [37.6, 1845.0], [37.7, 1846.0], [37.8, 1848.0], [37.9, 1850.0], [38.0, 1851.0], [38.1, 1852.0], [38.2, 1855.0], [38.3, 1857.0], [38.4, 1857.0], [38.5, 1858.0], [38.6, 1858.0], [38.7, 1858.0], [38.8, 1862.0], [38.9, 1863.0], [39.0, 1864.0], [39.1, 1869.0], [39.2, 1874.0], [39.3, 1876.0], [39.4, 1881.0], [39.5, 1882.0], [39.6, 1882.0], [39.7, 1883.0], [39.8, 1883.0], [39.9, 1883.0], [40.0, 1886.0], [40.1, 1890.0], [40.2, 1891.0], [40.3, 1895.0], [40.4, 1895.0], [40.5, 1896.0], [40.6, 1896.0], [40.7, 1897.0], [40.8, 1898.0], [40.9, 1899.0], [41.0, 1901.0], [41.1, 1904.0], [41.2, 1905.0], [41.3, 1907.0], [41.4, 1908.0], [41.5, 1909.0], [41.6, 1912.0], [41.7, 1912.0], [41.8, 1915.0], [41.9, 1916.0], [42.0, 1919.0], [42.1, 1922.0], [42.2, 1925.0], [42.3, 1925.0], [42.4, 1926.0], [42.5, 1929.0], [42.6, 1929.0], [42.7, 1932.0], [42.8, 1932.0], [42.9, 1933.0], [43.0, 1935.0], [43.1, 1937.0], [43.2, 1940.0], [43.3, 1941.0], [43.4, 1942.0], [43.5, 1948.0], [43.6, 1951.0], [43.7, 1954.0], [43.8, 1954.0], [43.9, 1955.0], [44.0, 1956.0], [44.1, 1957.0], [44.2, 1959.0], [44.3, 1965.0], [44.4, 1965.0], [44.5, 1967.0], [44.6, 1969.0], [44.7, 1970.0], [44.8, 1975.0], [44.9, 1976.0], [45.0, 1977.0], [45.1, 1980.0], [45.2, 1981.0], [45.3, 1982.0], [45.4, 1985.0], [45.5, 1987.0], [45.6, 1987.0], [45.7, 1992.0], [45.8, 1993.0], [45.9, 1994.0], [46.0, 1994.0], [46.1, 1996.0], [46.2, 1997.0], [46.3, 1999.0], [46.4, 2000.0], [46.5, 2000.0], [46.6, 2001.0], [46.7, 2003.0], [46.8, 2003.0], [46.9, 2005.0], [47.0, 2008.0], [47.1, 2008.0], [47.2, 2009.0], [47.3, 2010.0], [47.4, 2010.0], [47.5, 2011.0], [47.6, 2014.0], [47.7, 2014.0], [47.8, 2015.0], [47.9, 2016.0], [48.0, 2018.0], [48.1, 2019.0], [48.2, 2021.0], [48.3, 2024.0], [48.4, 2026.0], [48.5, 2028.0], [48.6, 2028.0], [48.7, 2031.0], [48.8, 2032.0], [48.9, 2034.0], [49.0, 2036.0], [49.1, 2038.0], [49.2, 2038.0], [49.3, 2039.0], [49.4, 2040.0], [49.5, 2041.0], [49.6, 2043.0], [49.7, 2045.0], [49.8, 2046.0], [49.9, 2046.0], [50.0, 2048.0], [50.1, 2048.0], [50.2, 2052.0], [50.3, 2052.0], [50.4, 2054.0], [50.5, 2056.0], [50.6, 2056.0], [50.7, 2057.0], [50.8, 2059.0], [50.9, 2059.0], [51.0, 2061.0], [51.1, 2062.0], [51.2, 2062.0], [51.3, 2063.0], [51.4, 2066.0], [51.5, 2067.0], [51.6, 2068.0], [51.7, 2069.0], [51.8, 2071.0], [51.9, 2072.0], [52.0, 2073.0], [52.1, 2073.0], [52.2, 2078.0], [52.3, 2079.0], [52.4, 2079.0], [52.5, 2081.0], [52.6, 2084.0], [52.7, 2085.0], [52.8, 2085.0], [52.9, 2087.0], [53.0, 2088.0], [53.1, 2092.0], [53.2, 2093.0], [53.3, 2093.0], [53.4, 2095.0], [53.5, 2097.0], [53.6, 2099.0], [53.7, 2100.0], [53.8, 2100.0], [53.9, 2101.0], [54.0, 2103.0], [54.1, 2106.0], [54.2, 2106.0], [54.3, 2108.0], [54.4, 2108.0], [54.5, 2110.0], [54.6, 2111.0], [54.7, 2112.0], [54.8, 2113.0], [54.9, 2118.0], [55.0, 2119.0], [55.1, 2119.0], [55.2, 2120.0], [55.3, 2123.0], [55.4, 2127.0], [55.5, 2128.0], [55.6, 2130.0], [55.7, 2132.0], [55.8, 2134.0], [55.9, 2135.0], [56.0, 2136.0], [56.1, 2137.0], [56.2, 2141.0], [56.3, 2142.0], [56.4, 2143.0], [56.5, 2144.0], [56.6, 2145.0], [56.7, 2148.0], [56.8, 2149.0], [56.9, 2149.0], [57.0, 2150.0], [57.1, 2152.0], [57.2, 2153.0], [57.3, 2154.0], [57.4, 2157.0], [57.5, 2157.0], [57.6, 2158.0], [57.7, 2161.0], [57.8, 2161.0], [57.9, 2164.0], [58.0, 2165.0], [58.1, 2165.0], [58.2, 2167.0], [58.3, 2170.0], [58.4, 2171.0], [58.5, 2172.0], [58.6, 2177.0], [58.7, 2177.0], [58.8, 2180.0], [58.9, 2181.0], [59.0, 2181.0], [59.1, 2183.0], [59.2, 2185.0], [59.3, 2187.0], [59.4, 2191.0], [59.5, 2195.0], [59.6, 2197.0], [59.7, 2197.0], [59.8, 2198.0], [59.9, 2199.0], [60.0, 2202.0], [60.1, 2205.0], [60.2, 2206.0], [60.3, 2207.0], [60.4, 2208.0], [60.5, 2212.0], [60.6, 2214.0], [60.7, 2215.0], [60.8, 2218.0], [60.9, 2224.0], [61.0, 2224.0], [61.1, 2225.0], [61.2, 2226.0], [61.3, 2227.0], [61.4, 2227.0], [61.5, 2228.0], [61.6, 2234.0], [61.7, 2235.0], [61.8, 2239.0], [61.9, 2240.0], [62.0, 2240.0], [62.1, 2242.0], [62.2, 2244.0], [62.3, 2247.0], [62.4, 2248.0], [62.5, 2249.0], [62.6, 2249.0], [62.7, 2251.0], [62.8, 2251.0], [62.9, 2252.0], [63.0, 2255.0], [63.1, 2256.0], [63.2, 2258.0], [63.3, 2261.0], [63.4, 2261.0], [63.5, 2262.0], [63.6, 2263.0], [63.7, 2263.0], [63.8, 2263.0], [63.9, 2265.0], [64.0, 2266.0], [64.1, 2266.0], [64.2, 2267.0], [64.3, 2268.0], [64.4, 2270.0], [64.5, 2270.0], [64.6, 2277.0], [64.7, 2279.0], [64.8, 2282.0], [64.9, 2282.0], [65.0, 2282.0], [65.1, 2285.0], [65.2, 2287.0], [65.3, 2288.0], [65.4, 2292.0], [65.5, 2292.0], [65.6, 2295.0], [65.7, 2296.0], [65.8, 2299.0], [65.9, 2301.0], [66.0, 2303.0], [66.1, 2303.0], [66.2, 2304.0], [66.3, 2305.0], [66.4, 2306.0], [66.5, 2306.0], [66.6, 2307.0], [66.7, 2308.0], [66.8, 2309.0], [66.9, 2310.0], [67.0, 2311.0], [67.1, 2312.0], [67.2, 2314.0], [67.3, 2315.0], [67.4, 2316.0], [67.5, 2317.0], [67.6, 2317.0], [67.7, 2321.0], [67.8, 2322.0], [67.9, 2324.0], [68.0, 2325.0], [68.1, 2326.0], [68.2, 2326.0], [68.3, 2329.0], [68.4, 2330.0], [68.5, 2330.0], [68.6, 2335.0], [68.7, 2337.0], [68.8, 2338.0], [68.9, 2341.0], [69.0, 2343.0], [69.1, 2345.0], [69.2, 2346.0], [69.3, 2350.0], [69.4, 2353.0], [69.5, 2356.0], [69.6, 2358.0], [69.7, 2359.0], [69.8, 2360.0], [69.9, 2363.0], [70.0, 2364.0], [70.1, 2365.0], [70.2, 2368.0], [70.3, 2368.0], [70.4, 2373.0], [70.5, 2376.0], [70.6, 2376.0], [70.7, 2379.0], [70.8, 2380.0], [70.9, 2380.0], [71.0, 2381.0], [71.1, 2384.0], [71.2, 2386.0], [71.3, 2388.0], [71.4, 2393.0], [71.5, 2394.0], [71.6, 2396.0], [71.7, 2396.0], [71.8, 2398.0], [71.9, 2400.0], [72.0, 2401.0], [72.1, 2402.0], [72.2, 2403.0], [72.3, 2404.0], [72.4, 2404.0], [72.5, 2409.0], [72.6, 2411.0], [72.7, 2411.0], [72.8, 2412.0], [72.9, 2414.0], [73.0, 2416.0], [73.1, 2418.0], [73.2, 2420.0], [73.3, 2420.0], [73.4, 2424.0], [73.5, 2427.0], [73.6, 2429.0], [73.7, 2435.0], [73.8, 2437.0], [73.9, 2439.0], [74.0, 2440.0], [74.1, 2443.0], [74.2, 2446.0], [74.3, 2449.0], [74.4, 2451.0], [74.5, 2456.0], [74.6, 2458.0], [74.7, 2459.0], [74.8, 2459.0], [74.9, 2461.0], [75.0, 2463.0], [75.1, 2465.0], [75.2, 2470.0], [75.3, 2472.0], [75.4, 2472.0], [75.5, 2480.0], [75.6, 2483.0], [75.7, 2484.0], [75.8, 2486.0], [75.9, 2486.0], [76.0, 2487.0], [76.1, 2492.0], [76.2, 2493.0], [76.3, 2497.0], [76.4, 2499.0], [76.5, 2499.0], [76.6, 2501.0], [76.7, 2501.0], [76.8, 2502.0], [76.9, 2504.0], [77.0, 2508.0], [77.1, 2509.0], [77.2, 2511.0], [77.3, 2512.0], [77.4, 2515.0], [77.5, 2518.0], [77.6, 2523.0], [77.7, 2525.0], [77.8, 2528.0], [77.9, 2530.0], [78.0, 2531.0], [78.1, 2535.0], [78.2, 2542.0], [78.3, 2545.0], [78.4, 2552.0], [78.5, 2554.0], [78.6, 2558.0], [78.7, 2559.0], [78.8, 2562.0], [78.9, 2562.0], [79.0, 2565.0], [79.1, 2569.0], [79.2, 2570.0], [79.3, 2573.0], [79.4, 2576.0], [79.5, 2576.0], [79.6, 2585.0], [79.7, 2591.0], [79.8, 2594.0], [79.9, 2595.0], [80.0, 2597.0], [80.1, 2599.0], [80.2, 2602.0], [80.3, 2605.0], [80.4, 2606.0], [80.5, 2609.0], [80.6, 2611.0], [80.7, 2617.0], [80.8, 2620.0], [80.9, 2622.0], [81.0, 2624.0], [81.1, 2633.0], [81.2, 2638.0], [81.3, 2640.0], [81.4, 2643.0], [81.5, 2646.0], [81.6, 2648.0], [81.7, 2650.0], [81.8, 2653.0], [81.9, 2658.0], [82.0, 2663.0], [82.1, 2665.0], [82.2, 2668.0], [82.3, 2670.0], [82.4, 2676.0], [82.5, 2676.0], [82.6, 2681.0], [82.7, 2684.0], [82.8, 2685.0], [82.9, 2685.0], [83.0, 2690.0], [83.1, 2690.0], [83.2, 2692.0], [83.3, 2695.0], [83.4, 2696.0], [83.5, 2697.0], [83.6, 2700.0], [83.7, 2701.0], [83.8, 2704.0], [83.9, 2709.0], [84.0, 2716.0], [84.1, 2720.0], [84.2, 2726.0], [84.3, 2729.0], [84.4, 2738.0], [84.5, 2740.0], [84.6, 2740.0], [84.7, 2742.0], [84.8, 2751.0], [84.9, 2751.0], [85.0, 2755.0], [85.1, 2763.0], [85.2, 2765.0], [85.3, 2768.0], [85.4, 2776.0], [85.5, 2777.0], [85.6, 2782.0], [85.7, 2787.0], [85.8, 2787.0], [85.9, 2794.0], [86.0, 2802.0], [86.1, 2803.0], [86.2, 2810.0], [86.3, 2813.0], [86.4, 2819.0], [86.5, 2824.0], [86.6, 2834.0], [86.7, 2836.0], [86.8, 2844.0], [86.9, 2855.0], [87.0, 2855.0], [87.1, 2865.0], [87.2, 2880.0], [87.3, 2883.0], [87.4, 2885.0], [87.5, 2886.0], [87.6, 2894.0], [87.7, 2899.0], [87.8, 2900.0], [87.9, 2906.0], [88.0, 2916.0], [88.1, 2918.0], [88.2, 2925.0], [88.3, 2938.0], [88.4, 2941.0], [88.5, 2952.0], [88.6, 2958.0], [88.7, 2961.0], [88.8, 2965.0], [88.9, 2975.0], [89.0, 2982.0], [89.1, 2992.0], [89.2, 3018.0], [89.3, 3026.0], [89.4, 3029.0], [89.5, 3038.0], [89.6, 3044.0], [89.7, 3047.0], [89.8, 3051.0], [89.9, 3051.0], [90.0, 3071.0], [90.1, 3080.0], [90.2, 3081.0], [90.3, 3089.0], [90.4, 3094.0], [90.5, 3100.0], [90.6, 3105.0], [90.7, 3121.0], [90.8, 3139.0], [90.9, 3149.0], [91.0, 3154.0], [91.1, 3158.0], [91.2, 3163.0], [91.3, 3170.0], [91.4, 3170.0], [91.5, 3180.0], [91.6, 3200.0], [91.7, 3202.0], [91.8, 3207.0], [91.9, 3211.0], [92.0, 3213.0], [92.1, 3221.0], [92.2, 3231.0], [92.3, 3232.0], [92.4, 3236.0], [92.5, 3265.0], [92.6, 3273.0], [92.7, 3288.0], [92.8, 3347.0], [92.9, 3354.0], [93.0, 3382.0], [93.1, 3391.0], [93.2, 3391.0], [93.3, 3394.0], [93.4, 3409.0], [93.5, 3438.0], [93.6, 3444.0], [93.7, 3448.0], [93.8, 3449.0], [93.9, 3463.0], [94.0, 3505.0], [94.1, 3511.0], [94.2, 3519.0], [94.3, 3542.0], [94.4, 3542.0], [94.5, 3552.0], [94.6, 3555.0], [94.7, 3558.0], [94.8, 3575.0], [94.9, 3578.0], [95.0, 3601.0], [95.1, 3604.0], [95.2, 3615.0], [95.3, 3615.0], [95.4, 3627.0], [95.5, 3640.0], [95.6, 3652.0], [95.7, 3675.0], [95.8, 3697.0], [95.9, 3702.0], [96.0, 3755.0], [96.1, 3764.0], [96.2, 3784.0], [96.3, 3785.0], [96.4, 3804.0], [96.5, 3816.0], [96.6, 3825.0], [96.7, 3837.0], [96.8, 3843.0], [96.9, 3856.0], [97.0, 3869.0], [97.1, 3874.0], [97.2, 3892.0], [97.3, 3922.0], [97.4, 3924.0], [97.5, 3958.0], [97.6, 4023.0], [97.7, 4023.0], [97.8, 4046.0], [97.9, 4063.0], [98.0, 4085.0], [98.1, 4141.0], [98.2, 4208.0], [98.3, 4211.0], [98.4, 4257.0], [98.5, 4312.0], [98.6, 4424.0], [98.7, 4442.0], [98.8, 4714.0], [98.9, 4716.0], [99.0, 4891.0], [99.1, 5015.0], [99.2, 5042.0], [99.3, 5243.0], [99.4, 5453.0], [99.5, 5495.0], [99.6, 5936.0], [99.7, 6213.0], [99.8, 6657.0], [99.9, 21929.0], [100.0, 22145.0]], "isOverall": false, "label": "api/learner/fetch/VNS-88-600-02050-001/", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 122.0, "series": [{"data": [[600.0, 23.0], [700.0, 25.0], [800.0, 29.0], [900.0, 26.0], [1000.0, 35.0], [1100.0, 34.0], [1200.0, 46.0], [1300.0, 42.0], [1400.0, 60.0], [1500.0, 62.0], [1600.0, 65.0], [1700.0, 80.0], [1800.0, 99.0], [1900.0, 89.0], [2000.0, 122.0], [2100.0, 104.0], [2200.0, 99.0], [2300.0, 99.0], [2400.0, 78.0], [2500.0, 60.0], [2600.0, 58.0], [2700.0, 40.0], [2800.0, 29.0], [2900.0, 24.0], [3000.0, 21.0], [3100.0, 19.0], [3300.0, 10.0], [3200.0, 19.0], [3400.0, 11.0], [3500.0, 16.0], [3600.0, 15.0], [3700.0, 9.0], [3800.0, 14.0], [3900.0, 6.0], [4000.0, 7.0], [4200.0, 4.0], [4300.0, 2.0], [4100.0, 3.0], [4400.0, 3.0], [4600.0, 1.0], [4800.0, 2.0], [4700.0, 2.0], [5000.0, 2.0], [4900.0, 1.0], [5200.0, 2.0], [5400.0, 3.0], [5600.0, 1.0], [5900.0, 1.0], [6100.0, 1.0], [6200.0, 1.0], [6600.0, 1.0], [6700.0, 1.0], [22100.0, 1.0], [21900.0, 1.0], [200.0, 6.0], [300.0, 16.0], [400.0, 13.0], [500.0, 21.0]], "isOverall": false, "label": "api/learner/fetch/VNS-88-600-02050-001/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 25.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1544.0, "series": [{"data": [[0.0, 25.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 26.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 69.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1544.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.7684553E12, "maxY": 20.0, "series": [{"data": [[1.7684553E12, 6.734299516908217], [1.76845548E12, 19.646651270207855], [1.76845554E12, 1.5], [1.76845536E12, 18.323412698412703], [1.76845542E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76845554E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 751.3750000000001, "minX": 1.0, "maxY": 3081.875, "series": [{"data": [[2.0, 1800.8], [8.0, 1106.9999999999998], [9.0, 1056.6153846153845], [10.0, 1365.1904761904764], [11.0, 1476.64], [3.0, 751.3750000000001], [12.0, 1569.9473684210527], [13.0, 2059.96], [14.0, 1832.0434782608697], [15.0, 1686.15625], [1.0, 3081.875], [4.0, 819.7499999999999], [16.0, 2078.9047619047615], [17.0, 2161.888888888889], [18.0, 1954.3461538461538], [19.0, 1909.2666666666669], [5.0, 1004.4761904761905], [20.0, 2279.1320450885696], [6.0, 860.3333333333333], [7.0, 1063.217391304348]], "isOverall": false, "label": "api/learner/fetch/VNS-88-600-02050-001/", "isController": false}, {"data": [[17.72776442307689, 2091.8563701923053]], "isOverall": false, "label": "api/learner/fetch/VNS-88-600-02050-001/-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8.6, "minX": 1.7684553E12, "maxY": 4993136.65, "series": [{"data": [[1.7684553E12, 1813146.9333333333], [1.76845548E12, 4124103.1], [1.76845554E12, 20443.033333333333], [1.76845536E12, 4849942.35], [1.76845542E12, 4993136.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7684553E12, 890.1], [1.76845548E12, 1861.9], [1.76845554E12, 8.6], [1.76845536E12, 2167.2], [1.76845542E12, 2227.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76845554E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 900.4299516908212, "minX": 1.7684553E12, "maxY": 22037.0, "series": [{"data": [[1.7684553E12, 900.4299516908212], [1.76845548E12, 2280.0808314087753], [1.76845554E12, 22037.0], [1.76845536E12, 2108.619047619049], [1.76845542E12, 2317.3108108108127]], "isOverall": false, "label": "api/learner/fetch/VNS-88-600-02050-001/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76845554E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 537.3961352657004, "minX": 1.7684553E12, "maxY": 21513.0, "series": [{"data": [[1.7684553E12, 537.3961352657004], [1.76845548E12, 1674.5103926096988], [1.76845554E12, 21513.0], [1.76845536E12, 1444.3273809523803], [1.76845542E12, 1556.1409266409255]], "isOverall": false, "label": "api/learner/fetch/VNS-88-600-02050-001/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76845554E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.561776061776055, "minX": 1.7684553E12, "maxY": 21202.5, "series": [{"data": [[1.7684553E12, 8.975845410628022], [1.76845548E12, 10.136258660508084], [1.76845554E12, 21202.5], [1.76845536E12, 6.6071428571428585], [1.76845542E12, 4.561776061776055]], "isOverall": false, "label": "api/learner/fetch/VNS-88-600-02050-001/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76845554E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 292.0, "minX": 1.7684553E12, "maxY": 5453.0, "series": [{"data": [[1.7684553E12, 1648.0], [1.76845548E12, 3869.0], [1.76845536E12, 3825.0], [1.76845542E12, 5453.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7684553E12, 292.0], [1.76845548E12, 1466.0], [1.76845536E12, 1318.0], [1.76845542E12, 1178.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7684553E12, 829.1000000000005], [1.76845548E12, 3480.5000000000027], [1.76845536E12, 2479.3], [1.76845542E12, 2277.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7684553E12, 1648.0], [1.76845548E12, 3869.0], [1.76845536E12, 3825.0], [1.76845542E12, 5453.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7684553E12, 317.0], [1.76845548E12, 1779.0], [1.76845536E12, 2149.0], [1.76845542E12, 1579.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7684553E12, 1251.4499999999994], [1.76845548E12, 3841.5], [1.76845536E12, 3745.25], [1.76845542E12, 3735.3499999999976]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76845548E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 307.0, "minX": 1.0, "maxY": 12252.5, "series": [{"data": [[4.0, 318.5], [16.0, 2276.0], [2.0, 3825.0], [1.0, 1512.0], [17.0, 1445.0], [9.0, 1822.5], [19.0, 1918.5], [3.0, 307.0], [6.0, 720.5], [13.0, 1359.5], [14.0, 1570.0], [7.0, 1693.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 2002.5], [2.0, 1768.0], [9.0, 1841.0], [10.0, 2089.0], [11.0, 2156.0], [3.0, 1863.0], [12.0, 2246.0], [13.0, 2073.5], [14.0, 2225.0], [15.0, 2277.5], [4.0, 1954.0], [1.0, 12252.5], [16.0, 2540.0], [17.0, 2437.0], [18.0, 1991.0], [19.0, 3555.0], [5.0, 1785.0], [20.0, 2607.5], [21.0, 2326.0], [6.0, 2004.5], [7.0, 1987.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 306.0, "minX": 1.0, "maxY": 11633.0, "series": [{"data": [[4.0, 318.0], [16.0, 2276.0], [2.0, 3825.0], [1.0, 1511.0], [17.0, 1445.0], [9.0, 1822.5], [19.0, 1918.5], [3.0, 306.0], [6.0, 720.0], [13.0, 1359.5], [14.0, 1570.0], [7.0, 1693.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1405.5], [2.0, 1133.0], [9.0, 1187.0], [10.0, 1604.5], [11.0, 1618.0], [3.0, 1202.5], [12.0, 1517.5], [13.0, 1501.5], [14.0, 1569.0], [15.0, 1387.0], [4.0, 1229.5], [1.0, 11633.0], [16.0, 1849.0], [17.0, 1560.5], [18.0, 1467.5], [19.0, 2978.0], [5.0, 1168.0], [20.0, 1771.5], [21.0, 1733.0], [6.0, 1400.5], [7.0, 1550.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.7684553E12, "maxY": 8.633333333333333, "series": [{"data": [[1.7684553E12, 3.6333333333333333], [1.76845548E12, 6.916666666666667], [1.76845536E12, 8.55], [1.76845542E12, 8.633333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76845548E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7684553E12, "maxY": 8.133333333333333, "series": [{"data": [[1.7684553E12, 0.5], [1.76845548E12, 0.5], [1.76845536E12, 0.5], [1.76845542E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7684553E12, 2.95], [1.76845548E12, 6.716666666666667], [1.76845554E12, 0.03333333333333333], [1.76845536E12, 7.9], [1.76845542E12, 8.133333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76845554E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7684553E12, "maxY": 8.133333333333333, "series": [{"data": [[1.7684553E12, 0.5], [1.76845548E12, 0.5], [1.76845536E12, 0.5], [1.76845542E12, 0.5]], "isOverall": false, "label": "api/learner/fetch/VNS-88-600-02050-001/-success", "isController": false}, {"data": [[1.7684553E12, 2.95], [1.76845548E12, 6.716666666666667], [1.76845554E12, 0.03333333333333333], [1.76845536E12, 7.9], [1.76845542E12, 8.133333333333333]], "isOverall": false, "label": "api/learner/fetch/VNS-88-600-02050-001/-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76845554E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7684553E12, "maxY": 8.133333333333333, "series": [{"data": [[1.7684553E12, 0.5], [1.76845548E12, 0.5], [1.76845536E12, 0.5], [1.76845542E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7684553E12, 2.95], [1.76845548E12, 6.716666666666667], [1.76845554E12, 0.03333333333333333], [1.76845536E12, 7.9], [1.76845542E12, 8.133333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76845554E12, "title": "Total Transactions Per Second"}},
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

