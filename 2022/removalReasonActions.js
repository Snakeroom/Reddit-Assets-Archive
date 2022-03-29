// https://www.redditstatic.com/desktop2x/removalReasonActions.f17fa66d728340024543.js
// Retrieved at 3/29/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./node_modules/lodash/map.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayMap.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/_baseMap.js"),
				c = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (c(e) ? o : r)(e, s(t, 3))
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(o.a)(s.c),
				c = Object(o.a)(s.b),
				a = Object(o.a)(s.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ee
			})), n.d(t, "p", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return oe
			})), n.d(t, "r", (function() {
				return ce
			})), n.d(t, "u", (function() {
				return ae
			})), n.d(t, "o", (function() {
				return ie
			})), n.d(t, "t", (function() {
				return me
			})), n.d(t, "m", (function() {
				return le
			})), n.d(t, "h", (function() {
				return be
			})), n.d(t, "a", (function() {
				return Oe
			})), n.d(t, "b", (function() {
				return je
			})), n.d(t, "q", (function() {
				return Re
			})), n.d(t, "f", (function() {
				return ye
			})), n.d(t, "g", (function() {
				return _e
			})), n.d(t, "k", (function() {
				return Se
			})), n.d(t, "d", (function() {
				return Ee
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "j", (function() {
				return Ie
			})), n.d(t, "i", (function() {
				return Ne
			})), n.d(t, "l", (function() {
				return De
			})), n.d(t, "s", (function() {
				return Pe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/login.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postCreation/editorContent.ts"),
				u = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				O = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				p = n("./src/reddit/constants/adEvents.ts"),
				j = n("./src/reddit/constants/localStorage.ts"),
				R = n("./src/redditGQL/operations/CommentToxicity.json"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				_ = n("./src/lib/makeGqlRequest/index.ts"),
				S = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = n("./src/reddit/helpers/genericServerError/index.ts"),
				x = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				A = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				v = n("./src/reddit/models/PostCreationForm/index.ts"),
				I = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				k = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const C = (e, t, n, o) => {
					let s, r;
					if (o === v.i.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(_.a)(e, {
						...R,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				T = async (e, t, n, o, r) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === v.i.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(Object(S.a)(e, [h.a]), {
						method: s.jb.POST,
						endpoint: Object(E.a)(Object(I.a)(Object(k.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(A.a)(e)
					} : {
						...e,
						body: {
							comment: Object(x.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(x.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(g.a)()
					})
				};
			var N = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var D = n("./src/reddit/endpoints/post/index.tsx"),
				P = n("./src/reddit/endpoints/post/convert.ts"),
				M = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				w = n("./src/reddit/helpers/correlationIdTracker.ts"),
				K = n("./src/reddit/helpers/dom/index.ts"),
				F = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				V = n("./src/reddit/models/Comment/index.ts"),
				B = n("./src/reddit/models/PostDraft/index.ts"),
				G = n("./src/reddit/models/RichTextJson/index.ts"),
				J = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				q = n("./src/reddit/models/Toast/index.ts"),
				$ = n("./src/reddit/selectors/comments.ts"),
				W = n("./src/reddit/selectors/commentSelector.ts"),
				z = n("./src/reddit/selectors/platform.ts"),
				H = n("./src/reddit/selectors/posts.ts"),
				Q = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/actions/comment/index.ts"),
				Y = n("./src/reddit/actions/comment/constants.ts");
			const Z = Object(r.a)(Y.k),
				ee = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, o) => {
						const s = o();
						if (!!s.features.comments.drafts[n])
							if (Object(Q.R)(s) && t) {
								const o = Z({
									hasFocus: t,
									draftKey: n
								});
								e(Object(a.f)(o))
							} else e(Z({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				te = Object(r.a)(Y.I),
				ne = Object(r.a)(Y.K),
				oe = Object(r.a)(Y.J),
				se = Object(r.a)(Y.H),
				re = async (e, t, n, o) => {
					const s = o.ok && o.body,
						r = s && s.comment && s.comment.id;
					await U.f(e, n, t, r)
				}, ce = "Toxicity_Warning__Modal", ae = (e, t, n, o, s, r) => async (c, a, d) => {
					let {
						gqlContext: m
					} = d;
					const l = a(),
						u = Object(z.e)(l);
					let b = "";
					if (u && (b = u.name), L.d.enableToxicityWarning(l)) {
						if (!(await C(m(), b, o, s))) return void c(Object(i.i)(ce))
					}
					c(ie(e, t, n, o, s, r))
				}, de = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ie = (e, t, n, r, c, a, d) => async (l, f, j) => {
					let {
						apiContext: R
					} = j;
					l(Object(i.g)(ce));
					const y = f(),
						_ = y.features.comments.submit.pending[n];
					if (!y.user.account || _) return;
					l(te({
						draftKey: n,
						draft: r
					}));
					const S = y.user.account.displayText,
						h = r.commentMode;
					let E;
					if (d ? (E = await Object(M.i)(R(), e, r, S), l(Object(u.a)({
							streamId: e,
							level: E.body.automuteLevel
						}))) : E = await T(R(), e, r, S, h), E.ok) {
						let o;
						o = E.body, l(ne({
							...o,
							headCommentId: Object($.w)(y, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const s = Object(H.G)(f(), {
							postId: e
						});
						l(Object(m.z)(s, p.a.CommentSubmitted))
					} else {
						E.error && E.error.type === s.Kb && U.h(y, de(r), e);
						const t = E.error && E.error.fields && E.error.fields[0] ? E.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						l(se({
							draftKey: n,
							error: E.error
						})), l(Object(O.f)({
							duration: O.a,
							kind: q.b.Error,
							text: t
						}))
					}
					re(f(), t, c, E).then(() => E.ok && c === v.i.RICH_TEXT ? Object(w.b)(w.a.CommentComposer) : void 0), a || Object(b.d)()
				}, me = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const {
						parentCommentId: r,
						commentsPageKey: c,
						parentCommentDepth: a,
						draftKey: d,
						formData: m,
						editorMode: l
					} = e, u = n(), b = Object(z.e)(u);
					let O = "";
					if (b && (O = b.name), L.d.enableToxicityWarning(u)) {
						if (!(await C(s(), O, m, l))) return void t(Object(i.i)(ce))
					}
					t(le({
						commentsPageKey: c,
						draftKey: d,
						parentCommentDepth: a,
						parentCommentId: r,
						formData: m,
						editorMode: l
					}))
				}, le = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const {
						parentCommentId: c,
						commentsPageKey: a,
						parentCommentDepth: d,
						draftKey: m,
						formData: l,
						editorMode: u
					} = e;
					t(Object(i.g)(ce));
					const O = n(),
						f = O.features.comments.submit.pending[m];
					if (!O.user.account || f) return;
					t(te({
						draftKey: m,
						draft: l
					}));
					const p = O.user.account.displayText,
						j = l.commentMode,
						R = await T(r(), c, l, p, j);
					if (R.ok) t(oe({
						...R.body,
						parentCommentId: c,
						commentsPageKey: a,
						draftKey: m,
						depth: d + 1
					}));
					else {
						if (R.error && R.error.type === s.Kb) {
							const e = Object(W.b)(O, {
								commentId: c
							});
							if (!e) return;
							U.h(O, de(l), e.postId, c)
						}
						t(se({
							draftKey: m,
							error: R.error
						}))
					}
					re(n(), a, u, R), Object(b.d)()
				}, ue = Object(r.a)(Y.q), be = Object(r.a)(Y.y), Oe = Object(r.a)(Y.p), fe = Object(r.a)(Y.l), pe = (Object(r.a)(Y.g), Object(r.a)(Y.m)), je = (Object(r.a)(Y.t), (e, t, n) => async (s, r, c) => {
					let {
						apiContext: a
					} = c;
					const d = e === v.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(G.G)(t)) s(pe({
						editorMode: e,
						draftKey: n,
						content: d ? G.i : ""
					})), s(Object(l.c)(e));
					else {
						s(Object(l.b)(n));
						const r = await Object(P.a)(a(), e, d ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(l.a)(n)), s(pe({
								editorMode: e,
								draftKey: n,
								content: t
							})), s(Object(l.c)(e))
						} else s(Object(l.a)(n)), s(Object(O.f)({
							duration: O.a,
							kind: q.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Re = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: o
					} = e;
					return async (e, s) => {
						const r = s(),
							m = Object(c.a)(B.c.replyToComment, n);
						if (!Object(Q.P)(s())) return e(Object(d.j)()), void e(Object(i.k)({
							actionSource: i.a.Reply,
							redirectUrl: Object($.m)(s(), {
								commentId: n
							})
						}));
						const l = r.features.comments.replyFormOpen[t],
							u = l && l[n];
						if ((u || l && o) && (Object.keys(l).forEach(n => l[n] && e(Oe({
								parentCommentId: n,
								commentsPageKey: t
							}))), u)) return;
						let b = "",
							O = null;
						const f = r.user.prefs.commentMode,
							p = Object(K.d)();
						if (p) {
							const e = p.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (f === v.i.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => J.s(e, null)).map(e => J.l([e])),
									n = J.s("", null),
									o = J.l([n]);
								O = {
									document: [J.c(t), o]
								}
							}
						}
						const j = r.features.comments.drafts[m];
						let R;
						if (R = p ? {
								commentMode: f,
								draftType: B.c.replyToComment,
								rtJson: O,
								text: `${b}\n`
							} : j || {
								commentMode: f,
								draftType: B.c.replyToComment,
								rtJson: O,
								text: ""
							}, Object(Q.R)(r)) {
							const o = ue({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: m,
								formData: R
							});
							e(Object(a.f)(o))
						} else e(ue({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: m,
							formData: R
						}))
					}
				}, ye = e => async t => {
					t(Object(X.p)(e)), t(Ee(e))
				}, _e = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Oe({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Re({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(X.p)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Se = (e, t) => n => n(fe({
					draftKey: e,
					formData: t
				})), he = Object(r.a)(Y.s), Ee = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: o,
						draftKey: s,
						text: r
					} = e;
					return async (e, c) => {
						const a = c();
						a.user.account && (U.c(a), e(he({
							commentId: t,
							commentsPageKey: o,
							draftKey: s,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: B.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, ge = Object(r.a)(Y.D), xe = Object(r.a)(Y.C), Ae = Object(r.a)(Y.E), ve = Object(r.a)(Y.h), Ie = e => {
					let {
						id: t,
						commentsPageKey: n,
						depth: o,
						draftKey: r,
						formData: c
					} = e;
					return async (e, o, a) => {
						let {
							apiContext: d
						} = a;
						const i = o();
						if (!i.user.account) return;
						e(ge({
							draftKey: r
						})), U.d(i);
						const m = i.user.account.displayText || "",
							l = c.commentMode,
							u = await (async (e, t, n, o, r, c) => {
								const a = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								if (c === v.i.MARKDOWN) a.text = o.text;
								else {
									a.text = null;
									let e = null;
									o.rteState && (e = f.a.toRichTextJSON(o.rteState).document), a.richtext_json = JSON.stringify({
										document: e
									})
								}
								return Object(y.a)(Object(S.a)(e, [h.a]), {
									endpoint: Object(E.a)(Object(k.a)(Object(I.a)(`${e.apiUrl}/api/editusertext`))),
									method: s.jb.POST,
									data: a
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(A.a)(e)
								} : {
									...e,
									body: {
										comment: Object(x.a)(e.body.json.data.things[0].data, r)
									}
								} : {
									...e,
									body: {
										comment: Object(x.a)(e.body, r)
									}
								} : {
									...e,
									error: e.error || Object(g.a)()
								})
							})(d(), t, 0, c, m, l);
						if (u.ok) {
							const o = u.body;
							e(Ae({
								commentId: t,
								commentsPageKey: n,
								draftKey: r
							})), e(Object(X.i)({
								[t]: {
									...o.comment
								}
							}))
						} else e(xe({
							draftKey: r,
							error: u.error
						}))
					}
				}, ke = Object(r.a)(Y.A), Ce = Object(r.a)(Y.z), Te = Object(r.a)(Y.B), Ne = (e, t) => async (n, o, r) => {
					let {
						apiContext: c
					} = r;
					const a = o();
					n(ke({
						id: e
					})), U.a(e, a);
					const d = await ((e, t) => Object(y.a)(Object(S.a)(e, [h.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/del`),
						method: s.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(A.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(g.a)()
					}))(c(), e);
					d.ok ? n(Te({
						id: e,
						postId: t
					})) : n(Ce({
						id: e,
						error: d.error
					}))
				}, De = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(X.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(D.q)(s(), e, r)).ok || t(Object(X.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Pe = (e, t) => async (n, s, r) => {
					let {
						gqlContext: c
					} = r;
					var a, d, i, m, l, u;
					n(Object(X.c)());
					const b = e => Object(O.f)(Object(O.e)(e, q.b.Error));
					if (((null === (d = null === (a = s().pages) || void 0 === a ? void 0 : a.comments) || void 0 === d ? void 0 : d.followed) || []).length === j.a) n(b(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === V.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(X.n)(a)), (await ((e, t) => Object(_.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(c(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(F.vb)(null !== (l = null === (m = null === (i = s().pages) || void 0 === i ? void 0 : i.comments) || void 0 === m ? void 0 : m.followed) && void 0 !== l ? l : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = r ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(O.f)({
								kind: q.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(X.n)(a)), n(b(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return S
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "b", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/endpoints/comment/index.tsx"),
				u = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = n("./src/reddit/models/Reportable/index.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/actions/comment/index.ts"),
				y = n("./src/reddit/actions/comment/constants.ts");
			const _ = Object(r.a)(y.n),
				S = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					n().features.comments.models[e] && (await Object(l.j)(s(), e)).ok && t((e => async t => {
						t(_({
							commentId: e
						}))
					})(e))
				}, h = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					if (!Object(j.P)(n())) return void t(Object(a.i)(m.a.LOGIN_MODAL_ID));
					const c = n().features.comments.models[e];
					if (!c) return;
					const d = c.isLocked ? l.l : l.e;
					t(Object(R.i)({
						[e]: {
							isLocked: !c.isLocked
						}
					})), (await d(r(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: c.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(R.i)({
						[e]: {
							isLocked: c.isLocked
						}
					}))
				}, E = Object(r.a)(y.G), g = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const c = n(),
						a = c.features.comments.models[e],
						m = c.user.account ? c.user.account.displayText : null;
					a && m && (t(Object(R.i)({
						[e]: {
							isApproved: !0,
							approvedBy: m,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(l.a)(r(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(R.i)({
						[e]: {
							isApproved: a.isApproved,
							approvedBy: null,
							bannedBy: a.bannedBy,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam,
							modNote: a.modNote,
							modReasonBy: a.modReasonBy,
							modRemovalReason: a.modRemovalReason,
							numReports: a.numReports || null
						}
					})), Object(d.d)())
				}, x = (e, t) => async (n, s, r) => {
					let {
						apiContext: c
					} = r;
					const a = s(),
						m = a.features.comments.models[e],
						u = a.user.account ? a.user.account.displayText : null;
					m && u && (n(Object(R.i)({
						[e]: {
							approvedBy: null,
							bannedBy: u,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(l.h)(c(), e, t)).ok ? n(Object(i.f)({
						kind: O.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(R.i)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam
						}
					})), Object(d.d)())
				}, A = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const c = n().features.comments.models[e];
					if (!c) return;
					const a = c.ignoreReports ? l.k : l.d;
					t(Object(R.i)({
						[e]: {
							ignoreReports: !c.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: c.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(R.i)({
						[e]: {
							ignoreReports: c.ignoreReports
						}
					}))
				}, v = (e, t, n) => async (r, c, a) => {
					let {
						gqlContext: d
					} = a;
					const m = Object(f.b)(c(), {
						commentId: e
					});
					if (!m) return;
					const l = n === s.dc.Snoozed,
						p = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(d(), {
							input: p
						})).ok) r(Object(R.i)({
						[e]: {
							userReports: Object(b.a)(m.userReports, t, l)
						}
					}));
					else {
						const e = Object(i.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), O.b.Error);
						r(Object(i.f)(e))
					}
				}, I = (e, t, n) => async (o, r, a) => {
					let {
						apiContext: d,
						gqlContext: i
					} = a;
					const m = r(),
						u = m.features.comments.models[e];
					if (!u) return;
					const b = u.postId,
						O = m.postStickiedComments.data[b],
						f = s.g[t];
					let j;
					if (o(Object(R.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === s.G.ADMIN,
								isMod: t === s.G.MODERATOR,
								isStickied: !!n
							}
						})), n && O && O !== e && o(Object(R.i)({
							[O]: {
								isStickied: !1
							}
						})), Object(p.a)(r())) {
						const o = Object(l.b)(i(), e, t),
							s = Object(l.c)(i(), e, !!n),
							r = [o];
						(n || !n && e === O) && r.push(s), j = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else j = await Object(l.g)(d(), e, f, n || null);
					j.ok ? n && o(E({
						id: e,
						postId: b,
						commentsPageKey: Object(c.a)(b, null, {
							sort: s.u.CONFIDENCE,
							...m.platform.currentPage.queryParams
						})
					})) : (o(Object(R.i)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), o(Object(R.i)({
						[O]: {
							isStickied: m.features.comments.models[O].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/post/convert.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/helpers/trackers/postComposer.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(s.a)(u.G),
				O = Object(s.a)(u.p),
				f = Object(s.a)(u.Q),
				p = (e, t, n) => async (s, a, p) => {
					let {
						apiContext: R
					} = p;
					d.m(a(), t);
					const y = t === i.i.MARKDOWN,
						_ = t === i.i.RICH_TEXT,
						S = u.k;
					if (y && Object(m.G)(n)) return s(f({
						editorKey: e,
						editorMode: i.i.MARKDOWN,
						content: ""
					})), void s(j(t));
					if (_ && !n) return s(f({
						editorKey: e,
						editorMode: i.i.RICH_TEXT,
						content: m.i
					})), void s(j(t));
					s(b(S));
					const h = await Object(c.a)(R(), t, y ? JSON.stringify(n) : n);
					h.ok ? (s(O(S)), s(f({
						editorKey: e,
						editorMode: t,
						content: h.body.output
					})), s(j(t))) : (s(O(S)), s(Object(r.f)({
						duration: r.a,
						kind: l.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = e => async (t, n) => {
					const s = Object(a.l)();
					if (s >= 3) return;
					const c = n().user.prefs.useMarkdown ? i.i.MARKDOWN : i.i.RICH_TEXT;
					if (e === c) return;
					const d = e === i.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: l.b.SuccessCommunity,
						text: d
					})), Object(a.rb)(s + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(o.a)(r.r),
				a = Object(o.a)(r.F),
				d = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const d = await Object(s.a)(r(), e);
					d && d.ok ? t(c({
						streamId: e,
						level: d.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return Y
			})), n.d(t, "removalReasonsLoaded", (function() {
				return Z
			})), n.d(t, "removalReasonsFailed", (function() {
				return ee
			})), n.d(t, "removalReasonsRequested", (function() {
				return te
			})), n.d(t, "removalReasonAddedPending", (function() {
				return ne
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return se
			})), n.d(t, "addRemovalReason", (function() {
				return re
			})), n.d(t, "editRemovalReasonPending", (function() {
				return ce
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), n.d(t, "editRemovalReason", (function() {
				return ie
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return me
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), n.d(t, "deleteRemovalReason", (function() {
				return be
			})), n.d(t, "removedItemsSelected", (function() {
				return Oe
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return pe
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return je
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return Re
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ye
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return _e
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Se
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return he
			})), n.d(t, "submitRemovalReason", (function() {
				return Ee
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return ge
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
			const c = "REMOVALREASONS__LOAD_SUCCESS",
				a = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				i = "REMOVALREASONS__ADD_FAILED",
				m = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				b = "REMOVALREASONS__DELETE_PENDING",
				O = "REMOVALREASONS__DELETE_SUCCESS",
				f = "REMOVALREASONS__DELETE_FAILED";
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case c:
					case a:
					case d:
					case m:
					case l:
					case b:
					case O:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case i:
					case u:
					case f:
						return t.payload;
					default:
						return e
				}
			};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case a:
						case m:
						case b:
							return !0;
						case c:
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case i:
						case l:
						case u:
						case O:
						case f:
							return !1;
						default:
							return e
					}
				},
				R = Object(r.c)({
					error: p,
					pending: j
				});
			const y = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c: {
						const {
							response: n
						} = t.payload, {
							data: o
						} = n;
						return {
							...e,
							...o
						}
					}
					case d:
					case l: {
						const {
							reason: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case O: {
						const {
							reasonId: n
						} = t.payload, {
							[n]: o,
							...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const S = {};
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c: {
						const {
							subredditId: n,
							response: o
						} = t.payload, {
							order: s
						} = o;
						return {
							...e,
							[n]: s
						}
					}
					case d: {
						const {
							subredditId: n,
							reason: o
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], o.id]
						}
					}
					case O: {
						const {
							subredditId: n,
							reasonId: o
						} = t.payload, s = [...e[n]].filter(e => e !== o);
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			var E = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: n
							} = t.payload;
							return {
								itemIds: n,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				g = Object(r.c)({
					api: R,
					models: _,
					reasonOrder: h,
					removedItemIds: E
				}),
				x = n("./src/lib/constants/index.ts"),
				A = n("./src/lib/makeActionCreator/index.ts"),
				v = n("./src/lib/makeCommentsPageKey/index.ts"),
				I = n("./src/lib/makeDraftKey/index.ts"),
				k = n("./src/reddit/actions/bulkActions/index.ts"),
				C = n("./src/reddit/actions/comment/index.ts"),
				T = n("./src/reddit/actions/comment/authoring.ts"),
				N = n("./src/reddit/actions/comment/moderation.ts"),
				D = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/post.ts"),
				M = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/constants/modals.ts"),
				w = n("./src/lib/makeApiRequest/index.ts"),
				K = n("./src/lib/omitHeaders/index.ts"),
				F = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(w.a)(Object(K.a)(e, [F.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: x.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				B = (e, t, n) => Object(w.a)(Object(K.a)(e, [F.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: x.jb.POST,
					type: "json",
					data: t
				});
			var G = n("./src/reddit/helpers/isPost.ts"),
				J = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = n("./src/reddit/helpers/routeKey/index.ts"),
				$ = n("./src/reddit/models/ModQueue/index.ts"),
				W = n("./src/reddit/models/PostDraft/index.ts"),
				z = n("./src/reddit/models/RemovalReason/index.ts"),
				H = n("./src/reddit/models/Toast/index.ts"),
				Q = n("./src/reddit/selectors/comments.ts"),
				X = n("./src/reddit/selectors/platform.ts");
			Object(s.a)({
				features: {
					removalReasons: g
				}
			});
			const Y = Object(A.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(A.a)(c),
				ee = Object(A.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const r = n().subreddits.models[e].name;
					t(Y());
					const c = await ((e, t) => Object(w.a)(Object(K.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: x.jb.GET
					}))(s(), r);
					c.ok ? t(Z({
						subredditId: e,
						response: c.body
					})) : t(ee(c.error))
				}, ne = Object(A.a)(a), oe = Object(A.a)(d), se = Object(A.a)(i), re = (e, t) => async (n, s, r) => {
					let {
						apiContext: c
					} = r;
					const a = s().subreddits.models[e].name;
					n(ne());
					const d = await ((e, t, n) => Object(w.a)(Object(K.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: x.jb.POST,
						data: n
					}))(c(), a, t);
					if (d.ok) {
						const {
							id: s
						} = d.body, r = {
							...t,
							id: s
						};
						n(oe({
							subredditId: e,
							reason: r
						})), n(Object(M.f)({
							kind: H.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(d.error))
				}, ce = Object(A.a)(m), ae = Object(A.a)(l), de = Object(A.a)(u), ie = (e, t) => async (n, s, r) => {
					let {
						apiContext: c
					} = r;
					const a = s().subreddits.models[e].name;
					n(ce());
					const d = await ((e, t, n) => Object(w.a)(Object(K.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: x.jb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(c(), a, t);
					d.ok ? (n(ae({
						subredditId: e,
						reason: t
					})), n(Object(M.f)({
						kind: H.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, me = Object(A.a)(b), le = Object(A.a)(O), ue = Object(A.a)(f), be = (e, t) => async (n, s, r) => {
					let {
						apiContext: c
					} = r;
					const a = s().subreddits.models[e].name;
					n(me());
					const d = await ((e, t, n) => Object(w.a)(Object(K.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: x.jb.DELETE
					}))(c(), a, t);
					d.ok ? (n(le({
						subredditId: e,
						reasonId: t
					})), n(Object(M.f)({
						kind: H.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(d.error))
				}, Oe = Object(A.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (n, o, s) => {
					let {
						apiContext: r
					} = s;
					const c = o();
					c.features.removalReasons.reasonOrder[e] && c.features.removalReasons.reasonOrder[e].length > 0 || n(te(e)), n(Oe({
						subredditId: e,
						itemIds: t
					})), n(Object(D.i)(L.a.ADD_REMOVAL_REASON))
				}, pe = Object(A.a)("REMOVALREASONS__SUBMIT_PENDING"), je = Object(A.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Re = Object(A.a)("REMOVALREASONS__SUBMIT_FAILED"), ye = Object(A.a)("REMOVALREASONS__MESSAGE_PENDING"), _e = Object(A.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Se = Object(A.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), he = Object(A.a)("REMOVALREASONS__MESSAGE_FAILED"), Ee = (e, t, n, o, s) => async (r, c, a) => {
					let {
						apiContext: d
					} = a;
					const i = c(),
						m = i.user.account && i.user.account.displayText,
						l = e[0],
						u = Object(G.a)(l) ? z.e.Post : z.e.Comment,
						b = u === z.e.Post ? i.posts.models[l] : i.features.comments.models[l],
						O = u === z.e.Post ? P.S : C.i;
					if (!b || !m) return !1;
					r(pe()), r(O({
						[l]: {
							modNote: s,
							modRemovalReason: t && t.title,
							modReasonBy: m
						}
					}));
					const f = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						p = await V(d(), f);
					if (p.ok) {
						if (r(je()), t) {
							r(ye());
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								c = await B(d(), Object(z.h)(s, u), u);
							if (c.ok) {
								if (o === z.f.Public) {
									if (r(Se()), c.body) {
										const e = Object(J.a)(c.body, m),
											t = {
												comment: e,
												parentId: l
											},
											n = Object(X.f)(i),
											o = i.platform.currentPage && i.platform.currentPage.routeMatch;
										let s = n && o && Object(q.a)(o, i, i.posts.models[e.postId]);
										if (s || (s = Object(v.a)(e.postId, null, {
												sort: x.v,
												hasSortParam: !0
											})), u === z.e.Post) {
											const n = Object(I.a)(W.c.replyToPost, l);
											r(Object(T.p)({
												...t,
												headCommentId: Object(Q.w)(i, {
													commentsPageKey: s
												}),
												commentsPageKey: s,
												draftKey: n
											}));
											const o = i.postStickiedComments.data[l];
											r(Object(N.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: s
											})), o && o !== e.id && r(Object(C.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (u === z.e.Comment) {
											const e = Object(I.a)(W.c.replyToComment, b.id),
												n = Object(Q.j)(i, {
													commentId: l,
													commentsPageKey: s
												});
											r(Object(T.n)({
												...t,
												parentCommentId: l,
												commentsPageKey: s,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else r(_e());
								return !0
							}
							return r(he(c.error)), !1
						}
					} else r(Re(p.error)), r(O({
						[l]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, ge = (e, t, n, s, r) => async (c, a, d) => {
					let {
						apiContext: i
					} = d;
					const m = a(),
						l = m.user.account && m.user.account.displayText;
					if (!l) return;
					c(pe());
					const u = Object(M.f)({
							kind: H.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						b = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						O = await V(i(), b);
					if (O.ok) {
						const o = {
							ids: e,
							operation: $.a.RemovalReason,
							username: l,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (c(Object(k.b)(o)), t) {
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								r = await B(i(), Object(z.h)(o, z.e.Bulk), z.e.Bulk);
							r.ok ? (c(_e()), c(u)) : c(he(r.error))
						} else c(u)
					} else c(Re(O.error))
				}
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const i = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === d.i.MARKDOWN ? i.richtext_json = n : i.markdown_text = n, Object(s.a)(Object(r.a)(e, [c.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.jb.POST,
					data: i
				})
			}
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return O
			}));
			var o = n("./node_modules/lodash/map.js"),
				s = n.n(o),
				r = n("./src/lib/FocusTrap/index.ts");
			const c = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				a = e => {
					let t = e;
					do {
						if (c(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				d = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				i = () => d() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return s()(t, e => e.textContent || "")
				})() : null,
				m = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				l = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!m(n, e)) return;
					const {
						startContainer: o,
						startOffset: s,
						endContainer: r,
						endOffset: c
					} = n, a = document.createRange();
					a.selectNode(e);
					let d = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, n) && (a.setStart(o, s), d = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, n) && (a.setEnd(r, c), d = !1), d) return [e];
					const i = document.createElement("div");
					return i.appendChild(a.cloneContents()), [...i.childNodes]
				},
				u = (e, t, n) => {
					let o = e;
					for (; o && (!n || !n(o));) {
						if (o && t(o)) return o;
						o = o.parentElement
					}
				},
				b = e => e && e.parentElement && u(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				O = e => {
					e.querySelectorAll(r.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: o.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var o = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case o.I.NO_STRIPE_SUBSCRIPTION:
							case o.I.USER_DOESNT_EXIST:
							case o.I.USER_REQUIRED_ERROR:
							case o.I.VALIDATION_ERROR:
								return e;
							case o.I.NO_USER:
							case o.I.NO_TEXT:
							case o.I.NO_URL:
								return o.I.VALIDATION_ERROR;
							case o.I.CREDIT_CARD_FAILURE:
							case o.I.CREDIT_CARD_FAILURE_GENERIC:
								return o.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.I.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				c = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "g", (function() {
				return R
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts");
			const m = e => {
					const t = Object(a.o)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(d.o)(e),
						screen: Object(d.Z)(e),
						subreddit: Object(d.hb)(e),
						post: t ? Object(d.I)(e, t) : null,
						profile: Object(d.R)(e),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				l = async (e, t, o, s) => {
					const r = {
							commentId: s,
							commentsPageKey: o
						},
						a = s && Object(c.j)(e, r) || 0,
						{
							getFlairData: l
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(i.a)({
						noun: "comment",
						...m(e),
						comment: s ? Object(d.i)(e, s) : null,
						listing: Object(d.z)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: l(e)
					})
				}, u = (e, t, n, o) => {
					const s = m(e);
					return Object(i.a)({
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: o,
							postId: n
						}
					})
				}, b = e => Object(i.a)({
					noun: "cancel",
					...m(e)
				}), O = (e, t) => {
					t === r.c.replyToPost && Object(i.a)({
						noun: "input",
						...m(e)
					})
				}, f = (e, t) => Object(i.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.o)(t),
					screen: Object(d.Z)(t),
					subreddit: Object(d.hb)(t),
					post: Object(d.I)(t, e)
				}), p = e => Object(i.a)({
					noun: "edit",
					...m(e)
				}), j = e => Object(i.a)({
					noun: "save_edit",
					...m(e)
				}), R = (e, t) => n => {
					const o = "image_upload" === e || "video_upload" === e;
					return {
						...m(n),
						noun: o ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "h", (function() {
				return l
			}));
			var o = n("./src/reddit/helpers/isPost.ts");
			const s = 50,
				r = 50,
				c = 1e4,
				a = 100;
			var d, i;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(i || (i = {}));
			const m = e => 1 === e.length ? Object(o.a)(e[0]) ? i.Post : i.Comment : i.Bulk,
				l = (e, t) => {
					return {
						[t === i.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.f17fa66d728340024543.js.map