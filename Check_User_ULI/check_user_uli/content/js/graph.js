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
        data: {"result": {"minY": 226.0, "minX": 0.0, "maxY": 22222.0, "series": [{"data": [[0.0, 226.0], [0.1, 226.0], [0.2, 229.0], [0.3, 229.0], [0.4, 231.0], [0.5, 231.0], [0.6, 231.0], [0.7, 233.0], [0.8, 234.0], [0.9, 235.0], [1.0, 235.0], [1.1, 237.0], [1.2, 238.0], [1.3, 240.0], [1.4, 244.0], [1.5, 248.0], [1.6, 251.0], [1.7, 256.0], [1.8, 360.0], [1.9, 384.0], [2.0, 384.0], [2.1, 391.0], [2.2, 411.0], [2.3, 412.0], [2.4, 415.0], [2.5, 418.0], [2.6, 423.0], [2.7, 429.0], [2.8, 432.0], [2.9, 442.0], [3.0, 445.0], [3.1, 450.0], [3.2, 455.0], [3.3, 457.0], [3.4, 461.0], [3.5, 463.0], [3.6, 466.0], [3.7, 470.0], [3.8, 471.0], [3.9, 482.0], [4.0, 483.0], [4.1, 486.0], [4.2, 486.0], [4.3, 492.0], [4.4, 500.0], [4.5, 500.0], [4.6, 516.0], [4.7, 516.0], [4.8, 520.0], [4.9, 532.0], [5.0, 532.0], [5.1, 535.0], [5.2, 536.0], [5.3, 547.0], [5.4, 553.0], [5.5, 555.0], [5.6, 561.0], [5.7, 563.0], [5.8, 571.0], [5.9, 574.0], [6.0, 578.0], [6.1, 594.0], [6.2, 613.0], [6.3, 627.0], [6.4, 630.0], [6.5, 635.0], [6.6, 641.0], [6.7, 646.0], [6.8, 651.0], [6.9, 660.0], [7.0, 665.0], [7.1, 670.0], [7.2, 674.0], [7.3, 683.0], [7.4, 724.0], [7.5, 725.0], [7.6, 755.0], [7.7, 760.0], [7.8, 777.0], [7.9, 804.0], [8.0, 804.0], [8.1, 810.0], [8.2, 823.0], [8.3, 834.0], [8.4, 835.0], [8.5, 845.0], [8.6, 863.0], [8.7, 875.0], [8.8, 878.0], [8.9, 887.0], [9.0, 888.0], [9.1, 896.0], [9.2, 898.0], [9.3, 912.0], [9.4, 915.0], [9.5, 950.0], [9.6, 959.0], [9.7, 961.0], [9.8, 974.0], [9.9, 976.0], [10.0, 983.0], [10.1, 994.0], [10.2, 998.0], [10.3, 1015.0], [10.4, 1017.0], [10.5, 1024.0], [10.6, 1031.0], [10.7, 1033.0], [10.8, 1039.0], [10.9, 1041.0], [11.0, 1048.0], [11.1, 1057.0], [11.2, 1062.0], [11.3, 1063.0], [11.4, 1063.0], [11.5, 1066.0], [11.6, 1073.0], [11.7, 1075.0], [11.8, 1082.0], [11.9, 1088.0], [12.0, 1100.0], [12.1, 1101.0], [12.2, 1110.0], [12.3, 1117.0], [12.4, 1119.0], [12.5, 1123.0], [12.6, 1123.0], [12.7, 1130.0], [12.8, 1131.0], [12.9, 1132.0], [13.0, 1134.0], [13.1, 1134.0], [13.2, 1136.0], [13.3, 1138.0], [13.4, 1145.0], [13.5, 1147.0], [13.6, 1149.0], [13.7, 1158.0], [13.8, 1159.0], [13.9, 1165.0], [14.0, 1170.0], [14.1, 1171.0], [14.2, 1173.0], [14.3, 1181.0], [14.4, 1181.0], [14.5, 1182.0], [14.6, 1184.0], [14.7, 1188.0], [14.8, 1192.0], [14.9, 1193.0], [15.0, 1202.0], [15.1, 1207.0], [15.2, 1214.0], [15.3, 1224.0], [15.4, 1224.0], [15.5, 1227.0], [15.6, 1229.0], [15.7, 1234.0], [15.8, 1235.0], [15.9, 1236.0], [16.0, 1245.0], [16.1, 1245.0], [16.2, 1247.0], [16.3, 1250.0], [16.4, 1259.0], [16.5, 1260.0], [16.6, 1263.0], [16.7, 1265.0], [16.8, 1271.0], [16.9, 1275.0], [17.0, 1278.0], [17.1, 1279.0], [17.2, 1280.0], [17.3, 1282.0], [17.4, 1283.0], [17.5, 1287.0], [17.6, 1287.0], [17.7, 1292.0], [17.8, 1294.0], [17.9, 1301.0], [18.0, 1311.0], [18.1, 1317.0], [18.2, 1325.0], [18.3, 1325.0], [18.4, 1330.0], [18.5, 1333.0], [18.6, 1337.0], [18.7, 1345.0], [18.8, 1349.0], [18.9, 1350.0], [19.0, 1354.0], [19.1, 1354.0], [19.2, 1361.0], [19.3, 1363.0], [19.4, 1365.0], [19.5, 1375.0], [19.6, 1375.0], [19.7, 1376.0], [19.8, 1377.0], [19.9, 1378.0], [20.0, 1381.0], [20.1, 1382.0], [20.2, 1383.0], [20.3, 1385.0], [20.4, 1388.0], [20.5, 1389.0], [20.6, 1391.0], [20.7, 1395.0], [20.8, 1395.0], [20.9, 1402.0], [21.0, 1402.0], [21.1, 1407.0], [21.2, 1410.0], [21.3, 1410.0], [21.4, 1415.0], [21.5, 1415.0], [21.6, 1416.0], [21.7, 1418.0], [21.8, 1418.0], [21.9, 1419.0], [22.0, 1419.0], [22.1, 1422.0], [22.2, 1423.0], [22.3, 1430.0], [22.4, 1439.0], [22.5, 1439.0], [22.6, 1443.0], [22.7, 1448.0], [22.8, 1450.0], [22.9, 1453.0], [23.0, 1454.0], [23.1, 1464.0], [23.2, 1464.0], [23.3, 1470.0], [23.4, 1474.0], [23.5, 1475.0], [23.6, 1479.0], [23.7, 1483.0], [23.8, 1485.0], [23.9, 1490.0], [24.0, 1490.0], [24.1, 1495.0], [24.2, 1499.0], [24.3, 1502.0], [24.4, 1507.0], [24.5, 1509.0], [24.6, 1512.0], [24.7, 1516.0], [24.8, 1521.0], [24.9, 1526.0], [25.0, 1529.0], [25.1, 1531.0], [25.2, 1533.0], [25.3, 1543.0], [25.4, 1544.0], [25.5, 1546.0], [25.6, 1546.0], [25.7, 1547.0], [25.8, 1553.0], [25.9, 1556.0], [26.0, 1557.0], [26.1, 1558.0], [26.2, 1558.0], [26.3, 1561.0], [26.4, 1564.0], [26.5, 1564.0], [26.6, 1565.0], [26.7, 1566.0], [26.8, 1569.0], [26.9, 1575.0], [27.0, 1575.0], [27.1, 1581.0], [27.2, 1583.0], [27.3, 1586.0], [27.4, 1589.0], [27.5, 1594.0], [27.6, 1595.0], [27.7, 1597.0], [27.8, 1597.0], [27.9, 1602.0], [28.0, 1602.0], [28.1, 1604.0], [28.2, 1607.0], [28.3, 1610.0], [28.4, 1611.0], [28.5, 1613.0], [28.6, 1615.0], [28.7, 1617.0], [28.8, 1621.0], [28.9, 1631.0], [29.0, 1633.0], [29.1, 1635.0], [29.2, 1635.0], [29.3, 1636.0], [29.4, 1636.0], [29.5, 1644.0], [29.6, 1650.0], [29.7, 1650.0], [29.8, 1652.0], [29.9, 1653.0], [30.0, 1657.0], [30.1, 1659.0], [30.2, 1660.0], [30.3, 1665.0], [30.4, 1666.0], [30.5, 1670.0], [30.6, 1671.0], [30.7, 1674.0], [30.8, 1675.0], [30.9, 1676.0], [31.0, 1677.0], [31.1, 1679.0], [31.2, 1679.0], [31.3, 1682.0], [31.4, 1684.0], [31.5, 1686.0], [31.6, 1687.0], [31.7, 1689.0], [31.8, 1690.0], [31.9, 1691.0], [32.0, 1694.0], [32.1, 1696.0], [32.2, 1699.0], [32.3, 1705.0], [32.4, 1707.0], [32.5, 1711.0], [32.6, 1714.0], [32.7, 1718.0], [32.8, 1720.0], [32.9, 1720.0], [33.0, 1729.0], [33.1, 1732.0], [33.2, 1735.0], [33.3, 1737.0], [33.4, 1738.0], [33.5, 1742.0], [33.6, 1742.0], [33.7, 1743.0], [33.8, 1748.0], [33.9, 1748.0], [34.0, 1750.0], [34.1, 1750.0], [34.2, 1750.0], [34.3, 1751.0], [34.4, 1752.0], [34.5, 1755.0], [34.6, 1758.0], [34.7, 1760.0], [34.8, 1763.0], [34.9, 1769.0], [35.0, 1770.0], [35.1, 1771.0], [35.2, 1777.0], [35.3, 1778.0], [35.4, 1780.0], [35.5, 1780.0], [35.6, 1780.0], [35.7, 1784.0], [35.8, 1788.0], [35.9, 1788.0], [36.0, 1793.0], [36.1, 1794.0], [36.2, 1797.0], [36.3, 1797.0], [36.4, 1807.0], [36.5, 1807.0], [36.6, 1809.0], [36.7, 1811.0], [36.8, 1813.0], [36.9, 1814.0], [37.0, 1816.0], [37.1, 1816.0], [37.2, 1818.0], [37.3, 1821.0], [37.4, 1824.0], [37.5, 1825.0], [37.6, 1826.0], [37.7, 1828.0], [37.8, 1828.0], [37.9, 1834.0], [38.0, 1840.0], [38.1, 1840.0], [38.2, 1847.0], [38.3, 1848.0], [38.4, 1850.0], [38.5, 1852.0], [38.6, 1853.0], [38.7, 1856.0], [38.8, 1858.0], [38.9, 1861.0], [39.0, 1862.0], [39.1, 1864.0], [39.2, 1864.0], [39.3, 1865.0], [39.4, 1868.0], [39.5, 1873.0], [39.6, 1874.0], [39.7, 1881.0], [39.8, 1882.0], [39.9, 1889.0], [40.0, 1892.0], [40.1, 1895.0], [40.2, 1897.0], [40.3, 1898.0], [40.4, 1900.0], [40.5, 1901.0], [40.6, 1902.0], [40.7, 1903.0], [40.8, 1904.0], [40.9, 1909.0], [41.0, 1915.0], [41.1, 1916.0], [41.2, 1917.0], [41.3, 1918.0], [41.4, 1920.0], [41.5, 1920.0], [41.6, 1923.0], [41.7, 1924.0], [41.8, 1927.0], [41.9, 1929.0], [42.0, 1929.0], [42.1, 1930.0], [42.2, 1931.0], [42.3, 1932.0], [42.4, 1934.0], [42.5, 1935.0], [42.6, 1936.0], [42.7, 1938.0], [42.8, 1938.0], [42.9, 1940.0], [43.0, 1940.0], [43.1, 1942.0], [43.2, 1946.0], [43.3, 1947.0], [43.4, 1949.0], [43.5, 1949.0], [43.6, 1950.0], [43.7, 1954.0], [43.8, 1954.0], [43.9, 1959.0], [44.0, 1959.0], [44.1, 1963.0], [44.2, 1964.0], [44.3, 1965.0], [44.4, 1968.0], [44.5, 1969.0], [44.6, 1972.0], [44.7, 1975.0], [44.8, 1979.0], [44.9, 1981.0], [45.0, 1982.0], [45.1, 1984.0], [45.2, 1984.0], [45.3, 1986.0], [45.4, 1987.0], [45.5, 1987.0], [45.6, 1989.0], [45.7, 1990.0], [45.8, 1990.0], [45.9, 1995.0], [46.0, 1996.0], [46.1, 1997.0], [46.2, 1997.0], [46.3, 2000.0], [46.4, 2001.0], [46.5, 2002.0], [46.6, 2002.0], [46.7, 2003.0], [46.8, 2005.0], [46.9, 2008.0], [47.0, 2009.0], [47.1, 2010.0], [47.2, 2012.0], [47.3, 2013.0], [47.4, 2014.0], [47.5, 2015.0], [47.6, 2016.0], [47.7, 2016.0], [47.8, 2020.0], [47.9, 2021.0], [48.0, 2022.0], [48.1, 2023.0], [48.2, 2024.0], [48.3, 2025.0], [48.4, 2026.0], [48.5, 2028.0], [48.6, 2029.0], [48.7, 2031.0], [48.8, 2032.0], [48.9, 2032.0], [49.0, 2037.0], [49.1, 2038.0], [49.2, 2039.0], [49.3, 2040.0], [49.4, 2040.0], [49.5, 2041.0], [49.6, 2043.0], [49.7, 2044.0], [49.8, 2044.0], [49.9, 2044.0], [50.0, 2050.0], [50.1, 2053.0], [50.2, 2053.0], [50.3, 2055.0], [50.4, 2056.0], [50.5, 2057.0], [50.6, 2058.0], [50.7, 2059.0], [50.8, 2061.0], [50.9, 2061.0], [51.0, 2063.0], [51.1, 2064.0], [51.2, 2065.0], [51.3, 2066.0], [51.4, 2068.0], [51.5, 2069.0], [51.6, 2072.0], [51.7, 2072.0], [51.8, 2072.0], [51.9, 2073.0], [52.0, 2074.0], [52.1, 2076.0], [52.2, 2078.0], [52.3, 2079.0], [52.4, 2080.0], [52.5, 2080.0], [52.6, 2081.0], [52.7, 2081.0], [52.8, 2084.0], [52.9, 2084.0], [53.0, 2085.0], [53.1, 2085.0], [53.2, 2085.0], [53.3, 2087.0], [53.4, 2089.0], [53.5, 2091.0], [53.6, 2093.0], [53.7, 2095.0], [53.8, 2096.0], [53.9, 2098.0], [54.0, 2101.0], [54.1, 2102.0], [54.2, 2104.0], [54.3, 2106.0], [54.4, 2107.0], [54.5, 2108.0], [54.6, 2110.0], [54.7, 2115.0], [54.8, 2116.0], [54.9, 2116.0], [55.0, 2118.0], [55.1, 2118.0], [55.2, 2122.0], [55.3, 2126.0], [55.4, 2126.0], [55.5, 2131.0], [55.6, 2131.0], [55.7, 2133.0], [55.8, 2138.0], [55.9, 2141.0], [56.0, 2142.0], [56.1, 2142.0], [56.2, 2143.0], [56.3, 2143.0], [56.4, 2144.0], [56.5, 2145.0], [56.6, 2145.0], [56.7, 2146.0], [56.8, 2146.0], [56.9, 2149.0], [57.0, 2151.0], [57.1, 2151.0], [57.2, 2152.0], [57.3, 2152.0], [57.4, 2154.0], [57.5, 2159.0], [57.6, 2160.0], [57.7, 2162.0], [57.8, 2162.0], [57.9, 2162.0], [58.0, 2164.0], [58.1, 2166.0], [58.2, 2169.0], [58.3, 2170.0], [58.4, 2171.0], [58.5, 2172.0], [58.6, 2173.0], [58.7, 2176.0], [58.8, 2176.0], [58.9, 2177.0], [59.0, 2179.0], [59.1, 2179.0], [59.2, 2181.0], [59.3, 2181.0], [59.4, 2183.0], [59.5, 2184.0], [59.6, 2184.0], [59.7, 2187.0], [59.8, 2187.0], [59.9, 2188.0], [60.0, 2189.0], [60.1, 2190.0], [60.2, 2191.0], [60.3, 2191.0], [60.4, 2192.0], [60.5, 2193.0], [60.6, 2193.0], [60.7, 2195.0], [60.8, 2195.0], [60.9, 2197.0], [61.0, 2199.0], [61.1, 2200.0], [61.2, 2203.0], [61.3, 2204.0], [61.4, 2205.0], [61.5, 2206.0], [61.6, 2211.0], [61.7, 2212.0], [61.8, 2213.0], [61.9, 2216.0], [62.0, 2216.0], [62.1, 2218.0], [62.2, 2219.0], [62.3, 2220.0], [62.4, 2221.0], [62.5, 2223.0], [62.6, 2227.0], [62.7, 2228.0], [62.8, 2229.0], [62.9, 2232.0], [63.0, 2232.0], [63.1, 2234.0], [63.2, 2234.0], [63.3, 2235.0], [63.4, 2237.0], [63.5, 2238.0], [63.6, 2241.0], [63.7, 2242.0], [63.8, 2245.0], [63.9, 2246.0], [64.0, 2246.0], [64.1, 2250.0], [64.2, 2251.0], [64.3, 2252.0], [64.4, 2255.0], [64.5, 2259.0], [64.6, 2262.0], [64.7, 2262.0], [64.8, 2265.0], [64.9, 2267.0], [65.0, 2269.0], [65.1, 2277.0], [65.2, 2280.0], [65.3, 2280.0], [65.4, 2284.0], [65.5, 2284.0], [65.6, 2290.0], [65.7, 2290.0], [65.8, 2291.0], [65.9, 2293.0], [66.0, 2294.0], [66.1, 2295.0], [66.2, 2296.0], [66.3, 2301.0], [66.4, 2304.0], [66.5, 2306.0], [66.6, 2309.0], [66.7, 2309.0], [66.8, 2311.0], [66.9, 2311.0], [67.0, 2312.0], [67.1, 2314.0], [67.2, 2315.0], [67.3, 2318.0], [67.4, 2319.0], [67.5, 2322.0], [67.6, 2324.0], [67.7, 2326.0], [67.8, 2327.0], [67.9, 2328.0], [68.0, 2328.0], [68.1, 2329.0], [68.2, 2330.0], [68.3, 2339.0], [68.4, 2339.0], [68.5, 2346.0], [68.6, 2346.0], [68.7, 2348.0], [68.8, 2354.0], [68.9, 2356.0], [69.0, 2357.0], [69.1, 2360.0], [69.2, 2360.0], [69.3, 2361.0], [69.4, 2361.0], [69.5, 2362.0], [69.6, 2363.0], [69.7, 2363.0], [69.8, 2367.0], [69.9, 2367.0], [70.0, 2370.0], [70.1, 2373.0], [70.2, 2377.0], [70.3, 2384.0], [70.4, 2387.0], [70.5, 2391.0], [70.6, 2392.0], [70.7, 2393.0], [70.8, 2393.0], [70.9, 2395.0], [71.0, 2400.0], [71.1, 2403.0], [71.2, 2406.0], [71.3, 2408.0], [71.4, 2410.0], [71.5, 2415.0], [71.6, 2418.0], [71.7, 2418.0], [71.8, 2421.0], [71.9, 2422.0], [72.0, 2424.0], [72.1, 2426.0], [72.2, 2435.0], [72.3, 2440.0], [72.4, 2440.0], [72.5, 2443.0], [72.6, 2443.0], [72.7, 2446.0], [72.8, 2448.0], [72.9, 2448.0], [73.0, 2456.0], [73.1, 2457.0], [73.2, 2458.0], [73.3, 2465.0], [73.4, 2469.0], [73.5, 2474.0], [73.6, 2474.0], [73.7, 2478.0], [73.8, 2482.0], [73.9, 2483.0], [74.0, 2484.0], [74.1, 2484.0], [74.2, 2487.0], [74.3, 2487.0], [74.4, 2488.0], [74.5, 2489.0], [74.6, 2494.0], [74.7, 2496.0], [74.8, 2498.0], [74.9, 2501.0], [75.0, 2506.0], [75.1, 2511.0], [75.2, 2514.0], [75.3, 2521.0], [75.4, 2521.0], [75.5, 2522.0], [75.6, 2522.0], [75.7, 2528.0], [75.8, 2529.0], [75.9, 2532.0], [76.0, 2534.0], [76.1, 2534.0], [76.2, 2536.0], [76.3, 2536.0], [76.4, 2539.0], [76.5, 2543.0], [76.6, 2545.0], [76.7, 2545.0], [76.8, 2548.0], [76.9, 2553.0], [77.0, 2559.0], [77.1, 2561.0], [77.2, 2563.0], [77.3, 2565.0], [77.4, 2571.0], [77.5, 2574.0], [77.6, 2576.0], [77.7, 2578.0], [77.8, 2579.0], [77.9, 2585.0], [78.0, 2585.0], [78.1, 2586.0], [78.2, 2587.0], [78.3, 2588.0], [78.4, 2590.0], [78.5, 2595.0], [78.6, 2595.0], [78.7, 2598.0], [78.8, 2599.0], [78.9, 2601.0], [79.0, 2602.0], [79.1, 2602.0], [79.2, 2606.0], [79.3, 2610.0], [79.4, 2616.0], [79.5, 2623.0], [79.6, 2631.0], [79.7, 2633.0], [79.8, 2639.0], [79.9, 2643.0], [80.0, 2645.0], [80.1, 2648.0], [80.2, 2649.0], [80.3, 2656.0], [80.4, 2657.0], [80.5, 2662.0], [80.6, 2668.0], [80.7, 2676.0], [80.8, 2678.0], [80.9, 2682.0], [81.0, 2683.0], [81.1, 2685.0], [81.2, 2688.0], [81.3, 2691.0], [81.4, 2703.0], [81.5, 2708.0], [81.6, 2712.0], [81.7, 2714.0], [81.8, 2716.0], [81.9, 2722.0], [82.0, 2724.0], [82.1, 2734.0], [82.2, 2740.0], [82.3, 2746.0], [82.4, 2748.0], [82.5, 2748.0], [82.6, 2754.0], [82.7, 2775.0], [82.8, 2775.0], [82.9, 2781.0], [83.0, 2785.0], [83.1, 2799.0], [83.2, 2811.0], [83.3, 2813.0], [83.4, 2814.0], [83.5, 2815.0], [83.6, 2818.0], [83.7, 2820.0], [83.8, 2825.0], [83.9, 2833.0], [84.0, 2837.0], [84.1, 2840.0], [84.2, 2850.0], [84.3, 2853.0], [84.4, 2853.0], [84.5, 2864.0], [84.6, 2867.0], [84.7, 2871.0], [84.8, 2876.0], [84.9, 2886.0], [85.0, 2887.0], [85.1, 2893.0], [85.2, 2896.0], [85.3, 2900.0], [85.4, 2916.0], [85.5, 2930.0], [85.6, 2939.0], [85.7, 2939.0], [85.8, 2947.0], [85.9, 2957.0], [86.0, 2958.0], [86.1, 2960.0], [86.2, 2968.0], [86.3, 2975.0], [86.4, 2982.0], [86.5, 2988.0], [86.6, 3013.0], [86.7, 3027.0], [86.8, 3031.0], [86.9, 3048.0], [87.0, 3051.0], [87.1, 3055.0], [87.2, 3059.0], [87.3, 3061.0], [87.4, 3086.0], [87.5, 3086.0], [87.6, 3098.0], [87.7, 3098.0], [87.8, 3101.0], [87.9, 3103.0], [88.0, 3109.0], [88.1, 3111.0], [88.2, 3116.0], [88.3, 3122.0], [88.4, 3125.0], [88.5, 3144.0], [88.6, 3171.0], [88.7, 3174.0], [88.8, 3190.0], [88.9, 3204.0], [89.0, 3216.0], [89.1, 3222.0], [89.2, 3224.0], [89.3, 3244.0], [89.4, 3246.0], [89.5, 3258.0], [89.6, 3273.0], [89.7, 3274.0], [89.8, 3289.0], [89.9, 3290.0], [90.0, 3305.0], [90.1, 3313.0], [90.2, 3323.0], [90.3, 3346.0], [90.4, 3349.0], [90.5, 3373.0], [90.6, 3384.0], [90.7, 3399.0], [90.8, 3412.0], [90.9, 3413.0], [91.0, 3430.0], [91.1, 3432.0], [91.2, 3459.0], [91.3, 3464.0], [91.4, 3470.0], [91.5, 3506.0], [91.6, 3528.0], [91.7, 3536.0], [91.8, 3550.0], [91.9, 3553.0], [92.0, 3561.0], [92.1, 3562.0], [92.2, 3605.0], [92.3, 3629.0], [92.4, 3642.0], [92.5, 3653.0], [92.6, 3672.0], [92.7, 3688.0], [92.8, 3694.0], [92.9, 3701.0], [93.0, 3714.0], [93.1, 3716.0], [93.2, 3727.0], [93.3, 3734.0], [93.4, 3756.0], [93.5, 3788.0], [93.6, 3844.0], [93.7, 3850.0], [93.8, 3879.0], [93.9, 3896.0], [94.0, 3916.0], [94.1, 3926.0], [94.2, 3940.0], [94.3, 3953.0], [94.4, 3956.0], [94.5, 3975.0], [94.6, 3976.0], [94.7, 4003.0], [94.8, 4030.0], [94.9, 4032.0], [95.0, 4039.0], [95.1, 4079.0], [95.2, 4086.0], [95.3, 4149.0], [95.4, 4165.0], [95.5, 4250.0], [95.6, 4291.0], [95.7, 4306.0], [95.8, 4365.0], [95.9, 4445.0], [96.0, 4476.0], [96.1, 4482.0], [96.2, 4534.0], [96.3, 4571.0], [96.4, 4645.0], [96.5, 4677.0], [96.6, 4725.0], [96.7, 4854.0], [96.8, 4855.0], [96.9, 4902.0], [97.0, 4950.0], [97.1, 5038.0], [97.2, 5075.0], [97.3, 5134.0], [97.4, 5193.0], [97.5, 5314.0], [97.6, 5481.0], [97.7, 5542.0], [97.8, 5578.0], [97.9, 5786.0], [98.0, 5843.0], [98.1, 5968.0], [98.2, 6008.0], [98.3, 6056.0], [98.4, 6247.0], [98.5, 6521.0], [98.6, 6529.0], [98.7, 6855.0], [98.8, 6984.0], [98.9, 7450.0], [99.0, 7955.0], [99.1, 8247.0], [99.2, 8698.0], [99.3, 8965.0], [99.4, 9444.0], [99.5, 9534.0], [99.6, 11004.0], [99.7, 11841.0], [99.8, 14375.0], [99.9, 22001.0], [100.0, 22222.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 122.0, "series": [{"data": [[600.0, 20.0], [700.0, 8.0], [800.0, 21.0], [900.0, 16.0], [1000.0, 27.0], [1100.0, 49.0], [1200.0, 46.0], [1300.0, 48.0], [1400.0, 53.0], [1500.0, 58.0], [1600.0, 70.0], [1700.0, 65.0], [1800.0, 65.0], [1900.0, 94.0], [2000.0, 122.0], [2100.0, 114.0], [2200.0, 82.0], [2300.0, 76.0], [2400.0, 62.0], [2500.0, 63.0], [2600.0, 41.0], [2800.0, 34.0], [2700.0, 28.0], [2900.0, 21.0], [3000.0, 18.0], [3100.0, 18.0], [3300.0, 13.0], [3200.0, 17.0], [3400.0, 12.0], [3500.0, 11.0], [3600.0, 11.0], [3700.0, 11.0], [3800.0, 6.0], [3900.0, 12.0], [4000.0, 9.0], [4200.0, 4.0], [4300.0, 3.0], [4100.0, 3.0], [4400.0, 4.0], [4500.0, 3.0], [4600.0, 4.0], [4800.0, 3.0], [4700.0, 2.0], [5000.0, 3.0], [5100.0, 4.0], [4900.0, 3.0], [5300.0, 1.0], [5500.0, 3.0], [5600.0, 1.0], [5400.0, 1.0], [5700.0, 2.0], [5800.0, 1.0], [6000.0, 3.0], [5900.0, 2.0], [6300.0, 1.0], [6200.0, 1.0], [6500.0, 3.0], [6800.0, 1.0], [6900.0, 1.0], [7400.0, 1.0], [7300.0, 1.0], [7900.0, 2.0], [8200.0, 1.0], [8400.0, 1.0], [8600.0, 1.0], [9000.0, 1.0], [8900.0, 1.0], [9500.0, 1.0], [9400.0, 2.0], [11000.0, 1.0], [11100.0, 1.0], [11800.0, 1.0], [14300.0, 1.0], [22200.0, 1.0], [21900.0, 1.0], [22000.0, 1.0], [200.0, 28.0], [300.0, 7.0], [400.0, 35.0], [500.0, 28.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 30.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1475.0, "series": [{"data": [[0.0, 30.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 37.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 53.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1475.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.555555555555559, "minX": 1.76853024E12, "maxY": 20.0, "series": [{"data": [[1.76853024E12, 10.555555555555559], [1.76853042E12, 19.201680672268903], [1.7685303E12, 19.94736842105262], [1.76853036E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76853042E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 651.5999999999999, "minX": 1.0, "maxY": 3526.4285714285716, "series": [{"data": [[2.0, 1157.9166666666665], [8.0, 1757.6666666666665], [9.0, 2002.1199999999997], [10.0, 1497.0], [11.0, 1308.6071428571431], [3.0, 2048.0666666666666], [12.0, 1349.6551724137928], [13.0, 1856.0000000000002], [14.0, 1643.4285714285709], [15.0, 1632.2962962962965], [1.0, 3526.4285714285716], [4.0, 651.5999999999999], [16.0, 1872.4], [17.0, 1786.0434782608695], [18.0, 2270.8461538461543], [19.0, 2238.1923076923076], [5.0, 668.6500000000001], [20.0, 2411.9500846023716], [6.0, 786.5999999999999], [7.0, 670.2499999999999]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}, {"data": [[17.680250783699062, 2197.5084639498423]], "isOverall": false, "label": "/api/learner/educational-attainment-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1015.4666666666667, "minX": 1.76853024E12, "maxY": 4938095.083333333, "series": [{"data": [[1.76853024E12, 3466046.033333333], [1.76853042E12, 2126884.8333333335], [1.7685303E12, 4549764.366666666], [1.76853036E12, 4938095.083333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76853024E12, 1574.4], [1.76853042E12, 1015.4666666666667], [1.7685303E12, 2026.6666666666667], [1.76853036E12, 2188.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76853042E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1341.6395663956635, "minX": 1.76853024E12, "maxY": 2555.6050420168067, "series": [{"data": [[1.76853024E12, 1341.6395663956635], [1.76853042E12, 2555.6050420168067], [1.7685303E12, 2518.4505263157894], [1.76853036E12, 2349.8304093567267]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76853042E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 984.6151761517611, "minX": 1.76853024E12, "maxY": 1772.9326315789467, "series": [{"data": [[1.76853024E12, 984.6151761517611], [1.76853042E12, 1762.8949579831938], [1.7685303E12, 1772.9326315789467], [1.76853036E12, 1614.5380116959063]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76853042E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 6.846315789473682, "minX": 1.76853024E12, "maxY": 269.3109243697479, "series": [{"data": [[1.76853024E12, 10.414634146341461], [1.76853042E12, 269.3109243697479], [1.7685303E12, 6.846315789473682], [1.76853036E12, 10.651072124756341]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76853042E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 226.0, "minX": 1.76853024E12, "maxY": 4725.0, "series": [{"data": [[1.76853024E12, 1490.0], [1.76853042E12, 2094.0], [1.7685303E12, 4036.0], [1.76853036E12, 4725.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76853024E12, 255.60000000000002], [1.76853042E12, 1732.6000000000001], [1.7685303E12, 3105.9], [1.76853036E12, 1822.8000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76853024E12, 1490.0], [1.76853042E12, 2094.0], [1.7685303E12, 4036.0], [1.76853036E12, 4725.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76853024E12, 1027.4499999999994], [1.76853042E12, 1967.4999999999998], [1.7685303E12, 3949.65], [1.76853036E12, 4697.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76853024E12, 226.0], [1.76853042E12, 571.0], [1.7685303E12, 441.0], [1.76853036E12, 875.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76853024E12, 235.0], [1.76853042E12, 1526.5], [1.7685303E12, 1867.0], [1.76853036E12, 1572.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76853042E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 235.5, "minX": 1.0, "maxY": 21959.0, "series": [{"data": [[4.0, 1267.5], [8.0, 235.5], [17.0, 1682.0], [9.0, 2121.0], [5.0, 1219.5], [21.0, 918.0], [11.0, 3957.5], [12.0, 1650.0], [3.0, 1645.0], [13.0, 1265.0], [14.0, 1507.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 2244.0], [2.0, 2248.0], [9.0, 1973.0], [10.0, 2021.0], [11.0, 2205.0], [3.0, 2016.0], [12.0, 2357.0], [13.0, 2272.5], [14.0, 2142.5], [15.0, 2491.0], [4.0, 1704.5], [1.0, 21959.0], [16.0, 2315.5], [17.0, 2433.0], [18.0, 2260.5], [5.0, 1943.5], [20.0, 2498.0], [21.0, 2643.0], [6.0, 1512.5], [7.0, 1965.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 235.5, "minX": 1.0, "maxY": 21428.0, "series": [{"data": [[4.0, 1267.5], [8.0, 235.5], [17.0, 1682.0], [9.0, 2121.0], [5.0, 1219.5], [21.0, 917.5], [11.0, 3957.0], [12.0, 1650.0], [3.0, 1645.0], [13.0, 1265.0], [14.0, 1507.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1649.0], [2.0, 1553.5], [9.0, 1232.0], [10.0, 1272.0], [11.0, 1573.0], [3.0, 1555.0], [12.0, 1617.0], [13.0, 1540.0], [14.0, 1409.0], [15.0, 1610.0], [4.0, 1152.5], [1.0, 21428.0], [16.0, 1650.0], [17.0, 1534.5], [18.0, 858.0], [5.0, 1333.5], [20.0, 1258.5], [21.0, 1937.0], [6.0, 951.5], [7.0, 1528.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.76853024E12, "maxY": 8.55, "series": [{"data": [[1.76853024E12, 6.466666666666667], [1.76853042E12, 3.6333333333333333], [1.7685303E12, 7.933333333333334], [1.76853036E12, 8.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76853042E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76853024E12, "maxY": 8.05, "series": [{"data": [[1.76853024E12, 0.5], [1.76853042E12, 0.5], [1.7685303E12, 0.5], [1.76853036E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76853024E12, 5.65], [1.76853042E12, 3.466666666666667], [1.7685303E12, 7.416666666666667], [1.76853036E12, 8.05]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76853042E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76853024E12, "maxY": 8.05, "series": [{"data": [[1.76853024E12, 0.5], [1.76853042E12, 0.5], [1.7685303E12, 0.5], [1.76853036E12, 0.5]], "isOverall": false, "label": "/api/learner/educational-attainment-success", "isController": false}, {"data": [[1.76853024E12, 5.65], [1.76853042E12, 3.466666666666667], [1.7685303E12, 7.416666666666667], [1.76853036E12, 8.05]], "isOverall": false, "label": "/api/learner/educational-attainment-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76853042E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76853024E12, "maxY": 8.05, "series": [{"data": [[1.76853024E12, 0.5], [1.76853042E12, 0.5], [1.7685303E12, 0.5], [1.76853036E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76853024E12, 5.65], [1.76853042E12, 3.466666666666667], [1.7685303E12, 7.416666666666667], [1.76853036E12, 8.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76853042E12, "title": "Total Transactions Per Second"}},
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

