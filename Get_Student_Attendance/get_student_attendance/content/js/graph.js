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
        data: {"result": {"minY": 256.0, "minX": 0.0, "maxY": 27787.0, "series": [{"data": [[0.0, 256.0], [0.1, 262.0], [0.2, 265.0], [0.3, 270.0], [0.4, 270.0], [0.5, 271.0], [0.6, 272.0], [0.7, 272.0], [0.8, 278.0], [0.9, 282.0], [1.0, 284.0], [1.1, 289.0], [1.2, 301.0], [1.3, 302.0], [1.4, 319.0], [1.5, 343.0], [1.6, 382.0], [1.7, 427.0], [1.8, 427.0], [1.9, 444.0], [2.0, 449.0], [2.1, 478.0], [2.2, 479.0], [2.3, 509.0], [2.4, 514.0], [2.5, 526.0], [2.6, 531.0], [2.7, 540.0], [2.8, 592.0], [2.9, 599.0], [3.0, 611.0], [3.1, 611.0], [3.2, 622.0], [3.3, 624.0], [3.4, 649.0], [3.5, 654.0], [3.6, 656.0], [3.7, 668.0], [3.8, 672.0], [3.9, 675.0], [4.0, 678.0], [4.1, 683.0], [4.2, 684.0], [4.3, 687.0], [4.4, 702.0], [4.5, 706.0], [4.6, 712.0], [4.7, 728.0], [4.8, 730.0], [4.9, 735.0], [5.0, 742.0], [5.1, 748.0], [5.2, 753.0], [5.3, 764.0], [5.4, 766.0], [5.5, 777.0], [5.6, 777.0], [5.7, 780.0], [5.8, 782.0], [5.9, 786.0], [6.0, 797.0], [6.1, 803.0], [6.2, 807.0], [6.3, 810.0], [6.4, 813.0], [6.5, 814.0], [6.6, 824.0], [6.7, 829.0], [6.8, 832.0], [6.9, 833.0], [7.0, 834.0], [7.1, 838.0], [7.2, 845.0], [7.3, 850.0], [7.4, 855.0], [7.5, 862.0], [7.6, 864.0], [7.7, 867.0], [7.8, 867.0], [7.9, 870.0], [8.0, 872.0], [8.1, 874.0], [8.2, 877.0], [8.3, 877.0], [8.4, 881.0], [8.5, 884.0], [8.6, 887.0], [8.7, 897.0], [8.8, 899.0], [8.9, 904.0], [9.0, 908.0], [9.1, 909.0], [9.2, 912.0], [9.3, 914.0], [9.4, 915.0], [9.5, 918.0], [9.6, 923.0], [9.7, 925.0], [9.8, 934.0], [9.9, 934.0], [10.0, 944.0], [10.1, 945.0], [10.2, 948.0], [10.3, 952.0], [10.4, 953.0], [10.5, 956.0], [10.6, 957.0], [10.7, 961.0], [10.8, 962.0], [10.9, 963.0], [11.0, 963.0], [11.1, 964.0], [11.2, 965.0], [11.3, 977.0], [11.4, 977.0], [11.5, 978.0], [11.6, 978.0], [11.7, 982.0], [11.8, 985.0], [11.9, 990.0], [12.0, 994.0], [12.1, 995.0], [12.2, 997.0], [12.3, 997.0], [12.4, 999.0], [12.5, 999.0], [12.6, 1006.0], [12.7, 1007.0], [12.8, 1011.0], [12.9, 1012.0], [13.0, 1014.0], [13.1, 1015.0], [13.2, 1018.0], [13.3, 1020.0], [13.4, 1023.0], [13.5, 1023.0], [13.6, 1024.0], [13.7, 1025.0], [13.8, 1026.0], [13.9, 1027.0], [14.0, 1028.0], [14.1, 1030.0], [14.2, 1033.0], [14.3, 1033.0], [14.4, 1034.0], [14.5, 1035.0], [14.6, 1035.0], [14.7, 1038.0], [14.8, 1041.0], [14.9, 1042.0], [15.0, 1045.0], [15.1, 1046.0], [15.2, 1048.0], [15.3, 1048.0], [15.4, 1050.0], [15.5, 1051.0], [15.6, 1052.0], [15.7, 1053.0], [15.8, 1055.0], [15.9, 1055.0], [16.0, 1058.0], [16.1, 1059.0], [16.2, 1063.0], [16.3, 1064.0], [16.4, 1065.0], [16.5, 1068.0], [16.6, 1069.0], [16.7, 1071.0], [16.8, 1072.0], [16.9, 1075.0], [17.0, 1076.0], [17.1, 1078.0], [17.2, 1078.0], [17.3, 1084.0], [17.4, 1084.0], [17.5, 1086.0], [17.6, 1087.0], [17.7, 1089.0], [17.8, 1089.0], [17.9, 1091.0], [18.0, 1092.0], [18.1, 1093.0], [18.2, 1096.0], [18.3, 1097.0], [18.4, 1099.0], [18.5, 1103.0], [18.6, 1107.0], [18.7, 1107.0], [18.8, 1108.0], [18.9, 1110.0], [19.0, 1112.0], [19.1, 1113.0], [19.2, 1119.0], [19.3, 1123.0], [19.4, 1125.0], [19.5, 1126.0], [19.6, 1126.0], [19.7, 1129.0], [19.8, 1129.0], [19.9, 1133.0], [20.0, 1133.0], [20.1, 1140.0], [20.2, 1140.0], [20.3, 1140.0], [20.4, 1140.0], [20.5, 1141.0], [20.6, 1144.0], [20.7, 1144.0], [20.8, 1146.0], [20.9, 1147.0], [21.0, 1149.0], [21.1, 1149.0], [21.2, 1152.0], [21.3, 1152.0], [21.4, 1153.0], [21.5, 1155.0], [21.6, 1157.0], [21.7, 1157.0], [21.8, 1159.0], [21.9, 1159.0], [22.0, 1162.0], [22.1, 1165.0], [22.2, 1167.0], [22.3, 1170.0], [22.4, 1172.0], [22.5, 1174.0], [22.6, 1174.0], [22.7, 1176.0], [22.8, 1177.0], [22.9, 1180.0], [23.0, 1181.0], [23.1, 1182.0], [23.2, 1182.0], [23.3, 1186.0], [23.4, 1186.0], [23.5, 1187.0], [23.6, 1189.0], [23.7, 1190.0], [23.8, 1195.0], [23.9, 1198.0], [24.0, 1199.0], [24.1, 1200.0], [24.2, 1205.0], [24.3, 1207.0], [24.4, 1208.0], [24.5, 1208.0], [24.6, 1209.0], [24.7, 1210.0], [24.8, 1213.0], [24.9, 1213.0], [25.0, 1215.0], [25.1, 1219.0], [25.2, 1220.0], [25.3, 1221.0], [25.4, 1223.0], [25.5, 1224.0], [25.6, 1226.0], [25.7, 1229.0], [25.8, 1231.0], [25.9, 1231.0], [26.0, 1231.0], [26.1, 1232.0], [26.2, 1233.0], [26.3, 1234.0], [26.4, 1235.0], [26.5, 1237.0], [26.6, 1238.0], [26.7, 1239.0], [26.8, 1241.0], [26.9, 1241.0], [27.0, 1245.0], [27.1, 1245.0], [27.2, 1249.0], [27.3, 1251.0], [27.4, 1253.0], [27.5, 1254.0], [27.6, 1254.0], [27.7, 1254.0], [27.8, 1255.0], [27.9, 1255.0], [28.0, 1257.0], [28.1, 1257.0], [28.2, 1258.0], [28.3, 1259.0], [28.4, 1259.0], [28.5, 1260.0], [28.6, 1263.0], [28.7, 1264.0], [28.8, 1264.0], [28.9, 1267.0], [29.0, 1268.0], [29.1, 1268.0], [29.2, 1269.0], [29.3, 1270.0], [29.4, 1271.0], [29.5, 1272.0], [29.6, 1272.0], [29.7, 1273.0], [29.8, 1273.0], [29.9, 1276.0], [30.0, 1278.0], [30.1, 1278.0], [30.2, 1281.0], [30.3, 1282.0], [30.4, 1283.0], [30.5, 1284.0], [30.6, 1290.0], [30.7, 1290.0], [30.8, 1292.0], [30.9, 1293.0], [31.0, 1293.0], [31.1, 1296.0], [31.2, 1297.0], [31.3, 1300.0], [31.4, 1300.0], [31.5, 1302.0], [31.6, 1305.0], [31.7, 1306.0], [31.8, 1306.0], [31.9, 1307.0], [32.0, 1308.0], [32.1, 1309.0], [32.2, 1309.0], [32.3, 1311.0], [32.4, 1315.0], [32.5, 1315.0], [32.6, 1316.0], [32.7, 1316.0], [32.8, 1318.0], [32.9, 1318.0], [33.0, 1319.0], [33.1, 1319.0], [33.2, 1321.0], [33.3, 1322.0], [33.4, 1322.0], [33.5, 1322.0], [33.6, 1326.0], [33.7, 1327.0], [33.8, 1327.0], [33.9, 1332.0], [34.0, 1333.0], [34.1, 1333.0], [34.2, 1334.0], [34.3, 1334.0], [34.4, 1335.0], [34.5, 1337.0], [34.6, 1337.0], [34.7, 1339.0], [34.8, 1339.0], [34.9, 1340.0], [35.0, 1340.0], [35.1, 1343.0], [35.2, 1344.0], [35.3, 1345.0], [35.4, 1345.0], [35.5, 1346.0], [35.6, 1347.0], [35.7, 1347.0], [35.8, 1348.0], [35.9, 1348.0], [36.0, 1351.0], [36.1, 1352.0], [36.2, 1352.0], [36.3, 1352.0], [36.4, 1354.0], [36.5, 1354.0], [36.6, 1355.0], [36.7, 1357.0], [36.8, 1359.0], [36.9, 1361.0], [37.0, 1361.0], [37.1, 1361.0], [37.2, 1362.0], [37.3, 1364.0], [37.4, 1365.0], [37.5, 1366.0], [37.6, 1366.0], [37.7, 1367.0], [37.8, 1368.0], [37.9, 1368.0], [38.0, 1369.0], [38.1, 1370.0], [38.2, 1371.0], [38.3, 1373.0], [38.4, 1374.0], [38.5, 1374.0], [38.6, 1374.0], [38.7, 1375.0], [38.8, 1376.0], [38.9, 1376.0], [39.0, 1377.0], [39.1, 1377.0], [39.2, 1379.0], [39.3, 1380.0], [39.4, 1382.0], [39.5, 1383.0], [39.6, 1383.0], [39.7, 1384.0], [39.8, 1385.0], [39.9, 1387.0], [40.0, 1389.0], [40.1, 1390.0], [40.2, 1393.0], [40.3, 1396.0], [40.4, 1396.0], [40.5, 1397.0], [40.6, 1397.0], [40.7, 1398.0], [40.8, 1398.0], [40.9, 1403.0], [41.0, 1404.0], [41.1, 1406.0], [41.2, 1407.0], [41.3, 1407.0], [41.4, 1409.0], [41.5, 1409.0], [41.6, 1410.0], [41.7, 1411.0], [41.8, 1411.0], [41.9, 1412.0], [42.0, 1412.0], [42.1, 1413.0], [42.2, 1416.0], [42.3, 1416.0], [42.4, 1419.0], [42.5, 1419.0], [42.6, 1421.0], [42.7, 1424.0], [42.8, 1424.0], [42.9, 1426.0], [43.0, 1428.0], [43.1, 1430.0], [43.2, 1431.0], [43.3, 1434.0], [43.4, 1434.0], [43.5, 1438.0], [43.6, 1439.0], [43.7, 1440.0], [43.8, 1441.0], [43.9, 1442.0], [44.0, 1442.0], [44.1, 1443.0], [44.2, 1445.0], [44.3, 1446.0], [44.4, 1447.0], [44.5, 1448.0], [44.6, 1450.0], [44.7, 1451.0], [44.8, 1451.0], [44.9, 1452.0], [45.0, 1452.0], [45.1, 1452.0], [45.2, 1455.0], [45.3, 1456.0], [45.4, 1457.0], [45.5, 1457.0], [45.6, 1462.0], [45.7, 1463.0], [45.8, 1467.0], [45.9, 1471.0], [46.0, 1472.0], [46.1, 1473.0], [46.2, 1475.0], [46.3, 1478.0], [46.4, 1479.0], [46.5, 1480.0], [46.6, 1480.0], [46.7, 1481.0], [46.8, 1482.0], [46.9, 1484.0], [47.0, 1484.0], [47.1, 1486.0], [47.2, 1487.0], [47.3, 1487.0], [47.4, 1489.0], [47.5, 1491.0], [47.6, 1492.0], [47.7, 1493.0], [47.8, 1493.0], [47.9, 1494.0], [48.0, 1497.0], [48.1, 1497.0], [48.2, 1498.0], [48.3, 1498.0], [48.4, 1500.0], [48.5, 1503.0], [48.6, 1504.0], [48.7, 1507.0], [48.8, 1507.0], [48.9, 1508.0], [49.0, 1508.0], [49.1, 1509.0], [49.2, 1509.0], [49.3, 1511.0], [49.4, 1512.0], [49.5, 1512.0], [49.6, 1513.0], [49.7, 1514.0], [49.8, 1515.0], [49.9, 1519.0], [50.0, 1519.0], [50.1, 1521.0], [50.2, 1523.0], [50.3, 1525.0], [50.4, 1527.0], [50.5, 1538.0], [50.6, 1540.0], [50.7, 1541.0], [50.8, 1541.0], [50.9, 1542.0], [51.0, 1542.0], [51.1, 1543.0], [51.2, 1544.0], [51.3, 1544.0], [51.4, 1547.0], [51.5, 1550.0], [51.6, 1550.0], [51.7, 1552.0], [51.8, 1553.0], [51.9, 1554.0], [52.0, 1555.0], [52.1, 1558.0], [52.2, 1561.0], [52.3, 1563.0], [52.4, 1563.0], [52.5, 1563.0], [52.6, 1565.0], [52.7, 1565.0], [52.8, 1565.0], [52.9, 1566.0], [53.0, 1569.0], [53.1, 1569.0], [53.2, 1573.0], [53.3, 1574.0], [53.4, 1574.0], [53.5, 1575.0], [53.6, 1577.0], [53.7, 1577.0], [53.8, 1578.0], [53.9, 1578.0], [54.0, 1579.0], [54.1, 1580.0], [54.2, 1583.0], [54.3, 1584.0], [54.4, 1586.0], [54.5, 1587.0], [54.6, 1587.0], [54.7, 1589.0], [54.8, 1590.0], [54.9, 1592.0], [55.0, 1594.0], [55.1, 1595.0], [55.2, 1596.0], [55.3, 1601.0], [55.4, 1601.0], [55.5, 1601.0], [55.6, 1602.0], [55.7, 1605.0], [55.8, 1605.0], [55.9, 1606.0], [56.0, 1608.0], [56.1, 1609.0], [56.2, 1610.0], [56.3, 1612.0], [56.4, 1615.0], [56.5, 1615.0], [56.6, 1617.0], [56.7, 1618.0], [56.8, 1622.0], [56.9, 1622.0], [57.0, 1624.0], [57.1, 1624.0], [57.2, 1625.0], [57.3, 1626.0], [57.4, 1631.0], [57.5, 1633.0], [57.6, 1635.0], [57.7, 1637.0], [57.8, 1638.0], [57.9, 1642.0], [58.0, 1642.0], [58.1, 1644.0], [58.2, 1644.0], [58.3, 1646.0], [58.4, 1648.0], [58.5, 1648.0], [58.6, 1652.0], [58.7, 1657.0], [58.8, 1657.0], [58.9, 1658.0], [59.0, 1659.0], [59.1, 1661.0], [59.2, 1663.0], [59.3, 1665.0], [59.4, 1667.0], [59.5, 1670.0], [59.6, 1676.0], [59.7, 1678.0], [59.8, 1681.0], [59.9, 1683.0], [60.0, 1684.0], [60.1, 1685.0], [60.2, 1686.0], [60.3, 1687.0], [60.4, 1689.0], [60.5, 1691.0], [60.6, 1694.0], [60.7, 1698.0], [60.8, 1699.0], [60.9, 1702.0], [61.0, 1704.0], [61.1, 1705.0], [61.2, 1706.0], [61.3, 1710.0], [61.4, 1710.0], [61.5, 1711.0], [61.6, 1712.0], [61.7, 1714.0], [61.8, 1717.0], [61.9, 1717.0], [62.0, 1723.0], [62.1, 1724.0], [62.2, 1726.0], [62.3, 1727.0], [62.4, 1728.0], [62.5, 1729.0], [62.6, 1732.0], [62.7, 1732.0], [62.8, 1737.0], [62.9, 1737.0], [63.0, 1739.0], [63.1, 1741.0], [63.2, 1744.0], [63.3, 1745.0], [63.4, 1746.0], [63.5, 1749.0], [63.6, 1749.0], [63.7, 1753.0], [63.8, 1754.0], [63.9, 1756.0], [64.0, 1757.0], [64.1, 1760.0], [64.2, 1764.0], [64.3, 1767.0], [64.4, 1768.0], [64.5, 1769.0], [64.6, 1770.0], [64.7, 1772.0], [64.8, 1774.0], [64.9, 1774.0], [65.0, 1777.0], [65.1, 1779.0], [65.2, 1781.0], [65.3, 1781.0], [65.4, 1782.0], [65.5, 1783.0], [65.6, 1784.0], [65.7, 1791.0], [65.8, 1792.0], [65.9, 1793.0], [66.0, 1794.0], [66.1, 1795.0], [66.2, 1800.0], [66.3, 1803.0], [66.4, 1805.0], [66.5, 1806.0], [66.6, 1807.0], [66.7, 1811.0], [66.8, 1811.0], [66.9, 1813.0], [67.0, 1813.0], [67.1, 1816.0], [67.2, 1817.0], [67.3, 1821.0], [67.4, 1821.0], [67.5, 1828.0], [67.6, 1832.0], [67.7, 1836.0], [67.8, 1837.0], [67.9, 1837.0], [68.0, 1838.0], [68.1, 1839.0], [68.2, 1841.0], [68.3, 1841.0], [68.4, 1843.0], [68.5, 1844.0], [68.6, 1846.0], [68.7, 1846.0], [68.8, 1852.0], [68.9, 1852.0], [69.0, 1858.0], [69.1, 1860.0], [69.2, 1863.0], [69.3, 1863.0], [69.4, 1864.0], [69.5, 1866.0], [69.6, 1867.0], [69.7, 1874.0], [69.8, 1874.0], [69.9, 1875.0], [70.0, 1877.0], [70.1, 1879.0], [70.2, 1879.0], [70.3, 1881.0], [70.4, 1881.0], [70.5, 1882.0], [70.6, 1885.0], [70.7, 1893.0], [70.8, 1898.0], [70.9, 1900.0], [71.0, 1907.0], [71.1, 1909.0], [71.2, 1913.0], [71.3, 1914.0], [71.4, 1917.0], [71.5, 1919.0], [71.6, 1922.0], [71.7, 1923.0], [71.8, 1924.0], [71.9, 1925.0], [72.0, 1929.0], [72.1, 1930.0], [72.2, 1932.0], [72.3, 1936.0], [72.4, 1939.0], [72.5, 1943.0], [72.6, 1947.0], [72.7, 1953.0], [72.8, 1955.0], [72.9, 1962.0], [73.0, 1963.0], [73.1, 1972.0], [73.2, 1977.0], [73.3, 1981.0], [73.4, 1981.0], [73.5, 1984.0], [73.6, 1986.0], [73.7, 1992.0], [73.8, 1998.0], [73.9, 2002.0], [74.0, 2007.0], [74.1, 2007.0], [74.2, 2009.0], [74.3, 2011.0], [74.4, 2020.0], [74.5, 2021.0], [74.6, 2029.0], [74.7, 2033.0], [74.8, 2036.0], [74.9, 2044.0], [75.0, 2045.0], [75.1, 2045.0], [75.2, 2046.0], [75.3, 2047.0], [75.4, 2047.0], [75.5, 2054.0], [75.6, 2054.0], [75.7, 2055.0], [75.8, 2056.0], [75.9, 2057.0], [76.0, 2058.0], [76.1, 2060.0], [76.2, 2062.0], [76.3, 2068.0], [76.4, 2069.0], [76.5, 2072.0], [76.6, 2075.0], [76.7, 2076.0], [76.8, 2076.0], [76.9, 2081.0], [77.0, 2089.0], [77.1, 2092.0], [77.2, 2102.0], [77.3, 2105.0], [77.4, 2109.0], [77.5, 2109.0], [77.6, 2116.0], [77.7, 2119.0], [77.8, 2125.0], [77.9, 2134.0], [78.0, 2134.0], [78.1, 2140.0], [78.2, 2140.0], [78.3, 2142.0], [78.4, 2144.0], [78.5, 2160.0], [78.6, 2161.0], [78.7, 2161.0], [78.8, 2161.0], [78.9, 2167.0], [79.0, 2168.0], [79.1, 2173.0], [79.2, 2179.0], [79.3, 2187.0], [79.4, 2187.0], [79.5, 2192.0], [79.6, 2192.0], [79.7, 2194.0], [79.8, 2198.0], [79.9, 2199.0], [80.0, 2202.0], [80.1, 2208.0], [80.2, 2214.0], [80.3, 2215.0], [80.4, 2218.0], [80.5, 2220.0], [80.6, 2225.0], [80.7, 2230.0], [80.8, 2234.0], [80.9, 2235.0], [81.0, 2244.0], [81.1, 2248.0], [81.2, 2249.0], [81.3, 2256.0], [81.4, 2258.0], [81.5, 2261.0], [81.6, 2265.0], [81.7, 2270.0], [81.8, 2271.0], [81.9, 2282.0], [82.0, 2286.0], [82.1, 2291.0], [82.2, 2295.0], [82.3, 2311.0], [82.4, 2314.0], [82.5, 2339.0], [82.6, 2347.0], [82.7, 2348.0], [82.8, 2352.0], [82.9, 2353.0], [83.0, 2358.0], [83.1, 2361.0], [83.2, 2365.0], [83.3, 2369.0], [83.4, 2381.0], [83.5, 2390.0], [83.6, 2403.0], [83.7, 2410.0], [83.8, 2426.0], [83.9, 2434.0], [84.0, 2444.0], [84.1, 2453.0], [84.2, 2454.0], [84.3, 2460.0], [84.4, 2462.0], [84.5, 2466.0], [84.6, 2467.0], [84.7, 2467.0], [84.8, 2469.0], [84.9, 2476.0], [85.0, 2477.0], [85.1, 2487.0], [85.2, 2491.0], [85.3, 2500.0], [85.4, 2504.0], [85.5, 2504.0], [85.6, 2507.0], [85.7, 2508.0], [85.8, 2511.0], [85.9, 2520.0], [86.0, 2527.0], [86.1, 2528.0], [86.2, 2537.0], [86.3, 2546.0], [86.4, 2550.0], [86.5, 2553.0], [86.6, 2563.0], [86.7, 2576.0], [86.8, 2577.0], [86.9, 2582.0], [87.0, 2613.0], [87.1, 2615.0], [87.2, 2615.0], [87.3, 2620.0], [87.4, 2620.0], [87.5, 2638.0], [87.6, 2638.0], [87.7, 2647.0], [87.8, 2649.0], [87.9, 2654.0], [88.0, 2654.0], [88.1, 2655.0], [88.2, 2656.0], [88.3, 2673.0], [88.4, 2681.0], [88.5, 2682.0], [88.6, 2698.0], [88.7, 2721.0], [88.8, 2730.0], [88.9, 2758.0], [89.0, 2768.0], [89.1, 2769.0], [89.2, 2790.0], [89.3, 2806.0], [89.4, 2809.0], [89.5, 2811.0], [89.6, 2832.0], [89.7, 2856.0], [89.8, 2865.0], [89.9, 2877.0], [90.0, 2880.0], [90.1, 2880.0], [90.2, 2884.0], [90.3, 2907.0], [90.4, 2925.0], [90.5, 2933.0], [90.6, 2962.0], [90.7, 2965.0], [90.8, 2974.0], [90.9, 2980.0], [91.0, 3006.0], [91.1, 3131.0], [91.2, 3171.0], [91.3, 3195.0], [91.4, 3199.0], [91.5, 3199.0], [91.6, 3229.0], [91.7, 3233.0], [91.8, 3241.0], [91.9, 3244.0], [92.0, 3268.0], [92.1, 3271.0], [92.2, 3312.0], [92.3, 3326.0], [92.4, 3338.0], [92.5, 3338.0], [92.6, 3352.0], [92.7, 3370.0], [92.8, 3386.0], [92.9, 3413.0], [93.0, 3426.0], [93.1, 3437.0], [93.2, 3438.0], [93.3, 3447.0], [93.4, 3451.0], [93.5, 3464.0], [93.6, 3478.0], [93.7, 3486.0], [93.8, 3496.0], [93.9, 3516.0], [94.0, 3517.0], [94.1, 3528.0], [94.2, 3540.0], [94.3, 3560.0], [94.4, 3580.0], [94.5, 3582.0], [94.6, 3629.0], [94.7, 3637.0], [94.8, 3643.0], [94.9, 3690.0], [95.0, 3865.0], [95.1, 3934.0], [95.2, 3964.0], [95.3, 3981.0], [95.4, 4060.0], [95.5, 4062.0], [95.6, 4079.0], [95.7, 4110.0], [95.8, 4198.0], [95.9, 4260.0], [96.0, 4323.0], [96.1, 4365.0], [96.2, 4366.0], [96.3, 4466.0], [96.4, 4478.0], [96.5, 4557.0], [96.6, 4583.0], [96.7, 4622.0], [96.8, 4951.0], [96.9, 5170.0], [97.0, 5322.0], [97.1, 7472.0], [97.2, 9113.0], [97.3, 13399.0], [97.4, 22245.0], [97.5, 22285.0], [97.6, 22323.0], [97.7, 22333.0], [97.8, 22379.0], [97.9, 22397.0], [98.0, 22412.0], [98.1, 22575.0], [98.2, 22692.0], [98.3, 22697.0], [98.4, 22745.0], [98.5, 22802.0], [98.6, 22883.0], [98.7, 22950.0], [98.8, 22978.0], [98.9, 23052.0], [99.0, 23066.0], [99.1, 23097.0], [99.2, 23141.0], [99.3, 23203.0], [99.4, 23266.0], [99.5, 23524.0], [99.6, 23565.0], [99.7, 23936.0], [99.8, 24625.0], [99.9, 24861.0], [100.0, 27787.0]], "isOverall": false, "label": "/api/learner/get_student_attendance?isOngoing=true&user_uli=DRM-99-229-09083-001&schedule_id=4825", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 146.0, "series": [{"data": [[600.0, 22.0], [700.0, 26.0], [800.0, 42.0], [900.0, 57.0], [1000.0, 91.0], [1100.0, 86.0], [1200.0, 111.0], [1300.0, 146.0], [1400.0, 115.0], [1500.0, 107.0], [1600.0, 85.0], [1700.0, 82.0], [1800.0, 72.0], [1900.0, 46.0], [2000.0, 51.0], [2100.0, 42.0], [2300.0, 20.0], [2200.0, 35.0], [2400.0, 27.0], [2500.0, 26.0], [2600.0, 26.0], [2800.0, 15.0], [2700.0, 9.0], [2900.0, 11.0], [3000.0, 2.0], [3100.0, 7.0], [3200.0, 9.0], [3300.0, 11.0], [3400.0, 15.0], [3500.0, 12.0], [3600.0, 5.0], [3800.0, 2.0], [3900.0, 5.0], [4000.0, 5.0], [4100.0, 2.0], [4300.0, 5.0], [4200.0, 2.0], [4400.0, 3.0], [4600.0, 2.0], [4500.0, 2.0], [5100.0, 1.0], [4900.0, 2.0], [5300.0, 1.0], [6100.0, 1.0], [7400.0, 1.0], [9100.0, 1.0], [8800.0, 1.0], [13300.0, 1.0], [22300.0, 6.0], [22400.0, 2.0], [22200.0, 3.0], [22500.0, 1.0], [22600.0, 3.0], [23000.0, 5.0], [22800.0, 3.0], [22900.0, 3.0], [23100.0, 2.0], [23500.0, 2.0], [23200.0, 2.0], [22700.0, 2.0], [23300.0, 1.0], [23900.0, 1.0], [23800.0, 1.0], [24600.0, 1.0], [24800.0, 2.0], [27700.0, 1.0], [200.0, 18.0], [300.0, 7.0], [400.0, 10.0], [500.0, 10.0]], "isOverall": false, "label": "/api/learner/get_student_attendance?isOngoing=true&user_uli=DRM-99-229-09083-001&schedule_id=4825", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 27700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1414.0, "series": [{"data": [[0.0, 26.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 62.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 32.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1414.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.905882352941176, "minX": 1.76835918E12, "maxY": 20.0, "series": [{"data": [[1.76835918E12, 3.905882352941176], [1.7683593E12, 20.0], [1.76835942E12, 15.153846153846157], [1.76835924E12, 15.82232346241459], [1.76835936E12, 20.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76835942E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 797.0769230769231, "minX": 1.0, "maxY": 3577.9999999999995, "series": [{"data": [[2.0, 1691.9411764705883], [8.0, 1240.4090909090912], [9.0, 1292.1052631578948], [10.0, 1563.4], [11.0, 1504.7391304347827], [3.0, 797.0769230769231], [12.0, 1704.4], [13.0, 1655.0714285714287], [14.0, 3439.5], [15.0, 1678.9999999999998], [1.0, 3577.9999999999995], [4.0, 810.7058823529412], [16.0, 2364.045454545455], [17.0, 2193.366666666667], [18.0, 1891.6666666666667], [19.0, 3188.727272727272], [5.0, 1103.5294117647059], [20.0, 2415.3744607420203], [6.0, 1999.8999999999999], [7.0, 943.64]], "isOverall": false, "label": "/api/learner/get_student_attendance?isOngoing=true&user_uli=DRM-99-229-09083-001&schedule_id=4825", "isController": false}, {"data": [[17.789439374185122, 2261.8637548891743]], "isOverall": false, "label": "/api/learner/get_student_attendance?isOngoing=true&user_uli=DRM-99-229-09083-001&schedule_id=4825-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 204.75, "minX": 1.76835918E12, "maxY": 4746716.9, "series": [{"data": [[1.76835918E12, 564667.3166666667], [1.7683593E12, 4746716.9], [1.76835942E12, 399686.11666666664], [1.76835924E12, 4193052.2], [1.76835936E12, 4592773.916666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76835918E12, 446.25], [1.7683593E12, 2588.25], [1.76835942E12, 204.75], [1.76835924E12, 2304.75], [1.76835936E12, 2509.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76835942E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 696.5764705882352, "minX": 1.76835918E12, "maxY": 4233.666666666666, "series": [{"data": [[1.76835918E12, 696.5764705882352], [1.7683593E12, 2370.478701825556], [1.76835942E12, 4233.666666666666], [1.76835924E12, 2003.7266514806372], [1.76835936E12, 2504.3828451882873]], "isOverall": false, "label": "/api/learner/get_student_attendance?isOngoing=true&user_uli=DRM-99-229-09083-001&schedule_id=4825", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76835942E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 465.1294117647059, "minX": 1.76835918E12, "maxY": 3421.4871794871797, "series": [{"data": [[1.76835918E12, 465.1294117647059], [1.7683593E12, 1801.1196754563894], [1.76835942E12, 3421.4871794871797], [1.76835924E12, 1244.3872437357636], [1.76835936E12, 1901.566945606695]], "isOverall": false, "label": "/api/learner/get_student_attendance?isOngoing=true&user_uli=DRM-99-229-09083-001&schedule_id=4825", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76835942E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.0501138952164, "minX": 1.76835918E12, "maxY": 2175.0512820512818, "series": [{"data": [[1.76835918E12, 18.858823529411758], [1.7683593E12, 774.359026369168], [1.76835942E12, 2175.0512820512818], [1.76835924E12, 9.0501138952164], [1.76835936E12, 844.8305439330546]], "isOverall": false, "label": "/api/learner/get_student_attendance?isOngoing=true&user_uli=DRM-99-229-09083-001&schedule_id=4825", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76835942E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 256.0, "minX": 1.76835918E12, "maxY": 22745.0, "series": [{"data": [[1.76835918E12, 1656.0], [1.7683593E12, 22245.0], [1.76835924E12, 2054.0], [1.76835936E12, 22745.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76835918E12, 256.0], [1.7683593E12, 427.0], [1.76835924E12, 1186.0], [1.76835936E12, 855.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76835918E12, 1049.800000000001], [1.7683593E12, 1595.5000000000002], [1.76835924E12, 1956.5], [1.76835936E12, 1381.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76835918E12, 1656.0], [1.7683593E12, 22245.0], [1.76835924E12, 2054.0], [1.76835936E12, 22745.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76835918E12, 283.5], [1.7683593E12, 1281.5], [1.76835924E12, 1786.0], [1.76835936E12, 1242.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76835918E12, 1361.7499999999995], [1.7683593E12, 12410.999999999987], [1.76835924E12, 2023.2], [1.76835936E12, 11792.849999999986]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76835936E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 482.0, "minX": 1.0, "maxY": 2832.0, "series": [{"data": [[4.0, 1406.0], [2.0, 1581.0], [17.0, 1462.0], [9.0, 1161.0], [5.0, 1176.0], [3.0, 482.0], [13.0, 1269.0], [7.0, 2832.0], [15.0, 1792.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 2238.0], [8.0, 1451.5], [9.0, 1478.0], [10.0, 1498.0], [11.0, 1527.0], [3.0, 1553.0], [12.0, 1753.0], [13.0, 1884.0], [14.0, 2521.5], [15.0, 2477.0], [4.0, 1272.0], [1.0, 2064.0], [17.0, 2258.0], [5.0, 1508.0], [6.0, 1451.0], [7.0, 1457.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 481.0, "minX": 1.0, "maxY": 2832.0, "series": [{"data": [[4.0, 1405.5], [2.0, 1581.0], [17.0, 1462.0], [9.0, 1161.0], [5.0, 1176.0], [3.0, 481.0], [13.0, 1269.0], [7.0, 2832.0], [15.0, 1792.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1180.0], [8.0, 942.5], [9.0, 906.0], [10.0, 936.0], [11.0, 924.0], [3.0, 1004.0], [12.0, 1042.0], [13.0, 1114.0], [14.0, 1168.0], [15.0, 1352.0], [4.0, 865.0], [1.0, 1336.5], [17.0, 1476.0], [5.0, 899.0], [6.0, 761.5], [7.0, 916.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.76835918E12, "maxY": 8.216666666666667, "series": [{"data": [[1.76835918E12, 1.5166666666666666], [1.7683593E12, 8.216666666666667], [1.76835942E12, 0.31666666666666665], [1.76835924E12, 7.55], [1.76835936E12, 7.966666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76835942E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76835918E12, "maxY": 7.716666666666667, "series": [{"data": [[1.76835918E12, 0.5], [1.7683593E12, 0.5], [1.76835924E12, 0.5], [1.76835936E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76835918E12, 0.9166666666666666], [1.7683593E12, 7.716666666666667], [1.76835942E12, 0.65], [1.76835924E12, 6.816666666666666], [1.76835936E12, 7.466666666666667]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76835942E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76835918E12, "maxY": 7.716666666666667, "series": [{"data": [[1.76835918E12, 0.5], [1.7683593E12, 0.5], [1.76835924E12, 0.5], [1.76835936E12, 0.5]], "isOverall": false, "label": "/api/learner/get_student_attendance?isOngoing=true&user_uli=DRM-99-229-09083-001&schedule_id=4825-success", "isController": false}, {"data": [[1.76835918E12, 0.9166666666666666], [1.7683593E12, 7.716666666666667], [1.76835942E12, 0.65], [1.76835924E12, 6.816666666666666], [1.76835936E12, 7.466666666666667]], "isOverall": false, "label": "/api/learner/get_student_attendance?isOngoing=true&user_uli=DRM-99-229-09083-001&schedule_id=4825-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76835942E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76835918E12, "maxY": 7.716666666666667, "series": [{"data": [[1.76835918E12, 0.5], [1.7683593E12, 0.5], [1.76835924E12, 0.5], [1.76835936E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76835918E12, 0.9166666666666666], [1.7683593E12, 7.716666666666667], [1.76835942E12, 0.65], [1.76835924E12, 6.816666666666666], [1.76835936E12, 7.466666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76835942E12, "title": "Total Transactions Per Second"}},
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

