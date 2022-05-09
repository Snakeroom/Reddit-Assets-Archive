// https://www.redditstatic.com/desktop2x/removalReasonActions.deb35ce17845caf316e2.js
// Retrieved at 5/9/2022, 11:50:04 AM by Reddit Dataminer v1.0.0
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
				return se
			})), o.d(t, "q", (function() {
				return ie
			})), o.d(t, "o", (function() {
				return ce
			})), o.d(t, "s", (function() {
				return le
			})), o.d(t, "v", (function() {
				return me
			})), o.d(t, "p", (function() {
				return be
			})), o.d(t, "u", (function() {
				return fe
			})), o.d(t, "n", (function() {
				return he
			})), o.d(t, "m", (function() {
				return je
			})), o.d(t, "h", (function() {
				return _e
			})), o.d(t, "a", (function() {
				return xe
			})), o.d(t, "b", (function() {
				return Re
			})), o.d(t, "r", (function() {
				return ve
			})), o.d(t, "f", (function() {
				return Ee
			})), o.d(t, "g", (function() {
				return ke
			})), o.d(t, "k", (function() {
				return Ie
			})), o.d(t, "d", (function() {
				return we
			})), o.d(t, "c", (function() {
				return De
			})), o.d(t, "j", (function() {
				return Pe
			})), o.d(t, "i", (function() {
				return Be
			})), o.d(t, "l", (function() {
				return Fe
			})), o.d(t, "t", (function() {
				return Ge
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
				R = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = o("./src/reddit/helpers/genericServerError/index.ts"),
				E = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				I = o("./src/reddit/models/PostCreationForm/index.ts"),
				T = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const A = (e, t, o, n) => {
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
				N = async (e, t, o, n, r, i) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return r === I.i.MARKDOWN ? c.text = o.text : (c.text = null, c.richtext_json = i), Object(_.a)(Object(y.a)(e, [C.a]), {
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
							comment: Object(E.a)(e.body.json.data.things[0].data, n)
						}
					} : {
						...e,
						body: {
							comment: Object(E.a)(e.body, n)
						}
					} : {
						...e,
						error: e.error || Object(v.a)()
					})
				};
			var M = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var D = o("./src/reddit/endpoints/post/index.tsx"),
				P = o("./src/reddit/endpoints/post/convert.ts"),
				L = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				K = o("./src/reddit/featureFlags/index.ts"),
				U = o("./src/reddit/helpers/correlationIdTracker.ts"),
				B = o("./src/reddit/helpers/dom/index.ts"),
				F = o("./src/reddit/helpers/localStorage/index.ts"),
				G = o("./src/reddit/helpers/sessionStorage/index.ts"),
				H = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				V = o("./src/reddit/models/Comment/index.ts"),
				q = o("./src/reddit/models/PostDraft/index.ts"),
				J = o("./src/reddit/models/RichTextJson/index.ts"),
				W = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				z = o("./src/reddit/models/Toast/index.ts"),
				Q = o("./src/reddit/selectors/comments.ts"),
				X = o("./src/reddit/selectors/commentSelector.ts"),
				$ = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				Y = o("./src/reddit/selectors/platform.ts"),
				Z = o("./src/reddit/selectors/posts.ts"),
				ee = o("./src/reddit/selectors/user.ts"),
				te = o("./src/reddit/actions/comment/index.ts"),
				oe = o("./src/reddit/actions/comment/constants.ts");
			const ne = Object(r.a)(oe.k),
				se = e => {
					let {
						hasFocus: t,
						draftKey: o
					} = e;
					return async (e, n) => {
						const s = n();
						if (!!s.features.comments.drafts[o])
							if (Object(ee.S)(s) && t) {
								const n = ne({
									hasFocus: t,
									draftKey: o
								});
								e(Object(a.f)(n))
							} else e(ne({
								hasFocus: t,
								draftKey: o
							}))
					}
				},
				re = Object(r.a)(oe.I),
				ie = Object(r.a)(oe.K),
				ce = Object(r.a)(oe.J),
				ae = Object(r.a)(oe.H),
				de = async (e, t, o, n) => {
					const s = n.ok && n.body,
						r = s && s.comment && s.comment.id;
					await H.f(e, o, t, r)
				}, le = "Toxicity_Warning__Modal", me = e => async (t, o, n) => {
					let {
						gqlContext: s
					} = n;
					const r = o(),
						i = Object(Y.e)(r);
					let c = "";
					i && (c = i.name);
					const {
						formData: a,
						editorMode: d
					} = e;
					if (K.d.enableToxicityWarning(r)) {
						if (!(await A(s(), c, a, d))) return void t(Object(l.i)(le))
					}
					t(be(e))
				}, ue = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, pe = e => {
					let t = null;
					return e.rteState && (t = h.a.toRichTextJSON(e.rteState).document), JSON.stringify({
						document: t
					})
				}, be = e => async (t, o) => {
					t(Object(l.g)(le));
					const n = o(),
						s = Object($.a)(n),
						r = Object($.c)(n);
					if (!n.user.account && s) {
						const o = pe(e.formData),
							n = ue(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.j)()), Object(G.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: n
							},
							isSkipOnboarding: r
						})
					} else t(Oe(e, !1))
				}, Oe = (e, t, o, r) => {
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
							apiContext: _
						} = S;
						const x = j(),
							y = x.features.comments.submit.pending[d];
						if (!x.user.account || y) return;
						t || e(re({
							draftKey: d,
							draft: l
						}));
						const C = x.user.account.displayText,
							R = l.commentMode;
						let v;
						if (h) v = await Object(L.i)(_(), i, l, C), e(Object(b.a)({
							streamId: i,
							level: v.body.automuteLevel
						}));
						else {
							const e = t && o ? o : pe(l);
							v = await N(_(), i, l, C, R, e)
						}
						if (v.ok) {
							let o;
							if (o = v.body, e(ie({
									...o,
									headCommentId: Object(Q.w)(x, {
										commentsPageKey: a
									}),
									commentsPageKey: a,
									draftKey: d
								})), t) {
								const e = Object(Y.i)(x);
								Object(c.a)(!!e)
							}
							const n = Object(Z.G)(j(), {
								postId: i
							});
							e(Object(u.z)(n, g.a.CommentSubmitted))
						} else {
							if (v.error && v.error.type === s.Kb) {
								const e = t && r ? r : ue(l);
								H.h(x, e, i)
							}
							const o = v.error && v.error.fields && v.error.fields[0] ? v.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(ae({
								draftKey: d,
								error: v.error
							})), e(Object(f.f)({
								duration: f.a,
								kind: z.b.Error,
								text: o
							}))
						}
						de(j(), a, m, v).then(() => v.ok && m === I.i.RICH_TEXT ? Object(U.b)(U.a.CommentComposer) : void 0), p || Object(O.d)(), t && Object(G.a)()
					}
				}, fe = e => async (t, o, n) => {
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
					} = e, u = o(), p = Object(Y.e)(u);
					let b = "";
					if (p && (b = p.name), K.d.enableToxicityWarning(u)) {
						if (!(await A(s(), b, d, m))) return void t(Object(l.i)(le))
					}
					t(he({
						commentsPageKey: i,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: d,
						editorMode: m
					}))
				}, he = e => async (t, o) => {
					t(Object(l.g)(le));
					const n = o(),
						s = Object($.a)(n),
						r = Object($.c)(n);
					if (!n.user.account && s) {
						const o = pe(e.formData),
							n = ue(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.j)()), Object(G.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: n
							},
							isSkipOnboarding: r
						})
					} else t(ge(e, !1))
				}, ge = (e, t, o, n) => async (r, i, a) => {
					let {
						apiContext: d
					} = a;
					const {
						parentCommentId: l,
						commentsPageKey: m,
						parentCommentDepth: u,
						draftKey: p,
						formData: b,
						editorMode: f
					} = e, h = i(), g = h.features.comments.submit.pending[p];
					if (!h.user.account || g) return;
					t || r(re({
						draftKey: p,
						draft: b
					}));
					const j = h.user.account.displayText,
						S = b.commentMode,
						_ = t && o ? o : pe(b),
						x = await N(d(), l, b, j, S, _);
					if (x.ok) {
						if (r(ce({
								...x.body,
								parentCommentId: l,
								commentsPageKey: m,
								draftKey: p,
								depth: u + 1
							})), t) {
							const e = Object(Y.i)(h);
							Object(c.a)(!!e)
						}
					} else {
						if (x.error && x.error.type === s.Kb) {
							const e = Object(X.b)(h, {
								commentId: l
							});
							if (!e) return;
							const o = t && n ? n : ue(b);
							H.h(h, o, e.postId, l)
						}
						r(ae({
							draftKey: p,
							error: x.error
						}))
					}
					de(i(), m, f, x), Object(O.d)(), t && Object(G.a)()
				}, je = () => async e => {
					const t = Object(G.b)();
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
						c && e(Object(m.skipOnboardingModal)()), s ? await e(Oe({
							...t.comment,
							postId: s
						}, !0, r, i)) : n && void 0 !== o && await e(ge({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: o
						}, !0, r, i))
					}
				}, Se = Object(r.a)(oe.q), _e = Object(r.a)(oe.y), xe = Object(r.a)(oe.p), ye = Object(r.a)(oe.l), Ce = (Object(r.a)(oe.g), Object(r.a)(oe.m)), Re = (Object(r.a)(oe.t), (e, t, o) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const a = e === I.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(J.G)(t)) s(Ce({
						editorMode: e,
						draftKey: o,
						content: a ? J.i : ""
					})), s(Object(p.c)(e));
					else {
						s(Object(p.b)(o));
						const r = await Object(P.a)(c(), e, a ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(p.a)(o)), s(Ce({
								editorMode: e,
								draftKey: o,
								content: t
							})), s(Object(p.c)(e))
						} else s(Object(p.a)(o)), s(Object(f.f)({
							duration: f.a,
							kind: z.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), ve = e => {
					let {
						commentsPageKey: t,
						parentCommentId: o,
						singleOpen: n
					} = e;
					return async (e, s) => {
						const r = s(),
							c = Object(i.a)(q.c.replyToComment, o);
						if (!Object(ee.Q)(s()) && !Object($.a)(r)) return e(Object(d.j)()), void e(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(Q.m)(s(), {
								commentId: o
							})
						}));
						const m = r.features.comments.replyFormOpen[t],
							u = m && m[o];
						if ((u || m && n) && (Object.keys(m).forEach(o => m[o] && e(xe({
								parentCommentId: o,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							b = null;
						const O = r.user.prefs.commentMode,
							f = Object(B.d)();
						if (f) {
							const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (O === I.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => W.s(e, null)).map(e => W.l([e])),
									o = W.s("", null),
									n = W.l([o]);
								b = {
									document: [W.c(t), n]
								}
							}
						}
						const h = r.features.comments.drafts[c];
						let g;
						if (g = f ? {
								commentMode: O,
								draftType: q.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : h || {
								commentMode: O,
								draftType: q.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(ee.S)(r)) {
							const n = Se({
								parentCommentId: o,
								commentsPageKey: t,
								draftKey: c,
								formData: g
							});
							e(Object(a.f)(n))
						} else e(Se({
							parentCommentId: o,
							commentsPageKey: t,
							draftKey: c,
							formData: g
						}))
					}
				}, Ee = e => async t => {
					t(Object(te.p)(e)), t(we(e))
				}, ke = e => {
					let {
						parentCommentId: t,
						commentsPageKey: o
					} = e;
					return async e => {
						e(xe({
							parentCommentId: t,
							commentsPageKey: o
						})), e(ve({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Object(te.p)({
							commentId: t,
							commentsPageKey: o
						}))
					}
				}, Ie = (e, t) => o => o(ye({
					draftKey: e,
					formData: t
				})), Te = Object(r.a)(oe.s), we = e => {
					let {
						commentId: t,
						commentMode: o,
						commentsPageKey: n,
						draftKey: s,
						text: r
					} = e;
					return async (e, i) => {
						const c = i();
						c.user.account && (H.c(c), e(Te({
							commentId: t,
							commentsPageKey: n,
							draftKey: s,
							formData: {
								text: r,
								commentMode: o,
								rteState: null,
								draftType: q.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Ae = Object(r.a)(oe.D), Ne = Object(r.a)(oe.C), Me = Object(r.a)(oe.E), De = Object(r.a)(oe.h), Pe = e => {
					let {
						id: t,
						commentsPageKey: o,
						depth: n,
						draftKey: r,
						formData: i
					} = e;
					return async (e, n, c) => {
						let {
							apiContext: a
						} = c;
						const d = n();
						if (!d.user.account) return;
						e(Ae({
							draftKey: r
						})), H.d(d);
						const l = d.user.account.displayText || "",
							m = i.commentMode,
							u = await (async (e, t, o, n, r, i) => {
								const c = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								if (i === I.i.MARKDOWN) c.text = n.text;
								else {
									c.text = null;
									let e = null;
									n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
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
							const n = u.body;
							e(Me({
								commentId: t,
								commentsPageKey: o,
								draftKey: r
							})), e(Object(te.i)({
								[t]: {
									...n.comment
								}
							}))
						} else e(Ne({
							draftKey: r,
							error: u.error
						}))
					}
				}, Le = Object(r.a)(oe.A), Ke = Object(r.a)(oe.z), Ue = Object(r.a)(oe.B), Be = (e, t) => async (o, n, r) => {
					let {
						apiContext: i
					} = r;
					const c = n();
					o(Le({
						id: e
					})), H.a(e, c);
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
					a.ok ? o(Ue({
						id: e,
						postId: t
					})) : o(Ke({
						id: e,
						error: a.error
					}))
				}, Fe = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = !o().features.comments.models[e].sendReplies;
					t(Object(te.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(D.p)(s(), e, r)).ok || t(Object(te.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Ge = (e, t) => async (o, s, r) => {
					let {
						gqlContext: i
					} = r;
					var c, a, d, l, m, u;
					o(Object(te.c)());
					const p = e => Object(f.f)(Object(f.e)(e, z.b.Error));
					if (((null === (a = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === j.a) o(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === V.a.FOLLOWED,
							c = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(te.n)(c)), (await ((e, t) => Object(x.a)(e, {
								...M,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(F.wb)(null !== (m = null === (l = null === (d = s().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = r ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(f.f)({
								kind: z.b.SuccessCommunityGreen,
								text: e
							}))
						} else o(Object(te.n)(c)), o(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
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
				return R
			})), o.d(t, "h", (function() {
				return v
			})), o.d(t, "b", (function() {
				return E
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
					if (!Object(f.Q)(o())) return void t(Object(c.i)(l.a.LOGIN_MODAL_ID));
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
				}, R = e => async (t, o, s) => {
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
				}, v = (e, t, o) => async (r, i, c) => {
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
				}, E = (e, t, o) => async (n, r, c) => {
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
					})), Object(c.sb)(s + 1)
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
				R = o("./src/lib/constants/index.ts"),
				v = o("./src/lib/makeActionCreator/index.ts"),
				E = o("./src/lib/makeCommentsPageKey/index.ts"),
				k = o("./src/lib/makeDraftKey/index.ts"),
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
					method: R.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				G = (e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${o}_message/`),
					method: R.jb.POST,
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
			const Y = Object(v.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(v.a)(i),
				ee = Object(v.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = o().subreddits.models[e].name;
					t(Y());
					const i = await ((e, t) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: R.jb.GET
					}))(s(), r);
					i.ok ? t(Z({
						subredditId: e,
						response: i.body
					})) : t(ee(i.error))
				}, oe = Object(v.a)(c), ne = Object(v.a)(a), se = Object(v.a)(d), re = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					o(oe());
					const a = await ((e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: R.jb.POST,
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
				}, ie = Object(v.a)(l), ce = Object(v.a)(m), ae = Object(v.a)(u), de = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					o(ie());
					const a = await ((e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o.id}`,
						method: R.jb.PUT,
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
				}, le = Object(v.a)(p), me = Object(v.a)(b), ue = Object(v.a)(O), pe = (e, t) => async (o, s, r) => {
					let {
						apiContext: i
					} = r;
					const c = s().subreddits.models[e].name;
					o(le());
					const a = await ((e, t, o) => Object(L.a)(Object(K.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${o}`,
						method: R.jb.DELETE
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
				}, be = Object(v.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || o(te(e)), o(be({
						subredditId: e,
						itemIds: t
					})), o(Object(N.i)(P.a.ADD_REMOVAL_REASON))
				}, fe = Object(v.a)("REMOVALREASONS__SUBMIT_PENDING"), he = Object(v.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(v.a)("REMOVALREASONS__SUBMIT_FAILED"), je = Object(v.a)("REMOVALREASONS__MESSAGE_PENDING"), Se = Object(v.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(v.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), xe = Object(v.a)("REMOVALREASONS__MESSAGE_FAILED"), ye = (e, t, o, n, s) => async (r, i, c) => {
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
										const e = Object(V.a)(i.body, l),
											t = {
												comment: e,
												parentId: m
											},
											o = Object($.f)(d),
											n = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let s = o && n && Object(q.a)(n, d, d.posts.models[e.postId]);
										if (s || (s = Object(E.a)(e.postId, null, {
												sort: R.u,
												hasSortParam: !0
											})), u === z.e.Post) {
											const o = Object(k.a)(W.c.replyToPost, m);
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
											const e = Object(k.a)(W.c.replyToComment, p.id),
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
				R = o("./src/reddit/controls/Dropdown/index.tsx"),
				v = o("./src/reddit/controls/Dropdown/Row.tsx"),
				E = o("./src/reddit/controls/ToggleSwitch/index.tsx"),
				k = o("./src/reddit/helpers/path/index.ts"),
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
			const q = Object(y.a)(R.a),
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
					}, r.a.createElement(v.b, {
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
					}, r.a.createElement(v.b, {
						displayText: J(V.a.First),
						isSelected: s === V.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(v.b, {
						displayText: J(V.a.Last),
						isSelected: s === V.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(v.b, {
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
				Y = Object(y.a)(R.a),
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
						toggleContestModeModal: R
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
					}, r.a.createElement(v.b, {
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
							n = Object(k.b)(t),
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
						}, r.a.createElement(v.b, {
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
					}), r.a.createElement(E.a, {
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
						toggleModal: R,
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
			})), o.d(t, "h", (function() {
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
				}
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
					return !!t && a(e, t) === s.W.SkipOnboarding
				},
				u = e => {
					const t = d(e);
					return !!t && a(e, t) === s.W.RegOnboarding
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.deb35ce17845caf316e2.js.map