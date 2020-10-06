// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.e39313bffe300744abc6.js
// Retrieved at 10/5/2020, 8:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UNYrzKG9vrW6s4_OVCGNt"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less": function(e, t, n) {
			e.exports = {
				optionButton: "_2ntp-JcW8WtkgytaV4Ulhf",
				optionText: "_2EtRvWvspf1e95m4nOww3i"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less": function(e, t, n) {
			e.exports = {
				statusBar: "_3UgGKQLpMCbhSbdPqloGc4",
				coinIcon: "_1O2NC4MPtXkD58WXlRCpZF"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_12AfXWHuSC5UHX0_ne19LR",
				poll: "_1iOvuGeyccWW1Hv9HUTB4H",
				forCommentsPage: "_3db-wOkv0X5qH0E-5QuyBW",
				isEditing: "_1sQkurV7y_5Plq7_lWzN9h"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Prediction", (function() {
				return S
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/selectors/poll/index.ts"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				p = n.n(m);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var E = e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(r.a)(p.a.container, t)
					}, u._("Error: Could not load prediction", null, {
						hk: "3SDSgH"
					}))
				},
				f = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				x = n.n(f);
			var _ = e => {
					let {
						onClick: t,
						option: n
					} = e;
					return o.a.createElement("button", {
						className: x.a.optionButton,
						onClick: t
					}, o.a.createElement("div", {
						className: x.a.optionText
					}, n.text))
				},
				C = n("./src/lib/timeUntil/index.ts"),
				b = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				N = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				P = n.n(N);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = e => {
				let {
					totalStakeAmount: t
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(b.a, {
					className: P.a.coinIcon
				}), O._({
					"*": "{Coins added} coins added",
					_1: "1 coin added"
				}, [O._plural(t, "Coins added")], {
					hk: "1DuNkb"
				}), " · ")
			}, h = e => {
				let {
					endsAt: t
				} = e;
				return O._("Expires in {expirationDuration}", [O._param("expirationDuration", Object(C.a)(new Date(t), !0))], {
					hk: "3R3Px2"
				})
			};
			var g = e => {
					let {
						totalStakeAmount: t,
						endsAt: n
					} = e;
					return o.a.createElement("div", {
						className: P.a.statusBar
					}, t > 0 && o.a.createElement(v, {
						totalStakeAmount: t
					}), o.a.createElement(h, {
						endsAt: n
					}))
				},
				A = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				k = n.n(A);
			const w = Object(i.c)({
					isEditing: d.G,
					prediction: c.f,
					pollId: c.a,
					post: l.N,
					subredditOrProfile: l.ab
				}),
				S = e => {
					let {
						isCommentsPage: t,
						isEditing: n,
						prediction: s,
						pollId: a,
						subredditOrProfile: i,
						className: c
					} = e;
					const d = () => {};
					if (!a || !s || !i) return o.a.createElement(E, null);
					const l = t ? Object(r.a)(c, k.a.container, k.a.forCommentsPage, {
						[k.a.isEditing]: n
					}) : Object(r.a)(c, k.a.container);
					return o.a.createElement("div", {
						className: l,
						onClick: e => {
							s && e.stopPropagation()
						}
					}, o.a.createElement("div", {
						className: k.a.poll
					}, s.options.map(e => o.a.createElement(_, {
						key: "prediction-option-".concat(e.id),
						isSelected: s.userSelection === e.id,
						option: e,
						onClick: d
					}))), o.a.createElement(g, {
						endsAt: s.endsAt,
						totalStakeAmount: s.totalStakeAmount
					}))
				};
			t.default = Object(a.b)(w)(S)
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, n) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				r = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				className: Object(a.a)(r.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), o.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), o.a.createElement("path", {
				className: Object(a.a)(r.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), o.a.createElement("path", {
				className: Object(a.a)(r.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), o.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), o.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), o.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.e39313bffe300744abc6.js.map