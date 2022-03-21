// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.203043cc88b965c6d474.js
// Retrieved at 3/21/2022, 12:30:04 PM by Reddit Dataminer v1.0.0
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
			})), n.d(e, "o", (function() {
				return nt
			})), n.d(e, "m", (function() {
				return ot
			})), n.d(e, "q", (function() {
				return it
			})), n.d(e, "t", (function() {
				return ct
			})), n.d(e, "n", (function() {
				return at
			})), n.d(e, "s", (function() {
				return lt
			})), n.d(e, "l", (function() {
				return ut
			})), n.d(e, "a", (function() {
				return bt
			})), n.d(e, "b", (function() {
				return pt
			})), n.d(e, "p", (function() {
				return jt
			})), n.d(e, "f", (function() {
				return yt
			})), n.d(e, "g", (function() {
				return xt
			})), n.d(e, "j", (function() {
				return It
			})), n.d(e, "d", (function() {
				return ht
			})), n.d(e, "c", (function() {
				return Et
			})), n.d(e, "i", (function() {
				return gt
			})), n.d(e, "h", (function() {
				return At
			})), n.d(e, "k", (function() {
				return kt
			})), n.d(e, "r", (function() {
				return Dt
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				c = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				p = n("./src/reddit/constants/adEvents.ts"),
				j = n("./src/reddit/constants/localStorage.ts"),
				y = n("./src/redditGQL/operations/CommentToxicity.json"),
				x = n("./src/lib/makeApiRequest/index.ts"),
				I = n("./src/lib/makeGqlRequest/index.ts"),
				C = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				R = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = n("./src/reddit/helpers/genericServerError/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				S = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				N = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (t, e, n, o) => {
					let r, s;
					if (o === g.i.MARKDOWN) r = n.text, s = null;
					else {
						r = null;
						let t = null;
						n.rteState && (t = O.a.toRichTextJSON(n.rteState).document), s = JSON.stringify({
							document: t
						})
					}
					return Object(I.a)(t, {
						...y,
						variables: {
							subredditName: e,
							markdown: r,
							richText: s
						}
					}).then(t => !t.ok || t.body.data.isValidComment)
				},
				A = async (t, e, n, o, s) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: e
					};
					if (s === g.i.MARKDOWN) i.text = n.text;
					else {
						i.text = null;
						let t = null;
						n.rteState && (t = O.a.toRichTextJSON(n.rteState).document), i.richtext_json = JSON.stringify({
							document: t
						})
					}
					return Object(x.a)(Object(C.a)(t, [h.a]), {
						method: r.jb.POST,
						endpoint: Object(R.a)(Object(S.a)(Object(N.a)(`${t.apiUrl}/api/comment.json`))),
						data: i
					}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
						...t,
						ok: !1,
						error: Object(E.a)(t)
					} : {
						...t,
						body: {
							comment: Object(_.a)(t.body.json.data.things[0].data, o)
						}
					} : {
						...t,
						body: {
							comment: Object(_.a)(t.body, o)
						}
					} : {
						...t,
						error: t.error || Object(T.a)()
					})
				};
			var k = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var D = n("./src/reddit/endpoints/post/index.tsx"),
				P = n("./src/reddit/endpoints/post/convert.ts"),
				w = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				K = n("./src/reddit/featureFlags/index.ts"),
				M = n("./src/reddit/helpers/correlationIdTracker.ts"),
				L = n("./src/reddit/helpers/dom/index.ts"),
				U = n("./src/reddit/helpers/localStorage/index.ts"),
				F = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				W = n("./src/reddit/models/Comment/index.ts"),
				B = n("./src/reddit/models/PostDraft/index.ts"),
				J = n("./src/reddit/models/RichTextJson/index.ts"),
				H = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				G = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				q = n("./src/reddit/selectors/commentSelector.ts"),
				Y = n("./src/reddit/selectors/platform.ts"),
				Q = n("./src/reddit/selectors/posts.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/actions/comment/index.ts"),
				$ = n("./src/reddit/actions/comment/constants.ts");
			const Z = Object(s.a)($.k),
				tt = ({
					hasFocus: t,
					draftKey: e
				}) => async (n, o) => {
					const r = o();
					if (!!r.features.comments.drafts[e])
						if (Object(z.Q)(r) && t) {
							const o = Z({
								hasFocus: t,
								draftKey: e
							});
							n(Object(c.f)(o))
						} else n(Z({
							hasFocus: t,
							draftKey: e
						}))
				}, et = Object(s.a)($.H), nt = Object(s.a)($.J), ot = Object(s.a)($.I), rt = Object(s.a)($.G), st = async (t, e, n, o) => {
					const r = o.ok && o.body,
						s = r && r.comment && r.comment.id;
					await F.f(t, n, e, s)
				}, it = "Toxicity_Warning__Modal", ct = (t, e, n, o, r, s) => async (i, c, {
					gqlContext: d
				}) => {
					const l = c(),
						u = Object(Y.e)(l);
					let m = "";
					if (u && (m = u.name), K.d.enableToxicityWarning(l)) {
						if (!(await v(d(), m, o, r))) return void i(Object(a.i)(it))
					}
					i(at(t, e, n, o, r, s))
				}, dt = t => t.rteState ? O.a.toRichTextJSON(t.rteState) : t.rtJson || t.text, at = (t, e, n, s, i, c, d) => async (u, O, {
					apiContext: j
				}) => {
					u(Object(a.g)(it));
					const y = O(),
						x = y.features.comments.submit.pending[n];
					if (!y.user.account || x) return;
					u(et({
						draftKey: n,
						draft: s
					}));
					const I = y.user.account.displayText,
						C = s.commentMode;
					let h;
					if (d ? (h = await Object(w.i)(j(), t, s, I), u(Object(m.a)({
							streamId: t,
							level: h.body.automuteLevel
						}))) : h = await A(j(), t, s, I, C), h.ok) {
						let o;
						o = h.body, u(nt({
							...o,
							headCommentId: Object(V.w)(y, {
								commentsPageKey: e
							}),
							commentsPageKey: e,
							draftKey: n
						}));
						const r = Object(Q.G)(O(), {
							postId: t
						});
						u(Object(l.z)(r, p.a.CommentSubmitted))
					} else {
						h.error && h.error.type === r.Kb && F.h(y, dt(s), t);
						const e = h.error && h.error.fields && h.error.fields[0] ? h.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(rt({
							draftKey: n,
							error: h.error
						})), u(Object(f.f)({
							duration: f.a,
							kind: G.b.Error,
							text: e
						}))
					}
					st(O(), e, i, h).then(() => h.ok && i === g.i.RICH_TEXT ? Object(M.b)(M.a.CommentComposer) : void 0), c || Object(b.d)()
				}, lt = t => async (e, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: s,
						parentCommentDepth: i,
						draftKey: c,
						formData: d,
						editorMode: l
					} = t, u = n(), m = Object(Y.e)(u);
					let b = "";
					if (m && (b = m.name), K.d.enableToxicityWarning(u)) {
						if (!(await v(o(), b, d, l))) return void e(Object(a.i)(it))
					}
					e(ut({
						commentsPageKey: s,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: d,
						editorMode: l
					}))
				}, ut = t => async (e, n, {
					apiContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: d,
						formData: l,
						editorMode: u
					} = t;
					e(Object(a.g)(it));
					const m = n(),
						f = m.features.comments.submit.pending[d];
					if (!m.user.account || f) return;
					e(et({
						draftKey: d,
						draft: l
					}));
					const O = m.user.account.displayText,
						p = l.commentMode,
						j = await A(o(), s, l, O, p);
					if (j.ok) e(ot({
						...j.body,
						parentCommentId: s,
						commentsPageKey: i,
						draftKey: d,
						depth: c + 1
					}));
					else {
						if (j.error && j.error.type === r.Kb) {
							const t = Object(q.b)(m, {
								commentId: s
							});
							if (!t) return;
							F.h(m, dt(l), t.postId, s)
						}
						e(rt({
							draftKey: d,
							error: j.error
						}))
					}
					st(n(), i, u, j), Object(b.d)()
				}, mt = Object(s.a)($.q), bt = Object(s.a)($.p), ft = Object(s.a)($.l), Ot = (Object(s.a)($.g), Object(s.a)($.m)), pt = (Object(s.a)($.t), (t, e, n) => async (r, s, {
					apiContext: i
				}) => {
					const c = t === g.i.RICH_TEXT;
					if (!e || "object" == typeof e && Object(J.G)(e)) r(Ot({
						editorMode: t,
						draftKey: n,
						content: c ? J.i : ""
					})), r(Object(u.c)(t));
					else {
						r(Object(u.b)(n));
						const s = await Object(P.a)(i(), t, c ? e : JSON.stringify(e));
						if (s.ok) {
							const e = s.body.output;
							r(Object(u.a)(n)), r(Ot({
								editorMode: t,
								draftKey: n,
								content: e
							})), r(Object(u.c)(t))
						} else r(Object(u.a)(n)), r(Object(f.f)({
							duration: f.a,
							kind: G.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), jt = ({
					commentsPageKey: t,
					parentCommentId: e,
					singleOpen: n
				}) => async (o, r) => {
					const s = r(),
						l = Object(i.a)(B.c.replyToComment, e);
					if (!Object(z.O)(r())) return o(Object(d.j)()), void o(Object(a.k)({
						actionSource: a.a.Reply,
						redirectUrl: Object(V.m)(r(), {
							commentId: e
						})
					}));
					const u = s.features.comments.replyFormOpen[t],
						m = u && u[e];
					if ((m || u && n) && (Object.keys(u).forEach(e => u[e] && o(bt({
							parentCommentId: e,
							commentsPageKey: t
						}))), m)) return;
					let b = "",
						f = null;
					const O = s.user.prefs.commentMode,
						p = Object(L.d)();
					if (p) {
						const t = p.filter(t => !!t && 10 !== t.charCodeAt(0));
						if (O === g.i.MARKDOWN) b = t.map(t => `> ${t}\n`).join("");
						else {
							const e = t.map(t => H.s(t, null)).map(t => H.l([t])),
								n = H.s("", null),
								o = H.l([n]);
							f = {
								document: [H.c(e), o]
							}
						}
					}
					const j = s.features.comments.drafts[l];
					let y;
					if (y = p ? {
							commentMode: O,
							draftType: B.c.replyToComment,
							rtJson: f,
							text: `${b}\n`
						} : j || {
							commentMode: O,
							draftType: B.c.replyToComment,
							rtJson: f,
							text: ""
						}, Object(z.Q)(s)) {
						const n = mt({
							parentCommentId: e,
							commentsPageKey: t,
							draftKey: l,
							formData: y
						});
						o(Object(c.f)(n))
					} else o(mt({
						parentCommentId: e,
						commentsPageKey: t,
						draftKey: l,
						formData: y
					}))
				}, yt = t => async e => {
					e(Object(X.p)(t)), e(ht(t))
				}, xt = ({
					parentCommentId: t,
					commentsPageKey: e
				}) => async n => {
					n(bt({
						parentCommentId: t,
						commentsPageKey: e
					})), n(jt({
						parentCommentId: t,
						commentsPageKey: e
					})), n(Object(X.p)({
						commentId: t,
						commentsPageKey: e
					}))
				}, It = (t, e) => n => n(ft({
					draftKey: t,
					formData: e
				})), Ct = Object(s.a)($.s), ht = ({
					commentId: t,
					commentMode: e,
					commentsPageKey: n,
					draftKey: o,
					text: r
				}) => async (s, i) => {
					const c = i();
					c.user.account && (F.c(c), s(Ct({
						commentId: t,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: r,
							commentMode: e,
							rteState: null,
							draftType: B.c.edit,
							hasFocus: !0
						}
					})))
				}, Rt = Object(s.a)($.C), Tt = Object(s.a)($.B), _t = Object(s.a)($.D), Et = Object(s.a)($.h), gt = ({
					id: t,
					commentsPageKey: e,
					depth: n,
					draftKey: o,
					formData: s
				}) => async (n, i, {
					apiContext: c
				}) => {
					const d = i();
					if (!d.user.account) return;
					n(Rt({
						draftKey: o
					})), F.d(d);
					const a = d.user.account.displayText || "",
						l = s.commentMode,
						u = await (async (t, e, n, o, s, i) => {
							const c = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: e
							};
							if (i === g.i.MARKDOWN) c.text = o.text;
							else {
								c.text = null;
								let t = null;
								o.rteState && (t = O.a.toRichTextJSON(o.rteState).document), c.richtext_json = JSON.stringify({
									document: t
								})
							}
							return Object(x.a)(Object(C.a)(t, [h.a]), {
								endpoint: Object(R.a)(Object(N.a)(Object(S.a)(`${t.apiUrl}/api/editusertext`))),
								method: r.jb.POST,
								data: c
							}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
								...t,
								ok: !1,
								error: Object(E.a)(t)
							} : {
								...t,
								body: {
									comment: Object(_.a)(t.body.json.data.things[0].data, s)
								}
							} : {
								...t,
								body: {
									comment: Object(_.a)(t.body, s)
								}
							} : {
								...t,
								error: t.error || Object(T.a)()
							})
						})(c(), t, 0, s, a, l);
					if (u.ok) {
						const r = u.body;
						n(_t({
							commentId: t,
							commentsPageKey: e,
							draftKey: o
						})), n(Object(X.i)({
							[t]: {
								...r.comment
							}
						}))
					} else n(Tt({
						draftKey: o,
						error: u.error
					}))
				}, St = Object(s.a)($.z), Nt = Object(s.a)($.y), vt = Object(s.a)($.A), At = (t, e) => async (n, o, {
					apiContext: s
				}) => {
					const i = o();
					n(St({
						id: t
					})), F.a(t, i);
					const c = await ((t, e) => Object(x.a)(Object(C.a)(t, [h.a]), {
						endpoint: Object(R.a)(`${t.apiUrl}/api/del`),
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
						error: t.error || Object(T.a)()
					}))(s(), t);
					c.ok ? n(vt({
						id: t,
						postId: e
					})) : n(Nt({
						id: t,
						error: c.error
					}))
				}, kt = t => async (e, n, {
					apiContext: o
				}) => {
					const r = !n().features.comments.models[t].sendReplies;
					e(Object(X.i)({
						[t]: {
							sendReplies: r
						}
					})), (await Object(D.q)(o(), t, r)).ok || e(Object(X.i)({
						[t]: {
							sendReplies: !r
						}
					}))
				}, Dt = (t, e) => async (n, r, {
					gqlContext: s
				}) => {
					var i, c, d, a, l, u;
					n(Object(X.c)());
					const m = t => Object(f.f)(Object(f.e)(t, G.b.Error));
					if (((null === (c = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === j.a) n(m(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const i = e === W.a.FOLLOWED,
							c = {
								id: t,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(X.n)(c)), (await ((t, e) => Object(I.a)(t, {
								...k,
								variables: {
									input: e
								}
							}))(s(), {
								commentId: t,
								followState: e
							})).ok) {
							Object(U.xb)(null !== (l = null === (a = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === a ? void 0 : a.followed) && void 0 !== l ? l : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const t = i ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(f.f)({
								kind: G.b.SuccessCommunityGreen,
								text: t
							}))
						} else n(Object(X.n)(c)), n(m(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
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
				return p
			})), n.d(e, "c", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/helpers/trackers/postComposer.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(r.a)(m.G),
				f = Object(r.a)(m.p),
				O = Object(r.a)(m.Q),
				p = (t, e, n) => async (r, c, {
					apiContext: p
				}) => {
					d.m(c(), e);
					const y = e === a.i.MARKDOWN,
						x = e === a.i.RICH_TEXT,
						I = m.k;
					if (y && Object(l.G)(n)) return r(O({
						editorKey: t,
						editorMode: a.i.MARKDOWN,
						content: ""
					})), void r(j(e));
					if (x && !n) return r(O({
						editorKey: t,
						editorMode: a.i.RICH_TEXT,
						content: l.i
					})), void r(j(e));
					r(b(I));
					const C = await Object(i.a)(p(), e, y ? JSON.stringify(n) : n);
					C.ok ? (r(f(I)), r(O({
						editorKey: t,
						editorMode: e,
						content: C.body.output
					})), r(j(e))) : (r(f(I)), r(Object(s.f)({
						duration: s.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = t => async (e, n) => {
					const r = Object(c.l)();
					if (r >= 3) return;
					const i = n().user.prefs.useMarkdown ? a.i.MARKDOWN : a.i.RICH_TEXT;
					if (t === i) return;
					const d = t === a.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
						text: d
					})), Object(c.tb)(r + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return i
			})), n.d(e, "b", (function() {
				return d
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(s.r),
				c = Object(o.a)(s.F),
				d = t => async (e, n, {
					apiContext: o
				}) => {
					const s = await Object(r.a)(o(), t);
					s && s.ok ? e(i({
						streamId: t,
						level: s.body.data.auto_mute_status.level
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
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(t) {
				t.awardNotification = "AWARD_NOTIFICATION"
			}(o || (o = {}));
			const u = ({
				onStartChat: t,
				text: e,
				className: n,
				sendEvent: r,
				contextId: i,
				priority: c,
				Icon: d,
				redditStyle: u,
				isFullWidth: m,
				eventSource: b,
				onClick: f,
				onAddUserToQuickReplyList: O,
				children: p,
				style: j
			}) => {
				return s.a.createElement(a.t, {
					onClick: e => {
						if (f && f(e), t(), b === o.awardNotification) return O();
						r(Object(l.b)(i))
					},
					className: n,
					text: e,
					priority: c,
					Icon: d,
					redditStyle: u,
					isFullWidth: m,
					style: j
				}, p)
			};
			u.displayName = "ChatButton";
			const m = Object(i.b)(null, (t, {
				contextId: e,
				userId: n
			}) => ({
				onStartChat: () => {
					t(Object(c.b)(n, e))
				},
				onAddUserToQuickReplyList: () => {
					t(Object(c.a)(n))
				}
			}));
			e.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/comment/authoring.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/components/ChatButton/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/graphql/helpers.ts"),
				f = n("./src/reddit/helpers/trackers/inbox.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/models/NotificationInbox/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/components/NotificationUnit/index.m.less"),
				x = n.n(y);
			const I = {
				kind: j.b.Error,
				text: o.fbt._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: l.a
			};
			e.default = t => {
				var e, n, r, j, y, C, h, R, T, _;
				const E = Object(i.d)(),
					{
						context: g,
						deeplinkUrl: S,
						isFullWidth: N,
						isUnread: v,
						isInboxCTAsAllEnabled: A,
						isInboxCTAsReplyEnabled: k,
						isInboxCTAsSeePostEnabled: D,
						isNightMode: P,
						notificationId: w,
						onEvent: K
					} = t,
					M = null == g ? void 0 : g.messageType,
					L = null === (e = null == g ? void 0 : g.post) || void 0 === e ? void 0 : e.permalink,
					U = M === p.a.PostReply ? w : null === (n = null == g ? void 0 : g.comment) || void 0 === n ? void 0 : n.id,
					F = (null === (r = null == g ? void 0 : g.post) || void 0 === r ? void 0 : r.id) || (null === (y = null === (j = null == g ? void 0 : g.comment) || void 0 === j ? void 0 : j.postInfo) || void 0 === y ? void 0 : y.id),
					W = null === (C = null == g ? void 0 : g.subreddit) || void 0 === C ? void 0 : C.id,
					B = null === (R = null === (h = null == g ? void 0 : g.awarding) || void 0 === h ? void 0 : h.award) || void 0 === R ? void 0 : R.id,
					J = null === (_ = null === (T = null == g ? void 0 : g.awarding) || void 0 === T ? void 0 : T.awarder) || void 0 === _ ? void 0 : _.id;
				return (() => {
					switch (M) {
						case p.a.LifecyclePostSuggestions:
						case p.a.SubredditRecommendation: {
							if (!D && !A) return null;
							const t = t => {
								L ? K({
									position: f.d.SECOND,
									postId: F,
									subredditId: W
								}) : (t.preventDefault(), E(Object(l.f)(I)))
							};
							return s.a.createElement(m.t, {
								onClick: t,
								isFullWidth: N,
								priority: m.c.Tertiary,
								redditStyle: !0,
								className: Object(c.a)(x.a.notificationButton, {
									[x.a.isUnread]: v,
									[x.a.isNightMode]: P
								})
							}, s.a.createElement(O.a, {
								name: "text_post",
								className: x.a.postIcon
							}), o.fbt._("See Post", null, {
								hk: "mGXS5"
							}))
						}
						case p.a.PostReply:
						case p.a.CommentReply: {
							if (!k && !A) return null;
							const t = t => {
								if (F && U) {
									const t = Object(d.a)(F, U, Object(b.c)(S)),
										e = {
											parentCommentId: U,
											commentsPageKey: t
										};
									E(Object(a.g)(e)), K({
										position: f.d.SECOND
									})
								} else t.preventDefault(), E(Object(l.f)(I))
							};
							return s.a.createElement(m.t, {
								onClick: t,
								isFullWidth: N,
								priority: m.c.Tertiary,
								redditStyle: !0,
								className: Object(c.a)(x.a.notificationButton, {
									[x.a.isUnread]: v,
									[x.a.isNightMode]: P
								})
							}, s.a.createElement(O.a, {
								name: "reply",
								className: x.a.replyIcon
							}), o.fbt._("Reply", null, {
								hk: "zBpwB"
							}))
						}
						case p.a.AwardReceived: {
							if (!J) return null;
							const t = t => {
								t.preventDefault(), J ? K({
									position: f.d.SECOND,
									awardId: B
								}) : E(Object(l.f)(I))
							};
							return s.a.createElement(u.b, {
								userId: J,
								contextId: J,
								onClick: t,
								isFullWidth: N,
								priority: m.c.Tertiary,
								redditStyle: !0,
								eventSource: u.a.awardNotification,
								className: Object(c.a)(x.a.notificationButton, {
									[x.a.isUnread]: v,
									[x.a.isNightMode]: P
								})
							}, s.a.createElement(O.a, {
								name: "chat_new",
								className: x.a.replyIcon
							}), o.fbt._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						default:
							return null
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
				d = n("./src/reddit/models/PostCreationForm/index.ts");
			e.a = (t, e, n) => {
				const a = {
					output_mode: "markdown" === e ? e : "rtjson"
				};
				return e === d.i.MARKDOWN ? a.richtext_json = n : a.markdown_text = n, Object(r.a)(Object(s.a)(t, [i.a]), {
					endpoint: Object(c.a)(`${t.apiUrl}/api/convert_rte_body_format`),
					method: o.jb.POST,
					data: a
				})
			}
		},
		"./src/reddit/helpers/dom/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "g", (function() {
				return c
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "d", (function() {
				return a
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
				d = () => {
					const t = document.getSelection();
					return !!t && (t.rangeCount > 0 && t.getRangeAt(0).toString().length > 0)
				},
				a = () => d() ? (() => {
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
					let d = !0;
					if (-1 === c.compareBoundaryPoints(Range.START_TO_START, n) && (c.setStart(o, r), d = !1), 1 === c.compareBoundaryPoints(Range.END_TO_END, n) && (c.setEnd(s, i), d = !1), d) return [t];
					const a = document.createElement("div");
					return a.appendChild(c.cloneContents()), [...a.childNodes]
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
				return O
			})), n.d(e, "c", (function() {
				return p
			})), n.d(e, "d", (function() {
				return j
			})), n.d(e, "g", (function() {
				return y
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");
			const l = t => {
					const e = Object(c.o)(t);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(d.o)(t),
						screen: Object(d.ab)(t),
						subreddit: Object(d.ib)(t),
						post: e ? Object(d.I)(t, e) : null,
						profile: Object(d.R)(t),
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
					return Object(a.a)({
						noun: "comment",
						...l(t),
						comment: r ? Object(d.i)(t, r) : null,
						listing: Object(d.z)(t, void 0, {
							depth: c
						}),
						commentComposer: {
							editorMode: e
						},
						userFlair: u(t)
					})
				}, m = (t, e, n, o) => {
					const r = l(t);
					return Object(a.a)({
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
				}, b = t => Object(a.a)({
					noun: "cancel",
					...l(t)
				}), f = (t, e) => {
					e === s.c.replyToPost && Object(a.a)({
						noun: "input",
						...l(t)
					})
				}, O = (t, e) => Object(a.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.o)(e),
					screen: Object(d.ab)(e),
					subreddit: Object(d.ib)(e),
					post: Object(d.I)(e, t)
				}), p = t => Object(a.a)({
					noun: "edit",
					...l(t)
				}), j = t => Object(a.a)({
					noun: "save_edit",
					...l(t)
				}), y = (t, e) => n => {
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
			var o, r, s, i;
			n.d(e, "a", (function() {
					return o
				})), n.d(e, "b", (function() {
					return r
				})), n.d(e, "c", (function() {
					return s
				})),
				function(t) {
					t.AwardReceived = "AWARD_RECEIVED", t.CakeDay = "CAKE_DAY", t.ChatMessage = "CHAT_MESSAGE", t.CommentFollow = "COMMENT_FOLLOW", t.CommentReply = "COMMENT_REPLY", t.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", t.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", t.PostFollow = "POST_FOLLOW", t.PostReply = "POST_REPLY", t.PrivateMessage = "PRIVATE_MESSAGE", t.RedditLore = "REDDIT_LORE", t.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", t.ThreadReplies = "THREAD_REPLIES", t.TopLevelComment = "TOP_LEVEL_COMMENT", t.UpvoteComment = "UPVOTE_COMMENT", t.UpvotePost = "UPVOTE_POST", t.UsernameMention = "USERNAME_MENTION", t.UserNewFollower = "USER_NEW_FOLLOWER"
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.203043cc88b965c6d474.js.map