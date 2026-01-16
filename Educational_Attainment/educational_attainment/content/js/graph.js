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
        data: {"result": {"minY": 230.0, "minX": 0.0, "maxY": 28084.0, "series": [{"data": [[0.0, 230.0], [0.1, 231.0], [0.2, 233.0], [0.3, 234.0], [0.4, 237.0], [0.5, 240.0], [0.6, 241.0], [0.7, 253.0], [0.8, 262.0], [0.9, 264.0], [1.0, 267.0], [1.1, 275.0], [1.2, 284.0], [1.3, 287.0], [1.4, 291.0], [1.5, 403.0], [1.6, 405.0], [1.7, 437.0], [1.8, 466.0], [1.9, 494.0], [2.0, 502.0], [2.1, 522.0], [2.2, 541.0], [2.3, 558.0], [2.4, 561.0], [2.5, 566.0], [2.6, 568.0], [2.7, 584.0], [2.8, 585.0], [2.9, 597.0], [3.0, 597.0], [3.1, 606.0], [3.2, 608.0], [3.3, 616.0], [3.4, 619.0], [3.5, 624.0], [3.6, 625.0], [3.7, 633.0], [3.8, 638.0], [3.9, 649.0], [4.0, 651.0], [4.1, 658.0], [4.2, 663.0], [4.3, 667.0], [4.4, 668.0], [4.5, 679.0], [4.6, 681.0], [4.7, 682.0], [4.8, 683.0], [4.9, 695.0], [5.0, 696.0], [5.1, 698.0], [5.2, 699.0], [5.3, 702.0], [5.4, 702.0], [5.5, 715.0], [5.6, 716.0], [5.7, 718.0], [5.8, 718.0], [5.9, 721.0], [6.0, 724.0], [6.1, 725.0], [6.2, 727.0], [6.3, 734.0], [6.4, 735.0], [6.5, 747.0], [6.6, 748.0], [6.7, 754.0], [6.8, 756.0], [6.9, 758.0], [7.0, 761.0], [7.1, 769.0], [7.2, 770.0], [7.3, 778.0], [7.4, 778.0], [7.5, 784.0], [7.6, 785.0], [7.7, 787.0], [7.8, 791.0], [7.9, 791.0], [8.0, 792.0], [8.1, 798.0], [8.2, 804.0], [8.3, 812.0], [8.4, 813.0], [8.5, 815.0], [8.6, 815.0], [8.7, 820.0], [8.8, 821.0], [8.9, 824.0], [9.0, 831.0], [9.1, 844.0], [9.2, 846.0], [9.3, 848.0], [9.4, 849.0], [9.5, 852.0], [9.6, 853.0], [9.7, 855.0], [9.8, 855.0], [9.9, 856.0], [10.0, 857.0], [10.1, 862.0], [10.2, 864.0], [10.3, 870.0], [10.4, 874.0], [10.5, 875.0], [10.6, 875.0], [10.7, 878.0], [10.8, 879.0], [10.9, 882.0], [11.0, 885.0], [11.1, 886.0], [11.2, 886.0], [11.3, 890.0], [11.4, 894.0], [11.5, 895.0], [11.6, 896.0], [11.7, 901.0], [11.8, 902.0], [11.9, 906.0], [12.0, 906.0], [12.1, 912.0], [12.2, 912.0], [12.3, 914.0], [12.4, 914.0], [12.5, 922.0], [12.6, 924.0], [12.7, 929.0], [12.8, 930.0], [12.9, 934.0], [13.0, 935.0], [13.1, 936.0], [13.2, 936.0], [13.3, 938.0], [13.4, 939.0], [13.5, 946.0], [13.6, 950.0], [13.7, 954.0], [13.8, 959.0], [13.9, 961.0], [14.0, 961.0], [14.1, 964.0], [14.2, 966.0], [14.3, 969.0], [14.4, 971.0], [14.5, 974.0], [14.6, 977.0], [14.7, 982.0], [14.8, 982.0], [14.9, 984.0], [15.0, 984.0], [15.1, 988.0], [15.2, 988.0], [15.3, 990.0], [15.4, 991.0], [15.5, 992.0], [15.6, 993.0], [15.7, 994.0], [15.8, 994.0], [15.9, 997.0], [16.0, 997.0], [16.1, 1000.0], [16.2, 1000.0], [16.3, 1002.0], [16.4, 1003.0], [16.5, 1006.0], [16.6, 1007.0], [16.7, 1011.0], [16.8, 1011.0], [16.9, 1014.0], [17.0, 1015.0], [17.1, 1016.0], [17.2, 1016.0], [17.3, 1026.0], [17.4, 1027.0], [17.5, 1028.0], [17.6, 1028.0], [17.7, 1028.0], [17.8, 1029.0], [17.9, 1030.0], [18.0, 1031.0], [18.1, 1031.0], [18.2, 1036.0], [18.3, 1039.0], [18.4, 1040.0], [18.5, 1042.0], [18.6, 1043.0], [18.7, 1043.0], [18.8, 1043.0], [18.9, 1044.0], [19.0, 1046.0], [19.1, 1046.0], [19.2, 1047.0], [19.3, 1048.0], [19.4, 1048.0], [19.5, 1052.0], [19.6, 1054.0], [19.7, 1054.0], [19.8, 1056.0], [19.9, 1058.0], [20.0, 1058.0], [20.1, 1061.0], [20.2, 1061.0], [20.3, 1063.0], [20.4, 1064.0], [20.5, 1064.0], [20.6, 1065.0], [20.7, 1066.0], [20.8, 1066.0], [20.9, 1067.0], [21.0, 1068.0], [21.1, 1070.0], [21.2, 1070.0], [21.3, 1073.0], [21.4, 1078.0], [21.5, 1079.0], [21.6, 1080.0], [21.7, 1081.0], [21.8, 1083.0], [21.9, 1084.0], [22.0, 1086.0], [22.1, 1089.0], [22.2, 1089.0], [22.3, 1090.0], [22.4, 1091.0], [22.5, 1092.0], [22.6, 1098.0], [22.7, 1100.0], [22.8, 1101.0], [22.9, 1103.0], [23.0, 1105.0], [23.1, 1114.0], [23.2, 1114.0], [23.3, 1121.0], [23.4, 1121.0], [23.5, 1123.0], [23.6, 1125.0], [23.7, 1127.0], [23.8, 1128.0], [23.9, 1129.0], [24.0, 1129.0], [24.1, 1134.0], [24.2, 1134.0], [24.3, 1135.0], [24.4, 1135.0], [24.5, 1137.0], [24.6, 1139.0], [24.7, 1142.0], [24.8, 1144.0], [24.9, 1145.0], [25.0, 1146.0], [25.1, 1146.0], [25.2, 1146.0], [25.3, 1147.0], [25.4, 1151.0], [25.5, 1152.0], [25.6, 1153.0], [25.7, 1154.0], [25.8, 1155.0], [25.9, 1157.0], [26.0, 1160.0], [26.1, 1161.0], [26.2, 1161.0], [26.3, 1161.0], [26.4, 1162.0], [26.5, 1164.0], [26.6, 1166.0], [26.7, 1166.0], [26.8, 1170.0], [26.9, 1170.0], [27.0, 1170.0], [27.1, 1176.0], [27.2, 1177.0], [27.3, 1179.0], [27.4, 1181.0], [27.5, 1181.0], [27.6, 1183.0], [27.7, 1183.0], [27.8, 1185.0], [27.9, 1188.0], [28.0, 1192.0], [28.1, 1192.0], [28.2, 1193.0], [28.3, 1196.0], [28.4, 1198.0], [28.5, 1198.0], [28.6, 1201.0], [28.7, 1202.0], [28.8, 1204.0], [28.9, 1205.0], [29.0, 1206.0], [29.1, 1207.0], [29.2, 1208.0], [29.3, 1209.0], [29.4, 1212.0], [29.5, 1214.0], [29.6, 1215.0], [29.7, 1216.0], [29.8, 1219.0], [29.9, 1219.0], [30.0, 1222.0], [30.1, 1224.0], [30.2, 1229.0], [30.3, 1229.0], [30.4, 1230.0], [30.5, 1230.0], [30.6, 1231.0], [30.7, 1231.0], [30.8, 1232.0], [30.9, 1233.0], [31.0, 1234.0], [31.1, 1235.0], [31.2, 1236.0], [31.3, 1237.0], [31.4, 1241.0], [31.5, 1241.0], [31.6, 1244.0], [31.7, 1244.0], [31.8, 1245.0], [31.9, 1245.0], [32.0, 1246.0], [32.1, 1248.0], [32.2, 1249.0], [32.3, 1251.0], [32.4, 1252.0], [32.5, 1252.0], [32.6, 1253.0], [32.7, 1254.0], [32.8, 1254.0], [32.9, 1254.0], [33.0, 1258.0], [33.1, 1259.0], [33.2, 1264.0], [33.3, 1265.0], [33.4, 1266.0], [33.5, 1266.0], [33.6, 1271.0], [33.7, 1271.0], [33.8, 1274.0], [33.9, 1274.0], [34.0, 1276.0], [34.1, 1276.0], [34.2, 1280.0], [34.3, 1283.0], [34.4, 1288.0], [34.5, 1289.0], [34.6, 1290.0], [34.7, 1292.0], [34.8, 1294.0], [34.9, 1295.0], [35.0, 1298.0], [35.1, 1298.0], [35.2, 1300.0], [35.3, 1300.0], [35.4, 1301.0], [35.5, 1303.0], [35.6, 1304.0], [35.7, 1307.0], [35.8, 1309.0], [35.9, 1310.0], [36.0, 1310.0], [36.1, 1311.0], [36.2, 1315.0], [36.3, 1315.0], [36.4, 1318.0], [36.5, 1319.0], [36.6, 1321.0], [36.7, 1322.0], [36.8, 1322.0], [36.9, 1323.0], [37.0, 1326.0], [37.1, 1327.0], [37.2, 1330.0], [37.3, 1330.0], [37.4, 1332.0], [37.5, 1334.0], [37.6, 1339.0], [37.7, 1339.0], [37.8, 1339.0], [37.9, 1340.0], [38.0, 1343.0], [38.1, 1343.0], [38.2, 1351.0], [38.3, 1352.0], [38.4, 1353.0], [38.5, 1358.0], [38.6, 1360.0], [38.7, 1361.0], [38.8, 1362.0], [38.9, 1363.0], [39.0, 1365.0], [39.1, 1365.0], [39.2, 1368.0], [39.3, 1368.0], [39.4, 1369.0], [39.5, 1370.0], [39.6, 1373.0], [39.7, 1373.0], [39.8, 1374.0], [39.9, 1375.0], [40.0, 1375.0], [40.1, 1376.0], [40.2, 1378.0], [40.3, 1379.0], [40.4, 1383.0], [40.5, 1386.0], [40.6, 1390.0], [40.7, 1392.0], [40.8, 1394.0], [40.9, 1394.0], [41.0, 1396.0], [41.1, 1397.0], [41.2, 1398.0], [41.3, 1400.0], [41.4, 1401.0], [41.5, 1402.0], [41.6, 1410.0], [41.7, 1411.0], [41.8, 1415.0], [41.9, 1415.0], [42.0, 1418.0], [42.1, 1420.0], [42.2, 1421.0], [42.3, 1422.0], [42.4, 1425.0], [42.5, 1425.0], [42.6, 1426.0], [42.7, 1427.0], [42.8, 1428.0], [42.9, 1430.0], [43.0, 1431.0], [43.1, 1432.0], [43.2, 1435.0], [43.3, 1435.0], [43.4, 1436.0], [43.5, 1436.0], [43.6, 1437.0], [43.7, 1443.0], [43.8, 1444.0], [43.9, 1445.0], [44.0, 1446.0], [44.1, 1446.0], [44.2, 1446.0], [44.3, 1447.0], [44.4, 1449.0], [44.5, 1449.0], [44.6, 1450.0], [44.7, 1451.0], [44.8, 1453.0], [44.9, 1454.0], [45.0, 1455.0], [45.1, 1455.0], [45.2, 1456.0], [45.3, 1459.0], [45.4, 1461.0], [45.5, 1461.0], [45.6, 1463.0], [45.7, 1464.0], [45.8, 1467.0], [45.9, 1467.0], [46.0, 1469.0], [46.1, 1469.0], [46.2, 1474.0], [46.3, 1475.0], [46.4, 1477.0], [46.5, 1478.0], [46.6, 1479.0], [46.7, 1480.0], [46.8, 1480.0], [46.9, 1483.0], [47.0, 1484.0], [47.1, 1487.0], [47.2, 1489.0], [47.3, 1489.0], [47.4, 1490.0], [47.5, 1492.0], [47.6, 1492.0], [47.7, 1495.0], [47.8, 1495.0], [47.9, 1497.0], [48.0, 1497.0], [48.1, 1498.0], [48.2, 1499.0], [48.3, 1499.0], [48.4, 1501.0], [48.5, 1501.0], [48.6, 1503.0], [48.7, 1503.0], [48.8, 1503.0], [48.9, 1504.0], [49.0, 1508.0], [49.1, 1510.0], [49.2, 1513.0], [49.3, 1514.0], [49.4, 1515.0], [49.5, 1515.0], [49.6, 1516.0], [49.7, 1518.0], [49.8, 1520.0], [49.9, 1520.0], [50.0, 1521.0], [50.1, 1525.0], [50.2, 1526.0], [50.3, 1527.0], [50.4, 1527.0], [50.5, 1531.0], [50.6, 1533.0], [50.7, 1539.0], [50.8, 1541.0], [50.9, 1542.0], [51.0, 1543.0], [51.1, 1546.0], [51.2, 1547.0], [51.3, 1551.0], [51.4, 1553.0], [51.5, 1553.0], [51.6, 1554.0], [51.7, 1560.0], [51.8, 1561.0], [51.9, 1563.0], [52.0, 1563.0], [52.1, 1565.0], [52.2, 1565.0], [52.3, 1568.0], [52.4, 1569.0], [52.5, 1570.0], [52.6, 1572.0], [52.7, 1572.0], [52.8, 1573.0], [52.9, 1574.0], [53.0, 1574.0], [53.1, 1578.0], [53.2, 1579.0], [53.3, 1583.0], [53.4, 1584.0], [53.5, 1584.0], [53.6, 1584.0], [53.7, 1585.0], [53.8, 1586.0], [53.9, 1588.0], [54.0, 1589.0], [54.1, 1592.0], [54.2, 1593.0], [54.3, 1593.0], [54.4, 1593.0], [54.5, 1596.0], [54.6, 1597.0], [54.7, 1597.0], [54.8, 1597.0], [54.9, 1599.0], [55.0, 1599.0], [55.1, 1601.0], [55.2, 1602.0], [55.3, 1607.0], [55.4, 1608.0], [55.5, 1610.0], [55.6, 1613.0], [55.7, 1614.0], [55.8, 1615.0], [55.9, 1616.0], [56.0, 1616.0], [56.1, 1618.0], [56.2, 1620.0], [56.3, 1623.0], [56.4, 1623.0], [56.5, 1626.0], [56.6, 1626.0], [56.7, 1629.0], [56.8, 1632.0], [56.9, 1636.0], [57.0, 1637.0], [57.1, 1638.0], [57.2, 1639.0], [57.3, 1640.0], [57.4, 1640.0], [57.5, 1643.0], [57.6, 1643.0], [57.7, 1647.0], [57.8, 1647.0], [57.9, 1649.0], [58.0, 1650.0], [58.1, 1654.0], [58.2, 1655.0], [58.3, 1656.0], [58.4, 1657.0], [58.5, 1659.0], [58.6, 1659.0], [58.7, 1659.0], [58.8, 1660.0], [58.9, 1661.0], [59.0, 1661.0], [59.1, 1663.0], [59.2, 1663.0], [59.3, 1664.0], [59.4, 1665.0], [59.5, 1666.0], [59.6, 1666.0], [59.7, 1670.0], [59.8, 1671.0], [59.9, 1678.0], [60.0, 1678.0], [60.1, 1681.0], [60.2, 1682.0], [60.3, 1684.0], [60.4, 1684.0], [60.5, 1689.0], [60.6, 1691.0], [60.7, 1692.0], [60.8, 1693.0], [60.9, 1693.0], [61.0, 1694.0], [61.1, 1695.0], [61.2, 1697.0], [61.3, 1703.0], [61.4, 1706.0], [61.5, 1708.0], [61.6, 1714.0], [61.7, 1716.0], [61.8, 1718.0], [61.9, 1721.0], [62.0, 1724.0], [62.1, 1727.0], [62.2, 1728.0], [62.3, 1733.0], [62.4, 1733.0], [62.5, 1737.0], [62.6, 1737.0], [62.7, 1740.0], [62.8, 1740.0], [62.9, 1741.0], [63.0, 1743.0], [63.1, 1744.0], [63.2, 1745.0], [63.3, 1746.0], [63.4, 1746.0], [63.5, 1748.0], [63.6, 1748.0], [63.7, 1749.0], [63.8, 1752.0], [63.9, 1753.0], [64.0, 1754.0], [64.1, 1754.0], [64.2, 1755.0], [64.3, 1760.0], [64.4, 1762.0], [64.5, 1766.0], [64.6, 1767.0], [64.7, 1771.0], [64.8, 1771.0], [64.9, 1773.0], [65.0, 1776.0], [65.1, 1777.0], [65.2, 1779.0], [65.3, 1781.0], [65.4, 1781.0], [65.5, 1785.0], [65.6, 1785.0], [65.7, 1788.0], [65.8, 1788.0], [65.9, 1788.0], [66.0, 1788.0], [66.1, 1793.0], [66.2, 1795.0], [66.3, 1797.0], [66.4, 1799.0], [66.5, 1802.0], [66.6, 1803.0], [66.7, 1806.0], [66.8, 1806.0], [66.9, 1810.0], [67.0, 1811.0], [67.1, 1816.0], [67.2, 1816.0], [67.3, 1820.0], [67.4, 1820.0], [67.5, 1821.0], [67.6, 1823.0], [67.7, 1825.0], [67.8, 1827.0], [67.9, 1829.0], [68.0, 1829.0], [68.1, 1830.0], [68.2, 1831.0], [68.3, 1832.0], [68.4, 1832.0], [68.5, 1836.0], [68.6, 1837.0], [68.7, 1845.0], [68.8, 1846.0], [68.9, 1846.0], [69.0, 1849.0], [69.1, 1851.0], [69.2, 1851.0], [69.3, 1852.0], [69.4, 1853.0], [69.5, 1854.0], [69.6, 1854.0], [69.7, 1858.0], [69.8, 1859.0], [69.9, 1860.0], [70.0, 1861.0], [70.1, 1863.0], [70.2, 1865.0], [70.3, 1870.0], [70.4, 1870.0], [70.5, 1873.0], [70.6, 1874.0], [70.7, 1876.0], [70.8, 1882.0], [70.9, 1886.0], [71.0, 1887.0], [71.1, 1890.0], [71.2, 1891.0], [71.3, 1896.0], [71.4, 1904.0], [71.5, 1906.0], [71.6, 1910.0], [71.7, 1911.0], [71.8, 1912.0], [71.9, 1914.0], [72.0, 1915.0], [72.1, 1928.0], [72.2, 1928.0], [72.3, 1931.0], [72.4, 1931.0], [72.5, 1935.0], [72.6, 1935.0], [72.7, 1938.0], [72.8, 1938.0], [72.9, 1938.0], [73.0, 1940.0], [73.1, 1941.0], [73.2, 1944.0], [73.3, 1948.0], [73.4, 1950.0], [73.5, 1955.0], [73.6, 1957.0], [73.7, 1958.0], [73.8, 1959.0], [73.9, 1960.0], [74.0, 1966.0], [74.1, 1981.0], [74.2, 1983.0], [74.3, 1986.0], [74.4, 1988.0], [74.5, 1993.0], [74.6, 1995.0], [74.7, 1996.0], [74.8, 1996.0], [74.9, 2000.0], [75.0, 2003.0], [75.1, 2005.0], [75.2, 2009.0], [75.3, 2015.0], [75.4, 2018.0], [75.5, 2020.0], [75.6, 2021.0], [75.7, 2021.0], [75.8, 2025.0], [75.9, 2029.0], [76.0, 2030.0], [76.1, 2034.0], [76.2, 2035.0], [76.3, 2036.0], [76.4, 2043.0], [76.5, 2046.0], [76.6, 2052.0], [76.7, 2058.0], [76.8, 2059.0], [76.9, 2059.0], [77.0, 2062.0], [77.1, 2063.0], [77.2, 2070.0], [77.3, 2070.0], [77.4, 2077.0], [77.5, 2078.0], [77.6, 2082.0], [77.7, 2087.0], [77.8, 2096.0], [77.9, 2096.0], [78.0, 2101.0], [78.1, 2103.0], [78.2, 2104.0], [78.3, 2110.0], [78.4, 2115.0], [78.5, 2120.0], [78.6, 2128.0], [78.7, 2130.0], [78.8, 2133.0], [78.9, 2135.0], [79.0, 2139.0], [79.1, 2139.0], [79.2, 2143.0], [79.3, 2144.0], [79.4, 2150.0], [79.5, 2157.0], [79.6, 2163.0], [79.7, 2170.0], [79.8, 2176.0], [79.9, 2179.0], [80.0, 2180.0], [80.1, 2184.0], [80.2, 2185.0], [80.3, 2187.0], [80.4, 2200.0], [80.5, 2203.0], [80.6, 2204.0], [80.7, 2205.0], [80.8, 2213.0], [80.9, 2213.0], [81.0, 2227.0], [81.1, 2227.0], [81.2, 2234.0], [81.3, 2235.0], [81.4, 2240.0], [81.5, 2248.0], [81.6, 2255.0], [81.7, 2256.0], [81.8, 2260.0], [81.9, 2264.0], [82.0, 2267.0], [82.1, 2279.0], [82.2, 2281.0], [82.3, 2283.0], [82.4, 2287.0], [82.5, 2295.0], [82.6, 2300.0], [82.7, 2302.0], [82.8, 2307.0], [82.9, 2312.0], [83.0, 2315.0], [83.1, 2317.0], [83.2, 2324.0], [83.3, 2325.0], [83.4, 2329.0], [83.5, 2335.0], [83.6, 2339.0], [83.7, 2341.0], [83.8, 2351.0], [83.9, 2351.0], [84.0, 2367.0], [84.1, 2370.0], [84.2, 2380.0], [84.3, 2386.0], [84.4, 2390.0], [84.5, 2391.0], [84.6, 2395.0], [84.7, 2411.0], [84.8, 2419.0], [84.9, 2420.0], [85.0, 2425.0], [85.1, 2432.0], [85.2, 2453.0], [85.3, 2457.0], [85.4, 2473.0], [85.5, 2478.0], [85.6, 2485.0], [85.7, 2488.0], [85.8, 2503.0], [85.9, 2504.0], [86.0, 2507.0], [86.1, 2511.0], [86.2, 2524.0], [86.3, 2526.0], [86.4, 2539.0], [86.5, 2545.0], [86.6, 2558.0], [86.7, 2563.0], [86.8, 2574.0], [86.9, 2576.0], [87.0, 2605.0], [87.1, 2606.0], [87.2, 2621.0], [87.3, 2656.0], [87.4, 2682.0], [87.5, 2682.0], [87.6, 2692.0], [87.7, 2713.0], [87.8, 2738.0], [87.9, 2739.0], [88.0, 2741.0], [88.1, 2784.0], [88.2, 2787.0], [88.3, 2800.0], [88.4, 2808.0], [88.5, 2809.0], [88.6, 2818.0], [88.7, 2819.0], [88.8, 2824.0], [88.9, 2833.0], [89.0, 2883.0], [89.1, 2888.0], [89.2, 2903.0], [89.3, 2926.0], [89.4, 2974.0], [89.5, 2993.0], [89.6, 2999.0], [89.7, 3011.0], [89.8, 3016.0], [89.9, 3019.0], [90.0, 3036.0], [90.1, 3040.0], [90.2, 3051.0], [90.3, 3063.0], [90.4, 3087.0], [90.5, 3119.0], [90.6, 3150.0], [90.7, 3156.0], [90.8, 3178.0], [90.9, 3195.0], [91.0, 3213.0], [91.1, 3238.0], [91.2, 3277.0], [91.3, 3279.0], [91.4, 3378.0], [91.5, 3396.0], [91.6, 3479.0], [91.7, 3497.0], [91.8, 3534.0], [91.9, 3583.0], [92.0, 3614.0], [92.1, 3615.0], [92.2, 3705.0], [92.3, 3713.0], [92.4, 3727.0], [92.5, 3741.0], [92.6, 3806.0], [92.7, 3828.0], [92.8, 3882.0], [92.9, 3998.0], [93.0, 4008.0], [93.1, 4010.0], [93.2, 4032.0], [93.3, 4063.0], [93.4, 4207.0], [93.5, 4213.0], [93.6, 4380.0], [93.7, 4469.0], [93.8, 4527.0], [93.9, 4548.0], [94.0, 4687.0], [94.1, 4748.0], [94.2, 4783.0], [94.3, 4793.0], [94.4, 4998.0], [94.5, 5012.0], [94.6, 5047.0], [94.7, 5071.0], [94.8, 5228.0], [94.9, 5284.0], [95.0, 5426.0], [95.1, 5509.0], [95.2, 5570.0], [95.3, 5616.0], [95.4, 5753.0], [95.5, 5767.0], [95.6, 5871.0], [95.7, 5956.0], [95.8, 6104.0], [95.9, 6283.0], [96.0, 6288.0], [96.1, 6297.0], [96.2, 6583.0], [96.3, 6954.0], [96.4, 7378.0], [96.5, 7408.0], [96.6, 7686.0], [96.7, 7761.0], [96.8, 8367.0], [96.9, 8370.0], [97.0, 21719.0], [97.1, 21866.0], [97.2, 21903.0], [97.3, 21930.0], [97.4, 22021.0], [97.5, 22205.0], [97.6, 22235.0], [97.7, 22283.0], [97.8, 22408.0], [97.9, 22422.0], [98.0, 22525.0], [98.1, 22554.0], [98.2, 22618.0], [98.3, 22645.0], [98.4, 22782.0], [98.5, 22796.0], [98.6, 22882.0], [98.7, 22889.0], [98.8, 22964.0], [98.9, 22990.0], [99.0, 23065.0], [99.1, 23076.0], [99.2, 23133.0], [99.3, 23139.0], [99.4, 23272.0], [99.5, 23280.0], [99.6, 23523.0], [99.7, 23565.0], [99.8, 23675.0], [99.9, 23734.0], [100.0, 28084.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 107.0, "series": [{"data": [[600.0, 33.0], [700.0, 44.0], [800.0, 53.0], [900.0, 65.0], [1000.0, 100.0], [1100.0, 88.0], [1200.0, 99.0], [1300.0, 91.0], [1400.0, 107.0], [1500.0, 99.0], [1600.0, 94.0], [1700.0, 77.0], [1800.0, 74.0], [1900.0, 53.0], [2000.0, 45.0], [2100.0, 37.0], [2200.0, 33.0], [2300.0, 31.0], [2400.0, 17.0], [2500.0, 18.0], [2600.0, 10.0], [2700.0, 9.0], [2800.0, 13.0], [2900.0, 8.0], [3000.0, 12.0], [3100.0, 7.0], [3200.0, 6.0], [3300.0, 3.0], [3400.0, 3.0], [3500.0, 3.0], [3700.0, 6.0], [3600.0, 4.0], [3800.0, 4.0], [3900.0, 1.0], [4000.0, 6.0], [4100.0, 1.0], [4300.0, 2.0], [4200.0, 2.0], [4400.0, 2.0], [4600.0, 2.0], [4500.0, 2.0], [4700.0, 4.0], [4900.0, 2.0], [5100.0, 1.0], [5000.0, 4.0], [5200.0, 2.0], [5300.0, 1.0], [5500.0, 3.0], [5600.0, 2.0], [5400.0, 1.0], [5700.0, 3.0], [5800.0, 1.0], [5900.0, 2.0], [6100.0, 1.0], [6200.0, 4.0], [6300.0, 1.0], [6500.0, 1.0], [6900.0, 1.0], [7300.0, 2.0], [7400.0, 1.0], [7500.0, 1.0], [7600.0, 1.0], [7900.0, 1.0], [7700.0, 1.0], [8300.0, 2.0], [8400.0, 1.0], [21900.0, 3.0], [22000.0, 2.0], [22200.0, 4.0], [22400.0, 3.0], [22500.0, 3.0], [21700.0, 1.0], [22300.0, 1.0], [21800.0, 1.0], [23500.0, 3.0], [23100.0, 3.0], [23000.0, 4.0], [23200.0, 2.0], [22800.0, 3.0], [22600.0, 2.0], [22900.0, 3.0], [22700.0, 3.0], [23600.0, 2.0], [23700.0, 1.0], [28000.0, 1.0], [200.0, 21.0], [300.0, 1.0], [400.0, 7.0], [500.0, 16.0]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 28000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1378.0, "series": [{"data": [[0.0, 26.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 75.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 19.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1378.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.629213483146065, "minX": 1.76846238E12, "maxY": 20.0, "series": [{"data": [[1.76846256E12, 19.415384615384614], [1.76846244E12, 19.294363256784933], [1.7684625E12, 20.0], [1.76846238E12, 8.629213483146065]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76846256E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1053.6521739130435, "minX": 1.0, "maxY": 22525.0, "series": [{"data": [[2.0, 1712.6666666666665], [8.0, 1053.6521739130435], [9.0, 1118.2916666666667], [10.0, 1105.5555555555557], [11.0, 1208.0384615384617], [3.0, 1897.375], [12.0, 1590.1764705882351], [13.0, 1908.9999999999998], [14.0, 1739.5714285714282], [15.0, 2028.9166666666665], [4.0, 2092.3125], [16.0, 1761.1935483870966], [1.0, 22525.0], [17.0, 2170.0434782608695], [18.0, 1926.740740740741], [19.0, 2163.0384615384614], [5.0, 2068.111111111111], [20.0, 2560.250457038389], [6.0, 2298.0625], [7.0, 1867.6]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}, {"data": [[17.620827770360492, 2352.3838451268343]], "isOverall": false, "label": "/api/learner/educational-attainment-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1139.2, "minX": 1.76846238E12, "maxY": 4590531.75, "series": [{"data": [[1.76846256E12, 3016350.55], [1.76846244E12, 4590531.75], [1.7684625E12, 4058915.9166666665], [1.76846238E12, 2423313.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76846256E12, 1386.6666666666667], [1.76846244E12, 2043.7333333333333], [1.7684625E12, 1821.8666666666666], [1.76846238E12, 1139.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76846256E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1166.4494382022465, "minX": 1.76846238E12, "maxY": 2847.01846153846, "series": [{"data": [[1.76846256E12, 2847.01846153846], [1.76846244E12, 2250.1482254697285], [1.7684625E12, 2832.1475409836053], [1.76846238E12, 1166.4494382022465]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76846256E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 683.0262172284644, "minX": 1.76846238E12, "maxY": 2244.852307692307, "series": [{"data": [[1.76846256E12, 2244.852307692307], [1.76846244E12, 1489.8810020876824], [1.7684625E12, 2158.2997658079635], [1.76846238E12, 683.0262172284644]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76846256E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 19.142322097378273, "minX": 1.76846238E12, "maxY": 1236.1292307692302, "series": [{"data": [[1.76846256E12, 1236.1292307692302], [1.76846244E12, 267.6555323590814], [1.7684625E12, 996.8594847775177], [1.76846238E12, 19.142322097378273]], "isOverall": false, "label": "/api/learner/educational-attainment", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76846256E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 230.0, "minX": 1.76846238E12, "maxY": 22217.0, "series": [{"data": [[1.76846256E12, 22217.0], [1.76846244E12, 5284.0], [1.7684625E12, 21719.0], [1.76846238E12, 3176.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76846256E12, 2950.4000000000015], [1.76846244E12, 2494.9000000000005], [1.7684625E12, 1263.9], [1.76846238E12, 912.700000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76846256E12, 22217.0], [1.76846244E12, 5284.0], [1.7684625E12, 21719.0], [1.76846238E12, 3176.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76846256E12, 11801.099999999986], [1.76846244E12, 4376.499999999999], [1.7684625E12, 10469.849999999986], [1.76846238E12, 2035.8499999999985]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76846256E12, 408.0], [1.76846244E12, 787.0], [1.7684625E12, 585.0], [1.76846238E12, 230.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76846256E12, 1061.0], [1.76846244E12, 1464.0], [1.7684625E12, 1052.0], [1.76846238E12, 268.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76846256E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 270.0, "minX": 1.0, "maxY": 21903.0, "series": [{"data": [[2.0, 1103.0], [4.0, 1415.5], [17.0, 1514.0], [9.0, 270.0], [5.0, 951.5], [11.0, 559.5], [3.0, 541.0], [12.0, 1118.5], [13.0, 939.0], [7.0, 954.0], [14.0, 1117.5], [15.0, 3634.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 2325.0], [8.0, 1314.0], [9.0, 1543.0], [10.0, 1459.5], [11.0, 1562.0], [3.0, 1466.5], [12.0, 1711.5], [13.0, 1846.0], [14.0, 2035.0], [15.0, 2774.0], [4.0, 1518.0], [1.0, 21903.0], [16.0, 1964.0], [17.0, 2422.5], [5.0, 1363.0], [6.0, 1629.5], [7.0, 1334.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 269.0, "minX": 1.0, "maxY": 21436.5, "series": [{"data": [[2.0, 1102.0], [4.0, 1415.5], [17.0, 1514.0], [9.0, 269.0], [5.0, 951.0], [11.0, 559.5], [3.0, 541.0], [12.0, 1118.5], [13.0, 939.0], [7.0, 954.0], [14.0, 1117.5], [15.0, 3634.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1093.0], [8.0, 704.0], [9.0, 996.0], [10.0, 948.0], [11.0, 1014.5], [3.0, 915.0], [12.0, 957.5], [13.0, 1157.0], [14.0, 1113.5], [15.0, 1811.5], [4.0, 1072.5], [1.0, 21436.5], [16.0, 1268.5], [17.0, 1822.0], [5.0, 713.0], [6.0, 990.0], [7.0, 849.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.7, "minX": 1.76846238E12, "maxY": 8.066666666666666, "series": [{"data": [[1.76846256E12, 5.083333333333333], [1.76846244E12, 8.066666666666666], [1.7684625E12, 7.116666666666666], [1.76846238E12, 4.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76846256E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76846238E12, "maxY": 7.483333333333333, "series": [{"data": [[1.76846256E12, 0.5], [1.76846244E12, 0.5], [1.7684625E12, 0.5], [1.76846238E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76846256E12, 4.916666666666667], [1.76846244E12, 7.483333333333333], [1.7684625E12, 6.616666666666666], [1.76846238E12, 3.95]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76846256E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76846238E12, "maxY": 7.483333333333333, "series": [{"data": [[1.76846256E12, 0.5], [1.76846244E12, 0.5], [1.7684625E12, 0.5], [1.76846238E12, 0.5]], "isOverall": false, "label": "/api/learner/educational-attainment-success", "isController": false}, {"data": [[1.76846256E12, 4.916666666666667], [1.76846244E12, 7.483333333333333], [1.7684625E12, 6.616666666666666], [1.76846238E12, 3.95]], "isOverall": false, "label": "/api/learner/educational-attainment-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76846256E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76846238E12, "maxY": 7.483333333333333, "series": [{"data": [[1.76846256E12, 0.5], [1.76846244E12, 0.5], [1.7684625E12, 0.5], [1.76846238E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76846256E12, 4.916666666666667], [1.76846244E12, 7.483333333333333], [1.7684625E12, 6.616666666666666], [1.76846238E12, 3.95]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76846256E12, "title": "Total Transactions Per Second"}},
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

