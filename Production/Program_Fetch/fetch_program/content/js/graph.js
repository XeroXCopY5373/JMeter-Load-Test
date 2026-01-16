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
        data: {"result": {"minY": 1037.0, "minX": 0.0, "maxY": 7903.0, "series": [{"data": [[0.0, 1037.0], [0.1, 1227.0], [0.2, 1254.0], [0.3, 1406.0], [0.4, 1462.0], [0.5, 1552.0], [0.6, 1574.0], [0.7, 1656.0], [0.8, 1709.0], [0.9, 1799.0], [1.0, 1892.0], [1.1, 1977.0], [1.2, 2032.0], [1.3, 2079.0], [1.4, 2120.0], [1.5, 2140.0], [1.6, 2150.0], [1.7, 2178.0], [1.8, 2182.0], [1.9, 2198.0], [2.0, 2294.0], [2.1, 2326.0], [2.2, 2350.0], [2.3, 2403.0], [2.4, 2462.0], [2.5, 2503.0], [2.6, 2563.0], [2.7, 2629.0], [2.8, 2667.0], [2.9, 2722.0], [3.0, 2780.0], [3.1, 2827.0], [3.2, 2890.0], [3.3, 2921.0], [3.4, 2972.0], [3.5, 3046.0], [3.6, 3165.0], [3.7, 3221.0], [3.8, 3339.0], [3.9, 3390.0], [4.0, 3418.0], [4.1, 3466.0], [4.2, 3491.0], [4.3, 3507.0], [4.4, 3541.0], [4.5, 3577.0], [4.6, 3589.0], [4.7, 3627.0], [4.8, 3657.0], [4.9, 3675.0], [5.0, 3718.0], [5.1, 3744.0], [5.2, 3852.0], [5.3, 3885.0], [5.4, 3887.0], [5.5, 3921.0], [5.6, 3934.0], [5.7, 3957.0], [5.8, 3972.0], [5.9, 3989.0], [6.0, 3996.0], [6.1, 4011.0], [6.2, 4018.0], [6.3, 4024.0], [6.4, 4030.0], [6.5, 4046.0], [6.6, 4047.0], [6.7, 4058.0], [6.8, 4066.0], [6.9, 4071.0], [7.0, 4074.0], [7.1, 4084.0], [7.2, 4089.0], [7.3, 4096.0], [7.4, 4097.0], [7.5, 4104.0], [7.6, 4113.0], [7.7, 4120.0], [7.8, 4121.0], [7.9, 4123.0], [8.0, 4125.0], [8.1, 4129.0], [8.2, 4137.0], [8.3, 4140.0], [8.4, 4152.0], [8.5, 4156.0], [8.6, 4157.0], [8.7, 4160.0], [8.8, 4161.0], [8.9, 4170.0], [9.0, 4173.0], [9.1, 4181.0], [9.2, 4187.0], [9.3, 4200.0], [9.4, 4203.0], [9.5, 4209.0], [9.6, 4211.0], [9.7, 4220.0], [9.8, 4222.0], [9.9, 4224.0], [10.0, 4228.0], [10.1, 4231.0], [10.2, 4236.0], [10.3, 4243.0], [10.4, 4248.0], [10.5, 4252.0], [10.6, 4255.0], [10.7, 4258.0], [10.8, 4262.0], [10.9, 4269.0], [11.0, 4272.0], [11.1, 4274.0], [11.2, 4278.0], [11.3, 4280.0], [11.4, 4282.0], [11.5, 4290.0], [11.6, 4294.0], [11.7, 4300.0], [11.8, 4304.0], [11.9, 4307.0], [12.0, 4308.0], [12.1, 4310.0], [12.2, 4315.0], [12.3, 4317.0], [12.4, 4319.0], [12.5, 4321.0], [12.6, 4325.0], [12.7, 4330.0], [12.8, 4331.0], [12.9, 4334.0], [13.0, 4337.0], [13.1, 4339.0], [13.2, 4345.0], [13.3, 4348.0], [13.4, 4349.0], [13.5, 4351.0], [13.6, 4353.0], [13.7, 4356.0], [13.8, 4360.0], [13.9, 4363.0], [14.0, 4367.0], [14.1, 4368.0], [14.2, 4374.0], [14.3, 4377.0], [14.4, 4379.0], [14.5, 4381.0], [14.6, 4383.0], [14.7, 4383.0], [14.8, 4387.0], [14.9, 4388.0], [15.0, 4390.0], [15.1, 4393.0], [15.2, 4394.0], [15.3, 4396.0], [15.4, 4401.0], [15.5, 4402.0], [15.6, 4405.0], [15.7, 4408.0], [15.8, 4409.0], [15.9, 4410.0], [16.0, 4414.0], [16.1, 4417.0], [16.2, 4419.0], [16.3, 4421.0], [16.4, 4421.0], [16.5, 4423.0], [16.6, 4423.0], [16.7, 4424.0], [16.8, 4429.0], [16.9, 4431.0], [17.0, 4432.0], [17.1, 4437.0], [17.2, 4439.0], [17.3, 4441.0], [17.4, 4445.0], [17.5, 4448.0], [17.6, 4449.0], [17.7, 4450.0], [17.8, 4451.0], [17.9, 4452.0], [18.0, 4454.0], [18.1, 4459.0], [18.2, 4461.0], [18.3, 4464.0], [18.4, 4467.0], [18.5, 4469.0], [18.6, 4472.0], [18.7, 4472.0], [18.8, 4473.0], [18.9, 4476.0], [19.0, 4478.0], [19.1, 4479.0], [19.2, 4479.0], [19.3, 4480.0], [19.4, 4481.0], [19.5, 4483.0], [19.6, 4484.0], [19.7, 4485.0], [19.8, 4488.0], [19.9, 4489.0], [20.0, 4490.0], [20.1, 4491.0], [20.2, 4491.0], [20.3, 4493.0], [20.4, 4497.0], [20.5, 4498.0], [20.6, 4499.0], [20.7, 4499.0], [20.8, 4499.0], [20.9, 4500.0], [21.0, 4501.0], [21.1, 4502.0], [21.2, 4505.0], [21.3, 4507.0], [21.4, 4508.0], [21.5, 4511.0], [21.6, 4514.0], [21.7, 4518.0], [21.8, 4520.0], [21.9, 4523.0], [22.0, 4527.0], [22.1, 4528.0], [22.2, 4529.0], [22.3, 4530.0], [22.4, 4533.0], [22.5, 4536.0], [22.6, 4538.0], [22.7, 4538.0], [22.8, 4541.0], [22.9, 4545.0], [23.0, 4546.0], [23.1, 4548.0], [23.2, 4548.0], [23.3, 4549.0], [23.4, 4553.0], [23.5, 4553.0], [23.6, 4555.0], [23.7, 4556.0], [23.8, 4558.0], [23.9, 4558.0], [24.0, 4560.0], [24.1, 4561.0], [24.2, 4563.0], [24.3, 4565.0], [24.4, 4567.0], [24.5, 4569.0], [24.6, 4570.0], [24.7, 4572.0], [24.8, 4574.0], [24.9, 4576.0], [25.0, 4577.0], [25.1, 4581.0], [25.2, 4581.0], [25.3, 4583.0], [25.4, 4587.0], [25.5, 4592.0], [25.6, 4598.0], [25.7, 4602.0], [25.8, 4602.0], [25.9, 4605.0], [26.0, 4606.0], [26.1, 4608.0], [26.2, 4612.0], [26.3, 4614.0], [26.4, 4616.0], [26.5, 4617.0], [26.6, 4620.0], [26.7, 4621.0], [26.8, 4623.0], [26.9, 4627.0], [27.0, 4629.0], [27.1, 4629.0], [27.2, 4630.0], [27.3, 4631.0], [27.4, 4633.0], [27.5, 4634.0], [27.6, 4637.0], [27.7, 4638.0], [27.8, 4639.0], [27.9, 4641.0], [28.0, 4641.0], [28.1, 4642.0], [28.2, 4644.0], [28.3, 4647.0], [28.4, 4648.0], [28.5, 4650.0], [28.6, 4651.0], [28.7, 4652.0], [28.8, 4654.0], [28.9, 4658.0], [29.0, 4660.0], [29.1, 4661.0], [29.2, 4663.0], [29.3, 4664.0], [29.4, 4667.0], [29.5, 4670.0], [29.6, 4672.0], [29.7, 4673.0], [29.8, 4679.0], [29.9, 4681.0], [30.0, 4682.0], [30.1, 4685.0], [30.2, 4690.0], [30.3, 4691.0], [30.4, 4692.0], [30.5, 4696.0], [30.6, 4697.0], [30.7, 4698.0], [30.8, 4699.0], [30.9, 4700.0], [31.0, 4703.0], [31.1, 4706.0], [31.2, 4707.0], [31.3, 4707.0], [31.4, 4708.0], [31.5, 4713.0], [31.6, 4715.0], [31.7, 4716.0], [31.8, 4718.0], [31.9, 4719.0], [32.0, 4720.0], [32.1, 4722.0], [32.2, 4722.0], [32.3, 4726.0], [32.4, 4728.0], [32.5, 4728.0], [32.6, 4730.0], [32.7, 4732.0], [32.8, 4734.0], [32.9, 4736.0], [33.0, 4739.0], [33.1, 4740.0], [33.2, 4741.0], [33.3, 4742.0], [33.4, 4744.0], [33.5, 4748.0], [33.6, 4748.0], [33.7, 4749.0], [33.8, 4751.0], [33.9, 4751.0], [34.0, 4752.0], [34.1, 4755.0], [34.2, 4759.0], [34.3, 4759.0], [34.4, 4760.0], [34.5, 4760.0], [34.6, 4762.0], [34.7, 4766.0], [34.8, 4767.0], [34.9, 4768.0], [35.0, 4769.0], [35.1, 4772.0], [35.2, 4772.0], [35.3, 4775.0], [35.4, 4776.0], [35.5, 4778.0], [35.6, 4779.0], [35.7, 4780.0], [35.8, 4781.0], [35.9, 4783.0], [36.0, 4783.0], [36.1, 4784.0], [36.2, 4786.0], [36.3, 4789.0], [36.4, 4789.0], [36.5, 4790.0], [36.6, 4795.0], [36.7, 4796.0], [36.8, 4797.0], [36.9, 4798.0], [37.0, 4799.0], [37.1, 4801.0], [37.2, 4802.0], [37.3, 4803.0], [37.4, 4805.0], [37.5, 4807.0], [37.6, 4808.0], [37.7, 4809.0], [37.8, 4810.0], [37.9, 4812.0], [38.0, 4812.0], [38.1, 4815.0], [38.2, 4816.0], [38.3, 4818.0], [38.4, 4820.0], [38.5, 4824.0], [38.6, 4825.0], [38.7, 4826.0], [38.8, 4827.0], [38.9, 4829.0], [39.0, 4830.0], [39.1, 4831.0], [39.2, 4833.0], [39.3, 4835.0], [39.4, 4837.0], [39.5, 4838.0], [39.6, 4840.0], [39.7, 4841.0], [39.8, 4845.0], [39.9, 4846.0], [40.0, 4847.0], [40.1, 4849.0], [40.2, 4851.0], [40.3, 4851.0], [40.4, 4855.0], [40.5, 4857.0], [40.6, 4858.0], [40.7, 4860.0], [40.8, 4863.0], [40.9, 4864.0], [41.0, 4865.0], [41.1, 4867.0], [41.2, 4869.0], [41.3, 4870.0], [41.4, 4871.0], [41.5, 4872.0], [41.6, 4874.0], [41.7, 4880.0], [41.8, 4881.0], [41.9, 4883.0], [42.0, 4887.0], [42.1, 4888.0], [42.2, 4888.0], [42.3, 4889.0], [42.4, 4890.0], [42.5, 4891.0], [42.6, 4893.0], [42.7, 4894.0], [42.8, 4896.0], [42.9, 4897.0], [43.0, 4898.0], [43.1, 4899.0], [43.2, 4899.0], [43.3, 4899.0], [43.4, 4901.0], [43.5, 4903.0], [43.6, 4907.0], [43.7, 4909.0], [43.8, 4910.0], [43.9, 4912.0], [44.0, 4913.0], [44.1, 4914.0], [44.2, 4916.0], [44.3, 4918.0], [44.4, 4918.0], [44.5, 4919.0], [44.6, 4921.0], [44.7, 4923.0], [44.8, 4923.0], [44.9, 4926.0], [45.0, 4928.0], [45.1, 4929.0], [45.2, 4931.0], [45.3, 4933.0], [45.4, 4934.0], [45.5, 4936.0], [45.6, 4939.0], [45.7, 4939.0], [45.8, 4940.0], [45.9, 4941.0], [46.0, 4943.0], [46.1, 4944.0], [46.2, 4947.0], [46.3, 4948.0], [46.4, 4951.0], [46.5, 4951.0], [46.6, 4952.0], [46.7, 4953.0], [46.8, 4955.0], [46.9, 4957.0], [47.0, 4958.0], [47.1, 4959.0], [47.2, 4960.0], [47.3, 4961.0], [47.4, 4963.0], [47.5, 4965.0], [47.6, 4968.0], [47.7, 4969.0], [47.8, 4969.0], [47.9, 4970.0], [48.0, 4971.0], [48.1, 4972.0], [48.2, 4973.0], [48.3, 4975.0], [48.4, 4978.0], [48.5, 4980.0], [48.6, 4980.0], [48.7, 4981.0], [48.8, 4983.0], [48.9, 4984.0], [49.0, 4986.0], [49.1, 4989.0], [49.2, 4989.0], [49.3, 4990.0], [49.4, 4992.0], [49.5, 4994.0], [49.6, 4996.0], [49.7, 4999.0], [49.8, 5001.0], [49.9, 5002.0], [50.0, 5004.0], [50.1, 5004.0], [50.2, 5005.0], [50.3, 5006.0], [50.4, 5008.0], [50.5, 5009.0], [50.6, 5009.0], [50.7, 5010.0], [50.8, 5012.0], [50.9, 5013.0], [51.0, 5016.0], [51.1, 5017.0], [51.2, 5018.0], [51.3, 5019.0], [51.4, 5019.0], [51.5, 5020.0], [51.6, 5021.0], [51.7, 5022.0], [51.8, 5023.0], [51.9, 5024.0], [52.0, 5027.0], [52.1, 5029.0], [52.2, 5029.0], [52.3, 5030.0], [52.4, 5032.0], [52.5, 5032.0], [52.6, 5034.0], [52.7, 5035.0], [52.8, 5037.0], [52.9, 5039.0], [53.0, 5041.0], [53.1, 5042.0], [53.2, 5045.0], [53.3, 5046.0], [53.4, 5047.0], [53.5, 5048.0], [53.6, 5050.0], [53.7, 5051.0], [53.8, 5051.0], [53.9, 5052.0], [54.0, 5054.0], [54.1, 5054.0], [54.2, 5057.0], [54.3, 5059.0], [54.4, 5060.0], [54.5, 5061.0], [54.6, 5062.0], [54.7, 5063.0], [54.8, 5064.0], [54.9, 5069.0], [55.0, 5070.0], [55.1, 5072.0], [55.2, 5076.0], [55.3, 5077.0], [55.4, 5078.0], [55.5, 5080.0], [55.6, 5080.0], [55.7, 5082.0], [55.8, 5086.0], [55.9, 5086.0], [56.0, 5089.0], [56.1, 5089.0], [56.2, 5090.0], [56.3, 5090.0], [56.4, 5091.0], [56.5, 5093.0], [56.6, 5097.0], [56.7, 5098.0], [56.8, 5100.0], [56.9, 5101.0], [57.0, 5102.0], [57.1, 5105.0], [57.2, 5106.0], [57.3, 5108.0], [57.4, 5109.0], [57.5, 5109.0], [57.6, 5110.0], [57.7, 5111.0], [57.8, 5114.0], [57.9, 5119.0], [58.0, 5119.0], [58.1, 5119.0], [58.2, 5120.0], [58.3, 5124.0], [58.4, 5126.0], [58.5, 5127.0], [58.6, 5128.0], [58.7, 5129.0], [58.8, 5130.0], [58.9, 5131.0], [59.0, 5132.0], [59.1, 5133.0], [59.2, 5135.0], [59.3, 5136.0], [59.4, 5137.0], [59.5, 5139.0], [59.6, 5139.0], [59.7, 5140.0], [59.8, 5141.0], [59.9, 5144.0], [60.0, 5145.0], [60.1, 5147.0], [60.2, 5150.0], [60.3, 5154.0], [60.4, 5154.0], [60.5, 5155.0], [60.6, 5156.0], [60.7, 5158.0], [60.8, 5158.0], [60.9, 5161.0], [61.0, 5161.0], [61.1, 5163.0], [61.2, 5164.0], [61.3, 5166.0], [61.4, 5167.0], [61.5, 5168.0], [61.6, 5169.0], [61.7, 5169.0], [61.8, 5171.0], [61.9, 5171.0], [62.0, 5172.0], [62.1, 5173.0], [62.2, 5176.0], [62.3, 5178.0], [62.4, 5179.0], [62.5, 5180.0], [62.6, 5182.0], [62.7, 5183.0], [62.8, 5184.0], [62.9, 5187.0], [63.0, 5189.0], [63.1, 5189.0], [63.2, 5190.0], [63.3, 5190.0], [63.4, 5190.0], [63.5, 5190.0], [63.6, 5192.0], [63.7, 5192.0], [63.8, 5193.0], [63.9, 5194.0], [64.0, 5197.0], [64.1, 5198.0], [64.2, 5199.0], [64.3, 5199.0], [64.4, 5201.0], [64.5, 5203.0], [64.6, 5204.0], [64.7, 5204.0], [64.8, 5205.0], [64.9, 5206.0], [65.0, 5208.0], [65.1, 5208.0], [65.2, 5209.0], [65.3, 5209.0], [65.4, 5211.0], [65.5, 5211.0], [65.6, 5212.0], [65.7, 5214.0], [65.8, 5216.0], [65.9, 5217.0], [66.0, 5218.0], [66.1, 5219.0], [66.2, 5222.0], [66.3, 5222.0], [66.4, 5223.0], [66.5, 5223.0], [66.6, 5225.0], [66.7, 5227.0], [66.8, 5229.0], [66.9, 5230.0], [67.0, 5232.0], [67.1, 5233.0], [67.2, 5235.0], [67.3, 5238.0], [67.4, 5239.0], [67.5, 5239.0], [67.6, 5240.0], [67.7, 5241.0], [67.8, 5241.0], [67.9, 5243.0], [68.0, 5245.0], [68.1, 5247.0], [68.2, 5248.0], [68.3, 5249.0], [68.4, 5249.0], [68.5, 5250.0], [68.6, 5251.0], [68.7, 5251.0], [68.8, 5252.0], [68.9, 5253.0], [69.0, 5256.0], [69.1, 5256.0], [69.2, 5257.0], [69.3, 5259.0], [69.4, 5259.0], [69.5, 5260.0], [69.6, 5260.0], [69.7, 5261.0], [69.8, 5262.0], [69.9, 5263.0], [70.0, 5263.0], [70.1, 5264.0], [70.2, 5266.0], [70.3, 5268.0], [70.4, 5269.0], [70.5, 5270.0], [70.6, 5271.0], [70.7, 5272.0], [70.8, 5273.0], [70.9, 5274.0], [71.0, 5275.0], [71.1, 5276.0], [71.2, 5277.0], [71.3, 5279.0], [71.4, 5279.0], [71.5, 5280.0], [71.6, 5281.0], [71.7, 5282.0], [71.8, 5284.0], [71.9, 5285.0], [72.0, 5286.0], [72.1, 5286.0], [72.2, 5288.0], [72.3, 5288.0], [72.4, 5291.0], [72.5, 5292.0], [72.6, 5293.0], [72.7, 5294.0], [72.8, 5294.0], [72.9, 5296.0], [73.0, 5298.0], [73.1, 5300.0], [73.2, 5300.0], [73.3, 5301.0], [73.4, 5302.0], [73.5, 5302.0], [73.6, 5303.0], [73.7, 5304.0], [73.8, 5305.0], [73.9, 5306.0], [74.0, 5307.0], [74.1, 5308.0], [74.2, 5308.0], [74.3, 5310.0], [74.4, 5311.0], [74.5, 5314.0], [74.6, 5314.0], [74.7, 5315.0], [74.8, 5316.0], [74.9, 5319.0], [75.0, 5319.0], [75.1, 5320.0], [75.2, 5321.0], [75.3, 5321.0], [75.4, 5322.0], [75.5, 5323.0], [75.6, 5325.0], [75.7, 5327.0], [75.8, 5329.0], [75.9, 5330.0], [76.0, 5331.0], [76.1, 5331.0], [76.2, 5331.0], [76.3, 5332.0], [76.4, 5334.0], [76.5, 5335.0], [76.6, 5338.0], [76.7, 5338.0], [76.8, 5338.0], [76.9, 5339.0], [77.0, 5340.0], [77.1, 5340.0], [77.2, 5341.0], [77.3, 5341.0], [77.4, 5343.0], [77.5, 5343.0], [77.6, 5346.0], [77.7, 5347.0], [77.8, 5347.0], [77.9, 5348.0], [78.0, 5349.0], [78.1, 5350.0], [78.2, 5351.0], [78.3, 5352.0], [78.4, 5354.0], [78.5, 5355.0], [78.6, 5357.0], [78.7, 5359.0], [78.8, 5360.0], [78.9, 5361.0], [79.0, 5361.0], [79.1, 5362.0], [79.2, 5365.0], [79.3, 5367.0], [79.4, 5368.0], [79.5, 5370.0], [79.6, 5371.0], [79.7, 5372.0], [79.8, 5373.0], [79.9, 5374.0], [80.0, 5376.0], [80.1, 5377.0], [80.2, 5380.0], [80.3, 5382.0], [80.4, 5382.0], [80.5, 5383.0], [80.6, 5385.0], [80.7, 5387.0], [80.8, 5388.0], [80.9, 5388.0], [81.0, 5389.0], [81.1, 5389.0], [81.2, 5390.0], [81.3, 5391.0], [81.4, 5394.0], [81.5, 5396.0], [81.6, 5397.0], [81.7, 5399.0], [81.8, 5399.0], [81.9, 5399.0], [82.0, 5400.0], [82.1, 5402.0], [82.2, 5403.0], [82.3, 5405.0], [82.4, 5407.0], [82.5, 5408.0], [82.6, 5409.0], [82.7, 5410.0], [82.8, 5414.0], [82.9, 5415.0], [83.0, 5417.0], [83.1, 5417.0], [83.2, 5419.0], [83.3, 5420.0], [83.4, 5424.0], [83.5, 5425.0], [83.6, 5427.0], [83.7, 5428.0], [83.8, 5429.0], [83.9, 5432.0], [84.0, 5433.0], [84.1, 5434.0], [84.2, 5436.0], [84.3, 5439.0], [84.4, 5439.0], [84.5, 5440.0], [84.6, 5441.0], [84.7, 5445.0], [84.8, 5446.0], [84.9, 5448.0], [85.0, 5449.0], [85.1, 5450.0], [85.2, 5452.0], [85.3, 5454.0], [85.4, 5459.0], [85.5, 5460.0], [85.6, 5461.0], [85.7, 5463.0], [85.8, 5465.0], [85.9, 5467.0], [86.0, 5469.0], [86.1, 5470.0], [86.2, 5471.0], [86.3, 5477.0], [86.4, 5478.0], [86.5, 5480.0], [86.6, 5481.0], [86.7, 5485.0], [86.8, 5487.0], [86.9, 5489.0], [87.0, 5491.0], [87.1, 5492.0], [87.2, 5496.0], [87.3, 5498.0], [87.4, 5499.0], [87.5, 5504.0], [87.6, 5506.0], [87.7, 5509.0], [87.8, 5509.0], [87.9, 5510.0], [88.0, 5510.0], [88.1, 5514.0], [88.2, 5520.0], [88.3, 5521.0], [88.4, 5523.0], [88.5, 5528.0], [88.6, 5530.0], [88.7, 5531.0], [88.8, 5534.0], [88.9, 5535.0], [89.0, 5538.0], [89.1, 5539.0], [89.2, 5544.0], [89.3, 5545.0], [89.4, 5547.0], [89.5, 5553.0], [89.6, 5556.0], [89.7, 5561.0], [89.8, 5565.0], [89.9, 5569.0], [90.0, 5575.0], [90.1, 5578.0], [90.2, 5583.0], [90.3, 5586.0], [90.4, 5596.0], [90.5, 5597.0], [90.6, 5603.0], [90.7, 5606.0], [90.8, 5610.0], [90.9, 5613.0], [91.0, 5619.0], [91.1, 5621.0], [91.2, 5625.0], [91.3, 5632.0], [91.4, 5634.0], [91.5, 5638.0], [91.6, 5646.0], [91.7, 5653.0], [91.8, 5656.0], [91.9, 5666.0], [92.0, 5667.0], [92.1, 5673.0], [92.2, 5682.0], [92.3, 5690.0], [92.4, 5698.0], [92.5, 5701.0], [92.6, 5708.0], [92.7, 5716.0], [92.8, 5722.0], [92.9, 5728.0], [93.0, 5734.0], [93.1, 5747.0], [93.2, 5762.0], [93.3, 5768.0], [93.4, 5775.0], [93.5, 5788.0], [93.6, 5814.0], [93.7, 5823.0], [93.8, 5836.0], [93.9, 5838.0], [94.0, 5843.0], [94.1, 5885.0], [94.2, 5909.0], [94.3, 6130.0], [94.4, 6298.0], [94.5, 6309.0], [94.6, 6342.0], [94.7, 6372.0], [94.8, 6397.0], [94.9, 6426.0], [95.0, 6443.0], [95.1, 6493.0], [95.2, 6499.0], [95.3, 6517.0], [95.4, 6539.0], [95.5, 6551.0], [95.6, 6568.0], [95.7, 6585.0], [95.8, 6588.0], [95.9, 6591.0], [96.0, 6600.0], [96.1, 6615.0], [96.2, 6639.0], [96.3, 6669.0], [96.4, 6675.0], [96.5, 6686.0], [96.6, 6704.0], [96.7, 6723.0], [96.8, 6769.0], [96.9, 6784.0], [97.0, 6805.0], [97.1, 6841.0], [97.2, 6860.0], [97.3, 6880.0], [97.4, 6916.0], [97.5, 6941.0], [97.6, 6959.0], [97.7, 6988.0], [97.8, 7064.0], [97.9, 7096.0], [98.0, 7145.0], [98.1, 7183.0], [98.2, 7216.0], [98.3, 7257.0], [98.4, 7281.0], [98.5, 7284.0], [98.6, 7305.0], [98.7, 7325.0], [98.8, 7351.0], [98.9, 7399.0], [99.0, 7407.0], [99.1, 7445.0], [99.2, 7473.0], [99.3, 7513.0], [99.4, 7545.0], [99.5, 7569.0], [99.6, 7650.0], [99.7, 7741.0], [99.8, 7798.0], [99.9, 7835.0], [100.0, 7903.0]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1000.0, "maxY": 278.0, "series": [{"data": [[1000.0, 1.0], [1100.0, 1.0], [1200.0, 5.0], [1300.0, 2.0], [1400.0, 4.0], [1500.0, 6.0], [1600.0, 6.0], [1700.0, 4.0], [1800.0, 3.0], [1900.0, 4.0], [2000.0, 6.0], [2100.0, 18.0], [2200.0, 4.0], [2300.0, 8.0], [2400.0, 6.0], [2500.0, 6.0], [2600.0, 7.0], [2700.0, 6.0], [2800.0, 5.0], [2900.0, 7.0], [3000.0, 3.0], [3100.0, 4.0], [3200.0, 3.0], [3300.0, 5.0], [3400.0, 11.0], [3500.0, 12.0], [3700.0, 6.0], [3600.0, 9.0], [3800.0, 10.0], [3900.0, 19.0], [4000.0, 43.0], [4100.0, 59.0], [4200.0, 76.0], [4300.0, 116.0], [4500.0, 152.0], [4600.0, 166.0], [4400.0, 172.0], [4700.0, 194.0], [4800.0, 198.0], [4900.0, 202.0], [5100.0, 238.0], [5000.0, 223.0], [5200.0, 277.0], [5300.0, 278.0], [5400.0, 174.0], [5500.0, 98.0], [5600.0, 61.0], [5700.0, 34.0], [5800.0, 20.0], [5900.0, 2.0], [6100.0, 1.0], [6000.0, 2.0], [6300.0, 12.0], [6200.0, 3.0], [6500.0, 24.0], [6600.0, 19.0], [6400.0, 13.0], [6900.0, 13.0], [6700.0, 12.0], [6800.0, 12.0], [7100.0, 9.0], [7000.0, 5.0], [7300.0, 11.0], [7200.0, 12.0], [7400.0, 11.0], [7500.0, 9.0], [7600.0, 4.0], [7700.0, 4.0], [7800.0, 5.0], [7900.0, 1.0]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3036.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 109.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3036.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 66.81546134663343, "minX": 1.76818524E12, "maxY": 80.0, "series": [{"data": [[1.76818536E12, 80.0], [1.76818524E12, 66.81546134663343], [1.76818542E12, 76.40114285714287], [1.7681853E12, 80.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76818542E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1140.5, "minX": 1.0, "maxY": 5553.0, "series": [{"data": [[2.0, 3934.0], [3.0, 3992.0], [4.0, 3991.0], [5.0, 4021.0], [6.0, 3689.0], [7.0, 3885.0], [8.0, 3884.0], [9.0, 4071.0], [10.0, 1972.8], [11.0, 1140.5], [12.0, 4098.5], [13.0, 1166.0], [14.0, 4068.0], [15.0, 2634.0], [16.0, 2683.0], [17.0, 2262.6666666666665], [18.0, 2362.0], [19.0, 2785.0], [20.0, 2459.6666666666665], [21.0, 2915.0], [22.0, 3886.0], [23.0, 1977.0], [24.0, 2736.2], [25.0, 2811.0], [26.0, 2771.5], [27.0, 1681.5], [28.0, 2743.2], [29.0, 2376.6666666666665], [30.0, 3130.0], [31.0, 2835.3333333333335], [32.0, 3313.6666666666665], [33.0, 2571.0], [34.0, 2451.0], [35.0, 3888.0], [36.0, 2774.0], [37.0, 2907.0], [38.0, 2119.75], [39.0, 2992.6], [40.0, 2204.0], [41.0, 3272.4], [42.0, 3065.3333333333335], [43.0, 3002.75], [44.0, 2199.1666666666665], [45.0, 3768.0], [46.0, 3266.3333333333335], [47.0, 3154.25], [49.0, 3602.6], [50.0, 3456.0], [51.0, 2530.8], [52.0, 4639.666666666667], [53.0, 3706.666666666667], [54.0, 3765.3333333333335], [55.0, 3557.0], [56.0, 2847.0], [57.0, 3828.1666666666665], [58.0, 3494.4], [59.0, 3607.25], [60.0, 3831.0], [61.0, 3937.6666666666665], [63.0, 3764.2], [62.0, 5553.0], [64.0, 4219.666666666667], [65.0, 3875.6], [66.0, 4422.0], [67.0, 4037.75], [68.0, 3880.5], [69.0, 4251.5], [70.0, 3676.1428571428573], [71.0, 4032.0], [72.0, 3824.5], [73.0, 3690.0], [74.0, 3934.0], [75.0, 3663.5555555555557], [76.0, 3678.4], [77.0, 3839.0], [79.0, 4251.0], [78.0, 4245.0], [80.0, 5086.158708347639], [1.0, 3965.0]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}, {"data": [[77.32699619771853, 4944.191381495554]], "isOverall": false, "label": "/api/program/fetch/-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1530.4833333333333, "minX": 1.76818524E12, "maxY": 42014.9, "series": [{"data": [[1.76818536E12, 42014.9], [1.76818524E12, 20557.433333333334], [1.76818542E12, 39390.26666666667], [1.7681853E12, 41935.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76818536E12, 3591.483333333333], [1.76818524E12, 1530.4833333333333], [1.76818542E12, 3339.5833333333335], [1.7681853E12, 3583.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76818542E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3898.1446384039914, "minX": 1.76818524E12, "maxY": 5127.08501594049, "series": [{"data": [[1.76818536E12, 5127.08501594049], [1.76818524E12, 3898.1446384039914], [1.76818542E12, 5049.01371428571], [1.7681853E12, 5109.944621938226]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76818542E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3897.847880299253, "minX": 1.76818524E12, "maxY": 5126.926673751321, "series": [{"data": [[1.76818536E12, 5126.926673751321], [1.76818524E12, 3897.847880299253], [1.76818542E12, 5048.844571428562], [1.7681853E12, 5109.44941427049]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76818542E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.78852284803401, "minX": 1.76818524E12, "maxY": 30.87281795511218, "series": [{"data": [[1.76818536E12, 10.78852284803401], [1.76818524E12, 30.87281795511218], [1.76818542E12, 11.298285714285717], [1.7681853E12, 13.425985090521833]], "isOverall": false, "label": "/api/program/fetch/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76818542E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1037.0, "minX": 1.76818524E12, "maxY": 7903.0, "series": [{"data": [[1.76818536E12, 7866.0], [1.76818524E12, 2785.0], [1.76818542E12, 7766.0], [1.7681853E12, 7903.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76818536E12, 6499.0], [1.76818524E12, 1037.0], [1.76818542E12, 6941.0], [1.7681853E12, 6568.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76818536E12, 7736.3], [1.76818524E12, 2741.2000000000003], [1.76818542E12, 7567.6], [1.7681853E12, 7833.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76818536E12, 7866.0], [1.76818524E12, 2785.0], [1.76818542E12, 7766.0], [1.7681853E12, 7903.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76818536E12, 7246.5], [1.76818524E12, 1654.5], [1.76818542E12, 7378.5], [1.7681853E12, 7303.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76818536E12, 7828.6], [1.76818524E12, 2770.7], [1.76818542E12, 7672.5], [1.7681853E12, 7872.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76818542E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1318.0, "minX": 4.0, "maxY": 7694.0, "series": [{"data": [[8.0, 1318.0], [4.0, 7694.0], [10.0, 7269.5], [11.0, 7340.5], [22.0, 6915.0], [6.0, 1371.0], [25.0, 7449.0], [7.0, 4282.0], [14.0, 2710.0], [28.0, 7064.0], [15.0, 7324.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 4442.0], [4.0, 6754.0], [6.0, 5054.5], [7.0, 4942.0], [8.0, 5019.0], [9.0, 4895.5], [10.0, 4888.0], [11.0, 4894.0], [12.0, 5020.5], [13.0, 4648.5], [14.0, 4655.5], [15.0, 4833.0], [16.0, 4905.0], [17.0, 4524.0], [18.0, 4834.0], [19.0, 5262.0], [20.0, 5028.0], [21.0, 5218.0], [22.0, 5168.5], [23.0, 5194.0], [24.0, 5128.5], [25.0, 5098.5], [26.0, 5273.0], [27.0, 5389.0], [28.0, 5250.0], [29.0, 5400.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1313.0, "minX": 4.0, "maxY": 7694.0, "series": [{"data": [[8.0, 1313.0], [4.0, 7694.0], [10.0, 7269.5], [11.0, 7340.5], [22.0, 6915.0], [6.0, 1371.0], [25.0, 7449.0], [7.0, 4281.5], [14.0, 2710.0], [28.0, 7064.0], [15.0, 7324.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 4442.0], [4.0, 6754.0], [6.0, 5054.5], [7.0, 4942.0], [8.0, 5019.0], [9.0, 4895.5], [10.0, 4887.0], [11.0, 4893.0], [12.0, 5020.0], [13.0, 4648.5], [14.0, 4655.5], [15.0, 4833.0], [16.0, 4905.0], [17.0, 4523.0], [18.0, 4834.0], [19.0, 5262.0], [20.0, 5028.0], [21.0, 5218.0], [22.0, 5168.5], [23.0, 5194.0], [24.0, 5128.0], [25.0, 5098.5], [26.0, 5272.5], [27.0, 5389.0], [28.0, 5250.0], [29.0, 5400.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.016666666666667, "minX": 1.76818524E12, "maxY": 15.683333333333334, "series": [{"data": [[1.76818536E12, 15.683333333333334], [1.76818524E12, 8.016666666666667], [1.76818542E12, 13.25], [1.7681853E12, 15.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76818542E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76818524E12, "maxY": 15.183333333333334, "series": [{"data": [[1.76818536E12, 0.5], [1.76818524E12, 0.5], [1.76818542E12, 0.5], [1.7681853E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76818536E12, 15.183333333333334], [1.76818524E12, 6.183333333333334], [1.76818542E12, 14.083333333333334], [1.7681853E12, 15.15]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76818542E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76818524E12, "maxY": 15.183333333333334, "series": [{"data": [[1.76818536E12, 0.5], [1.76818524E12, 0.5], [1.76818542E12, 0.5], [1.7681853E12, 0.5]], "isOverall": false, "label": "/api/program/fetch/-success", "isController": false}, {"data": [[1.76818536E12, 15.183333333333334], [1.76818524E12, 6.183333333333334], [1.76818542E12, 14.083333333333334], [1.7681853E12, 15.15]], "isOverall": false, "label": "/api/program/fetch/-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76818542E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76818524E12, "maxY": 15.183333333333334, "series": [{"data": [[1.76818536E12, 0.5], [1.76818524E12, 0.5], [1.76818542E12, 0.5], [1.7681853E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76818536E12, 15.183333333333334], [1.76818524E12, 6.183333333333334], [1.76818542E12, 14.083333333333334], [1.7681853E12, 15.15]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76818542E12, "title": "Total Transactions Per Second"}},
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

