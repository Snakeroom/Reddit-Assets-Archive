// https://www.redditstatic.com/desktop2x/PostRichUnit.4f3bee665c2b83c995b9.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostRichUnit"], {
		"./src/chat/components/Message/RichUnit/Post/LinkPostRichUnit.m.less": function(t, e, a) {
			t.exports = {
				LinkPostRichUnit: "_54eTSJ2NgrcqiTZS6J73J",
				linkPostRichUnit: "_54eTSJ2NgrcqiTZS6J73J",
				Title: "_305-E3YNPLgcNAj1BcbIRZ",
				title: "_305-E3YNPLgcNAj1BcbIRZ",
				isSharedToChat: "_2ls3Md6vhBHB8OOdt4RPSP",
				Link: "_3v61BQtz-N2RyaLdr3mM2I",
				link: "_3v61BQtz-N2RyaLdr3mM2I"
			}
		},
		"./src/chat/components/Message/RichUnit/Post/PollPostRichUnit.m.less": function(t, e, a) {
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
				isSharedToChat: "_3Sr5PmkfCmFAcuLoTuwTzS",
				LinkedText: "N7niT9kCSVYHDB27tNE7Z",
				linkedText: "N7niT9kCSVYHDB27tNE7Z"
			}
		},
		"./src/chat/components/Message/RichUnit/Post/PostRichUnit.m.less": function(t, e, a) {
			t.exports = {
				RichUnitWrapper: "NaHIKsj8G6eHt2D2JJs4F",
				richUnitWrapper: "NaHIKsj8G6eHt2D2JJs4F",
				RichPostUnit: "_2pTUakCavyMVxp8ATHi_4W",
				richPostUnit: "_2pTUakCavyMVxp8ATHi_4W",
				dark: "Os-mLp-BwCj6IrSlhClaA",
				Delimiter: "_1d3j1ZZ4pPIOPICUbTpzjv",
				delimiter: "_1d3j1ZZ4pPIOPICUbTpzjv",
				shareToChat: "_1unuN6LQatTRG_-073qJCh",
				RichUnitLink: "_5JJv2eGdXwdYlTLPWRlft",
				richUnitLink: "_5JJv2eGdXwdYlTLPWRlft",
				Content: "_1eZHdUdvEHGNm3UEHDHQOK",
				content: "_1eZHdUdvEHGNm3UEHDHQOK",
				ImagePostRichUnit: "_18CBdJen-DV6KF4KSOE2xr",
				imagePostRichUnit: "_18CBdJen-DV6KF4KSOE2xr",
				isSharedToChat: "_1lOBf1QdkOD2dt-UQzL0v7",
				PollPostRichUnit: "_2MwSRj_LKjAD6r--1wrGY7",
				pollPostRichUnit: "_2MwSRj_LKjAD6r--1wrGY7"
			}
		},
		"./src/chat/components/Message/RichUnit/Post/PostRichUnit.tsx": function(t, e, a) {
			"use strict";
			a.r(e), a.d(e, "Content", (function() {
				return Y
			})), a.d(e, "RichPostUnit", (function() {
				return K
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				i = a("./node_modules/react/index.js"),
				o = a.n(i),
				l = a("./src/lib/classNames/index.ts"),
				s = a("./src/lib/lessComponent.tsx"),
				r = a("./src/lib/opener/index.ts"),
				c = a("./src/lib/prettyPrintNumber/index.ts"),
				d = a("./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx"),
				h = a("./src/chat/components/Message/RichUnit/commonComponents/Header.tsx"),
				u = a("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.tsx"),
				m = a("./src/chat/components/Message/RichUnit/Post/LinkPostRichUnit.m.less"),
				v = a.n(m);
			var p = t => {
					let {
						className: e,
						title: a,
						link: n,
						isSharedToChat: i
					} = t;
					return o.a.createElement("div", {
						className: Object(l.a)(e, v.a.LinkPostRichUnit)
					}, a && o.a.createElement("div", {
						className: Object(l.a)(v.a.Title, {
							[v.a.isSharedToChat]: i
						})
					}, a), !i && o.a.createElement("div", {
						className: v.a.Link,
						onClick: t => {
							t.stopPropagation(), Object(r.e)(n, "_blank")
						}
					}, n))
				},
				C = a("./src/chat/components/Message/LinkedText.tsx"),
				T = a("./src/chat/controls/Svg/index.tsx");

			function P() {
				return (P = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var a = arguments[e];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
					}
					return t
				}).apply(this, arguments)
			}
			var U = t => o.a.createElement(T.a, P({}, t, {
					viewBox: "0 0 24 20"
				}), o.a.createElement("path", {
					d: "M10.0001 18.5C8.03331 18.5048 6.12572 17.8275 4.60244 16.5833C3.07916 15.3392 2.03445 13.6053 1.64637 11.6772C1.25829 9.74911 1.55086 7.74609 2.47421 6.00952C3.39756 4.27296 4.89454 2.91033 6.71003 2.15388C8.52552 1.39742 10.5472 1.29396 12.4304 1.86111C14.3136 2.42827 15.9419 3.63095 17.0377 5.26417C18.1335 6.8974 18.629 8.86009 18.4398 10.8177C18.2506 12.7754 17.3884 14.6069 16.0001 16C15.2139 16.7913 14.2791 17.4195 13.2494 17.8485C12.2198 18.2775 11.1155 18.4989 10.0001 18.5ZM10.0001 3.50001C8.49637 3.50177 7.03978 4.02483 5.87847 4.98009C4.71716 5.93535 3.92298 7.2637 3.63122 8.73883C3.33946 10.214 3.56818 11.7446 4.2784 13.0701C4.98863 14.3955 6.13643 15.4336 7.52625 16.0077C8.91608 16.5818 10.4619 16.6562 11.9005 16.2183C13.339 15.7804 14.5813 14.8573 15.4155 13.6063C16.2498 12.3552 16.6245 10.8536 16.4758 9.35726C16.3271 7.86092 15.6642 6.46241 14.6001 5.40001C13.9964 4.79577 13.2792 4.31685 12.4898 3.99077C11.7003 3.6647 10.8542 3.49791 10.0001 3.50001Z"
				})),
				k = a("./src/chat/components/Message/RichUnit/Post/PollPostRichUnit.m.less"),
				_ = a.n(k);
			const g = s.a.wrapped(C.a, "LinkedText", _.a),
				R = s.a.div("Title", _.a),
				b = s.a.wrapped(U, "Checkbox", _.a),
				x = s.a.div("OptionText", _.a),
				O = s.a.wrapped(t => {
					let {
						option: e,
						className: a
					} = t;
					return o.a.createElement("div", {
						className: a
					}, o.a.createElement(b, null), o.a.createElement(x, null, e.text))
				}, "Option", _.a),
				E = s.a.div("TotalVotesCount", _.a),
				N = s.a.div("Delimiter", _.a),
				S = s.a.wrapped(t => {
					let {
						className: e,
						options: a,
						totalVoteCount: i
					} = t;
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement(E, null, i, " ", n.fbt._("votes", null, {
						hk: "ObuMl"
					})), o.a.createElement(N, null), a.map((t, e) => (null == t ? void 0 : t.text) && o.a.createElement(O, {
						key: e + (null == t ? void 0 : t.text) || "",
						option: t
					})))
				}, "OptionsContainer", _.a);
			var L = s.a.wrapped(t => {
					let {
						className: e,
						title: a,
						content: n,
						options: i,
						totalVoteCount: s,
						darkBackground: r,
						highlights: c,
						isSharedToChat: d
					} = t;
					return o.a.createElement("div", {
						className: Object(l.a)(e, {
							[_.a.dark]: r
						})
					}, !d && o.a.createElement(S, {
						options: i,
						totalVoteCount: s
					}), o.a.createElement(R, {
						className: Object(l.a)(_.a.Title, {
							[_.a.isSharedToChat]: d
						})
					}, a), n && !d ? o.a.createElement(g, {
						value: n,
						highlighMentionGroupLinks: c
					}) : null)
				}, "PollPostRichUnit", _.a),
				j = a("./src/chat/components/Message/RichUnit/Post/TextPostRichUnit.m.less"),
				f = a.n(j);
			const w = s.a.wrapped(C.a, "LinkedText", f.a),
				D = s.a.div("Title", f.a);
			var G = s.a.wrapped(t => {
					let {
						className: e,
						title: a,
						content: n,
						highlights: i,
						isSharedToChat: s
					} = t;
					return o.a.createElement("div", {
						className: Object(l.a)(e, {
							[f.a.isSharedToChat]: s
						})
					}, a ? o.a.createElement(D, null, a) : null, n && !s ? o.a.createElement(w, {
						value: n,
						highlighMentionGroupLinks: i
					}) : null)
				}, "TextPostRichUnit", f.a),
				A = a("./src/chat/constants/messages.ts"),
				H = a("./src/chat/helpers/richTextConverter/index.ts"),
				I = a("./src/chat/models/RichUnit/index.ts"),
				B = a("./src/chat/components/Message/RichUnit/Post/PostRichUnit.m.less"),
				M = a.n(B);

			function y() {
				return (y = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var a = arguments[e];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
					}
					return t
				}).apply(this, arguments)
			}
			const J = s.a.wrapped(p, "LinkPostRichUnit", M.a),
				Z = s.a.wrapped(u.a, "ImagePostRichUnit", M.a),
				X = s.a.div("Delimiter", M.a),
				V = t => {
					var e, a, n, i, o, l;
					return t.poll ? I.a.POLL : (null === (n = null === (a = null === (e = t.gallery) || void 0 === e ? void 0 : e.items[0]) || void 0 === a ? void 0 : a.media) || void 0 === n ? void 0 : n.normal) ? I.a.GALLERY : (null === (o = null === (i = t.media) || void 0 === i ? void 0 : i.still) || void 0 === o ? void 0 : o.normal) ? I.a.IMAGE : (null === (l = t.content) || void 0 === l ? void 0 : l.html) ? I.a.TEXT : I.a.LINK
				},
				Y = s.a.wrapped(t => {
					var e;
					const {
						className: a,
						isNsfw: n,
						isSharedToChat: i
					} = t, s = V(t);
					let r;
					(null === (e = null == t ? void 0 : t.content) || void 0 === e ? void 0 : e.html) && (r = Object(H.a)(t.content.html));
					return o.a.createElement("div", {
						tabIndex: 0,
						className: a
					}, (() => {
						var e, a, c, d, h, u, m, v, p, C, T, P, U, k, _, g;
						switch (s) {
							case I.a.TEXT:
								return o.a.createElement(G, {
									className: Object(l.a)(M.a.TextPostRichUnit, {
										[M.a.isSharedToChat]: i
									}),
									title: null == t ? void 0 : t.title,
									content: r,
									highlights: t.highlights,
									isSharedToChat: i
								});
							case I.a.POLL:
								return o.a.createElement(L, {
									className: Object(l.a)(M.a.PollPostRichUnit, {
										[M.a.isSharedToChat]: i
									}),
									title: null == t ? void 0 : t.title,
									content: r,
									options: (null === (e = t.poll) || void 0 === e ? void 0 : e.options) || [],
									totalVoteCount: (null === (a = t.poll) || void 0 === a ? void 0 : a.totalVoteCount) || 0,
									darkBackground: t.darkBackground,
									highlights: t.highlights,
									isSharedToChat: i
								});
							case I.a.IMAGE:
								return o.a.createElement(Z, {
									url: (n ? null === (h = null === (d = null === (c = t.media) || void 0 === c ? void 0 : c.still) || void 0 === d ? void 0 : d.obfuscate) || void 0 === h ? void 0 : h.url : null === (v = null === (m = null === (u = t.media) || void 0 === u ? void 0 : u.still) || void 0 === m ? void 0 : m.normal) || void 0 === v ? void 0 : v.url) || "",
									title: null == t ? void 0 : t.title,
									isSharedToChat: i
								});
							case I.a.GALLERY:
								return o.a.createElement(Z, {
									url: (n ? null === (P = null === (T = null === (C = null === (p = t.gallery) || void 0 === p ? void 0 : p.items[0]) || void 0 === C ? void 0 : C.media) || void 0 === T ? void 0 : T.obfuscate) || void 0 === P ? void 0 : P.url : null === (g = null === (_ = null === (k = null === (U = t.gallery) || void 0 === U ? void 0 : U.items[0]) || void 0 === k ? void 0 : k.media) || void 0 === _ ? void 0 : _.normal) || void 0 === g ? void 0 : g.url) || "",
									title: null == t ? void 0 : t.title,
									isGallery: !0,
									isSharedToChat: i
								});
							case I.a.LINK:
								return (null == t ? void 0 : t.url) ? o.a.createElement(J, {
									className: Object(l.a)(M.a.LinkPostRichUnit, {
										[M.a.isSharedToChat]: i
									}),
									title: null == t ? void 0 : t.title,
									link: null == t ? void 0 : t.url,
									isSharedToChat: i
								}) : null;
							default:
								return null
						}
					})())
				}, "Content", M.a),
				K = s.a.wrapped(t => {
					let {
						className: e,
						darkBackground: a,
						highlights: i,
						richUnitData: s,
						postUrl: u,
						isSharedToChat: m
					} = t;
					var v, p, C, T, P, U, k;
					const _ = V(s);
					let g, R;
					s.type === A.c.POST ? g = s.subreddit : s.type === A.c.USER_POST && (R = s.redditor);
					const b = ` ${n.fbt._({"*":"{upvotes count} upvotes",_1:"{upvotes count} upvote"},[n.fbt._param("upvotes count",Object(c.b)(null!==(v=null==s?void 0:s.score)&&void 0!==v?v:0)),n.fbt._plural(null!==(p=null==s?void 0:s.score)&&void 0!==p?p:0)],{hk:"ukHU1"})} • ${n.fbt._({"*":"{comments count} comments",_1:"{comments count} comment"},[n.fbt._param("comments count",Object(c.b)(null!==(C=null==s?void 0:s.commentCount)&&void 0!==C?C:0)),n.fbt._plural(null!==(T=null==s?void 0:s.commentCount)&&void 0!==T?T:0)],{hk:"hVk9V"})}`;
					return o.a.createElement("button", {
						onClick: t => {
							((t, e) => {
								t.stopPropagation(), Object(r.e)(e, "_blank")
							})(t, u)
						},
						className: Object(l.a)(e, {
							[M.a.dark]: a,
							[M.a.shareToChat]: m
						})
					}, o.a.createElement(h.a, {
						authorName: null === (P = s.authorInfo) || void 0 === P ? void 0 : P.displayName,
						subredditName: null == g ? void 0 : g.name,
						redditorName: null == R ? void 0 : R.displayName,
						iconUrl: g ? null === (U = null == g ? void 0 : g.styles) || void 0 === U ? void 0 : U.icon : null === (k = null == R ? void 0 : R.icon) || void 0 === k ? void 0 : k.url,
						isSharedToChat: m
					}), _ !== I.a.LINK && _ !== I.a.TEXT || m ? null : o.a.createElement(X, null), o.a.createElement(Y, y({}, s, {
						highlights: i,
						darkBackground: a,
						isSharedToChat: m
					})), o.a.createElement(d.a, {
						metaInfo: b
					}))
				}, "RichPostUnit", M.a),
				F = s.a.wrapped(t => {
					let {
						darkBackground: e,
						highlights: a,
						postUrl: n,
						richUnitData: i,
						className: l,
						isSharedToChat: s
					} = t;
					return o.a.createElement("div", {
						className: l
					}, o.a.createElement(K, {
						darkBackground: e,
						highlights: a,
						richUnitData: i,
						postUrl: n,
						isSharedToChat: s
					}))
				}, "RichUnitWrapper", M.a);
			e.default = F
		},
		"./src/chat/components/Message/RichUnit/Post/TextPostRichUnit.m.less": function(t, e, a) {
			t.exports = {
				TextPostRichUnit: "_19px0v0WewwzcrIS6oXYDK",
				textPostRichUnit: "_19px0v0WewwzcrIS6oXYDK",
				Title: "pPYBfWAa_3WcCZotVkuOd",
				title: "pPYBfWAa_3WcCZotVkuOd",
				LinkedText: "HYg0P9aixykU2U0NFpzZ4",
				linkedText: "HYg0P9aixykU2U0NFpzZ4",
				isSharedToChat: "oITXSFSDA937Jrx2rwUhD"
			}
		},
		"./src/chat/helpers/richTextConverter/index.ts": function(t, e, a) {
			"use strict";
			a.d(e, "a", (function() {
				return o
			}));
			var n = a("./node_modules/draft-js/lib/Draft.js");
			const i = /(<span class="md-spoiler-text">).+(<\/span>)/gi,
				o = t => {
					const e = Object(n.convertFromHTML)(t.replace(i, "$1[spoiler]$2"));
					return Object(n.convertToRaw)(n.ContentState.createFromBlockArray(e.contentBlocks)).blocks.map(t => t.text.trim() ? t.text : "\n").join(" ")
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostRichUnit.4f3bee665c2b83c995b9.js.map