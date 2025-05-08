var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.02136598746512952,
        "pitch": 0.015231048586958451,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 0.6448939361617416,
          "pitch": 0.026594788526811186,
          "rotation": 0,
          "target": "3-admission-desk"
        },
        {
          "yaw": -0.7573386611211692,
          "pitch": 0.01492637403372754,
          "rotation": 0,
          "target": "2-reception"
        },
        {
          "yaw": 0.1068805259533061,
          "pitch": 0.12029326802785079,
          "rotation": 0,
          "target": "1-lobby"
        },
        {
          "yaw": 1.164729962214965,
          "pitch": 0.025694645648739467,
          "rotation": 0,
          "target": "6-waiting-area"
        },
        {
          "yaw": -1.2031898326613106,
          "pitch": 0.10977703868927335,
          "rotation": 0,
          "target": "5-waiting-area"
        },
        {
          "yaw": -1.4134945907601484,
          "pitch": 0.017868835795940896,
          "rotation": 0,
          "target": "4-insurance--mediclaim"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3722292155460849,
        "pitch": -0.01526149976863067,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 0.3310858552027831,
          "pitch": 0.10774051092268877,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 1.0666659045070315,
          "pitch": 0.12301745506583472,
          "rotation": 0,
          "target": "5-waiting-area"
        },
        {
          "yaw": 1.8400786093697654,
          "pitch": -0.08765317432141373,
          "rotation": 1.5707963267948966,
          "target": "2-reception"
        },
        {
          "yaw": 1.5272742404586195,
          "pitch": 0.01990139149945236,
          "rotation": 0,
          "target": "4-insurance--mediclaim"
        },
        {
          "yaw": -1.1362061932161218,
          "pitch": 0.011369008782629919,
          "rotation": 4.71238898038469,
          "target": "3-admission-desk"
        },
        {
          "yaw": -0.726999311867015,
          "pitch": 0.0681989329859185,
          "rotation": 0,
          "target": "6-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0262030664306927,
        "pitch": 0.0076155242934792255,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -1.7096026366073858,
          "pitch": 0.21113319569969669,
          "rotation": 0,
          "target": "4-insurance--mediclaim"
        },
        {
          "yaw": 2.110676712836648,
          "pitch": 0.04711498318695462,
          "rotation": 1.5707963267948966,
          "target": "0-entrance"
        },
        {
          "yaw": 0.9486841249551965,
          "pitch": 0.15202741326087477,
          "rotation": 0,
          "target": "1-lobby"
        },
        {
          "yaw": 1.3242900486675975,
          "pitch": 0.00419582354652448,
          "rotation": 4.71238898038469,
          "target": "3-admission-desk"
        },
        {
          "yaw": 1.6754356679755187,
          "pitch": 0.0005245334262795609,
          "rotation": 0,
          "target": "6-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-admission-desk",
      "name": "Admission Desk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.023303193523609878,
        "pitch": 0.012288139852254076,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 1.6779482434581023,
          "pitch": 0.11243542593368794,
          "rotation": 0,
          "target": "6-waiting-area"
        },
        {
          "yaw": -2.0106214648307237,
          "pitch": -0.037827836289082484,
          "rotation": 1.5707963267948966,
          "target": "0-entrance"
        },
        {
          "yaw": -0.8402579361888112,
          "pitch": 0.05957232294379544,
          "rotation": 4.71238898038469,
          "target": "1-lobby"
        },
        {
          "yaw": -1.2659159389762884,
          "pitch": -0.018938704555978347,
          "rotation": 1.5707963267948966,
          "target": "2-reception"
        },
        {
          "yaw": -1.5905154582892322,
          "pitch": -0.0019636397207243306,
          "rotation": 0,
          "target": "5-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-insurance--mediclaim",
      "name": "Insurance & Mediclaim",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.0334655086359605,
        "pitch": 0.01419928737000653,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -0.4554261667136146,
          "pitch": 0.02166645729413652,
          "rotation": 4.71238898038469,
          "target": "2-reception"
        },
        {
          "yaw": 0.40249010025165255,
          "pitch": 0.2055768627045964,
          "rotation": 0,
          "target": "5-waiting-area"
        },
        {
          "yaw": 0.4076947099815147,
          "pitch": -0.030460829606672846,
          "rotation": 1.5707963267948966,
          "target": "0-entrance"
        },
        {
          "yaw": -0.1781657007518067,
          "pitch": 0.0827146013715474,
          "rotation": 2.356194490192345,
          "target": "1-lobby"
        },
        {
          "yaw": 0.02598163579346746,
          "pitch": 0.014539336439051809,
          "rotation": 4.71238898038469,
          "target": "3-admission-desk"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-waiting-area",
      "name": "Waiting Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.431092094541052,
        "pitch": 0.023958763154872997,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -3.1282827710384495,
          "pitch": 0.12204137870763887,
          "rotation": 0,
          "target": "4-insurance--mediclaim"
        },
        {
          "yaw": -2.121898050124109,
          "pitch": 0.14052075148431165,
          "rotation": 0.7853981633974483,
          "target": "2-reception"
        },
        {
          "yaw": 1.2012350833645353,
          "pitch": 0.2766618586867171,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.8037384970969974,
          "pitch": 0.3107647485214713,
          "rotation": 0,
          "target": "1-lobby"
        },
        {
          "yaw": -0.057898042579594744,
          "pitch": -0.0031250903918405015,
          "rotation": 4.71238898038469,
          "target": "3-admission-desk"
        },
        {
          "yaw": 0.3237799771707124,
          "pitch": 0.06473088972498076,
          "rotation": 0,
          "target": "6-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-waiting-area",
      "name": "Waiting Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.274273849789747,
        "pitch": 0.0076155242934792255,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 0.5372238474563318,
          "pitch": -0.05658720778894022,
          "rotation": 1.5707963267948966,
          "target": "3-admission-desk"
        },
        {
          "yaw": -0.08693662409939229,
          "pitch": -0.01724536280707767,
          "rotation": 4.71238898038469,
          "target": "0-entrance"
        },
        {
          "yaw": 0.30636635651292465,
          "pitch": 0.018959018008212425,
          "rotation": 1.5707963267948966,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SNIMS Reception",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
