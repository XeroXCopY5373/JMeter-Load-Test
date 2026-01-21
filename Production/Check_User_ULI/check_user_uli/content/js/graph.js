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
        data: {"result": {"minY": 226.0, "minX": 0.0, "maxY": 26440.0, "series": [{"data": [[0.0, 226.0], [0.1, 227.0], [0.2, 229.0], [0.3, 229.0], [0.4, 230.0], [0.5, 234.0], [0.6, 235.0], [0.7, 236.0], [0.8, 237.0], [0.9, 238.0], [1.0, 239.0], [1.1, 241.0], [1.2, 243.0], [1.3, 252.0], [1.4, 279.0], [1.5, 325.0], [1.6, 385.0], [1.7, 404.0], [1.8, 446.0], [1.9, 459.0], [2.0, 473.0], [2.1, 474.0], [2.2, 481.0], [2.3, 486.0], [2.4, 487.0], [2.5, 487.0], [2.6, 494.0], [2.7, 499.0], [2.8, 508.0], [2.9, 515.0], [3.0, 516.0], [3.1, 524.0], [3.2, 532.0], [3.3, 532.0], [3.4, 534.0], [3.5, 546.0], [3.6, 551.0], [3.7, 555.0], [3.8, 562.0], [3.9, 564.0], [4.0, 575.0], [4.1, 579.0], [4.2, 588.0], [4.3, 616.0], [4.4, 619.0], [4.5, 619.0], [4.6, 625.0], [4.7, 629.0], [4.8, 633.0], [4.9, 636.0], [5.0, 641.0], [5.1, 646.0], [5.2, 647.0], [5.3, 658.0], [5.4, 659.0], [5.5, 666.0], [5.6, 669.0], [5.7, 669.0], [5.8, 679.0], [5.9, 696.0], [6.0, 696.0], [6.1, 703.0], [6.2, 705.0], [6.3, 708.0], [6.4, 712.0], [6.5, 716.0], [6.6, 719.0], [6.7, 721.0], [6.8, 727.0], [6.9, 730.0], [7.0, 746.0], [7.1, 763.0], [7.2, 764.0], [7.3, 764.0], [7.4, 764.0], [7.5, 769.0], [7.6, 774.0], [7.7, 775.0], [7.8, 777.0], [7.9, 780.0], [8.0, 780.0], [8.1, 786.0], [8.2, 789.0], [8.3, 795.0], [8.4, 797.0], [8.5, 802.0], [8.6, 802.0], [8.7, 808.0], [8.8, 810.0], [8.9, 819.0], [9.0, 826.0], [9.1, 830.0], [9.2, 837.0], [9.3, 841.0], [9.4, 841.0], [9.5, 845.0], [9.6, 848.0], [9.7, 849.0], [9.8, 850.0], [9.9, 854.0], [10.0, 855.0], [10.1, 856.0], [10.2, 865.0], [10.3, 866.0], [10.4, 867.0], [10.5, 867.0], [10.6, 868.0], [10.7, 869.0], [10.8, 871.0], [10.9, 871.0], [11.0, 875.0], [11.1, 877.0], [11.2, 882.0], [11.3, 885.0], [11.4, 889.0], [11.5, 893.0], [11.6, 893.0], [11.7, 893.0], [11.8, 895.0], [11.9, 896.0], [12.0, 898.0], [12.1, 901.0], [12.2, 901.0], [12.3, 905.0], [12.4, 908.0], [12.5, 909.0], [12.6, 911.0], [12.7, 914.0], [12.8, 915.0], [12.9, 916.0], [13.0, 918.0], [13.1, 920.0], [13.2, 925.0], [13.3, 927.0], [13.4, 931.0], [13.5, 931.0], [13.6, 936.0], [13.7, 940.0], [13.8, 944.0], [13.9, 946.0], [14.0, 947.0], [14.1, 953.0], [14.2, 957.0], [14.3, 959.0], [14.4, 959.0], [14.5, 960.0], [14.6, 961.0], [14.7, 963.0], [14.8, 963.0], [14.9, 966.0], [15.0, 966.0], [15.1, 968.0], [15.2, 969.0], [15.3, 974.0], [15.4, 975.0], [15.5, 977.0], [15.6, 978.0], [15.7, 979.0], [15.8, 980.0], [15.9, 987.0], [16.0, 987.0], [16.1, 988.0], [16.2, 991.0], [16.3, 991.0], [16.4, 992.0], [16.5, 996.0], [16.6, 997.0], [16.7, 1000.0], [16.8, 1003.0], [16.9, 1003.0], [17.0, 1005.0], [17.1, 1010.0], [17.2, 1014.0], [17.3, 1017.0], [17.4, 1021.0], [17.5, 1021.0], [17.6, 1025.0], [17.7, 1026.0], [17.8, 1027.0], [17.9, 1033.0], [18.0, 1034.0], [18.1, 1037.0], [18.2, 1038.0], [18.3, 1042.0], [18.4, 1043.0], [18.5, 1049.0], [18.6, 1052.0], [18.7, 1052.0], [18.8, 1062.0], [18.9, 1063.0], [19.0, 1064.0], [19.1, 1069.0], [19.2, 1071.0], [19.3, 1073.0], [19.4, 1080.0], [19.5, 1082.0], [19.6, 1086.0], [19.7, 1089.0], [19.8, 1090.0], [19.9, 1091.0], [20.0, 1093.0], [20.1, 1096.0], [20.2, 1102.0], [20.3, 1107.0], [20.4, 1108.0], [20.5, 1111.0], [20.6, 1111.0], [20.7, 1113.0], [20.8, 1114.0], [20.9, 1115.0], [21.0, 1119.0], [21.1, 1121.0], [21.2, 1122.0], [21.3, 1124.0], [21.4, 1125.0], [21.5, 1133.0], [21.6, 1133.0], [21.7, 1141.0], [21.8, 1147.0], [21.9, 1149.0], [22.0, 1155.0], [22.1, 1156.0], [22.2, 1160.0], [22.3, 1164.0], [22.4, 1168.0], [22.5, 1172.0], [22.6, 1175.0], [22.7, 1182.0], [22.8, 1183.0], [22.9, 1187.0], [23.0, 1189.0], [23.1, 1191.0], [23.2, 1192.0], [23.3, 1193.0], [23.4, 1194.0], [23.5, 1195.0], [23.6, 1196.0], [23.7, 1197.0], [23.8, 1202.0], [23.9, 1206.0], [24.0, 1206.0], [24.1, 1207.0], [24.2, 1217.0], [24.3, 1218.0], [24.4, 1221.0], [24.5, 1222.0], [24.6, 1223.0], [24.7, 1225.0], [24.8, 1227.0], [24.9, 1228.0], [25.0, 1230.0], [25.1, 1231.0], [25.2, 1238.0], [25.3, 1240.0], [25.4, 1241.0], [25.5, 1243.0], [25.6, 1243.0], [25.7, 1244.0], [25.8, 1246.0], [25.9, 1251.0], [26.0, 1253.0], [26.1, 1254.0], [26.2, 1256.0], [26.3, 1261.0], [26.4, 1261.0], [26.5, 1266.0], [26.6, 1270.0], [26.7, 1270.0], [26.8, 1273.0], [26.9, 1273.0], [27.0, 1274.0], [27.1, 1278.0], [27.2, 1285.0], [27.3, 1287.0], [27.4, 1289.0], [27.5, 1292.0], [27.6, 1294.0], [27.7, 1298.0], [27.8, 1302.0], [27.9, 1303.0], [28.0, 1304.0], [28.1, 1305.0], [28.2, 1306.0], [28.3, 1307.0], [28.4, 1311.0], [28.5, 1313.0], [28.6, 1314.0], [28.7, 1314.0], [28.8, 1315.0], [28.9, 1316.0], [29.0, 1317.0], [29.1, 1318.0], [29.2, 1320.0], [29.3, 1320.0], [29.4, 1327.0], [29.5, 1329.0], [29.6, 1329.0], [29.7, 1329.0], [29.8, 1331.0], [29.9, 1334.0], [30.0, 1339.0], [30.1, 1340.0], [30.2, 1343.0], [30.3, 1344.0], [30.4, 1351.0], [30.5, 1352.0], [30.6, 1355.0], [30.7, 1356.0], [30.8, 1357.0], [30.9, 1361.0], [31.0, 1364.0], [31.1, 1365.0], [31.2, 1366.0], [31.3, 1367.0], [31.4, 1367.0], [31.5, 1368.0], [31.6, 1372.0], [31.7, 1372.0], [31.8, 1379.0], [31.9, 1380.0], [32.0, 1380.0], [32.1, 1381.0], [32.2, 1384.0], [32.3, 1384.0], [32.4, 1386.0], [32.5, 1390.0], [32.6, 1390.0], [32.7, 1394.0], [32.8, 1395.0], [32.9, 1397.0], [33.0, 1400.0], [33.1, 1402.0], [33.2, 1402.0], [33.3, 1405.0], [33.4, 1411.0], [33.5, 1414.0], [33.6, 1415.0], [33.7, 1420.0], [33.8, 1422.0], [33.9, 1422.0], [34.0, 1423.0], [34.1, 1424.0], [34.2, 1428.0], [34.3, 1429.0], [34.4, 1430.0], [34.5, 1432.0], [34.6, 1436.0], [34.7, 1440.0], [34.8, 1444.0], [34.9, 1449.0], [35.0, 1450.0], [35.1, 1454.0], [35.2, 1457.0], [35.3, 1461.0], [35.4, 1465.0], [35.5, 1467.0], [35.6, 1467.0], [35.7, 1468.0], [35.8, 1469.0], [35.9, 1470.0], [36.0, 1473.0], [36.1, 1474.0], [36.2, 1478.0], [36.3, 1478.0], [36.4, 1479.0], [36.5, 1482.0], [36.6, 1483.0], [36.7, 1484.0], [36.8, 1488.0], [36.9, 1491.0], [37.0, 1493.0], [37.1, 1497.0], [37.2, 1498.0], [37.3, 1498.0], [37.4, 1503.0], [37.5, 1505.0], [37.6, 1506.0], [37.7, 1508.0], [37.8, 1509.0], [37.9, 1510.0], [38.0, 1514.0], [38.1, 1517.0], [38.2, 1519.0], [38.3, 1520.0], [38.4, 1522.0], [38.5, 1523.0], [38.6, 1524.0], [38.7, 1531.0], [38.8, 1534.0], [38.9, 1536.0], [39.0, 1536.0], [39.1, 1537.0], [39.2, 1540.0], [39.3, 1543.0], [39.4, 1546.0], [39.5, 1547.0], [39.6, 1548.0], [39.7, 1549.0], [39.8, 1551.0], [39.9, 1552.0], [40.0, 1555.0], [40.1, 1557.0], [40.2, 1560.0], [40.3, 1560.0], [40.4, 1562.0], [40.5, 1563.0], [40.6, 1563.0], [40.7, 1566.0], [40.8, 1567.0], [40.9, 1568.0], [41.0, 1573.0], [41.1, 1574.0], [41.2, 1574.0], [41.3, 1575.0], [41.4, 1578.0], [41.5, 1578.0], [41.6, 1580.0], [41.7, 1581.0], [41.8, 1581.0], [41.9, 1583.0], [42.0, 1583.0], [42.1, 1586.0], [42.2, 1586.0], [42.3, 1588.0], [42.4, 1589.0], [42.5, 1590.0], [42.6, 1592.0], [42.7, 1592.0], [42.8, 1596.0], [42.9, 1596.0], [43.0, 1599.0], [43.1, 1601.0], [43.2, 1602.0], [43.3, 1604.0], [43.4, 1605.0], [43.5, 1605.0], [43.6, 1606.0], [43.7, 1608.0], [43.8, 1609.0], [43.9, 1611.0], [44.0, 1613.0], [44.1, 1613.0], [44.2, 1616.0], [44.3, 1621.0], [44.4, 1622.0], [44.5, 1623.0], [44.6, 1623.0], [44.7, 1625.0], [44.8, 1626.0], [44.9, 1628.0], [45.0, 1630.0], [45.1, 1632.0], [45.2, 1635.0], [45.3, 1637.0], [45.4, 1641.0], [45.5, 1643.0], [45.6, 1647.0], [45.7, 1651.0], [45.8, 1652.0], [45.9, 1653.0], [46.0, 1654.0], [46.1, 1655.0], [46.2, 1657.0], [46.3, 1660.0], [46.4, 1662.0], [46.5, 1663.0], [46.6, 1664.0], [46.7, 1667.0], [46.8, 1669.0], [46.9, 1673.0], [47.0, 1674.0], [47.1, 1676.0], [47.2, 1677.0], [47.3, 1680.0], [47.4, 1681.0], [47.5, 1684.0], [47.6, 1685.0], [47.7, 1689.0], [47.8, 1691.0], [47.9, 1695.0], [48.0, 1696.0], [48.1, 1704.0], [48.2, 1706.0], [48.3, 1707.0], [48.4, 1708.0], [48.5, 1712.0], [48.6, 1714.0], [48.7, 1720.0], [48.8, 1720.0], [48.9, 1721.0], [49.0, 1725.0], [49.1, 1727.0], [49.2, 1730.0], [49.3, 1731.0], [49.4, 1732.0], [49.5, 1733.0], [49.6, 1735.0], [49.7, 1736.0], [49.8, 1736.0], [49.9, 1738.0], [50.0, 1740.0], [50.1, 1741.0], [50.2, 1744.0], [50.3, 1745.0], [50.4, 1746.0], [50.5, 1747.0], [50.6, 1747.0], [50.7, 1749.0], [50.8, 1750.0], [50.9, 1753.0], [51.0, 1757.0], [51.1, 1758.0], [51.2, 1759.0], [51.3, 1761.0], [51.4, 1761.0], [51.5, 1763.0], [51.6, 1764.0], [51.7, 1766.0], [51.8, 1767.0], [51.9, 1768.0], [52.0, 1769.0], [52.1, 1770.0], [52.2, 1778.0], [52.3, 1779.0], [52.4, 1779.0], [52.5, 1781.0], [52.6, 1783.0], [52.7, 1785.0], [52.8, 1789.0], [52.9, 1791.0], [53.0, 1792.0], [53.1, 1793.0], [53.2, 1794.0], [53.3, 1795.0], [53.4, 1796.0], [53.5, 1799.0], [53.6, 1800.0], [53.7, 1800.0], [53.8, 1802.0], [53.9, 1802.0], [54.0, 1806.0], [54.1, 1812.0], [54.2, 1814.0], [54.3, 1816.0], [54.4, 1822.0], [54.5, 1822.0], [54.6, 1824.0], [54.7, 1825.0], [54.8, 1829.0], [54.9, 1832.0], [55.0, 1834.0], [55.1, 1834.0], [55.2, 1837.0], [55.3, 1839.0], [55.4, 1839.0], [55.5, 1844.0], [55.6, 1844.0], [55.7, 1846.0], [55.8, 1848.0], [55.9, 1850.0], [56.0, 1850.0], [56.1, 1852.0], [56.2, 1859.0], [56.3, 1860.0], [56.4, 1863.0], [56.5, 1864.0], [56.6, 1865.0], [56.7, 1870.0], [56.8, 1871.0], [56.9, 1871.0], [57.0, 1872.0], [57.1, 1878.0], [57.2, 1879.0], [57.3, 1881.0], [57.4, 1882.0], [57.5, 1883.0], [57.6, 1886.0], [57.7, 1887.0], [57.8, 1888.0], [57.9, 1890.0], [58.0, 1890.0], [58.1, 1890.0], [58.2, 1894.0], [58.3, 1894.0], [58.4, 1898.0], [58.5, 1901.0], [58.6, 1903.0], [58.7, 1908.0], [58.8, 1908.0], [58.9, 1909.0], [59.0, 1911.0], [59.1, 1914.0], [59.2, 1914.0], [59.3, 1916.0], [59.4, 1917.0], [59.5, 1917.0], [59.6, 1918.0], [59.7, 1920.0], [59.8, 1921.0], [59.9, 1925.0], [60.0, 1930.0], [60.1, 1931.0], [60.2, 1932.0], [60.3, 1933.0], [60.4, 1934.0], [60.5, 1935.0], [60.6, 1938.0], [60.7, 1939.0], [60.8, 1939.0], [60.9, 1941.0], [61.0, 1942.0], [61.1, 1945.0], [61.2, 1946.0], [61.3, 1946.0], [61.4, 1947.0], [61.5, 1950.0], [61.6, 1951.0], [61.7, 1953.0], [61.8, 1954.0], [61.9, 1956.0], [62.0, 1957.0], [62.1, 1957.0], [62.2, 1958.0], [62.3, 1967.0], [62.4, 1972.0], [62.5, 1972.0], [62.6, 1975.0], [62.7, 1978.0], [62.8, 1981.0], [62.9, 1982.0], [63.0, 1985.0], [63.1, 1987.0], [63.2, 1989.0], [63.3, 1993.0], [63.4, 1993.0], [63.5, 1995.0], [63.6, 1998.0], [63.7, 1998.0], [63.8, 1999.0], [63.9, 2002.0], [64.0, 2002.0], [64.1, 2004.0], [64.2, 2005.0], [64.3, 2008.0], [64.4, 2009.0], [64.5, 2010.0], [64.6, 2012.0], [64.7, 2015.0], [64.8, 2015.0], [64.9, 2017.0], [65.0, 2018.0], [65.1, 2020.0], [65.2, 2022.0], [65.3, 2024.0], [65.4, 2026.0], [65.5, 2027.0], [65.6, 2028.0], [65.7, 2032.0], [65.8, 2034.0], [65.9, 2034.0], [66.0, 2038.0], [66.1, 2039.0], [66.2, 2042.0], [66.3, 2043.0], [66.4, 2044.0], [66.5, 2048.0], [66.6, 2050.0], [66.7, 2051.0], [66.8, 2055.0], [66.9, 2056.0], [67.0, 2059.0], [67.1, 2061.0], [67.2, 2064.0], [67.3, 2068.0], [67.4, 2074.0], [67.5, 2075.0], [67.6, 2077.0], [67.7, 2078.0], [67.8, 2079.0], [67.9, 2081.0], [68.0, 2083.0], [68.1, 2084.0], [68.2, 2087.0], [68.3, 2090.0], [68.4, 2091.0], [68.5, 2092.0], [68.6, 2097.0], [68.7, 2098.0], [68.8, 2099.0], [68.9, 2103.0], [69.0, 2103.0], [69.1, 2107.0], [69.2, 2111.0], [69.3, 2111.0], [69.4, 2112.0], [69.5, 2114.0], [69.6, 2116.0], [69.7, 2121.0], [69.8, 2123.0], [69.9, 2124.0], [70.0, 2125.0], [70.1, 2128.0], [70.2, 2130.0], [70.3, 2132.0], [70.4, 2134.0], [70.5, 2134.0], [70.6, 2137.0], [70.7, 2139.0], [70.8, 2139.0], [70.9, 2140.0], [71.0, 2145.0], [71.1, 2146.0], [71.2, 2147.0], [71.3, 2152.0], [71.4, 2152.0], [71.5, 2154.0], [71.6, 2155.0], [71.7, 2158.0], [71.8, 2162.0], [71.9, 2162.0], [72.0, 2164.0], [72.1, 2165.0], [72.2, 2166.0], [72.3, 2168.0], [72.4, 2169.0], [72.5, 2170.0], [72.6, 2172.0], [72.7, 2174.0], [72.8, 2175.0], [72.9, 2177.0], [73.0, 2179.0], [73.1, 2180.0], [73.2, 2181.0], [73.3, 2183.0], [73.4, 2184.0], [73.5, 2184.0], [73.6, 2186.0], [73.7, 2186.0], [73.8, 2187.0], [73.9, 2191.0], [74.0, 2193.0], [74.1, 2195.0], [74.2, 2196.0], [74.3, 2196.0], [74.4, 2201.0], [74.5, 2205.0], [74.6, 2206.0], [74.7, 2207.0], [74.8, 2208.0], [74.9, 2210.0], [75.0, 2211.0], [75.1, 2215.0], [75.2, 2217.0], [75.3, 2220.0], [75.4, 2221.0], [75.5, 2222.0], [75.6, 2226.0], [75.7, 2226.0], [75.8, 2226.0], [75.9, 2228.0], [76.0, 2230.0], [76.1, 2233.0], [76.2, 2234.0], [76.3, 2238.0], [76.4, 2239.0], [76.5, 2241.0], [76.6, 2244.0], [76.7, 2244.0], [76.8, 2247.0], [76.9, 2254.0], [77.0, 2255.0], [77.1, 2255.0], [77.2, 2260.0], [77.3, 2260.0], [77.4, 2265.0], [77.5, 2266.0], [77.6, 2267.0], [77.7, 2268.0], [77.8, 2272.0], [77.9, 2272.0], [78.0, 2273.0], [78.1, 2277.0], [78.2, 2278.0], [78.3, 2279.0], [78.4, 2285.0], [78.5, 2286.0], [78.6, 2293.0], [78.7, 2296.0], [78.8, 2300.0], [78.9, 2305.0], [79.0, 2306.0], [79.1, 2307.0], [79.2, 2309.0], [79.3, 2310.0], [79.4, 2314.0], [79.5, 2318.0], [79.6, 2318.0], [79.7, 2323.0], [79.8, 2328.0], [79.9, 2329.0], [80.0, 2335.0], [80.1, 2339.0], [80.2, 2341.0], [80.3, 2342.0], [80.4, 2345.0], [80.5, 2346.0], [80.6, 2349.0], [80.7, 2356.0], [80.8, 2357.0], [80.9, 2364.0], [81.0, 2366.0], [81.1, 2368.0], [81.2, 2372.0], [81.3, 2377.0], [81.4, 2378.0], [81.5, 2390.0], [81.6, 2395.0], [81.7, 2395.0], [81.8, 2399.0], [81.9, 2404.0], [82.0, 2406.0], [82.1, 2407.0], [82.2, 2410.0], [82.3, 2410.0], [82.4, 2416.0], [82.5, 2424.0], [82.6, 2425.0], [82.7, 2428.0], [82.8, 2430.0], [82.9, 2437.0], [83.0, 2443.0], [83.1, 2446.0], [83.2, 2447.0], [83.3, 2451.0], [83.4, 2460.0], [83.5, 2460.0], [83.6, 2464.0], [83.7, 2471.0], [83.8, 2475.0], [83.9, 2484.0], [84.0, 2489.0], [84.1, 2491.0], [84.2, 2495.0], [84.3, 2501.0], [84.4, 2503.0], [84.5, 2510.0], [84.6, 2515.0], [84.7, 2515.0], [84.8, 2515.0], [84.9, 2522.0], [85.0, 2524.0], [85.1, 2530.0], [85.2, 2533.0], [85.3, 2534.0], [85.4, 2538.0], [85.5, 2547.0], [85.6, 2551.0], [85.7, 2555.0], [85.8, 2556.0], [85.9, 2562.0], [86.0, 2568.0], [86.1, 2570.0], [86.2, 2571.0], [86.3, 2575.0], [86.4, 2575.0], [86.5, 2586.0], [86.6, 2595.0], [86.7, 2598.0], [86.8, 2600.0], [86.9, 2605.0], [87.0, 2605.0], [87.1, 2612.0], [87.2, 2613.0], [87.3, 2617.0], [87.4, 2622.0], [87.5, 2630.0], [87.6, 2631.0], [87.7, 2637.0], [87.8, 2641.0], [87.9, 2642.0], [88.0, 2645.0], [88.1, 2648.0], [88.2, 2651.0], [88.3, 2656.0], [88.4, 2664.0], [88.5, 2670.0], [88.6, 2674.0], [88.7, 2678.0], [88.8, 2681.0], [88.9, 2685.0], [89.0, 2691.0], [89.1, 2692.0], [89.2, 2694.0], [89.3, 2705.0], [89.4, 2712.0], [89.5, 2724.0], [89.6, 2742.0], [89.7, 2752.0], [89.8, 2761.0], [89.9, 2766.0], [90.0, 2768.0], [90.1, 2774.0], [90.2, 2784.0], [90.3, 2794.0], [90.4, 2804.0], [90.5, 2809.0], [90.6, 2810.0], [90.7, 2829.0], [90.8, 2836.0], [90.9, 2840.0], [91.0, 2845.0], [91.1, 2855.0], [91.2, 2882.0], [91.3, 2900.0], [91.4, 2909.0], [91.5, 2914.0], [91.6, 2935.0], [91.7, 2947.0], [91.8, 2952.0], [91.9, 2969.0], [92.0, 2971.0], [92.1, 2978.0], [92.2, 2992.0], [92.3, 2999.0], [92.4, 3000.0], [92.5, 3007.0], [92.6, 3044.0], [92.7, 3052.0], [92.8, 3084.0], [92.9, 3098.0], [93.0, 3112.0], [93.1, 3123.0], [93.2, 3125.0], [93.3, 3133.0], [93.4, 3150.0], [93.5, 3160.0], [93.6, 3169.0], [93.7, 3185.0], [93.8, 3226.0], [93.9, 3271.0], [94.0, 3286.0], [94.1, 3292.0], [94.2, 3309.0], [94.3, 3335.0], [94.4, 3353.0], [94.5, 3427.0], [94.6, 3491.0], [94.7, 3549.0], [94.8, 3576.0], [94.9, 3596.0], [95.0, 3608.0], [95.1, 3744.0], [95.2, 3766.0], [95.3, 3772.0], [95.4, 3815.0], [95.5, 4013.0], [95.6, 4020.0], [95.7, 4071.0], [95.8, 4125.0], [95.9, 4127.0], [96.0, 4185.0], [96.1, 4209.0], [96.2, 4286.0], [96.3, 4366.0], [96.4, 4377.0], [96.5, 4381.0], [96.6, 4436.0], [96.7, 4444.0], [96.8, 4475.0], [96.9, 4563.0], [97.0, 4625.0], [97.1, 4663.0], [97.2, 4791.0], [97.3, 4956.0], [97.4, 4979.0], [97.5, 5010.0], [97.6, 5062.0], [97.7, 5070.0], [97.8, 5175.0], [97.9, 5263.0], [98.0, 5301.0], [98.1, 5912.0], [98.2, 6167.0], [98.3, 6303.0], [98.4, 6974.0], [98.5, 9283.0], [98.6, 9366.0], [98.7, 14477.0], [98.8, 22008.0], [98.9, 22024.0], [99.0, 22548.0], [99.1, 22620.0], [99.2, 22705.0], [99.3, 22888.0], [99.4, 22924.0], [99.5, 22942.0], [99.6, 23073.0], [99.7, 23303.0], [99.8, 23405.0], [99.9, 24769.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 96.0, "series": [{"data": [[600.0, 30.0], [700.0, 40.0], [800.0, 61.0], [900.0, 76.0], [1000.0, 58.0], [1100.0, 59.0], [1200.0, 67.0], [1300.0, 87.0], [1400.0, 72.0], [1500.0, 96.0], [1600.0, 82.0], [1700.0, 92.0], [1800.0, 82.0], [1900.0, 89.0], [2000.0, 84.0], [2100.0, 91.0], [2200.0, 73.0], [2300.0, 51.0], [2400.0, 40.0], [2500.0, 42.0], [2600.0, 42.0], [2800.0, 16.0], [2700.0, 17.0], [2900.0, 18.0], [3000.0, 9.0], [3100.0, 14.0], [3200.0, 7.0], [3300.0, 5.0], [3400.0, 3.0], [3500.0, 5.0], [3700.0, 5.0], [3600.0, 2.0], [3800.0, 2.0], [4000.0, 4.0], [4200.0, 2.0], [4300.0, 6.0], [4100.0, 6.0], [4600.0, 3.0], [4400.0, 5.0], [4500.0, 1.0], [4700.0, 2.0], [4800.0, 1.0], [4900.0, 2.0], [5000.0, 5.0], [5100.0, 2.0], [5300.0, 1.0], [5200.0, 2.0], [5400.0, 1.0], [6000.0, 1.0], [5900.0, 1.0], [6100.0, 1.0], [6300.0, 1.0], [6400.0, 1.0], [6900.0, 1.0], [8400.0, 1.0], [9200.0, 1.0], [9300.0, 1.0], [9800.0, 1.0], [14400.0, 1.0], [22500.0, 1.0], [22200.0, 1.0], [21900.0, 1.0], [22000.0, 2.0], [22700.0, 2.0], [22800.0, 2.0], [23100.0, 1.0], [22600.0, 2.0], [22900.0, 3.0], [23400.0, 1.0], [23000.0, 1.0], [23300.0, 1.0], [24000.0, 1.0], [24700.0, 1.0], [26400.0, 1.0], [200.0, 24.0], [300.0, 4.0], [400.0, 17.0], [500.0, 25.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 26400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 28.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1542.0, "series": [{"data": [[0.0, 28.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 51.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 41.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1542.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.76895828E12, "maxY": 20.0, "series": [{"data": [[1.76895834E12, 16.521153846153844], [1.76895852E12, 2.0], [1.7689584E12, 20.0], [1.76895846E12, 19.732142857142858], [1.76895828E12, 4.787234042553192]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895852E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 763.8888888888888, "minX": 1.0, "maxY": 3171.625, "series": [{"data": [[2.0, 1392.1], [8.0, 965.8000000000001], [9.0, 1004.5555555555553], [10.0, 1148.0], [11.0, 1233.125], [3.0, 1909.5625], [12.0, 1355.6896551724135], [13.0, 1488.8571428571427], [14.0, 1815.681818181818], [15.0, 1750.3749999999998], [1.0, 3171.625], [4.0, 1550.7272727272727], [16.0, 1691.5862068965516], [17.0, 1840.0740740740744], [18.0, 2047.8999999999999], [19.0, 2400.068965517242], [5.0, 1614.375], [20.0, 2291.4435284418814], [6.0, 985.6315789473686], [7.0, 763.8888888888888]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}, {"data": [[17.507220216606505, 2084.4434416365843]], "isOverall": false, "label": "/api/learner/educational-attainment-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 12.8, "minX": 1.76895828E12, "maxY": 5009689.633333334, "series": [{"data": [[1.76895834E12, 5009689.633333334], [1.76895852E12, 30665.05], [1.7689584E12, 4743943.4], [1.76895846E12, 4846078.983333333], [1.76895828E12, 1135307.6166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76895834E12, 2218.6666666666665], [1.76895852E12, 12.8], [1.7689584E12, 2107.733333333333], [1.76895846E12, 2150.4], [1.76895828E12, 601.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895852E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 659.8936170212767, "minX": 1.76895828E12, "maxY": 22217.333333333332, "series": [{"data": [[1.76895834E12, 1843.599999999999], [1.76895852E12, 22217.333333333332], [1.7689584E12, 2375.475708502025], [1.76895846E12, 2326.3710317460313], [1.76895828E12, 659.8936170212767]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895852E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 400.39007092198574, "minX": 1.76895828E12, "maxY": 21424.0, "series": [{"data": [[1.76895834E12, 1345.6153846153857], [1.76895852E12, 21424.0], [1.7689584E12, 1685.1619433198389], [1.76895846E12, 1652.4464285714296], [1.76895828E12, 400.39007092198574]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895852E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.701923076923076, "minX": 1.76895828E12, "maxY": 21108.0, "series": [{"data": [[1.76895834E12, 4.701923076923076], [1.76895852E12, 21108.0], [1.7689584E12, 6.526315789473677], [1.76895846E12, 756.1924603174608], [1.76895828E12, 13.709219858156022]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895852E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 226.0, "minX": 1.76895828E12, "maxY": 22222.0, "series": [{"data": [[1.76895834E12, 4979.0], [1.7689584E12, 4475.0], [1.76895846E12, 22222.0], [1.76895828E12, 1329.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76895834E12, 3918.7000000000044], [1.7689584E12, 1790.8], [1.76895846E12, 2756.9000000000033], [1.76895828E12, 392.20000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76895834E12, 4979.0], [1.7689584E12, 4475.0], [1.76895846E12, 22222.0], [1.76895828E12, 1329.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76895834E12, 4625.9], [1.7689584E12, 3968.4499999999994], [1.76895846E12, 11719.199999999986], [1.76895828E12, 1231.6499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76895834E12, 564.0], [1.7689584E12, 1285.0], [1.76895846E12, 664.0], [1.76895828E12, 226.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76895834E12, 1604.0], [1.7689584E12, 1548.0], [1.76895846E12, 1057.0], [1.76895828E12, 238.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895846E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 235.5, "minX": 1.0, "maxY": 22024.0, "series": [{"data": [[8.0, 235.5], [2.0, 3126.0], [9.0, 1115.0], [10.0, 1537.0], [11.0, 2909.0], [3.0, 951.0], [12.0, 1441.0], [13.0, 800.0], [14.0, 1367.0], [15.0, 1664.0], [1.0, 1329.0], [4.0, 236.0], [19.0, 1411.0], [5.0, 239.0], [6.0, 247.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1763.5], [2.0, 2138.0], [9.0, 1894.0], [10.0, 1793.0], [11.0, 1998.0], [3.0, 1716.0], [12.0, 1744.5], [13.0, 1738.0], [14.0, 1998.5], [15.0, 2300.0], [4.0, 1650.0], [16.0, 2625.5], [1.0, 22024.0], [17.0, 2475.0], [19.0, 2213.5], [5.0, 1616.0], [6.0, 1459.5], [7.0, 1590.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 235.0, "minX": 1.0, "maxY": 21427.0, "series": [{"data": [[8.0, 235.0], [2.0, 3126.0], [9.0, 1115.0], [10.0, 1537.0], [11.0, 2909.0], [3.0, 951.0], [12.0, 1441.0], [13.0, 800.0], [14.0, 1367.0], [15.0, 1664.0], [1.0, 1325.0], [4.0, 236.0], [19.0, 1411.0], [5.0, 239.0], [6.0, 247.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 1123.0], [2.0, 1382.0], [9.0, 1335.0], [10.0, 1121.0], [11.0, 1489.0], [3.0, 1205.5], [12.0, 986.0], [13.0, 1073.0], [14.0, 1266.5], [15.0, 1707.0], [4.0, 1026.0], [16.0, 1690.0], [1.0, 21427.0], [17.0, 1492.0], [19.0, 1621.0], [5.0, 1091.5], [6.0, 985.5], [7.0, 1082.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.76895828E12, "maxY": 8.866666666666667, "series": [{"data": [[1.76895834E12, 8.866666666666667], [1.7689584E12, 8.233333333333333], [1.76895846E12, 8.116666666666667], [1.76895828E12, 2.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895846E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76895828E12, "maxY": 8.166666666666666, "series": [{"data": [[1.76895834E12, 0.5], [1.7689584E12, 0.5], [1.76895846E12, 0.5], [1.76895828E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76895834E12, 8.166666666666666], [1.76895852E12, 0.05], [1.7689584E12, 7.733333333333333], [1.76895846E12, 7.9], [1.76895828E12, 1.85]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76895852E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76895828E12, "maxY": 8.166666666666666, "series": [{"data": [[1.76895834E12, 0.5], [1.7689584E12, 0.5], [1.76895846E12, 0.5], [1.76895828E12, 0.5]], "isOverall": false, "label": "/api/learner/educational-attainment-success", "isController": false}, {"data": [[1.76895834E12, 8.166666666666666], [1.76895852E12, 0.05], [1.7689584E12, 7.733333333333333], [1.76895846E12, 7.9], [1.76895828E12, 1.85]], "isOverall": false, "label": "/api/learner/educational-attainment-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895852E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.76895828E12, "maxY": 8.166666666666666, "series": [{"data": [[1.76895834E12, 0.5], [1.7689584E12, 0.5], [1.76895846E12, 0.5], [1.76895828E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76895834E12, 8.166666666666666], [1.76895852E12, 0.05], [1.7689584E12, 7.733333333333333], [1.76895846E12, 7.9], [1.76895828E12, 1.85]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76895852E12, "title": "Total Transactions Per Second"}},
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

