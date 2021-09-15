// https://www.redditstatic.com/desktop2x/CommentRichUnit.7a0df35a5b531c786611.js
// Retrieved at 9/15/2021, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentRichUnit"], {
		"./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.m.less": function(e, t, n) {
			e.exports = {
				RichUnitWrapper: "_45xCSBNy8QOFPTkbYP1ow",
				richUnitWrapper: "_45xCSBNy8QOFPTkbYP1ow",
				RichCommentUnit: "_3-V24A8dg_uw8WyvWl8DjS",
				richCommentUnit: "_3-V24A8dg_uw8WyvWl8DjS",
				dark: "_3WcDH143bIzqJ6nBhVmUYC",
				Delimiter: "uVGFjp8aPVigJcpVnhNn_",
				delimiter: "uVGFjp8aPVigJcpVnhNn_",
				RichUnitLink: "pDofY15WGHpPHv5ruRDhM",
				richUnitLink: "pDofY15WGHpPHv5ruRDhM",
				Content: "_3xmYilwpFjxNQvxATdHqYn",
				content: "_3xmYilwpFjxNQvxATdHqYn",
				LinkedText: "_2F3Jhr-rEU3G_VlDTLTqWX",
				linkedText: "_2F3Jhr-rEU3G_VlDTLTqWX",
				Footer: "_1KdaW-VmNlIj9NNvXFCzhT",
				footer: "_1KdaW-VmNlIj9NNvXFCzhT"
			}
		},
		"./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "RichCommentUnit", (function() {
				return b
			}));
			var a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/opener/index.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/chat/components/Message/LinkedText.tsx"),
				m = n("./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.m.less"),
				d = n.n(m),
				h = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx"),
				p = n("./src/chat/components/Message/RichUnit/commonComponents/Header.tsx"),
				u = n("./src/chat/helpers/richTextConverter/index.ts"),
				_ = n("./node_modules/fbt/lib/FbtPublic.js");
			const v = r.a.wrapped(l.a, "LinkedText", d.a),
				x = r.a.div("Delimiter", d.a),
				U = r.a.wrapped(e => {
					var t;
					const {
						className: n
					} = e;
					let a;
					return (null === (t = e.content) || void 0 === t ? void 0 : t.html) && (a = Object(u.a)(e.content.html)), i.a.createElement("div", {
						className: n,
						tabIndex: 0
					}, a ? i.a.createElement(v, {
						value: a,
						highlighMentionGroupLinks: []
					}) : null)
				}, "Content", d.a),
				b = r.a.wrapped(({
					className: e,
					darkBackground: t,
					highlights: n,
					richUnitData: {
						score: a,
						content: r,
						authorInfo: l,
						postInfo: m
					},
					commentUrl: u
				}) => {
					var v, b, g;
					const C = `${Object(s.b)(a||0)} ${_.fbt._("points",null,{hk:"3TvPLo"})}`;
					return i.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(c.f)(t, "_blank")
							})(e, u)
						},
						className: Object(o.a)(e, {
							[d.a.dark]: t
						})
					}, i.a.createElement(i.a.Fragment, null, i.a.createElement(p.a, {
						authorName: null == l ? void 0 : l.displayName,
						subredditName: (null === (v = null == m ? void 0 : m.subreddit) || void 0 === v ? void 0 : v.name) || "",
						iconUrl: (null === (g = null === (b = null == m ? void 0 : m.subreddit) || void 0 === b ? void 0 : b.styles) || void 0 === g ? void 0 : g.icon) || ""
					}), i.a.createElement(x, null), i.a.createElement(U, {
						authorInfo: l,
						content: r,
						highlights: n,
						darkBackground: t
					}), i.a.createElement(h.a, {
						metaInfo: C
					})))
				}, "RichCommentUnit", d.a),
				g = r.a.wrapped(({
					className: e,
					commentUrl: t,
					highlights: n,
					darkBackground: a,
					richUnitData: o
				}) => i.a.createElement("div", {
					className: e
				}, i.a.createElement(b, {
					highlights: n,
					darkBackground: a,
					richUnitData: o,
					commentUrl: t
				})), "RichUnitWrapper", d.a);
			t.default = g
		},
		"./src/chat/helpers/richTextConverter/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/draft-js/lib/Draft.js");
			const i = /(<span class="md-spoiler-text">).+(<\/span>)/gi,
				o = e => {
					const t = Object(a.convertFromHTML)(e.replace(i, "$1[spoiler]$2"));
					return Object(a.convertToRaw)(a.ContentState.createFromBlockArray(t.contentBlocks)).blocks.map(e => e.text.trim() ? e.text : "\n").join(" ")
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentRichUnit.7a0df35a5b531c786611.js.map