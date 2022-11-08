// https://www.redditstatic.com/desktop2x/reddit-components-Comments-PredictionComment.a57a04a1f21f7963eadc.js
// Retrieved at 11/8/2022, 10:10:06 AM by Reddit Dataminer v1.0.0
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
				return v
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				r = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				i = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				l = n("./src/reddit/components/Comments/PredictionComment/index.m.less"),
				m = n.n(l);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var u;
			! function(e) {
				e.Resolve = "resolve", e.Vote = "vote"
			}(u || (u = {}));
			const p = e => {
				const t = Object(a.b)(e);
				if (!t) return null;
				const [n, s, o] = t.split("|");
				if (!s || n !== u.Resolve && n !== u.Vote) return null;
				const c = parseInt(o);
				return {
					commentType: n,
					optionId: s,
					voteAmount: isNaN(c) ? null : c
				}
			};

			function v(e) {
				let {
					comment: t,
					prediction: n
				} = e;
				const s = p(t);
				if (!s) return null;
				const {
					commentType: a,
					optionId: l,
					voteAmount: v
				} = s, E = n.options.find(e => {
					let {
						id: t
					} = e;
					return t === l
				});
				return E ? a === u.Vote ? o.a.createElement(o.a.Fragment, null, o.a.createElement("p", {
					className: m.a.predictionComment
				}, d._("Predicted", null, {
					hk: "3oYKtT"
				})), o.a.createElement("div", {
					className: m.a.prediction
				}, o.a.createElement("div", {
					className: m.a.option
				}, E.text), o.a.createElement("div", {
					className: m.a.voteAmount
				}, !!v && o.a.createElement(o.a.Fragment, null, o.a.createElement(i.a, {
					className: m.a.coinIcon
				}), " ", v)))) : a === u.Resolve ? o.a.createElement(o.a.Fragment, null, o.a.createElement("p", {
					className: m.a.predictionComment
				}, d._("Revealed the results", null, {
					hk: "2FKSEf"
				})), o.a.createElement("div", {
					className: Object(c.a)(m.a.prediction, m.a.resolved)
				}, o.a.createElement("div", {
					className: m.a.option
				}, o.a.createElement(r.a, {
					className: m.a.checkmarkIcon
				}), " ", E.text))) : null : null
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M7.9 18.8h3.8c3.9 0 7.1-3.8 7.1-8.5s-3.2-8.5-7.1-8.5H7.9",
				fill: "#FFD635",
				stroke: "#000",
				strokeMiterlimit: "10",
				strokeWidth: "1.25"
			}), o.a.createElement("path", {
				d: "M8.2 1.8c-3.9 0-7 3.8-7 8.5s3.1 8.5 7 8.5 7-3.8 7-8.5-3.1-8.5-7-8.5z",
				fill: "#FFD635",
				stroke: "#000",
				strokeMiterlimit: "10",
				strokeWidth: "1.25"
			}), o.a.createElement("path", {
				d: "M6.2 14.4c-.6-.4-1.2-1-1.5-1.7-.4-.8-.6-1.6-.6-2.4 0-.8.2-1.7.6-2.4.3-.8.8-1.4 1.5-1.8.6-.4 1.3-.6 2-.6.4 0 .8.1 1.2.2.4.1.8.3 1.1.6l-.7 1.8c-.1-.2-.4-.4-.7-.5-.3-.2-.6-.2-.9-.2-.4 0-.8.1-1.2.3-.4.3-.7.6-.9 1-.2.5-.3 1-.3 1.5s.1 1 .3 1.5c.2.4.5.8.9 1 .4.3.8.4 1.2.4.3 0 .6-.1.9-.2.3-.1.5-.3.7-.5l.6 1.8c-.3.2-.7.4-1.1.6-.3.1-.7.2-1.1.2-.7 0-1.4-.2-2-.6z"
			}), o.a.createElement("path", {
				d: "M11.6 1.1H7.9C3.9 1.4.7 5.3.7 10.2s3.2 8.9 7.2 9.1h3.8c4.3 0 7.7-4.1 7.7-9.1s-3.5-9.1-7.8-9.1zm-9.7 9.1c0-4.3 2.9-7.9 6.4-7.9s6.4 3.5 6.4 7.9-2.9 7.9-6.4 7.9-6.4-3.5-6.4-7.9zm10.2 7.9c2.4-1.9 3.8-4.8 3.8-7.8.1-3.1-1.3-6-3.8-7.9 3.3.3 6 3.7 6 7.8s-2.6 7.6-6 7.9z"
			}), o.a.createElement("path", {
				d: "m10.5 14.2-.6-1.8c-.2.2-.4.4-.7.5-.3.1-.6.2-.9.2-.4 0-.9-.1-1.2-.4-.4-.3-.7-.6-.9-1-.2-.5-.3-1-.3-1.5s.1-1 .3-1.5c.1-.4.4-.7.8-1 .4-.2.8-.4 1.2-.4.3 0 .6.1.9.2.3.1.5.3.7.5l.6-1.8c-.3-.2-.6-.4-1-.5-.4-.1-.8-.2-1.2-.2-.7 0-1.4.2-2 .6-.7.4-1.2 1-1.5 1.7-.4.8-.6 1.6-.6 2.4 0 .8.2 1.7.6 2.4.3.8.8 1.4 1.5 1.8.6.4 1.3.6 2 .6.4 0 .8-.1 1.2-.2.4-.1.8-.3 1.1-.6z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Comments-PredictionComment.a57a04a1f21f7963eadc.js.map