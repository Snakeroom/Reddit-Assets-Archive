// https://www.redditstatic.com/desktop2x/removalReasonActions.57699c09fcba532616b2.js
// Retrieved at 5/11/2022, 11:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./src/lib/scroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/domUtils/index.ts"),
				s = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/components/CommentSort/index.tsx"),
				i = n("./src/reddit/constants/elementIds.ts");
			const c = () => {
					s.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(o.c)(e, 0) : Object(o.c)(document, 0)
					})
				},
				a = e => {
					s.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
							n = document.getElementById(r.a);
						if (t && n) {
							const o = e ? n.offsetTop : n.offsetTop - 50;
							s.a.write(() => t.scrollTo({
								top: o,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(o.a)(s.c),
				i = Object(o.a)(s.b),
				c = Object(o.a)(s.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return me
			})), n.d(t, "q", (function() {
				return pe
			})), n.d(t, "o", (function() {
				return be
			})), n.d(t, "s", (function() {
				return he
			})), n.d(t, "v", (function() {
				return ge
			})), n.d(t, "p", (function() {
				return _e
			})), n.d(t, "u", (function() {
				return ye
			})), n.d(t, "n", (function() {
				return Ce
			})), n.d(t, "m", (function() {
				return ve
			})), n.d(t, "h", (function() {
				return ke
			})), n.d(t, "a", (function() {
				return Ie
			})), n.d(t, "b", (function() {
				return Ae
			})), n.d(t, "r", (function() {
				return Ne
			})), n.d(t, "f", (function() {
				return Me
			})), n.d(t, "g", (function() {
				return De
			})), n.d(t, "k", (function() {
				return Pe
			})), n.d(t, "d", (function() {
				return Ke
			})), n.d(t, "c", (function() {
				return Ge
			})), n.d(t, "j", (function() {
				return Ve
			})), n.d(t, "i", (function() {
				return We
			})), n.d(t, "l", (function() {
				return ze
			})), n.d(t, "t", (function() {
				return Xe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				c = n("./src/lib/scroll/index.ts"),
				a = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/onboarding/index.ts"),
				u = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCreation/editorContent.ts"),
				b = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				O = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				g = n("./src/reddit/constants/adEvents.ts"),
				j = n("./src/reddit/constants/localStorage.ts"),
				S = n("./src/redditGQL/operations/CommentToxicity.json"),
				_ = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				y = n("./src/lib/omitHeaders/index.ts"),
				C = n("./src/reddit/constants/headers.ts"),
				R = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/helpers/genericServerError/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				I = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				A = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				N = n("./src/redditGQL/operations/CreateComment.json");
			const M = (e, t, n, o) => {
					let s, r;
					if (o === I.i.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...S,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				D = async (e, t, n, o, r, i) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return r === I.i.MARKDOWN ? c.text = n.text : (c.text = null, c.richtext_json = i), Object(_.a)(Object(y.a)(e, [C.a]), {
						method: s.jb.POST,
						endpoint: Object(R.a)(Object(T.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {
							comment: Object(E.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(E.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(v.a)()
					})
				}, P = async (e, t, n, o, r, i) => {
					const c = r === I.i.MARKDOWN,
						a = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: c ? o.text : null,
								richText: c ? null : i
							}
						};
					return Object(x.a)(e, {
						...N,
						variables: {
							input: a
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							return (null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0 ? {
								...e,
								ok: !1,
								error: {
									type: s.I.VALIDATION_ERROR,
									fields: t.fieldErrors.map(e => ({
										field: e.field,
										msg: e.message
									}))
								}
							} : (null == t ? void 0 : t.errors) && t.errors.length > 0 ? {
								...e,
								ok: !1,
								error: {
									type: s.I.SERVER_ERROR,
									fields: t.errors.map(e => ({
										field: "",
										msg: e.message
									}))
								}
							} : {
								...e,
								body: {
									comment: Object(A.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							error: e.error || Object(v.a)()
						}
					})
				};
			var L = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var K = n("./src/reddit/endpoints/post/index.tsx"),
				U = n("./src/reddit/endpoints/post/convert.ts"),
				B = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				F = n("./src/reddit/featureFlags/index.ts"),
				G = n("./src/reddit/helpers/correlationIdTracker.ts"),
				V = n("./src/reddit/helpers/dom/index.ts"),
				H = n("./src/reddit/helpers/localStorage/index.ts"),
				q = n("./src/reddit/helpers/sessionStorage/index.ts"),
				J = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				W = n("./src/reddit/models/Comment/index.ts"),
				z = n("./src/reddit/models/PostDraft/index.ts"),
				X = n("./src/reddit/models/RichTextJson/index.ts"),
				Q = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				$ = n("./src/reddit/models/Toast/index.ts"),
				Y = n("./src/reddit/selectors/comments.ts"),
				Z = n("./src/reddit/selectors/commentSelector.ts"),
				ee = n("./src/reddit/constants/experiments.ts"),
				te = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = n("./node_modules/reselect/es/index.js");
			const oe = Object(ne.a)(e => Object(te.c)(e, {
				experimentEligibilitySelector: te.a,
				experimentName: ee.Bb
			}), e => e === ee.rd);
			var se = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				re = n("./src/reddit/selectors/platform.ts"),
				ie = n("./src/reddit/selectors/posts.ts"),
				ce = n("./src/reddit/selectors/user.ts"),
				ae = n("./src/reddit/actions/comment/index.ts"),
				de = n("./src/reddit/actions/comment/constants.ts");
			const le = Object(r.a)(de.k),
				me = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, o) => {
						const s = o();
						if (!!s.features.comments.drafts[n])
							if (Object(ce.R)(s) && t) {
								const o = le({
									hasFocus: t,
									draftKey: n
								});
								e(Object(a.f)(o))
							} else e(le({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				ue = Object(r.a)(de.I),
				pe = Object(r.a)(de.K),
				be = Object(r.a)(de.J),
				Oe = Object(r.a)(de.H),
				fe = async (e, t, n, o) => {
					const s = o.ok && o.body,
						r = s && s.comment && s.comment.id;
					await J.f(e, n, t, r)
				}, he = "Toxicity_Warning__Modal", ge = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const r = n(),
						i = Object(re.e)(r);
					let c = "";
					i && (c = i.name);
					const {
						formData: a,
						editorMode: d
					} = e;
					if (F.d.enableToxicityWarning(r)) {
						if (!(await M(s(), c, a, d))) return void t(Object(l.i)(he))
					}
					t(_e(e))
				}, je = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, Se = e => {
					let t = null;
					return e.rteState && (t = h.a.toRichTextJSON(e.rteState).document), JSON.stringify({
						document: t
					})
				}, _e = e => async (t, n) => {
					t(Object(l.g)(he));
					const o = n(),
						s = Object(se.a)(o),
						r = Object(se.c)(o);
					if (!o.user.account && s) {
						const n = Se(e.formData),
							o = je(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.j)()), Object(q.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(xe(e, !1))
				}, xe = (e, t, n, r) => {
					let {
						postId: i,
						commentsPageKey: a,
						draftKey: d,
						formData: l,
						editorMode: m,
						disableAutofocus: p,
						isLiveStreaming: h
					} = e;
					return async (e, j, S) => {
						let {
							apiContext: _,
							gqlContext: x
						} = S;
						const y = j(),
							C = y.features.comments.submit.pending[d];
						if (!y.user.account || C) return;
						t || e(ue({
							draftKey: d,
							draft: l
						}));
						const R = y.user.account.displayText,
							v = l.commentMode;
						let E;
						if (h) E = await Object(B.i)(_(), i, l, R), e(Object(b.a)({
							streamId: i,
							level: E.body.automuteLevel
						}));
						else {
							const e = t && n ? n : Se(l);
							E = v === I.i.MARKDOWN && oe(y) ? await P(x(), i, null, l, v, e) : await D(_(), i, l, R, v, e)
						}
						if (E.ok) {
							let n;
							if (n = E.body, e(pe({
									...n,
									headCommentId: Object(Y.w)(y, {
										commentsPageKey: a
									}),
									commentsPageKey: a,
									draftKey: d
								})), t) {
								const e = Object(re.i)(y);
								Object(c.a)(!!e)
							}
							const o = Object(ie.G)(j(), {
								postId: i
							});
							e(Object(u.z)(o, g.a.CommentSubmitted))
						} else {
							if (E.error && E.error.type === s.Kb) {
								const e = t && r ? r : je(l);
								J.j(y, e, i)
							}
							const n = E.error && E.error.fields && E.error.fields[0] ? E.error.fields[0].msg : o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(Oe({
								draftKey: d,
								error: E.error
							})), e(Object(f.f)({
								duration: f.a,
								kind: $.b.Error,
								text: n
							}))
						}
						fe(j(), a, m, E).then(() => E.ok && m === I.i.RICH_TEXT ? Object(G.b)(G.a.CommentComposer) : void 0), p || Object(O.d)(), t && Object(q.a)()
					}
				}, ye = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: a,
						formData: d,
						editorMode: m
					} = e, u = n(), p = Object(re.e)(u);
					let b = "";
					if (p && (b = p.name), F.d.enableToxicityWarning(u)) {
						if (!(await M(s(), b, d, m))) return void t(Object(l.i)(he))
					}
					t(Ce({
						commentsPageKey: i,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: d,
						editorMode: m
					}))
				}, Ce = e => async (t, n) => {
					t(Object(l.g)(he));
					const o = n(),
						s = Object(se.a)(o),
						r = Object(se.c)(o);
					if (!o.user.account && s) {
						const n = Se(e.formData),
							o = je(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.j)()), Object(q.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Re(e, !1))
				}, Re = (e, t, n, o) => async (r, i, a) => {
					let {
						apiContext: d,
						gqlContext: l
					} = a;
					const {
						parentCommentId: m,
						commentsPageKey: u,
						parentCommentDepth: p,
						draftKey: b,
						formData: f,
						editorMode: h
					} = e, g = i(), j = g.features.comments.submit.pending[b];
					if (!g.user.account || j) return;
					t || r(ue({
						draftKey: b,
						draft: f
					}));
					const S = g.user.account.displayText,
						_ = f.commentMode,
						x = t && n ? n : Se(f);
					let y;
					if ((y = _ === I.i.MARKDOWN && oe(g) ? await P(l(), null, m, f, _, x) : await D(d(), m, f, S, _, x)).ok) {
						if (r(be({
								...y.body,
								parentCommentId: m,
								commentsPageKey: u,
								draftKey: b,
								depth: p + 1
							})), t) {
							const e = Object(re.i)(g);
							Object(c.a)(!!e)
						}
					} else {
						if (y.error && y.error.type === s.Kb) {
							const e = Object(Z.b)(g, {
								commentId: m
							});
							if (!e) return;
							const n = t && o ? o : je(f);
							J.j(g, n, e.postId, m)
						}
						r(Oe({
							draftKey: b,
							error: y.error
						}))
					}
					fe(i(), u, h, y), Object(O.d)(), t && Object(q.a)()
				}, ve = () => async e => {
					const t = Object(q.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: o,
								postId: s,
								richTextJSONData: r,
								commentBodyText: i
							},
							isSkipOnboarding: c
						} = t;
						c && e(Object(m.skipOnboardingModal)()), s ? await e(xe({
							...t.comment,
							postId: s
						}, !0, r, i)) : o && void 0 !== n && await e(Re({
							...t.comment,
							parentCommentId: o,
							parentCommentDepth: n
						}, !0, r, i))
					}
				}, Ee = Object(r.a)(de.q), ke = Object(r.a)(de.y), Ie = Object(r.a)(de.p), Te = Object(r.a)(de.l), we = (Object(r.a)(de.g), Object(r.a)(de.m)), Ae = (Object(r.a)(de.t), (e, t, n) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const a = e === I.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(X.G)(t)) s(we({
						editorMode: e,
						draftKey: n,
						content: a ? X.i : ""
					})), s(Object(p.c)(e));
					else {
						s(Object(p.b)(n));
						const r = await Object(U.a)(c(), e, a ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(p.a)(n)), s(we({
								editorMode: e,
								draftKey: n,
								content: t
							})), s(Object(p.c)(e))
						} else s(Object(p.a)(n)), s(Object(f.f)({
							duration: f.a,
							kind: $.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Ne = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: o
					} = e;
					return async (e, s) => {
						const r = s(),
							c = Object(i.a)(z.c.replyToComment, n);
						if (!Object(ce.P)(s()) && !Object(se.a)(r)) return e(Object(d.j)()), void e(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(Y.m)(s(), {
								commentId: n
							})
						}));
						const m = r.features.comments.replyFormOpen[t],
							u = m && m[n];
						if ((u || m && o) && (Object.keys(m).forEach(n => m[n] && e(Ie({
								parentCommentId: n,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							b = null;
						const O = r.user.prefs.commentMode,
							f = Object(V.d)();
						if (f) {
							const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (O === I.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => Q.s(e, null)).map(e => Q.l([e])),
									n = Q.s("", null),
									o = Q.l([n]);
								b = {
									document: [Q.c(t), o]
								}
							}
						}
						const h = r.features.comments.drafts[c];
						let g;
						if (g = f ? {
								commentMode: O,
								draftType: z.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : h || {
								commentMode: O,
								draftType: z.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(ce.R)(r)) {
							const o = Ee({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: c,
								formData: g
							});
							e(Object(a.f)(o))
						} else e(Ee({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: c,
							formData: g
						}))
					}
				}, Me = e => async t => {
					t(Object(ae.p)(e)), t(Ke(e))
				}, De = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Ie({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Ne({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(ae.p)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Pe = (e, t) => n => n(Te({
					draftKey: e,
					formData: t
				})), Le = Object(r.a)(de.s), Ke = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: o,
						draftKey: s,
						text: r
					} = e;
					return async (e, i) => {
						const c = i();
						c.user.account && (J.c(c), e(Le({
							commentId: t,
							commentsPageKey: o,
							draftKey: s,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: z.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Ue = Object(r.a)(de.D), Be = Object(r.a)(de.C), Fe = Object(r.a)(de.E), Ge = Object(r.a)(de.h), Ve = e => {
					let {
						id: t,
						commentsPageKey: n,
						depth: o,
						draftKey: r,
						formData: i
					} = e;
					return async (e, o, c) => {
						let {
							apiContext: a
						} = c;
						const d = o();
						if (!d.user.account) return;
						e(Ue({
							draftKey: r
						})), J.d(d);
						const l = d.user.account.displayText || "",
							m = i.commentMode,
							u = await (async (e, t, n, o, r, i) => {
								const c = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								if (i === I.i.MARKDOWN) c.text = o.text;
								else {
									c.text = null;
									let e = null;
									o.rteState && (e = h.a.toRichTextJSON(o.rteState).document), c.richtext_json = JSON.stringify({
										document: e
									})
								}
								return Object(_.a)(Object(y.a)(e, [C.a]), {
									endpoint: Object(R.a)(Object(w.a)(Object(T.a)(`${e.apiUrl}/api/editusertext`))),
									method: s.jb.POST,
									data: c
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(k.a)(e)
								} : {
									...e,
									body: {
										comment: Object(E.a)(e.body.json.data.things[0].data, r)
									}
								} : {
									...e,
									body: {
										comment: Object(E.a)(e.body, r)
									}
								} : {
									...e,
									error: e.error || Object(v.a)()
								})
							})(a(), t, 0, i, l, m);
						if (u.ok) {
							const o = u.body;
							e(Fe({
								commentId: t,
								commentsPageKey: n,
								draftKey: r
							})), e(Object(ae.i)({
								[t]: {
									...o.comment
								}
							}))
						} else e(Be({
							draftKey: r,
							error: u.error
						}))
					}
				}, He = Object(r.a)(de.A), qe = Object(r.a)(de.z), Je = Object(r.a)(de.B), We = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const c = o();
					n(He({
						id: e
					})), J.a(e, c);
					const a = await ((e, t) => Object(_.a)(Object(y.a)(e, [C.a]), {
						endpoint: Object(R.a)(`${e.apiUrl}/api/del`),
						method: s.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(v.a)()
					}))(i(), e);
					a.ok ? n(Je({
						id: e,
						postId: t
					})) : n(qe({
						id: e,
						error: a.error
					}))
				}, ze = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(ae.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(K.p)(s(), e, r)).ok || t(Object(ae.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Xe = (e, t) => async (n, s, r) => {
					let {
						gqlContext: i
					} = r;
					var c, a, d, l, m, u;
					n(Object(ae.c)());
					const p = e => Object(f.f)(Object(f.e)(e, $.b.Error));
					if (((null === (a = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === j.a) n(p(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === W.a.FOLLOWED,
							c = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(ae.n)(c)), (await ((e, t) => Object(x.a)(e, {
								...L,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(H.ub)(null !== (m = null === (l = null === (d = s().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = r ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(f.f)({
								kind: $.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(ae.n)(c)), n(p(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
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
				return _
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "b", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeCommentsPageKey/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/endpoints/comment/index.tsx"),
				u = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/actions/comment/index.ts"),
				g = n("./src/reddit/actions/comment/constants.ts");
			const j = Object(r.a)(g.n),
				S = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					n().features.comments.models[e] && (await Object(m.i)(s(), e)).ok && t((e => async t => {
						t(j({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					if (!Object(f.P)(n())) return void t(Object(c.i)(l.a.LOGIN_MODAL_ID));
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.isLocked ? m.k : m.e;
					t(Object(h.i)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await a(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.i)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, x = Object(r.a)(g.G), y = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n(),
						c = i.features.comments.models[e],
						l = i.user.account ? i.user.account.displayText : null;
					c && l && (t(Object(h.i)({
						[e]: {
							isApproved: !0,
							approvedBy: l,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(h.i)({
						[e]: {
							isApproved: c.isApproved,
							approvedBy: null,
							bannedBy: c.bannedBy,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam,
							modNote: c.modNote,
							modReasonBy: c.modReasonBy,
							modRemovalReason: c.modRemovalReason,
							numReports: c.numReports || null
						}
					})), Object(a.d)())
				}, C = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s(),
						l = c.features.comments.models[e],
						u = c.user.account ? c.user.account.displayText : null;
					l && u && (n(Object(h.i)({
						[e]: {
							approvedBy: null,
							bannedBy: u,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.g)(i(), e, t)).ok ? n(Object(d.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(h.i)({
						[e]: {
							approvedBy: l.approvedBy,
							bannedBy: l.bannedBy,
							isApproved: l.isApproved,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam
						}
					})), Object(a.d)())
				}, R = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n().features.comments.models[e];
					if (!i) return;
					const c = i.ignoreReports ? m.j : m.d;
					t(Object(h.i)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await c(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.i)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, v = (e, t, n) => async (r, i, c) => {
					let {
						gqlContext: a
					} = c;
					const l = Object(O.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const m = n === s.ec.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(a(), {
							input: f
						})).ok) r(Object(h.i)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(d.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, E = (e, t, n) => async (o, r, c) => {
					let {
						apiContext: a,
						gqlContext: d
					} = c;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					o(Object(h.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.G.ADMIN,
							isMod: t === s.G.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && o(Object(h.i)({
						[b]: {
							isStickied: !1
						}
					}));
					const O = Object(m.b)(d(), e, t),
						f = Object(m.c)(d(), e, !!n),
						g = [O];
					(n || !n && e === b) && g.push(f), (await Promise.all(g)).every(e => e.ok) ? n && o(x({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: s.t.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (o(Object(h.i)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), o(Object(h.i)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				a = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(s.a)(u.G),
				b = Object(s.a)(u.p),
				O = Object(s.a)(u.Q),
				f = (e, t, n) => async (s, c, f) => {
					let {
						apiContext: g
					} = f;
					a.m(c(), t);
					const j = t === d.i.MARKDOWN,
						S = t === d.i.RICH_TEXT,
						_ = u.k;
					if (j && Object(l.G)(n)) return s(O({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void s(h(t));
					if (S && !n) return s(O({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void s(h(t));
					s(p(_));
					const x = await Object(i.a)(g(), t, j ? JSON.stringify(n) : n);
					x.ok ? (s(b(_)), s(O({
						editorKey: e,
						editorMode: t,
						content: x.body.output
					})), s(h(t))) : (s(b(_)), s(Object(r.f)({
						duration: r.a,
						kind: m.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, h = e => async (t, n) => {
					const s = Object(c.l)();
					if (s >= 3) return;
					const i = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === i) return;
					const a = e === d.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
						kind: m.b.SuccessCommunity,
						text: a
					})), Object(c.rb)(s + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(r.r),
				c = Object(o.a)(r.F),
				a = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = await Object(s.a)(r(), e);
					a && a.ok ? t(i({
						streamId: e,
						level: a.body.data.auto_mute_status.level
					})) : t(c(e))
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
				return ie
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ce
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return ae
			})), n.d(t, "editRemovalReason", (function() {
				return de
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), n.d(t, "deleteRemovalReason", (function() {
				return pe
			})), n.d(t, "removedItemsSelected", (function() {
				return be
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return Oe
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return he
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return ge
			})), n.d(t, "removalReasonMessagePending", (function() {
				return je
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Se
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return xe
			})), n.d(t, "submitRemovalReason", (function() {
				return ye
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
			const i = "REMOVALREASONS__LOAD_SUCCESS",
				c = "REMOVALREASONS__ADD_PENDING",
				a = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				O = "REMOVALREASONS__DELETE_FAILED";
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case i:
					case c:
					case a:
					case l:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case u:
					case O:
						return t.payload;
					default:
						return e
				}
			};
			var h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case c:
						case l:
						case p:
							return !0;
						case i:
						case "REMOVALREASONS__LOAD_FAILED":
						case a:
						case d:
						case m:
						case u:
						case b:
						case O:
							return !1;
						default:
							return e
					}
				},
				g = Object(r.c)({
					error: f,
					pending: h
				});
			const j = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
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
					case a:
					case m: {
						const {
							reason: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case b: {
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
			const _ = {};
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
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
					case a: {
						const {
							subredditId: n,
							reason: o
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], o.id]
						}
					}
					case b: {
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
			var y = function() {
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
				C = Object(r.c)({
					api: g,
					models: S,
					reasonOrder: x,
					removedItemIds: y
				}),
				R = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/makeActionCreator/index.ts"),
				E = n("./src/lib/makeCommentsPageKey/index.ts"),
				k = n("./src/lib/makeDraftKey/index.ts"),
				I = n("./src/reddit/actions/bulkActions/index.ts"),
				T = n("./src/reddit/actions/comment/index.ts"),
				w = n("./src/reddit/actions/comment/authoring.ts"),
				A = n("./src/reddit/actions/comment/moderation.ts"),
				N = n("./src/reddit/actions/modal.ts"),
				M = n("./src/reddit/actions/post.ts"),
				D = n("./src/reddit/actions/toaster.ts"),
				P = n("./src/reddit/constants/modals.ts"),
				L = n("./src/lib/makeApiRequest/index.ts"),
				K = n("./src/lib/omitHeaders/index.ts"),
				U = n("./src/reddit/constants/headers.ts"),
				B = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(L.a)(Object(K.a)(e, [U.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: R.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, n) => Object(L.a)(Object(K.a)(e, [U.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: R.jb.POST,
					type: "json",
					data: t
				});
			var V = n("./src/reddit/helpers/isPost.ts"),
				H = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = n("./src/reddit/helpers/routeKey/index.ts"),
				J = n("./src/reddit/models/ModQueue/index.ts"),
				W = n("./src/reddit/models/PostDraft/index.ts"),
				z = n("./src/reddit/models/RemovalReason/index.ts"),
				X = n("./src/reddit/models/Toast/index.ts"),
				Q = n("./src/reddit/selectors/comments.ts"),
				$ = n("./src/reddit/selectors/platform.ts");
			Object(s.a)({
				features: {
					removalReasons: C
				}
			});
			const Y = Object(v.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(v.a)(i),
				ee = Object(v.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const r = n().subreddits.models[e].name;
					t(Y());
					const i = await ((e, t) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: R.jb.GET
					}))(s(), r);
					i.ok ? t(Z({
						subredditId: e,
						response: i.body
					})) : t(ee(i.error))
				}, ne = Object(v.a)(c), oe = Object(v.a)(a), se = Object(v.a)(d), re = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					n(ne());
					const a = await ((e, t, n) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: R.jb.POST,
						data: n
					}))(i(), c, t);
					if (a.ok) {
						const {
							id: s
						} = a.body, r = {
							...t,
							id: s
						};
						n(oe({
							subredditId: e,
							reason: r
						})), n(Object(D.f)({
							kind: X.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(a.error))
				}, ie = Object(v.a)(l), ce = Object(v.a)(m), ae = Object(v.a)(u), de = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					n(ie());
					const a = await ((e, t, n) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: R.jb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(i(), c, t);
					a.ok ? (n(ce({
						subredditId: e,
						reason: t
					})), n(Object(D.f)({
						kind: X.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(ae(a.error))
				}, le = Object(v.a)(p), me = Object(v.a)(b), ue = Object(v.a)(O), pe = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					n(le());
					const a = await ((e, t, n) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: R.jb.DELETE
					}))(i(), c, t);
					a.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(D.f)({
						kind: X.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(a.error))
				}, be = Object(v.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (n, o, s) => {
					let {
						apiContext: r
					} = s;
					const i = o();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || n(te(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(N.i)(P.a.ADD_REMOVAL_REASON))
				}, fe = Object(v.a)("REMOVALREASONS__SUBMIT_PENDING"), he = Object(v.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(v.a)("REMOVALREASONS__SUBMIT_FAILED"), je = Object(v.a)("REMOVALREASONS__MESSAGE_PENDING"), Se = Object(v.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(v.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), xe = Object(v.a)("REMOVALREASONS__MESSAGE_FAILED"), ye = (e, t, n, o, s) => async (r, i, c) => {
					let {
						apiContext: a
					} = c;
					const d = i(),
						l = d.user.account && d.user.account.displayText,
						m = e[0],
						u = Object(V.a)(m) ? z.e.Post : z.e.Comment,
						p = u === z.e.Post ? d.posts.models[m] : d.features.comments.models[m],
						b = u === z.e.Post ? M.S : T.i;
					if (!p || !l) return !1;
					r(fe()), r(b({
						[m]: {
							modNote: s,
							modRemovalReason: t && t.title,
							modReasonBy: l
						}
					}));
					const O = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						f = await F(a(), O);
					if (f.ok) {
						if (r(he()), t) {
							r(je());
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								i = await G(a(), Object(z.h)(s, u), u);
							if (i.ok) {
								if (o === z.f.Public) {
									if (r(_e()), i.body) {
										const e = Object(H.a)(i.body, l),
											t = {
												comment: e,
												parentId: m
											},
											n = Object($.f)(d),
											o = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let s = n && o && Object(q.a)(o, d, d.posts.models[e.postId]);
										if (s || (s = Object(E.a)(e.postId, null, {
												sort: R.u,
												hasSortParam: !0
											})), u === z.e.Post) {
											const n = Object(k.a)(W.c.replyToPost, m);
											r(Object(w.q)({
												...t,
												headCommentId: Object(Q.w)(d, {
													commentsPageKey: s
												}),
												commentsPageKey: s,
												draftKey: n
											}));
											const o = d.postStickiedComments.data[m];
											r(Object(A.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: s
											})), o && o !== e.id && r(Object(T.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (u === z.e.Comment) {
											const e = Object(k.a)(W.c.replyToComment, p.id),
												n = Object(Q.j)(d, {
													commentId: m,
													commentsPageKey: s
												});
											r(Object(w.o)({
												...t,
												parentCommentId: m,
												commentsPageKey: s,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else r(Se());
								return !0
							}
							return r(xe(i.error)), !1
						}
					} else r(ge(f.error)), r(b({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, n, s, r) => async (i, c, a) => {
					let {
						apiContext: d
					} = a;
					const l = c(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					i(fe());
					const u = Object(D.f)({
							kind: X.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await F(d(), p);
					if (b.ok) {
						const o = {
							ids: e,
							operation: J.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (i(Object(I.b)(o)), t) {
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								r = await G(d(), Object(z.h)(o, z.e.Bulk), z.e.Bulk);
							r.ok ? (i(Se()), i(u)) : i(xe(r.error))
						} else i(u)
					} else i(ge(b.error))
				}
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, n) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return X
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/actions/comment/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/models/Toast/index.ts");
			const j = (e, t) => async (n, s, r) => {
				let {
					apiContext: i
				} = r;
				const c = await (async (e, t, n) => Object(O.a)(Object(f.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.jb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(i(), e, t),
					a = `error-block-${t}`,
					l = `success-block-${t}`;
				if (c.ok) {
					n(Object(p.S)({
						[e]: {
							suggestedSort: t
						}
					}));
					const s = t ? o.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : o.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(b.f({
						id: l,
						kind: g.b.SuccessCommunityGreen,
						text: s
					}))
				} else n(b.f({
					id: a,
					kind: g.b.Error,
					text: o.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: o.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: j(e, t)
				}))
			};
			var S = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_ = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				y = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = n("./src/reddit/components/TrackingHelper/index.tsx"),
				R = n("./src/reddit/controls/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Dropdown/Row.tsx"),
				E = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				k = n("./src/reddit/helpers/path/index.ts"),
				I = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const T = (e, t, n, o, s) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(I.y)(r, void 0, {
						oldSort: n,
						sort: o,
						source: s
					}),
					userSubreddit: Object(I.qb)(r)
				}),
				w = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				A = e => ({
					subreddit: Object(I.gb)(e),
					userSubreddit: Object(I.qb)(e)
				}),
				N = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...A
				});
			var M = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				D = n("./src/reddit/icons/svgs/Info/index.tsx"),
				P = n("./src/reddit/selectors/activeModalId.ts"),
				L = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/moderatorPermissions.ts"),
				U = n("./src/reddit/selectors/posts.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				V = n.n(G),
				H = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const q = Object(y.a)(R.a),
				J = e => e === H.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === H.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class W extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== H.a.None) {
							e(t === H.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", H.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", H.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", H.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: n,
						selectedSort: s
					} = this.props;
					return r.a.createElement("div", {
						className: V.a.HighlightWrapper
					}, r.a.createElement(v.b, {
						className: Object(a.a)(V.a.HighlightPicker, V.a.Row),
						textClassName: V.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${J(s)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), r.a.createElement(M.b, {
						className: V.a.DropdownTriangle,
						onClick: n
					}), r.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(v.b, {
						displayText: J(H.a.First),
						isSelected: s === H.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(v.b, {
						displayText: J(H.a.Last),
						isSelected: s === H.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(v.b, {
						displayText: J(H.a.None),
						isSelected: s === H.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var z = W;
			const X = "CommentSort--SortPicker",
				Q = "CommentSort--HighlightPicker",
				$ = "CommentSort--Tooltip",
				Y = Object(y.a)(R.a),
				Z = Object(c.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(L.m)(e, {
							commentId: n
						})
					},
					contestModeModalIsOpen: Object(P.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(B.b)(X),
					highlightIsOpen: Object(B.b)(Q),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const o = Object(K.m)(e, {
							postId: n
						});
						return !!o && o.posts
					},
					post: U.G,
					postPermalink: U.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const o = Object(F.v)(e),
							s = !!Object(K.m)(e, {
								postId: n
							}),
							r = Object(U.G)(e, {
								postId: n
							});
						return (s || o) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: L.p
				}),
				ee = Object(i.b)(Z, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: X
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: Q
							})), t()
						},
						onSetSuggestedSort: t => e(j(n, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.X)(t, n)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: $
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, o) => this.props.sendEvent(T(e, this.props.isOverlay, t, n, o)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(w("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(N(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return o.fbt._("{sort name} (suggested)", [o.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: n,
						contestModeModalIsOpen: s,
						dropdownIsOpen: i,
						elementRef: c,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: u,
						isOverlay: p,
						location: b,
						post: O,
						postPermalink: f,
						selectedHighlightSort: h,
						showCommentHighlighter: g,
						sort: j,
						suggestedSort: y,
						showTooltip: C,
						toggleContestModeModal: R
					} = this.props, I = O.contestMode, T = !b.search.includes(d.t.CONFIDENCE), A = j === d.t.CONFIDENCE && T, N = u && !A, P = d.v[j], L = P ? P() : "", K = y && j === y && !A ? this.addSuggestedLabel(L) : L, U = I ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), B = I ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), F = I ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : o.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), G = I && !u;
					return r.a.createElement("div", {
						className: Object(a.a)(t, V.a.container, {
							[V.a.hideCommentSort]: !g && G
						}),
						ref: c
					}, r.a.createElement("div", {
						className: V.a.containerRow
					}, !G && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: V.a.DropdownContainer
					}, r.a.createElement(v.b, {
						className: Object(a.a)(V.a.SortPicker, V.a.Row),
						textClassName: V.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Sort by",null,{hk:"E6T9r"})}: ${K}`,
						id: X,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(M.b, {
						className: V.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Y, {
						isOpen: i,
						tooltipId: X
					}, [d.t.CONFIDENCE, d.t.TOP, d.t.NEW, d.t.CONTROVERSIAL, d.t.OLD, d.t.QA].map(e => {
						const t = n || f,
							o = Object(k.b)(t),
							s = d.v[e],
							i = s ? s() : "";
						return r.a.createElement(x.a, {
							className: V.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, r.a.createElement(v.b, {
							displayText: i,
							isSelected: j === e,
							skipRoleAttr: !0
						}))
					}))), N && !G && (y ? r.a.createElement("button", {
						className: V.a.SortLink,
						onClick: j !== y ? this.setSortOnClick : this.clearSortOnClick
					}, j !== y ? o.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : o.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: V.a.SetSort
					}, r.a.createElement("button", {
						className: V.a.SortLink,
						onClick: this.setSortOnClick
					}, o.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: $,
						onMouseEnter: C,
						onMouseLeave: l
					}, r.a.createElement(_.c, {
						className: V.a.Tooltip,
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: $
					}), r.a.createElement(D.a, {
						className: V.a.Info
					})))), u && r.a.createElement("button", {
						className: V.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(E.a, {
						className: V.a.ToggleSwitch,
						on: I
					}))), g && r.a.createElement("div", {
						className: V.a.containerRow
					}, r.a.createElement(z, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: Q,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: h,
						trackHighlight: w
					})), s && r.a.createElement(S.a, {
						actionText: B,
						headerText: U,
						modalText: F,
						onConfirm: this.setContestMode,
						toggleModal: R,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(C.c)(te))
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = n.n(l),
				u = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = u.a.div("Text", m.a),
				O = u.a.div("BottomText", m.a),
				f = e => s.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				h = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(O, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				g = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				j = Object(a.a)(h, [c.a.Click, c.a.Keydown]),
				S = Object(a.a)(f, [c.a.Click, c.a.Keydown]),
				_ = Object(r.b)(g);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(j, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(S, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/helpers/overlay/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: n,
					to: o,
					...r
				} = e, d = Object(c.b)(o);
				return s.a.createElement(i.a, a({
					className: n,
					to: d
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, o = t ? d : r.a;
				return s.a.createElement(o, l({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(r.a)(e, t);
				class o extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, a({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(o)
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				a = n.n(c);
			t.a = Object(o.memo)(Object(o.forwardRef)((e, t) => {
				const n = e.size || i.d.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(a.a.toggleSwitch, e.className, a.a[n], {
						[a.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[a.a.mDisabled]: e.disabled,
						[a.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, s.a.createElement("div", {
					className: a.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const d = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === a.i.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(s.a)(Object(r.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.jb.POST,
					data: d
				})
			}
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/lodash/map.js"),
				s = n.n(o),
				r = n("./src/lib/FocusTrap/index.ts");
			const i = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				c = e => {
					let t = e;
					do {
						if (i(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				a = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				d = () => a() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return s()(t, e => e.textContent || "")
				})() : null,
				l = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				m = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!l(n, e)) return;
					const {
						startContainer: o,
						startOffset: s,
						endContainer: r,
						endOffset: i
					} = n, c = document.createRange();
					c.selectNode(e);
					let a = !0;
					if (-1 === c.compareBoundaryPoints(Range.START_TO_START, n) && (c.setStart(o, s), a = !1), 1 === c.compareBoundaryPoints(Range.END_TO_END, n) && (c.setEnd(r, i), a = !1), a) return [e];
					const d = document.createElement("div");
					return d.appendChild(c.cloneContents()), [...d.childNodes]
				},
				u = (e, t, n) => {
					let o = e;
					for (; o && (!n || !n(o));) {
						if (o && t(o)) return o;
						o = o.parentElement
					}
				},
				p = e => e && e.parentElement && u(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
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
				return i
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
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return i
				})), n.d(t, "a", (function() {
					return c
				})), n.d(t, "c", (function() {
					return a
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(o || (o = {}));
			const s = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				r = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(o.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				i = () => s(o.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(o.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => {
					return !!s(o.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return m
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "h", (function() {
				return _
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = e => {
					const t = Object(c.o)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(a.n)(e),
						screen: Object(a.Y)(e),
						subreddit: Object(a.gb)(e),
						post: t ? Object(a.H)(e, t) : null,
						profile: Object(a.Q)(e),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				m = async (e, t, o, s) => {
					const r = {
							commentId: s,
							commentsPageKey: o
						},
						c = s && Object(i.j)(e, r) || 0,
						{
							getFlairData: m
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...l(e),
						comment: s ? Object(a.h)(e, s) : null,
						listing: Object(a.y)(e, void 0, {
							depth: c
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: m(e)
					})
				}, u = (e, t, n, o) => {
					const s = l(e);
					return Object(d.a)({
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
				}, p = e => Object(d.a)({
					noun: "cancel",
					...l(e)
				}), b = (e, t) => {
					t === r.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(e)
					})
				}, O = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(a.n)(t),
					screen: Object(a.Y)(t),
					subreddit: Object(a.gb)(t),
					post: Object(a.H)(t, e)
				}), f = e => Object(d.a)({
					noun: "edit",
					...l(e)
				}), h = e => Object(d.a)({
					noun: "save_edit",
					...l(e)
				}), g = (e, t) => n => {
					const o = "image_upload" === e || "video_upload" === e;
					return {
						...l(n),
						noun: o ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, j = () => e => ({
					...l(e),
					action: "open",
					noun: "gif_tooltip"
				}), S = e => t => ({
					...l(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), _ = () => e => ({
					...l(e),
					action: "select",
					noun: "gif_tooltip_result"
				})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				c = n.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...o
				} = e;
				return s.a.createElement("svg", a({
					className: Object(r.a)(c.a.dropdown, {
						[c.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return m
			}));
			var o = n("./src/reddit/helpers/isPost.ts");
			const s = 50,
				r = 50,
				i = 1e4,
				c = 100;
			var a, d;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(a || (a = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(d || (d = {}));
			const l = e => 1 === e.length ? Object(o.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
				m = (e, t) => {
					return {
						[t === d.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				a = Object(o.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), i.a),
				d = e => c.find(t => !!Object(i.a)(a(e, t))),
				l = Object(o.a)(d, e => !!e),
				m = e => {
					const t = d(e);
					return !!t && a(e, t) === s.X.SkipOnboarding
				},
				u = e => {
					const t = d(e);
					return !!t && a(e, t) === s.X.RegOnboarding
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"f6c06f139e7e"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.57699c09fcba532616b2.js.map