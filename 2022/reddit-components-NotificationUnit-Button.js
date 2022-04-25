// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.3469f9c8f793b335abc5.js
// Retrieved at 4/25/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./src/lib/scroll/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			}));
			var o = n("./src/lib/domUtils/index.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				i = n("./src/reddit/components/CommentSort/index.tsx"),
				s = n("./src/reddit/constants/elementIds.ts");
			const c = () => {
					r.a.write(() => {
						const t = document.getElementById(s.e);
						t ? Object(o.c)(t, 0) : Object(o.c)(document, 0)
					})
				},
				a = t => {
					r.a.read(() => {
						const e = t ? document.getElementById(s.e) : window,
							n = document.getElementById(i.a);
						if (e && n) {
							const o = t ? n.offsetTop : n.offsetTop - 50;
							r.a.write(() => e.scrollTo({
								top: o,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/comment/authoring.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return rt
			})), n.d(e, "q", (function() {
				return st
			})), n.d(e, "o", (function() {
				return ct
			})), n.d(e, "s", (function() {
				return lt
			})), n.d(e, "v", (function() {
				return ut
			})), n.d(e, "p", (function() {
				return bt
			})), n.d(e, "u", (function() {
				return Ot
			})), n.d(e, "n", (function() {
				return ht
			})), n.d(e, "m", (function() {
				return Ct
			})), n.d(e, "h", (function() {
				return yt
			})), n.d(e, "a", (function() {
				return _t
			})), n.d(e, "b", (function() {
				return jt
			})), n.d(e, "r", (function() {
				return Tt
			})), n.d(e, "f", (function() {
				return kt
			})), n.d(e, "g", (function() {
				return vt
			})), n.d(e, "k", (function() {
				return Et
			})), n.d(e, "d", (function() {
				return Nt
			})), n.d(e, "c", (function() {
				return At
			})), n.d(e, "j", (function() {
				return Mt
			})), n.d(e, "i", (function() {
				return Kt
			})), n.d(e, "l", (function() {
				return Bt
			})), n.d(e, "t", (function() {
				return Ht
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeDraftKey/index.ts"),
				c = n("./src/lib/scroll/index.ts"),
				a = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/onboarding/index.ts"),
				m = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCreation/editorContent.ts"),
				b = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				f = n("./src/reddit/actions/shortcuts/utils.ts"),
				O = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				g = n("./src/reddit/constants/adEvents.ts"),
				C = n("./src/reddit/constants/localStorage.ts"),
				x = n("./src/redditGQL/operations/CommentToxicity.json"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				_ = n("./src/lib/makeGqlRequest/index.ts"),
				I = n("./src/lib/omitHeaders/index.ts"),
				S = n("./src/reddit/constants/headers.ts"),
				j = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = n("./src/reddit/helpers/genericServerError/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				v = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				E = n("./src/reddit/models/PostCreationForm/index.ts"),
				w = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				N = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const R = (t, e, n, o) => {
					let r, i;
					if (o === E.i.MARKDOWN) r = n.text, i = null;
					else {
						r = null;
						let t = null;
						n.rteState && (t = h.a.toRichTextJSON(n.rteState).document), i = JSON.stringify({
							document: t
						})
					}
					return Object(_.a)(t, {
						...x,
						variables: {
							subredditName: e,
							markdown: r,
							richText: i
						}
					}).then(t => !t.ok || t.body.data.isValidComment)
				},
				P = async (t, e, n, o, i, s) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: e
					};
					return i === E.i.MARKDOWN ? c.text = n.text : (c.text = null, c.richtext_json = s), Object(y.a)(Object(I.a)(t, [S.a]), {
						method: r.kb.POST,
						endpoint: Object(j.a)(Object(w.a)(Object(N.a)(`${t.apiUrl}/api/comment.json`))),
						data: c
					}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
						...t,
						ok: !1,
						error: Object(v.a)(t)
					} : {
						...t,
						body: {
							comment: Object(k.a)(t.body.json.data.things[0].data, o)
						}
					} : {
						...t,
						body: {
							comment: Object(k.a)(t.body, o)
						}
					} : {
						...t,
						error: t.error || Object(T.a)()
					})
				};
			var D = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var A = n("./src/reddit/endpoints/post/index.tsx"),
				M = n("./src/reddit/endpoints/post/convert.ts"),
				L = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				U = n("./src/reddit/featureFlags/index.ts"),
				F = n("./src/reddit/helpers/correlationIdTracker.ts"),
				K = n("./src/reddit/helpers/dom/index.ts"),
				B = n("./src/reddit/helpers/localStorage/index.ts"),
				H = n("./src/reddit/helpers/sessionStorage/index.ts"),
				V = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				W = n("./src/reddit/models/Comment/index.ts"),
				J = n("./src/reddit/models/PostDraft/index.ts"),
				G = n("./src/reddit/models/RichTextJson/index.ts"),
				q = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				X = n("./src/reddit/models/Toast/index.ts"),
				Q = n("./src/reddit/selectors/comments.ts"),
				z = n("./src/reddit/selectors/commentSelector.ts"),
				Y = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				$ = n("./src/reddit/selectors/platform.ts"),
				Z = n("./src/reddit/selectors/posts.ts"),
				tt = n("./src/reddit/selectors/user.ts"),
				et = n("./src/reddit/actions/comment/index.ts"),
				nt = n("./src/reddit/actions/comment/constants.ts");
			const ot = Object(i.a)(nt.k),
				rt = t => {
					let {
						hasFocus: e,
						draftKey: n
					} = t;
					return async (t, o) => {
						const r = o();
						if (!!r.features.comments.drafts[n])
							if (Object(tt.T)(r) && e) {
								const o = ot({
									hasFocus: e,
									draftKey: n
								});
								t(Object(a.f)(o))
							} else t(ot({
								hasFocus: e,
								draftKey: n
							}))
					}
				},
				it = Object(i.a)(nt.I),
				st = Object(i.a)(nt.K),
				ct = Object(i.a)(nt.J),
				at = Object(i.a)(nt.H),
				dt = async (t, e, n, o) => {
					const r = o.ok && o.body,
						i = r && r.comment && r.comment.id;
					await V.f(t, n, e, i)
				}, lt = "Toxicity_Warning__Modal", ut = t => async (e, n, o) => {
					let {
						gqlContext: r
					} = o;
					const i = n(),
						s = Object($.e)(i);
					let c = "";
					s && (c = s.name);
					const {
						formData: a,
						editorMode: d
					} = t;
					if (U.d.enableToxicityWarning(i)) {
						if (!(await R(r(), c, a, d))) return void e(Object(l.i)(lt))
					}
					e(bt(t))
				}, mt = t => t.rteState ? h.a.toRichTextJSON(t.rteState) : t.rtJson || t.text, pt = t => {
					let e = null;
					return t.rteState && (e = h.a.toRichTextJSON(t.rteState).document), JSON.stringify({
						document: e
					})
				}, bt = t => async (e, n) => {
					e(Object(l.g)(lt));
					const o = n(),
						r = Object(Y.a)(o),
						i = Object(Y.b)(o);
					if (!o.user.account && r) {
						const n = pt(t.formData),
							o = mt(t.formData);
						e(Object(l.k)({
							actionSource: l.a.Reply
						})), e(Object(d.j)()), Object(H.d)({
							comment: {
								...t,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: i
						})
					} else e(ft(t, !1))
				}, ft = (t, e, n, i) => {
					let {
						postId: s,
						commentsPageKey: a,
						draftKey: d,
						formData: l,
						editorMode: u,
						disableAutofocus: p,
						isLiveStreaming: h
					} = t;
					return async (t, C, x) => {
						let {
							apiContext: y
						} = x;
						const _ = C(),
							I = _.features.comments.submit.pending[d];
						if (!_.user.account || I) return;
						e || t(it({
							draftKey: d,
							draft: l
						}));
						const S = _.user.account.displayText,
							j = l.commentMode;
						let T;
						if (h) T = await Object(L.i)(y(), s, l, S), t(Object(b.a)({
							streamId: s,
							level: T.body.automuteLevel
						}));
						else {
							const t = e && n ? n : pt(l);
							T = await P(y(), s, l, S, j, t)
						}
						if (T.ok) {
							let n;
							if (n = T.body, t(st({
									...n,
									headCommentId: Object(Q.w)(_, {
										commentsPageKey: a
									}),
									commentsPageKey: a,
									draftKey: d
								})), e) {
								const t = Object($.i)(_);
								Object(c.a)(!!t)
							}
							const o = Object(Z.G)(C(), {
								postId: s
							});
							t(Object(m.z)(o, g.a.CommentSubmitted))
						} else {
							if (T.error && T.error.type === r.Lb) {
								const t = e && i ? i : mt(l);
								V.h(_, t, s)
							}
							const n = T.error && T.error.fields && T.error.fields[0] ? T.error.fields[0].msg : o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							t(at({
								draftKey: d,
								error: T.error
							})), t(Object(O.f)({
								duration: O.a,
								kind: X.b.Error,
								text: n
							}))
						}
						dt(C(), a, u, T).then(() => T.ok && u === E.i.RICH_TEXT ? Object(F.b)(F.a.CommentComposer) : void 0), p || Object(f.d)(), e && Object(H.a)()
					}
				}, Ot = t => async (e, n, o) => {
					let {
						gqlContext: r
					} = o;
					const {
						parentCommentId: i,
						commentsPageKey: s,
						parentCommentDepth: c,
						draftKey: a,
						formData: d,
						editorMode: u
					} = t, m = n(), p = Object($.e)(m);
					let b = "";
					if (p && (b = p.name), U.d.enableToxicityWarning(m)) {
						if (!(await R(r(), b, d, u))) return void e(Object(l.i)(lt))
					}
					e(ht({
						commentsPageKey: s,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: i,
						formData: d,
						editorMode: u
					}))
				}, ht = t => async (e, n) => {
					e(Object(l.g)(lt));
					const o = n(),
						r = Object(Y.a)(o),
						i = Object(Y.b)(o);
					if (!o.user.account && r) {
						const n = pt(t.formData),
							o = mt(t.formData);
						e(Object(l.k)({
							actionSource: l.a.Reply
						})), e(Object(d.j)()), Object(H.d)({
							comment: {
								...t,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: i
						})
					} else e(gt(t, !1))
				}, gt = (t, e, n, o) => async (i, s, a) => {
					let {
						apiContext: d
					} = a;
					const {
						parentCommentId: l,
						commentsPageKey: u,
						parentCommentDepth: m,
						draftKey: p,
						formData: b,
						editorMode: O
					} = t, h = s(), g = h.features.comments.submit.pending[p];
					if (!h.user.account || g) return;
					e || i(it({
						draftKey: p,
						draft: b
					}));
					const C = h.user.account.displayText,
						x = b.commentMode,
						y = e && n ? n : pt(b),
						_ = await P(d(), l, b, C, x, y);
					if (_.ok) {
						if (i(ct({
								..._.body,
								parentCommentId: l,
								commentsPageKey: u,
								draftKey: p,
								depth: m + 1
							})), e) {
							const t = Object($.i)(h);
							Object(c.a)(!!t)
						}
					} else {
						if (_.error && _.error.type === r.Lb) {
							const t = Object(z.b)(h, {
								commentId: l
							});
							if (!t) return;
							const n = e && o ? o : mt(b);
							V.h(h, n, t.postId, l)
						}
						i(at({
							draftKey: p,
							error: _.error
						}))
					}
					dt(s(), u, O, _), Object(f.d)(), e && Object(H.a)()
				}, Ct = () => async t => {
					const e = Object(H.b)();
					if (e) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: o,
								postId: r,
								richTextJSONData: i,
								commentBodyText: s
							},
							isSkipOnboarding: c
						} = e;
						c && t(Object(u.skipOnboardingModal)()), r ? await t(ft({
							...e.comment,
							postId: r
						}, !0, i, s)) : o && void 0 !== n && await t(gt({
							...e.comment,
							parentCommentId: o,
							parentCommentDepth: n
						}, !0, i, s))
					}
				}, xt = Object(i.a)(nt.q), yt = Object(i.a)(nt.y), _t = Object(i.a)(nt.p), It = Object(i.a)(nt.l), St = (Object(i.a)(nt.g), Object(i.a)(nt.m)), jt = (Object(i.a)(nt.t), (t, e, n) => async (r, i, s) => {
					let {
						apiContext: c
					} = s;
					const a = t === E.i.RICH_TEXT;
					if (!e || "object" == typeof e && Object(G.G)(e)) r(St({
						editorMode: t,
						draftKey: n,
						content: a ? G.i : ""
					})), r(Object(p.c)(t));
					else {
						r(Object(p.b)(n));
						const i = await Object(M.a)(c(), t, a ? e : JSON.stringify(e));
						if (i.ok) {
							const e = i.body.output;
							r(Object(p.a)(n)), r(St({
								editorMode: t,
								draftKey: n,
								content: e
							})), r(Object(p.c)(t))
						} else r(Object(p.a)(n)), r(Object(O.f)({
							duration: O.a,
							kind: X.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Tt = t => {
					let {
						commentsPageKey: e,
						parentCommentId: n,
						singleOpen: o
					} = t;
					return async (t, r) => {
						const i = r(),
							c = Object(s.a)(J.c.replyToComment, n);
						if (!Object(tt.R)(r()) && !Object(Y.a)(i)) return t(Object(d.j)()), void t(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(Q.m)(r(), {
								commentId: n
							})
						}));
						const u = i.features.comments.replyFormOpen[e],
							m = u && u[n];
						if ((m || u && o) && (Object.keys(u).forEach(n => u[n] && t(_t({
								parentCommentId: n,
								commentsPageKey: e
							}))), m)) return;
						let p = "",
							b = null;
						const f = i.user.prefs.commentMode,
							O = Object(K.d)();
						if (O) {
							const t = O.filter(t => !!t && 10 !== t.charCodeAt(0));
							if (f === E.i.MARKDOWN) p = t.map(t => `> ${t}\n`).join("");
							else {
								const e = t.map(t => q.s(t, null)).map(t => q.l([t])),
									n = q.s("", null),
									o = q.l([n]);
								b = {
									document: [q.c(e), o]
								}
							}
						}
						const h = i.features.comments.drafts[c];
						let g;
						if (g = O ? {
								commentMode: f,
								draftType: J.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : h || {
								commentMode: f,
								draftType: J.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(tt.T)(i)) {
							const o = xt({
								parentCommentId: n,
								commentsPageKey: e,
								draftKey: c,
								formData: g
							});
							t(Object(a.f)(o))
						} else t(xt({
							parentCommentId: n,
							commentsPageKey: e,
							draftKey: c,
							formData: g
						}))
					}
				}, kt = t => async e => {
					e(Object(et.p)(t)), e(Nt(t))
				}, vt = t => {
					let {
						parentCommentId: e,
						commentsPageKey: n
					} = t;
					return async t => {
						t(_t({
							parentCommentId: e,
							commentsPageKey: n
						})), t(Tt({
							parentCommentId: e,
							commentsPageKey: n
						})), t(Object(et.p)({
							commentId: e,
							commentsPageKey: n
						}))
					}
				}, Et = (t, e) => n => n(It({
					draftKey: t,
					formData: e
				})), wt = Object(i.a)(nt.s), Nt = t => {
					let {
						commentId: e,
						commentMode: n,
						commentsPageKey: o,
						draftKey: r,
						text: i
					} = t;
					return async (t, s) => {
						const c = s();
						c.user.account && (V.c(c), t(wt({
							commentId: e,
							commentsPageKey: o,
							draftKey: r,
							formData: {
								text: i,
								commentMode: n,
								rteState: null,
								draftType: J.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Rt = Object(i.a)(nt.D), Pt = Object(i.a)(nt.C), Dt = Object(i.a)(nt.E), At = Object(i.a)(nt.h), Mt = t => {
					let {
						id: e,
						commentsPageKey: n,
						depth: o,
						draftKey: i,
						formData: s
					} = t;
					return async (t, o, c) => {
						let {
							apiContext: a
						} = c;
						const d = o();
						if (!d.user.account) return;
						t(Rt({
							draftKey: i
						})), V.d(d);
						const l = d.user.account.displayText || "",
							u = s.commentMode,
							m = await (async (t, e, n, o, i, s) => {
								const c = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: e
								};
								if (s === E.i.MARKDOWN) c.text = o.text;
								else {
									c.text = null;
									let t = null;
									o.rteState && (t = h.a.toRichTextJSON(o.rteState).document), c.richtext_json = JSON.stringify({
										document: t
									})
								}
								return Object(y.a)(Object(I.a)(t, [S.a]), {
									endpoint: Object(j.a)(Object(N.a)(Object(w.a)(`${t.apiUrl}/api/editusertext`))),
									method: r.kb.POST,
									data: c
								}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
									...t,
									ok: !1,
									error: Object(v.a)(t)
								} : {
									...t,
									body: {
										comment: Object(k.a)(t.body.json.data.things[0].data, i)
									}
								} : {
									...t,
									body: {
										comment: Object(k.a)(t.body, i)
									}
								} : {
									...t,
									error: t.error || Object(T.a)()
								})
							})(a(), e, 0, s, l, u);
						if (m.ok) {
							const o = m.body;
							t(Dt({
								commentId: e,
								commentsPageKey: n,
								draftKey: i
							})), t(Object(et.i)({
								[e]: {
									...o.comment
								}
							}))
						} else t(Pt({
							draftKey: i,
							error: m.error
						}))
					}
				}, Lt = Object(i.a)(nt.A), Ut = Object(i.a)(nt.z), Ft = Object(i.a)(nt.B), Kt = (t, e) => async (n, o, i) => {
					let {
						apiContext: s
					} = i;
					const c = o();
					n(Lt({
						id: t
					})), V.a(t, c);
					const a = await ((t, e) => Object(y.a)(Object(I.a)(t, [S.a]), {
						endpoint: Object(j.a)(`${t.apiUrl}/api/del`),
						method: r.kb.POST,
						data: {
							id: e
						}
					}).then(t => t.ok ? t.body.json && t.body.json.errors.length ? {
						...t,
						ok: !1,
						error: Object(v.a)(t)
					} : {
						...t,
						body: {}
					} : {
						...t,
						error: t.error || Object(T.a)()
					}))(s(), t);
					a.ok ? n(Ft({
						id: t,
						postId: e
					})) : n(Ut({
						id: t,
						error: a.error
					}))
				}, Bt = t => async (e, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = !n().features.comments.models[t].sendReplies;
					e(Object(et.i)({
						[t]: {
							sendReplies: i
						}
					})), (await Object(A.q)(r(), t, i)).ok || e(Object(et.i)({
						[t]: {
							sendReplies: !i
						}
					}))
				}, Ht = (t, e) => async (n, r, i) => {
					let {
						gqlContext: s
					} = i;
					var c, a, d, l, u, m;
					n(Object(et.c)());
					const p = t => Object(O.f)(Object(O.e)(t, X.b.Error));
					if (((null === (a = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === C.a) n(p(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const i = e === W.a.FOLLOWED,
							c = {
								id: t,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(et.n)(c)), (await ((t, e) => Object(_.a)(t, {
								...D,
								variables: {
									input: e
								}
							}))(s(), {
								commentId: t,
								followState: e
							})).ok) {
							Object(B.wb)(null !== (u = null === (l = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = r().user.account) || void 0 === m ? void 0 : m.id);
							const t = i ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(O.f)({
								kind: X.b.SuccessCommunityGreen,
								text: t
							}))
						} else n(Object(et.n)(c)), n(p(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return p
			})), n.d(e, "a", (function() {
				return b
			})), n.d(e, "d", (function() {
				return O
			})), n.d(e, "c", (function() {
				return h
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/endpoints/post/convert.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				a = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(r.a)(m.G),
				b = Object(r.a)(m.p),
				f = Object(r.a)(m.Q),
				O = (t, e, n) => async (r, c, O) => {
					let {
						apiContext: g
					} = O;
					a.m(c(), e);
					const C = e === d.i.MARKDOWN,
						x = e === d.i.RICH_TEXT,
						y = m.k;
					if (C && Object(l.G)(n)) return r(f({
						editorKey: t,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(h(e));
					if (x && !n) return r(f({
						editorKey: t,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void r(h(e));
					r(p(y));
					const _ = await Object(s.a)(g(), e, C ? JSON.stringify(n) : n);
					_.ok ? (r(b(y)), r(f({
						editorKey: t,
						editorMode: e,
						content: _.body.output
					})), r(h(e))) : (r(b(y)), r(Object(i.f)({
						duration: i.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, h = t => async (e, n) => {
					const r = Object(c.l)();
					if (r >= 3) return;
					const s = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (t === s) return;
					const a = t === d.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					e(Object(i.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: a
					})), Object(c.sb)(r + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return a
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				i = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const s = Object(o.a)(i.r),
				c = Object(o.a)(i.F),
				a = t => async (e, n, o) => {
					let {
						apiContext: i
					} = o;
					const a = await Object(r.a)(i(), t);
					a && a.ok ? e(s({
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
				i = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
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
					sendEvent: s,
					contextId: c,
					priority: a,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					eventSource: b,
					onClick: f,
					onAddUserToQuickReplyList: O,
					children: h,
					style: g
				} = t;
				return i.a.createElement(d.t, {
					onClick: t => {
						if (f && f(t), e(), b === o.awardNotification) return O();
						s(Object(l.b)(c))
					},
					className: r,
					text: n,
					priority: a,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					style: g
				}, h)
			};
			u.displayName = "ChatButton";
			const m = Object(s.b)(null, (t, e) => {
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
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(t, e, n) {
			t.exports = {
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
		"./src/reddit/components/CommentSort/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return Q
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/lib/makeApiRequest/index.ts"),
				O = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/models/Toast/index.ts");
			const C = (t, e) => async (n, r, i) => {
				let {
					apiContext: s
				} = i;
				const c = await (async (t, e, n) => Object(f.a)(Object(O.a)(t, [h.a]), {
						endpoint: `${t.apiUrl}/api/set_suggested_sort/`,
						method: d.kb.POST,
						data: {
							api_type: "json",
							id: e,
							sort: n
						}
					}))(s(), t, e),
					a = `error-block-${e}`,
					l = `success-block-${e}`;
				if (c.ok) {
					n(Object(p.S)({
						[t]: {
							suggestedSort: e
						}
					}));
					const r = e ? o.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : o.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(b.f({
						id: l,
						kind: g.b.SuccessCommunityGreen,
						text: r
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
					buttonAction: C(t, e)
				}))
			};
			var x = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				I = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				S = n("./src/reddit/components/TrackingHelper/index.tsx"),
				j = n("./src/reddit/controls/Dropdown/index.tsx"),
				T = n("./src/reddit/controls/Dropdown/Row.tsx"),
				k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				v = n("./src/reddit/helpers/path/index.ts"),
				E = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const w = (t, e, n, o, r) => i => ({
					source: "comment_sort",
					action: "click",
					noun: t,
					actionInfo: {
						pageType: e ? "post_detail" : "home"
					},
					listing: Object(E.y)(i, void 0, {
						oldSort: n,
						sort: o,
						source: r
					}),
					userSubreddit: Object(E.qb)(i)
				}),
				N = (t, e) => n => ({
					source: "comment_highlighting",
					action: e,
					noun: t
				}),
				R = t => ({
					subreddit: Object(E.gb)(t),
					userSubreddit: Object(E.qb)(t)
				}),
				P = t => e => ({
					source: "contest_mode",
					action: "click",
					noun: t ? "enable" : "disable",
					...R
				});
			var D = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				A = n("./src/reddit/icons/svgs/Info/index.tsx"),
				M = n("./src/reddit/selectors/activeModalId.ts"),
				L = n("./src/reddit/selectors/comments.ts"),
				U = n("./src/reddit/selectors/moderatorPermissions.ts"),
				F = n("./src/reddit/selectors/posts.ts"),
				K = n("./src/reddit/selectors/tooltip.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				V = n.n(H),
				W = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const J = Object(I.a)(j.a),
				G = t => t === W.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : t === W.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class q extends i.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: t,
							selectedSort: e
						} = this.props;
						if (e !== W.a.None) {
							t(e === W.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (t, e) => {
						this.props.trackHighlight(t, "click"), this.props.changeHighlightSort(e)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", W.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", W.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", W.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(t) {
					t.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: t,
						id: e,
						onOpen: n,
						selectedSort: r
					} = this.props;
					return i.a.createElement("div", {
						className: V.a.HighlightWrapper
					}, i.a.createElement(T.b, {
						className: Object(a.a)(V.a.HighlightPicker, V.a.Row),
						textClassName: V.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${G(r)}`,
						id: e,
						noHover: !0,
						onClick: n
					}), i.a.createElement(D.b, {
						className: V.a.DropdownTriangle,
						onClick: n
					}), i.a.createElement(J, {
						isOpen: t,
						renderContentsHidden: !0,
						tooltipId: e
					}, i.a.createElement(T.b, {
						displayText: G(W.a.First),
						isSelected: r === W.a.First,
						onClick: this.onDropdownClickFirst
					}), i.a.createElement(T.b, {
						displayText: G(W.a.Last),
						isSelected: r === W.a.Last,
						onClick: this.onDropdownClickLast
					}), i.a.createElement(T.b, {
						displayText: G(W.a.None),
						isSelected: r === W.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var X = q;
			const Q = "CommentSort--SortPicker",
				z = "CommentSort--HighlightPicker",
				Y = "CommentSort--Tooltip",
				$ = Object(I.a)(j.a),
				Z = Object(c.c)({
					commentPermalink: (t, e) => {
						let {
							commentId: n
						} = e;
						return n && Object(L.m)(t, {
							commentId: n
						})
					},
					contestModeModalIsOpen: Object(M.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(K.b)(Q),
					highlightIsOpen: Object(K.b)(z),
					hasModeratorPostPermissions: (t, e) => {
						let {
							postId: n
						} = e;
						const o = Object(U.m)(t, {
							postId: n
						});
						return !!o && o.posts
					},
					post: F.G,
					postPermalink: F.F,
					showCommentHighlighter: (t, e) => {
						let {
							postId: n
						} = e;
						const o = Object(B.w)(t),
							r = !!Object(U.m)(t, {
								postId: n
							}),
							i = Object(F.G)(t, {
								postId: n
							});
						return (r || o) && !!i && !!i.previousVisits && i.previousVisits.length > 0
					},
					selectedHighlightSort: L.p
				}),
				tt = Object(s.b)(Z, (t, e) => {
					let {
						postId: n
					} = e;
					return {
						changeHighlightSort: e => t(Object(u.b)({
							sort: e
						})),
						onOpenDropdown: () => t(Object(l.h)({
							tooltipId: Q
						})),
						onOpenHighlightDropdown: e => {
							t(Object(l.h)({
								tooltipId: z
							})), e()
						},
						onSetSuggestedSort: e => t(C(n, e)),
						hideTooltip: () => t(Object(l.i)()),
						setContestMode: e => t(Object(p.X)(e, n)),
						showTooltip: () => t(Object(l.h)({
							tooltipId: Y
						})),
						toggleContestModeModal: () => t(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class et extends i.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (t, e, n, o) => this.props.sendEvent(w(t, this.props.isOverlay, e, n, o)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = t => this.sendCommentSortEvent("sort_by", this.props.sort, t, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const t = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", t, this.props.sort)
					}, this.setTooltipTargetRef = t => this.tooltipTargetElement = t, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(N("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(P(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(t) {
					return o.fbt._("{sort name} (suggested)", [o.fbt._param("sort name", t)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: t,
						className: e,
						commentPermalink: n,
						contestModeModalIsOpen: r,
						dropdownIsOpen: s,
						elementRef: c,
						hideTooltip: l,
						highlightIsOpen: u,
						hasModeratorPostPermissions: m,
						isOverlay: p,
						location: b,
						post: f,
						postPermalink: O,
						selectedHighlightSort: h,
						showCommentHighlighter: g,
						sort: C,
						suggestedSort: I,
						showTooltip: S,
						toggleContestModeModal: j
					} = this.props, E = f.contestMode, w = !b.search.includes(d.u.CONFIDENCE), R = C === d.u.CONFIDENCE && w, P = m && !R, M = d.w[C], L = M ? M() : "", U = I && C === I && !R ? this.addSuggestedLabel(L) : L, F = E ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), K = E ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), B = E ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : o.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), H = E && !m;
					return i.a.createElement("div", {
						className: Object(a.a)(e, V.a.container, {
							[V.a.hideCommentSort]: !g && H
						}),
						ref: c
					}, i.a.createElement("div", {
						className: V.a.containerRow
					}, !H && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: V.a.DropdownContainer
					}, i.a.createElement(T.b, {
						className: Object(a.a)(V.a.SortPicker, V.a.Row),
						textClassName: V.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Sort by",null,{hk:"E6T9r"})}: ${U}`,
						id: Q,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), i.a.createElement(D.b, {
						className: V.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), i.a.createElement($, {
						isOpen: s,
						tooltipId: Q
					}, [d.u.CONFIDENCE, d.u.TOP, d.u.NEW, d.u.CONTROVERSIAL, d.u.OLD, d.u.QA].map(t => {
						const e = n || O,
							o = Object(v.b)(e),
							r = d.w[t],
							s = r ? r() : "";
						return i.a.createElement(_.a, {
							className: V.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: t,
							onClick: () => this.onSortOptionClick(t),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${t}`
						}, i.a.createElement(T.b, {
							displayText: s,
							isSelected: C === t,
							skipRoleAttr: !0
						}))
					}))), P && !H && (I ? i.a.createElement("button", {
						className: V.a.SortLink,
						onClick: C !== I ? this.setSortOnClick : this.clearSortOnClick
					}, C !== I ? o.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : o.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : i.a.createElement("button", {
						className: V.a.SetSort
					}, i.a.createElement("button", {
						className: V.a.SortLink,
						onClick: this.setSortOnClick
					}, o.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), i.a.createElement("span", {
						id: Y,
						onMouseEnter: S,
						onMouseLeave: l
					}, i.a.createElement(y.c, {
						className: V.a.Tooltip,
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Y
					}), i.a.createElement(A.a, {
						className: V.a.Info
					})))), m && i.a.createElement("button", {
						className: V.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), i.a.createElement(k.a, {
						className: V.a.ToggleSwitch,
						on: E
					}))), g && i.a.createElement("div", {
						className: V.a.containerRow
					}, i.a.createElement(X, {
						changeHighlightSort: t,
						highlightIsOpen: u,
						id: z,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: h,
						trackHighlight: N
					})), r && i.a.createElement(x.a, {
						actionText: K,
						headerText: F,
						modalText: B,
						onConfirm: this.setContestMode,
						toggleModal: j,
						withOverlay: !0
					}))
				}
			}
			e.b = tt(Object(S.c)(et))
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(t, e, n) {
			t.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return O
			})), n.d(e, "a", (function() {
				return h
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				O = t => r.a.createElement(b, {
					className: t.className,
					style: t.style
				}, t.text, t.children),
				h = t => {
					const e = t.overflow ? t.overflow.left : 0;
					return r.a.createElement(f, {
						className: t.className,
						style: {
							...t.style,
							"--infoTextTooltip-overflow-left": `${e}px`
						}
					}, t.text, t.children)
				},
				g = Object(s.c)({
					isOpen: (t, e) => {
						let {
							tooltipId: n
						} = e;
						return Object(d.b)(n)(t)
					}
				}),
				C = Object(a.a)(h, [c.a.Click, c.a.Keydown]),
				x = Object(a.a)(O, [c.a.Click, c.a.Keydown]),
				y = Object(i.b)(g);
			e.c = y(t => {
				const {
					caretOnTop: e
				} = t;
				return e ? r.a.createElement(C, p({}, t, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(x, p({}, t, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/helpers/overlay/index.ts");

			function a() {
				return (a = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}

			function d(t) {
				const {
					children: e,
					className: n,
					to: o,
					...i
				} = t, d = Object(c.b)(o);
				return r.a.createElement(s.a, a({
					className: n,
					to: d
				}, i), e)
			}

			function l() {
				return (l = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			e.a = t => {
				const {
					isOverlay: e,
					...n
				} = t, o = e ? d : i.a;
				return r.a.createElement(o, l({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/ChatButton/index.tsx"),
				u = n("./src/reddit/constants/things.ts");
			const m = /^\/(r|user)\/(\w+)\/(?:(?:comments\/)(\w+)\/(?:(?:\w+\/)(\w+)\/?)?)?/;
			var p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/graphql/helpers.ts"),
				f = n("./src/reddit/helpers/trackers/inbox.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/models/NotificationInbox/index.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/experiments/inAppNotification.ts"),
				x = n("./src/reddit/components/NotificationUnit/index.m.less"),
				y = n.n(x);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = {
				kind: g.b.Error,
				text: _._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: d.a
			};
			e.default = t => {
				var e, n, o, g, x, S, j, T, k, v;
				const E = Object(i.d)(),
					w = Object(i.e)(C.d),
					{
						context: N,
						deeplinkUrl: R,
						isFullWidth: P,
						isUnread: D,
						isInAppNotification: A,
						isNightMode: M,
						notificationId: L,
						onEvent: U,
						isInboxCTAsV2All1Enabled: F,
						isInboxCTAsV2All2Enabled: K,
						isInboxCTAsV2ReplyPcEnabled: B,
						isInboxCTAsV2SeePostEnabled: H,
						isInboxCTAsV2ReplyEnabled: V
					} = t,
					W = null == N ? void 0 : N.messageType,
					J = W === h.a.CommentReply,
					G = W === h.a.SubredditRecommendation,
					q = W === h.a.LifecyclePostSuggestions,
					X = null === (e = null == N ? void 0 : N.post) || void 0 === e ? void 0 : e.permalink;
				let Q = null === (n = null == N ? void 0 : N.comment) || void 0 === n ? void 0 : n.id,
					z = (null === (o = null == N ? void 0 : N.post) || void 0 === o ? void 0 : o.id) || (null === (x = null === (g = null == N ? void 0 : N.comment) || void 0 === g ? void 0 : g.postInfo) || void 0 === x ? void 0 : x.id);
				const Y = null === (S = null == N ? void 0 : N.subreddit) || void 0 === S ? void 0 : S.id,
					$ = null === (T = null === (j = null == N ? void 0 : N.awarding) || void 0 === j ? void 0 : j.award) || void 0 === T ? void 0 : T.id,
					Z = null === (v = null === (k = null == N ? void 0 : N.awarding) || void 0 === k ? void 0 : k.awarder) || void 0 === v ? void 0 : v.id;
				if (W === h.a.CommentFollow || W === h.a.PostFollow) {
					const t = (t => {
						const e = {},
							{
								pathname: n
							} = new URL(t);
						if (!n) return e;
						const o = n.match(m);
						if (!o) return e;
						const [r, i, s, c] = o.slice(1);
						return i && "r" === r && (e.subredditName = i), s && (e.postId = `${u.b}${s}`), c && (e.commentId = `${u.a}${c}`), e
					})(R);
					z = t.postId, Q = t.commentId
				} else W !== h.a.PostReply && W !== h.a.LifecyclePostSuggestions || (Q = L);
				const tt = t => {
					if (z && Q) {
						const t = Object(c.a)(z, Q, Object(b.c)(R)),
							e = {
								parentCommentId: Q,
								commentsPageKey: t
							};
						E(Object(a.g)(e)), U({
							position: f.d.SECOND
						})
					} else t.preventDefault(), E(Object(d.f)(I))
				};
				return (() => {
					switch (W) {
						case h.a.HFNSubredditInterestingPost:
						case h.a.LifecyclePostSuggestions:
						case h.a.SubredditRecommendation: {
							const t = G,
								e = q;
							if (!F && !K && !H && !V && !t && !e && (!w || !A) || B) return null;
							const n = t => {
									X || (V || F) && z ? ((V || F) && z && E(Object(a.h)({
										postId: z
									})), U({
										position: f.d.SECOND,
										postId: z,
										subredditId: Y
									})) : (t.preventDefault(), E(Object(d.f)(I)))
								},
								o = V || F ? _._("Join the Conversation", null, {
									hk: "2hX2xb"
								}) : _._("Check It Out", null, {
									hk: "3mzMCI"
								});
							return r.a.createElement(p.t, {
								kind: V ? p.b.InternalLink : void 0,
								to: R,
								onClick: n,
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(s.a)(y.a.notificationButton, {
									[y.a.isUnread]: D && !A,
									[y.a.isNightMode]: M,
									[y.a.inAppNotification]: A,
									[y.a.isFullWidth]: P && !A
								})
							}, !A && r.a.createElement(O.a, {
								name: "text_post",
								className: y.a.postIcon
							}), _._("{check out button}", [_._param("check out button", o)], {
								hk: "4DDMme"
							}))
						}
						case h.a.PostReply:
						case h.a.CommentReply:
						case h.a.PostFollow:
						case h.a.CommentFollow: {
							const t = J;
							return !(F || K || B || J || t || w && A) || V && !t ? null : r.a.createElement(p.t, {
								onClick: tt,
								kind: p.b.InternalLink,
								to: R,
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(s.a)(y.a.notificationButton, {
									[y.a.isUnread]: D && !A,
									[y.a.isNightMode]: M,
									[y.a.inAppNotification]: A,
									[y.a.isFullWidth]: P && !A
								})
							}, !A && r.a.createElement(O.a, {
								name: "reply",
								className: y.a.replyIcon
							}), _._("Reply Back", null, {
								hk: "3JWTvx"
							}))
						}
						case h.a.AwardReceived: {
							if (!Z) return null;
							const t = t => {
								t.preventDefault(), Z ? U({
									position: f.d.SECOND,
									awardId: $
								}) : E(Object(d.f)(I))
							};
							return r.a.createElement(l.b, {
								userId: Z,
								contextId: Z,
								onClick: t,
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								eventSource: l.a.awardNotification,
								className: Object(s.a)(y.a.notificationButton, {
									[y.a.isUnread]: D && !A,
									[y.a.isNightMode]: M,
									[y.a.inAppNotification]: A,
									[y.a.isFullWidth]: P && !A
								})
							}, !A && r.a.createElement(O.a, {
								name: "chat_new",
								className: y.a.replyIcon
							}), _._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						case h.a.UpvotePost:
						case h.a.UpvoteComment:
						case h.a.UsernameMention:
						case h.a.PrivateMessage:
						case h.a.UserNewFollower:
						case h.a.ChatMessage:
						case h.a.CakeDay:
						case h.a.ChatRequest:
						case h.a.ChatAcceptInvite:
						case h.a.HFNSubredditInterestingPost:
						case h.a.OneOff:
						case h.a.ModeratedSrViralCommentPost:
						case h.a.TalkLive: {
							if (!A) return null;
							const t = t => {
								switch (t) {
									case h.a.HFNSubredditInterestingPost:
									case h.a.OneOff:
									case h.a.UpvotePost:
									case h.a.ModeratedSrViralCommentPost:
										return _._("See Post", null, {
											hk: "mGXS5"
										});
									case h.a.UpvoteComment:
										return _._("See Comment", null, {
											hk: "3FUtJF"
										});
									case h.a.ChatRequest:
									case h.a.ChatAcceptInvite:
										return _._("Start Chat", null, {
											hk: "iQZfe"
										});
									case h.a.ChatMessage:
										return _._("Open Chat", null, {
											hk: "2jV0mi"
										});
									case h.a.CakeDay:
									case h.a.UserNewFollower:
										return _._("See Profile", null, {
											hk: "2Wj94t"
										});
									case h.a.TalkLive:
										return _._("Join", null, {
											hk: "1PvPkd"
										});
									default:
										return _._("Reply", null, {
											hk: "zBpwB"
										})
								}
							};
							return r.a.createElement(p.t, {
								onClick: () => U({
									position: f.d.SECOND
								}),
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(s.a)(y.a.notificationButton, {
									[y.a.isNightMode]: M,
									[y.a.inAppNotification]: !0
								})
							}, t(W))
						}
						default:
							return w && A ? r.a.createElement(p.t, {
								onClick: () => U({
									position: f.d.SECOND
								}),
								isFullWidth: P,
								priority: p.c.Tertiary,
								redditStyle: !0,
								className: Object(s.a)(y.a.notificationButton, {
									[y.a.isNightMode]: M,
									[y.a.inAppNotification]: !0
								})
							}, _._("See more", null, {
								hk: "3QLc3"
							})) : null
					}
				})()
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				s = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}

			function d(t, e) {
				const n = Object(i.a)(t, e);
				class o extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const t = document.getElementById(s.e);
							this.setState({
								container: t
							})
						}
					}
					render() {
						return r.a.createElement(n, a({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(o)
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(t, e, n) {
			t.exports = {
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
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				a = n.n(c);
			e.a = Object(o.memo)(Object(o.forwardRef)((t, e) => {
				const n = t.size || s.d.XS;
				return r.a.createElement("button", {
					"aria-checked": t.on,
					className: Object(i.a)(a.a.toggleSwitch, t.className, a.a[n], {
						[a.a.mActive]: t.on && !t.disabled || t.forceOn && t.on,
						[a.a.mDisabled]: t.disabled,
						[a.a.redditStyle]: t.redditStyle
					}),
					style: t.on && !t.disabled && t.activeColorOverride ? {
						backgroundColor: t.activeColorOverride
					} : void 0,
					id: t.id,
					role: "switch",
					tabIndex: t.tabIndex,
					type: "button",
					onClick: () => !t.disabled && t.onToggle && t.onToggle(),
					ref: e
				}, r.a.createElement("div", {
					className: a.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/endpoints/post/convert.ts": function(t, e, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts");
			e.a = (t, e, n) => {
				const d = {
					output_mode: "markdown" === e ? e : "rtjson"
				};
				return e === a.i.MARKDOWN ? d.richtext_json = n : d.markdown_text = n, Object(r.a)(Object(i.a)(t, [s.a]), {
					endpoint: Object(c.a)(`${t.apiUrl}/api/convert_rte_body_format`),
					method: o.kb.POST,
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
				return p
			})), n.d(e, "a", (function() {
				return b
			}));
			var o = n("./node_modules/lodash/map.js"),
				r = n.n(o),
				i = n("./src/lib/FocusTrap/index.ts");
			const s = t => "INPUT" === t.tagName.toUpperCase() || "TEXTAREA" === t.tagName.toUpperCase() || "DIV" === t.tagName.toUpperCase() && t.isContentEditable,
				c = t => {
					let e = t;
					do {
						if (s(e)) return !0
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
						endContainer: i,
						endOffset: s
					} = n, c = document.createRange();
					c.selectNode(t);
					let a = !0;
					if (-1 === c.compareBoundaryPoints(Range.START_TO_START, n) && (c.setStart(o, r), a = !1), 1 === c.compareBoundaryPoints(Range.END_TO_END, n) && (c.setEnd(i, s), a = !1), a) return [t];
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
				p = t => t && t.parentElement && m(t.parentElement, t => "static" !== window.getComputedStyle(t).getPropertyValue("position")),
				b = t => {
					t.querySelectorAll(i.a).forEach(t => {
						t.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			e.a = () => ({
				type: r.J.SERVER_ERROR,
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
				return s
			}));
			var o = n("./src/lib/constants/index.ts");
			const r = t => {
					for (const e of t) {
						const t = e[0] || "";
						switch (t) {
							case o.J.NO_STRIPE_SUBSCRIPTION:
							case o.J.USER_DOESNT_EXIST:
							case o.J.USER_REQUIRED_ERROR:
							case o.J.VALIDATION_ERROR:
								return t;
							case o.J.NO_USER:
							case o.J.NO_TEXT:
							case o.J.NO_URL:
								return o.J.VALIDATION_ERROR;
							case o.J.CREDIT_CARD_FAILURE:
							case o.J.CREDIT_CARD_FAILURE_GENERIC:
								return o.J.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return o.J.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.J.VALIDATION_ERROR
				},
				i = t => {
					const e = t.body;
					return {
						type: r(e.json.errors),
						fields: e.json.errors.map(t => ({
							field: t[2] || "",
							msg: t[1]
						}))
					}
				},
				s = t => {
					const e = t.body;
					return !t.ok && e && e.json && e.json.errors ? {
						...t,
						error: i(t)
					} : t
				};
			e.a = i
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(t, e, n) {
			"use strict";
			var o;
			n.d(e, "d", (function() {
					return i
				})), n.d(e, "b", (function() {
					return s
				})), n.d(e, "a", (function() {
					return c
				})), n.d(e, "c", (function() {
					return a
				})),
				function(t) {
					t.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(o || (o = {}));
			const r = t => {
					if (window.sessionStorage) {
						const e = window.sessionStorage.getItem(t);
						if (e) return JSON.parse(e)
					}
					return null
				},
				i = t => {
					((t, e) => {
						window.sessionStorage && window.sessionStorage.setItem(t, JSON.stringify(e))
					})(o.COMMENT_BEFORE_SIGNUP_STORAGE, t)
				},
				s = () => r(o.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => (t => {
					window.sessionStorage && window.sessionStorage.removeItem(t)
				})(o.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => {
					return !!r(o.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return u
			})), n.d(e, "h", (function() {
				return m
			})), n.d(e, "b", (function() {
				return p
			})), n.d(e, "e", (function() {
				return b
			})), n.d(e, "a", (function() {
				return f
			})), n.d(e, "c", (function() {
				return O
			})), n.d(e, "d", (function() {
				return h
			})), n.d(e, "g", (function() {
				return g
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/models/PostDraft/index.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = t => {
					const e = Object(c.o)(t);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(a.n)(t),
						screen: Object(a.Y)(t),
						subreddit: Object(a.gb)(t),
						post: e ? Object(a.H)(t, e) : null,
						profile: Object(a.Q)(t),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				u = async (t, e, o, r) => {
					const i = {
							commentId: r,
							commentsPageKey: o
						},
						c = r && Object(s.j)(t, i) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...l(t),
						comment: r ? Object(a.h)(t, r) : null,
						listing: Object(a.y)(t, void 0, {
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
				}, p = t => Object(d.a)({
					noun: "cancel",
					...l(t)
				}), b = (t, e) => {
					e === i.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(t)
					})
				}, f = (t, e) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(a.n)(e),
					screen: Object(a.Y)(e),
					subreddit: Object(a.gb)(e),
					post: Object(a.H)(e, t)
				}), O = t => Object(d.a)({
					noun: "edit",
					...l(t)
				}), h = t => Object(d.a)({
					noun: "save_edit",
					...l(t)
				}), g = (t, e) => n => {
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
		"./src/reddit/helpers/trackers/inbox.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return o
			})), n.d(e, "e", (function() {
				return r
			})), n.d(e, "c", (function() {
				return i
			})), n.d(e, "d", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			})), n.d(e, "w", (function() {
				return m
			})), n.d(e, "t", (function() {
				return p
			})), n.d(e, "r", (function() {
				return b
			})), n.d(e, "s", (function() {
				return f
			})), n.d(e, "p", (function() {
				return O
			})), n.d(e, "k", (function() {
				return h
			})), n.d(e, "h", (function() {
				return g
			})), n.d(e, "u", (function() {
				return C
			})), n.d(e, "v", (function() {
				return x
			})), n.d(e, "y", (function() {
				return y
			})), n.d(e, "l", (function() {
				return _
			})), n.d(e, "x", (function() {
				return I
			})), n.d(e, "b", (function() {
				return S
			})), n.d(e, "m", (function() {
				return j
			})), n.d(e, "z", (function() {
				return T
			})), n.d(e, "q", (function() {
				return k
			})), n.d(e, "o", (function() {
				return v
			})), n.d(e, "n", (function() {
				return E
			})), n.d(e, "j", (function() {
				return w
			})), n.d(e, "i", (function() {
				return N
			})), n.d(e, "g", (function() {
				return R
			}));
			var o, r, i, s, c, a, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(t) {
				t.Activity = "activity", t.Messages = "messages"
			}(o || (o = {})),
			function(t) {
				t.HideNotifications = "hide_notification", t.HideSubreddit = "hide_subreddit", t.BlockAwarder = "block_awarder", t.DecreaseSubredditUpdates = "disable_frequent"
			}(r || (r = {})),
			function(t) {
				t.MiniInbox = "mini_inbox", t.Inbox = "inbox"
			}(i || (i = {})),
			function(t) {
				t.Inbox = "inbox", t.Nav = "nav", t.Settings = "notification_app_settings"
			}(s || (s = {})),
			function(t) {
				t[t.FIRST = 1] = "FIRST", t[t.SECOND = 2] = "SECOND"
			}(c || (c = {})),
			function(t) {
				t.Confirm = "confirm"
			}(a || (a = {}));
			const m = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: r
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.VIEW,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: r
						}
					})
				},
				p = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: r
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.VIEW,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: r
						}
					})
				},
				b = () => t => ({
					...l.n(t),
					action: d.c.RECEIVE,
					noun: "notification",
					source: "in_app_notification"
				}),
				f = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: r,
						awardId: i
					} = t;
					return t => {
						Object(u.a)({
							...l.n(t),
							action: "receive",
							noun: "inbox_notification",
							source: s.Inbox,
							inbox: {
								id: e,
								isClicked: n,
								isViewed: o
							},
							notification: {
								type: r
							},
							goldPurchase: {
								awardId: i
							}
						})
					}
				},
				O = t => {
					let {
						dnPromptAction: e
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "inbox_banner",
						source: "inbox",
						banner: {
							id: "inbox_dn_banner"
						},
						actionInfo: {
							pageType: "dn_prompt",
							type: e
						}
					})
				},
				h = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: r,
						awardId: i,
						position: s,
						postId: c,
						subredditId: a
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: r
						},
						goldPurchase: {
							awardId: i
						},
						actionInfo: {
							position: s
						},
						subreddit: a ? {
							id: a
						} : null,
						post: c ? {
							id: c
						} : null
					})
				},
				g = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: r,
						awardId: i,
						position: s,
						postId: c,
						subredditId: a
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: r
						},
						goldPurchase: {
							awardId: i
						},
						actionInfo: {
							position: s
						},
						subreddit: a ? {
							id: a
						} : null,
						post: c ? {
							id: c
						} : null
					})
				},
				C = t => {
					let {
						badgeCount: e,
						tab: n
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.VIEW,
						noun: "inbox",
						source: s.Inbox,
						inbox: {
							badgeCount: e,
							tab: n
						}
					})
				},
				x = t => {
					let {
						badgeCount: e,
						tab: n
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.VIEW,
						noun: "mini_inbox",
						source: s.Inbox,
						inbox: {
							badgeCount: e,
							tab: o.Activity
						}
					})
				},
				y = t => {
					let {
						badgeCount: e
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "inbox",
						source: s.Nav,
						inbox: {
							badgeCount: e
						}
					})
				},
				_ = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: r,
						awardId: i
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "inbox_notification_overflow",
						source: s.Inbox,
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: r
						},
						goldPurchase: {
							awardId: i
						}
					})
				},
				I = t => {
					let {
						id: e,
						isClicked: n,
						isViewed: o,
						type: r
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.VIEW,
						noun: "inbox_notification_overflow",
						source: s.Inbox,
						inbox: {
							id: e,
							isClicked: n,
							isViewed: o
						},
						notification: {
							type: r
						}
					})
				};
			var S;
			! function(t) {
				t.Cats = "cats", t.Memes = "memes", t.Karma = "karma_free_subs", t.PN_perms = "pn_perms", t.Email_perms = "email_perms"
			}(S || (S = {}));
			const j = t => {
					let {
						actionInfoType: e,
						id: n,
						isClicked: o,
						isViewed: r,
						type: i
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: n,
							isClicked: o,
							isViewed: r
						},
						notification: {
							type: i
						},
						actionInfo: {
							...l.d(t),
							type: e
						}
					})
				},
				T = t => {
					let {
						actionInfoType: e,
						id: n,
						isClicked: o,
						isViewed: r,
						type: i
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.UNDO,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: n,
							isClicked: o,
							isViewed: r
						},
						notification: {
							type: i
						},
						actionInfo: {
							...l.d(t),
							type: e
						}
					})
				},
				k = t => {
					let {
						actionInfoType: e
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "empty_state_cta",
						source: s.Inbox,
						actionInfo: {
							...l.d(t),
							type: e
						}
					})
				},
				v = t => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: s.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: t
					}
				}),
				E = () => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "see_all",
					source: s.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: i.MiniInbox
					}
				}),
				w = () => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "messages",
					source: s.Inbox
				}),
				N = t => {
					let {
						isMiniInbox: e
					} = t;
					return t => ({
						...l.n(t),
						action: d.c.CLICK,
						noun: "mark_all_as_read",
						source: s.Inbox,
						actionInfo: e ? {
							...l.d(t),
							pageType: i.MiniInbox
						} : {}
					})
				},
				R = (t, e) => n => ({
					...l.n(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: s.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: t,
						type: e
					}
				})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(t, e, n) {
			t.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				c = n.n(s);

			function a() {
				return (a = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const d = t => {
				let {
					className: e,
					isSubreddit: n,
					...o
				} = t;
				return r.a.createElement("svg", a({
					className: Object(i.a)(c.a.dropdown, {
						[c.a.mRedditStyle]: !n
					}, e),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			e.b = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			e.a = t => r.a.createElement("svg", {
				className: t.className,
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: t.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return i
			})), n.d(e, "d", (function() {
				return a
			}));
			var o, r, i, s, c = n("./src/reddit/models/FeedElement/index.ts");

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
			}(i || (i = {})),
			function(t) {
				t.InboxNotification = "InboxNotification", t.InboxNotificationContext = "InboxNotificationContext", t.NotificationIcon = "NotificationIcon", t.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", t.BasicInboxNotificationContext = "BasicInboxNotificationContext", t.CommentInboxNotificationContext = "CommentInboxNotificationContext", t.PostInboxNotificationContext = "PostInboxNotificationContext", t.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", t.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
			}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return l
			})), n.d(e, "b", (function() {
				return u
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/experiments/utils.ts");
			const c = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				a = Object(o.a)((t, e) => Object(i.c)(t, {
					experimentEligibilitySelector: i.a,
					experimentName: `d2x_start_comment_before_sign_up_${e}`
				}), s.a),
				d = t => c.find(e => !!Object(s.a)(a(t, e))),
				l = Object(o.a)(d, t => !!t),
				u = t => {
					const e = d(t);
					return !!e && a(t, e) === r.W.SkipOnboarding
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(t) {
			t.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(t) {
			t.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.3469f9c8f793b335abc5.js.map