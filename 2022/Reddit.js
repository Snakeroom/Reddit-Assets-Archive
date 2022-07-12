// https://www.redditstatic.com/desktop2x/Reddit.312d44b739096bfaed6f.js
// Retrieved at 7/12/2022, 2:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/RedditSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./assets/fonts/redesignIcon2020/redesignFont2020.css": function(e, t, n) {},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				o = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				if (e && e.target && (e => {
						let t = e;
						for (; t && t !== window.document.body;) {
							if ("A" === t.nodeName) return !0;
							t = t.parentElement
						}
						return !1
					})(e.target)) {
					if (e.ctrlKey) return !1;
					if (e.altKey) return !1;
					if (e.metaKey) return !1;
					if (e.shiftKey) return !1
				}
				return !0
			}
		},
		"./src/lib/safeBadgeUpdate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/throwDevError.ts");
			const o = e => {
				const t = null === window || void 0 === window ? void 0 : window.navigator;
				if (t && "setAppBadge" in t && "clearAppBadge" in t) {
					(e >= 0 ? t.setAppBadge(e) : t.clearAppBadge()).catch(e => Object(s.a)(e))
				}
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/domUtils/index.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/components/CommentSort/index.tsx"),
				a = n("./src/reddit/constants/elementIds.ts");
			const i = () => {
					o.a.write(() => {
						const e = document.getElementById(a.e);
						e ? Object(s.c)(e, 0) : Object(s.c)(document, 0)
					})
				},
				c = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(a.e) : window,
							n = document.getElementById(r.a);
						if (t && n) {
							const s = e ? n.offsetTop : n.offsetTop - 50;
							o.a.write(() => t.scrollTo({
								top: s,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/alpha.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/config.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: d.jb.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			const p = e => async (t, n, s) => {
				let {
					apiContext: d
				} = s;
				(await
					function(e) {
						return Object(o.a)(Object(r.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/leave_redesign_beta`,
							method: "post",
							type: "json"
						})
					}(d())).ok ? (Object(i.b)(), await m(d(), !0), e && window.location.reload()) : (m(d(), !1), t(Object(c.f)({
					kind: l.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, n) => {
				let {
					apiContext: c
				} = n;
				Object(i.a)(),
					function(e) {
						Object(o.a)(Object(r.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/join_redesign_beta`,
							method: "post",
							type: "json"
						}).then(() => {
							const {
								pathname: e,
								search: t
							} = window.location, n = `${s.a.redditUrl}${e}${t}`;
							window.location.replace(n)
						})
					}(c())
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return he
			})), n.d(t, "q", (function() {
				return fe
			})), n.d(t, "o", (function() {
				return ve
			})), n.d(t, "s", (function() {
				return ye
			})), n.d(t, "v", (function() {
				return Ee
			})), n.d(t, "p", (function() {
				return je
			})), n.d(t, "u", (function() {
				return ke
			})), n.d(t, "n", (function() {
				return Ne
			})), n.d(t, "m", (function() {
				return we
			})), n.d(t, "b", (function() {
				return Te
			})), n.d(t, "c", (function() {
				return Le
			})), n.d(t, "r", (function() {
				return De
			})), n.d(t, "g", (function() {
				return Fe
			})), n.d(t, "h", (function() {
				return Ue
			})), n.d(t, "k", (function() {
				return Ge
			})), n.d(t, "e", (function() {
				return qe
			})), n.d(t, "d", (function() {
				return Qe
			})), n.d(t, "a", (function() {
				return ze
			})), n.d(t, "j", (function() {
				return Ke
			})), n.d(t, "i", (function() {
				return Ze
			})), n.d(t, "l", (function() {
				return $e
			})), n.d(t, "t", (function() {
				return et
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/lib/scroll/index.ts"),
				c = n("./src/reddit/actions/changeUsername.ts"),
				l = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				d = n("./src/reddit/actions/login.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/onboarding/index.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/postCreation/editorContent.ts"),
				h = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				g = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = n("./src/reddit/constants/adEvents.ts"),
				C = n("./src/reddit/constants/localStorage.ts"),
				y = n("./src/redditGQL/operations/CommentToxicity.json"),
				E = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				P = n("./src/lib/omitHeaders/index.ts"),
				j = n("./src/reddit/constants/headers.ts"),
				_ = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = n("./src/reddit/helpers/genericServerError/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				N = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				M = n("./src/reddit/models/PostCreationForm/index.ts"),
				w = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				I = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				T = n("./src/reddit/helpers/graphql/helpers.ts"),
				A = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				R = n("./src/redditGQL/operations/CreateComment.json");
			const L = (e, t, n, s) => {
					let o, r;
					if (s === M.i.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = v.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...y,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				D = async (e, t, n, s, r) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return s === M.i.MARKDOWN ? a.text = n.text : (a.text = null, a.richtext_json = r), Object(E.a)(Object(P.a)(e, [j.a]), {
						method: o.jb.POST,
						endpoint: Object(_.a)(Object(w.a)(Object(I.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(N.a)(e)
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
						error: e.error || Object(S.a)()
					})
				}, F = async (e, t, n, s, o, r) => {
					const a = o === M.i.MARKDOWN,
						i = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: a ? s.text : null,
								richText: a ? null : r
							}
						};
					return Object(x.a)(e, {
						...R,
						variables: {
							input: i
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(T.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(T.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(A.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(S.a)()
						}
					})
				};
			var U = n("./src/redditGQL/operations/UpdateComment.json");
			var G = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var B = n("./src/reddit/endpoints/post/index.tsx"),
				q = n("./src/reddit/endpoints/post/convert.ts"),
				H = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				W = n("./src/reddit/featureFlags/index.ts"),
				V = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Q = n("./src/reddit/helpers/dom/index.ts"),
				z = n("./src/reddit/helpers/localStorage/index.ts"),
				K = n("./src/reddit/helpers/sessionStorage/index.ts"),
				J = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				X = n("./src/reddit/models/Comment/index.ts"),
				Y = n("./src/reddit/models/PostDraft/index.ts"),
				Z = n("./src/reddit/models/RichTextJson/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = n("./src/reddit/models/Toast/index.ts"),
				te = n("./src/reddit/selectors/comments.ts"),
				ne = n("./src/reddit/selectors/commentSelector.ts"),
				se = n("./src/reddit/constants/experiments.ts"),
				oe = n("./src/reddit/helpers/chooseVariant/index.ts"),
				re = n("./node_modules/reselect/es/index.js");
			const ae = Object(re.a)(e => Object(oe.c)(e, {
				experimentEligibilitySelector: oe.a,
				experimentName: se.Ib
			}), e => e === se.zd);
			var ie = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				ce = n("./src/reddit/selectors/experiments/emailEnablement.ts"),
				le = n("./src/reddit/selectors/platform.ts"),
				de = n("./src/reddit/selectors/posts.ts"),
				ue = n("./src/reddit/selectors/user.ts"),
				me = n("./src/reddit/actions/comment/index.ts"),
				pe = n("./src/reddit/actions/comment/constants.ts");
			const be = Object(r.a)(pe.m),
				he = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const o = s();
						if (!!o.features.comments.drafts[n])
							if (Object(ue.S)(o) && t) {
								const s = be({
									hasFocus: t,
									draftKey: n
								});
								e(Object(c.startChangeUsernameFlow)(s))
							} else e(be({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				ge = Object(r.a)(pe.J),
				fe = Object(r.a)(pe.L),
				ve = Object(r.a)(pe.K),
				Oe = Object(r.a)(pe.I),
				Ce = async (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					await J.f(e, n, t, r)
				}, ye = "Toxicity_Warning__Modal", Ee = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const r = n(),
						a = Object(le.e)(r);
					let i = "";
					a && (i = a.name);
					const {
						formData: c,
						editorMode: l
					} = e;
					if (W.d.enableToxicityWarning(r)) {
						if (!(await L(o(), i, c, l))) return void t(Object(u.i)(ye))
					}
					t(je(e))
				}, xe = e => e.rteState ? v.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, Pe = e => {
					let t = null;
					return e.rteState && (t = v.a.toRichTextJSON(e.rteState).document), JSON.stringify({
						document: t
					})
				}, je = e => async (t, n) => {
					t(Object(u.g)(ye));
					const s = n(),
						o = Object(ie.a)(s),
						r = Object(ie.c)(s);
					if (!s.user.account && o) {
						const n = Pe(e.formData),
							s = xe(e.formData);
						t(Object(u.k)({
							actionSource: u.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(K.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: s
							},
							isSkipOnboarding: r
						})
					} else t(Se(e, !1)), Object(ce.a)(s) && t(Object(l.c)("comment"))
				};

			function _e(e, t) {
				return e === M.i.MARKDOWN && ae(t)
			}
			const Se = (e, t, n, r) => {
					let {
						postId: a,
						commentsPageKey: c,
						draftKey: l,
						formData: d,
						editorMode: u,
						disableAutofocus: m,
						isLiveStreaming: b
					} = e;
					return async (e, v, C) => {
						let {
							apiContext: y,
							gqlContext: E
						} = C;
						const x = v(),
							P = x.features.comments.submit.pending[l];
						if (!x.user.account || P) return;
						t || e(ge({
							draftKey: l,
							draft: d
						}));
						const j = x.user.account.displayText,
							_ = d.commentMode;
						let S;
						if (b) S = await Object(H.i)(y(), a, d, j), e(Object(h.a)({
							streamId: a,
							level: S.body.automuteLevel
						}));
						else {
							const e = t && n ? n : Pe(d);
							S = _e(_, x) ? await F(E(), a, null, d, _, e) : await D(y(), a, d, _, e)
						}
						if (S.ok) {
							let n;
							if (n = S.body, e(fe({
									...n,
									headCommentId: Object(te.w)(x, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: l
								})), t) {
								const e = Object(le.i)(x);
								Object(i.a)(!!e)
							}
							const s = Object(de.G)(v(), {
								postId: a
							});
							e(Object(p.z)(s, O.a.CommentSubmitted))
						} else {
							if (S.error && S.error.type === o.Kb) {
								const e = t && r ? r : xe(d);
								J.j(x, e, a)
							}
							const n = S.error && S.error.fields && S.error.fields[0] ? S.error.fields[0].msg : s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(Oe({
								draftKey: l,
								error: S.error
							})), e(Object(f.f)({
								duration: f.a,
								kind: ee.b.Error,
								text: n
							}))
						}
						Ce(v(), c, u, S).then(() => S.ok && u === M.i.RICH_TEXT ? Object(V.b)(V.a.CommentComposer) : void 0), m || Object(g.d)(), t && Object(K.a)()
					}
				},
				ke = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: d
					} = e, m = n(), p = Object(le.e)(m);
					let b = "";
					if (p && (b = p.name), W.d.enableToxicityWarning(m)) {
						if (!(await L(o(), b, l, d))) return void t(Object(u.i)(ye))
					}
					t(Ne({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: l,
						editorMode: d
					}))
				}, Ne = e => async (t, n) => {
					t(Object(u.g)(ye));
					const s = n(),
						o = Object(ie.a)(s),
						r = Object(ie.c)(s);
					if (!s.user.account && o) {
						const n = Pe(e.formData),
							s = xe(e.formData);
						t(Object(u.k)({
							actionSource: u.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(K.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: s
							},
							isSkipOnboarding: r
						})
					} else t(Me(e, !1))
				}, Me = (e, t, n, s) => async (r, a, c) => {
					let {
						apiContext: l,
						gqlContext: d
					} = c;
					const {
						parentCommentId: u,
						commentsPageKey: m,
						parentCommentDepth: p,
						draftKey: b,
						formData: h,
						editorMode: f
					} = e, v = a(), O = v.features.comments.submit.pending[b];
					if (!v.user.account || O) return;
					t || r(ge({
						draftKey: b,
						draft: h
					}));
					const C = h.commentMode,
						y = t && n ? n : Pe(h);
					let E;
					if ((E = _e(C, v) ? await F(d(), null, u, h, C, y) : await D(l(), u, h, C, y)).ok) {
						if (r(ve({
								...E.body,
								parentCommentId: u,
								commentsPageKey: m,
								draftKey: b,
								depth: p + 1
							})), t) {
							const e = Object(le.i)(v);
							Object(i.a)(!!e)
						}
					} else {
						if (E.error && E.error.type === o.Kb) {
							const e = Object(ne.b)(v, {
								commentId: u
							});
							if (!e) return;
							const n = t && s ? s : xe(h);
							J.j(v, n, e.postId, u)
						}
						r(Oe({
							draftKey: b,
							error: E.error
						}))
					}
					Ce(a(), m, f, E), Object(g.d)(), t && Object(K.a)()
				}, we = () => async e => {
					const t = Object(K.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: s,
								postId: o,
								richTextJSONData: r,
								commentBodyText: a
							},
							isSkipOnboarding: i
						} = t;
						i && e(Object(m.skipOnboardingModal)()), o ? await e(Se({
							...t.comment,
							postId: o
						}, !0, r, a)) : s && void 0 !== n && await e(Me({
							...t.comment,
							parentCommentId: s,
							parentCommentDepth: n
						}, !0, r, a))
					}
				}, Ie = Object(r.a)(pe.s), Te = Object(r.a)(pe.r), Ae = Object(r.a)(pe.n), Re = (Object(r.a)(pe.i), Object(r.a)(pe.o)), Le = (Object(r.a)(pe.v), (e, t, n) => async (o, r, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === M.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Z.G)(t)) o(Re({
						editorMode: e,
						draftKey: n,
						content: c ? Z.i : ""
					})), o(Object(b.c)(e));
					else {
						o(Object(b.b)(n));
						const r = await Object(q.a)(i(), e, c ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(b.a)(n)), o(Re({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(b.c)(e))
						} else o(Object(b.a)(n)), o(Object(f.f)({
							duration: f.a,
							kind: ee.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), De = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: s
					} = e;
					return async (e, o) => {
						const r = o(),
							i = Object(a.a)(Y.c.replyToComment, n);
						if (!Object(ue.Q)(o()) && !Object(ie.a)(r)) return e(Object(d.openRegisterModal)()), void e(Object(u.k)({
							actionSource: u.a.Reply,
							redirectUrl: Object(te.m)(o(), {
								commentId: n
							})
						}));
						const l = r.features.comments.replyFormOpen[t],
							m = l && l[n];
						if ((m || l && s) && (Object.keys(l).forEach(n => l[n] && e(Te({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const h = r.user.prefs.commentMode,
							g = Object(Q.d)();
						if (g) {
							const e = g.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === M.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => $.s(e, null)).map(e => $.l([e])),
									n = $.s("", null),
									s = $.l([n]);
								b = {
									document: [$.c(t), s]
								}
							}
						}
						const f = r.features.comments.drafts[i];
						let v;
						if (v = g ? {
								commentMode: h,
								draftType: Y.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : f || {
								commentMode: h,
								draftType: Y.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(ue.S)(r)) {
							const s = Ie({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: i,
								formData: v
							});
							e(Object(c.startChangeUsernameFlow)(s))
						} else e(Ie({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: i,
							formData: v
						}))
					}
				}, Fe = e => async t => {
					t(Object(me.q)(e)), t(qe(e))
				}, Ue = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Te({
							parentCommentId: t,
							commentsPageKey: n
						})), e(De({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(me.q)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Ge = (e, t) => n => n(Ae({
					draftKey: e,
					formData: t
				})), Be = Object(r.a)(pe.u), qe = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: o,
						text: r
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (J.c(i), e(Be({
							commentId: t,
							commentsPageKey: s,
							draftKey: o,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: Y.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, He = Object(r.a)(pe.E), We = Object(r.a)(pe.D), Ve = Object(r.a)(pe.F), Qe = Object(r.a)(pe.j), ze = Object(r.a)(pe.f), Ke = e => {
					let {
						id: t,
						commentsPageKey: n,
						draftKey: s,
						formData: r
					} = e;
					return async (e, a, i) => {
						let {
							apiContext: c,
							gqlContext: l
						} = i;
						const d = a();
						if (!d.user.account) return;
						e(He({
							draftKey: s
						})), J.d(d);
						const u = Pe(r),
							m = r.commentMode;
						let p;
						if ((p = _e(m, d) ? await (async (e, t, n, s, o) => {
								const r = o === M.i.MARKDOWN,
									a = {
										commentId: t,
										content: {
											markdown: r ? n.text : null,
											richText: r ? null : s
										}
									};
								return Object(x.a)(e, {
									...U,
									variables: {
										input: a
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(T.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(T.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(A.b)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(S.a)()
									}
								})
							})(l(), t, r, u, m) : await (async (e, t, n, s, r) => {
								const a = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return r === M.i.MARKDOWN ? a.text = n.text : (a.text = null, a.richtext_json = s), Object(E.a)(Object(P.a)(e, [j.a]), {
									endpoint: Object(_.a)(Object(I.a)(Object(w.a)(`${e.apiUrl}/api/editusertext`))),
									method: o.jb.POST,
									data: a
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(N.a)(e)
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
									error: e.error || Object(S.a)()
								})
							})(c(), t, r, u, m)).ok) {
							const o = p.body;
							e(Ve({
								commentId: t,
								commentsPageKey: n,
								draftKey: s
							})), e(Object(me.j)({
								[t]: {
									...o.comment
								}
							}))
						} else e(We({
							draftKey: s,
							error: p.error
						}))
					}
				}, Je = Object(r.a)(pe.B), Xe = Object(r.a)(pe.A), Ye = Object(r.a)(pe.C), Ze = (e, t) => async (n, s, r) => {
					let {
						apiContext: a
					} = r;
					const i = s();
					n(Je({
						id: e
					})), J.a(e, i);
					const c = await ((e, t) => Object(E.a)(Object(P.a)(e, [j.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/del`),
						method: o.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(N.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(S.a)()
					}))(a(), e);
					c.ok ? n(Ye({
						id: e,
						postId: t
					})) : n(Xe({
						id: e,
						error: c.error
					}))
				}, $e = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(me.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(B.s)(o(), e, r)).ok || t(Object(me.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, et = (e, t) => async (n, o, r) => {
					let {
						gqlContext: a
					} = r;
					var i, c, d, u, m, p;
					n(Object(me.c)());
					const b = o(),
						h = e => Object(f.f)(Object(f.e)(e, ee.b.Error));
					if (((null === (c = null === (i = b.pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === C.a) n(h(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === X.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(me.o)(i)), (await ((e, t) => Object(x.a)(e, {
								...G,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(z.vb)(null !== (m = null === (u = null === (d = o().pages) || void 0 === d ? void 0 : d.comments) || void 0 === u ? void 0 : u.followed) && void 0 !== m ? m : [], null === (p = o().user.account) || void 0 === p ? void 0 : p.id);
							const e = r ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(f.f)({
								kind: ee.b.SuccessCommunityGreen,
								text: e
							})), Object(ce.a)(b) && r && n(Object(l.c)("comment_follow"))
						} else n(Object(me.o)(i)), n(h(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/economics/econManagement/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_SUCCESS",
				o = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_FAILED",
				r = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_STARTED",
				a = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_SUCCESS",
				i = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_FAILED",
				c = "ECON_MANAGEMENT_FETCH_ASSOCIATED_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "a", (function() {
				return E
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/EconAdminPanelQuery.json"),
				c = n("./src/redditGQL/operations/PerformEconAdminAction.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/routes/econManagement/index.ts"),
				u = n("./src/reddit/selectors/econManagement.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(s.a)(o.c),
				b = Object(s.a)(o.b),
				h = Object(s.a)(o.e),
				g = Object(s.a)(o.f),
				f = Object(s.a)(o.d),
				v = Object(s.a)(o.a),
				O = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						c = Object(m.k)(o);
					if (c && c.isEmployee) try {
						const t = await (async e => {
							const t = await Object(a.a)(e, {
								...i,
								variables: {
									query: "",
									queryName: "getEntityTypes"
								}
							});
							if (!t.ok) throw new Error("Unable to update the preferred achievement flair");
							const n = t.body.data.econAdminPanel.response;
							return JSON.parse(n)
						})(s());
						e(p(t))
					} catch (d) {
						e(b()), e(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: d.message
						}))
					}
				}, C = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const c = n(),
						u = Object(m.k)(c);
					if (u && u.isEmployee) {
						if ("undefined" != typeof window) {
							const t = `?${d.b}=${e}`;
							window.history.pushState({
								path: t
							}, "", t)
						}
						t(h());
						try {
							const n = await (async (e, t) => {
								const n = await Object(a.a)(e, {
									...i,
									variables: {
										query: JSON.stringify({
											entityRef: t
										}),
										queryName: "getEntity"
									}
								});
								if (!n.ok) throw new Error(`Unable to fetch ${t}`);
								const s = n.body.data.econAdminPanel.response;
								return JSON.parse(s)
							})(o(), e);
							t(g(n))
						} catch (p) {
							t(f()), t(Object(r.f)({
								duration: r.a,
								kind: l.b.Error,
								text: p.message
							}))
						}
					}
				}, y = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const c = n(),
						d = Object(m.k)(c);
					if (!d || !d.isEmployee) return;
					const p = Object(u.b)(c);
					if (p) try {
						const n = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...i,
								variables: {
									query: JSON.stringify({
										contextEntityRef: t,
										entityType: n
									}),
									queryName: "getEntitiesBelongingTo"
								}
							});
							if (!s.ok) throw new Error(`Unable to fetch ${n} data for ${t}`);
							const o = s.body.data.econAdminPanel.response;
							return JSON.parse(o)
						})(o(), p.prefixedId, e);
						t(v({
							entity: n,
							type: e
						}))
					} catch (b) {
						t(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: b.message
						}))
					}
				}, E = (e, t, n) => async (s, o, i) => {
					let {
						gqlContext: d
					} = i;
					const p = o(),
						b = Object(m.k)(p);
					if (b && b.isEmployee && Object(u.b)(p)) try {
						await (async (e, t, n, s) => {
							const o = s ? {
								params: s
							} : {};
							if (!(await Object(a.a)(e, {
									...c,
									variables: {
										input: {
											name: n,
											args: JSON.stringify({
												entityRef: t,
												...o
											})
										}
									}
								})).ok) throw new Error(`Unable to perform ${n} on ${t} with ${JSON.stringify(o)}`)
						})(d(), e, t, n), s(Object(r.f)({
							duration: r.a,
							kind: l.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}))
					} catch (h) {
						s(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: h.message
						}))
					}
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(i.a)(c.a),
				d = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						d = n();
					if (!d.economics.me.fetched || i && !d.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(d());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(o.b)({
								endpoint: t,
								method: s.jb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/emailCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = o()(d.c),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.A)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(d.b)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(l.h))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/EmailSettings/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, o) => {
				let {
					apiContext: r
				} = o;
				switch (e) {
					case l.a.Success:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case l.a.AlreadyVerified:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case l.a.WrongUser:
						return void t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, n, s) => {
				let {
					apiContext: c
				} = s;
				const d = await ((e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					method: o.jb.POST,
					endpoint: `${e.apiUrl}/api/v1/verify_email/${t}`,
					data: {}
				}))(c(), e);
				if (d.ok && d.body && d.body.success) return l.a.Success;
				switch (d.body.reason) {
					case l.a.AlreadyVerified:
						return l.a.AlreadyVerified;
					case l.a.WrongUser:
						return l.a.WrongUser;
					default:
						return l.a.Error
				}
			}
		},
		"./src/reddit/actions/framedGild/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/gold/modals.ts"),
				o = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(r.d)(r.a.GildingFlow),
					thingId: c
				})), Object(a.Q)(i) || await t(o.t());
				const l = n();
				if (!Object(a.Q)(l)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const r = e => async (e, t) => {
				const n = t();
				Object(o.Q)(n) || await e(s.t());
				const r = t();
				if (!Object(o.Q)(r)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/env/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				l = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: l.a
				}
			});
			const d = Object(o.a)(i.s);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, n) => {
				let {
					gqlContext: o
				} = n;
				try {
					const t = await Object(a.b)(o());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(d(n))
					}
				} catch (i) {
					Object(s.b)() || console.error(i), r.c.withScope(e => {
						var t, n;
						e.setExtra("response", i.response), e.setExtra("status", null === (t = i.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = i.response) || void 0 === n ? void 0 : n.error), r.c.captureException(i)
					})
				}
			}
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.a)()
				})), await e(Object(r.t)()), Object(a.Q)(t()) || e(Object(i.openLoginModal)())
			}
		},
		"./src/reddit/actions/pages/econManagement.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/econManagement/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.t)());
				const n = t(),
					l = Object(c.Q)(n),
					d = Object(c.N)(n);
				l && d || await e(Object(s.c)("/")), e(Object(r.m)({
					title: "Econ control panel"
				})), await e(Object(o.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/econManagement2.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			n("./src/reddit/actions/economics/econManagement/index.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.t)());
				const n = t(),
					l = Object(c.Q)(n),
					d = Object(c.N)(n);
				l && d || await e(Object(o.c)("/")), e(Object(r.m)({
					title: s.fbt._("Econ control panel", null, {
						hk: "3DJjYu"
					})
				}));
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.d)()
				})), Object(i.Q)(t()) || await e(Object(a.t)()), await e(Object(o.b)()).then(() => {
					if (t().economics.me.data) return e(Object(o.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				o = n("./src/reddit/actions/economics/helpers/async.ts"),
				r = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t().platform.currentPage;
				if (n && n.routeMatch && n.routeMatch.match) {
					const l = (n.routeMatch.match.params || {}).subredditName;
					if (l) {
						const n = [],
							d = t();
						Object(c.Q)(d) || n.push(e(Object(a.t)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(r.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.F)(t(), l);
						await e(Object(o.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/predictions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.i)()
				})), await e(Object(a.t)()), Object(i.Q)(t()) && await e(Object(r.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
					title: Object(s.o)()
				}))
			}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.G),
				b = Object(o.a)(m.p),
				h = Object(o.a)(m.Q),
				g = (e, t, n) => async (o, i, g) => {
					let {
						apiContext: v
					} = g;
					c.m(i(), t);
					const O = t === l.i.MARKDOWN,
						C = t === l.i.RICH_TEXT,
						y = m.k;
					if (O && Object(d.G)(n)) return o(h({
						editorKey: e,
						editorMode: l.i.MARKDOWN,
						content: ""
					})), void o(f(t));
					if (C && !n) return o(h({
						editorKey: e,
						editorMode: l.i.RICH_TEXT,
						content: d.i
					})), void o(f(t));
					o(p(y));
					const E = await Object(a.a)(v(), t, O ? JSON.stringify(n) : n);
					E.ok ? (o(b(y)), o(h({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), o(f(t))) : (o(b(y)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
					const o = Object(i.l)();
					if (o >= 3) return;
					const a = n().user.prefs.useMarkdown ? l.i.MARKDOWN : l.i.RICH_TEXT;
					if (e === a) return;
					const c = e === l.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(i.sb)(o + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(s.a)(r.r),
				i = Object(s.a)(r.F),
				c = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const c = await Object(o.a)(r(), e);
					c && c.ok ? t(a({
						streamId: e,
						level: c.body.data.auto_mute_status.level
					})) : t(i(e))
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/comment/authoring.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/trackers/lightbox.ts"),
				d = n("./src/reddit/helpers/trackers/shortcuts.ts"),
				u = n("./src/reddit/selectors/accountManager/modalData.ts"),
				m = n("./src/reddit/selectors/activeModal.ts"),
				p = n("./src/reddit/selectors/gild.ts"),
				b = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = n("./src/reddit/actions/shortcuts/utils.ts");
			const g = [b.u, b.o, e => !!Object(p.d)(e)],
				f = (e, t) => async (n, p, b) => {
					let {
						apiContext: f
					} = b;
					const v = p();
					for (const e of g)
						if (e(v)) return;
					const O = document.activeElement,
						C = v.shortcuts.activeCommentId,
						y = Object(h.c)(v),
						E = Object(m.b)(v),
						x = Object(u.a)(v),
						P = [r.a.NsfwBlockingModal].includes(x),
						j = [i.a.NSFW_BLOCKING_MODAL_V2].includes(E),
						_ = P || j;
					if (O && "true" === O.contentEditable && C && y) n(o.b({
						parentCommentId: C,
						commentsPageKey: y
					})), Object(h.a)(C);
					else if (E && !_) Object(h.b)(c.b), n(Object(r.i)(E));
					else if (v.toaster[0]) Object(h.b)(c.b), n(Object(a.g)(v.toaster[0].id));
					else if (v.shortcuts.namespace === c.d.Lightbox && v.platform.currentPage) {
						const e = v.platform.currentPage.locationState.closeLocation;
						e && (Object(h.b)(c.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: S
					} = v.shortcuts;
					e(t && S ? l.b(S, "close", !0) : d.a)
				}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T"
			}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/nsfwBlocking/async.tsx"),
				b = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/lib/makeActionCreator/index.ts"),
				g = n("./src/reddit/actions/sso/constants.ts");
			const f = Object(h.a)(g.a),
				v = Object(h.a)(g.b);
			var O = n("./src/reddit/actions/survey/index.ts"),
				C = n("./src/reddit/actions/toaster.ts"),
				y = n("./src/reddit/components/TrackingHelper/index.tsx"),
				E = n("./src/reddit/constants/accountManager.ts"),
				x = n("./src/reddit/constants/history.ts"),
				P = n("./src/reddit/constants/modals.ts"),
				j = n("./src/reddit/constants/parameters.ts"),
				_ = n("./src/reddit/helpers/counters/amModalDesignUpdate.ts"),
				S = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				k = n("./src/reddit/helpers/history/index.ts"),
				N = n("./src/reddit/helpers/sessionStorage/index.ts"),
				M = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				w = n("./src/reddit/helpers/trackers/onboarding.ts"),
				I = n("./src/reddit/icons/svgs/Close/index.tsx"),
				T = n("./src/reddit/models/Sso/index.ts"),
				A = n("./src/reddit/models/Toast/index.ts"),
				R = n("./src/reddit/selectors/accountManager/index.ts"),
				L = n("./src/reddit/selectors/accountManager/modalData.ts"),
				D = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				F = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				U = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				G = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				B = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				q = n("./src/reddit/selectors/experiments/oneTapAuto/index.ts"),
				H = n("./src/reddit/selectors/experiments/survey.ts"),
				W = n("./src/reddit/selectors/telemetry.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				Q = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				z = n.n(Q);
			const K = u.a.iframe("IFrame", z.a),
				J = u.a.button("CloseButton", z.a),
				X = u.a.wrapped(I.a, "Close", z.a),
				Y = Object(c.c)({
					accountManagerSrc: R.a,
					actionSource: L.a,
					frontpageSignupVariant: U.a,
					isAmModalDesignUpdateEnabled: F.a,
					isBlockingInterstitialEnabled: G.b,
					isBlockingInterstitialV2Enabled: G.c,
					isBlurredPreview: B.b,
					isCommentBeforeSignUpEnabled: D.a,
					isDismissSurveyEnabled: H.a,
					isHardBlockingInterstitialEnabled: G.d,
					isLoggedIn: V.Q,
					isOneTapAutoEnabled: q.a,
					isRegularOnboardingEnabled: D.b,
					redirectUrl: L.b
				}),
				Z = Object(i.b)(Y, (e, t) => ({
					onDismissSignupTrigger: () => e(Object(O.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(W.n)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(S.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(b.A)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(f({
							linkedIdentity: n
						})), e(Object(m.g)(s)), e(Object(C.f)(Object(C.e)(t, A.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(v({
							linkedIdentity: n
						})), e(Object(m.g)(s)), e(Object(C.f)(Object(C.e)(t, A.b.SuccessCommunity)))
					},
					openNsfwModal: () => e(Object(p.a)()),
					showToast: (t, n) => {
						e(Object(C.f)(Object(C.e)(t, n)))
					}
				})),
				$ = e => {
					let {
						data: t,
						origin: n
					} = e;
					return t && t.success && (t.type === E.a.ChangePassword || t.type === E.a.Close || t.type === E.a.CreateAccount || t.type === E.a.GoogleOneTapDisplayed || t.type === E.a.GoogleOneTapFlowFailed || t.type === E.a.GoogleOneTapSkipped || t.type === E.a.Login || t.type === E.a.PreferenceStatus || t.type === E.a.Register || t.type === E.a.Resize || t.type === E.a.ShowStep || t.type === E.a.SSOLinkFail || t.type === E.a.SSOLinkSuccess || t.type === E.a.SSOUnlinkFail || t.type === E.a.SSOUnlinkSuccess || t.type === E.a.Subscribe || t.type === E.a.TwoFactorChanged) && n === s.a.accountManagerOrigin
				},
				ee = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class te extends a.a.Component {
				constructor() {
					var e;
					super(...arguments), e = this, this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.isSignupModalDismissed = !1, this.isSignupModalSuccessful = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
						iframeStyles: {}
					}, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.handleLinkSSOSuccess = e => {
						const t = e === T.a.Apple ? P.a.LINK_APPLE_SSO : P.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(o.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === T.a.Apple ? P.a.UNLINK_APPLE_SSO : P.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(o.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.setIframeStyles = e => {
						this.setState(t => ({
							iframeStyles: {
								...t.iframeStyles,
								...e
							}
						}))
					}, this.isOneTapSession = () => this.props.path === E.c.GoogleOneTap && this.props.isOneTapAutoEnabled, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && $(e))
							if (t.type === E.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === E.a.Close) this.closedByUser();
						else if (t.type === E.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === E.a.Login) this.onLogIn();
						else if (t.type === E.a.ChangePassword) this.onChangePassword();
						else if (t.type === E.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === E.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === E.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === E.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === E.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === E.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === E.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === E.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === E.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === E.a.ShowStep ? this.onShowStep(t.step) : t.type === E.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp()
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== m.a.Reply && Object(N.a)(), this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(k.a)(x.b.JustLoggedIn, !0), this.isOneTapSession() ? this.redirectTo(window.location.href) : window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = () => {
						const {
							redirectUrl: e
						} = this.props;
						let t = "";
						t = e || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== m.a.Reply && Object(N.a)(), this.redirectTo(t, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, e === E.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || o.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), A.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(o.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), A.b.SuccessCommunity) : this.props.showToast(o.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), A.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = function(t) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						const s = {
							[j.n]: "true"
						};
						n && (e.props.isCommentBeforeSignUpEnabled ? e.props.isRegularOnboardingEnabled && (s[j.w] = "true") : s[j.w] = "true"), e.isSignupModalSuccessful && (s[j.x] = "true"), e.isOneTapSession() && (s[j.o] = "true"), window.location.replace(Object(d.a)(t, s))
					}, this.closedByUser = () => {
						const {
							actionSource: e,
							isBlockingInterstitialEnabled: t,
							isBlockingInterstitialV2Enabled: n,
							isBlurredPreview: s,
							isCommentBeforeSignUpEnabled: o,
							isDismissSurveyEnabled: r,
							onDismissSignupTrigger: a,
							openNsfwModal: i,
							sendEvent: c
						} = this.props;
						if (this.currentStep) {
							const e = ee[this.currentStep];
							e && c(Object(w.w)(e))
						}
						s && e === m.a.NsfwBlockingModal && i(), this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), (t || n) && e !== m.a.NsfwBlockingModal && c(Object(M.a)()), o && Object(N.a)(), this.close(), this.isSignupModalDismissed && r && a()
					}, this.close = () => {
						this.props.onClose && this.props.onClose(), this.props.isAmModalDesignUpdateEnabled && Object(_.b)(_.a.Dismiss);
						try {
							sessionStorage.removeItem("data"), sessionStorage.removeItem("initialData")
						} catch (e) {}
						this.isAccountCreated && this.onSignUp()
					}, this.isLoaded = !1, this.onIFrameLoad = e => {
						this.currentStep = null, this.isLoaded ? (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						}), this.props.onChange && this.props.onChange()) : this.isLoaded = !0
					}, this.isSignupSurveyTriggerSource = () => {
						const {
							actionSource: e
						} = this.props;
						return e && m.l.includes(e)
					}
				}
				componentDidMount() {
					const {
						actionSource: e,
						exposeIFrameElement: t,
						oniFrameLoaded: n,
						setRef: s
					} = this.props;
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						n(this.iframeRef.current, e), this.focusFirstVisibleIframeInput()
					}, s && s(this.iframeRef), t && t(this.iframeRef.current)), this.props.isBlurredPreview && this.props.actionSource === m.a.NsfwBlockingModal && Object(l.a)(), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === E.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
						height: void 0,
						visibility: void 0,
						width: void 0
					})
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage), this.props.isBlurredPreview && this.props.actionSource === m.a.NsfwBlockingModal && Object(l.b)()
				}
				render() {
					const {
						accountManagerSrc: e,
						actionSource: t,
						className: n,
						isHardBlockingInterstitialEnabled: s,
						path: o
					} = this.props, {
						iframeStyles: r
					} = this.state, i = (o === E.c.Index || o === E.c.Register) && (t === m.a.UserProfile || t === m.a.FeedPost || t === m.a.Comments || t === m.a.FeedScroll || t === m.a.CommentsScroll) && s, c = this.props.showCloseButton && !i;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(K, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: r,
						onLoad: this.onIFrameLoad
					}), c && a.a.createElement(J, {
						onClick: this.closedByUser
					}, a.a.createElement(X, null)))
				}
			}
			t.a = Z(Object(y.c)(te))
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				IframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				iframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				small: "FBb4FZ4ng7CvLYrT6LBdp",
				ssoConfirmPassword: "_3CQoZKhSqrJrbOGJxp03DS",
				mResponsive: "_2CwLGmlfoqlHFJcOwm0RS-",
				linkActionSSOFail: "_1ALB_4jSDt6vPeELvg9lKL",
				linkActionSsoFail: "_1ALB_4jSDt6vPeELvg9lKL",
				mGoogleOneTap: "_15Lh8Q9iPGbXdxumHm8cT9",
				mHiddenOverlay: "_233XfOVq91N_ugGQDBb_OT"
			}
		},
		"./src/reddit/components/AlertBanner/Wrapper.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "GfthJQJvWCHdUoMi6YjYa",
				wrapper: "GfthJQJvWCHdUoMi6YjYa"
			}
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineButton: "_1uQwMnfXrOfzkL_CFxH6fd",
				underlineLink: "vOGtEDdh1mVbkqinhg3Ov",
				wrapper: "_3el1HrJryfAxBUzu4HsIhE",
				deprecated: "_2s1xq3Ji1Oj7oZtdSqWznV",
				fpr: "_36j6vvbAY0wIrxbyXuNQhn",
				suspended: "_1ivoPEQV9lryC0mH-f_uGY",
				closeButton: "_1oAzKCYwbVOQ-AbuRZfMg2",
				closeIcon: "_6aklZuhHMm1XJcsi8dEeP"
			}
		},
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, n) {
			e.exports = {
				header: "cx1ohrUAq6ARaXTX2u8YN",
				showDeprecated: "_378Md-M6pOqwzEiV3lAwYk",
				showFPR: "_2P-zXcOfggYIWnL3EfXUHP",
				showFpr: "_2P-zXcOfggYIWnL3EfXUHP",
				showSuspended: "_3o7sV2ySJ76-f1ktwzclmi",
				offline: "_1OVuPhC0s89CZodD5qWMWP",
				navExperiment: "_32g3BKfzA1V3Y0eaczZbYl",
				inline: "_2aHCVoJEFfwy05xpKqUif2",
				overlayContentWrapper: "_2DJXORCrmcNpPTSq0LqL6i",
				mIsCommentsLightbox: "_26pbaCw90eAC80WRqUfICJ",
				mIsLargeCommentsLightbox: "_2zCdbqYzIDmabv-Dk_ILKk",
				overlayWrapper: "_2mIbM_6nl-2OnOGEbEMRXa",
				main: "_1nxEQl5D2Bx2jxDILRHemb",
				mShowingPaddedPinnedDescriptions: "_3x1dyL19KnZ4kI6i9TlRp4",
				pinnedSubscriptions: "zoWOQnp55WuhEugRSwfw1",
				removeOverflow: "_1TESSB-XqnzjiOpUWj2dND",
				withUpsell: "_1kFzDy0hQVq-CvguZsCcmV",
				lightboxHeaderWrapper: "_3obgdFz00GvpqpuX8QCsNK",
				lightboxHeaderWrapperExp: "_1k5guql3KcBJzH7i7UCr7Y",
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym",
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0",
				offlineBanner: "_1C1Dn0NhEGQkEA9tDGKKSH"
			}
		},
		"./src/reddit/components/BackToSubreddit/index.m.less": function(e, t, n) {
			e.exports = {
				backToSubreddit: "_3aAvvioBKBNnlJqKytAVAd",
				innerContainer: "_3aVffPeM6Nkqs7D0RJ5FBs",
				back: "_17MxNCYEMmDof9NnT6ffxl",
				title: "_2VB8YvVdvxx0h0VGYVrpBX",
				subredditIcon: "_2Aw3HO2EUDcP7F481ZxyYl",
				content: "uhMLc-O1VODjzminrp8py"
			}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class l extends o.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: o,
							dialogId: r
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (r && o(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return o.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(r.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(a.i)(l))
		},
		"./src/reddit/components/Carousel/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FR0eEUi22u9saLEyWWJGS",
				indicators: "_3YoS4yX_XBXWbj-eYFW6MS",
				indicator: "_1mwHqJp51wXFI7rjTonkz5",
				indicatorSelected: "_2ol4vy2ml1IZ6lfT2n775g",
				items: "_26qHHOV6EkP4whoc4ySt3l",
				item: "_2gs-hGAB6w3q4Gc8mSyG5Z",
				fade: "uAUBkt8dAygLJNIsiAmad",
				slide: "_4S2XTVURHpoKNNEuKzJbH"
			}
		},
		"./src/reddit/components/ChangeUsernameModals/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameModals").then(n.bind(null, "./src/reddit/components/ChangeUsernameModals/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameModals/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameTooltip").then(n.bind(null, "./src/reddit/components/ChangeUsernameTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameTooltip/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Object(a.a)(() => Promise.all([n.e("CoinPurchaseModal").then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: d
				});
			Object(c.b)(l.a.ECON_COIN_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
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
				return J
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				g = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/models/Toast/index.ts");
			const O = (e, t) => async (n, o, r) => {
				let {
					apiContext: a
				} = r;
				const i = await (async (e, t, n) => Object(h.a)(Object(g.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: l.jb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(a(), e, t),
					c = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					n(Object(p.S)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? s.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : s.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(b.f({
						id: d,
						kind: v.b.SuccessCommunityGreen,
						text: o
					}))
				} else n(b.f({
					id: c,
					kind: v.b.Error,
					text: s.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: O(e, t)
				}))
			};
			var C = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				x = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				P = n("./src/reddit/components/TrackingHelper/index.tsx"),
				j = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				k = n("./src/reddit/helpers/path/index.ts"),
				N = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const M = (e, t, n, s, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(N.y)(r, void 0, {
						oldSort: n,
						sort: s,
						source: o
					}),
					userSubreddit: Object(N.rb)(r)
				}),
				w = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				I = e => ({
					subreddit: Object(N.hb)(e),
					userSubreddit: Object(N.rb)(e)
				}),
				T = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...I
				});
			var A = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				R = n("./src/reddit/icons/svgs/Info/index.tsx"),
				L = n("./src/reddit/selectors/activeModalId.ts"),
				D = n("./src/reddit/selectors/comments.ts"),
				F = n("./src/reddit/selectors/moderatorPermissions.ts"),
				U = n("./src/reddit/selectors/posts.ts"),
				G = n("./src/reddit/selectors/tooltip.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				q = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = n.n(q),
				W = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const V = Object(x.a)(j.a),
				Q = e => e === W.a.First ? s.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === W.a.Last ? s.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : s.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class z extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== W.a.None) {
							e(t === W.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
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
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: n,
						selectedSort: o
					} = this.props;
					return r.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, r.a.createElement(_.b, {
						className: Object(c.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${Q(o)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), r.a.createElement(A.b, {
						className: H.a.DropdownTriangle,
						onClick: n
					}), r.a.createElement(V, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(_.b, {
						displayText: Q(W.a.First),
						isSelected: o === W.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(_.b, {
						displayText: Q(W.a.Last),
						isSelected: o === W.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(_.b, {
						displayText: Q(W.a.None),
						isSelected: o === W.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var K = z;
			const J = "CommentSort--SortPicker",
				X = "CommentSort--HighlightPicker",
				Y = "CommentSort--Tooltip",
				Z = Object(x.a)(j.a),
				$ = Object(i.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(D.m)(e, {
							commentId: n
						})
					},
					contestModeModalIsOpen: Object(L.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(G.b)(J),
					highlightIsOpen: Object(G.b)(X),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(F.m)(e, {
							postId: n
						});
						return !!s && s.posts
					},
					post: U.G,
					postPermalink: U.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(B.v)(e),
							o = !!Object(F.m)(e, {
								postId: n
							}),
							r = Object(U.G)(e, {
								postId: n
							});
						return (o || s) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: D.p
				}),
				ee = Object(a.b)($, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						changeHighlightSort: t => e(Object(u.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(d.h)({
							tooltipId: J
						})),
						onOpenHighlightDropdown: t => {
							e(Object(d.h)({
								tooltipId: X
							})), t()
						},
						onSetSuggestedSort: t => e(O(n, t)),
						hideTooltip: () => e(Object(d.i)()),
						setContestMode: t => e(Object(p.X)(t, n)),
						showTooltip: () => e(Object(d.h)({
							tooltipId: Y
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, s) => this.props.sendEvent(M(e, this.props.isOverlay, t, n, s)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(w("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(T(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return s.fbt._("{sort name} (suggested)", [s.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: n,
						contestModeModalIsOpen: o,
						dropdownIsOpen: a,
						elementRef: i,
						hideTooltip: d,
						highlightIsOpen: u,
						hasModeratorPostPermissions: m,
						isOverlay: p,
						location: b,
						post: h,
						postPermalink: g,
						selectedHighlightSort: f,
						showCommentHighlighter: v,
						sort: O,
						suggestedSort: x,
						showTooltip: P,
						toggleContestModeModal: j
					} = this.props, N = h.contestMode, M = !b.search.includes(l.t.CONFIDENCE), I = O === l.t.CONFIDENCE && M, T = m && !I, L = l.v[O], D = L ? L() : "", F = x && O === x && !I ? this.addSuggestedLabel(D) : D, U = N ? s.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : s.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), G = N ? s.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : s.fbt._("Start", null, {
						hk: "Mjvpj"
					}), B = N ? s.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : s.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), q = N && !m;
					return r.a.createElement("div", {
						className: Object(c.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !v && q
						}),
						ref: i
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !q && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(_.b, {
						className: Object(c.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Sort by",null,{hk:"E6T9r"})}: ${F}`,
						id: J,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(A.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Z, {
						isOpen: a,
						tooltipId: J
					}, [l.t.CONFIDENCE, l.t.TOP, l.t.NEW, l.t.CONTROVERSIAL, l.t.OLD, l.t.QA].map(e => {
						const t = n || g,
							s = Object(k.b)(t),
							o = l.v[e],
							a = o ? o() : "";
						return r.a.createElement(E.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${s}?sort=${e}`
						}, r.a.createElement(_.b, {
							displayText: a,
							isSelected: O === e,
							skipRoleAttr: !0
						}))
					}))), T && !q && (x ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: O !== x ? this.setSortOnClick : this.clearSortOnClick
					}, O !== x ? s.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : s.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, s.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: Y,
						onMouseEnter: P,
						onMouseLeave: d
					}, r.a.createElement(y.c, {
						className: H.a.Tooltip,
						text: s.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Y
					}), r.a.createElement(R.a, {
						className: H.a.Info
					})))), m && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, s.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(S.a, {
						className: H.a.ToggleSwitch,
						on: N
					}))), v && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(K, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: X,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: w
					})), o && r.a.createElement(C.a, {
						actionText: G,
						headerText: U,
						modalText: B,
						onConfirm: this.setContestMode,
						toggleModal: j,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(P.c)(te))
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				l = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(a.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement(i.a, d({}, n, {
					className: Object(r.a)(l.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(l.a.customScoreStyles, n.scoreClassName),
					downvoteClassName: Object(i.b)(n) ? l.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/CreateAccountSection/index.m.less": function(e, t, n) {
			e.exports = {
				createTitle: "_2FBcfa5LIJrKSNuRAA7WWa",
				createDesc: "_2gHNfZLuOuUSh3Ppfyc0JX",
				createButton: "_2XQ3s48lqlzodYPpT2s-Iu"
			}
		},
		"./src/reddit/components/Crypto/componentStyles.css": function(e, t, n) {},
		"./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "ClaimFreeAwardModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ClaimFreeAwardModal").then(n.bind(null, "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "GoldTargetedOfferModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = () => Promise.all([n.e(0), n.e(1), n.e(3), n.e("vendors~MarketplaceClaimModal~MarketplaceInFeedUnit"), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
				l = Object(s.a)(c, {
					ssr: !1
				});
			Object(a.b)(i.a.ECON_MARKETPLACE_CLAIM, e => r.a.createElement(l, {
				onClose: e
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "EconPowerupsFlairModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EconPowerupsFlairModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_3kFZWXar5EkIAbiKLZxwKw"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = () => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				d = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(l).then(e => e.default)
				});
			Object(i.b)(c.a.ECON_POWERUPS_MARKETING, e => o.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				l = n.n(c);
			const d = () => n.e("PowerupsPremiumUpsellModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx")),
				u = Object(s.a)(d);
			Object(a.b)(i.a.ECON_POWERUPS_PREMIUM_UPSELL, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modal
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_1KwpOybv6p44QN3WvUVBoQ",
				container: "TPBQxpFGmnc7DlYlMReTd",
				title: "_1MbiZSwLn6AEllOCsl_VOs",
				footer: "_3rKjfC0Km1veZhKaJ4mY5g"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})]),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e[0].default)
				});
			Object(c.b)(l.a.ECON_POWERUPS_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsSuccess/index.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "PowerupSuccessModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PowerupSuccessModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsSuccess/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsSuccess/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_POWERUPS_SUCCESS, () => r.a.createElement(d, {
				withOverlay: !0,
				className: l.a.modalBody,
				overlayClassName: l.a.modalOverlay
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3uruuYeyxpi66lhx6sYSsl",
				fadeOut: "nIOXvEXFyDg7VnFtNVmlJ",
				modalBody: "_2HHFaH5ZLOM1NWKsiGkorM",
				successPowerup: "_25UgJzq-s3kOud15pllhar",
				icon: "_15HZ1T5sP47ouINDpZ92Td",
				title: "_2bJ-GCaxSGVPn1OefwaiZ0",
				confetti: "_3cJJ0jZwGKhEPBNW-HZasa"
			}
		},
		"./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-CancelPredictionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-CancelPredictionModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CANCEL_PREDICTION, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-ChangePredictionOutcomeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-ChangePredictionOutcomeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_OUTCOME, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-EndTimeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-EndTimeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-PremiumModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Premium~reddit-components-Econ-Prediction-PremiumModal"), n.e("reddit-components-Econ-Prediction-PremiumModal")]).then(n.bind(null, "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_PREMIUM_UPSELL, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EconTopAwardersModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("EconTopAwardersModal")]).then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/TopAwardersModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EditCommunityDescriptionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EditCommunityDescriptionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EditCommunityDescriptionModal").then(n.bind(null, "./src/reddit/components/EditCommunityDescriptionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EditCommunityDescriptionModal/index.tsx"
				}
			});
			Object(a.b)(i.a.EDIT_DESCRIPTION_MODAL, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "EmailCollectionBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailCollectionBanner").then(n.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailCollection/Banner/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/EmailVerificationTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_2lPBwpVCWIEI428aTPAwZx",
				closeWrapper: "_1_Rq-E5LCS_6JTARElGK12",
				container: "_2IHh1GBfUxJVQQX0dJvAry",
				topLine: "_1l7oRxdMdQQ7NG2BqRCukJ",
				title: "_3tEYeY-LfC8l7tb0sWeImJ",
				subtitle: "_42_eHTHzRRdWB7Fg8R_QS",
				description: "_33SFF8h93OHkDyAJ59D1nc",
				buttonWrapper: "_9wv2Od0X3vE5kIG9M0Ic",
				commonBtn: "_193xt0mDvkWqbClnP3Aj6T",
				primaryBtn: "BwIqd_kQSoiSr3qEDtdp_"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1DtVp1OCzoJt6rVu4kqyST",
				container: "_1DtVp1OCzoJt6rVu4kqyST",
				Phone: "_20m5B-2NHmUmXVUYC1gymo",
				phone: "_20m5B-2NHmUmXVUYC1gymo",
				android: "_2jgq6Cm4n7c3NNl8VpFltS",
				iphone: "_2ocrsCliWP9UUmx5ZL374w",
				Carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				Frame: "_3P_iHJEXRll3mWyuqNik3I",
				frame: "_3P_iHJEXRll3mWyuqNik3I"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_23C-3j-0TrSZn_NJT8fcwU",
				container: "_23C-3j-0TrSZn_NJT8fcwU",
				Disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				Link: "EzRsHBU9A06NEXZnsJyWI",
				link: "EzRsHBU9A06NEXZnsJyWI"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				MainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				mainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				MainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				mainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				Images: "_19dEFhHhbDgVJWuOq0KZlf",
				images: "_19dEFhHhbDgVJWuOq0KZlf",
				IFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				iFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				fields: "g5DNTyz0K4p8Qe1KemhqM",
				NotReady: "W6BMDJ-zjJbsEwxbpvU5r",
				notReady: "W6BMDJ-zjJbsEwxbpvU5r",
				NotReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				notReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				NotReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				notReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				Links: "_1etyEGrcHpnkE1UMtQIjpV",
				links: "_1etyEGrcHpnkE1UMtQIjpV",
				Carousel: "_3OBSZQIgZx2ksSzBQmYOeO",
				carousel: "_3OBSZQIgZx2ksSzBQmYOeO"
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				o = () => null;

			function r(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function a(e) {
				return e && e in s ? s[e] : o
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3b88NBdFAQ04N7cULqQvPh",
				fadeOut: "_3ktYxYLY8M4ue26GyBBjpt",
				modalBody: "_2W0vYckM4OsrrANQqi_sir",
				gildAnimationContainer: "_3xD0e6RJGug4SSLnVIPeh2",
				awardScaleIn: "_231us7lszsy_R3tzl2GqL1",
				awardScaleOut: "eC2A2qBG6f2mU9XPlMMcZ",
				animationComponent: "_2KBRcm-P0k4_mVHu1UroF6",
				starburst: "_3xKR2QByGO_30UN1TJJ9qF",
				awardAsset: "Ju8wOr8Uag5VUdjYF6E_m",
				sparkle: "_28LAx64oVvQTCvxl2mvkX4"
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SPARKLE_ASSET_PATH", (function() {
				return f
			})), n.d(t, "STARBURST_ASSET_PATH", (function() {
				return v
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/gold/giveAwards.ts"),
				h = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				g = n.n(h);
			const f = `${s.a.assetPath}/img/gold/animated-sparkle-256.png`,
				v = `${s.a.assetPath}/img/gold/animated-starburst-256.png`,
				O = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				C = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(l.a)(C(e => {
				const {
					award: t,
					awardIcon: n,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const r = o.fbt._("Animation of {award name} image", [o.fbt._param("award name", t.name)], {
					hk: "222osK"
				});
				return a.a.createElement("div", {
					className: g.a.gildAnimationContainer
				}, a.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.starburst),
					style: {
						backgroundImage: `url(${v})`
					}
				}), a.a.createElement("img", {
					alt: r,
					className: Object(d.a)(g.a.animationComponent, g.a.awardAsset),
					src: n
				}), a.a.createElement("div", {
					className: Object(d.a)(g.a.animationComponent, g.a.sparkle),
					style: {
						backgroundImage: `url(${f})`
					}
				}))
			}))
		},
		"./src/reddit/components/GoogleOneTapIFrame/index.m.less": function(e, t, n) {
			e.exports = {
				loggedInGoogleOneTap: "_2qW2MlTCwrBhUAXSCWhbPD"
			}
		},
		"./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "GovernanceMainnetAnnouncementModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("GovernanceMainnetAnnouncementModal").then(n.bind(null, "./src/reddit/components/Governance/MainnetAnnouncementModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/MainnetAnnouncementModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.GOVERNANCE_MAINNET_LAUNCH, e => r.a.createElement(c, {
				ignoreDefaultFocus: !0,
				withOverlay: !0,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Governance/PurchaseEthModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CryptoPurchaseEth",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("CryptoPurchaseEth").then(n.bind(null, "./src/reddit/components/Governance/PurchaseEthModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/PurchaseEthModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CRYPTO_PURCHASE_ETH, e => r.a.createElement(c, {
				ignoreDefaultFocus: !0,
				withOverlay: !0,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-BurnPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CRYPTO_BURN_POINTS, e => r.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("vendors~reddit-components-Governance-TransactionModals-ConvertToCoinsModal"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CONVERT_TO_COINS, e => r.a.createElement(c, null))
		},
		"./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1_-T-UyaTFWSKiU5qkmH4p",
				sparkle: "_3BW2xh05Xd6fPp8ewmG_zt",
				fadeIn: "_3EsU62vzG6DnMyeCR6qmsN",
				quickCreateGiftAnimation: "_2ayMLd0-DF3iBdcNu4Jyw9",
				sparkle1: "_2XTOJxs8_NUxZs7xO_yqD4",
				sparkle2: "DSsYeuIxRQ_6mpLKn7Znw",
				sparkle3: "egE_sRX5MzRyi9eJWBBvR"
			}
		},
		"./src/reddit/components/Header/AvatarStorefrontCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_3hna43Sh0DTnoV7v2NNc2r",
				sparkle: "_3VX6GfMQ01Q_1wsiZnQ2UN",
				fadeIn: "_2IZWjcaeEX-WJFI5gdPVK",
				sparkle1: "Y2DEjcFyO7_glQ5xOX4oz",
				sparkle2: "_1D5RCB-D8nMhwHbA6m6tDq",
				sparkle3: "Iupw9Lt8-wmCtxCgp5_m8"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				special: "_1dJtiWITrnvIbQdXgYgdym",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/models/Gold/ProductOffer.ts"),
				b = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				h = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/awards/overlayIds.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				x = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				P = n.n(x);
			const j = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CoinPurchaseDropdown",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-CoinPurchaseDropdown").then(n.bind(null, "./src/reddit/components/CoinPurchaseDropdown/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CoinPurchaseDropdown/index.tsx"
					}
				}),
				_ = Object(f.a)(),
				S = Object(l.c)({
					activeSaleConfig: y.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(_)(e),
					isFreeAwardEventEnabled: y.g
				}),
				k = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === _ ? Object(m.i)() : Object(m.f)({
							tooltipId: _
						}))
					}
				}),
				N = Object(c.b)(S, k);
			class M extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: o,
							sendEvent: r,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(v.d)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : o ? p.a.StorefrontFreeAward : void 0;
							r(Object(O.d)("get_coins_cta", e))
						}
						a(t)
					}
				}
				componentDidMount() {
					const {
						activeSaleConfig: e,
						requestSpecialEvents: t
					} = this.props;
					e || t()
				}
				getButtonText() {
					const {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: t
					} = this.props;
					return e ? e.ctaText || o.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : t ? o.fbt._("Free", null, {
						hk: "2qYM7h"
					}) : o.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					})
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: s,
						isFreeAwardEventEnabled: o
					} = this.props, r = this.getButtonText(), a = !!e || o, c = Object(d.a)(P.a.icon, {
						[P.a.special]: a
					});
					return i.a.createElement("button", {
						className: Object(d.a)(t, P.a.ctaContainer, {
							[P.a.special]: a
						}),
						id: _,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(d.a)(P.a.ctaContent, {
							[P.a.special]: a
						})
					}, i.a.createElement(C.a, {
						name: "coins",
						className: c
					}), i.a.createElement("span", {
						className: P.a.text
					}, r)), s && i.a.createElement(j, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: o,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: _
					}))
				}
			}
			t.a = N(Object(g.c)(M))
		},
		"./src/reddit/components/Header/MwebResponsiveHeader/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oBkxkI9Ae3Qs71WqfDicM",
				container: "_1oBkxkI9Ae3Qs71WqfDicM",
				HomeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				homeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				Snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				Wordmark: "_1rivc6IIexuAqsRVeptXuq",
				wordmark: "_1rivc6IIexuAqsRVeptXuq"
			}
		},
		"./src/reddit/components/Header/NavBarIcon/index.m.less": function(e, t, n) {
			e.exports = {
				linkIcon: "_1CJrQqx8R1geiDbJFRZlgJ",
				navIcon: "_1qlK0UklDPcZgA7_wDEzl-"
			}
		},
		"./src/reddit/components/Header/NotificationsButton/index.m.less": function(e, t, n) {
			e.exports = {
				notificationInboxIconContainer: "_1Tdh9XCXmEOaXAlloLqrmH",
				welcomeTooltip: "_3OMmYPy8XZymvnsxBSK3c0",
				visible: "_1Ssw-NK4SzV_ZrK0hsAQZj",
				welcomeTooltipArrow: "_3Dl1lNOXSRFghRireQprSr"
			}
		},
		"./src/reddit/components/Header/QuickLinks/Timer.m.less": function(e, t, n) {
			e.exports = {
				timer: "_1RWqLcP0XUFojNUc0Mf0Yc"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				psBattlesIcon: "_3wyl6g2grDztg8KpnqxWiE",
				redditRecapIcon: "_1o57g3XSOeqm_QEQu824EP",
				isNightMode: "F6FHwO9Q2Pva6rdcMPWrm",
				hotPotatoLink: "_1o0rv7Kcd4-rywKyuwuS4d",
				hotPotatoIcon: "_3hPJyNn7eKE2V1QllrneKU"
			}
		},
		"./src/reddit/components/Header/User/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3Wg53T10KuuPmyWOMWsY2F",
				icon: "_234aKY_LemFWuSTYVoshHn",
				link: "_2qcLS5et_OlJluP0WWDdsJ",
				loggedOut: "U3FRqDA_Qhr4icbaNXSuf",
				loggedOutRow: "_1JBkpB_FOZMZ7IPr3FyNfH",
				oldRedditLink: "_31lJpVPojF0SAR5usRZ36h",
				row: "_19oWd7e3z7-ztUGzdIoCR7",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b",
				iconWrapper: "_2QpF1Fkq_rr2nvPL1no0nN"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, n) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				navbarHeightContainer: "lNoTgmppXfHyXXS-3aRDj",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
				layoutContainer: "_31IHoBZ9we7EzLMdkTaIR2",
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
				snooExp: "_32hLJ8_m9mplK6bwNXysk8",
				wordmark: "_1bWuGs_1sq4Pqy099x_yy-",
				left: "_3dnbqz69WJTFCss8wl7Wlk",
				quickLinks: "_23q1waDr4n_2fR5A7zcZzb",
				right: "_2u8LqkbMtzd0lpblMFbJq5",
				HeaderDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				headerDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				bladeIsOpen: "_1z0T-r2uyIYQr2tLUWs4M2",
				MwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA",
				mwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA"
			}
		},
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_26MVepkxZHzpNv1cuAA4JA",
				mFocused: "_7Xbismt11Yj8tq6BaRWFr",
				buttonContainer: "oiDWziAp_Bua6rb7oQKXs",
				icon: "cq0sTeCPC4GI78UNPdClD",
				text: "_1nBP1OfpQDgTmzRFqaVult",
				hasBadge: "_3JpLC8c1ezEsYuuoANyZgr",
				badge: "_15QIjcY6qqsms0FXyEsVe9"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_1Ok0AiXwAeYl2SsUBaxgPC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less": function(e, t, n) {
			e.exports = {
				filter: "_37tmRmxaFMjRRrvwcY2JmY",
				item: "_2MgAHlPDdKvXiG-Qbz5cbC",
				listHeader: "_2XRPX11qL4-HxWPuHAzOW5",
				headerButton: "_1ee4j8lY-1iIi8GkJdJ5RD"
			}
		},
		"./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2I12Htze2UzJmmfnrgYJOn",
				icon: "_1jAt0x8BSB9mgoXbsDuKJ6",
				link: "_24UNt1hkbrZxLzs5vkvuDh",
				isNightMode: "_1dBtowHdRHcGyLbVEaOL8t"
			}
		},
		"./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "nSJCQrnLY07CzwT8tTsNO",
				title: "csebgIdGwT3fBJ8kUT2aQ",
				subtitle: "rsZg2IAMPbcDGNPnNIBy_",
				description: "_3m-DocsNGlVUjAtAm7ZZLi",
				dismissBtn: "_3tJL-r-lrTcB_GkrrlZxEN"
			}
		},
		"./src/reddit/components/HeaderUserActions/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2zZ-KGHbWWqrwGlHWXR90y",
				postIcon: "_1aj2BqXAeeo2bHwArcJ5AT",
				moderateIcon: "_14ugEJZOmgrUDXYeFSSv9w",
				isLit: "_3ge8uSGq8pAK2qqs45Vzde",
				link: "_1x6pySZ2CoUnAfsFhGe7J1",
				headerLinks: "_20HfCAFz3ot1MW1o29ZoGZ",
				headerUserDropdown: "_1pA8z73SZ1olP5KMKFN4_Z",
				moderationDropdown: "_1luaIaEVRAlXWIwqbCOj2a",
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O",
				notificationInboxIcon: "_2mR_VyuaB50nsX1FR6XERF",
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv",
				cornerModal: "_3yBCXICbzc12nPbAnZeJ54",
				modalOverlay: "jDNUjGbnBI3MbjQP-vMxG"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2CQ2c7khtd-m7uslH6Mz7J",
				collapsibleContainer: "_10IrsfRFg99DXaIMnqu-vj",
				navBasicLink: "_2KD6rqR9FU8VQKN4P42INe",
				navButtonOverride: "Yxq-GFO2Z9y82pMFEMLAf"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2gT-SgcGRQsJc7cLAzWT3r",
				headingContent: "_26v6JOihbU7MuezKAlj4JI",
				subredditIcon: "u_VVgOsrqJsUNbQ80sEby",
				title: "_3eGd1zitdF6RmAyLpSDjG6"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less": function(e, t, n) {
			e.exports = {
				button: "GCltVwsXPu5lE-gs4Nucu",
				category: "_3z4bYCMDgBrJ-Be0By6hNr",
				coinsLink: "_3zu1R6cDitNjrJaFA1VPXj",
				coinsTitle: "_6PPJ3peMr-B90dx0MQDhB",
				meta: "msJd1mFtK7HCAm9dasMIn"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less": function(e, t, n) {
			e.exports = {
				button: "_3fbofimxVp_hpVM6I1TGMS",
				heading: "_1pjbWqnK8P0fDmz8PgLxXY",
				secondLevelButton: "NiNJXib52w4C8FUidB5af",
				secondLevelSwitch: "nBh6t8H3UNZpI1Ce9s6yQ",
				headingContent: "f8nXLisWxOYzMMl1uIAP3",
				iconContainer: "_225mt8Dkk7IyfYILsMLk9t",
				title: "yloKeyD8bfd8UJ_Gi9rsR",
				collapseIcon: "_3MAMvvyd5hQy71OUfBGRkm",
				chevronIcon: "_3DRWid86ywqQiIYSK1e5mN",
				"m-expanded": "_1AFIV6eh63D9Ab_ml6uJ5j",
				mExpanded: "_1AFIV6eh63D9Ab_ml6uJ5j",
				contentContainer: "_3SDj_IT6ZaqCbKfC4eTjb2",
				noBottomDivider: "R2-Y-K1ZaSHnYA0gp7-nb",
				"m-collapsible": "sJncFX1AQ0-0SzCGc9V5L",
				mCollapsible: "sJncFX1AQ0-0SzCGc9V5L",
				isOpen: "_27B2PE8qRdRlQHbzPBidG6",
				innerLink: "_2ChaQYEC5d_hjd-mltzvQK",
				copyrightContainer: "_2XCnMY85ivEZUL6cAgK0nV",
				copyrightText: "_ttuvLVH4k74IkCGNFJSt",
				subredditIcon: "_3i89oiIrBc-3aoYCzDu8Dy",
				spanButton: "VeDtdPVW3ue8oUfGWbxqu"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/avatar.m.less": function(e, t, n) {
			e.exports = {
				avatarLinkBody: "_6opQAE7SUXi-Fy7P3vItL",
				marketingBadge: "_6qTe2HfpYA9trfOatbi74",
				marketingAsset: "_1lcNm4na-FCLir4IeIpM7w",
				sparkle: "_2thIi4nb9dgSv10ECKVHL4",
				fadeIn: "w8i-7IiMlCG-ncHyRHzxw",
				sparkle1: "_2XE_ejqL9tZ617JilWAoev",
				sparkle2: "RPtjfCh_RZnh_Lh-sTACB",
				sparkle3: "o03hgL0CTE9PaKw9A2nHD",
				sparkle4: "_16-T-fB2mGMlxyfbZjQvUG"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				accountCoins: "_2pXW42IYsGP59qZnjAnkAx",
				accountDisplayText: "DFKWwVItcycZV1bKUOyay",
				caretDownIcon: "_3x3dhQasGAuYcXVQ02QUzy",
				accountKarma: "Rz5N3cHNgTGZsIQJqBfgk",
				accountDetails: "_1pHyKCBktIf_9WFW9jjM3P",
				accountWrapper: "_3KfbpxpA8Esu_3UHTmIvfw",
				isLoggedOut: "_22SL37yETIW414yUiZj27w",
				isLoggedIn: "_2OFo5eaD2V6ZcJsYBuYned",
				button: "_1zZ3VDhRC38fXLLvVCHOwK",
				presenceToggle: "_3Axd0OX2sZP0PEIHdeocc3",
				buttonText: "_3m4MQxMy4WfgIkMhHh-UAg",
				coinFontIcon: "LyE1zRbUJlGravH4LHRfD",
				karmaIcon: "_2wYneOcJEB6o4mj1NedmsR",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				navbarLikeMweb: "_2XkHtsPtFuTExJyk9JQUAp",
				imgIconWrapper: "_1zyV-XmoYeSNGWjfZiXbPc",
				defaultProfileIcon: "_3-lF5kPDkSGfnVUW_GtvUV",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF",
				entrypointLink: "pszNQQxC761u1dbJ3aR-C"
			}
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/config.ts"),
				r = n("./src/lib/pubsub/index.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === a.b.Popular,
				l = e => e && e.toLowerCase() === a.b.All,
				d = e => e && e === i.c,
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, n, r, i, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: h
					} = e;
					const g = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						f = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let v, O;
					return d(p) ? (t = `${o.a.assetPath}/img/id-cards/home-banner@2x.png`, r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : l(p) ? (t = `${o.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = a.c[a.b.All]) : c(p) ? (t = `${o.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), r = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, r = u(""), i = b.displayText, m = b.url, O = h && h.subscribersCount, v = h && h.currentlyViewingCount), {
						snooBackground: r,
						description: n,
						titleText: i,
						url: m,
						subscribersCount: O,
						subscribersText: g,
						currentlyViewingText: f,
						currentlyViewingCount: v,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				p = new r.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				g = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InboxTooltip/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "InboxTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("InboxTooltip").then(n.bind(null, "./src/reddit/components/InboxTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InboxTooltip/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/InboxTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_3uJguwDAW5Ra1r4aegBvBq",
				visible: "_1TfMsQUAiVAqjXRo7s3R_t"
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(d);
			const m = Object(o.createContext)(null),
				p = Object(o.createContext)(null);
			class b extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return r.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				g = r.a.memo(() => {
					const [e, t] = Object(o.useState)("-500px"), n = Object(o.useContext)(c.a);
					return r.a.createElement(m.Consumer, null, o => o && r.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, r.a.createElement(l.t, {
						kind: l.b.Button,
						priority: l.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							o.focus(), o.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), r.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				f = r.a.memo(() => r.a.createElement(p.Consumer, null, e => r.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "K4Eem3pMbRbAYioOfqN5E",
				isCollection: "_1_ihtgX_FgdbtB-rbz84r6",
				postDetails: "-DOLBAFWXMQX1Q3ErGO8I",
				mediaIcon: "_33YMDoIltkTaZemWTS7Yki",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				SubscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				subscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				visible: "_3hDL4MmXN5ibsBRoePashZ",
				CloseButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				closeButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				subredditName: "xP-T4vxk4aKEQTlxxGner",
				adaptive: "_34HwaRmVoDiPrSaCPUqpjx",
				srIcon: "_3LZZ1LMv49fbgZrji_1D8u"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/constants/icons.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/shortcuts/close.ts"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/FlairWrapper/index.tsx"),
				h = n("./src/reddit/components/IdCard/helpers.ts"),
				g = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				v = n("./src/reddit/components/SubscribeButton/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/constants/colors.ts"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/helpers/postCollection.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				P = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				k = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/telemetry.ts"),
				I = n("./src/reddit/contexts/Post/index.tsx"),
				T = n("./src/reddit/components/LightboxHeader/index.m.less"),
				A = n.n(T);
			const R = Object(i.c)({
					subreddit: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return null;
						const o = s || Object(N.n)(e, {
							page: n
						});
						return (null == o ? void 0 : o.belongsTo) ? Object(M.M)(e, {
							identifier: o.belongsTo
						}) : null
					},
					post: N.n,
					joinOptimizationsLightboxHeaderEnabled: e => Object(S.a)(e) || Object(S.d)(e) || Object(S.c)(e),
					isVoteCountAnimation: (e, t) => {
						let {
							page: n,
							post: s
						} = t;
						if (!n && !s) return !1;
						const o = n && Object(N.n)(e, {
							page: n
						}) || s;
						return !!o && Object(k.g)(e, {
							post: o
						})
					}
				}),
				L = Object(a.b)(R, (e, t) => {
					let {
						sendEvent: n
					} = t;
					return {
						close: () => {
							e(Object(m.a)(n, !0))
						},
						toggleVote: (t, n) => e(n === _.a.upvoted ? Object(u.kb)(t) : Object(u.w)(t))
					}
				}, (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const o = e.post || n.post;
						o && t.toggleVote(o.id, s)
					}
				})),
				D = {
					[j.o.GIFVIDEO]: d.a.gif_post,
					[j.o.IMAGE]: d.a.image_post,
					[j.o.TEXT]: d.a.text_post,
					[j.o.RTJSON]: d.a.text_post,
					[j.o.VIDEO]: d.a.video_post,
					[j.o.EMBED]: d.a.embed,
					[j.o.LIVEVIDEO]: d.a.video_live,
					[j.o.GALLERY]: d.a.media_gallery,
					[j.o.LIVEAUDIO]: d.a.audio
				},
				F = e => D[(null == e ? void 0 : e.media) ? e.media.type : j.o.EMBED];
			class U extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showSubscribeButton: !1
					}, this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}, this.handleSubscribeButtonVisible = () => {
						this.setState({
							showSubscribeButton: !1
						})
					}, this.handleSubscribeButtonNotVisible = () => {
						this.setState({
							showSubscribeButton: !0
						})
					}, this.handleSubscribeButtonClick = e => {
						e.stopPropagation(), this.props.subreddit && this.props.sendEvent(e => {
							const {
								subreddit: t,
								post: n
							} = this.props;
							return {
								source: "sticky_banner",
								action: "click",
								noun: (null == t ? void 0 : t.name) && Object(M.gb)(e, {
									identifier: {
										name: t.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: n ? w.I(e, n.id) : void 0,
								subreddit: t
							}
						})
					}
				}
				componentDidMount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.addListeners(h.b, this.handleSubscribeButtonVisible), h.h.addListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				componentWillUnmount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.h.removeListeners(h.b, this.handleSubscribeButtonVisible), h.h.removeListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				render() {
					var e;
					const {
						className: t,
						onCloseClick: n,
						onVoteClick: a,
						page: i,
						post: d,
						useAdaptiveStyles: u,
						isVoteCountAnimation: m
					} = this.props, h = F(d), O = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Nb.META_MEMBERSHIP_PAYWALL_PAGE, y = d ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return r.a.createElement("div", {
						className: Object(c.a)(A.a.container, t, {
							[A.a.isCollection]: d && Object(E.a)(d),
							[A.a.adaptive]: u
						})
					}, r.a.createElement(y, {
						postId: null == d ? void 0 : d.id
					}, r.a.createElement("div", {
						className: A.a.postDetails
					}, d && r.a.createElement(o.Fragment, null, m && !u ? void 0 : r.a.createElement(p.a, {
						className: A.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: d,
						onVoteClick: a,
						redditStyle: !0
					}), r.a.createElement(x.a, {
						name: h,
						className: A.a.mediaIcon
					}), r.a.createElement(g.c, {
						className: A.a.postTitle,
						post: d,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : C.a.lightboxHeaderText,
						titleLinkClassName: A.a.postTitleLink
					}), r.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && r.a.createElement(r.a.Fragment, null, r.a.createElement(P.a, {
						className: A.a.srIcon
					}), r.a.createElement(f.a, {
						to: this.props.subreddit.url,
						className: A.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && r.a.createElement("div", {
						className: A.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: A.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && r.a.createElement(v.a, {
						className: Object(c.a)(A.a.SubscribeButton, {
							[A.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && r.a.createElement(G, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const G = r.a.memo(e => r.a.createElement(y.t, {
				className: A.a.CloseButton,
				size: y.d.XS,
				onClick: e.onClick,
				priority: y.c.Plain,
				Icon: Object(x.b)("close"),
				text: s.fbt._("Close", null, {
					hk: "4gbyAA"
				}),
				title: s.fbt._("Close", null, {
					hk: "4gbyAA"
				}),
				"aria-label": s.fbt._("Close", null, {
					hk: "4gbyAA"
				})
			}));
			t.a = Object(O.c)(L(U))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e) {
				const {
					children: t,
					className: n,
					to: s,
					...r
				} = e, l = Object(i.b)(s);
				return o.a.createElement(a.a, c({
					className: n,
					to: l
				}, r), t)
			}

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, s = t ? l : r.a;
				return o.a.createElement(s, d({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(o.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/OfflineBanner/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "OEQgz7Lkj--3zFaLL7BUF",
				online: "_1HWVXJoazfrENIGlRprCVp",
				snoomoji: "_3BcAFuYpz37S0WFvgyWCUN",
				title: "_2hQKVL2Pm4yfkiqifapnBp",
				refresh: "_1E59q-NCGBwN0Aq_bPsPKb",
				hidden: "_2elztvdigLcbcRyu_4wcFW"
			}
		},
		"./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "UsernameConfirmationModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UsernameConfirmationModals").then(n.bind(null, "./src/reddit/components/Onboarding/UsernameConfirmationModals/modalSwitcher.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Onboarding/UsernameConfirmationModals/modalSwitcher.tsx"
				}
			}, {
				ssr: !1
			})
		},
		"./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWrapper: "_1hLh4ExbW_Gl2pkGABn5Fq",
				commonBtn: "_3qX-j7T3VyXW0TBXQ7qkHK",
				primaryBtn: "_2FhXjIw1NMLaXYPWvrnUCg",
				secondaryBtn: "_3Nbznnag8RXkaF5nEep0Pk",
				withTopBorder: "_3brHkn8WaQ5H2a1LCn89uk",
				confirmContainer: "_24bis7_J1W0ONK7UsGGBZy",
				confirmToastContainer: "_3bv61QiJPtGfHcXPpyOpkc",
				confirmModalBody: "_2O5VCGnV4yRDRvGGGyH5T0",
				confirmModalHeader: "_28EAA6q-RnTJAGjzmgV3Ei",
				confirmModalDescription: "_1mjvXY5U1vwpsbbNYGJjul",
				mResponsive: "_1a2XFA9WQOHGxunCZN6IjZ",
				confirmModalIcon: "-JVIMQjsj_SPFhYYAQvsI",
				questionWrapper: "_3-s4mChdgxSWHNGzBUc0N4",
				questionIcon: "_1-mT11KLeK0Cj3V_xKgaTx",
				confirmModalTitle: "_3e3gGI61xrpfMpllnZxDrm",
				confirmToastTitle: "MYXaqAXi91ALzJTXm9rjA",
				welcomeBackModalTitle: "rTLLrliYnsQtx0zfqWuwt",
				usernameWrapper: "_2WW7LagVCdXCoAI0ts8mJr"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, n) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return m
			}));
			var s, o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(s || (s = {}));
			const d = {
					[s.BUTTON]: void 0,
					[s.TAB_GROUP]: c.a.tabGroup
				},
				u = (e, t) => {
					if (t !== s.BUTTON) return e ? c.a.active : c.a.inactive
				},
				m = e => {
					let {
						active: t = !0,
						children: n,
						className: s,
						disabled: o = !1,
						variant: i,
						...m
					} = e;
					return r.a.createElement("button", l({}, m, {
						className: Object(a.a)(c.a.primaryButton, d[i], u(t, i), s),
						disabled: o
					}), n)
				}
		},
		"./src/reddit/components/Pill/PillText/index.m.less": function(e, t, n) {
			e.exports = {
				pillText: "_3CUdiRoAXQxoYJ-UeFCjPS",
				pillTextVariantDay: "_2SVIoeexI3lRGCH0NAYAMx",
				pillTextVariantNight: "QRGfIrC3QhcjQPpbXOPJy"
			}
		},
		"./src/reddit/components/Pill/index.m.less": function(e, t, n) {
			e.exports = {
				pillContainer: "_3LO_LEpMLN8-uaedpg6nl4"
			}
		},
		"./src/reddit/components/Pill/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Pill/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
				let {
					children: t,
					className: n,
					...s
				} = e;
				return o.a.createElement("div", c({
					className: Object(r.a)(i.a.pillContainer, n)
				}, s), t)
			}
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, n) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn",
				createAccountSection: "BtYn3oMRXzNwmNMkolecQ",
				withOverflow: "_3k3RwDkEsbX50bb-DBvuWj"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PostCreationForm-PredictionEditor-InactivityModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PostCreationForm-PredictionEditor-InactivityModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_INACTIVITY_MODAL, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal").then(n.bind(null, "./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/PostFlowUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "PostFlowUpsellModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PostFlowUpsellModal").then(n.bind(null, "./src/reddit/components/PostFlowUpsellModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostFlowUpsellModal/index.tsx"
				}
			});
			Object(a.b)(i.a.POST_FLOW_UPSELL_MODAL_ID, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "SupportersListModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SupportersListModal").then(n.bind(null, "./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_SUPPORTERS_LIST, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
			}))
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_2iaVQV4QQm863obinS6v2-"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const d = () => Object(a.a)(() => Promise.all([n.e("PremiumPurchaseModal").then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(l.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					getComponent: d,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => o.a.createElement(u, null))
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "AdminPanel",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~AdminPanel"), n.e("AdminPanel")]).then(n.bind(null, "./src/reddit/components/AdminPanel/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdminPanel/index.tsx"
				}
			});

			function u() {
				const e = Object(a.d)();
				return Object(o.useEffect)(() => {
					e(Object(i.a)())
				}, []), Object(a.e)(e => Object(c.b)(e) || Object(l.N)(e) || Object(l.M)(e)) ? r.a.createElement(d, null) : null
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL",
				containerExp: "KDkLHOpoLUZvoYQUBe9nF"
			}
		},
		"./src/reddit/components/ShortcutIndexModal/index.m.less": function(e, t, n) {
			e.exports = {
				ColumnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				columnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				ColumnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				columnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				Column: "_3O97w7RY6RBkLbc3u-Mg4u",
				column: "_3O97w7RY6RBkLbc3u-Mg4u",
				Description: "_2rgXACgxMtUDCuKcGDK6tL",
				description: "_2rgXACgxMtUDCuKcGDK6tL",
				Key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				ModalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				modalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				ModalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				modalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				PrimaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				primaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				TextButton: "_1RrzHtukV58ONGeHXBNR7t",
				textButton: "_1RrzHtukV58ONGeHXBNR7t",
				ConnectedModal: "_1qRgDlLw5wytfgHvP96-gS",
				connectedModal: "_1qRgDlLw5wytfgHvP96-gS"
			}
		},
		"./src/reddit/components/ShortcutWrapper/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "ShortcutWrapper",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ShortcutWrapper").then(n.bind(null, "./src/reddit/components/ShortcutWrapper/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ShortcutWrapper/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return o.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(r.a)(a);
			t.a = e => o.a.createElement(i, e)
		},
		"./src/reddit/components/SubredditCreationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/components/SubredditCreationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditCreationModal/index.tsx"
				}
			});
			Object(a.b)(i.a.SUBREDDIT_CREATION_MODAL_ID, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return N
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "c", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				a = n("./node_modules/lodash/shuffle.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/endpoints/survey/index.ts");
			var p = n("./src/reddit/helpers/survey/index.ts"),
				b = n("./src/reddit/models/Survey/index.ts"),
				h = n("./src/reddit/selectors/survey.ts"),
				g = n("./src/reddit/selectors/telemetry.ts");
			const f = (e, t) => {
					const n = Object(h.c)(e),
						s = Object(h.a)(e);
					if (n && s) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const o = g.p(e, t);
					return o ? {
						experiment_name: o.name,
						experiment_variant: o.variant,
						experiment_version: o.version
					} : {}
				},
				v = e => {
					switch (e) {
						case b.a.CES:
							return "ces";
						case b.a.CSAT:
							return "csat";
						case b.a.NPS:
							return "nps";
						case b.a.MULTI_CHOICE:
							return "multi_choice"
					}
				},
				O = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...g.n(n),
					survey: f(n, e)
				}),
				C = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: o,
						questionId: r,
						questionParentId: a,
						type: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "rating",
						...g.n(e),
						survey: {
							type: v(i),
							min: i === b.a.NPS ? 0 : 1,
							max: i === b.a.NPS ? 10 : 7,
							question: s,
							question_id: r,
							parent_question_id: a,
							score: o,
							...f(e, n)
						}
					})
				},
				y = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						text: o,
						type: r,
						questionId: a,
						questionParentId: i
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "freeform_text",
						...g.n(e),
						survey: {
							question: s,
							type: v(r),
							text: o,
							question_id: a,
							parent_question_id: i,
							...f(e, n)
						}
					})
				},
				E = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: o,
						type: r,
						questionId: a,
						questionParentId: i,
						max: c,
						text: l
					} = e;
					return e => ({
						source: "survey",
						action: t,
						noun: "multi_choice",
						...g.n(e),
						survey: {
							type: v(r),
							min: 0,
							max: c,
							text: l,
							question: s,
							score: o,
							question_id: a,
							parent_question_id: i,
							...f(e, n)
						}
					})
				};
			var x = n("./src/reddit/hooks/useGqlContext.ts"),
				P = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/experiments/index.ts"),
				S = n("./src/reddit/selectors/experiments/survey.ts"),
				k = n("./src/reddit/selectors/user.ts");
			const N = () => {
					const e = Object(l.d)(),
						t = Object(x.a)(),
						[n, s] = Object(c.useState)(null),
						o = Object(P.a)(),
						a = Object(l.e)(k.i),
						i = Object(l.e)(k.Fb),
						u = Object(l.e)(_.a, r.a),
						b = Object(l.e)(h.c),
						g = Object(l.e)(h.a),
						f = Object(l.e)(h.b),
						v = Object(l.e)(h.d),
						C = Object(l.e)(S.g),
						y = Object(c.useMemo)(() => {
							const e = Object(p.g)(C),
								t = {};
							for (const n of e) t[n] = u[n];
							return t
						}, [u, C]),
						E = Object(c.useCallback)(e => {
							setTimeout(() => s(e), 500)
						}, []),
						j = Object(c.useCallback)(async e => {
							if (b) {
								const t = Object(p.f)({
									triggerName: e,
									isDemoEnabled: b,
									activeDemoTrigger: g,
									demoTriggerThreshold: f
								});
								return void(t && s(t))
							}
							const o = Object(p.e)({
								triggerName: e,
								surveyExperimentVariants: y,
								samplingId: a || i,
								isSampleFactorEnabled: v,
								isSurveyServiceMigrationEnabled: C
							});
							if (!o || o.experimentName === (null == n ? void 0 : n.experimentName)) return;
							const r = y[o.experimentName];
							(null == r ? void 0 : r.variant) && o.variants.find(e => e.variantName === r.variant) && (C ? await (async (e, t, n) => {
								const s = await Object(m.b)(t());
								if (s.ok) {
									const t = s.body,
										{
											activeSurveys: o
										} = t.data.customerSurveyConfig,
										r = o.find(t => t.experimentName === e.experimentName);
									r && n({
										...e,
										steps: r.steps
									})
								}
							})(o, t, E) : E(o))
						}, [n, y, a, i, v, b, g, f, C, E, t]);
					return Object(c.useEffect)(() => {
						const e = Object(p.c)(),
							t = e.subscribe(j);
						return () => e.unsubscribe(t)
					}, [j]), Object(c.useEffect)(() => {
						if (!n) return;
						const t = Date.now();
						Object(p.i)(n, t), e(Object(d.I)({
							surveyLastSeenTime: t
						}, !1)), o(O(n.experimentName, "display"))
					}, [n, e, o]), {
						activeSurvey: n,
						setActiveSurvey: s
					}
				},
				M = e => {
					let {
						activeStepNum: t,
						activeSurvey: n,
						isFollowUp: o,
						textResponse: r,
						setTextResponse: a,
						setIsSurveyDismissed: i,
						uiStep: l
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: n
						} = e;
						const o = Object(c.useCallback)(e => {
							if (t && n.length) return e.preventDefault(), e.returnValue = "sure?", s.fbt._("Are you sure?", null, {
								hk: "1B7lB5"
							})
						}, [t, n]);
						Object(c.useEffect)(() => (window.addEventListener("beforeunload", o), () => window.removeEventListener("beforeunload", o)), [o])
					})({
						isFollowUp: o,
						textResponse: r
					});
					const [d, u] = Object(c.useState)(!1), m = Object(P.a)(), p = n.experimentName, h = n.steps[t], g = null == h ? void 0 : h.type, f = null == h ? void 0 : h.question, v = Object(c.useCallback)(() => {
						t >= 0 ? u(!0) : (i(!0), m(O(n.experimentName, "dismiss")))
					}, [t, n, m, i]), x = Object(c.useCallback)(() => {
						a(""), i(!0);
						const e = {
							question: f,
							experimentName: p,
							type: g,
							action: "dismiss",
							questionId: l.toString(),
							questionParentId: h.type === b.a.MULTI_CHOICE && o ? `${l-1}` : null
						};
						m(o ? y(e) : h.type === b.a.MULTI_CHOICE ? E(e) : C(e))
					}, [p, o, f, h, m, i, a, g, l]);
					return {
						isLeavingModalShowing: d,
						onClose: v,
						onLeaveCancel: Object(c.useCallback)(() => u(!1), []),
						onLeaveConfirm: x
					}
				},
				w = e => {
					let {
						activeSurvey: t,
						selectedNumber: n,
						setIsSurveyDismissed: s,
						setSelectedNumber: o,
						setTextResponse: r,
						textResponse: a
					} = e;
					const [l, d] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, h] = Object(c.useState)(!1), g = Object(P.a)(), [f, v] = Object(c.useState)(""), [x, j] = Object(c.useState)([]), _ = Object(c.useCallback)(() => {
						var e, c;
						const x = t.experimentName,
							P = t.steps[l],
							_ = null == P ? void 0 : P.type,
							S = null == P ? void 0 : P.question,
							k = null == P ? void 0 : P.followUpQuestion,
							N = t.steps[l + 1],
							M = null == N ? void 0 : N.type,
							w = null == N ? void 0 : N.question;
						if (m(u + 1), N && N.questionOptions && j(i()(N.questionOptions)), -1 === l) {
							g(O(x, "agree")), d(0);
							const e = {
								question: w,
								type: M,
								action: "display",
								experimentName: x,
								questionId: `${u+1}`.toString(),
								questionParentId: null
							};
							return void g(M === b.a.MULTI_CHOICE ? E({
								text: f,
								...e
							}) : C(e))
						}
						const I = {
							experimentName: x,
							type: _,
							action: "submit",
							questionId: u.toString(),
							questionParentId: P.type === b.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (g(p ? y({
								text: a,
								question: k,
								...I
							}) : _ === b.a.MULTI_CHOICE ? E({
								question: S,
								max: null === (e = P.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = P.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
								text: f,
								...I
							}) : C({
								question: S,
								score: n && n + (_ === b.a.NPS ? 0 : 1),
								...I
							})), o(void 0), r(""), v(""), p || !k)
							if (h(!1), l + 1 >= t.steps.length) s(!0);
							else {
								d(l + 1);
								const e = {
									experimentName: x,
									action: "display",
									type: M,
									question: w,
									questionId: (u + 1).toString()
								};
								g(M === b.a.MULTI_CHOICE ? E({
									text: f,
									...e
								}) : C(e))
							}
						else h(!0), g(y({
							experimentName: x,
							action: "display",
							type: _,
							question: k,
							questionId: `${u+1}`,
							questionParentId: u.toString()
						}))
					}, [f, v, l, t, p, a, n, g, s, o, r, u]);
					return {
						questionOptions: x,
						selectedOption: f,
						setSelectedOption: v,
						activeStepNum: l,
						isFollowUp: p,
						onStepComplete: _,
						uiStep: u,
						setActiveStepNum: d,
						setUIStep: m,
						setIsFollowUp: h
					}
				},
				I = e => {
					let {
						isSurveyDismissed: t,
						setIsSurveyDismissed: n,
						setActiveStepNum: o,
						setActiveSurvey: r,
						setUIStep: a,
						setIsFollowUp: i,
						shouldMount: d,
						uiStep: m
					} = e;
					const p = Object(l.d)();
					Object(c.useEffect)(() => {
						t && !d && setTimeout(() => {
							o(-1), a(0), i(!1), r(null), m > 1 && p(Object(u.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: j.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [p, t, d, m, n, o, r, a, i])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/Survey/hooks.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "SurveyAsync",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SurveyAsync").then(n.bind(null, "./src/reddit/components/Survey/Async.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Survey/Async.tsx"
				}
			});

			function c() {
				const {
					activeSurvey: e,
					setActiveSurvey: t
				} = Object(a.d)();
				return e ? r.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/objectSelector/index.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/lib/CSSVariableProvider/index.tsx"),
				f = n("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(d.q)(e, t);
			class O extends r.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return r.a.createElement(g.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const C = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.rb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.F)(e, n);
				if (!s) return;
				if (Object(h.qb)(e, {
						subredditId: s
					})) return;
				const o = e.structuredStyles.models[s];
				return o || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.w)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.Hb)(e).nightmode
			}, (e, t) => {
				const n = Object(h.Hb)(e);
				if (Object(h.Q)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.z)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const o = Object(d.e)(e, t);
				return !!o && o.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, o, r, a, i, c, l, d, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: l,
						isCommentsPage: p,
						isOverlay: d
					},
					h = r && r.length && !Object(f.a)(r) ? `subredditvars-r-${r.toLocaleLowerCase()}` : g.c;
				if (t && n && o) {
					const e = Object(u.h)(n, o);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.i)(e, b)
					}
				}
				if (a) {
					const e = Object(u.h)(a);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(m.h)(e, b) : Object(m.i)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(s.merge)(e, {
						subredditContext: b
					})
				}
			}))(O);
			t.b = C;
			const y = Object(l.u)()(C)
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_2pPCvXlD2wzNO9taY3pzqw",
				icon: "_2pPCvXlD2wzNO9taY3pzqw",
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2",
				EuCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				euCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				EuCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r",
				euCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r"
			}
		},
		"./src/reddit/components/Toaster/MilestoneToast.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3Cb-J_TUgYhl23GF1E8ueS",
				container: "_3Cb-J_TUgYhl23GF1E8ueS",
				SideImage: "_3noiB6ClBZxqX-VfENVYha",
				sideImage: "_3noiB6ClBZxqX-VfENVYha",
				Main: "_2uE5iMLmEfZ_HNjn85c1NP",
				main: "_2uE5iMLmEfZ_HNjn85c1NP",
				SubTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				subTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				PrimaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				primaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				CloseIcon: "_1kI4teIozhxDil2omCIIs5",
				closeIcon: "_1kI4teIozhxDil2omCIIs5"
			}
		},
		"./src/reddit/components/Toaster/PlainBread.m.less": function(e, t, n) {
			e.exports = {
				PlainBread: "trdUvQxqQHHqQKOUBcgnr",
				plainBread: "trdUvQxqQHHqQKOUBcgnr"
			}
		},
		"./src/reddit/components/Toaster/StyledComponents.m.less": function(e, t, n) {
			e.exports = {
				Text: "_7JH6kQpO-bx66b9ajIZrz",
				text: "_7JH6kQpO-bx66b9ajIZrz"
			}
		},
		"./src/reddit/components/Toaster/UappBannerToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "NODQrxMsajJv0SMw0Glss",
				icon: "NODQrxMsajJv0SMw0Glss",
				PrimaryButton: "_-660JDG_NhSvu-lby-LYB",
				primaryButton: "_-660JDG_NhSvu-lby-LYB",
				Bread: "_3jUV8naze01hV-7EqsBdjm",
				bread: "_3jUV8naze01hV-7EqsBdjm"
			}
		},
		"./src/reddit/components/Toaster/index.m.less": function(e, t, n) {
			e.exports = {
				AuthErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				authErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				AuthErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				authErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				CustomIcon: "_3F4cPSBsBgzFOcnpe466x-",
				customIcon: "_3F4cPSBsBgzFOcnpe466x-",
				SnooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				snooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				SnooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				snooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				SubredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				subredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				UnlockIcon: "tClrg2w16xkW4hmCj8nTo",
				unlockIcon: "tClrg2w16xkW4hmCj8nTo",
				LockIcon: "ZI0D2mGVpaunJEvFji7pm",
				lockIcon: "ZI0D2mGVpaunJEvFji7pm",
				RemoveIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				removeIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				Container: "_3q-XSJ2vokDQrvdG6mR__k",
				container: "_3q-XSJ2vokDQrvdG6mR__k",
				Bread: "EjdBJNEwygtHMKiHd3Bnv",
				bread: "EjdBJNEwygtHMKiHd3Bnv",
				mModal: "_29WPjLJ0vRIyLIUC_lQ4a8",
				ButtonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				buttonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				ContentWrapper: "_21oJwLzDt5kLN6scufKBab",
				contentWrapper: "_21oJwLzDt5kLN6scufKBab"
			}
		},
		"./src/reddit/components/Upsell/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomCellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomCellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				}),
				r = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomSheetUpsellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomSheetUpsellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				})
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				rightSideButtons: "_1DUcff8CoMLomEzQZ1S6IX",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				goBackButton: "saAxhszfFnlBT8m48Quv9",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(i.c)({
					currentUser: l.k,
					isNightMode: l.db,
					isPresenceUserPrefEnabled: l.V,
					shouldHideNSFW: l.F
				}),
				f = Object(a.b)(g);
			t.a = f(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: a,
					...i
				} = e, l = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, l ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = Object(o.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(l, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(r.h)(n))
				}
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, o, r, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(o || (o = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(r || (r = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(o || (o = {}))
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = r.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js");
			const a = r.createContext({
				showPromo: o.a,
				dismissPromo: o.a,
				completePromo: o.a,
				promos: new Map
			});
			t.a = a
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/featureThrottling.ts"),
				a = n("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(r.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class l extends o.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = a.a.isFeatureThrottled(t);
							this.setState(n => e === n[t].isThrottled ? null : {
								...n,
								[t]: {
									...n[t],
									isThrottled: e
								}
							})
						} else this.setState(e => {
							const t = Object.keys(r.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = {
								...e[n],
								isThrottled: !0
							}), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return o.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(r.a).reduce((e, t) => (e[t] = {
						isThrottled: !1,
						resetFeature: a.a.resetFeature.bind(a.a, t),
						throttleFeature: a.a.throttleFeature.bind(a.a, t)
					}, e), {})
				}
				componentDidMount() {
					a.a.subscribe(this.onThrottlingDataChange)
				}
				componentWilUnmount() {
					a.a.unsubscribe(this.onThrottlingDataChange)
				}
				render() {
					return Object.keys(c).reduce(this.renderContextProvider, this.props.children)
				}
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(c);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, o.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? o.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : o.a.createElement(a.a, {
				className: l.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, n) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				r = n.n(o);
			t.a = s.a.span("invisibleText", r.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Link/index.m.less"),
				r = n.n(o);
			t.a = s.a.a("link", r.a)
		},
		"./src/reddit/controls/Search/CommunityPill/CommunityPill.m.less": function(e, t, n) {
			e.exports = {
				communityPill: "_2BnN6ItRQFyZgOmfbb2Y6x"
			}
		},
		"./src/reddit/controls/Search/CommunityPill/CommunityPillClickable.m.less": function(e, t, n) {
			e.exports = {
				communityPill: "_1rI3XwdytVSnrZFZ7GTERr",
				pillButton: "_3K6zM7XDkG1DK-zJripGCS",
				pillButtonDay: "YdCe1hj5-WpPqrT3D38TN",
				active: "_3v91t4Y1u-0AfgqNTUQA0Y",
				inactive: "_3mnV6Mirf77DKlf55iLvhY",
				pillButtonNight: "_3j4ZatqDYaMOTxGxGBeLvb",
				pillText: "_27eq9lGbjM8ykD7_MIp4u9",
				subredditIcon: "_1N08fgwXvXgIzF9bbJUhiZ",
				dismissIcon: "C1rtkBdQNxXydNER0blz6",
				dismissButton: "_8jwYN47Iczrd1EcaDmGSy",
				dismissButtonDay: "_3Xu2xFD_KqvCdq3L1eW1iN",
				dismissButtonNight: "_2lIKM0jq5_FM6GHyuwWLS9"
			}
		},
		"./src/reddit/controls/Search/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchBar: "_1DeR7_QiQnu2UK0e2dDfYD",
				searchBarExp: "_2cQyXGCHzUUwjteF5E1eO7",
				inputLabel: "_1t0x2fnX0IYp1-sp47CSHI",
				input: "_1K7ubH9z5v9E6C19j2fjQU",
				iconContainer: "cNtxQ5c1PdvcDe82u_yz9",
				icon: "_3ylUT2QX58nnEl8r4H26ys"
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || a.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[n], {
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.redditStyle]: e.redditStyle
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
				}, o.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(o);
			s.a.h1("heading1", r.a), s.a.h2("heading2", r.a), s.a.h3("heading3", r.a), s.a.h4("heading4", r.a);
			const a = s.a.h5("heading5", r.a),
				i = (s.a.h6("heading6", r.a), s.a.p("body1", r.a), s.a.p("body2", r.a)),
				c = (s.a.p("actionFont", r.a), s.a.p("metadata", r.a));
			s.a.p("metadata3", r.a)
		},
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./src/lib/constants/index.ts"), n("./src/lib/makeApiRequest/index.ts");
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				o = (n("./src/lib/omitHeaders/index.ts"), n("./src/redditGQL/operations/ClaimAwardOffer.json")),
				r = n("./src/redditGQL/operations/FetchSpecialEvents.json");
			n("./src/reddit/constants/headers.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/endpoints/gold/purchase.ts");
			const a = e => Object(s.a)(e, {
					...r
				}),
				i = e => Object(s.a)(e, {
					...o,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				c = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/genericServerError/index.ts"),
				u = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const m = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(u.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(d.a)()
				},
				p = async e => {
					let {
						coins: t,
						context: n,
						correlationId: r,
						offerContext: i,
						pennies: d,
						rememberCard: u,
						token: p,
						savedCardId: b
					} = e;
					const h = {
							token: p ? p.id : void 0,
							coins: t,
							offer_context: i,
							pennies: d,
							remember_card: u,
							card_id: b,
							correlation_id: r
						},
						g = `${n.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(l.a)(g);
					return Object(o.a)(Object(a.a)(n, [c.a]), {
						method: s.jb.POST,
						endpoint: f,
						data: h
					}).then(m)
				}, b = async e => {
					let {
						coins: t,
						context: n,
						correlationId: r,
						gildParams: i,
						isOldReddit: d,
						offerContext: u,
						pennies: p,
						rememberCard: b,
						thingId: h,
						token: g,
						savedCardId: f
					} = e;
					const {
						gildType: v,
						isAnonymous: O,
						message: C
					} = i, y = {
						token: g ? g.id : void 0,
						coins: t,
						offer_context: u,
						pennies: p,
						thing_id: h,
						gild_type: v,
						message: C ? C.trim() : "",
						is_anonymous: O,
						remember_card: b,
						card_id: f,
						correlation_id: r
					}, E = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = d ? E : Object(l.a)(E);
					return Object(o.a)(Object(a.a)(n, [c.a]), {
						method: s.jb.POST,
						endpoint: x,
						data: y
					}).then(m)
				}, h = async e => {
					let {
						context: t,
						correlationId: n,
						gildParams: r,
						isOldReddit: i,
						pennies: d,
						rememberCard: u,
						thingId: p,
						token: b,
						savedCardId: h
					} = e;
					const {
						gildType: g,
						isAnonymous: f,
						message: v
					} = r, O = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: g,
						message: v ? v.trim() : "",
						is_anonymous: f,
						pennies: d,
						remember_card: u,
						card_id: h,
						correlation_id: n
					}, C = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, y = i ? C : Object(l.a)(C);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: y,
						data: O
					}).then(m)
				}, g = async e => {
					let {
						context: t,
						correlationId: n,
						pennies: r,
						token: i
					} = e;
					const d = {
							token: i.id,
							pennies: r,
							correlation_id: n
						},
						u = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(l.a)(u);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: p,
						data: d
					}).then(m)
				}, f = "paymentInfoUpdated", v = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[f]: "true"
					}), o = await Object(r.a)(e, {
						...i,
						variables: {
							successUrl: `${n}?${s}`,
							cancelUrl: `${n}`
						}
					});
					if (!o.ok) throw new Error("Unable to update payment information");
					return o.body.data.changeStripePaymentMethod.sessionId
				}
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const l = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? l.richtext_json = n : l.markdown_text = n, Object(o.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.jb.POST,
					data: l
				})
			}
		},
		"./src/reddit/helpers/awards/overlayIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = () => "COIN_PURCHASE_DROPDOWN_ID"
		},
		"./src/reddit/helpers/counters/loggedOutOneFeed.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/telemetry/helpers/sendCounter.ts");
			const r = (e, t) => {
					Object(o.b)(s.m.Redesign, {
						type: o.a.FrontPageFailed,
						data: {
							errorType: e,
							pageType: t
						}
					})
				},
				a = e => {
					Object(o.b)(s.m.Redesign, {
						type: o.a.LoggedOutMenuRendered,
						data: {
							location: e
						}
					})
				}
		},
		"./src/reddit/helpers/counters/nsfwblocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/sample/index.ts"),
				r = n("./src/telemetry/helpers/sendCounter.ts");
			var a;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(a || (a = {}));
			const i = e => {
					Object(r.b)(s.m.Redesign, {
						type: r.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				c = e => {
					e && Object(o.b)(10) && Object(r.b)(s.m.Redesign, {
						type: r.a.NsfwBlocking,
						data: {
							action: a.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/datadome.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s, o = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(s || (s = {}));
			const r = () => a() ? s.Enabled : s.Disabled,
				a = () => null !== document.getElementById(o.A)
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/map.js"),
				o = n.n(s),
				r = n("./src/lib/FocusTrap/index.ts");
			const a = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				i = e => {
					let t = e;
					do {
						if (a(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				l = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return o()(t, e => e.textContent || "")
				})() : null,
				d = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!d(n, e)) return;
					const {
						startContainer: s,
						startOffset: o,
						endContainer: r,
						endOffset: a
					} = n, i = document.createRange();
					i.selectNode(e);
					let c = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, n) && (i.setStart(s, o), c = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, n) && (i.setEnd(r, a), c = !1), c) return [e];
					const l = document.createElement("div");
					return l.appendChild(i.cloneContents()), [...l.childNodes]
				},
				m = (e, t, n) => {
					let s = e;
					for (; s && (!n || !n(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
					e.querySelectorAll(r.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/frontpageCardPostCountExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s, o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");

			function d(e) {
				return Object(i.S)(e, {}) === r.g.Large && !Object(l.P)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: o.Hd
				})
			}

			function m(e) {
				switch (e) {
					case o.Id.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case o.Id.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/getAccountManagerMessageTarget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/config.ts");
			const o = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
				const t = e.getFullYear(),
					n = e.getMonth();
				return `/posts/${n>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let o, r, a, i, c, l, d, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (r = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, l = e.quarantineRequiresEmail) : e.privateSubreddit ? (r = s.a.PrivateSubreddit, a = e.subredditDescription, d = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? r = s.a.GoldSubreddit : e.subredditBanned ? (r = s.a.SubredditBanned, o = e.subredditBanMessage) : e.subredditDoesNotExist ? r = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? r = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (r = s.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (r = s.a.Nsfw), r && n ? {
					banMessage: o,
					contentGateType: r,
					isContributorRequestsDisabled: d,
					isContributorRequestTimestamp: u,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: l,
					interstitialWarningMessage: m,
					interstitialWarningMessageHtml: p,
					interstitialWarningMessageRTJson: b
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const o = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/karma.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = e => {
				if (!e || !e.karma) return 0;
				const {
					total: t,
					...n
				} = e.karma;
				return t || Object.values(n).reduce((e, t) => e + (t || 0), 0)
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				headingContent: "vLtBjS_8SMsuZByMrcgJH",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = n.n(c);
			const d = i.a.button("button", l.a),
				u = e => t => o.a.createElement("div", {
					className: t.className
				}, e);

			function m(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function p(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, s) {
				const i = e,
					c = "function" == typeof t ? t : u(t),
					{
						meta: d
					} = s,
					m = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i, {
						className: Object(a.a)(l.a.icon, {
							[l.a.isLit]: e
						})
					}), o.a.createElement(c, {
						className: l.a.body
					}), d && o.a.createElement("div", {
						className: l.a.metaContainer
					}, d));
				return n ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.button),
					onClick: e.onClick
				}, m(e.isLit))
			}
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return i
				})), n.d(t, "c", (function() {
					return c
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(s || (s = {}));
			const o = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				r = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(s.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				a = () => o(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				i = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => {
					return !!o(s.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/trackers/authControls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(o.o)(e);
					return {
						actionInfo: Object(r.d)(e),
						post: t && Object(r.I)(e, t) || null,
						profile: Object(r.R)(e),
						screen: Object(r.Z)(e),
						subreddit: Object(r.hb)(e)
					}
				},
				i = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "login",
					...a(t)
				}),
				c = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "signup",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: s.c.CLICK,
					noun: "login_signup",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const s = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				o = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				}),
				r = () => e => ({
					source: "banner",
					action: "view",
					noun: "lang_listing_site"
				}),
				a = () => e => ({
					source: "banner",
					action: "click",
					noun: "lang_listing_site"
				}),
				i = () => e => ({
					source: "banner",
					action: "dismiss",
					noun: "lang_listing_site"
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			const d = e => {
					const t = Object(i.o)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.n)(e),
						screen: Object(c.Z)(e),
						subreddit: Object(c.hb)(e),
						post: t ? Object(c.I)(e, t) : null,
						profile: Object(c.R)(e),
						correlationId: Object(o.c)(o.a.CommentComposer)
					}
				},
				u = async (e, t, s, o) => {
					const r = {
							commentId: o,
							commentsPageKey: s
						},
						i = o && Object(a.j)(e, r) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(l.a)({
						noun: "comment",
						...d(e),
						comment: o ? Object(c.h)(e, o) : null,
						listing: Object(c.y)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, m = (e, t, n, s) => {
					const o = d(e);
					return Object(l.a)({
						...o,
						actionInfo: {
							...o.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: s,
							postId: n
						}
					})
				}, p = e => Object(l.a)({
					noun: "cancel",
					...d(e)
				}), b = (e, t) => {
					t === r.c.replyToPost && Object(l.a)({
						noun: "input",
						...d(e)
					})
				}, h = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.n)(t),
					screen: Object(c.Z)(t),
					subreddit: Object(c.hb)(t),
					post: Object(c.I)(t, e)
				}), g = e => Object(l.a)({
					noun: "edit",
					...d(e)
				}), f = e => Object(l.a)({
					noun: "save_edit",
					...d(e)
				}), v = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...d(n),
						noun: s ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, O = () => e => ({
					...d(e),
					action: "open",
					noun: "gif_tooltip"
				}), C = e => t => ({
					...d(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), y = () => e => ({
					...d(e),
					action: "select",
					noun: "gif_tooltip_result"
				})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(s.n)(t),
					customFeed: Object(s.m)(t, e),
					source: "custom_feeds"
				}),
				r = e => t => ({
					...o(e, t),
					action: "click",
					noun: "delete"
				}),
				a = e => t => ({
					...o(e, t),
					action: "click",
					noun: "follow"
				}),
				i = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...o(e, t),
					action: "click",
					noun: "duplicate"
				}),
				l = e => t => ({
					...o(e, t),
					action: "click",
					noun: "share"
				}),
				d = e => t => ({
					...o(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/goldTopNav.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(o.h)(e, t),
						correlationId: Object(s.d)(s.a.GoldPayment, !1),
						profile: r.R(e),
						subreddit: r.hb(e)
					}
				},
				c = (e, t) => n => ({
					source: a,
					action: "click",
					noun: e,
					...i(n, {
						offerContext: t
					})
				}),
				l = e => t => ({
					source: a,
					action: "click",
					noun: "coins_package",
					...i(t, {
						packageId: e
					})
				}),
				d = () => e => ({
					source: a,
					action: "click",
					noun: "premium",
					...i(e)
				}),
				u = () => e => ({
					source: a,
					action: "click",
					noun: "free_award_offer",
					...i(e)
				}),
				m = e => t => ({
					source: a,
					action: "view",
					noun: "dropdown",
					...i(t, {
						offerContext: e
					})
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: s.Z(e),
					profile: s.R(e),
					subreddit: s.hb(e)
				}),
				r = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...o(t)
				}),
				a = e => t => ({
					...o(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...o(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...o(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "w", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "v", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "A", (function() {
				return P
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "z", (function() {
				return _
			})), n.d(t, "y", (function() {
				return S
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "C", (function() {
				return L
			})), n.d(t, "B", (function() {
				return D
			})), n.d(t, "E", (function() {
				return F
			})), n.d(t, "D", (function() {
				return U
			})), n.d(t, "F", (function() {
				return G
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
					return t => ({
						...Object(o.n)(t),
						action: s.c.CLICK,
						noun: i.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: a
					})
				},
				l = () => e => ({
					...Object(o.n)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				d = () => e => ({
					...Object(o.n)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(o.n)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				f = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				O = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				C = () => e => ({
					...Object(o.n)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				y = (e, t, n, r, c) => l => ({
					...Object(o.n)(l),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(o.d)(l),
						reason: c
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: M(n),
						categoryId: r
					}
				}),
				E = (e, t, n, r, c, l) => d => ({
					...Object(o.n)(d),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(o.d)(d),
						reason: l
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: M(t),
						categoryId: n,
						subredditName: r,
						subredditId: c
					}
				}),
				x = (e, t) => n => ({
					...Object(o.n)(n),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: M(e),
						categoryId: t
					}
				}),
				P = () => e => ({
					...Object(o.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				j = () => e => ({
					...Object(o.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				_ = (e, t) => n => ({
					...Object(o.n)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: M(e),
						categoryId: t
					}
				}),
				S = () => e => ({
					...Object(o.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				k = (e, t, n, r) => c => ({
					...Object(o.n)(c),
					source: a,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					actionInfo: {
						...Object(o.d)(c),
						reason: r
					},
					onboarding: {
						categoryName: M(t),
						categoryId: n
					}
				}),
				N = (e, t, n, r, c) => l => ({
					...Object(o.n)(l),
					source: a,
					action: s.c.VIEW,
					actionInfo: {
						...Object(o.d)(l),
						reason: c
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: M(e),
						categoryId: n,
						subredditName: t,
						subredditId: r
					}
				}),
				M = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var w, I, T;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(w || (w = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(I || (I = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(T || (T = {}));
			const A = () => e => ({
					...Object(o.n)(e),
					action: s.c.VIEW,
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				R = e => t => ({
					...Object(o.n)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(o.d)(t),
						reason: e
					},
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				L = () => e => ({
					...Object(o.n)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				D = e => t => ({
					...Object(o.n)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(o.d)(t),
						reason: e
					},
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				F = () => e => ({
					...Object(o.n)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				U = e => t => ({
					...Object(o.n)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(o.d)(t),
						reason: e
					},
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				G = () => e => ({
					...Object(o.n)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_TOOLTIP,
					source: a
				})
		},
		"./src/reddit/helpers/trackers/shortcuts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "t", (function() {
				return E
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "c", (function() {
				return S
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				r = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.I(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.h(n, t)
				}),
				i = o("show_panel"),
				c = o("esc_close"),
				l = e => r("enter_open_post", e),
				d = e => a("enter_comment_collapse", e),
				u = e => r("j_next", e),
				m = e => a("j_next", e),
				p = e => r("k_previous", e),
				b = e => a("k_previous", e),
				h = e => r("n_next", e),
				g = e => r("p_previous", e),
				f = e => r("s_save", e),
				v = e => a("s_save", e),
				O = e => r("h_hide", e),
				C = e => r("x_expando", e),
				y = e => r("a_upvote", e),
				E = e => a("a_upvote", e),
				x = e => r("z_downvote", e),
				P = e => a("z_downvote", e),
				j = o("c_create_post"),
				_ = e => r("l_go_to_link", e),
				S = e => a("r_comment", e);
			o("q_navigation")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: o.Z(e),
					profile: o.R(e),
					subreddit: o.hb(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...a(t)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? o.u(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				u = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				p = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(r.Ab)(t, {
							userName: e
						}).id
					},
					...o.n(t)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(r.Ab)(t, {
							userName: e
						}).id
					},
					...o.n(t)
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = "/wiki";
				const o = e.countryCode ? `/${e.countryCode}` : "",
					r = e.languageCode ? `/${e.languageCode}` : "";
				return e.subredditName && (n = t ? `${o}${r}/r/${e.subredditName}/about/wiki` : `${o}${r}/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/ApiContext.tsx");

			function r() {
				const {
					gqlContext: e
				} = Object(s.useContext)(o.a);
				return e
			}
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			const o = (e, t) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = o
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", l.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(r.a)(i.a.checkbox, t)
				}, n), o.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, o.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), o.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), o.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), o.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), o.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), o.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
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
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
				let {
					className: t,
					isSubreddit: n,
					...s
				} = e;
				return o.a.createElement("svg", c({
					className: Object(r.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), o.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = l
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, o.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#bluePinkGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: "bluePinkGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#6A5CFF"
				}), o.a.createElement("stop", {
					offset: "1",
					stopColor: "#E4ABFF"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), o.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = (n("./src/polyfill.ts"), n("./src/lib/constants/headers.ts")),
				r = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./node_modules/@r/google-tag-manager/compiled.js"),
				i = n("./src/config.ts"),
				c = n("./node_modules/history/esm/history.js"),
				l = n("./node_modules/js-cookie/src/js.cookie.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./src/lib/makeActionCreator/index.ts"),
				h = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				g = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/reddit/helpers/name/index.ts");
			const v = /^u_[\w-]+$/;
			var O = n("./src/reddit/selectors/user.ts");
			const C = (e, t) => async (n, s) => {
				var o;
				const r = s();
				if (function(e) {
						return v.test(Object(f.h)(e))
					}(t)) {
					const e = (null === (o = Object(O.k)(r)) || void 0 === o ? void 0 : o.displayText) || "";
					if (function(e, t) {
							return Object(f.h)(e) === Object(f.h)(t)
						}(t, function(e) {
							return `u_${Object(f.h)(e)}`
						}(e))) return
				} else if (Object(g.a)(t)) return;
				n((e => ({
					payload: e,
					type: h.f
				}))(e))
			}, y = Object(b.a)(h.e), E = e => ({
				payload: {
					subreddits: e
				},
				type: h.b
			}), x = e => ({
				payload: e,
				type: h.a
			});
			var P = n("./node_modules/redux-thunk/es/index.js"),
				j = n("./node_modules/request-idle-callback/index.js"),
				_ = n("./src/lib/browser/isIncognito.ts"),
				S = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/extractQueryParams/index.ts"),
				N = n("./src/lib/filterQueryParams/index.ts"),
				M = n("./src/lib/getParsedUserAgent/index.ts"),
				w = n("./src/lib/initializeClient/index.tsx"),
				I = n("./src/lib/loadableAction/index.ts"),
				T = n("./src/lib/matchRoute/index.ts"),
				A = n("./src/lib/performance.js"),
				R = n("./src/lib/reCaptchaEnterprise/index.ts"),
				L = n("./src/lib/safeJSONParse/index.ts"),
				D = n("./src/lib/serviceWorker/index.ts"),
				F = n("./src/reduxMiddleware/apiContext.ts"),
				U = n("./src/reduxMiddleware/gqlContext.ts"),
				G = n("./src/telemetry/index.ts"),
				B = n("./src/telemetry/helpers/sendEvent.ts"),
				q = n("./src/telemetry/models/Event.ts"),
				H = n("./src/telemetry/models/Timer.ts"),
				W = n("./src/reddit/actions/apiRequestHeaders.ts"),
				V = n("./src/reddit/actions/chat/toggle.ts"),
				Q = n("./src/reddit/actions/comment/index.ts"),
				z = n("./src/reddit/actions/emailCollection/index.ts"),
				K = n("./src/reddit/actions/emailVerification.ts"),
				J = n("./src/reddit/actions/login.ts"),
				X = n("./src/reddit/selectors/activeModalId.ts"),
				Y = n("./node_modules/reselect/es/index.js"),
				Z = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				$ = n("./src/reddit/selectors/meta.ts");
			const ee = Object(Y.a)($.c, O.Q, Z.d, Z.e, (e, t, n, s) => !(e || t || n && s)),
				te = () => async (e, t) => {
					const n = t(),
						s = ee(n);
					!!!Object(X.a)(n) && s && e(Object(J.openGoogleOneTapModal)())
				};
			var ne = n("./src/reddit/actions/media.ts"),
				se = n("./src/lib/loadWithRetries/index.ts"),
				oe = () => Object(se.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				re = n("./src/reddit/actions/nps.ts");
			const ae = Object(I.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var ie, ce = n("./src/reddit/actions/platform.ts"),
				le = n("./src/reddit/actions/post.ts"),
				de = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				ue = n("./src/reddit/actions/session.ts"),
				me = n("./src/reddit/actions/survey/index.ts"),
				pe = n("./src/reddit/actions/theme.ts"),
				be = n("./src/reddit/actions/toaster.ts"),
				he = n("./src/reddit/actions/users.ts"),
				ge = n("./node_modules/react-redux/es/index.js"),
				fe = n("./node_modules/react-router/esm/react-router.js"),
				ve = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Crypto/componentStyles.css"), n("./src/reddit/components/Root/index.m.less")),
				Oe = n.n(ve),
				Ce = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				ye = n("./src/lib/classNames/index.ts"),
				Ee = n("./node_modules/lodash/isEqual.js"),
				xe = n.n(Ee),
				Pe = n("./node_modules/lodash/omit.js"),
				je = n.n(Pe),
				_e = n("./node_modules/lodash/throttle.js"),
				Se = n.n(_e),
				ke = n("./src/reddit/contexts/NavbarExp.ts"),
				Ne = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Me = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				we = n("./src/lib/fastdom/index.ts"),
				Ie = n("./src/lib/FocusTrap/index.ts"),
				Te = n("./src/lib/isEqualWithoutKey/index.ts"),
				Ae = n("./src/lib/isSimpleClick/index.ts"),
				Re = n("./src/reddit/actions/header.ts"),
				Le = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				De = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				Fe = n("./node_modules/polished/dist/polished.es.js"),
				Ue = n("./node_modules/react-motion/lib/react-motion.js"),
				Ge = n("./src/lib/lessComponent.tsx"),
				Be = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				qe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				He = n("./src/reddit/constants/accountManager.ts"),
				We = n("./src/reddit/helpers/trackers/onboarding.ts"),
				Ve = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Qe = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				ze = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				Ke = n("./src/reddit/components/Carousel/index.m.less"),
				Je = n.n(Ke);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(ie || (ie = {}));
			class Xe extends m.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === ie.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
					}, this.handleNextFadePage = () => {
						this.setState((e, t) => ({
							...e,
							pageNumber: (e.pageNumber + 1) % t.items.length
						}))
					}, this.handleNextSlidePage = () => {
						this.setState((e, t) => {
							const n = 10 * t.items.length;
							return {
								...e,
								pageNumber: (e.pageNumber + 1) % n,
								items: e.pageNumber === n - 1 ? t.items : e.pageNumber === e.items.length - 1 ? e.items.concat(t.items) : e.items
							}
						})
					}, this.clearPageInterval = () => {
						this.timeoutNumber && window.clearTimeout(this.timeoutNumber)
					}, this.setPageInterval = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						t.clearPageInterval(), t.timeoutNumber = window.setTimeout(t.handleNextPage, t.props.itemTime + e)
					}, this.handleItemClick = () => {
						this.clearPageInterval(), this.handleNextPage()
					}, this.renderItemExtra = e => {
						let {
							img: t,
							style: n
						} = e;
						return m.a.createElement("img", {
							key: t,
							src: `${i.a.assetPath}/${t}`,
							style: n
						})
					}, this.renderItem = (e, t) => {
						const {
							animationType: n,
							itemWidth: s,
							shouldHandleMouseClicks: o
						} = this.props, {
							pageNumber: r
						} = this.state, a = n === ie.Fade ? {
							opacity: t === r ? 1 : 0
						} : {
							marginLeft: 0 === t ? -s * r : void 0
						};
						return m.a.createElement("div", {
							className: Object(ye.a)(Je.a.item, Je.a[n]),
							key: `item-${t}`,
							style: {
								...a,
								backgroundImage: `url("${i.a.assetPath}/${e.img}")`,
								width: s
							},
							onClick: o ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(ye.a)(Je.a.indicator, {
							[Je.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
						}),
						key: t
					}), this.state = {
						items: e.items,
						pageNumber: 0
					}
				}
				componentDidMount() {
					this.setPageInterval(this.props.delay)
				}
				componentWillUnmount() {
					this.clearPageInterval()
				}
				render() {
					const {
						className: e,
						shouldShowIndicators: t,
						items: n
					} = this.props;
					return m.a.createElement("div", {
						className: Object(ye.a)(e, Je.a.container)
					}, m.a.createElement("article", {
						className: Je.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: Je.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var Ye = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				Ze = n.n(Ye);
			const $e = Ge.a.div("Container", Ze.a),
				et = Ge.a.wrapped(Xe, "Carousel", Ze.a),
				tt = Ge.a.div("Phone", Ze.a),
				nt = Ge.a.img("Frame", Ze.a),
				st = `${i.a.assetPath}/img/frontpage-signup/android-frame.png`,
				ot = `${i.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				rt = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				at = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var it = e => {
					const {
						className: t
					} = e;
					return m.a.createElement($e, {
						className: t
					}, m.a.createElement(tt, {
						className: Ze.a.android
					}, m.a.createElement(et, {
						animationType: ie.Fade,
						className: Ze.a.android,
						delay: 2500,
						items: rt,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(nt, {
						src: st
					})), m.a.createElement(tt, {
						className: Ze.a.iphone
					}, m.a.createElement(et, {
						animationType: ie.Fade,
						className: Ze.a.iphone,
						items: at,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(nt, {
						src: ot
					})))
				},
				ct = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				lt = n.n(ct);
			const dt = Ge.a.div("Container", lt.a),
				ut = Ge.a.span("Disclaimer", lt.a),
				mt = Ge.a.a("Link", lt.a);
			var pt = e => m.a.createElement(dt, {
					className: e.className
				}, m.a.createElement(mt, {
					href: "https://www.redditinc.com/"
				}, s.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(mt, {
					href: "https://www.redditinc.com/advertising"
				}, s.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(mt, {
					href: "http://www.redditblog.com/"
				}, s.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(mt, {
					href: "https://www.redditinc.com/careers"
				}, s.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(mt, {
					href: "https://www.reddithelp.com"
				}, s.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(mt, {
					href: "https://www.redditinc.com/press"
				}, s.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(mt, {
					href: "https://www.reddit.com/coins"
				}, s.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(mt, {
					href: "https://redditgifts.com/"
				}, s.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(mt, {
					href: "https://www.reddit.com/premium"
				}, s.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(mt, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, s.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(mt, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, s.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(ut, null, s.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				bt = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				ht = n.n(bt);
			const gt = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				ft = Ge.a.div("Container", ht.a),
				vt = Ge.a.wrapped(Be.a, "IFrame", ht.a),
				Ot = Ge.a.wrapped(it, "Images", ht.a),
				Ct = Ge.a.wrapped(pt, "Links", ht.a),
				yt = Ge.a.div("MainContent", ht.a),
				Et = Ge.a.div("MainContentColumn", ht.a),
				xt = Ge.a.button("NotReady", ht.a),
				Pt = Ge.a.span("NotReadyText", ht.a),
				jt = Ge.a.wrapped(Ve.a, "NotReadyIcon", ht.a),
				_t = Object(Ne.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: o,
						onCloseClick: r,
						onVisibilityChange: a
					} = e, i = Object(Qe.a)(e).bodyText;
					return m.a.createElement(De.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(ft, {
						className: t,
						innerRef: n
					}, m.a.createElement(yt, null, m.a.createElement(Et, null, m.a.createElement(Ot, null, "Images Placeholder")), m.a.createElement(Et, null, m.a.createElement(vt, {
						className: Object(ye.a)({
							[ht.a.fields]: Object(ze.b)(o)
						}),
						path: He.c.Register,
						uiMode: He.d.Embed
					}))), m.a.createElement(xt, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(Fe.i)(.8, i)
						}
					}, m.a.createElement(Pt, null, s.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(jt, null)), m.a.createElement(Ct, null)))
				});
			class St extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class kt extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(We.d)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(St, {
							scrollTo: t
						})
					}
				}
				render() {
					const {
						className: e,
						frontpageSignupVariant: t
					} = this.props, {
						isClosed: n
					} = this.state, s = n && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(_t, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(Ue.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(Ue.spring)(s, gt)
						}
					}, this.renderScroller))
				}
			}
			var Nt = Object(qe.c)(kt),
				Mt = n("./src/lib/localStorageAvailable/index.ts"),
				wt = n("./src/reddit/actions/modal.ts"),
				It = n("./src/higherOrderComponents/makeAsync.tsx"),
				Tt = Object(It.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				At = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Rt = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var Lt = Object(It.a)({
				getComponent: () => Object(se.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Dt = () => null;
			var Ft = Object(It.a)({
					ErrorComponent: Dt,
					getComponent: () => Object(se.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Dt
				}),
				Ut = n("./src/higherOrderComponents/asModal/index.tsx"),
				Gt = n("./src/reddit/actions/structuredStyles/index.ts"),
				Bt = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				qt = n("./src/reddit/constants/modals.ts"),
				Ht = n("./src/reddit/controls/TextButton/index.tsx"),
				Wt = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Vt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Qt = Object(ge.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(wt.i)(qt.a.BLADE_NIGHTMODE)), e(Object(Gt.f)())
					},
					openBlade: () => {
						e(Object(Gt.e)(n))
					}
				}
			});
			var zt = Object(Ut.a)(Qt(e => m.a.createElement(Bt.e, null, m.a.createElement(Bt.i, null, m.a.createElement(Wt.a, null, m.a.createElement(Bt.q, null, Vt._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(Ht.a, {
					onClick: e.closeModal
				}, m.a.createElement(Bt.b, null)))), m.a.createElement(Bt.l, null, m.a.createElement(Bt.o, null, Vt._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(Bt.g, null, m.a.createElement(Bt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, Vt._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(Bt.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, Vt._("Continue", null, {
					hk: "413jMZ"
				})))))),
				Kt = n("./src/reddit/actions/authorFlair.ts"),
				Jt = n("./src/reddit/actions/gold/powerups.ts"),
				Xt = n("./src/reddit/actions/userFlair/index.ts"),
				Yt = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				Zt = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				$t = n("./src/reddit/components/FlairPreview/index.tsx"),
				en = n("./src/reddit/components/FlairSearch/index.tsx"),
				tn = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				nn = n("./src/reddit/controls/Button/index.tsx"),
				sn = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				on = n("./src/reddit/layout/row/Inline/index.tsx"),
				rn = n("./src/reddit/models/Flair/index.ts"),
				an = n("./src/reddit/models/User/index.ts"),
				cn = n("./src/reddit/selectors/authorFlair.ts"),
				ln = n("./src/reddit/selectors/moderatorPermissions.ts"),
				dn = n("./src/reddit/selectors/telemetry.ts"),
				un = n("./src/reddit/selectors/userFlair.ts"),
				mn = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				pn = n.n(mn);
			const bn = e => e.flairModalContext && e.currentUser && Object(an.e)(e.currentUser) === e.flairModalContext.username,
				hn = e => e.authorFlair || bn(e) && e.userFlairData.applied || null,
				gn = Ge.a.wrapped(on.a, "Section", pn.a),
				fn = Ge.a.div("CheckboxText", pn.a);
			class vn extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(dn.ib)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						var e;
						const {
							props: t,
							state: n
						} = this, s = n.previewFlair ? n.previewFlair.templateId : void 0;
						t.activeFlairChanged(n.previewFlair, s, n.showFlair, t.flairModalContext), (null === (e = t.flairModalContext) || void 0 === e ? void 0 : e.isOpenedFromAchievementsModal) ? t.openAchiementFlairModal() : t.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: hn(e),
						showFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				canSave() {
					const {
						userFlairData: e
					} = this.props, {
						previewFlair: t
					} = this.state, {
						templates: n,
						permissions: s
					} = e, {
						isUserEnabled: o
					} = e.displaySettings, r = this.state.showFlair !== o, a = hn(this.props);
					if (!s.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(tn.b)(n, t, a);
					return !(i || c !== tn.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: o,
						flairModalContext: r
					} = e, a = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == r ? void 0 : r.isOpenedFromAchievementsModal, {
						templates: l,
						templateIds: d
					} = n, u = this.canSave(), p = bn(e);
					return m.a.createElement(Zt.a, null, m.a.createElement(Yt.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement($t.a, {
						flair: t.previewFlair,
						flairTemplateType: rn.d.UserFlair,
						placeholderText: s.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(en.a, {
						flair: t.previewFlair,
						flairTemplateType: rn.d.UserFlair,
						subredditId: o,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(gn, null, m.a.createElement(sn.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(fn, null, s.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: pn.a.buttonsRow
					}, c && m.a.createElement(nn.t, {
						className: pn.a.goBackButton,
						priority: nn.c.Plain,
						onClick: e.openAchiementFlairModal
					}, s.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: pn.a.rightSideButtons
					}, a && m.a.createElement(nn.o, {
						className: pn.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(nn.l, {
						disabled: !u,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const On = Object(ge.b)(() => Object(Y.c)({
				authorFlair: cn.b,
				currentUser: O.k,
				flairModalContext: cn.c,
				isMod: (e, t) => !!Object(ln.n)(e, t),
				userFlairData: un.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, o, r) => e(Object(Xt.f)(n, s, o, r.username, t.subredditId)),
				closeModal: () => e(Object(Kt.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(Jt.d)())
			}))(vn);
			var Cn = Object(Ut.a)(Object(qe.c)(On)),
				yn = n("./src/reddit/selectors/bannedUser.ts"),
				En = n("./src/reddit/selectors/muted.ts"),
				xn = n("./src/reddit/selectors/notificationPrefs.ts"),
				Pn = n("./src/reddit/selectors/platform.ts"),
				jn = n("./src/reddit/selectors/removalReasons.ts"),
				_n = n("./src/reddit/constants/cookie.ts"),
				Sn = n("./src/reddit/featureFlags/index.ts"),
				kn = n("./src/reddit/helpers/localStorage/index.ts"),
				Nn = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Mn = Object(Y.c)({
				activeModalId: X.a,
				authorContext: cn.c,
				badgePurchaseModalIsOpen: Object(X.b)(qt.a.BADGE_PURCHASE),
				banContext: yn.a,
				banModalIsOpen: Object(X.b)(qt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(X.b)(qt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => Sn.d.introModal(e),
				isOverlayOpen: Pn.i,
				moderatorPermissions: e => {
					const t = Object(Pn.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: En.b,
				muteModalIsOpen: Object(X.b)(qt.a.MUTE_USER),
				notificationsPrePromptIsOpen: xn.e,
				removalReasonContext: jn.b,
				removalReasonModalIsOpen: Object(X.b)(qt.a.ADD_REMOVAL_REASON),
				subredditId: Pn.c,
				userFlairModalIsOpen: Object(X.b)(qt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: O.A,
				userInRedesignBeta: O.H,
				userIsLoggedIn: O.Q,
				userIsMod: O.R,
				userIsNew: O.U
			});
			class wn extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Mt.a)()) return; {
						const e = d.a.get(_n.a);
						e && d.a.remove(_n.a, {
							domain: i.a.cookieDomain
						});
						const t = Object(kn.E)(qt.a.ALPHA_CONSUMER);
						t && Object(kn.ab)(qt.a.ALPHA_CONSUMER), (e || t) && Object(kn.Gb)(qt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(kn.E)(qt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(kn.Gb)(qt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (qt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Nn.a)(), 500) : setTimeout(() => Object(Nn.b)(), 500)))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: o,
						currentBadgePurchase: r,
						muteContext: a,
						muteModalIsOpen: i,
						notificationsPrePromptIsOpen: c,
						removalReasonContext: l,
						removalReasonModalIsOpen: d,
						sendEvent: p,
						subredditId: b,
						toggleBanModal: h,
						toggleMuteModal: g,
						toggleRemovalReasonsModal: f,
						userFlairModalIsOpen: v
					} = this.props, O = (e, t, n) => s => () => p(o => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(dn.h)(o, n),
						post: n && Object(dn.I)(o, n),
						screen: Object(dn.Z)(o),
						subreddit: Object(dn.ib)(o, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(At.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: h,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username,
						withOverlay: !0
					}), i && a && m.a.createElement(Rt.a, {
						contextId: a.contextId,
						subredditId: a.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", a.subredditId, a.contextId)("add_in_context"),
						username: a.username,
						withOverlay: !0
					}), d && l && m.a.createElement(Ft, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: f,
						trackClick: O("removal_reasons", l.subredditId, 1 === l.itemIds.length ? l.itemIds[0] : void 0)
					}), o && b && m.a.createElement(zt, {
						subredditId: b
					}), v && e && e.subredditId && m.a.createElement(Cn, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && r && m.a.createElement(Tt, {
						withOverlay: !0,
						productId: r
					}), c && m.a.createElement(Lt, null))
				}
			}
			var In = Object(ge.b)(Mn, e => ({
					markRedesignModalAsClosed: () => e(Object(wt.j)()),
					toggleBanModal: () => e(Object(wt.i)(qt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(wt.i)(qt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(wt.i)(qt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(wt.i)(qt.a.ADD_REMOVAL_REASON))
				}))(Object(qe.c)(wn)),
				Tn = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				An = n("./src/reddit/constants/experiments.ts"),
				Rn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Ln = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Dn = n("./src/reddit/selectors/responsiveSettings.ts"),
				Fn = n("./src/telemetry/helpers/sendCounter.ts"),
				Un = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Gn = n.n(Un);
			const Bn = Ge.a.div("Overlay", Gn.a),
				qn = Ge.a.div("IframeContainer", Gn.a),
				Hn = {},
				Wn = Object(Rn.u)(),
				Vn = Object(Y.c)({
					frontpageSignupVariant: ze.a,
					isResponsiveSettingsEnabled: Dn.a
				}),
				Qn = {
					[He.c.ChangePassword]: qt.a.CHANGE_PASSWORD_MODAL_ID,
					[He.c.Index]: qt.a.LOGIN_MODAL_ID,
					[He.c.Register]: qt.a.REGISTER_MODAL_ID,
					[He.c.EnableTwoFactor]: qt.a.ENABLE_TWO_FACTOR,
					[He.c.DisableTwoFactor]: qt.a.DISABLE_TWO_FACTOR,
					[He.c.TwoFactorBackupCodes]: qt.a.TWO_FACTOR_BACKUP_CODES,
					[He.c.LinkAppleSSO]: qt.a.LINK_APPLE_SSO,
					[He.c.UnlinkAppleSSO]: qt.a.UNLINK_APPLE_SSO,
					[He.c.LinkGoogleSSO]: qt.a.LINK_GOOGLE_SSO,
					[He.c.UnlinkGoogleSSO]: qt.a.UNLINK_GOOGLE_SSO,
					[He.c.GoogleOneTap]: qt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[He.c.Onboarding]: qt.a.ONBOARDING_MODAL_ID
				};
			class zn extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === He.c.Register && Object(ze.f)(this.props.frontpageSignupVariant) && Ln.a.throttleFeature(An.Qc), this.props.sendEvent(Object(We.d)(this.subscriptions))
					}, this.resizeContainer = e => {
						this.setState({
							containerSize: e
						})
					}, this.restoreContainerSize = () => {
						this.setState({
							containerSize: null
						})
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}, this.handleSSOLinkActionFail = () => {
						this.setState({
							isSSOLinkActionFailedModal: !0
						})
					}, this.restoreIFrameStyles = () => {
						this.setState({
							removeGoogleOneTapStyles: !0,
							removeHiddenOverlay: !0
						})
					}, this.onGoogleOneTapSkipped = e => {
						"user_cancel" === e && (this.props.sendEvent(Object(We.g)()), Object(Fn.b)(S.m.Redesign, {
							type: Fn.a.OneTapDismissed,
							data: {}
						}))
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(We.h)()), Object(Fn.b)(S.m.Redesign, {
							type: Fn.a.OneTapViewed,
							data: {}
						})
					}, this.onShowScreen = e => {
						const {
							path: t
						} = this.props, n = t === He.c.Index || t === He.c.Register, s = t === He.c.GoogleOneTap;
						e === He.b.SelectAccount ? n ? this.resizeContainer({
							height: 474,
							width: 416
						}) : s && this.setState({
							removeHiddenOverlay: !0
						}) : e === He.b.Subscribe ? (n && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === He.b.Email || e === He.b.UsernameAndPassword ? n && this.restoreContainerSize() : e !== He.b.EmailOptIn && e !== He.b.GoogleUI || this.setState({
							removeHiddenOverlay: !1
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isResponsiveSettingsEnabled: t,
						pageLayer: n,
						path: s
					} = this.props, {
						containerSize: o,
						isSSOLinkActionFailedModal: r,
						removeGoogleOneTapStyles: a,
						removeHiddenOverlay: i
					} = this.state, c = Object(ze.c)(e) || Object(ze.d)(e), l = s === He.c.LinkAppleSSO || s === He.c.LinkGoogleSSO || s === He.c.UnlinkAppleSSO || s === He.c.UnlinkGoogleSSO, d = s === He.c.GoogleOneTap, u = Object(ye.a)({
						[Gn.a.small]: c,
						[Gn.a.ssoConfirmPassword]: l,
						[Gn.a.linkActionSSOFail]: r,
						[Gn.a.mResponsive]: t,
						[Gn.a.mGoogleOneTap]: d && !a
					}), p = Object(ye.a)({
						[Gn.a.mGoogleOneTap]: d && !a,
						[Gn.a.mHiddenOverlay]: d && !i
					}), b = !c && !r && !t;
					return m.a.createElement(Bn, {
						className: p
					}, m.a.createElement(qn, {
						className: u,
						style: o || Hn
					}, m.a.createElement(Be.a, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: n,
						path: s,
						showCloseButton: b
					})))
				}
			}
			const Kn = Wn(Object(ge.b)(Vn, (e, t) => ({
				closeModal: t => {
					e(Object(wt.g)(Qn[t]))
				}
			}))(Object(qe.c)(zn)));
			Object(Tn.b)(qt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(Kn, {
				path: He.c.ChangePassword
			})), Object(Tn.b)(qt.a.LOGIN_MODAL_ID, e => m.a.createElement(Kn, {
				path: He.c.Index
			})), Object(Tn.b)(qt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(Kn, {
				path: He.c.Onboarding
			})), Object(Tn.b)(qt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(Kn, {
				path: He.c.EnableTwoFactor
			})), Object(Tn.b)(qt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(Kn, {
				path: He.c.DisableTwoFactor
			})), Object(Tn.b)(qt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(Kn, {
				path: He.c.TwoFactorBackupCodes
			})), Object(Tn.b)(qt.a.REGISTER_MODAL_ID, e => m.a.createElement(Kn, {
				path: He.c.Register
			})), Object(Tn.b)(qt.a.LINK_APPLE_SSO, e => m.a.createElement(Kn, {
				path: He.c.LinkAppleSSO
			})), Object(Tn.b)(qt.a.LINK_GOOGLE_SSO, e => m.a.createElement(Kn, {
				path: He.c.LinkGoogleSSO
			})), Object(Tn.b)(qt.a.UNLINK_APPLE_SSO, e => m.a.createElement(Kn, {
				path: He.c.UnlinkAppleSSO
			})), Object(Tn.b)(qt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(Kn, {
				path: He.c.UnlinkGoogleSSO
			})), Object(Tn.b)(qt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(Kn, {
				path: He.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const Jn = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(Jn, {
				withOverlay: !0
			}));
			const Xn = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(Xn, {
				withOverlay: !0
			}));
			const Yn = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(Yn, {
				withOverlay: !0
			}));
			const Zn = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.CROWD_CONTROL, e => m.a.createElement(Zn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const $n = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement($n, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const es = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(es, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const ts = Object(It.a)({
					getComponent: () => Object(se.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				ns = e => () => {
					e()
				};
			Object(Tn.b)(qt.a.GOLD_GILD_MODAL, e => m.a.createElement(ts, {
				onOverlayClick: ns(e),
				withOverlay: !0
			}));
			var ss = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				os = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				rs = n.n(os);
			const as = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = ss.SPARKLE_ASSET_PATH, document.createElement("img").src = ss.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Tn.b)(qt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(as, {
				withOverlay: !0,
				className: rs.a.modalBody,
				overlayClassName: rs.a.modalOverlay
			}));
			const is = Object(It.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				cs = e => () => {
					e()
				};
			Object(Tn.b)(qt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(is, {
				onOverlayClick: cs(e),
				withOverlay: !0
			}));
			const ls = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(ls, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ds = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(ds, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const us = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(us, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ms = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(ms, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx"), n("./src/reddit/components/Governance/PurchaseEthModal/async.tsx");
			const ps = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(ps, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const bs = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e(0), n.e("GovernanceTransferPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.TRANSFER_POINTS, e => m.a.createElement(bs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const hs = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(hs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const gs = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(gs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const fs = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(fs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const vs = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.MULTIREDDIT_CREATE, e => m.a.createElement(vs, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Tn.b)(qt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(vs, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Os = Object(It.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Tn.b)(qt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Os, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Cs = () => Promise.all([n.e(6), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				ys = Object(It.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(se.a)(Cs).then(e => e.default)
				});
			Object(Tn.b)(qt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(ys, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const Es = () => null,
				xs = Object(It.a)({
					ErrorComponent: Es,
					getComponent: () => Object(se.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Es
				});
			Object(Tn.b)(qt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(xs, null));
			var Ps = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				js = n.n(Ps);
			const _s = Ge.a.h2("ColumnLabel", js.a),
				Ss = Ge.a.wrapped(on.a, "ColumnWrapper", js.a),
				ks = Ge.a.div("Column", js.a),
				Ns = Ge.a.div("Description", js.a),
				Ms = Ge.a.div("Key", js.a),
				ws = Ge.a.wrapped(Bt.l, "ModalMain", js.a),
				Is = Ge.a.wrapped(Bt.e, "ModalBody", js.a),
				Ts = Ge.a.wrapped(nn.l, "PrimaryButton", js.a),
				As = Ge.a.wrapped(Ht.a, "TextButton", js.a),
				Rs = Object(ge.b)(null, e => ({
					closeModal: () => e(Object(wt.i)(qt.a.KEYBOARD_SHORTCUTS))
				})),
				Ls = Ge.a.wrapped(Object(Ut.a)(Rs(e => m.a.createElement(Is, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(Bt.i, null, m.a.createElement(Wt.a, null, m.a.createElement(Bt.q, null, s.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(As, {
					onClick: e.closeModal
				}, m.a.createElement(Bt.b, null)))), m.a.createElement(ws, null, m.a.createElement(Ss, null, m.a.createElement(ks, null, m.a.createElement(on.a, null, m.a.createElement(_s, null, s.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Ms, null, "Shift + ?")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Ms, null, "J")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Ms, null, "K")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Ms, null, "N")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Ms, null, "P")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Ms, null, "Enter")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Ms, null, "X")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Ms, null, "L"))), m.a.createElement(ks, null, m.a.createElement(on.a, null, m.a.createElement(_s, null, s.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Ms, null, "A")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Ms, null, "Z")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Ms, null, "C")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Ms, null, "R")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Ms, null, "Ctrl + Enter")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Ms, null, "S")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Ms, null, "H")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Ms, null, "Q")), m.a.createElement(on.a, null, m.a.createElement(Ns, null, s.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Ms, null, "Enter"))))), m.a.createElement(Bt.g, null, m.a.createElement(Ts, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, s.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", js.a);
			Object(Tn.b)(qt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Ls, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ds = Object(It.a)({
					getComponent: () => Object(se.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Fs = e => () => {
					e()
				};
			Object(Tn.b)(qt.a.SNOOVATAR_MODAL, e => m.a.createElement(Ds, {
				onOverlayClick: Fs(e),
				withOverlay: !0
			}));
			const {
				fbt: Us
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Gs = Object(Y.c)({
				allowNavigationCallback: Pn.a
			}), Bs = Object(ge.b)(Gs, e => ({
				closeModal: () => e(Object(wt.i)(qt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Gt.a)())
			}));
			class qs extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(Bt.e, null, m.a.createElement(Bt.i, null, m.a.createElement(Wt.a, null, m.a.createElement(Bt.q, null, Us._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(Ht.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(Bt.b, null)))), m.a.createElement(Bt.l, null, m.a.createElement(Bt.p, null, Us._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(Bt.g, null, m.a.createElement(Bt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Us._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(Bt.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Us._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const Hs = Object(Ut.a)(Bs(qs));
			Object(Tn.b)(qt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Hs, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const Ws = () => n.e("NsfwBlockingModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx")),
				Vs = Object(It.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(se.a)(Ws).then(e => e.default)
				});
			Object(Tn.b)(qt.a.NSFW_BLOCKING_MODAL_V2, e => m.a.createElement(Vs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Qs = Object(Y.c)({
					activeModalId: X.a
				}),
				zs = Object(ge.b)(Qs, e => ({
					toggleModal: t => e(Object(wt.i)(t))
				})),
				Ks = 500,
				Js = () => {};
			class Xs extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate(e) {
					e.activeModalId !== this.props.activeModalId && (qt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Nn.a)(), Ks) : setTimeout(() => Object(Nn.b)(), Ks)))
				}
				componentWillUnmount() {
					Object(Nn.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Tn.a)(e)(e ? this.toggleModal : Js)
				}
			}
			var Ys, Zs = zs(Xs),
				$s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				eo = n("./src/reddit/actions/page.ts"),
				to = n("./src/reddit/actions/shortcuts/utils.ts"),
				no = n("./src/reddit/icons/fonts/index.tsx"),
				so = n("./src/reddit/selectors/header.ts"),
				oo = n("./src/reddit/selectors/userPrefs.ts"),
				ro = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				ao = n("./src/reddit/components/SEOTitle/index.tsx"),
				io = n("./src/reddit/components/SubredditIcon/index.tsx"),
				co = n("./src/reddit/components/UserIcon/index.tsx"),
				lo = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				uo = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				mo = n.n(uo);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Ys || (Ys = {}));
			const po = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(ao.b, {
					type: ao.a.HeaderSelector
				}, s))
			};
			var bo = n("./src/lib/objectSelector/index.ts"),
				ho = n("./src/reddit/constants/wiki.ts"),
				go = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				fo = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				vo = n("./src/reddit/selectors/subreddit.ts"),
				Oo = n("./src/reddit/selectors/topic.ts");
			var Co = Object(bo.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = !!e.user.account,
						o = Object(go.a)(e),
						r = Object(Rn.Z)(n);
					switch (r) {
						case "avatar":
							return {
								type: Ys.Avatar
							};
						case "index":
						case "listing":
							return s || o ? {
								type: Ys.Home
							} : {
								type: Ys.Popular
							};
						case "modListing":
							return {
								type: Ys.ModListing
							};
						case "modQueuePages":
							return {
								type: Ys.ModQueue
							};
						case "postCreation":
							return {
								type: Ys.CreatePost
							};
						case "postDraft":
							return {
								type: Ys.ViewDraft
							};
						case "subredditCreation":
							return {
								type: Ys.SubredditCreation
							};
						case "coins":
							return {
								type: Ys.Coins
							};
						case "internationalSitePage":
							return {
								type: Ys.InternationalSite
							};
						case "predictions":
							return {
								type: Ys.Predictions
							};
						case "premium":
							return {
								type: Ys.Premium
							};
						case "acknowledgements":
							return {
								type: Ys.Acknowledgements
							};
						case "appeal":
							return {
								type: Ys.Appeal
							};
						case "report":
							return {
								type: Ys.Report
							};
						case "userDataRequest":
							return {
								type: Ys.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: Ys.DailyCharts
							};
						case "geotagging":
							return {
								type: Ys.Geotagging
							};
						case "notificationsInbox":
							return {
								type: Ys.NotificationsInbox
							};
						case "talk":
							return {
								type: Ys.Talk
							};
						case "topic": {
							const t = Object(Rn.t)(n),
								s = t && Object(Oo.d)(e, t);
							if (s) return {
								type: Ys.Topic,
								model: s
							}
						}
					}
					const a = e.user.account;
					if (a) switch (r) {
						case "inboxPages":
							return {
								type: Ys.Inbox, model: a
							};
						case "settings":
							return {
								type: Ys.Settings, model: a
							}
					}
					const i = Object(Rn.T)(e, {
						pageLayer: n
					});
					if ("all" === i) return {
						type: Ys.All
					};
					if ("popular" === i) return {
						type: Ys.Popular
					};
					const c = Object(Rn.r)(e, {
						pageLayer: n
					});
					if (c) return "searchResults" === r ? {
						type: Ys.CommunitySearch,
						model: c
					} : {
						type: Ys.Community,
						model: c
					};
					const l = Object(Rn.e)(e, {
						pageLayer: n
					});
					if (l) return {
						type: Ys.Multi,
						model: l
					};
					const d = Object(Rn.k)(e, {
						pageLayer: n
					});
					if (d) return {
						type: Ys.UserProfile,
						model: d
					};
					const u = Object(Rn.i)(n);
					if (u) return {
						type: Ys.UserProfileName,
						name: `u/${u}`
					};
					if (r && "searchResults" === r) return {
						type: Ys.GlobalSearch
					};
					if ("subredditWiki" === r) {
						const t = Object(Rn.o)(e, {
								pageLayer: n
							}) || ho.e,
							s = Object(vo.z)(e, {
								subredditName: t
							});
						if (s) return {
							type: Ys.Community,
							model: s
						}
					}
					return "rpan" === r && Object(fo.a)(e) ? {
						type: Ys.PublicAccessNetwork
					} : {
						type: Ys.Unknown
					}
				}),
				yo = n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Eo = n.n(yo);

			function xo() {
				return (xo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Po(e) {
				const t = e.icon,
					n = e.text,
					s = e.badge,
					o = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Eo.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Object(ye.a)(Eo.a.text, {
								[Eo.a.hasBadge]: !!s
							})
						}), s && m.a.createElement(s, {
							className: Eo.a.badge
						})),
						className: Object(ye.a)(Eo.a.item, e.className, {
							[Eo.a.mFocused]: !!e.isFocused,
							[Eo.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return o["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", xo({}, o, {
					href: e.to,
					target: "_blank",
					rel: "noopener noreferrer"
				})) : m.a.createElement($s.a, xo({}, o, {
					to: e.to
				})) : m.a.createElement("button", o)
			}
			var jo = n("./src/reddit/components/BadgeCounter/index.tsx"),
				_o = n("./src/reddit/constants/localStorage.ts"),
				So = n("./src/reddit/hooks/useIsClient.ts"),
				ko = n("./src/reddit/hooks/useLocalStorage.ts");
			const No = e => {
					const t = Number(e);
					return isNaN(t) ? 0 : t
				},
				Mo = e => {
					let {
						className: t
					} = e;
					const n = Object(So.a)(),
						s = Object(ge.e)(Pn.g),
						o = Object(ge.e)(go.a),
						[r, a] = Object(ko.a)(_o.b.LOGGED_OUT_HOME_SEEN, {}),
						i = Date.now(),
						c = No(r.dismissed),
						l = No(r.throttledUntil),
						d = !n || !o || c >= 3 || o && s || i < l;
					return n && o && s && c < 3 && i > l && a({
						dismissed: c + 1,
						throttledUntil: i + S.B
					}), d ? null : m.a.createElement(jo.a, {
						className: t,
						isActive: !0,
						unreadCount: -1
					})
				};
			var wo = n("./src/reddit/constants/listings.ts"),
				Io = n("./src/reddit/helpers/overlay/index.ts"),
				To = n("./src/reddit/routes/modListing/index.ts"),
				Ao = n("./src/reddit/routes/predictions/index.ts"),
				Ro = n("./src/reddit/routes/talk/index.ts"),
				Lo = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Do = n("./src/reddit/selectors/multireddit.ts"),
				Fo = n("./src/lib/LinkedListMap/index.ts"),
				Uo = n("./src/reddit/routes/avatar/index.ts");

			function Go() {
				return (Go = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Bo = Object(Y.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Do.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Do.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				recentSubreddits: e => e.recentSubreddits.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var qo;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost", e[e.ExploreMenu = 11] = "ExploreMenu"
			}(qo || (qo = {}));
			const Ho = [e => ({
					id: Ys.Employee,
					type: qo.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(no.a, Go({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, "Employee Communities")
						}
					},
					telemetryNoun: "employee"
				})],
				Wo = () => [e => ({
					id: Ys.All,
					type: qo.GenericLink,
					model: {
						url: "/r/all/",
						displayText: s.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "all"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("All", null, {
								hk: "2M8nEy"
							}))
						}
					},
					telemetryNoun: "all"
				})],
				Vo = () => [e => ({
					id: "reddit-feeds",
					type: qo.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Ys.Home,
					type: qo.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: Ys.Popular,
					type: qo.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Wo()],
				Qo = [e => ({
					id: "reddit-feeds",
					type: qo.Header,
					model: {
						displayText: s.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: Ys.Home,
					type: qo.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Wo()],
				zo = e => m.a.createElement(Mo, {
					className: e.className
				}),
				Ko = [e => ({
					id: "reddit-feeds",
					type: qo.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Ys.Home,
					type: qo.GenericLink,
					model: {
						url: "/",
						badge: zo,
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "home"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Home", null, {
								hk: "2u56yo"
							}))
						}
					},
					telemetryNoun: "home"
				}), e => ({
					id: Ys.Popular,
					type: qo.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "popular"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Popular", null, {
								hk: "1op8tD"
							}))
						}
					},
					telemetryNoun: "popular"
				}), ...Wo()],
				Jo = [e => ({
					id: "reddit-other",
					type: qo.Header,
					model: {
						displayText: s.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Ys.Settings,
					type: qo.GenericLink,
					model: {
						url: "/settings",
						displayText: s.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(lo.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("User Settings", null, {
								hk: "36WFGd"
							}))
						}
					},
					telemetryNoun: "settings"
				}), e => ({
					id: Ys.Inbox,
					type: qo.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: s.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(lo.a, {
								className: t
							})
						},
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Messages", null, {
								hk: "43DUrY"
							}))
						}
					},
					telemetryNoun: "mail"
				})],
				Xo = e => ({
					id: Ys.Coins,
					type: qo.GenericLink,
					model: {
						url: "/coins",
						displayText: s.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "coins"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Coins", null, {
								hk: "ZFvDU"
							}))
						}
					},
					telemetryNoun: "coins"
				}),
				Yo = e => ({
					id: Ys.Premium,
					type: qo.GenericLink,
					model: {
						url: "/premium",
						displayText: s.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "premium"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Premium", null, {
								hk: "3i2C4T"
							}))
						}
					},
					telemetryNoun: "premium"
				}),
				Zo = e => ({
					id: Ys.Avatar,
					type: qo.GenericLink,
					model: {
						url: Uo.a,
						displayText: s.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "avatar_style"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Avatar", null, {
								hk: "3coVk4"
							}))
						}
					},
					telemetryNoun: "avatar"
				}),
				$o = e => ({
					id: Ys.Talk,
					type: qo.GenericLink,
					model: {
						url: Ro.a,
						displayText: s.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "live"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Talk", null, {
								hk: "31Avul"
							}))
						}
					},
					telemetryNoun: "talk"
				}),
				er = e => ({
					id: Ys.Predictions,
					type: qo.GenericLink,
					model: {
						url: Ao.a,
						displayText: s.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "prediction"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Predictions", null, {
								hk: "3lUrcj"
							}))
						}
					},
					telemetryNoun: "predictions"
				}),
				tr = [e => ({
					id: Ys.ModQueue,
					type: qo.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: s.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "mod_queue"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Mod Queue", null, {
								hk: "12pTAg"
							}))
						}
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: Ys.ModMail,
						type: qo.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: s.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(no.a, Go({
								name: "mod_mail"
							}, e)),
							text(e) {
								let {
									className: t
								} = e;
								return m.a.createElement("span", {
									className: t
								}, s.fbt._("Modmail", null, {
									hk: "2QQ3dU"
								}))
							}
						},
						telemetryNoun: "modmail_beta"
					}
				}];

			function nr(e, t, n, o) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: qo.Header,
					model: {
						displayText: s.fbt._("your communities", null, {
							hk: "BtF8C"
						}).toString()
					}
				}), n && sr(e, o), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: qo.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: qo.Header,
					model: {
						displayText: s.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: qo.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const sr = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const o = {
						id: Ys.CreateCommunity,
						telemetryNoun: "create_community"
					},
					r = {
						displayText: s.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(no.a, Go({
							name: "add"
						}, e)),
						text(e) {
							let {
								className: t
							} = e;
							return m.a.createElement("span", {
								className: t
							}, s.fbt._("Create Community", null, {
								hk: "41sjx"
							}).toString())
						}
					};
				e.push({
					...o,
					type: qo.GenericClickable,
					model: {
						...r,
						onClick: () => {
							n ? (t(Object(wt.k)({
								actionSource: wt.a.HeaderSignup
							})), t(Object(J.openRegisterModal)())) : t(Object(wt.h)(qt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var or = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				rr = n.n(or);

			function ar(e) {
				return m.a.createElement("div", {
					className: Object(ye.a)(rr.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var ir = n("./src/reddit/actions/subscription/index.ts"),
				cr = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				lr = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				dr = n.n(lr);

			function ur() {
				return (ur = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const mr = Object(Y.c)({
					currentUser: O.k,
					hideNSFWPref: O.F,
					isLoggedIn: O.Q,
					isLoggedOutOneFeed: go.a
				}),
				pr = Object(ge.b)(mr, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case qo.Subreddit:
								e(Object(ir.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case qo.Profile:
								e(Object(ir.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case qo.Multi:
								e(Object(ir.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(cr.f)(t.model.url)) : t.sendEvent(Object(cr.c)(t.model.url))
						}
					}
				}));
			var br = Object(qe.c)(pr((function(e) {
					const t = {
						className: Object(ye.a)(dr.a.item, e.className, {
							[dr.a.mFocused]: !!e.isFocused
						}),
						id: e.id,
						role: "menuitem",
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
					switch (e.type) {
						case qo.Subreddit:
							return m.a.createElement($s.a, ur({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(io.b, {
								className: dr.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: dr.a.text
							}, e.model.displayText), (e.isLoggedIn || e.isLoggedOutOneFeed) && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(no.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ye.a)(dr.a.favorite, {
									[dr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case qo.SubredditAutocomplete:
							return m.a.createElement($s.a, ur({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(io.b, {
								className: dr.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: dr.a.text
							}, e.model.name));
						case qo.Multi:
							return m.a.createElement($s.a, ur({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: dr.a.customFeedIcon
							}), m.a.createElement("span", {
								className: dr.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(no.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ye.a)(dr.a.favorite, {
									[dr.a.mFavorite]: !!e.isFavorite
								})
							})));
						case qo.Profile:
							return m.a.createElement($s.a, ur({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(co.a, {
								className: dr.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: dr.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(no.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ye.a)(dr.a.favorite, {
									[dr.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				hr = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				gr = n.n(hr);

			function fr(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: gr.a.header
				}), m.a.createElement("div", {
					className: gr.a.item
				}), m.a.createElement("div", {
					className: gr.a.item
				}), m.a.createElement("div", {
					className: gr.a.item
				}), m.a.createElement("div", {
					className: gr.a.item
				}))
			}
			var vr = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Or = n("./src/lib/sample/index.ts"),
				Cr = n("./src/reddit/actions/subreddit.ts"),
				yr = n("./src/reddit/controls/InternalLink/index.tsx");

			function Er() {
				return (Er = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var xr = e => {
					const {
						children: t,
						className: n,
						href: s = "#",
						onClick: o,
						rel: r
					} = e, a = {
						onClick: o,
						rel: r,
						className: n
					};
					return (s || "").startsWith("http") ? m.a.createElement("a", Er({
						href: s
					}, a), t) : m.a.createElement(yr.default, Er({
						to: s
					}, a), t)
				},
				Pr = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				jr = n.n(Pr),
				_r = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				Sr = n.n(_r);
			class kr extends m.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = e => {
						const t = "A" === e.target.tagName;
						this.props.children && !t && null == this.props.isOpen && this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !!e.defaultOpen
					}
				}
				render() {
					var e;
					const {
						buttonClassName: t,
						children: n,
						className: s,
						headingClassName: o,
						icon: r,
						noBottomDivider: a,
						onClick: i,
						title: c,
						url: l
					} = this.props, d = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: Object(ye.a)(jr.a.button, Sr.a.button, t),
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof i) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								i(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Object(ye.a)(jr.a.headingContent, o),
						tabIndex: -1
					}, m.a.createElement("span", {
						className: jr.a.iconContainer
					}, r), m.a.createElement("span", {
						className: jr.a.title
					}, l ? m.a.createElement(xr, {
						className: jr.a.innerLink,
						href: l
					}, c) : m.a.createElement(m.a.Fragment, null, c)), m.a.createElement(no.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(ye.a)(jr.a.chevronIcon, {
							[jr.a["m-expanded"]]: d
						})
					}))), m.a.createElement("div", {
						className: Object(ye.a)(jr.a.contentContainer, jr.a["m-collapsible"], {
							[jr.a.isOpen]: d,
							[jr.a.noBottomDivider]: a
						}, s)
					}, n))
				}
			}
			var Nr = kr,
				Mr = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				wr = n("./src/reddit/constants/colors.ts");
			const Ir = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(ye.a)(jr.a.title, n)
					}, t)
				},
				Tr = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(ye.a)(jr.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(Ir, {
						title: s,
						titleClassName: o
					}))
				},
				Ar = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: o,
						titleClassName: r,
						rel: a
					} = e;
					return m.a.createElement(xr, {
						className: Object(ye.a)(jr.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(Ir, {
						title: o,
						titleClassName: r
					}))
				},
				Rr = e => {
					const {
						className: t,
						href: n,
						iconClassName: s,
						iconUrl: o,
						onClick: r,
						rel: a,
						title: i,
						titleClassName: c
					} = e;
					return m.a.createElement(xr, {
						className: Object(ye.a)(jr.a.secondLevelButton, t),
						href: n,
						onClick: r,
						rel: a
					}, m.a.createElement(io.b, {
						"aria-hidden": !0,
						className: Object(ye.a)(jr.a.subredditIcon, s),
						iconUrl: o,
						primaryColor: wr.a.snoo
					}), m.a.createElement(Ir, {
						title: i,
						titleClassName: c
					}))
				},
				Lr = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o,
						isEnabled: r
					} = e;
					return m.a.createElement("button", {
						className: Object(ye.a)(jr.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(Ir, {
						title: s,
						titleClassName: o
					}), m.a.createElement(Mr.a, {
						className: jr.a.toggleSwitch,
						"data-redditstyle": !0,
						on: r,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var Dr = [{
					link: {
						icon: "topic_videogaming",
						noun: "gaming",
						title: "Gaming",
						url: "/t/gaming/"
					},
					sublinks: [{
						noun: "valheim",
						title: "Valheim",
						url: "/t/valheim/"
					}, {
						noun: "genshin_impact",
						title: "Genshin Impact",
						url: "/t/genshin_impact/"
					}, {
						noun: "minecraft",
						title: "Minecraft",
						url: "/t/minecraft/"
					}, {
						noun: "pokimane",
						title: "Pokimane",
						url: "/t/pokimane/"
					}, {
						noun: "halo_infinite",
						title: "Halo Infinite",
						url: "/t/halo_infinite/"
					}, {
						noun: "call_of_duty_warzone",
						title: "Call of Duty: Warzone",
						url: "/t/call_of_duty_warzone/"
					}, {
						noun: "path_of_exile",
						title: "Path of Exile",
						url: "/t/path_of_exile/"
					}, {
						noun: "hollow_knight_silksong",
						title: "Hollow Knight: Silksong",
						url: "/t/hollow_knight_silksong/"
					}, {
						noun: "escape_from_tarkov",
						title: "Escape from Tarkov",
						url: "/t/escape_from_tarkov/"
					}, {
						noun: "watch_dogs_legion",
						title: "Watch Dogs: Legion",
						url: "/t/watch_dogs_legion/"
					}]
				}, {
					link: {
						icon: "topic_sports",
						noun: "sports",
						title: "Sports",
						url: "/t/sports/"
					},
					sublinks: [{
						noun: "nfl",
						title: "NFL",
						url: "/t/nfl/"
					}, {
						noun: "nba",
						title: "NBA",
						url: "/t/nba/"
					}, {
						noun: "megan_anderson",
						title: "Megan Anderson",
						url: "/t/megan_anderson/"
					}, {
						noun: "atlanta_hawks",
						title: "Atlanta Hawks",
						url: "/t/atlanta_hawks/"
					}, {
						noun: "los_angeles_lakers",
						title: "Los Angeles Lakers",
						url: "/t/los_angeles_lakers/"
					}, {
						noun: "boston_celtics",
						title: "Boston Celtics",
						url: "/t/boston_celtics/"
					}, {
						noun: "arsenal_fc",
						title: "Arsenal F.C.",
						url: "/t/arsenal_fc/"
					}, {
						noun: "philadelphia_76ers",
						title: "Philadelphia 76ers",
						url: "/t/philadelphia_76ers/"
					}, {
						noun: "premier_league",
						title: "Premier League",
						url: "/t/premier_league/"
					}, {
						noun: "ufc",
						title: "UFC",
						url: "/t/ufc/"
					}]
				}, {
					link: {
						icon: "topic_television",
						noun: "tv",
						title: "Television",
						url: "/t/television/"
					},
					sublinks: [{
						noun: "the_real_housewives_of_atlanta",
						title: "The Real Housewives of Atlanta",
						url: "/t/the_real_housewives_of_atlanta/"
					}, {
						noun: "the_bachelor",
						title: "The Bachelor",
						url: "/t/the_bachelor/"
					}, {
						noun: "sister_wives",
						title: "Sister Wives",
						url: "/t/sister_wives/"
					}, {
						noun: "90_day_fiance",
						title: "90 Day Fiance",
						url: "/t/90_day_fiance/"
					}, {
						noun: "wife_swap",
						title: "Wife Swap",
						url: "/t/wife_swap/"
					}, {
						noun: "the_amazing_race_australia",
						title: "The Amazing Race Australia",
						url: "/t/the_amazing_race_australia/"
					}, {
						noun: "married_at_first_sight",
						title: "Married at First Sight",
						url: "/t/married_at_first_sight/"
					}, {
						noun: "the_real_housewives_of_dallas",
						title: "The Real Housewives of Dallas",
						url: "/t/the_real_housewives_of_dallas/"
					}, {
						noun: "my_600lb_life",
						title: "My 600-lb Life",
						url: "/t/my_600lb_life/"
					}, {
						noun: "last_week_tonight_with_john_oliver",
						title: "Last Week Tonight with John Oliver",
						url: "/t/last_week_tonight_with_john_oliver/"
					}]
				}, {
					link: {
						icon: "topic_celebrity",
						noun: "celebrity",
						title: "Celebrity",
						url: "/t/celebrity/"
					},
					sublinks: [{
						noun: "kim_kardashian",
						title: "Kim Kardashian",
						url: "/t/kim_kardashian/"
					}, {
						noun: "doja_cat",
						title: "Doja Cat",
						url: "/t/doja_cat/"
					}, {
						noun: "iggy_azalea",
						title: "Iggy Azalea",
						url: "/t/iggy_azalea/"
					}, {
						noun: "anya_taylorjoy",
						title: "Anya Taylor-Joy",
						url: "/t/anya_taylor_joy/"
					}, {
						noun: "jamie_lee_curtis",
						title: "Jamie Lee Curtis",
						url: "/t/jamie_lee_curtis/"
					}, {
						noun: "natalie_portman",
						title: "Natalie Portman",
						url: "/t/natalie_portman/"
					}, {
						noun: "henry_cavill",
						title: "Henry Cavill",
						url: "/t/henry_cavill/"
					}, {
						noun: "millie_bobby_brown",
						title: "Millie Bobby Brown",
						url: "/t/millie_bobby_brown/"
					}, {
						noun: "tom_hiddleston",
						title: "Tom Hiddleston",
						url: "/t/tom_hiddleston/"
					}, {
						noun: "keanu_reeves",
						title: "Keanu Reeves",
						url: "/t/keanu_reeves/"
					}]
				}, {
					link: {
						icon: "topic_business",
						noun: "business",
						title: "Business, Economics, and Finance",
						url: "/t/business_economics_and_finance/"
					},
					sublinks: [{
						noun: "gamestop",
						title: "GameStop",
						url: "/t/gamestop/"
					}, {
						noun: "moderna",
						title: "Moderna",
						url: "/t/moderna/"
					}, {
						noun: "pfizer",
						title: "Pfizer",
						url: "/t/pfizer/"
					}, {
						noun: "johnson_johnson",
						title: "Johnson & Johnson",
						url: "/t/johnson_johnson/"
					}, {
						noun: "astrazeneca",
						title: "AstraZeneca",
						url: "/t/astrazeneca/"
					}, {
						noun: "walgreens",
						title: "Walgreens",
						url: "/t/walgreens/"
					}, {
						noun: "best_buy",
						title: "Best Buy",
						url: "/t/best_buy/"
					}, {
						noun: "novavax",
						title: "Novavax",
						url: "/t/novavax/"
					}, {
						noun: "spacex",
						title: "SpaceX",
						url: "/t/spacex/"
					}, {
						noun: "tesla",
						title: "Tesla",
						url: "/t/tesla/"
					}]
				}, {
					link: {
						icon: "topic_crypto",
						noun: "crypto",
						title: "Crypto",
						url: "/t/cryptocurrency/"
					},
					sublinks: [{
						noun: "cardano",
						title: "Cardano",
						url: "/t/cardano/"
					}, {
						noun: "dogecoin",
						title: "Dogecoin",
						url: "/t/dogecoin/"
					}, {
						noun: "algorand",
						title: "Algorand",
						url: "/t/algorand/"
					}, {
						noun: "bitcoin",
						title: "Bitcoin",
						url: "/t/bitcoin/"
					}, {
						noun: "litecoin",
						title: "Litecoin",
						url: "/t/litecoin/"
					}, {
						noun: "basic_attention_token",
						title: "Basic Attention Token",
						url: "/t/basic_attention_token/"
					}, {
						noun: "bitcoin_cash",
						title: "Bitcoin Cash",
						url: "/t/bitcoin_cash/"
					}]
				}, {
					link: {
						icon: "overflow_horizontal",
						noun: "more_topics",
						title: "More Topics",
						url: "/topics/a-1/"
					},
					sublinks: [{
						noun: "animals_and_pets",
						title: "Animals and Pets",
						url: "/t/animals_and_pets/"
					}, {
						noun: "anime",
						title: "Anime",
						url: "/t/anime/"
					}, {
						noun: "art",
						title: "Art",
						url: "/t/art/"
					}, {
						noun: "cars_and_motor_vehicles",
						title: "Cars and Motor Vehicles",
						url: "/t/cars_and_motor_vehicles/"
					}, {
						noun: "crafts_and_diy",
						title: "Crafts and DIY",
						url: "/t/crafts_and_diy/"
					}, {
						noun: "culture_race_and_ethnicity",
						title: "Culture, Race, and Ethnicity",
						url: "/t/culture_race_and_ethnicity/"
					}, {
						noun: "ethics_and_philosophy",
						title: "Ethics and Philosophy",
						url: "/t/ethics_and_philosophy/"
					}, {
						noun: "fashion",
						title: "Fashion",
						url: "/t/fashion/"
					}, {
						noun: "food_and_drink",
						title: "Food and Drink",
						url: "/t/food_and_drink/"
					}, {
						noun: "history",
						title: "History",
						url: "/t/history/"
					}, {
						noun: "hobby",
						title: "Hobbies",
						url: "/t/hobby/"
					}, {
						noun: "law",
						title: "Law",
						url: "/t/law/"
					}, {
						noun: "learning_and_education",
						title: "Learning and Education",
						url: "/t/learning_and_education/"
					}, {
						noun: "military",
						title: "Military",
						url: "/t/military/"
					}, {
						noun: "movie",
						title: "Movies",
						url: "/t/movie/"
					}, {
						noun: "music",
						title: "Music",
						url: "/t/music/"
					}, {
						noun: "place",
						title: "Place",
						url: "/t/place/"
					}, {
						noun: "podcasts_and_streamers",
						title: "Podcasts and Streamers",
						url: "/t/podcasts_and_streamers/"
					}, {
						noun: "politics",
						title: "Politics",
						url: "/t/politics/"
					}, {
						noun: "programming",
						title: "Programming",
						url: "/t/programming/"
					}, {
						noun: "reading_writing_and_literature",
						title: "Reading, Writing, and Literature",
						url: "/t/reading_writing_and_literature/"
					}, {
						noun: "religion_and_spirituality",
						title: "Religion and Spirituality",
						url: "/t/religion_and_spirituality/"
					}, {
						noun: "science",
						title: "Science",
						url: "/t/science/"
					}, {
						noun: "tabletop_game",
						title: "Tabletop Games",
						url: "/t/tabletop_games/"
					}, {
						noun: "technology",
						title: "Technology",
						url: "/t/technology/"
					}, {
						noun: "travel",
						title: "Travel",
						url: "/t/travel/"
					}]
				}],
				Fr = n("./src/reddit/helpers/trackers/navigation.ts"),
				Ur = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Gr = n.n(Ur);
			const Br = e => {
				let {
					sendEvent: t,
					showIcons: n = !1,
					useNavStyles: s = !1
				} = e;
				const [o, r] = Object(u.useState)(null), a = e => () => {
					r(o === e ? null : e)
				};
				return m.a.createElement(m.a.Fragment, null, Dr.map((e, r) => ((e, t, n, s, o) => {
					let {
						link: r,
						sublinks: a
					} = e, {
						isOpen: i,
						onClick: c
					} = t;
					return m.a.createElement(Nr, {
						buttonClassName: o ? Gr.a.navButtonOverride : "",
						className: Gr.a.collapsibleContainer,
						icon: s && r.icon && m.a.createElement(no.a, {
							name: r.icon
						}),
						isOpen: i,
						key: r.url,
						onClick: (e, t) => {
							r.noun && n(Object(Fr.c)(r.noun + (t ? "_chevron" : "_menu"))), "function" == typeof c && c(e)
						},
						title: r.title,
						url: r.url
					}, a.map(e => m.a.createElement(Ar, {
						className: o ? Gr.a.navBasicLink : Gr.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(Fr.c)(e.noun + "_menu"))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: a(e),
					isOpen: o === e
				}))(r), t, n, s)))
			};
			var qr = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: o
					} = e;
					return m.a.createElement(Nr, {
						icon: m.a.createElement(no.a, {
							name: "discover"
						}),
						isOpen: t,
						onClick: (e, t) => {
							o(Object(Fr.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Explore", null, {
							hk: "4xNnBs"
						})
					}, m.a.createElement("span", null, m.a.createElement(Br, {
						sendEvent: o
					})))
				},
				Hr = n("./src/reddit/constants/keycodes.ts"),
				Wr = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Vr = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				Qr = n("./src/reddit/helpers/trackers/postComposer.ts"),
				zr = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				Kr = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Jr = n.n(Kr);

			function Xr() {
				return (Xr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Yr(e) {
				return e.id === Ys.ModMail || e.id === Ys.CreateCommunity
			}

			function Zr(e) {
				const t = new Fo.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== qo.Header && e.type !== qo.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const $r = Object(Y.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					isLoggedOutMenuRenderedCounterSampled: e => Object(Or.a)(e, {
						rate: 14
					}),
					isLoggedOutOneFeed: go.a,
					unfilteredListBuilder: e => t => {
						const n = Bo(e),
							o = new Fo.a("id"),
							r = Object(go.a)(e),
							a = Object(O.pb)(e),
							i = [],
							c = (e => Object(Lo.p)(e) ? [Yo, Xo, Zo, $o, er] : [Xo, Yo, Zo, $o, er])(e),
							l = i.length ? c.filter(e => !i.includes(e(null).id)) : c;
						if (n.account) {
							const r = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (o.push({
								id: "header-favorites",
								type: qo.Header,
								model: {
									displayText: s.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => o.push({
								id: "fav" + e.id,
								type: qo.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => o.push({
								id: "fav" + e.id,
								type: qo.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => o.push({
								id: "fav" + e.url,
								type: qo.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && o.push({
								id: "multis-pending",
								type: qo.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? o.push({
								id: "moderatingSubreddits-pending",
								type: qo.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (o.push({
								id: "header-moderating",
								type: qo.Header,
								model: {
									displayText: s.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), r.isMod && tr.forEach(e => o.push(e(r))), o.push({
								id: Ys.ModListing,
								type: qo.GenericLink,
								model: {
									url: To.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(no.a, Go({
										name: "mod_queue"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, "r/Mod")
									}
								},
								telemetryNoun: "r_mod"
							}), n.moderatingSubreddits.forEach(e => o.push({
								id: "mod" + e.id,
								type: qo.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: qo.Header,
									model: {
										displayText: s.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button(e) {
											let {
												className: t,
												sendClickEvent: s
											} = e;
											return m.a.createElement("button", {
												onClick: () => {
													n(Object(wt.h)(qt.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(ye.a)(t, mo.a.multiPlusButton)
											}, m.a.createElement(no.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: qo.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(o, n, t), n.subscriptionsPending ? o.push({
								id: "subscriptions-pending",
								type: qo.LoadingState,
								model: {
									displayText: ""
								}
							}) : nr(o, n, a, t), ((e, t, n, o) => (Vo().forEach(e => t.push(e(n))), n.isEmployee && Ho.forEach(e => t.push(e(n))), Object(fo.a)(e) && t.push({
								id: Ys.PublicAccessNetwork,
								type: qo.GenericClickable,
								model: {
									onClick: () => {
										o(Object(Io.a)(wo.c[wo.b.Rpan]))
									},
									displayText: s.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(no.a, Go({
										name: "video_live"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Reddit Live", null, {
											hk: "93lry"
										}))
									}
								},
								telemetryNoun: "rpan"
							}), t))(e, o, r, t), Jo.forEach(e => o.push(e(r))), o.push((() => ({
								id: Ys.CreatePost,
								type: qo.CreatePost,
								model: {
									url: "/submit",
									displayText: s.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(no.a, Go({
										name: "add"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Create Post", null, {
											hk: "dGck6"
										}))
									}
								}
							}))()), o.push((() => ({
								id: Ys.DailyCharts,
								type: qo.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: s.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(no.a, Go({
										name: "list_numbered"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Top Communities", null, {
											hk: "1KzP9v"
										}))
									}
								},
								telemetryNoun: "daily_charts"
							}))()), (e => e.push({
								id: Ys.NotificationsInbox,
								type: qo.GenericLink,
								model: {
									url: "/notifications",
									displayText: s.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(no.a, Go({
										name: "notification"
									}, e)),
									text(e) {
										let {
											className: t
										} = e;
										return m.a.createElement("span", {
											className: t
										}, s.fbt._("Notifications", null, {
											hk: "2xenVO"
										}))
									}
								},
								telemetryNoun: "inbox"
							}))(o), l.forEach(e => o.push(e(r)))
						} else n.subscriptions.length || Object(O.Q)(e) ? Vo().forEach(e => o.push(e(null))) : r ? (Ko.forEach(e => o.push(e(null))), function(e, t, n) {
							t.recentSubreddits.length && (e.push({
								id: "header-subscriptions",
								type: qo.Header,
								model: {
									displayText: s.fbt._("recent communities", null, {
										hk: "24NvFP"
									}).toString()
								}
							}), t.recentSubreddits.slice(0, 3).forEach(t => e.push({
								id: "sub" + t.id,
								type: qo.Subreddit,
								model: t,
								telemetryNoun: "community"
							})), sr(e, n, !0))
						}(o, n, t), function(e) {
							e.push({
								id: "header-explore-menu",
								type: qo.Header,
								model: {
									displayText: s.fbt._("Explore", null, {
										hk: "4FrRPk"
									}).toString()
								}
							}), e.push({
								id: "explore-menu",
								type: qo.ExploreMenu,
								model: {
									displayText: s.fbt._("Explore Menu", null, {
										hk: "1acYZN"
									}).toString()
								}
							})
						}(o)) : Qo.forEach(e => o.push(e(null))), r || (o.push({
							id: "reddit-other",
							type: qo.Header,
							model: {
								displayText: s.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), l.forEach(e => o.push(e(null))), nr(o, n, a, t));
						return o
					}
				}),
				ea = e => ({
					onHomeClicked: () => e(Object(I.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(ir.e)()), e(Object(Cr.q)()), e(Object(I.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				ta = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class na extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = Zr(n),
							o = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: o ? o.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === Hr.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === Hr.b.Tab && this.props.onClose && this.props.onClose(), e.key === Hr.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== qo.Header && e.type !== qo.ExploreMenu && e.type !== qo.LoadingState && (this.fireTelemetryForListItem(e), e.type === qo.GenericClickable ? e.model.onClick() : Yr(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === Hr.b.ArrowDown && (e.preventDefault(), this.setState(e => {
							const t = this.findNextFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						})), e.key === Hr.b.ArrowUp && (e.preventDefault(), this.setState(e => {
							const t = this.findPrevFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						}))
					}, this.fireTelemetryForListItem = e => {
						let t;
						switch (e.id) {
							case Ys.Coins:
							case Ys.Premium:
								Object(Wr.d)(Wr.a.GoldPayment, !0), t = Object(Wr.c)(Wr.a.GoldPayment)
						}
						switch (e.type) {
							case qo.Category:
							case qo.GenericLink:
							case qo.GenericClickable:
							case qo.Multi:
							case qo.Profile:
							case qo.Subreddit:
								this.props.sendEvent(n => ({
									...Object(dn.n)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === qo.Multi ? Object(dn.m)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case qo.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(dn.n)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case qo.CreatePost:
								this.props.sendEvent(Object(Qr.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: Zr(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					const {
						canAutofocus: e,
						isLoggedOutMenuRenderedCounterSampled: t,
						isLoggedOutOneFeed: n,
						isPinned: s,
						onSubredditsRequested: o
					} = this.props;
					"complete" === document.readyState ? o() : window.addEventListener("load", o), e && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus()), n && t && Object(Vr.b)(s ? zr.c.LeftRail : zr.c.NavDropdown)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = Zr(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Fo.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case qo.Category:
								case qo.GenericLink:
								case qo.Multi:
								case qo.Profile:
								case qo.Subreddit:
								case qo.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case qo.Header: {
									const t = n.last();
									t && t.type === qo.Header && n.pop(), n.push(e);
									break
								}
								case qo.LoadingState:
							}
						});
						const o = n.last();
						return o && o.type === qo.Header && n.pop(), n
					}
					return t.unfilteredList
				}
				findNextFocusableItem() {
					const e = this.state.focusOrder.first();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.next ? t.next.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				findPrevFocusableItem() {
					const e = this.state.focusOrder.last();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.prev ? t.prev.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				render() {
					const e = this.state.renderableList.toArray(),
						t = this.state.focusedItemId ? this.state.renderableList.get(this.state.focusedItemId) : null;
					return m.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, m.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? `${t.model.displayText} ${s.fbt._("selected",null,{hk:"QqrSS"})}` : ""
					}), !this.props.isLoggedOutOneFeed && m.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: Jr.a.filter,
						id: "header-subreddit-filter",
						placeholder: s.fbt._("Filter", null, {
							hk: "oqdpz"
						}),
						onChange: this.onChange,
						onKeyDown: this.onKeyDown,
						ref: this.inputRef
					}), e.map((e, t) => {
						const n = {
							id: `focus-${e.id}`,
							isFocused: this.state.focusedItemId === e.id,
							key: `subreddit-list-key-${e.id}`,
							onFocus: () => this.onChangeFocusedListItemId(e.id),
							onMouseEnter: () => this.onChangeFocusedListItemId(e.id),
							onMouseLeave: () => this.onChangeFocusedListItemId(void 0),
							onClick: () => {
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Ys.Home && this.props.onHomeClicked(), e.type === qo.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case qo.GenericClickable:
								return m.a.createElement(Po, Xr({}, n, {
									className: Jr.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case qo.Category:
							case qo.GenericLink:
							case qo.CreatePost:
								return m.a.createElement(Po, Xr({}, n, {
									externalLink: Yr(e),
									className: Jr.a.item,
									to: e.model.url,
									badge: e.model.badge,
									icon: e.model.icon,
									text: e.model.text
								}));
							case qo.Header: {
								const n = e.model.button;
								return m.a.createElement(ar, {
									className: Jr.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: Jr.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case qo.LoadingState:
								return m.a.createElement(fr, {
									className: Jr.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case qo.Multi:
								return m.a.createElement(br, Xr({}, n, {
									className: Jr.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: qo.Multi
								}));
							case qo.Profile:
								return m.a.createElement(br, Xr({}, n, {
									className: Jr.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: qo.Profile
								}));
							case qo.Subreddit:
								return m.a.createElement(br, Xr({}, n, {
									className: Jr.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: qo.Subreddit
								}));
							case qo.ExploreMenu:
								return m.a.createElement(Br, Xr({}, n, {
									sendEvent: this.props.sendEvent,
									showIcons: !0,
									useNavStyles: !0
								}))
						}
					}))
				}
			}
			const sa = Object(ge.b)($r, ea, ta)(Object(qe.c)(na)),
				oa = Object(ge.b)($r, ea, ta)(Object(qe.c)(Object(vr.b)(na))),
				ra = Object(Rn.u)({
					pageLayer: e => e
				}),
				aa = Object(Y.c)({
					currentPage: Co,
					hideNSFWPref: O.F,
					isDropdownOpen: so.a,
					isOverlayOpen: Pn.i,
					isPinnedSubscriptionsMenuDisabled: oo.a,
					isSubscriptionsPinned: oo.b
				});
			class ia extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						preventFocus: !1
					}, this.handleKeyboardShortcut = e => {
						if ("q" === e.key && !this.props.isSubscriptionsPinned) {
							if (document.activeElement && ("input" === document.activeElement.tagName.toLowerCase() || "textarea" === document.activeElement.tagName.toLowerCase() || "true" === document.activeElement.getAttribute("contenteditable"))) return;
							this.props.openDropdown()
						}
					}, this.enablePreventFocus = () => this.setState({
						preventFocus: !0
					}), this.disablePreventFocus = () => setTimeout(() => this.setState({
						preventFocus: !1
					})), this.close = e => {
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(to.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(dn.n)(e),
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}, this.renderHeaderSubreddit = e => {
						const {
							currentPage: t,
							className: n,
							hideNSFWPref: o,
							isOverlayOpen: r
						} = this.props, a = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, i = r;
						return m.a.createElement("div", {
							"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(ye.a)(mo.a.container, n, {
								[mo.a.mOpen]: a,
								[mo.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[mo.a.mPinned]: this.props.isSubscriptionsPinned,
								[mo.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: mo.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: mo.a.containerText
						}, " ", function(e) {
							switch (e.type) {
								case Ys.Acknowledgements:
									return po(s.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case Ys.All:
									return po(s.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case Ys.Appeal:
									return po(s.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case Ys.Avatar:
									return po(s.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case Ys.Coins:
									return po(s.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case Ys.Community:
									return po(e.model.displayText, !0);
								case Ys.CommunitySearch:
									return po(s.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case Ys.CreateCommunity:
									return po(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Ys.CreatePost:
									return po(s.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case Ys.DailyCharts:
									return po(s.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case Ys.GlobalSearch:
									return po(s.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case Ys.Geotagging:
									return po(s.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case Ys.Home:
									return po(s.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case Ys.Inbox:
									return po(s.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case Ys.ModListing:
									return po("r/Mod");
								case Ys.ModMail:
									return po(s.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case Ys.ModQueue:
									return po(s.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case Ys.Multi:
									return po(e.model.displayText, !0);
								case Ys.NotificationsInbox:
									return po(s.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case Ys.InternationalSite:
								case Ys.Popular:
									return po(s.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case Ys.Predictions:
									return po(s.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case Ys.Premium:
									return po(s.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case Ys.PublicAccessNetwork:
									return po(s.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case Ys.Report:
									return po(s.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case Ys.Settings:
									return po(s.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case Ys.SubredditCreation:
									return po(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Ys.Talk:
									return po(s.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case Ys.Topic:
									return po(e.model);
								case Ys.Unknown:
									return po("");
								case Ys.UserDataRequest:
									return po(s.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case Ys.UserProfile:
									return po(e.model.displayText, !0);
								case Ys.UserProfileName:
									return po(e.name, !0);
								case Ys.ViewDraft:
									return po(s.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t), " "), function(e, t) {
							const n = e => m.a.createElement(no.a, {
								name: e,
								isFilled: !0,
								className: mo.a.defaultIcon
							});
							switch (e.type) {
								case Ys.All:
									return n("all");
								case Ys.Acknowledgements:
								case Ys.Appeal:
									return n("edit");
								case Ys.Avatar:
									return n("avatar_style");
								case Ys.Coins:
									return n("coins");
								case Ys.Community:
								case Ys.CommunitySearch: {
									const n = Object(ro.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(io.b, {
										className: mo.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case Ys.CreateCommunity:
								case Ys.CreatePost:
									return n("add");
								case Ys.DailyCharts:
									return n("list_numbered");
								case Ys.Geotagging:
									return n("custom_feed");
								case Ys.GlobalSearch:
									return n("search");
								case Ys.Home:
									return n("home");
								case Ys.Inbox:
									return m.a.createElement(lo.a, {
										wrapperClassName: mo.a.userIcon
									});
								case Ys.ModListing:
									return n("mod_queue");
								case Ys.ModMail:
									return n("mod_mail");
								case Ys.ModQueue:
									return n("mod_queue");
								case Ys.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: mo.a.customFeedIcon
									});
								case Ys.NotificationsInbox:
									return n("notification");
								case Ys.InternationalSite:
								case Ys.Popular:
									return n("popular");
								case Ys.Predictions:
									return n("prediction");
								case Ys.Premium:
									return n("premium");
								case Ys.PublicAccessNetwork:
									return n("video_live");
								case Ys.Report:
									return n("report");
								case Ys.Settings:
									return m.a.createElement(lo.a, {
										wrapperClassName: mo.a.userIcon
									});
								case Ys.SubredditCreation:
									return n("add");
								case Ys.Talk:
									return n("live");
								case Ys.Topic:
									return n("custom_feed");
								case Ys.Unknown:
									return m.a.createElement("div", {
										className: mo.a.unknownIcon
									});
								case Ys.UserDataRequest:
									return n("add");
								case Ys.UserProfile: {
									const n = Object(ro.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(co.a, {
										className: mo.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case Ys.UserProfileName:
									return m.a.createElement("div", {
										className: mo.a.defaultIcon
									});
								case Ys.Unknown:
									return m.a.createElement("div", {
										className: mo.a.unknownIcon
									});
								case Ys.UserProfile: {
									const n = Object(ro.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(co.a, {
										className: mo.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case Ys.ViewDraft:
									return n("edit")
							}
						}(t, o), !this.props.isSubscriptionsPinned && m.a.createElement(no.a, {
							name: "caret_down",
							className: mo.a.caretDown
						})), a && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(no.a, {
							name: "side_menu",
							className: mo.a.pin,
							onClick: i ? void 0 : this.props.onPinSubscriptions
						}), a && m.a.createElement(oa, {
							canAutofocus: !0,
							className: Object(ye.a)(mo.a.listContainer, mo.a.paddingBottom),
							currentPage: t,
							onClose: this.close
						}))
					}
				}
				componentDidMount() {
					document.addEventListener("keyup", this.handleKeyboardShortcut)
				}
				componentWillUnmount() {
					document.removeEventListener("keyup", this.handleKeyboardShortcut)
				}
				shouldComponentUpdate(e, t) {
					return this.state.preventFocus !== t.preventFocus || (!(!this.props.isDropdownOpen && !e.isDropdownOpen) || (e.currentPage !== this.props.currentPage || e.isSubscriptionsPinned !== this.props.isSubscriptionsPinned))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					return m.a.createElement(ke.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var ca = ra(Object(ge.b)(aa, (e, t) => ({
					closeDropdown: () => e(Object(Re.f)()),
					onLocationRefresh: (n, s) => e(Object(eo.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(Re.i)()), e(Object(Re.f)())
					},
					openDropdown: () => e(Object(Re.g)()),
					toggleDropdown: () => e(Object(Re.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(qe.c)(ia))),
				la = n("./src/reddit/components/JumpToContent/index.tsx"),
				da = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				ua = n("./node_modules/lodash/isEmpty.js"),
				ma = n.n(ua),
				pa = n("./node_modules/lodash/pick.js"),
				ba = n.n(pa),
				ha = n("./node_modules/uuid/v4.js"),
				ga = n.n(ha),
				fa = n("./src/lib/hooks/usePrevious.ts"),
				va = n("./src/lib/makeSearchKey/index.ts"),
				Oa = n("./src/reddit/actions/search.ts"),
				Ca = n("./src/lib/makeApiRequest/index.ts"),
				ya = n("./src/lib/makeGqlRequest/index.ts"),
				Ea = n("./src/lib/omitHeaders/index.ts"),
				xa = n("./src/reddit/constants/headers.ts"),
				Pa = n("./src/redditGQL/operations/SearchTypeahead.json"),
				ja = n("./src/telemetry/models/App.ts");
			var _a = n("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				Sa = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");
			var ka = n("./src/reddit/helpers/graphql/normalizeProfileAboutFromGql/index.ts"),
				Na = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				Ma = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var wa = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Ia = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Ta = Object(Y.a)(e => Object(Ia.c)(e, {
					experimentEligibilitySelector: Ia.a,
					experimentName: An.Nb
				}), e => e === An.zd),
				Aa = e => async (t, n, s) => {
					let {
						apiContext: o,
						gqlContext: r
					} = s;
					const a = n();
					let i;
					if (Ta(a)) {
						const t = dn.bb(a, wa.a.Typeahead),
							n = Object(O.kb)(a);
						i = await La(r, e, t, n)
					} else i = await Ra(o, e);
					(null == i ? void 0 : i.data) && (null == i ? void 0 : i.order) && t(Object(Oa.o)({
						typeaheadSuggestions: i.data,
						order: i.order,
						searchQuery: e
					}))
				}, Ra = async (e, t) => {
					var n, s;
					const o = await ((e, t) => Object(Ca.a)(Object(Ea.a)(e, [xa.a]), {
						endpoint: `${e.apiUrl}/api/subreddit_autocomplete_v2.json`,
						method: S.jb.GET,
						data: {
							query: t
						}
					}))(e(), t);
					if (o.ok && (null === (s = null === (n = o.body) || void 0 === n ? void 0 : n.data) || void 0 === s ? void 0 : s.children)) {
						return (e => {
							const t = [],
								n = {};
							return e.forEach(e => {
								const s = e.data,
									o = e.kind;
								o === S.Ib.Subreddit ? (t.push(s.name), n[s.name] = Object(Sa.a)(s)) : o === S.Ib.Account && (t.push(s.subreddit.name), n[s.subreddit.name] = Object(_a.a)(s.subreddit, s.name, s.accept_followers))
							}), {
								data: n,
								order: t
							}
						})(o.body.data.children)
					}
				}, La = async (e, t, n, s) => {
					return (e => {
						let {
							data: t
						} = e;
						var n, s;
						const o = [],
							r = {};
						return null === (s = null === (n = t.search) || void 0 === n ? void 0 : n.typeahead) || void 0 === s || s.forEach(e => {
							var t, n;
							if ("Subreddit" === e.__typename) o.push(e.id), r[e.id] = {
								...Object(Ma.a)(e),
								publicDescription: null === (t = e.publicDescription) || void 0 === t ? void 0 : t.markdown
							};
							else if ("Profile" === e.__typename) {
								o.push(e.id);
								const t = "Redditor" === e.redditorInfo.__typename ? null === (n = e.redditorInfo) || void 0 === n ? void 0 : n.karma : void 0;
								r[e.id] = {
									...Object(Na.a)(e),
									...Object(ka.a)(e, t)[e.id]
								}
							}
						}), {
							data: r,
							order: o
						}
					})((await (async (e, t, n, s) => {
						const o = {
							productSurface: ja.TelemetryAppName.web2x,
							query: t,
							searchInput: {
								queryId: n,
								isNsfwIncluded: s
							}
						};
						return await Object(ya.a)(e, {
							...Pa,
							variables: o
						}, {
							traceRequestName: "search_typeahead"
						})
					})(e(), t, n, s)).body)
				};
			var Da = n("./src/reddit/actions/search/trending.ts"),
				Fa = n("./src/reddit/components/SearchDropdown/index.tsx"),
				Ua = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				Ga = n("./src/reddit/constants/parameters.ts"),
				Ba = n("./src/reddit/helpers/clickSourceData/index.ts"),
				qa = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				Ha = n("./src/reddit/helpers/isArrayEqual.ts"),
				Wa = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Va = n("./src/reddit/helpers/trackers/screenview.ts"),
				Qa = n("./src/reddit/helpers/trackers/searchResults.ts"),
				za = n("./src/reddit/hooks/usePageLayer.ts"),
				Ka = n("./src/reddit/models/Search/index.ts"),
				Ja = n("./src/reddit/selectors/experiments/serpTabPreserved.ts"),
				Xa = n("./src/reddit/selectors/searchFix.ts"),
				Ya = n("./src/reddit/selectors/searchResults.ts"),
				Za = n("./src/reddit/selectors/trending.ts"),
				$a = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				ei = n("./src/reddit/controls/Search/index.m.less"),
				ti = n.n(ei),
				ni = n("./node_modules/lodash/debounce.js"),
				si = n.n(ni);
			const oi = Object(Y.a)(e => Object(Ia.c)(e, {
				experimentEligibilitySelector: Ia.a,
				experimentName: An.Cc
			}), e => e);
			var ri, ai = n("./src/reddit/components/Pill/index.tsx"),
				ii = n("./src/reddit/components/Pill/PillText/index.m.less"),
				ci = n.n(ii);

			function li() {
				return (li = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(ri || (ri = {}));
			const di = {
					[ri.DAY]: ci.a.pillTextVariantDay,
					[ri.NIGHT]: ci.a.pillTextVariantNight
				},
				ui = e => {
					let {
						children: t,
						className: n,
						variant: s,
						...o
					} = e;
					return m.a.createElement("div", li({}, o, {
						className: Object(ye.a)(ci.a.pillText, di[s], n)
					}), t)
				};
			var mi = n("./src/reddit/controls/Search/CommunityPill/CommunityPill.m.less"),
				pi = n.n(mi);
			const bi = e => {
				let {
					subreddit: t
				} = e;
				const n = Object(ge.e)(O.db);
				return m.a.createElement(ai.a, {
					"aria-hidden": !0,
					className: pi.a.communityPill,
					"data-testid": "community-pill"
				}, m.a.createElement(ui, {
					variant: n ? ri.NIGHT : ri.DAY
				}, m.a.createElement(io.b, {
					className: ti.a.subredditIcon,
					subredditOrProfile: t
				}), t.displayText))
			};
			var hi = n("./src/reddit/components/Pill/PillButton/index.tsx");
			const gi = e => m.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				"data-name": "icons final",
				viewBox: "0 0 20 20"
			}, m.a.createElement("path", {
				d: "M10 .375A9.625 9.625 0 1019.625 10 9.636 9.636 0 0010 .375zm0 18A8.375 8.375 0 1118.375 10 8.384 8.384 0 0110 18.375z"
			}), m.a.createElement("path", {
				d: "M12.558 6.558L10 9.116 7.442 6.558l-.884.884L9.116 10l-2.558 2.558.884.884L10 10.884l2.558 2.558.884-.884L10.884 10l2.558-2.558-.884-.884z"
			}));
			var fi = n("./src/reddit/controls/Search/CommunityPill/CommunityPillClickable.m.less"),
				vi = n.n(fi);
			const Oi = e => {
					let {
						onClickDismiss: t,
						subreddit: n
					} = e;
					const o = Object(ge.e)(O.db);
					return m.a.createElement(ai.a, {
						className: vi.a.communityPill,
						"data-testid": "community-pill"
					}, m.a.createElement(hi.a, {
						"aria-label": s.fbt._("Remove community search filter", null, {
							hk: "1zezc9"
						}),
						className: Object(ye.a)(vi.a.pillButton, o ? vi.a.pillButtonNight : vi.a.pillButtonDay),
						"data-testid": "community-pill-button",
						onClick: t,
						onFocus: e => {
							e.stopPropagation()
						},
						type: "button",
						variant: hi.b.TAB_GROUP
					}, m.a.createElement(io.b, {
						className: Object(ye.a)(ti.a.subredditIcon, vi.a.subredditIcon),
						subredditOrProfile: n
					}), n.displayText, m.a.createElement(gi, {
						className: vi.a.dismissIcon
					})))
				},
				Ci = e => {
					let {
						onClickDismiss: t,
						subreddit: n
					} = e;
					const o = Object(ge.e)(O.db);
					return m.a.createElement(ai.a, {
						className: vi.a.communityPill,
						"data-testid": "community-pill"
					}, m.a.createElement(ui, {
						className: vi.a.pillText,
						"data-testid": "community-pill-text",
						variant: o ? ri.NIGHT : ri.DAY
					}, m.a.createElement(io.b, {
						className: Object(ye.a)(ti.a.subredditIcon, vi.a.subredditIcon),
						subredditOrProfile: n
					}), n.displayText, m.a.createElement("button", {
						"aria-label": s.fbt._("Remove community search filter", null, {
							hk: "1zezc9"
						}),
						className: Object(ye.a)(vi.a.dismissButton, o ? vi.a.dismissButtonNight : vi.a.dismissButtonDay),
						"data-testid": "community-pill-button",
						onClick: t,
						onFocus: e => {
							e.stopPropagation()
						},
						type: "button"
					}, m.a.createElement(gi, {
						className: vi.a.dismissIcon
					}))))
				},
				yi = e => {
					const t = Object(ge.e)(oi);
					let n = bi;
					return t === An.Pc.ClickablePill ? n = Oi : t === An.Pc.ClickableX && (n = Ci), m.a.createElement(n, e)
				};
			var Ei = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				xi = n.n(Ei);
			const Pi = e => {
				let {
					inputRef: t,
					onChange: n,
					onClickDismissCommunityPill: o,
					onFocusSearchBar: r,
					onFormSubmit: a,
					onKeyDown: i,
					searchQuery: c,
					showCommunityPill: l,
					subreddit: d
				} = e;
				const u = m.a.useContext(ke.a),
					p = l && d ? s.fbt._("Search within {subredditName}", [s.fbt._param("subredditName", d.displayText)], {
						hk: "2B6J3t"
					}) : s.fbt._("Search all of Reddit", null, {
						hk: "1Fi1f5"
					});
				return m.a.createElement("form", {
					action: "/search/",
					autoComplete: "off",
					className: Object(ye.a)(xi.a.searchBar, u && xi.a.searchBarExp),
					method: "get",
					onSubmit: a,
					onFocus: r,
					role: "search"
				}, m.a.createElement("label", {
					className: xi.a.inputLabel,
					htmlFor: "header-search-bar"
				}, m.a.createElement("div", {
					"aria-hidden": !0,
					className: xi.a.iconContainer
				}, m.a.createElement(no.a, {
					name: "search",
					className: xi.a.icon
				})), m.a.createElement(da.a, {
					"aria-live": "assertive"
				}, p)), l && d && m.a.createElement(yi, {
					onClickDismiss: o,
					subreddit: d
				}), m.a.createElement("input", {
					className: xi.a.input,
					defaultValue: c,
					id: "header-search-bar",
					name: "q",
					onChange: si()((function() {
						var e;
						n((null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || "")
					}), 200),
					onKeyDown: i,
					placeholder: s.fbt._("Search Reddit", null, {
						hk: "34Vfom"
					}),
					ref: t,
					type: "search"
				}))
			};

			function ji(e) {
				let {
					className: t
				} = e;
				var n, s;
				const o = Object(za.a)(),
					r = Object(Rn.ab)(o),
					a = Object(Rn.X)(o),
					{
						nsfwSessionSetting: i,
						refreshNsfwSessionSettingExpiryTime: l
					} = Object(Ua.b)(),
					[d, b] = Object(u.useState)(-1),
					[h, g] = Object(u.useState)([]),
					[f, v] = Object(u.useState)(!1),
					[C, y] = Object(u.useState)({}),
					[E, x] = Object(u.useState)([]),
					[P, j] = Object(u.useState)(null),
					_ = Object(u.useRef)(null),
					S = Object(u.useRef)(null),
					k = Object(qe.b)(),
					N = Object(ge.d)(),
					M = Object(ge.e)(Pn.b),
					w = Object(ge.e)(Pn.d),
					I = Object(ge.e)(O.k),
					T = Object(ge.e)(Ya.q),
					A = Object(ge.e)(Ya.p),
					R = Object(ge.e)(O.Q),
					L = Object(ge.e)(Ya.r),
					D = Object(ge.e)(O.db),
					F = Object(ge.e)(Pn.r),
					U = Object(ge.e)(e => Object(Rn.bb)(e, {
						pageLayer: o
					})),
					G = Object(ge.e)(e => Object(Rn.r)(e, {
						pageLayer: o
					})),
					B = Object(ge.e)(e => Object(Rn.e)(e, {
						pageLayer: o
					})),
					q = Object(ge.e)(e => Object(Ja.a)(e)),
					H = Object(ge.e)(e => Object(Za.a)(e, Ka.d.dropdown).slice(0, Fa.d)),
					W = Object(ge.e)(Ya.x),
					V = Object(ge.e)(O.kb),
					Q = Object(fa.a)(G),
					z = Object(fa.a)(r),
					K = Object(fa.a)(W),
					J = Object(fa.a)(H),
					X = ((null === (n = S.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					Y = Oe(X),
					Z = M ? Object(dn.u)(M) : o ? Object(dn.u)(o) : void 0,
					$ = C[X],
					ee = Object(va.e)({
						...ba()(a || {}, Ga.t),
						q: X
					});
				Object(u.useEffect)(() => {
					te()
				}, [J, K, W, H]), Object(u.useEffect)(() => {
					G && (null == Q ? void 0 : Q.name) !== G.name && !L && oe()
				}, [Q, G, L]), Object(u.useEffect)(() => {
					ma()(W) || r ? de(r || "") : ce()
				}, [z, r]);
				const te = () => {
						const e = Object(Ha.a)(K, W),
							t = Object(Ha.a)(J, H);
						if (!e || !t) {
							const e = W.length ? W : [...E, ...H];
							g(e)
						}
					},
					ne = e => N(Object(Oa.p)({
						searchQuery: e
					})),
					se = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && $a.a.clear(wa.a.Typeahead), N(Object(Oa.k)())
					},
					oe = () => N(Object(Oa.m)()),
					re = (e, t, n) => {
						e.preventDefault(), ((e, t, n) => {
							N(Object(p.b)(Object(c.c)({
								pathname: e,
								search: t,
								state: n
							})))
						})(t.url, t.qs, {
							...n,
							routeName: F,
							subredditName: w
						})
					},
					ae = async () => {
						H.length || f || (v(!0), await (() => N(Object(Da.b)(Ka.d.dropdown)))(), v(!1))
					}, ie = e => {
						R && I && x(Object(kn.Ob)({
							...e,
							section: Ka.c.recent
						}, I.id))
					}, ce = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						b(-1), j(null), de(""), ne(""), e && $a.a.update(wa.a.Typeahead), fe()
					};

				function de(e) {
					S.current && (S.current.value = e)
				}
				const ue = (e, t, n, s, o) => {
						const r = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: X
						};
						k(Object(Qa.x)(s, r, o))
					},
					me = (e, t, n) => {
						k(Object(Qa.z)(e, t, n))
					},
					pe = (e, t, n, s, o) => {
						k(Object(Qa.B)(e, t, n, s, o))
					},
					be = () => {
						k(e => Object(Qa.h)(e, ee, G)), (() => N(Object(Oa.j)()))(), $a.a.update(wa.a.Typeahead)
					},
					he = e => {
						const t = h[e] || null,
							n = t ? t.searchQuery : "";
						b(e), de(n), j(t)
					},
					fe = () => {
						if (H.length || ae(), I) {
							const e = Object(kn.M)(I.id);
							e.length > 0 && (x(R ? e : []), g([...e, ...H]))
						}
					},
					ve = e => {
						!(!A || !A[e]) || (e ? (e => {
							C[e] || (C[e] = !0, y({
								...C
							}), N(Aa(e)), C[e] = !1, y({
								...C
							}))
						})(e) : fe())
					};

				function Oe(e) {
					const t = G && G.icon ? G.icon.url : "",
						n = null == G ? void 0 : G.displayText,
						s = !!G && G.isNSFW,
						o = Ka.b.text;
					return {
						id: ga()(),
						searchQuery: e,
						type: o,
						section: Ka.c.recent,
						subredditOrProfileRestrictedName: n,
						displayInfo: {
							iconUrl: t,
							isNSFW: s
						}
					}
				}
				return m.a.createElement("div", {
					className: Object(ye.a)(ti.a.relativeWrapper, mo.a.container, t, {
						"m-open": T
					}),
					id: Fa.b,
					ref: _
				}, m.a.createElement(Pi, {
					inputRef: S,
					onChange: e => {
						const t = e.trim();
						$a.a.update(wa.a.Typeahead), ne(t), ve(t)
					},
					searchQuery: X,
					onFormSubmit: e => {
						e.preventDefault(), X.trim() && (async e => {
							var t, n, s;
							const r = (null === (t = S.current) || void 0 === t ? void 0 : t.value) || "";
							if (!r.trim()) return;
							r !== X && ne(r);
							let a, c = {
									...Ka.a
								},
								u = {},
								m = !0;
							if (P && P.searchQuery === X)(c = P).id || (c.id = ga()()), c.section === Ka.c.recent ? (u = Object(Ba.c)(Ba.a.SEARCH_DROPDOWN, Z, c.isProfile || c.isSubreddit), a = va.a.Recent, me(r, c, d)) : c.section === Ka.c.typeahead ? (u = Object(Ba.c)(Ba.a.TYPEAHEAD, Z), m = !1, pe(r, c, d, d, h.filter(e => e.isSubreddit))) : c.section === Ka.c.trending ? (u = Object(Ba.c)(Ba.a.TYPEAHEAD, Z), a = (null === (n = c.post) || void 0 === n ? void 0 : n.isSponsored) ? va.a.PromotedTrend : va.a.Trending, N((e, t) => Object(Wa.u)({
								state: t(),
								trendingSearch: c,
								telemetrySource: wa.a.Typeahead
							}))) : ue(r, r, dn.c.Search, Qa.a.RECENT);
							else {
								c = Oe(r);
								const e = {
									...Object(va.e)({
										q: X,
										restrict_sr: U ? "1" : ""
									}),
									id: (null == G ? void 0 : G.id) || "",
									eventType: Boolean(U) ? "subreddit" : void 0
								};
								k(Object(Qa.o)(dn.a.FullSearchButton, e, U, wa.a.Typeahead, o || void 0))
							}
							if (ie(c), se(m), !c.searchQuery) return;
							const p = Object(qa.a)({
								subreddit: G,
								multireddit: B,
								searchItem: c,
								searchOptions: q ? {
									...ee,
									source: a
								} : {
									source: a
								},
								shouldSearchSubreddit: U,
								includeNsfwResults: V && i
							});
							re(e, p, u), c.isTypeaheadSuggestion && ce(m), l(), null === (s = S.current) || void 0 === s || s.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(Wr.c)(Wr.a.SearchResults) || Object(Wr.d)(Wr.a.SearchResults), $a.a.update(wa.a.Typeahead), k(Object(Qa.o)(dn.a.SearchBar, ee, U, wa.a.Typeahead, o || void 0)), T || ((() => N(Object(Oa.l)()))(), k(Object(Va.u)(ee, null != o ? o : void 0, Object(Xa.b)({
							pageLayer: o
						})))), ve(X)
					},
					onKeyDown: e => {
						if (e.key === Hr.b.Escape || e.key === Hr.b.Tab) se();
						else if (e.key === Hr.b.ArrowDown) {
							if (e.preventDefault(), 0 === h.length || !T) return;
							if (d >= h.length - 1) return;
							he(d + 1)
						} else if (e.key === Hr.b.ArrowUp) {
							if (e.preventDefault(), 0 === h.length || !T) return;
							if (-1 === d) return;
							he(d - 1)
						} else e.key === Hr.b.Backspace && !X && U && L && be()
					},
					onClickDismissCommunityPill: be,
					showCommunityPill: U,
					subreddit: G
				}), m.a.createElement(Fa.c, {
					containerWidth: null === (s = _.current) || void 0 === s ? void 0 : s.offsetWidth,
					focusedItemIndex: d,
					searchOriginPage: Z,
					isOpen: T,
					isTrendingPending: f,
					isTypeaheadPending: $,
					itemList: h,
					nightmode: D,
					recentSearches: E,
					trendingItems: H,
					searchItem: Y,
					typeaheadSuggestions: W,
					onClearSearchQuery: ce,
					onClose: se,
					onRemoveRecentSearch: e => {
						I && 0 !== E.length && (Object(kn.bb)(e, I.id), x(E.filter(t => t.searchQuery !== e.searchQuery)), b(-1))
					},
					onSendSearchClickRecentEvent: me,
					onSendSearchClickTypeaheadEvent: pe,
					onSetRecentSearch: ie,
					onUpdateSearchQuery: de,
					fireAdPixelsOfType: (e, t) => N(Object(le.z)(e, t))
				}))
			}
			var _i = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Si = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				ki = n("./src/reddit/selectors/responsivePage.ts"),
				Ni = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Mi = n.n(Ni);
			var wi, Ii = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(ye.a)(Mi.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": s.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Mi.a.HomeLink,
						href: i.a.redditUrl
					}, m.a.createElement(_i.a, {
						className: Mi.a.Snoo
					}), m.a.createElement(Si.a, {
						className: Mi.a.Wordmark,
						color: "inherit"
					})))
				},
				Ti = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Ai = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Ri = n("./src/reddit/hooks/useTracking.ts"),
				Li = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Di = n.n(Li),
				Fi = n("./src/reddit/components/Header/NavBarIcon/index.m.less"),
				Ui = n.n(Fi);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(wi || (wi = {}));
			var Gi = e => {
					const {
						eventNoun: t,
						imageSource: n,
						navLink: s,
						tooltip: o
					} = e, r = Object(Ri.a)(), a = Object(Ai.a)(), [i, c] = Object(u.useState)(wi.Hidden), l = Object(u.useCallback)(() => {
						Object(kn.Ib)({
							clicked: !0
						}), r(e => ({
							...Object(dn.n)(e),
							source: "nav",
							action: "click",
							noun: t
						}))
					}, [r, t]);
					return Object(u.useEffect)(() => {
						const e = Object(kn.G)();
						e ? 3 !== e.views || e.clicked ? !e.clicked && e.views ? (Object(kn.Ib)({
							views: e.views + 1
						}), c(wi.Visible)) : e.clicked && c(wi.Visible) : c(wi.Hidden) : (Object(kn.Ib)({
							views: 1
						}), c(wi.Visible))
					}, []), i === wi.Hidden ? null : m.a.createElement(m.a.Fragment, null, m.a.createElement($s.a, {
						className: `${Di.a.icon} ${Ui.a.linkIcon}`,
						innerRef: a.target.ref,
						to: s,
						onClick: l,
						onMouseEnter: a.show,
						onMouseLeave: a.hide
					}, m.a.createElement("img", {
						className: Ui.a.navIcon,
						src: n
					})), m.a.createElement(Ti.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, o))
				},
				Bi = n("./src/reddit/actions/cooldownTime.ts");

			function qi(e) {
				return `${e}`.padStart(2, "0")
			}
			class Hi {
				constructor(e) {
					this.startAt = 0, this.expireAt = 0, this.interval = 1e3, this.timeoutId = 0, this.tick = () => {
						this.startAt += this.interval;
						const e = Date.now() - this.startAt,
							t = this.getRemainingSeconds();
						if (this.callback(t), !t) return this.stop();
						const n = Math.max(0, this.interval - e);
						this.timeoutId = window.setTimeout(this.tick, n)
					}, this.callback = t => e(t || this.getRemainingSeconds())
				}
				stop() {
					window.clearTimeout(this.timeoutId), this.timeoutId = 0
				}
				start(e) {
					this.stop(), this.startAt = Date.now(), this.expireAt = e, this.callback(), this.timeoutId = window.setTimeout(this.tick, this.interval)
				}
				getRemainingSeconds() {
					return Math.max(0, Math.round((this.expireAt - Date.now()) / this.interval))
				}
			}
			var Wi = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Vi = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				Qi = n.n(Vi);
			const zi = Object(Y.c)({
				isEmbedSubredditPage: Wi.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: Pn.b
			});
			class Ki extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${qi(n)}` : `${n}:${qi(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new Hi(this.drawTimer), this.state = {
						countdown: null
					}
				}
				componentDidMount() {
					this.updateTimer()
				}
				componentWillUnmount() {
					this.timer.stop()
				}
				componentDidUpdate(e) {
					let {
						currentPage: t,
						expiresAt: n
					} = e;
					this.props.currentPage === t && this.props.expiresAt === n || this.updateTimer()
				}
				updateTimer() {
					const {
						expiresAt: e
					} = this.props, t = e <= Date.now();
					e && !t ? this.timer.start(e) : this.props.fetchCooldownTimer()
				}
				render() {
					const {
						countdown: e
					} = this.state, {
						isRequestPending: t,
						isEmbedSubredditPage: n
					} = this.props;
					return t && !n ? null : !e || n ? m.a.createElement(jo.a, {
						isActive: !0,
						unreadCount: -1,
						showEmpty: !0
					}) : m.a.createElement("div", {
						className: Qi.a.timer
					}, s.fbt._("{Time remaining}", [s.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var Ji = Object(ge.b)(zi, e => ({
					fetchCooldownTimer: () => e(Object(Bi.e)())
				}))(Ki),
				Xi = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				Yi = n("./src/reddit/icons/svgs/HotPotato/index.tsx");
			var Zi = e => m.a.createElement("svg", {
				className: e.className,
				id: "flat",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				fill: "#ff4500"
			}, m.a.createElement("path", {
				fill: "inherit",
				d: "M19.625.375H5.7812V1.8062H2.6089V3.75H.5127V19.625H14.0356V17.6816h2.0962V14.7988H19.625ZM14.8818,16.4316H12.7856V18.375H1.7627V5H3.8589V3.0562H5.7812V14.7988h9.1006Zm3.4932-2.8828H7.0312V1.625H18.375Z"
			}), m.a.createElement("path", {
				fill: "inherit",
				d: "M9.83,8.6869h.8086a2.5968,2.5968,0,0,0,1.2324-.2827,2.0363,2.0363,0,0,0,.8281-.7906,2.2972,2.2972,0,0,0,.2935-1.1709,2.1873,2.1873,0,0,0-.2872-1.1347,1.8957,1.8957,0,0,0-.8281-.749,2.9046,2.9046,0,0,0-1.2788-.2627H8.3815V10.807H9.83Zm0-3.1006h.68a1.1725,1.1725,0,0,1,.78.2427.8044.8044,0,0,1,.2852.6582.9157.9157,0,0,1-.124.4746.86.86,0,0,1-.3531.3291,1.1443,1.1443,0,0,1-.5346.12H9.83Z"
			}), m.a.createElement("path", {
				fill: "inherit",
				d: "M15.5881,9.7269a.6642.6642,0,0,1-.2827.0552.8486.8486,0,0,1-.5079-.1655,1.1369,1.1369,0,0,1-.3491-.3911l-1.122.4682a1.785,1.785,0,0,0,.4487.6143,2.18,2.18,0,0,0,.6909.4194,2.2847,2.2847,0,0,0,.8218.15,2.1,2.1,0,0,0,.8945-.19,1.5993,1.5993,0,0,0,.6494-.5323,1.325,1.325,0,0,0,.2407-.78,1.1177,1.1177,0,0,0-.2407-.7422,1.5127,1.5127,0,0,0-.519-.4151,3.6685,3.6685,0,0,0-.5923-.2119c-.2207-.0591-.3936-.11-.5186-.1548a1.0759,1.0759,0,0,1-.3159-.1679.3052.3052,0,0,1-.1284-.2471.3264.3264,0,0,1,.1392-.2671.547.547,0,0,1,.3466-.1084.6423.6423,0,0,1,.4156.1348,1.09,1.09,0,0,1,.2558.28l1.0694-.45a1.4624,1.4624,0,0,0-.3843-.53,1.9609,1.9609,0,0,0-.6294-.3755,2.1994,2.1994,0,0,0-.78-.1367,2.0044,2.0044,0,0,0-.8682.1831,1.4665,1.4665,0,0,0-.6069.5146,1.3217,1.3217,0,0,0-.2212.751,1.1947,1.1947,0,0,0,.3491.8857,2.0947,2.0947,0,0,0,.9322.51c.0146.0029.0556.0151.1235.0356a3.8108,3.8108,0,0,1,.669.2208q.2584.1192.2587.3178a.318.318,0,0,1-.06.1812A.4179.4179,0,0,1,15.5881,9.7269Z"
			}));
			const $i = e => {
					return Object(Ia.c)(e, {
						experimentEligibilitySelector: Ia.a,
						experimentName: An.Bb
					}) === An.zd
				},
				ec = e => {
					return Object(Ia.c)(e, {
						experimentEligibilitySelector: Ia.a,
						experimentName: An.Se
					}) === An.zd
				};
			var tc = m.a.memo((function(e) {
					const t = Object(Ri.a)(),
						n = Object(ge.d)(),
						o = Object(u.useCallback)(() => {
							t(e => ({
								...Object(dn.n)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(dn.n)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(Io.a)(wo.c[wo.b.Rpan])), t(e => ({
								...Object(dn.n)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(u.useCallback)(() => {
							t(Object(Xi.b)())
						}, [t]),
						c = Object(ge.e)(O.Q),
						l = Object(ge.e)($i),
						d = Object(ge.e)(fo.a),
						p = Object(ge.e)(ec),
						b = Object(ge.e)(Wi.a),
						h = Object(ge.e)(Wi.b),
						g = Object(Ai.a)(),
						f = Object(Ai.a)(),
						v = Object(Ai.a)(),
						C = Object(Ai.a)(),
						y = Object(Ai.a)();
					return m.a.createElement("div", {
						className: Object(ye.a)(Di.a.container, e.className)
					}, m.a.createElement("div", {
						className: Di.a.row
					}, m.a.createElement($s.a, {
						className: Di.a.icon,
						innerRef: g.target.ref,
						to: c ? wo.c[wo.b.Popular] : wo.c[wo.b.Home],
						onClick: o,
						onMouseEnter: g.show,
						onMouseLeave: g.hide
					}, m.a.createElement(no.a, {
						name: "popular"
					})), m.a.createElement(Ti.a, {
						arrowProps: g.arrowProps,
						popperProps: g.popperProps,
						visible: g.visible
					}, s.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement($s.a, {
						className: Di.a.icon,
						innerRef: f.target.ref,
						to: wo.c[wo.b.All],
						onClick: r,
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, m.a.createElement(no.a, {
						name: "all"
					})), m.a.createElement(Ti.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, s.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && m.a.createElement(m.a.Fragment, null, m.a.createElement($s.a, {
						className: Di.a.icon,
						innerRef: v.target.ref,
						to: wo.c[wo.b.Rpan],
						onClick: a,
						onMouseEnter: v.show,
						onMouseLeave: v.hide
					}, m.a.createElement(no.a, {
						name: "video_live"
					})), m.a.createElement(Ti.a, {
						arrowProps: v.arrowProps,
						popperProps: v.popperProps,
						visible: v.visible
					}, s.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), p && m.a.createElement(m.a.Fragment, null, m.a.createElement($s.a, {
						className: Di.a.icon,
						innerRef: C.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: C.show,
						onMouseLeave: C.hide
					}, m.a.createElement(Zi, {
						className: Di.a.psBattlesIcon
					})), m.a.createElement(Ti.a, {
						arrowProps: C.arrowProps,
						popperProps: C.popperProps,
						visible: C.visible
					}, s.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), b && m.a.createElement(m.a.Fragment, null, m.a.createElement($s.a, {
						className: Object(ye.a)(Di.a.icon, Di.a.hotPotatoLink),
						innerRef: y.target.ref,
						to: `/r/${h}`,
						onMouseEnter: y.show,
						onMouseLeave: y.hide,
						onClick: i
					}, m.a.createElement(Yi.a, {
						className: Di.a.hotPotatoIcon
					}), m.a.createElement(Ji, null)), m.a.createElement(Ti.a, {
						arrowProps: y.arrowProps,
						popperProps: y.popperProps,
						visible: y.visible
					}, s.fbt._("Place your tile", null, {
						hk: "2ZCdRE"
					}))), l && m.a.createElement(Gi, {
						eventNoun: "love_island",
						imageSource: "https://styles.redditmedia.com/t5_3lwmq/styles/communityIcon_7atioswvjm671.png?width=256&s=6096b8adbfa2d4911d9bc92afff25fd764987498",
						navLink: "/r/LoveIslandTV/",
						tooltip: s.fbt._("Visit r/LoveIslandTV for the latest!", null, {
							hk: "22mySr"
						})
					})))
				})),
				nc = n("./src/reddit/actions/tooltip.ts"),
				sc = n("./src/lib/combineRefs/index.tsx"),
				oc = n("./src/lib/hooks/useOnClickOutside.ts"),
				rc = n("./src/lib/hooks/useTooltip.ts"),
				ac = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				ic = n.n(ac);

			function cc() {
				return (cc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const lc = Ge.a.button("Button", ic.a),
				dc = Ge.a.div("Container", ic.a);

			function uc(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(lc, cc({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(dc, {
					className: Object(ye.a)({
						[ic.a.isOpen]: n
					})
				}, t))
			}
			var mc = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				pc = n.n(mc);
			var bc = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(jo.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount,
					showEmpty: !e.unreadCount
				}), m.a.createElement(no.a, {
					name: "notification",
					className: pc.a.icon2020
				})),
				hc = n("./src/reddit/components/InboxBanner/index.m.less"),
				gc = n.n(hc);
			var fc = Object(Ut.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(M.b)(navigator.userAgent);
					return m.a.createElement(Bt.e, null, m.a.createElement(Bt.i, {
						className: gc.a.modalHeader
					}, m.a.createElement(Bt.q, {
						className: gc.a.modalTitle
					}, s.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(nn.t, {
						onClick: t,
						Icon: Object(no.b)("close_fill"),
						size: nn.d.XXS,
						priority: nn.c.Plain,
						className: gc.a.modalCloseIcon
					})), m.a.createElement(Bt.l, null, m.a.createElement("ul", {
						className: gc.a.modalList
					}, m.a.createElement("li", {
						className: gc.a.modalListItem
					}, m.a.createElement("span", null, "1"), s.fbt._("Click on {lockIcon} in your browser address bar", [s.fbt._param("lockIcon", m.a.createElement(no.a, {
						name: "lock_fill",
						className: gc.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: gc.a.modalListItem
					}, m.a.createElement("span", null, "2"), s.fbt._("Select {lockIcon} site settings", [s.fbt._param("lockIcon", m.a.createElement(no.a, {
						name: "settings_fill",
						className: gc.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: gc.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), s.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [s.fbt._param("lockIcon", m.a.createElement(no.a, {
						name: "notification_fill",
						className: gc.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(Bt.g, null, m.a.createElement(nn.t, {
						text: s.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				vc = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				Oc = n.n(vc);

			function Cc() {
				return (Cc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var yc = m.a.memo((function(e) {
					let {
						visible: t,
						...n
					} = e;
					const [s, o] = Object(u.useState)(t);
					return Object(u.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, o(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), o(!1)
						}
					}, [t]), t ? m.a.createElement("div", Cc({
						id: "INBOX--TOOLTIP",
						className: Object(ye.a)(Oc.a.tooltip, {
							[Oc.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				Ec = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				xc = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Pc = n("./node_modules/icepick/icepick.js");
			const jc = Object(Pc.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var _c = n("./src/reddit/selectors/activeModal.ts"),
				Sc = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				kc = n.n(Sc);
			const Nc = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				Mc = m.a.memo((function(e) {
					const t = Object(ge.d)(),
						n = Object(Ai.a)(),
						o = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(rc.a)(e);
								return Object(Pc.updateIn)(t, ["modifiers"], e => Object(Pc.push)(e, jc))
							}, [e]);
							return Object(rc.b)(t)
						}(),
						r = Object(rc.b)(Nc),
						[a, i] = Object(xc.a)(e.userId),
						c = Object(ge.e)(Object(_c.c)("browser_notifications_permission_settings")),
						l = Object(u.useCallback)(() => {
							o.hide(), n.hide(), a || i()
						}, [o, n, i, a]);
					Object(oc.a)("INBOX--TOOLTIP", l);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(sc.a)(n.target.ref, o.target.ref, r.target.ref)
					}, m.a.createElement(uc, {
						"aria-expanded": o.visible,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: kc.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), o.visible ? l() : o.show(), e.sendNavClickInbox()
						},
						isOpen: o.visible
					}, m.a.createElement(bc, {
						unreadCount: e.unreadCount
					})), !o.visible && !r.visible && m.a.createElement(Ti.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, s.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(yc, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, m.a.createElement(Ec.a, {
						isOpen: o.visible,
						hideTooltip: l,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), c && m.a.createElement(fc, {
						onClose: () => {
							t(Object(wt.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var wc = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Ic = n("./src/reddit/actions/snoovatarModal.ts"),
				Tc = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Ac = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Rc = n("./src/lib/initializeClient/installReducer.ts"),
				Lc = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(Rc.a)({
				features: {
					avatar: Lc.a
				}
			});
			const Dc = e => 864e5 * e,
				Fc = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				Uc = e => {
					const t = Object(Pn.q)(e);
					return Boolean((null == t ? void 0 : t[Ga.v]) && Object(L.a)(t[Ga.v]))
				},
				Gc = (e, t, n) => {
					var s;
					const o = !!(null === (s = Object(O.k)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return Bc(e, t) && n === o
				},
				Bc = (e, t) => {
					const n = Object(O.k)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > Dc(t)
				};
			var qc = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				Hc = n.n(qc);
			const {
				fbt: Wc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Vc(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(kn.x)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(kn.jb)(s)
				}
			}
			var Qc = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(ge.e)(Fc),
						s = Object(ge.d)(),
						o = Object(Ri.a)();
					Object(u.useEffect)(() => {
						o(Object(Tc.p)())
					}, [o]), Object(u.useEffect)(() => {
						n || s(Object(wc.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						Vc(n)
					}, [n]);
					return m.a.createElement(nn.k, {
						onClick: () => {
							o(Object(Tc.d)()), Vc(n, "click"), s(Object(Ic.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: Hc.a.ctaContainer
					}, m.a.createElement("img", {
						className: Hc.a.quickCreateGiftAnimation,
						src: `${i.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Wc._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Ac.a, {
						className: Object(ye.a)(Hc.a.sparkle, Hc.a.sparkle1)
					}), m.a.createElement(Ac.a, {
						className: Object(ye.a)(Hc.a.sparkle, Hc.a.sparkle2)
					}), m.a.createElement(Ac.a, {
						className: Object(ye.a)(Hc.a.sparkle, Hc.a.sparkle3)
					})), Wc._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				zc = n("./src/reddit/selectors/avatarMarketing.ts"),
				Kc = n("./src/reddit/components/Header/AvatarStorefrontCta/index.m.less"),
				Jc = n.n(Kc);
			const {
				fbt: Xc
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Yc = () => {
					const e = Object(ge.d)(),
						t = Object(Ri.a)(),
						n = Object(ge.e)(zc.b);
					Object(u.useEffect)(() => {
						n || e(Object(wc.a)())
					}, [n, e]);
					return m.a.createElement(nn.a, {
						onClick: () => {
							e(Object(Ic.b)({
								clickSource: "nav"
							})), t(Tc.c)
						},
						className: Jc.a.ctaContainer
					}, m.a.createElement(Ac.a, {
						className: Object(ye.a)(Jc.a.sparkle, Jc.a.sparkle1)
					}), m.a.createElement(Ac.a, {
						className: Object(ye.a)(Jc.a.sparkle, Jc.a.sparkle2)
					}), m.a.createElement(Ac.a, {
						className: Object(ye.a)(Jc.a.sparkle, Jc.a.sparkle3)
					}), Xc._("Shop Avatars", null, {
						hk: "280YIG"
					}))
				},
				Zc = n("./src/chat/helpers/dom.ts"),
				$c = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				el = n("./src/reddit/actions/changeUsername.ts"),
				tl = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				nl = n("./src/reddit/actions/postCreation/general.ts"),
				sl = n("./src/reddit/actions/preferences.ts"),
				ol = n("./src/reddit/components/BlockNavigation/index.tsx"),
				rl = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				al = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var il = Object(It.a)({
					getComponent: () => Object(se.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				cl = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ll = n("./src/reddit/components/Settings/modalIds.ts"),
				dl = n("./src/reddit/helpers/trackers/emailCollection.ts"),
				ul = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				ml = n("./src/reddit/icons/svgs/Close/index.tsx"),
				pl = n("./src/reddit/selectors/emailCollection.ts"),
				bl = n("./src/reddit/selectors/emailVerification.ts"),
				hl = n("./src/reddit/selectors/experiments/emailEnablement.ts"),
				gl = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				fl = n.n(gl);
			var vl = Object(cl.a)(e => {
					let {
						closeTooltip: t,
						email: n,
						resendEmail: o,
						toggleChangeEmailModal: r
					} = e;
					const a = Object(qe.b)(),
						i = Object(ge.d)(),
						c = Object(ge.e)(bl.c),
						l = Object(ge.e)(hl.c),
						d = Object(ge.e)(pl.a),
						p = Object(ge.e)(hl.b);
					Object(u.useEffect)(() => {
						a(d ? Object(dl.f)(ul.a) : Object(ul.g)(ul.a))
					}, [a, d]);
					const {
						description: b,
						title: h
					} = (() => {
						if (p) return {
							title: d ? s.fbt._("Verify your account", null, {
								hk: "3MEuqv"
							}) : s.fbt._("Finish verifying your account", null, {
								hk: "4ceW1b"
							}),
							description: d ? s.fbt._("Add an email address to protect access to your account.", null, {
								hk: "2zXSUE"
							}) : n ? s.fbt._("To finish securing your account, visit your {email} inbox and click the verify link in the email we sent you.", [s.fbt._param("email", n)], {
								hk: "1WzLTj"
							}) : s.fbt._("To finish securing your account, visit your email inbox and click the verify link in the email we sent you.", null, {
								hk: "134K6X"
							})
						};
						switch (c) {
							case "chat":
								return {
									title: s.fbt._("Don’t miss a chat", null, {
										hk: "270GHq"
									}), description: d ? s.fbt._("Add your email address to get updates on your messages.", null, {
										hk: "JYUc8"
									}) : s.fbt._("Verify your email address to get updates on your messages.", null, {
										hk: "4jUiVy"
									})
								};
							case "comment":
								return {
									title: s.fbt._("Don’t miss a comment", null, {
										hk: "113htY"
									}), description: d ? s.fbt._("Add your email address to get updates on your comment’s activity.", null, {
										hk: "1jUppw"
									}) : s.fbt._("Verify your email address to get updates on your comment’s activity.", null, {
										hk: "NtU9T"
									})
								};
							case "post":
								return {
									title: s.fbt._("Don’t miss a reply", null, {
										hk: "2ENHX8"
									}), description: d ? s.fbt._("Add your email address to get updates on your post’s activity.", null, {
										hk: "1Eaamc"
									}) : s.fbt._("Verify your email address to get updates on your post’s activity.", null, {
										hk: "2ME2Pp"
									})
								};
							case "join":
							case "vote":
							case "user_follow":
							case "comment_follow":
							case "post_follow":
								return {
									title: d ? s.fbt._("Verify your account", null, {
										hk: "3MEuqv"
									}) : s.fbt._("Finish verifying your account", null, {
										hk: "4ceW1b"
									}), description: d ? s.fbt._("Add an email address to protect access to your account.", null, {
										hk: "2zXSUE"
									}) : n ? s.fbt._("To finish securing your account, visit your {email} inbox and click the verify link in the email we sent you.", [s.fbt._param("email", n)], {
										hk: "1WzLTj"
									}) : s.fbt._("To finish securing your account, visit your email inbox and click the verify link in the email we sent you.", null, {
										hk: "134K6X"
									})
								};
							default:
								return {
									description: s.fbt._("Check your inbox email for Reddit’s confirmation email. A current email address helps ensure you don’t lose access to your account.", null, {
										hk: "2Rbv7G"
									}), title: s.fbt._("Confirm your email:", null, {
										hk: "3e6xW7"
									})
								}
						}
					})();
					return m.a.createElement("div", {
						className: fl.a.container
					}, m.a.createElement("div", {
						className: fl.a.topLine
					}), m.a.createElement("button", {
						className: fl.a.closeWrapper,
						onClick: () => {
							a(d ? Object(dl.e)(ul.a) : Object(ul.c)(ul.a)), t()
						}
					}, m.a.createElement(ml.a, {
						className: fl.a.closeIcon
					})), m.a.createElement("h5", {
						className: fl.a.title
					}, h), !l && m.a.createElement("p", {
						className: fl.a.subtitle
					}, n), m.a.createElement("p", {
						className: fl.a.description
					}, b), m.a.createElement("div", {
						className: fl.a.buttonWrapper
					}, d ? m.a.createElement(nn.t, {
						onClick: () => {
							i(Object(wt.h)(ll.h)), a(Object(dl.a)(ul.a))
						},
						priority: nn.c.Secondary,
						isFullWidth: !0
					}, s.fbt._("Add email", null, {
						hk: "3DXT0n"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement(nn.t, {
						priority: nn.c.Secondary,
						onClick: e => {
							e.stopPropagation(), a(Object(ul.e)(ul.a, "update")), r()
						},
						isFullWidth: !0
					}, s.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(nn.t, {
						isFullWidth: !0,
						onClick: () => {
							a(Object(ul.e)(ul.a, "confirm")), o(), t()
						}
					}, s.fbt._("Got it", null, {
						hk: "3IP9TO"
					})))))
				}, [vr.a.Click, vr.a.Keydown, vr.a.Resize]),
				Ol = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				Cl = n.n(Ol);
			const yl = e => {
				let {
					exposeIFrameElement: t
				} = e;
				return m.a.createElement(Be.a, {
					className: Cl.a.loggedInGoogleOneTap,
					exposeIFrameElement: t,
					path: He.c.GoogleOneTap
				})
			};
			var El = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx");
			var xl = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(jo.a, {
					isActive: e.badgeCount > 0 || e.hasUnreadGroupMessages,
					unreadCount: e.badgeCount
				}), m.a.createElement(no.a, {
					name: "chat",
					className: pc.a.icon2020
				})),
				Pl = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				jl = n.n(Pl);
			const {
				fbt: _l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Sl = e => {
					const {
						onCloseFlyout: t
					} = e;
					return m.a.createElement("div", {
						className: jl.a.container
					}, m.a.createElement("p", {
						className: jl.a.title
					}, _l._("New User Settings", null, {
						hk: "1Sziu9"
					})), m.a.createElement("h5", {
						className: jl.a.subtitle
					}, _l._("Like customizing Reddit?", null, {
						hk: "38eFal"
					})), m.a.createElement("p", {
						className: jl.a.description
					}, _l._("You can save how you sort and view your communities in user settings.", null, {
						hk: "XMkGT"
					})), m.a.createElement(nn.o, {
						className: jl.a.dismissBtn,
						onClick: t
					}, _l._("Got it", null, {
						hk: "3IP9TO"
					})))
				},
				kl = n("./node_modules/lodash/noop.js"),
				Nl = n.n(kl),
				Ml = n("./src/lib/prettyPrintNumber/index.ts"),
				wl = n("./src/realtime/GQLSubscription/async.tsx"),
				Il = n("./src/reddit/actions/alpha.ts"),
				Tl = n("./src/reddit/actions/modMode.ts"),
				Al = n("./src/reddit/actions/profile/index.ts"),
				Rl = n("./src/reddit/constants/elementClassNames.ts"),
				Ll = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				Dl = n("./src/reddit/helpers/karma.ts"),
				Fl = n("./src/reddit/hooks/useWindowEvent.ts"),
				Ul = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Gl = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Bl = n("./src/reddit/layout/row/InlineButton/index.tsx");
			const ql = e => Object(Ia.c)(e, {
				experimentName: An.Lf,
				experimentEligibilitySelector: Ia.a
			}) === An.zd;
			var Hl = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Wl = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Vl = n("./src/reddit/selectors/modModeEnabled.ts"),
				Ql = n("./src/reddit/selectors/seo/index.ts"),
				zl = n("./src/reddit/selectors/tooltip.ts"),
				Kl = n("./src/higherOrderComponents/asTooltip.tsx"),
				Jl = n("./src/lib/constants/icons.ts"),
				Xl = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Yl = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Zl = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				$l = n.n(Zl);
			const ed = (e, t) => e && m.a.createElement("div", {
				className: $l.a.marketingBadge
			}, m.a.createElement(Xl.a, {
				className: $l.a.marketingAsset,
				headshot: e
			}), s.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Ac.a, {
				className: Object(ye.a)($l.a.sparkle, $l.a.sparkle1)
			}), m.a.createElement(Ac.a, {
				className: Object(ye.a)($l.a.sparkle, $l.a.sparkle2)
			}), m.a.createElement(Ac.a, {
				className: Object(ye.a)($l.a.sparkle, $l.a.sparkle3)
			}), m.a.createElement(Ac.a, {
				className: Object(ye.a)($l.a.sparkle, $l.a.sparkle4)
			})));
			var td = e => {
					let {
						useNewButtonComponent: t,
						onClick: n
					} = e;
					var o;
					const r = Object(ge.d)(),
						a = Object(Ri.a)(),
						i = Object(Rn.fb)(),
						c = Object(ge.e)(e => e.user.account),
						l = Object(ge.e)(oo.c),
						d = Object(ge.e)(zc.b),
						u = Object(ge.e)(zc.a),
						p = () => r(Object(Ic.b)({
							clickSource: "nav"
						})),
						b = Object(ge.e)($.j).startsWith("en");
					if ((null === (o = null == i ? void 0 : i.meta) || void 0 === o ? void 0 : o.name) === S.Nb.AVATAR) return null;
					d || r(Object(wc.a)()), u && a(Tc.n);
					const h = c && c.snoovatarFullBodyAsset ? s.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}) : s.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}),
						g = () => {
							p(), u && a(Tc.c), null == n || n()
						};
					if (t) {
						const e = m.a.createElement(m.a.Fragment, null, h, b && ed(u, l));
						return m.a.createElement(Tr, {
							onClick: g,
							title: e,
							titleClassName: $l.a.avatarLinkBody
						})
					}
					const f = Object(Yl.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? Vd("avatar_style") : Vd("add"), ((e, t, n, s) => o => m.a.createElement("div", {
						className: `${$l.a.avatarLinkBody} ${o.className}`
					}, e, s && ed(t, n)))(h, u, l, b));
					return m.a.createElement(f, {
						onClick: p
					})
				},
				nd = n("./src/reddit/helpers/trackers/user.ts");
			var sd = e => {
					const {
						title: t,
						children: n,
						icon: s
					} = e;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(ye.a)(jr.a.heading, Sr.a.category)
					}, m.a.createElement("span", {
						className: jr.a.headingContent
					}, m.a.createElement("span", {
						className: jr.a.iconContainer
					}, s), m.a.createElement("span", {
						className: jr.a.title
					}, t))), m.a.createElement("div", {
						className: jr.a.contentContainer
					}, n))
				},
				od = n("./src/reddit/helpers/trackers/modTools.ts");
			const rd = () => {
					const e = Object(ge.d)(),
						t = Object(Ri.a)(),
						n = Object(ge.e)(O.db);
					return m.a.createElement(Lr, {
						isEnabled: n,
						onClick: () => {
							t(Object(nd.f)(n)), (t => e(Object(sl.z)(t)))(!n)
						},
						title: s.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				ad = () => {
					const e = Object(ge.d)(),
						t = Object(Ri.a)(),
						n = Object(ge.e)(e => e.user.account),
						o = Object(ge.e)(Vl.a);
					return n && n.isMod ? m.a.createElement(Lr, {
						isEnabled: o,
						onClick: () => {
							t(Object(od.k)(!o)), (() => e(Object(Tl.b)()))()
						},
						title: s.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				};
			var id = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				cd = n.n(id);
			const ld = () => {
					const e = Object(ge.d)(),
						t = Object(qe.b)(),
						n = Object(ge.e)(O.k),
						o = Object(ge.e)(O.V);
					return n ? m.a.createElement(sd, {
						icon: m.a.createElement(no.a, {
							name: "profile"
						}),
						title: s.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(Lr, {
						title: s.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: o,
						onClick: () => {
							t(Object(nd.g)(!o)), (t => e(Object(sl.I)({
								showPresence: t
							})))(!o)
						}
					}), m.a.createElement(Ar, {
						title: s.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(Fr.c)("profile"))
					}), m.a.createElement(td, {
						onClick: () => e(Object(nc.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(Ar, {
						title: s.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(Fr.c)("settings"))
					})) : null
				},
				dd = () => {
					return Object(ge.e)(O.k) ? m.a.createElement(sd, {
						title: s.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(no.a, {
							name: "views"
						})
					}, m.a.createElement(ad, null), m.a.createElement(rd, null)) : null
				},
				ud = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(ge.e)(O.k) ? null : m.a.createElement(Nr, {
						icon: m.a.createElement(no.a, {
							name: "settings"
						}),
						title: s.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(rd, null))
				},
				md = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: o,
						useClassicUserMenuStyles: r = !1
					} = e;
					return m.a.createElement(Nr, {
						buttonClassName: r ? cd.a.button : "",
						headingClassName: r ? cd.a.headingContent : "",
						icon: m.a.createElement(no.a, {
							name: "rules"
						}),
						isOpen: t,
						noBottomDivider: r,
						onClick: (e, t) => {
							o(Object(Fr.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(Ar, {
						className: r ? cd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => o(Object(Fr.c)("user_agreement")),
						title: s.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(Ar, {
						className: r ? cd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => o(Object(Fr.c)("privacy_policy")),
						title: s.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(Ar, {
						className: r ? cd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => o(Object(Fr.c)("content_policy")),
						title: s.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(Ar, {
						className: r ? cd.a.basicLink : "",
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => o(Object(Fr.c)("mod_policy")),
						title: s.fbt._("Moderator Guidelines", null, {
							hk: "2AfPVY"
						})
					}))
				};
			var pd = n("./src/reddit/components/HiddenDiv.tsx"),
				bd = n("./src/reddit/controls/Dropdown/index.tsx"),
				hd = n("./src/reddit/helpers/trackers/authControls.ts"),
				gd = n("./src/reddit/helpers/trackers/subredditCreation.ts");
			const fd = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: jr.a.headingContent
					}, m.a.createElement("span", {
						className: jr.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(ye.a)(jr.a.title, s)
					}, n))
				},
				vd = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: o,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(ye.a)(jr.a.button, t),
						onClick: s
					}, m.a.createElement(fd, {
						icon: n,
						title: o,
						titleClassName: r
					}))
				},
				Od = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: o,
						rel: r,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(xr, {
						className: Object(ye.a)(jr.a.button, t),
						href: n,
						rel: r,
						onClick: o
					}, m.a.createElement(fd, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				};
			var Cd = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts");
			var yd = e => [{
				noun: "ios",
				rel: "nofollow",
				title: () => s.fbt._("Reddit iOS", null, {
					hk: "2W8O9q"
				}),
				url: "https://reddit.onelink.me/MRHZ/b3d845e"
			}, {
				noun: "android",
				rel: "nofollow",
				title: () => s.fbt._("Reddit Android", null, {
					hk: "SmUA3"
				}),
				url: "https://reddit.onelink.me/MRHZ/4c212f61"
			}, {
				noun: "rereddit",
				title: () => s.fbt._("Rereddit", null, {
					hk: "1DyKwo"
				}),
				url: Object(Cd.a)()
			}, {
				isHidden: !e,
				noun: "best_communities",
				title: () => s.fbt._("Best Communities", null, {
					hk: "3oZdW7"
				}),
				url: "https://www.reddit.com/best/communities/1/"
			}, {
				noun: "communities",
				title: () => s.fbt._("Communities", null, {
					hk: "9RIu9"
				}),
				url: "/subreddits/a-1/"
			}, {
				noun: "about_reddit",
				title: () => s.fbt._("About Reddit", null, {
					hk: "3cosfA"
				}),
				url: "https://www.redditinc.com"
			}, {
				noun: "blog",
				title: () => s.fbt._("Blog", null, {
					hk: "2PoxW5"
				}),
				url: "https://redditblog.com"
			}, {
				noun: "careers",
				title: () => s.fbt._("Careers", null, {
					hk: "g9gZP"
				}),
				url: "https://www.redditinc.com/careers"
			}, {
				noun: "press",
				title: () => s.fbt._("Press", null, {
					hk: "10XBDT"
				}),
				url: "https://www.redditinc.com/press"
			}];
			var Ed = e => {
					let {
						isCommunityLinkVisible: t,
						isLoggedIn: n,
						isOpen: o,
						onClick: r,
						sendEvent: a,
						url: i
					} = e;
					return m.a.createElement(Nr, {
						icon: m.a.createElement(no.a, {
							name: "info"
						}),
						title: s.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: o,
						onClick: (e, t) => {
							a(Object(Fr.c)(t ? "more_chevron" : "more_menu")), "function" == typeof r && r(e)
						}
					}, yd(t).map(e => ((e, t) => {
						let {
							isHidden: n,
							noun: s,
							rel: o,
							title: r,
							url: a
						} = e;
						return !n && m.a.createElement(Ar, {
							href: a,
							key: a,
							onClick: () => {
								s && t(Object(Fr.c)(s))
							},
							rel: o,
							title: r()
						})
					})(e, a)), n ? m.a.createElement(Ar, {
						href: "https://old.reddit.com" + i,
						title: s.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							a(Object(Fr.c)("old_reddit")), a(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: dn.Z(e),
								subreddit: dn.hb(e)
							}))
						}
					}) : null)
				},
				xd = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Pd = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				jd = n.n(Pd);
			var _d = e => {
				let {
					isOpen: t,
					onClick: n
				} = e;
				const [{
					links: o,
					showAll: r
				}, a] = Object(u.useState)({
					links: Object(xd.b)(),
					showAll: !1
				});
				if (Object(u.useEffect)(() => {
						t || a({
							links: o,
							showAll: !1
						})
					}, [o, t]), 0 === o.length) return null;
				const i = r ? o : o.slice(0, 3),
					c = () => a({
						links: o,
						showAll: !r
					});
				return m.a.createElement(Nr, {
					"aria-hidden": !0,
					icon: m.a.createElement(no.a, {
						name: "history"
					}),
					isOpen: t,
					title: s.fbt._("Recent Communities", null, {
						hk: "cJ4rl"
					}),
					onClick: n
				}, i.map(e => {
					var t, n;
					return m.a.createElement(Rr, {
						className: jd.a.basicLink,
						href: e.url,
						iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : jd.a.subredditIcon,
						iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
						key: e.url,
						title: e.title,
						titleClassName: jd.a.title
					})
				}), o.length > 3 && (e => m.a.createElement("span", {
					className: jr.a.spanButton,
					onClick: c
				}, m.a.createElement("span", {
					className: Object(ye.a)(jr.a.headingContent, jd.a.headingContent)
				}, m.a.createElement("span", {
					className: jr.a.title
				}, e))))(r ? s.fbt._("see less", null, {
					hk: "3tQWvR"
				}) : s.fbt._("see more", null, {
					hk: "1WV0AC"
				})))
			};

			function Sd() {
				return (Sd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const kd = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				Nd = e => {
					const t = e && e.coins || 0;
					return s.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [s.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var Md;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(Md || (Md = {}));
			var wd = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						isCommunityLinkVisible: o,
						isNsfwBlocking: r,
						logoutUser: a,
						onClick: i,
						openCommunityCreationModal: c,
						sendEvent: l,
						shouldShowCreateCommunityItem: d,
						url: p,
						user: b
					} = e, [h, g] = Object(u.useState)(Md.TermsAndPolicies), f = e => () => {
						g(h === e ? null : e)
					}, v = e => ({
						onClick: f(e),
						isOpen: h === e
					}), O = !!b, C = () => {
						t(), n(r)
					}, y = () => m.a.createElement(Od, {
						className: Sr.a.button,
						icon: m.a.createElement(no.a, {
							name: "campaign"
						}),
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => l(Object(nd.b)()),
						title: s.fbt._("Advertise on Reddit", null, {
							hk: "3R4KSI"
						})
					});
					return m.a.createElement("div", {
						onClick: kd
					}, m.a.createElement(ld, null), m.a.createElement(dd, null), m.a.createElement(() => d ? m.a.createElement(vd, {
						className: Sr.a.button,
						icon: m.a.createElement(no.a, {
							name: "community"
						}),
						onClick: () => {
							c(), l(Object(gd.a)()), i()
						},
						title: s.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(Od, {
						className: Sr.a.coinsLink,
						icon: m.a.createElement(no.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, s.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: Sr.a.meta
						}, Nd(b))),
						onClick: () => {
							Object(Wr.d)(Wr.a.GoldPayment, !0), e.sendEvent(Object(nd.d)())
						},
						titleClassName: Sr.a.coinsTitle
					}), null), m.a.createElement(() => m.a.createElement(Od, {
						className: Sr.a.button,
						icon: m.a.createElement(no.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(Wr.d)(Wr.a.GoldPayment, !0), e.sendEvent(Object(nd.e)())
						},
						title: s.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(Od, {
						className: Sr.a.button,
						icon: m.a.createElement(no.a, {
							name: "live"
						}),
						href: Ro.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: s.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !O && m.a.createElement(_d, v(Md.RecentCommunitiesMenu)), m.a.createElement(qr, Sd({}, v(Md.ExploreMenu), {
						sendEvent: l
					})), m.a.createElement(ud, v(Md.Settings)), !O && m.a.createElement(y, null), m.a.createElement(() => m.a.createElement(Od, {
						className: Sr.a.button,
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(no.a, {
							name: "help"
						}),
						title: s.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(Ed, Sd({}, v(Md.MoreMenu), {
						isCommunityLinkVisible: o,
						isLoggedIn: O,
						url: p,
						sendEvent: l
					})), m.a.createElement(md, Sd({}, v(Md.TermsAndPolicies), {
						sendEvent: l
					})), m.a.createElement(() => O ? m.a.createElement(vd, {
						className: Sr.a.button,
						icon: m.a.createElement(no.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), a()
						},
						title: s.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(vd, {
						className: Sr.a.button,
						icon: m.a.createElement(no.a, {
							name: "profile"
						}),
						onClick: C,
						title: s.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: jr.a.copyrightContainer
					}, m.a.createElement("span", {
						className: jr.a.copyrightText
					}, s.fbt._("© {year} Reddit, Inc. All rights reserved", [s.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				Id = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				Td = n.n(Id);

			function Ad() {
				return (Ad = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Rd = Ge.a.wrapped(bd.a, "Dropdown", Td.a),
				Ld = Object(Kl.a)(Rd),
				Dd = e => m.a.createElement(Yl.a, {
					className: Object(ye.a)(Td.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: Td.a.buttonText
				}, e.displayText), m.a.createElement(Mr.a, {
					className: Td.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				})),
				Fd = e => t => m.a.createElement(no.a, Ad({
					name: e
				}, t)),
				Ud = e => {
					let {
						nightmode: t,
						sendEvent: n,
						toggleNightmode: o
					} = e;
					return m.a.createElement(Dd, {
						displayText: s.fbt._("Dark Mode", null, {
							hk: "1Tx6hE"
						}),
						isEnabled: t,
						onClick: e => {
							null == e || e.nativeEvent.stopImmediatePropagation(), n(Object(nd.f)(t)), o(!t)
						}
					}, m.a.createElement(no.a, {
						name: "night",
						className: Td.a.nightIcon
					}))
				},
				Gd = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(Yl.b)(Fd(Jl.a.help), s.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}));
					return m.a.createElement(n, {
						href: "https://www.reddithelp.com",
						onClick: () => t(Object(Fr.c)("help_center"))
					})
				},
				Bd = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(Yl.b)(Fd(Jl.a.campaign), s.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					}));
					return m.a.createElement(n, {
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => t(Object(nd.b)())
					})
				},
				qd = e => {
					let {
						dispatchOpenLoginModal: t,
						isNsfwBlocking: n,
						sendEvent: o
					} = e;
					const r = Object(Yl.c)(Fd(Jl.a.logout), s.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					}));
					return m.a.createElement(r, {
						href: "#",
						onClick: e => {
							Object(Ae.a)(e) && (e.preventDefault(), e.stopPropagation(), t(n), o(Object(hd.b)()))
						}
					})
				};
			var Hd = Object(qe.c)(e => {
				const {
					dispatchOpenLoginModal: t,
					isCrawler: n,
					isNsfwBlocking: s,
					nightmode: o,
					requestAwardKarma: r,
					sendEvent: a,
					user: i
				} = e, c = i && i.id, l = Object(ge.e)(go.a), [d, p] = Object(u.useState)(!1), b = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), p(!d)
				}, [d]);
				return Object(u.useEffect)(() => {
					p(!1)
				}, [e.isOpen]), Object(u.useEffect)(() => {
					r()
				}, [c]), n ? m.a.createElement(pd.a, null, m.a.createElement(wd, e)) : l ? m.a.createElement(Ld, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(Ud, {
					nightmode: o,
					sendEvent: a,
					toggleNightmode: e.toggleNightmode
				}), m.a.createElement(Gd, {
					sendEvent: a
				}), m.a.createElement(md, {
					isOpen: d,
					onClick: b,
					sendEvent: a,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(Bd, {
					sendEvent: a
				}), m.a.createElement("div", {
					className: Td.a.divider
				}), m.a.createElement(qd, {
					dispatchOpenLoginModal: t,
					isNsfwBlocking: s,
					sendEvent: a
				})) : m.a.createElement(Ld, {
					className: Td.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(wd, e))
			});

			function Wd() {
				return (Wd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Vd = e => t => m.a.createElement(no.a, Wd({
					name: e
				}, t)),
				Qd = Object(ge.b)(() => Object(Y.c)({
					isCrawler: e => !!Object(Ql.a)(e),
					isModModeEnabled: Vl.a,
					isNsfwBlocking: e => {
						const t = Object(Z.d)(e),
							n = Object(Z.e)(e);
						return t || n
					},
					isOpen: Object(zl.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Wl.d,
					shouldShowCreateCommunityItem: O.pb,
					navbarLikeMweb: Hl.a,
					nightmode: O.db,
					showPresence: O.V,
					url: Pn.u,
					isCommunityLinkVisible: ql
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(nc.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleNightmode: t => e(Object(sl.z)(t)),
					toggleShowPresence: t => e(Object(sl.I)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Il.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (d.a.get("rseor3") && d.a.remove("rseor3", {
							domain: i.a.cookieDomain
						}), e(Object(Il.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Al.g)(Object(an.e)(t.user)))
					},
					dispatchOpenLoginModal: t => {
						t && (e(Object(wt.k)({
							actionSource: wt.a.NsfwBlockingModal
						})), Object(Ll.b)(Ll.a.Login)), e(Object(J.openLoginModal)())
					},
					toggleModMode: () => e(Object(Tl.b)()),
					openCommunityCreationModal: () => e(Object(wt.h)(qt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var zd = Object(Rn.u)({
					pageLayer: e => e
				})(Qd(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: o,
						user: r
					} = e, a = Object(ge.e)(Wl.b), [i, c] = Object(u.useState)(!1), l = r && r.id;
					Object(u.useEffect)(() => {
						n()
					}, [l]);
					const d = Object(u.useMemo)(() => ({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "USER_IS_ONLINE",
									userID: l
								}
							}
						}), [l]),
						p = Object(u.useCallback)(() => {
							c("visible" === document.visibilityState)
						}, []);
					return Object(Fl.a)("visibilitychange", p), Object(u.useEffect)(() => {
						c("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(ye.a)(Td.a.container, Rl.e)
					}, o && i && a && m.a.createElement(wl.a, {
						variables: d,
						onData: Nl.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Bl.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(ye.a)(e.className, Td.a.inlineButton, {
							[Td.a.dropdownOpen]: e.isOpen,
							[Td.a.isLoggedOut]: !r,
							[Td.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: Td.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(ye.a)(Td.a.accountWrapper, Td.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(lo.a, {
						className: Object(ye.a)(Td.a.imgIcon, {
							[Td.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: Td.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && o
					}), m.a.createElement("span", {
						className: Td.a.accountDetails
					}, m.a.createElement("span", {
						className: Td.a.username
					}, n.displayText, n.isGold && m.a.createElement(Gl.a, {
						className: Td.a.premiumFontIcon,
						title: s.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: Td.a.accountKarma
					}, m.a.createElement(no.a, {
						name: "karma",
						isFilled: !0,
						className: Td.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Dl.a)(e),
							n = Object(Ml.b)(t);
						return s.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [s.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: Td.a.accountCoins
					}, m.a.createElement(Ul.a, {
						className: Td.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(Ml.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(ye.a)(Td.a.accountWrapper, Td.a.isLoggedOut)
					}, m.a.createElement(no.a, {
						name: "user",
						className: Td.a.defaultProfileIcon
					})))(e.user), m.a.createElement(no.a, {
						className: Td.a.caretDownIcon,
						name: "caret_down"
					})), m.a.createElement(da.a, null, s.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(Hd, e))
				})),
				Kd = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Jd = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less"),
				Xd = n.n(Jd);
			const Yd = Object(cl.a)(e => m.a.createElement("div", {
				"aria-modal": !0,
				className: Object(ye.a)(e.className, Xd.a.confirmContainer, Xd.a.confirmToastContainer),
				role: "dialog"
			}, m.a.createElement("div", null, m.a.createElement("h2", {
				className: Xd.a.confirmToastTitle
			}, s.fbt._("🎉 Nice name, {username}!", [s.fbt._param("username", e.username)], {
				hk: "2DEuit"
			}))), m.a.createElement("p", {
				className: Xd.a.confirmModalDescription
			}, s.fbt._("May it serve you well", null, {
				hk: "1OmrGj"
			}))));
			var Zd = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx"),
				$d = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				eu = n("./src/reddit/helpers/trackers/inbox.ts"),
				tu = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				nu = n("./src/reddit/routes/acknowledgements/index.ts"),
				su = n("./src/reddit/routes/appeal/index.ts");
			var ou = {
					action: () => async e => await e(Object(p.c)(Uo.a)),
					chunk: S.r.EMPTY,
					exact: !0,
					meta: {
						name: S.Nb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				ru = n("./src/reddit/routes/coins/index.ts"),
				au = n("./src/reddit/routes/coinsMobile/index.ts"),
				iu = n("./src/reddit/routes/commentsPage/index.ts"),
				cu = n("./src/reddit/routes/countrySitePage/index.ts");
			n("./node_modules/@loadable/component/dist/loadable.esm.js");
			var lu = [],
				du = n("./src/reddit/routes/econManagement/index.ts"),
				uu = n("./src/reddit/routes/econManagement2/index.ts");
			var mu = {
					action: Object(I.a)(() => n.e(9).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: S.r.EMPTY,
					exact: !0,
					meta: {
						name: S.Nb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				pu = n("./src/lib/addQueryParams/index.ts");
			var bu = {
					action: e => async (t, n, s) => {
						let {
							apiContext: o
						} = s;
						const {
							queryParams: r
						} = e;
						await t(Object(p.c)(Object(pu.a)("/", r)))
					},
					chunk: S.r.EMPTY,
					exact: !0,
					meta: {
						name: S.Nb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [S.r.COMMENTS_PAGE, S.r.FRONTPAGE]
				},
				hu = n("./src/reddit/routes/followers/index.ts"),
				gu = n("./src/reddit/routes/framedGild/index.ts"),
				fu = n("./src/reddit/routes/framedModal/index.ts"),
				vu = n("./src/reddit/routes/frontpage/index.ts"),
				Ou = n("./src/reddit/routes/geotagging/index.ts"),
				Cu = n("./src/reddit/routes/inbox/index.ts"),
				yu = n("./src/reddit/routes/meta/index.ts"),
				Eu = n("./src/reddit/routes/moderationPages/index.ts"),
				xu = n("./src/reddit/routes/modQueue/index.ts"),
				Pu = n("./src/reddit/routes/multireddit/index.ts"),
				ju = n("./src/reddit/routes/notificationsInbox/index.ts"),
				_u = n("./src/reddit/routes/postCreation/constants.ts");
			const Su = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: S.r.EMPTY,
				exact: !0,
				meta: {
					name: S.Nb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var ku = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(_u.b))
					},
					chunk: S.r.EMPTY,
					exact: !0,
					meta: {
						name: S.Nb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...Su],
				Nu = n("./src/reddit/routes/postCreation/index.ts"),
				Mu = n("./src/reddit/routes/postDraft/index.ts"),
				wu = n("./src/reddit/routes/postSetPage/index.ts");
			var Iu = {
				action: () => async () => {
					window.location.replace("https://reddithelp.com/hc/articles/4403386953108")
				},
				chunk: S.r.EMPTY,
				exact: !0,
				meta: {
					name: S.Nb.POWERUPS_REDIRECT
				},
				path: ["/powerup", "/powerups"]
			};
			var Tu = {
					action: () => async e => await e(Object(p.c)(Ao.a)),
					chunk: S.r.EMPTY,
					exact: !0,
					meta: {
						name: S.Nb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				Au = n("./src/reddit/routes/premium/index.ts"),
				Ru = n("./src/reddit/routes/profileComments/index.ts"),
				Lu = n("./src/reddit/endpoints/me/index.ts"),
				Du = n("./src/reddit/helpers/pageActionLoginRedirect.ts");
			var Fu = {
					action: e => async (t, n, s) => {
						let {
							apiContext: o
						} = s;
						const {
							rest: r
						} = e.params, {
							queryParams: a
						} = e, i = await Object(Lu.a)(o());
						if (!(i.ok && i.body && i.body.account)) {
							const e = n();
							return void Object(Du.a)(t, e)
						}
						const c = i.body.account.displayText,
							l = r ? `/user/${c}/${(e=>e.endsWith("/")?e:`${e}/`)(r)}` : `/user/${c}/`,
							d = Object(pu.a)(l, a);
						await t(Object(p.c)(d))
					},
					chunk: S.r.EMPTY,
					exact: !0,
					meta: {
						name: S.Nb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				Uu = n("./src/reddit/routes/profileModSettings/index.ts"),
				Gu = n("./src/reddit/routes/profileOverview/index.ts"),
				Bu = n("./src/reddit/routes/profilePosts/index.ts"),
				qu = n("./src/reddit/routes/profilePrivate/index.ts"),
				Hu = n("./src/server/helpers/canonicalUrl.tsx");
			var Wu = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = ((e, t, n) => {
							const s = `/user/${e}/${t?Object(Hu.a)(t.replace("submitted","posts")):""}`;
							return Object(pu.a)(s, n)
						})(n, s, o);
						await t(Object(p.c)(r))
					},
					chunk: S.r.EMPTY,
					exact: !0,
					meta: {
						name: S.Nb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Vu = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var Qu = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(pu.a)(r, o);
						t(Object(p.c)(a))
					},
					chunk: S.r.EMPTY,
					exact: !0,
					meta: {
						name: S.Nb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				zu = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				Ku = n("./src/reddit/routes/report/index.ts"),
				Ju = n("./src/reddit/routes/searchResults/index.ts"),
				Xu = n("./src/reddit/routes/settings/index.ts");
			var Yu = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(s))
					},
					chunk: S.r.EMPTY,
					meta: {
						name: S.Nb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: S.r.EMPTY,
					meta: {
						name: S.Nb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				Zu = n("./src/reddit/routes/subreddit/index.ts"),
				$u = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				em = n("./src/reddit/routes/subredditWiki/index.ts"),
				tm = n("./src/reddit/routes/topic/index.ts");
			var nm = [nu.a, su.a, Uo.b, ou, ru.a, au.a, cu.a, Fu, Wu, Qu, ...tu.a, ...iu.a, mu, ...vu.a, Ou.a, Au.a, Ao.b, Ro.b, du.c, uu.a, Iu, Tu, hu.a, gu.a, fu.a, Nu.a, Mu.a, wu.a, ...ku, bu, ...yu.a, Pu.a, xu.a, To.c, ju.a, Cu.a, Ru.a, Uu.a, Gu.a, Bu.a, Vu.a, qu.a, zu.a, ...Xu.a, ...Yu, Ju.a, ...em.a, tm.a, Zu.b, $u.a, Eu.a, Ku.a, ...lu],
				sm = n("./src/reddit/selectors/appBadges.ts"),
				om = n("./src/reddit/selectors/sso.ts"),
				rm = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				am = n.n(rm);
			var im = Object(qe.c)(e => {
				let {
					className: t,
					sendEvent: n
				} = e;
				const o = Object(ge.e)(O.db),
					r = Object(Ai.a)(),
					a = s.fbt._("Advertise", null, {
						hk: "bW02l"
					});
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: Object(ye.a)(t, am.a.container, {
						[am.a.isNightMode]: o
					})
				}, m.a.createElement("a", {
					className: am.a.link,
					ref: r.target.ref,
					href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => {
						n(Object(nd.c)())
					},
					onMouseEnter: r.show,
					onMouseLeave: r.hide,
					"aria-label": a
				}, m.a.createElement(no.a, {
					className: am.a.icon,
					name: "campaign"
				}))), m.a.createElement(Ti.a, {
					arrowProps: r.arrowProps,
					popperProps: r.popperProps,
					visible: r.visible
				}, a))
			});
			const cm = "change-username-tooltip-id",
				lm = "email-verification-tooltip-id",
				dm = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const o = Object(Ai.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: pc.a.iconWrapper,
						onMouseEnter: o.show,
						onMouseLeave: o.hide,
						ref: o.target.ref
					}, m.a.createElement(uc, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Kd.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(jo.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(no.a, {
						className: pc.a.icon2020,
						name: "mod"
					})), m.a.createElement(Ti.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible
					}, s.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Kd.b, {
						className: pc.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				um = m.a.memo((function(e) {
					let {
						badgeCount: t,
						hasUnreadChatMessages: n,
						onClickChat: o
					} = e;
					const r = Object(ge.d)(),
						a = Object(Ai.a)(),
						c = Object(ge.e)(hl.a);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: pc.a.iconWrapper,
						onMouseEnter: () => {
							a.show()
						},
						onMouseLeave: a.hide,
						ref: a.target.ref
					}, m.a.createElement("a", {
						className: pc.a.link,
						href: `${i.a.redditUrl}/chat`,
						onClick: Object(Zc.a)(() => {
							o(), c && r(Object(tl.c)("chat"))
						})
					}, m.a.createElement(xl, {
						badgeCount: t,
						hasUnreadGroupMessages: n
					}))), m.a.createElement(Ti.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, s.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				mm = m.a.memo((function(e) {
					const t = Object(Ai.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: pc.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: pc.a.link,
						"aria-label": s.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(no.a, {
						className: pc.a.icon2020,
						name: "add"
					}))), m.a.createElement(Ti.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				pm = Object(Rn.u)({
					pageLayer: e => e
				}),
				bm = Object(Y.c)({
					activeDropdownId: zl.a,
					activeModalId: _c.b,
					appBadges: sm.b,
					chatDirectMessagesCount: sm.e,
					email: O.n,
					hasUnreadChatMessages: sm.f,
					inboxBadgeCount: sm.g,
					isAvatarQuickCreateEnabled: e => Object(Lo.c)(e) && (e => {
						if (Uc(e)) return !0;
						const t = Fc(e),
							n = (new Date).getTime(),
							s = Object(kn.x)();
						if (!(null == t ? void 0 : t.active) || !Gc(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
						if (s && t) {
							const e = n > s.lastInteractionTimestamp + Dc(null == t ? void 0 : t.min_days_since_last_event_interaction);
							return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
						}
						return !1
					})(e),
					isAvatarStorefrontEnabled: e => Object(Lo.d)(e) && !!Object(zc.a)(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					shouldShowEmailVerificationTooltip: bl.b,
					isLoggedIn: O.Q,
					isModerator: ln.k,
					isNameEditable: O.S,
					isOneTapAutoSession: $.g,
					isResponsiveSettingsEnabled: Dn.a,
					shouldOpenEmailVerificationTooltip: bl.a,
					shouldShowChangeUsernameModals: om.c,
					unreadNotifications: O.yb,
					usernameChangedModalOpen: Object(_c.c)(ll.p),
					shouldManuallyTriggerEmailVerificationTooltip: hl.d
				}),
				hm = Object(ge.b)(bm, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(el.changeUsernameTooltipClosed)()),
					closeEmailVerificationTooltip: () => e(Object(tl.c)()),
					showEmailVerificationTooltip: () => e(Object(tl.c)()),
					fetchAppBadges: () => e(Object($c.c)()),
					logoutUser: t => {
						(null == t ? void 0 : t.contentWindow) && t.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object($d.a)()), e(Object(he.q)())
					},
					onChatClick: () => e(Object(V.f)()),
					onDismissCustomizeFlyout: () => e(Object(sl.u)()),
					onOpenModerationDropdown: () => {
						e(Object(nc.h)({
							tooltipId: Kd.a
						})), e(Object(Cr.q)())
					},
					onOpenUserDropdown: () => e(Object(nc.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(wt.h)(ll.b))
					},
					openKeepUsernameModal: () => {
						e(Object(wt.h)(ll.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(tl.c)()), e(Object(wt.i)(ll.a))
					},
					resendEmail: () => e(Object(he.x)(ul.a)),
					requestCreatePost: () => {
						t.pageLayer && e(nl.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(p.b)(t);
						e(Object(el.startChangeUsernameFlow)(n))
					}
				}));
			class gm extends m.a.Component {
				constructor() {
					super(...arguments), this.googleOneTapIFrame = null, this.state = {
						confirmUsernameFlowStarted: !1
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(eu.y)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(Fr.c)(e)), this.logoutUser = () => {
						this.props.logoutUser(this.googleOneTapIFrame)
					}, this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.props.sendEvent(Object(Qr.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(T.a)(e.pathname, nm),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== S.Nb.POST_CREATION && n !== S.Nb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.googleOneTapIFrame = e
					}, this.navBarEconCta = () => {
						const {
							isAvatarQuickCreateEnabled: e,
							isAvatarStorefrontEnabled: t,
							user: n
						} = this.props, s = n && Object(an.e)(n) || "";
						return e ? m.a.createElement(Qc, {
							avatarUrlParams: {
								avatarId: "random",
								username: s
							}
						}) : t ? m.a.createElement(Yc, null) : m.a.createElement(El.a, null)
					}
				}
				componentDidMount() {
					this.props.shouldManuallyTriggerEmailVerificationTooltip || this.props.showEmailVerificationTooltip(), ma()(this.props.appBadges) && this.props.fetchAppBadges()
				}
				render() {
					const {
						activeDropdownId: e,
						chatDirectMessagesCount: t,
						className: n,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: o,
						email: r,
						hasUnreadChatMessages: a,
						inboxBadgeCount: i,
						isChangeUsernameTooltipShowing: c,
						isCustomizeFlyoutShowing: l,
						shouldShowEmailVerificationTooltip: d,
						isLoggedIn: p,
						isModerator: b,
						isNameEditable: h,
						isOneTapAutoSession: g,
						isResponsiveSettingsEnabled: f,
						onDismissCustomizeFlyout: v,
						onOpenUserDropdown: O,
						openChangeUsernameModal: C,
						openKeepUsernameModal: y,
						pageLayer: E,
						resendEmail: x,
						shouldOpenEmailVerificationTooltip: P,
						shouldShowChangeUsernameModals: j,
						toggleChangeEmailModal: _,
						unreadNotifications: S,
						user: k,
						usernameChangedModalOpen: N
					} = this.props, M = !(!S || !S.hasUnreadModmail), w = k && Object(an.e)(k) || "", I = Object(ye.a)({
						[pc.a["m-responsive"]]: f
					}), T = j && g;
					return m.a.createElement(on.a, {
						id: lm,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(on.a, {
						className: pc.a.headerLinks,
						id: cm
					}, b && m.a.createElement(dm, {
						isModerateIconLit: M,
						moderationDropdownOpen: e === Kd.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: S
					}), k && m.a.createElement(u.Fragment, null, m.a.createElement(um, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), m.a.createElement(Mc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == E ? void 0 : E.url,
						userId: k.id,
						isLoggedIn: p,
						iconWrapper: pc.a.iconWrapper
					}), m.a.createElement(mm, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement(im, {
						className: pc.a.iconWrapper
					}), m.a.createElement("span", {
						className: pc.a.iconWrapper
					}, this.navBarEconCta()))), m.a.createElement(zd, {
						className: pc.a.headerUserDropdown,
						logoutUser: this.logoutUser,
						onClick: O,
						sendEventWithName: this.sendEventWithName,
						user: k
					}), p && m.a.createElement(yl, {
						exposeIFrameElement: this.exposeIFrameElement
					}), l && m.a.createElement(Sl, {
						onCloseFlyout: v
					}), m.a.createElement(vl, {
						closeTooltip: o,
						email: r,
						isOpen: P && d,
						resendEmail: x,
						toggleChangeEmailModal: _,
						tooltipId: lm
					}), m.a.createElement(il, {
						email: r,
						shouldOpenTooltip: P
					}), h && !f && !g && m.a.createElement(u.Fragment, null, m.a.createElement(al.a, {
						closeTooltip: s,
						isOpen: c && !j,
						openChangeUsernameModal: C,
						openKeepUsernameModal: y,
						tooltipId: cm,
						username: w
					}), j && m.a.createElement(rl.a, {
						isResponsiveSettingsEnabled: f,
						overlayClassName: I,
						username: w,
						withOverlay: !0
					}), m.a.createElement(ol.a, {
						confirmNavigate: this.confirmNavigate
					})), T && !N && m.a.createElement(Zd.a, {
						className: pc.a.cornerModal,
						isNameEditable: h,
						isOneTapAutoSession: g,
						isResponsiveSettingsEnabled: f,
						logoutUser: this.logoutUser,
						overlayClassName: Object(ye.a)(I, pc.a.modalOverlay),
						username: w,
						withOverlay: !N
					}), T && N && m.a.createElement(Yd, {
						className: pc.a.cornerModal,
						isOpen: !0,
						tooltipId: cm,
						username: w
					}))
				}
			}
			var fm = Object(qe.c)(pm(hm(gm))),
				vm = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Om = n("./src/reddit/components/Header/User/index.m.less"),
				Cm = n.n(Om);
			const {
				fbt: ym
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Em = Object(Y.c)({
				account: e => e.user.account,
				isNsfwBlur: e => {
					const t = Object(Z.d)(e),
						n = Object(Z.e)(e);
					return t || n
				},
				origin: $.k
			}), xm = m.a.memo(e => m.a.createElement("div", {
				className: Object(ye.a)(e.className, Cm.a.row)
			}, !e.account && m.a.createElement(Pm, e), m.a.createElement(fm, {
				className: Object(ye.a)({
					[Cm.a.loggedOut]: !e.account
				}),
				user: e.account
			}))), Pm = e => {
				const t = Object(ge.e)(sm.g),
					n = Object(ge.e)(O.Fb),
					s = Object(ge.e)(vm.c),
					o = e.pageLayer,
					r = i.a.accountManagerOrigin,
					a = o ? o.url : "/",
					c = o && o.meta && o.meta.name === S.Nb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + a),
					l = !!e.isNsfwBlur;
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(Mc, {
					sendNavClickInbox: () => e.sendEvent(Object(eu.y)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: a,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: Cm.a.iconWrapper
				}), m.a.createElement("div", {
					className: Cm.a.loggedOutRow
				}, m.a.createElement(nn.t, {
					kind: nn.b.ExternalLink,
					priority: nn.c.Secondary,
					redditStyle: !0,
					className: Cm.a.button,
					href: `${r}/login/?dest=${c}`,
					onClick: t => {
						Object(Ae.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(l), e.sendEvent(Object(hd.a)("nav")))
					}
				}, ym._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(nn.t, {
					kind: nn.b.ExternalLink,
					priority: nn.c.Primary,
					redditStyle: !0,
					className: Object(ye.a)(Cm.a.separator, Cm.a.button),
					href: `${r}/register/?dest=${c}`,
					onClick: t => {
						Object(Ae.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(l), e.sendEvent(Object(hd.c)("nav")))
					}
				}, ym._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var jm = Object(Rn.u)()(Object(ge.b)(Em, e => ({
					onOpenLoginModal: t => {
						t ? (e(Object(wt.k)({
							actionSource: wt.a.NsfwBlockingModal
						})), Object(Ll.b)(Ll.a.Login)) : e(Object(wt.k)({
							actionSource: wt.a.HeaderLogin
						})), e(Object(J.openLoginModal)())
					},
					onOpenRegisterModal: t => {
						t ? (e(Object(wt.k)({
							actionSource: wt.a.NsfwBlockingModal
						})), Object(Ll.b)(Ll.a.Signup)) : e(Object(wt.k)({
							actionSource: wt.a.HeaderSignup
						})), e(Object(J.openRegisterModal)())
					},
					closeUserDropdown: () => e(Object(nc.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(qe.c)(xm))),
				_m = n("./src/reddit/components/Header/index.m.less"),
				Sm = n.n(_m);

			function km() {
				return (km = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Nm = Ge.a.header("HeaderDynamicStyles", Sm.a),
				Mm = Object(Y.c)({
					isLoggedIn: O.Q,
					isLoggedOutOneFeed: go.a,
					isNightMode: O.db,
					isResponsiveSettingsEnabled: Dn.a,
					isPageResponsive: ki.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				wm = Object(Rn.u)({
					categoryName: Rn.c,
					pageLayer: e => e
				}),
				Im = e => {
					const t = Object(u.useContext)(ke.a);
					return m.a.createElement("div", {
						className: Sm.a.left
					}, m.a.createElement(da.a, null, s.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(la.b, null), m.a.createElement($s.a, {
						"aria-label": s.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: Sm.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(_i.a, {
						className: Object(ye.a)(Sm.a.snoo, {
							[Sm.a.snooExp]: t
						})
					}), m.a.createElement(Si.a, {
						className: Sm.a.wordmark
					})), e.children)
				},
				Tm = e => m.a.createElement("div", {
					className: Sm.a.right
				}, e.children, m.a.createElement(jm, null)),
				Am = e => {
					const t = Object(u.useContext)(ke.a);
					return m.a.createElement("div", {
						className: Object(ye.a)(Sm.a.layout, {
							[Sm.a.layoutContainer]: t
						})
					}, m.a.createElement(Im, km({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(ca, null), m.a.createElement(ji, {
						className: Sm.a.search
					})), m.a.createElement(Tm, null, m.a.createElement(tc, {
						className: Sm.a.quickLinks
					})))
				},
				Rm = e => {
					const t = Object(u.useContext)(ke.a);
					return m.a.createElement("div", {
						className: Object(ye.a)(Sm.a.layout, {
							[Sm.a.layoutContainer]: t
						})
					}, m.a.createElement(Im, km({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isLoggedOutOneFeed && m.a.createElement(ca, null), m.a.createElement("div", {
						className: Sm.a.searchContainer
					}, m.a.createElement(ji, {
						className: Sm.a.search
					}))), m.a.createElement(Tm, null))
				};
			var Lm = wm(Object(ge.b)(Mm, e => ({
					onReloadFrontpage: () => e(Object(I.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(ke.a);
					return t = e.isLoggedIn ? Am : Rm, m.a.createElement(Nm, {
						"data-redditstyle": !0,
						className: Object(ye.a)(Sm.a.container, e.className, {
							[Sm.a.bladeIsOpen]: e.isBladeOpen,
							[Sm.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						isLoggedOutOneFeed: e.isLoggedOutOneFeed,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Ii, {
						className: Sm.a.MwebResponsiveHeader
					}))
				}))),
				Dm = n("./src/reddit/components/LightboxHeader/index.tsx"),
				Fm = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Um = (e, t) => {
					let n = `${i.a.accountManagerOrigin}/${e}/`;
					return t && (n = `${n}?dest=${encodeURIComponent(t)}`), n
				};
			const Gm = () => e => ({
					...dn.n(e),
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				{
					fbt: Bm
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				qm = Object(Y.c)({
					isLoggedIn: O.Q,
					origin: $.k
				});
			class Hm extends m.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(Ae.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(Gm()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						className: e,
						origin: t
					} = this.props;
					return m.a.createElement(nn.m, {
						className: e,
						href: Um(He.a.Register, t),
						onClick: this.onClick
					}, Bm._("Create an account", null, {
						hk: "4Dh0gy"
					}))
				}
			}
			var Wm = Object(ge.b)(qm, e => ({
					openRegisterModal: () => {
						e(Object(wt.k)({
							actionSource: wt.a.IdCard,
							redirectUrl: wo.c[wo.b.Home]
						})), e(Object(J.openRegisterModal)())
					}
				}))(Object(qe.c)(Hm)),
				Vm = n("./src/reddit/components/CreateAccountSection/index.m.less"),
				Qm = n.n(Vm);
			const {
				fbt: zm
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Km = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: t
					}, m.a.createElement(ar, {
						className: Qm.a.createTitle
					}, zm._("Join reddit", null, {
						hk: "1fNfug"
					})), m.a.createElement("div", {
						className: Qm.a.createDesc
					}, zm._("Create an account to follow your favorite communities and start taking part in conversations.", null, {
						hk: "z6A2K"
					})), m.a.createElement(Wm, {
						className: Qm.a.createButton
					}))
				},
				Jm = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Xm = n.n(Jm);
			const {
				fbt: Ym
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Zm = Object(Y.c)({
				currentPage: Co,
				isLoggedOutOneFeed: go.a
			}), $m = Object(ge.b)(Zm, e => ({
				onUnpinSubscriptions: () => e(Object(Re.j)())
			})), ep = Object(Rn.u)();
			var tp = Ge.a.wrapped(ep($m(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, !e.isLoggedOutOneFeed && m.a.createElement("div", {
					className: Xm.a.title
				}, m.a.createElement(ar, {
					className: Xm.a.listHeader
				}, Ym._("My Communities", null, {
					hk: "1CmPOc"
				})), m.a.createElement("div", {
					className: Xm.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(no.a, {
					name: "close",
					className: Xm.a.icon
				}))), m.a.createElement(sa, {
					className: Object(ye.a)({
						[Xm.a.withOverflow]: e.isLoggedOutOneFeed
					}),
					currentPage: e.currentPage,
					isPinned: !0
				}), e.isLoggedOutOneFeed && m.a.createElement(Km, {
					className: Xm.a.createAccountSection
				})))), "Component", Xm.a),
				np = n("./src/reddit/components/Survey/index.tsx"),
				sp = n("./src/reddit/components/ThemeProvider/index.tsx");
			const op = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				rp = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...dn.d(t),
						reason: "primary"
					}
				}),
				ap = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...dn.d(t),
						reason: "secondary"
					}
				});
			var ip = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				cp = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				lp = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				dp = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				up = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				mp = n("./src/reddit/models/Toast/index.ts"),
				pp = n("./src/reddit/selectors/structuredStyles.ts"),
				bp = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				hp = n.n(bp);

			function gp() {
				return (gp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const fp = e => {
				const t = wr.a;
				switch (e.kind) {
					case mp.b.Error:
					case mp.b.AuthError:
					case mp.b.SuccessEndBroadcast:
						return t.warning;
					case mp.b.SuccessCommunity:
						return t.op;
					case mp.b.SuccessCommunityGreen:
					case mp.b.SuccessMod:
					case mp.b.SuccessUnlockComment:
						return t.approved;
					case mp.b.SuccessLockComment:
						return t.reported;
					case mp.b.EuCookiePolicy:
					case mp.b.UappBanner:
					case mp.b.Undo:
					default:
						return t.op
				}
			};
			class vp extends m.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const {
						kind: e,
						sendEvent: t,
						...n
					} = this.props;
					return m.a.createElement("div", n)
				}
			}
			const Op = Ge.a.wrapped(vp, "PlainBread", hp.a);
			var Cp = e => m.a.createElement(Op, gp({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": fp(e)
					}
				})),
				yp = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Ep = n.n(yp);
			const xp = Ge.a.span("Text", Ep.a);
			var Pp = n("./src/reddit/components/Toaster/index.m.less"),
				jp = n.n(Pp);
			const {
				fbt: _p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Sp = Ge.a.wrapped(lp.a, "AuthErrorToastIcon", jp.a), kp = Ge.a.wrapped(nn.l, "AuthErrorToastPrimaryButton", jp.a);
			class Np extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Cp, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Sp, null), m.a.createElement(xp, null, _p._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(kp, {
						type: "submit"
					}, _p._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Mp = Np,
				wp = n("./src/lib/cookieConsent/index.ts"),
				Ip = n("./src/reddit/controls/Link/index.tsx"),
				Tp = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Ap = n.n(Tp);
			const {
				fbt: Rp
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Lp = Ge.a.div("Icon", Ap.a), Dp = () => m.a.createElement(Lp, {
				style: {
					backgroundImage: `url(${i.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Fp = Ge.a.wrapped(nn.l, "PrimaryButton", Ap.a), Up = Ge.a.wrapped(Cp, "Bread", Ap.a);
			class Gp extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(wp.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(wp.b)({
							opted: !0,
							nonessential: !1
						}), this.props.onClose("allow-essential")
					}
				}
				componentDidMount() {
					this.props.sendViewEvent && this.props.sendViewEvent()
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("section", null, m.a.createElement(Up, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(Dp, null), m.a.createElement("section", {
						className: Ap.a.EuCookiePolicyBody
					}, m.a.createElement(xp, null, Rp._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(Ip.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, Rp._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: Ap.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(Fp, {
						type: "submit"
					}, Rp._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(Fp, {
						type: "submit"
					}, Rp._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var Bp, qp = Gp;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Bp || (Bp = {}));
			var Hp = n("./src/reddit/controls/Typography/index.tsx"),
				Wp = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Vp = n.n(Wp);

			function Qp() {
				return (Qp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const zp = Ge.a.div("Container", Vp.a),
				Kp = Ge.a.img("SideImage", Vp.a),
				Jp = Ge.a.div("Main", Vp.a),
				Xp = Ge.a.div("SubTitle", Vp.a),
				Yp = Hp.a,
				Zp = Ge.a.wrapped(nn.m, "PrimaryLinkButton", Vp.a),
				$p = Ge.a.wrapped(ml.a, "CloseIcon", Vp.a);
			class eb extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(rp(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(op(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: o,
						subTitle: r,
						title: a
					} = this.props;
					return m.a.createElement(zp, {
						key: t,
						style: {
							...o,
							transform: `\n            translateY(${o.y}px)\n            scale(${o.x}, ${o.x})\n          `
						}
					}, m.a.createElement($p, {
						onClick: this.props.onClose
					}), m.a.createElement(Kp, {
						srcSet: n
					}), m.a.createElement(Jp, null, m.a.createElement(Xp, null, r), m.a.createElement(Hp.b, null, a), m.a.createElement(Yp, null, e), m.a.createElement(Zp, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, s.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const tb = Object(ge.b)(null, e => ({
					onSignup: () => e(Object(J.openRegisterModal)())
				}))(Object(qe.c)(eb)),
				nb = `${sb("subscribe-cap.png")} 1x,\n  ${sb("subscribe-cap@2x.png")} 2x,`;

			function sb(e) {
				return `${i.a.assetPath}/img/banner/${e}`
			}
			const ob = 3;
			var rb = n("./src/lib/permanentCookieOptions.ts");
			const ab = e => `${e}:1527210000`;
			var ib = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				cb = n.n(ib);
			const {
				fbt: lb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), db = Ge.a.div("Icon", cb.a), ub = () => m.a.createElement(db, {
				style: {
					backgroundImage: `url(${i.a.assetPath}/img/snoo-upvote.png)`
				}
			}), mb = Ge.a.wrapped(nn.l, "PrimaryButton", cb.a), pb = Ge.a.wrapped(Cp, "Bread", cb.a);
			class bb extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), d.a.set(_n.j, ab(ob), Object(rb.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(pb, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(ub, null), m.a.createElement(xp, null, lb._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [lb._param("=User Agreement", m.a.createElement(Ip.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, lb._("User Agreement", null, {
						hk: "XS57W"
					}))), lb._param("=Privacy Policy", m.a.createElement(Ip.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, lb._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(mb, {
						type: "submit"
					}, lb._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var hb = bb;

			function gb() {
				return (gb = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const fb = [],
				vb = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Ob = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Cb = {
					opacity: Object(Ue.spring)(0),
					x: Object(Ue.spring)(.6),
					y: Object(Ue.spring)(80, vb)
				},
				yb = Ge.a.wrapped(lp.a, "SnooFacepalm", jp.a),
				Eb = Ge.a.wrapped(dp.a, "SnooHappy", jp.a),
				xb = Ge.a.wrapped(io.b, "SubredditIcon", jp.a),
				Pb = Ge.a.img("CustomIcon", jp.a),
				jb = Ge.a.div("Container", jp.a),
				_b = Ge.a.wrapped(ml.a, "Close", jp.a),
				Sb = Ge.a.wrapped(ip.a, "LockIcon", jp.a),
				kb = Ge.a.wrapped(up.a, "UnlockIcon", jp.a),
				Nb = Ge.a.wrapped(cp.a, "RemoveIcon", jp.a),
				Mb = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(_b, gb({
					className: "CloseIcon"
				}, e))),
				wb = Ge.a.wrapped(Cp, "Bread", jp.a),
				Ib = Object(Y.c)({
					subredditIcon: pp.b,
					toastSlices: e => e.toaster
				}),
				Tb = Object(ge.b)(Ib, e => ({
					dismissToast: t => () => e(Object(be.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(be.g)(n))
					}
				}));
			class Ab extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Rb(e, this.props.toastSlices), this.getWillEnterStyles = () => Ob, this.getWillLeaveStyles = () => Cb
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(Ue.TransitionMotion, {
						defaultStyles: fb,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(jb, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === mp.b.Custom && void 0 !== t.customToastType) {
							const s = Db[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === mp.b.UappBanner) return m.a.createElement(hb, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === mp.b.EuCookiePolicy) return m.a.createElement(qp, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(op("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(rp("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(ap("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === mp.b.AuthError) return m.a.createElement(Mp, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === mp.b.Modal ? nn.l : nn.r,
							o = t.kind === mp.b.Modal ? nn.o : nn.r;
						return m.a.createElement(wb, {
							className: t.kind === mp.b.Modal ? jp.a.mModal : void 0,
							"data-testid": "toaster",
							key: e.key,
							kind: t.kind,
							sendEvent: t.name || t.onDisplay ? () => {
								t.name && this.props.sendEvent(op(t.name)), t.onDisplay && t.onDisplay()
							} : void 0,
							style: n
						}, m.a.createElement("div", {
							className: jp.a.ContentWrapper
						}, Lb(t, this.props.subredditIcon), t.kind === mp.b.SuccessLockComment && m.a.createElement(Sb, null), t.kind === mp.b.SuccessUnlockComment && m.a.createElement(kb, null), m.a.createElement(xp, null, t.text)), m.a.createElement("div", {
							className: jp.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(rp(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(o, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(ap(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(Mb, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const Rb = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(Ue.spring)(1),
							x: Object(Ue.spring)(1, vb),
							y: Object(Ue.spring)(0, vb)
						}
					}))
				},
				Lb = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(Pb, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case mp.b.Error:
							return m.a.createElement(yb, null);
						case mp.b.SuccessEndBroadcast:
							return m.a.createElement(Nb, null);
						case mp.b.SuccessAward:
						case mp.b.SuccessCommunity:
						case mp.b.SuccessCommunityGreen:
							return m.a.createElement(Eb, null);
						case mp.b.SuccessMod:
							return m.a.createElement(xb, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Db = {
					[mp.a.subscribeCap]: e => m.a.createElement(tb, Qp({
						name: Bp.LoggedOutMaxSubscriptions,
						sideImage: nb,
						title: s.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: s.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Fb = Tb(Object(qe.c)(Ab)),
				Ub = n("./src/reddit/featureFlags/profileCollections.ts"),
				Gb = n("./src/reddit/helpers/trackers/banners.ts"),
				Bb = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				qb = n.n(Bb);
			var Hb = Ge.a.div("Wrapper", qb.a),
				Wb = n("./src/reddit/components/AlertBanner/index.m.less"),
				Vb = n.n(Wb);
			const {
				fbt: Qb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), zb = () => m.a.createElement(Hb, {
				className: Object(ye.a)(Vb.a.wrapper, Vb.a.suspended)
			}, m.a.createElement("span", null, Qb._("Your account has been permanently suspended from Reddit.", null, {
				hk: "2hzFKt"
			}), " "), Qb._("Click {=here} for more info.", [Qb._param("=here", m.a.createElement("a", {
				className: Vb.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360045734911"
			}, Qb._("here", null, {
				hk: "49ZRXB"
			})))], {
				hk: "2jIHMO"
			})), Kb = e => {
				let {
					suspensionDaysLeft: t
				} = e;
				return m.a.createElement(Hb, {
					className: Object(ye.a)(Vb.a.wrapper, Vb.a.suspended)
				}, m.a.createElement("span", null, Qb._({
					"*": "Your account has been suspended from Reddit for {number of days} days.",
					_1: "Your account has been suspended from Reddit for 1 day."
				}, [Qb._plural(t, "number of days")], {
					hk: "2Bwand"
				}), " "), Qb._("Click {=here} for more info.", [Qb._param("=here", m.a.createElement("a", {
					className: Vb.a.underlineLink,
					href: "https://www.reddithelp.com/hc/en-us/articles/360045308832"
				}, Qb._("here", null, {
					hk: "49ZRXB"
				})))], {
					hk: "lV57o"
				}))
			}, Jb = () => m.a.createElement(Hb, {
				className: Object(ye.a)(Vb.a.wrapper, Vb.a.fpr)
			}, m.a.createElement("span", null, Qb._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: Vb.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Qb._("Learn more", null, {
				hk: "1OTc8q"
			}))), Xb = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(Hb, {
					className: Object(ye.a)(Vb.a.wrapper, Vb.a.deprecated)
				}, m.a.createElement("span", null, Qb._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Qb._param("update your browser", m.a.createElement(Yb, {
					link: t
				}, Qb._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, Qb._("If you do not update your browser, we suggest you visit {old reddit} .", [Qb._param("old reddit", m.a.createElement("a", {
					className: Vb.a.underlineLink,
					href: i.a.oldRedditUrl,
					onClick: n
				}, Qb._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, Yb = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: Vb.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class Zb extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(Gb.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(Gb.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n,
						suspensionDaysLeft: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(Xb, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Jb, null) : n ? s || null != s ? m.a.createElement(Kb, {
						suspensionDaysLeft: s
					}) : m.a.createElement(zb, null) : null
				}
			}
			var $b = Object(qe.c)(Zb);
			const eh = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				th = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				});
			var nh = n("./src/reddit/components/OfflineBanner/index.m.less"),
				sh = n.n(nh);
			const {
				fbt: oh
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var rh = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(ye.a)(e.className, sh.a.banner, {
							[sh.a.online]: e.online,
							[sh.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: sh.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: sh.a.title
					}, e.online ? oh._("Found the internet!", null, {
						hk: "fMghd"
					}) : oh._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(no.a, {
						className: sh.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				ah = n("./src/reddit/components/Upsell/async.ts"),
				ih = n("./src/reddit/constants/componentSizes.ts"),
				ch = n("./src/reddit/constants/elementIds.ts"),
				lh = n("./src/reddit/constants/history.ts"),
				dh = n("./src/reddit/constants/posts.ts"),
				uh = n("./src/reddit/contexts/InsideOverlay.tsx"),
				mh = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				ph = n("./src/reddit/constants/promo.ts"),
				bh = n("./src/reddit/contexts/Promo/index.ts");

			function hh(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case ph.a.Completed:
						return s === ph.a.Shown ? new Map(e.set(n, ph.a.Completed)) : e;
					case ph.a.Dismissed:
						return s === ph.a.Shown ? new Map(e.set(n, ph.a.Dismissed)) : e;
					case ph.a.Shown:
						return s ? e : new Map(e.set(n, ph.a.Shown));
					default:
						throw new Error
				}
			}
			var gh = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(hh, new Map), o = u.useCallback(e => s({
						type: ph.a.Completed,
						payload: {
							promoName: e
						}
					}), []), r = u.useCallback(e => s({
						type: ph.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: ph.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: o,
						dismissPromo: r,
						promos: n,
						showPromo: a
					}), [o, r, n, a]);
					return u.createElement(bh.a.Provider, {
						value: i
					}, t)
				},
				fh = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				vh = n("./src/reddit/helpers/postCollection.ts"),
				Oh = n("./src/reddit/models/Theme/index.ts"),
				Ch = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				yh = n("./src/reddit/selectors/experiments/survey.ts"),
				Eh = n("./src/reddit/selectors/notificationBanner.ts"),
				xh = n("./src/reddit/selectors/onboarding.ts"),
				Ph = n("./src/reddit/selectors/posts.ts"),
				jh = n("./src/reddit/components/AppRouter/index.m.less"),
				_h = n.n(jh);

			function Sh() {
				return (Sh = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const kh = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						...s
					} = e;
					return m.a.createElement("div", Sh({
						className: Object(ye.a)(_h.a.main, {
							[_h.a.mShowingPaddedPinnedDescriptions]: n
						}, t),
						id: ch.a
					}, s))
				},
				Nh = Object(Ne.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...o
					} = e;
					const r = Object(Qe.a)({
						theme: s,
						...o
					});
					return m.a.createElement("div", Sh({
						className: Object(ye.a)(_h.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(Oh.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Nn.c)(n)}px`
						}
					}, o))
				}),
				Mh = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const o = Object(u.useContext)(ke.a);
					return m.a.createElement("div", Sh({
						className: Object(ye.a)(_h.a.lightboxHeaderWrapper, t, {
							[_h.a.lightboxHeaderWrapperExp]: o
						})
					}, s, {
						ref: n
					}))
				},
				wh = Object(Eh.a)(Fm.a.EmailCollectionBannerId),
				Ih = Object(ge.b)(() => Object(Y.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(ze.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: O.x,
					isBlockingInterstitialEnabled: Ch.b,
					isBlockingInterstitialV2Enabled: Ch.c,
					isLoggedIn: O.Q,
					isLoggedOutOneFeed: go.a,
					isNpsSurveyEnabled: yh.d,
					isOnboardingQueryParamEnabled: xh.c,
					isSubscriptionsPinned: oo.b,
					isSuccessfulSurveyEnabled: yh.f,
					isSuspended: O.X,
					isFPR: O.O,
					posts: Ph.J,
					profileCollectionsEnabled: Ub.a,
					showEmailCollectionBanner: e => !Object(Rn.N)(e.platform.currentPage) && wh(e),
					signUpModalIsOpen: Object(_c.c)(qt.a.REGISTER_MODAL_ID),
					suspensionDaysLeft: O.xb
				}), e => ({
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onPinSubscriptions: () => e(Object(Re.i)()),
					onPostDismissTrigger: () => e(Object(me.k)()),
					onSuccessfulSignupTrigger: () => e(Object(me.g)()),
					onUnpinSubscriptions: () => e(Object(Re.j)())
				})),
				Th = (e, t) => !(!e.state || !e.state[lh.b.IsOverlay] || t === e);
			class Ah extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = Se()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < ih.k ? this.props.onUnpinSubscriptions() : this.props.isLoggedOutOneFeed && !this.props.isSubscriptionsPinned && e >= ih.k && this.props.onPinSubscriptions()
					}, S.K), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(Rn.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								o = `${S.Ib.Post}_${s}`,
								r = t && s && t[o],
								a = r && r.belongsTo.type === dh.a.PROFILE;
							return !(!r || !Object(vh.a)(r) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(ze.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler);
					const {
						isOnboardingQueryParamEnabled: e,
						isSuccessfulSurveyEnabled: t,
						onSuccessfulSignupTrigger: n
					} = this.props;
					t && !e && n()
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: n,
						onPostDismissTrigger: s
					} = this.props, o = n.state && n.state[lh.b.IsOverlay], r = Object(Te.a)(this.previousLocation, e.location);
					t && o && r && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(Te.a)(this.previousLocation, this.props.location),
						i = o ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === S.Nb.INDEX || t.name === S.Nb.SUBREDDIT && n.subredditName === wo.b.Popular), o = Object(ze.c)(this.props.frontpageSignupVariant), r = Object(ze.c)(e.frontpageSignupVariant);
						s || o || !r ? o && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || o || r || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), (this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && this.props.signUpModalIsOpen) return;
					const c = Th(e.location, this.previousLocation);
					we.a.write(() => {
						document.body.style.overflow = c ? "hidden" : ""
					})
				}
				componentDidUpdate() {
					this.didCountSurveyTrigger = !1
				}
				render() {
					const {
						connection: e,
						currentPage: t,
						frontpageSignupVariant: n,
						hasInvalidSession: o,
						isFPR: r,
						isLoggedIn: a,
						isLoggedOutOneFeed: i,
						isSubscriptionsPinned: c,
						isSuspended: l,
						location: d,
						onClickOutsideOverlay: p,
						routes: b,
						showEmailCollectionBanner: h,
						suspensionDaysLeft: g
					} = this.props, {
						isSignupUpsellDisplayed: f,
						isSignupUpsellHidden: v
					} = this.state, O = this.context, C = Th(d, this.previousLocation);
					d.state && d.state[lh.b.IsOverlay] && !C ? d.state[lh.b.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[lh.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[lh.b.CloseLocation] && this.previousLocation.state[lh.b.CloseLocation] === d.state[lh.b.CloseLocation] ? d.state[lh.b.CloseLocation] = {
						...this.previousLocation,
						state: je()(this.previousLocation.state, lh.b.CloseLocation)
					} : d.state[lh.b.CloseLocation] = this.previousLocation);
					const y = Object(Te.a)(this.previousLocation, d),
						E = C || y ? this.previousLocation : d,
						x = C || y ? this.previousPage : t,
						P = !(!(x && x.meta && x.meta.name === S.Nb.SEARCH_RESULTS && x && x.queryParams) || x.queryParams[Ga.s]),
						j = !(!x || !x.meta || x.meta.name !== S.Nb.MODERATION_PAGES),
						_ = Object(Rn.x)(x),
						k = this.getIsPostCollection(),
						N = f && !v,
						M = e.showBanner;
					return o ? s.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(Rn.a.Provider, {
						value: x
					}, m.a.createElement(la.c, {
						isOverlayOpen: C
					}, m.a.createElement(sp.a, {
						forceRedditTheme: P
					}, f && m.a.createElement(Nt, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Rh, {
						browserInfo: O,
						connection: e,
						isFPR: r,
						isInline: N,
						isSuspended: l,
						showOffline: M,
						suspensionDaysLeft: g
					})), m.a.createElement(uh.a.Provider, {
						value: !1
					}, m.a.createElement(sp.a, {
						forceRedditTheme: P || j,
						isCommentsPage: _
					}, m.a.createElement(gh, null, m.a.createElement(Lh, {
						browserInfo: O,
						frontpageSignupVariant: n,
						isCommentsPage: _,
						isInline: N,
						isLoggedIn: a,
						isLoggedOutOneFeed: i,
						isSubscriptionsPinned: c,
						location: E,
						overlayIsOpen: C,
						page: x,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: r,
						showOffline: M,
						showSuspended: l
					}), m.a.createElement(ah.b, null), m.a.createElement(ah.a, null)))))), m.a.createElement(Rn.a.Provider, {
						value: t
					}, C && m.a.createElement(uh.a.Provider, {
						value: !0
					}, m.a.createElement(sp.a, {
						isOverlay: !0
					}, m.a.createElement(Dh, {
						browserInfo: O,
						isPostCollection: k,
						location: d,
						onClickOutsideOverlay: p,
						page: t,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: r,
						showOffline: M,
						showSuspended: l
					}))), m.a.createElement(sp.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(Fb, null), m.a.createElement(np.a, null), h && m.a.createElement(Le.a, null), m.a.createElement(In, null), m.a.createElement(Zs, null)))))
				}
			}
			Ah.contextType = Me.a;
			const Rh = Object(qe.c)(e => {
					const t = Object(Rn.fb)(),
						n = Object(mh.eb)(t),
						s = Object(u.useContext)(ke.a),
						{
							browserInfo: o,
							connection: r,
							isFPR: a,
							isInline: i,
							showOffline: c,
							isSuspended: l,
							suspensionDaysLeft: d
						} = e,
						p = {
							browserInfo: o,
							showFPR: a,
							showSuspended: l,
							suspensionDaysLeft: d,
							showOffline: c,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement($b, p), n && m.a.createElement(Lm, {
						className: Object(ye.a)(_h.a.header, eh(_h.a, p), {
							[_h.a.inline]: i
						})
					}), m.a.createElement(rh, {
						className: Object(ye.a)(_h.a.offlineBanner, eh(_h.a, p)),
						online: r.online,
						showBanner: r.showBanner
					}))
				}),
				Lh = Object(qe.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = je()(e, "key"),
							s = je()(t, "key");
						return xe()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = je()(e, ["key", "locationState"]),
								s = je()(t, ["key", "locationState"]);
							return xe()(n, s)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: n,
							overlayIsOpen: s,
							isInline: o,
							isSubscriptionsPinned: r,
							showEmailCollectionBanner: a
						} = this.props;
						return m.a.createElement(kh, {
							"aria-hidden": s,
							className: Object(ye.a)(eh(_h.a, this.props), {
								[_h.a.withUpsell]: !!e,
								[_h.a.inline]: o
							}),
							shouldDisplayPinnedSubscriptions: r
						}, r && m.a.createElement(tp, {
							className: Object(ye.a)(_h.a.pinnedSubscriptions, {
								...eh(_h.a, this.props),
								[_h.a.removeOverflow]: this.props.isLoggedOutOneFeed
							}),
							"data-redditstyle": !0
						}), m.a.createElement(fe.f, {
							location: t
						}, n), a && m.a.createElement("div", {
							className: Object(ye.a)(_h.a.bottomSpacer, th(_h.a, this.props))
						}))
					}
				});
			class Dh extends m.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => {
						this.setState({
							overlayScrollContainerEl: e
						})
					}, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(Ae.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[lh.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = fh.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(Ie.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && fh.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, o = !(!t || !t.meta || t.meta.name === S.Nb.SUBREDDIT_CREATION || t.meta.name === S.Nb.PUBLIC_ACCESS_NETWORK), r = e;
					return m.a.createElement(Nh, {
						className: Object(ye.a)(eh(_h.a, this.props), {
							[_h.a.mIsCommentsLightbox]: o,
							[_h.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(ye.a)(_h.a.overlayWrapper, eh(_h.a, this.props))
					}, m.a.createElement("div", {
						className: Object(ye.a)(_h.a.overlayScrollContainer, {
							[_h.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: ch.e,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, o && m.a.createElement(Mh, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(ye.a)(eh(_h.a, this.props), {
							[_h.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, m.a.createElement(Dm.a, {
						page: t
					})), m.a.createElement(fe.f, null, n), m.a.createElement("div", {
						className: Object(ye.a)(_h.a.bottomSpacer, th(_h.a, this.props))
					}))))
				}
			}
			var Fh = Ih(Object(qe.c)(Ah)),
				Uh = n("./src/reddit/contexts/User/index.tsx");

			function Gh(e) {
				return m.a.createElement(Uh.b, null, e.children)
			}
			var Bh = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				qh = n("./src/reddit/constants/shortcuts.ts"),
				Hh = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				Wh = n.n(Hh);
			var Vh = e => {
					let {
						children: t
					} = e;
					return m.a.createElement("div", {
						className: Wh.a.shortcutDiv,
						id: qh.b,
						tabIndex: -1
					}, m.a.Children.only(t))
				},
				Qh = n("./src/reddit/components/Header/Sparse.tsx"),
				zh = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Kh = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Jh = n.n(Kh);
			const {
				fbt: Xh
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Yh = Object(Y.c)({
				showError: Sn.d.showVerboseErrors
			}), Zh = Object(ge.b)(Yh)(e => {
				const t = Object(u.useContext)(ke.a);
				return m.a.createElement(uh.a.Provider, {
					value: !1
				}, m.a.createElement(sp.b, {
					subredditName: ""
				}, m.a.createElement("div", null, m.a.createElement(Qh.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), m.a.createElement("div", {
					className: Jh.a.container
				}, m.a.createElement("div", {
					className: Jh.a.mainContent
				}, m.a.createElement(zh.a, {
					className: Jh.a.dizzySnoo
				}), m.a.createElement("h3", {
					className: Jh.a.title
				}, Xh._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), m.a.createElement("div", {
					className: Jh.a.subTitle
				}, Xh._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), m.a.createElement(nn.l, {
					onClick: () => window.location.reload(!0)
				}, Xh._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: Jh.a.subTitle
				}, e.error.message), m.a.createElement("pre", null, m.a.createElement("code", null, e.error.stack)))), m.a.createElement("div", {
					className: Object(ye.a)(Jh.a.topImageContainer, {
						[Jh.a.topImageContainerExp]: t
					})
				}, m.a.createElement("img", {
					className: Jh.a.image,
					src: `${i.a.assetPath}/img/error/star_pattern.png`
				})), m.a.createElement("div", {
					className: Jh.a.bottomImageContainer
				}, m.a.createElement("img", {
					className: Jh.a.image,
					src: `${i.a.assetPath}/img/error/half_planet.png`
				}))))))
			});

			function $h() {
				return ($h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const eg = Object(Y.c)({
					isNavbarLikeMwebEnabled: Hl.a,
					theme: e => e.themes.current
				}),
				tg = Object(ge.b)(eg, {})(e => {
					let {
						children: t,
						theme: n,
						isNavbarLikeMwebEnabled: s
					} = e;
					const o = Object(Qe.a)({
						theme: n
					});
					return m.a.createElement(ke.a.Provider, {
						value: s
					}, m.a.createElement("div", {
						className: Object(ye.a)(Oe.a.container, {
							[Oe.a.containerExp]: s
						}),
						style: {
							"--background": o.body,
							"--canvas": o.canvas
						}
					}, t))
				});

			function ng(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return m.a.createElement(qe.a, null, m.a.createElement(tg, null, m.a.createElement(Gh, null, m.a.createElement(Ce.a, null), m.a.createElement(Bh.a, null), m.a.createElement(Vh, null, m.a.createElement(t, null, m.a.createElement(fe.d, {
						component: sg(n)
					}))))))
				}
				return m.a.createElement(Zh, {
					error: e.error
				})
			}
			const sg = e => t => m.a.createElement(Fh, $h({
					routes: e
				}, t)),
				og = 1e3;
			class rg extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = Se()(() => Object(kn.Eb)(this.props.storageKey, this.props.value), og)
				}
				componentDidMount() {
					this.props.syncOnMount && this.sync()
				}
				componentDidUpdate() {
					this.sync()
				}
				sync() {
					this.props.enabled && this.flush()
				}
				render() {
					return null
				}
			}
			rg.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const ag = Object(Y.a)(O.Q, e => ({
				storageKey: _o.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var ig = Object(ge.b)(ag)(rg);
			var cg = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(ig, null)),
				lg = n("./src/reddit/constants/jsapiEvents.ts"),
				dg = n("./src/reddit/constants/screenWidths.ts"),
				ug = n("./src/reddit/contexts/AdminEvents.ts"),
				mg = n("./src/reddit/contexts/ApiContext.tsx"),
				pg = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				bg = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const hg = () => e => t => e(t);
			var gg = n("./src/lib/safeBadgeUpdate.ts");

			function fg(e) {
				const t = Object(sm.g)(e);
				Object(gg.a)(t)
			}
			var vg = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== bg.b && n.type !== bg.d || fg(e.getState()), s
				} : hg,
				Og = n("./node_modules/brcast/dist/brcast.es.js"),
				Cg = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var yg = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(Og.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(Cg.b)(s) || Object(O.N)(s) || Object(O.M)(s)) && (e = !0, Object(B.e)(t)), s => o => {
								const r = s(o),
									a = n.getState();
								if (!Object(Cg.b)(a)) {
									const n = Object(O.N)(a) || Object(O.M)(a);
									e && !n ? (e = !1, Object(B.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(B.e)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(Og.a)([]),
					middleware: () => e => t => e(t)
				}),
				Eg = n("./src/lib/domUtils/index.ts");
			const xg = 30 * S.kb;
			let Pg = Date.now();
			const jg = () => {
					Pg = Date.now()
				},
				_g = !!Object(Eg.f)() && {
					passive: !0
				};
			window.addEventListener("click", jg, !1), window.addEventListener("wheel", si()(jg, 250), _g), window.addEventListener("mousemove", si()(jg, 250), _g), window.addEventListener("keydown", si()(jg, 250), _g);
			var Sg = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Pg >= xg ? (e.dispatch(ue.h()), jg()) : jg()
					})), e => t => e(t)
				},
				kg = n("./src/reddit/constants/preferences.ts"),
				Ng = n("./src/reddit/helpers/cookies/index.ts");
			const Mg = new Set([sl.g, sl.i, pe.b, sl.d, sl.o, Re.d, Re.e, sl.r]);
			var wg = e => t => n => {
					const s = t(n);
					if (Mg.has(n.type)) {
						const t = e.getState().user,
							n = ba()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", kg.b, kg.d, kg.e]);
						Object(Ng.a)({
							prefs: n
						})
					}
					return s
				},
				Ig = n("./src/reddit/actions/tabBadging.ts"),
				Tg = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ag = n("./src/reddit/selectors/removedPosts.ts"),
				Rg = n("./src/reddit/models/Subreddit/index.ts"),
				Lg = n("./src/reddit/models/Post/index.ts");
			const Dg = (e, t) => ((e, t) => {
					var n, s, o, r;
					const a = "subreddit" === (null === (n = null == t ? void 0 : t.belongsTo) || void 0 === n ? void 0 : n.type) ? null === (s = null == t ? void 0 : t.belongsTo) || void 0 === s ? void 0 : s.id : null;
					if (!a) return !1;
					const i = null === (r = null === (o = e.subreddits) || void 0 === o ? void 0 : o.models) || void 0 === r ? void 0 : r[a];
					return !!i && ((null == i ? void 0 : i.type) !== Rg.f.Private && (null == i || !i.isQuarantined))
				})(e, t) && Object(Ag.b)(e) && (e => !!(e && e >= 5))(null == t ? void 0 : t.numComments),
				Fg = (e, t) => {
					const n = Object(Ia.b)(e, {
						experimentEligibilitySelector: Ia.a,
						experimentName: t
					});
					return n === An.be.INDEX_1 || n === An.be.INDEX_2
				},
				Ug = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Gg = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(Pn.r)(e), o = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, r = Ug.has(o), a = Object(Rn.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Bg(e), l = s === S.Nb.COMMENTS || s === S.Nb.COLLECTION_COMMENTS, d = !(!n || !n.urlParams.partialCommentId), u = s === S.Nb.SEARCH_RESULTS || s === S.Nb.SUBREDDIT_LEADERBOARD || l && d, m = Object(Ag.d)(e) && !(e => {
						var t, n, s;
						const {
							currentPage: o
						} = e.platform;
						if (!Object(Ag.d)(e)) return !1;
						const r = null === (t = null == o ? void 0 : o.urlParams) || void 0 === t ? void 0 : t.partialPostId,
							a = r && Object(Lg.u)(r),
							i = a && (null === (s = null === (n = e.posts) || void 0 === n ? void 0 : n.models) || void 0 === s ? void 0 : s[a]);
						if (!i) return !1;
						if (!Dg(e, i)) return !1;
						const c = i.created,
							l = new Date(2022, 4, 3),
							d = new Date(2021, 0, 1);
						if (c >= l.getTime()) return Fg(e, An.qe);
						if (c < l.getTime() && c >= d.getTime()) return Fg(e, An.pe);
						const u = new Date(2016, 0, 1);
						return c < d.getTime() && c >= u.getTime() && Fg(e, An.re)
					})(e) || u;
					return i || r || c || m ? u ? "noindex" : "noindex,nofollow" : null
				},
				Bg = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(O.f)(e, s);
						n = !!Object(Tg.a)(t, !1, s)
					}
					return n
				};
			var qg = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const Hg = "theme-color",
				Wg = `meta[name="${Hg}"]`;

			function Vg(e) {
				return e ? qg.b.body : qg.a.body
			}
			var Qg = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === ce.f) {
						const t = e.getState(),
							s = Object(O.P)(t),
							{
								meta: o
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(sm.i)(e);
							Object(Ig.c)(n, t)
						})(t, o.title) : we.a.write(() => {
							document.title = o.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Gg(e),
										{
											head: o
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", o.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : o.removeChild && o.removeChild(n))
								}
							})(t, document)
						})
					} else if (n.type === sl.i) {
						! function(e) {
							we.a.write(() => {
								const t = document.head.querySelector(Wg);
								if (t) {
									const n = Object(O.db)(e);
									t.content = Vg(n)
								}
							})
						}(e.getState())
					}
					return s
				} : hg,
				zg = n("./src/reddit/helpers/survey/index.ts");
			var Kg = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(zg.a).filter(t => t === e).length)(t.type) && Object(kn.U)(zg.a[t.type]), e(t)) : hg;
			const Jg = 5 * S.kb;
			var Xg = e => {
					const t = Se()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(ue.g())
					}, Jg);
					let n, s;
					const o = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const o = new Date(n.expires),
								r = s + Math.floor(.8 * (o.getTime() - s));
							Date.now() > r && t && t()
						},
						r = e => {
							s = Date.now();
							const o = new Date(e.expires).getTime() - s,
								r = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(r * e.expiresIn * 1e3), Math.floor(r * o));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && r(a.user.session), window.addEventListener("focus", o), window.addEventListener("touchend", o), document.body.addEventListener("mouseenter", o), e => t => (t.type !== ue.a && t.type !== ue.b && t.type !== ue.c && t.type !== ue.e || r(t.payload), t.type === ue.d && (clearTimeout(n), n = null), e(t))
				},
				Yg = n("./src/reddit/singleton/tracing/index.ts");
			var Zg = e => e => t => {
					const n = () => e(t);
					return Yg.b.isEnabled ? Yg.b.recordLocalSpan(t.type, n) : e(t)
				},
				$g = n("./src/reddit/actions/frontpage/constants.ts"),
				ef = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				tf = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				nf = n("./src/reddit/actions/pages/profilePosts.ts"),
				sf = n("./src/reddit/actions/pages/search/index.ts"),
				of = n("./src/reddit/actions/pages/subreddit.ts"),
				rf = n("./src/reddit/actions/tracking.ts"),
				af = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				cf = n("./src/reddit/helpers/history/index.ts"),
				lf = n("./src/reddit/helpers/trackers/commentList.ts"),
				df = n("./src/reddit/helpers/trackers/postList.ts"),
				uf = n("./src/reddit/helpers/routeKey/index.ts");
			var mf = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(rf.c({
							routeKey: t
						}))
					};
					if (n.type === ce.b) {
						const s = e.getState(),
							o = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							r = Object(vo.F)(s, o) || "",
							i = (s.subreddits.about[r] || {}).advertiserCategory;
						a.trigger("pageview", {
							...ba()(n.payload.location, "pathname", "search", "hash"),
							subreddit: o,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(uf.b)(c, s, Object(af.a)(s));
							if (e && G.c.has(e)) {
								const t = G.c.end(e);
								!Object(Pn.i)(s) && Object(cf.b)(lh.b.IsOverlay) || Object(Va.k)(c, s, H.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(af.a)(s, l),
							u = Object(uf.b)(l, s, d);
						if (!u) return t(n);
						G.c.start(u)
					}
					const o = t(n);
					switch (n.type) {
						case $g.b:
						case tf.b:
						case tf.e:
						case nf.PROFILE_POSTS_LOADED:
						case ef.e:
						case of.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case sf.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case $g.f:
						case Cr.i:
						case nf.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: o
							} = n.payload;
							s(t);
							const r = e.getState();
							if (o.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							df.l(r, t);
							break
						}
						case ef.b: {
							const {
								key: t,
								commentIds: o
							} = n.payload;
							if (s(t), o.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							lf.a(r, t);
							break
						}
						case Oa.e: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return o
				},
				pf = n("./src/reddit/helpers/datadome.ts"),
				bf = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				hf = n("./src/reddit/helpers/trackers/global.ts");
			let gf = null;
			const ff = () => {
				gf && window.clearTimeout(gf), gf = null
			};
			var vf = e => {
					gf = window.setTimeout(() => {
						ff(), Object(G.a)(Object(hf.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", ff)
				},
				Of = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Cf = n("./src/reddit/actions/connection/constants.ts");
			const yf = Object(b.a)(Cf.b),
				Ef = Object(b.a)(Cf.a),
				xf = Object(b.a)(Cf.c);
			var Pf = n("./src/reddit/actions/meta.ts");
			const jf = (e, t) => Object(G.a)({
					...dn.n(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(dn.d)(e, {
						type: t
					})
				}),
				_f = "(display-mode: minimal-ui)";
			const Sf = 3 * S.Sb;

			function kf(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(_f).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(Pf.i)());
				const t = window.matchMedia(_f);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(Pf.i)()) : e.dispatch(Object(Pf.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						fg(t)
					}, 1e3), jf(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(yf()), setTimeout(() => e.dispatch(xf()), Sf)
				}), window.addEventListener("offline", () => e.dispatch(Ef()))
			}
			const Nf = (e, t) => {
				if (!e) return;
				const n = (d.a.get(_n.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						o = {
							name: _n.g,
							value: s,
							cookieOptions: Object(rb.a)(),
							cookieContext: t
						};
					Object(wp.c)(o)
				}
			};
			var Mf = n("./src/reddit/layout/page/Listing/index.tsx"),
				wf = n("./src/reddit/reducers/index.ts");
			var If = n("./src/reddit/selectors/experiments/index.ts"),
				Tf = n("./src/reddit/selectors/experiments/utils.ts");
			const Af = e => !!Object(Tf.a)((e => Object(Ia.c)(e, {
					experimentEligibilitySelector: If.f,
					experimentName: An.uc
				}))(e)),
				Rf = {
					displayDelay: 15,
					displayOnRoutes: [S.Nb.SUBREDDIT, S.Nb.COMMENTS],
					experimentName: An.Nd,
					experimentVariant: An.Rd.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Lf = e => {
					const {
						base_url: t
					} = Object(dn.Y)(e), n = Object(Pn.b)(e), s = n && n.urlParams.partialPostId, o = n && n.urlParams.subredditName;
					return {
						...t && {
							rbl: t
						},
						...o && {
							s: o
						},
						...s && {
							p: s
						}
					}
				},
				Df = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(Rf, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(Rf)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(Rf, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(Rf, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(Ia.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: Ia.a
							}) === s
						})(Rf, e)) return {
						displayDelay: Rf.displayDelay,
						externalVars: Lf(e)
					}
				};
			var Ff = n("./src/reddit/singleton/EventSystem.ts"),
				Uf = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				Gf = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				Bf = n("./src/reddit/reducers/features/categories/index.ts"),
				qf = n("./src/lib/sentry/index.ts"),
				Hf = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Wf = Object(b.a)(Hf.C),
				Vf = () => {
					return Object(kn.A)(_o.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var Qf = n("./src/reddit/actions/global/constants.ts");
			Object(Rc.a)({
				features: {
					categories: Bf.a
				}
			});
			const zf = Object(b.a)(Qf.a),
				Kf = e => async (t, n) => {
					t((() => async e => {
						const t = Vf();
						t && e(Wf(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || qf.c.withScope(e => {
						Object(qf.a)(e, {
							serverLogging: !1
						}), qf.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: o
					} = e;
					o && t(zf(o))
				}, Jf = /^\/account\/magic_link\/landing\/[^\/]+\/?$/, Xf = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return Jf.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(J.openD2xOnboardingModal)())
				};
			var Yf = n("./src/reddit/actions/notificationsInbox/index.ts"),
				Zf = n("./src/reddit/actions/onboarding/index.ts"),
				$f = n("./src/reddit/constants/countrySites.ts"),
				ev = n("./src/reddit/selectors/countrySites.ts");
			const tv = $f.b ? `${$f.a}/${$f.b}` : `${$f.a}`,
				nv = (e, t) => {
					return !!Object(ev.e)(e) && !(t && !Object(ev.d)(t))
				},
				sv = e => e.startsWith("/r/") ? e.replace("/r/", `/${tv}/r/`) : e;
			var ov = n("./src/reddit/selectors/experiments/countrySites.ts");
			var rv = n("./src/reddit/actions/economics/predictions/constants.ts"),
				av = n("./src/reddit/actions/eventPosts/constants.ts"),
				iv = n("./src/reddit/actions/linkedPosts/constants.ts"),
				cv = n("./src/reddit/actions/multireddit/constants.ts"),
				lv = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				dv = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				uv = n("./src/reddit/actions/pages/countrySite/constants.ts"),
				mv = n("./src/reddit/actions/pages/modListing/constants.ts"),
				pv = n("./src/reddit/actions/pages/multireddit/constants.ts"),
				bv = n("./src/reddit/actions/pages/postCreation.ts"),
				hv = n("./src/reddit/actions/pages/topic.ts"),
				gv = n("./src/reddit/actions/profileConversations.ts"),
				fv = n("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				vv = n("./src/reddit/actions/recommendations.ts"),
				Ov = n("./src/reddit/actions/subreddit/constants.ts");
			const Cv = e => {
					let t = 0;
					if (Object(Mt.a)()) {
						const n = localStorage.getItem(e);
						n && !isNaN(parseInt(n)) && (t = parseInt(n))
					}
					return t
				},
				yv = e => {
					Object(Mt.a)() && localStorage.removeItem(e)
				},
				Ev = (e, t) => {
					const n = Cv(e) + t;
					Object(Mt.a)() && localStorage.setItem(e, n.toString())
				},
				xv = e => {
					if (!e) return;
					const t = Object.keys(e).length,
						n = Object.values(e).filter(e => e.isSponsored).length;
					(e => {
						Ev("client-session-signals-number-of-posts-seen", e)
					})(t), (e => {
						Ev("client-session-signals-number-of-ads-seen", e)
					})(n)
				};
			let Pv = !1;
			var jv = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			const _v = Object(Y.a)(e => Object(Ia.c)(e, {
				experimentEligibilitySelector: Ia.a,
				experimentName: An.Db
			}), e => e === An.zd);
			Object(r.e)(r.b.EntryPointStart);
			const Sv = Object(F.a)({
					actionDispatchers: {
						reddaidReceived: he.u,
						loidReceived: he.r,
						sessionTrackerReceived: he.z
					},
					authHeaders: {
						[xa.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: he.d,
						loidReceived: he.b,
						sessionTrackerReceived: he.k,
						userAuthenticated: ue.c,
						userLoggedOut: ue.d,
						userReauthenticated: ue.e,
						headersReceived: W.a
					},
					onBeforeRequestFactory: Of.a,
					statsAppName: S.m.Redesign
				}),
				kv = Object(U.a)(Sv.apiContext),
				Nv = Object(U.a)(Sv.apiContext, i.a.gqlRealtime2Url),
				Mv = yg();
			let wv;
			Object(w.a)({
				reducerMap: wf.a,
				routes: nm,
				apiContext: Sv.apiContext,
				gqlContext: kv.gqlContext,
				gqlRealtime2Context: Nv.gqlContext,
				appFactory: (e, t) => m.a.createElement(ug.a.Provider, {
					value: Mv.broadcaster
				}, m.a.createElement(mg.a.Provider, {
					value: {
						apiContext: Sv.apiContext,
						gqlContext: kv.gqlContext,
						gqlRealtime2Context: Nv.gqlContext
					}
				}, m.a.createElement(pg.b, null, m.a.createElement(ng, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(cg, null)))),
				appName: S.m.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const n = wv;
						if (!n) return;
						n.dispatch(Object(ce.l)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(ce.k)())
							}
						}))
					}
				}),
				customMiddleware: [P.a.withExtraArgument({
					routes: nm,
					apiContext: Sv.apiContext,
					gqlContext: kv.gqlContext,
					gqlRealtime2Context: Nv.gqlContext
				}), Mv.middleware, Sg, Sv.middleware, kv.middleware, Nv.middleware, Xg, wg, Zg, mf, Qg, Kg, xd.a, vg, e => t => n => {
					let s, o;
					if (!Object(ov.b)(e.getState()) || !n.payload) return t(n);
					o = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const r = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!nv(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.belongsTo.id,
									t = Object(ev.d)(e);
								(n || t) && (o.permalink = o.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${tv}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, o)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!nv(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.subredditId,
									t = Object(ev.d)(e);
								(n || t) && (o.permalink = sv(o.permalink))
							}
							return t
						})(e.getState(), n.payload.comments, o))
					} catch (a) {
						n.payload = {
							...r
						}
					}
					return t(n)
				}, e => t => n => {
					if (!Object(ov.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === h.e ? n.payload = ((e, t) => {
							if (!nv(e, t.name)) return t;
							const n = Object(ev.d)(t.id);
							if (t.name || n) {
								const e = sv(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!nv(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(ev.d)(s.id),
									o = Object(ev.d)(s.name);
								if (e || o) {
									const e = sv(s.url),
										o = {
											...s,
											url: e
										};
									t[n] = o
								}
							}
							return t
						})(e.getState(), n.payload.subreddits))
					} catch (o) {
						n.payload = {
							...s
						}
					}
					return t(n)
				}, e => t => n => {
					var s, o, r;
					switch (Pv || (xv(null === (o = null === (s = null == e ? void 0 : e.getState()) || void 0 === s ? void 0 : s.posts) || void 0 === o ? void 0 : o.models), Pv = !0), n.type) {
						case uv.b:
						case uv.f:
						case bv.PAGE_LOADED:
						case iv.c:
						case lv.b:
						case mv.e:
						case mv.h:
						case ef.b:
						case ef.e:
						case tf.e:
						case tf.b:
						case nf.PROFILE_POSTS_LOADED:
						case nf.MORE_POSTS_LOADED:
						case of.SUBREDDIT_LOADED:
						case $g.b:
						case pv.b:
						case dv.b:
						case cv.r:
						case $g.f:
						case gv.e:
						case vv.b:
						case Ov.j:
						case Cr.i:
						case fv.b:
						case hv.TOPIC_DATA_LOADED:
						case hv.MORE_POSTS_LOADED:
						case av.c:
						case av.d:
						case rv.o:
						case Ov.r:
							xv(null === (r = n.payload) || void 0 === r ? void 0 : r.posts);
							break;
						case ue.a:
						case ue.b:
						case ue.c:
						case ue.e:
						case ue.d:
							yv("client-session-signals-number-of-ads-seen"), yv("client-session-signals-number-of-posts-seen")
					}
					return t(n)
				}],
				modifyInitialData: e => {
					let {
						initialData: t,
						browserHistory: n
					} = e;
					const s = t.platform.currentPage ? t.platform.currentPage.key : "";
					if (s) {
						const e = n.location.key;
						t.platform.currentPage && (t.platform.currentPage.key = e);
						for (const n of ["referrers", "metas"]) Object.keys(t.platform[n]).length && (t.platform[n] = {
							[e]: t.platform[n][s]
						})
					}
					return t
				},
				staticPages: {
					loading: m.a.createElement(Mf.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: e => {
					let {
						browserHistory: t,
						routes: n,
						store: s
					} = e;
					window.addEventListener("message", e => {
						const t = i.a.mediaUrl;
						e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(ne.j)({
							height: e.data.height || 0,
							isDeleted: e.data.isDeleted || !1,
							postId: `t3_${e.data.id36}`
						}))
					}), kf(s);
					const r = s.getState();
					_v(r) && s.dispatch(Object(W.b)({
							headers: {
								[o.a]: "1"
							}
						})), Object(B.d)("enabled" === Object(Ia.c)(s.getState(), {
							experimentEligibilitySelector: Ia.a,
							experimentName: An.Ff,
							expEventOverride: !1
						})), Object(B.c)("enabled" === Object(Ia.c)(s.getState(), {
							experimentEligibilitySelector: Ia.a,
							experimentName: An.Hf
						})), Object(B.g)("enabled" === Object(Ia.c)(s.getState(), {
							experimentEligibilitySelector: Ia.a,
							experimentName: An.Gf
						})), Object(B.f)(kv.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(hf.a)("tab_closed")(e),
								n = q.g(t),
								o = Object(Uf.a)(n),
								r = Object(Gf.b)(o);
							Object(D.b)("sendV2EventsData", {
								data: o,
								headers: r
							})
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || s.dispatch(Object(ce.h)());
					const a = Object(O.db)(s.getState());
					s.dispatch(Object(pe.c)({
						nightmode: a
					}));
					const l = (e => e.tracing.traceId)(s.getState());
					if (l && (e => Object(Ia.c)(e, {
							experimentEligibilitySelector: Ia.a,
							experimentName: An.N
						}) === An.X.Enabled)(s.getState())) {
						Yg.b.enableTracing(!0);
						const e = Yg.b.createTraceFromId(l);
						Yg.b.setParent(e)
					}
					s.dispatch(Object(ce.i)(n));
					t.listen((e, t) => {
						const o = Object(T.a)(Object(c.e)(e), n, s.getState());
						s.dispatch(Object(ce.j)(e, t, o))
					});
					const {
						currentPage: d
					} = r.platform;
					if (d) {
						const e = [Ga.f];
						if (Object(Pn.j)(r) && e.push(Ga.c), e.length > 0) {
							const t = Object(N.a)(d.url, e);
							t !== d.url && s.dispatch(Object(p.c)(t))
						}
					}
					return Ln.a.initialize(r), {
						localStorageData: Object(kn.B)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: o,
						serverDocumentLength: c,
						store: l,
						localStorageData: d
					} = e;
					var u, m;
					wv = l;
					t.listen((e, t) => {
						const n = l.getState(),
							{
								urlParams: s,
								queryParams: o
							} = n.platform.currentPage,
							r = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: o
							},
							a = s.subredditName,
							i = Object(vo.F)(n, a) || "";
						if (Nf(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(C(i, a));
							const e = Object(Pn.e)(n);
							e && l.dispatch(y(e))
						}
						Ff.a.publish(lg.c, r, document)
					});
					const p = l.getState(),
						b = Object(xd.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(E(n)), t(x(Array.from(s)))
					})(b));
					const h = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						g = Object(vo.F)(p, h) || "";
					if (h) {
						l.dispatch(C(g, h));
						const e = Object(Pn.e)(p);
						e && l.dispatch(y(e))
					}
					const f = Object(vo.F)(p, h) || "",
						v = (p.subreddits.about[f] || {}).advertiserCategory;
					a.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), a.trigger("pageview", {
						subreddit: h,
						advertiserCategory: v
					}), l.dispatch(Kf({
						localStorageData: d
					}));
					const P = Object(xh.c)(p);
					P && (l.dispatch(ae()), history.replaceState(history.state, "", Object(N.a)(window.location.href, [Ga.w]))), l.dispatch(Xf());
					const w = Object(Pn.q)(p),
						T = null == w ? void 0 : w[Ga.o];
					T && (history.replaceState(history.state, "", Object(N.a)(window.location.href, [Ga.o])), P || l.dispatch(Object(I.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/changeUsername.ts")).then(e => e.openWelcomeBackModalIfNeeded))())), (null == w ? void 0 : w[Ga.u]) && (l.dispatch(Object(I.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/login.ts")).then(e => e.openLoginModal))()), history.replaceState(history.state, "", Object(N.a)(window.location.href, [Ga.u]))), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: o
							} = e.platform,
							a = (o.urlParams.subredditName || "").toLowerCase(),
							i = Object(vo.F)(e, a) || "";
						if (Object(D.a)(), Nf(i, {
								country: e.meta.country
							}), o && o.meta) {
							const a = o.meta.name;
							if (Object(G.b)(S.m.Redesign, {
									page: a,
									type: "rum"
								}), Object(M.c)(e.meta.userAgent) && window.innerWidth > dg.b) {
								const t = Object(r.f)(c);
								A.a && A.a.timing && Yg.b.isEnabled && (Yg.b.recordPerformanceTimings(`${a}_time_to_first_byte`, A.a.timing.fetchStart, A.a.timing.responseStart), Yg.b.recordPerformanceTimings(`${a}_time_to_interactive`, A.a.timing.fetchStart, A.a.timing.domInteractive));
								const n = [Object(pf.a)()],
									s = !0;
								if (Object(Pn.g)(e)) {
									const t = Object(bf.a)(e);
									n.push(Object(bf.c)(t))
								}
								const o = {
									isLoggedIn: Object(O.Q)(e),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(r.g)(o, t, s)
							}
							const i = A.a.timing.domInteractive - A.a.timing.navigationStart;
							Object(Va.k)(o.routeMatch, l.getState(), H.TimerType.Initial, i, o.urlParams);
							const d = Object(k.a)(window.location.href);
							d && d.get(Ga.a) && history.replaceState(history.state, "", Object(N.a)(window.location.href, [Ga.a])), Object(L.a)(d.get(Ga.E)) && l.dispatch(Object(be.f)({
								kind: mp.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(Ga.F) && (l.dispatch(Object(K.a)(d.get(Ga.F))), history.replaceState(history.state, "", Object(N.a)(window.location.href, [Ga.F])));
							let u = !1;
							const m = Object(O.T)(e);
							(Object(cf.b)(lh.b.JustLoggedIn) || m) && (l.dispatch(Object(be.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(cf.c)(lh.b.JustLoggedIn), history.replaceState(history.state, "", Object(N.a)(window.location.href, [Ga.n]))), Object(cf.b)(lh.b.JustLoggedOut) && (u = !0, Object(cf.c)(lh.b.JustLoggedOut)), oe().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(Zf.openReonboardingModalIfNeeded)());
							let b;
							ee(e) && (b = () => {
								const {
									dispatch: e
								} = l;
								t.listen(() => e(te())), e(te())
							});
							const h = Af(e);
							if (!T)
								if (h || !1 === kn.V()) h && b && b(), p();
								else {
									const e = () => {
										b && b(), p()
									};
									oe().then(e => e.requestNotificationsPermissions).then(t => l.dispatch(t(u, !1, e)))
								} if (a === S.Nb.MULTIREDDIT && o.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = o.routeMatch.match.params;
								l.dispatch(Object(I.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							Object(hl.d)(l.getState()) || l.dispatch(Object(z.c)())
						}
						Object(O.Q)(l.getState()) && l.dispatch(Object(V.d)()), Object(j.requestIdleCallback)(async () => {
							l.dispatch(Object(re.d)()), await Object(_.a)() && Object(hf.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = Df(e);
								t && (await (async e => {
									return (await Object(se.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
								})(t), s && s())
							}, s = t.listen((t, n) => {
								"POP" !== n && e()
							});
							e()
						}), document.addEventListener("visibilitychange", () => {
							var e;
							const t = l.getState(),
								{
									currentPage: n
								} = t.platform;
							if ("visible" !== document.visibilityState && (kn.Ub(Date.now()), Object(G.a)(Object(hf.a)("tab_backgrounded")(t))), (e => Object(Ia.c)(e, {
									experimentEligibilitySelector: e => !Object($.d)(e),
									experimentName: An.Bc
								}) === An.Oc.Enabled)(t) && "visible" === document.visibilityState && n && Object(Va.k)(n.routeMatch, l.getState(), H.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = kn.v(),
									t = kn.w(),
									n = kn.H(),
									s = kn.R();
								if (s && e && n) {
									const o = Date.now() - s;
									Object(G.a)(Object(hf.e)("tab_backgrounded", n)(l.getState(), o, e, t))
								}(s || e || n || t) && (kn.db(), kn.hb(), kn.fb(), kn.eb())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && jv.d[n.locationState.clickId] && !jv.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(jv.b)(n.locationState.clickId) : Object(jv.c)(n.locationState.clickId))
						}), Object($.h)(l.getState()) && vf(l.getState), l.dispatch(Object(me.n)())
					}), window.history.scrollRestoration = "manual", Ff.a.attachStore(l), l.dispatch(Object(de.b)(R.a.PageLoad));
					const F = kn.p(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						U = kn.o(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(le.C)({
						posts: null != F ? F : []
					})), l.dispatch(Object(Q.l)({
						comments: null != U ? U : []
					})), Object(vm.e)(l.getState()) && l.dispatch(Object(Yf.e)()), Object(j.requestIdleCallback)(() => {
						if (Object(yh.g)(l.getState())) {
							const e = kn.C();
							(!e || e && Date.now() - e.lastUpdated >= S.B) && l.dispatch(Object(me.f)())
						}
					})
				},
				raven: {
					tags: {
						project: S.m.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: s,
					theme: a,
					...l
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return o.a.createElement("div", u({
					className: Object(r.a)(d.a.backgroundContainer, n),
					style: p
				}, l))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(l.u)(),
				h = Object(a.c)({
					isEditing: d.i,
					layout: (e, t) => t.forcedLayout || Object(l.S)(e, t)
				}),
				g = Object(r.b)(h);
			t.a = b(g(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: s,
					dispatch: r,
					fitPageToContent: a,
					forcedLayout: d,
					isCollectionLayout: u,
					isEditing: b,
					layout: h,
					pageLayer: g,
					...f
				} = e;
				return o.a.createElement("div", p({
					className: Object(i.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: h === c.g.Large || Object(l.P)(g),
						[m.a.mDisableFullScreen]: s && !u,
						[m.a.mClassicWidth]: u,
						[m.a.mIsEditing]: !!b,
						[m.a.mCanFlexFullWidth]: !a,
						[m.a.onlyChildMargin]: !n
					})
				}, f))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./node_modules/classnames/index.js"),
				p = n.n(m),
				b = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = n("./src/lib/constants/icons.ts"),
				g = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/components/BackToSubreddit/index.m.less"),
				O = n.n(v);
			var C = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return o.a.createElement(b.a, {
						className: O.a.backToSubreddit,
						to: n
					}, o.a.createElement("div", {
						className: O.a.innerContainer
					}, o.a.createElement(f.a, {
						name: h.a.back,
						className: p()(O.a.content, O.a.back)
					}), o.a.createElement(g.b, {
						className: p()(O.a.content, O.a.subredditIcon)
					}), o.a.createElement("span", {
						className: p()(O.a.content, O.a.title)
					}, t)))
				},
				y = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				E = n("./src/reddit/layout/page/Listing/index.m.less"),
				x = n.n(E);
			t.a = e => {
				const {
					backgroundColor: t,
					backToSubredditName: n,
					className: m,
					containerRef: p,
					content: b,
					contentBanner: h,
					contentClassName: g,
					contentNavBar: f,
					disableFullscreen: v,
					fitPageToContent: O,
					forcedLayout: E,
					hideOnlyChildMargin: P,
					isCollectionLayout: j,
					isPageSwapped: _,
					maxWidth: S,
					navBar: k,
					redditStyle: N,
					sidebar: M,
					sidebars: w,
					trendingUnit: I,
					subredditId: T
				} = e, A = I ? "28px" : "0", R = _ ? {
					marginRight: `${c.p}px`,
					marginTop: A
				} : {
					marginLeft: `${c.p}px`,
					marginTop: A
				}, L = M && o.a.createElement("div", {
					className: Object(i.a)(x.a.sidebar, j ? x.a["m-collectionLayout"] : x.a.defaultLayout),
					style: R
				}, M), D = o.a.createElement(a.a, {
					hideOnlyChildMargin: P,
					className: g,
					disableFullscreen: v,
					fitPageToContent: O,
					forcedLayout: E,
					isCollectionLayout: j
				}, h, n && o.a.createElement(C, {
					subredditName: n
				}), b);
				let F;
				F = w ? o.a.createElement(o.a.Fragment, null, w[0], D, w[1]) : _ ? o.a.createElement(o.a.Fragment, null, L, D) : o.a.createElement(o.a.Fragment, null, D, L);
				const U = v ? `${S||d.a+2*c.l}px` : "100%",
					G = Object(s.useContext)(u.a);
				return o.a.createElement(y.a, {
					subredditId: T
				}, o.a.createElement("div", {
					className: Object(i.a)(x.a.outerContainer, l.i, m, {
						[x.a.outerContainerExp]: G
					}),
					ref: p
				}, o.a.createElement(r.a, {
					className: l.h,
					redditStyle: N,
					backgroundColor: t
				}), o.a.createElement("div", {
					className: x.a.innerContainer
				}, k, f, (e => e.hero ? o.a.createElement(o.a.Fragment, null, e.hero) : null)(e), o.a.createElement("div", {
					style: {
						maxWidth: U
					}
				}, I), o.a.createElement("div", {
					className: x.a.body,
					style: {
						maxWidth: U
					}
				}, F))))
			}
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/models/EconManagement/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.hasOwnProperty("source")
			}

			function o(e) {
				return "object" != typeof e[0]
			}
			var r;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Default = "default", e.Loading = "loading", e.Error = "error"
				}(r || (r = {}))
		},
		"./src/reddit/models/EmailSettings/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
				}(s || (s = {}))
		},
		"./src/reddit/models/LoggedOutOneFeed/index.ts": function(e, t, n) {
			"use strict";
			var s, o, r;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.NavDropdown = "nav", e.LeftRail = "left"
				}(s || (s = {})),
				function(e) {
					e.XhrError = "xhr", e.ParseError = "parse"
				}(o || (o = {})),
				function(e) {
					e.LoggedIn = "loggedin", e.OneFeed = "onefeed", e.Popular = "popular"
				}(r || (r = {}))
		},
		"./src/reddit/models/Sso/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Apple = "https://appleid.apple.com", e.Google = "https://accounts.google.com"
				}(s || (s = {}))
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, n) {
			e.exports = {
				dizzySnoo: "UaNg246yNIpwcq_Uhe6vC",
				container: "EXdERxzjUGqvBK511L1Eq",
				mainContent: "_3dyrEHC8cc6dIOTUPQmv1S",
				title: "_1PdcLVyQbMPVKRikIspqb_",
				subTitle: "_1YhiRkum1oGZUdm5i1mHFJ",
				image: "_1gTZDLeeF0VPQsS6Iz5boy",
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR",
				topImageContainerExp: "_2NU2A-ZU5J-cxP78RF0oeb"
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = "/acknowledgements",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Acknowledgements",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Acknowledgements").then(n.bind(null, "./src/reddit/pages/Acknowledgements/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Acknowledgements/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.r.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = ["/appeal", "/appeals"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Appeal").then(n.bind(null, "./src/reddit/pages/AppealPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.r.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.APPEAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = [a, `${a}/:username`, `${a}/:username/:avatarId`, `${a}/nft/:chainId/:contractAddress/:tokenId`],
				c = {
					action: r.a,
					chunk: o.r.AVATAR,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Avatar").then(n.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Avatar/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Nb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = "/coins",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Coins",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Coins").then(n.bind(null, "./src/reddit/pages/CoinsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsPage/index.tsx"
					}
				}),
				c = {
					action: r.c,
					chunk: o.r.COINS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = "/coins/mobile",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "CoinsMobile",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CoinsMobile").then(n.bind(null, "./src/reddit/pages/CoinsMobilePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsMobilePage/index.tsx"
					}
				}),
				c = {
					action: r.b,
					chunk: o.r.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/featureFlags/profileCollections.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CollectionCommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CollectionCommentsPage/index.tsx"
				}
			});
			let l = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"];
			l = Object(r.a)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: o.r.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: o.Nb.COLLECTION_COMMENTS
					},
					prefetches: [o.r.FRONTPAGE, o.r.COMMENTS_PAGE, o.r.SUBREDDIT]
				},
				m = {
					...u,
					path: l
				},
				p = {
					...u,
					path: d,
					routePredicate: i.a
				},
				b = [m, p];
			t.a = b
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "CommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CommentsPage/index.tsx"
				}
			});
			let c = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"];
			c = Object(r.a)(c);
			const l = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				u = (e, t) => ({
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: o.r.COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [o.r.FRONTPAGE, o.r.SUBREDDIT]
				}),
				m = [u(o.Nb.COMMENTS, c), u(o.Nb.DUPLICATES, l), u(o.Nb.COMMENTS, d)];
			t.a = m
		},
		"./src/reddit/routes/countrySitePage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CountryPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/pages/CountrySitePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CountrySitePage/index.tsx"
					}
				}),
				c = ["/"],
				l = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("CountryPage")]).then(n.bind(null, "./src/reddit/actions/pages/countrySite/index.ts")).then(e => e.internationalSiteHomePageRequested)),
					chunk: o.r.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.INTERNATIONAL_SITE_PAGE
					},
					path: Object(r.a)(c, !1),
					prefetches: [o.r.SUBREDDIT]
				};
			t.a = l
		},
		"./src/reddit/routes/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/econManagement.ts");
			const a = "/econ-management",
				i = "q",
				c = {
					action: r.a,
					chunk: o.r.ECON_MANAGEMENT,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "EconManagement",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("EconManagement").then(n.bind(null, "./src/reddit/pages/EconManagement/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/EconManagement/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Nb.ECON_MANAGEMENT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/routes/econManagement2/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/econManagement2.ts");
			const a = "/econ-management-2",
				i = {
					action: r.a,
					chunk: o.r.ECON_MANAGEMENT_2,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "EconManagement2",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("EconManagement2").then(n.bind(null, "./src/reddit/pages/EconManagement2/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/EconManagement2/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Nb.ECON_MANAGEMENT_2
					},
					path: a
				};
			t.a = i
		},
		"./src/reddit/routes/followers/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/followers",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileFollowersPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileFollowersPage").then(n.bind(null, "./src/reddit/pages/Followers/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Followers/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("ProfileFollowersAction").then(n.bind(null, "./src/reddit/actions/pages/followers/index.ts")).then(e => e.followersPageRequested)),
					chunk: o.r.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.FOLLOWERS
					},
					path: a,
					prefetches: [o.r.PROFILE_OVERVIEW]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/framedGild/index.ts");
			const a = "/framedGild/:thingId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedGildPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.r.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/framedModal/index.ts");
			const a = "/framedModal/:type",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FramedModal").then(n.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedModalPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.r.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object.keys(a.W).map(e => a.W[e]).join("|"),
				u = "/",
				m = `/:sort(${d})?`,
				p = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Frontpage/index.tsx"
					}
				}),
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.r.FRONTPAGE,
					component: p,
					exact: !0,
					prefetches: [a.r.COMMENTS_PAGE, a.r.SUBREDDIT]
				},
				h = {
					...b,
					path: u,
					meta: {
						name: a.Nb.INDEX
					},
					routePredicate: l.Q
				},
				g = {
					...b,
					path: u,
					meta: {
						name: a.Nb.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.Q)(e) && !Object(c.a)(e)
				},
				f = {
					...b,
					path: u,
					meta: {
						name: a.Nb.INDEX
					},
					routePredicate: e => Object(c.a)(e)
				},
				v = {
					...b,
					path: m,
					meta: {
						name: a.Nb.LISTING
					},
					routePredicate: l.Q
				},
				O = {
					...b,
					path: m,
					meta: {
						name: a.Nb.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.Q)(e) && !Object(c.a)(e)
				},
				C = {
					...b,
					path: m,
					meta: {
						name: a.Nb.LISTING
					},
					routePredicate: e => Object(c.a)(e)
				},
				y = [h, g, f, v, O, C];
			t.a = y
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/topic.ts"),
				a = n("./src/reddit/selectors/topic.ts");
			const i = "/label/subreddits",
				c = Object(s.a)({
					resolved: {},
					chunkName: () => "Geotagging",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Geotagging").then(n.bind(null, "./src/reddit/pages/Geotagging/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Geotagging/index.tsx"
					}
				}),
				l = {
					action: e => async (e, t, n) => {
						let s, {
							gqlContext: o
						} = n; {
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							s = await Object(r.fetchTopicPage)(o(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(r.topicFailed)())
						}
						if (!s) return;
						const i = t();
						e(Object(r.topicLoaded)({
							...s,
							key: "tagging",
							meta: i.meta
						}))
					},
					chunk: o.r.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: o.Nb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = l
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "InboxPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("InboxPages").then(n.bind(null, "./src/reddit/pages/RedditEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/RedditEmbed/index.tsx"
					}
				}),
				l = Object.keys(a.S).map(e => a.S[e]).join("|"),
				d = [`/message/:pageName(${l})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.r.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Nb.INBOX_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/meta/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "/community-points/",
				o = "/community-points/documentation/*"
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				l = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/routes/meta/constants.ts");
			const h = {
					action: () => async (e, t) => {
						Object(p.Q)(t()) || await e(Object(l.t)())
					},
					chunk: o.r.META_ARBITRUM_POINTS_MIGRATION_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "reddit-pages-meta-ArbitrumPointsMigrationPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e(0), n.e("reddit-pages-meta-ArbitrumPointsMigrationPage")]).then(n.bind(null, "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Nb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/"]
				},
				g = {
					action: i.a,
					chunk: o.r.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "CommunityPointsLearnMore",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("CommunityPointsLearnMore").then(n.bind(null, "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Nb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [b.b, b.a, "/vault/", "/web/community-points/"]
				},
				f = {
					action: c.a,
					chunk: o.r.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Nb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				v = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.Q)(n()) || await t(Object(l.t)()), s && setTimeout(async () => {
						await t(Object(r.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(d.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, O = {
					action: v,
					chunk: o.r.EMPTY,
					exact: !0,
					meta: {
						name: o.Nb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [h, g, f, O]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModQueuePages/index.tsx"
					}
				}),
				l = Object.keys(a.rb).map(e => a.rb[e]).join("|"),
				d = `/r/mod/about/:pageName(${l})?`,
				u = {
					action: Object(i.a)(() => n.e("ModQueue").then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.r.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Nb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return O
			}));
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/countrySites/index.ts"),
				c = n("./src/lib/loadableAction/index.ts"),
				l = n("./node_modules/react-router/esm/react-router.js");
			const d = Object.keys(a.gc).map(e => a.gc[e]).join("|"),
				u = [a.gc.Awards],
				m = u.join("|"),
				p = e => `${e}about/scheduledposts`,
				b = e => `${e}about/eventposts`,
				h = e => `${e}about/predictions`,
				g = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModHub/index.tsx"
					}
				}),
				f = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"];
			let v = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${d})`, `/user/:profileName/about/:pageName(${m})`, ...f];
			v = Object(i.a)(v);
			const O = e => !!Object(l.h)(e, {
					path: "/r/:subredditName/about"
				}) || !!Object(l.h)(e, {
					path: "/:countryCode([a-z]{2})/r/:subredditName/about"
				}) || !!Object(l.h)(e, {
					path: "/:countryCode([a-z]{2})/:languageCode([a-z]{2})/r/:subredditName/about"
				}),
				C = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: a.r.MODERATION_PAGES,
					component: g,
					exact: !0,
					meta: {
						name: a.Nb.MODERATION_PAGES
					},
					path: v,
					prefetches: [a.r.SUBREDDIT]
				};
			t.a = C
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Multireddit/index.tsx"
					}
				}),
				l = "/me/m/:multiredditName",
				d = Object.keys(a.W).map(e => `${l}/:sort(${a.W[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.W).map(e => `${u}/:sort(${a.W[e]})?`),
				p = [l, u, ...d, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.r.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Nb.MULTIREDDIT
					},
					path: p,
					prefetches: [a.r.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/notifications/",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "NotificationsInbox",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/pages/NotificationsInbox/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/NotificationsInbox/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: o.r.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [o.r.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/draft/:draftId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PostDraft/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: o.r.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.POST_DRAFT
					},
					path: a,
					prefetches: [o.r.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/postSetPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/set/:partialPostSetId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostSetPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("PostSetPage")]).then(n.bind(null, "./src/reddit/pages/PostSetPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PostSetPage/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("PostSetPageAction").then(n.bind(null, "./src/reddit/actions/pages/postSetPage/index.ts")).then(e => e.postSetPageRequested)),
					chunk: o.r.POST_SET_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.POST_SET
					},
					path: a,
					prefetches: [o.r.POST_SET_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/predictions.ts");
			const a = "/predictions",
				i = {
					action: r.a,
					chunk: o.r.PREDICTIONS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Predictions",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Predictions").then(n.bind(null, "./src/reddit/pages/Predictions/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Predictions/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Nb.PREDICTIONS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileComments/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: o.r.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [o.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/about/edit/moderation",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileModeration",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileModSettings/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: o.r.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileOverview/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: o.r.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [o.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/posts",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePosts/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: o.r.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.PROFILE_POSTS
					},
					path: a,
					prefetches: [o.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const l = Object(r.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePrivate/index.tsx"
					}
				}),
				d = Object.keys(c.b).map(e => c.b[e]).join("|"),
				u = [`/user/:profileName/:listingType(${d})`, `/user/:profileName/gilded/:listingType(${c.b.GivenGildings})`],
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.r.PROFILE_PRIVATE,
					component: l,
					exact: !0,
					meta: {
						name: a.Nb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [a.r.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileSnoobuilder/index.tsx"
					}
				}),
				c = "/user/:profileName/snoo",
				l = {
					path: c,
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: o.r.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = l
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PublicAccessNetwork/index.tsx"
					}
				}),
				i = {
					action: Object(r.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: o.r.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: o.Nb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [o.r.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/report",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ReportPage").then(n.bind(null, "./src/reddit/pages/ReportPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ReportPage/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: o.r.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.REPORT
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: o.r.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [o.r.FRONTPAGE, o.r.SUBREDDIT, o.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.dc).map(e => a.dc[e]).join("|"),
				l = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Settings/index.tsx"
						}
					}),
					chunk: a.r.SETTINGS,
					exact: !0,
					meta: {
						name: a.Nb.SETTINGS
					},
					path: `/settings/:page(${c})?`
				}, {
					action: Object(i.a)(() => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/actions/userDataRequest.ts")).then(e => e.userDataRequestPageRequested)),
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "UserDataRequestPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/pages/UserDataRequestPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/UserDataRequestPage/index.tsx"
						}
					}),
					chunk: a.r.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Nb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = ["/subreddits/leaderboard", "/subreddits/leaderboard/:categoryName/"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditLeaderboard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditLeaderboard/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/actions/pages/subredditLeaderboard.ts")).then(e => e.subredditLeaderboardPageRequested)),
					chunk: o.r.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: o.Nb.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [o.r.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/countrySites/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditWiki",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/SubredditWiki/index.tsx"
				}
			});
			let d = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+"];
			d = Object(a.a)(d), d.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(o.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: r.r.EMPTY,
					exact: !0,
					meta: {
						name: r.Nb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: r.r.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: r.Nb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [r.r.SUBREDDIT]
				};
			t.a = [p, b]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/wiki.ts"),
				a = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = n("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const n = t.wikiSubRoute === r.m.Settings,
					s = Object(a.a)(t, Object(i.c)(e) || n),
					c = o.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== s ? (c.pathname = s, o.a.format(c)) : e
			}
		},
		"./src/reddit/routes/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/talk.ts");
			const a = "/talk",
				i = {
					action: r.a,
					chunk: o.r.TALK,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Talk",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Talk").then(n.bind(null, "./src/reddit/pages/Talk/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Talk/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Nb.TALK
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Topic/index.tsx"
					}
				}),
				i = ["/t/:topicSlug"],
				c = {
					path: i,
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: o.r.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: o.Nb.TOPIC
					},
					prefetches: [o.r.COMMENTS_PAGE, o.r.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				l = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				u = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				p = n("./src/reddit/selectors/experiments/index.ts");
			const b = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: p.f,
				experimentName: l.Kd
			}), e => e === l.Od.Enabled);
			var h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = n("./src/reddit/selectors/experiments/magicLink.ts"),
				f = n("./src/reddit/actions/modal.ts"),
				v = n("./src/reddit/selectors/accountManager/modalData.ts"),
				O = n("./src/reddit/selectors/meta.ts");
			const C = Object(a.a)(p.f, O.b, v.a, (e, t, n) => e && "DE" === t && n === f.a.Report),
				y = Object(a.a)(e => Object(m.c)(e, {
					experimentEligibilitySelector: C,
					experimentName: l.ue
				}), e => e === l.De.Enabled);
			var E = n("./src/reddit/selectors/experiments/oneTapAuto/index.ts"),
				x = n("./src/lib/getParsedUserAgent/index.ts");
			const P = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(x.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: l.mf
			}), e => e === l.zf.Enabled);
			var j = n("./src/reddit/selectors/responsiveSettings.ts");
			const _ = Object(a.c)({
					frontpageSignupVariant: u.a,
					magicLinkVariant: g.a,
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: l.pf
					}),
					blockingInterstitialVariant: h.e,
					blockingInterstitialV2Variant: h.f
				}),
				S = Object(a.c)({
					isAmModalDesignUpdateEnabled: d.a,
					isBlockingInterstitialEnabled: h.b,
					isBlockingInterstitialV2Enabled: h.c,
					isGoogleSsoGisEnabled: b,
					isNetzDGComplianceEnabled: y,
					isOneTapAutoEnabled: E.a,
					isSafariOneTapEnabled: P
				}),
				k = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(v.c)(e), v.a, j.a, O.j, _, S, (e, t, n, a, d, u, m, p) => {
					const {
						blockingInterstitialVariant: b,
						blockingInterstitialV2Variant: h,
						frontpageSignupVariant: g,
						ssoLoginLinkVariant: f,
						magicLinkVariant: v
					} = m, {
						isAmModalDesignUpdateEnabled: O,
						isBlockingInterstitialEnabled: C,
						isBlockingInterstitialV2Enabled: y,
						isGoogleSsoGisEnabled: E,
						isNetzDGComplianceEnabled: x,
						isOneTapAutoEnabled: P,
						isSafariOneTapEnabled: j
					} = p;
					let _ = `${r.a.accountManagerOrigin}${e}`;
					if (_ = Object(i.a)(_, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), f && (_ = Object(i.a)(_, {
							[`experiment_${l.pf}`]: f
						})), E && (_ = Object(i.a)(_, {
							[`experiment_${l.Kd}`]: "enabled"
						})), x && (_ = Object(i.a)(_, {
							[`experiment_${l.ue}`]: l.De.Enabled,
							thing_id: n
						})), P && (_ = Object(i.a)(_, {
							[`experiment_${l.lc}`]: "enabled"
						})), _ = Object(i.a)(_, {
							experiment_d2x_onboarding: "enabled"
						}), j && (_ = Object(i.a)(_, {
							[`experiment_${l.mf}`]: "enabled"
						})), C && (_ = Object(i.a)(_, {
							[`experiment_${l.Ob}`]: b
						})), y && (_ = Object(i.a)(_, {
							[`experiment_${l.Pb}`]: h
						})), O && (_ = Object(i.a)(_, {
							[`experiment_${l.xb}`]: "enabled"
						})), g && (_ = Object(i.a)(_, {
							[l.Qc]: g,
							uiMode: t
						})), v && (_ = Object(i.a)(_, {
							[`experiment_${l.ee}`]: v
						})), d && (_ = Object(i.a)(_, {
							mweb_responsive_settings: "treatment"
						})), u) {
						const e = Object(s.isoLocaleToR2Language)(u);
						u !== o.DEFAULT_LOCALE && e && (_ = Object(i.a)(_, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? _ : _ = Object(i.a)(_, {
						actionSource: a
					})
				})
		},
		"./src/reddit/selectors/accountManager/modalData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = e => e.accountManagerModalData.actionSource,
				o = e => e.accountManagerModalData.redirectUrl,
				r = e => e.accountManagerModalData.thingId
		},
		"./src/reddit/selectors/econManagement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/models/EconManagement/index.ts"),
				r = n("./src/reddit/actions/economics/econManagement/constants.ts");
			const a = {
				displayState: o.a.Default,
				currentEntity: null,
				relatedData: {},
				entityTypes: {}
			};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
						return {
							...e, entityTypes: t.payload.reduce((e, t) => ({
								...e,
								[t.typename]: t
							}), {})
						};
					case r.e:
						return {
							...a, entityTypes: e.entityTypes, displayState: o.a.Loading
						};
					case r.d:
						return {
							...a, entityTypes: e.entityTypes, displayState: o.a.Error
						};
					case r.f: {
						const n = t.payload,
							s = n.typename;
						return {
							...e,
							displayState: o.a.Default,
							currentEntity: {
								id: n.entityId || "",
								type: s,
								prefixedId: `${n.typename}:${n.entityId}`,
								details: n
							},
							relatedData: {}
						}
					}
					case r.a: {
						const n = t.payload,
							s = n.type;
						return {
							...e,
							relatedData: {
								...e.relatedData,
								[s]: n.entity
							}
						}
					}
					default:
						return e
				}
			};
			Object(s.a)({
				pages: {
					econManagement: i
				}
			});
			const c = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.currentEntity) || null
				},
				l = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.displayState) || o.a.Default
				},
				d = e => {
					var t, n;
					const s = c(e);
					if (!s) return [];
					const o = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.entityTypes[s.type];
					return o && o.externalRefs || []
				},
				u = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.relatedData[t]
				},
				m = (e, t) => {
					var n, s, o;
					return (null === (o = null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.entityTypes[t]) || void 0 === o ? void 0 : o.actions) || []
				}
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const i = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(s.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), a.a),
				l = e => i.find(t => !!Object(a.a)(c(e, t))),
				d = Object(s.a)(l, e => !!e),
				u = e => {
					const t = l(e);
					return !!t && c(e, t) === o.eb.SkipOnboarding
				},
				m = e => {
					const t = l(e);
					return !!t && c(e, t) === o.eb.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/frontpageSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(l.Z, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(r.A)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: o.Qc,
					throttledVariants: {
						[o.Jd.CurrentThrottled]: o.Qc
					}
				}), i.a),
				m = e => e === o.Jd.CurrentThrottled,
				p = e => e === o.Jd.CurrentThrottled || e === o.Jd.CurrentUnthrottled || e === o.Jd.CurrentUnthrottledCopy || e === o.Jd.NewPopUnthrottledCopy,
				b = e => e === o.Jd.NewPopUnthrottledCopy,
				h = e => e === o.Jd.NewPageUnthrottledCopy || e === o.Jd.NewPageUnthrottledCopyFields,
				g = e => e === o.Jd.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Xd,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(c, e => e === o.ae.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.tc,
					experimentEligibilitySelector: a.e
				}), i.a),
				u = Object(s.a)(d, e => e === o.Mc.Enabled),
				m = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Rb,
					experimentEligibilitySelector: a.e
				}), i.a),
				p = Object(s.a)(m, e => e === o.Yd.ContinuousScroll),
				b = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Sb,
					experimentEligibilitySelector: a.e
				}), i.a),
				h = Object(s.a)(b, e => e === o.Zd.Enabled),
				g = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.cc,
					experimentEligibilitySelector: () => !0
				}), i.a),
				f = Object(s.a)(g, e => e === o.qb.Enabled)
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Vb,
					experimentEligibilitySelector: a.e
				}), e => e === o.gb.Enabled),
				c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Wb,
					experimentEligibilitySelector: a.e
				}), e => e === o.hb.Enabled),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Xb,
					experimentEligibilitySelector: a.e
				}), e => e === o.ib.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Yb,
					experimentEligibilitySelector: a.e
				}), e => e === o.jb.Enabled),
				u = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.ac,
					experimentEligibilitySelector: a.e
				}), e => e === o.lb.Enabled),
				m = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Zb,
					experimentEligibilitySelector: a.e
				}), e => e === o.kb.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
				experimentName: s.te,
				experimentEligibilitySelector: o.a
			}) === s.Ce.Enabled
		},
		"./src/reddit/selectors/experiments/oneTapAuto/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/getParsedUserAgent/index.ts"),
				r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(s.a)(i.f, e => Object(o.g)(e.meta.userAgent), (e, t) => e && !t),
				l = e => (e => Object(a.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: r.lc
				}))(e) === r.zd
		},
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Qe
					}) === s.zd
				},
				i = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Pe
					}) === s.zd
				},
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Ge
					}) === s.zd
				},
				l = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Fe
					}) === s.zd
				}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (e.features.removalReasons.reasonOrder[n]) {
						return e.features.removalReasons.reasonOrder[n].map(t => e.features.removalReasons.models[t])
					}
					return []
				},
				o = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				r = e => e.features.removalReasons.api.pending
		},
		"./src/reddit/selectors/searchFix.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = {},
				i = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState || a
				},
				c = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.subredditName),
				l = Object(s.a)((e, t) => i(t), e => e.fromPage && e.fromPage.routeName),
				d = e => {
					let {
						pageLayer: t
					} = e;
					return t && t.locationState && t.locationState.searchSwitcherType
				},
				u = Object(s.a)(l, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(r.B)(n)
				}, (e, t) => t && (e === o.Nb.COMMENTS || e === o.Nb.SUBREDDIT))
		},
		"./src/reddit/selectors/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/Settings/modalIds.ts"),
				r = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.Eb, e => !(!e || !e.length));
			const c = Object(s.a)(i.C, e => !e),
				l = Object(s.a)(i.Eb, e => e && e.find(e => e === r.a.Apple)),
				d = Object(s.a)(i.Eb, e => !(!e || !e.includes(r.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [o.b, o.d, o.e, o.g, o.p, o.r].includes(e))
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		},
		"./src/redditGQL/operations/ClaimAwardOffer.json": function(e) {
			e.exports = JSON.parse('{"id":"7264b2ee2ded"}')
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"edd5d18f5e93"}')
		},
		"./src/redditGQL/operations/EconAdminPanelQuery.json": function(e) {
			e.exports = JSON.parse('{"id":"d47c78bc4284"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		},
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
		},
		"./src/redditGQL/operations/SearchTypeahead.json": function(e) {
			e.exports = JSON.parse('{"id":"bf81661622b4"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3954b4d4b89c"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePo~5f1ac562", "vendors~Governance~ModListing~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit", "Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241", "PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24", "Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "Chat~Governance~Reddit", "Governance~Reddit~Subreddit", "Governance~Reddit", "Reddit~StandalonePostPage", "AuthorHovercard~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.312d44b739096bfaed6f.js.map