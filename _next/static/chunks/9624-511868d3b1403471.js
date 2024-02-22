"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9624],
  {
    52357: function (e, t, r) {
      r.d(t, {
        m: function () {
          return l;
        },
      });
      var a = r(80178),
        n = r(5645),
        i = r(65597),
        s = r(2212),
        o = r(87303),
        d = r(97738);
      function l(e, t, r = -1) {
        if (!e) throw Error("Invalid empty address passed");
        if ((0, a.U)(e) || (0, n.vq)(e)) return (0, i.Y)(e);
        try {
          let a = (0, s.MW)(e);
          if (!d.c.allowedEncodedLengths.includes(a.length))
            throw Error("Invalid decoded address length");
          let [n, i, l, c] = (function (e) {
            let t = 64 & e[0] ? 2 : 1,
              r =
                1 === t
                  ? e[0]
                  : ((63 & e[0]) << 2) | (e[1] >> 6) | ((63 & e[1]) << 8),
              a = [34 + t, 35 + t].includes(e.length),
              n = e.length - (a ? 2 : 1),
              i = (0, o.b)(e.subarray(0, n)),
              s =
                (128 & e[0]) == 0 &&
                ![46, 47].includes(e[0]) &&
                (a
                  ? e[e.length - 2] === i[0] && e[e.length - 1] === i[1]
                  : e[e.length - 1] === i[0]);
            return [s, n, t, r];
          })(a);
          if (n || t) {
            if (-1 !== r && r !== c)
              throw Error(`Expected ss58Format ${r}, received ${c}`);
          } else throw Error("Invalid decoded address checksum");
          return a.slice(l, i);
        } catch (t) {
          throw Error(`Decoding ${e}: ${t.message}`);
        }
      }
    },
    97738: function (e, t, r) {
      r.d(t, {
        c: function () {
          return f;
        },
      });
      let a = {
          acala: 787,
          ajuna: 354,
          "aleph-node": 643,
          astar: 810,
          bifrost: 788,
          "bifrost-kusama": 788,
          centrifuge: 747,
          composable: 354,
          darwinia: 354,
          "dock-mainnet": 594,
          edgeware: 523,
          equilibrium: 99999997,
          genshiro: 99999996,
          hydradx: 354,
          "interlay-parachain": 354,
          karura: 686,
          khala: 434,
          kusama: 434,
          nodle: 1003,
          origintrail: 354,
          parallel: 354,
          pendulum: 354,
          phala: 354,
          picasso: 434,
          polkadex: 799,
          polkadot: 354,
          polymesh: 595,
          sora: 617,
          stafi: 907,
          statemine: 434,
          statemint: 354,
          ternoa: 995,
          unique: 354,
          vtb: 694,
          xxnetwork: 1955,
        },
        n = {
          acala: [
            "0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c",
          ],
          ajuna: [
            "0xe358eb1d11b31255a286c12e44fe6780b7edb171d657905a97e39f71d9c6c3ee",
          ],
          "aleph-node": [
            "0x70255b4d28de0fc4e1a193d7e175ad1ccef431598211c55538f1018651a0344e",
          ],
          astar: [
            "0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6",
          ],
          basilisk: [
            "0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755",
          ],
          bifrost: [
            "0x262e1b2ad728475fd6fe88e62d34c200abe6fd693931ddad144059b1eb884e5b",
          ],
          "bifrost-kusama": [
            "0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed",
          ],
          Atomic: [
            "0x2f0555cc76fc2840a25a6ea3b9637146806f1f44b090c175ffde2a7e5ab36c03",
          ],
          centrifuge: [
            "0xb3db41421702df9a7fcac62b53ffeac85f7853cc4e689e0b93aeb3db18c09d82",
            "0x67dddf2673b69e5f875f6f25277495834398eafd67f492e09f3f3345e003d1b5",
          ],
          cere: [
            "0x81443836a9a24caaa23f1241897d1235717535711d1d3fe24eae4fdc942c092c",
          ],
          composable: [
            "0xdaab8df776eb52ec604a5df5d388bb62a050a0aaec4556a64265b9d42755552d",
          ],
          darwinia: [
            "0xe71578b37a7c799b0ab4ee87ffa6f059a6b98f71f06fb8c84a8d88013a548ad6",
          ],
          "dock-mainnet": [
            "0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae",
            "0xf73467c6544aa68df2ee546b135f955c46b90fa627e9b5d7935f41061bb8a5a9",
          ],
          edgeware: [
            "0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b",
          ],
          equilibrium: [
            "0x6f1a800de3daff7f5e037ddf66ab22ce03ab91874debeddb1086f5f7dbd48925",
          ],
          genshiro: [
            "0x9b8cefc0eb5c568b527998bdd76c184e2b76ae561be76e4667072230217ea243",
          ],
          hydradx: [
            "0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d",
            "0xd2a620c27ec5cbc5621ff9a522689895074f7cca0d08e7134a7804e1a3ba86fc",
            "0x10af6e84234477d84dc572bac0789813b254aa490767ed06fb9591191d1073f9",
            "0x3d75507dd46301767e601265791da1d9cb47b6ebc94e87347b635e5bf58bd047",
            "0x0ed32bfcab4a83517fac88f2aa7cbc2f88d3ab93be9a12b6188a036bf8a943c2",
          ],
          "interlay-parachain": [
            "0xbf88efe70e9e0e916416e8bed61f2b45717f517d7f3523e33c7b001e5ffcbc72",
          ],
          karura: [
            "0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b",
          ],
          khala: [
            "0xd43540ba6d3eb4897c28a77d48cb5b729fea37603cbbfc7a86a73b72adb3be8d",
          ],
          kulupu: [
            "0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba",
          ],
          kusama: [
            "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe",
            "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636",
            "0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf",
          ],
          nodle: [
            "0x97da7ede98d7bad4e36b4d734b6055425a3be036da2a332ea5a7037656427a21",
          ],
          origintrail: [
            "0xe7e0962324a3b86c83404dbea483f25fb5dab4c224791c81b756cfc948006174",
          ],
          p3d: [
            "0x6c5894837ad89b6d92b114a2fb3eafa8fe3d26a54848e3447015442cd6ef4e66",
          ],
          parallel: [
            "0xe61a41c53f5dcd0beb09df93b34402aada44cb05117b71059cce40a2723a4e97",
          ],
          pendulum: [
            "0x5d3c298622d5634ed019bf61ea4b71655030015bde9beb0d6a24743714462c86",
          ],
          phala: [
            "0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736",
          ],
          picasso: [
            "0x6811a339673c9daa897944dcdac99c6e2939cc88245ed21951a0a3c9a2be75bc",
            "0xe8e7f0f4c4f5a00720b4821dbfddefea7490bcf0b19009961cc46957984e2c1c",
          ],
          polkadex: [
            "0x3920bcb4960a1eef5580cd5367ff3f430eef052774f78468852f7b9cb39f8a3c",
          ],
          polkadot: [
            "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
          ],
          polymesh: [
            "0x6fbd74e5e1d0a61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063",
          ],
          rococo: [
            "0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e",
            "0xaaf2cd1b74b5f726895921259421b534124726263982522174147046b8827897",
            "0x037f5f3c8e67b314062025fc886fcd6238ea25a4a9b45dce8d246815c9ebe770",
            "0xc196f81260cf1686172b47a79cf002120735d7cb0eb1474e8adce56618456fff",
            "0xf6e9983c37baf68846fedafe21e56718790e39fb1c582abc408b81bc7b208f9a",
            "0x5fce687da39305dfe682b117f0820b319348e8bb37eb16cf34acbf6a202de9d9",
            "0xe7c3d5edde7db964317cd9b51a3a059d7cd99f81bdbce14990047354334c9779",
            "0x1611e1dbf0405379b861e2e27daa90f480b2e6d3682414a80835a52e8cb8a215",
            "0x343442f12fa715489a8714e79a7b264ea88c0d5b8c66b684a7788a516032f6b9",
            "0x78bcd530c6b3a068bc17473cf5d2aff9c287102bed9af3ae3c41c33b9d6c6147",
            "0x47381ee0697153d64404fc578392c8fd5cba9073391908f46c888498415647bd",
            "0x19c0e4fa8ab75f5ac7865e0b8f74ff91eb9a100d336f423cd013a8befba40299",
          ],
          sora: [
            "0x7e4e32d0feafd4f9c9414b0be86373f9a1efa904809b683453a9af6856d38ad5",
          ],
          stafi: [
            "0x290a4149f09ea0e402c74c1c7e96ae4239588577fe78932f94f5404c68243d80",
          ],
          statemine: [
            "0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a",
          ],
          statemint: [
            "0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f",
          ],
          subsocial: [
            "0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8",
          ],
          ternoa: [
            "0x6859c81ca95ef624c9dfe4dc6e3381c33e5d6509e35e147092bfbc780f777c4e",
          ],
          unique: [
            "0x84322d9cddbf35088f1e54e9a85c967a41a56a4f43445768125e61af166c7d31",
          ],
          vtb: [
            "0x286bc8414c7000ce1d6ee6a834e29a54c1784814b76243eb77ed0b2c5573c60f",
            "0x7483b89572fb2bd687c7b9a93b242d0b237f9aba463aba07ec24503931038aaa",
          ],
          westend: [
            "0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",
          ],
          xxnetwork: [
            "0x50dd5d206917bf10502c68fb4d18a59fc8aa31586f4e8856b493e43544aa82aa",
          ],
        },
        i = {
          centrifuge: "polkadot",
          kusama: "polkadot",
          polkadot: "polkadot",
          sora: "polkadot",
          statemine: "polkadot",
          statemint: "polkadot",
          westmint: "polkadot",
        },
        s = {
          "": !0,
          "cess-testnet": !0,
          "dock-testnet": !0,
          jupiter: !0,
          "mathchain-testnet": !0,
          p3dt: !0,
          subspace_testnet: !0,
          "zero-alphaville": !0,
        },
        o = [0, 2, 42],
        d = ["testnet"],
        l = [
          {
            prefix: 0,
            network: "polkadot",
            displayName: "Polkadot Relay Chain",
            symbols: ["DOT"],
            decimals: [10],
            standardAccount: "*25519",
            website: "https://polkadot.network",
          },
          {
            prefix: 1,
            network: "BareSr25519",
            displayName:
              "Bare 32-bit Schnorr/Ristretto (S/R 25519) public key.",
            symbols: [],
            decimals: [],
            standardAccount: "Sr25519",
            website: null,
          },
          {
            prefix: 2,
            network: "kusama",
            displayName: "Kusama Relay Chain",
            symbols: ["KSM"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://kusama.network",
          },
          {
            prefix: 3,
            network: "BareEd25519",
            displayName: "Bare 32-bit Ed25519 public key.",
            symbols: [],
            decimals: [],
            standardAccount: "Ed25519",
            website: null,
          },
          {
            prefix: 4,
            network: "katalchain",
            displayName: "Katal Chain",
            symbols: [],
            decimals: [],
            standardAccount: "*25519",
            website: null,
          },
          {
            prefix: 5,
            network: "astar",
            displayName: "Astar Network",
            symbols: ["ASTR"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://astar.network",
          },
          {
            prefix: 6,
            network: "bifrost",
            displayName: "Bifrost",
            symbols: ["BNC"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://bifrost.finance/",
          },
          {
            prefix: 7,
            network: "edgeware",
            displayName: "Edgeware",
            symbols: ["EDG"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://edgewa.re",
          },
          {
            prefix: 8,
            network: "karura",
            displayName: "Karura",
            symbols: ["KAR"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://karura.network/",
          },
          {
            prefix: 9,
            network: "reynolds",
            displayName: "Laminar Reynolds Canary",
            symbols: ["REY"],
            decimals: [18],
            standardAccount: "*25519",
            website: "http://laminar.network/",
          },
          {
            prefix: 10,
            network: "acala",
            displayName: "Acala",
            symbols: ["ACA"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://acala.network/",
          },
          {
            prefix: 11,
            network: "laminar",
            displayName: "Laminar",
            symbols: ["LAMI"],
            decimals: [18],
            standardAccount: "*25519",
            website: "http://laminar.network/",
          },
          {
            prefix: 12,
            network: "polymesh",
            displayName: "Polymesh",
            symbols: ["POLYX"],
            decimals: [6],
            standardAccount: "*25519",
            website: "https://polymath.network/",
          },
          {
            prefix: 13,
            network: "integritee",
            displayName: "Integritee",
            symbols: ["TEER"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://integritee.network",
          },
          {
            prefix: 14,
            network: "totem",
            displayName: "Totem",
            symbols: ["TOTEM"],
            decimals: [0],
            standardAccount: "*25519",
            website: "https://totemaccounting.com",
          },
          {
            prefix: 15,
            network: "synesthesia",
            displayName: "Synesthesia",
            symbols: ["SYN"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://synesthesia.network/",
          },
          {
            prefix: 16,
            network: "kulupu",
            displayName: "Kulupu",
            symbols: ["KLP"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://kulupu.network/",
          },
          {
            prefix: 17,
            network: "dark",
            displayName: "Dark Mainnet",
            symbols: [],
            decimals: [],
            standardAccount: "*25519",
            website: null,
          },
          {
            prefix: 18,
            network: "darwinia",
            displayName: "Darwinia Network",
            symbols: ["RING"],
            decimals: [18],
            standardAccount: "secp256k1",
            website: "https://darwinia.network",
          },
          {
            prefix: 19,
            network: "watr",
            displayName: "Watr Protocol",
            symbols: ["WATR"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://www.watr.org",
          },
          {
            prefix: 20,
            network: "stafi",
            displayName: "Stafi",
            symbols: ["FIS"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://stafi.io",
          },
          {
            prefix: 21,
            network: "karmachain",
            displayName: "Karmacoin",
            symbols: ["KCOIN"],
            decimals: [6],
            standardAccount: "*25519",
            website: "https://karmaco.in",
          },
          {
            prefix: 22,
            network: "dock-pos-mainnet",
            displayName: "Dock Mainnet",
            symbols: ["DCK"],
            decimals: [6],
            standardAccount: "*25519",
            website: "https://dock.io",
          },
          {
            prefix: 23,
            network: "shift",
            displayName: "ShiftNrg",
            symbols: [],
            decimals: [],
            standardAccount: "*25519",
            website: null,
          },
          {
            prefix: 24,
            network: "zero",
            displayName: "ZERO",
            symbols: ["ZERO"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://zero.io",
          },
          {
            prefix: 25,
            network: "zero-alphaville",
            displayName: "ZERO Alphaville",
            symbols: ["ZERO"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://zero.io",
          },
          {
            prefix: 26,
            network: "jupiter",
            displayName: "Jupiter",
            symbols: ["jDOT"],
            decimals: [10],
            standardAccount: "*25519",
            website: "https://jupiter.patract.io",
          },
          {
            prefix: 27,
            network: "kabocha",
            displayName: "Kabocha",
            symbols: ["KAB"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://kabocha.network",
          },
          {
            prefix: 28,
            network: "subsocial",
            displayName: "Subsocial",
            symbols: [],
            decimals: [],
            standardAccount: "*25519",
            website: null,
          },
          {
            prefix: 29,
            network: "cord",
            displayName: "CORD Network",
            symbols: ["DHI", "WAY"],
            decimals: [12, 12],
            standardAccount: "*25519",
            website: "https://cord.network/",
          },
          {
            prefix: 30,
            network: "phala",
            displayName: "Phala Network",
            symbols: ["PHA"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://phala.network",
          },
          {
            prefix: 31,
            network: "litentry",
            displayName: "Litentry Network",
            symbols: ["LIT"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://litentry.com/",
          },
          {
            prefix: 32,
            network: "robonomics",
            displayName: "Robonomics",
            symbols: ["XRT"],
            decimals: [9],
            standardAccount: "*25519",
            website: "https://robonomics.network",
          },
          {
            prefix: 33,
            network: "datahighway",
            displayName: "DataHighway",
            symbols: [],
            decimals: [],
            standardAccount: "*25519",
            website: null,
          },
          {
            prefix: 34,
            network: "ares",
            displayName: "Ares Protocol",
            symbols: ["ARES"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://www.aresprotocol.com/",
          },
          {
            prefix: 35,
            network: "vln",
            displayName: "Valiu Liquidity Network",
            symbols: ["USDv"],
            decimals: [15],
            standardAccount: "*25519",
            website: "https://valiu.com/",
          },
          {
            prefix: 36,
            network: "centrifuge",
            displayName: "Centrifuge Chain",
            symbols: ["CFG"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://centrifuge.io/",
          },
          {
            prefix: 37,
            network: "nodle",
            displayName: "Nodle Chain",
            symbols: ["NODL"],
            decimals: [11],
            standardAccount: "*25519",
            website: "https://nodle.io/",
          },
          {
            prefix: 38,
            network: "kilt",
            displayName: "KILT Spiritnet",
            symbols: ["KILT"],
            decimals: [15],
            standardAccount: "*25519",
            website: "https://kilt.io/",
          },
          {
            prefix: 39,
            network: "mathchain",
            displayName: "MathChain mainnet",
            symbols: ["MATH"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://mathwallet.org",
          },
          {
            prefix: 40,
            network: "mathchain-testnet",
            displayName: "MathChain testnet",
            symbols: ["MATH"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://mathwallet.org",
          },
          {
            prefix: 41,
            network: "polimec",
            displayName: "Polimec Protocol",
            symbols: ["PLMC"],
            decimals: [10],
            standardAccount: "*25519",
            website: "https://www.polimec.org/",
          },
          {
            prefix: 42,
            network: "substrate",
            displayName: "Substrate",
            symbols: [],
            decimals: [],
            standardAccount: "*25519",
            website: "https://substrate.io/",
          },
          {
            prefix: 43,
            network: "BareSecp256k1",
            displayName: "Bare 32-bit ECDSA SECP-256k1 public key.",
            symbols: [],
            decimals: [],
            standardAccount: "secp256k1",
            website: null,
          },
          {
            prefix: 44,
            network: "chainx",
            displayName: "ChainX",
            symbols: ["PCX"],
            decimals: [8],
            standardAccount: "*25519",
            website: "https://chainx.org/",
          },
          {
            prefix: 45,
            network: "uniarts",
            displayName: "UniArts Network",
            symbols: ["UART", "UINK"],
            decimals: [12, 12],
            standardAccount: "*25519",
            website: "https://uniarts.me",
          },
          {
            prefix: 46,
            network: "reserved46",
            displayName: "This prefix is reserved.",
            symbols: [],
            decimals: [],
            standardAccount: null,
            website: null,
          },
          {
            prefix: 47,
            network: "reserved47",
            displayName: "This prefix is reserved.",
            symbols: [],
            decimals: [],
            standardAccount: null,
            website: null,
          },
          {
            prefix: 48,
            network: "neatcoin",
            displayName: "Neatcoin Mainnet",
            symbols: ["NEAT"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://neatcoin.org",
          },
          {
            prefix: 49,
            network: "picasso",
            displayName: "Picasso",
            symbols: ["PICA"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://picasso.composable.finance",
          },
          {
            prefix: 50,
            network: "composable",
            displayName: "Composable Finance",
            symbols: ["LAYR"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://composable.finance",
          },
          {
            prefix: 51,
            network: "oak",
            displayName: "OAK Network",
            symbols: ["OAK", "TUR"],
            decimals: [10, 10],
            standardAccount: "*25519",
            website: "https://oak.tech",
          },
          {
            prefix: 52,
            network: "KICO",
            displayName: "KICO",
            symbols: ["KICO"],
            decimals: [14],
            standardAccount: "*25519",
            website: "https://dico.io",
          },
          {
            prefix: 53,
            network: "DICO",
            displayName: "DICO",
            symbols: ["DICO"],
            decimals: [14],
            standardAccount: "*25519",
            website: "https://dico.io",
          },
          {
            prefix: 54,
            network: "cere",
            displayName: "Cere Network",
            symbols: ["CERE"],
            decimals: [10],
            standardAccount: "*25519",
            website: "https://cere.network",
          },
          {
            prefix: 55,
            network: "xxnetwork",
            displayName: "xx network",
            symbols: ["XX"],
            decimals: [9],
            standardAccount: "*25519",
            website: "https://xx.network",
          },
          {
            prefix: 56,
            network: "pendulum",
            displayName: "Pendulum chain",
            symbols: ["PEN"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://pendulumchain.org/",
          },
          {
            prefix: 57,
            network: "amplitude",
            displayName: "Amplitude chain",
            symbols: ["AMPE"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://pendulumchain.org/",
          },
          {
            prefix: 63,
            network: "hydradx",
            displayName: "HydraDX",
            symbols: ["HDX"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://hydradx.io",
          },
          {
            prefix: 64,
            network: "ewx",
            displayName: "Energy Web X",
            symbols: ["EWT"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://www.energyweb.org",
          },
          {
            prefix: 65,
            network: "aventus",
            displayName: "Aventus Mainnet",
            symbols: ["AVT"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://aventus.io",
          },
          {
            prefix: 66,
            network: "crust",
            displayName: "Crust Network",
            symbols: ["CRU"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://crust.network",
          },
          {
            prefix: 67,
            network: "genshiro",
            displayName: "Genshiro Network",
            symbols: ["GENS", "EQD", "LPT0"],
            decimals: [9, 9, 9],
            standardAccount: "*25519",
            website: "https://genshiro.equilibrium.io",
          },
          {
            prefix: 68,
            network: "equilibrium",
            displayName: "Equilibrium Network",
            symbols: ["EQ"],
            decimals: [9],
            standardAccount: "*25519",
            website: "https://equilibrium.io",
          },
          {
            prefix: 69,
            network: "sora",
            displayName: "SORA Network",
            symbols: ["XOR"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://sora.org",
          },
          {
            prefix: 71,
            network: "p3d",
            displayName: "3DP network",
            symbols: ["P3D"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://3dpass.org",
          },
          {
            prefix: 72,
            network: "p3dt",
            displayName: "3DP test network",
            symbols: ["P3Dt"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://3dpass.org",
          },
          {
            prefix: 73,
            network: "zeitgeist",
            displayName: "Zeitgeist",
            symbols: ["ZTG"],
            decimals: [10],
            standardAccount: "*25519",
            website: "https://zeitgeist.pm",
          },
          {
            prefix: 77,
            network: "manta",
            displayName: "Manta network",
            symbols: ["MANTA"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://manta.network",
          },
          {
            prefix: 78,
            network: "calamari",
            displayName: "Calamari: Manta Canary Network",
            symbols: ["KMA"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://manta.network",
          },
          {
            prefix: 81,
            network: "sora_dot_para",
            displayName: "SORA Polkadot Parachain",
            symbols: ["XOR"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://sora.org",
          },
          {
            prefix: 88,
            network: "polkadex",
            displayName: "Polkadex Mainnet",
            symbols: ["PDEX"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://polkadex.trade",
          },
          {
            prefix: 89,
            network: "polkadexparachain",
            displayName: "Polkadex Parachain",
            symbols: ["PDEX"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://polkadex.trade",
          },
          {
            prefix: 90,
            network: "frequency",
            displayName: "Frequency",
            symbols: ["FRQCY"],
            decimals: [8],
            standardAccount: "*25519",
            website: "https://www.frequency.xyz",
          },
          {
            prefix: 92,
            network: "anmol",
            displayName: "Anmol Network",
            symbols: ["ANML"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://anmol.network/",
          },
          {
            prefix: 93,
            network: "fragnova",
            displayName: "Fragnova Network",
            symbols: ["NOVA"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://fragnova.com",
          },
          {
            prefix: 98,
            network: "polkasmith",
            displayName: "PolkaSmith Canary Network",
            symbols: ["PKS"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://polkafoundry.com",
          },
          {
            prefix: 99,
            network: "polkafoundry",
            displayName: "PolkaFoundry Network",
            symbols: ["PKF"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://polkafoundry.com",
          },
          {
            prefix: 100,
            network: "ibtida",
            displayName: "Anmol Network Ibtida Canary network",
            symbols: ["IANML"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://anmol.network/",
          },
          {
            prefix: 101,
            network: "origintrail-parachain",
            displayName: "OriginTrail Parachain",
            symbols: ["OTP"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://parachain.origintrail.io/",
          },
          {
            prefix: 105,
            network: "pontem-network",
            displayName: "Pontem Network",
            symbols: ["PONT"],
            decimals: [10],
            standardAccount: "*25519",
            website: "https://pontem.network",
          },
          {
            prefix: 110,
            network: "heiko",
            displayName: "Heiko",
            symbols: ["HKO"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://parallel.fi/",
          },
          {
            prefix: 113,
            network: "integritee-incognito",
            displayName: "Integritee Incognito",
            symbols: [],
            decimals: [],
            standardAccount: "*25519",
            website: "https://integritee.network",
          },
          {
            prefix: 117,
            network: "tinker",
            displayName: "Tinker",
            symbols: ["TNKR"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://invarch.network",
          },
          {
            prefix: 126,
            network: "joystream",
            displayName: "Joystream",
            symbols: ["JOY"],
            decimals: [10],
            standardAccount: "*25519",
            website: "https://www.joystream.org",
          },
          {
            prefix: 128,
            network: "clover",
            displayName: "Clover Finance",
            symbols: ["CLV"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://clover.finance",
          },
          {
            prefix: 129,
            network: "dorafactory-polkadot",
            displayName: "Dorafactory Polkadot Network",
            symbols: ["DORA"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://dorafactory.org",
          },
          {
            prefix: 131,
            network: "litmus",
            displayName: "Litmus Network",
            symbols: ["LIT"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://litentry.com/",
          },
          {
            prefix: 136,
            network: "altair",
            displayName: "Altair",
            symbols: ["AIR"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://centrifuge.io/",
          },
          {
            prefix: 137,
            network: "vara",
            displayName: "Vara Network",
            symbols: ["VARA"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://vara-network.io/",
          },
          {
            prefix: 172,
            network: "parallel",
            displayName: "Parallel",
            symbols: ["PARA"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://parallel.fi/",
          },
          {
            prefix: 252,
            network: "social-network",
            displayName: "Social Network",
            symbols: ["NET"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://social.network",
          },
          {
            prefix: 255,
            network: "quartz_mainnet",
            displayName: "QUARTZ by UNIQUE",
            symbols: ["QTZ"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://unique.network",
          },
          {
            prefix: 268,
            network: "pioneer_network",
            displayName: "Pioneer Network by Bit.Country",
            symbols: ["NEER"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://bit.country",
          },
          {
            prefix: 420,
            network: "sora_kusama_para",
            displayName: "SORA Kusama Parachain",
            symbols: ["XOR"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://sora.org",
          },
          {
            prefix: 440,
            network: "allfeat_network",
            displayName: "Allfeat Network",
            symbols: ["AFT"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://allfeat.network",
          },
          {
            prefix: 666,
            network: "metaquity_network",
            displayName: "Metaquity Network",
            symbols: ["MQTY"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://metaquity.xyz/",
          },
          {
            prefix: 789,
            network: "geek",
            displayName: "GEEK Network",
            symbols: ["GEEK"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://geek.gl",
          },
          {
            prefix: 995,
            network: "ternoa",
            displayName: "Ternoa",
            symbols: ["CAPS"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://www.ternoa.network",
          },
          {
            prefix: 1110,
            network: "efinity",
            displayName: "Efinity",
            symbols: ["EFI"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://efinity.io/",
          },
          {
            prefix: 1221,
            network: "peaq",
            displayName: "Peaq Network",
            symbols: ["PEAQ"],
            decimals: [18],
            standardAccount: "Sr25519",
            website: "https://www.peaq.network/",
          },
          {
            prefix: 1222,
            network: "krest",
            displayName: "Krest Network",
            symbols: ["KREST"],
            decimals: [18],
            standardAccount: "Sr25519",
            website: "https://www.peaq.network/",
          },
          {
            prefix: 1284,
            network: "moonbeam",
            displayName: "Moonbeam",
            symbols: ["GLMR"],
            decimals: [18],
            standardAccount: "secp256k1",
            website: "https://moonbeam.network",
          },
          {
            prefix: 1285,
            network: "moonriver",
            displayName: "Moonriver",
            symbols: ["MOVR"],
            decimals: [18],
            standardAccount: "secp256k1",
            website: "https://moonbeam.network",
          },
          {
            prefix: 1328,
            network: "ajuna",
            displayName: "Ajuna Network",
            symbols: ["AJUN"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://ajuna.io",
          },
          {
            prefix: 1337,
            network: "bajun",
            displayName: "Bajun Network",
            symbols: ["BAJU"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://ajuna.io",
          },
          {
            prefix: 1516,
            network: "societal",
            displayName: "Societal",
            symbols: ["SCTL"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://www.sctl.xyz",
          },
          {
            prefix: 1985,
            network: "seals",
            displayName: "Seals Network",
            symbols: ["SEAL"],
            decimals: [9],
            standardAccount: "*25519",
            website: "https://seals.app",
          },
          {
            prefix: 2007,
            network: "kapex",
            displayName: "Kapex",
            symbols: ["KAPEX"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://totemaccounting.com",
          },
          {
            prefix: 2009,
            network: "cloudwalk_mainnet",
            displayName: "CloudWalk Network Mainnet",
            symbols: ["CWN"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://explorer.mainnet.cloudwalk.io",
          },
          {
            prefix: 2021,
            network: "logion",
            displayName: "logion network",
            symbols: ["LGNT"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://logion.network",
          },
          {
            prefix: 2032,
            network: "interlay",
            displayName: "Interlay",
            symbols: ["INTR"],
            decimals: [10],
            standardAccount: "*25519",
            website: "https://interlay.io/",
          },
          {
            prefix: 2092,
            network: "kintsugi",
            displayName: "Kintsugi",
            symbols: ["KINT"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://interlay.io/",
          },
          {
            prefix: 2106,
            network: "bitgreen",
            displayName: "Bitgreen",
            symbols: ["BBB"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://bitgreen.org/",
          },
          {
            prefix: 2112,
            network: "chainflip",
            displayName: "Chainflip",
            symbols: ["FLIP"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://chainflip.io/",
          },
          {
            prefix: 2199,
            network: "moonsama",
            displayName: "Moonsama",
            symbols: ["SAMA"],
            decimals: [18],
            standardAccount: "secp256k1",
            website: "https://moonsama.com",
          },
          {
            prefix: 2206,
            network: "ICE",
            displayName: "ICE Network",
            symbols: ["ICY"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://icenetwork.io",
          },
          {
            prefix: 2207,
            network: "SNOW",
            displayName: "SNOW: ICE Canary Network",
            symbols: ["ICZ"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://icenetwork.io",
          },
          {
            prefix: 2254,
            network: "subspace_testnet",
            displayName: "Subspace testnet",
            symbols: ["tSSC"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://subspace.network",
          },
          {
            prefix: 3333,
            network: "peerplays",
            displayName: "Peerplays",
            symbols: ["PPY"],
            decimals: [18],
            standardAccount: "secp256k1",
            website: "https://www.peerplays.com/",
          },
          {
            prefix: 4006,
            network: "tangle",
            displayName: "Tangle Network",
            symbols: ["TNT"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://www.webb.tools/",
          },
          {
            prefix: 4450,
            network: "g1",
            displayName: "Ğ1",
            symbols: ["G1"],
            decimals: [2],
            standardAccount: "*25519",
            website: "https://duniter.org",
          },
          {
            prefix: 5234,
            network: "humanode",
            displayName: "Humanode Network",
            symbols: ["HMND"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://humanode.io",
          },
          {
            prefix: 6094,
            network: "subspace",
            displayName: "Subspace",
            symbols: ["SSC"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://subspace.network",
          },
          {
            prefix: 7007,
            network: "tidefi",
            displayName: "Tidefi",
            symbols: ["TDFY"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://tidefi.com",
          },
          {
            prefix: 7013,
            network: "gm",
            displayName: "GM",
            symbols: ["FREN", "GM", "GN"],
            decimals: [12, 0, 0],
            standardAccount: "*25519",
            website: "https://gmordie.com",
          },
          {
            prefix: 7306,
            network: "krigan",
            displayName: "Krigan Network",
            symbols: ["KRGN"],
            decimals: [9],
            standardAccount: "*25519",
            website: "https://krigan.network",
          },
          {
            prefix: 7391,
            network: "unique_mainnet",
            displayName: "Unique Network",
            symbols: ["UNQ"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://unique.network",
          },
          {
            prefix: 8866,
            network: "golden_gate",
            displayName: "Golden Gate",
            symbols: ["GGX"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://ggxchain.io/",
          },
          {
            prefix: 8883,
            network: "sapphire_mainnet",
            displayName: "Sapphire by Unique",
            symbols: ["QTZ"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://unique.network",
          },
          {
            prefix: 8886,
            network: "golden_gate_sydney",
            displayName: "Golden Gate Sydney",
            symbols: ["GGXT"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://ggxchain.io/",
          },
          {
            prefix: 9072,
            network: "hashed",
            displayName: "Hashed Network",
            symbols: ["HASH"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://hashed.network",
          },
          {
            prefix: 9807,
            network: "dentnet",
            displayName: "DENTNet",
            symbols: ["DENTX"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://www.dentnet.io",
          },
          {
            prefix: 9935,
            network: "t3rn",
            displayName: "t3rn",
            symbols: ["TRN"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://t3rn.io/",
          },
          {
            prefix: 10041,
            network: "basilisk",
            displayName: "Basilisk",
            symbols: ["BSX"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://bsx.fi",
          },
          {
            prefix: 11330,
            network: "cess-testnet",
            displayName: "CESS Testnet",
            symbols: ["TCESS"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://cess.cloud",
          },
          {
            prefix: 11331,
            network: "cess",
            displayName: "CESS",
            symbols: ["CESS"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://cess.cloud",
          },
          {
            prefix: 11486,
            network: "luhn",
            displayName: "Luhn Network",
            symbols: ["LUHN"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://luhn.network",
          },
          {
            prefix: 11820,
            network: "contextfree",
            displayName: "Automata ContextFree",
            symbols: ["CTX"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://ata.network",
          },
          {
            prefix: 12155,
            network: "impact",
            displayName: "Impact Protocol Network",
            symbols: ["BSTY"],
            decimals: [18],
            standardAccount: "*25519",
            website: "https://impactprotocol.network/",
          },
          {
            prefix: 12191,
            network: "nftmart",
            displayName: "NFTMart",
            symbols: ["NMT"],
            decimals: [12],
            standardAccount: "*25519",
            website: "https://nftmart.io",
          },
          {
            prefix: 13116,
            network: "Atomic",
            displayName: "Atomic",
            symbols: ["TAO"],
            decimals: [9],
            standardAccount: "*25519",
            website: "#",
          },
          {
            prefix: 14697,
            network: "goro",
            displayName: "GORO Network",
            symbols: ["GORO"],
            decimals: [9],
            standardAccount: "*25519",
            website: "https://goro.network",
          },
        ].map(function (e) {
          let t = e.network || "",
            r = t.replace(/_/g, "-").split("-"),
            o = e;
          return (
            (o.slip44 = a[t]),
            (o.hasLedgerSupport = !!o.slip44),
            (o.genesisHash = n[t] || []),
            (o.icon = i[t] || "substrate"),
            (o.isTestnet = !!s[t] || d.includes(r[r.length - 1])),
            (o.isIgnored =
              o.isTestnet ||
              (!(
                e.standardAccount &&
                e.decimals &&
                e.decimals.length &&
                e.symbols &&
                e.symbols.length
              ) &&
                42 !== e.prefix)),
            o
          );
        }),
        c = l
          .filter(function (e) {
            return !e.isIgnored && !!e.network;
          })
          .sort(function (e, t) {
            let r = o.includes(e.prefix),
              a = o.includes(t.prefix);
            return r === a
              ? r
                ? 0
                : e.displayName.localeCompare(t.displayName)
              : r
              ? -1
              : 1;
          });
      c.filter(function ({ genesisHash: e, prefix: t }) {
        return !!e.length || 42 === t;
      });
      let f = {
        allowedDecodedLengths: [1, 2, 4, 8, 32, 33],
        allowedEncodedLengths: [3, 4, 6, 10, 35, 36, 37, 38],
        allowedPrefix: c.map(({ prefix: e }) => e),
        prefix: 42,
      };
    },
    19624: function (e, t, r) {
      r.d(t, {
        m: function () {
          return d;
        },
      });
      var a = r(88265),
        n = r(2212),
        i = r(52357),
        s = r(97738),
        o = r(87303);
      function d(e, t = s.c.prefix) {
        let r = (0, i.m)(e);
        if (t < 0 || t > 16383 || [46, 47].includes(t))
          throw Error("Out of range ss58Format specified");
        if (!s.c.allowedDecodedLengths.includes(r.length))
          throw Error(
            `Expected a valid key to convert, with length ${s.c.allowedDecodedLengths.join(
              ", "
            )}`
          );
        let d = (0, a.e)(
          t < 64 ? [t] : [((252 & t) >> 2) | 64, (t >> 8) | ((3 & t) << 6)],
          r
        );
        return (0, n.ni)(
          (0, a.e)(
            d,
            (0, o.b)(d).subarray(0, [32, 33].includes(r.length) ? 2 : 1)
          )
        );
      }
    },
    87303: function (e, t, r) {
      r.d(t, {
        b: function () {
          return e_;
        },
      });
      var a,
        n,
        i,
        s,
        o,
        d,
        l,
        c = r(84413),
        f = r(88265);
      function b(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`Wrong positive integer: ${e}`);
      }
      function p(e, ...t) {
        if (!(e instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
        if (t.length > 0 && !t.includes(e.length))
          throw TypeError(
            `Expected Uint8Array of length ${t}, not of length=${e.length}`
          );
      }
      var h = {
        number: b,
        bool: function (e) {
          if ("boolean" != typeof e) throw Error(`Expected boolean, not ${e}`);
        },
        bytes: p,
        hash: function (e) {
          if ("function" != typeof e || "function" != typeof e.create)
            throw Error("Hash should be wrapped by utils.wrapConstructor");
          b(e.outputLen), b(e.blockLen);
        },
        exists: function (e, t = !0) {
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw Error("Hash#digest() has already been called");
        },
        output: function (e, t) {
          p(e);
          let r = t.outputLen;
          if (e.length < r)
            throw Error(
              `digestInto() expects output buffer of length at least ${r}`
            );
        },
      };
      let u = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        m = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      if (!m) throw Error("Non little-endian hardware is not supported");
      function w(e) {
        if (
          ("string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw TypeError(`utf8ToBytes expected string, got ${typeof e}`);
              return new TextEncoder().encode(e);
            })(e)),
          !(e instanceof Uint8Array))
        )
          throw TypeError(
            `Expected input type is Uint8Array (got ${typeof e})`
          );
        return e;
      }
      Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
      class y {
        clone() {
          return this._cloneInto();
        }
      }
      let g = new Uint8Array([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
        15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14,
        3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
        9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0,
        11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7,
        6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
        6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6,
        1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
      ]);
      class k extends y {
        constructor(e, t, r = {}, a, n, i) {
          if (
            (super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.length = 0),
            (this.pos = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            h.number(e),
            h.number(t),
            h.number(a),
            t < 0 || t > a)
          )
            throw Error("outputLen bigger than keyLen");
          if (void 0 !== r.key && (r.key.length < 1 || r.key.length > a))
            throw Error(`key must be up 1..${a} byte long or undefined`);
          if (void 0 !== r.salt && r.salt.length !== n)
            throw Error(`salt must be ${n} byte long or undefined`);
          if (void 0 !== r.personalization && r.personalization.length !== i)
            throw Error(`personalization must be ${i} byte long or undefined`);
          this.buffer32 = u((this.buffer = new Uint8Array(e)));
        }
        update(e) {
          h.exists(this);
          let { blockLen: t, buffer: r, buffer32: a } = this;
          e = w(e);
          let n = e.length;
          for (let i = 0; i < n; ) {
            this.pos === t && (this.compress(a, 0, !1), (this.pos = 0));
            let s = Math.min(t - this.pos, n - i),
              o = e.byteOffset + i;
            if (s === t && !(o % 4) && i + s < n) {
              let r = new Uint32Array(e.buffer, o, Math.floor((n - i) / 4));
              for (let e = 0; i + t < n; e += a.length, i += t)
                (this.length += t), this.compress(r, e, !1);
              continue;
            }
            r.set(e.subarray(i, i + s), this.pos),
              (this.pos += s),
              (this.length += s),
              (i += s);
          }
          return this;
        }
        digestInto(e) {
          h.exists(this), h.output(e, this);
          let { pos: t, buffer32: r } = this;
          (this.finished = !0),
            this.buffer.subarray(t).fill(0),
            this.compress(r, 0, !0);
          let a = u(e);
          this.get().forEach((e, t) => (a[t] = e));
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          let {
            buffer: t,
            length: r,
            finished: a,
            destroyed: n,
            outputLen: i,
            pos: s,
          } = this;
          return (
            e || (e = new this.constructor({ dkLen: i })),
            e.set(...this.get()),
            (e.length = r),
            (e.finished = a),
            (e.destroyed = n),
            (e.outputLen = i),
            e.buffer.set(t),
            (e.pos = s),
            e
          );
        }
      }
      let _ = BigInt(4294967296 - 1),
        x = BigInt(32);
      function A(e, t = !1) {
        return t
          ? { h: Number(e & _), l: Number((e >> x) & _) }
          : { h: 0 | Number((e >> x) & _), l: 0 | Number(e & _) };
      }
      let N = (e, t) => (BigInt(e >>> 0) << x) | BigInt(t >>> 0);
      var E = {
        fromBig: A,
        split: function (e, t = !1) {
          let r = new Uint32Array(e.length),
            a = new Uint32Array(e.length);
          for (let n = 0; n < e.length; n++) {
            let { h: i, l: s } = A(e[n], t);
            [r[n], a[n]] = [i, s];
          }
          return [r, a];
        },
        toBig: N,
        shrSH: (e, t, r) => e >>> r,
        shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
        rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
        rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        rotr32H: (e, t) => t,
        rotr32L: (e, t) => e,
        rotlSH: (e, t, r) => (e << r) | (t >>> (32 - r)),
        rotlSL: (e, t, r) => (t << r) | (e >>> (32 - r)),
        rotlBH: (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        rotlBL: (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
        add: function (e, t, r, a) {
          let n = (t >>> 0) + (a >>> 0);
          return { h: (e + r + ((n / 4294967296) | 0)) | 0, l: 0 | n };
        },
        add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        add3H: (e, t, r, a) => (t + r + a + ((e / 4294967296) | 0)) | 0,
        add4L: (e, t, r, a) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (a >>> 0),
        add4H: (e, t, r, a, n) => (t + r + a + n + ((e / 4294967296) | 0)) | 0,
        add5H: (e, t, r, a, n, i) =>
          (t + r + a + n + i + ((e / 4294967296) | 0)) | 0,
        add5L: (e, t, r, a, n) =>
          (e >>> 0) + (t >>> 0) + (r >>> 0) + (a >>> 0) + (n >>> 0),
      };
      let v = new Uint32Array([
          4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
          1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199,
          2600822924, 4215389547, 528734635, 327033209, 1541459225,
        ]),
        U = new Uint32Array(32);
      function S(e, t, r, a, n, i) {
        let s = n[i],
          o = n[i + 1],
          d = U[2 * e],
          l = U[2 * e + 1],
          c = U[2 * t],
          f = U[2 * t + 1],
          b = U[2 * r],
          p = U[2 * r + 1],
          h = U[2 * a],
          u = U[2 * a + 1],
          m = E.add3L(d, c, s);
        (l = E.add3H(m, l, f, o)),
          (d = 0 | m),
          ({ Dh: u, Dl: h } = { Dh: u ^ l, Dl: h ^ d }),
          ({ Dh: u, Dl: h } = { Dh: E.rotr32H(u, h), Dl: E.rotr32L(u, h) }),
          ({ h: p, l: b } = E.add(p, b, u, h)),
          ({ Bh: f, Bl: c } = { Bh: f ^ p, Bl: c ^ b }),
          ({ Bh: f, Bl: c } = {
            Bh: E.rotrSH(f, c, 24),
            Bl: E.rotrSL(f, c, 24),
          }),
          (U[2 * e] = d),
          (U[2 * e + 1] = l),
          (U[2 * t] = c),
          (U[2 * t + 1] = f),
          (U[2 * r] = b),
          (U[2 * r + 1] = p),
          (U[2 * a] = h),
          (U[2 * a + 1] = u);
      }
      function C(e, t, r, a, n, i) {
        let s = n[i],
          o = n[i + 1],
          d = U[2 * e],
          l = U[2 * e + 1],
          c = U[2 * t],
          f = U[2 * t + 1],
          b = U[2 * r],
          p = U[2 * r + 1],
          h = U[2 * a],
          u = U[2 * a + 1],
          m = E.add3L(d, c, s);
        (l = E.add3H(m, l, f, o)),
          (d = 0 | m),
          ({ Dh: u, Dl: h } = { Dh: u ^ l, Dl: h ^ d }),
          ({ Dh: u, Dl: h } = {
            Dh: E.rotrSH(u, h, 16),
            Dl: E.rotrSL(u, h, 16),
          }),
          ({ h: p, l: b } = E.add(p, b, u, h)),
          ({ Bh: f, Bl: c } = { Bh: f ^ p, Bl: c ^ b }),
          ({ Bh: f, Bl: c } = {
            Bh: E.rotrBH(f, c, 63),
            Bl: E.rotrBL(f, c, 63),
          }),
          (U[2 * e] = d),
          (U[2 * e + 1] = l),
          (U[2 * t] = c),
          (U[2 * t + 1] = f),
          (U[2 * r] = b),
          (U[2 * r + 1] = p),
          (U[2 * a] = h),
          (U[2 * a + 1] = u);
      }
      class T extends k {
        constructor(e = {}) {
          super(128, void 0 === e.dkLen ? 64 : e.dkLen, e, 64, 16, 16),
            (this.v0l = 0 | v[0]),
            (this.v0h = 0 | v[1]),
            (this.v1l = 0 | v[2]),
            (this.v1h = 0 | v[3]),
            (this.v2l = 0 | v[4]),
            (this.v2h = 0 | v[5]),
            (this.v3l = 0 | v[6]),
            (this.v3h = 0 | v[7]),
            (this.v4l = 0 | v[8]),
            (this.v4h = 0 | v[9]),
            (this.v5l = 0 | v[10]),
            (this.v5h = 0 | v[11]),
            (this.v6l = 0 | v[12]),
            (this.v6h = 0 | v[13]),
            (this.v7l = 0 | v[14]),
            (this.v7h = 0 | v[15]);
          let t = e.key ? e.key.length : 0;
          if (((this.v0l ^= this.outputLen | (t << 8) | 16842752), e.salt)) {
            let t = u(w(e.salt));
            (this.v4l ^= t[0]),
              (this.v4h ^= t[1]),
              (this.v5l ^= t[2]),
              (this.v5h ^= t[3]);
          }
          if (e.personalization) {
            let t = u(w(e.personalization));
            (this.v6l ^= t[0]),
              (this.v6h ^= t[1]),
              (this.v7l ^= t[2]),
              (this.v7h ^= t[3]);
          }
          if (e.key) {
            let t = new Uint8Array(this.blockLen);
            t.set(w(e.key)), this.update(t);
          }
        }
        get() {
          let {
            v0l: e,
            v0h: t,
            v1l: r,
            v1h: a,
            v2l: n,
            v2h: i,
            v3l: s,
            v3h: o,
            v4l: d,
            v4h: l,
            v5l: c,
            v5h: f,
            v6l: b,
            v6h: p,
            v7l: h,
            v7h: u,
          } = this;
          return [e, t, r, a, n, i, s, o, d, l, c, f, b, p, h, u];
        }
        set(e, t, r, a, n, i, s, o, d, l, c, f, b, p, h, u) {
          (this.v0l = 0 | e),
            (this.v0h = 0 | t),
            (this.v1l = 0 | r),
            (this.v1h = 0 | a),
            (this.v2l = 0 | n),
            (this.v2h = 0 | i),
            (this.v3l = 0 | s),
            (this.v3h = 0 | o),
            (this.v4l = 0 | d),
            (this.v4h = 0 | l),
            (this.v5l = 0 | c),
            (this.v5h = 0 | f),
            (this.v6l = 0 | b),
            (this.v6h = 0 | p),
            (this.v7l = 0 | h),
            (this.v7h = 0 | u);
        }
        compress(e, t, r) {
          this.get().forEach((e, t) => (U[t] = e)), U.set(v, 16);
          let { h: a, l: n } = E.fromBig(BigInt(this.length));
          (U[24] = v[8] ^ n),
            (U[25] = v[9] ^ a),
            r && ((U[28] = ~U[28]), (U[29] = ~U[29]));
          let i = 0;
          for (let r = 0; r < 12; r++)
            S(0, 4, 8, 12, e, t + 2 * g[i++]),
              C(0, 4, 8, 12, e, t + 2 * g[i++]),
              S(1, 5, 9, 13, e, t + 2 * g[i++]),
              C(1, 5, 9, 13, e, t + 2 * g[i++]),
              S(2, 6, 10, 14, e, t + 2 * g[i++]),
              C(2, 6, 10, 14, e, t + 2 * g[i++]),
              S(3, 7, 11, 15, e, t + 2 * g[i++]),
              C(3, 7, 11, 15, e, t + 2 * g[i++]),
              S(0, 5, 10, 15, e, t + 2 * g[i++]),
              C(0, 5, 10, 15, e, t + 2 * g[i++]),
              S(1, 6, 11, 12, e, t + 2 * g[i++]),
              C(1, 6, 11, 12, e, t + 2 * g[i++]),
              S(2, 7, 8, 13, e, t + 2 * g[i++]),
              C(2, 7, 8, 13, e, t + 2 * g[i++]),
              S(3, 4, 9, 14, e, t + 2 * g[i++]),
              C(3, 4, 9, 14, e, t + 2 * g[i++]);
          (this.v0l ^= U[0] ^ U[16]),
            (this.v0h ^= U[1] ^ U[17]),
            (this.v1l ^= U[2] ^ U[18]),
            (this.v1h ^= U[3] ^ U[19]),
            (this.v2l ^= U[4] ^ U[20]),
            (this.v2h ^= U[5] ^ U[21]),
            (this.v3l ^= U[6] ^ U[22]),
            (this.v3h ^= U[7] ^ U[23]),
            (this.v4l ^= U[8] ^ U[24]),
            (this.v4h ^= U[9] ^ U[25]),
            (this.v5l ^= U[10] ^ U[26]),
            (this.v5h ^= U[11] ^ U[27]),
            (this.v6l ^= U[12] ^ U[28]),
            (this.v6h ^= U[13] ^ U[29]),
            (this.v7l ^= U[14] ^ U[30]),
            (this.v7h ^= U[15] ^ U[31]),
            U.fill(0);
        }
        destroy() {
          (this.destroyed = !0),
            this.buffer32.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let L = (function (e) {
        let t = (t, r) => e(r).update(w(t)).digest(),
          r = e({});
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      })((e) => new T(e));
      var I = r(65597),
        R = r(49501);
      let P =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : Function("return this"),
        O =
          ((a = "TextDecoder"),
          (n = class {
            constructor(e) {}
            decode(e) {
              let t = "";
              for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
              return t;
            }
          }),
          void 0 === P[a] ? n : P[a]),
        $ = new O("utf-8");
      function B(e) {
        return e ? $.decode(e) : "";
      }
      let D =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : Function("return this"),
        M =
          ((i = "TextEncoder"),
          (s = class {
            encode(e) {
              let t = e.length,
                r = new Uint8Array(t);
              for (let a = 0; a < t; a++) r[a] = e.charCodeAt(a);
              return r;
            }
          }),
          void 0 === D[i] ? s : D[i]),
        K = new M(),
        H =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : Function("return this"),
        j = H.crypto,
        F = {
          getRandomValues: function (e) {
            return j.getRandomValues(e);
          },
        },
        q = { crypto: F };
      class W {
        __internal__bridge;
        constructor(e) {
          this.__internal__bridge = e;
        }
        abort = () => {
          throw Error("abort");
        };
        __wbindgen_is_undefined = (e) =>
          void 0 === this.__internal__bridge.getObject(e);
        __wbindgen_throw = (e, t) => {
          throw Error(this.__internal__bridge.getString(e, t));
        };
        __wbg_self_1b7a39e3a92c949c = () =>
          this.__internal__bridge.addObject(q);
        __wbg_require_604837428532a733 = (e, t) => {
          throw Error(
            `Unable to require ${this.__internal__bridge.getString(e, t)}`
          );
        };
        __wbg_crypto_968f1772287e2df0 = (e) =>
          this.__internal__bridge.addObject(F);
        __wbg_getRandomValues_a3d34b4fee3c2869 = (e) =>
          this.__internal__bridge.addObject(F.getRandomValues);
        __wbg_getRandomValues_f5e14ab7ac8e995d = (e, t, r) => {
          F.getRandomValues(this.__internal__bridge.getU8a(t, r));
        };
        __wbg_randomFillSync_d5bd2d655fdf256a = (e, t, r) => {
          throw Error("randomFillsync is not available");
        };
        __wbindgen_object_drop_ref = (e) => {
          this.__internal__bridge.takeObject(e);
        };
      }
      let G = Uint8Array,
        z = Uint16Array,
        X = Uint32Array,
        Y = new G([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        V = new G([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        Q = new G([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        Z = (e, t) => {
          let r = new z(31);
          for (let a = 0; a < 31; ++a) r[a] = t += 1 << e[a - 1];
          let a = new X(r[30]);
          for (let e = 1; e < 30; ++e)
            for (let t = r[e]; t < r[e + 1]; ++t) a[t] = ((t - r[e]) << 5) | e;
          return [r, a];
        },
        [J, ee] = Z(V, 2);
      (J[28] = 258), (ee[258] = 28);
      let [et] = Z(Q, 0),
        er = new z(32768);
      for (let e = 0; e < 32768; ++e) {
        let t = ((43690 & e) >>> 1) | ((21845 & e) << 1);
        (t =
          ((61680 & (t = ((52428 & t) >>> 2) | ((13107 & t) << 2))) >>> 4) |
          ((3855 & t) << 4)),
          (er[e] = (((65280 & t) >>> 8) | ((255 & t) << 8)) >>> 1);
      }
      let ea = (e, t, r) => {
          let a;
          let n = e.length,
            i = 0,
            s = new z(t);
          for (; i < n; ++i) e[i] && ++s[e[i] - 1];
          let o = new z(t);
          for (i = 1; i < t; ++i) o[i] = (o[i - 1] + s[i - 1]) << 1;
          if (r) {
            a = new z(1 << t);
            let r = 15 - t;
            for (i = 0; i < n; ++i)
              if (e[i]) {
                let n = (i << 4) | e[i],
                  s = t - e[i],
                  d = o[e[i] - 1]++ << s;
                for (let e = d | ((1 << s) - 1); d <= e; ++d) a[er[d] >> r] = n;
              }
          } else
            for (i = 0, a = new z(n); i < n; ++i)
              e[i] && (a[i] = er[o[e[i] - 1]++] >> (15 - e[i]));
          return a;
        },
        en = new G(288);
      for (let e = 0; e < 144; ++e) en[e] = 8;
      for (let e = 144; e < 256; ++e) en[e] = 9;
      for (let e = 256; e < 280; ++e) en[e] = 7;
      for (let e = 280; e < 288; ++e) en[e] = 8;
      let ei = new G(32);
      for (let e = 0; e < 32; ++e) ei[e] = 5;
      let es = ea(en, 9, 1),
        eo = ea(ei, 5, 1),
        ed = (e, t, r) => {
          let a = t >>> 3;
          return ((e[a] | (e[a + 1] << 8)) >>> (7 & t)) & r;
        },
        el = (e, t) => {
          let r = t >>> 3;
          return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >>> (7 & t);
        },
        ec = (e) => (e >>> 3) + (7 & e && 1),
        ef = (e, t, r) => {
          (null == t || t < 0) && (t = 0),
            (null == r || r > e.length) && (r = e.length);
          let a = new (e instanceof z ? z : e instanceof X ? X : G)(r - t);
          return a.set(e.subarray(t, r)), a;
        },
        eb = (e) => {
          let t = e[0];
          for (let r = 1, a = e.length; r < a; ++r) e[r] > t && (t = e[r]);
          return t;
        },
        ep = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        eh = Array(256);
      for (let e = 0, t = ep.length; e < t; e++) eh[ep.charCodeAt(e)] = e;
      var eu = r(63210);
      let em =
          ((o = (function (e, t) {
            let r = 0,
              a = 0,
              n = -1;
            for (let i = 0, s = t.length - 1; n !== s; i++)
              (r = (r << 6) | eh[e.charCodeAt(i)]),
                (a += 6) >= 8 && (t[++n] = (r >>> (a -= 8)) & 255);
            return t;
          })(eu.aI, new Uint8Array(eu.lY))),
          (d = new Uint8Array(eu.JH)),
          ((e, t, r) => {
            let a = !r || r.i;
            r || (r = {});
            let n = e.length,
              i = !t || !a;
            t || (t = new G(3 * n));
            let s = (e) => {
                let r = t.length;
                if (e > r) {
                  let a = new G(Math.max(r << 1, e));
                  a.set(t), (t = a);
                }
              },
              o = r.f || 0,
              d = r.p || 0,
              l = r.b || 0,
              c = r.l,
              f = r.d,
              b = r.m,
              p = r.n;
            if (o && !c) return t;
            let h = n << 3;
            do {
              if (!c) {
                r.f = o = ed(e, d, 1);
                let u = ed(e, d + 1, 3);
                if (((d += 3), u)) {
                  if (1 == u) (c = es), (f = eo), (b = 9), (p = 5);
                  else if (2 == u) {
                    let t = ed(e, d, 31) + 257,
                      r = ed(e, d + 10, 15) + 4,
                      n = t + ed(e, d + 5, 31) + 1;
                    d += 14;
                    let i = new G(n),
                      s = new G(19);
                    for (let t = 0; t < r; ++t) s[Y[t]] = ed(e, d + 3 * t, 7);
                    d += 3 * r;
                    let o = eb(s),
                      l = (1 << o) - 1;
                    if (!a && d + n * (o + 7) > h) break;
                    let u = ea(s, o, 1);
                    for (let t = 0; t < n; ) {
                      let r = u[ed(e, d, l)];
                      d += 15 & r;
                      let a = r >>> 4;
                      if (a < 16) i[t++] = a;
                      else {
                        let r = 0,
                          n = 0;
                        for (
                          16 == a
                            ? ((n = 3 + ed(e, d, 3)), (d += 2), (r = i[t - 1]))
                            : 17 == a
                            ? ((n = 3 + ed(e, d, 7)), (d += 3))
                            : 18 == a && ((n = 11 + ed(e, d, 127)), (d += 7));
                          n--;

                        )
                          i[t++] = r;
                      }
                    }
                    let m = i.subarray(0, t),
                      w = i.subarray(t);
                    (b = eb(m)),
                      (p = eb(w)),
                      (c = ea(m, b, 1)),
                      (f = ea(w, p, 1));
                  } else throw "invalid block type";
                } else {
                  let o = ec(d) + 4,
                    c = e[o - 4] | (e[o - 3] << 8),
                    f = o + c;
                  if (f > n) {
                    if (a) throw "unexpected EOF";
                    break;
                  }
                  i && s(l + c),
                    t.set(e.subarray(o, f), l),
                    (r.b = l += c),
                    (r.p = d = f << 3);
                  continue;
                }
                if (d > h) throw "unexpected EOF";
              }
              i && s(l + 131072);
              let u = (1 << b) - 1,
                m = (1 << p) - 1,
                w = b + p + 18;
              for (; a || d + w < h; ) {
                let r = c[el(e, d) & u],
                  a = r >>> 4;
                if ((d += 15 & r) > h) throw "unexpected EOF";
                if (!r) throw "invalid length/literal";
                if (a < 256) t[l++] = a;
                else if (256 == a) {
                  c = void 0;
                  break;
                } else {
                  let r = a - 254;
                  if (a > 264) {
                    let t = a - 257,
                      n = V[t];
                    (r = ed(e, d, (1 << n) - 1) + J[t]), (d += n);
                  }
                  let n = f[el(e, d) & m],
                    o = n >>> 4;
                  if (!n) throw "invalid distance";
                  d += 15 & n;
                  let c = et[o];
                  if (o > 3) {
                    let t = Q[o];
                    (c += el(e, d) & ((1 << t) - 1)), (d += t);
                  }
                  if (d > h) throw "unexpected EOF";
                  i && s(l + 131072);
                  let b = l + r;
                  for (; l < b; l += 4)
                    (t[l] = t[l - c]),
                      (t[l + 1] = t[l + 1 - c]),
                      (t[l + 2] = t[l + 2 - c]),
                      (t[l + 3] = t[l + 3 - c]);
                  l = b;
                }
              }
              (r.l = c),
                (r.p = d),
                (r.b = l),
                c && ((o = 1), (r.m = b), (r.d = f), (r.n = p));
            } while (!o);
            return l == t.length ? t : ef(t, 0, l);
          })(
            (((e) => {
              if (
                (15 & e[0]) != 8 ||
                e[0] >>> 4 > 7 ||
                ((e[0] << 8) | e[1]) % 31
              )
                throw "invalid zlib data";
              if (32 & e[1])
                throw "invalid zlib data: preset dictionaries not supported";
            })(o),
            o.subarray(2, -4)),
            d
          )),
        ew = async (e) => {
          let t = { error: null, type: "none", wasm: null };
          try {
            if (em?.length) {
              if (
                "object" != typeof WebAssembly ||
                "function" != typeof WebAssembly.instantiate
              )
                throw Error("WebAssembly is not available in your environment");
            } else throw Error("No WebAssembly provided for initialization");
            let r = await WebAssembly.instantiate(em, { wbg: e });
            (t.wasm = r.instance.exports), (t.type = "wasm");
          } catch (e) {
            (t.error = `FATAL: Unable to initialize @polkadot/wasm-crypto:: ${e.message}`),
              console.error(t.error);
          }
          return t;
        },
        ey = new (class {
          __internal__createWasm;
          __internal__heap;
          __internal__wbg;
          __internal__cachegetInt32;
          __internal__cachegetUint8;
          __internal__heapNext;
          __internal__wasm;
          __internal__wasmError;
          __internal__wasmPromise;
          __internal__type;
          constructor(e) {
            (this.__internal__createWasm = e),
              (this.__internal__cachegetInt32 = null),
              (this.__internal__cachegetUint8 = null),
              (this.__internal__heap = Array(32)
                .fill(void 0)
                .concat(void 0, null, !0, !1)),
              (this.__internal__heapNext = this.__internal__heap.length),
              (this.__internal__type = "none"),
              (this.__internal__wasm = null),
              (this.__internal__wasmError = null),
              (this.__internal__wasmPromise = null),
              (this.__internal__wbg = { ...new W(this) });
          }
          get error() {
            return this.__internal__wasmError;
          }
          get type() {
            return this.__internal__type;
          }
          get wasm() {
            return this.__internal__wasm;
          }
          async init(e) {
            (!this.__internal__wasmPromise || e) &&
              (this.__internal__wasmPromise = (
                e || this.__internal__createWasm
              )(this.__internal__wbg));
            let {
              error: t,
              type: r,
              wasm: a,
            } = await this.__internal__wasmPromise;
            return (
              (this.__internal__type = r),
              (this.__internal__wasm = a),
              (this.__internal__wasmError = t),
              this.__internal__wasm
            );
          }
          getObject(e) {
            return this.__internal__heap[e];
          }
          dropObject(e) {
            e < 36 ||
              ((this.__internal__heap[e] = this.__internal__heapNext),
              (this.__internal__heapNext = e));
          }
          takeObject(e) {
            let t = this.getObject(e);
            return this.dropObject(e), t;
          }
          addObject(e) {
            this.__internal__heapNext === this.__internal__heap.length &&
              this.__internal__heap.push(this.__internal__heap.length + 1);
            let t = this.__internal__heapNext;
            return (
              (this.__internal__heapNext = this.__internal__heap[t]),
              (this.__internal__heap[t] = e),
              t
            );
          }
          getInt32() {
            return (
              (null === this.__internal__cachegetInt32 ||
                this.__internal__cachegetInt32.buffer !==
                  this.__internal__wasm.memory.buffer) &&
                (this.__internal__cachegetInt32 = new Int32Array(
                  this.__internal__wasm.memory.buffer
                )),
              this.__internal__cachegetInt32
            );
          }
          getUint8() {
            return (
              (null === this.__internal__cachegetUint8 ||
                this.__internal__cachegetUint8.buffer !==
                  this.__internal__wasm.memory.buffer) &&
                (this.__internal__cachegetUint8 = new Uint8Array(
                  this.__internal__wasm.memory.buffer
                )),
              this.__internal__cachegetUint8
            );
          }
          getU8a(e, t) {
            return this.getUint8().subarray(e / 1, e / 1 + t);
          }
          getString(e, t) {
            return B(this.getU8a(e, t));
          }
          allocU8a(e) {
            let t = this.__internal__wasm.__wbindgen_malloc(1 * e.length);
            return this.getUint8().set(e, t / 1), [t, e.length];
          }
          allocString(e) {
            return this.allocU8a(e ? K.encode(e.toString()) : new Uint8Array());
          }
          resultU8a() {
            let e = this.getInt32()[2],
              t = this.getInt32()[3],
              r = this.getU8a(e, t).slice();
            return this.__internal__wasm.__wbindgen_free(e, 1 * t), r;
          }
          resultString() {
            return B(this.resultU8a());
          }
        })(ew),
        eg =
          ((l = (e, t, r, a) => (
            e.ext_blake2b(8, ...ey.allocU8a(t), ...ey.allocU8a(r), a),
            ey.resultU8a()
          )),
          (...e) => {
            if (!ey.wasm)
              throw Error(
                "The WASM interface has not been initialized. Ensure that you wait for the initialization Promise with waitReady() from @polkadot/wasm-crypto (or cryptoWaitReady() from @polkadot/util-crypto) before attempting to use WASM-only interfaces."
              );
            return l(ey.wasm, ...e);
          }),
        ek = (0, c.d)("SS58PRE");
      function e_(e) {
        return (function (e, t = 256, r, a) {
          let n = Math.ceil(t / 8),
            i = (0, I.Y)(e);
          return !R.vc || ey.wasm
            ? eg(i, (0, I.Y)(r), n)
            : r
            ? L(i, { dkLen: n, key: r })
            : L(i, { dkLen: n });
        })((0, f.e)(ek, e), 512);
      }
    },
    2212: function (e, t, r) {
      /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function a(
        e
      ) {
        if (!Number.isSafeInteger(e)) throw Error(`Wrong integer: ${e}`);
      }
      function n(...e) {
        let t = (e, t) => (r) => e(t(r)),
          r = Array.from(e)
            .reverse()
            .reduce((e, r) => (e ? t(e, r.encode) : r.encode), void 0),
          a = e.reduce((e, r) => (e ? t(e, r.decode) : r.decode), void 0);
        return { encode: r, decode: a };
      }
      function i(e) {
        return {
          encode: (t) => {
            if (!Array.isArray(t) || (t.length && "number" != typeof t[0]))
              throw Error(
                "alphabet.encode input should be an array of numbers"
              );
            return t.map((t) => {
              if ((a(t), t < 0 || t >= e.length))
                throw Error(
                  `Digit index outside alphabet: ${t} (alphabet: ${e.length})`
                );
              return e[t];
            });
          },
          decode: (t) => {
            if (!Array.isArray(t) || (t.length && "string" != typeof t[0]))
              throw Error("alphabet.decode input should be array of strings");
            return t.map((t) => {
              if ("string" != typeof t)
                throw Error(`alphabet.decode: not string element=${t}`);
              let r = e.indexOf(t);
              if (-1 === r)
                throw Error(`Unknown letter: "${t}". Allowed: ${e}`);
              return r;
            });
          },
        };
      }
      function s(e = "") {
        if ("string" != typeof e)
          throw Error("join separator should be string");
        return {
          encode: (t) => {
            if (!Array.isArray(t) || (t.length && "string" != typeof t[0]))
              throw Error("join.encode input should be array of strings");
            for (let e of t)
              if ("string" != typeof e)
                throw Error(`join.encode: non-string input=${e}`);
            return t.join(e);
          },
          decode: (t) => {
            if ("string" != typeof t)
              throw Error("join.decode input should be string");
            return t.split(e);
          },
        };
      }
      function o(e, t = "=") {
        if ((a(e), "string" != typeof t))
          throw Error("padding chr should be string");
        return {
          encode(r) {
            if (!Array.isArray(r) || (r.length && "string" != typeof r[0]))
              throw Error("padding.encode input should be array of strings");
            for (let e of r)
              if ("string" != typeof e)
                throw Error(`padding.encode: non-string input=${e}`);
            for (; (r.length * e) % 8; ) r.push(t);
            return r;
          },
          decode(r) {
            if (!Array.isArray(r) || (r.length && "string" != typeof r[0]))
              throw Error("padding.encode input should be array of strings");
            for (let e of r)
              if ("string" != typeof e)
                throw Error(`padding.decode: non-string input=${e}`);
            let a = r.length;
            if ((a * e) % 8)
              throw Error(
                "Invalid padding: string should have whole number of bytes"
              );
            for (; a > 0 && r[a - 1] === t; a--)
              if (!(((a - 1) * e) % 8))
                throw Error("Invalid padding: string has too much padding");
            return r.slice(0, a);
          },
        };
      }
      function d(e) {
        if ("function" != typeof e)
          throw Error("normalize fn should be function");
        return { encode: (e) => e, decode: (t) => e(t) };
      }
      function l(e, t, r) {
        if (t < 2)
          throw Error(
            `convertRadix: wrong from=${t}, base cannot be less than 2`
          );
        if (r < 2)
          throw Error(
            `convertRadix: wrong to=${r}, base cannot be less than 2`
          );
        if (!Array.isArray(e))
          throw Error("convertRadix: data should be array");
        if (!e.length) return [];
        let n = 0,
          i = [],
          s = Array.from(e);
        for (
          s.forEach((e) => {
            if ((a(e), e < 0 || e >= t)) throw Error(`Wrong integer: ${e}`);
          });
          ;

        ) {
          let e = 0,
            a = !0;
          for (let i = n; i < s.length; i++) {
            let o = s[i],
              d = t * e + o;
            if (
              !Number.isSafeInteger(d) ||
              (t * e) / t !== e ||
              d - o != t * e ||
              ((e = d % r),
              (s[i] = Math.floor(d / r)),
              !Number.isSafeInteger(s[i]) || s[i] * r + e !== d)
            )
              throw Error("convertRadix: carry overflow");
            a && (s[i] ? (a = !1) : (n = i));
          }
          if ((i.push(e), a)) break;
        }
        for (let t = 0; t < e.length - 1 && 0 === e[t]; t++) i.push(0);
        return i.reverse();
      }
      r.d(t, {
        MW: function () {
          return E;
        },
        ni: function () {
          return v;
        },
      });
      let c = (e, t) => (t ? c(t, e % t) : e),
        f = (e, t) => e + (t - c(e, t));
      function b(e, t, r, n) {
        if (!Array.isArray(e))
          throw Error("convertRadix2: data should be array");
        if (t <= 0 || t > 32) throw Error(`convertRadix2: wrong from=${t}`);
        if (r <= 0 || r > 32) throw Error(`convertRadix2: wrong to=${r}`);
        if (f(t, r) > 32)
          throw Error(
            `convertRadix2: carry overflow from=${t} to=${r} carryBits=${f(
              t,
              r
            )}`
          );
        let i = 0,
          s = 0,
          o = 2 ** r - 1,
          d = [];
        for (let n of e) {
          if ((a(n), n >= 2 ** t))
            throw Error(`convertRadix2: invalid data word=${n} from=${t}`);
          if (((i = (i << t) | n), s + t > 32))
            throw Error(`convertRadix2: carry overflow pos=${s} from=${t}`);
          for (s += t; s >= r; s -= r) d.push(((i >> (s - r)) & o) >>> 0);
          i &= 2 ** s - 1;
        }
        if (((i = (i << (r - s)) & o), !n && s >= t))
          throw Error("Excess padding");
        if (!n && i) throw Error(`Non-zero padding: ${i}`);
        return n && s > 0 && d.push(i >>> 0), d;
      }
      function p(e, t = !1) {
        if ((a(e), e <= 0 || e > 32))
          throw Error("radix2: bits should be in (0..32]");
        if (f(8, e) > 32 || f(e, 8) > 32) throw Error("radix2: carry overflow");
        return {
          encode: (r) => {
            if (!(r instanceof Uint8Array))
              throw Error("radix2.encode input should be Uint8Array");
            return b(Array.from(r), 8, e, !t);
          },
          decode: (r) => {
            if (!Array.isArray(r) || (r.length && "number" != typeof r[0]))
              throw Error("radix2.decode input should be array of strings");
            return Uint8Array.from(b(r, e, 8, t));
          },
        };
      }
      function h(e) {
        if ("function" != typeof e)
          throw Error("unsafeWrapper fn should be function");
        return function (...t) {
          try {
            return e.apply(null, t);
          } catch (e) {}
        };
      }
      n(p(4), i("0123456789ABCDEF"), s("")),
        n(p(5), i("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), o(5), s("")),
        n(p(5), i("0123456789ABCDEFGHIJKLMNOPQRSTUV"), o(5), s("")),
        n(
          p(5),
          i("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
          s(""),
          d((e) => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1"))
        ),
        n(
          p(6),
          i("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
          o(6),
          s("")
        ),
        n(
          p(6),
          i("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),
          o(6),
          s("")
        );
      let u = (e) =>
          n(
            (a(58),
            {
              encode: (e) => {
                if (!(e instanceof Uint8Array))
                  throw Error("radix.encode input should be Uint8Array");
                return l(Array.from(e), 256, 58);
              },
              decode: (e) => {
                if (!Array.isArray(e) || (e.length && "number" != typeof e[0]))
                  throw Error("radix.decode input should be array of strings");
                return Uint8Array.from(l(e, 58, 256));
              },
            }),
            i(e),
            s("")
          ),
        m = u("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
      u("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),
        u("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
      let w = n(i("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), s("")),
        y = [996825010, 642813549, 513874426, 1027748829, 705979059];
      function g(e) {
        let t = e >> 25,
          r = (33554431 & e) << 5;
        for (let e = 0; e < y.length; e++) ((t >> e) & 1) == 1 && (r ^= y[e]);
        return r;
      }
      function k(e, t, r = 1) {
        let a = e.length,
          n = 1;
        for (let t = 0; t < a; t++) {
          let r = e.charCodeAt(t);
          if (r < 33 || r > 126) throw Error(`Invalid prefix (${e})`);
          n = g(n) ^ (r >> 5);
        }
        n = g(n);
        for (let t = 0; t < a; t++) n = g(n) ^ (31 & e.charCodeAt(t));
        for (let e of t) n = g(n) ^ e;
        for (let e = 0; e < 6; e++) n = g(n);
        return (n ^= r), w.encode(b([n % 1073741824], 30, 5, !1));
      }
      function _(e) {
        let t = "bech32" === e ? 1 : 734539939,
          r = p(5),
          a = r.decode,
          n = r.encode,
          i = h(a);
        function s(e, r = 90) {
          if ("string" != typeof e)
            throw Error(
              `bech32.decode input should be string, not ${typeof e}`
            );
          if (e.length < 8 || (!1 !== r && e.length > r))
            throw TypeError(
              `Wrong string length: ${e.length} (${e}). Expected (8..${r})`
            );
          let a = e.toLowerCase();
          if (e !== a && e !== e.toUpperCase())
            throw Error("String must be lowercase or uppercase");
          e = a;
          let n = e.lastIndexOf("1");
          if (0 === n || -1 === n)
            throw Error(
              'Letter "1" must be present between prefix and data only'
            );
          let i = e.slice(0, n),
            s = e.slice(n + 1);
          if (s.length < 6)
            throw Error("Data must be at least 6 characters long");
          let o = w.decode(s).slice(0, -6),
            d = k(i, o, t);
          if (!s.endsWith(d))
            throw Error(`Invalid checksum in ${e}: expected "${d}"`);
          return { prefix: i, words: o };
        }
        let o = h(s);
        return {
          encode: function (e, r, a = 90) {
            if ("string" != typeof e)
              throw Error(
                `bech32.encode prefix should be string, not ${typeof e}`
              );
            if (!Array.isArray(r) || (r.length && "number" != typeof r[0]))
              throw Error(
                `bech32.encode words should be array of numbers, not ${typeof r}`
              );
            let n = e.length + 7 + r.length;
            if (!1 !== a && n > a)
              throw TypeError(`Length ${n} exceeds limit ${a}`);
            return (e = e.toLowerCase()), `${e}1${w.encode(r)}${k(e, r, t)}`;
          },
          decode: s,
          decodeToBytes: function (e) {
            let { prefix: t, words: r } = s(e, !1);
            return { prefix: t, words: r, bytes: a(r) };
          },
          decodeUnsafe: o,
          fromWords: a,
          fromWordsUnsafe: i,
          toWords: n,
        };
      }
      _("bech32"),
        _("bech32m"),
        n(
          p(4),
          i("0123456789abcdef"),
          s(""),
          d((e) => {
            if ("string" != typeof e || e.length % 2)
              throw TypeError(
                `hex.decode: expected string, got ${typeof e} with length ${
                  e.length
                }`
              );
            return e.toLowerCase();
          })
        );
      var x = r(65597);
      let A = {
          chars: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          coder: m,
          ipfs: "z",
          type: "base58",
        },
        N = (function ({ chars: e, ipfs: t, type: r }) {
          return (a, n) => {
            if ("string" != typeof a) throw Error(`Expected ${r} string input`);
            if (t && n && a[0] !== t)
              throw Error(`Expected ipfs-compatible ${r} to start with '${t}'`);
            for (let t = n ? 1 : 0; t < a.length; t++)
              if (
                !(
                  e.includes(a[t]) ||
                  ("=" === a[t] &&
                    (t === a.length - 1 || !e.includes(a[t + 1])))
                )
              )
                throw Error(
                  `Invalid ${r} character "${a[t]}" (0x${a
                    .charCodeAt(t)
                    .toString(16)}) at index ${t}`
                );
            return !0;
          };
        })(A),
        E = (function ({ coder: e, ipfs: t }, r) {
          return (a, n) => (r(a, n), e.decode(t && n ? a.substring(1) : a));
        })(A, N),
        v = (function ({ coder: e, ipfs: t }) {
          return (r, a) => {
            let n = e.encode((0, x.Y)(r));
            return t && a ? `${t}${n}` : n;
          };
        })(A);
    },
    49501: function (e, t, r) {
      r.d(t, {
        vc: function () {
          return i;
        },
        cR: function () {
          return s;
        },
      });
      var a = r(88510);
      let n = (0, a.o)("BigInt", function () {
          return Number.NaN;
        }),
        i = "function" == typeof n && "function" == typeof n.asIntN,
        s =
          "function" == typeof a.Ur.Buffer &&
          "function" == typeof a.Ur.Buffer.isBuffer;
      a.Ur.process;
    },
    5645: function (e, t, r) {
      r.d(t, {
        vq: function () {
          return n;
        },
      });
      let a = /^0x[\da-fA-F]+$/;
      function n(e, t = -1, r) {
        return (
          "string" == typeof e &&
          ("0x" === e || a.test(e)) &&
          (-1 === t
            ? r || e.length % 2 == 0
            : e.length === 2 + Math.ceil(t / 4))
        );
      }
    },
    80178: function (e, t, r) {
      r.d(t, {
        U: function () {
          return a;
        },
      });
      function a(e) {
        return (e && e.constructor) === Uint8Array || e instanceof Uint8Array;
      }
    },
    84413: function (e, t, r) {
      r.d(t, {
        d: function () {
          return s;
        },
      });
      var a = r(88510);
      let n = (0, a.o)(
          "TextEncoder",
          class {
            encode(e) {
              let t = e.length,
                r = new Uint8Array(t);
              for (let a = 0; a < t; a++) r[a] = e.charCodeAt(a);
              return r;
            }
          }
        ),
        i = new n();
      function s(e) {
        return e ? i.encode(e.toString()) : new Uint8Array();
      }
    },
    88265: function (e, t, r) {
      r.d(t, {
        e: function () {
          return n;
        },
      });
      var a = r(65597);
      function n(...e) {
        let t = e.length,
          r = Array(t),
          i = 0;
        for (let n = 0; n < t; n++) (r[n] = (0, a.Y)(e[n])), (i += r[n].length);
        return (function (e, t = 0) {
          let r = 0;
          if (!t) for (let r = 0; r < e.length; r++) t += e[r].length;
          let a = new Uint8Array(t);
          for (let t = 0; t < e.length; t++) a.set(e[t], r), (r += e[t].length);
          return a;
        })(r, i);
      }
    },
    65597: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return f;
        },
      });
      let a = "0123456789abcdef",
        n = new Uint8Array(256),
        i = new Uint8Array(65536);
      for (let e = 0; e < a.length; e++)
        (n[0 | a[e].charCodeAt(0)] = 0 | e),
          e > 9 && (n[0 | a[e].toUpperCase().charCodeAt(0)] = 0 | e);
      for (let e = 0; e < 256; e++) {
        let t = e << 8;
        for (let r = 0; r < 256; r++) i[t | r] = (n[e] << 4) | n[r];
      }
      var s = r(88510),
        o = r(49501),
        d = r(5645),
        l = r(80178),
        c = r(84413);
      function f(e) {
        return (0, l.U)(e)
          ? o.cR &&
            e &&
            "function" == typeof e.readDoubleLE &&
            s.Ur.Buffer.isBuffer(e)
            ? new Uint8Array(e)
            : e
          : (0, d.vq)(e)
          ? (function (e, t = -1) {
              if (!e) return new Uint8Array();
              let r = e.startsWith("0x") ? 2 : 0,
                a = Math.ceil((e.length - r) / 2),
                n = Math.ceil(-1 === t ? a : t / 8),
                s = new Uint8Array(n),
                o = n > a ? n - a : 0;
              for (let t = o; t < n; t++, r += 2)
                s[t] = i[(e.charCodeAt(r) << 8) | e.charCodeAt(r + 1)];
              return s;
            })(e)
          : Array.isArray(e)
          ? new Uint8Array(e)
          : (0, c.d)(e);
      }
    },
    88510: function (e, t, r) {
      r.d(t, {
        Ur: function () {
          return a;
        },
        o: function () {
          return n;
        },
      });
      let a =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : Function("return this");
      function n(e, t) {
        return void 0 === a[e] ? t : a[e];
      }
    },
  },
]);
