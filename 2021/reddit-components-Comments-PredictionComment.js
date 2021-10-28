// https://www.redditstatic.com/desktop2x/reddit-components-Comments-PredictionComment.af3bdc6f1f12d476365f.js
// Retrieved at 10/28/2021, 5:10:10 PM by Reddit Dataminer v1.0.0
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
				return _
			}));
			var o = n("./node_modules/react/index.js"),
				c = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				r = n("./src/reddit/components/Comments/PredictionComment/index.m.less"),
				l = n.n(r);
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
				const [n, o, c] = t.split("|");
				if (!o || n !== u.Resolve && n !== u.Vote) return null;
				const s = parseInt(c);
				return {
					commentType: n,
					optionId: o,
					voteAmount: isNaN(s) ? null : s
				}
			};

			function _({
				comment: e,
				prediction: t
			}) {
				const n = p(e);
				if (!n) return null;
				const {
					commentType: o,
					optionId: a,
					voteAmount: r
				} = n, _ = t.options.find(({
					id: e
				}) => e === a);
				return _ ? o === u.Vote ? c.a.createElement(c.a.Fragment, null, c.a.createElement("p", {
					className: l.a.predictionComment
				}, d._("Predicted", null, {
					hk: "3oYKtT"
				})), c.a.createElement("div", {
					className: l.a.prediction
				}, c.a.createElement("div", {
					className: l.a.option
				}, _.text), c.a.createElement("div", {
					className: l.a.voteAmount
				}, !!r && c.a.createElement(c.a.Fragment, null, c.a.createElement(m.a, {
					className: l.a.coinIcon
				}), " ", r)))) : o === u.Resolve ? c.a.createElement(c.a.Fragment, null, c.a.createElement("p", {
					className: l.a.predictionComment
				}, d._("Revealed the results", null, {
					hk: "2FKSEf"
				})), c.a.createElement("div", {
					className: Object(s.a)(l.a.prediction, l.a.resolved)
				}, c.a.createElement("div", {
					className: l.a.option
				}, c.a.createElement(i.a, {
					className: l.a.checkmarkIcon
				}), " ", _.text))) : null : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Comments-PredictionComment.af3bdc6f1f12d476365f.js.map