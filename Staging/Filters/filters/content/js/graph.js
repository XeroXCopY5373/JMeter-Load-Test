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
        data: {"result": {"minY": 229.0, "minX": 0.0, "maxY": 24816.0, "series": [{"data": [[0.0, 229.0], [0.1, 231.0], [0.2, 233.0], [0.3, 239.0], [0.4, 240.0], [0.5, 242.0], [0.6, 246.0], [0.7, 247.0], [0.8, 250.0], [0.9, 254.0], [1.0, 258.0], [1.1, 263.0], [1.2, 263.0], [1.3, 266.0], [1.4, 267.0], [1.5, 271.0], [1.6, 286.0], [1.7, 288.0], [1.8, 362.0], [1.9, 399.0], [2.0, 424.0], [2.1, 445.0], [2.2, 465.0], [2.3, 510.0], [2.4, 512.0], [2.5, 513.0], [2.6, 526.0], [2.7, 532.0], [2.8, 551.0], [2.9, 573.0], [3.0, 575.0], [3.1, 585.0], [3.2, 592.0], [3.3, 603.0], [3.4, 603.0], [3.5, 604.0], [3.6, 623.0], [3.7, 628.0], [3.8, 639.0], [3.9, 639.0], [4.0, 641.0], [4.1, 657.0], [4.2, 662.0], [4.3, 663.0], [4.4, 666.0], [4.5, 666.0], [4.6, 673.0], [4.7, 675.0], [4.8, 675.0], [4.9, 678.0], [5.0, 687.0], [5.1, 693.0], [5.2, 695.0], [5.3, 696.0], [5.4, 711.0], [5.5, 714.0], [5.6, 719.0], [5.7, 722.0], [5.8, 727.0], [5.9, 728.0], [6.0, 730.0], [6.1, 736.0], [6.2, 737.0], [6.3, 737.0], [6.4, 742.0], [6.5, 743.0], [6.6, 751.0], [6.7, 758.0], [6.8, 759.0], [6.9, 763.0], [7.0, 770.0], [7.1, 773.0], [7.2, 775.0], [7.3, 776.0], [7.4, 778.0], [7.5, 781.0], [7.6, 790.0], [7.7, 791.0], [7.8, 796.0], [7.9, 802.0], [8.0, 804.0], [8.1, 804.0], [8.2, 815.0], [8.3, 816.0], [8.4, 818.0], [8.5, 820.0], [8.6, 821.0], [8.7, 821.0], [8.8, 824.0], [8.9, 827.0], [9.0, 829.0], [9.1, 830.0], [9.2, 832.0], [9.3, 834.0], [9.4, 836.0], [9.5, 839.0], [9.6, 849.0], [9.7, 866.0], [9.8, 868.0], [9.9, 870.0], [10.0, 871.0], [10.1, 873.0], [10.2, 877.0], [10.3, 878.0], [10.4, 883.0], [10.5, 884.0], [10.6, 888.0], [10.7, 900.0], [10.8, 900.0], [10.9, 904.0], [11.0, 911.0], [11.1, 911.0], [11.2, 913.0], [11.3, 916.0], [11.4, 918.0], [11.5, 920.0], [11.6, 922.0], [11.7, 929.0], [11.8, 932.0], [11.9, 942.0], [12.0, 946.0], [12.1, 946.0], [12.2, 959.0], [12.3, 963.0], [12.4, 964.0], [12.5, 968.0], [12.6, 971.0], [12.7, 984.0], [12.8, 988.0], [12.9, 989.0], [13.0, 996.0], [13.1, 998.0], [13.2, 1003.0], [13.3, 1003.0], [13.4, 1014.0], [13.5, 1024.0], [13.6, 1026.0], [13.7, 1035.0], [13.8, 1038.0], [13.9, 1046.0], [14.0, 1051.0], [14.1, 1052.0], [14.2, 1054.0], [14.3, 1061.0], [14.4, 1065.0], [14.5, 1070.0], [14.6, 1071.0], [14.7, 1075.0], [14.8, 1076.0], [14.9, 1076.0], [15.0, 1078.0], [15.1, 1079.0], [15.2, 1089.0], [15.3, 1091.0], [15.4, 1092.0], [15.5, 1112.0], [15.6, 1116.0], [15.7, 1118.0], [15.8, 1119.0], [15.9, 1125.0], [16.0, 1134.0], [16.1, 1135.0], [16.2, 1138.0], [16.3, 1139.0], [16.4, 1143.0], [16.5, 1147.0], [16.6, 1147.0], [16.7, 1147.0], [16.8, 1149.0], [16.9, 1151.0], [17.0, 1152.0], [17.1, 1153.0], [17.2, 1154.0], [17.3, 1158.0], [17.4, 1163.0], [17.5, 1167.0], [17.6, 1168.0], [17.7, 1168.0], [17.8, 1182.0], [17.9, 1186.0], [18.0, 1192.0], [18.1, 1194.0], [18.2, 1196.0], [18.3, 1197.0], [18.4, 1201.0], [18.5, 1211.0], [18.6, 1215.0], [18.7, 1215.0], [18.8, 1218.0], [18.9, 1222.0], [19.0, 1223.0], [19.1, 1225.0], [19.2, 1228.0], [19.3, 1237.0], [19.4, 1237.0], [19.5, 1247.0], [19.6, 1249.0], [19.7, 1251.0], [19.8, 1252.0], [19.9, 1254.0], [20.0, 1256.0], [20.1, 1258.0], [20.2, 1259.0], [20.3, 1261.0], [20.4, 1265.0], [20.5, 1265.0], [20.6, 1271.0], [20.7, 1274.0], [20.8, 1280.0], [20.9, 1282.0], [21.0, 1283.0], [21.1, 1285.0], [21.2, 1285.0], [21.3, 1294.0], [21.4, 1295.0], [21.5, 1296.0], [21.6, 1302.0], [21.7, 1307.0], [21.8, 1313.0], [21.9, 1313.0], [22.0, 1313.0], [22.1, 1319.0], [22.2, 1325.0], [22.3, 1331.0], [22.4, 1337.0], [22.5, 1340.0], [22.6, 1348.0], [22.7, 1350.0], [22.8, 1352.0], [22.9, 1352.0], [23.0, 1354.0], [23.1, 1359.0], [23.2, 1361.0], [23.3, 1365.0], [23.4, 1365.0], [23.5, 1369.0], [23.6, 1373.0], [23.7, 1376.0], [23.8, 1381.0], [23.9, 1382.0], [24.0, 1386.0], [24.1, 1393.0], [24.2, 1394.0], [24.3, 1396.0], [24.4, 1404.0], [24.5, 1406.0], [24.6, 1407.0], [24.7, 1408.0], [24.8, 1408.0], [24.9, 1410.0], [25.0, 1415.0], [25.1, 1420.0], [25.2, 1420.0], [25.3, 1425.0], [25.4, 1428.0], [25.5, 1430.0], [25.6, 1441.0], [25.7, 1441.0], [25.8, 1442.0], [25.9, 1444.0], [26.0, 1445.0], [26.1, 1450.0], [26.2, 1451.0], [26.3, 1451.0], [26.4, 1454.0], [26.5, 1459.0], [26.6, 1460.0], [26.7, 1462.0], [26.8, 1463.0], [26.9, 1465.0], [27.0, 1466.0], [27.1, 1468.0], [27.2, 1470.0], [27.3, 1470.0], [27.4, 1474.0], [27.5, 1474.0], [27.6, 1481.0], [27.7, 1484.0], [27.8, 1486.0], [27.9, 1488.0], [28.0, 1491.0], [28.1, 1491.0], [28.2, 1496.0], [28.3, 1501.0], [28.4, 1503.0], [28.5, 1509.0], [28.6, 1511.0], [28.7, 1512.0], [28.8, 1513.0], [28.9, 1515.0], [29.0, 1518.0], [29.1, 1519.0], [29.2, 1522.0], [29.3, 1522.0], [29.4, 1523.0], [29.5, 1528.0], [29.6, 1532.0], [29.7, 1535.0], [29.8, 1536.0], [29.9, 1538.0], [30.0, 1538.0], [30.1, 1545.0], [30.2, 1548.0], [30.3, 1551.0], [30.4, 1553.0], [30.5, 1555.0], [30.6, 1555.0], [30.7, 1558.0], [30.8, 1562.0], [30.9, 1563.0], [31.0, 1563.0], [31.1, 1564.0], [31.2, 1565.0], [31.3, 1568.0], [31.4, 1570.0], [31.5, 1572.0], [31.6, 1573.0], [31.7, 1575.0], [31.8, 1577.0], [31.9, 1579.0], [32.0, 1579.0], [32.1, 1581.0], [32.2, 1585.0], [32.3, 1585.0], [32.4, 1586.0], [32.5, 1588.0], [32.6, 1588.0], [32.7, 1590.0], [32.8, 1591.0], [32.9, 1592.0], [33.0, 1593.0], [33.1, 1594.0], [33.2, 1599.0], [33.3, 1599.0], [33.4, 1600.0], [33.5, 1604.0], [33.6, 1605.0], [33.7, 1609.0], [33.8, 1610.0], [33.9, 1613.0], [34.0, 1615.0], [34.1, 1617.0], [34.2, 1620.0], [34.3, 1622.0], [34.4, 1622.0], [34.5, 1625.0], [34.6, 1631.0], [34.7, 1634.0], [34.8, 1635.0], [34.9, 1636.0], [35.0, 1637.0], [35.1, 1639.0], [35.2, 1640.0], [35.3, 1640.0], [35.4, 1641.0], [35.5, 1642.0], [35.6, 1646.0], [35.7, 1647.0], [35.8, 1648.0], [35.9, 1649.0], [36.0, 1656.0], [36.1, 1657.0], [36.2, 1657.0], [36.3, 1660.0], [36.4, 1661.0], [36.5, 1663.0], [36.6, 1663.0], [36.7, 1665.0], [36.8, 1665.0], [36.9, 1667.0], [37.0, 1668.0], [37.1, 1669.0], [37.2, 1672.0], [37.3, 1674.0], [37.4, 1676.0], [37.5, 1678.0], [37.6, 1678.0], [37.7, 1680.0], [37.8, 1681.0], [37.9, 1681.0], [38.0, 1683.0], [38.1, 1683.0], [38.2, 1683.0], [38.3, 1685.0], [38.4, 1686.0], [38.5, 1688.0], [38.6, 1692.0], [38.7, 1692.0], [38.8, 1698.0], [38.9, 1700.0], [39.0, 1707.0], [39.1, 1708.0], [39.2, 1710.0], [39.3, 1713.0], [39.4, 1713.0], [39.5, 1715.0], [39.6, 1716.0], [39.7, 1717.0], [39.8, 1720.0], [39.9, 1720.0], [40.0, 1722.0], [40.1, 1723.0], [40.2, 1724.0], [40.3, 1726.0], [40.4, 1727.0], [40.5, 1728.0], [40.6, 1729.0], [40.7, 1732.0], [40.8, 1734.0], [40.9, 1736.0], [41.0, 1743.0], [41.1, 1747.0], [41.2, 1750.0], [41.3, 1754.0], [41.4, 1758.0], [41.5, 1760.0], [41.6, 1764.0], [41.7, 1764.0], [41.8, 1769.0], [41.9, 1770.0], [42.0, 1772.0], [42.1, 1778.0], [42.2, 1779.0], [42.3, 1782.0], [42.4, 1784.0], [42.5, 1784.0], [42.6, 1785.0], [42.7, 1789.0], [42.8, 1791.0], [42.9, 1801.0], [43.0, 1803.0], [43.1, 1805.0], [43.2, 1807.0], [43.3, 1813.0], [43.4, 1814.0], [43.5, 1815.0], [43.6, 1822.0], [43.7, 1825.0], [43.8, 1826.0], [43.9, 1828.0], [44.0, 1828.0], [44.1, 1835.0], [44.2, 1837.0], [44.3, 1838.0], [44.4, 1841.0], [44.5, 1845.0], [44.6, 1849.0], [44.7, 1852.0], [44.8, 1853.0], [44.9, 1856.0], [45.0, 1857.0], [45.1, 1861.0], [45.2, 1861.0], [45.3, 1861.0], [45.4, 1863.0], [45.5, 1864.0], [45.6, 1869.0], [45.7, 1870.0], [45.8, 1872.0], [45.9, 1874.0], [46.0, 1875.0], [46.1, 1881.0], [46.2, 1882.0], [46.3, 1882.0], [46.4, 1885.0], [46.5, 1886.0], [46.6, 1898.0], [46.7, 1898.0], [46.8, 1898.0], [46.9, 1899.0], [47.0, 1902.0], [47.1, 1904.0], [47.2, 1905.0], [47.3, 1905.0], [47.4, 1909.0], [47.5, 1914.0], [47.6, 1917.0], [47.7, 1918.0], [47.8, 1919.0], [47.9, 1921.0], [48.0, 1923.0], [48.1, 1927.0], [48.2, 1929.0], [48.3, 1929.0], [48.4, 1930.0], [48.5, 1935.0], [48.6, 1935.0], [48.7, 1944.0], [48.8, 1945.0], [48.9, 1946.0], [49.0, 1948.0], [49.1, 1952.0], [49.2, 1956.0], [49.3, 1959.0], [49.4, 1960.0], [49.5, 1961.0], [49.6, 1961.0], [49.7, 1971.0], [49.8, 1973.0], [49.9, 1981.0], [50.0, 1982.0], [50.1, 1982.0], [50.2, 1988.0], [50.3, 1988.0], [50.4, 1993.0], [50.5, 1996.0], [50.6, 1997.0], [50.7, 2003.0], [50.8, 2004.0], [50.9, 2010.0], [51.0, 2011.0], [51.1, 2011.0], [51.2, 2014.0], [51.3, 2014.0], [51.4, 2024.0], [51.5, 2028.0], [51.6, 2032.0], [51.7, 2036.0], [51.8, 2037.0], [51.9, 2039.0], [52.0, 2040.0], [52.1, 2041.0], [52.2, 2043.0], [52.3, 2045.0], [52.4, 2050.0], [52.5, 2054.0], [52.6, 2055.0], [52.7, 2058.0], [52.8, 2061.0], [52.9, 2061.0], [53.0, 2064.0], [53.1, 2069.0], [53.2, 2072.0], [53.3, 2073.0], [53.4, 2075.0], [53.5, 2078.0], [53.6, 2081.0], [53.7, 2085.0], [53.8, 2085.0], [53.9, 2090.0], [54.0, 2091.0], [54.1, 2094.0], [54.2, 2101.0], [54.3, 2104.0], [54.4, 2104.0], [54.5, 2112.0], [54.6, 2119.0], [54.7, 2120.0], [54.8, 2120.0], [54.9, 2122.0], [55.0, 2130.0], [55.1, 2133.0], [55.2, 2138.0], [55.3, 2139.0], [55.4, 2142.0], [55.5, 2151.0], [55.6, 2152.0], [55.7, 2156.0], [55.8, 2158.0], [55.9, 2159.0], [56.0, 2160.0], [56.1, 2161.0], [56.2, 2162.0], [56.3, 2163.0], [56.4, 2163.0], [56.5, 2172.0], [56.6, 2173.0], [56.7, 2175.0], [56.8, 2182.0], [56.9, 2186.0], [57.0, 2189.0], [57.1, 2194.0], [57.2, 2196.0], [57.3, 2196.0], [57.4, 2197.0], [57.5, 2199.0], [57.6, 2199.0], [57.7, 2206.0], [57.8, 2207.0], [57.9, 2208.0], [58.0, 2210.0], [58.1, 2210.0], [58.2, 2211.0], [58.3, 2213.0], [58.4, 2214.0], [58.5, 2215.0], [58.6, 2215.0], [58.7, 2217.0], [58.8, 2220.0], [58.9, 2220.0], [59.0, 2222.0], [59.1, 2223.0], [59.2, 2225.0], [59.3, 2234.0], [59.4, 2235.0], [59.5, 2238.0], [59.6, 2238.0], [59.7, 2239.0], [59.8, 2242.0], [59.9, 2242.0], [60.0, 2242.0], [60.1, 2245.0], [60.2, 2246.0], [60.3, 2249.0], [60.4, 2254.0], [60.5, 2257.0], [60.6, 2264.0], [60.7, 2266.0], [60.8, 2270.0], [60.9, 2271.0], [61.0, 2277.0], [61.1, 2281.0], [61.2, 2282.0], [61.3, 2287.0], [61.4, 2289.0], [61.5, 2290.0], [61.6, 2291.0], [61.7, 2293.0], [61.8, 2300.0], [61.9, 2302.0], [62.0, 2303.0], [62.1, 2318.0], [62.2, 2322.0], [62.3, 2324.0], [62.4, 2326.0], [62.5, 2330.0], [62.6, 2332.0], [62.7, 2336.0], [62.8, 2340.0], [62.9, 2341.0], [63.0, 2343.0], [63.1, 2345.0], [63.2, 2347.0], [63.3, 2349.0], [63.4, 2349.0], [63.5, 2352.0], [63.6, 2354.0], [63.7, 2354.0], [63.8, 2357.0], [63.9, 2359.0], [64.0, 2361.0], [64.1, 2371.0], [64.2, 2373.0], [64.3, 2374.0], [64.4, 2374.0], [64.5, 2382.0], [64.6, 2396.0], [64.7, 2397.0], [64.8, 2405.0], [64.9, 2410.0], [65.0, 2413.0], [65.1, 2423.0], [65.2, 2425.0], [65.3, 2426.0], [65.4, 2427.0], [65.5, 2429.0], [65.6, 2434.0], [65.7, 2436.0], [65.8, 2437.0], [65.9, 2444.0], [66.0, 2444.0], [66.1, 2447.0], [66.2, 2462.0], [66.3, 2467.0], [66.4, 2468.0], [66.5, 2469.0], [66.6, 2472.0], [66.7, 2473.0], [66.8, 2474.0], [66.9, 2485.0], [67.0, 2486.0], [67.1, 2488.0], [67.2, 2489.0], [67.3, 2490.0], [67.4, 2500.0], [67.5, 2500.0], [67.6, 2508.0], [67.7, 2509.0], [67.8, 2512.0], [67.9, 2514.0], [68.0, 2516.0], [68.1, 2521.0], [68.2, 2529.0], [68.3, 2537.0], [68.4, 2541.0], [68.5, 2542.0], [68.6, 2546.0], [68.7, 2548.0], [68.8, 2550.0], [68.9, 2559.0], [69.0, 2561.0], [69.1, 2564.0], [69.2, 2566.0], [69.3, 2574.0], [69.4, 2579.0], [69.5, 2580.0], [69.6, 2580.0], [69.7, 2584.0], [69.8, 2587.0], [69.9, 2592.0], [70.0, 2595.0], [70.1, 2597.0], [70.2, 2598.0], [70.3, 2600.0], [70.4, 2605.0], [70.5, 2605.0], [70.6, 2606.0], [70.7, 2610.0], [70.8, 2611.0], [70.9, 2614.0], [71.0, 2615.0], [71.1, 2616.0], [71.2, 2620.0], [71.3, 2621.0], [71.4, 2623.0], [71.5, 2626.0], [71.6, 2637.0], [71.7, 2638.0], [71.8, 2638.0], [71.9, 2640.0], [72.0, 2640.0], [72.1, 2648.0], [72.2, 2652.0], [72.3, 2652.0], [72.4, 2653.0], [72.5, 2658.0], [72.6, 2662.0], [72.7, 2664.0], [72.8, 2664.0], [72.9, 2667.0], [73.0, 2675.0], [73.1, 2678.0], [73.2, 2684.0], [73.3, 2687.0], [73.4, 2688.0], [73.5, 2692.0], [73.6, 2696.0], [73.7, 2708.0], [73.8, 2708.0], [73.9, 2711.0], [74.0, 2715.0], [74.1, 2715.0], [74.2, 2723.0], [74.3, 2727.0], [74.4, 2731.0], [74.5, 2737.0], [74.6, 2740.0], [74.7, 2745.0], [74.8, 2755.0], [74.9, 2760.0], [75.0, 2762.0], [75.1, 2772.0], [75.2, 2779.0], [75.3, 2783.0], [75.4, 2788.0], [75.5, 2789.0], [75.6, 2796.0], [75.7, 2798.0], [75.8, 2805.0], [75.9, 2806.0], [76.0, 2810.0], [76.1, 2810.0], [76.2, 2813.0], [76.3, 2814.0], [76.4, 2815.0], [76.5, 2821.0], [76.6, 2824.0], [76.7, 2831.0], [76.8, 2841.0], [76.9, 2843.0], [77.0, 2860.0], [77.1, 2861.0], [77.2, 2862.0], [77.3, 2863.0], [77.4, 2863.0], [77.5, 2870.0], [77.6, 2871.0], [77.7, 2873.0], [77.8, 2891.0], [77.9, 2892.0], [78.0, 2900.0], [78.1, 2904.0], [78.2, 2906.0], [78.3, 2908.0], [78.4, 2910.0], [78.5, 2912.0], [78.6, 2915.0], [78.7, 2921.0], [78.8, 2931.0], [78.9, 2933.0], [79.0, 2934.0], [79.1, 2938.0], [79.2, 2943.0], [79.3, 2944.0], [79.4, 2945.0], [79.5, 2946.0], [79.6, 2948.0], [79.7, 2954.0], [79.8, 2955.0], [79.9, 2961.0], [80.0, 2968.0], [80.1, 2971.0], [80.2, 2972.0], [80.3, 2975.0], [80.4, 2979.0], [80.5, 2986.0], [80.6, 2996.0], [80.7, 2996.0], [80.8, 3000.0], [80.9, 3002.0], [81.0, 3006.0], [81.1, 3013.0], [81.2, 3014.0], [81.3, 3023.0], [81.4, 3037.0], [81.5, 3040.0], [81.6, 3052.0], [81.7, 3059.0], [81.8, 3068.0], [81.9, 3071.0], [82.0, 3074.0], [82.1, 3081.0], [82.2, 3085.0], [82.3, 3090.0], [82.4, 3092.0], [82.5, 3095.0], [82.6, 3098.0], [82.7, 3098.0], [82.8, 3100.0], [82.9, 3101.0], [83.0, 3129.0], [83.1, 3137.0], [83.2, 3143.0], [83.3, 3147.0], [83.4, 3156.0], [83.5, 3164.0], [83.6, 3173.0], [83.7, 3176.0], [83.8, 3182.0], [83.9, 3183.0], [84.0, 3183.0], [84.1, 3196.0], [84.2, 3196.0], [84.3, 3201.0], [84.4, 3208.0], [84.5, 3217.0], [84.6, 3230.0], [84.7, 3234.0], [84.8, 3240.0], [84.9, 3246.0], [85.0, 3246.0], [85.1, 3250.0], [85.2, 3254.0], [85.3, 3258.0], [85.4, 3260.0], [85.5, 3266.0], [85.6, 3269.0], [85.7, 3285.0], [85.8, 3290.0], [85.9, 3298.0], [86.0, 3303.0], [86.1, 3309.0], [86.2, 3311.0], [86.3, 3325.0], [86.4, 3343.0], [86.5, 3353.0], [86.6, 3370.0], [86.7, 3380.0], [86.8, 3382.0], [86.9, 3402.0], [87.0, 3412.0], [87.1, 3423.0], [87.2, 3425.0], [87.3, 3431.0], [87.4, 3477.0], [87.5, 3485.0], [87.6, 3491.0], [87.7, 3499.0], [87.8, 3504.0], [87.9, 3520.0], [88.0, 3525.0], [88.1, 3527.0], [88.2, 3538.0], [88.3, 3541.0], [88.4, 3548.0], [88.5, 3548.0], [88.6, 3550.0], [88.7, 3584.0], [88.8, 3597.0], [88.9, 3608.0], [89.0, 3617.0], [89.1, 3622.0], [89.2, 3633.0], [89.3, 3633.0], [89.4, 3643.0], [89.5, 3645.0], [89.6, 3646.0], [89.7, 3693.0], [89.8, 3693.0], [89.9, 3704.0], [90.0, 3709.0], [90.1, 3714.0], [90.2, 3736.0], [90.3, 3742.0], [90.4, 3760.0], [90.5, 3777.0], [90.6, 3780.0], [90.7, 3788.0], [90.8, 3792.0], [90.9, 3806.0], [91.0, 3814.0], [91.1, 3820.0], [91.2, 3848.0], [91.3, 3850.0], [91.4, 3877.0], [91.5, 3906.0], [91.6, 3925.0], [91.7, 3981.0], [91.8, 3993.0], [91.9, 4009.0], [92.0, 4012.0], [92.1, 4017.0], [92.2, 4049.0], [92.3, 4051.0], [92.4, 4091.0], [92.5, 4108.0], [92.6, 4123.0], [92.7, 4133.0], [92.8, 4143.0], [92.9, 4145.0], [93.0, 4154.0], [93.1, 4159.0], [93.2, 4171.0], [93.3, 4180.0], [93.4, 4220.0], [93.5, 4241.0], [93.6, 4261.0], [93.7, 4301.0], [93.8, 4306.0], [93.9, 4307.0], [94.0, 4389.0], [94.1, 4401.0], [94.2, 4410.0], [94.3, 4465.0], [94.4, 4473.0], [94.5, 4554.0], [94.6, 4557.0], [94.7, 4574.0], [94.8, 4575.0], [94.9, 4583.0], [95.0, 4669.0], [95.1, 4695.0], [95.2, 4724.0], [95.3, 4800.0], [95.4, 4804.0], [95.5, 4870.0], [95.6, 4876.0], [95.7, 4935.0], [95.8, 4993.0], [95.9, 5173.0], [96.0, 5249.0], [96.1, 5304.0], [96.2, 5315.0], [96.3, 5356.0], [96.4, 5390.0], [96.5, 5511.0], [96.6, 5629.0], [96.7, 5672.0], [96.8, 5746.0], [96.9, 5772.0], [97.0, 5788.0], [97.1, 5791.0], [97.2, 5993.0], [97.3, 6236.0], [97.4, 6327.0], [97.5, 6428.0], [97.6, 6467.0], [97.7, 6564.0], [97.8, 6752.0], [97.9, 7433.0], [98.0, 10306.0], [98.1, 10658.0], [98.2, 11938.0], [98.3, 21337.0], [98.4, 21357.0], [98.5, 21520.0], [98.6, 21540.0], [98.7, 21842.0], [98.8, 21973.0], [98.9, 22004.0], [99.0, 22217.0], [99.1, 22285.0], [99.2, 22325.0], [99.3, 22508.0], [99.4, 22660.0], [99.5, 23042.0], [99.6, 23240.0], [99.7, 23343.0], [99.8, 23663.0], [99.9, 23763.0], [100.0, 24816.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 77.0, "series": [{"data": [[600.0, 28.0], [700.0, 35.0], [800.0, 40.0], [900.0, 35.0], [1000.0, 31.0], [1100.0, 41.0], [1200.0, 45.0], [1300.0, 38.0], [1400.0, 55.0], [1500.0, 71.0], [1600.0, 77.0], [1700.0, 56.0], [1800.0, 57.0], [1900.0, 51.0], [2000.0, 50.0], [2100.0, 48.0], [2200.0, 58.0], [2300.0, 41.0], [2400.0, 37.0], [2500.0, 40.0], [2600.0, 47.0], [2700.0, 30.0], [2800.0, 31.0], [2900.0, 39.0], [3000.0, 28.0], [3100.0, 20.0], [3300.0, 13.0], [3200.0, 24.0], [3400.0, 12.0], [3500.0, 15.0], [3600.0, 14.0], [3700.0, 15.0], [3800.0, 8.0], [3900.0, 5.0], [4000.0, 9.0], [4100.0, 12.0], [4200.0, 5.0], [4300.0, 5.0], [4500.0, 7.0], [4400.0, 5.0], [4600.0, 3.0], [4800.0, 6.0], [4700.0, 2.0], [5100.0, 2.0], [4900.0, 2.0], [5200.0, 1.0], [5300.0, 5.0], [5400.0, 1.0], [5600.0, 3.0], [5500.0, 1.0], [5700.0, 5.0], [5900.0, 1.0], [6100.0, 1.0], [6300.0, 2.0], [6200.0, 1.0], [6500.0, 2.0], [6400.0, 2.0], [6700.0, 1.0], [7400.0, 1.0], [8400.0, 1.0], [10300.0, 1.0], [10600.0, 1.0], [11900.0, 1.0], [15200.0, 1.0], [21500.0, 3.0], [21300.0, 2.0], [22500.0, 2.0], [21800.0, 2.0], [22000.0, 1.0], [22200.0, 3.0], [21900.0, 1.0], [22300.0, 1.0], [22800.0, 1.0], [23500.0, 1.0], [23000.0, 1.0], [23300.0, 1.0], [23200.0, 1.0], [22600.0, 1.0], [23600.0, 1.0], [23700.0, 1.0], [24800.0, 1.0], [200.0, 24.0], [300.0, 3.0], [400.0, 5.0], [500.0, 14.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1302.0, "series": [{"data": [[0.0, 26.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 26.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 41.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1302.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.7685276E12, "maxY": 20.0, "series": [{"data": [[1.76852766E12, 20.0], [1.76852778E12, 4.0], [1.7685276E12, 17.06911447084233], [1.76852772E12, 19.820276497695854]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852778E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1661.5925925925928, "minX": 1.0, "maxY": 21540.0, "series": [{"data": [[8.0, 4662.0], [2.0, 21337.0], [9.0, 1903.1875], [10.0, 2106.933333333333], [11.0, 2256.9375], [12.0, 1838.4545454545455], [3.0, 21540.0], [13.0, 1926.7619047619046], [14.0, 1774.8846153846152], [15.0, 1661.5925925925928], [16.0, 1777.9310344827588], [4.0, 5746.0], [1.0, 21357.0], [17.0, 1874.8571428571427], [18.0, 2051.0384615384614], [19.0, 2351.9629629629626], [20.0, 2571.731620903456], [5.0, 4240.0], [6.0, 4516.0], [7.0, 4695.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}, {"data": [[18.891039426523296, 2513.1598566308267]], "isOverall": false, "label": "/api/learner/educational-attainment-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 29.866666666666667, "minX": 1.7685276E12, "maxY": 4713075.8, "series": [{"data": [[1.76852766E12, 4713075.8], [1.76852778E12, 40953.78333333333], [1.7685276E12, 4427000.666666667], [1.76852772E12, 4130568.933333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76852766E12, 2094.9333333333334], [1.76852778E12, 29.866666666666667], [1.7685276E12, 1975.4666666666667], [1.76852772E12, 1851.7333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852778E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2228.766738660906, "minX": 1.7685276E12, "maxY": 11918.714285714284, "series": [{"data": [[1.76852766E12, 2427.5356415478605], [1.76852778E12, 11918.714285714284], [1.7685276E12, 2228.766738660906], [1.76852772E12, 2761.7235023041494]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852778E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1349.33870967742, "minX": 1.7685276E12, "maxY": 9925.142857142857, "series": [{"data": [[1.76852766E12, 1462.6272912423615], [1.76852778E12, 9925.142857142857], [1.7685276E12, 1780.5248380129585], [1.76852772E12, 1349.33870967742]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852778E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 7.675115207373271, "minX": 1.7685276E12, "maxY": 9073.571428571428, "series": [{"data": [[1.76852766E12, 52.37270875763755], [1.76852778E12, 9073.571428571428], [1.7685276E12, 919.2203023758098], [1.76852772E12, 7.675115207373271]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852778E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 229.0, "minX": 1.7685276E12, "maxY": 22660.0, "series": [{"data": [[1.76852766E12, 22660.0], [1.76852778E12, 21540.0], [1.7685276E12, 22508.0], [1.76852772E12, 3439.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76852766E12, 4580.4], [1.76852778E12, 21540.0], [1.7685276E12, 19514.500000000044], [1.76852772E12, 1742.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76852766E12, 22660.0], [1.76852778E12, 21540.0], [1.7685276E12, 22508.0], [1.76852772E12, 3439.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76852766E12, 13050.949999999988], [1.76852778E12, 21540.0], [1.7685276E12, 21964.6], [1.76852772E12, 2562.299999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76852766E12, 1211.0], [1.76852778E12, 21337.0], [1.7685276E12, 229.0], [1.76852772E12, 445.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76852766E12, 1662.5], [1.76852778E12, 21357.0], [1.7685276E12, 261.5], [1.76852772E12, 1500.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852778E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 242.0, "minX": 1.0, "maxY": 21347.0, "series": [{"data": [[2.0, 262.0], [4.0, 4557.0], [8.0, 264.5], [1.0, 21347.0], [17.0, 1290.5], [9.0, 1625.5], [5.0, 1665.0], [10.0, 1686.5], [3.0, 242.0], [14.0, 1462.0], [15.0, 559.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1814.0], [8.0, 1806.0], [9.0, 1740.5], [10.0, 2034.5], [11.0, 1732.0], [12.0, 2196.0], [3.0, 2386.0], [13.0, 1930.0], [14.0, 2601.5], [15.0, 3146.0], [4.0, 1875.0], [1.0, 4261.5], [17.0, 2368.5], [18.0, 2958.0], [5.0, 1769.0], [6.0, 1919.5], [7.0, 2269.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 242.0, "minX": 1.0, "maxY": 21347.0, "series": [{"data": [[2.0, 260.0], [4.0, 4557.0], [8.0, 264.5], [1.0, 21347.0], [17.0, 1290.5], [9.0, 1625.5], [5.0, 1665.0], [10.0, 1686.5], [3.0, 242.0], [14.0, 1462.0], [15.0, 557.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 919.0], [8.0, 942.0], [9.0, 959.0], [10.0, 1277.5], [11.0, 1143.0], [12.0, 1079.5], [3.0, 1145.0], [13.0, 977.0], [14.0, 1617.5], [15.0, 1660.0], [4.0, 951.0], [1.0, 1752.0], [17.0, 1645.0], [18.0, 1754.0], [5.0, 999.0], [6.0, 1150.5], [7.0, 1452.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.76852754E12, "maxY": 8.183333333333334, "series": [{"data": [[1.76852766E12, 8.183333333333334], [1.7685276E12, 7.916666666666667], [1.76852772E12, 7.016666666666667], [1.76852754E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852772E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7685276E12, "maxY": 7.683333333333334, "series": [{"data": [[1.76852766E12, 0.5], [1.76852778E12, 0.05], [1.7685276E12, 0.5], [1.76852772E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76852766E12, 7.683333333333334], [1.76852778E12, 0.06666666666666667], [1.7685276E12, 7.216666666666667], [1.76852772E12, 6.733333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76852778E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7685276E12, "maxY": 7.683333333333334, "series": [{"data": [[1.76852766E12, 0.5], [1.76852778E12, 0.05], [1.7685276E12, 0.5], [1.76852772E12, 0.5]], "isOverall": false, "label": "/api/learner/educational-attainment-success", "isController": false}, {"data": [[1.76852766E12, 7.683333333333334], [1.76852778E12, 0.06666666666666667], [1.7685276E12, 7.216666666666667], [1.76852772E12, 6.733333333333333]], "isOverall": false, "label": "/api/learner/educational-attainment-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852778E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.7685276E12, "maxY": 7.683333333333334, "series": [{"data": [[1.76852766E12, 0.5], [1.76852778E12, 0.05], [1.7685276E12, 0.5], [1.76852772E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76852766E12, 7.683333333333334], [1.76852778E12, 0.06666666666666667], [1.7685276E12, 7.216666666666667], [1.76852772E12, 6.733333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76852778E12, "title": "Total Transactions Per Second"}},
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

