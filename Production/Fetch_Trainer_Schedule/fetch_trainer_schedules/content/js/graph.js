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
        data: {"result": {"minY": 354.0, "minX": 0.0, "maxY": 9518.0, "series": [{"data": [[0.0, 354.0], [0.1, 418.0], [0.2, 570.0], [0.3, 776.0], [0.4, 902.0], [0.5, 1006.0], [0.6, 1087.0], [0.7, 1153.0], [0.8, 1173.0], [0.9, 1238.0], [1.0, 1358.0], [1.1, 1525.0], [1.2, 1636.0], [1.3, 1654.0], [1.4, 1765.0], [1.5, 1808.0], [1.6, 1929.0], [1.7, 2034.0], [1.8, 2128.0], [1.9, 2162.0], [2.0, 2221.0], [2.1, 2273.0], [2.2, 2367.0], [2.3, 2399.0], [2.4, 2444.0], [2.5, 2505.0], [2.6, 2541.0], [2.7, 2631.0], [2.8, 2757.0], [2.9, 2822.0], [3.0, 2943.0], [3.1, 2998.0], [3.2, 3065.0], [3.3, 3119.0], [3.4, 3140.0], [3.5, 3189.0], [3.6, 3218.0], [3.7, 3226.0], [3.8, 3263.0], [3.9, 3286.0], [4.0, 3307.0], [4.1, 3339.0], [4.2, 3378.0], [4.3, 3409.0], [4.4, 3447.0], [4.5, 3489.0], [4.6, 3536.0], [4.7, 3578.0], [4.8, 3593.0], [4.9, 3604.0], [5.0, 3623.0], [5.1, 3639.0], [5.2, 3645.0], [5.3, 3649.0], [5.4, 3695.0], [5.5, 3710.0], [5.6, 3719.0], [5.7, 3751.0], [5.8, 3773.0], [5.9, 3799.0], [6.0, 3815.0], [6.1, 3849.0], [6.2, 3862.0], [6.3, 3893.0], [6.4, 3912.0], [6.5, 3943.0], [6.6, 3952.0], [6.7, 3981.0], [6.8, 4000.0], [6.9, 4024.0], [7.0, 4032.0], [7.1, 4055.0], [7.2, 4073.0], [7.3, 4087.0], [7.4, 4093.0], [7.5, 4101.0], [7.6, 4103.0], [7.7, 4113.0], [7.8, 4119.0], [7.9, 4123.0], [8.0, 4134.0], [8.1, 4141.0], [8.2, 4148.0], [8.3, 4155.0], [8.4, 4158.0], [8.5, 4162.0], [8.6, 4177.0], [8.7, 4188.0], [8.8, 4194.0], [8.9, 4201.0], [9.0, 4210.0], [9.1, 4214.0], [9.2, 4220.0], [9.3, 4222.0], [9.4, 4225.0], [9.5, 4227.0], [9.6, 4230.0], [9.7, 4239.0], [9.8, 4242.0], [9.9, 4244.0], [10.0, 4245.0], [10.1, 4247.0], [10.2, 4251.0], [10.3, 4258.0], [10.4, 4259.0], [10.5, 4262.0], [10.6, 4270.0], [10.7, 4275.0], [10.8, 4279.0], [10.9, 4280.0], [11.0, 4284.0], [11.1, 4287.0], [11.2, 4288.0], [11.3, 4294.0], [11.4, 4300.0], [11.5, 4302.0], [11.6, 4306.0], [11.7, 4309.0], [11.8, 4312.0], [11.9, 4318.0], [12.0, 4322.0], [12.1, 4325.0], [12.2, 4326.0], [12.3, 4332.0], [12.4, 4335.0], [12.5, 4339.0], [12.6, 4342.0], [12.7, 4351.0], [12.8, 4355.0], [12.9, 4358.0], [13.0, 4359.0], [13.1, 4361.0], [13.2, 4365.0], [13.3, 4368.0], [13.4, 4369.0], [13.5, 4375.0], [13.6, 4377.0], [13.7, 4378.0], [13.8, 4379.0], [13.9, 4380.0], [14.0, 4385.0], [14.1, 4389.0], [14.2, 4392.0], [14.3, 4394.0], [14.4, 4394.0], [14.5, 4396.0], [14.6, 4398.0], [14.7, 4399.0], [14.8, 4400.0], [14.9, 4403.0], [15.0, 4406.0], [15.1, 4409.0], [15.2, 4410.0], [15.3, 4414.0], [15.4, 4417.0], [15.5, 4420.0], [15.6, 4425.0], [15.7, 4429.0], [15.8, 4430.0], [15.9, 4431.0], [16.0, 4432.0], [16.1, 4435.0], [16.2, 4438.0], [16.3, 4442.0], [16.4, 4449.0], [16.5, 4452.0], [16.6, 4455.0], [16.7, 4459.0], [16.8, 4460.0], [16.9, 4462.0], [17.0, 4463.0], [17.1, 4470.0], [17.2, 4471.0], [17.3, 4476.0], [17.4, 4478.0], [17.5, 4479.0], [17.6, 4480.0], [17.7, 4482.0], [17.8, 4485.0], [17.9, 4488.0], [18.0, 4491.0], [18.1, 4498.0], [18.2, 4499.0], [18.3, 4500.0], [18.4, 4501.0], [18.5, 4503.0], [18.6, 4505.0], [18.7, 4506.0], [18.8, 4510.0], [18.9, 4516.0], [19.0, 4519.0], [19.1, 4520.0], [19.2, 4521.0], [19.3, 4524.0], [19.4, 4527.0], [19.5, 4530.0], [19.6, 4534.0], [19.7, 4538.0], [19.8, 4541.0], [19.9, 4544.0], [20.0, 4548.0], [20.1, 4549.0], [20.2, 4550.0], [20.3, 4551.0], [20.4, 4557.0], [20.5, 4559.0], [20.6, 4561.0], [20.7, 4564.0], [20.8, 4566.0], [20.9, 4568.0], [21.0, 4569.0], [21.1, 4569.0], [21.2, 4570.0], [21.3, 4571.0], [21.4, 4575.0], [21.5, 4579.0], [21.6, 4579.0], [21.7, 4580.0], [21.8, 4580.0], [21.9, 4581.0], [22.0, 4584.0], [22.1, 4586.0], [22.2, 4587.0], [22.3, 4588.0], [22.4, 4589.0], [22.5, 4590.0], [22.6, 4590.0], [22.7, 4591.0], [22.8, 4594.0], [22.9, 4596.0], [23.0, 4599.0], [23.1, 4599.0], [23.2, 4600.0], [23.3, 4603.0], [23.4, 4607.0], [23.5, 4609.0], [23.6, 4610.0], [23.7, 4612.0], [23.8, 4615.0], [23.9, 4616.0], [24.0, 4618.0], [24.1, 4620.0], [24.2, 4620.0], [24.3, 4622.0], [24.4, 4623.0], [24.5, 4626.0], [24.6, 4628.0], [24.7, 4629.0], [24.8, 4630.0], [24.9, 4632.0], [25.0, 4634.0], [25.1, 4635.0], [25.2, 4638.0], [25.3, 4639.0], [25.4, 4640.0], [25.5, 4641.0], [25.6, 4642.0], [25.7, 4646.0], [25.8, 4646.0], [25.9, 4647.0], [26.0, 4648.0], [26.1, 4649.0], [26.2, 4650.0], [26.3, 4651.0], [26.4, 4652.0], [26.5, 4654.0], [26.6, 4657.0], [26.7, 4657.0], [26.8, 4659.0], [26.9, 4660.0], [27.0, 4662.0], [27.1, 4663.0], [27.2, 4666.0], [27.3, 4668.0], [27.4, 4669.0], [27.5, 4669.0], [27.6, 4670.0], [27.7, 4672.0], [27.8, 4673.0], [27.9, 4677.0], [28.0, 4679.0], [28.1, 4681.0], [28.2, 4684.0], [28.3, 4686.0], [28.4, 4689.0], [28.5, 4690.0], [28.6, 4691.0], [28.7, 4691.0], [28.8, 4693.0], [28.9, 4696.0], [29.0, 4697.0], [29.1, 4699.0], [29.2, 4700.0], [29.3, 4702.0], [29.4, 4703.0], [29.5, 4705.0], [29.6, 4707.0], [29.7, 4708.0], [29.8, 4710.0], [29.9, 4710.0], [30.0, 4711.0], [30.1, 4712.0], [30.2, 4715.0], [30.3, 4717.0], [30.4, 4719.0], [30.5, 4723.0], [30.6, 4724.0], [30.7, 4726.0], [30.8, 4727.0], [30.9, 4727.0], [31.0, 4728.0], [31.1, 4728.0], [31.2, 4729.0], [31.3, 4730.0], [31.4, 4730.0], [31.5, 4734.0], [31.6, 4739.0], [31.7, 4740.0], [31.8, 4740.0], [31.9, 4742.0], [32.0, 4742.0], [32.1, 4744.0], [32.2, 4745.0], [32.3, 4748.0], [32.4, 4749.0], [32.5, 4751.0], [32.6, 4753.0], [32.7, 4757.0], [32.8, 4759.0], [32.9, 4760.0], [33.0, 4760.0], [33.1, 4760.0], [33.2, 4760.0], [33.3, 4763.0], [33.4, 4764.0], [33.5, 4765.0], [33.6, 4767.0], [33.7, 4768.0], [33.8, 4769.0], [33.9, 4771.0], [34.0, 4774.0], [34.1, 4775.0], [34.2, 4775.0], [34.3, 4775.0], [34.4, 4777.0], [34.5, 4778.0], [34.6, 4779.0], [34.7, 4780.0], [34.8, 4782.0], [34.9, 4782.0], [35.0, 4784.0], [35.1, 4785.0], [35.2, 4786.0], [35.3, 4788.0], [35.4, 4789.0], [35.5, 4789.0], [35.6, 4790.0], [35.7, 4791.0], [35.8, 4795.0], [35.9, 4797.0], [36.0, 4798.0], [36.1, 4800.0], [36.2, 4802.0], [36.3, 4803.0], [36.4, 4806.0], [36.5, 4809.0], [36.6, 4810.0], [36.7, 4811.0], [36.8, 4813.0], [36.9, 4816.0], [37.0, 4816.0], [37.1, 4817.0], [37.2, 4817.0], [37.3, 4818.0], [37.4, 4819.0], [37.5, 4820.0], [37.6, 4820.0], [37.7, 4821.0], [37.8, 4821.0], [37.9, 4823.0], [38.0, 4825.0], [38.1, 4826.0], [38.2, 4827.0], [38.3, 4829.0], [38.4, 4830.0], [38.5, 4830.0], [38.6, 4831.0], [38.7, 4831.0], [38.8, 4833.0], [38.9, 4835.0], [39.0, 4836.0], [39.1, 4838.0], [39.2, 4839.0], [39.3, 4840.0], [39.4, 4840.0], [39.5, 4840.0], [39.6, 4841.0], [39.7, 4842.0], [39.8, 4843.0], [39.9, 4846.0], [40.0, 4848.0], [40.1, 4849.0], [40.2, 4851.0], [40.3, 4852.0], [40.4, 4853.0], [40.5, 4854.0], [40.6, 4855.0], [40.7, 4857.0], [40.8, 4858.0], [40.9, 4859.0], [41.0, 4860.0], [41.1, 4861.0], [41.2, 4863.0], [41.3, 4864.0], [41.4, 4866.0], [41.5, 4868.0], [41.6, 4869.0], [41.7, 4870.0], [41.8, 4872.0], [41.9, 4874.0], [42.0, 4877.0], [42.1, 4879.0], [42.2, 4879.0], [42.3, 4880.0], [42.4, 4880.0], [42.5, 4881.0], [42.6, 4882.0], [42.7, 4885.0], [42.8, 4887.0], [42.9, 4889.0], [43.0, 4889.0], [43.1, 4890.0], [43.2, 4891.0], [43.3, 4891.0], [43.4, 4893.0], [43.5, 4895.0], [43.6, 4898.0], [43.7, 4899.0], [43.8, 4900.0], [43.9, 4900.0], [44.0, 4902.0], [44.1, 4903.0], [44.2, 4904.0], [44.3, 4906.0], [44.4, 4909.0], [44.5, 4910.0], [44.6, 4910.0], [44.7, 4910.0], [44.8, 4913.0], [44.9, 4913.0], [45.0, 4916.0], [45.1, 4916.0], [45.2, 4919.0], [45.3, 4919.0], [45.4, 4920.0], [45.5, 4922.0], [45.6, 4925.0], [45.7, 4925.0], [45.8, 4927.0], [45.9, 4928.0], [46.0, 4929.0], [46.1, 4930.0], [46.2, 4932.0], [46.3, 4934.0], [46.4, 4936.0], [46.5, 4937.0], [46.6, 4939.0], [46.7, 4939.0], [46.8, 4940.0], [46.9, 4942.0], [47.0, 4943.0], [47.1, 4944.0], [47.2, 4944.0], [47.3, 4945.0], [47.4, 4948.0], [47.5, 4949.0], [47.6, 4949.0], [47.7, 4950.0], [47.8, 4950.0], [47.9, 4951.0], [48.0, 4952.0], [48.1, 4954.0], [48.2, 4957.0], [48.3, 4958.0], [48.4, 4959.0], [48.5, 4960.0], [48.6, 4960.0], [48.7, 4961.0], [48.8, 4962.0], [48.9, 4962.0], [49.0, 4963.0], [49.1, 4964.0], [49.2, 4967.0], [49.3, 4969.0], [49.4, 4970.0], [49.5, 4970.0], [49.6, 4971.0], [49.7, 4971.0], [49.8, 4972.0], [49.9, 4974.0], [50.0, 4975.0], [50.1, 4976.0], [50.2, 4978.0], [50.3, 4979.0], [50.4, 4980.0], [50.5, 4980.0], [50.6, 4980.0], [50.7, 4981.0], [50.8, 4982.0], [50.9, 4983.0], [51.0, 4984.0], [51.1, 4986.0], [51.2, 4988.0], [51.3, 4989.0], [51.4, 4989.0], [51.5, 4990.0], [51.6, 4990.0], [51.7, 4991.0], [51.8, 4991.0], [51.9, 4993.0], [52.0, 4994.0], [52.1, 4997.0], [52.2, 4998.0], [52.3, 4999.0], [52.4, 4999.0], [52.5, 5000.0], [52.6, 5002.0], [52.7, 5004.0], [52.8, 5004.0], [52.9, 5006.0], [53.0, 5008.0], [53.1, 5009.0], [53.2, 5009.0], [53.3, 5010.0], [53.4, 5010.0], [53.5, 5011.0], [53.6, 5012.0], [53.7, 5013.0], [53.8, 5014.0], [53.9, 5016.0], [54.0, 5017.0], [54.1, 5018.0], [54.2, 5019.0], [54.3, 5019.0], [54.4, 5020.0], [54.5, 5020.0], [54.6, 5021.0], [54.7, 5021.0], [54.8, 5022.0], [54.9, 5022.0], [55.0, 5025.0], [55.1, 5027.0], [55.2, 5028.0], [55.3, 5029.0], [55.4, 5030.0], [55.5, 5030.0], [55.6, 5030.0], [55.7, 5032.0], [55.8, 5035.0], [55.9, 5036.0], [56.0, 5038.0], [56.1, 5039.0], [56.2, 5040.0], [56.3, 5040.0], [56.4, 5041.0], [56.5, 5042.0], [56.6, 5043.0], [56.7, 5045.0], [56.8, 5047.0], [56.9, 5047.0], [57.0, 5048.0], [57.1, 5048.0], [57.2, 5049.0], [57.3, 5049.0], [57.4, 5050.0], [57.5, 5051.0], [57.6, 5051.0], [57.7, 5051.0], [57.8, 5052.0], [57.9, 5052.0], [58.0, 5054.0], [58.1, 5056.0], [58.2, 5058.0], [58.3, 5059.0], [58.4, 5060.0], [58.5, 5060.0], [58.6, 5061.0], [58.7, 5063.0], [58.8, 5064.0], [58.9, 5065.0], [59.0, 5066.0], [59.1, 5068.0], [59.2, 5068.0], [59.3, 5069.0], [59.4, 5070.0], [59.5, 5070.0], [59.6, 5071.0], [59.7, 5072.0], [59.8, 5072.0], [59.9, 5074.0], [60.0, 5077.0], [60.1, 5078.0], [60.2, 5078.0], [60.3, 5079.0], [60.4, 5079.0], [60.5, 5080.0], [60.6, 5080.0], [60.7, 5083.0], [60.8, 5084.0], [60.9, 5086.0], [61.0, 5088.0], [61.1, 5088.0], [61.2, 5089.0], [61.3, 5090.0], [61.4, 5090.0], [61.5, 5091.0], [61.6, 5091.0], [61.7, 5093.0], [61.8, 5095.0], [61.9, 5095.0], [62.0, 5096.0], [62.1, 5097.0], [62.2, 5098.0], [62.3, 5098.0], [62.4, 5099.0], [62.5, 5099.0], [62.6, 5100.0], [62.7, 5101.0], [62.8, 5106.0], [62.9, 5108.0], [63.0, 5109.0], [63.1, 5109.0], [63.2, 5110.0], [63.3, 5111.0], [63.4, 5113.0], [63.5, 5114.0], [63.6, 5114.0], [63.7, 5116.0], [63.8, 5118.0], [63.9, 5119.0], [64.0, 5119.0], [64.1, 5120.0], [64.2, 5121.0], [64.3, 5123.0], [64.4, 5124.0], [64.5, 5126.0], [64.6, 5128.0], [64.7, 5129.0], [64.8, 5129.0], [64.9, 5130.0], [65.0, 5130.0], [65.1, 5131.0], [65.2, 5132.0], [65.3, 5135.0], [65.4, 5137.0], [65.5, 5138.0], [65.6, 5138.0], [65.7, 5139.0], [65.8, 5139.0], [65.9, 5140.0], [66.0, 5141.0], [66.1, 5141.0], [66.2, 5142.0], [66.3, 5146.0], [66.4, 5148.0], [66.5, 5149.0], [66.6, 5149.0], [66.7, 5150.0], [66.8, 5150.0], [66.9, 5151.0], [67.0, 5152.0], [67.1, 5152.0], [67.2, 5152.0], [67.3, 5153.0], [67.4, 5155.0], [67.5, 5156.0], [67.6, 5158.0], [67.7, 5159.0], [67.8, 5160.0], [67.9, 5160.0], [68.0, 5161.0], [68.1, 5161.0], [68.2, 5161.0], [68.3, 5163.0], [68.4, 5165.0], [68.5, 5168.0], [68.6, 5169.0], [68.7, 5169.0], [68.8, 5171.0], [68.9, 5174.0], [69.0, 5177.0], [69.1, 5178.0], [69.2, 5178.0], [69.3, 5179.0], [69.4, 5179.0], [69.5, 5180.0], [69.6, 5181.0], [69.7, 5181.0], [69.8, 5181.0], [69.9, 5182.0], [70.0, 5182.0], [70.1, 5184.0], [70.2, 5184.0], [70.3, 5185.0], [70.4, 5186.0], [70.5, 5187.0], [70.6, 5188.0], [70.7, 5189.0], [70.8, 5190.0], [70.9, 5191.0], [71.0, 5192.0], [71.1, 5193.0], [71.2, 5194.0], [71.3, 5197.0], [71.4, 5198.0], [71.5, 5199.0], [71.6, 5199.0], [71.7, 5199.0], [71.8, 5200.0], [71.9, 5200.0], [72.0, 5200.0], [72.1, 5203.0], [72.2, 5205.0], [72.3, 5207.0], [72.4, 5209.0], [72.5, 5209.0], [72.6, 5210.0], [72.7, 5210.0], [72.8, 5211.0], [72.9, 5212.0], [73.0, 5214.0], [73.1, 5217.0], [73.2, 5219.0], [73.3, 5220.0], [73.4, 5221.0], [73.5, 5224.0], [73.6, 5225.0], [73.7, 5226.0], [73.8, 5228.0], [73.9, 5229.0], [74.0, 5230.0], [74.1, 5230.0], [74.2, 5231.0], [74.3, 5233.0], [74.4, 5234.0], [74.5, 5236.0], [74.6, 5236.0], [74.7, 5238.0], [74.8, 5240.0], [74.9, 5241.0], [75.0, 5241.0], [75.1, 5245.0], [75.2, 5246.0], [75.3, 5248.0], [75.4, 5248.0], [75.5, 5249.0], [75.6, 5251.0], [75.7, 5251.0], [75.8, 5253.0], [75.9, 5253.0], [76.0, 5255.0], [76.1, 5257.0], [76.2, 5257.0], [76.3, 5259.0], [76.4, 5260.0], [76.5, 5261.0], [76.6, 5261.0], [76.7, 5261.0], [76.8, 5262.0], [76.9, 5264.0], [77.0, 5267.0], [77.1, 5268.0], [77.2, 5269.0], [77.3, 5270.0], [77.4, 5271.0], [77.5, 5272.0], [77.6, 5274.0], [77.7, 5278.0], [77.8, 5280.0], [77.9, 5281.0], [78.0, 5281.0], [78.1, 5282.0], [78.2, 5283.0], [78.3, 5285.0], [78.4, 5287.0], [78.5, 5288.0], [78.6, 5290.0], [78.7, 5291.0], [78.8, 5292.0], [78.9, 5293.0], [79.0, 5294.0], [79.1, 5297.0], [79.2, 5299.0], [79.3, 5300.0], [79.4, 5302.0], [79.5, 5303.0], [79.6, 5303.0], [79.7, 5310.0], [79.8, 5310.0], [79.9, 5311.0], [80.0, 5312.0], [80.1, 5316.0], [80.2, 5319.0], [80.3, 5321.0], [80.4, 5324.0], [80.5, 5325.0], [80.6, 5327.0], [80.7, 5328.0], [80.8, 5329.0], [80.9, 5330.0], [81.0, 5331.0], [81.1, 5337.0], [81.2, 5339.0], [81.3, 5340.0], [81.4, 5341.0], [81.5, 5344.0], [81.6, 5348.0], [81.7, 5349.0], [81.8, 5351.0], [81.9, 5354.0], [82.0, 5355.0], [82.1, 5358.0], [82.2, 5361.0], [82.3, 5363.0], [82.4, 5369.0], [82.5, 5370.0], [82.6, 5371.0], [82.7, 5373.0], [82.8, 5376.0], [82.9, 5381.0], [83.0, 5382.0], [83.1, 5385.0], [83.2, 5386.0], [83.3, 5388.0], [83.4, 5388.0], [83.5, 5390.0], [83.6, 5391.0], [83.7, 5391.0], [83.8, 5392.0], [83.9, 5393.0], [84.0, 5396.0], [84.1, 5397.0], [84.2, 5400.0], [84.3, 5402.0], [84.4, 5405.0], [84.5, 5409.0], [84.6, 5409.0], [84.7, 5410.0], [84.8, 5410.0], [84.9, 5414.0], [85.0, 5416.0], [85.1, 5418.0], [85.2, 5419.0], [85.3, 5420.0], [85.4, 5421.0], [85.5, 5422.0], [85.6, 5423.0], [85.7, 5429.0], [85.8, 5430.0], [85.9, 5430.0], [86.0, 5431.0], [86.1, 5433.0], [86.2, 5435.0], [86.3, 5439.0], [86.4, 5442.0], [86.5, 5443.0], [86.6, 5449.0], [86.7, 5450.0], [86.8, 5450.0], [86.9, 5453.0], [87.0, 5458.0], [87.1, 5460.0], [87.2, 5464.0], [87.3, 5469.0], [87.4, 5469.0], [87.5, 5470.0], [87.6, 5473.0], [87.7, 5476.0], [87.8, 5477.0], [87.9, 5479.0], [88.0, 5486.0], [88.1, 5488.0], [88.2, 5488.0], [88.3, 5493.0], [88.4, 5495.0], [88.5, 5497.0], [88.6, 5501.0], [88.7, 5501.0], [88.8, 5505.0], [88.9, 5508.0], [89.0, 5511.0], [89.1, 5520.0], [89.2, 5524.0], [89.3, 5529.0], [89.4, 5531.0], [89.5, 5533.0], [89.6, 5536.0], [89.7, 5538.0], [89.8, 5541.0], [89.9, 5546.0], [90.0, 5548.0], [90.1, 5550.0], [90.2, 5552.0], [90.3, 5556.0], [90.4, 5562.0], [90.5, 5565.0], [90.6, 5566.0], [90.7, 5568.0], [90.8, 5573.0], [90.9, 5577.0], [91.0, 5580.0], [91.1, 5584.0], [91.2, 5589.0], [91.3, 5589.0], [91.4, 5592.0], [91.5, 5598.0], [91.6, 5599.0], [91.7, 5600.0], [91.8, 5604.0], [91.9, 5605.0], [92.0, 5609.0], [92.1, 5611.0], [92.2, 5612.0], [92.3, 5616.0], [92.4, 5620.0], [92.5, 5628.0], [92.6, 5630.0], [92.7, 5632.0], [92.8, 5633.0], [92.9, 5641.0], [93.0, 5646.0], [93.1, 5651.0], [93.2, 5655.0], [93.3, 5660.0], [93.4, 5662.0], [93.5, 5667.0], [93.6, 5669.0], [93.7, 5671.0], [93.8, 5673.0], [93.9, 5677.0], [94.0, 5679.0], [94.1, 5683.0], [94.2, 5691.0], [94.3, 5692.0], [94.4, 5697.0], [94.5, 5701.0], [94.6, 5708.0], [94.7, 5714.0], [94.8, 5717.0], [94.9, 5720.0], [95.0, 5723.0], [95.1, 5732.0], [95.2, 5741.0], [95.3, 5750.0], [95.4, 5752.0], [95.5, 5757.0], [95.6, 5761.0], [95.7, 5769.0], [95.8, 5774.0], [95.9, 5779.0], [96.0, 5784.0], [96.1, 5790.0], [96.2, 5792.0], [96.3, 5801.0], [96.4, 5814.0], [96.5, 5822.0], [96.6, 5832.0], [96.7, 5840.0], [96.8, 5873.0], [96.9, 5903.0], [97.0, 5911.0], [97.1, 5919.0], [97.2, 5939.0], [97.3, 6011.0], [97.4, 6095.0], [97.5, 6159.0], [97.6, 6192.0], [97.7, 6253.0], [97.8, 6388.0], [97.9, 6481.0], [98.0, 6502.0], [98.1, 6665.0], [98.2, 6718.0], [98.3, 6747.0], [98.4, 6906.0], [98.5, 7040.0], [98.6, 7174.0], [98.7, 7263.0], [98.8, 7282.0], [98.9, 7488.0], [99.0, 7644.0], [99.1, 7686.0], [99.2, 7704.0], [99.3, 7756.0], [99.4, 7845.0], [99.5, 7974.0], [99.6, 8033.0], [99.7, 8197.0], [99.8, 8358.0], [99.9, 8708.0], [100.0, 9518.0]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 319.0, "series": [{"data": [[700.0, 3.0], [800.0, 2.0], [900.0, 3.0], [1000.0, 6.0], [1100.0, 6.0], [1200.0, 2.0], [1300.0, 4.0], [1400.0, 2.0], [1500.0, 2.0], [1600.0, 7.0], [1700.0, 2.0], [1800.0, 3.0], [1900.0, 3.0], [2000.0, 5.0], [2100.0, 4.0], [2200.0, 7.0], [2300.0, 6.0], [2400.0, 5.0], [2500.0, 6.0], [2600.0, 3.0], [2800.0, 3.0], [2700.0, 4.0], [2900.0, 5.0], [3000.0, 3.0], [3100.0, 9.0], [3300.0, 11.0], [3200.0, 14.0], [3400.0, 7.0], [3500.0, 10.0], [3600.0, 20.0], [3700.0, 15.0], [3800.0, 13.0], [3900.0, 13.0], [4000.0, 23.0], [4100.0, 45.0], [4200.0, 80.0], [4300.0, 107.0], [4400.0, 112.0], [4600.0, 192.0], [4500.0, 155.0], [4800.0, 244.0], [4700.0, 220.0], [4900.0, 280.0], [5100.0, 295.0], [5000.0, 319.0], [5200.0, 239.0], [5300.0, 157.0], [5500.0, 98.0], [5400.0, 140.0], [5600.0, 89.0], [5700.0, 57.0], [5800.0, 21.0], [6000.0, 5.0], [6100.0, 6.0], [5900.0, 12.0], [6300.0, 2.0], [6200.0, 5.0], [6500.0, 4.0], [6400.0, 4.0], [6600.0, 3.0], [6700.0, 4.0], [6900.0, 2.0], [6800.0, 3.0], [7100.0, 4.0], [7000.0, 3.0], [7200.0, 4.0], [7400.0, 2.0], [7300.0, 1.0], [7500.0, 1.0], [7600.0, 7.0], [7700.0, 6.0], [7800.0, 4.0], [7900.0, 4.0], [8100.0, 3.0], [8000.0, 1.0], [8200.0, 2.0], [8300.0, 2.0], [8400.0, 1.0], [8700.0, 3.0], [9500.0, 1.0], [300.0, 3.0], [400.0, 1.0], [500.0, 3.0]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3067.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 16.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 104.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3067.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 68.04631578947371, "minX": 1.76819538E12, "maxY": 80.0, "series": [{"data": [[1.76819538E12, 68.04631578947371], [1.76819556E12, 76.1360294117647], [1.76819544E12, 80.0], [1.7681955E12, 80.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76819556E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 890.5, "minX": 1.0, "maxY": 5210.0, "series": [{"data": [[2.0, 3639.0], [3.0, 3585.0], [5.0, 3742.0], [6.0, 3447.0], [7.0, 3340.0], [8.0, 3536.0], [9.0, 3604.0], [10.0, 2138.3333333333335], [12.0, 2621.25], [13.0, 2459.6666666666665], [14.0, 2500.5], [15.0, 2080.0], [16.0, 4128.0], [17.0, 4245.0], [18.0, 2057.3333333333335], [19.0, 3023.3333333333335], [20.0, 2233.666666666667], [21.0, 1877.0], [22.0, 1392.2], [23.0, 890.5], [24.0, 2192.4], [25.0, 3095.3333333333335], [26.0, 1709.8333333333333], [27.0, 1851.5], [28.0, 2774.0], [29.0, 2564.75], [30.0, 3212.0], [31.0, 2713.3333333333335], [32.0, 3989.5], [33.0, 2401.25], [34.0, 3925.0], [35.0, 3019.2], [36.0, 2362.1666666666665], [37.0, 2899.3333333333335], [38.0, 2948.3333333333335], [39.0, 3505.0], [40.0, 2643.8], [41.0, 3153.0], [42.0, 3121.3333333333335], [43.0, 2824.0], [44.0, 3239.6666666666665], [45.0, 5068.0], [46.0, 2938.4], [47.0, 2859.1666666666665], [48.0, 3345.0], [49.0, 3053.6], [50.0, 3845.5], [51.0, 3433.3333333333335], [52.0, 3618.0], [53.0, 3455.75], [54.0, 3267.0], [55.0, 4942.0], [56.0, 4030.5], [57.0, 3726.75], [58.0, 3068.0], [59.0, 3844.1666666666665], [60.0, 3721.4], [61.0, 3918.3333333333335], [62.0, 3605.0], [63.0, 3630.25], [64.0, 3587.8], [65.0, 3787.3333333333335], [66.0, 3626.75], [67.0, 3783.5], [69.0, 3489.5], [70.0, 4243.25], [71.0, 3744.5], [68.0, 5210.0], [73.0, 3938.8333333333335], [74.0, 4004.75], [75.0, 3982.25], [72.0, 5129.0], [76.0, 4133.666666666667], [77.0, 4224.666666666667], [78.0, 3974.1666666666665], [79.0, 3969.25], [80.0, 5033.020804911315], [1.0, 3394.0]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}, {"data": [[77.22905553812365, 4886.332601192346]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2002.9166666666667, "minX": 1.76819538E12, "maxY": 44919.183333333334, "series": [{"data": [[1.76819538E12, 26006.083333333332], [1.76819556E12, 39550.3], [1.76819544E12, 44919.183333333334], [1.7681955E12, 44679.333333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76819538E12, 2002.9166666666667], [1.76819556E12, 3440.8], [1.76819544E12, 4010.05], [1.7681955E12, 3984.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76819556E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3998.0631578947355, "minX": 1.76819538E12, "maxY": 5054.154497354499, "series": [{"data": [[1.76819538E12, 3998.0631578947355], [1.76819556E12, 5018.333333333344], [1.76819544E12, 5049.9747634069345], [1.7681955E12, 5054.154497354499]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76819556E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3997.8905263157903, "minX": 1.76819538E12, "maxY": 5054.067724867733, "series": [{"data": [[1.76819538E12, 3997.8905263157903], [1.76819556E12, 5018.267156862744], [1.76819544E12, 5049.900105152467], [1.7681955E12, 5054.067724867733]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76819556E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.995098039215685, "minX": 1.76819538E12, "maxY": 23.732631578947377, "series": [{"data": [[1.76819538E12, 23.732631578947377], [1.76819556E12, 9.995098039215685], [1.76819544E12, 10.267087276551011], [1.7681955E12, 10.724867724867734]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76819556E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 902.0, "minX": 1.76819538E12, "maxY": 9518.0, "series": [{"data": [[1.76819538E12, 3971.0], [1.76819556E12, 9518.0], [1.76819544E12, 8281.0], [1.7681955E12, 7997.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76819538E12, 902.0], [1.76819556E12, 5701.0], [1.76819544E12, 5405.0], [1.7681955E12, 5432.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76819538E12, 3788.7], [1.76819556E12, 8774.6], [1.76819544E12, 8188.8], [1.7681955E12, 7841.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76819538E12, 3971.0], [1.76819556E12, 9518.0], [1.76819544E12, 8281.0], [1.7681955E12, 7997.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76819538E12, 1437.0], [1.76819556E12, 7681.5], [1.76819544E12, 7276.5], [1.7681955E12, 6590.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76819538E12, 3920.4], [1.76819556E12, 9116.5], [1.76819544E12, 8234.8], [1.7681955E12, 7984.35]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76819556E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1161.0, "minX": 1.0, "maxY": 8191.0, "series": [{"data": [[8.0, 1161.0], [16.0, 7437.5], [17.0, 2987.0], [23.0, 6388.0], [6.0, 4369.5], [12.0, 8191.0], [25.0, 7905.0], [13.0, 6691.5], [26.0, 7602.0], [14.0, 6296.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 5392.5], [33.0, 4140.0], [3.0, 5048.0], [4.0, 4425.5], [6.0, 4579.0], [7.0, 4516.0], [8.0, 4981.5], [9.0, 5026.5], [10.0, 5096.5], [11.0, 4751.0], [12.0, 4707.0], [13.0, 4725.0], [14.0, 5049.0], [15.0, 4883.0], [16.0, 4937.5], [1.0, 4358.0], [17.0, 4984.0], [18.0, 4955.0], [19.0, 4972.0], [20.0, 5111.0], [21.0, 5355.0], [22.0, 4939.0], [23.0, 4963.5], [24.0, 4999.0], [25.0, 5205.0], [26.0, 4981.0], [27.0, 5042.0], [28.0, 5279.0], [29.0, 5101.0], [30.0, 4749.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1160.5, "minX": 1.0, "maxY": 8191.0, "series": [{"data": [[8.0, 1160.5], [16.0, 7437.5], [17.0, 2987.0], [23.0, 6387.0], [6.0, 4369.0], [12.0, 8191.0], [25.0, 7905.0], [13.0, 6691.0], [26.0, 7602.0], [14.0, 6295.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 5392.5], [33.0, 4140.0], [3.0, 5048.0], [4.0, 4425.5], [6.0, 4578.5], [7.0, 4516.0], [8.0, 4981.5], [9.0, 5026.5], [10.0, 5096.5], [11.0, 4751.0], [12.0, 4707.0], [13.0, 4725.0], [14.0, 5049.0], [15.0, 4883.0], [16.0, 4937.5], [1.0, 4357.0], [17.0, 4983.5], [18.0, 4954.5], [19.0, 4972.0], [20.0, 5111.0], [21.0, 5355.0], [22.0, 4939.0], [23.0, 4963.5], [24.0, 4999.0], [25.0, 5205.0], [26.0, 4979.5], [27.0, 5042.0], [28.0, 5278.5], [29.0, 5100.5], [30.0, 4749.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.25, "minX": 1.76819538E12, "maxY": 15.85, "series": [{"data": [[1.76819538E12, 9.25], [1.76819556E12, 12.266666666666667], [1.76819544E12, 15.85], [1.7681955E12, 15.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76819556E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76819538E12, "maxY": 15.35, "series": [{"data": [[1.76819538E12, 0.5], [1.76819556E12, 0.5], [1.76819544E12, 0.5], [1.7681955E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76819538E12, 7.416666666666667], [1.76819556E12, 13.1], [1.76819544E12, 15.35], [1.7681955E12, 15.25]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76819556E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76819538E12, "maxY": 15.35, "series": [{"data": [[1.76819538E12, 0.5], [1.76819556E12, 0.5], [1.76819544E12, 0.5], [1.7681955E12, 0.5]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025-success", "isController": false}, {"data": [[1.76819538E12, 7.416666666666667], [1.76819556E12, 13.1], [1.76819544E12, 15.35], [1.7681955E12, 15.25]], "isOverall": false, "label": "api/trainer/schedules?from_date=01/01/2025-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76819556E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76819538E12, "maxY": 15.35, "series": [{"data": [[1.76819538E12, 0.5], [1.76819556E12, 0.5], [1.76819544E12, 0.5], [1.7681955E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76819538E12, 7.416666666666667], [1.76819556E12, 13.1], [1.76819544E12, 15.35], [1.7681955E12, 15.25]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76819556E12, "title": "Total Transactions Per Second"}},
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

