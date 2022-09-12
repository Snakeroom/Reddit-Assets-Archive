// https://www.redditstatic.com/desktop2x/reddit-components-Comments-PredictionComment.e3605b0230b80f4e8915.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Comments-PredictionComment"], {
		"./src/reddit/components/Comments/PredictionComment/index.m.less": function(e, t, n) {
			e.exports = {
				centeredRow: "_3JDWji5HA84b519nfh2JDq",
				predictionComment: "PIk1zQbllzpZqwfQR7QQu",
				prediction: "_2ImTPzHstm6YCEQcFZIQX0",
				resolved: "UoLTJT0TSoSoxq0yrAMry",
				option: "_1vrlcDUSQ87UWsdwCjFhZa",
				voteAmount: "_1cQhYmbZUIemxjjAcCwyQl",
				coinIcon: "_3TaxJBtY2YY0kjNYj7Ghkl",
				checkmarkIcon: "_3EZfVgSyWdEuD6L8AO_7eq"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				r = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				i = n("./src/reddit/components/Comments/PredictionComment/index.m.less"),
				m = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var p;
			! function(e) {
				e.Resolve = "resolve", e.Vote = "vote"
			}(p || (p = {}));
			const u = e => {
				const t = Object(c.b)(e);
				if (!t) return null;
				const [n, s, a] = t.split("|");
				if (!s || n !== p.Resolve && n !== p.Vote) return null;
				const o = parseInt(a);
				return {
					commentType: n,
					optionId: s,
					voteAmount: isNaN(o) ? null : o
				}
			};

			function f(e) {
				let {
					comment: t,
					prediction: n
				} = e;
				const s = u(t);
				if (!s) return null;
				const {
					commentType: c,
					optionId: i,
					voteAmount: f
				} = s, C = n.options.find(e => {
					let {
						id: t
					} = e;
					return t === i
				});
				return C ? c === p.Vote ? a.a.createElement(a.a.Fragment, null, a.a.createElement("p", {
					className: m.a.predictionComment
				}, d._("Predicted", null, {
					hk: "3oYKtT"
				})), a.a.createElement("div", {
					className: m.a.prediction
				}, a.a.createElement("div", {
					className: m.a.option
				}, C.text), a.a.createElement("div", {
					className: m.a.voteAmount
				}, !!f && a.a.createElement(a.a.Fragment, null, a.a.createElement(l.a, {
					className: m.a.coinIcon
				}), " ", f)))) : c === p.Resolve ? a.a.createElement(a.a.Fragment, null, a.a.createElement("p", {
					className: m.a.predictionComment
				}, d._("Revealed the results", null, {
					hk: "2FKSEf"
				})), a.a.createElement("div", {
					className: Object(o.a)(m.a.prediction, m.a.resolved)
				}, a.a.createElement("div", {
					className: m.a.option
				}, a.a.createElement(r.a, {
					className: m.a.checkmarkIcon
				}), " ", C.text))) : null : null
			}
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
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				r = n.n(c);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				className: Object(o.a)(r.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), a.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), a.a.createElement("path", {
				className: Object(o.a)(r.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), a.a.createElement("path", {
				className: Object(o.a)(r.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, a.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), a.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), a.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), a.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Comments-PredictionComment.e3605b0230b80f4e8915.js.map