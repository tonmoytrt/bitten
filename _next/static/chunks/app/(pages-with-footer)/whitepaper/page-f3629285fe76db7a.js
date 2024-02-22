(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9429],
  {
    53366: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 28121));
    },
    96233: function () {},
    30442: function (e) {
      e.exports = {
        main: "Equations_main__6NbrL",
        text_minify: "Equations_text_minify__FGQR_",
        equ_no: "Equations_equ_no__jjFeu",
        non_minified: "Equations_non_minified__3PzRA",
      };
    },
    21490: function (e) {
      e.exports = {
        page_container: "page_page_container__nA6n_",
        abstract_text: "page_abstract_text__sV2Vp",
        paper_title: "page_paper_title__Jdfki",
        subtitle: "page_subtitle__9757r",
        subtitle_sec5: "page_subtitle_sec5__VTS_k",
        title_section: "page_title_section__uvHX6",
        section: "page_section__7rDgR",
        section_sec5: "page_section_sec5__DfEX_",
        image_container: "page_image_container__wQ9OJ",
        image_container_caption_no: "page_image_container_caption_no__RHEj6",
        image_container_image: "page_image_container_image__4_x8h",
        paper_link: "page_paper_link__xdOH5",
        list: "page_list__jlmLK",
        fadeIn: "page_fadeIn__caLXP",
      };
    },
    37498: function (e) {
      e.exports = {
        switch: "Switch_switch__FV0DZ",
        slider: "Switch_slider__b7uZ7",
      };
    },
    55408: function (e) {
      e.exports = {
        text: "Typography_text__v9sol",
        h1: "Typography_h1__j0Qz0",
        h2: "Typography_h2__2ORs8",
        h3: "Typography_h3__F_aiD",
        cta1: "Typography_cta1__xaHCk",
        cta2: "Typography_cta2__ETmIp",
        cta3: "Typography_cta3__BGYgm",
      };
    },
    28121: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var i = n(64618),
        s = n(27024),
        a = n(21490),
        r = n.n(a),
        o = n(85857),
        c = n(98244),
        l = n.n(c),
        h = n(20098),
        d = n(7615),
        u = n(51723),
        p = n(30442),
        m = n.n(p);
      n(96233);
      let g = (e) => {
        let { equNo: t, equ: n, minify: s } = e;
        return (
          void 0 === s && (s = !1),
          (0, i.jsxs)("div", {
            className: m().main,
            children: [
              (0, i.jsxs)("h2", {
                className: m().equ_no,
                children: ["(`", t, "`)"],
              }),
              (0, i.jsx)("div", {
                className: (0, u.Z)(s ? m().text_minify : m().non_minified),
                children: (0, i.jsx)(d.BlockMath, { children: n }),
              }),
            ],
          })
        );
      };
      var f = n(67183);
      let _ = () =>
        (0, i.jsx)(s.Suspense, {
          fallback: (0, i.jsx)("div", {
            style: { minHeight: "100vh", backgroundColor: "white" },
          }),
          children: (0, i.jsxs)(f.E.div, {
            className: r().page_container,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1 },
            children: [
              (0, i.jsxs)("section", {
                className: r().title_section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().paper_title,
                    children: "Atomic: A Peer-to-Peer Intelligence Market",
                  }),
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "YUMA RAO",
                  }),
                  (0, i.jsx)(l(), {
                    src: "/images/icons/double-tao-logo.svg",
                    width: 40,
                    height: 40,
                    alt: "double tao logo",
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "00/ Abstract",
                  }),
                  (0, i.jsx)("p", {
                    className: r().abstract_text,
                    children:
                      "As with other commodities, markets could help us efficiently produce machine intelligence. We propose a market where intelligence is priced by other intelligence systems peer-to-peer across the internet. Peers rank each other by training neural networks which learn the value of their neighbors. Scores accumulate on a digital ledger where high ranking peers are monetarily rewarded with additional weight in the network. However, this form of peer-ranking is not resistant to collusion, which could disrupt the accuracy of the mechanism. The solution is an incentive mechanism that maximally rewards honestly selected weights, making the system resistant to collusion of up to 50 percent of the network weight. The result is a collectively run intelligence market that continually produces newly trained models and pays contributors who create information theoretic value.",
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "0.1/ Introduction",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "The production of machine intelligence has come to rely almost entirely on a system of benchmarking, where machine learning models are trained to perform well on narrowly defined supervised problems. While this system works well for pushing the performance on these specific problems, the mechanism is weak in situations where the introduction of markets would enable it to excel. For example, intelligence is increasingly becoming untethered from specific objectives and becoming a commodity that is (`",
                      1,
                      "`) expensively mined from data (Schwartz et al. [2019]), (`",
                      2,
                      "`) monetarily valuable (OpenAI [2020]), (`",
                      3,
                      "`) transferable (Devlin et al. [2019]), and (`",
                      4,
                      "`) generally useful (Radford et al. [2019]). Measuring its production with supervised objectives does not directly reward the commodity itself and causes the field to converge toward narrow specialists (Chollet [2019]). Moreover, these objectives (often measured in uni-dimensional metrics like accuracy) do not have the resolution to reward niche or legacy systems, thus what is not currently state of the art is lost. Ultimately, the proliferation of diverse intelligence systems is limited by the need to train large monolithic models to succeed in a winner-take-all competition. Standalone engineers cannot directly monetize their work and what results is centralization where a small set of large corporations control access to the best artificial intelligence (OpenAI [2020]).",
                    ],
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "A new commodity needs a new type of market (`",
                      1,
                      "`). This paper suggests a framework in which machine intelligence is measured by other intelligence systems. Models are ranked for informational production regardless of the subjective task or dataset used to train them. By changing the basis against which machine intelligence is measured, (`",
                      1,
                      "`) the market can reward intelligence that is applicable to a much larger set of objectives, (`",
                      2,
                      "`) legacy systems can be monetized for their unique value, and (`",
                      3,
                      "`) smaller diverse systems can find niches within a much higher resolution reward landscape. The solution is a network of computers that share representations continuously and asynchronously, peer-to-peer (P2P) across the internet. The constructed market uses a digital ledger to record ranks and to provide incentives to peers in a decentralized manner. The chain measures trust, making it difficult for peers to attain rewards without providing value to the majority. Researchers can directly monetize machine intelligence work and consumers can directly purchase it.",
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "01 Model",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "We begin with an abstract definition of intelligence Hinton et al. [2015] in the form of a parameterized function",
                      (0, i.jsx)(d.InlineMath, { children: "\\ y = f(x) \\:" }),
                      "trained over a dataset",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ D = [X, Y] \\:",
                      }),
                      "to minimize a loss",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ {\\mathcal{L}} = E_{D}[Q(y,f(x))] \\:",
                      }),
                      ". Our network is composed of n functions",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ F = f_{0}, ..., f_{j}, ...f_{n} \\:",
                      }),
                      "’peers’ where each is holding zero or more network weight",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ S = [s_{i}] \\:",
                      }),
                      "’stake’ represented on a digital ledger. These functions, together with losses and their proportion of stake, represent a stake-weighted machine learning objective",
                      (0, i.jsx)(d.InlineMath, {
                        children:
                          "\\sum_{i}^{n} {\\mathcal{L}}_{i} * s_{i} \\:",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: r().image_container,
                    children: [
                      (0, i.jsx)("img", {
                        src: "/images/whitepaper/figure1.png",
                        alt: "Peer functions with losses Li and unique datasets Di",
                        className: r().image_container_image,
                      }),
                      (0, i.jsxs)("p", {
                        children: [
                          (0, i.jsx)("span", {
                            className: r().image_container_caption_no,
                            children: "Figure 1 / ",
                          }),
                          "Peer functions with losses",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ {\\mathcal{L}}_{i} \\:",
                          }),
                          "and unique datasets",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ D_{i} \\:",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Our goal is the distribution of stake ",
                      (0, i.jsx)("i", { children: "I" }),
                      ", as an incentive, to peers who have helped minimize the loss-objective (Figure-1), and importantly, in such a way that, it is difficult for a small proportion of stake to collude as a means to maximize their distribution in the network without minimizing the loss (Figure-3).",
                    ],
                  }),
                  (0, i.jsx)(g, {
                    equNo: 1,
                    equ: "\\ S_{t+1} = S_{t} + \\tau I",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "In this paper, we suggest this can be achieved through peer-ranking, where peers use the outputs of others",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ F(x) = [f_{0}(x)...f_{n}(x)] \\:",
                      }),
                      "as inputs to themselves",
                      (0, i.jsx)(d.InlineMath, { children: "\\ f(F(x)) \\:" }),
                      "and learn a set of weights",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ W = [w_{i,j}] \\:",
                      }),
                      "where peer i is responsible for setting the i th row through transactions on a digital ledger.",
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: r().image_container,
                    children: (0, i.jsx)("img", {
                      src: "/images/whitepaper/untitled_01.png",
                      alt: "Peer functions with losses Li and unique datasets Di",
                      className: r().image_container_image,
                    }),
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Setting weights using an fishers information pruning score LeCun et al. [1989]; Yu et al. [2017] in the ranking calculation,",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ R = W^{T} \\cdot S \\:",
                      }),
                      "achieves an idealized scoring where each peer’s incentive is equivalent to its pruning score: the cost in entropy towards",
                      (0, i.jsx)(d.InlineMath, {
                        children:
                          "\\sum_{i}^{n} {\\mathcal{L}}_{i} * s_{i} \\:",
                      }),
                      "induced by removing it from the network.",
                    ],
                  }),
                  (0, i.jsx)(g, {
                    equNo: 2,
                    minify: !0,
                    equ: "\\ r_{i} \\approx \\frac{1}{n} \\sum_{j}^{n} \\sum_{x \\in D_{j}} \\Delta F^{T}(x)_{i} \\cdot H(Q_{j}(x)) \\cdot \\Delta F(x)_{i}",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "However, this approach is not resistant to collusion, where peers vote for themselves, notably instead of using (`",
                      2,
                      "`), and set weights to enhance their own inflation at the expense of the network(Figure-3). This attack is trivial since the digital ledger cannot audit the parameters of each model, only the inter-model weights W.",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: r().image_container,
                    children: [
                      (0, i.jsx)("img", {
                        src: "/images/whitepaper/figure3.png",
                        alt: "Peer functions with losses Li and unique datasets Di",
                        className: r().image_container_image,
                      }),
                      (0, i.jsxs)("p", {
                        children: [
                          (0, i.jsx)("span", {
                            className: r().image_container_caption_no,
                            children: "Figure 3 / ",
                          }),
                          "Disjoint cabal: peers in the right sub-network only vote for themselves.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "02 Incentive",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "We extended the naive ranking method to evade collusion with an ’incentive’ function",
                      (0, i.jsx)(d.InlineMath, { children: "\\ I(W, S) \\:" }),
                      "which limits reward to peers that have not reached consensus in the network. Assuming no group of peers holds more than the majority of stake in the system, then peers can only attain inflation by working to attract votes from the majority: a core assumption in many decentralized systems like Bitcoin. Reintroducing our terms, our incentive mechanism requires a stake vector S and a set of weights W where rows are inter-peer rankings. We also infer a trust matrix T from the weights, where",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ t_{i,j} = 1 \\:",
                      }),
                      "if and only if there is a non-zero edge between peer i and j.",
                    ],
                  }),
                  (0, i.jsx)(g, {
                    equNo: 3,
                    equ: "\\ "
                      .concat(
                        " W  = \\begin{bmatrix} w_{0,0} & w_{0,1} & w_{0,2} & w_{0,3}  \\\\ w_{1,0} & w_{1,1} & w_{1,2} & w_{1,3} \\\\ w_{2,0} & w_{2,1} & w_{2,2} & w_{2,3} \\\\ w_{3,0} & w_{3,1} & w_{3,2} & w_{3,3} \\end{bmatrix}",
                        " "
                      )
                      .concat(
                        "S = \\begin{bmatrix} s_{0} \\\\ s_{1} \\\\ s_{2} \\\\ s_{3} \\end{bmatrix}",
                        " "
                      )
                      .concat(
                        " T  = \\begin{bmatrix} t_{0,0} & t_{0,1} & t_{0,2} & t_{0,3}  \\\\ t_{1,0} & t_{1,1} & t_{1,2} & t_{1,3}  \\\\ t_{2,0} & t_{2,1} & t_{2,2} & t_{2,3} \\\\ t_{3,0} & t_{3,1} & t_{3,2} & t_{3,3} \\end{bmatrix}",
                        " "
                      ),
                    minify: !0,
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "We define peers who have reached ’consensus’ as those with non-zero edges from more than 50 percent of stake in the network. (This is simply the normalized values of",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ (T^{T} \\cdot S) > 0.5",
                      }),
                      "). To ensure the mechanism is differentiable we define this computation using the continuous sigmoid function. The sigmoid produces a threshold-like scaling that rewards connected peers and punishes the non-trusted. The steepness and threshold point can be modulated through a temperature ρ and shift term κ.",
                    ],
                  }),
                  (0, i.jsx)(g, {
                    equNo: 4,
                    equ: "\\ C = \\sigma (\\rho (T^{T}S - \\kappa)) ",
                  }),
                  (0, i.jsxs)("div", {
                    className: r().image_container,
                    children: [
                      (0, i.jsx)("img", {
                        src: "/images/whitepaper/figure4.png",
                        alt: "Peer functions with losses Li and unique datasets Di",
                        className: r().image_container_image,
                      }),
                      (0, i.jsxs)("p", {
                        children: [
                          (0, i.jsx)("span", {
                            className: r().image_container_caption_no,
                            children: "Figure 4 / ",
                          }),
                          "Consensus function",
                          (0, i.jsx)(d.InlineMath, {
                            children:
                              "\\ c_{i} = \\sigma(\\rho \\sum_{j}^{n} t_{j,i}s_{j} - \\kappa) \\:",
                          }),
                          "with temperature ρ = 10 and shift κ = 0.5. The activation takes the trust scores and produces an exponential scaling up to our inflection point where a peer is connected to the majority.",
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "We use the consensus term to scale the original rankings. As peers attain more weight in the network they increase their inflation exponentially up to 0.5. In section 10 we show how this ensures that the larger of two competing sub-graphs comes to own an exponentially larger proportion of the network through inflation.",
                  }),
                  (0, i.jsx)(g, { equNo: 5, equ: "\\ I = R \\cdot C " }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "03 Bonds",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "This consensus described above protects against naive collusion by making it difficult for small groups to achieve inflation. However, it does not provide a incentive for correctly selecting weights. We introduce these incentives by adapting the inflation mechanism with a speculation based reward in the form of ’bonds’ B. Here,",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ b_{i,j} \\in B \\:",
                      }),
                      "is the proportion of bonds owned by peer i in peer j.",
                    ],
                  }),
                  (0, i.jsx)(g, {
                    equNo: 6,
                    equ: "".concat(
                      " B  = \\begin{bmatrix} b_{0,0} & b_{0,1} & b_{0,2} & b_{0,3}  \\\\ b_{1,0} & b_{1,1} & b_{1,2} & b_{1,3}  \\\\ b_{2,0} & b_{2,1} & b_{2,2} & b_{2,3} \\\\ b_{3,0} & b_{3,1} & b_{3,2} & b_{3,3} \\end{bmatrix}",
                      " "
                    ),
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Bonds accumulate at each step similarly to token inflation where",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ \\Delta B = W \\cdot S \\:",
                      }),
                      "In this way, peers accumulate bonds in the peers they rank, thus ’bonding’ themselves to those that they are connected to.",
                    ],
                  }),
                  (0, i.jsx)(g, {
                    equNo: 7,
                    equ: "\\ B_{t+1} = B_{t} + W \\cdot S ",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Using the B bond matrix, the chain redistributes the normal incentive scores",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ \\Delta S = B^{T} \\cdot I \\:",
                      }),
                      "Like market based speculation on traditional equities, the peers that have accumulated bonds in peers that others will later value attain increased inflation themselves. Thus it makes sense for peers to accumulate bonds in peers which it expects to do well according to other peers with stake in the system - thus speculating on their future value. Finally, we adapt this mechanism slightly to ensure peers attain a fixed proportion of their personal inflation. For instance, 50 percent,",
                      (0, i.jsx)(d.InlineMath, {
                        children:
                          "\\ \\Delta S = 0.5B^{T}I + 0.5I. \\: \\Delta S \\:",
                      }),
                      "becomes the mechanism step update which determines network incentives across the n peers.",
                    ],
                  }),
                  (0, i.jsx)(g, {
                    equNo: 8,
                    equ: "\\ S_{t+1} = S_{t} + \\tau \\Delta S ",
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "04 Reaching Consensus",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "The incentive function in Section 2 rewards highly trusted peers, however, it may not solve the collusion problem if the honest nodes do not reach consensus. Notably loose, unused stake or incorrectly set weights will detract from the inflation proportion of honest peers in comparison to a colluding sub-network. The honest network, although holding more stake, may not gain enough inflation to overshadow its adversary. The dishonest sub-graph need only attain enough inflation to compete with its largest competitor, not to entirely dominate the network.",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "This attack is possible when the majority of token inflation is being distributed towards peers which are non-majority-trusted in the graph. The chain can measure this through a ’loss term’",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ {\\mathcal{L}} = -R \\cdot (C - 0.5) \\:",
                      }),
                      "(Figure 7). The term is negative if the majority of inflation is being distributed towards peers with more than 0.5 consensus. The chain uses the loss calculation as a peg. By increasing the number of weights the average miner sets across the network the chain can ensure consensus.",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: r().image_container,
                    children: [
                      (0, i.jsx)("img", {
                        src: "/images/whitepaper/figure5.png",
                        alt: "Peer functions with losses Li and unique datasets Di",
                        className: r().image_container_image,
                      }),
                      (0, i.jsxs)("p", {
                        children: [
                          (0, i.jsx)("span", {
                            className: r().image_container_caption_no,
                            children: "Figure 5 / ",
                          }),
                          "The left network has low consensus",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ {\\mathcal{L}} > 0 \\:",
                          }),
                          "The system is not resistant to a cabal with less than 50 percent of the stake. The chain increases the number of edges set by peers until",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ {\\mathcal{L}} < 0\\:",
                          }),
                          ". At this point the majority of inflation flows to peers with majority consensus.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section_sec5,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle_sec5,
                    children: "05 Running the Network",
                  }),
                  (0, i.jsx)("p", {
                    children: "The steps to run a peer in the network are:",
                  }),
                  (0, i.jsxs)("ol", {
                    className: r().list,
                    children: [
                      (0, i.jsxs)("li", {
                        children: [
                          "The peer defines its dataset",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ D_{i} \\:",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        children: [
                          "At each training iteration, the peer conditionally broadcasts batches of examples from",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ D_{i} \\:",
                          }),
                          "to its peers x = [batch_size,sequence_length, input_size].",
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        children: [
                          "The responses",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ F(x) = [...f_{j}(x)...] \\:",
                          }),
                          "– each of the common shape",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ f_{j}(x)\\:",
                          }),
                          "= [batch_size, sequence_length, output_size] – are joined using the gating function and used as input to the local model",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ f_{i} \\:",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        children: [
                          "Comparison against the target labels produces a loss-gradient",
                          (0, i.jsx)(d.InlineMath, {
                            children:
                              "\\ \\frac{\\partial \\mathcal{L}}{\\partial \\mathcal{F}} \\:",
                          }),
                          "which back-propagates through fi and out to the network",
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        children: [
                          "During 2 and 3 the peers learn the weights for their row",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ w_{i,j} \\in W \\:",
                          }),
                          "by measuring the value of the signals produced by their peers.",
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        children: [
                          "At distinct time-step t participants submit changes to the weights",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ \\Delta W_{i} \\:",
                          }),
                          "to update the ranking R, inflation I, consensus term C, and bond distributions",
                          " ",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ \\delta B \\:",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        children: [
                          "The chain measures ’loss’ and optionally distributes newly minted stake into the network",
                          (0, i.jsx)(d.InlineMath, {
                            children: "\\ \\Delta S \\:",
                          }),
                          "according to the bond ownership.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "06 Tensor Standardization",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "A common encoding of inputs and outputs is required for the various model types and input types to interact. The use of tensor modalities can be used to partition the network into disjoint graphs. At the beginning, the network can be seeded with a single modality TEXT, then expanded to include IMAGE, SPEECH, and TENSOR. Eventually, combinations of these modalities can be added; for instance TEXT-IMAGE, to bridge the network into the multi-modality landscape. Incentives to connect modalities can be integrated with the same trust scaling suggested in section (`",
                      2,
                      "`). Eventually, successful models should accept inputs from any modality and process them into a useful representation. For consistency, we can use a standard output shape across the network [batch_size, sequence_dim, output_dim] similar to the common tensor-shapes produced by language and image models – and extend this size as the network increases in complexity.",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: r().image_container,
                    children: [
                      (0, i.jsx)("img", {
                        src: "/images/whitepaper/figure6.png",
                        alt: "Peer functions with losses Li and unique datasets Di",
                        className: r().image_container_image,
                      }),
                      (0, i.jsxs)("p", {
                        children: [
                          (0, i.jsx)("span", {
                            className: r().image_container_caption_no,
                            children: "Figure 6 / ",
                          }),
                          "Standardization of input dimensions within the network",
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "By working on abstract input classes we can ensure participants work towards a general multi-task understanding Kaiser et al. [2017]. Participants may use: (`",
                      2,
                      "`) completely distinct computing substrates Nugent and Molter [2014], (`",
                      2,
                      "`) datasets Lample and Conneau [2019], (`",
                      3,
                      "`) models, and (`",
                      4,
                      "`) strategies for maximizing their incentives in the market. It makes sense for peers to work on unsupervised datasets where data is cheap and privacy not required.",
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "07 Conditional Computation",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "As the network grows, outward bandwidth is likely to become a major bottleneck. The need to reduce network transfer and a method of selecting peers is required. Conditional computation can be used where peers learn through gradient descent how to select and prune neighbors in the network. For example, a product key layer or a sparsely gated layer Shazeer et al. [2017].",
                  }),
                  (0, i.jsx)(g, { equNo: 9, equ: "f_{i} = f_{i}(G(x))" }),
                  (0, i.jsx)(g, {
                    equNo: 10,
                    equ: "G(x) = \\sum_{j} g_{j}(x) * f_{j}(x)",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "The conditional layer determines a sparse combination of peers to query for each example and multiplicatively re-joins them, cutting outward bandwidth by querying only a small subset of peers for each example. The method can drastically increase outward bandwidth Shazeer et al. [2017] Ryabinin and Gusev [2020], allowing peers to communicate with many more neighbors in the graph. In essence, the layer acts as a trainable DNS lookup for peers based on inputs. Furthermore, being trainable with respect to the loss, it provides a useful proxy for the weights",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ w_{i,j} \\in W \\:",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "08 Knowledge Extraction",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Dependence between functions ensures that models must stay online and cannot be run in production. Breaking this dependence can be achieved using distillation Hinton et al. [2015]: A compression and knowledge extraction technique in which a smaller model – the student - mimics the behavior of the remaining network. The distillation layer is employed in conjunction with a conditional computation (10) layer where the student model learns to mimic the network using the cross-entropy (shown below as KL) between the logits produced by the gating network and the student’s predicted distribution Sanh et al. [2020].",
                  }),
                  (0, i.jsx)(g, {
                    equNo: 11,
                    equ: "\\ distillation \\ loss = KL_{D} (dist(x), G(x)",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Because the distilled model acts as a proxy for the network, models can be fully taken off-line and evaluated. Recursion through the network is also cut between components allowing for arbitrary network graphs. If models go offline, their peers can use the distilled versions in-place. Private data 6 can be validated over the distilled models instead of querying the network. Eventually, components can fully disconnect from the network using the distilled models to do validation and inference offline.",
                  }),
                  (0, i.jsxs)("div", {
                    className: r().image_container,
                    children: [
                      (0, i.jsx)("img", {
                        src: "/images/whitepaper/figure7.png",
                        alt: "Peer functions with losses Li and unique datasets Di",
                        className: r().image_container_image,
                      }),
                      (0, i.jsxs)("p", {
                        children: [
                          (0, i.jsx)("span", {
                            className: r().image_container_caption_no,
                            children: "Figure 7 / ",
                          }),
                          "Queries propagate to depth=1 before the distilled model is used.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "09 Learning Weights",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Our goal in this work is the production of a ranking",
                      " ",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ r = [r_{i}] \\:",
                      }),
                      "over peers where the score",
                      " ",
                      (0, i.jsx)(d.InlineMath, { children: "\\ r_{i} \\in R" }),
                      "represents a participant’s information-theoretic significance to the benchmark. Following LeCun and others LeCun et al. [1989]; Yu et al. [2017], it is reasonable to define this significance by equating it with the cost of removing each peer from the network. We can derive this score analytically where",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ \\Delta F(x)_{i} \\:",
                      }),
                      "is a perturbation of the",
                      (0, i.jsx)(d.InlineMath, { children: "\\ j^{th} \\:" }),
                      "peers’s inputs when the",
                      ",",
                      (0, i.jsx)(d.InlineMath, { children: "\\ i^{th} \\:" }),
                      "peer is removed from the network (Appendix 12.2):",
                    ],
                  }),
                  (0, i.jsx)(g, {
                    equNo: 12,
                    minify: !0,
                    equ: "\\ r_{i} \\approx \\frac{1}{n} \\sum_{j}^{n} \\sum_{x \\in D_{j}} \\Delta F^{T}(x)_{i} \\cdot H(Q_{j}(x)) \\cdot \\Delta F(x)_{i} \\\\ \\: \\\\ \\Delta F(x)_{i} = [0, ...0,-f_{i}(x), 0, ...0]",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Note, when the error function",
                      (0, i.jsx)(d.InlineMath, { children: "\\ Q_{j} \\:" }),
                      "is the twice-differentiable cross-entropy, then",
                      (0, i.jsx)(d.InlineMath, { children: "\\ H(Q_{j}) \\:" }),
                      "is its Fisher- information matrix, and",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ r_{i} \\in R \\:",
                      }),
                      "is suitably measured as each peer’s informational significance to the network as a whole. However, information theoretic weights require the full Hessian of the error. In practice it is more reasonable to use a heuristic to propagate a contribution score from the error function through to the inputs Yu et al. [2017]. For instance, weights from the gating layer (Section 6) provide a useful differentiable proxy.",
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "10 Collusion",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "We consider the scenario where a subset of the peers in the network have formed a ’cabal’: A set of colluding peers attempting to maximize their inflation without accurately scoring their neighbors. The fight between the honest graph A with stake",
                      " ",
                      (0, i.jsx)(d.InlineMath, { children: "\\ S_{A}" }),
                      " and the disjoint cabal B with stake",
                      " ",
                      (0, i.jsx)(d.InlineMath, { children: "S_{B}" }),
                      " can be determined by the proportion of network stake held by each. The honest graph must attain more inflation to maintain its dominance and protect the network",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ I_{A} \\gg I_{B}",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "We assume that the proportion of stake in the honest graph is more than that found in the dishonest graph",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ S_{A} \\gg S_{B} \\:",
                      }),
                      "and that the chain has reached consensus",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ \\mathcal{L} < 0 \\:",
                      }),
                      "Since all peers in B are disjoint from A, our loss term",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ -R_{B} \\cdot (C_{B} - 0.5) > 0 \\:",
                      }),
                      "is positive. Because",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ \\mathcal{L} < 0 \\:",
                      }),
                      "it must be the case that",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ R_{A} \\cdot (C_{A} - 0.5) < 0 \\:",
                      }),
                      "is negative and there are peers in the honest sub-graph A who are connected to the majority.",
                    ],
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "As the chain progresses, newly minted stake is being emitted at our inflation rate τ in proportion to I = R \xb7 T. Importantly, the gradient of the incentive function with respect to the stake is positive and super-linear at our inflection point between the honest and dishonest graph. Notably,",
                      (0, i.jsx)(d.InlineMath, {
                        children:
                          "\\ \\frac{\\delta I}{\\delta S} = \\frac{5}{2}",
                      }),
                      ", this ensures that the amount of stake held by each sub-graph reflects a non-linear change in their inflation at the next iteration.",
                    ],
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Initially, since",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ S_{A} > 0.5 \\: and \\: S_{B} < 0.5",
                      }),
                      "the proportion of stake emitted in sub-graph A exceeds that in sub-graph B, and sub-graph A’s incentive grows super-linearly compared to B. The result is that the ratio of stake",
                      (0, i.jsx)(d.InlineMath, {
                        children: "\\ \\frac{S_{B}}{S_{A} + S_{B}} \\:",
                      }),
                      "decreases – the cabal must continually add stake to its sub-graph to maintain itself through time.",
                    ],
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "We consider this proportion between the competing graphs under continuous inflation. Converting to python code ...",
                  }),
                  (0, i.jsxs)("div", {
                    className: r().image_container,
                    children: [
                      (0, i.jsx)("img", {
                        src: "/images/whitepaper/codeblock_1.png",
                        alt: "Peer functions with losses Li and unique datasets Di",
                        className: r().image_container_image,
                      }),
                      (0, i.jsx)("img", {
                        src: "/images/whitepaper/codeblock_2.png",
                        alt: "Peer functions with losses Li and unique datasets Di",
                        className: r().image_container_image,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: r().section,
                children: [
                  (0, i.jsx)("p", {
                    className: r().subtitle,
                    children: "11 Conclusion",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "We have proposed an intelligence market that runs on a P2P network outside of a trusted environment. Crucially, the benchmark measures performance as representational knowledge production using other intelligence systems to determine its value. The fact that this can be done in a collaborative and high-resolution manner suggests that the benchmark could provide a better reward mechanism for the field in general.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "To achieve this aim, the paper began with the definition of a P2P network composed of abstractly defined intelligence models. We showed how this framework allowed us to produce a ranking for each peer based on the cost to prune it from the network. Peers negotiated this score using a set of weights on a digital ledger. However, the system was incomplete without mechanisms that prevented participants from forming dishonest sub-graphs.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "To resolve this, we proposed an incentive scheme based on peer connectivity which exponentially rewarded peers for being trusted by a large portion of the network. This ensured that over time dishonest sub-graphs decay to irrelevance.",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Following this, we showed (`",
                      1,
                      "`) how peers reduced the network bandwidth by learning connectivity using a differential layer and (`",
                      2,
                      "`) how they could extract fully network-disconnected machine learning models to run in production. The result is an intelligence market that rewards participants for producing knowledge and making it available to new learners in the system.",
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("span", {
                className: r().paper_link,
                children: (0, i.jsx)(o.rU, {
                  href: h.lw,
                  isExternal: !0,
                  children: "Follow this link for the original version",
                }),
              }),
            ],
          }),
        });
      var w = _;
    },
    20098: function (e, t, n) {
      "use strict";
      n.d(t, {
        jd: function () {
          return s;
        },
        lw: function () {
          return i;
        },
      });
      let i =
          "https://drive.google.com/file/d/1VnsobL6lIAAqcA1_Tbm8AYIQscfJV4KU/view?usp=sharing",
        s = "https://raw.githubusercontent.com/opentensor/docs/".concat(
          "main",
          "/"
        );
    },
    85857: function (e, t, n) {
      "use strict";
      n.d(t, {
        FB: function () {
          return a.HamburgerMenu;
        },
        h4: function () {
          return r.Header;
        },
        JO: function () {
          return i.J;
        },
        rU: function () {
          return l.r;
        },
        oA: function () {
          return s.o;
        },
      }),
        n(64618),
        n(27024),
        n(79290);
      var i = n(10080);
      n(51723), n(55408), n(63911);
      var s = n(1868),
        a = n(72691);
      n(25808);
      var r = n(15416);
      n(61847);
      var o = n(37498),
        c = n.n(o);
      c().switch, c().input, n(65037), n(96455), n(8518), n(91767);
      var l = n(93625);
    },
    59627: function (e, t, n) {
      "use strict";
      var i = n(58481);
      function s() {}
      function a() {}
      (a.resetWarningCache = s),
        (e.exports = function () {
          function e(e, t, n, s, a, r) {
            if (r !== i) {
              var o = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((o.name = "Invariant Violation"), o);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: s,
          };
          return (n.PropTypes = n), n;
        });
    },
    45589: function (e, t, n) {
      e.exports = n(59627)();
    },
    58481: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    7615: function (e, t, n) {
      var i, s, a;
      (a = function (e, t, n, i) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (a = function (e) {
            return e ? n : t;
          })(e);
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(e, { BlockMath: () => h, InlineMath: () => d }),
          (t = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = a(t);
            if (n && n.has(e)) return n.get(e);
            var i = {},
              s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
              if (
                "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r)
              ) {
                var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                o && (o.get || o.set)
                  ? Object.defineProperty(i, r, o)
                  : (i[r] = e[r]);
              }
            return (i.default = e), n && n.set(e, i), i;
          })(t)),
          (n = s(n)),
          (i = s(i));
        let r = (e, { displayMode: s }) => {
            let a = ({
              children: n,
              errorColor: a,
              math: r,
              renderError: o,
            }) => {
              let c = null != r ? r : n,
                { html: l, error: h } = (0, t.useMemo)(() => {
                  try {
                    let e = i.default.renderToString(c, {
                      displayMode: s,
                      errorColor: a,
                      throwOnError: !!o,
                    });
                    return { html: e, error: void 0 };
                  } catch (e) {
                    if (
                      e instanceof i.default.ParseError ||
                      e instanceof TypeError
                    )
                      return { error: e };
                    throw e;
                  }
                }, [c, a, o]);
              return h
                ? o
                  ? o(h)
                  : t.default.createElement(e, { html: `${h.message}` })
                : t.default.createElement(e, { html: l });
            };
            return (
              (a.propTypes = {
                children: n.default.string,
                errorColor: n.default.string,
                math: n.default.string,
                renderError: n.default.func,
              }),
              a
            );
          },
          o = { html: n.default.string.isRequired },
          c = ({ html: e }) =>
            t.default.createElement("div", {
              "data-testid": "react-katex",
              dangerouslySetInnerHTML: { __html: e },
            });
        c.propTypes = o;
        let l = ({ html: e }) =>
          t.default.createElement("span", {
            "data-testid": "react-katex",
            dangerouslySetInnerHTML: { __html: e },
          });
        l.propTypes = o;
        let h = r(c, { displayMode: !0 }),
          d = r(l, { displayMode: !1 });
      }),
        "object" == typeof e.exports
          ? a(t, n(27024), n(45589), n(72215))
          : ((i = [t, n(27024), n(45589), n(72215)]),
            void 0 === (s = a.apply(t, i)) || (e.exports = s));
    },
  },
  function (e) {
    e.O(0, [9774, 2250, 8761, 7183, 3119, 1410, 8559, 3132, 1744], function () {
      return e((e.s = 53366));
    }),
      (_N_E = e.O());
  },
]);
