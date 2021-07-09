exploreApp.showExploreTestbeds(
[
   {
      "country":"Greece",
      "description":"NETMODE testbeds can support research experiments on wireless, IoT and Edge Computing technologies. It provides wireless nodes, environmental sensors, robot, Raspberry Pis, and servers. The testbed is suitable for indoor and outdoor experiments and users  have full control over the nodes through ssh.",
      "documentation_url":"http://www.netmode.ntua.gr/main/index.php?option=com_content\u0026view=article\u0026id=124\u0026Itemid=89",
      "id":"netmode",
      "image_url":"http://www.netmode.ntua.gr/main/index.php?option=com_content\u0026view=article\u0026id=103\u0026Itemid=83",
      "odoo_team":17,
      "owner":"National Technical University of Athens (NTUA)",
      "properties":{
         "category":[
            "wireless",
            "iot"
         ],
         "properties":[
            "Resource reservation"
         ],
         "size":"25to100",
         "technologies":[
            "[Wireless] 802.11 a/b/g/n/ac"
         ]
      },
      "site_url":"http://www.netmode.ntua.gr/main/index.php?option=com_content\u0026view=article\u0026id=103\u0026Itemid=83",
      "testbed_name":"NETMODE",
      "uid":4
   },
   {
      "country":"Spain",
      "description":"SmartSantander testbed enables sensor-information based experimentation on top of a real life smart city scenario. It provides more than 500 heterogeneous sensors deployed across the city of Santander (Spain), offering near real time observations based on a subscription model. Available sensor information includes different domains, such as parking or environmental information.",
      "documentation_url":"https://api.smartsantander.eu/docs",
      "id":"smartsantander",
      "image_url":"https://ieeexplore.ieee.org/mediastore_new/IEEE/content/media/6287639/7859429/7968429/sotre1-2723659-large.gif",
      "odoo_team":12,
      "owner":"University of Cantabria",
      "properties":{
         "category":[
            "iot",
            "Smart City"
         ],
         "properties":[
            "Sensor Observations as a Service",
            "Pub/Sub based"
         ],
         "size":"500plus",
         "technologies":[
            "[Wireless] 802.15.4",
            "[Wireless] LoRaWan"
         ]
      },
      "site_url":"https://www.fed4fire.eu/testbeds/smart-santander",
      "testbed_name":"SmartSantander",
      "uid":7
   },
   {
      "country":"Belgium",
      "description":"GPULab is a distributed system for running jobs in GPU-enabled Docker-containers. GPULab consists of a set of heterogeneous clusters, each with their own characteristics (GPU model, CPU speed, memory, bus speed, \u2026), allowing you to select the most appropriate hardware. GPUs vary from Nvidia 1080TI up till the Nvidia V100 and DGX-2 system. Each job runs isolated within a Docker containers with dedicated CPU\u2019s, GPU\u2019s and memory for maximum performance.",
      "documentation_url":"https://doc.ilabt.imec.be/ilabt/gpulab/",
      "id":"gpulab",
      "image_url":"https://fed4fire.eu/wp-content/uploads/sites/10/2020/02/gpulab_img.png",
      "odoo_team":8,
      "owner":"imec - Ghent University",
      "properties":{
         "category":[
            "bigdata",
            "hpc",
            "ai",
            "gpu"
         ],
         "properties":[
            "IPv6 Support",
            "Job Based",
            "Large storage"
         ],
         "size":"25to100",
         "technologies":[
            "[GPUs] nVidia GPUs"
         ]
      },
      "site_url":"https://gpulab.ilabt.imec.be",
      "testbed_name":"GPULab",
      "uid":2
   },
   {
      "country":"Belgium",
      "description":"The Virtual Wall hardware (+550 servers) can be used as bare metal hardware (operating system running directly on the machine) or virtualized through XEN virtualization or docker containers (e.g. using Kubernetes to scale up). You have root permissions and have full control over the nodes through ssh",
      "documentation_url":"https://doc.ilabt.imec.be/ilabt/virtualwall/",
      "id":"wall",
      "image_url":"https://fed4fire.eu/wp-content/uploads/sites/10/2015/01/01virtualwall_sm.png",
      "odoo_team":8,
      "owner":"imec - Ghent University",
      "properties":{
         "category":[
            "wired",
            "cloud",
            "sdn",
            "bigdata",
            "openflow"
         ],
         "properties":[
            "IPv6 Support",
            "International L2 connectivity",
            "Long running experiments"
         ],
         "size":"500plus",
         "technologies":[
            "[Wired Networking] 1 Gigabit Ethernet",
            "[Wired Networking] 10 Gigabit Ethernet",
            "[Wired Networking] L2 Links support",
            "Openflow"
         ]
      },
      "site_url":"https://idlab.technology/infrastructure/virtual-wall/",
      "testbed_name":"Virtual Wall",
      "uid":1
   },
   {
      "country":"Belgium",
      "description":"The w-iLab.t testbed enables all kinds of wireless, IoT, and 5G research. It provides more than 200 nodes in various environments (industrial environment, office, datacenter) with up to data wifi hardware, user defined radios, mobile nodes and IoT devices. The experimenter has full control over all of them.",
      "documentation_url":"https://doc.ilabt.imec.be/ilabt/wilab/index.html",
      "id":"wilab",
      "image_url":"https://doc.ilabt.imec.be/ilabt/_images/overview1.png",
      "odoo_team":11,
      "owner":"imec - Ghent University",
      "properties":{
         "category":[
            "wireless",
            "iot",
            "5g",
            "sdn",
            "cognitiveradio"
         ],
         "properties":[
            "IPv6 Support",
            "Resource reservation"
         ],
         "size":"100to500",
         "technologies":[
            "[Wireless] 802.11 a/b/g/n/ac",
            "[Wireless] Bluetooth",
            "[Wireless] 802.15.4",
            "[Wireless] SDR",
            "[Wireless] LTE",
            "[Wireless] Sub-1GHz"
         ]
      },
      "site_url":"https://idlab.technology/infrastructure/w-ilab-t/",
      "testbed_name":"w-iLab.t",
      "uid":3
   },
   {
      "country":"Spain",
      "description":"The i2CAT OpenFlow wired testbed is integrated in the Fed4FIRE+ federation. It provides 5 OpenFlow 1.0 switches in a full-mesh fashion, connected to 2 virtualisation servers.",
      "documentation_url":"https://lab.i2cat.net/testbed-openflow-wired",
      "id":"i2catofelia",
      "image_url":"https://lab.i2cat.net/wp-content/uploads/2017/01/testbed_openflow.png",
      "odoo_team":16,
      "owner":"i2CAT",
      "properties":{
         "category":[
            "wired",
            "sdn",
            "openflow"
         ],
         "properties":[
            "Long running experiments"
         ],
         "size":"1to25",
         "technologies":[
            "Openflow"
         ]
      },
      "site_url":"https://lab.i2cat.net/",
      "testbed_name":"i2CAT OFELIA",
      "uid":9
   },
   {
      "country":"Belgium",
      "description":"The Citylab testbed is intended for large-scale wireless networking experimentation at a city neighborhood level in the unlicensed spectrum. The testbed is located in the city center of Antwerp in an area of about 0.5km by 0.5km. Nodes are installed in the streets in and around the city campus of the University of Antwerp which offers a highly realistic environment for testing in which where experiments typically face a lot of external radio interference from nearby equipment (e.g. WiFi networks, IoT devices, ...). Testbed nodes are equipped with a variety of WiFi, Bluetooth and IoT radios. The experimenter has full control over the nodes and the radios attached to them.",
      "documentation_url":"https://doc.lab.cityofthings.eu/wiki/Main_Page",
      "id":"citylab",
      "image_url":"https://doc.lab.cityofthings.eu/w/images/6/61/Citylab_deployment.png",
      "odoo_team":15,
      "owner":"imec - University of Antwerp",
      "properties":{
         "category":[
            "iot",
            "Smart City",
            "wireless"
         ],
         "properties":[
            "IPv6 Support",
            "City environment"
         ],
         "size":"25to100",
         "technologies":[
            "[Wireless] 802.15.4",
            "[Wireless] LoRaWan",
            "[Wireless] LoRa",
            "[Wireless] 802.11 a/b/g/n/ac",
            "[Wireless] Bluetooth",
            "[Wireless] DASH7",
            "[Wireless] Sub-1GHz"
         ]
      },
      "site_url":"https://www.fed4fire.eu/testbeds/citylab",
      "testbed_name":"CityLab",
      "uid":8
   },
   {
      "country":"France",
      "description":"Grid5000 is a large-scale and flexible testbed for experiment-driven research in all areas of computer science, with a focus on parallel and distributed computing including Cloud, HPC and Big Data and AI.",
      "documentation_url":"https://www.grid5000.fr/w/Users_Home",
      "id":"grid5000",
      "image_url":"https://www.grid5000.fr/mediawiki/resources/assets/logo.png",
      "odoo_team":14,
      "owner":"Inria",
      "properties":{
         "category":[
            "wired",
            "cloud",
            "sdn",
            "bigdata",
            "openflow"
         ],
         "properties":[
            "IPv6 Support",
            "International L2 connectivity",
            "Job based"
         ],
         "size":"500plus",
         "technologies":[
            "[Wired Networking] 1 Gigabit Ethernet",
            "[Wired Networking] 10 Gigabit Ethernet",
            "[Wired Networking] 25 Gigabit Ethernet",
            "[Wired Networking] L2 Links support",
            "Openflow",
            "Infiniband"
         ]
      },
      "site_url":"https://www.fed4fire.eu/testbeds/grid5000/",
      "testbed_name":"Grid5000",
      "uid":6
   },
   {
      "country":"Switzerland",
      "description":"IoT Lab is a platform for the research on the potential of crowdsourcing and the Internet of Things for multidisciplinary research and experiments with more end-user interactions. IoT Lab is offering a platform bringing together citizens, end-users and researchers to work together and to address real challenges by combining the research community and the wisdom of the crowd. IoT Lab provides a Testbed as a Service for the researchers. It combines into a common platform the crowdsourcing tools together with several testbeds on the Internet of Things. It provides a unique tool to ease all kinds of multidisciplinary research and experiments. It also facilitates reporting and sharing the most relevant results of the different research activities with the participants.",
      "documentation_url":"https://gitlab.distantaccess.com/iotlab-fed4fire/fed4fire-\ndocumentation",
      "id":"iotlab",
      "image_url":"https://gitlab.distantaccess.com/iotlab-fed4fire/fed4fire-documentation/-",
      "odoo_team":13,
      "owner":"Mandat International",
      "properties":{
         "category":[
            "iot"
         ],
         "properties":[
            "Resource reservation",
            "IPv6 Support",
            "Job Based"
         ],
         "size":"500plus",
         "technologies":[
            "[Wireless] 802.15.4"
         ]
      },
      "site_url":"https://www.iotlab.eu/",
      "testbed_name":"IoT Lab",
      "uid":5
   }
],
document.querySelector('#main-container')
);
