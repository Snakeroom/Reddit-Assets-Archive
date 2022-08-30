// https://www.redditstatic.com/desktop2x/CommentRichUnit.7190869f289139cb736d.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
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
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
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
					return (null === (t = e.content) || void 0 === t ? void 0 : t.html) && (o = Object(u.a)(e.content.html)), r.a.createElement("div", {
						className: Object(i.a)(n, {
							[_.a.isSharedToChat]: a
						}),
						tabIndex: 0
					}, o ? r.a.createElement(v, {
						value: o
					}) : null)
				}, "Content", _.a),
				x = c.a.wrapped(e => {
					let {
						className: t,
						darkBackground: n,
						highlights: o,
						richUnitData: {
							score: c,
							content: m,
							authorInfo: u,
							postInfo: p
						},
						commentUrl: v,
						isSharedToChat: x
					} = e;
					var U, N, T;
					const k = `${a.fbt._({"*":"{upvotes count} upvotes",_1:"{upvotes count} upvote"},[a.fbt._param("upvotes count",Object(l.b)(null!=c?c:0)),a.fbt._plural(null!=c?c:0)],{hk:"ukHU1"})}`;
					return r.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(s.e)(t, "_blank")
							})(e, v)
						},
						className: Object(i.a)(t, {
							[_.a.dark]: n,
							[_.a.isSharedToChat]: x
						})
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement(h.a, {
						authorName: null == u ? void 0 : u.displayName,
						subredditName: (null === (U = null == p ? void 0 : p.subreddit) || void 0 === U ? void 0 : U.name) || "",
						iconUrl: (null === (T = null === (N = null == p ? void 0 : p.subreddit) || void 0 === N ? void 0 : N.styles) || void 0 === T ? void 0 : T.icon) || "",
						isPostComment: !0
					}), !x && r.a.createElement(C, null), r.a.createElement(b, {
						authorInfo: u,
						content: m,
						highlights: o,
						darkBackground: n,
						isSharedToChat: x
					}), r.a.createElement(d.a, {
						metaInfo: k
					})))
				}, "RichCommentUnit", _.a),
				U = c.a.wrapped(e => {
					let {
						className: t,
						...n
					} = e;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement(x, n))
				}, "RichUnitWrapper", _.a);
			t.default = U
		},
		"./src/chat/helpers/richTextConverter/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/draft-js/lib/Draft.js");
			const o = /(<span class="md-spoiler-text">).+(<\/span>)/gi,
				r = e => {
					const t = Object(a.convertFromHTML)(e.replace(o, "$1[spoiler]$2"));
					return Object(a.convertToRaw)(a.ContentState.createFromBlockArray(t.contentBlocks)).blocks.map(e => e.text.trim() ? e.text : "\n").join(" ")
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentRichUnit.7190869f289139cb736d.js.map