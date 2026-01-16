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
        data: {"result": {"minY": 737.0, "minX": 0.0, "maxY": 7430.0, "series": [{"data": [[0.0, 737.0], [0.1, 917.0], [0.2, 1012.0], [0.3, 1095.0], [0.4, 1153.0], [0.5, 1248.0], [0.6, 1303.0], [0.7, 1395.0], [0.8, 1418.0], [0.9, 1495.0], [1.0, 1636.0], [1.1, 1750.0], [1.2, 1794.0], [1.3, 1854.0], [1.4, 1863.0], [1.5, 1907.0], [1.6, 1922.0], [1.7, 1970.0], [1.8, 1975.0], [1.9, 2069.0], [2.0, 2093.0], [2.1, 2111.0], [2.2, 2293.0], [2.3, 2317.0], [2.4, 2408.0], [2.5, 2483.0], [2.6, 2546.0], [2.7, 2555.0], [2.8, 2580.0], [2.9, 2624.0], [3.0, 2660.0], [3.1, 2783.0], [3.2, 2814.0], [3.3, 3068.0], [3.4, 3134.0], [3.5, 3176.0], [3.6, 3212.0], [3.7, 3217.0], [3.8, 3218.0], [3.9, 3233.0], [4.0, 3279.0], [4.1, 3313.0], [4.2, 3325.0], [4.3, 3358.0], [4.4, 3404.0], [4.5, 3455.0], [4.6, 3510.0], [4.7, 3540.0], [4.8, 3544.0], [4.9, 3570.0], [5.0, 3576.0], [5.1, 3582.0], [5.2, 3613.0], [5.3, 3670.0], [5.4, 3682.0], [5.5, 3697.0], [5.6, 3726.0], [5.7, 3791.0], [5.8, 3815.0], [5.9, 3870.0], [6.0, 3888.0], [6.1, 3912.0], [6.2, 3928.0], [6.3, 3935.0], [6.4, 3955.0], [6.5, 3970.0], [6.6, 3975.0], [6.7, 3988.0], [6.8, 3995.0], [6.9, 4000.0], [7.0, 4010.0], [7.1, 4015.0], [7.2, 4022.0], [7.3, 4033.0], [7.4, 4035.0], [7.5, 4045.0], [7.6, 4051.0], [7.7, 4059.0], [7.8, 4061.0], [7.9, 4076.0], [8.0, 4079.0], [8.1, 4095.0], [8.2, 4101.0], [8.3, 4107.0], [8.4, 4110.0], [8.5, 4115.0], [8.6, 4122.0], [8.7, 4125.0], [8.8, 4134.0], [8.9, 4146.0], [9.0, 4156.0], [9.1, 4170.0], [9.2, 4177.0], [9.3, 4184.0], [9.4, 4191.0], [9.5, 4197.0], [9.6, 4208.0], [9.7, 4222.0], [9.8, 4227.0], [9.9, 4233.0], [10.0, 4242.0], [10.1, 4244.0], [10.2, 4252.0], [10.3, 4258.0], [10.4, 4262.0], [10.5, 4274.0], [10.6, 4280.0], [10.7, 4287.0], [10.8, 4288.0], [10.9, 4291.0], [11.0, 4296.0], [11.1, 4303.0], [11.2, 4312.0], [11.3, 4321.0], [11.4, 4328.0], [11.5, 4330.0], [11.6, 4336.0], [11.7, 4340.0], [11.8, 4341.0], [11.9, 4346.0], [12.0, 4347.0], [12.1, 4351.0], [12.2, 4354.0], [12.3, 4356.0], [12.4, 4359.0], [12.5, 4364.0], [12.6, 4365.0], [12.7, 4368.0], [12.8, 4371.0], [12.9, 4376.0], [13.0, 4378.0], [13.1, 4382.0], [13.2, 4383.0], [13.3, 4388.0], [13.4, 4389.0], [13.5, 4391.0], [13.6, 4393.0], [13.7, 4396.0], [13.8, 4399.0], [13.9, 4405.0], [14.0, 4407.0], [14.1, 4408.0], [14.2, 4411.0], [14.3, 4413.0], [14.4, 4415.0], [14.5, 4416.0], [14.6, 4421.0], [14.7, 4424.0], [14.8, 4426.0], [14.9, 4429.0], [15.0, 4430.0], [15.1, 4430.0], [15.2, 4434.0], [15.3, 4436.0], [15.4, 4441.0], [15.5, 4446.0], [15.6, 4448.0], [15.7, 4452.0], [15.8, 4454.0], [15.9, 4456.0], [16.0, 4457.0], [16.1, 4458.0], [16.2, 4464.0], [16.3, 4466.0], [16.4, 4468.0], [16.5, 4470.0], [16.6, 4474.0], [16.7, 4475.0], [16.8, 4479.0], [16.9, 4480.0], [17.0, 4481.0], [17.1, 4482.0], [17.2, 4483.0], [17.3, 4484.0], [17.4, 4486.0], [17.5, 4487.0], [17.6, 4489.0], [17.7, 4490.0], [17.8, 4493.0], [17.9, 4495.0], [18.0, 4498.0], [18.1, 4501.0], [18.2, 4503.0], [18.3, 4506.0], [18.4, 4507.0], [18.5, 4510.0], [18.6, 4511.0], [18.7, 4511.0], [18.8, 4514.0], [18.9, 4516.0], [19.0, 4518.0], [19.1, 4519.0], [19.2, 4520.0], [19.3, 4520.0], [19.4, 4524.0], [19.5, 4526.0], [19.6, 4528.0], [19.7, 4529.0], [19.8, 4532.0], [19.9, 4533.0], [20.0, 4537.0], [20.1, 4537.0], [20.2, 4539.0], [20.3, 4540.0], [20.4, 4540.0], [20.5, 4542.0], [20.6, 4542.0], [20.7, 4546.0], [20.8, 4547.0], [20.9, 4549.0], [21.0, 4550.0], [21.1, 4553.0], [21.2, 4555.0], [21.3, 4556.0], [21.4, 4557.0], [21.5, 4558.0], [21.6, 4559.0], [21.7, 4560.0], [21.8, 4561.0], [21.9, 4562.0], [22.0, 4563.0], [22.1, 4565.0], [22.2, 4567.0], [22.3, 4568.0], [22.4, 4569.0], [22.5, 4570.0], [22.6, 4572.0], [22.7, 4576.0], [22.8, 4579.0], [22.9, 4579.0], [23.0, 4579.0], [23.1, 4580.0], [23.2, 4582.0], [23.3, 4584.0], [23.4, 4587.0], [23.5, 4588.0], [23.6, 4589.0], [23.7, 4590.0], [23.8, 4591.0], [23.9, 4592.0], [24.0, 4593.0], [24.1, 4595.0], [24.2, 4598.0], [24.3, 4600.0], [24.4, 4601.0], [24.5, 4602.0], [24.6, 4605.0], [24.7, 4606.0], [24.8, 4608.0], [24.9, 4610.0], [25.0, 4611.0], [25.1, 4613.0], [25.2, 4615.0], [25.3, 4617.0], [25.4, 4619.0], [25.5, 4620.0], [25.6, 4621.0], [25.7, 4622.0], [25.8, 4623.0], [25.9, 4625.0], [26.0, 4627.0], [26.1, 4628.0], [26.2, 4628.0], [26.3, 4629.0], [26.4, 4630.0], [26.5, 4630.0], [26.6, 4630.0], [26.7, 4631.0], [26.8, 4633.0], [26.9, 4633.0], [27.0, 4633.0], [27.1, 4634.0], [27.2, 4637.0], [27.3, 4638.0], [27.4, 4639.0], [27.5, 4640.0], [27.6, 4641.0], [27.7, 4642.0], [27.8, 4644.0], [27.9, 4645.0], [28.0, 4646.0], [28.1, 4647.0], [28.2, 4648.0], [28.3, 4649.0], [28.4, 4650.0], [28.5, 4652.0], [28.6, 4655.0], [28.7, 4657.0], [28.8, 4658.0], [28.9, 4658.0], [29.0, 4659.0], [29.1, 4659.0], [29.2, 4660.0], [29.3, 4661.0], [29.4, 4661.0], [29.5, 4662.0], [29.6, 4664.0], [29.7, 4665.0], [29.8, 4667.0], [29.9, 4668.0], [30.0, 4669.0], [30.1, 4670.0], [30.2, 4671.0], [30.3, 4671.0], [30.4, 4674.0], [30.5, 4676.0], [30.6, 4677.0], [30.7, 4679.0], [30.8, 4679.0], [30.9, 4681.0], [31.0, 4681.0], [31.1, 4682.0], [31.2, 4684.0], [31.3, 4684.0], [31.4, 4685.0], [31.5, 4687.0], [31.6, 4688.0], [31.7, 4689.0], [31.8, 4689.0], [31.9, 4690.0], [32.0, 4692.0], [32.1, 4693.0], [32.2, 4694.0], [32.3, 4697.0], [32.4, 4698.0], [32.5, 4699.0], [32.6, 4700.0], [32.7, 4700.0], [32.8, 4701.0], [32.9, 4702.0], [33.0, 4704.0], [33.1, 4705.0], [33.2, 4706.0], [33.3, 4706.0], [33.4, 4709.0], [33.5, 4709.0], [33.6, 4710.0], [33.7, 4711.0], [33.8, 4711.0], [33.9, 4714.0], [34.0, 4715.0], [34.1, 4716.0], [34.2, 4717.0], [34.3, 4719.0], [34.4, 4719.0], [34.5, 4719.0], [34.6, 4720.0], [34.7, 4720.0], [34.8, 4721.0], [34.9, 4722.0], [35.0, 4723.0], [35.1, 4725.0], [35.2, 4726.0], [35.3, 4727.0], [35.4, 4728.0], [35.5, 4728.0], [35.6, 4730.0], [35.7, 4730.0], [35.8, 4731.0], [35.9, 4732.0], [36.0, 4732.0], [36.1, 4734.0], [36.2, 4735.0], [36.3, 4736.0], [36.4, 4739.0], [36.5, 4741.0], [36.6, 4742.0], [36.7, 4743.0], [36.8, 4745.0], [36.9, 4746.0], [37.0, 4747.0], [37.1, 4748.0], [37.2, 4749.0], [37.3, 4749.0], [37.4, 4750.0], [37.5, 4751.0], [37.6, 4752.0], [37.7, 4753.0], [37.8, 4754.0], [37.9, 4754.0], [38.0, 4756.0], [38.1, 4756.0], [38.2, 4758.0], [38.3, 4759.0], [38.4, 4759.0], [38.5, 4760.0], [38.6, 4762.0], [38.7, 4765.0], [38.8, 4767.0], [38.9, 4768.0], [39.0, 4769.0], [39.1, 4772.0], [39.2, 4774.0], [39.3, 4775.0], [39.4, 4777.0], [39.5, 4778.0], [39.6, 4779.0], [39.7, 4779.0], [39.8, 4780.0], [39.9, 4781.0], [40.0, 4782.0], [40.1, 4783.0], [40.2, 4786.0], [40.3, 4787.0], [40.4, 4788.0], [40.5, 4789.0], [40.6, 4789.0], [40.7, 4790.0], [40.8, 4791.0], [40.9, 4793.0], [41.0, 4793.0], [41.1, 4795.0], [41.2, 4796.0], [41.3, 4797.0], [41.4, 4798.0], [41.5, 4799.0], [41.6, 4800.0], [41.7, 4800.0], [41.8, 4802.0], [41.9, 4804.0], [42.0, 4806.0], [42.1, 4808.0], [42.2, 4809.0], [42.3, 4810.0], [42.4, 4810.0], [42.5, 4811.0], [42.6, 4812.0], [42.7, 4813.0], [42.8, 4815.0], [42.9, 4815.0], [43.0, 4816.0], [43.1, 4817.0], [43.2, 4818.0], [43.3, 4818.0], [43.4, 4819.0], [43.5, 4820.0], [43.6, 4823.0], [43.7, 4826.0], [43.8, 4828.0], [43.9, 4829.0], [44.0, 4829.0], [44.1, 4830.0], [44.2, 4831.0], [44.3, 4831.0], [44.4, 4833.0], [44.5, 4835.0], [44.6, 4836.0], [44.7, 4837.0], [44.8, 4837.0], [44.9, 4839.0], [45.0, 4840.0], [45.1, 4841.0], [45.2, 4841.0], [45.3, 4842.0], [45.4, 4843.0], [45.5, 4845.0], [45.6, 4846.0], [45.7, 4848.0], [45.8, 4848.0], [45.9, 4849.0], [46.0, 4851.0], [46.1, 4851.0], [46.2, 4854.0], [46.3, 4856.0], [46.4, 4858.0], [46.5, 4859.0], [46.6, 4860.0], [46.7, 4860.0], [46.8, 4862.0], [46.9, 4863.0], [47.0, 4864.0], [47.1, 4866.0], [47.2, 4868.0], [47.3, 4869.0], [47.4, 4871.0], [47.5, 4871.0], [47.6, 4872.0], [47.7, 4873.0], [47.8, 4874.0], [47.9, 4875.0], [48.0, 4876.0], [48.1, 4878.0], [48.2, 4879.0], [48.3, 4881.0], [48.4, 4884.0], [48.5, 4885.0], [48.6, 4886.0], [48.7, 4886.0], [48.8, 4886.0], [48.9, 4888.0], [49.0, 4888.0], [49.1, 4889.0], [49.2, 4890.0], [49.3, 4890.0], [49.4, 4891.0], [49.5, 4891.0], [49.6, 4893.0], [49.7, 4894.0], [49.8, 4894.0], [49.9, 4896.0], [50.0, 4896.0], [50.1, 4898.0], [50.2, 4899.0], [50.3, 4901.0], [50.4, 4902.0], [50.5, 4902.0], [50.6, 4904.0], [50.7, 4907.0], [50.8, 4908.0], [50.9, 4909.0], [51.0, 4909.0], [51.1, 4910.0], [51.2, 4911.0], [51.3, 4911.0], [51.4, 4912.0], [51.5, 4913.0], [51.6, 4915.0], [51.7, 4917.0], [51.8, 4919.0], [51.9, 4919.0], [52.0, 4922.0], [52.1, 4924.0], [52.2, 4926.0], [52.3, 4927.0], [52.4, 4928.0], [52.5, 4928.0], [52.6, 4930.0], [52.7, 4931.0], [52.8, 4932.0], [52.9, 4933.0], [53.0, 4934.0], [53.1, 4936.0], [53.2, 4937.0], [53.3, 4938.0], [53.4, 4939.0], [53.5, 4939.0], [53.6, 4941.0], [53.7, 4941.0], [53.8, 4942.0], [53.9, 4944.0], [54.0, 4945.0], [54.1, 4947.0], [54.2, 4948.0], [54.3, 4948.0], [54.4, 4949.0], [54.5, 4950.0], [54.6, 4950.0], [54.7, 4952.0], [54.8, 4954.0], [54.9, 4955.0], [55.0, 4957.0], [55.1, 4958.0], [55.2, 4959.0], [55.3, 4960.0], [55.4, 4960.0], [55.5, 4961.0], [55.6, 4963.0], [55.7, 4964.0], [55.8, 4965.0], [55.9, 4967.0], [56.0, 4968.0], [56.1, 4969.0], [56.2, 4969.0], [56.3, 4970.0], [56.4, 4972.0], [56.5, 4972.0], [56.6, 4975.0], [56.7, 4978.0], [56.8, 4978.0], [56.9, 4979.0], [57.0, 4980.0], [57.1, 4981.0], [57.2, 4982.0], [57.3, 4985.0], [57.4, 4989.0], [57.5, 4991.0], [57.6, 4992.0], [57.7, 4992.0], [57.8, 4992.0], [57.9, 4995.0], [58.0, 4997.0], [58.1, 5000.0], [58.2, 5003.0], [58.3, 5005.0], [58.4, 5006.0], [58.5, 5007.0], [58.6, 5008.0], [58.7, 5011.0], [58.8, 5014.0], [58.9, 5014.0], [59.0, 5015.0], [59.1, 5016.0], [59.2, 5017.0], [59.3, 5019.0], [59.4, 5020.0], [59.5, 5022.0], [59.6, 5024.0], [59.7, 5025.0], [59.8, 5027.0], [59.9, 5029.0], [60.0, 5031.0], [60.1, 5032.0], [60.2, 5035.0], [60.3, 5035.0], [60.4, 5036.0], [60.5, 5038.0], [60.6, 5039.0], [60.7, 5041.0], [60.8, 5042.0], [60.9, 5044.0], [61.0, 5047.0], [61.1, 5048.0], [61.2, 5050.0], [61.3, 5050.0], [61.4, 5051.0], [61.5, 5055.0], [61.6, 5058.0], [61.7, 5059.0], [61.8, 5060.0], [61.9, 5063.0], [62.0, 5064.0], [62.1, 5069.0], [62.2, 5070.0], [62.3, 5070.0], [62.4, 5072.0], [62.5, 5073.0], [62.6, 5079.0], [62.7, 5080.0], [62.8, 5082.0], [62.9, 5083.0], [63.0, 5083.0], [63.1, 5086.0], [63.2, 5088.0], [63.3, 5089.0], [63.4, 5090.0], [63.5, 5091.0], [63.6, 5093.0], [63.7, 5094.0], [63.8, 5095.0], [63.9, 5097.0], [64.0, 5099.0], [64.1, 5100.0], [64.2, 5101.0], [64.3, 5105.0], [64.4, 5106.0], [64.5, 5108.0], [64.6, 5110.0], [64.7, 5111.0], [64.8, 5112.0], [64.9, 5113.0], [65.0, 5116.0], [65.1, 5117.0], [65.2, 5119.0], [65.3, 5121.0], [65.4, 5122.0], [65.5, 5123.0], [65.6, 5125.0], [65.7, 5125.0], [65.8, 5128.0], [65.9, 5130.0], [66.0, 5131.0], [66.1, 5131.0], [66.2, 5132.0], [66.3, 5133.0], [66.4, 5135.0], [66.5, 5138.0], [66.6, 5139.0], [66.7, 5140.0], [66.8, 5142.0], [66.9, 5144.0], [67.0, 5146.0], [67.1, 5148.0], [67.2, 5151.0], [67.3, 5156.0], [67.4, 5158.0], [67.5, 5159.0], [67.6, 5160.0], [67.7, 5161.0], [67.8, 5166.0], [67.9, 5168.0], [68.0, 5169.0], [68.1, 5171.0], [68.2, 5173.0], [68.3, 5176.0], [68.4, 5177.0], [68.5, 5179.0], [68.6, 5180.0], [68.7, 5181.0], [68.8, 5183.0], [68.9, 5188.0], [69.0, 5190.0], [69.1, 5191.0], [69.2, 5192.0], [69.3, 5194.0], [69.4, 5197.0], [69.5, 5198.0], [69.6, 5199.0], [69.7, 5201.0], [69.8, 5203.0], [69.9, 5205.0], [70.0, 5207.0], [70.1, 5208.0], [70.2, 5210.0], [70.3, 5210.0], [70.4, 5211.0], [70.5, 5211.0], [70.6, 5212.0], [70.7, 5215.0], [70.8, 5216.0], [70.9, 5218.0], [71.0, 5220.0], [71.1, 5220.0], [71.2, 5221.0], [71.3, 5222.0], [71.4, 5224.0], [71.5, 5226.0], [71.6, 5229.0], [71.7, 5231.0], [71.8, 5233.0], [71.9, 5236.0], [72.0, 5237.0], [72.1, 5239.0], [72.2, 5239.0], [72.3, 5242.0], [72.4, 5243.0], [72.5, 5245.0], [72.6, 5247.0], [72.7, 5249.0], [72.8, 5249.0], [72.9, 5251.0], [73.0, 5252.0], [73.1, 5254.0], [73.2, 5256.0], [73.3, 5259.0], [73.4, 5260.0], [73.5, 5260.0], [73.6, 5264.0], [73.7, 5266.0], [73.8, 5267.0], [73.9, 5268.0], [74.0, 5270.0], [74.1, 5271.0], [74.2, 5272.0], [74.3, 5274.0], [74.4, 5276.0], [74.5, 5280.0], [74.6, 5281.0], [74.7, 5282.0], [74.8, 5283.0], [74.9, 5285.0], [75.0, 5287.0], [75.1, 5289.0], [75.2, 5290.0], [75.3, 5291.0], [75.4, 5291.0], [75.5, 5293.0], [75.6, 5295.0], [75.7, 5295.0], [75.8, 5297.0], [75.9, 5299.0], [76.0, 5300.0], [76.1, 5300.0], [76.2, 5302.0], [76.3, 5304.0], [76.4, 5306.0], [76.5, 5308.0], [76.6, 5309.0], [76.7, 5310.0], [76.8, 5311.0], [76.9, 5312.0], [77.0, 5314.0], [77.1, 5315.0], [77.2, 5317.0], [77.3, 5319.0], [77.4, 5320.0], [77.5, 5321.0], [77.6, 5322.0], [77.7, 5323.0], [77.8, 5325.0], [77.9, 5327.0], [78.0, 5329.0], [78.1, 5329.0], [78.2, 5331.0], [78.3, 5332.0], [78.4, 5332.0], [78.5, 5333.0], [78.6, 5338.0], [78.7, 5343.0], [78.8, 5345.0], [78.9, 5348.0], [79.0, 5349.0], [79.1, 5350.0], [79.2, 5352.0], [79.3, 5353.0], [79.4, 5355.0], [79.5, 5356.0], [79.6, 5357.0], [79.7, 5360.0], [79.8, 5360.0], [79.9, 5362.0], [80.0, 5363.0], [80.1, 5366.0], [80.2, 5367.0], [80.3, 5368.0], [80.4, 5370.0], [80.5, 5371.0], [80.6, 5371.0], [80.7, 5372.0], [80.8, 5374.0], [80.9, 5375.0], [81.0, 5378.0], [81.1, 5380.0], [81.2, 5381.0], [81.3, 5382.0], [81.4, 5382.0], [81.5, 5383.0], [81.6, 5386.0], [81.7, 5388.0], [81.8, 5389.0], [81.9, 5392.0], [82.0, 5393.0], [82.1, 5396.0], [82.2, 5397.0], [82.3, 5398.0], [82.4, 5400.0], [82.5, 5401.0], [82.6, 5402.0], [82.7, 5402.0], [82.8, 5406.0], [82.9, 5408.0], [83.0, 5409.0], [83.1, 5410.0], [83.2, 5410.0], [83.3, 5413.0], [83.4, 5415.0], [83.5, 5418.0], [83.6, 5419.0], [83.7, 5420.0], [83.8, 5420.0], [83.9, 5422.0], [84.0, 5423.0], [84.1, 5427.0], [84.2, 5427.0], [84.3, 5429.0], [84.4, 5430.0], [84.5, 5430.0], [84.6, 5432.0], [84.7, 5433.0], [84.8, 5436.0], [84.9, 5440.0], [85.0, 5441.0], [85.1, 5442.0], [85.2, 5442.0], [85.3, 5444.0], [85.4, 5447.0], [85.5, 5448.0], [85.6, 5449.0], [85.7, 5450.0], [85.8, 5453.0], [85.9, 5455.0], [86.0, 5455.0], [86.1, 5457.0], [86.2, 5458.0], [86.3, 5462.0], [86.4, 5464.0], [86.5, 5465.0], [86.6, 5469.0], [86.7, 5470.0], [86.8, 5471.0], [86.9, 5473.0], [87.0, 5474.0], [87.1, 5474.0], [87.2, 5476.0], [87.3, 5479.0], [87.4, 5480.0], [87.5, 5481.0], [87.6, 5483.0], [87.7, 5488.0], [87.8, 5490.0], [87.9, 5493.0], [88.0, 5494.0], [88.1, 5496.0], [88.2, 5499.0], [88.3, 5500.0], [88.4, 5503.0], [88.5, 5505.0], [88.6, 5513.0], [88.7, 5517.0], [88.8, 5519.0], [88.9, 5521.0], [89.0, 5523.0], [89.1, 5527.0], [89.2, 5529.0], [89.3, 5532.0], [89.4, 5533.0], [89.5, 5537.0], [89.6, 5539.0], [89.7, 5544.0], [89.8, 5546.0], [89.9, 5549.0], [90.0, 5550.0], [90.1, 5552.0], [90.2, 5553.0], [90.3, 5559.0], [90.4, 5560.0], [90.5, 5562.0], [90.6, 5565.0], [90.7, 5566.0], [90.8, 5569.0], [90.9, 5571.0], [91.0, 5574.0], [91.1, 5581.0], [91.2, 5582.0], [91.3, 5583.0], [91.4, 5587.0], [91.5, 5589.0], [91.6, 5590.0], [91.7, 5593.0], [91.8, 5596.0], [91.9, 5599.0], [92.0, 5601.0], [92.1, 5604.0], [92.2, 5606.0], [92.3, 5615.0], [92.4, 5618.0], [92.5, 5620.0], [92.6, 5621.0], [92.7, 5623.0], [92.8, 5628.0], [92.9, 5631.0], [93.0, 5633.0], [93.1, 5634.0], [93.2, 5636.0], [93.3, 5640.0], [93.4, 5641.0], [93.5, 5643.0], [93.6, 5646.0], [93.7, 5651.0], [93.8, 5658.0], [93.9, 5661.0], [94.0, 5663.0], [94.1, 5667.0], [94.2, 5676.0], [94.3, 5686.0], [94.4, 5689.0], [94.5, 5691.0], [94.6, 5696.0], [94.7, 5699.0], [94.8, 5701.0], [94.9, 5705.0], [95.0, 5710.0], [95.1, 5714.0], [95.2, 5716.0], [95.3, 5729.0], [95.4, 5734.0], [95.5, 5745.0], [95.6, 5751.0], [95.7, 5758.0], [95.8, 5763.0], [95.9, 5772.0], [96.0, 5776.0], [96.1, 5782.0], [96.2, 5791.0], [96.3, 5800.0], [96.4, 5807.0], [96.5, 5811.0], [96.6, 5813.0], [96.7, 5821.0], [96.8, 5829.0], [96.9, 5834.0], [97.0, 5843.0], [97.1, 5849.0], [97.2, 5865.0], [97.3, 5892.0], [97.4, 5915.0], [97.5, 5952.0], [97.6, 5987.0], [97.7, 6020.0], [97.8, 6057.0], [97.9, 6110.0], [98.0, 6123.0], [98.1, 6140.0], [98.2, 6165.0], [98.3, 6172.0], [98.4, 6214.0], [98.5, 6235.0], [98.6, 6260.0], [98.7, 6274.0], [98.8, 6346.0], [98.9, 6399.0], [99.0, 6423.0], [99.1, 6559.0], [99.2, 6639.0], [99.3, 6691.0], [99.4, 6788.0], [99.5, 6833.0], [99.6, 6920.0], [99.7, 6964.0], [99.8, 7045.0], [99.9, 7185.0], [100.0, 7430.0]], "isOverall": false, "label": "/api/learner/fetch", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 287.0, "series": [{"data": [[700.0, 1.0], [800.0, 2.0], [900.0, 3.0], [1000.0, 4.0], [1100.0, 5.0], [1200.0, 4.0], [1300.0, 4.0], [1400.0, 6.0], [1500.0, 3.0], [1600.0, 1.0], [1700.0, 6.0], [1800.0, 8.0], [1900.0, 11.0], [2000.0, 7.0], [2100.0, 4.0], [2300.0, 5.0], [2200.0, 3.0], [2400.0, 5.0], [2500.0, 10.0], [2600.0, 5.0], [2700.0, 4.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 6.0], [3200.0, 17.0], [3300.0, 10.0], [3400.0, 6.0], [3500.0, 18.0], [3700.0, 7.0], [3600.0, 12.0], [3800.0, 10.0], [3900.0, 27.0], [4000.0, 41.0], [4300.0, 90.0], [4200.0, 49.0], [4100.0, 44.0], [4400.0, 133.0], [4500.0, 201.0], [4600.0, 267.0], [4700.0, 287.0], [4800.0, 280.0], [5000.0, 192.0], [4900.0, 252.0], [5100.0, 178.0], [5300.0, 205.0], [5200.0, 205.0], [5400.0, 189.0], [5600.0, 89.0], [5500.0, 118.0], [5700.0, 51.0], [5800.0, 33.0], [6100.0, 17.0], [5900.0, 10.0], [6000.0, 7.0], [6300.0, 5.0], [6200.0, 12.0], [6400.0, 4.0], [6600.0, 4.0], [6500.0, 5.0], [6800.0, 6.0], [6700.0, 3.0], [6900.0, 6.0], [7000.0, 3.0], [7100.0, 1.0], [7200.0, 1.0], [7400.0, 1.0], [7300.0, 1.0]], "isOverall": false, "label": "/api/learner/fetch", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3090.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 13.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 108.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3090.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 40.3037037037037, "minX": 1.76818464E12, "maxY": 80.0, "series": [{"data": [[1.76818488E12, 63.33862433862433], [1.76818476E12, 80.0], [1.76818464E12, 40.3037037037037], [1.76818482E12, 80.0], [1.7681847E12, 79.69473684210519]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76818488E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1022.0, "minX": 1.0, "maxY": 5609.0, "series": [{"data": [[3.0, 3332.5], [4.0, 3233.0], [5.0, 4304.0], [6.0, 4061.0], [8.0, 3941.5], [9.0, 4061.0], [10.0, 1774.0], [11.0, 4232.5], [12.0, 2509.6666666666665], [13.0, 4416.0], [14.0, 4422.0], [15.0, 2638.5], [16.0, 2905.0], [17.0, 1976.9999999999998], [18.0, 2726.0], [19.0, 2218.333333333333], [20.0, 4801.0], [21.0, 1022.0], [23.0, 3094.0], [24.0, 3017.666666666667], [25.0, 2169.25], [26.0, 1879.857142857143], [27.0, 2031.2222222222222], [28.0, 4759.0], [29.0, 3145.5], [30.0, 3079.5], [31.0, 3175.0], [32.0, 2245.5], [33.0, 3148.0], [34.0, 3289.0], [35.0, 2488.25], [36.0, 2554.0], [37.0, 2288.0], [38.0, 2425.714285714286], [39.0, 3312.5], [40.0, 3240.0], [41.0, 3017.25], [42.0, 2352.0], [43.0, 2970.833333333333], [44.0, 2999.0], [45.0, 2430.0], [47.0, 2863.75], [46.0, 4392.0], [48.0, 3262.3333333333335], [49.0, 3351.3333333333335], [50.0, 2958.333333333333], [51.0, 2836.0], [52.0, 3409.75], [53.0, 3531.0], [54.0, 4222.0], [56.0, 4060.2], [57.0, 5409.0], [58.0, 3557.5], [59.0, 5609.0], [60.0, 3684.0], [61.0, 4000.6666666666665], [63.0, 4246.666666666667], [62.0, 5581.0], [64.0, 3964.25], [66.0, 3662.4], [67.0, 4093.0], [65.0, 5564.0], [68.0, 3551.2727272727275], [69.0, 4026.3333333333335], [70.0, 4226.666666666667], [71.0, 4157.0], [72.0, 4306.333333333333], [73.0, 4046.8], [75.0, 3987.6], [74.0, 5307.0], [76.0, 4680.0], [77.0, 4292.0], [78.0, 4130.2], [79.0, 4422.666666666667], [80.0, 4984.210810810808], [1.0, 3217.0]], "isOverall": false, "label": "/api/learner/fetch", "isController": false}, {"data": [[77.26004360012449, 4848.066334475231]], "isOverall": false, "label": "/api/learner/fetch-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 513.0, "minX": 1.76818464E12, "maxY": 40518.95, "series": [{"data": [[1.76818488E12, 7515.9], [1.76818476E12, 40518.95], [1.76818464E12, 7152.0], [1.76818482E12, 40101.11666666667], [1.7681847E12, 39545.76666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76818488E12, 718.2], [1.76818476E12, 3697.4], [1.76818464E12, 513.0], [1.76818482E12, 3663.2], [1.7681847E12, 3610.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76818488E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2245.6296296296296, "minX": 1.76818464E12, "maxY": 4992.4367219917, "series": [{"data": [[1.76818488E12, 4927.814814814814], [1.76818476E12, 4990.637204522088], [1.76818464E12, 2245.6296296296296], [1.76818482E12, 4992.4367219917], [1.7681847E12, 4909.499999999995]], "isOverall": false, "label": "/api/learner/fetch", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76818488E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2245.185185185185, "minX": 1.76818464E12, "maxY": 4992.276970954355, "series": [{"data": [[1.76818488E12, 4927.693121693127], [1.76818476E12, 4990.457348406985], [1.76818464E12, 2245.185185185185], [1.76818482E12, 4992.276970954355], [1.7681847E12, 4909.223157894736]], "isOverall": false, "label": "/api/learner/fetch", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76818488E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 6.906639004149381, "minX": 1.76818464E12, "maxY": 85.37777777777777, "series": [{"data": [[1.76818488E12, 35.14285714285715], [1.76818476E12, 9.973278520041116], [1.76818464E12, 85.37777777777777], [1.76818482E12, 6.906639004149381], [1.7681847E12, 12.604210526315782]], "isOverall": false, "label": "/api/learner/fetch", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76818488E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 737.0, "minX": 1.76818464E12, "maxY": 7430.0, "series": [{"data": [[1.76818476E12, 6925.0], [1.76818464E12, 2752.0], [1.76818482E12, 7075.0], [1.7681847E12, 7430.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76818476E12, 5278.0], [1.76818464E12, 737.0], [1.76818482E12, 5209.0], [1.7681847E12, 5548.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76818476E12, 6645.4], [1.76818464E12, 2368.400000000001], [1.76818482E12, 6973.1], [1.7681847E12, 7225.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76818476E12, 6925.0], [1.76818464E12, 2752.0], [1.76818482E12, 7075.0], [1.7681847E12, 7430.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76818476E12, 6101.0], [1.76818464E12, 1676.5], [1.76818482E12, 6160.0], [1.7681847E12, 6780.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76818476E12, 6805.599999999999], [1.76818464E12, 2643.6499999999996], [1.76818482E12, 7065.65], [1.7681847E12, 7358.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76818482E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1636.0, "minX": 2.0, "maxY": 6827.0, "series": [{"data": [[35.0, 6125.0], [18.0, 6018.0], [5.0, 3628.0], [21.0, 1824.0], [22.0, 6827.0], [3.0, 1774.0], [13.0, 1636.0], [26.0, 6773.0], [27.0, 6101.0], [15.0, 6268.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 5464.5], [35.0, 4481.0], [34.0, 4520.5], [4.0, 4978.0], [6.0, 5185.5], [7.0, 4576.0], [8.0, 4770.0], [9.0, 4685.0], [10.0, 4881.5], [11.0, 4910.5], [12.0, 4867.5], [13.0, 4869.0], [14.0, 4802.0], [15.0, 4906.0], [16.0, 4977.5], [17.0, 4805.0], [18.0, 4930.0], [19.0, 5072.5], [20.0, 5176.0], [21.0, 5007.5], [22.0, 4732.0], [23.0, 4681.5], [24.0, 5273.5], [25.0, 4857.0], [26.0, 5183.0], [27.0, 4937.0], [28.0, 4027.0], [31.0, 5472.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 35.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1636.0, "minX": 2.0, "maxY": 6827.0, "series": [{"data": [[35.0, 6125.0], [18.0, 6018.0], [5.0, 3628.0], [21.0, 1824.0], [22.0, 6827.0], [3.0, 1768.0], [13.0, 1636.0], [26.0, 6773.0], [27.0, 6101.0], [15.0, 6268.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 5464.0], [35.0, 4481.0], [34.0, 4520.5], [4.0, 4978.0], [6.0, 5185.5], [7.0, 4576.0], [8.0, 4770.0], [9.0, 4685.0], [10.0, 4881.5], [11.0, 4910.5], [12.0, 4867.5], [13.0, 4868.5], [14.0, 4802.0], [15.0, 4906.0], [16.0, 4977.0], [17.0, 4805.0], [18.0, 4930.0], [19.0, 5072.5], [20.0, 5176.0], [21.0, 5007.5], [22.0, 4732.0], [23.0, 4681.0], [24.0, 5273.5], [25.0, 4857.0], [26.0, 5183.0], [27.0, 4937.0], [28.0, 4026.5], [31.0, 5472.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 35.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.76818464E12, "maxY": 16.216666666666665, "series": [{"data": [[1.76818488E12, 1.8166666666666667], [1.76818476E12, 16.216666666666665], [1.76818464E12, 3.3666666666666667], [1.76818482E12, 16.066666666666666], [1.7681847E12, 16.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76818488E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76818464E12, "maxY": 15.7, "series": [{"data": [[1.76818476E12, 0.5166666666666667], [1.76818464E12, 0.5], [1.76818482E12, 0.5], [1.7681847E12, 0.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.76818488E12, 3.15], [1.76818476E12, 15.7], [1.76818464E12, 1.75], [1.76818482E12, 15.566666666666666], [1.7681847E12, 15.333333333333334]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76818488E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76818464E12, "maxY": 15.7, "series": [{"data": [[1.76818488E12, 3.15], [1.76818476E12, 15.7], [1.76818464E12, 1.75], [1.76818482E12, 15.566666666666666], [1.7681847E12, 15.333333333333334]], "isOverall": false, "label": "/api/learner/fetch-failure", "isController": false}, {"data": [[1.76818476E12, 0.5166666666666667], [1.76818464E12, 0.5], [1.76818482E12, 0.5], [1.7681847E12, 0.5]], "isOverall": false, "label": "/api/learner/fetch-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76818488E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.76818464E12, "maxY": 15.7, "series": [{"data": [[1.76818476E12, 0.5166666666666667], [1.76818464E12, 0.5], [1.76818482E12, 0.5], [1.7681847E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76818488E12, 3.15], [1.76818476E12, 15.7], [1.76818464E12, 1.75], [1.76818482E12, 15.566666666666666], [1.7681847E12, 15.333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76818488E12, "title": "Total Transactions Per Second"}},
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

