// https://www.redditstatic.com/desktop2x/CommentRichUnit.9d5962a8559379e72194.js
// Retrieved at 10/19/2021, 5:20:10 PM by Reddit Dataminer v1.0.0
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
				isSharedToChat: "_69gdFwbiCeP1ctZUivylb",
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
				return x
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				s = n("./src/lib/opener/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/chat/components/Message/LinkedText.tsx"),
				d = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx"),
				h = n("./src/chat/components/Message/RichUnit/commonComponents/Header.tsx"),
				u = n("./src/chat/helpers/richTextConverter/index.ts"),
				p = n("./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.m.less"),
				_ = n.n(p);
			const v = c.a.wrapped(m.a, "LinkedText", _.a),
				C = c.a.div("Delimiter", _.a),
				b = c.a.wrapped(e => {
					var t;
					const {
						className: n,
						isSharedToChat: a
					} = e;
					let o;
					return (null === (t = e.content) || void 0 === t ? void 0 : t.html) && (o = Object(u.a)(e.content.html)), i.a.createElement("div", {
						className: Object(r.a)(n, {
							[_.a.isSharedToChat]: a
						}),
						tabIndex: 0
					}, o ? i.a.createElement(v, {
						value: o
					}) : null)
				}, "Content", _.a),
				x = c.a.wrapped(({
					className: e,
					darkBackground: t,
					highlights: n,
					richUnitData: {
						score: o,
						content: c,
						authorInfo: m,
						postInfo: u
					},
					commentUrl: p,
					isSharedToChat: v
				}) => {
					var x, U, N;
					const T = `${a.fbt._({"*":"{upvotes count} upvotes",_1:"{upvotes count} upvote"},[a.fbt._param("upvotes count",Object(l.b)(null!=o?o:0)),a.fbt._plural(null!=o?o:0)],{hk:"ukHU1"})}`;
					return i.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(s.e)(t, "_blank")
							})(e, p)
						},
						className: Object(r.a)(e, {
							[_.a.dark]: t,
							[_.a.isSharedToChat]: v
						})
					}, i.a.createElement(i.a.Fragment, null, i.a.createElement(h.a, {
						authorName: null == m ? void 0 : m.displayName,
						subredditName: (null === (x = null == u ? void 0 : u.subreddit) || void 0 === x ? void 0 : x.name) || "",
						iconUrl: (null === (N = null === (U = null == u ? void 0 : u.subreddit) || void 0 === U ? void 0 : U.styles) || void 0 === N ? void 0 : N.icon) || "",
						isPostComment: !0
					}), !v && i.a.createElement(C, null), i.a.createElement(b, {
						authorInfo: m,
						content: c,
						highlights: n,
						darkBackground: t,
						isSharedToChat: v
					}), i.a.createElement(d.a, {
						metaInfo: T
					})))
				}, "RichCommentUnit", _.a),
				U = c.a.wrapped(({
					className: e,
					...t
				}) => i.a.createElement("div", {
					className: e
				}, i.a.createElement(x, t)), "RichUnitWrapper", _.a);
			t.default = U
		},
		"./src/chat/helpers/richTextConverter/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var a = n("./node_modules/draft-js/lib/Draft.js");
			const o = /(<span class="md-spoiler-text">).+(<\/span>)/gi,
				i = e => {
					const t = Object(a.convertFromHTML)(e.replace(o, "$1[spoiler]$2"));
					return Object(a.convertToRaw)(a.ContentState.createFromBlockArray(t.contentBlocks)).blocks.map(e => e.text.trim() ? e.text : "\n").join(" ")
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentRichUnit.9d5962a8559379e72194.js.map