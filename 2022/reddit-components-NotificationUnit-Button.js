// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.9656a650eaebed1b4ea2.js
// Retrieved at 3/29/2022, 7:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./node_modules/lodash/map.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_arrayMap.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_baseMap.js"),
				i = n("./node_modules/lodash/isArray.js");
			t.exports = function(t, e) {
				return (i(t) ? o : s)(t, r(e, 3))
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return tt
			})), n.d(e, "p", (function() {
				return nt
			})), n.d(e, "n", (function() {
				return ot
			})), n.d(e, "r", (function() {
				return it
			})), n.d(e, "u", (function() {
				return ct
			})), n.d(e, "o", (function() {
				return dt
			})), n.d(e, "t", (function() {
				return lt
			})), n.d(e, "m", (function() {
				return ut
			})), n.d(e, "h", (function() {
				return bt
			})), n.d(e, "a", (function() {
				return ft
			})), n.d(e, "b", (function() {
				return yt
			})), n.d(e, "q", (function() {
				return jt
			})), n.d(e, "f", (function() {
				return ht
			})), n.d(e, "g", (function() {
				return Ct
			})), n.d(e, "k", (function() {
				return xt
			})), n.d(e, "d", (function() {
				return Tt
			})), n.d(e, "c", (function() {
				return gt
			})), n.d(e, "j", (function() {
				return Nt
			})), n.d(e, "i", (function() {
				return kt
			})), n.d(e, "l", (function() {
				return Pt
			})), n.d(e, "s", (function() {
				return wt
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				c = n("./src/reddit/actions/changeUsername.ts"),
				a = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = n("./src/reddit/constants/adEvents.ts"),
				y = n("./src/reddit/constants/localStorage.ts"),
				j = n("./src/redditGQL/operations/CommentToxicity.json"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				C = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/lib/omitHeaders/index.ts"),
				I = n("./src/reddit/constants/headers.ts"),
				T = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = n("./src/reddit/helpers/genericServerError/index.ts"),
				R = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				N = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				S = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const A = (t, e, n, o) => {
					let r, s;
					if (o === g.i.MARKDOWN) r = n.text, s = null;
					else {
						r = null;
						let t = null;
						n.rteState && (t = p.a.toRichTextJSON(n.rteState).document), s = JSON.stringify({
							document: t
						})
					}
					return Object(C.a)(t, {
						...j,
						variables: {
							subredditName: e,
							markdown: r,
							richText: s
						}
					}).then(t => !t.ok || t.body.data.isValidComment)
				},
				v = async (t, e, n, o, s) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: e
					};
					if (s === g.i.MARKDOWN) i.text = n.text;
					else {
						i.text = null;
						let t = null;
						n.rteState && (t = p.a.toRichTextJSON(n.rteState).document), i.richtext_json = JSON.stringify({
							document: t
						})
					}
					return Object(h.a)(Object(x.a)(t, [I.a]), {
						method: r.jb.POST,
						endpoint: Object(T.a)(Object(N.a)(Object(S.a)(`${t.apiUrl}/api/comment.json`))),
						data: i
					}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
						...t,
						ok: !1,
						error: Object(E.a)(t)
					} : {
						...t,
						body: {
							comment: Object(R.a)(t.body.json.data.things[0].data, o)
						}
					} : {
						...t,
						body: {
							comment: Object(R.a)(t.body, o)
						}
					} : {
						...t,
						error: t.error || Object(_.a)()
					})
				};
			var k = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var P = n("./src/reddit/endpoints/post/index.tsx"),
				w = n("./src/reddit/endpoints/post/convert.ts"),
				D = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				M = n("./src/reddit/featureFlags/index.ts"),
				L = n("./src/reddit/helpers/correlationIdTracker.ts"),
				F = n("./src/reddit/helpers/dom/index.ts"),
				K = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				W = n("./src/reddit/models/Comment/index.ts"),
				B = n("./src/reddit/models/PostDraft/index.ts"),
				V = n("./src/reddit/models/RichTextJson/index.ts"),
				H = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				J = n("./src/reddit/models/Toast/index.ts"),
				G = n("./src/reddit/selectors/comments.ts"),
				q = n("./src/reddit/selectors/commentSelector.ts"),
				Y = n("./src/reddit/selectors/platform.ts"),
				Q = n("./src/reddit/selectors/posts.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/actions/comment/index.ts"),
				$ = n("./src/reddit/actions/comment/constants.ts");
			const Z = Object(s.a)($.k),
				tt = t => {
					let {
						hasFocus: e,
						draftKey: n
					} = t;
					return async (t, o) => {
						const r = o();
						if (!!r.features.comments.drafts[n])
							if (Object(z.R)(r) && e) {
								const o = Z({
									hasFocus: e,
									draftKey: n
								});
								t(Object(c.f)(o))
							} else t(Z({
								hasFocus: e,
								draftKey: n
							}))
					}
				},
				et = Object(s.a)($.I),
				nt = Object(s.a)($.K),
				ot = Object(s.a)($.J),
				rt = Object(s.a)($.H),
				st = async (t, e, n, o) => {
					const r = o.ok && o.body,
						s = r && r.comment && r.comment.id;
					await U.f(t, n, e, s)
				}, it = "Toxicity_Warning__Modal", ct = (t, e, n, o, r, s) => async (i, c, a) => {
					let {
						gqlContext: l
					} = a;
					const u = c(),
						m = Object(Y.e)(u);
					let b = "";
					if (m && (b = m.name), M.d.enableToxicityWarning(u)) {
						if (!(await A(l(), b, o, r))) return void i(Object(d.i)(it))
					}
					i(dt(t, e, n, o, r, s))
				}, at = t => t.rteState ? p.a.toRichTextJSON(t.rteState) : t.rtJson || t.text, dt = (t, e, n, s, i, c, a) => async (u, p, y) => {
					let {
						apiContext: j
					} = y;
					u(Object(d.g)(it));
					const h = p(),
						C = h.features.comments.submit.pending[n];
					if (!h.user.account || C) return;
					u(et({
						draftKey: n,
						draft: s
					}));
					const x = h.user.account.displayText,
						I = s.commentMode;
					let T;
					if (a ? (T = await Object(D.i)(j(), t, s, x), u(Object(m.a)({
							streamId: t,
							level: T.body.automuteLevel
						}))) : T = await v(j(), t, s, x, I), T.ok) {
						let o;
						o = T.body, u(nt({
							...o,
							headCommentId: Object(G.w)(h, {
								commentsPageKey: e
							}),
							commentsPageKey: e,
							draftKey: n
						}));
						const r = Object(Q.G)(p(), {
							postId: t
						});
						u(Object(l.z)(r, O.a.CommentSubmitted))
					} else {
						T.error && T.error.type === r.Kb && U.h(h, at(s), t);
						const e = T.error && T.error.fields && T.error.fields[0] ? T.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(rt({
							draftKey: n,
							error: T.error
						})), u(Object(f.f)({
							duration: f.a,
							kind: J.b.Error,
							text: e
						}))
					}
					st(p(), e, i, T).then(() => T.ok && i === g.i.RICH_TEXT ? Object(L.b)(L.a.CommentComposer) : void 0), c || Object(b.d)()
				}, lt = t => async (e, n, o) => {
					let {
						gqlContext: r
					} = o;
					const {
						parentCommentId: s,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: a,
						formData: l,
						editorMode: u
					} = t, m = n(), b = Object(Y.e)(m);
					let f = "";
					if (b && (f = b.name), M.d.enableToxicityWarning(m)) {
						if (!(await A(r(), f, l, u))) return void e(Object(d.i)(it))
					}
					e(ut({
						commentsPageKey: i,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: s,
						formData: l,
						editorMode: u
					}))
				}, ut = t => async (e, n, o) => {
					let {
						apiContext: s
					} = o;
					const {
						parentCommentId: i,
						commentsPageKey: c,
						parentCommentDepth: a,
						draftKey: l,
						formData: u,
						editorMode: m
					} = t;
					e(Object(d.g)(it));
					const f = n(),
						p = f.features.comments.submit.pending[l];
					if (!f.user.account || p) return;
					e(et({
						draftKey: l,
						draft: u
					}));
					const O = f.user.account.displayText,
						y = u.commentMode,
						j = await v(s(), i, u, O, y);
					if (j.ok) e(ot({
						...j.body,
						parentCommentId: i,
						commentsPageKey: c,
						draftKey: l,
						depth: a + 1
					}));
					else {
						if (j.error && j.error.type === r.Kb) {
							const t = Object(q.b)(f, {
								commentId: i
							});
							if (!t) return;
							U.h(f, at(u), t.postId, i)
						}
						e(rt({
							draftKey: l,
							error: j.error
						}))
					}
					st(n(), c, m, j), Object(b.d)()
				}, mt = Object(s.a)($.q), bt = Object(s.a)($.y), ft = Object(s.a)($.p), pt = Object(s.a)($.l), Ot = (Object(s.a)($.g), Object(s.a)($.m)), yt = (Object(s.a)($.t), (t, e, n) => async (r, s, i) => {
					let {
						apiContext: c
					} = i;
					const a = t === g.i.RICH_TEXT;
					if (!e || "object" == typeof e && Object(V.G)(e)) r(Ot({
						editorMode: t,
						draftKey: n,
						content: a ? V.i : ""
					})), r(Object(u.c)(t));
					else {
						r(Object(u.b)(n));
						const s = await Object(w.a)(c(), t, a ? e : JSON.stringify(e));
						if (s.ok) {
							const e = s.body.output;
							r(Object(u.a)(n)), r(Ot({
								editorMode: t,
								draftKey: n,
								content: e
							})), r(Object(u.c)(t))
						} else r(Object(u.a)(n)), r(Object(f.f)({
							duration: f.a,
							kind: J.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), jt = t => {
					let {
						commentsPageKey: e,
						parentCommentId: n,
						singleOpen: o
					} = t;
					return async (t, r) => {
						const s = r(),
							l = Object(i.a)(B.c.replyToComment, n);
						if (!Object(z.P)(r())) return t(Object(a.j)()), void t(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(G.m)(r(), {
								commentId: n
							})
						}));
						const u = s.features.comments.replyFormOpen[e],
							m = u && u[n];
						if ((m || u && o) && (Object.keys(u).forEach(n => u[n] && t(ft({
								parentCommentId: n,
								commentsPageKey: e
							}))), m)) return;
						let b = "",
							f = null;
						const p = s.user.prefs.commentMode,
							O = Object(F.d)();
						if (O) {
							const t = O.filter(t => !!t && 10 !== t.charCodeAt(0));
							if (p === g.i.MARKDOWN) b = t.map(t => `> ${t}\n`).join("");
							else {
								const e = t.map(t => H.s(t, null)).map(t => H.l([t])),
									n = H.s("", null),
									o = H.l([n]);
								f = {
									document: [H.c(e), o]
								}
							}
						}
						const y = s.features.comments.drafts[l];
						let j;
						if (j = O ? {
								commentMode: p,
								draftType: B.c.replyToComment,
								rtJson: f,
								text: `${b}\n`
							} : y || {
								commentMode: p,
								draftType: B.c.replyToComment,
								rtJson: f,
								text: ""
							}, Object(z.R)(s)) {
							const o = mt({
								parentCommentId: n,
								commentsPageKey: e,
								draftKey: l,
								formData: j
							});
							t(Object(c.f)(o))
						} else t(mt({
							parentCommentId: n,
							commentsPageKey: e,
							draftKey: l,
							formData: j
						}))
					}
				}, ht = t => async e => {
					e(Object(X.p)(t)), e(Tt(t))
				}, Ct = t => {
					let {
						parentCommentId: e,
						commentsPageKey: n
					} = t;
					return async t => {
						t(ft({
							parentCommentId: e,
							commentsPageKey: n
						})), t(jt({
							parentCommentId: e,
							commentsPageKey: n
						})), t(Object(X.p)({
							commentId: e,
							commentsPageKey: n
						}))
					}
				}, xt = (t, e) => n => n(pt({
					draftKey: t,
					formData: e
				})), It = Object(s.a)($.s), Tt = t => {
					let {
						commentId: e,
						commentMode: n,
						commentsPageKey: o,
						draftKey: r,
						text: s
					} = t;
					return async (t, i) => {
						const c = i();
						c.user.account && (U.c(c), t(It({
							commentId: e,
							commentsPageKey: o,
							draftKey: r,
							formData: {
								text: s,
								commentMode: n,
								rteState: null,
								draftType: B.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, _t = Object(s.a)($.D), Rt = Object(s.a)($.C), Et = Object(s.a)($.E), gt = Object(s.a)($.h), Nt = t => {
					let {
						id: e,
						commentsPageKey: n,
						depth: o,
						draftKey: s,
						formData: i
					} = t;
					return async (t, o, c) => {
						let {
							apiContext: a
						} = c;
						const d = o();
						if (!d.user.account) return;
						t(_t({
							draftKey: s
						})), U.d(d);
						const l = d.user.account.displayText || "",
							u = i.commentMode,
							m = await (async (t, e, n, o, s, i) => {
								const c = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: e
								};
								if (i === g.i.MARKDOWN) c.text = o.text;
								else {
									c.text = null;
									let t = null;
									o.rteState && (t = p.a.toRichTextJSON(o.rteState).document), c.richtext_json = JSON.stringify({
										document: t
									})
								}
								return Object(h.a)(Object(x.a)(t, [I.a]), {
									endpoint: Object(T.a)(Object(S.a)(Object(N.a)(`${t.apiUrl}/api/editusertext`))),
									method: r.jb.POST,
									data: c
								}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
									...t,
									ok: !1,
									error: Object(E.a)(t)
								} : {
									...t,
									body: {
										comment: Object(R.a)(t.body.json.data.things[0].data, s)
									}
								} : {
									...t,
									body: {
										comment: Object(R.a)(t.body, s)
									}
								} : {
									...t,
									error: t.error || Object(_.a)()
								})
							})(a(), e, 0, i, l, u);
						if (m.ok) {
							const o = m.body;
							t(Et({
								commentId: e,
								commentsPageKey: n,
								draftKey: s
							})), t(Object(X.i)({
								[e]: {
									...o.comment
								}
							}))
						} else t(Rt({
							draftKey: s,
							error: m.error
						}))
					}
				}, St = Object(s.a)($.A), At = Object(s.a)($.z), vt = Object(s.a)($.B), kt = (t, e) => async (n, o, s) => {
					let {
						apiContext: i
					} = s;
					const c = o();
					n(St({
						id: t
					})), U.a(t, c);
					const a = await ((t, e) => Object(h.a)(Object(x.a)(t, [I.a]), {
						endpoint: Object(T.a)(`${t.apiUrl}/api/del`),
						method: r.jb.POST,
						data: {
							id: e
						}
					}).then(t => t.ok ? t.body.json && t.body.json.errors.length ? {
						...t,
						ok: !1,
						error: Object(E.a)(t)
					} : {
						...t,
						body: {}
					} : {
						...t,
						error: t.error || Object(_.a)()
					}))(i(), t);
					a.ok ? n(vt({
						id: t,
						postId: e
					})) : n(At({
						id: t,
						error: a.error
					}))
				}, Pt = t => async (e, n, o) => {
					let {
						apiContext: r
					} = o;
					const s = !n().features.comments.models[t].sendReplies;
					e(Object(X.i)({
						[t]: {
							sendReplies: s
						}
					})), (await Object(P.q)(r(), t, s)).ok || e(Object(X.i)({
						[t]: {
							sendReplies: !s
						}
					}))
				}, wt = (t, e) => async (n, r, s) => {
					let {
						gqlContext: i
					} = s;
					var c, a, d, l, u, m;
					n(Object(X.c)());
					const b = t => Object(f.f)(Object(f.e)(t, J.b.Error));
					if (((null === (a = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === y.a) n(b(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const s = e === W.a.FOLLOWED,
							c = {
								id: t,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(X.n)(c)), (await ((t, e) => Object(C.a)(t, {
								...k,
								variables: {
									input: e
								}
							}))(i(), {
								commentId: t,
								followState: e
							})).ok) {
							Object(K.vb)(null !== (u = null === (l = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = r().user.account) || void 0 === m ? void 0 : m.id);
							const t = s ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(f.f)({
								kind: J.b.SuccessCommunityGreen,
								text: t
							}))
						} else n(Object(X.n)(c)), n(b(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return b
			})), n.d(e, "a", (function() {
				return f
			})), n.d(e, "d", (function() {
				return O
			})), n.d(e, "c", (function() {
				return y
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				a = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(r.a)(m.G),
				f = Object(r.a)(m.p),
				p = Object(r.a)(m.Q),
				O = (t, e, n) => async (r, c, O) => {
					let {
						apiContext: j
					} = O;
					a.m(c(), e);
					const h = e === d.i.MARKDOWN,
						C = e === d.i.RICH_TEXT,
						x = m.k;
					if (h && Object(l.G)(n)) return r(p({
						editorKey: t,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(y(e));
					if (C && !n) return r(p({
						editorKey: t,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void r(y(e));
					r(b(x));
					const I = await Object(i.a)(j(), e, h ? JSON.stringify(n) : n);
					I.ok ? (r(f(x)), r(p({
						editorKey: t,
						editorMode: e,
						content: I.body.output
					})), r(y(e))) : (r(f(x)), r(Object(s.f)({
						duration: s.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, y = t => async (e, n) => {
					const r = Object(c.l)();
					if (r >= 3) return;
					const i = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (t === i) return;
					const a = t === d.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					e(Object(s.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: a
					})), Object(c.rb)(r + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return i
			})), n.d(e, "b", (function() {
				return a
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(s.r),
				c = Object(o.a)(s.F),
				a = t => async (e, n, o) => {
					let {
						apiContext: s
					} = o;
					const a = await Object(r.a)(s(), t);
					a && a.ok ? e(i({
						streamId: t,
						level: a.body.data.auto_mute_status.level
					})) : e(c(t))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			}));
			var o, r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/chat/toggle.ts"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(t) {
				t.awardNotification = "AWARD_NOTIFICATION"
			}(o || (o = {}));
			const u = t => {
				let {
					onStartChat: e,
					text: n,
					className: r,
					sendEvent: i,
					contextId: c,
					priority: a,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					eventSource: f,
					onClick: p,
					onAddUserToQuickReplyList: O,
					children: y,
					style: j
				} = t;
				return s.a.createElement(d.t, {
					onClick: t => {
						if (p && p(t), e(), f === o.awardNotification) return O();
						i(Object(l.b)(c))
					},
					className: r,
					text: n,
					priority: a,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					style: j
				}, y)
			};
			u.displayName = "ChatButton";
			const m = Object(i.b)(null, (t, e) => {
				let {
					contextId: n,
					userId: o
				} = e;
				return {
					onStartChat: () => {
						t(Object(c.b)(o, n))
					},
					onAddUserToQuickReplyList: () => {
						t(Object(c.a)(o))
					}
				}
			});
			e.b = m(Object(a.c)(u))
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/ChatButton/index.tsx"),
				u = n("./src/reddit/constants/things.ts");
			const m = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/helpers/graphql/helpers.ts"),
				p = n("./src/reddit/helpers/trackers/inbox.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/models/NotificationInbox/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/selectors/experiments/inAppNotification.ts"),
				C = n("./src/reddit/components/NotificationUnit/index.m.less"),
				x = n.n(C);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = {
				kind: j.b.Error,
				text: I._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: d.a
			};
			e.default = t => {
				var e, n, o, j, C, _, R, E, g, N;
				const S = Object(s.d)(),
					A = Object(s.e)(h.d),
					{
						context: v,
						deeplinkUrl: k,
						isFullWidth: P,
						isUnread: w,
						isInAppNotification: D,
						isNightMode: M,
						notificationId: L,
						onEvent: F,
						isInboxCTAsV2All1Enabled: K,
						isInboxCTAsV2All2Enabled: U,
						isInboxCTAsV2ReplyPcEnabled: W,
						isInboxCTAsV2SeePostEnabled: B,
						isInboxCTAsV2ReplyEnabled: V
					} = t,
					H = null == v ? void 0 : v.messageType,
					J = H === y.a.CommentReply,
					G = H === y.a.SubredditRecommendation,
					q = H === y.a.LifecyclePostSuggestions,
					Y = null === (e = null == v ? void 0 : v.post) || void 0 === e ? void 0 : e.permalink;
				let Q = null === (n = null == v ? void 0 : v.comment) || void 0 === n ? void 0 : n.id,
					z = (null === (o = null == v ? void 0 : v.post) || void 0 === o ? void 0 : o.id) || (null === (C = null === (j = null == v ? void 0 : v.comment) || void 0 === j ? void 0 : j.postInfo) || void 0 === C ? void 0 : C.id);
				const X = null === (_ = null == v ? void 0 : v.subreddit) || void 0 === _ ? void 0 : _.id,
					$ = null === (E = null === (R = null == v ? void 0 : v.awarding) || void 0 === R ? void 0 : R.award) || void 0 === E ? void 0 : E.id,
					Z = null === (N = null === (g = null == v ? void 0 : v.awarding) || void 0 === g ? void 0 : g.awarder) || void 0 === N ? void 0 : N.id;
				if (H === y.a.CommentFollow || H === y.a.PostFollow) {
					const t = (t => {
						const e = {},
							{
								pathname: n
							} = new URL(t);
						if (!n) return e;
						const o = n.match(m);
						if (!o) return e;
						const [r, s, i, c] = o.slice(1);
						return s && "r" === r && (e.subredditName = s), i && (e.postId = `${u.b}${i}`), c && (e.commentId = `${u.a}${c}`), e
					})(k);
					z = t.postId, Q = t.commentId
				} else H !== y.a.PostReply && H !== y.a.LifecyclePostSuggestions || (Q = L);
				const tt = t => {
					if (z && Q) {
						const t = Object(c.a)(z, Q, Object(f.c)(k)),
							e = {
								parentCommentId: Q,
								commentsPageKey: t
							};
						S(Object(a.g)(e)), F({
							position: p.d.SECOND
						})
					} else t.preventDefault(), S(Object(d.f)(T))
				};
				return (() => {
					switch (H) {
						case y.a.HFNSubredditInterestingPost:
						case y.a.LifecyclePostSuggestions:
						case y.a.SubredditRecommendation: {
							const t = G,
								e = q;
							if (!K && !U && !B && !V && !t && !e && (!A || !D) || W) return null;
							const n = t => {
									Y || (V || K) && z ? ((V || K) && z && S(Object(a.h)({
										postId: z
									})), F({
										position: p.d.SECOND,
										postId: z,
										subredditId: X
									})) : (t.preventDefault(), S(Object(d.f)(T)))
								},
								o = V || K ? I._("Join the Conversation", null, {
									hk: "2hX2xb"
								}) : I._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return r.a.createElement(b.t, {
								kind: V ? b.b.InternalLink : void 0,
								to: k,
								onClick: n,
								isFullWidth: P,
								priority: b.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(x.a.notificationButton, {
									[x.a.isUnread]: w && !D,
									[x.a.isNightMode]: M,
									[x.a.inAppNotification]: D,
									[x.a.isFullWidth]: P && !D
								})
							}, !D && r.a.createElement(O.a, {
								name: "text_post",
								className: x.a.postIcon
							}), I._("{check out button}", [I._param("check out button", o)], {
								hk: "4DDMme"
							}))
						}
						case y.a.PostReply:
						case y.a.CommentReply:
						case y.a.PostFollow:
						case y.a.CommentFollow: {
							const t = J;
							return !(K || U || W || J || t || A && D) || V && !t ? null : r.a.createElement(b.t, {
								onClick: tt,
								kind: b.b.InternalLink,
								to: k,
								isFullWidth: P,
								priority: b.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(x.a.notificationButton, {
									[x.a.isUnread]: w && !D,
									[x.a.isNightMode]: M,
									[x.a.inAppNotification]: D,
									[x.a.isFullWidth]: P && !D
								})
							}, !D && r.a.createElement(O.a, {
								name: "reply",
								className: x.a.replyIcon
							}), I._("Reply Back", null, {
								hk: "3JWTvx"
							}))
						}
						case y.a.AwardReceived: {
							if (!Z) return null;
							const t = t => {
								t.preventDefault(), Z ? F({
									position: p.d.SECOND,
									awardId: $
								}) : S(Object(d.f)(T))
							};
							return r.a.createElement(l.b, {
								userId: Z,
								contextId: Z,
								onClick: t,
								isFullWidth: P,
								priority: b.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(i.a)(x.a.notificationButton, {
									[x.a.isUnread]: w && !D,
									[x.a.isNightMode]: M,
									[x.a.inAppNotification]: D,
									[x.a.isFullWidth]: P && !D
								})
							}, !D && r.a.createElement(O.a, {
								name: "chat_new",
								className: x.a.replyIcon
							}), I._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						case y.a.UpvotePost:
						case y.a.UpvoteComment:
						case y.a.UsernameMention:
						case y.a.PrivateMessage:
						case y.a.UserNewFollower:
						case y.a.ChatMessage:
						case y.a.CakeDay:
						case y.a.ChatRequest:
						case y.a.ChatAcceptInvite:
						case y.a.HFNSubredditInterestingPost:
						case y.a.OneOff:
						case y.a.ModeratedSrViralCommentPost:
						case y.a.TalkLive: {
							if (!D) return null;
							const t = t => {
								switch (t) {
									case y.a.HFNSubredditInterestingPost:
									case y.a.OneOff:
									case y.a.UpvotePost:
									case y.a.ModeratedSrViralCommentPost:
										return I._("See Post", null, {
											hk: "mGXS5"
										});
									case y.a.UpvoteComment:
										return I._("See Comment", null, {
											hk: "3FUtJF"
										});
									case y.a.ChatRequest:
									case y.a.ChatAcceptInvite:
										return I._("Start Chat", null, {
											hk: "iQZfe"
										});
									case y.a.ChatMessage:
										return I._("Open Chat", null, {
											hk: "2jV0mi"
										});
									case y.a.CakeDay:
									case y.a.UserNewFollower:
										return I._("See Profile", null, {
											hk: "2Wj94t"
										});
									case y.a.TalkLive:
										return I._("Join", null, {
											hk: "1PvPkd"
										});
									default:
										return I._("Reply", null, {
											hk: "zBpwB"
										})
								}
							};
							return r.a.createElement(b.t, {
								onClick: () => F({
									position: p.d.SECOND
								}),
								isFullWidth: P,
								priority: b.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(x.a.notificationButton, {
									[x.a.isNightMode]: M,
									[x.a.inAppNotification]: !0
								})
							}, t(H))
						}
						default:
							return A && D ? r.a.createElement(b.t, {
								onClick: () => F({
									position: p.d.SECOND
								}),
								isFullWidth: P,
								priority: b.c.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(x.a.notificationButton, {
									[x.a.isNightMode]: M,
									[x.a.inAppNotification]: !0
								})
							}, I._("See more", null, {
								hk: "3QLc3"
							})) : null
					}
				})()
			}
		},
		"./src/reddit/endpoints/post/convert.ts": function(t, e, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts");
			e.a = (t, e, n) => {
				const d = {
					output_mode: "markdown" === e ? e : "rtjson"
				};
				return e === a.i.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(r.a)(Object(s.a)(t, [i.a]), {
					endpoint: Object(c.a)(`${t.apiUrl}/api/convert_rte_body_format`),
					method: o.jb.POST,
					data: d
				})
			}
		},
		"./src/reddit/helpers/dom/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "g", (function() {
				return c
			})), n.d(e, "f", (function() {
				return a
			})), n.d(e, "d", (function() {
				return d
			})), n.d(e, "h", (function() {
				return l
			})), n.d(e, "c", (function() {
				return u
			})), n.d(e, "b", (function() {
				return m
			})), n.d(e, "e", (function() {
				return b
			})), n.d(e, "a", (function() {
				return f
			}));
			var o = n("./node_modules/lodash/map.js"),
				r = n.n(o),
				s = n("./src/lib/FocusTrap/index.ts");
			const i = t => "INPUT" === t.tagName.toUpperCase() || "TEXTAREA" === t.tagName.toUpperCase() || "DIV" === t.tagName.toUpperCase() && t.isContentEditable,
				c = t => {
					let e = t;
					do {
						if (i(e)) return !0
					} while (e = e.parentElement);
					return !1
				},
				a = () => {
					const t = document.getSelection();
					return !!t && (t.rangeCount > 0 && t.getRangeAt(0).toString().length > 0)
				},
				d = () => a() ? (() => {
					const t = document.getSelection();
					if (!t) return [];
					const e = t.getRangeAt(0).cloneContents().childNodes;
					return r()(e, t => t.textContent || "")
				})() : null,
				l = (t, e) => {
					const n = document.createRange();
					return n.selectNode(e), t.compareBoundaryPoints(Range.END_TO_START, n) < 0 && t.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = t => {
					const e = window.getSelection();
					if (1 !== e.rangeCount) return;
					const n = e.getRangeAt(0);
					if (!l(n, t)) return;
					const {
						startContainer: o,
						startOffset: r,
						endContainer: s,
						endOffset: i
					} = n, c = document.createRange();
					c.selectNode(t);
					let a = !0;
					if (-1 === c.compareBoundaryPoints(Range.START_TO_START, n) && (c.setStart(o, r), a = !1), 1 === c.compareBoundaryPoints(Range.END_TO_END, n) && (c.setEnd(s, i), a = !1), a) return [t];
					const d = document.createElement("div");
					return d.appendChild(c.cloneContents()), [...d.childNodes]
				},
				m = (t, e, n) => {
					let o = t;
					for (; o && (!n || !n(o));) {
						if (o && e(o)) return o;
						o = o.parentElement
					}
				},
				b = t => t && t.parentElement && m(t.parentElement, t => "static" !== window.getComputedStyle(t).getPropertyValue("position")),
				f = t => {
					t.querySelectorAll(s.a).forEach(t => {
						t.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			e.a = () => ({
				type: r.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: o.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return i
			}));
			var o = n("./src/lib/constants/index.ts");
			const r = t => {
					for (const e of t) {
						const t = e[0] || "";
						switch (t) {
							case o.I.NO_STRIPE_SUBSCRIPTION:
							case o.I.USER_DOESNT_EXIST:
							case o.I.USER_REQUIRED_ERROR:
							case o.I.VALIDATION_ERROR:
								return t;
							case o.I.NO_USER:
							case o.I.NO_TEXT:
							case o.I.NO_URL:
								return o.I.VALIDATION_ERROR;
							case o.I.CREDIT_CARD_FAILURE:
							case o.I.CREDIT_CARD_FAILURE_GENERIC:
								return o.I.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return o.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.I.VALIDATION_ERROR
				},
				s = t => {
					const e = t.body;
					return {
						type: r(e.json.errors),
						fields: e.json.errors.map(t => ({
							field: t[2] || "",
							msg: t[1]
						}))
					}
				},
				i = t => {
					const e = t.body;
					return !t.ok && e && e.json && e.json.errors ? {
						...t,
						error: s(t)
					} : t
				};
			e.a = s
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return u
			})), n.d(e, "h", (function() {
				return m
			})), n.d(e, "b", (function() {
				return b
			})), n.d(e, "e", (function() {
				return f
			})), n.d(e, "a", (function() {
				return p
			})), n.d(e, "c", (function() {
				return O
			})), n.d(e, "d", (function() {
				return y
			})), n.d(e, "g", (function() {
				return j
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = t => {
					const e = Object(c.o)(t);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(a.o)(t),
						screen: Object(a.Z)(t),
						subreddit: Object(a.hb)(t),
						post: e ? Object(a.I)(t, e) : null,
						profile: Object(a.R)(t),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				u = async (t, e, o, r) => {
					const s = {
							commentId: r,
							commentsPageKey: o
						},
						c = r && Object(i.j)(t, s) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...l(t),
						comment: r ? Object(a.i)(t, r) : null,
						listing: Object(a.z)(t, void 0, {
							depth: c
						}),
						commentComposer: {
							editorMode: e
						},
						userFlair: u(t)
					})
				}, m = (t, e, n, o) => {
					const r = l(t);
					return Object(d.a)({
						...r,
						actionInfo: {
							...r.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: e,
							parentId: o,
							postId: n
						}
					})
				}, b = t => Object(d.a)({
					noun: "cancel",
					...l(t)
				}), f = (t, e) => {
					e === s.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(t)
					})
				}, p = (t, e) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(a.o)(e),
					screen: Object(a.Z)(e),
					subreddit: Object(a.hb)(e),
					post: Object(a.I)(e, t)
				}), O = t => Object(d.a)({
					noun: "edit",
					...l(t)
				}), y = t => Object(d.a)({
					noun: "save_edit",
					...l(t)
				}), j = (t, e) => n => {
					const o = "image_upload" === t || "video_upload" === t;
					return {
						...l(n),
						noun: o ? t : "text_option",
						commentComposer: {
							textType: t,
							finalStatus: e ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "d", (function() {
				return a
			}));
			var o, r, s, i, c = n("./src/reddit/models/FeedElement/index.ts");

			function a(t) {
				return t.__typename === c.a.InboxNotificationCollection
			}! function(t) {
				t.AwardReceived = "AWARD_RECEIVED", t.CakeDay = "CAKE_DAY", t.ChatMessage = "CHAT_MESSAGE", t.ChatRequest = "CHAT_REQUEST", t.ChatAcceptInvite = "CHAT_ACCEPT_INVITE", t.CommentFollow = "COMMENT_FOLLOW", t.CommentReply = "COMMENT_REPLY", t.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", t.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", t.ModeratedSrViralCommentPost = "MODERATED_SR_VIRAL_COMMENT_POST", t.OneOff = "ONE_OFF", t.PostFollow = "POST_FOLLOW", t.PostReply = "POST_REPLY", t.PrivateMessage = "PRIVATE_MESSAGE", t.RedditLore = "REDDIT_LORE", t.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", t.TalkLive = "TALK_LIVE", t.ThreadReplies = "THREAD_REPLIES", t.TopLevelComment = "TOP_LEVEL_COMMENT", t.UpvoteComment = "UPVOTE_COMMENT", t.UpvotePost = "UPVOTE_POST", t.UsernameMention = "USERNAME_MENTION", t.UserNewFollower = "USER_NEW_FOLLOWER"
			}(o || (o = {})),
			function(t) {
				t.Award = "AWARD", t.Bell = "BELL", t.Chat = "CHAT", t.Comment = "COMMENT", t.Heart = "HEART", t.Live = "LIVE", t.Lore = "LORE", t.NotifyAll = "NOTIFY_ALL", t.Redditor = "REDDITOR", t.Reply = "REPLY", t.SortLive = "SORT_LIVE", t.SortRising = "SORT_RISING", t.SortTop = "SORT_TOP", t.Trophy = "TROPHY", t.Upvote = "UPVOTE"
			}(r || (r = {})),
			function(t) {
				t.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", t.ContentTakedown = " CONTENT_TAKEDOWN", t.Author = "AUTHOR", t.Moderator = "MODERATOR", t.CommunityOps = "COMMUNITY_OPS", t.AntiEvilOps = "ANTI_EVIL_OPS", t.Reddit = "REDDIT", t.Deleted = "DELETED", t.AutomodFiltered = "AUTOMOD_FILTERED"
			}(s || (s = {})),
			function(t) {
				t.InboxNotification = "InboxNotification", t.InboxNotificationContext = "InboxNotificationContext", t.NotificationIcon = "NotificationIcon", t.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", t.BasicInboxNotificationContext = "BasicInboxNotificationContext", t.CommentInboxNotificationContext = "CommentInboxNotificationContext", t.PostInboxNotificationContext = "PostInboxNotificationContext", t.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", t.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
			}(i || (i = {}))
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(t) {
			t.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(t) {
			t.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.9656a650eaebed1b4ea2.js.map