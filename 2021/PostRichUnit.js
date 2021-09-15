// https://www.redditstatic.com/desktop2x/PostRichUnit.d3e0209560f2cc6f1591.js
// Retrieved at 9/15/2021, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostRichUnit"], {
		"./src/chat/components/Message/RichUnit/Post/LinkPostRichUnit.m.less": function(t, e, n) {
			t.exports = {
				LinkPostRichUnit: "_54eTSJ2NgrcqiTZS6J73J",
				linkPostRichUnit: "_54eTSJ2NgrcqiTZS6J73J",
				Title: "_305-E3YNPLgcNAj1BcbIRZ",
				title: "_305-E3YNPLgcNAj1BcbIRZ",
				Link: "_3v61BQtz-N2RyaLdr3mM2I",
				link: "_3v61BQtz-N2RyaLdr3mM2I"
			}
		},
		"./src/chat/components/Message/RichUnit/Post/PollPostRichUnit.m.less": function(t, e, n) {
			t.exports = {
				PollPostRichUnit: "_23yg7TUXFaJHki79g8FtTT",
				pollPostRichUnit: "_23yg7TUXFaJHki79g8FtTT",
				dark: "Dcbz9rcYU5GZC6HZA_9uF",
				OptionsContainer: "_1krDj8ShLOGZv7PYHtxORA",
				optionsContainer: "_1krDj8ShLOGZv7PYHtxORA",
				Delimiter: "_8p6tS1VdGARo0dlPvszCO",
				delimiter: "_8p6tS1VdGARo0dlPvszCO",
				TotalVotesCount: "_3ZkJYJ6Zv_G_Cwnv1dbGXi",
				totalVotesCount: "_3ZkJYJ6Zv_G_Cwnv1dbGXi",
				Option: "Pul0nqfpnTiP9Xpax52XA",
				option: "Pul0nqfpnTiP9Xpax52XA",
				Checkbox: "_2GTWdlOGKXQpgjcEgjmOSv",
				checkbox: "_2GTWdlOGKXQpgjcEgjmOSv",
				OptionText: "_1-bkNeNok8V-i6xI5oXEsu",
				optionText: "_1-bkNeNok8V-i6xI5oXEsu",
				Title: "_1dvvgX0RbBcz5CGIcXtdWJ",
				title: "_1dvvgX0RbBcz5CGIcXtdWJ",
				LinkedText: "N7niT9kCSVYHDB27tNE7Z",
				linkedText: "N7niT9kCSVYHDB27tNE7Z"
			}
		},
		"./src/chat/components/Message/RichUnit/Post/PostRichUnit.m.less": function(t, e, n) {
			t.exports = {
				RichUnitWrapper: "NaHIKsj8G6eHt2D2JJs4F",
				richUnitWrapper: "NaHIKsj8G6eHt2D2JJs4F",
				RichPostUnit: "_2pTUakCavyMVxp8ATHi_4W",
				richPostUnit: "_2pTUakCavyMVxp8ATHi_4W",
				dark: "Os-mLp-BwCj6IrSlhClaA",
				Delimiter: "_1d3j1ZZ4pPIOPICUbTpzjv",
				delimiter: "_1d3j1ZZ4pPIOPICUbTpzjv",
				RichUnitLink: "_5JJv2eGdXwdYlTLPWRlft",
				richUnitLink: "_5JJv2eGdXwdYlTLPWRlft",
				Content: "_1eZHdUdvEHGNm3UEHDHQOK",
				content: "_1eZHdUdvEHGNm3UEHDHQOK",
				ImagePostRichUnit: "_18CBdJen-DV6KF4KSOE2xr",
				imagePostRichUnit: "_18CBdJen-DV6KF4KSOE2xr",
				PollPostRichUnit: "_2MwSRj_LKjAD6r--1wrGY7",
				pollPostRichUnit: "_2MwSRj_LKjAD6r--1wrGY7"
			}
		},
		"./src/chat/components/Message/RichUnit/Post/PostRichUnit.tsx": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "Content", (function() {
				return z
			})), n.d(e, "RichPostUnit", (function() {
				return Q
			}));
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				s = n("./src/lib/opener/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				r = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx"),
				d = n("./src/chat/components/Message/RichUnit/commonComponents/Header.tsx"),
				u = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.tsx"),
				m = n("./src/chat/components/Message/RichUnit/Post/LinkPostRichUnit.m.less"),
				p = n.n(m);
			const h = l.a.div("Title", p.a),
				v = l.a.div("Link", p.a);
			var P = l.a.wrapped(({
					className: t,
					title: e,
					link: n
				}) => a.a.createElement("div", {
					className: t
				}, a.a.createElement(h, null, e), a.a.createElement(v, {
					onClick: t => {
						t.stopPropagation(), Object(s.f)(n, "_blank")
					}
				}, n)), "LinkPostRichUnit", p.a),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				U = n("./src/chat/components/Message/LinkedText.tsx"),
				k = n("./src/chat/controls/Svg/index.tsx");

			function C() {
				return (C = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
					}
					return t
				}).apply(this, arguments)
			}
			var R = t => a.a.createElement(k.a, C({}, t, {
					viewBox: "0 0 24 20"
				}), a.a.createElement("path", {
					d: "M10.0001 18.5C8.03331 18.5048 6.12572 17.8275 4.60244 16.5833C3.07916 15.3392 2.03445 13.6053 1.64637 11.6772C1.25829 9.74911 1.55086 7.74609 2.47421 6.00952C3.39756 4.27296 4.89454 2.91033 6.71003 2.15388C8.52552 1.39742 10.5472 1.29396 12.4304 1.86111C14.3136 2.42827 15.9419 3.63095 17.0377 5.26417C18.1335 6.8974 18.629 8.86009 18.4398 10.8177C18.2506 12.7754 17.3884 14.6069 16.0001 16C15.2139 16.7913 14.2791 17.4195 13.2494 17.8485C12.2198 18.2775 11.1155 18.4989 10.0001 18.5ZM10.0001 3.50001C8.49637 3.50177 7.03978 4.02483 5.87847 4.98009C4.71716 5.93535 3.92298 7.2637 3.63122 8.73883C3.33946 10.214 3.56818 11.7446 4.2784 13.0701C4.98863 14.3955 6.13643 15.4336 7.52625 16.0077C8.91608 16.5818 10.4619 16.6562 11.9005 16.2183C13.339 15.7804 14.5813 14.8573 15.4155 13.6063C16.2498 12.3552 16.6245 10.8536 16.4758 9.35726C16.3271 7.86092 15.6642 6.46241 14.6001 5.40001C13.9964 4.79577 13.2792 4.31685 12.4898 3.99077C11.7003 3.6647 10.8542 3.49791 10.0001 3.50001Z"
				})),
				_ = n("./src/chat/components/Message/RichUnit/Post/PollPostRichUnit.m.less"),
				x = n.n(_);
			const T = l.a.wrapped(U.a, "LinkedText", x.a),
				E = l.a.div("Title", x.a),
				N = l.a.wrapped(R, "Checkbox", x.a),
				b = l.a.div("OptionText", x.a),
				O = l.a.wrapped(({
					option: t,
					className: e
				}) => a.a.createElement("div", {
					className: e
				}, a.a.createElement(N, null), a.a.createElement(b, null, t.text)), "Option", x.a),
				L = l.a.div("TotalVotesCount", x.a),
				w = l.a.div("Delimiter", x.a),
				j = l.a.wrapped(({
					className: t,
					options: e,
					totalVoteCount: n
				}) => a.a.createElement("div", {
					className: t
				}, a.a.createElement(L, null, n, " ", g.fbt._("votes", null, {
					hk: "ObuMl"
				})), a.a.createElement(w, null), e.map((t, e) => (null == t ? void 0 : t.text) && a.a.createElement(O, {
					key: e + (null == t ? void 0 : t.text) || "",
					option: t
				}))), "OptionsContainer", x.a);
			var f = l.a.wrapped(({
					className: t,
					title: e,
					content: n,
					options: i,
					totalVoteCount: l,
					darkBackground: s,
					highlights: c
				}) => a.a.createElement("div", {
					className: Object(o.a)(t, {
						[x.a.dark]: s
					})
				}, a.a.createElement(j, {
					options: i,
					totalVoteCount: l
				}), a.a.createElement(E, null, e), n ? a.a.createElement(T, {
					value: n,
					highlighMentionGroupLinks: c
				}) : null), "PollPostRichUnit", x.a),
				D = n("./src/chat/components/Message/RichUnit/Post/PostRichUnit.m.less"),
				G = n.n(D),
				I = n("./src/chat/components/Message/RichUnit/Post/TextPostRichUnit.m.less"),
				A = n.n(I);
			const H = l.a.wrapped(U.a, "LinkedText", A.a),
				M = l.a.div("Title", A.a);
			var y = l.a.wrapped(({
					className: t,
					title: e,
					content: n,
					highlights: i
				}) => a.a.createElement("div", {
					className: t
				}, e ? a.a.createElement(M, null, e) : null, n ? a.a.createElement(H, {
					value: n,
					highlighMentionGroupLinks: i
				}) : null), "TextPostRichUnit", A.a),
				S = n("./src/chat/constants/messages.ts"),
				Z = n("./src/chat/helpers/richTextConverter/index.ts"),
				B = n("./src/chat/models/RichUnit/index.ts");

			function J() {
				return (J = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
					}
					return t
				}).apply(this, arguments)
			}
			const X = l.a.wrapped(y, "TextPostRichUnit", G.a),
				Y = l.a.wrapped(P, "LinkPostRichUnit", G.a),
				V = l.a.wrapped(u.a, "ImagePostRichUnit", G.a),
				K = l.a.wrapped(f, "PollPostRichUnit", G.a),
				W = l.a.div("Delimiter", G.a),
				F = t => {
					var e, n, i, a, o, l;
					return t.poll ? B.a.POLL : (null === (i = null === (n = null === (e = t.gallery) || void 0 === e ? void 0 : e.items[0]) || void 0 === n ? void 0 : n.media) || void 0 === i ? void 0 : i.normal) ? B.a.GALLERY : (null === (o = null === (a = t.media) || void 0 === a ? void 0 : a.still) || void 0 === o ? void 0 : o.normal) ? B.a.IMAGE : (null === (l = t.content) || void 0 === l ? void 0 : l.html) ? B.a.TEXT : B.a.LINK
				},
				z = l.a.wrapped(t => {
					var e;
					const {
						className: n,
						isNsfw: i
					} = t, o = F(t);
					let l;
					(null === (e = null == t ? void 0 : t.content) || void 0 === e ? void 0 : e.html) && (l = Object(Z.a)(t.content.html));
					return a.a.createElement("div", {
						tabIndex: 0,
						className: n
					}, (() => {
						var e, n, s, c, r, d, u, m, p, h, v, P, g, U, k, C;
						switch (o) {
							case B.a.TEXT:
								return a.a.createElement(X, {
									title: null == t ? void 0 : t.title,
									content: l,
									highlights: t.highlights
								});
							case B.a.POLL:
								return a.a.createElement(K, {
									title: null == t ? void 0 : t.title,
									content: l,
									options: (null === (e = t.poll) || void 0 === e ? void 0 : e.options) || [],
									totalVoteCount: (null === (n = t.poll) || void 0 === n ? void 0 : n.totalVoteCount) || 0,
									darkBackground: t.darkBackground,
									highlights: t.highlights
								});
							case B.a.IMAGE:
								return a.a.createElement(V, {
									url: (i ? null === (r = null === (c = null === (s = t.media) || void 0 === s ? void 0 : s.still) || void 0 === c ? void 0 : c.obfuscate) || void 0 === r ? void 0 : r.url : null === (m = null === (u = null === (d = t.media) || void 0 === d ? void 0 : d.still) || void 0 === u ? void 0 : u.normal) || void 0 === m ? void 0 : m.url) || "",
									title: null == t ? void 0 : t.title
								});
							case B.a.GALLERY:
								return a.a.createElement(V, {
									url: (i ? null === (P = null === (v = null === (h = null === (p = t.gallery) || void 0 === p ? void 0 : p.items[0]) || void 0 === h ? void 0 : h.media) || void 0 === v ? void 0 : v.obfuscate) || void 0 === P ? void 0 : P.url : null === (C = null === (k = null === (U = null === (g = t.gallery) || void 0 === g ? void 0 : g.items[0]) || void 0 === U ? void 0 : U.media) || void 0 === k ? void 0 : k.normal) || void 0 === C ? void 0 : C.url) || "",
									title: null == t ? void 0 : t.title,
									isGallery: !0
								});
							case B.a.LINK:
								return (null == t ? void 0 : t.url) ? a.a.createElement(Y, {
									title: null == t ? void 0 : t.title,
									link: null == t ? void 0 : t.url
								}) : null;
							default:
								return null
						}
					})())
				}, "Content", G.a),
				Q = l.a.wrapped(({
					className: t,
					darkBackground: e,
					highlights: n,
					richUnitData: i,
					richUnitData: {
						score: l = 0,
						commentCount: u = 0
					},
					postUrl: m
				}) => {
					var p, h, v;
					const P = F(i);
					let g, U;
					i.type === S.c.POST ? g = i.subreddit : i.type === S.c.USER_POST && (U = i.redditor);
					const k = `${Object(c.b)(l)} points • ${Object(c.b)(u)} comments`;
					return a.a.createElement("button", {
						onClick: t => {
							((t, e) => {
								t.stopPropagation(), Object(s.f)(e, "_blank")
							})(t, m)
						},
						className: Object(o.a)(t, {
							[G.a.dark]: e
						})
					}, a.a.createElement(d.a, {
						authorName: null === (p = i.authorInfo) || void 0 === p ? void 0 : p.displayName,
						subredditName: null == g ? void 0 : g.name,
						redditorName: null == U ? void 0 : U.displayName,
						isPostComment: U,
						iconUrl: g ? null === (h = null == g ? void 0 : g.styles) || void 0 === h ? void 0 : h.icon : null === (v = null == U ? void 0 : U.icon) || void 0 === v ? void 0 : v.url
					}), P === B.a.LINK || P === B.a.TEXT ? a.a.createElement(W, null) : null, a.a.createElement(z, J({}, i, {
						highlights: n,
						darkBackground: e
					})), a.a.createElement(r.a, {
						metaInfo: k
					}))
				}, "RichPostUnit", G.a),
				q = l.a.wrapped(({
					darkBackground: t,
					highlights: e,
					postUrl: n,
					richUnitData: i,
					className: o
				}) => a.a.createElement("div", {
					className: o
				}, a.a.createElement(Q, {
					darkBackground: t,
					highlights: e,
					richUnitData: i,
					postUrl: n
				})), "RichUnitWrapper", G.a);
			e.default = q
		},
		"./src/chat/components/Message/RichUnit/Post/TextPostRichUnit.m.less": function(t, e, n) {
			t.exports = {
				TextPostRichUnit: "_19px0v0WewwzcrIS6oXYDK",
				textPostRichUnit: "_19px0v0WewwzcrIS6oXYDK",
				Title: "pPYBfWAa_3WcCZotVkuOd",
				title: "pPYBfWAa_3WcCZotVkuOd",
				LinkedText: "HYg0P9aixykU2U0NFpzZ4",
				linkedText: "HYg0P9aixykU2U0NFpzZ4"
			}
		},
		"./src/chat/helpers/richTextConverter/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			}));
			var i = n("./node_modules/draft-js/lib/Draft.js");
			const a = /(<span class="md-spoiler-text">).+(<\/span>)/gi,
				o = t => {
					const e = Object(i.convertFromHTML)(t.replace(a, "$1[spoiler]$2"));
					return Object(i.convertToRaw)(i.ContentState.createFromBlockArray(e.contentBlocks)).blocks.map(t => t.text.trim() ? t.text : "\n").join(" ")
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostRichUnit.d3e0209560f2cc6f1591.js.map