// https://www.redditstatic.com/desktop2x/removalReasonActions.e61c1475142811e14f4c.js
// Retrieved at 5/31/2022, 4:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
		"./src/lib/scroll/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return c
			})), o.d(t, "a", (function() {
				return a
			}));
			var n = o("./src/lib/domUtils/index.ts"),
				s = o("./src/lib/fastdom/index.ts"),
				r = o("./src/reddit/components/CommentSort/index.tsx"),
				i = o("./src/reddit/constants/elementIds.ts");
			const c = () => {
					s.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				a = e => {
					s.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
							o = document.getElementById(r.a);
						if (t && o) {
							const n = e ? o.offsetTop : o.offsetTop - 50;
							s.a.write(() => t.scrollTo({
								top: n,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "b", (function() {
				return i
			})), o.d(t, "a", (function() {
				return c
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(n.a)(s.c),
				i = Object(n.a)(s.b),
				c = Object(n.a)(s.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return pe
			})), o.d(t, "q", (function() {
				return Oe
			})), o.d(t, "o", (function() {
				return fe
			})), o.d(t, "s", (function() {
				return je
			})), o.d(t, "v", (function() {
				return Se
			})), o.d(t, "p", (function() {
				return ye
			})), o.d(t, "u", (function() {
				return Re
			})), o.d(t, "n", (function() {
				return ke
			})), o.d(t, "m", (function() {
				return Ie
			})), o.d(t, "h", (function() {
				return we
			})), o.d(t, "a", (function() {
				return Ae
			})), o.d(t, "b", (function() {
				return De
			})), o.d(t, "r", (function() {
				return Pe
			})), o.d(t, "f", (function() {
				return Le
			})), o.d(t, "g", (function() {
				return Ke
			})), o.d(t, "k", (function() {
				return Ue
			})), o.d(t, "d", (function() {
				return Fe
			})), o.d(t, "c", (function() {
				return qe
			})), o.d(t, "j", (function() {
				return Je
			})), o.d(t, "i", (function() {
				return Xe
			})), o.d(t, "l", (function() {
				return $e
			})), o.d(t, "t", (function() {
				return Ye
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/makeDraftKey/index.ts"),
				c = o("./src/lib/scroll/index.ts"),
				a = o("./src/reddit/actions/changeUsername.ts"),
				d = o("./src/reddit/actions/login.ts"),
				l = o("./src/reddit/actions/modal.ts"),
				m = o("./src/reddit/actions/onboarding/index.ts"),
				u = o("./src/reddit/actions/post.ts"),
				p = o("./src/reddit/actions/postCreation/editorContent.ts"),
				b = o("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				O = o("./src/reddit/actions/shortcuts/utils.ts"),
				f = o("./src/reddit/actions/toaster.ts"),
				h = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				g = o("./src/reddit/constants/adEvents.ts"),
				j = o("./src/reddit/constants/localStorage.ts"),
				S = o("./src/redditGQL/operations/CommentToxicity.json"),
				_ = o("./src/lib/makeApiRequest/index.ts"),
				x = o("./src/lib/makeGqlRequest/index.ts"),
				y = o("./src/lib/omitHeaders/index.ts"),
				C = o("./src/reddit/constants/headers.ts"),
				v = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				R = o("./src/reddit/helpers/genericServerError/index.ts"),
				k = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				E = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				I = o("./src/reddit/models/PostCreationForm/index.ts"),
				T = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = o("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				A = o("./src/reddit/helpers/graphql/helpers.ts"),
				N = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				M = o("./src/redditGQL/operations/CreateComment.json");
			const D = (e, t, o, n) => {
					let s, r;
					if (n === I.i.MARKDOWN) s = o.text, r = null;
					else {
						s = null;
						let e = null;
						o.rteState && (e = h.a.toRichTextJSON(o.rteState).document), r = JSON.stringify({
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
				P = async (e, t, o, n, r) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return n === I.i.MARKDOWN ? i.text = o.text : (i.text = null, i.richtext_json = r), Object(_.a)(Object(y.a)(e, [C.a]), {
						method: s.jb.POST,
						endpoint: Object(v.a)(Object(T.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: i
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(E.a)(e)
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(R.a)()
					})
				}, L = async (e, t, o, n, s, r) => {
					const i = s === I.i.MARKDOWN,
						c = {
							postId: t || null,
							parentId: o || null,
							content: {
								markdown: i ? n.text : null,
								richText: i ? null : r
							}
						};
					return Object(x.a)(e, {
						...M,
						variables: {
							input: c
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(A.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(A.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(N.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(R.a)()
						}
					})
				};
			var K = o("./src/redditGQL/operations/UpdateComment.json");
			var U = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var B = o("./src/reddit/endpoints/post/index.tsx"),
				F = o("./src/reddit/endpoints/post/convert.ts"),
				G = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				H = o("./src/reddit/featureFlags/index.ts"),
				V = o("./src/reddit/helpers/correlationIdTracker.ts"),
				q = o("./src/reddit/helpers/dom/index.ts"),
				J = o("./src/reddit/helpers/localStorage/index.ts"),
				W = o("./src/reddit/helpers/sessionStorage/index.ts"),
				z = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				Q = o("./src/reddit/models/Comment/index.ts"),
				X = o("./src/reddit/models/PostDraft/index.ts"),
				$ = o("./src/reddit/models/RichTextJson/index.ts"),
				Y = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				Z = o("./src/reddit/models/Toast/index.ts"),
				ee = o("./src/reddit/selectors/comments.ts"),
				te = o("./src/reddit/selectors/commentSelector.ts"),
				oe = o("./src/reddit/constants/experiments.ts"),
				ne = o("./src/reddit/helpers/chooseVariant/index.ts"),
				se = o("./node_modules/reselect/es/index.js");
			const re = Object(se.a)(e => Object(ne.c)(e, {
				experimentEligibilitySelector: ne.a,
				experimentName: oe.Cb
			}), e => e === oe.qd);
			var ie = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				ce = o("./src/reddit/selectors/platform.ts"),
				ae = o("./src/reddit/selectors/posts.ts"),
				de = o("./src/reddit/selectors/user.ts"),
				le = o("./src/reddit/actions/comment/index.ts"),
				me = o("./src/reddit/actions/comment/constants.ts");
			const ue = Object(r.a)(me.k),
				pe = e => {
					let {
						hasFocus: t,
						draftKey: o
					} = e;
					return async (e, n) => {
						const s = n();
						if (!!s.features.comments.drafts[o])
							if (Object(de.R)(s) && t) {
								const n = ue({
									hasFocus: t,
									draftKey: o
								});
								e(Object(a.f)(n))
							} else e(ue({
								hasFocus: t,
								draftKey: o
							}))
					}
				},
				be = Object(r.a)(me.I),
				Oe = Object(r.a)(me.K),
				fe = Object(r.a)(me.J),
				he = Object(r.a)(me.H),
				ge = async (e, t, o, n) => {
					const s = n.ok && n.body,
						r = s && s.comment && s.comment.id;
					await z.f(e, o, t, r)
				}, je = "Toxicity_Warning__Modal", Se = e => async (t, o, n) => {
					let {
						gqlContext: s
					} = n;
					const r = o(),
						i = Object(ce.e)(r);
					let c = "";
					i && (c = i.name);
					const {
						formData: a,
						editorMode: d
					} = e;
					if (H.d.enableToxicityWarning(r)) {
						if (!(await D(s(), c, a, d))) return void t(Object(l.i)(je))
					}
					t(ye(e))
				}, _e = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, xe = e => {
					let t = null;
					return e.rteState && (t = h.a.toRichTextJSON(e.rteState).document), JSON.stringify({
						document: t
					})
				}, ye = e => async (t, o) => {
					t(Object(l.g)(je));
					const n = o(),
						s = Object(ie.a)(n),
						r = Object(ie.c)(n);
					if (!n.user.account && s) {
						const o = xe(e.formData),
							n = _e(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.j)()), Object(W.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: n
							},
							isSkipOnboarding: r
						})
					} else t(ve(e, !1))
				};

			function Ce(e, t) {
				return e === I.i.MARKDOWN && re(t)
			}
			const ve = (e, t, o, r) => {
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
						t || e(be({
							draftKey: d,
							draft: l
						}));
						const v = y.user.account.displayText,
							R = l.commentMode;
						let k;
						if (h) k = await Object(G.i)(_(), i, l, v), e(Object(b.a)({
							streamId: i,
							level: k.body.automuteLevel
						}));
						else {
							const e = t && o ? o : xe(l);
							k = Ce(R, y) ? await L(x(), i, null, l, R, e) : await P(_(), i, l, R, e)
						}
						if (k.ok) {
							let o;
							if (o = k.body, e(Oe({
									...o,
									headCommentId: Object(ee.w)(y, {
										commentsPageKey: a
									}),
									commentsPageKey: a,
									draftKey: d
								})), t) {
								const e = Object(ce.i)(y);
								Object(c.a)(!!e)
							}
							const n = Object(ae.G)(j(), {
								postId: i
							});
							e(Object(u.z)(n, g.a.CommentSubmitted))
						} else {
							if (k.error && k.error.type === s.Kb) {
								const e = t && r ? r : _e(l);
								z.j(y, e, i)
							}
							const o = k.error && k.error.fields && k.error.fields[0] ? k.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(he({
								draftKey: d,
								error: k.error
							})), e(Object(f.f)({
								duration: f.a,
								kind: Z.b.Error,
								text: o
							}))
						}
						ge(j(), a, m, k).then(() => k.ok && m === I.i.RICH_TEXT ? Object(V.b)(V.a.CommentComposer) : void 0), p || Object(O.d)(), t && Object(W.a)()
					}
				},
				Re = e => async (t, o, n) => {
					let {
						gqlContext: s
					} = n;
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: a,
						formData: d,
						editorMode: m
					} = e, u = o(), p = Object(ce.e)(u);
					let b = "";
					if (p && (b = p.name), H.d.enableToxicityWarning(u)) {
						if (!(await D(s(), b, d, m))) return void t(Object(l.i)(je))
					}
					t(ke({
						commentsPageKey: i,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: d,
						editorMode: m
					}))
				}, ke = e => async (t, o) => {
					t(Object(l.g)(je));
					const n = o(),
						s = Object(ie.a)(n),
						r = Object(ie.c)(n);
					if (!n.user.account && s) {
						const o = xe(e.formData),
							n = _e(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.j)()), Object(W.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: n
							},
							isSkipOnboarding: r
						})
					} else t(Ee(e, !1))
				}, Ee = (e, t, o, n) => async (r, i, a) => {
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
					t || r(be({
						draftKey: b,
						draft: f
					}));
					const S = f.commentMode,
						_ = t && o ? o : xe(f);
					let x;
					if ((x = Ce(S, g) ? await L(l(), null, m, f, S, _) : await P(d(), m, f, S, _)).ok) {
						if (r(fe({
								...x.body,
								parentCommentId: m,
								commentsPageKey: u,
								draftKey: b,
								depth: p + 1
							})), t) {
							const e = Object(ce.i)(g);
							Object(c.a)(!!e)
						}
					} else {
						if (x.error && x.error.type === s.Kb) {
							const e = Object(te.b)(g, {
								commentId: m
							});
							if (!e) return;
							const o = t && n ? n : _e(f);
							z.j(g, o, e.postId, m)
						}
						r(he({
							draftKey: b,
							error: x.error
						}))
					}
					ge(i(), u, h, x), Object(O.d)(), t && Object(W.a)()
				}, Ie = () => async e => {
					const t = Object(W.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: o,
								parentCommentId: n,
								postId: s,
								richTextJSONData: r,
								commentBodyText: i
							},
							isSkipOnboarding: c
						} = t;
						c && e(Object(m.skipOnboardingModal)()), s ? await e(ve({
							...t.comment,
							postId: s
						}, !0, r, i)) : n && void 0 !== o && await e(Ee({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: o
						}, !0, r, i))
					}
				}, Te = Object(r.a)(me.q), we = Object(r.a)(me.y), Ae = Object(r.a)(me.p), Ne = Object(r.a)(me.l), Me = (Object(r.a)(me.g), Object(r.a)(me.m)), De = (Object(r.a)(me.t), (e, t, o) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const a = e === I.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object($.G)(t)) s(Me({
						editorMode: e,
						draftKey: o,
						content: a ? $.i : ""
					})), s(Object(p.c)(e));
					else {
						s(Object(p.b)(o));
						const r = await Object(F.a)(c(), e, a ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(p.a)(o)), s(Me({
								editorMode: e,
								draftKey: o,
								content: t
							})), s(Object(p.c)(e))
						} else s(Object(p.a)(o)), s(Object(f.f)({
							duration: f.a,
							kind: Z.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Pe = e => {
					let {
						commentsPageKey: t,
						parentCommentId: o,
						singleOpen: n
					} = e;
					return async (e, s) => {
						const r = s(),
							c = Object(i.a)(X.c.replyToComment, o);
						if (!Object(de.P)(s()) && !Object(ie.a)(r)) return e(Object(d.j)()), void e(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(ee.m)(s(), {
								commentId: o
							})
						}));
						const m = r.features.comments.replyFormOpen[t],
							u = m && m[o];
						if ((u || m && n) && (Object.keys(m).forEach(o => m[o] && e(Ae({
								parentCommentId: o,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							b = null;
						const O = r.user.prefs.commentMode,
							f = Object(q.d)();
						if (f) {
							const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (O === I.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => Y.s(e, null)).map(e => Y.l([e])),
									o = Y.s("", null),
									n = Y.l([o]);
								b = {
									document: [Y.c(t), n]
								}
							}
						}
						const h = r.features.comments.drafts[c];
						let g;
						if (g = f ? {
								commentMode: O,
								draftType: X.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : h || {
								commentMode: O,
								draftType: X.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(de.R)(r)) {
							const n = Te({
								parentCommentId: o,
								commentsPageKey: t,
								draftKey: c,
								formData: g
							});
							e(Object(a.f)(n))
						} else e(Te({
							parentCommentId: o,
							commentsPageKey: t,
							draftKey: c,
							formData: g
						}))
					}
				}, Le = e => async t => {
					t(Object(le.p)(e)), t(Fe(e))
				}, Ke = e => {
					let {
						parentCommentId: t,
						commentsPageKey: o
					} = e;
					return async e => {
						e(Ae({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Pe({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Object(le.p)({
							commentId: t,
							commentsPageKey: o
						}))
					}
				}, Ue = (e, t) => o => o(Ne({
					draftKey: e,
					formData: t
				})), Be = Object(r.a)(me.s), Fe = e => {
					let {
						commentId: t,
						commentMode: o,
						commentsPageKey: n,
						draftKey: s,
						text: r
					} = e;
					return async (e, i) => {
						const c = i();
						c.user.account && (z.c(c), e(Be({
							commentId: t,
							commentsPageKey: n,
							draftKey: s,
							formData: {
								text: r,
								commentMode: o,
								rteState: null,
								draftType: X.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Ge = Object(r.a)(me.D), He = Object(r.a)(me.C), Ve = Object(r.a)(me.E), qe = Object(r.a)(me.h), Je = e => {
					let {
						id: t,
						commentsPageKey: o,
						draftKey: n,
						formData: r
					} = e;
					return async (e, i, c) => {
						let {
							apiContext: a,
							gqlContext: d
						} = c;
						const l = i();
						if (!l.user.account) return;
						e(Ge({
							draftKey: n
						})), z.d(l);
						const m = xe(r),
							u = r.commentMode;
						let p;
						if ((p = Ce(u, l) ? await (async (e, t, o, n, s) => {
								const r = s === I.i.MARKDOWN,
									i = {
										commentId: t,
										content: {
											markdown: r ? o.text : null,
											richText: r ? null : n
										}
									};
								return Object(x.a)(e, {
									...K,
									variables: {
										input: i
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(A.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(A.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(N.b)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(R.a)()
									}
								})
							})(d(), t, r, m, u) : await (async (e, t, o, n, r) => {
								const i = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return r === I.i.MARKDOWN ? i.text = o.text : (i.text = null, i.richtext_json = n), Object(_.a)(Object(y.a)(e, [C.a]), {
									endpoint: Object(v.a)(Object(w.a)(Object(T.a)(`${e.apiUrl}/api/editusertext`))),
									method: s.jb.POST,
									data: i
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(E.a)(e)
								} : {
									...e,
									body: {
										comment: Object(k.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(k.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(R.a)()
								})
							})(a(), t, r, m, u)).ok) {
							const s = p.body;
							e(Ve({
								commentId: t,
								commentsPageKey: o,
								draftKey: n
							})), e(Object(le.i)({
								[t]: {
									...s.comment
								}
							}))
						} else e(He({
							draftKey: n,
							error: p.error
						}))
					}
				}, We = Object(r.a)(me.A), ze = Object(r.a)(me.z), Qe = Object(r.a)(me.B), Xe = (e, t) => async (o, n, r) => {
					let {
						apiContext: i
					} = r;
					const c = n();
					o(We({
						id: e
					})), z.a(e, c);
					const a = await ((e, t) => Object(_.a)(Object(y.a)(e, [C.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/del`),
						method: s.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(E.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(R.a)()
					}))(i(), e);
					a.ok ? o(Qe({
						id: e,
						postId: t
					})) : o(ze({
						id: e,
						error: a.error
					}))
				}, $e = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = !o().features.comments.models[e].sendReplies;
					t(Object(le.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(B.p)(s(), e, r)).ok || t(Object(le.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Ye = (e, t) => async (o, s, r) => {
					let {
						gqlContext: i
					} = r;
					var c, a, d, l, m, u;
					o(Object(le.c)());
					const p = e => Object(f.f)(Object(f.e)(e, Z.b.Error));
					if (((null === (a = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === j.a) o(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === Q.a.FOLLOWED,
							c = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(le.n)(c)), (await ((e, t) => Object(x.a)(e, {
								...U,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(J.ub)(null !== (m = null === (l = null === (d = s().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = r ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(f.f)({
								kind: Z.b.SuccessCommunityGreen,
								text: e
							}))
						} else o(Object(le.n)(c)), o(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return S
			})), o.d(t, "c", (function() {
				return _
			})), o.d(t, "f", (function() {
				return x
			})), o.d(t, "a", (function() {
				return y
			})), o.d(t, "e", (function() {
				return C
			})), o.d(t, "g", (function() {
				return v
			})), o.d(t, "h", (function() {
				return R
			})), o.d(t, "b", (function() {
				return k
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/makeCommentsPageKey/index.ts"),
				c = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/actions/shortcuts/utils.ts"),
				d = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/constants/modals.ts"),
				m = o("./src/reddit/endpoints/comment/index.tsx"),
				u = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = o("./src/reddit/models/Reportable/index.ts"),
				b = o("./src/reddit/models/Toast/index.ts"),
				O = o("./src/reddit/selectors/commentSelector.ts"),
				f = o("./src/reddit/selectors/user.ts"),
				h = o("./src/reddit/actions/comment/index.ts"),
				g = o("./src/reddit/actions/comment/constants.ts");
			const j = Object(r.a)(g.n),
				S = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					o().features.comments.models[e] && (await Object(m.i)(s(), e)).ok && t((e => async t => {
						t(j({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					if (!Object(f.P)(o())) return void t(Object(c.i)(l.a.LOGIN_MODAL_ID));
					const i = o().features.comments.models[e];
					if (!i) return;
					const a = i.isLocked ? m.k : m.e;
					t(Object(h.i)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await a(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.i)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, x = Object(r.a)(g.G), y = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					const i = o(),
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
						text: n.fbt._("comment has been approved", null, {
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
				}, C = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s(),
						l = c.features.comments.models[e],
						u = c.user.account ? c.user.account.displayText : null;
					l && u && (o(Object(h.i)({
						[e]: {
							approvedBy: null,
							bannedBy: u,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.g)(i(), e, t)).ok ? o(Object(d.f)({
						kind: b.b.SuccessMod,
						text: t ? n.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : n.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : o(Object(h.i)({
						[e]: {
							approvedBy: l.approvedBy,
							bannedBy: l.bannedBy,
							isApproved: l.isApproved,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam
						}
					})), Object(a.d)())
				}, v = e => async (t, o, s) => {
					let {
						apiContext: r
					} = s;
					const i = o().features.comments.models[e];
					if (!i) return;
					const c = i.ignoreReports ? m.j : m.d;
					t(Object(h.i)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await c(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.i)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, R = (e, t, o) => async (r, i, c) => {
					let {
						gqlContext: a
					} = c;
					const l = Object(O.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const m = o === s.ec.Snoozed,
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
						const e = Object(d.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, k = (e, t, o) => async (n, r, c) => {
					let {
						apiContext: a,
						gqlContext: d
					} = c;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					n(Object(h.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.G.ADMIN,
							isMod: t === s.G.MODERATOR,
							isStickied: !!o
						}
					})), o && b && b !== e && n(Object(h.i)({
						[b]: {
							isStickied: !1
						}
					}));
					const O = Object(m.b)(d(), e, t),
						f = Object(m.c)(d(), e, !!o),
						g = [O];
					(o || !o && e === b) && g.push(f), (await Promise.all(g)).every(e => e.ok) ? o && n(x({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: s.t.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (n(Object(h.i)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), n(Object(h.i)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return p
			})), o.d(t, "a", (function() {
				return b
			})), o.d(t, "d", (function() {
				return f
			})), o.d(t, "c", (function() {
				return h
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/toaster.ts"),
				i = o("./src/reddit/endpoints/post/convert.ts"),
				c = o("./src/reddit/helpers/localStorage/index.ts"),
				a = o("./src/reddit/helpers/trackers/postComposer.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/models/RichTextJson/index.ts"),
				m = o("./src/reddit/models/Toast/index.ts"),
				u = o("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(s.a)(u.G),
				b = Object(s.a)(u.p),
				O = Object(s.a)(u.Q),
				f = (e, t, o) => async (s, c, f) => {
					let {
						apiContext: g
					} = f;
					a.m(c(), t);
					const j = t === d.i.MARKDOWN,
						S = t === d.i.RICH_TEXT,
						_ = u.k;
					if (j && Object(l.G)(o)) return s(O({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void s(h(t));
					if (S && !o) return s(O({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void s(h(t));
					s(p(_));
					const x = await Object(i.a)(g(), t, j ? JSON.stringify(o) : o);
					x.ok ? (s(b(_)), s(O({
						editorKey: e,
						editorMode: t,
						content: x.body.output
					})), s(h(t))) : (s(b(_)), s(Object(r.f)({
						duration: r.a,
						kind: m.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, h = e => async (t, o) => {
					const s = Object(c.l)();
					if (s >= 3) return;
					const i = o().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === i) return;
					const a = e === d.i.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : n.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: n.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: m.b.SuccessCommunity,
						text: a
					})), Object(c.rb)(s + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return a
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = o("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(n.a)(r.r),
				c = Object(n.a)(r.F),
				a = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const a = await Object(s.a)(r(), e);
					a && a.ok ? t(i({
						streamId: e,
						level: a.body.data.auto_mute_status.level
					})) : t(c(e))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "removalReasonsPending", (function() {
				return Y
			})), o.d(t, "removalReasonsLoaded", (function() {
				return Z
			})), o.d(t, "removalReasonsFailed", (function() {
				return ee
			})), o.d(t, "removalReasonsRequested", (function() {
				return te
			})), o.d(t, "removalReasonAddedPending", (function() {
				return oe
			})), o.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), o.d(t, "removalReasonAddedFailed", (function() {
				return se
			})), o.d(t, "addRemovalReason", (function() {
				return re
			})), o.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), o.d(t, "editRemovalReasonSuccess", (function() {
				return ce
			})), o.d(t, "editRemovalReasonFailed", (function() {
				return ae
			})), o.d(t, "editRemovalReason", (function() {
				return de
			})), o.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), o.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), o.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), o.d(t, "deleteRemovalReason", (function() {
				return pe
			})), o.d(t, "removedItemsSelected", (function() {
				return be
			})), o.d(t, "fetchReasonsAndOpenModal", (function() {
				return Oe
			})), o.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), o.d(t, "removalReasonSubmittedSuccess", (function() {
				return he
			})), o.d(t, "removalReasonSubmittedFailed", (function() {
				return ge
			})), o.d(t, "removalReasonMessagePending", (function() {
				return je
			})), o.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Se
			})), o.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), o.d(t, "removalReasonMessageFailed", (function() {
				return xe
			})), o.d(t, "submitRemovalReason", (function() {
				return ye
			})), o.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/initializeClient/installReducer.ts"),
				r = o("./node_modules/redux/es/redux.js");
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
							response: o
						} = t.payload, {
							data: n
						} = o;
						return {
							...e,
							...n
						}
					}
					case a:
					case m: {
						const {
							reason: o
						} = t.payload;
						return {
							...e,
							[o.id]: o
						}
					}
					case b: {
						const {
							reasonId: o
						} = t.payload, {
							[o]: n,
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
							subredditId: o,
							response: n
						} = t.payload, {
							order: s
						} = n;
						return {
							...e,
							[o]: s
						}
					}
					case a: {
						const {
							subredditId: o,
							reason: n
						} = t.payload;
						return {
							...e,
							[o]: [...e[o], n.id]
						}
					}
					case b: {
						const {
							subredditId: o,
							reasonId: n
						} = t.payload, s = [...e[o]].filter(e => e !== n);
						return {
							...e,
							[o]: s
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
								itemIds: o
							} = t.payload;
							return {
								itemIds: o,
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
				v = o("./src/lib/constants/index.ts"),
				R = o("./src/lib/makeActionCreator/index.ts"),
				k = o("./src/lib/makeCommentsPageKey/index.ts"),
				E = o("./src/lib/makeDraftKey/index.ts"),
				I = o("./src/reddit/actions/bulkActions/index.ts"),
				T = o("./src/reddit/actions/comment/index.ts"),
				w = o("./src/reddit/actions/comment/authoring.ts"),
				A = o("./src/reddit/actions/comment/moderation.ts"),
				N = o("./src/reddit/actions/modal.ts"),
				M = o("./src/reddit/actions/post.ts"),
				D = o("./src/reddit/actions/toaster.ts"),
				P = o("./src/reddit/constants/modals.ts"),
				L = o("./src/lib/makeApiRequest/index.ts"),
				K = o("./src/lib/omitHeaders/index.ts"),
				U = o("./src/reddit/constants/headers.ts"),
				B = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(L.a)(Object(K.a)(e, [U.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: v.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${o}_message/`),
					method: v.jb.POST,
					type: "json",
					data: t
				});
			var H = o("./src/reddit/helpers/isPost.ts"),
				V = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = o("./src/reddit/helpers/routeKey/index.ts"),
				J = o("./src/reddit/models/ModQueue/index.ts"),
				W = o("./src/reddit/models/PostDraft/index.ts"),
				z = o("./src/reddit/models/RemovalReason/index.ts"),
				Q = o("./src/reddit/models/Toast/index.ts"),
				X = o("./src/reddit/selectors/comments.ts"),
				$ = o("./src/reddit/selectors/platform.ts");
			Object(s.a)({
				features: {
					removalReasons: C
				}
			});
			const Y = Object(R.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(R.a)(i),
				ee = Object(R.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = o().subreddits.models[e].name;
					t(Y());
					const i = await ((e, t) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: v.jb.GET
					}))(s(), r);
					i.ok ? t(Z({
						subredditId: e,
						response: i.body
					})) : t(ee(i.error))
				}, oe = Object(R.a)(c), ne = Object(R.a)(a), se = Object(R.a)(d), re = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					o(oe());
					const a = await ((e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: v.jb.POST,
						data: o
					}))(i(), c, t);
					if (a.ok) {
						const {
							id: s
						} = a.body, r = {
							...t,
							id: s
						};
						o(ne({
							subredditId: e,
							reason: r
						})), o(Object(D.f)({
							kind: Q.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else o(se(a.error))
				}, ie = Object(R.a)(l), ce = Object(R.a)(m), ae = Object(R.a)(u), de = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					o(ie());
					const a = await ((e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o.id}`,
						method: v.jb.PUT,
						data: {
							message: o.message,
							title: o.title
						}
					}))(i(), c, t);
					a.ok ? (o(ce({
						subredditId: e,
						reason: t
					})), o(Object(D.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : o(ae(a.error))
				}, le = Object(R.a)(p), me = Object(R.a)(b), ue = Object(R.a)(O), pe = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					o(le());
					const a = await ((e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o}`,
						method: v.jb.DELETE
					}))(i(), c, t);
					a.ok ? (o(me({
						subredditId: e,
						reasonId: t
					})), o(Object(D.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : o(ue(a.error))
				}, be = Object(R.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || o(te(e)), o(be({
						subredditId: e,
						itemIds: t
					})), o(Object(N.i)(P.a.ADD_REMOVAL_REASON))
				}, fe = Object(R.a)("REMOVALREASONS__SUBMIT_PENDING"), he = Object(R.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(R.a)("REMOVALREASONS__SUBMIT_FAILED"), je = Object(R.a)("REMOVALREASONS__MESSAGE_PENDING"), Se = Object(R.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(R.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), xe = Object(R.a)("REMOVALREASONS__MESSAGE_FAILED"), ye = (e, t, o, n, s) => async (r, i, c) => {
					let {
						apiContext: a
					} = c;
					const d = i(),
						l = d.user.account && d.user.account.displayText,
						m = e[0],
						u = Object(H.a)(m) ? z.e.Post : z.e.Comment,
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
									message: o,
									title: t.title,
									type: n
								},
								i = await G(a(), Object(z.h)(s, u), u);
							if (i.ok) {
								if (n === z.f.Public) {
									if (r(_e()), i.body) {
										const e = Object(V.a)(i.body),
											t = {
												comment: e,
												parentId: m
											},
											o = Object($.f)(d),
											n = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let s = o && n && Object(q.a)(n, d, d.posts.models[e.postId]);
										if (s || (s = Object(k.a)(e.postId, null, {
												sort: v.u,
												hasSortParam: !0
											})), u === z.e.Post) {
											const o = Object(E.a)(W.c.replyToPost, m);
											r(Object(w.q)({
												...t,
												headCommentId: Object(X.w)(d, {
													commentsPageKey: s
												}),
												commentsPageKey: s,
												draftKey: o
											}));
											const n = d.postStickiedComments.data[m];
											r(Object(A.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: s
											})), n && n !== e.id && r(Object(T.i)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (u === z.e.Comment) {
											const e = Object(E.a)(W.c.replyToComment, p.id),
												o = Object(X.j)(d, {
													commentId: m,
													commentsPageKey: s
												});
											r(Object(w.o)({
												...t,
												parentCommentId: m,
												commentsPageKey: s,
												draftKey: e,
												depth: o + 1
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
				}, Ce = (e, t, o, s, r) => async (i, c, a) => {
					let {
						apiContext: d
					} = a;
					const l = c(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					i(fe());
					const u = Object(D.f)({
							kind: Q.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
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
						const n = {
							ids: e,
							operation: J.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (i(Object(I.b)(n)), t) {
							const n = {
									itemId: e,
									message: o,
									title: t.title,
									type: s
								},
								r = await G(d(), Object(z.h)(n, z.e.Bulk), z.e.Bulk);
							r.ok ? (i(Se()), i(u)) : i(xe(r.error))
						} else i(u)
					} else i(ge(b.error))
				}
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return Q
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/constants/index.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/actions/comment/index.ts"),
				u = o("./src/reddit/actions/modal.ts"),
				p = o("./src/reddit/actions/post.ts"),
				b = o("./src/reddit/actions/toaster.ts"),
				O = o("./src/lib/makeApiRequest/index.ts"),
				f = o("./src/lib/omitHeaders/index.ts"),
				h = o("./src/reddit/constants/headers.ts"),
				g = o("./src/reddit/models/Toast/index.ts");
			const j = (e, t) => async (o, s, r) => {
				let {
					apiContext: i
				} = r;
				const c = await (async (e, t, o) => Object(O.a)(Object(f.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.jb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: o
						}
					}))(i(), e, t),
					a = `error-block-${t}`,
					l = `success-block-${t}`;
				if (c.ok) {
					o(Object(p.S)({
						[e]: {
							suggestedSort: t
						}
					}));
					const s = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					o(b.f({
						id: l,
						kind: g.b.SuccessCommunityGreen,
						text: s
					}))
				} else o(b.f({
					id: a,
					kind: g.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: j(e, t)
				}))
			};
			var S = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_ = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = o("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				y = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = o("./src/reddit/components/TrackingHelper/index.tsx"),
				v = o("./src/reddit/controls/Dropdown/index.tsx"),
				R = o("./src/reddit/controls/Dropdown/Row.tsx"),
				k = o("./src/reddit/controls/ToggleSwitch/index.tsx"),
				E = o("./src/reddit/helpers/path/index.ts"),
				I = o("./src/reddit/selectors/telemetry.ts");
			o("./src/telemetry/models/Event.ts");
			const T = (e, t, o, n, s) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(I.y)(r, void 0, {
						oldSort: o,
						sort: n,
						source: s
					}),
					userSubreddit: Object(I.qb)(r)
				}),
				w = (e, t) => o => ({
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
			var M = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				D = o("./src/reddit/icons/svgs/Info/index.tsx"),
				P = o("./src/reddit/selectors/activeModalId.ts"),
				L = o("./src/reddit/selectors/comments.ts"),
				K = o("./src/reddit/selectors/moderatorPermissions.ts"),
				U = o("./src/reddit/selectors/posts.ts"),
				B = o("./src/reddit/selectors/tooltip.ts"),
				F = o("./src/reddit/selectors/user.ts"),
				G = o("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = o.n(G),
				V = o("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const q = Object(y.a)(v.a),
				J = e => e === V.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === V.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class W extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== V.a.None) {
							e(t === V.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", V.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", V.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", V.a.None)
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
						onOpen: o,
						selectedSort: s
					} = this.props;
					return r.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, r.a.createElement(R.b, {
						className: Object(a.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${J(s)}`,
						id: t,
						noHover: !0,
						onClick: o
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: o
					}), r.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(R.b, {
						displayText: J(V.a.First),
						isSelected: s === V.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(R.b, {
						displayText: J(V.a.Last),
						isSelected: s === V.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(R.b, {
						displayText: J(V.a.None),
						isSelected: s === V.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var z = W;
			const Q = "CommentSort--SortPicker",
				X = "CommentSort--HighlightPicker",
				$ = "CommentSort--Tooltip",
				Y = Object(y.a)(v.a),
				Z = Object(c.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: o
						} = t;
						return o && Object(L.m)(e, {
							commentId: o
						})
					},
					contestModeModalIsOpen: Object(P.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(B.b)(Q),
					highlightIsOpen: Object(B.b)(X),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(K.m)(e, {
							postId: o
						});
						return !!n && n.posts
					},
					post: U.G,
					postPermalink: U.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(F.v)(e),
							s = !!Object(K.m)(e, {
								postId: o
							}),
							r = Object(U.G)(e, {
								postId: o
							});
						return (s || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: L.p
				}),
				ee = Object(i.b)(Z, (e, t) => {
					let {
						postId: o
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: Q
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: X
							})), t()
						},
						onSetSuggestedSort: t => e(j(o, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.X)(t, o)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: $
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, o, n) => this.props.sendEvent(T(e, this.props.isOverlay, t, o, n)), this.onOpenDropdownClick = () => {
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
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: o,
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
						toggleContestModeModal: v
					} = this.props, I = O.contestMode, T = !b.search.includes(d.t.CONFIDENCE), A = j === d.t.CONFIDENCE && T, N = u && !A, P = d.v[j], L = P ? P() : "", K = y && j === y && !A ? this.addSuggestedLabel(L) : L, U = I ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), B = I ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), F = I ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), G = I && !u;
					return r.a.createElement("div", {
						className: Object(a.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !g && G
						}),
						ref: c
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !G && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(R.b, {
						className: Object(a.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${K}`,
						id: Q,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Y, {
						isOpen: i,
						tooltipId: Q
					}, [d.t.CONFIDENCE, d.t.TOP, d.t.NEW, d.t.CONTROVERSIAL, d.t.OLD, d.t.QA].map(e => {
						const t = o || f,
							n = Object(E.b)(t),
							s = d.v[e],
							i = s ? s() : "";
						return r.a.createElement(x.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(R.b, {
							displayText: i,
							isSelected: j === e,
							skipRoleAttr: !0
						}))
					}))), N && !G && (y ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: j !== y ? this.setSortOnClick : this.clearSortOnClick
					}, j !== y ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: $,
						onMouseEnter: C,
						onMouseLeave: l
					}, r.a.createElement(_.c, {
						className: H.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: $
					}), r.a.createElement(D.a, {
						className: H.a.Info
					})))), u && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(k.a, {
						className: H.a.ToggleSwitch,
						on: I
					}))), g && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(z, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: X,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: h,
						trackHighlight: w
					})), s && r.a.createElement(S.a, {
						actionText: B,
						headerText: U,
						modalText: F,
						onConfirm: this.setContestMode,
						toggleModal: v,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(C.c)(te))
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return f
			})), o.d(t, "a", (function() {
				return h
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = o("./src/reddit/selectors/tooltip.ts"),
				l = o("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = o.n(l),
				u = o("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
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
							tooltipId: o
						} = t;
						return Object(d.b)(o)(e)
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
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = o("./src/reddit/helpers/overlay/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: o,
					to: n,
					...r
				} = e, d = Object(c.b)(n);
				return s.a.createElement(i.a, a({
					className: o,
					to: d
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...o
				} = e, n = t ? d : r.a;
				return s.a.createElement(n, l({}, o, {
					children: o.children,
					className: o.className,
					onClick: o.onClick,
					to: o.to
				}))
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/higherOrderComponents/asTooltip.tsx"),
				i = o("./src/reddit/constants/elementIds.ts"),
				c = o("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const o = Object(r.a)(e, t);
				class n extends s.a.PureComponent {
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
						return s.a.createElement(o, a({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(n)
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, o) {
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
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/controls/Button/index.tsx"),
				c = o("./src/reddit/controls/ToggleSwitch/index.m.less"),
				a = o.n(c);
			t.a = Object(n.memo)(Object(n.forwardRef)((e, t) => {
				const o = e.size || i.d.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(a.a.toggleSwitch, e.className, a.a[o], {
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
		"./src/reddit/endpoints/post/convert.ts": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeApiRequest/index.ts"),
				r = o("./src/lib/omitHeaders/index.ts"),
				i = o("./src/reddit/constants/headers.ts"),
				c = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = o("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, o) => {
				const d = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === a.i.MARKDOWN ? d.richtext_json = o : d.markdown_text = o, Object(s.a)(Object(r.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: n.jb.POST,
					data: d
				})
			}
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return c
			})), o.d(t, "f", (function() {
				return a
			})), o.d(t, "d", (function() {
				return d
			})), o.d(t, "h", (function() {
				return l
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return u
			})), o.d(t, "e", (function() {
				return p
			})), o.d(t, "a", (function() {
				return b
			}));
			var n = o("./node_modules/lodash/map.js"),
				s = o.n(n),
				r = o("./src/lib/FocusTrap/index.ts");
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
					const o = document.createRange();
					return o.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, o) < 0 && e.compareBoundaryPoints(Range.START_TO_END, o) > 0
				},
				m = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const o = t.getRangeAt(0);
					if (!l(o, e)) return;
					const {
						startContainer: n,
						startOffset: s,
						endContainer: r,
						endOffset: i
					} = o, c = document.createRange();
					c.selectNode(e);
					let a = !0;
					if (-1 === c.compareBoundaryPoints(Range.START_TO_START, o) && (c.setStart(n, s), a = !1), 1 === c.compareBoundaryPoints(Range.END_TO_END, o) && (c.setEnd(r, i), a = !1), a) return [e];
					const d = document.createElement("div");
					return d.appendChild(c.cloneContents()), [...d.childNodes]
				},
				u = (e, t, o) => {
					let n = e;
					for (; n && (!o || !o(n));) {
						if (n && t(n)) return n;
						n = n.parentElement
					}
				},
				p = e => e && e.parentElement && u(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
					e.querySelectorAll(r.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return i
			}));
			var n = o("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.I.NO_STRIPE_SUBSCRIPTION:
							case n.I.USER_DOESNT_EXIST:
							case n.I.USER_REQUIRED_ERROR:
							case n.I.VALIDATION_ERROR:
								return e;
							case n.I.NO_USER:
							case n.I.NO_TEXT:
							case n.I.NO_URL:
								return n.I.VALIDATION_ERROR;
							case n.I.CREDIT_CARD_FAILURE:
							case n.I.CREDIT_CARD_FAILURE_GENERIC:
								return n.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.I.VALIDATION_ERROR
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
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, o) {
			"use strict";
			var n;
			o.d(t, "d", (function() {
					return r
				})), o.d(t, "b", (function() {
					return i
				})), o.d(t, "a", (function() {
					return c
				})), o.d(t, "c", (function() {
					return a
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(n || (n = {}));
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
					})(n.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				i = () => s(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => {
					return !!s(n.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return m
			})), o.d(t, "j", (function() {
				return u
			})), o.d(t, "b", (function() {
				return p
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "a", (function() {
				return O
			})), o.d(t, "c", (function() {
				return f
			})), o.d(t, "d", (function() {
				return h
			})), o.d(t, "g", (function() {
				return g
			})), o.d(t, "k", (function() {
				return j
			})), o.d(t, "i", (function() {
				return S
			})), o.d(t, "h", (function() {
				return _
			}));
			var n = o("./src/reddit/constants/tracking.ts"),
				s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				r = o("./src/reddit/models/PostDraft/index.ts"),
				i = o("./src/reddit/selectors/comments.ts"),
				c = o("./src/reddit/selectors/platform.ts"),
				a = o("./src/reddit/selectors/telemetry.ts"),
				d = o("./src/telemetry/index.ts");
			const l = e => {
					const t = Object(c.o)(e);
					return {
						source: "comment_composer",
						action: n.c.CLICK,
						...Object(a.n)(e),
						screen: Object(a.Y)(e),
						subreddit: Object(a.gb)(e),
						post: t ? Object(a.H)(e, t) : null,
						profile: Object(a.Q)(e),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				m = async (e, t, n, s) => {
					const r = {
							commentId: s,
							commentsPageKey: n
						},
						c = s && Object(i.j)(e, r) || 0,
						{
							getFlairData: m
						} = await o.e("getFlairData").then(o.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
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
				}, u = (e, t, o, n) => {
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
							parentId: n,
							postId: o
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
				}), g = (e, t) => o => {
					const n = "image_upload" === e || "video_upload" === e;
					return {
						...l(o),
						noun: n ? e : "text_option",
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
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, o) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				c = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: o,
					...n
				} = e;
				return s.a.createElement("svg", a({
					className: Object(r.a)(c.a.dropdown, {
						[c.a.mRedditStyle]: !o
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
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
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return s
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "f", (function() {
				return a
			})), o.d(t, "e", (function() {
				return d
			})), o.d(t, "g", (function() {
				return l
			})), o.d(t, "h", (function() {
				return m
			}));
			var n = o("./src/reddit/helpers/isPost.ts");
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
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
				m = (e, t) => {
					return {
						[t === d.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return u
			}));
			var n = o("./node_modules/reselect/es/index.js"),
				s = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				i = o("./src/reddit/selectors/experiments/utils.ts");
			const c = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				a = Object(n.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), i.a),
				d = e => c.find(t => !!Object(i.a)(a(e, t))),
				l = Object(n.a)(d, e => !!e),
				m = e => {
					const t = d(e);
					return !!t && a(e, t) === s.Y.SkipOnboarding
				},
				u = e => {
					const t = d(e);
					return !!t && a(e, t) === s.Y.RegOnboarding
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"edd5d18f5e93"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3954b4d4b89c"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.e61c1475142811e14f4c.js.map