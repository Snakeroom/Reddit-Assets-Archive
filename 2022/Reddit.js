// https://www.redditstatic.com/desktop2x/Reddit.ba8f211b9c09cb55112b.js
// Retrieved at 8/10/2022, 7:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/RedditSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./assets/fonts/redesignIcon2020/redesignFont2020.css": function(e, t, n) {},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e, t) {
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
				return r
			}));
			var s = n("./src/lib/throwDevError.ts");
			const r = e => {
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
				r = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/components/CommentSort/index.tsx"),
				a = n("./src/reddit/constants/elementIds.ts");
			const i = () => {
					r.a.write(() => {
						const e = document.getElementById(a.e);
						e ? Object(s.c)(e, 0) : Object(s.c)(document, 0)
					})
				},
				c = e => {
					r.a.read(() => {
						const t = e ? document.getElementById(a.e) : window,
							n = document.getElementById(o.a);
						if (t && n) {
							const s = e ? n.offsetTop : n.offsetTop - 50;
							r.a.write(() => t.scrollTo({
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
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
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
						return Object(r.a)(Object(o.a)(e, [a.a]), {
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
						Object(r.a)(Object(o.a)(e, [a.a]), {
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
				return ve
			})), n.d(t, "r", (function() {
				return Ce
			})), n.d(t, "p", (function() {
				return Ee
			})), n.d(t, "t", (function() {
				return _e
			})), n.d(t, "w", (function() {
				return Pe
			})), n.d(t, "q", (function() {
				return Se
			})), n.d(t, "v", (function() {
				return we
			})), n.d(t, "o", (function() {
				return Me
			})), n.d(t, "m", (function() {
				return Te
			})), n.d(t, "b", (function() {
				return Re
			})), n.d(t, "c", (function() {
				return Fe
			})), n.d(t, "s", (function() {
				return Ue
			})), n.d(t, "g", (function() {
				return Ge
			})), n.d(t, "h", (function() {
				return Be
			})), n.d(t, "k", (function() {
				return qe
			})), n.d(t, "e", (function() {
				return We
			})), n.d(t, "d", (function() {
				return Ke
			})), n.d(t, "a", (function() {
				return Je
			})), n.d(t, "j", (function() {
				return Xe
			})), n.d(t, "i", (function() {
				return et
			})), n.d(t, "l", (function() {
				return tt
			})), n.d(t, "u", (function() {
				return nt
			})), n.d(t, "n", (function() {
				return st
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
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
				v = n("./src/reddit/constants/adEvents.ts"),
				O = n("./src/reddit/constants/localStorage.ts"),
				y = n("./src/redditGQL/operations/CommentToxicity.json"),
				C = n("./src/lib/makeApiRequest/index.ts"),
				E = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/lib/omitHeaders/index.ts"),
				j = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				_ = n("./src/reddit/constants/headers.ts"),
				P = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = n("./src/reddit/helpers/genericServerError/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				N = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				w = n("./src/reddit/models/PostCreationForm/index.ts"),
				M = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				I = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				T = n("./src/reddit/helpers/graphql/helpers.ts"),
				A = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				R = n("./src/redditGQL/operations/CreateComment.json");
			const L = (e, t, n, s) => {
					let r, o;
					if (s === w.i.MARKDOWN) r = n.text, o = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = j.a.toRichTextJSON(n.rteState).document), o = JSON.stringify({
							document: e
						})
					}
					return Object(E.a)(e, {
						...y,
						variables: {
							subredditName: t,
							markdown: r,
							richText: o
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				D = async (e, t, n, s) => {
					const o = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return n.commentMode === w.i.MARKDOWN ? o.text = n.text : (o.text = null, o.richtext_json = s), Object(C.a)(Object(x.a)(e, [_.a]), {
						method: r.jb.POST,
						endpoint: Object(P.a)(Object(M.a)(Object(I.a)(`${e.apiUrl}/api/comment.json`))),
						data: o
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
				}, F = async (e, t, n, s, r) => {
					const o = s.commentMode === w.i.MARKDOWN,
						a = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: o ? s.text : null,
								richText: o ? null : r
							}
						};
					return Object(E.a)(e, {
						...R,
						variables: {
							input: a
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
				V = n("./src/reddit/helpers/comment/index.ts"),
				Q = n("./src/reddit/helpers/correlationIdTracker.ts"),
				z = n("./src/reddit/helpers/dom/index.ts"),
				K = n("./src/reddit/helpers/localStorage/index.ts"),
				J = n("./src/reddit/helpers/sessionStorage/index.ts"),
				X = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				Y = n("./src/reddit/models/Comment/index.ts"),
				Z = n("./src/reddit/models/PostDraft/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/index.ts"),
				ee = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				te = n("./src/reddit/models/Toast/index.ts"),
				ne = n("./src/reddit/selectors/chatPost.ts"),
				se = n("./src/reddit/selectors/comments.ts"),
				re = n("./src/reddit/selectors/commentSelector.ts"),
				oe = n("./src/reddit/selectors/experiments/chat.ts"),
				ae = n("./src/reddit/constants/experiments.ts"),
				ie = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ce = n("./node_modules/reselect/es/index.js");
			const le = Object(ce.a)(e => Object(ie.c)(e, {
				experimentEligibilitySelector: ie.a,
				experimentName: ae.Mb
			}), e => e === ae.Jd);
			var de = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				ue = n("./src/reddit/selectors/experiments/emailEnablement.ts"),
				me = n("./src/reddit/selectors/platform.ts"),
				pe = n("./src/reddit/selectors/posts.ts"),
				be = n("./src/reddit/selectors/user.ts"),
				he = n("./src/reddit/actions/comment/index.ts"),
				ge = n("./src/reddit/actions/comment/constants.ts");
			const fe = Object(o.a)(ge.m),
				ve = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const r = s();
						if (!!r.features.comments.drafts[n])
							if (Object(be.S)(r) && t) {
								const s = fe({
									hasFocus: t,
									draftKey: n
								});
								e(Object(c.startChangeUsernameFlow)(s))
							} else e(fe({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				Oe = Object(o.a)(ge.K),
				ye = Object(o.a)(ge.G),
				Ce = Object(o.a)(ge.M),
				Ee = Object(o.a)(ge.L),
				xe = Object(o.a)(ge.J),
				je = async (e, t, n, s) => {
					const r = s.ok && s.body,
						o = r && r.comment && r.comment.id;
					await X.f(e, n, t, o)
				}, _e = "Toxicity_Warning__Modal", Pe = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const o = n(),
						a = Object(me.e)(o);
					let i = "";
					a && (i = a.name);
					const {
						formData: c,
						editorMode: l
					} = e;
					if (W.d.enableToxicityWarning(o)) {
						if (!(await L(r(), i, c, l))) return void t(Object(u.i)(_e))
					}
					t(Se(e))
				}, Se = e => async (t, n) => {
					t(Object(u.g)(_e));
					const s = n(),
						r = Object(de.a)(s),
						o = Object(de.c)(s);
					if (!s.user.account && r) {
						const n = Object(V.e)(e.formData),
							s = Object(V.c)(e.formData);
						t(Object(u.k)({
							actionSource: u.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(J.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: s
							},
							isSkipOnboarding: o
						})
					} else t(Ne(e, !1)), Object(ue.a)(s) && t(Object(l.c)("comment"))
				};

			function ke(e, t) {
				return e === w.i.MARKDOWN && le(t)
			}
			const Ne = (e, t, n, o) => {
					let {
						postId: a,
						commentsPageKey: c,
						draftKey: l,
						formData: d,
						editorMode: u,
						disableAutofocus: m,
						isLiveStreaming: b
					} = e;
					return async (e, O, y) => {
						let {
							apiContext: C,
							gqlContext: E
						} = y;
						var x;
						const j = O(),
							_ = Object(ne.d)(j, {
								postId: a
							}) && Object(oe.h)(j),
							P = _ ? Object(V.a)() : l,
							S = Object(re.e)(j, {
								commentId: P
							}),
							k = Object(be.k)(j);
						if (!k) return;
						if (S && !_) return;
						t || e(Oe({
							draftKey: P,
							draft: d,
							commentsPageKey: c,
							optimisticComment: _ ? Object(V.b)({
								temporalId: P,
								draft: d,
								post: Object(pe.G)(j, {
									postId: a
								}),
								author: k,
								subredditId: (null === (x = Object(me.e)(j)) || void 0 === x ? void 0 : x.id) || ""
							}) : void 0
						}));
						const N = k.displayText,
							M = d.commentMode;
						let I;
						if (b) I = await Object(H.i)(C(), a, d, N), e(Object(h.a)({
							streamId: a,
							level: I.body.automuteLevel
						}));
						else {
							const e = t && n ? n : Object(V.e)(d);
							I = ke(M, j) ? await F(E(), a, null, d, e) : await D(C(), a, d, e)
						}
						if (I.ok) {
							let n;
							if (n = I.body, e(Ce({
									...n,
									headCommentId: Object(se.w)(j, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: P
								})), t) {
								const e = Object(me.i)(j);
								Object(i.a)(!!e)
							}
							const s = Object(pe.G)(O(), {
								postId: a
							});
							e(Object(p.z)(s, v.a.CommentSubmitted))
						} else {
							if (I.error && I.error.type === r.Kb) {
								const e = t && o ? o : Object(V.c)(d);
								X.j(j, e, a)
							}
							const n = I.error && I.error.fields && I.error.fields[0] ? I.error.fields[0].msg : s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(xe({
								draftKey: P,
								error: I.error
							})), _ || e(Object(f.f)({
								duration: f.a,
								kind: te.b.Error,
								text: n
							}))
						}
						je(O(), c, u, I).then(() => I.ok && u === w.i.RICH_TEXT ? Object(Q.b)(Q.a.CommentComposer) : void 0), m || Object(g.d)(), t && Object(J.a)()
					}
				},
				we = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const {
						parentCommentId: o,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: d
					} = e, m = n(), p = Object(me.e)(m);
					let b = "";
					if (p && (b = p.name), W.d.enableToxicityWarning(m)) {
						if (!(await L(r(), b, l, d))) return void t(Object(u.i)(_e))
					}
					t(Me({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: o,
						formData: l,
						editorMode: d
					}))
				}, Me = e => async (t, n) => {
					t(Object(u.g)(_e));
					const s = n(),
						r = Object(de.a)(s),
						o = Object(de.c)(s);
					if (!s.user.account && r) {
						const n = Object(V.e)(e.formData),
							s = Object(V.c)(e.formData);
						t(Object(u.k)({
							actionSource: u.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(J.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: s
							},
							isSkipOnboarding: o
						})
					} else t(Ie(e, !1))
				}, Ie = (e, t, n, s) => async (o, a, c) => {
					let {
						apiContext: l,
						gqlContext: d
					} = c;
					var u;
					const {
						parentCommentId: m,
						commentsPageKey: p,
						parentCommentDepth: b,
						draftKey: h,
						formData: f,
						editorMode: v
					} = e, O = a(), y = Object(re.b)(O, {
						commentId: m
					}), C = y && Object(ne.d)(O, {
						postId: y.postId
					}) && Object(oe.h)(O), E = C ? Object(V.a)() : h, x = Object(re.e)(O, {
						commentId: E
					}), j = Object(be.k)(O);
					if (!j) return;
					if (x && !C) return;
					t || o(Oe({
						draftKey: E,
						draft: f,
						commentsPageKey: p,
						optimisticComment: C && y ? Object(V.b)({
							temporalId: E,
							draft: f,
							post: Object(pe.G)(O, {
								postId: y.postId
							}),
							author: j,
							subredditId: (null === (u = Object(me.e)(O)) || void 0 === u ? void 0 : u.id) || "",
							parentId: y.id
						}) : void 0
					})), o(Re({
						parentCommentId: m,
						commentsPageKey: p
					}));
					const _ = f.commentMode,
						P = t && n ? n : Object(V.e)(f);
					let S;
					if ((S = ke(_, O) ? await F(d(), null, m, f, P) : await D(l(), m, f, P)).ok) {
						if (o(Ee({
								...S.body,
								parentCommentId: m,
								commentsPageKey: p,
								draftKey: E,
								depth: b + 1
							})), t) {
							const e = Object(me.i)(O);
							Object(i.a)(!!e)
						}
					} else {
						if (S.error && S.error.type === r.Kb) {
							if (!y) return;
							const e = t && s ? s : Object(V.c)(f);
							X.j(O, e, y.postId, m)
						}
						o(xe({
							draftKey: E,
							error: S.error
						}))
					}
					je(a(), p, v, S), Object(g.d)(), t && Object(J.a)()
				}, Te = () => async e => {
					const t = Object(J.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: s,
								postId: r,
								richTextJSONData: o,
								commentBodyText: a
							},
							isSkipOnboarding: i
						} = t;
						i && e(Object(m.skipOnboardingModal)()), r ? await e(Ne({
							...t.comment,
							postId: r
						}, !0, o, a)) : s && void 0 !== n && await e(Ie({
							...t.comment,
							parentCommentId: s,
							parentCommentDepth: n
						}, !0, o, a))
					}
				}, Ae = Object(o.a)(ge.s), Re = Object(o.a)(ge.r), Le = Object(o.a)(ge.n), De = (Object(o.a)(ge.i), Object(o.a)(ge.o)), Fe = (Object(o.a)(ge.v), (e, t, n) => async (r, o, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === w.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object($.G)(t)) r(De({
						editorMode: e,
						draftKey: n,
						content: c ? $.i : ""
					})), r(Object(b.c)(e));
					else {
						r(Object(b.b)(n));
						const o = await Object(q.a)(i(), e, c ? t : JSON.stringify(t));
						if (o.ok) {
							const t = o.body.output;
							r(Object(b.a)(n)), r(De({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(b.c)(e))
						} else r(Object(b.a)(n)), r(Object(f.f)({
							duration: f.a,
							kind: te.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Ue = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: s
					} = e;
					return async (e, r) => {
						const o = r(),
							i = Object(a.a)(Z.c.replyToComment, n);
						if (!Object(be.Q)(r()) && !Object(de.a)(o)) return e(Object(d.openRegisterModal)()), void e(Object(u.k)({
							actionSource: u.a.Reply,
							redirectUrl: Object(se.m)(r(), {
								commentId: n
							})
						}));
						const l = o.features.comments.replyFormOpen[t],
							m = l && l[n];
						if ((m || l && s) && (Object.keys(l).forEach(n => l[n] && e(Re({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const h = o.user.prefs.commentMode,
							g = Object(z.d)();
						if (g) {
							const e = g.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === w.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => ee.s(e, null)).map(e => ee.l([e])),
									n = ee.s("", null),
									s = ee.l([n]);
								b = {
									document: [ee.c(t), s]
								}
							}
						}
						const f = o.features.comments.drafts[i];
						let v;
						if (v = g ? {
								commentMode: h,
								draftType: Z.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : f || {
								commentMode: h,
								draftType: Z.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(be.S)(o)) {
							const s = Ae({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: i,
								formData: v
							});
							e(Object(c.startChangeUsernameFlow)(s))
						} else e(Ae({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: i,
							formData: v
						}))
					}
				}, Ge = e => async t => {
					t(Object(he.q)(e)), t(We(e))
				}, Be = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Re({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Ue({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(he.q)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, qe = (e, t) => n => n(Le({
					draftKey: e,
					formData: t
				})), He = Object(o.a)(ge.u), We = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: r,
						text: o
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (X.c(i), e(He({
							commentId: t,
							commentsPageKey: s,
							draftKey: r,
							formData: {
								text: o,
								commentMode: n,
								rteState: null,
								draftType: Z.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Ve = Object(o.a)(ge.E), Qe = Object(o.a)(ge.D), ze = Object(o.a)(ge.F), Ke = Object(o.a)(ge.j), Je = Object(o.a)(ge.f), Xe = e => {
					let {
						id: t,
						commentsPageKey: n,
						draftKey: s,
						formData: o
					} = e;
					return async (e, a, i) => {
						let {
							apiContext: c,
							gqlContext: l
						} = i;
						const d = a();
						if (!d.user.account) return;
						e(Ve({
							draftKey: s
						})), X.d(d);
						const u = Object(V.e)(o),
							m = o.commentMode;
						let p;
						if ((p = ke(m, d) ? await (async (e, t, n, s, r) => {
								const o = r === w.i.MARKDOWN,
									a = {
										commentId: t,
										content: {
											markdown: o ? n.text : null,
											richText: o ? null : s
										}
									};
								return Object(E.a)(e, {
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
							})(l(), t, o, u, m) : await (async (e, t, n, s, o) => {
								const a = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return o === w.i.MARKDOWN ? a.text = n.text : (a.text = null, a.richtext_json = s), Object(C.a)(Object(x.a)(e, [_.a]), {
									endpoint: Object(P.a)(Object(I.a)(Object(M.a)(`${e.apiUrl}/api/editusertext`))),
									method: r.jb.POST,
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
							})(c(), t, o, u, m)).ok) {
							const r = p.body;
							e(ze({
								commentId: t,
								commentsPageKey: n,
								draftKey: s
							})), e(Object(he.j)({
								[t]: {
									...r.comment
								}
							}))
						} else e(Qe({
							draftKey: s,
							error: p.error
						}))
					}
				}, Ye = Object(o.a)(ge.B), Ze = Object(o.a)(ge.A), $e = Object(o.a)(ge.C), et = (e, t) => async (n, s, o) => {
					let {
						apiContext: a
					} = o;
					const i = s();
					n(Ye({
						id: e
					})), X.a(e, i);
					const c = await ((e, t) => Object(C.a)(Object(x.a)(e, [_.a]), {
						endpoint: Object(P.a)(`${e.apiUrl}/api/del`),
						method: r.jb.POST,
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
					c.ok ? n($e({
						id: e,
						postId: t
					})) : n(Ze({
						id: e,
						error: c.error
					}))
				}, tt = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(he.j)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(B.s)(r(), e, o)).ok || t(Object(he.j)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, nt = (e, t) => async (n, r, o) => {
					let {
						gqlContext: a
					} = o;
					var i, c, d, u, m, p;
					n(Object(he.c)());
					const b = r(),
						h = e => Object(f.f)(Object(f.e)(e, te.b.Error));
					if (((null === (c = null === (i = b.pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === O.a) n(h(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const o = t === Y.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(he.o)(i)), (await ((e, t) => Object(E.a)(e, {
								...G,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(K.vb)(null !== (m = null === (u = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === u ? void 0 : u.followed) && void 0 !== m ? m : [], null === (p = r().user.account) || void 0 === p ? void 0 : p.id);
							const e = o ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(f.f)({
								kind: te.b.SuccessCommunityGreen,
								text: e
							})), Object(ue.a)(b) && o && n(Object(l.c)("comment_follow"))
						} else n(Object(he.o)(i)), n(h(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function st(e) {
				let {
					commentId: t,
					commentsPageKey: n,
					isLivestreaming: s = !1
				} = e;
				return async (e, r) => {
					const o = r(),
						a = Object(re.b)(o, {
							commentId: t
						});
					if (!a) return;
					e(ye({
						commentId: t,
						commentsPageKey: n
					}));
					const i = {
						commentMode: a.media.rteMode,
						draftType: a.parentId ? Z.c.replyToComment : Z.c.replyToPost,
						rtJson: a.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (a.parentId) {
						const t = Object(re.b)(o, {
								commentId: a.parentId
							}),
							s = Object(se.j)(o, {
								commentId: a.parentId,
								commentLink: void 0,
								commentsPageKey: n
							});
						if (!t || null === s) return;
						await e(Me({
							commentsPageKey: n,
							draftKey: a.id,
							parentCommentDepth: s,
							parentCommentId: t.id,
							formData: i,
							editorMode: a.media.rteMode
						}))
					} else await e(Se({
						postId: a.postId,
						commentsPageKey: n,
						draftKey: a.id,
						formData: i,
						editorMode: a.media.rteMode,
						disableAutofocus: !0,
						isLiveStreaming: s
					}))
				}
			}
		},
		"./src/reddit/actions/economics/econManagement/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_SUCCESS",
				r = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_FAILED",
				o = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_STARTED",
				a = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_SUCCESS",
				i = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_FAILED",
				c = "ECON_MANAGEMENT_FETCH_ASSOCIATED_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "e", (function() {
				return S
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/makeRequest/index.ts"),
				c = n("./src/redditGQL/operations/EconAdminPanelQuery.json"),
				l = n("./src/redditGQL/operations/GiveCoins.json"),
				d = n("./src/redditGQL/operations/PerformEconAdminAction.json"),
				u = n("./src/redditGQL/operations/RemoveCoins.json");
			var m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/routes/econManagement/index.ts"),
				b = n("./src/reddit/selectors/econManagement.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const g = Object(s.a)(r.c),
				f = Object(s.a)(r.b),
				v = Object(s.a)(r.e),
				O = Object(s.a)(r.f),
				y = Object(s.a)(r.d),
				C = Object(s.a)(r.a),
				E = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const r = t(),
						i = Object(h.k)(r);
					if (i && i.isEmployee) try {
						const t = await (async e => {
							const t = await Object(a.a)(e, {
								...c,
								variables: {
									query: "",
									queryName: "getEntityTypes"
								}
							});
							if (!t.ok) throw new Error("Unable to update the preferred achievement flair");
							const n = t.body.data.econAdminPanel.response;
							return JSON.parse(n)
						})(s());
						e(g(t))
					} catch (l) {
						e(f()), e(Object(o.f)({
							duration: o.a,
							kind: m.b.Error,
							text: l.message
						}))
					}
				}, x = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const i = n(),
						l = Object(h.k)(i);
					if (l && l.isEmployee) {
						if ("undefined" != typeof window) {
							const t = `?${p.b}=${e}`;
							window.history.pushState({
								path: t
							}, "", t)
						}
						t(v());
						try {
							const n = await (async (e, t) => {
								const n = await Object(a.a)(e, {
									...c,
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
							})(r(), e);
							t(O(n))
						} catch (d) {
							t(y()), t(Object(o.f)({
								duration: o.a,
								kind: m.b.Error,
								text: d.message
							}))
						}
					}
				}, j = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const i = n(),
						l = Object(h.k)(i);
					if (!l || !l.isEmployee) return;
					const d = Object(b.b)(i);
					if (d) try {
						const n = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...c,
								variables: {
									query: JSON.stringify({
										contextEntityRef: t,
										entityType: n
									}),
									queryName: "getEntitiesBelongingTo"
								}
							});
							if (!s.ok) throw new Error(`Unable to fetch ${n} data for ${t}`);
							const r = s.body.data.econAdminPanel.response;
							return JSON.parse(r)
						})(r(), d.prefixedId, e);
						t(C({
							entity: n,
							type: e
						}))
					} catch (u) {
						t(Object(o.f)({
							duration: o.a,
							kind: m.b.Error,
							text: u.message
						}))
					}
				}, _ = (e, t, n) => async (s, r, i) => {
					let {
						gqlContext: c
					} = i;
					var l;
					const u = r(),
						g = Object(h.k)(u);
					if (g && g.isEmployee && Object(b.b)(u)) try {
						await (async (e, t, n, s) => {
							const r = s ? {
								params: s
							} : {};
							if (!(await Object(a.a)(e, {
									...d,
									variables: {
										input: {
											name: n,
											args: JSON.stringify({
												entityRef: t,
												...r
											})
										}
									}
								})).ok) throw new Error(`Unable to perform ${n} on ${t} with ${JSON.stringify(r)}`)
						})(c(), e, t, n), s(Object(o.f)({
							duration: o.a,
							kind: m.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}));
						const r = null === (l = u.platform.currentPage) || void 0 === l ? void 0 : l.queryParams[p.b];
						r && s(x(r))
					} catch (f) {
						s(Object(o.f)({
							duration: o.a,
							kind: m.b.Error,
							text: f.message
						}))
					}
				}, P = (e, t) => async (n, s, r) => {
					let {
						gqlContext: c
					} = r;
					const d = s(),
						u = Object(h.k)(d);
					if (u && u.isEmployee) try {
						const s = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...l,
								variables: {
									input: {
										redditorId: t,
										amount: n
									}
								}
							});
							if (!Object(i.c)(s)) throw new Error(`Could not give ${n} coins to ${t}`);
							return s.body.data.giveCoins
						})(c(), e, t);
						n(Object(o.f)({
							duration: o.a,
							kind: m.b.SuccessAward,
							text: `Gave ${t} coins to ${e}. New balance: ${s.newBalance}.`
						}))
					} catch (p) {
						n(Object(o.f)({
							duration: o.a,
							kind: m.b.Error,
							text: p.message
						}))
					}
				}, S = (e, t) => async (n, s, r) => {
					let {
						gqlContext: c
					} = r;
					const l = s(),
						d = Object(h.k)(l);
					if (d && d.isEmployee) try {
						const s = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...u,
								variables: {
									input: {
										redditorId: t,
										amount: n
									}
								}
							});
							if (!Object(i.c)(s)) throw new Error(`Could not remove ${n} coins from ${t}`);
							return s.body.data.removeCoins
						})(c(), e, t);
						n(Object(o.f)({
							duration: o.a,
							kind: m.b.SuccessAward,
							text: `Removed ${t} coins from ${e}. New balance: ${s.newBalance}.`
						}))
					} catch (p) {
						n(Object(o.f)({
							duration: o.a,
							kind: m.b.Error,
							text: p.message
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
				r = n("./src/lib/makeRequest/index.ts"),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(i.a)(c.a),
				d = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						d = n();
					if (!d.economics.me.fetched || i && !d.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(r(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(d());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(r.b)({
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
				r = n.n(s),
				o = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = r()(d.c),
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
					e(Object(o.g)(l.h))
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
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/EmailSettings/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, r) => {
				let {
					apiContext: o
				} = r;
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
				const d = await ((e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					method: r.jb.POST,
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
				r = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(o.d)(o.a.GildingFlow),
					thingId: c
				})), Object(a.Q)(i) || await t(r.t());
				const l = n();
				if (!Object(a.Q)(l)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const o = e => async (e, t) => {
				const n = t();
				Object(r.Q)(n) || await e(s.t());
				const o = t();
				if (!Object(r.Q)(o)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/env/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				l = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: l.a
				}
			});
			const d = Object(r.a)(i.s);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, n) => {
				let {
					gqlContext: r
				} = n;
				try {
					const t = await Object(a.b)(r());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(d(n))
					}
				} catch (i) {
					Object(s.b)() || console.error(i), o.c.withScope(e => {
						var t, n;
						e.setExtra("response", i.response), e.setExtra("status", null === (t = i.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = i.response) || void 0 === n ? void 0 : n.error), o.c.captureException(i)
					})
				}
			}
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.a)()
				})), await e(Object(o.t)()), Object(a.Q)(t()) || e(Object(i.openLoginModal)())
			}
		},
		"./src/reddit/actions/pages/econManagement.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/actions/economics/econManagement/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.t)());
				const n = t(),
					l = Object(c.Q)(n),
					d = Object(c.N)(n);
				l && d || await e(Object(s.c)("/")), e(Object(o.m)({
					title: "Econ control panel"
				})), await e(Object(r.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/econManagement2.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			n("./src/reddit/actions/economics/econManagement/index.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.t)());
				const n = t(),
					l = Object(c.Q)(n),
					d = Object(c.N)(n);
				l && d || await e(Object(r.c)("/")), e(Object(o.m)({
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
				r = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.d)()
				})), Object(i.Q)(t()) || await e(Object(a.t)()), await e(Object(r.b)()).then(() => {
					if (t().economics.me.data) return e(Object(r.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/noGasPage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(s.h)()
				}))
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				r = n("./src/reddit/actions/economics/helpers/async.ts"),
				o = n("./src/reddit/actions/pages/subreddit.ts"),
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
						n.push(e(Object(o.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.G)(t(), l);
						await e(Object(r.a)({
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
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(r.m)({
					title: Object(s.j)()
				})), await e(Object(a.t)()), Object(i.Q)(t()) && await e(Object(o.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(r.m)({
					title: Object(s.p)()
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
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(r.a)(m.G),
				b = Object(r.a)(m.p),
				h = Object(r.a)(m.Q),
				g = (e, t, n) => async (r, i, g) => {
					let {
						apiContext: v
					} = g;
					c.m(i(), t);
					const O = t === l.i.MARKDOWN,
						y = t === l.i.RICH_TEXT,
						C = m.k;
					if (O && Object(d.G)(n)) return r(h({
						editorKey: e,
						editorMode: l.i.MARKDOWN,
						content: ""
					})), void r(f(t));
					if (y && !n) return r(h({
						editorKey: e,
						editorMode: l.i.RICH_TEXT,
						content: d.i
					})), void r(f(t));
					r(p(C));
					const E = await Object(a.a)(v(), t, O ? JSON.stringify(n) : n);
					E.ok ? (r(b(C)), r(h({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), r(f(t))) : (r(b(C)), r(Object(o.f)({
						duration: o.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, f = e => async (t, n) => {
					const r = Object(i.l)();
					if (r >= 3) return;
					const a = n().user.prefs.useMarkdown ? l.i.MARKDOWN : l.i.RICH_TEXT;
					if (e === a) return;
					const c = e === l.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(o.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(i.sb)(r + 1)
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
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(s.a)(o.r),
				i = Object(s.a)(o.F),
				c = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const c = await Object(r.a)(o(), e);
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
				r = n("./src/reddit/actions/comment/authoring.ts"),
				o = n("./src/reddit/actions/modal.ts"),
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
						y = v.shortcuts.activeCommentId,
						C = Object(h.c)(v),
						E = Object(m.b)(v),
						x = Object(u.a)(v),
						j = [o.a.NsfwBlockingModal].includes(x),
						_ = [i.a.NSFW_BLOCKING_MODAL_V2].includes(E),
						P = j || _;
					if (O && "true" === O.contentEditable && y && C) n(r.b({
						parentCommentId: y,
						commentsPageKey: C
					})), Object(h.a)(y);
					else if (E && !P) Object(h.b)(c.b), n(Object(o.i)(E));
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
				close: "_14dkERGUnSwisNWFcFX-0T",
				mModalUpdate: "_65PqClMblfoNGy-m9_49f"
			}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/actions/nsfwBlocking/async.tsx"),
				h = n("./src/reddit/actions/preferences.ts"),
				g = n("./src/lib/makeActionCreator/index.ts"),
				f = n("./src/reddit/actions/sso/constants.ts");
			const v = Object(g.a)(f.a),
				O = Object(g.a)(f.b);
			var y = n("./src/reddit/actions/survey/index.ts"),
				C = n("./src/reddit/actions/toaster.ts"),
				E = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/accountManager.ts"),
				j = n("./src/reddit/constants/history.ts"),
				_ = n("./src/reddit/constants/modals.ts"),
				P = n("./src/reddit/constants/parameters.ts"),
				S = n("./src/reddit/helpers/counters/amModalDesignUpdate.ts"),
				k = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				N = n("./src/reddit/helpers/history/index.ts"),
				w = n("./src/reddit/helpers/sessionStorage/index.ts"),
				M = n("./src/reddit/helpers/trackers/blockingInterstitial.ts"),
				I = n("./src/reddit/helpers/trackers/onboarding.ts"),
				T = n("./src/reddit/icons/svgs/Close/index.tsx"),
				A = n("./src/reddit/models/Sso/index.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/selectors/accountManager/index.ts"),
				D = n("./src/reddit/selectors/accountManager/modalData.ts"),
				F = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				U = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				G = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				B = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				q = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				H = n("./src/reddit/selectors/experiments/oneTapAuto/index.ts"),
				W = n("./src/reddit/selectors/experiments/survey.ts"),
				V = n("./src/reddit/selectors/telemetry.ts"),
				Q = n("./src/reddit/selectors/user.ts"),
				z = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				K = n.n(z);
			const J = m.a.iframe("IFrame", K.a),
				X = m.a.button("CloseButton", K.a),
				Y = m.a.wrapped(T.a, "Close", K.a),
				Z = Object(c.c)({
					accountManagerSrc: L.a,
					actionSource: D.a,
					frontpageSignupVariant: G.a,
					isAmModalDesignUpdateEnabled: U.a,
					isBlockingInterstitialEnabled: B.b,
					isBlockingInterstitialV2Enabled: B.c,
					isBlurredPreview: q.b,
					isCommentBeforeSignUpEnabled: F.a,
					isDismissSurveyEnabled: W.a,
					isHardBlockingInterstitialEnabled: B.d,
					isLoggedIn: Q.Q,
					isOneTapAutoEnabled: H.a,
					isRegularOnboardingEnabled: F.b,
					redirectUrl: D.b
				}),
				$ = Object(i.b)(Z, (e, t) => ({
					onDismissSignupTrigger: () => e(Object(y.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(V.n)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(k.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(h.A)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(v({
							linkedIdentity: n
						})), e(Object(p.g)(s)), e(Object(C.f)(Object(C.e)(t, R.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(O({
							linkedIdentity: n
						})), e(Object(p.g)(s)), e(Object(C.f)(Object(C.e)(t, R.b.SuccessCommunity)))
					},
					openNsfwModal: () => e(Object(b.a)()),
					showToast: (t, n) => {
						e(Object(C.f)(Object(C.e)(t, n)))
					}
				})),
				ee = e => {
					let {
						data: t,
						origin: n
					} = e;
					return t && t.success && (t.type === x.a.ChangePassword || t.type === x.a.Close || t.type === x.a.CreateAccount || t.type === x.a.GoogleOneTapDisplayed || t.type === x.a.GoogleOneTapFlowFailed || t.type === x.a.GoogleOneTapSkipped || t.type === x.a.Login || t.type === x.a.PreferenceStatus || t.type === x.a.Register || t.type === x.a.Resize || t.type === x.a.ShowStep || t.type === x.a.SSOLinkFail || t.type === x.a.SSOLinkSuccess || t.type === x.a.SSOUnlinkFail || t.type === x.a.SSOUnlinkSuccess || t.type === x.a.Subscribe || t.type === x.a.TwoFactorChanged) && n === s.a.accountManagerOrigin
				},
				te = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class ne extends a.a.Component {
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
						const t = e === A.a.Apple ? _.a.LINK_APPLE_SSO : _.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(r.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === A.a.Apple ? _.a.UNLINK_APPLE_SSO : _.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(r.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.setIframeStyles = e => {
						this.setState(t => ({
							iframeStyles: {
								...t.iframeStyles,
								...e
							}
						}))
					}, this.isOneTapSession = () => this.props.path === x.c.GoogleOneTap && this.props.isOneTapAutoEnabled, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && ee(e))
							if (t.type === x.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === x.a.Close) this.closedByUser();
						else if (t.type === x.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === x.a.Login) this.onLogIn();
						else if (t.type === x.a.ChangePassword) this.onChangePassword();
						else if (t.type === x.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === x.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === x.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === x.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === x.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === x.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === x.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === x.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === x.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === x.a.ShowStep ? this.onShowStep(t.step) : t.type === x.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp()
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(w.a)(), this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(N.a)(j.b.JustLoggedIn, !0), this.isOneTapSession() ? this.redirectTo(window.location.href) : window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = () => {
						const {
							redirectUrl: e
						} = this.props;
						let t = "";
						t = e || window.location.href, this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.props.isCommentBeforeSignUpEnabled && this.props.actionSource !== p.a.Reply && Object(w.a)(), this.redirectTo(t, !0)
					}, this.onShowStep = e => {
						this.currentStep = e, e === x.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || r.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), R.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(r.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), R.b.SuccessCommunity) : this.props.showToast(r.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), R.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = function(t) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						const s = {
							[P.n]: "true"
						};
						n && (e.props.isCommentBeforeSignUpEnabled ? e.props.isRegularOnboardingEnabled && (s[P.w] = "true") : s[P.w] = "true"), e.isSignupModalSuccessful && (s[P.x] = "true"), e.isOneTapSession() && (s[P.o] = "true"), window.location.replace(Object(d.a)(t, s))
					}, this.closedByUser = () => {
						const {
							actionSource: e,
							isBlockingInterstitialEnabled: t,
							isBlockingInterstitialV2Enabled: n,
							isBlurredPreview: s,
							isCommentBeforeSignUpEnabled: r,
							isDismissSurveyEnabled: o,
							onDismissSignupTrigger: a,
							openNsfwModal: i,
							sendEvent: c
						} = this.props;
						if (this.currentStep) {
							const e = te[this.currentStep];
							e && c(Object(I.w)(e))
						}
						s && e === p.a.NsfwBlockingModal && i(), this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), (t || n) && e !== p.a.NsfwBlockingModal && c(Object(M.a)()), r && Object(w.a)(), this.close(), this.isSignupModalDismissed && o && a()
					}, this.close = () => {
						this.props.onClose && this.props.onClose(), this.props.isAmModalDesignUpdateEnabled && Object(S.b)(S.a.Dismiss);
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
						return e && p.l.includes(e)
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
					}, s && s(this.iframeRef), t && t(this.iframeRef.current)), this.props.isBlurredPreview && this.props.actionSource === p.a.NsfwBlockingModal && Object(l.a)(), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === x.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
						height: void 0,
						visibility: void 0,
						width: void 0
					})
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage), this.props.isBlurredPreview && this.props.actionSource === p.a.NsfwBlockingModal && Object(l.b)()
				}
				render() {
					const {
						accountManagerSrc: e,
						actionSource: t,
						className: n,
						isAmModalDesignUpdateEnabled: s,
						isHardBlockingInterstitialEnabled: r,
						path: o
					} = this.props, {
						iframeStyles: i
					} = this.state, c = (o === x.c.Index || o === x.c.Register) && (t === p.a.UserProfile || t === p.a.FeedPost || t === p.a.Comments || t === p.a.FeedScroll || t === p.a.CommentsScroll) && r, l = this.props.showCloseButton && !c;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(J, {
						className: n,
						innerRef: this.iframeRef,
						src: e,
						style: i,
						onLoad: this.onIFrameLoad
					}), l && a.a.createElement(X, {
						onClick: this.closedByUser
					}, a.a.createElement(Y, {
						className: Object(u.a)({
							[K.a.mModalUpdate]: s
						})
					})))
				}
			}
			t.a = $(Object(E.c)(ne))
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
				mModalUpdate: "_13CJU7HQst3ucS6l2fTwdh",
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
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class l extends r.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: r,
							dialogId: o
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (o && r(), !1)
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
					return r.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(o.b)(null, (e, t) => ({
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
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PremiumPurchaseModal"), n.e("CoinPurchaseModal")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: d
				});
			Object(c.b)(l.a.ECON_COIN_PURCHASE, e => r.a.createElement(u, {
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			const O = (e, t) => async (n, r, o) => {
				let {
					apiContext: a
				} = o;
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
					const r = t ? s.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : s.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(b.f({
						id: d,
						kind: v.b.SuccessCommunityGreen,
						text: r
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
			var y = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				C = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				x = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				P = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				k = n("./src/reddit/helpers/path/index.ts"),
				N = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const w = (e, t, n, s, r) => o => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(N.y)(o, void 0, {
						oldSort: n,
						sort: s,
						source: r
					}),
					userSubreddit: Object(N.sb)(o)
				}),
				M = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				I = e => ({
					subreddit: Object(N.ib)(e),
					userSubreddit: Object(N.sb)(e)
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
			const V = Object(x.a)(_.a),
				Q = e => e === W.a.First ? s.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === W.a.Last ? s.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : s.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class z extends o.a.Component {
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
						selectedSort: r
					} = this.props;
					return o.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, o.a.createElement(P.b, {
						className: Object(c.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${Q(r)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), o.a.createElement(A.b, {
						className: H.a.DropdownTriangle,
						onClick: n
					}), o.a.createElement(V, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, o.a.createElement(P.b, {
						displayText: Q(W.a.First),
						isSelected: r === W.a.First,
						onClick: this.onDropdownClickFirst
					}), o.a.createElement(P.b, {
						displayText: Q(W.a.Last),
						isSelected: r === W.a.Last,
						onClick: this.onDropdownClickLast
					}), o.a.createElement(P.b, {
						displayText: Q(W.a.None),
						isSelected: r === W.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var K = z;
			const J = "CommentSort--SortPicker",
				X = "CommentSort--HighlightPicker",
				Y = "CommentSort--Tooltip",
				Z = Object(x.a)(_.a),
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
							r = !!Object(F.m)(e, {
								postId: n
							}),
							o = Object(U.G)(e, {
								postId: n
							});
						return (r || s) && !!o && !!o.previousVisits && o.previousVisits.length > 0
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
			class te extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, s) => this.props.sendEvent(w(e, this.props.isOverlay, t, n, s)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(M("dropdown", "click"))
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
						contestModeModalIsOpen: r,
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
						showTooltip: j,
						toggleContestModeModal: _
					} = this.props, N = h.contestMode, w = !b.search.includes(l.t.CONFIDENCE), I = O === l.t.CONFIDENCE && w, T = m && !I, L = l.v[O], D = L ? L() : "", F = x && O === x && !I ? this.addSuggestedLabel(D) : D, U = N ? s.fbt._("End contest mode?", null, {
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
					return o.a.createElement("div", {
						className: Object(c.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !v && q
						}),
						ref: i
					}, o.a.createElement("div", {
						className: H.a.containerRow
					}, !q && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: H.a.DropdownContainer
					}, o.a.createElement(P.b, {
						className: Object(c.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Sort by",null,{hk:"E6T9r"})}: ${F}`,
						id: J,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), o.a.createElement(A.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), o.a.createElement(Z, {
						isOpen: a,
						tooltipId: J
					}, [l.t.CONFIDENCE, l.t.TOP, l.t.NEW, l.t.CONTROVERSIAL, l.t.OLD, l.t.QA].map(e => {
						const t = n || g,
							s = Object(k.b)(t),
							r = l.v[e],
							a = r ? r() : "";
						return o.a.createElement(E.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${s}?sort=${e}`
						}, o.a.createElement(P.b, {
							displayText: a,
							isSelected: O === e,
							skipRoleAttr: !0
						}))
					}))), T && !q && (x ? o.a.createElement("button", {
						className: H.a.SortLink,
						onClick: O !== x ? this.setSortOnClick : this.clearSortOnClick
					}, O !== x ? s.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : s.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : o.a.createElement("button", {
						className: H.a.SetSort
					}, o.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, s.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), o.a.createElement("span", {
						id: Y,
						onMouseEnter: j,
						onMouseLeave: d
					}, o.a.createElement(C.c, {
						className: H.a.Tooltip,
						text: s.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Y
					}), o.a.createElement(R.a, {
						className: H.a.Info
					})))), m && o.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, s.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), o.a.createElement(S.a, {
						className: H.a.ToggleSwitch,
						on: N
					}))), v && o.a.createElement("div", {
						className: H.a.containerRow
					}, o.a.createElement(K, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: X,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: M
					})), r && o.a.createElement(y.a, {
						actionText: G,
						headerText: U,
						modalText: B,
						onConfirm: this.setContestMode,
						toggleModal: _,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(j.c)(te))
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
				return r.a.createElement(i.a, d({}, n, {
					className: Object(o.a)(l.a.horizontalVotes, t),
					scoreClassName: Object(o.a)(l.a.customScoreStyles, n.scoreClassName),
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => o.a.createElement(c, {
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = () => Promise.all([n.e(0), n.e(1), n.e(3), n.e("vendors~MarketplaceClaimModal~MarketplaceInFeedUnit"), n.e("MarketplaceClaimModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx")),
				l = Object(s.a)(c, {
					ssr: !1
				});
			Object(a.b)(i.a.ECON_MARKETPLACE_CLAIM, e => o.a.createElement(l, {
				onClose: e
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => o.a.createElement(d, {
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
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = () => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				d = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(l).then(e => e.default)
				});
			Object(i.b)(c.a.ECON_POWERUPS_MARKETING, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Promise.all([n.e("EconPowerupsPurchaseModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})]),
				u = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e[0].default)
				});
			Object(c.b)(l.a.ECON_POWERUPS_PURCHASE, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_POWERUPS_SUCCESS, () => o.a.createElement(d, {
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CANCEL_PREDICTION, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_OUTCOME, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_PREMIUM_UPSELL, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EditCommunityDescriptionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.EDIT_DESCRIPTION_MODAL, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
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
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				r = () => null;

			function o(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function a(e) {
				return e && e in s ? s[e] : r
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
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				y = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(l.a)(y(e => {
				const {
					award: t,
					awardIcon: n,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const o = r.fbt._("Animation of {award name} image", [r.fbt._param("award name", t.name)], {
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
					alt: o,
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
		"./src/reddit/components/Governance/GasFeesEducationalModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-GasFeesEducationalModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-GasFeesEducationalModal").then(n.bind(null, "./src/reddit/components/Governance/GasFeesEducationalModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/GasFeesEducationalModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CRYPTO_GAS_FEES_EDUCATION, e => o.a.createElement(c, {
				withOverlay: !0,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.GOVERNANCE_MAINNET_LAUNCH, e => o.a.createElement(c, {
				ignoreDefaultFocus: !0,
				withOverlay: !0,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.CRYPTO_BURN_POINTS, e => o.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.CONVERT_TO_COINS, e => o.a.createElement(c, null))
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
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n.n(r),
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
				y = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				x = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				j = n.n(x);
			const _ = Object(s.a)({
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
				P = Object(f.a)(),
				S = Object(l.c)({
					activeSaleConfig: C.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(P)(e),
					isFreeAwardEventEnabled: C.g
				}),
				k = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === P ? Object(m.i)() : Object(m.f)({
							tooltipId: P
						}))
					}
				}),
				N = Object(c.b)(S, k);
			class w extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: r,
							sendEvent: o,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(v.d)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : r ? p.a.StorefrontFreeAward : void 0;
							o(Object(O.d)("get_coins_cta", e))
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
					return e ? e.ctaText || r.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : t ? r.fbt._("Free", null, {
						hk: "2qYM7h"
					}) : r.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					})
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: s,
						isFreeAwardEventEnabled: r
					} = this.props, o = this.getButtonText(), a = !!e || r, c = Object(d.a)(j.a.icon, {
						[j.a.special]: a
					});
					return i.a.createElement("button", {
						className: Object(d.a)(t, j.a.ctaContainer, {
							[j.a.special]: a
						}),
						id: P,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(d.a)(j.a.ctaContent, {
							[j.a.special]: a
						})
					}, i.a.createElement(y.a, {
						name: "coins",
						className: c
					}), i.a.createElement("span", {
						className: j.a.text
					}, o)), s && i.a.createElement(_, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: r,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: P
					}))
				}
			}
			t.a = N(Object(g.c)(w))
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
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
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
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, n) {
			e.exports = {
				caretDown: "_3CG2U_hX3HI-ibl5v2RCq1",
				container: "_3jiriKeNer8y0-1r6oWIFM",
				mOpen: "_24x5wRDxU1y38uXQXvLE4m",
				mNotPinned: "_3rS8YTDjcT7fs0k9W4rxDG",
				mPinned: "_3NgME2HFZvM-tgAE3s5hXS",
				containerExp: "_11HXvp3b_PzyK6RcoEr4bJ",
				containerText: "_1GieMuLljOrqnVpRAwz7VP",
				defaultIcon: "eZQ5o2PrhR59wkAtPbxMU",
				customFeedIcon: "_1r2uMQFZw5Hg53NkK6rsKv",
				icon: "_1jKtP65jnxLmoGCSqxAgkZ",
				subredditIcon: "_3fvJBCH6c6P0NvMwoqK9MJ",
				unknownIcon: "_1hCoGzhwFdfF2vGbt8IjSy",
				userIcon: "E6V2eHU4CpJuLWzneTk0Z",
				coinIcon: "JisrPypso_3RK4iDgDdke",
				modQueueIcon: "_2L4XuYlbElLC5REx1XpdG_",
				premiumIcon: "_2ulegyMhoTE_WCFyBC-IBx",
				publicAccessNetworkIcon: "_3jFEC4X3IL9Zr-pzUzyCp7",
				itemModQueue: "_1VemFsujoJ-6RR82VRSPeM",
				listContainer: "TMMvbwyeh9yuHKmQWHrE3",
				paddingBottom: "_2C3hDQLC8D1ZRSBAx93g1c",
				multiPlusButton: "_3mvXSuBIpYAdAsBJSB-1G5",
				multiPlusIcon: "_2T11xMsmkdwP6G_mY6eUBW",
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				selector: "h-jI8r2f9ozTNqu_2TBeY"
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
				r = n("./src/config.ts"),
				o = n("./src/lib/pubsub/index.ts"),
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
					let t, n, o, i, m, {
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
					return d(p) ? (t = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : l(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = a.c[a.b.All]) : c(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, o = u(""), i = b.displayText, m = b.url, O = h && h.subscribersCount, v = h && h.currentlyViewingCount), {
						snooBackground: o,
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
				p = new o.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				g = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InboxTooltip/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(d);
			const m = Object(r.createContext)(null),
				p = Object(r.createContext)(null);
			class b extends o.a.Component {
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
					return o.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				g = o.a.memo(() => {
					const [e, t] = Object(r.useState)("-500px"), n = Object(r.useContext)(c.a);
					return o.a.createElement(m.Consumer, null, r => r && o.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(l.t, {
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
							r.focus(), r.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				f = o.a.memo(() => o.a.createElement(p.Consumer, null, e => o.a.createElement("div", {
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				y = n("./src/reddit/constants/colors.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/helpers/postCollection.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				j = n("./src/reddit/icons/svgs/Subreddit/index.tsx"),
				_ = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				k = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/selectors/telemetry.ts"),
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
						const r = s || Object(N.n)(e, {
							page: n
						});
						return (null == r ? void 0 : r.belongsTo) ? Object(w.N)(e, {
							identifier: r.belongsTo
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
						const r = n && Object(N.n)(e, {
							page: n
						}) || s;
						return !!r && Object(k.g)(e, {
							post: r
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
						toggleVote: (t, n) => e(n === P.a.upvoted ? Object(u.kb)(t) : Object(u.w)(t))
					}
				}, (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const r = e.post || n.post;
						r && t.toggleVote(r.id, s)
					}
				})),
				D = {
					[_.o.GIFVIDEO]: d.a.gif_post,
					[_.o.IMAGE]: d.a.image_post,
					[_.o.TEXT]: d.a.text_post,
					[_.o.RTJSON]: d.a.text_post,
					[_.o.VIDEO]: d.a.video_post,
					[_.o.EMBED]: d.a.embed,
					[_.o.LIVEVIDEO]: d.a.video_live,
					[_.o.GALLERY]: d.a.media_gallery,
					[_.o.LIVEAUDIO]: d.a.audio
				},
				F = e => D[(null == e ? void 0 : e.media) ? e.media.type : _.o.EMBED];
			class U extends o.a.Component {
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
								noun: (null == t ? void 0 : t.name) && Object(w.hb)(e, {
									identifier: {
										name: t.name,
										type: "subreddit"
									}
								}) ? "subscribe" : "unsubscribe",
								post: n ? M.J(e, n.id) : void 0,
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
					} = this.props, h = F(d), O = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Nb.META_MEMBERSHIP_PAYWALL_PAGE, C = d ? I.a : function(e) {
						let {
							children: t,
							postId: n
						} = e;
						return t
					};
					return o.a.createElement("div", {
						className: Object(c.a)(A.a.container, t, {
							[A.a.isCollection]: d && Object(E.a)(d),
							[A.a.adaptive]: u
						})
					}, o.a.createElement(C, {
						postId: null == d ? void 0 : d.id
					}, o.a.createElement("div", {
						className: A.a.postDetails
					}, d && o.a.createElement(r.Fragment, null, m && !u ? void 0 : o.a.createElement(p.a, {
						className: A.a.horizontalVotes,
						compact: !1,
						light: !u,
						model: d,
						onVoteClick: a,
						redditStyle: !0
					}), o.a.createElement(x.a, {
						name: h,
						className: A.a.mediaIcon
					}), o.a.createElement(g.c, {
						className: A.a.postTitle,
						post: d,
						size: u ? g.b.Medium : g.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: u ? void 0 : y.a.lightboxHeaderText,
						titleLinkClassName: A.a.postTitleLink
					}), o.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent
					}), this.props.showSubreddit && this.props.subreddit && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.a, {
						className: A.a.srIcon
					}), o.a.createElement(f.a, {
						to: this.props.subreddit.url,
						className: A.a.subredditName
					}, this.props.subreddit.name))), O && i && i.urlParams.subredditName && o.a.createElement("div", {
						className: A.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), o.a.createElement("div", {
						className: A.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && o.a.createElement(v.a, {
						className: Object(c.a)(A.a.SubscribeButton, {
							[A.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: this.handleSubscribeButtonClick,
						small: !0
					}), !this.props.hideCloseButton && o.a.createElement(G, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const G = o.a.memo(e => o.a.createElement(C.t, {
				className: A.a.CloseButton,
				size: C.d.XS,
				onClick: e.onClick,
				priority: C.c.Plain,
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
				r = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
					...o
				} = e, l = Object(i.b)(s);
				return r.a.createElement(a.a, c({
					className: n,
					to: l
				}, o), t)
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
				} = e, s = t ? l : o.a;
				return r.a.createElement(s, d({}, n, {
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
				return o
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(r.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: o
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
				return r.a.createElement("div", c({
					className: Object(o.a)(i.a.pillContainer, n)
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_INACTIVITY_MODAL, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT, () => o.a.createElement(c, null))
		},
		"./src/reddit/components/PostFlowUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.POST_FLOW_UPSELL_MODAL_ID, e => o.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.ECON_SUPPORTERS_LIST, e => o.a.createElement(d, {
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
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const d = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~PremiumPurchaseModal"), n.e("PremiumPurchaseModal")]).then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(l.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(o.a)({
					getComponent: d,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => r.a.createElement(u, null))
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				return Object(r.useEffect)(() => {
					e(Object(i.a)())
				}, []), Object(a.e)(e => Object(c.b)(e) || Object(l.N)(e) || Object(l.M)(e)) ? o.a.createElement(d, null) : null
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
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(o.a)(a);
			t.a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/SubredditCreationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			Object(a.b)(i.a.SUBREDDIT_CREATION_MODAL_ID, e => o.a.createElement(c, {
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
				return w
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "c", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
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
					const r = g.p(e, t);
					return r ? {
						experiment_name: r.name,
						experiment_variant: r.variant,
						experiment_version: r.version
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
				y = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						score: r,
						questionId: o,
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
							question_id: o,
							parent_question_id: a,
							score: r,
							...f(e, n)
						}
					})
				},
				C = e => {
					let {
						action: t,
						experimentName: n,
						question: s,
						text: r,
						type: o,
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
							type: v(o),
							text: r,
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
						score: r,
						type: o,
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
							type: v(o),
							min: 0,
							max: c,
							text: l,
							question: s,
							score: r,
							question_id: a,
							parent_question_id: i,
							...f(e, n)
						}
					})
				};
			var x = n("./src/reddit/hooks/useGqlContext.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				P = n("./src/reddit/selectors/experiments/index.ts"),
				S = n("./src/reddit/selectors/experiments/survey.ts"),
				k = n("./src/reddit/selectors/user.ts");
			const N = () => {
					const e = Object(l.d)(),
						t = Object(x.a)(),
						[n, s] = Object(c.useState)(null),
						r = Object(j.a)(),
						a = Object(l.e)(k.i),
						i = Object(l.e)(k.Fb),
						u = Object(l.e)(P.a, o.a),
						b = Object(l.e)(h.c),
						g = Object(l.e)(h.a),
						f = Object(l.e)(h.b),
						v = Object(l.e)(h.d),
						y = Object(l.e)(S.g),
						C = Object(c.useMemo)(() => {
							const e = Object(p.g)(y),
								t = {};
							for (const n of e) t[n] = u[n];
							return t
						}, [u, y]),
						E = Object(c.useCallback)(e => {
							setTimeout(() => s(e), 500)
						}, []),
						_ = Object(c.useCallback)(async e => {
							if (b) {
								const t = Object(p.f)({
									triggerName: e,
									isDemoEnabled: b,
									activeDemoTrigger: g,
									demoTriggerThreshold: f
								});
								return void(t && s(t))
							}
							const r = Object(p.e)({
								triggerName: e,
								surveyExperimentVariants: C,
								samplingId: a || i,
								isSampleFactorEnabled: v,
								isSurveyServiceMigrationEnabled: y
							});
							if (!r || r.experimentName === (null == n ? void 0 : n.experimentName)) return;
							const o = C[r.experimentName];
							(null == o ? void 0 : o.variant) && r.variants.find(e => e.variantName === o.variant) && (y ? await (async (e, t, n) => {
								const s = await Object(m.b)(t());
								if (s.ok) {
									const t = s.body,
										{
											activeSurveys: r
										} = t.data.customerSurveyConfig,
										o = r.find(t => t.experimentName === e.experimentName);
									o && n({
										...e,
										steps: o.steps
									})
								}
							})(r, t, E) : E(r))
						}, [n, C, a, i, v, b, g, f, y, E, t]);
					return Object(c.useEffect)(() => {
						const e = Object(p.c)(),
							t = e.subscribe(_);
						return () => e.unsubscribe(t)
					}, [_]), Object(c.useEffect)(() => {
						if (!n) return;
						const t = Date.now();
						Object(p.i)(n, t), e(Object(d.I)({
							surveyLastSeenTime: t
						}, !1)), r(O(n.experimentName, "display"))
					}, [n, e, r]), {
						activeSurvey: n,
						setActiveSurvey: s
					}
				},
				w = e => {
					let {
						activeStepNum: t,
						activeSurvey: n,
						isFollowUp: r,
						textResponse: o,
						setTextResponse: a,
						setIsSurveyDismissed: i,
						uiStep: l
					} = e;
					(e => {
						let {
							isFollowUp: t,
							textResponse: n
						} = e;
						const r = Object(c.useCallback)(e => {
							if (t && n.length) return e.preventDefault(), e.returnValue = "sure?", s.fbt._("Are you sure?", null, {
								hk: "1B7lB5"
							})
						}, [t, n]);
						Object(c.useEffect)(() => (window.addEventListener("beforeunload", r), () => window.removeEventListener("beforeunload", r)), [r])
					})({
						isFollowUp: r,
						textResponse: o
					});
					const [d, u] = Object(c.useState)(!1), m = Object(j.a)(), p = n.experimentName, h = n.steps[t], g = null == h ? void 0 : h.type, f = null == h ? void 0 : h.question, v = Object(c.useCallback)(() => {
						t >= 0 ? u(!0) : (i(!0), m(O(n.experimentName, "dismiss")))
					}, [t, n, m, i]), x = Object(c.useCallback)(() => {
						a(""), i(!0);
						const e = {
							question: f,
							experimentName: p,
							type: g,
							action: "dismiss",
							questionId: l.toString(),
							questionParentId: h.type === b.a.MULTI_CHOICE && r ? `${l-1}` : null
						};
						m(r ? C(e) : h.type === b.a.MULTI_CHOICE ? E(e) : y(e))
					}, [p, r, f, h, m, i, a, g, l]);
					return {
						isLeavingModalShowing: d,
						onClose: v,
						onLeaveCancel: Object(c.useCallback)(() => u(!1), []),
						onLeaveConfirm: x
					}
				},
				M = e => {
					let {
						activeSurvey: t,
						selectedNumber: n,
						setIsSurveyDismissed: s,
						setSelectedNumber: r,
						setTextResponse: o,
						textResponse: a
					} = e;
					const [l, d] = Object(c.useState)(-1), [u, m] = Object(c.useState)(0), [p, h] = Object(c.useState)(!1), g = Object(j.a)(), [f, v] = Object(c.useState)(""), [x, _] = Object(c.useState)([]), P = Object(c.useCallback)(() => {
						var e, c;
						const x = t.experimentName,
							j = t.steps[l],
							P = null == j ? void 0 : j.type,
							S = null == j ? void 0 : j.question,
							k = null == j ? void 0 : j.followUpQuestion,
							N = t.steps[l + 1],
							w = null == N ? void 0 : N.type,
							M = null == N ? void 0 : N.question;
						if (m(u + 1), N && N.questionOptions && _(i()(N.questionOptions)), -1 === l) {
							g(O(x, "agree")), d(0);
							const e = {
								question: M,
								type: w,
								action: "display",
								experimentName: x,
								questionId: `${u+1}`.toString(),
								questionParentId: null
							};
							return void g(w === b.a.MULTI_CHOICE ? E({
								text: f,
								...e
							}) : y(e))
						}
						const I = {
							experimentName: x,
							type: P,
							action: "submit",
							questionId: u.toString(),
							questionParentId: j.type === b.a.MULTI_CHOICE && p ? `${u-1}` : null
						};
						if (g(p ? C({
								text: a,
								question: k,
								...I
							}) : P === b.a.MULTI_CHOICE ? E({
								question: S,
								max: null === (e = j.questionOptions) || void 0 === e ? void 0 : e.length,
								score: null === (c = j.questionOptions) || void 0 === c ? void 0 : c.findIndex(e => e === f),
								text: f,
								...I
							}) : y({
								question: S,
								score: n && n + (P === b.a.NPS ? 0 : 1),
								...I
							})), r(void 0), o(""), v(""), p || !k)
							if (h(!1), l + 1 >= t.steps.length) s(!0);
							else {
								d(l + 1);
								const e = {
									experimentName: x,
									action: "display",
									type: w,
									question: M,
									questionId: (u + 1).toString()
								};
								g(w === b.a.MULTI_CHOICE ? E({
									text: f,
									...e
								}) : y(e))
							}
						else h(!0), g(C({
							experimentName: x,
							action: "display",
							type: P,
							question: k,
							questionId: `${u+1}`,
							questionParentId: u.toString()
						}))
					}, [f, v, l, t, p, a, n, g, s, r, o, u]);
					return {
						questionOptions: x,
						selectedOption: f,
						setSelectedOption: v,
						activeStepNum: l,
						isFollowUp: p,
						onStepComplete: P,
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
						setActiveStepNum: r,
						setActiveSurvey: o,
						setUIStep: a,
						setIsFollowUp: i,
						shouldMount: d,
						uiStep: m
					} = e;
					const p = Object(l.d)();
					Object(c.useEffect)(() => {
						t && !d && setTimeout(() => {
							r(-1), a(0), i(!1), o(null), m > 1 && p(Object(u.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: _.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [p, t, d, m, n, r, o, a, i])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				return e ? o.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			class O extends o.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return o.a.createElement(g.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const y = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.rb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.G)(e, n);
				if (!s) return;
				if (Object(h.qb)(e, {
						subredditId: s
					})) return;
				const r = e.structuredStyles.models[s];
				return r || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.x)(e, {
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
					const t = Object(b.A)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const r = Object(d.e)(e, t);
				return !!r && r.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, r, o, a, i, c, l, d, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: l,
						isCommentsPage: p,
						isOverlay: d
					},
					h = o && o.length && !Object(f.a)(o) ? `subredditvars-r-${o.toLocaleLowerCase()}` : g.c;
				if (t && n && r) {
					const e = Object(u.h)(n, r);
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
			t.b = y;
			const C = Object(l.u)()(y)
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
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
				o = Object(s.a)({
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
					isPresenceUserPrefEnabled: r,
					wrapperClassName: a,
					...i
				} = e, l = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return o.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, l ? o.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : o.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && o.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = Object(r.c)({
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
					requestCloseBlade: () => n && e(Object(o.h)(n))
				}
			})
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, r, o, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "d", (function() {
					return o
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(r || (r = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(o || (o = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(r || (r = {}))
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = o.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js");
			const a = o.createContext({
				showPromo: r.a,
				dismissPromo: r.a,
				completePromo: r.a,
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
				r = n.n(s),
				o = n("./src/reddit/constants/featureThrottling.ts"),
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
				c = Object.keys(o.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class l extends r.a.Component {
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
							const t = Object.keys(o.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = {
								...e[n],
								isThrottled: !0
							}), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return r.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(o.a).reduce((e, t) => (e[t] = {
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(c);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(o.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, r.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? r.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : r.a.createElement(a.a, {
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
				r = n("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				o = n.n(r);
			t.a = s.a.span("invisibleText", o.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Link/index.m.less"),
				o = n.n(r);
			t.a = s.a.a("link", o.a)
		},
		"./src/reddit/controls/Search/CommunityPill/index.m.less": function(e, t, n) {
			e.exports = {
				communityPill: "_1MA3fP9fWarZfJ7sTZvCY8",
				pillText: "H5EVgA9orCXvyuBqo4yYz",
				subredditIcon: "_294BH1P_2W07apxeH91d6w",
				dismissIcon: "_2hXB7lYOEW8IiiLOL9ddR6",
				dismissButton: "_2PzaavBh6JmLpWs2Z5H0NI",
				dismissButtonDay: "_2FxfOQtHDWppFWJFMrmDAw",
				active: "_28zCaLrn7TypX8TL1hW2CL",
				inactive: "_2DT6P_bqGS0I-oNooQv4Bl",
				dismissButtonNight: "_3QwmpATS084MHqvJO-ZgZZ"
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || a.d.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(o.a)(c.a.toggleSwitch, e.className, c.a[n], {
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
				}, r.a.createElement("div", {
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
				r = n("./src/reddit/controls/Typography/index.m.less"),
				o = n.n(r);
			s.a.h1("heading1", o.a), s.a.h2("heading2", o.a), s.a.h3("heading3", o.a), s.a.h4("heading4", o.a);
			const a = s.a.h5("heading5", o.a),
				i = (s.a.h6("heading6", o.a), s.a.p("body1", o.a), s.a.p("body2", o.a)),
				c = (s.a.p("actionFont", o.a), s.a.p("metadata", o.a));
			s.a.p("metadata3", o.a)
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
				r = (n("./src/lib/omitHeaders/index.ts"), n("./src/redditGQL/operations/ClaimAwardOffer.json")),
				o = n("./src/redditGQL/operations/FetchSpecialEvents.json");
			n("./src/reddit/constants/headers.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/endpoints/gold/purchase.ts");
			const a = e => Object(s.a)(e, {
					...o
				}),
				i = e => Object(s.a)(e, {
					...r,
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
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
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
						correlationId: o,
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
							correlation_id: o
						},
						g = `${n.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(l.a)(g);
					return Object(r.a)(Object(a.a)(n, [c.a]), {
						method: s.jb.POST,
						endpoint: f,
						data: h
					}).then(m)
				}, b = async e => {
					let {
						coins: t,
						context: n,
						correlationId: o,
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
						message: y
					} = i, C = {
						token: g ? g.id : void 0,
						coins: t,
						offer_context: u,
						pennies: p,
						thing_id: h,
						gild_type: v,
						message: y ? y.trim() : "",
						is_anonymous: O,
						remember_card: b,
						card_id: f,
						correlation_id: o
					}, E = `${n.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = d ? E : Object(l.a)(E);
					return Object(r.a)(Object(a.a)(n, [c.a]), {
						method: s.jb.POST,
						endpoint: x,
						data: C
					}).then(m)
				}, h = async e => {
					let {
						context: t,
						correlationId: n,
						gildParams: o,
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
					} = o, O = {
						token: b ? b.id : void 0,
						thing_id: p,
						award_id: g,
						message: v ? v.trim() : "",
						is_anonymous: f,
						pennies: d,
						remember_card: u,
						card_id: h,
						correlation_id: n
					}, y = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, C = i ? y : Object(l.a)(y);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: C,
						data: O
					}).then(m)
				}, g = async e => {
					let {
						context: t,
						correlationId: n,
						pennies: o,
						token: i
					} = e;
					const d = {
							token: i.id,
							pennies: o,
							correlation_id: n
						},
						u = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						p = Object(l.a)(u);
					return Object(r.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: p,
						data: d
					}).then(m)
				}, f = "paymentInfoUpdated", v = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[f]: "true"
					}), r = await Object(o.a)(e, {
						...i,
						variables: {
							successUrl: `${n}?${s}`,
							cancelUrl: `${n}`
						}
					});
					if (!r.ok) throw new Error("Unable to update payment information");
					return r.body.data.changeStripePaymentMethod.sessionId
				}
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const l = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? l.richtext_json = n : l.markdown_text = n, Object(r.a)(Object(o.a)(e, [a.a]), {
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
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/telemetry/helpers/sendCounter.ts");
			const o = (e, t) => {
					Object(r.b)(s.m.Redesign, {
						type: r.a.FrontPageFailed,
						data: {
							errorType: e,
							pageType: t
						}
					})
				},
				a = e => {
					Object(r.b)(s.m.Redesign, {
						type: r.a.LoggedOutMenuRendered,
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
				r = n("./src/lib/sample/index.ts"),
				o = n("./src/telemetry/helpers/sendCounter.ts");
			var a;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(a || (a = {}));
			const i = e => {
					Object(o.b)(s.m.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				c = e => {
					e && Object(r.b)(10) && Object(o.b)(s.m.Redesign, {
						type: o.a.NsfwBlocking,
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
				return o
			}));
			var s, r = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(s || (s = {}));
			const o = () => a() ? s.Enabled : s.Disabled,
				a = () => null !== document.getElementById(r.A)
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
				r = n.n(s),
				o = n("./src/lib/FocusTrap/index.ts");
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
					return r()(t, e => e.textContent || "")
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
						startOffset: r,
						endContainer: o,
						endOffset: a
					} = n, i = document.createRange();
					i.selectNode(e);
					let c = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, n) && (i.setStart(s, r), c = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, n) && (i.setEnd(o, a), c = !1), c) return [e];
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
					e.querySelectorAll(o.a).forEach(e => {
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
			var s, r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");

			function d(e) {
				return Object(i.S)(e, {}) === o.g.Large && !Object(l.P)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: r.Rd
				})
			}

			function m(e) {
				switch (e) {
					case r.Sd.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case r.Sd.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.I.SERVER_ERROR,
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
				return r
			}));
			var s = n("./src/config.ts");
			const r = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let r, o, a, i, c, l, d, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (o = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, l = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = s.a.PrivateSubreddit, a = e.subredditDescription, d = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = s.a.GoldSubreddit : e.subredditBanned ? (o = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? o = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? o = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (o = s.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (o = s.a.Nsfw), o && n ? {
					banMessage: r,
					contentGateType: o,
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
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
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
				r = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = n.n(c);
			const d = i.a.button("button", l.a),
				u = e => t => r.a.createElement("div", {
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
					m = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(i, {
						className: Object(a.a)(l.a.icon, {
							[l.a.isLit]: e
						})
					}), r.a.createElement(c, {
						className: l.a.body
					}), d && r.a.createElement("div", {
						className: l.a.metaContainer
					}, d));
				return n ? e => r.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? r.a.createElement(o.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : r.a.createElement("button", {
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
					return o
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
			const r = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				o = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(s.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				a = () => r(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				i = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => {
					return !!r(s.COMMENT_BEFORE_SIGNUP_STORAGE)
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
				r = n("./src/reddit/selectors/platform.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(r.o)(e);
					return {
						actionInfo: Object(o.d)(e),
						post: t && Object(o.J)(e, t) || null,
						profile: Object(o.S)(e),
						screen: Object(o.ab)(e),
						subreddit: Object(o.ib)(e)
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
				return r
			})), n.d(t, "e", (function() {
				return o
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
				r = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				}),
				o = () => e => ({
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
				return y
			})), n.d(t, "h", (function() {
				return C
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/models/PostDraft/index.ts"),
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
						screen: Object(c.ab)(e),
						subreddit: Object(c.ib)(e),
						post: t ? Object(c.J)(e, t) : null,
						profile: Object(c.S)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				u = async (e, t, s, r) => {
					const o = {
							commentId: r,
							commentsPageKey: s
						},
						i = r && Object(a.j)(e, o) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(l.a)({
						noun: "comment",
						...d(e),
						comment: r ? Object(c.h)(e, r) : null,
						listing: Object(c.y)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, m = (e, t, n, s) => {
					const r = d(e);
					return Object(l.a)({
						...r,
						actionInfo: {
							...r.actionInfo,
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
					t === o.c.replyToPost && Object(l.a)({
						noun: "input",
						...d(e)
					})
				}, h = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.n)(t),
					screen: Object(c.ab)(t),
					subreddit: Object(c.ib)(t),
					post: Object(c.J)(t, e)
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
				}), y = e => t => ({
					...d(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), C = () => e => ({
					...d(e),
					action: "select",
					noun: "gif_tooltip_result"
				})
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
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
			const r = (e, t) => ({
					...Object(s.n)(t),
					customFeed: Object(s.m)(t, e),
					source: "custom_feeds"
				}),
				o = e => t => ({
					...r(e, t),
					action: "click",
					noun: "delete"
				}),
				a = e => t => ({
					...r(e, t),
					action: "click",
					noun: "follow"
				}),
				i = e => t => ({
					...r(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...r(e, t),
					action: "click",
					noun: "duplicate"
				}),
				l = e => t => ({
					...r(e, t),
					action: "click",
					noun: "share"
				}),
				d = e => t => ({
					...r(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...r(e, t),
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
				r = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(r.h)(e, t),
						correlationId: Object(s.d)(s.a.GoldPayment, !1),
						profile: o.S(e),
						subreddit: o.ib(e)
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
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.ab(e),
					profile: s.S(e),
					subreddit: s.ib(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...r(t)
				}),
				a = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...r(t),
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
				return y
			})), n.d(t, "s", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "A", (function() {
				return j
			})), n.d(t, "x", (function() {
				return _
			})), n.d(t, "z", (function() {
				return P
			})), n.d(t, "y", (function() {
				return S
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "a", (function() {
				return M
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
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
					return t => ({
						...Object(r.n)(t),
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
					...Object(r.n)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				d = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(r.n)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				f = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				O = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				y = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				C = (e, t, n, o, c) => l => ({
					...Object(r.n)(l),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(l),
						reason: c
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: w(n),
						categoryId: o
					}
				}),
				E = (e, t, n, o, c, l) => d => ({
					...Object(r.n)(d),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(d),
						reason: l
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: w(t),
						categoryId: n,
						subredditName: o,
						subredditId: c
					}
				}),
				x = (e, t) => n => ({
					...Object(r.n)(n),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: w(e),
						categoryId: t
					}
				}),
				j = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				_ = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				P = (e, t) => n => ({
					...Object(r.n)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: w(e),
						categoryId: t
					}
				}),
				S = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				k = (e, t, n, o) => c => ({
					...Object(r.n)(c),
					source: a,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					actionInfo: {
						...Object(r.d)(c),
						reason: o
					},
					onboarding: {
						categoryName: w(t),
						categoryId: n
					}
				}),
				N = (e, t, n, o, c) => l => ({
					...Object(r.n)(l),
					source: a,
					action: s.c.VIEW,
					actionInfo: {
						...Object(r.d)(l),
						reason: c
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: w(e),
						categoryId: n,
						subredditName: t,
						subredditId: o
					}
				}),
				w = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var M, I, T;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(M || (M = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(I || (I = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(T || (T = {}));
			const A = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				R = e => t => ({
					...Object(r.n)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				L = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				D = e => t => ({
					...Object(r.n)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				F = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				U = e => t => ({
					...Object(r.n)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				G = () => e => ({
					...Object(r.n)(e),
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
				return y
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "t", (function() {
				return E
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "c", (function() {
				return S
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				o = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.J(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.h(n, t)
				}),
				i = r("show_panel"),
				c = r("esc_close"),
				l = e => o("enter_open_post", e),
				d = e => a("enter_comment_collapse", e),
				u = e => o("j_next", e),
				m = e => a("j_next", e),
				p = e => o("k_previous", e),
				b = e => a("k_previous", e),
				h = e => o("n_next", e),
				g = e => o("p_previous", e),
				f = e => o("s_save", e),
				v = e => a("s_save", e),
				O = e => o("h_hide", e),
				y = e => o("x_expando", e),
				C = e => o("a_upvote", e),
				E = e => a("a_upvote", e),
				x = e => o("z_downvote", e),
				j = e => a("z_downvote", e),
				_ = r("c_create_post"),
				P = e => o("l_go_to_link", e),
				S = e => a("r_comment", e);
			r("q_navigation")
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
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: r.ab(e),
					profile: r.S(e),
					subreddit: r.ib(e)
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
						pageType: t.platform.currentPage ? r.u(t.platform.currentPage) : void 0,
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
						id: Object(o.Ab)(t, {
							userName: e
						}).id
					},
					...r.n(t)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(o.Ab)(t, {
							userName: e
						}).id
					},
					...r.n(t)
				})
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			const r = (e, t) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = r
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(o.a)(e.className, Object(i.b)("coins", e.isFilled)),
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
				return r.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(o.a)(i.a.checkbox, t)
				}, n), r.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, r.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), r.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), r.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), r.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), r.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), r.a.createElement("path", {
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
				return r.a.createElement("svg", c({
					className: Object(o.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = l
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), r.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, r.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#bluePinkGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: "bluePinkGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#6A5CFF"
				}), r.a.createElement("stop", {
					offset: "1",
					stopColor: "#E4ABFF"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				fill: "#737577",
				d: "M10 .38a9.62 9.62 0 100 19.24A9.62 9.62 0 0010 .38zm0 18A8.381 8.381 0 1114.6 3L9.41 15.55h1.35l4.87-11.73A8.36 8.36 0 0110 18.38z"
			}), r.a.createElement("path", {
				fill: "#737577",
				d: "M10.68 7.87l.66-1.56a1.649 1.649 0 00-.46-.15 3 3 0 00-.7-.07c-.502-.01-1 .09-1.46.29-.38.18-.72.436-1 .75V6.2H6.13v7.3h1.61V9.3A1.71 1.71 0 018 8.43a1.64 1.64 0 01.66-.59 2.12 2.12 0 011-.22 2.08 2.08 0 011.02.25z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
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
				r = (n("./src/polyfill.ts"), n("./src/lib/constants/headers.ts")),
				o = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./node_modules/@reddit/google-tag-manager/compiled.js"),
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
				f = n("./src/lib/name/index.ts"),
				v = n("./src/reddit/selectors/user.ts");
			const O = (e, t) => async (n, s) => {
				var r;
				const o = s();
				if (Object(f.b)(t)) {
					const e = (null === (r = Object(v.k)(o)) || void 0 === r ? void 0 : r.displayText) || "";
					if (Object(f.c)(t, Object(f.a)(e))) return
				} else if (Object(g.a)(t)) return;
				n((e => ({
					payload: e,
					type: h.f
				}))(e))
			}, y = Object(b.a)(h.e), C = e => ({
				payload: {
					subreddits: e
				},
				type: h.b
			}), E = e => ({
				payload: e,
				type: h.a
			});
			var x = n("./node_modules/redux-thunk/es/index.js"),
				j = n("./node_modules/request-idle-callback/index.js"),
				_ = n("./src/lib/browser/isIncognito.ts"),
				P = n("./src/lib/constants/index.ts"),
				S = n("./src/lib/extractQueryParams/index.ts"),
				k = n("./src/lib/filterQueryParams/index.ts"),
				N = n("./src/lib/getParsedUserAgent/index.ts"),
				w = n("./src/lib/initializeClient/index.tsx"),
				M = n("./src/lib/loadableAction/index.ts"),
				I = n("./src/lib/matchRoute/index.ts"),
				T = n("./src/lib/performance.js"),
				A = n("./src/lib/reCaptchaEnterprise/index.ts"),
				R = n("./src/lib/safeJSONParse/index.ts"),
				L = n("./src/lib/serviceWorker/index.ts"),
				D = n("./src/reduxMiddleware/apiContext.ts"),
				F = n("./src/reduxMiddleware/gqlContext.ts"),
				U = n("./src/telemetry/index.ts"),
				G = n("./src/telemetry/helpers/sendEvent.ts"),
				B = n("./src/telemetry/models/Event.ts"),
				q = n("./src/telemetry/models/Timer.ts"),
				H = n("./src/reddit/actions/apiRequestHeaders.ts"),
				W = n("./src/reddit/actions/chat/toggle.ts"),
				V = n("./src/reddit/actions/comment/index.ts"),
				Q = n("./src/reddit/actions/emailCollection/index.ts"),
				z = n("./src/reddit/actions/emailVerification.ts"),
				K = n("./src/reddit/actions/login.ts"),
				J = n("./src/reddit/selectors/activeModalId.ts"),
				X = n("./node_modules/reselect/es/index.js"),
				Y = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Z = n("./src/reddit/selectors/meta.ts");
			const $ = Object(X.a)(Z.c, v.Q, Y.d, Y.e, (e, t, n, s) => !(e || t || n && s)),
				ee = () => async (e, t) => {
					const n = t(),
						s = $(n);
					!!!Object(J.a)(n) && s && e(Object(K.openGoogleOneTapModal)())
				};
			var te = n("./src/reddit/actions/media.ts"),
				ne = n("./src/lib/loadWithRetries/index.ts"),
				se = () => Object(ne.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				re = n("./src/reddit/actions/nps.ts");
			const oe = Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var ae, ie = n("./src/reddit/actions/platform.ts"),
				ce = n("./src/reddit/actions/post.ts"),
				le = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				de = n("./src/reddit/actions/session.ts"),
				ue = n("./src/reddit/actions/survey/index.ts"),
				me = n("./src/reddit/actions/theme.ts"),
				pe = n("./src/reddit/actions/toaster.ts"),
				be = n("./src/reddit/actions/users.ts"),
				he = n("./node_modules/react-redux/es/index.js"),
				ge = n("./node_modules/react-router/esm/react-router.js"),
				fe = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/RedditSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Crypto/componentStyles.css"), n("./src/reddit/components/Root/index.m.less")),
				ve = n.n(fe),
				Oe = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				ye = n("./src/lib/classNames/index.ts"),
				Ce = n("./node_modules/lodash/isEqual.js"),
				Ee = n.n(Ce),
				xe = n("./node_modules/lodash/omit.js"),
				je = n.n(xe),
				_e = n("./node_modules/lodash/throttle.js"),
				Pe = n.n(_e),
				Se = n("./src/reddit/contexts/NavbarExp.ts"),
				ke = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ne = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				we = n("./src/lib/fastdom/index.ts"),
				Me = n("./src/lib/FocusTrap/index.ts"),
				Ie = n("./src/lib/isEqualWithoutKey/index.ts"),
				Te = n("./src/lib/isSimpleClick/index.ts"),
				Ae = n("./src/reddit/actions/header.ts"),
				Re = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				Le = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				De = n("./node_modules/polished/dist/polished.es.js"),
				Fe = n("./node_modules/react-motion/lib/react-motion.js"),
				Ue = n("./src/lib/lessComponent.tsx"),
				Ge = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				Be = n("./src/reddit/components/TrackingHelper/index.tsx"),
				qe = n("./src/reddit/constants/accountManager.ts"),
				He = n("./src/reddit/helpers/trackers/onboarding.ts"),
				We = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ve = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Qe = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				ze = n("./src/reddit/components/Carousel/index.m.less"),
				Ke = n.n(ze);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(ae || (ae = {}));
			class Je extends m.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === ae.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
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
							shouldHandleMouseClicks: r
						} = this.props, {
							pageNumber: o
						} = this.state, a = n === ae.Fade ? {
							opacity: t === o ? 1 : 0
						} : {
							marginLeft: 0 === t ? -s * o : void 0
						};
						return m.a.createElement("div", {
							className: Object(ye.a)(Ke.a.item, Ke.a[n]),
							key: `item-${t}`,
							style: {
								...a,
								backgroundImage: `url("${i.a.assetPath}/${e.img}")`,
								width: s
							},
							onClick: r ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(ye.a)(Ke.a.indicator, {
							[Ke.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						className: Object(ye.a)(e, Ke.a.container)
					}, m.a.createElement("article", {
						className: Ke.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: Ke.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var Xe = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				Ye = n.n(Xe);
			const Ze = Ue.a.div("Container", Ye.a),
				$e = Ue.a.wrapped(Je, "Carousel", Ye.a),
				et = Ue.a.div("Phone", Ye.a),
				tt = Ue.a.img("Frame", Ye.a),
				nt = `${i.a.assetPath}/img/frontpage-signup/android-frame.png`,
				st = `${i.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				rt = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				ot = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var at = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(Ze, {
						className: t
					}, m.a.createElement(et, {
						className: Ye.a.android
					}, m.a.createElement($e, {
						animationType: ae.Fade,
						className: Ye.a.android,
						delay: 2500,
						items: rt,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(tt, {
						src: nt
					})), m.a.createElement(et, {
						className: Ye.a.iphone
					}, m.a.createElement($e, {
						animationType: ae.Fade,
						className: Ye.a.iphone,
						items: ot,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(tt, {
						src: st
					})))
				},
				it = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ct = n.n(it);
			const lt = Ue.a.div("Container", ct.a),
				dt = Ue.a.span("Disclaimer", ct.a),
				ut = Ue.a.a("Link", ct.a);
			var mt = e => m.a.createElement(lt, {
					className: e.className
				}, m.a.createElement(ut, {
					href: "https://www.redditinc.com/"
				}, s.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(ut, {
					href: "https://www.redditinc.com/advertising"
				}, s.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(ut, {
					href: "http://www.redditblog.com/"
				}, s.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(ut, {
					href: "https://www.redditinc.com/careers"
				}, s.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(ut, {
					href: "https://www.reddithelp.com"
				}, s.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(ut, {
					href: "https://www.redditinc.com/press"
				}, s.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(ut, {
					href: "https://www.reddit.com/coins"
				}, s.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(ut, {
					href: "https://redditgifts.com/"
				}, s.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(ut, {
					href: "https://www.reddit.com/premium"
				}, s.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(ut, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, s.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(ut, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, s.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(dt, null, s.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				pt = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				bt = n.n(pt);
			const ht = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				gt = Ue.a.div("Container", bt.a),
				ft = Ue.a.wrapped(Ge.a, "IFrame", bt.a),
				vt = Ue.a.wrapped(at, "Images", bt.a),
				Ot = Ue.a.wrapped(mt, "Links", bt.a),
				yt = Ue.a.div("MainContent", bt.a),
				Ct = Ue.a.div("MainContentColumn", bt.a),
				Et = Ue.a.button("NotReady", bt.a),
				xt = Ue.a.span("NotReadyText", bt.a),
				jt = Ue.a.wrapped(We.a, "NotReadyIcon", bt.a),
				_t = Object(ke.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: r,
						onCloseClick: o,
						onVisibilityChange: a
					} = e, i = Object(Ve.a)(e).bodyText;
					return m.a.createElement(Le.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(gt, {
						className: t,
						innerRef: n
					}, m.a.createElement(yt, null, m.a.createElement(Ct, null, m.a.createElement(vt, null, "Images Placeholder")), m.a.createElement(Ct, null, m.a.createElement(ft, {
						className: Object(ye.a)({
							[bt.a.fields]: Object(Qe.b)(r)
						}),
						path: qe.c.Register,
						uiMode: qe.d.Embed
					}))), m.a.createElement(Et, {
						onClick: o,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(De.i)(.8, i)
						}
					}, m.a.createElement(xt, null, s.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(jt, null)), m.a.createElement(Ot, null)))
				});
			class Pt extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class St extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(He.d)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = e => {
						let {
							scrollTo: t
						} = e;
						return m.a.createElement(Pt, {
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
					}), m.a.createElement(Fe.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(Fe.spring)(s, ht)
						}
					}, this.renderScroller))
				}
			}
			var kt = Object(Be.c)(St),
				Nt = n("./src/lib/localStorageAvailable/index.ts"),
				wt = n("./src/reddit/actions/modal.ts"),
				Mt = n("./src/higherOrderComponents/makeAsync.tsx"),
				It = Object(Mt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				Tt = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				At = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx");
			var Rt = Object(Mt.a)({
				getComponent: () => Object(ne.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Lt = () => null;
			var Dt = Object(Mt.a)({
					ErrorComponent: Lt,
					getComponent: () => Object(ne.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), n.e("vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Lt
				}),
				Ft = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ut = n("./src/reddit/actions/structuredStyles/index.ts"),
				Gt = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Bt = n("./src/reddit/constants/modals.ts"),
				qt = n("./src/reddit/controls/TextButton/index.tsx"),
				Ht = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Wt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Vt = Object(he.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					closeModal: () => {
						e(Object(wt.i)(Bt.a.BLADE_NIGHTMODE)), e(Object(Ut.f)())
					},
					openBlade: () => {
						e(Object(Ut.e)(n))
					}
				}
			});
			var Qt = Object(Ft.a)(Vt(e => m.a.createElement(Gt.e, null, m.a.createElement(Gt.i, null, m.a.createElement(Ht.a, null, m.a.createElement(Gt.q, null, Wt._("Turning off Dark Mode", null, {
					hk: "2RVfrK"
				})), m.a.createElement(qt.a, {
					onClick: e.closeModal
				}, m.a.createElement(Gt.b, null)))), m.a.createElement(Gt.l, null, m.a.createElement(Gt.o, null, Wt._("In order to continue styling your community, Dark Mode must be turned off.", null, {
					hk: "2oiEiX"
				}))), m.a.createElement(Gt.g, null, m.a.createElement(Gt.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, Wt._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(Gt.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, Wt._("Continue", null, {
					hk: "413jMZ"
				})))))),
				zt = n("./src/reddit/actions/authorFlair.ts"),
				Kt = n("./src/reddit/actions/gold/powerups.ts"),
				Jt = n("./src/reddit/actions/userFlair/index.ts"),
				Xt = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				Yt = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				Zt = n("./src/reddit/components/FlairPreview/index.tsx"),
				$t = n("./src/reddit/components/FlairSearch/index.tsx"),
				en = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				tn = n("./src/reddit/controls/Button/index.tsx"),
				nn = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				sn = n("./src/reddit/layout/row/Inline/index.tsx"),
				rn = n("./src/reddit/models/Flair/index.ts"),
				on = n("./src/reddit/models/User/index.ts"),
				an = n("./src/reddit/selectors/authorFlair.ts"),
				cn = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ln = n("./src/reddit/selectors/telemetry.ts"),
				dn = n("./src/reddit/selectors/userFlair.ts"),
				un = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				mn = n.n(un);
			const pn = e => e.flairModalContext && e.currentUser && Object(on.e)(e.currentUser) === e.flairModalContext.username,
				bn = e => e.authorFlair || pn(e) && e.userFlairData.applied || null,
				hn = Ue.a.wrapped(sn.a, "Section", mn.a),
				gn = Ue.a.div("CheckboxText", mn.a);
			class fn extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(ln.jb)(t, this.props.subredditId)
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
						previewFlair: bn(e),
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
						isUserEnabled: r
					} = e.displaySettings, o = this.state.showFlair !== r, a = bn(this.props);
					if (!s.canUserChange) return o;
					const {
						canSave: i,
						reason: c
					} = Object(en.b)(n, t, a);
					return !(i || c !== en.a.NoChanges || !o) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: r,
						flairModalContext: o
					} = e, a = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == o ? void 0 : o.isOpenedFromAchievementsModal, {
						templates: l,
						templateIds: d
					} = n, u = this.canSave(), p = pn(e);
					return m.a.createElement(Yt.a, null, m.a.createElement(Xt.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(Zt.a, {
						flair: t.previewFlair,
						flairTemplateType: rn.d.UserFlair,
						placeholderText: s.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement($t.a, {
						flair: t.previewFlair,
						flairTemplateType: rn.d.UserFlair,
						subredditId: r,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(hn, null, m.a.createElement(nn.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(gn, null, s.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: mn.a.buttonsRow
					}, c && m.a.createElement(tn.t, {
						className: mn.a.goBackButton,
						priority: tn.c.Plain,
						onClick: e.openAchiementFlairModal
					}, s.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: mn.a.rightSideButtons
					}, a && m.a.createElement(tn.o, {
						className: mn.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(tn.l, {
						disabled: !u,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const vn = Object(he.b)(() => Object(X.c)({
				authorFlair: an.b,
				currentUser: v.k,
				flairModalContext: an.c,
				isMod: (e, t) => !!Object(cn.n)(e, t),
				userFlairData: dn.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, r, o) => e(Object(Jt.f)(n, s, r, o.username, t.subredditId)),
				closeModal: () => e(Object(zt.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(Kt.d)())
			}))(fn);
			var On = Object(Ft.a)(Object(Be.c)(vn)),
				yn = n("./src/reddit/selectors/bannedUser.ts"),
				Cn = n("./src/reddit/selectors/muted.ts"),
				En = n("./src/reddit/selectors/notificationPrefs.ts"),
				xn = n("./src/reddit/selectors/platform.ts"),
				jn = n("./src/reddit/selectors/removalReasons.ts"),
				_n = n("./src/reddit/constants/cookie.ts"),
				Pn = n("./src/reddit/featureFlags/index.ts"),
				Sn = n("./src/reddit/helpers/localStorage/index.ts"),
				kn = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Nn = Object(X.c)({
				activeModalId: J.a,
				authorContext: an.c,
				badgePurchaseModalIsOpen: Object(J.b)(Bt.a.BADGE_PURCHASE),
				banContext: yn.a,
				banModalIsOpen: Object(J.b)(Bt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(J.b)(Bt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				introModalFeatureEnabled: e => Pn.d.introModal(e),
				isOverlayOpen: xn.i,
				moderatorPermissions: e => {
					const t = Object(xn.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: Cn.b,
				muteModalIsOpen: Object(J.b)(Bt.a.MUTE_USER),
				notificationsPrePromptIsOpen: En.e,
				removalReasonContext: jn.b,
				removalReasonModalIsOpen: Object(J.b)(Bt.a.ADD_REMOVAL_REASON),
				subredditId: xn.c,
				userFlairModalIsOpen: Object(J.b)(Bt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: v.A,
				userInRedesignBeta: v.H,
				userIsLoggedIn: v.Q,
				userIsMod: v.R,
				userIsNew: v.U
			});
			class wn extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(Nt.a)()) return; {
						const e = d.a.get(_n.a);
						e && d.a.remove(_n.a, {
							domain: i.a.cookieDomain
						});
						const t = Object(Sn.E)(Bt.a.ALPHA_CONSUMER);
						t && Object(Sn.ab)(Bt.a.ALPHA_CONSUMER), (e || t) && Object(Sn.Gb)(Bt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Sn.E)(Bt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Sn.Gb)(Bt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate(e) {
					this.conditionalModalCheck(), e.activeModalId !== this.props.activeModalId && (Bt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(kn.a)(), 500) : setTimeout(() => Object(kn.b)(), 500)))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: r,
						currentBadgePurchase: o,
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
					} = this.props, O = (e, t, n) => s => () => p(r => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(ln.h)(r, n),
						post: n && Object(ln.J)(r, n),
						screen: Object(ln.ab)(r),
						subreddit: Object(ln.jb)(r, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(Tt.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: h,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username,
						withOverlay: !0
					}), i && a && m.a.createElement(At.a, {
						contextId: a.contextId,
						subredditId: a.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", a.subredditId, a.contextId)("add_in_context"),
						username: a.username,
						withOverlay: !0
					}), d && l && m.a.createElement(Dt, {
						itemIds: l.itemIds,
						subredditId: l.subredditId,
						toggleModal: f
					}), r && b && m.a.createElement(Qt, {
						subredditId: b
					}), v && e && e.subredditId && m.a.createElement(On, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && o && m.a.createElement(It, {
						withOverlay: !0,
						productId: o
					}), c && m.a.createElement(Rt, null))
				}
			}
			var Mn = Object(he.b)(Nn, e => ({
					markRedesignModalAsClosed: () => e(Object(wt.j)()),
					toggleBanModal: () => e(Object(wt.i)(Bt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(wt.i)(Bt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(wt.i)(Bt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(wt.i)(Bt.a.ADD_REMOVAL_REASON))
				}))(Object(Be.c)(wn)),
				In = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Tn = n("./src/reddit/constants/experiments.ts"),
				An = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Rn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Ln = n("./src/reddit/selectors/experiments/d2xAmModalDesignUpdate.ts"),
				Dn = n("./src/reddit/selectors/responsiveSettings.ts"),
				Fn = n("./src/telemetry/helpers/sendCounter.ts"),
				Un = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Gn = n.n(Un);
			const Bn = Ue.a.div("Overlay", Gn.a),
				qn = Ue.a.div("IframeContainer", Gn.a),
				Hn = {},
				Wn = Object(An.u)(),
				Vn = Object(X.c)({
					frontpageSignupVariant: Qe.a,
					isAmModalDesignUpdateEnabled: Ln.a,
					isResponsiveSettingsEnabled: Dn.a
				}),
				Qn = {
					[qe.c.ChangePassword]: Bt.a.CHANGE_PASSWORD_MODAL_ID,
					[qe.c.Index]: Bt.a.LOGIN_MODAL_ID,
					[qe.c.Register]: Bt.a.REGISTER_MODAL_ID,
					[qe.c.EnableTwoFactor]: Bt.a.ENABLE_TWO_FACTOR,
					[qe.c.DisableTwoFactor]: Bt.a.DISABLE_TWO_FACTOR,
					[qe.c.TwoFactorBackupCodes]: Bt.a.TWO_FACTOR_BACKUP_CODES,
					[qe.c.LinkAppleSSO]: Bt.a.LINK_APPLE_SSO,
					[qe.c.UnlinkAppleSSO]: Bt.a.UNLINK_APPLE_SSO,
					[qe.c.LinkGoogleSSO]: Bt.a.LINK_GOOGLE_SSO,
					[qe.c.UnlinkGoogleSSO]: Bt.a.UNLINK_GOOGLE_SSO,
					[qe.c.GoogleOneTap]: Bt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[qe.c.Onboarding]: Bt.a.ONBOARDING_MODAL_ID
				};
			class zn extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === qe.c.Register && Object(Qe.f)(this.props.frontpageSignupVariant) && Rn.a.throttleFeature(Tn.Xc), this.props.sendEvent(Object(He.d)(this.subscriptions))
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
						"user_cancel" === e && (this.props.sendEvent(Object(He.g)()), Object(Fn.b)(P.m.Redesign, {
							type: Fn.a.OneTapDismissed,
							data: {}
						}))
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(He.h)()), Object(Fn.b)(P.m.Redesign, {
							type: Fn.a.OneTapViewed,
							data: {}
						})
					}, this.onShowScreen = e => {
						const {
							path: t
						} = this.props, n = t === qe.c.Index || t === qe.c.Register, s = t === qe.c.GoogleOneTap;
						e === qe.b.SelectAccount ? n ? this.resizeContainer({
							height: 474,
							width: 416
						}) : s && this.setState({
							removeHiddenOverlay: !0
						}) : e === qe.b.Subscribe ? (n && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === qe.b.Email || e === qe.b.UsernameAndPassword ? n && this.restoreContainerSize() : e !== qe.b.EmailOptIn && e !== qe.b.GoogleUI || this.setState({
							removeHiddenOverlay: !1
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isAmModalDesignUpdateEnabled: t,
						isResponsiveSettingsEnabled: n,
						pageLayer: s,
						path: r
					} = this.props, {
						containerSize: o,
						isSSOLinkActionFailedModal: a,
						removeGoogleOneTapStyles: i,
						removeHiddenOverlay: c
					} = this.state, l = Object(Qe.c)(e) || Object(Qe.d)(e), d = r === qe.c.LinkAppleSSO || r === qe.c.LinkGoogleSSO || r === qe.c.UnlinkAppleSSO || r === qe.c.UnlinkGoogleSSO, u = r === qe.c.GoogleOneTap, p = Object(ye.a)({
						[Gn.a.mModalUpdate]: t,
						[Gn.a.small]: l,
						[Gn.a.ssoConfirmPassword]: d,
						[Gn.a.linkActionSSOFail]: a,
						[Gn.a.mResponsive]: n,
						[Gn.a.mGoogleOneTap]: u && !i
					}), b = Object(ye.a)({
						[Gn.a.mGoogleOneTap]: u && !i,
						[Gn.a.mHiddenOverlay]: u && !c
					}), h = !l && !a && !n;
					return m.a.createElement(Bn, {
						className: b
					}, m.a.createElement(qn, {
						className: p,
						style: o || Hn
					}, m.a.createElement(Ge.a, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: s,
						path: r,
						showCloseButton: h
					})))
				}
			}
			const Kn = Wn(Object(he.b)(Vn, (e, t) => ({
				closeModal: t => {
					e(Object(wt.g)(Qn[t]))
				}
			}))(Object(Be.c)(zn)));
			Object(In.b)(Bt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(Kn, {
				path: qe.c.ChangePassword
			})), Object(In.b)(Bt.a.LOGIN_MODAL_ID, e => m.a.createElement(Kn, {
				path: qe.c.Index
			})), Object(In.b)(Bt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(Kn, {
				path: qe.c.Onboarding
			})), Object(In.b)(Bt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(Kn, {
				path: qe.c.EnableTwoFactor
			})), Object(In.b)(Bt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(Kn, {
				path: qe.c.DisableTwoFactor
			})), Object(In.b)(Bt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(Kn, {
				path: qe.c.TwoFactorBackupCodes
			})), Object(In.b)(Bt.a.REGISTER_MODAL_ID, e => m.a.createElement(Kn, {
				path: qe.c.Register
			})), Object(In.b)(Bt.a.LINK_APPLE_SSO, e => m.a.createElement(Kn, {
				path: qe.c.LinkAppleSSO
			})), Object(In.b)(Bt.a.LINK_GOOGLE_SSO, e => m.a.createElement(Kn, {
				path: qe.c.LinkGoogleSSO
			})), Object(In.b)(Bt.a.UNLINK_APPLE_SSO, e => m.a.createElement(Kn, {
				path: qe.c.UnlinkAppleSSO
			})), Object(In.b)(Bt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(Kn, {
				path: qe.c.UnlinkGoogleSSO
			})), Object(In.b)(Bt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(Kn, {
				path: qe.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const Jn = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(Jn, {
				withOverlay: !0
			}));
			const Xn = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(Xn, {
				withOverlay: !0
			}));
			const Yn = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(Yn, {
				withOverlay: !0
			}));
			const Zn = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.CROWD_CONTROL, e => m.a.createElement(Zn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const $n = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement($n, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const es = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(es, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/EditCommunityDescriptionModal/async.tsx");
			const ts = Object(Mt.a)({
					getComponent: () => Object(ne.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				ns = e => () => {
					e()
				};
			Object(In.b)(Bt.a.GOLD_GILD_MODAL, e => m.a.createElement(ts, {
				onOverlayClick: ns(e),
				withOverlay: !0
			}));
			var ss = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				rs = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				os = n.n(rs);
			const as = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = ss.SPARKLE_ASSET_PATH, document.createElement("img").src = ss.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(In.b)(Bt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(as, {
				withOverlay: !0,
				className: os.a.modalBody,
				overlayClassName: os.a.modalOverlay
			}));
			const is = Object(Mt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				cs = e => () => {
					e()
				};
			Object(In.b)(Bt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(is, {
				onOverlayClick: cs(e),
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/GasFeesEducationalModal/async.tsx");
			const ls = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(ls, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ds = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(ds, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const us = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(us, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const ms = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(ms, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/MainnetAnnouncementModal/async.tsx");
			const ps = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(ps, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const bs = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e(0), n.e("GovernanceTransferPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.TRANSFER_POINTS, e => m.a.createElement(bs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const hs = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(hs, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const gs = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(gs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const fs = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(fs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const vs = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.MULTIREDDIT_CREATE, e => m.a.createElement(vs, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(In.b)(Bt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(vs, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Os = Object(Mt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(In.b)(Bt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Os, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ys = () => Promise.all([n.e(6), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				Cs = Object(Mt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(ne.a)(ys).then(e => e.default)
				});
			Object(In.b)(Bt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(Cs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/async.tsx"), n("./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/async.tsx"), n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const Es = () => null,
				xs = Object(Mt.a)({
					ErrorComponent: Es,
					getComponent: () => Object(ne.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: Es
				});
			Object(In.b)(Bt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(xs, null));
			var js = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				_s = n.n(js);
			const Ps = Ue.a.h2("ColumnLabel", _s.a),
				Ss = Ue.a.wrapped(sn.a, "ColumnWrapper", _s.a),
				ks = Ue.a.div("Column", _s.a),
				Ns = Ue.a.div("Description", _s.a),
				ws = Ue.a.div("Key", _s.a),
				Ms = Ue.a.wrapped(Gt.l, "ModalMain", _s.a),
				Is = Ue.a.wrapped(Gt.e, "ModalBody", _s.a),
				Ts = Ue.a.wrapped(tn.l, "PrimaryButton", _s.a),
				As = Ue.a.wrapped(qt.a, "TextButton", _s.a),
				Rs = Object(he.b)(null, e => ({
					closeModal: () => e(Object(wt.i)(Bt.a.KEYBOARD_SHORTCUTS))
				})),
				Ls = Ue.a.wrapped(Object(Ft.a)(Rs(e => m.a.createElement(Is, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(Gt.i, null, m.a.createElement(Ht.a, null, m.a.createElement(Gt.q, null, s.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(As, {
					onClick: e.closeModal
				}, m.a.createElement(Gt.b, null)))), m.a.createElement(Ms, null, m.a.createElement(Ss, null, m.a.createElement(ks, null, m.a.createElement(sn.a, null, m.a.createElement(Ps, null, s.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(ws, null, "Shift + ?")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(ws, null, "J")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(ws, null, "K")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(ws, null, "N")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(ws, null, "P")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(ws, null, "Enter")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(ws, null, "X")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(ws, null, "L"))), m.a.createElement(ks, null, m.a.createElement(sn.a, null, m.a.createElement(Ps, null, s.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(ws, null, "A")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(ws, null, "Z")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(ws, null, "C")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(ws, null, "R")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(ws, null, "Ctrl + Enter")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(ws, null, "S")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(ws, null, "H")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(ws, null, "Q")), m.a.createElement(sn.a, null, m.a.createElement(Ns, null, s.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(ws, null, "Enter"))))), m.a.createElement(Gt.g, null, m.a.createElement(Ts, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, s.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", _s.a);
			Object(In.b)(Bt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Ls, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Ds = Object(Mt.a)({
					getComponent: () => Object(ne.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Fs = e => () => {
					e()
				};
			Object(In.b)(Bt.a.SNOOVATAR_MODAL, e => m.a.createElement(Ds, {
				onOverlayClick: Fs(e),
				withOverlay: !0
			}));
			const {
				fbt: Us
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Gs = Object(X.c)({
				allowNavigationCallback: xn.a
			}), Bs = Object(he.b)(Gs, e => ({
				closeModal: () => e(Object(wt.i)(Bt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object(Ut.a)())
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
					return m.a.createElement(Gt.e, null, m.a.createElement(Gt.i, null, m.a.createElement(Ht.a, null, m.a.createElement(Gt.q, null, Us._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(qt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(Gt.b, null)))), m.a.createElement(Gt.l, null, m.a.createElement(Gt.p, null, Us._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(Gt.g, null, m.a.createElement(Gt.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Us._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(Gt.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Us._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const Hs = Object(Ft.a)(Bs(qs));
			Object(In.b)(Bt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(Hs, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const Ws = () => n.e("NsfwBlockingModal").then(n.bind(null, "./src/reddit/components/Upsell/NsfwBlocking/Modal.tsx")),
				Vs = Object(Mt.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(ne.a)(Ws).then(e => e.default)
				});
			Object(In.b)(Bt.a.NSFW_BLOCKING_MODAL_V2, e => m.a.createElement(Vs, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Qs = Object(X.c)({
					activeModalId: J.a
				}),
				zs = Object(he.b)(Qs, e => ({
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
					e.activeModalId !== this.props.activeModalId && (Bt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(kn.a)(), Ks) : setTimeout(() => Object(kn.b)(), Ks)))
				}
				componentWillUnmount() {
					Object(kn.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(In.a)(e)(e ? this.toggleModal : Js)
				}
			}
			var Ys, Zs = zs(Xs),
				$s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				er = n("./src/reddit/actions/page.ts"),
				tr = n("./src/reddit/actions/shortcuts/utils.ts"),
				nr = n("./src/reddit/icons/fonts/index.tsx"),
				sr = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				rr = n("./src/reddit/selectors/header.ts"),
				or = n("./src/reddit/selectors/userPrefs.ts"),
				ar = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				ir = n("./src/reddit/components/SEOTitle/index.tsx"),
				cr = n("./src/reddit/components/SubredditIcon/index.tsx"),
				lr = n("./src/reddit/components/UserIcon/index.tsx"),
				dr = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				ur = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				mr = n.n(ur);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.InternationalSite = "InternationalSite", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(Ys || (Ys = {}));
			const pr = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(ir.b, {
					type: ir.a.HeaderSelector
				}, s))
			};
			var br = n("./src/lib/objectSelector/index.ts"),
				hr = n("./src/reddit/constants/wiki.ts"),
				gr = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				fr = n("./src/reddit/selectors/subreddit.ts"),
				vr = n("./src/reddit/selectors/topic.ts");
			var Or = Object(br.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					const s = !!e.user.account,
						r = Object(sr.b)(e),
						o = Object(sr.a)(e),
						a = Object(xn.m)(e),
						i = Object(An.Z)(n);
					switch (i) {
						case "avatar":
							return {
								type: Ys.Avatar
							};
						case "index":
						case "listing":
							return s || r && !o || a && o ? {
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
							const t = Object(An.t)(n),
								s = t && Object(vr.d)(e, t);
							if (s) return {
								type: Ys.Topic,
								model: s
							}
						}
					}
					const c = e.user.account;
					if (c) switch (i) {
						case "inboxPages":
							return {
								type: Ys.Inbox, model: c
							};
						case "settings":
							return {
								type: Ys.Settings, model: c
							}
					}
					const l = Object(An.T)(e, {
						pageLayer: n
					});
					if ("all" === l) return {
						type: Ys.All
					};
					if ("popular" === l) return {
						type: Ys.Popular
					};
					const d = Object(An.r)(e, {
						pageLayer: n
					});
					if (d) return "searchResults" === i ? {
						type: Ys.CommunitySearch,
						model: d
					} : {
						type: Ys.Community,
						model: d
					};
					const u = Object(An.e)(e, {
						pageLayer: n
					});
					if (u) return {
						type: Ys.Multi,
						model: u
					};
					const m = Object(An.k)(e, {
						pageLayer: n
					});
					if (m) return {
						type: Ys.UserProfile,
						model: m
					};
					const p = Object(An.i)(n);
					if (p) return {
						type: Ys.UserProfileName,
						name: `u/${p}`
					};
					if (i && "searchResults" === i) return {
						type: Ys.GlobalSearch
					};
					if ("subredditWiki" === i) {
						const t = Object(An.o)(e, {
								pageLayer: n
							}) || hr.e,
							s = Object(fr.A)(e, {
								subredditName: t
							});
						if (s) return {
							type: Ys.Community,
							model: s
						}
					}
					return "rpan" === i && Object(gr.a)(e) ? {
						type: Ys.PublicAccessNetwork
					} : {
						type: Ys.Unknown
					}
				}),
				yr = n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less"),
				Cr = n.n(yr);

			function Er() {
				return (Er = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function xr(e) {
				const t = e.icon,
					n = e.text,
					s = e.badge,
					r = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Cr.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Object(ye.a)(Cr.a.text, {
								[Cr.a.hasBadge]: !!s
							})
						}), s && m.a.createElement(s, {
							className: Cr.a.badge
						})),
						className: Object(ye.a)(Cr.a.item, e.className, {
							[Cr.a.mFocused]: !!e.isFocused,
							[Cr.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return r["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Er({}, r, {
					href: e.to,
					target: "_blank",
					rel: "noopener noreferrer"
				})) : m.a.createElement($s.a, Er({}, r, {
					to: e.to
				})) : m.a.createElement("button", r)
			}
			var jr = n("./src/reddit/components/BadgeCounter/index.tsx"),
				_r = n("./src/reddit/constants/localStorage.ts"),
				Pr = n("./src/reddit/hooks/useIsClient.ts"),
				Sr = n("./src/reddit/hooks/useLocalStorage.ts");
			const kr = e => {
					const t = Number(e);
					return isNaN(t) ? 0 : t
				},
				Nr = e => {
					let {
						className: t
					} = e;
					const n = Object(Pr.a)(),
						s = Object(he.e)(xn.g),
						r = Object(he.e)(sr.b),
						[o, a] = Object(Sr.a)(_r.b.LOGGED_OUT_HOME_SEEN, {}),
						i = Date.now(),
						c = kr(o.dismissed),
						l = kr(o.throttledUntil),
						d = !n || !r || c >= 3 || r && s || i < l;
					return n && r && s && c < 3 && i > l && a({
						dismissed: c + 1,
						throttledUntil: i + P.B
					}), d ? null : m.a.createElement(jr.a, {
						className: t,
						isActive: !0,
						unreadCount: -1
					})
				};
			var wr = n("./src/reddit/constants/listings.ts"),
				Mr = n("./src/reddit/helpers/overlay/index.ts"),
				Ir = n("./src/reddit/routes/modListing/index.ts"),
				Tr = n("./src/reddit/routes/predictions/index.ts"),
				Ar = n("./src/reddit/routes/talk/index.ts"),
				Rr = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Lr = n("./src/reddit/selectors/multireddit.ts"),
				Dr = n("./src/lib/LinkedListMap/index.ts"),
				Fr = n("./src/reddit/routes/avatar/index.ts");

			function Ur() {
				return (Ur = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Gr = Object(X.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Lr.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Lr.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				recentSubreddits: e => e.recentSubreddits.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var Br;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action", e[e.CreatePost = 10] = "CreatePost", e[e.ExploreMenu = 11] = "ExploreMenu"
			}(Br || (Br = {}));
			const qr = [e => ({
					id: Ys.Employee,
					type: Br.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(nr.a, Ur({
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
				Hr = () => [e => ({
					id: Ys.All,
					type: Br.GenericLink,
					model: {
						url: "/r/all/",
						displayText: s.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
				Wr = () => [e => ({
					id: "reddit-feeds",
					type: Br.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Ys.Home,
					type: Br.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
					type: Br.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
				}), ...Hr()],
				Vr = [e => ({
					id: "reddit-feeds",
					type: Br.Header,
					model: {
						displayText: s.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: Ys.Home,
					type: Br.GenericLink,
					model: {
						url: "/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
				}), ...Hr()],
				Qr = e => m.a.createElement(Nr, {
					className: e.className
				}),
				zr = [e => ({
					id: "reddit-feeds",
					type: Br.Header,
					model: {
						displayText: s.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: Ys.Home,
					type: Br.GenericLink,
					model: {
						url: "/",
						badge: Qr,
						displayText: s.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
					type: Br.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: s.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
				})],
				Kr = [e => ({
					id: "reddit-other",
					type: Br.Header,
					model: {
						displayText: s.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: Ys.Settings,
					type: Br.GenericLink,
					model: {
						url: "/settings",
						displayText: s.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(dr.a, {
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
					type: Br.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: s.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon(e) {
							let {
								className: t
							} = e;
							return m.a.createElement(dr.a, {
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
				Jr = e => ({
					id: Ys.Coins,
					type: Br.GenericLink,
					model: {
						url: "/coins",
						displayText: s.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
				Xr = e => ({
					id: Ys.Premium,
					type: Br.GenericLink,
					model: {
						url: "/premium",
						displayText: s.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
				Yr = e => ({
					id: Ys.Avatar,
					type: Br.GenericLink,
					model: {
						url: Fr.a,
						displayText: s.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
				Zr = e => ({
					id: Ys.Talk,
					type: Br.GenericLink,
					model: {
						url: Ar.a,
						displayText: s.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
				$r = e => ({
					id: Ys.Predictions,
					type: Br.GenericLink,
					model: {
						url: Tr.a,
						displayText: s.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
				eo = [e => ({
					id: Ys.ModQueue,
					type: Br.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: s.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
						type: Br.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: s.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(nr.a, Ur({
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

			function to(e, t, n, r) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Br.Header,
					model: {
						displayText: s.fbt._("your communities", null, {
							hk: "BtF8C"
						}).toString()
					}
				}), n && no(e, r), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Br.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Br.Header,
					model: {
						displayText: s.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Br.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const no = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const r = {
						id: Ys.CreateCommunity,
						telemetryNoun: "create_community"
					},
					o = {
						displayText: s.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(nr.a, Ur({
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
					...r,
					type: Br.GenericClickable,
					model: {
						...o,
						onClick: () => {
							n ? (t(Object(wt.k)({
								actionSource: wt.a.HeaderSignup
							})), t(Object(K.openRegisterModal)())) : t(Object(wt.h)(Bt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var so = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				ro = n.n(so);

			function oo(e) {
				return m.a.createElement("div", {
					className: Object(ye.a)(ro.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var ao = n("./src/reddit/actions/subscription/index.ts"),
				io = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				co = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				lo = n.n(co);

			function uo() {
				return (uo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const mo = Object(X.c)({
					currentUser: v.k,
					hideNSFWPref: v.F,
					isLoggedIn: v.Q,
					isLoggedOutOneFeed: sr.b
				}),
				po = Object(he.b)(mo, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case Br.Subreddit:
								e(Object(ao.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Br.Profile:
								e(Object(ao.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Br.Multi:
								e(Object(ao.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(io.f)(t.model.url)) : t.sendEvent(Object(io.c)(t.model.url))
						}
					}
				}));
			var bo = Object(Be.c)(po((function(e) {
					const t = {
						className: Object(ye.a)(lo.a.item, e.className, {
							[lo.a.mFocused]: !!e.isFocused
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
						case Br.Subreddit:
							return m.a.createElement($s.a, uo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(cr.b, {
								className: lo.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: lo.a.text
							}, e.model.displayText), (e.isLoggedIn || e.isLoggedOutOneFeed) && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(nr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ye.a)(lo.a.favorite, {
									[lo.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Br.SubredditAutocomplete:
							return m.a.createElement($s.a, uo({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(cr.b, {
								className: lo.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: lo.a.text
							}, e.model.name));
						case Br.Multi:
							return m.a.createElement($s.a, uo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: lo.a.customFeedIcon
							}), m.a.createElement("span", {
								className: lo.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(nr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ye.a)(lo.a.favorite, {
									[lo.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Br.Profile:
							return m.a.createElement($s.a, uo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(lr.a, {
								className: lo.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: lo.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(nr.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(ye.a)(lo.a.favorite, {
									[lo.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				ho = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				go = n.n(ho);

			function fo(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: go.a.header
				}), m.a.createElement("div", {
					className: go.a.item
				}), m.a.createElement("div", {
					className: go.a.item
				}), m.a.createElement("div", {
					className: go.a.item
				}), m.a.createElement("div", {
					className: go.a.item
				}))
			}
			var vo = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Oo = n("./src/lib/sample/index.ts"),
				yo = n("./src/reddit/actions/subreddit.ts"),
				Co = n("./src/reddit/controls/InternalLink/index.tsx");

			function Eo() {
				return (Eo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var xo = e => {
					const {
						children: t,
						className: n,
						href: s = "#",
						onClick: r,
						rel: o
					} = e, a = {
						onClick: r,
						rel: o,
						className: n
					};
					return (s || "").startsWith("http") ? m.a.createElement("a", Eo({
						href: s
					}, a), t) : m.a.createElement(Co.default, Eo({
						to: s
					}, a), t)
				},
				jo = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				_o = n.n(jo),
				Po = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				So = n.n(Po);
			class ko extends m.a.Component {
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
						headingClassName: r,
						icon: o,
						noBottomDivider: a,
						onClick: i,
						title: c,
						url: l
					} = this.props, d = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: Object(ye.a)(_o.a.button, So.a.button, t),
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof i) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								i(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: Object(ye.a)(_o.a.headingContent, r),
						tabIndex: -1
					}, m.a.createElement("span", {
						className: _o.a.iconContainer
					}, o), m.a.createElement("span", {
						className: _o.a.title
					}, l ? m.a.createElement(xo, {
						className: _o.a.innerLink,
						href: l
					}, c) : m.a.createElement(m.a.Fragment, null, c)), m.a.createElement(nr.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(ye.a)(_o.a.chevronIcon, {
							[_o.a["m-expanded"]]: d
						})
					}))), m.a.createElement("div", {
						className: Object(ye.a)(_o.a.contentContainer, _o.a["m-collapsible"], {
							[_o.a.isOpen]: d,
							[_o.a.noBottomDivider]: a
						}, s)
					}, n))
				}
			}
			var No = ko,
				wo = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Mo = n("./src/reddit/constants/colors.ts");
			const Io = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(ye.a)(_o.a.title, n)
					}, t)
				},
				To = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(ye.a)(_o.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(Io, {
						title: s,
						titleClassName: r
					}))
				},
				Ao = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: r,
						titleClassName: o,
						rel: a
					} = e;
					return m.a.createElement(xo, {
						className: Object(ye.a)(_o.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(Io, {
						title: r,
						titleClassName: o
					}))
				},
				Ro = e => {
					const {
						className: t,
						href: n,
						iconClassName: s,
						iconUrl: r,
						onClick: o,
						rel: a,
						title: i,
						titleClassName: c
					} = e;
					return m.a.createElement(xo, {
						className: Object(ye.a)(_o.a.secondLevelButton, t),
						href: n,
						onClick: o,
						rel: a
					}, m.a.createElement(cr.b, {
						"aria-hidden": !0,
						className: Object(ye.a)(_o.a.subredditIcon, s),
						iconUrl: r,
						primaryColor: Mo.a.snoo
					}), m.a.createElement(Io, {
						title: i,
						titleClassName: c
					}))
				},
				Lo = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: r,
						isEnabled: o
					} = e;
					return m.a.createElement("button", {
						className: Object(ye.a)(_o.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(Io, {
						title: s,
						titleClassName: r
					}), m.a.createElement(wo.a, {
						className: _o.a.toggleSwitch,
						"data-redditstyle": !0,
						on: o,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var Do = [{
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
				Fo = n("./src/reddit/helpers/trackers/navigation.ts"),
				Uo = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Go = n.n(Uo);
			const Bo = e => {
				let {
					sendEvent: t,
					showIcons: n = !1,
					useNavStyles: s = !1
				} = e;
				const [r, o] = Object(u.useState)(null), a = e => () => {
					o(r === e ? null : e)
				};
				return m.a.createElement(m.a.Fragment, null, Do.map((e, o) => ((e, t, n, s, r) => {
					let {
						link: o,
						sublinks: a
					} = e, {
						isOpen: i,
						onClick: c
					} = t;
					return m.a.createElement(No, {
						buttonClassName: r ? Go.a.navButtonOverride : "",
						className: Go.a.collapsibleContainer,
						icon: s && o.icon && m.a.createElement(nr.a, {
							name: o.icon
						}),
						isOpen: i,
						key: o.url,
						onClick: (e, t) => {
							o.noun && n(Object(Fo.c)(o.noun + (t ? "_chevron" : "_menu"))), "function" == typeof c && c(e)
						},
						title: o.title,
						url: o.url
					}, a.map(e => m.a.createElement(Ao, {
						className: r ? Go.a.navBasicLink : Go.a.basicLink,
						href: e.url,
						key: e.url,
						onClick: () => {
							e.noun && n(Object(Fo.c)(e.noun + "_menu"))
						},
						title: e.title
					})))
				})(e, (e => ({
					onClick: a(e),
					isOpen: r === e
				}))(o), t, n, s)))
			};
			var qo = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: r
					} = e;
					return m.a.createElement(No, {
						icon: m.a.createElement(nr.a, {
							name: "discover"
						}),
						isOpen: t,
						onClick: (e, t) => {
							r(Object(Fo.c)(t ? "explore_chevron" : "explore_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Explore", null, {
							hk: "4xNnBs"
						})
					}, m.a.createElement("span", null, m.a.createElement(Bo, {
						sendEvent: r
					})))
				},
				Ho = n("./src/reddit/constants/keycodes.ts"),
				Wo = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Vo = n("./src/reddit/helpers/counters/loggedOutOneFeed.ts"),
				Qo = n("./src/reddit/helpers/trackers/postComposer.ts"),
				zo = n("./src/reddit/models/LoggedOutOneFeed/index.ts"),
				Ko = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				Jo = n.n(Ko);

			function Xo() {
				return (Xo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Yo(e) {
				return e.id === Ys.ModMail || e.id === Ys.CreateCommunity
			}

			function Zo(e) {
				const t = new Dr.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Br.Header && e.type !== Br.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const $o = Object(X.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					isLoggedOutMenuRenderedCounterSampled: e => Object(Oo.a)(e, {
						rate: 14
					}),
					isLoggedOutOneFeed: sr.b,
					unfilteredListBuilder: e => t => {
						const n = Gr(e),
							r = new Dr.a("id"),
							o = Object(sr.b)(e),
							a = Object(v.pb)(e),
							i = Object(sr.c)(e),
							c = Object(xn.d)(e),
							l = [],
							d = (e => Object(Rr.r)(e) ? [Xr, Jr, Yr, Zr, $r] : [Jr, Xr, Yr, Zr, $r])(e),
							u = "popular" === c,
							p = [() => ({
								id: "reddit-feeds",
								type: Br.Header,
								model: {
									displayText: s.fbt._("Feeds", null, {
										hk: "4zvMfr"
									}).toString()
								}
							}), () => ({
								id: u ? Ys.Popular : Ys.Home,
								type: Br.GenericLink,
								model: {
									url: u ? "/r/popular/" : "/",
									displayText: s.fbt._("Popular", null, {
										hk: "1op8tD"
									}).toString(),
									icon: e => m.a.createElement(nr.a, Ur({
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
								telemetryNoun: u ? "popular" : "home"
							})],
							b = l.length ? d.filter(e => !l.includes(e(null).id)) : d;
						if (n.account) {
							const o = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (r.push({
								id: "header-favorites",
								type: Br.Header,
								model: {
									displayText: s.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => r.push({
								id: "fav" + e.id,
								type: Br.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => r.push({
								id: "fav" + e.id,
								type: Br.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => r.push({
								id: "fav" + e.url,
								type: Br.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && r.push({
								id: "multis-pending",
								type: Br.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? r.push({
								id: "moderatingSubreddits-pending",
								type: Br.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (r.push({
								id: "header-moderating",
								type: Br.Header,
								model: {
									displayText: s.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), o.isMod && eo.forEach(e => r.push(e(o))), r.push({
								id: Ys.ModListing,
								type: Br.GenericLink,
								model: {
									url: Ir.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(nr.a, Ur({
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
							}), n.moderatingSubreddits.forEach(e => r.push({
								id: "mod" + e.id,
								type: Br.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: Br.Header,
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
													n(Object(wt.h)(Bt.a.MULTIREDDIT_CREATE)), s()
												},
												className: Object(ye.a)(t, mr.a.multiPlusButton)
											}, m.a.createElement(nr.a, {
												name: "add"
											}))
										},
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: Br.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(r, n, t), n.subscriptionsPending ? r.push({
								id: "subscriptions-pending",
								type: Br.LoadingState,
								model: {
									displayText: ""
								}
							}) : to(r, n, a, t), ((e, t, n, r) => (Wr().forEach(e => t.push(e(n))), n.isEmployee && qr.forEach(e => t.push(e(n))), Object(gr.a)(e) && t.push({
								id: Ys.PublicAccessNetwork,
								type: Br.GenericClickable,
								model: {
									onClick: () => {
										r(Object(Mr.a)(wr.c[wr.b.Rpan]))
									},
									displayText: s.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(nr.a, Ur({
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
							}), t))(e, r, o, t), Kr.forEach(e => r.push(e(o))), r.push((() => ({
								id: Ys.CreatePost,
								type: Br.CreatePost,
								model: {
									url: "/submit",
									displayText: s.fbt._("Create Post", null, {
										hk: "dGck6"
									}).toString(),
									icon: e => m.a.createElement(nr.a, Ur({
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
							}))()), r.push((() => ({
								id: Ys.DailyCharts,
								type: Br.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: s.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(nr.a, Ur({
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
								type: Br.GenericLink,
								model: {
									url: "/notifications",
									displayText: s.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(nr.a, Ur({
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
							}))(r), b.forEach(e => r.push(e(o)))
						} else n.subscriptions.length || Object(v.Q)(e) ? Wr().forEach(e => r.push(e(null))) : o ? (i ? p.forEach(e => e && r.push(e(null))) : zr.forEach(e => e && r.push(e(null))), function(e, t, n) {
							t.recentSubreddits.length && (e.push({
								id: "header-subscriptions",
								type: Br.Header,
								model: {
									displayText: s.fbt._("recent communities", null, {
										hk: "24NvFP"
									}).toString()
								}
							}), t.recentSubreddits.slice(0, 3).forEach(t => e.push({
								id: "sub" + t.id,
								type: Br.Subreddit,
								model: t,
								telemetryNoun: "community"
							})), no(e, n, !0))
						}(r, n, t), function(e) {
							e.push({
								id: "header-explore-menu",
								type: Br.Header,
								model: {
									displayText: s.fbt._("Explore", null, {
										hk: "4FrRPk"
									}).toString()
								}
							}), e.push({
								id: "explore-menu",
								type: Br.ExploreMenu,
								model: {
									displayText: s.fbt._("Explore Menu", null, {
										hk: "1acYZN"
									}).toString()
								}
							})
						}(r)) : Vr.forEach(e => r.push(e(null))), o || (r.push({
							id: "reddit-other",
							type: Br.Header,
							model: {
								displayText: s.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), b.forEach(e => r.push(e(null))), to(r, n, a, t));
						return r
					}
				}),
				ea = e => ({
					onHomeClicked: () => e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(p.b)(t)),
					onSubredditsRequested: () => {
						e(Object(ao.e)()), e(Object(yo.q)()), e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
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
							s = Zo(n),
							r = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: r ? r.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === Ho.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === Ho.b.Tab && this.props.onClose && this.props.onClose(), e.key === Ho.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Br.Header && e.type !== Br.ExploreMenu && e.type !== Br.LoadingState && (this.fireTelemetryForListItem(e), e.type === Br.GenericClickable ? e.model.onClick() : Yo(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === Ho.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === Ho.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
								Object(Wo.d)(Wo.a.GoldPayment, !0), t = Object(Wo.c)(Wo.a.GoldPayment)
						}
						switch (e.type) {
							case Br.Category:
							case Br.GenericLink:
							case Br.GenericClickable:
							case Br.Multi:
							case Br.Profile:
							case Br.Subreddit:
								this.props.sendEvent(n => ({
									...Object(ln.n)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === Br.Multi ? Object(ln.m)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Br.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(ln.n)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
							case Br.CreatePost:
								this.props.sendEvent(Object(Qo.x)({
									actionInfoType: "community_nav"
								}))
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: Zo(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					const {
						canAutofocus: e,
						isLoggedOutMenuRenderedCounterSampled: t,
						isLoggedOutOneFeed: n,
						isPinned: s,
						onSubredditsRequested: r
					} = this.props;
					"complete" === document.readyState ? r() : window.addEventListener("load", r), e && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus()), n && t && Object(Vo.b)(s ? zo.c.LeftRail : zo.c.NavDropdown)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = Zo(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Dr.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Br.Category:
								case Br.GenericLink:
								case Br.Multi:
								case Br.Profile:
								case Br.Subreddit:
								case Br.CreatePost:
									e.model.displayText.match(s) && n.push(e);
									break;
								case Br.Header: {
									const t = n.last();
									t && t.type === Br.Header && n.pop(), n.push(e);
									break
								}
								case Br.LoadingState:
							}
						});
						const r = n.last();
						return r && r.type === Br.Header && n.pop(), n
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
						className: Jo.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === Ys.Home && this.props.onHomeClicked(), e.type === Br.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case Br.GenericClickable:
								return m.a.createElement(xr, Xo({}, n, {
									className: Jo.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Br.Category:
							case Br.GenericLink:
							case Br.CreatePost:
								return m.a.createElement(xr, Xo({}, n, {
									externalLink: Yo(e),
									className: Jo.a.item,
									to: e.model.url,
									badge: e.model.badge,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Br.Header: {
								const n = e.model.button;
								return m.a.createElement(oo, {
									className: Jo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: Jo.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Br.LoadingState:
								return m.a.createElement(fo, {
									className: Jo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case Br.Multi:
								return m.a.createElement(bo, Xo({}, n, {
									className: Jo.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Br.Multi
								}));
							case Br.Profile:
								return m.a.createElement(bo, Xo({}, n, {
									className: Jo.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Br.Profile
								}));
							case Br.Subreddit:
								return m.a.createElement(bo, Xo({}, n, {
									className: Jo.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Br.Subreddit
								}));
							case Br.ExploreMenu:
								return m.a.createElement(Bo, Xo({}, n, {
									sendEvent: this.props.sendEvent,
									showIcons: !0,
									useNavStyles: !0
								}))
						}
					}))
				}
			}
			const sa = Object(he.b)($o, ea, ta)(Object(Be.c)(na)),
				ra = Object(he.b)($o, ea, ta)(Object(Be.c)(Object(vo.b)(na))),
				oa = Object(An.u)({
					pageLayer: e => e
				}),
				aa = Object(X.c)({
					currentPage: Or,
					hideNSFWPref: v.F,
					isDropdownOpen: rr.a,
					isLoggedOutUiOnly: sr.c,
					isOverlayOpen: xn.i,
					isPinnedSubscriptionsMenuDisabled: or.b,
					isSubscriptionsPinned: or.c
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
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(tr.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(ln.n)(e),
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}, this.renderHeaderSubreddit = e => {
						const {
							currentPage: t,
							className: n,
							hideNSFWPref: r,
							isOverlayOpen: o,
							isLoggedOutUiOnly: a
						} = this.props, i = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, c = o, l = {
							...t,
							type: a && t.type === Ys.Home ? Ys.Popular : t.type
						};
						return m.a.createElement("div", {
							"aria-label": s.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(ye.a)(mr.a.container, n, {
								[mr.a.mOpen]: i,
								[mr.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[mr.a.mPinned]: this.props.isSubscriptionsPinned,
								[mr.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: mr.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: mr.a.containerText
						}, function(e) {
							switch (e.type) {
								case Ys.Acknowledgements:
									return pr(s.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case Ys.All:
									return pr(s.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case Ys.Appeal:
									return pr(s.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case Ys.Avatar:
									return pr(s.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case Ys.Coins:
									return pr(s.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case Ys.Community:
									return pr(e.model.displayText, !0);
								case Ys.CommunitySearch:
									return pr(s.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case Ys.CreateCommunity:
									return pr(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Ys.CreatePost:
									return pr(s.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case Ys.DailyCharts:
									return pr(s.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case Ys.GlobalSearch:
									return pr(s.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case Ys.Geotagging:
									return pr(s.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case Ys.Home:
									return pr(s.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case Ys.Inbox:
									return pr(s.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case Ys.ModListing:
									return pr("r/Mod");
								case Ys.ModMail:
									return pr(s.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case Ys.ModQueue:
									return pr(s.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case Ys.Multi:
									return pr(e.model.displayText, !0);
								case Ys.NotificationsInbox:
									return pr(s.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case Ys.InternationalSite:
								case Ys.Popular:
									return pr(s.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case Ys.Predictions:
									return pr(s.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case Ys.Premium:
									return pr(s.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case Ys.PublicAccessNetwork:
									return pr(s.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case Ys.Report:
									return pr(s.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case Ys.Settings:
									return pr(s.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case Ys.SubredditCreation:
									return pr(s.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case Ys.Talk:
									return pr(s.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case Ys.Topic:
									return pr(e.model);
								case Ys.Unknown:
									return pr("");
								case Ys.UserDataRequest:
									return pr(s.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case Ys.UserProfile:
									return pr(e.model.displayText, !0);
								case Ys.UserProfileName:
									return pr(e.name, !0);
								case Ys.ViewDraft:
									return pr(s.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(l)), function(e, t) {
							const n = e => m.a.createElement(nr.a, {
								name: e,
								isFilled: !0,
								className: mr.a.defaultIcon
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
									const n = Object(ar.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(cr.b, {
										className: mr.a.subredditIcon,
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
									return m.a.createElement(dr.a, {
										wrapperClassName: mr.a.userIcon
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
										className: mr.a.customFeedIcon
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
									return m.a.createElement(dr.a, {
										wrapperClassName: mr.a.userIcon
									});
								case Ys.SubredditCreation:
									return n("add");
								case Ys.Talk:
									return n("live");
								case Ys.Topic:
									return n("custom_feed");
								case Ys.Unknown:
									return m.a.createElement("div", {
										className: mr.a.unknownIcon
									});
								case Ys.UserDataRequest:
									return n("add");
								case Ys.UserProfile: {
									const n = Object(ar.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(lr.a, {
										className: mr.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case Ys.UserProfileName:
									return m.a.createElement("div", {
										className: mr.a.defaultIcon
									});
								case Ys.Unknown:
									return m.a.createElement("div", {
										className: mr.a.unknownIcon
									});
								case Ys.UserProfile: {
									const n = Object(ar.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(lr.a, {
										className: mr.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case Ys.ViewDraft:
									return n("edit")
							}
						}(l, r), !this.props.isSubscriptionsPinned && m.a.createElement(nr.a, {
							name: "caret_down",
							className: mr.a.caretDown
						})), i && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(nr.a, {
							name: "side_menu",
							className: mr.a.pin,
							onClick: c ? void 0 : this.props.onPinSubscriptions
						}), i && m.a.createElement(ra, {
							canAutofocus: !0,
							className: Object(ye.a)(mr.a.listContainer, mr.a.paddingBottom),
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
					return m.a.createElement(Se.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var ca = oa(Object(he.b)(aa, (e, t) => ({
					closeDropdown: () => e(Object(Ae.f)()),
					onLocationRefresh: (n, s) => e(Object(er.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(Ae.i)()), e(Object(Ae.f)())
					},
					openDropdown: () => e(Object(Ae.g)()),
					toggleDropdown: () => e(Object(Ae.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(Be.c)(ia))),
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
				ya = n("./src/lib/makeGqlRequest/index.ts"),
				Ca = n("./src/redditGQL/operations/SearchTypeahead.json"),
				Ea = n("./src/redditGQL/operations/SearchTypeaheadLegacy.json"),
				xa = n("./src/telemetry/models/App.ts");
			var ja = n("./src/reddit/helpers/name/index.ts");
			var _a = n("./src/reddit/helpers/graphql/normalizeProfileAboutFromGql/index.ts"),
				Pa = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				Sa = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var ka = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Na = n("./src/reddit/helpers/chooseVariant/index.ts");
			const wa = e => async (t, n, s) => {
				let {
					gqlContext: r
				} = s;
				const o = n(),
					a = (e => {
						return Object(Na.c)(e, {
							experimentName: Tn.ic,
							experimentEligibilitySelector: Na.a
						}) === Tn.Jd
					})(o),
					i = ln.cb(o, ka.a.Typeahead),
					c = Object(v.kb)(o),
					l = await (async (e, t, n, s, r) => {
						const o = {
							productSurface: xa.TelemetryAppName.web2x,
							query: t,
							searchInput: {
								queryId: n,
								isNsfwIncluded: s
							}
						};
						if (r) {
							return await Object(ya.a)(e, {
								...Ca,
								variables: o
							}, {
								traceRequestName: "search_typeahead"
							})
						}
						return await Object(ya.a)(e, {
							...Ea,
							variables: o
						}, {
							traceRequestName: "search_typeahead_legacy"
						})
					})(r(), e, i, c, a);
				if (a) {
					const n = (e => {
						var t, n;
						const s = [],
							r = {};
						return null === (n = null === (t = e.data.search) || void 0 === t ? void 0 : t.typeahead) || void 0 === n || n.forEach(e => {
							var t, n, o, a, i, c, l, d;
							if ("Subreddit" === e.__typename) {
								const a = e;
								s.push(a.id), r[a.id] = {
									icon: (null === (t = a.styles) || void 0 === t ? void 0 : t.icon) || (null === (o = null === (n = a.styles) || void 0 === n ? void 0 : n.legacyIcon) || void 0 === o ? void 0 : o.url),
									id: a.id,
									isNsfw: a.isNsfw,
									isQuarantined: a.isQuarantined,
									isSubreddit: !0,
									name: a.name,
									publicDescriptionText: a.publicDescriptionText,
									searchQuery: a.prefixedName,
									subscribersCount: a.subscribersCount
								}
							} else if ("Profile" === e.__typename) {
								const t = e;
								s.push(t.id);
								const n = "Redditor" === t.redditorInfo.__typename ? null === (i = null === (a = t.redditorInfo) || void 0 === a ? void 0 : a.karma) || void 0 === i ? void 0 : i.total : void 0,
									o = t.name.substring(2);
								r[t.id] = {
									icon: (null === (c = t.styles) || void 0 === c ? void 0 : c.icon) || (null === (d = null === (l = t.styles) || void 0 === l ? void 0 : l.legacyIcon) || void 0 === d ? void 0 : d.url),
									id: t.id,
									isNsfw: t.isNsfw,
									isProfile: !0,
									karma: n,
									name: o,
									publicDescriptionText: t.publicDescriptionText,
									searchQuery: Object(ja.d)(o)
								}
							}
						}), {
							order: s,
							data: r
						}
					})(l.body);
					return void((null == n ? void 0 : n.data) && (null == n ? void 0 : n.order) && t(Object(Oa.q)({
						typeaheadSuggestions: n.data,
						order: n.order,
						searchQuery: e
					})))
				}
				const d = (e => {
					let {
						data: t
					} = e;
					var n, s;
					const r = [],
						o = {};
					return null === (s = null === (n = t.search) || void 0 === n ? void 0 : n.typeahead) || void 0 === s || s.forEach(e => {
						var t, n;
						if ("Subreddit" === e.__typename) r.push(e.id), o[e.id] = {
							...Object(Sa.a)(e),
							publicDescription: null === (t = e.publicDescription) || void 0 === t ? void 0 : t.markdown
						};
						else if ("Profile" === e.__typename) {
							r.push(e.id);
							const t = "Redditor" === e.redditorInfo.__typename ? null === (n = e.redditorInfo) || void 0 === n ? void 0 : n.karma : void 0;
							o[e.id] = {
								...Object(Pa.a)(e),
								...Object(_a.a)(e, t)[e.id]
							}
						}
					}), {
						data: o,
						order: r
					}
				})(l.body);
				(null == d ? void 0 : d.data) && (null == d ? void 0 : d.order) && t(Object(Oa.p)({
					typeaheadSuggestions: d.data,
					order: d.order,
					searchQuery: e
				}))
			};
			var Ma, Ia = n("./src/reddit/actions/search/trending.ts"),
				Ta = n("./src/reddit/components/SearchDropdown/index.tsx"),
				Aa = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				Ra = n("./src/reddit/constants/parameters.ts"),
				La = n("./src/reddit/helpers/clickSourceData/index.ts"),
				Da = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				Fa = n("./src/reddit/helpers/isArrayEqual.ts"),
				Ua = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Ga = n("./src/reddit/helpers/trackers/screenview.ts"),
				Ba = n("./src/reddit/helpers/trackers/searchResults.ts"),
				qa = n("./src/reddit/hooks/usePageLayer.ts"),
				Ha = n("./src/reddit/models/Search/index.ts"),
				Wa = n("./src/reddit/selectors/experiments/serpTabPreserved.ts"),
				Va = n("./src/reddit/selectors/searchFix.ts"),
				Qa = n("./src/reddit/selectors/searchResults.ts"),
				za = n("./src/reddit/selectors/trending.ts"),
				Ka = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				Ja = n("./src/reddit/controls/Search/index.m.less"),
				Xa = n.n(Ja),
				Ya = n("./node_modules/lodash/debounce.js"),
				Za = n.n(Ya),
				$a = n("./src/reddit/components/Pill/index.tsx"),
				ei = n("./src/reddit/components/Pill/PillText/index.m.less"),
				ti = n.n(ei);

			function ni() {
				return (ni = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(Ma || (Ma = {}));
			const si = {
					[Ma.DAY]: ti.a.pillTextVariantDay,
					[Ma.NIGHT]: ti.a.pillTextVariantNight
				},
				ri = e => {
					let {
						children: t,
						className: n,
						variant: s,
						...r
					} = e;
					return m.a.createElement("div", ni({}, r, {
						className: Object(ye.a)(ti.a.pillText, si[s], n)
					}), t)
				},
				oi = e => m.a.createElement("svg", {
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
			var ai = n("./src/reddit/controls/Search/CommunityPill/index.m.less"),
				ii = n.n(ai);
			const ci = e => {
				let {
					onClickDismiss: t,
					content: n
				} = e;
				const r = Object(he.e)(v.db);
				return m.a.createElement($a.a, {
					className: ii.a.communityPill,
					"data-testid": "community-pill"
				}, m.a.createElement(ri, {
					className: ii.a.pillText,
					"data-testid": "community-pill-text",
					variant: r ? Ma.NIGHT : Ma.DAY
				}, m.a.createElement(cr.b, {
					className: Object(ye.a)(Xa.a.subredditIcon, ii.a.subredditIcon),
					iconUrl: n.icon
				}), n.title, m.a.createElement("button", {
					"aria-label": s.fbt._("Remove community search filter", null, {
						hk: "1zezc9"
					}),
					className: Object(ye.a)(ii.a.dismissButton, r ? ii.a.dismissButtonNight : ii.a.dismissButtonDay),
					"data-testid": "community-pill-button",
					onClick: t,
					onFocus: e => {
						e.stopPropagation()
					},
					type: "button"
				}, m.a.createElement(oi, {
					className: ii.a.dismissIcon
				}))))
			};
			var li = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				di = n.n(li);
			const ui = e => {
				let {
					inputRef: t,
					onChange: n,
					onClickDismissCommunityPill: r,
					onFocusSearchBar: o,
					onFormSubmit: a,
					onKeyDown: i,
					searchQuery: c,
					showCommunityPill: l,
					subreddit: d,
					multireddit: u
				} = e;
				var p;
				const b = d && {
						icon: null === (p = d.icon) || void 0 === p ? void 0 : p.url,
						title: d.displayText
					} || u && {
						icon: u.icon,
						title: u.displayText
					},
					h = m.a.useContext(Se.a),
					g = l && b ? s.fbt._("Search within {subredditName}", [s.fbt._param("subredditName", b.title)], {
						hk: "2B6J3t"
					}) : s.fbt._("Search all of Reddit", null, {
						hk: "1Fi1f5"
					});
				return m.a.createElement("form", {
					action: "/search/",
					autoComplete: "off",
					className: Object(ye.a)(di.a.searchBar, h && di.a.searchBarExp),
					method: "get",
					onSubmit: a,
					onFocus: o,
					role: "search"
				}, m.a.createElement("label", {
					className: di.a.inputLabel,
					htmlFor: "header-search-bar"
				}, m.a.createElement("div", {
					"aria-hidden": !0,
					className: di.a.iconContainer
				}, m.a.createElement(nr.a, {
					name: "search",
					className: di.a.icon
				})), m.a.createElement(da.a, {
					"aria-live": "assertive"
				}, g)), l && b && m.a.createElement(ci, {
					onClickDismiss: r,
					content: b
				}), m.a.createElement("input", {
					className: di.a.input,
					defaultValue: c,
					id: "header-search-bar",
					name: "q",
					onChange: Za()((function() {
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

			function mi(e) {
				let {
					className: t
				} = e;
				var n, s;
				const r = Object(qa.a)(),
					o = Object(An.ab)(r),
					a = Object(An.X)(r),
					{
						nsfwSessionSetting: i,
						refreshNsfwSessionSettingExpiryTime: l
					} = Object(Aa.b)(),
					[d, b] = Object(u.useState)(-1),
					[h, g] = Object(u.useState)([]),
					[f, O] = Object(u.useState)(!1),
					[y, C] = Object(u.useState)({}),
					[E, x] = Object(u.useState)([]),
					[j, _] = Object(u.useState)(null),
					P = Object(u.useRef)(null),
					S = Object(u.useRef)(null),
					k = Object(Be.b)(),
					N = Object(he.d)(),
					w = Object(he.e)(xn.b),
					M = Object(he.e)(xn.d),
					I = Object(he.e)(v.k),
					T = Object(he.e)(Qa.q),
					A = Object(he.e)(Qa.p),
					R = Object(he.e)(v.Q),
					L = Object(he.e)(Qa.r),
					D = Object(he.e)(v.db),
					F = Object(he.e)(xn.r),
					U = Object(he.e)(e => Object(An.cb)(e, {
						pageLayer: r
					})),
					G = Object(he.e)(e => Object(An.bb)(e, {
						pageLayer: r
					})),
					B = Object(he.e)(e => Object(An.r)(e, {
						pageLayer: r
					})),
					q = Object(he.e)(e => Object(An.e)(e, {
						pageLayer: r
					})),
					H = Object(he.e)(e => Object(Wa.a)(e)),
					W = Object(he.e)(e => Object(za.a)(e, Ha.d.dropdown).slice(0, Ta.d)),
					V = Object(he.e)(Qa.x),
					Q = Object(he.e)(v.kb),
					z = Object(fa.a)(B),
					K = Object(fa.a)(q),
					J = Object(fa.a)(o),
					X = Object(fa.a)(V),
					Y = Object(fa.a)(W),
					Z = ((null === (n = S.current) || void 0 === n ? void 0 : n.value) || "").trim(),
					$ = Ee(Z),
					ee = w ? Object(ln.u)(w) : r ? Object(ln.u)(r) : void 0,
					te = y[Z],
					ne = Object(va.e)({
						...ba()(a || {}, Ra.t),
						q: Z
					});
				Object(u.useEffect)(() => {
					se()
				}, [Y, X, V, W]), Object(u.useEffect)(() => {
					B && (null == z ? void 0 : z.name) !== B.name && !L && ae()
				}, [z, B, L]), Object(u.useEffect)(() => {
					q && (null == K ? void 0 : K.name) !== q.name && !L && ae()
				}, [K, q, L]), Object(u.useEffect)(() => {
					ma()(V) || o ? me(o || "") : ue()
				}, [J, o]);
				const se = () => {
						const e = Object(Fa.a)(X, V),
							t = Object(Fa.a)(Y, W);
						if (!e || !t) {
							const e = V.length ? V : [...E, ...W];
							g(e)
						}
					},
					re = e => N(Object(Oa.r)({
						searchQuery: e
					})),
					oe = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						return e && Ka.a.clear(ka.a.Typeahead), N(Object(Oa.l)())
					},
					ae = () => N(Object(Oa.n)()),
					ie = (e, t, n) => {
						e.preventDefault(), ((e, t, n) => {
							N(Object(p.b)(Object(c.c)({
								pathname: e,
								search: t,
								state: n
							})))
						})(t.url, t.qs, {
							...n,
							routeName: F,
							subredditName: M
						})
					},
					le = async () => {
						W.length || f || (O(!0), await (() => N(Object(Ia.b)(Ha.d.dropdown)))(), O(!1))
					}, de = e => {
						R && I && x(Object(Sn.Ob)({
							...e,
							section: Ha.c.recent
						}, I.id))
					}, ue = function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						b(-1), _(null), me(""), re(""), e && Ka.a.update(ka.a.Typeahead), Oe()
					};

				function me(e) {
					S.current && (S.current.value = e)
				}
				const pe = (e, t, n, s, r) => {
						const o = {
							displayQuery: e,
							rawQuery: t,
							structureType: n,
							searchQuery: Z
						};
						k(Object(Ba.z)(s, o, r))
					},
					be = (e, t, n) => {
						k(Object(Ba.B)(e, t, n))
					},
					ge = (e, t, n, s, r) => {
						k(Object(Ba.D)(e, t, n, s, r))
					},
					fe = () => {
						k(e => Object(Ba.h)(e, ne, B)), (() => N(Object(Oa.k)()))(), Ka.a.update(ka.a.Typeahead)
					},
					ve = e => {
						const t = h[e] || null,
							n = t ? t.searchQuery : "";
						b(e), me(n), _(t)
					},
					Oe = () => {
						if (W.length || le(), I) {
							const e = Object(Sn.M)(I.id);
							e.length > 0 && (x(R ? e : []), g([...e, ...W]))
						}
					},
					Ce = e => {
						!(!A || !A[e]) || (e ? (e => {
							y[e] || (y[e] = !0, C({
								...y
							}), N(wa(e)), y[e] = !1, C({
								...y
							}))
						})(e) : Oe())
					};

				function Ee(e) {
					const t = B && B.icon ? B.icon.url : "",
						n = null == B ? void 0 : B.displayText,
						s = !!B && B.isNSFW,
						r = !!B && B.isQuarantined,
						o = Ha.b.text;
					return {
						id: ga()(),
						searchQuery: e,
						type: o,
						section: Ha.c.recent,
						subredditOrProfileRestrictedName: n,
						displayInfo: {
							iconUrl: t,
							isNSFW: s,
							isQuarantined: r
						}
					}
				}
				return m.a.createElement("div", {
					className: Object(ye.a)(Xa.a.relativeWrapper, mr.a.container, t, {
						"m-open": T
					}),
					id: Ta.b,
					ref: P
				}, m.a.createElement(ui, {
					inputRef: S,
					onChange: e => {
						const t = e.trim();
						Ka.a.update(ka.a.Typeahead), re(t), Ce(t)
					},
					searchQuery: Z,
					onFormSubmit: e => {
						e.preventDefault(), Z.trim() && (async e => {
							var t, n, s;
							const o = (null === (t = S.current) || void 0 === t ? void 0 : t.value) || "";
							if (!o.trim()) return;
							o !== Z && re(o);
							let a, c = {
									...Ha.a
								},
								u = {},
								m = !0;
							if (j && j.searchQuery === Z)(c = j).id || (c.id = ga()()), c.section === Ha.c.recent ? (u = Object(La.c)(La.a.SEARCH_DROPDOWN, ee, c.isProfile || c.isSubreddit), a = va.a.Recent, be(o, c, d)) : c.section === Ha.c.typeahead ? (u = Object(La.c)(La.a.TYPEAHEAD, ee), m = !1, ge(o, c, d, d, h.filter(e => e.isSubreddit))) : c.section === Ha.c.trending ? (u = Object(La.c)(La.a.TYPEAHEAD, ee), a = (null === (n = c.post) || void 0 === n ? void 0 : n.isSponsored) ? va.a.PromotedTrend : va.a.Trending, N((e, t) => Object(Ua.u)({
								state: t(),
								trendingSearch: c,
								telemetrySource: ka.a.Typeahead
							}))) : pe(o, o, ln.c.Search, Ba.a.RECENT);
							else {
								c = Ee(o);
								const e = {
									...Object(va.e)({
										q: Z,
										restrict_sr: U ? "1" : ""
									}),
									id: (null == B ? void 0 : B.id) || "",
									eventType: Boolean(U) ? "subreddit" : void 0
								};
								k(Object(Ba.p)(ln.a.FullSearchButton, e, U, ka.a.Typeahead, r || void 0))
							}
							if (de(c), oe(m), !c.searchQuery) return;
							const p = Object(Da.a)({
								subreddit: B,
								multireddit: q,
								searchItem: c,
								searchOptions: H ? {
									...ne,
									source: a
								} : {
									source: a
								},
								shouldSearchSubreddit: U,
								shouldSearchMultireddit: G,
								includeNsfwResults: Q && i
							});
							ie(e, p, u), c.isTypeaheadSuggestion && ue(m), l(), null === (s = S.current) || void 0 === s || s.blur()
						})(e)
					},
					onFocusSearchBar: () => {
						Object(Wo.c)(Wo.a.SearchResults) || Object(Wo.d)(Wo.a.SearchResults), Ka.a.update(ka.a.Typeahead), k(Object(Ba.p)(ln.a.SearchBar, ne, U, ka.a.Typeahead, r || void 0)), T || ((() => N(Object(Oa.m)()))(), k(Object(Ga.u)(ne, null != r ? r : void 0, Object(Va.b)({
							pageLayer: r
						})))), Ce(Z)
					},
					onKeyDown: e => {
						if (e.key === Ho.b.Escape || e.key === Ho.b.Tab) oe();
						else if (e.key === Ho.b.ArrowDown) {
							if (e.preventDefault(), 0 === h.length || !T) return;
							if (d >= h.length - 1) return;
							ve(d + 1)
						} else if (e.key === Ho.b.ArrowUp) {
							if (e.preventDefault(), 0 === h.length || !T) return;
							if (-1 === d) return;
							ve(d - 1)
						} else e.key === Ho.b.Backspace && !Z && (U || G) && L && fe()
					},
					onClickDismissCommunityPill: fe,
					showCommunityPill: U || G,
					subreddit: B,
					multireddit: q
				}), m.a.createElement(Ta.c, {
					containerWidth: null === (s = P.current) || void 0 === s ? void 0 : s.offsetWidth,
					focusedItemIndex: d,
					searchOriginPage: ee,
					isOpen: T,
					isTrendingPending: f,
					isTypeaheadPending: te,
					itemList: h,
					nightmode: D,
					recentSearches: E,
					trendingItems: W,
					searchItem: $,
					typeaheadSuggestions: V,
					onClearSearchQuery: ue,
					onClose: oe,
					onRemoveRecentSearch: e => {
						I && 0 !== E.length && (Object(Sn.bb)(e, I.id), x(E.filter(t => t.searchQuery !== e.searchQuery)), b(-1))
					},
					onSendSearchClickRecentEvent: be,
					onSendSearchClickTypeaheadEvent: ge,
					onSetRecentSearch: de,
					onUpdateSearchQuery: me,
					fireAdPixelsOfType: (e, t) => N(Object(ce.z)(e, t))
				}))
			}
			var pi = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				bi = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				hi = n("./src/reddit/selectors/responsivePage.ts"),
				gi = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				fi = n.n(gi);
			var vi, Oi = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(ye.a)(fi.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": s.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: fi.a.HomeLink,
						href: i.a.redditUrl
					}, m.a.createElement(pi.a, {
						className: fi.a.Snoo
					}), m.a.createElement(bi.a, {
						className: fi.a.Wordmark,
						color: "inherit"
					})))
				},
				yi = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Ci = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Ei = n("./src/reddit/hooks/useTracking.ts"),
				xi = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				ji = n.n(xi),
				_i = n("./src/reddit/components/Header/NavBarIcon/index.m.less"),
				Pi = n.n(_i);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(vi || (vi = {}));
			var Si = e => {
					const {
						eventNoun: t,
						imageSource: n,
						navLink: s,
						tooltip: r
					} = e, o = Object(Ei.a)(), a = Object(Ci.a)(), [i, c] = Object(u.useState)(vi.Hidden), l = Object(u.useCallback)(() => {
						Object(Sn.Ib)({
							clicked: !0
						}), o(e => ({
							...Object(ln.n)(e),
							source: "nav",
							action: "click",
							noun: t
						}))
					}, [o, t]);
					return Object(u.useEffect)(() => {
						const e = Object(Sn.G)();
						e ? 3 !== e.views || e.clicked ? !e.clicked && e.views ? (Object(Sn.Ib)({
							views: e.views + 1
						}), c(vi.Visible)) : e.clicked && c(vi.Visible) : c(vi.Hidden) : (Object(Sn.Ib)({
							views: 1
						}), c(vi.Visible))
					}, []), i === vi.Hidden ? null : m.a.createElement(m.a.Fragment, null, m.a.createElement($s.a, {
						className: `${ji.a.icon} ${Pi.a.linkIcon}`,
						innerRef: a.target.ref,
						to: s,
						onClick: l,
						onMouseEnter: a.show,
						onMouseLeave: a.hide
					}, m.a.createElement("img", {
						className: Pi.a.navIcon,
						src: n
					})), m.a.createElement(yi.a, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible
					}, r))
				},
				ki = n("./src/reddit/actions/cooldownTime.ts");

			function Ni(e) {
				return `${e}`.padStart(2, "0")
			}
			class wi {
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
			var Mi = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Ii = n("./src/reddit/components/Header/QuickLinks/Timer.m.less"),
				Ti = n.n(Ii);
			const Ai = Object(X.c)({
				isEmbedSubredditPage: Mi.c,
				isRequestPending: e => e.cooldownTimer.api.pending,
				expiresAt: e => e.cooldownTimer.expiresAt,
				currentPage: xn.b
			});
			class Ri extends m.a.Component {
				constructor(e) {
					super(e), this.drawTimer = e => {
						const t = function(e) {
							if (!e) return null;
							const t = Math.min(99, Math.floor(e / 60 / 60)),
								n = Math.floor(e / 60 % 60),
								s = Math.floor(e % 60);
							return t || n || s ? t ? `${t}h${Ni(n)}` : `${n}:${Ni(s)}` : null
						}(e);
						this.state.countdown !== t && this.setState({
							countdown: t
						})
					}, this.timer = new wi(this.drawTimer), this.state = {
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
					return t && !n ? null : !e || n ? m.a.createElement(jr.a, {
						isActive: !0,
						unreadCount: -1,
						showEmpty: !0
					}) : m.a.createElement("div", {
						className: Ti.a.timer
					}, s.fbt._("{Time remaining}", [s.fbt._param("Time remaining", e)], {
						hk: "4it6wP"
					}))
				}
			}
			var Li = Object(he.b)(Ai, e => ({
					fetchCooldownTimer: () => e(Object(ki.e)())
				}))(Ri),
				Di = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				Fi = n("./src/reddit/icons/svgs/HotPotato/index.tsx");
			var Ui = e => m.a.createElement("svg", {
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
			const Gi = e => {
					return Object(Na.c)(e, {
						experimentEligibilitySelector: Na.a,
						experimentName: Tn.Gb
					}) === Tn.Jd
				},
				Bi = e => {
					return Object(Na.c)(e, {
						experimentEligibilitySelector: Na.a,
						experimentName: Tn.cf
					}) === Tn.Jd
				};
			var qi = m.a.memo((function(e) {
					const t = Object(Ei.a)(),
						n = Object(he.d)(),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(ln.n)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						o = Object(u.useCallback)(() => {
							t(e => ({
								...Object(ln.n)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(Mr.a)(wr.c[wr.b.Rpan])), t(e => ({
								...Object(ln.n)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(u.useCallback)(() => {
							t(Object(Di.b)())
						}, [t]),
						c = Object(he.e)(v.Q),
						l = Object(he.e)(Gi),
						d = Object(he.e)(gr.a),
						p = Object(he.e)(Bi),
						b = Object(he.e)(Mi.a),
						h = Object(he.e)(Mi.b),
						g = Object(Ci.a)(),
						f = Object(Ci.a)(),
						O = Object(Ci.a)(),
						y = Object(Ci.a)(),
						C = Object(Ci.a)();
					return m.a.createElement("div", {
						className: Object(ye.a)(ji.a.container, e.className)
					}, m.a.createElement("div", {
						className: ji.a.row
					}, m.a.createElement($s.a, {
						className: ji.a.icon,
						innerRef: g.target.ref,
						to: c ? wr.c[wr.b.Popular] : wr.c[wr.b.Home],
						onClick: r,
						onMouseEnter: g.show,
						onMouseLeave: g.hide
					}, m.a.createElement(nr.a, {
						name: "popular"
					})), m.a.createElement(yi.a, {
						arrowProps: g.arrowProps,
						popperProps: g.popperProps,
						visible: g.visible
					}, s.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement($s.a, {
						className: ji.a.icon,
						innerRef: f.target.ref,
						to: wr.c[wr.b.All],
						onClick: o,
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, m.a.createElement(nr.a, {
						name: "all"
					})), m.a.createElement(yi.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, s.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), d && m.a.createElement(m.a.Fragment, null, m.a.createElement($s.a, {
						className: ji.a.icon,
						innerRef: O.target.ref,
						to: wr.c[wr.b.Rpan],
						onClick: a,
						onMouseEnter: O.show,
						onMouseLeave: O.hide
					}, m.a.createElement(nr.a, {
						name: "video_live"
					})), m.a.createElement(yi.a, {
						arrowProps: O.arrowProps,
						popperProps: O.popperProps,
						visible: O.visible
					}, s.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), p && m.a.createElement(m.a.Fragment, null, m.a.createElement($s.a, {
						className: ji.a.icon,
						innerRef: y.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: y.show,
						onMouseLeave: y.hide
					}, m.a.createElement(Ui, {
						className: ji.a.psBattlesIcon
					})), m.a.createElement(yi.a, {
						arrowProps: y.arrowProps,
						popperProps: y.popperProps,
						visible: y.visible
					}, s.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					}))), b && m.a.createElement(m.a.Fragment, null, m.a.createElement($s.a, {
						className: Object(ye.a)(ji.a.icon, ji.a.hotPotatoLink),
						innerRef: C.target.ref,
						to: `/r/${h}`,
						onMouseEnter: C.show,
						onMouseLeave: C.hide,
						onClick: i
					}, m.a.createElement(Fi.a, {
						className: ji.a.hotPotatoIcon
					}), m.a.createElement(Li, null)), m.a.createElement(yi.a, {
						arrowProps: C.arrowProps,
						popperProps: C.popperProps,
						visible: C.visible
					}, s.fbt._("Place your tile", null, {
						hk: "2ZCdRE"
					}))), l && m.a.createElement(Si, {
						eventNoun: "love_island",
						imageSource: "https://styles.redditmedia.com/t5_3lwmq/styles/communityIcon_7atioswvjm671.png?width=256&s=6096b8adbfa2d4911d9bc92afff25fd764987498",
						navLink: "/r/LoveIslandTV/",
						tooltip: s.fbt._("Visit r/LoveIslandTV for the latest!", null, {
							hk: "22mySr"
						})
					})))
				})),
				Hi = n("./src/reddit/actions/tooltip.ts"),
				Wi = n("./src/lib/combineRefs/index.tsx"),
				Vi = n("./src/lib/hooks/useOnClickOutside.ts"),
				Qi = n("./src/lib/hooks/useTooltip.ts"),
				zi = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				Ki = n.n(zi);

			function Ji() {
				return (Ji = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Xi = Ue.a.button("Button", Ki.a),
				Yi = Ue.a.div("Container", Ki.a);

			function Zi(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(Xi, Ji({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(Yi, {
					className: Object(ye.a)({
						[Ki.a.isOpen]: n
					})
				}, t))
			}
			var $i = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				ec = n.n($i);
			var tc = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(jr.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount,
					showEmpty: !e.unreadCount
				}), m.a.createElement(nr.a, {
					name: "notification",
					className: ec.a.icon2020
				})),
				nc = n("./src/reddit/components/InboxBanner/index.m.less"),
				sc = n.n(nc);
			var rc = Object(Ft.a)(e => {
					let {
						onClose: t
					} = e;
					const n = Object(N.b)(navigator.userAgent);
					return m.a.createElement(Gt.e, null, m.a.createElement(Gt.i, {
						className: sc.a.modalHeader
					}, m.a.createElement(Gt.q, {
						className: sc.a.modalTitle
					}, s.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(tn.t, {
						onClick: t,
						Icon: Object(nr.b)("close_fill"),
						size: tn.d.XXS,
						priority: tn.c.Plain,
						className: sc.a.modalCloseIcon
					})), m.a.createElement(Gt.l, null, m.a.createElement("ul", {
						className: sc.a.modalList
					}, m.a.createElement("li", {
						className: sc.a.modalListItem
					}, m.a.createElement("span", null, "1"), s.fbt._("Click on {lockIcon} in your browser address bar", [s.fbt._param("lockIcon", m.a.createElement(nr.a, {
						name: "lock_fill",
						className: sc.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), n && m.a.createElement("li", {
						className: sc.a.modalListItem
					}, m.a.createElement("span", null, "2"), s.fbt._("Select {lockIcon} site settings", [s.fbt._param("lockIcon", m.a.createElement(nr.a, {
						name: "settings_fill",
						className: sc.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: sc.a.modalListItem
					}, m.a.createElement("span", null, n ? 3 : 2), s.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [s.fbt._param("lockIcon", m.a.createElement(nr.a, {
						name: "notification_fill",
						className: sc.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(Gt.g, null, m.a.createElement(tn.t, {
						text: s.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: t
					})))
				}),
				oc = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				ac = n.n(oc);

			function ic() {
				return (ic = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var cc = m.a.memo((function(e) {
					let {
						visible: t,
						...n
					} = e;
					const [s, r] = Object(u.useState)(t);
					return Object(u.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, r(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), r(!1)
						}
					}, [t]), t ? m.a.createElement("div", ic({
						id: "INBOX--TOOLTIP",
						className: Object(ye.a)(ac.a.tooltip, {
							[ac.a.visible]: s
						})
					}, n.popperProps), n.children) : null
				})),
				lc = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				dc = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				uc = n("./node_modules/icepick/icepick.js");
			const mc = Object(uc.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var pc = n("./src/reddit/selectors/activeModal.ts"),
				bc = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				hc = n.n(bc);
			const gc = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				fc = m.a.memo((function(e) {
					const t = Object(he.d)(),
						n = Object(Ci.a)(),
						r = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(Qi.a)(e);
								return Object(uc.updateIn)(t, ["modifiers"], e => Object(uc.push)(e, mc))
							}, [e]);
							return Object(Qi.b)(t)
						}(),
						o = Object(Qi.b)(gc),
						[a, i] = Object(dc.a)(e.userId),
						c = Object(he.e)(Object(pc.c)("browser_notifications_permission_settings")),
						l = Object(u.useCallback)(() => {
							r.hide(), n.hide(), a || i()
						}, [r, n, i, a]);
					Object(Vi.a)("INBOX--TOOLTIP", l);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(Wi.a)(n.target.ref, r.target.ref, o.target.ref)
					}, m.a.createElement(Zi, {
						"aria-expanded": r.visible,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: hc.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), r.visible ? l() : r.show(), e.sendNavClickInbox()
						},
						isOpen: r.visible
					}, m.a.createElement(tc, {
						unreadCount: e.unreadCount
					})), !r.visible && !o.visible && m.a.createElement(yi.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, s.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(cc, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, m.a.createElement(lc.a, {
						isOpen: r.visible,
						hideTooltip: l,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					}))), c && m.a.createElement(rc, {
						onClose: () => {
							t(Object(wt.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var vc = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Oc = n("./src/reddit/actions/snoovatarModal.ts"),
				yc = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Cc = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Ec = n("./src/lib/initializeClient/installReducer.ts"),
				xc = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(Ec.a)({
				features: {
					avatar: xc.a
				}
			});
			const jc = e => 864e5 * e,
				_c = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				Pc = e => {
					const t = Object(xn.q)(e);
					return Boolean((null == t ? void 0 : t[Ra.v]) && Object(R.a)(t[Ra.v]))
				},
				Sc = (e, t, n) => {
					var s;
					const r = !!(null === (s = Object(v.k)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return kc(e, t) && n === r
				},
				kc = (e, t) => {
					const n = Object(v.k)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > jc(t)
				};
			var Nc = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				wc = n.n(Nc);
			const {
				fbt: Mc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Ic(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "view";
				if (e) {
					const n = Object(Sn.x)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(Sn.jb)(s)
				}
			}
			var Tc = e => {
					let {
						avatarUrlParams: t
					} = e;
					const n = Object(he.e)(_c),
						s = Object(he.d)(),
						r = Object(Ei.a)();
					Object(u.useEffect)(() => {
						r(Object(yc.p)())
					}, [r]), Object(u.useEffect)(() => {
						n || s(Object(vc.a)())
					}, [s, n]), Object(u.useEffect)(() => {
						Ic(n)
					}, [n]);
					return m.a.createElement(tn.k, {
						onClick: () => {
							r(Object(yc.d)()), Ic(n, "click"), s(Object(Oc.b)({
								share: t,
								source: "quick_create"
							}))
						},
						className: wc.a.ctaContainer
					}, m.a.createElement("img", {
						className: wc.a.quickCreateGiftAnimation,
						src: `${i.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Mc._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Cc.a, {
						className: Object(ye.a)(wc.a.sparkle, wc.a.sparkle1)
					}), m.a.createElement(Cc.a, {
						className: Object(ye.a)(wc.a.sparkle, wc.a.sparkle2)
					}), m.a.createElement(Cc.a, {
						className: Object(ye.a)(wc.a.sparkle, wc.a.sparkle3)
					})), Mc._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				Ac = n("./src/reddit/selectors/avatarMarketing.ts"),
				Rc = n("./src/reddit/components/Header/AvatarStorefrontCta/index.m.less"),
				Lc = n.n(Rc);
			const {
				fbt: Dc
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Fc = () => {
					const e = Object(he.d)(),
						t = Object(Ei.a)(),
						n = Object(he.e)(Ac.b);
					Object(u.useEffect)(() => {
						n || e(Object(vc.a)())
					}, [n, e]);
					return m.a.createElement(tn.a, {
						onClick: () => {
							e(Object(Oc.b)({
								clickSource: "nav"
							})), t(yc.c)
						},
						className: Lc.a.ctaContainer
					}, m.a.createElement(Cc.a, {
						className: Object(ye.a)(Lc.a.sparkle, Lc.a.sparkle1)
					}), m.a.createElement(Cc.a, {
						className: Object(ye.a)(Lc.a.sparkle, Lc.a.sparkle2)
					}), m.a.createElement(Cc.a, {
						className: Object(ye.a)(Lc.a.sparkle, Lc.a.sparkle3)
					}), Dc._("Shop Avatars", null, {
						hk: "280YIG"
					}))
				},
				Uc = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				Gc = n("./src/reddit/actions/changeUsername.ts"),
				Bc = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				qc = n("./src/reddit/actions/postCreation/general.ts"),
				Hc = n("./src/reddit/actions/preferences.ts"),
				Wc = n("./src/reddit/components/BlockNavigation/index.tsx"),
				Vc = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				Qc = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var zc = Object(Mt.a)({
					getComponent: () => Object(ne.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Kc = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Jc = n("./src/reddit/components/Settings/modalIds.ts"),
				Xc = n("./src/reddit/helpers/trackers/emailCollection.ts"),
				Yc = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				Zc = n("./src/reddit/icons/svgs/Close/index.tsx"),
				$c = n("./src/reddit/selectors/emailCollection.ts"),
				el = n("./src/reddit/selectors/emailVerification.ts"),
				tl = n("./src/reddit/selectors/experiments/emailEnablement.ts"),
				nl = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				sl = n.n(nl);
			var rl = Object(Kc.a)(e => {
					let {
						closeTooltip: t,
						email: n,
						resendEmail: r,
						toggleChangeEmailModal: o
					} = e;
					const a = Object(Be.b)(),
						i = Object(he.d)(),
						c = Object(he.e)(el.c),
						l = Object(he.e)(tl.c),
						d = Object(he.e)($c.a),
						p = Object(he.e)(tl.b);
					Object(u.useEffect)(() => {
						a(d ? Object(Xc.f)(Yc.a) : Object(Yc.g)(Yc.a))
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
						className: sl.a.container
					}, m.a.createElement("div", {
						className: sl.a.topLine
					}), m.a.createElement("button", {
						className: sl.a.closeWrapper,
						onClick: () => {
							a(d ? Object(Xc.e)(Yc.a) : Object(Yc.c)(Yc.a)), t()
						}
					}, m.a.createElement(Zc.a, {
						className: sl.a.closeIcon
					})), m.a.createElement("h5", {
						className: sl.a.title
					}, h), !l && m.a.createElement("p", {
						className: sl.a.subtitle
					}, n), m.a.createElement("p", {
						className: sl.a.description
					}, b), m.a.createElement("div", {
						className: sl.a.buttonWrapper
					}, d ? m.a.createElement(tn.t, {
						onClick: () => {
							i(Object(wt.h)(Jc.h)), a(Object(Xc.a)(Yc.a))
						},
						priority: tn.c.Secondary,
						isFullWidth: !0
					}, s.fbt._("Add email", null, {
						hk: "3DXT0n"
					})) : m.a.createElement(m.a.Fragment, null, m.a.createElement(tn.t, {
						priority: tn.c.Secondary,
						onClick: e => {
							e.stopPropagation(), a(Object(Yc.e)(Yc.a, "update")), o()
						},
						isFullWidth: !0
					}, s.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(tn.t, {
						isFullWidth: !0,
						onClick: () => {
							a(Object(Yc.e)(Yc.a, "confirm")), r(), t()
						}
					}, s.fbt._("Got it", null, {
						hk: "3IP9TO"
					})))))
				}, [vo.a.Click, vo.a.Keydown, vo.a.Resize]),
				ol = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				al = n.n(ol);
			const il = e => {
				let {
					exposeIFrameElement: t
				} = e;
				return m.a.createElement(Ge.a, {
					className: al.a.loggedInGoogleOneTap,
					exposeIFrameElement: t,
					path: qe.c.GoogleOneTap
				})
			};
			var cl = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				ll = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				dl = n.n(ll);
			const {
				fbt: ul
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ml = e => {
					const {
						onCloseFlyout: t
					} = e;
					return m.a.createElement("div", {
						className: dl.a.container
					}, m.a.createElement("p", {
						className: dl.a.title
					}, ul._("New User Settings", null, {
						hk: "1Sziu9"
					})), m.a.createElement("h5", {
						className: dl.a.subtitle
					}, ul._("Like customizing Reddit?", null, {
						hk: "38eFal"
					})), m.a.createElement("p", {
						className: dl.a.description
					}, ul._("You can save how you sort and view your communities in user settings.", null, {
						hk: "XMkGT"
					})), m.a.createElement(tn.o, {
						className: dl.a.dismissBtn,
						onClick: t
					}, ul._("Got it", null, {
						hk: "3IP9TO"
					})))
				},
				pl = n("./node_modules/lodash/noop.js"),
				bl = n.n(pl),
				hl = n("./src/lib/prettyPrintNumber/index.ts"),
				gl = n("./src/realtime/GQLSubscription/async.tsx"),
				fl = n("./src/reddit/actions/alpha.ts"),
				vl = n("./src/reddit/actions/modMode.ts"),
				Ol = n("./src/reddit/actions/profile/index.ts"),
				yl = n("./src/reddit/constants/elementClassNames.ts"),
				Cl = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				El = n("./src/reddit/helpers/karma.ts"),
				xl = n("./src/reddit/hooks/useWindowEvent.ts"),
				jl = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				_l = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Pl = n("./src/reddit/layout/row/InlineButton/index.tsx");
			const Sl = e => Object(Na.c)(e, {
				experimentName: Tn.Uf,
				experimentEligibilitySelector: Na.a
			}) === Tn.Jd;
			var kl = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Nl = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				wl = n("./src/reddit/selectors/modModeEnabled.ts"),
				Ml = n("./src/reddit/selectors/seo/index.ts"),
				Il = n("./src/reddit/selectors/tooltip.ts"),
				Tl = n("./src/higherOrderComponents/asTooltip.tsx"),
				Al = n("./src/lib/constants/icons.ts"),
				Rl = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Ll = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				Dl = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				Fl = n.n(Dl);
			const Ul = (e, t) => e && m.a.createElement("div", {
				className: Fl.a.marketingBadge
			}, m.a.createElement(Rl.a, {
				className: Fl.a.marketingAsset,
				headshot: e
			}), s.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Cc.a, {
				className: Object(ye.a)(Fl.a.sparkle, Fl.a.sparkle1)
			}), m.a.createElement(Cc.a, {
				className: Object(ye.a)(Fl.a.sparkle, Fl.a.sparkle2)
			}), m.a.createElement(Cc.a, {
				className: Object(ye.a)(Fl.a.sparkle, Fl.a.sparkle3)
			}), m.a.createElement(Cc.a, {
				className: Object(ye.a)(Fl.a.sparkle, Fl.a.sparkle4)
			})));
			var Gl = e => {
					let {
						useNewButtonComponent: t,
						onClick: n
					} = e;
					var r;
					const o = Object(he.d)(),
						a = Object(Ei.a)(),
						i = Object(An.gb)(),
						c = Object(he.e)(e => e.user.account),
						l = Object(he.e)(or.d),
						d = Object(he.e)(Ac.b),
						u = Object(he.e)(Ac.a),
						p = () => o(Object(Oc.b)({
							clickSource: "nav"
						})),
						b = Object(he.e)(Z.j).startsWith("en");
					if ((null === (r = null == i ? void 0 : i.meta) || void 0 === r ? void 0 : r.name) === P.Nb.AVATAR) return null;
					d || o(Object(vc.a)()), u && a(yc.n);
					const h = c && c.snoovatarFullBodyAsset ? s.fbt._("Style Avatar", null, {
							hk: "1HIsKA"
						}) : s.fbt._("Create Avatar", null, {
							hk: "3kfCbX"
						}),
						g = () => {
							p(), u && a(yc.c), null == n || n()
						};
					if (t) {
						const e = m.a.createElement(m.a.Fragment, null, h, b && Ul(u, l));
						return m.a.createElement(To, {
							onClick: g,
							title: e,
							titleClassName: Fl.a.avatarLinkBody
						})
					}
					const f = Object(Ll.c)((null == c ? void 0 : c.snoovatarFullBodyAsset) ? wd("avatar_style") : wd("add"), ((e, t, n, s) => r => m.a.createElement("div", {
						className: `${Fl.a.avatarLinkBody} ${r.className}`
					}, e, s && Ul(t, n)))(h, u, l, b));
					return m.a.createElement(f, {
						onClick: p
					})
				},
				Bl = n("./src/reddit/helpers/trackers/user.ts");
			var ql = e => {
					const {
						title: t,
						children: n,
						icon: s
					} = e;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
						className: Object(ye.a)(_o.a.heading, So.a.category)
					}, m.a.createElement("span", {
						className: _o.a.headingContent
					}, m.a.createElement("span", {
						className: _o.a.iconContainer
					}, s), m.a.createElement("span", {
						className: _o.a.title
					}, t))), m.a.createElement("div", {
						className: _o.a.contentContainer
					}, n))
				},
				Hl = n("./src/reddit/helpers/trackers/modTools.ts");
			const Wl = () => {
					const e = Object(he.d)(),
						t = Object(Ei.a)(),
						n = Object(he.e)(v.db);
					return m.a.createElement(Lo, {
						isEnabled: n,
						onClick: () => {
							t(Object(Bl.f)(n)), (t => e(Object(Hc.z)(t)))(!n)
						},
						title: s.fbt._("Dark Mode", null, {
							hk: "PaAOV"
						})
					})
				},
				Vl = () => {
					const e = Object(he.d)(),
						t = Object(Ei.a)(),
						n = Object(he.e)(e => e.user.account),
						r = Object(he.e)(wl.a);
					return n && n.isMod ? m.a.createElement(Lo, {
						isEnabled: r,
						onClick: () => {
							t(Object(Hl.k)(!r)), (() => e(Object(vl.b)()))()
						},
						title: s.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				};
			var Ql = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				zl = n.n(Ql);
			const Kl = () => {
					const e = Object(he.d)(),
						t = Object(Be.b)(),
						n = Object(he.e)(v.k),
						r = Object(he.e)(v.V);
					return n ? m.a.createElement(ql, {
						icon: m.a.createElement(nr.a, {
							name: "profile"
						}),
						title: s.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(Lo, {
						title: s.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: r,
						onClick: () => {
							t(Object(Bl.g)(!r)), (t => e(Object(Hc.I)({
								showPresence: t
							})))(!r)
						}
					}), m.a.createElement(Ao, {
						title: s.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(Fo.c)("profile"))
					}), m.a.createElement(Gl, {
						onClick: () => e(Object(Hi.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(Ao, {
						title: s.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(Fo.c)("settings"))
					})) : null
				},
				Jl = () => {
					return Object(he.e)(v.k) ? m.a.createElement(ql, {
						title: s.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(nr.a, {
							name: "views"
						})
					}, m.a.createElement(Vl, null), m.a.createElement(Wl, null)) : null
				},
				Xl = e => {
					let {
						isOpen: t,
						onClick: n
					} = e;
					return Object(he.e)(v.k) ? null : m.a.createElement(No, {
						icon: m.a.createElement(nr.a, {
							name: "settings"
						}),
						title: s.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: t,
						onClick: n
					}, m.a.createElement(Wl, null))
				},
				Yl = e => {
					let {
						isOpen: t,
						onClick: n,
						sendEvent: r,
						useClassicUserMenuStyles: o = !1
					} = e;
					return m.a.createElement(No, {
						buttonClassName: o ? zl.a.button : "",
						headingClassName: o ? zl.a.headingContent : "",
						icon: m.a.createElement(nr.a, {
							name: "rules"
						}),
						isOpen: t,
						noBottomDivider: o,
						onClick: (e, t) => {
							r(Object(Fo.c)(t ? "terms_chevron" : "terms_menu")), "function" == typeof n && n(e)
						},
						title: s.fbt._("Terms & Policies", null, {
							hk: "3sa1sF"
						})
					}, m.a.createElement(Ao, {
						className: o ? zl.a.basicLink : "",
						href: "https://www.redditinc.com/policies/user-agreement",
						onClick: () => r(Object(Fo.c)("user_agreement")),
						title: s.fbt._("User Agreement", null, {
							hk: "kfqI"
						})
					}), m.a.createElement(Ao, {
						className: o ? zl.a.basicLink : "",
						href: "https://www.redditinc.com/policies/privacy-policy",
						onClick: () => r(Object(Fo.c)("privacy_policy")),
						title: s.fbt._("Privacy Policy", null, {
							hk: "y8Vyn"
						})
					}), m.a.createElement(Ao, {
						className: o ? zl.a.basicLink : "",
						href: "https://www.redditinc.com/policies/content-policy",
						onClick: () => r(Object(Fo.c)("content_policy")),
						title: s.fbt._("Content Policy", null, {
							hk: "2xjmLL"
						})
					}), m.a.createElement(Ao, {
						className: o ? zl.a.basicLink : "",
						href: "https://www.redditinc.com/policies/moderator-guidelines",
						onClick: () => r(Object(Fo.c)("mod_policy")),
						title: s.fbt._("Moderator Guidelines", null, {
							hk: "2AfPVY"
						})
					}))
				};
			var Zl = n("./src/reddit/components/HiddenDiv.tsx"),
				$l = n("./src/reddit/controls/Dropdown/index.tsx"),
				ed = n("./src/reddit/helpers/trackers/authControls.ts"),
				td = n("./src/reddit/helpers/trackers/subredditCreation.ts");
			const nd = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: _o.a.headingContent
					}, m.a.createElement("span", {
						className: _o.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(ye.a)(_o.a.title, s)
					}, n))
				},
				sd = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: r,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(ye.a)(_o.a.button, t),
						onClick: s
					}, m.a.createElement(nd, {
						icon: n,
						title: r,
						titleClassName: o
					}))
				},
				rd = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: r,
						rel: o,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(xo, {
						className: Object(ye.a)(_o.a.button, t),
						href: n,
						rel: o,
						onClick: r
					}, m.a.createElement(nd, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				},
				od = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					const t = e.getFullYear(),
						n = e.getMonth();
					return `/posts/${n>=6?t:t-1}/`
				};
			var ad = e => [{
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
				url: od()
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
			var id = e => {
					let {
						isCommunityLinkVisible: t,
						isLoggedIn: n,
						isOpen: r,
						onClick: o,
						sendEvent: a,
						url: i
					} = e;
					return m.a.createElement(No, {
						icon: m.a.createElement(nr.a, {
							name: "info"
						}),
						title: s.fbt._("More", null, {
							hk: "42foEw"
						}),
						isOpen: r,
						onClick: (e, t) => {
							a(Object(Fo.c)(t ? "more_chevron" : "more_menu")), "function" == typeof o && o(e)
						}
					}, ad(t).map(e => ((e, t) => {
						let {
							isHidden: n,
							noun: s,
							rel: r,
							title: o,
							url: a
						} = e;
						return !n && m.a.createElement(Ao, {
							href: a,
							key: a,
							onClick: () => {
								s && t(Object(Fo.c)(s))
							},
							rel: r,
							title: o()
						})
					})(e, a)), n ? m.a.createElement(Ao, {
						href: "https://old.reddit.com" + i,
						title: s.fbt._("Visit Old Reddit", null, {
							hk: "3Fo9ag"
						}),
						onClick: () => {
							a(Object(Fo.c)("old_reddit")), a(e => ({
								source: "redesignbanner",
								action: "click",
								noun: "2xdropdown_visit_old",
								screen: ln.ab(e),
								subreddit: ln.ib(e)
							}))
						}
					}) : null)
				},
				cd = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				ld = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				dd = n.n(ld);
			var ud = e => {
				let {
					isOpen: t,
					onClick: n
				} = e;
				const [{
					links: r,
					showAll: o
				}, a] = Object(u.useState)({
					links: Object(cd.b)(),
					showAll: !1
				});
				if (Object(u.useEffect)(() => {
						t || a({
							links: r,
							showAll: !1
						})
					}, [r, t]), 0 === r.length) return null;
				const i = o ? r : r.slice(0, 3),
					c = () => a({
						links: r,
						showAll: !o
					});
				return m.a.createElement(No, {
					"aria-hidden": !0,
					icon: m.a.createElement(nr.a, {
						name: "history"
					}),
					isOpen: t,
					title: s.fbt._("Recent Communities", null, {
						hk: "cJ4rl"
					}),
					onClick: n
				}, i.map(e => {
					var t, n;
					return m.a.createElement(Ro, {
						className: dd.a.basicLink,
						href: e.url,
						iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : dd.a.subredditIcon,
						iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
						key: e.url,
						title: e.title,
						titleClassName: dd.a.title
					})
				}), r.length > 3 && (e => m.a.createElement("span", {
					className: _o.a.spanButton,
					onClick: c
				}, m.a.createElement("span", {
					className: Object(ye.a)(_o.a.headingContent, dd.a.headingContent)
				}, m.a.createElement("span", {
					className: _o.a.title
				}, e))))(o ? s.fbt._("see less", null, {
					hk: "3tQWvR"
				}) : s.fbt._("see more", null, {
					hk: "1WV0AC"
				})))
			};

			function md() {
				return (md = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const pd = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				bd = e => {
					const t = e && e.coins || 0;
					return s.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [s.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var hd;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(hd || (hd = {}));
			var gd = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						isCommunityLinkVisible: r,
						isNsfwBlocking: o,
						logoutUser: a,
						onClick: i,
						openCommunityCreationModal: c,
						sendEvent: l,
						shouldShowCreateCommunityItem: d,
						url: p,
						user: b
					} = e, [h, g] = Object(u.useState)(hd.TermsAndPolicies), f = e => () => {
						g(h === e ? null : e)
					}, v = e => ({
						onClick: f(e),
						isOpen: h === e
					}), O = !!b, y = () => {
						t(), n(o)
					}, C = () => m.a.createElement(rd, {
						className: So.a.button,
						icon: m.a.createElement(nr.a, {
							name: "campaign"
						}),
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => l(Object(Bl.b)()),
						title: s.fbt._("Advertise on Reddit", null, {
							hk: "3R4KSI"
						})
					});
					return m.a.createElement("div", {
						onClick: pd
					}, m.a.createElement(Kl, null), m.a.createElement(Jl, null), m.a.createElement(() => d ? m.a.createElement(sd, {
						className: So.a.button,
						icon: m.a.createElement(nr.a, {
							name: "community"
						}),
						onClick: () => {
							c(), l(Object(td.a)()), i()
						},
						title: s.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), O && m.a.createElement(C, null), m.a.createElement(() => m.a.createElement(rd, {
						className: So.a.coinsLink,
						icon: m.a.createElement(nr.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, s.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: So.a.meta
						}, bd(b))),
						onClick: () => {
							Object(Wo.d)(Wo.a.GoldPayment, !0), e.sendEvent(Object(Bl.d)())
						},
						titleClassName: So.a.coinsTitle
					}), null), m.a.createElement(() => m.a.createElement(rd, {
						className: So.a.button,
						icon: m.a.createElement(nr.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(Wo.d)(Wo.a.GoldPayment, !0), e.sendEvent(Object(Bl.e)())
						},
						title: s.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(rd, {
						className: So.a.button,
						icon: m.a.createElement(nr.a, {
							name: "live"
						}),
						href: Ar.a,
						onClick: () => e.sendEventWithName("reddit_talk"),
						title: s.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !O && m.a.createElement(ud, v(hd.RecentCommunitiesMenu)), m.a.createElement(qo, md({}, v(hd.ExploreMenu), {
						sendEvent: l
					})), m.a.createElement(Xl, v(hd.Settings)), !O && m.a.createElement(C, null), m.a.createElement(() => m.a.createElement(rd, {
						className: So.a.button,
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(nr.a, {
							name: "help"
						}),
						title: s.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(id, md({}, v(hd.MoreMenu), {
						isCommunityLinkVisible: r,
						isLoggedIn: O,
						url: p,
						sendEvent: l
					})), m.a.createElement(Yl, md({}, v(hd.TermsAndPolicies), {
						sendEvent: l
					})), m.a.createElement(() => O ? m.a.createElement(sd, {
						className: So.a.button,
						icon: m.a.createElement(nr.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), a()
						},
						title: s.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(sd, {
						className: So.a.button,
						icon: m.a.createElement(nr.a, {
							name: "profile"
						}),
						onClick: y,
						title: s.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: _o.a.copyrightContainer
					}, m.a.createElement("span", {
						className: _o.a.copyrightText
					}, s.fbt._("© {year} Reddit, Inc. All rights reserved", [s.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				fd = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				vd = n.n(fd);

			function Od() {
				return (Od = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const yd = Ue.a.wrapped($l.a, "Dropdown", vd.a),
				Cd = Object(Tl.a)(yd),
				Ed = e => m.a.createElement(Ll.a, {
					className: Object(ye.a)(vd.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: vd.a.buttonText
				}, e.displayText), m.a.createElement(wo.a, {
					className: vd.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				})),
				xd = e => t => m.a.createElement(nr.a, Od({
					name: e
				}, t)),
				jd = e => {
					let {
						nightmode: t,
						sendEvent: n,
						toggleNightmode: r
					} = e;
					return m.a.createElement(Ed, {
						displayText: s.fbt._("Dark Mode", null, {
							hk: "1Tx6hE"
						}),
						isEnabled: t,
						onClick: e => {
							null == e || e.nativeEvent.stopImmediatePropagation(), n(Object(Bl.f)(t)), r(!t)
						}
					}, m.a.createElement(nr.a, {
						name: "night",
						className: vd.a.nightIcon
					}))
				},
				_d = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(Ll.b)(xd(Al.a.help), s.fbt._("Help Center", null, {
						hk: "4sGjc0"
					}));
					return m.a.createElement(n, {
						href: "https://www.reddithelp.com",
						onClick: () => t(Object(Fo.c)("help_center"))
					})
				},
				Pd = e => {
					let {
						sendEvent: t
					} = e;
					const n = Object(Ll.b)(xd(Al.a.campaign), s.fbt._("Advertise on Reddit", null, {
						hk: "3R4KSI"
					}));
					return m.a.createElement(n, {
						href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=user_menu_cta",
						onClick: () => t(Object(Bl.b)())
					})
				},
				Sd = e => {
					let {
						dispatchOpenLoginModal: t,
						isNsfwBlocking: n,
						sendEvent: r
					} = e;
					const o = Object(Ll.c)(xd(Al.a.logout), s.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					}));
					return m.a.createElement(o, {
						href: "#",
						onClick: e => {
							Object(Te.a)(e) && (e.preventDefault(), e.stopPropagation(), t(n), r(Object(ed.b)()))
						}
					})
				};
			var kd = Object(Be.c)(e => {
				const {
					dispatchOpenLoginModal: t,
					isCrawler: n,
					isNsfwBlocking: s,
					nightmode: r,
					requestAwardKarma: o,
					sendEvent: a,
					user: i
				} = e, c = i && i.id, l = Object(he.e)(sr.b), [d, p] = Object(u.useState)(!1), b = Object(u.useCallback)(e => {
					e.nativeEvent.stopImmediatePropagation(), p(!d)
				}, [d]);
				return Object(u.useEffect)(() => {
					p(!1)
				}, [e.isOpen]), Object(u.useEffect)(() => {
					o()
				}, [c]), n ? m.a.createElement(Zl.a, null, m.a.createElement(gd, e)) : l ? m.a.createElement(Cd, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(jd, {
					nightmode: r,
					sendEvent: a,
					toggleNightmode: e.toggleNightmode
				}), m.a.createElement(_d, {
					sendEvent: a
				}), m.a.createElement(Yl, {
					isOpen: d,
					onClick: b,
					sendEvent: a,
					useClassicUserMenuStyles: !0
				}), m.a.createElement(Pd, {
					sendEvent: a
				}), m.a.createElement("div", {
					className: vd.a.divider
				}), m.a.createElement(Sd, {
					dispatchOpenLoginModal: t,
					isNsfwBlocking: s,
					sendEvent: a
				})) : m.a.createElement(Cd, {
					className: vd.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(gd, e))
			});

			function Nd() {
				return (Nd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const wd = e => t => m.a.createElement(nr.a, Nd({
					name: e
				}, t)),
				Md = Object(he.b)(() => Object(X.c)({
					isCrawler: e => !!Object(Ml.a)(e),
					isModModeEnabled: wl.a,
					isNsfwBlocking: e => {
						const t = Object(Y.d)(e),
							n = Object(Y.e)(e);
						return t || n
					},
					isOpen: Object(Il.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Nl.d,
					shouldShowCreateCommunityItem: v.pb,
					navbarLikeMweb: kl.a,
					nightmode: v.db,
					showPresence: v.V,
					url: xn.u,
					isCommunityLinkVisible: Sl
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(Hi.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleNightmode: t => e(Object(Hc.z)(t)),
					toggleShowPresence: t => e(Object(Hc.I)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(fl.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (d.a.get("rseor3") && d.a.remove("rseor3", {
							domain: i.a.cookieDomain
						}), e(Object(fl.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Ol.g)(Object(on.e)(t.user)))
					},
					dispatchOpenLoginModal: t => {
						t && (e(Object(wt.k)({
							actionSource: wt.a.NsfwBlockingModal
						})), Object(Cl.b)(Cl.a.Login)), e(Object(K.openLoginModal)())
					},
					toggleModMode: () => e(Object(vl.b)()),
					openCommunityCreationModal: () => e(Object(wt.h)(Bt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var Id = Object(An.u)({
					pageLayer: e => e
				})(Md(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: r,
						user: o
					} = e, a = Object(he.e)(Nl.b), [i, c] = Object(u.useState)(!1), l = o && o.id;
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
					return Object(xl.a)("visibilitychange", p), Object(u.useEffect)(() => {
						c("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(ye.a)(vd.a.container, yl.e)
					}, r && i && a && m.a.createElement(gl.a, {
						variables: d,
						onData: bl.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Pl.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(ye.a)(e.className, vd.a.inlineButton, {
							[vd.a.dropdownOpen]: e.isOpen,
							[vd.a.isLoggedOut]: !o,
							[vd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: vd.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(ye.a)(vd.a.accountWrapper, vd.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(dr.a, {
						className: Object(ye.a)(vd.a.imgIcon, {
							[vd.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: vd.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && r
					}), m.a.createElement("span", {
						className: vd.a.accountDetails
					}, m.a.createElement("span", {
						className: vd.a.username
					}, n.displayText, n.isGold && m.a.createElement(_l.a, {
						className: vd.a.premiumFontIcon,
						title: s.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: vd.a.accountKarma
					}, m.a.createElement(nr.a, {
						name: "karma",
						isFilled: !0,
						className: vd.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(El.a)(e),
							n = Object(hl.b)(t);
						return s.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [s.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: vd.a.accountCoins
					}, m.a.createElement(jl.a, {
						className: vd.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(hl.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(ye.a)(vd.a.accountWrapper, vd.a.isLoggedOut)
					}, m.a.createElement(nr.a, {
						name: "user",
						className: vd.a.defaultProfileIcon
					})))(e.user), m.a.createElement(nr.a, {
						className: vd.a.caretDownIcon,
						name: "caret_down"
					})), m.a.createElement(da.a, null, s.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(kd, e))
				})),
				Td = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Ad = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less"),
				Rd = n.n(Ad);
			const Ld = Object(Kc.a)(e => m.a.createElement("div", {
				"aria-modal": !0,
				className: Object(ye.a)(e.className, Rd.a.confirmContainer, Rd.a.confirmToastContainer),
				role: "dialog"
			}, m.a.createElement("div", null, m.a.createElement("h2", {
				className: Rd.a.confirmToastTitle
			}, s.fbt._("🎉 Nice name, {username}!", [s.fbt._param("username", e.username)], {
				hk: "2DEuit"
			}))), m.a.createElement("p", {
				className: Rd.a.confirmModalDescription
			}, s.fbt._("May it serve you well", null, {
				hk: "1OmrGj"
			}))));
			var Dd = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/Loader.tsx"),
				Fd = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ud = n("./src/reddit/helpers/trackers/inbox.ts"),
				Gd = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				Bd = n("./src/reddit/routes/acknowledgements/index.ts"),
				qd = n("./src/reddit/routes/appeal/index.ts");
			var Hd = {
					action: () => async e => await e(Object(p.c)(Fr.a)),
					chunk: P.r.EMPTY,
					exact: !0,
					meta: {
						name: P.Nb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				Wd = n("./src/reddit/routes/coins/index.ts"),
				Vd = n("./src/reddit/routes/coinsMobile/index.ts"),
				Qd = n("./src/reddit/routes/commentsPage/index.ts"),
				zd = n("./src/reddit/routes/countrySitePage/index.ts");
			n("./node_modules/@loadable/component/dist/loadable.esm.js");
			var Kd = [],
				Jd = n("./src/reddit/routes/econManagement/index.ts"),
				Xd = n("./src/reddit/routes/econManagement2/index.ts");
			var Yd = {
					action: Object(M.a)(() => n.e(9).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: P.r.EMPTY,
					exact: !0,
					meta: {
						name: P.Nb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				Zd = n("./src/lib/addQueryParams/index.ts");
			var $d = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							queryParams: o
						} = e;
						await t(Object(p.c)(Object(Zd.a)("/", o)))
					},
					chunk: P.r.EMPTY,
					exact: !0,
					meta: {
						name: P.Nb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [P.r.COMMENTS_PAGE, P.r.FRONTPAGE]
				},
				eu = n("./src/reddit/routes/followers/index.ts"),
				tu = n("./src/reddit/routes/framedGild/index.ts"),
				nu = n("./src/reddit/routes/framedModal/index.ts"),
				su = n("./src/reddit/routes/frontpage/index.ts"),
				ru = n("./src/reddit/routes/geotagging/index.ts"),
				ou = n("./src/reddit/routes/inbox/index.ts"),
				au = n("./src/reddit/routes/meta/index.ts"),
				iu = n("./src/reddit/routes/moderationPages/index.ts"),
				cu = n("./src/reddit/routes/modQueue/index.ts"),
				lu = n("./src/reddit/routes/multireddit/index.ts"),
				du = n("./src/reddit/routes/notificationsInbox/index.ts"),
				uu = n("./src/reddit/routes/postCreation/constants.ts");
			const mu = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(p.c)("/"))
				},
				chunk: P.r.EMPTY,
				exact: !0,
				meta: {
					name: P.Nb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var pu = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(p.c)(uu.b))
					},
					chunk: P.r.EMPTY,
					exact: !0,
					meta: {
						name: P.Nb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...mu],
				bu = n("./src/reddit/routes/postCreation/index.ts"),
				hu = n("./src/reddit/routes/postDraft/index.ts"),
				gu = n("./src/reddit/routes/postSetPage/index.ts");
			var fu = {
				action: () => async () => {
					window.location.replace("https://reddithelp.com/hc/articles/4403386953108")
				},
				chunk: P.r.EMPTY,
				exact: !0,
				meta: {
					name: P.Nb.POWERUPS_REDIRECT
				},
				path: ["/powerup", "/powerups"]
			};
			var vu = {
					action: () => async e => await e(Object(p.c)(Tr.a)),
					chunk: P.r.EMPTY,
					exact: !0,
					meta: {
						name: P.Nb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				Ou = n("./src/reddit/routes/premium/index.ts"),
				yu = n("./src/reddit/routes/profileComments/index.ts"),
				Cu = n("./src/reddit/endpoints/me/index.ts"),
				Eu = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				xu = n("./src/server/helpers/profileRedirect.ts");
			var ju = {
					action: e => async (t, n, s) => {
						let {
							apiContext: r
						} = s;
						const {
							rest: o
						} = e.params, {
							path: a,
							queryParams: i
						} = e, c = await Object(Cu.a)(r());
						if (!(c.ok && c.body && c.body.account)) {
							const e = n();
							return void Object(Eu.a)(t, e)
						}
						const l = c.body.account.displayText,
							d = Object(xu.b)({
								path: a,
								profileName: l,
								queryParams: i,
								rest: o
							});
						await t(Object(p.c)(d))
					},
					chunk: P.r.EMPTY,
					exact: !0,
					meta: {
						name: P.Nb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				_u = n("./src/reddit/routes/profileModSettings/index.ts"),
				Pu = n("./src/reddit/routes/profileOverview/index.ts"),
				Su = n("./src/reddit/routes/profilePosts/index.ts");
			var ku = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: r,
							queryParams: o
						} = e, a = Object(xu.b)({
							path: r,
							profileName: n,
							queryParams: o,
							rest: s
						});
						t(Object(p.c)(a))
					},
					chunk: P.r.EMPTY,
					exact: !0,
					meta: {
						name: P.Nb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/posts", "/user/:profileName/posts/:rest(.*)"]
				},
				Nu = n("./src/reddit/routes/profilePrivate/index.ts");
			var wu = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							path: r,
							queryParams: o
						} = e, a = Object(xu.b)({
							path: r,
							profileName: n,
							queryParams: o,
							rest: s
						});
						await t(Object(p.c)(a))
					},
					chunk: P.r.EMPTY,
					exact: !0,
					meta: {
						name: P.Nb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				Mu = n("./src/reddit/routes/profileSnoobuilder/index.ts"),
				Iu = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				Tu = n("./src/reddit/routes/report/index.ts"),
				Au = n("./src/reddit/routes/searchResults/index.ts"),
				Ru = n("./src/reddit/routes/settings/index.ts");
			var Lu = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(p.c)(s))
					},
					chunk: P.r.EMPTY,
					meta: {
						name: P.Nb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(p.c)("/settings/profile"))
					},
					chunk: P.r.EMPTY,
					meta: {
						name: P.Nb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				Du = n("./src/reddit/routes/subreddit/index.ts"),
				Fu = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				Uu = n("./src/reddit/routes/subredditWiki/index.ts"),
				Gu = n("./src/reddit/routes/topic/index.ts");
			var Bu = [Bd.a, qd.a, Fr.b, Hd, Wd.a, Vd.a, zd.a, ju, wu, ku, ...Gd.a, ...Qd.b, Yd, ...su.a, ru.a, Ou.a, Tr.b, Ar.b, Jd.c, Xd.a, fu, vu, eu.a, tu.a, nu.a, bu.a, hu.a, gu.a, ...pu, $d, ...au.a, lu.a, cu.a, Ir.c, du.a, ou.a, yu.a, _u.a, Pu.a, Su.a, Mu.a, Nu.a, Iu.a, ...Ru.a, ...Lu, Au.a, ...Uu.a, Gu.a, Du.b, Fu.a, iu.a, Tu.a, ...Kd],
				qu = n("./src/reddit/selectors/appBadges.ts"),
				Hu = n("./src/reddit/selectors/experiments/chat.ts"),
				Wu = n("./src/reddit/selectors/sso.ts"),
				Vu = n("./src/reddit/components/HeaderUserActions/AdsSignupLink/index.m.less"),
				Qu = n.n(Vu);
			var zu = Object(Be.c)(e => {
				let {
					className: t,
					sendEvent: n
				} = e;
				const r = Object(he.e)(v.db),
					o = Object(Ci.a)(),
					a = s.fbt._("Advertise", null, {
						hk: "bW02l"
					});
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: Object(ye.a)(t, Qu.a.container, {
						[Qu.a.isNightMode]: r
					})
				}, m.a.createElement("a", {
					className: Qu.a.link,
					ref: o.target.ref,
					href: "https://ads.reddit.com?utm_source=d2x_consumer&utm_name=top_nav_cta",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => {
						n(Object(Bl.c)())
					},
					onMouseEnter: o.show,
					onMouseLeave: o.hide,
					"aria-label": a
				}, m.a.createElement(nr.a, {
					className: Qu.a.icon,
					name: "campaign"
				}))), m.a.createElement(yi.a, {
					arrowProps: o.arrowProps,
					popperProps: o.popperProps,
					visible: o.visible
				}, a))
			});
			const Ku = m.a.memo((function(e) {
				let {
					badgeCount: t,
					hasUnreadChatMessages: n,
					onClickChat: r
				} = e;
				const o = Object(he.d)(),
					a = Object(Ci.a)(),
					c = Object(he.e)(tl.a);
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
					className: ec.a.iconWrapper,
					onMouseEnter: () => {
						a.show()
					},
					onMouseLeave: a.hide,
					ref: a.target.ref
				}, m.a.createElement("a", {
					className: ec.a.link,
					href: `${i.a.redditUrl}/chat`,
					onClick: e => {
						e.preventDefault(), r(), c && o(Object(Bc.c)("chat"))
					}
				}, m.a.createElement(jr.a, {
					isActive: t > 0 || n,
					unreadCount: t
				}), m.a.createElement(nr.a, {
					name: "chat",
					className: ec.a.icon2020
				}))), m.a.createElement(yi.a, {
					arrowProps: a.arrowProps,
					popperProps: a.popperProps,
					visible: a.visible
				}, s.fbt._("Chat", null, {
					hk: "4nXRWH"
				})))
			}));
			var Ju = n("./src/reddit/actions/matrixChat/index.ts"),
				Xu = n("./src/reddit/reducers/features/matrixChat/index.ts"),
				Yu = n("./src/reddit/selectors/features/matrixChat/index.ts");
			const Zu = () => {
					const e = Object(Ci.a)(),
						t = Object(he.d)(),
						n = Object(he.e)(Yu.b);
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ec.a.iconWrapper,
						onMouseEnter: () => {
							e.show()
						},
						onMouseLeave: e.hide,
						ref: e.target.ref
					}, m.a.createElement("a", {
						className: ec.a.link,
						href: n,
						onClick: e => {
							e.preventDefault(), t(Object(Ju.b)({
								state: Xu.b.NORMAL
							}))
						}
					}, m.a.createElement(nr.a, {
						name: "chat_group",
						className: ec.a.icon2020
					}))), m.a.createElement(yi.a, {
						arrowProps: e.arrowProps,
						popperProps: e.popperProps,
						visible: e.visible
					}, s.fbt._("Matrix Chat", null, {
						hk: "1cv14m"
					})))
				},
				$u = "change-username-tooltip-id",
				em = "email-verification-tooltip-id",
				tm = m.a.memo((function(e) {
					let {
						moderationDropdownOpen: t,
						...n
					} = e;
					const r = Object(Ci.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ec.a.iconWrapper,
						onMouseEnter: r.show,
						onMouseLeave: r.hide,
						ref: r.target.ref
					}, m.a.createElement(Zi, {
						"aria-expanded": t,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Td.a,
						onClick: n.onOpenModerationDropdown,
						isOpen: t
					}, m.a.createElement(jr.a, {
						isActive: n.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(nr.a, {
						className: ec.a.icon2020,
						name: "mod"
					})), m.a.createElement(yi.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible
					}, s.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Td.b, {
						className: ec.a.moderationDropdown,
						isOpen: t,
						unreadNotifications: n.unreadNotifications,
						sendEventWithName: n.sendEventWithName
					}))
				})),
				nm = m.a.memo((function(e) {
					const t = Object(Ci.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: ec.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: ec.a.link,
						"aria-label": s.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(nr.a, {
						className: ec.a.icon2020,
						name: "add"
					}))), m.a.createElement(yi.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, s.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				sm = Object(An.u)({
					pageLayer: e => e
				}),
				rm = Object(X.c)({
					activeDropdownId: Il.a,
					activeModalId: pc.b,
					appBadges: qu.b,
					chatDirectMessagesCount: qu.e,
					email: v.n,
					hasUnreadChatMessages: qu.f,
					inboxBadgeCount: qu.g,
					isAvatarQuickCreateEnabled: e => Object(Rr.c)(e) && (e => {
						if (Pc(e)) return !0;
						const t = _c(e),
							n = (new Date).getTime(),
							s = Object(Sn.x)();
						if (!(null == t ? void 0 : t.active) || !Sc(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
						if (s && t) {
							const e = n > s.lastInteractionTimestamp + jc(null == t ? void 0 : t.min_days_since_last_event_interaction);
							return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
						}
						return !1
					})(e),
					isAvatarStorefrontEnabled: e => Object(Rr.d)(e) && !!Object(Ac.a)(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					shouldShowEmailVerificationTooltip: el.b,
					isLoggedIn: v.Q,
					isModerator: cn.k,
					isNameEditable: v.S,
					isOneTapAutoSession: Z.g,
					isResponsiveSettingsEnabled: Dn.a,
					isChatMatrixClientEnabled: Hu.b,
					shouldOpenEmailVerificationTooltip: el.a,
					shouldShowChangeUsernameModals: Wu.c,
					unreadNotifications: v.yb,
					usernameChangedModalOpen: Object(pc.c)(Jc.p),
					shouldManuallyTriggerEmailVerificationTooltip: tl.d
				}),
				om = Object(he.b)(rm, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(Gc.changeUsernameTooltipClosed)()),
					closeEmailVerificationTooltip: () => e(Object(Bc.c)()),
					showEmailVerificationTooltip: () => e(Object(Bc.c)()),
					fetchAppBadges: () => e(Object(Uc.c)()),
					logoutUser: t => {
						(null == t ? void 0 : t.contentWindow) && t.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Fd.a)()), e(Object(be.q)())
					},
					onChatClick: () => e(Object(W.f)()),
					onDismissCustomizeFlyout: () => e(Object(Hc.u)()),
					onOpenModerationDropdown: () => {
						e(Object(Hi.h)({
							tooltipId: Td.a
						})), e(Object(yo.q)())
					},
					onOpenUserDropdown: () => e(Object(Hi.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(wt.h)(Jc.b))
					},
					openKeepUsernameModal: () => {
						e(Object(wt.h)(Jc.g))
					},
					toggleChangeEmailModal: () => {
						e(Object(Bc.c)()), e(Object(wt.i)(Jc.a))
					},
					resendEmail: () => e(Object(be.x)(Yc.a)),
					requestCreatePost: () => {
						t.pageLayer && e(qc.p(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(p.b)(t);
						e(Object(Gc.startChangeUsernameFlow)(n))
					}
				}));
			class am extends m.a.Component {
				constructor() {
					super(...arguments), this.googleOneTapIFrame = null, this.state = {
						confirmUsernameFlowStarted: !1
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Ud.y)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(Fo.c)(e)), this.logoutUser = () => {
						this.props.logoutUser(this.googleOneTapIFrame)
					}, this.onClickCreatePost = () => {
						this.props.sendEvent(Object(Qo.x)({
							actionInfoType: "nav"
						})), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(I.a)(e.pathname, Bu),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== P.Nb.POST_CREATION && n !== P.Nb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.googleOneTapIFrame = e
					}, this.navBarEconCta = () => {
						const {
							isAvatarQuickCreateEnabled: e,
							isAvatarStorefrontEnabled: t,
							user: n
						} = this.props, s = n && Object(on.e)(n) || "";
						return e ? m.a.createElement(Tc, {
							avatarUrlParams: {
								avatarId: "random",
								username: s
							}
						}) : t ? m.a.createElement(Fc, null) : m.a.createElement(cl.a, null)
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
						closeEmailVerificationTooltip: r,
						email: o,
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
						isChatMatrixClientEnabled: v,
						onDismissCustomizeFlyout: O,
						onOpenUserDropdown: y,
						openChangeUsernameModal: C,
						openKeepUsernameModal: E,
						pageLayer: x,
						resendEmail: j,
						shouldOpenEmailVerificationTooltip: _,
						shouldShowChangeUsernameModals: P,
						toggleChangeEmailModal: S,
						unreadNotifications: k,
						user: N,
						usernameChangedModalOpen: w
					} = this.props, M = !(!k || !k.hasUnreadModmail), I = N && Object(on.e)(N) || "", T = Object(ye.a)({
						[ec.a["m-responsive"]]: f
					}), A = P && g;
					return m.a.createElement(sn.a, {
						id: em,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(sn.a, {
						className: ec.a.headerLinks,
						id: $u
					}, b && m.a.createElement(tm, {
						isModerateIconLit: M,
						moderationDropdownOpen: e === Td.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: k
					}), N && m.a.createElement(u.Fragment, null, m.a.createElement(Ku, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), v && m.a.createElement(Zu, null), m.a.createElement(fc, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == x ? void 0 : x.url,
						userId: N.id,
						isLoggedIn: p,
						iconWrapper: ec.a.iconWrapper
					}), m.a.createElement(nm, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement(zu, {
						className: ec.a.iconWrapper
					}), m.a.createElement("span", {
						className: ec.a.iconWrapper
					}, this.navBarEconCta()))), m.a.createElement(Id, {
						className: ec.a.headerUserDropdown,
						logoutUser: this.logoutUser,
						onClick: y,
						sendEventWithName: this.sendEventWithName,
						user: N
					}), p && m.a.createElement(il, {
						exposeIFrameElement: this.exposeIFrameElement
					}), l && m.a.createElement(ml, {
						onCloseFlyout: O
					}), m.a.createElement(rl, {
						closeTooltip: r,
						email: o,
						isOpen: _ && d,
						resendEmail: j,
						toggleChangeEmailModal: S,
						tooltipId: em
					}), m.a.createElement(zc, {
						email: o,
						shouldOpenTooltip: _
					}), h && !f && !g && m.a.createElement(u.Fragment, null, m.a.createElement(Qc.a, {
						closeTooltip: s,
						isOpen: c && !P,
						openChangeUsernameModal: C,
						openKeepUsernameModal: E,
						tooltipId: $u,
						username: I
					}), P && m.a.createElement(Vc.a, {
						isResponsiveSettingsEnabled: f,
						overlayClassName: T,
						username: I,
						withOverlay: !0
					}), m.a.createElement(Wc.a, {
						confirmNavigate: this.confirmNavigate
					})), A && !w && m.a.createElement(Dd.a, {
						className: ec.a.cornerModal,
						isNameEditable: h,
						isOneTapAutoSession: g,
						isResponsiveSettingsEnabled: f,
						logoutUser: this.logoutUser,
						overlayClassName: Object(ye.a)(T, ec.a.modalOverlay),
						username: I,
						withOverlay: !w
					}), A && w && m.a.createElement(Ld, {
						className: ec.a.cornerModal,
						isOpen: !0,
						tooltipId: $u,
						username: I
					}))
				}
			}
			var im = Object(Be.c)(sm(om(am))),
				cm = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				lm = n("./src/reddit/components/Header/User/index.m.less"),
				dm = n.n(lm);
			const {
				fbt: um
			} = n("./node_modules/fbt/lib/FbtPublic.js"), mm = Object(X.c)({
				account: e => e.user.account,
				isNsfwBlur: e => {
					const t = Object(Y.d)(e),
						n = Object(Y.e)(e);
					return t || n
				},
				origin: Z.k
			}), pm = m.a.memo(e => m.a.createElement("div", {
				className: Object(ye.a)(e.className, dm.a.row)
			}, !e.account && m.a.createElement(bm, e), m.a.createElement(im, {
				className: Object(ye.a)({
					[dm.a.loggedOut]: !e.account
				}),
				user: e.account
			}))), bm = e => {
				const t = Object(he.e)(qu.g),
					n = Object(he.e)(v.Fb),
					s = Object(he.e)(cm.c),
					r = e.pageLayer,
					o = i.a.accountManagerOrigin,
					a = r ? r.url : "/",
					c = r && r.meta && r.meta.name === P.Nb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + a),
					l = !!e.isNsfwBlur;
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(fc, {
					sendNavClickInbox: () => e.sendEvent(Object(Ud.y)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: a,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: dm.a.iconWrapper
				}), m.a.createElement("div", {
					className: dm.a.loggedOutRow
				}, m.a.createElement(tn.t, {
					kind: tn.b.ExternalLink,
					priority: tn.c.Secondary,
					redditStyle: !0,
					className: dm.a.button,
					href: `${o}/login/?dest=${c}`,
					onClick: t => {
						Object(Te.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(l), e.sendEvent(Object(ed.a)("nav")))
					}
				}, um._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(tn.t, {
					kind: tn.b.ExternalLink,
					priority: tn.c.Primary,
					redditStyle: !0,
					className: Object(ye.a)(dm.a.separator, dm.a.button),
					href: `${o}/register/?dest=${c}`,
					onClick: t => {
						Object(Te.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(l), e.sendEvent(Object(ed.c)("nav")))
					}
				}, um._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var hm = Object(An.u)()(Object(he.b)(mm, e => ({
					onOpenLoginModal: t => {
						t ? (e(Object(wt.k)({
							actionSource: wt.a.NsfwBlockingModal
						})), Object(Cl.b)(Cl.a.Login)) : e(Object(wt.k)({
							actionSource: wt.a.HeaderLogin
						})), e(Object(K.openLoginModal)())
					},
					onOpenRegisterModal: t => {
						t ? (e(Object(wt.k)({
							actionSource: wt.a.NsfwBlockingModal
						})), Object(Cl.b)(Cl.a.Signup)) : e(Object(wt.k)({
							actionSource: wt.a.HeaderSignup
						})), e(Object(K.openRegisterModal)())
					},
					closeUserDropdown: () => e(Object(Hi.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(Be.c)(pm))),
				gm = n("./src/reddit/components/Header/index.m.less"),
				fm = n.n(gm);

			function vm() {
				return (vm = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Om = Ue.a.header("HeaderDynamicStyles", fm.a),
				ym = Object(X.c)({
					isLoggedIn: v.Q,
					isLoggedOutOneFeed: sr.b,
					isNightMode: v.db,
					isResponsiveSettingsEnabled: Dn.a,
					isPageResponsive: hi.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Cm = Object(An.u)({
					categoryName: An.c,
					pageLayer: e => e
				}),
				Em = e => {
					const t = Object(u.useContext)(Se.a);
					return m.a.createElement("div", {
						className: fm.a.left
					}, m.a.createElement(da.a, null, s.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(la.b, null), m.a.createElement($s.a, {
						"aria-label": s.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: fm.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(pi.a, {
						className: Object(ye.a)(fm.a.snoo, {
							[fm.a.snooExp]: t
						})
					}), m.a.createElement(bi.a, {
						className: fm.a.wordmark
					})), e.children)
				},
				xm = e => m.a.createElement("div", {
					className: fm.a.right
				}, e.children, m.a.createElement(hm, null)),
				jm = e => {
					const t = Object(u.useContext)(Se.a);
					return m.a.createElement("div", {
						className: Object(ye.a)(fm.a.layout, {
							[fm.a.layoutContainer]: t
						})
					}, m.a.createElement(Em, vm({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(ca, null), m.a.createElement(mi, {
						className: fm.a.search
					})), m.a.createElement(xm, null, m.a.createElement(qi, {
						className: fm.a.quickLinks
					})))
				},
				_m = e => {
					const t = Object(u.useContext)(Se.a);
					return m.a.createElement("div", {
						className: Object(ye.a)(fm.a.layout, {
							[fm.a.layoutContainer]: t
						})
					}, m.a.createElement(Em, vm({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), e.isLoggedOutOneFeed && m.a.createElement(ca, null), m.a.createElement("div", {
						className: fm.a.searchContainer
					}, m.a.createElement(mi, {
						className: fm.a.search
					}))), m.a.createElement(xm, null))
				};
			var Pm = Cm(Object(he.b)(ym, e => ({
					onReloadFrontpage: () => e(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(Se.a);
					return t = e.isLoggedIn ? jm : _m, m.a.createElement(Om, {
						"data-redditstyle": !0,
						className: Object(ye.a)(fm.a.container, e.className, {
							[fm.a.bladeIsOpen]: e.isBladeOpen,
							[fm.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						isLoggedOutOneFeed: e.isLoggedOutOneFeed,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Oi, {
						className: fm.a.MwebResponsiveHeader
					}))
				}))),
				Sm = n("./src/reddit/components/LightboxHeader/index.tsx");
			const km = Object(Mt.a)({
				getComponent: () => Object(ne.a)(() => n.e("MatrixChat").then(n.bind(null, "./src/reddit/components/MatrixChat/index.tsx"))).then(e => e.MatrixChat),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var Nm = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				wm = (e, t) => {
					let n = `${i.a.accountManagerOrigin}/${e}/`;
					return t && (n = `${n}?dest=${encodeURIComponent(t)}`), n
				};
			const Mm = () => e => ({
					...ln.n(e),
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				{
					fbt: Im
				} = n("./node_modules/fbt/lib/FbtPublic.js"),
				Tm = Object(X.c)({
					isLoggedIn: v.Q,
					origin: Z.k
				});
			class Am extends m.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(Te.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(Mm()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						className: e,
						origin: t
					} = this.props;
					return m.a.createElement(tn.m, {
						className: e,
						href: wm(qe.a.Register, t),
						onClick: this.onClick
					}, Im._("Create an account", null, {
						hk: "4Dh0gy"
					}))
				}
			}
			var Rm = Object(he.b)(Tm, e => ({
					openRegisterModal: () => {
						e(Object(wt.k)({
							actionSource: wt.a.IdCard,
							redirectUrl: wr.c[wr.b.Home]
						})), e(Object(K.openRegisterModal)())
					}
				}))(Object(Be.c)(Am)),
				Lm = n("./src/reddit/components/CreateAccountSection/index.m.less"),
				Dm = n.n(Lm);
			const {
				fbt: Fm
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Um = e => {
					let {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: t
					}, m.a.createElement(oo, {
						className: Dm.a.createTitle
					}, Fm._("Join reddit", null, {
						hk: "1fNfug"
					})), m.a.createElement("div", {
						className: Dm.a.createDesc
					}, Fm._("Create an account to follow your favorite communities and start taking part in conversations.", null, {
						hk: "z6A2K"
					})), m.a.createElement(Rm, {
						className: Dm.a.createButton
					}))
				},
				Gm = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Bm = n.n(Gm);
			const {
				fbt: qm
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Hm = Object(X.c)({
				currentPage: Or,
				isLoggedOutOneFeed: sr.b
			}), Wm = Object(he.b)(Hm, e => ({
				onUnpinSubscriptions: () => e(Object(Ae.j)())
			})), Vm = Object(An.u)();
			var Qm = Ue.a.wrapped(Vm(Wm(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, !e.isLoggedOutOneFeed && m.a.createElement("div", {
					className: Bm.a.title
				}, m.a.createElement("div", {
					className: Bm.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(nr.a, {
					name: "close",
					className: Bm.a.icon
				}))), m.a.createElement(sa, {
					className: Object(ye.a)({
						[Bm.a.withOverflow]: e.isLoggedOutOneFeed
					}),
					currentPage: e.currentPage,
					isPinned: !0
				}), e.isLoggedOutOneFeed && m.a.createElement(Um, {
					className: Bm.a.createAccountSection
				})))), "Component", Bm.a),
				zm = n("./src/reddit/components/Survey/index.tsx"),
				Km = n("./src/reddit/components/ThemeProvider/index.tsx");
			const Jm = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Xm = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...ln.d(t),
						reason: "primary"
					}
				}),
				Ym = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...ln.d(t),
						reason: "secondary"
					}
				});
			var Zm = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				$m = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				ep = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				tp = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				np = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				sp = n("./src/reddit/models/Toast/index.ts"),
				rp = n("./src/reddit/selectors/structuredStyles.ts"),
				op = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				ap = n.n(op);

			function ip() {
				return (ip = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const cp = e => {
				const t = Mo.a;
				switch (e.kind) {
					case sp.b.Error:
					case sp.b.AuthError:
					case sp.b.SuccessEndBroadcast:
						return t.warning;
					case sp.b.SuccessCommunity:
						return t.op;
					case sp.b.SuccessCommunityGreen:
					case sp.b.SuccessMod:
					case sp.b.SuccessUnlockComment:
						return t.approved;
					case sp.b.SuccessLockComment:
						return t.reported;
					case sp.b.EuCookiePolicy:
					case sp.b.UappBanner:
					case sp.b.Undo:
					default:
						return t.op
				}
			};
			class lp extends m.a.Component {
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
			const dp = Ue.a.wrapped(lp, "PlainBread", ap.a);
			var up = e => m.a.createElement(dp, ip({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": cp(e)
					}
				})),
				mp = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				pp = n.n(mp);
			const bp = Ue.a.span("Text", pp.a);
			var hp = n("./src/reddit/components/Toaster/index.m.less"),
				gp = n.n(hp);
			const {
				fbt: fp
			} = n("./node_modules/fbt/lib/FbtPublic.js"), vp = Ue.a.wrapped(ep.a, "AuthErrorToastIcon", gp.a), Op = Ue.a.wrapped(tn.l, "AuthErrorToastPrimaryButton", gp.a);
			class yp extends m.a.Component {
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
					}, m.a.createElement(up, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(vp, null), m.a.createElement(bp, null, fp._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(Op, {
						type: "submit"
					}, fp._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var Cp = yp,
				Ep = n("./src/lib/cookieConsent/index.ts"),
				xp = n("./src/reddit/controls/Link/index.tsx"),
				jp = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				_p = n.n(jp);
			const {
				fbt: Pp
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Sp = Ue.a.div("Icon", _p.a), kp = () => m.a.createElement(Sp, {
				style: {
					backgroundImage: `url(${i.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Np = Ue.a.wrapped(tn.l, "PrimaryButton", _p.a), wp = Ue.a.wrapped(up, "Bread", _p.a);
			class Mp extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(Ep.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(Ep.b)({
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
					return m.a.createElement("section", null, m.a.createElement(wp, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(kp, null), m.a.createElement("section", {
						className: _p.a.EuCookiePolicyBody
					}, m.a.createElement(bp, null, Pp._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(xp.a, {
						href: "https://www.reddit.com/policies/cookies",
						target: "_blank"
					}, Pp._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: _p.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(Np, {
						type: "submit"
					}, Pp._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(Np, {
						type: "submit"
					}, Pp._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var Ip, Tp = Mp;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Ip || (Ip = {}));
			var Ap = n("./src/reddit/controls/Typography/index.tsx"),
				Rp = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Lp = n.n(Rp);

			function Dp() {
				return (Dp = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Fp = Ue.a.div("Container", Lp.a),
				Up = Ue.a.img("SideImage", Lp.a),
				Gp = Ue.a.div("Main", Lp.a),
				Bp = Ue.a.div("SubTitle", Lp.a),
				qp = Ap.a,
				Hp = Ue.a.wrapped(tn.m, "PrimaryLinkButton", Lp.a),
				Wp = Ue.a.wrapped(Zc.a, "CloseIcon", Lp.a);
			class Vp extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Xm(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Jm(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: r,
						subTitle: o,
						title: a
					} = this.props;
					return m.a.createElement(Fp, {
						key: t,
						style: {
							...r,
							transform: `\n            translateY(${r.y}px)\n            scale(${r.x}, ${r.x})\n          `
						}
					}, m.a.createElement(Wp, {
						onClick: this.props.onClose
					}), m.a.createElement(Up, {
						srcSet: n
					}), m.a.createElement(Gp, null, m.a.createElement(Bp, null, o), m.a.createElement(Ap.b, null, a), m.a.createElement(qp, null, e), m.a.createElement(Hp, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, s.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Qp = Object(he.b)(null, e => ({
					onSignup: () => e(Object(K.openRegisterModal)())
				}))(Object(Be.c)(Vp)),
				zp = `${Kp("subscribe-cap.png")} 1x,\n  ${Kp("subscribe-cap@2x.png")} 2x,`;

			function Kp(e) {
				return `${i.a.assetPath}/img/banner/${e}`
			}
			const Jp = 3;
			var Xp = n("./src/lib/permanentCookieOptions.ts");
			const Yp = e => `${e}:1527210000`;
			var Zp = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				$p = n.n(Zp);
			const {
				fbt: eb
			} = n("./node_modules/fbt/lib/FbtPublic.js"), tb = Ue.a.div("Icon", $p.a), nb = () => m.a.createElement(tb, {
				style: {
					backgroundImage: `url(${i.a.assetPath}/img/snoo-upvote.png)`
				}
			}), sb = Ue.a.wrapped(tn.l, "PrimaryButton", $p.a), rb = Ue.a.wrapped(up, "Bread", $p.a);
			class ob extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), d.a.set(_n.j, Yp(Jp), Object(Xp.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(rb, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(nb, null), m.a.createElement(bp, null, eb._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [eb._param("=User Agreement", m.a.createElement(xp.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, eb._("User Agreement", null, {
						hk: "XS57W"
					}))), eb._param("=Privacy Policy", m.a.createElement(xp.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, eb._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(sb, {
						type: "submit"
					}, eb._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var ab = ob;

			function ib() {
				return (ib = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const cb = [],
				lb = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				db = {
					opacity: .5,
					x: .5,
					y: 50
				},
				ub = {
					opacity: Object(Fe.spring)(0),
					x: Object(Fe.spring)(.6),
					y: Object(Fe.spring)(80, lb)
				},
				mb = Ue.a.wrapped(ep.a, "SnooFacepalm", gp.a),
				pb = Ue.a.wrapped(tp.a, "SnooHappy", gp.a),
				bb = Ue.a.wrapped(cr.b, "SubredditIcon", gp.a),
				hb = Ue.a.img("CustomIcon", gp.a),
				gb = Ue.a.div("Container", gp.a),
				fb = Ue.a.wrapped(Zc.a, "Close", gp.a),
				vb = Ue.a.wrapped(Zm.a, "LockIcon", gp.a),
				Ob = Ue.a.wrapped(np.a, "UnlockIcon", gp.a),
				yb = Ue.a.wrapped($m.a, "RemoveIcon", gp.a),
				Cb = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(fb, ib({
					className: "CloseIcon"
				}, e))),
				Eb = Ue.a.wrapped(up, "Bread", gp.a),
				xb = Object(X.c)({
					subredditIcon: rp.b,
					toastSlices: e => e.toaster
				}),
				jb = Object(he.b)(xb, e => ({
					dismissToast: t => () => e(Object(pe.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(pe.g)(n))
					}
				}));
			class _b extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Pb(e, this.props.toastSlices), this.getWillEnterStyles = () => db, this.getWillLeaveStyles = () => ub
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(Fe.TransitionMotion, {
						defaultStyles: cb,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(gb, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === sp.b.Custom && void 0 !== t.customToastType) {
							const s = kb[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === sp.b.UappBanner) return m.a.createElement(ab, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === sp.b.EuCookiePolicy) return m.a.createElement(Tp, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(Jm("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Xm("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Ym("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === sp.b.AuthError) return m.a.createElement(Cp, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === sp.b.Modal ? tn.l : tn.r,
							r = t.kind === sp.b.Modal ? tn.o : tn.r;
						return m.a.createElement(Eb, {
							className: t.kind === sp.b.Modal ? gp.a.mModal : void 0,
							"data-testid": "toaster",
							key: e.key,
							kind: t.kind,
							sendEvent: t.name || t.onDisplay ? () => {
								t.name && this.props.sendEvent(Jm(t.name)), t.onDisplay && t.onDisplay()
							} : void 0,
							style: n
						}, m.a.createElement("div", {
							className: gp.a.ContentWrapper
						}, Sb(t, this.props.subredditIcon), t.kind === sp.b.SuccessLockComment && m.a.createElement(vb, null), t.kind === sp.b.SuccessUnlockComment && m.a.createElement(Ob, null), m.a.createElement(bp, null, t.text)), m.a.createElement("div", {
							className: gp.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Xm(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(r, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Ym(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(Cb, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const Pb = function() {
					arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					let e = arguments.length > 1 ? arguments[1] : void 0;
					return e.map(e => ({
						data: e,
						key: e.id || (new Date).toString(),
						style: {
							opacity: Object(Fe.spring)(1),
							x: Object(Fe.spring)(1, lb),
							y: Object(Fe.spring)(0, lb)
						}
					}))
				},
				Sb = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(hb, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case sp.b.Error:
							return m.a.createElement(mb, null);
						case sp.b.SuccessEndBroadcast:
							return m.a.createElement(yb, null);
						case sp.b.SuccessAward:
						case sp.b.SuccessCommunity:
						case sp.b.SuccessCommunityGreen:
							return m.a.createElement(pb, null);
						case sp.b.SuccessMod:
							return m.a.createElement(bb, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				kb = {
					[sp.a.subscribeCap]: e => m.a.createElement(Qp, Dp({
						name: Ip.LoggedOutMaxSubscriptions,
						sideImage: zp,
						title: s.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: s.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Nb = jb(Object(Be.c)(_b)),
				wb = n("./src/reddit/featureFlags/profileCollections.ts"),
				Mb = n("./src/reddit/helpers/trackers/banners.ts"),
				Ib = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Tb = n.n(Ib);
			var Ab = Ue.a.div("Wrapper", Tb.a),
				Rb = n("./src/reddit/components/AlertBanner/index.m.less"),
				Lb = n.n(Rb);
			const {
				fbt: Db
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Fb = () => m.a.createElement(Ab, {
				className: Object(ye.a)(Lb.a.wrapper, Lb.a.suspended)
			}, m.a.createElement("span", null, Db._("Your account has been permanently suspended from Reddit.", null, {
				hk: "2hzFKt"
			}), " "), Db._("Click {=here} for more info.", [Db._param("=here", m.a.createElement("a", {
				className: Lb.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360045734911"
			}, Db._("here", null, {
				hk: "49ZRXB"
			})))], {
				hk: "2jIHMO"
			})), Ub = e => {
				let {
					suspensionDaysLeft: t
				} = e;
				return m.a.createElement(Ab, {
					className: Object(ye.a)(Lb.a.wrapper, Lb.a.suspended)
				}, m.a.createElement("span", null, Db._({
					"*": "Your account has been suspended from Reddit for {number of days} days.",
					_1: "Your account has been suspended from Reddit for 1 day."
				}, [Db._plural(t, "number of days")], {
					hk: "2Bwand"
				}), " "), Db._("Click {=here} for more info.", [Db._param("=here", m.a.createElement("a", {
					className: Lb.a.underlineLink,
					href: "https://www.reddithelp.com/hc/en-us/articles/360045308832"
				}, Db._("here", null, {
					hk: "49ZRXB"
				})))], {
					hk: "lV57o"
				}))
			}, Gb = () => m.a.createElement(Ab, {
				className: Object(ye.a)(Lb.a.wrapper, Lb.a.fpr)
			}, m.a.createElement("span", null, Db._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: Lb.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Db._("Learn more", null, {
				hk: "1OTc8q"
			}))), Bb = e => {
				let {
					updateLink: t,
					onClickOldReddit: n
				} = e;
				return m.a.createElement(Ab, {
					className: Object(ye.a)(Lb.a.wrapper, Lb.a.deprecated)
				}, m.a.createElement("span", null, Db._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Db._param("update your browser", m.a.createElement(qb, {
					link: t
				}, Db._("update your browser", null, {
					hk: "2TB4hp"
				})))], {
					hk: "gC2GV"
				}), " "), m.a.createElement("span", null, Db._("If you do not update your browser, we suggest you visit {old reddit} .", [Db._param("old reddit", m.a.createElement("a", {
					className: Lb.a.underlineLink,
					href: i.a.oldRedditUrl,
					onClick: n
				}, Db._("old reddit", null, {
					hk: "Sv1DJ"
				})))], {
					hk: "4qKEir"
				})))
			}, qb = e => {
				let {
					children: t,
					link: n
				} = e;
				return null !== n ? m.a.createElement("a", {
					className: Lb.a.underlineLink,
					href: n
				}, t) : m.a.createElement("span", null, t)
			};
			class Hb extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Object(Mb.a)())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Object(Mb.b)())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n,
						suspensionDaysLeft: s
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(Bb, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Gb, null) : n ? s || null != s ? m.a.createElement(Ub, {
						suspensionDaysLeft: s
					}) : m.a.createElement(Fb, null) : null
				}
			}
			var Wb = Object(Be.c)(Hb);
			const Vb = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				Qb = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				});
			var zb = n("./src/reddit/components/OfflineBanner/index.m.less"),
				Kb = n.n(zb);
			const {
				fbt: Jb
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Xb = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(ye.a)(e.className, Kb.a.banner, {
							[Kb.a.online]: e.online,
							[Kb.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: Kb.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: Kb.a.title
					}, e.online ? Jb._("Found the internet!", null, {
						hk: "fMghd"
					}) : Jb._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(nr.a, {
						className: Kb.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				Yb = n("./src/reddit/components/Upsell/async.ts"),
				Zb = n("./src/reddit/constants/componentSizes.ts"),
				$b = n("./src/reddit/constants/elementIds.ts"),
				eh = n("./src/reddit/constants/history.ts"),
				th = n("./src/reddit/constants/posts.ts"),
				nh = n("./src/reddit/contexts/InsideOverlay.tsx"),
				sh = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				rh = n("./src/reddit/constants/promo.ts"),
				oh = n("./src/reddit/contexts/Promo/index.ts");

			function ah(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case rh.a.Completed:
						return s === rh.a.Shown ? new Map(e.set(n, rh.a.Completed)) : e;
					case rh.a.Dismissed:
						return s === rh.a.Shown ? new Map(e.set(n, rh.a.Dismissed)) : e;
					case rh.a.Shown:
						return s ? e : new Map(e.set(n, rh.a.Shown));
					default:
						throw new Error
				}
			}
			var ih = function(e) {
					let {
						children: t
					} = e;
					const [n, s] = u.useReducer(ah, new Map), r = u.useCallback(e => s({
						type: rh.a.Completed,
						payload: {
							promoName: e
						}
					}), []), o = u.useCallback(e => s({
						type: rh.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), a = u.useCallback(e => s({
						type: rh.a.Shown,
						payload: {
							promoName: e
						}
					}), []), i = u.useMemo(() => ({
						completePromo: r,
						dismissPromo: o,
						promos: n,
						showPromo: a
					}), [r, o, n, a]);
					return u.createElement(oh.a.Provider, {
						value: i
					}, t)
				},
				ch = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				lh = n("./src/reddit/helpers/postCollection.ts"),
				dh = n("./src/reddit/models/Theme/index.ts"),
				uh = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				mh = n("./src/reddit/selectors/experiments/survey.ts"),
				ph = n("./src/reddit/selectors/notificationBanner.ts"),
				bh = n("./src/reddit/selectors/onboarding.ts"),
				hh = n("./src/reddit/selectors/posts.ts"),
				gh = n("./src/reddit/components/AppRouter/index.m.less"),
				fh = n.n(gh);

			function vh() {
				return (vh = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oh = e => {
					let {
						className: t,
						shouldDisplayPinnedSubscriptions: n,
						...s
					} = e;
					return m.a.createElement("div", vh({
						className: Object(ye.a)(fh.a.main, {
							[fh.a.mShowingPaddedPinnedDescriptions]: n
						}, t),
						id: $b.a
					}, s))
				},
				yh = Object(ke.a)(e => {
					let {
						className: t,
						overlayScrollContainerEl: n,
						theme: s,
						...r
					} = e;
					const o = Object(Ve.a)({
						theme: s,
						...r
					});
					return m.a.createElement("div", vh({
						className: Object(ye.a)(fh.a.overlayContentWrapper, t),
						style: {
							"--comments-overlay-background": Object(dh.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": `${Object(kn.c)(n)}px`
						}
					}, r))
				}),
				Ch = e => {
					let {
						className: t,
						divRef: n,
						...s
					} = e;
					const r = Object(u.useContext)(Se.a);
					return m.a.createElement("div", vh({
						className: Object(ye.a)(fh.a.lightboxHeaderWrapper, t, {
							[fh.a.lightboxHeaderWrapperExp]: r
						})
					}, s, {
						ref: n
					}))
				},
				Eh = Object(ph.a)(Nm.a.EmailCollectionBannerId),
				xh = Object(he.b)(() => Object(X.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(Qe.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: v.x,
					isBlockingInterstitialEnabled: uh.b,
					isBlockingInterstitialV2Enabled: uh.c,
					isLoggedIn: v.Q,
					isLoggedOutOneFeed: sr.b,
					isMatrixChatEnabled: Hu.b,
					isNpsSurveyEnabled: mh.d,
					isOnboardingQueryParamEnabled: bh.c,
					isSubscriptionsPinned: or.c,
					isSuccessfulSurveyEnabled: mh.f,
					isSuspended: v.X,
					isFPR: v.O,
					posts: hh.J,
					profileCollectionsEnabled: wb.a,
					showEmailCollectionBanner: e => !Object(An.N)(e.platform.currentPage) && Eh(e),
					signUpModalIsOpen: Object(pc.c)(Bt.a.REGISTER_MODAL_ID),
					suspensionDaysLeft: v.xb
				}), e => ({
					onClickOutsideOverlay: t => e(Object(p.b)(t)),
					onPinSubscriptions: () => e(Object(Ae.i)()),
					onPostDismissTrigger: () => e(Object(ue.k)()),
					onSuccessfulSignupTrigger: () => e(Object(ue.g)()),
					onUnpinSubscriptions: () => e(Object(Ae.j)())
				})),
				jh = (e, t) => !(!e.state || !e.state[eh.b.IsOverlay] || t === e);
			class _h extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = Pe()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Zb.k ? this.props.onUnpinSubscriptions() : this.props.isLoggedOutOneFeed && !this.props.isSubscriptionsPinned && e >= Zb.k && this.props.onPinSubscriptions()
					}, P.K), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(An.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								r = `${P.Ib.Post}_${s}`,
								o = t && s && t[r],
								a = o && o.belongsTo.type === th.a.PROFILE;
							return !(!o || !Object(lh.a)(o) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(Qe.c)(e.frontpageSignupVariant),
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
					} = this.props, r = n.state && n.state[eh.b.IsOverlay], o = Object(Ie.a)(this.previousLocation, e.location);
					t && r && o && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(Ie.a)(this.previousLocation, this.props.location),
						i = r ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === P.Nb.INDEX || t.name === P.Nb.SUBREDDIT && n.subredditName === wr.b.Popular), r = Object(Qe.c)(this.props.frontpageSignupVariant), o = Object(Qe.c)(e.frontpageSignupVariant);
						s || r || !o ? r && !o && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					if ("POP" === e.history.action || r || o || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage), (this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled) && this.props.signUpModalIsOpen) return;
					const c = jh(e.location, this.previousLocation);
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
						hasInvalidSession: r,
						isFPR: o,
						isLoggedIn: a,
						isLoggedOutOneFeed: i,
						isMatrixChatEnabled: c,
						isSubscriptionsPinned: l,
						isSuspended: d,
						location: p,
						onClickOutsideOverlay: b,
						routes: h,
						showEmailCollectionBanner: g,
						suspensionDaysLeft: f
					} = this.props, {
						isSignupUpsellDisplayed: v,
						isSignupUpsellHidden: O
					} = this.state, y = this.context, C = jh(p, this.previousLocation);
					p.state && p.state[eh.b.IsOverlay] && !C ? p.state[eh.b.IsOverlay] = !1 : p.state && (this.previousLocation === p || p.state[eh.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[eh.b.CloseLocation] && this.previousLocation.state[eh.b.CloseLocation] === p.state[eh.b.CloseLocation] ? p.state[eh.b.CloseLocation] = {
						...this.previousLocation,
						state: je()(this.previousLocation.state, eh.b.CloseLocation)
					} : p.state[eh.b.CloseLocation] = this.previousLocation);
					const E = Object(Ie.a)(this.previousLocation, p),
						x = C || E ? this.previousLocation : p,
						j = C || E ? this.previousPage : t,
						_ = !(!(j && j.meta && j.meta.name === P.Nb.SEARCH_RESULTS && j && j.queryParams) || j.queryParams[Ra.s]),
						S = !(!j || !j.meta || j.meta.name !== P.Nb.MODERATION_PAGES),
						k = Object(An.x)(j),
						N = this.getIsPostCollection(),
						w = v && !O,
						M = e.showBanner;
					return r ? s.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(An.a.Provider, {
						value: j
					}, m.a.createElement(la.c, {
						isOverlayOpen: C
					}, m.a.createElement(Km.a, {
						forceRedditTheme: _
					}, v && m.a.createElement(kt, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Ph, {
						browserInfo: y,
						connection: e,
						isFPR: o,
						isInline: w,
						isSuspended: d,
						showOffline: M,
						suspensionDaysLeft: f
					})), m.a.createElement(nh.a.Provider, {
						value: !1
					}, m.a.createElement(Km.a, {
						forceRedditTheme: _ || S,
						isCommentsPage: k
					}, m.a.createElement(ih, null, m.a.createElement(Sh, {
						browserInfo: y,
						frontpageSignupVariant: n,
						isCommentsPage: k,
						isInline: w,
						isLoggedIn: a,
						isLoggedOutOneFeed: i,
						isSubscriptionsPinned: l,
						location: x,
						overlayIsOpen: C,
						page: j,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: o,
						showOffline: M,
						showSuspended: d
					}), m.a.createElement(Yb.b, null), m.a.createElement(Yb.a, null)))))), m.a.createElement(An.a.Provider, {
						value: t
					}, C && m.a.createElement(nh.a.Provider, {
						value: !0
					}, m.a.createElement(Km.a, {
						isOverlay: !0
					}, m.a.createElement(kh, {
						browserInfo: y,
						isPostCollection: N,
						location: p,
						onClickOutsideOverlay: b,
						page: t,
						routes: h,
						showEmailCollectionBanner: g,
						showFPR: o,
						showOffline: M,
						showSuspended: d
					}))), m.a.createElement(Km.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(Nb, null), m.a.createElement(zm.a, null), g && m.a.createElement(Re.a, null), m.a.createElement(Mn, null), m.a.createElement(Zs, null), c && m.a.createElement(km, null)))))
				}
			}
			_h.contextType = Ne.a;
			const Ph = Object(Be.c)(e => {
					const t = Object(An.gb)(),
						n = Object(sh.fb)(t),
						s = Object(u.useContext)(Se.a),
						{
							browserInfo: r,
							connection: o,
							isFPR: a,
							isInline: i,
							showOffline: c,
							isSuspended: l,
							suspensionDaysLeft: d
						} = e,
						p = {
							browserInfo: r,
							showFPR: a,
							showSuspended: l,
							suspensionDaysLeft: d,
							showOffline: c,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(Wb, p), n && m.a.createElement(Pm, {
						className: Object(ye.a)(fh.a.header, Vb(fh.a, p), {
							[fh.a.inline]: i
						})
					}), m.a.createElement(Xb, {
						className: Object(ye.a)(fh.a.offlineBanner, Vb(fh.a, p)),
						online: o.online,
						showBanner: o.showBanner
					}))
				}),
				Sh = Object(Be.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = je()(e, "key"),
							s = je()(t, "key");
						return Ee()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = je()(e, ["key", "locationState"]),
								s = je()(t, ["key", "locationState"]);
							return Ee()(n, s)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: n,
							overlayIsOpen: s,
							isInline: r,
							isSubscriptionsPinned: o,
							showEmailCollectionBanner: a
						} = this.props;
						return m.a.createElement(Oh, {
							"aria-hidden": s,
							className: Object(ye.a)(Vb(fh.a, this.props), {
								[fh.a.withUpsell]: !!e,
								[fh.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: o
						}, o && m.a.createElement(Qm, {
							className: Object(ye.a)(fh.a.pinnedSubscriptions, {
								...Vb(fh.a, this.props),
								[fh.a.removeOverflow]: this.props.isLoggedOutOneFeed
							}),
							"data-redditstyle": !0
						}), m.a.createElement(ge.f, {
							location: t
						}, n), a && m.a.createElement("div", {
							className: Object(ye.a)(fh.a.bottomSpacer, Qb(fh.a, this.props))
						}))
					}
				});
			class kh extends m.a.Component {
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
						if (this.mouseDownInWrapper && Object(Te.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[eh.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = ch.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(Me.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && ch.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, r = !(!t || !t.meta || t.meta.name === P.Nb.SUBREDDIT_CREATION || t.meta.name === P.Nb.PUBLIC_ACCESS_NETWORK), o = e;
					return m.a.createElement(yh, {
						className: Object(ye.a)(Vb(fh.a, this.props), {
							[fh.a.mIsCommentsLightbox]: r,
							[fh.a.mIsLargeCommentsLightbox]: o
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(ye.a)(fh.a.overlayWrapper, Vb(fh.a, this.props))
					}, m.a.createElement("div", {
						className: Object(ye.a)(fh.a.overlayScrollContainer, {
							[fh.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: $b.e,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, r && m.a.createElement(Ch, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(ye.a)(Vb(fh.a, this.props), {
							[fh.a.mIsLargeCommentsLightbox]: o
						}),
						tabIndex: -1
					}, m.a.createElement(Sm.a, {
						page: t
					})), m.a.createElement(ge.f, null, n), m.a.createElement("div", {
						className: Object(ye.a)(fh.a.bottomSpacer, Qb(fh.a, this.props))
					}))))
				}
			}
			var Nh = xh(Object(Be.c)(_h)),
				wh = n("./src/reddit/contexts/User/index.tsx");

			function Mh(e) {
				return m.a.createElement(wh.b, null, e.children)
			}
			var Ih = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				Th = n("./src/reddit/constants/shortcuts.ts"),
				Ah = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				Rh = n.n(Ah);
			var Lh = e => {
				let {
					children: t
				} = e;
				return m.a.createElement("div", {
					className: Rh.a.shortcutDiv,
					id: Th.b,
					tabIndex: -1
				}, m.a.Children.only(t))
			};
			let Dh = [];
			const Fh = "https://w3-reporting.reddit.com/policy";
			let Uh = 1;
			const Gh = !1;
			const Bh = Gh ? Promise.resolve() : async function() {
				if (Gh) return;
				const e = await fetch(Fh, {
						method: "HEAD"
					}),
					t = e.headers.get("report-to"),
					n = e.headers.get("x-reddit-w3reporting");
				if (t) try {
					const e = JSON.parse(`[${t}]`).find(e => {
						let {
							group: t
						} = e;
						return "w3-reporting" === t
					}).endpoints.map(e => e.url);
					e.length > 0 && (Dh = e)
				} catch {}
				if (n) try {
					const e = JSON.parse(n).success_fraction;
					"number" == typeof e && (Uh = e)
				} catch {}
			}();

			function qh(e, t, n) {
				let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "gauge";
				Gh ? console.error("w3-reporting is client-side only") : Hh.push({
					name: e,
					value: t,
					type: s,
					labels: n,
					createdAt: Date.now()
				})
			}
			let Hh = [];
			async function Wh(e) {
				if (0 === e.length || 0 === Dh.length) return;
				if (Math.random() > Uh) return;
				await Bh;
				const t = e.map(zh).filter(e => e.age < 3e5);
				try {
					const e = await fetch(Qh(), {
						method: "POST",
						body: JSON.stringify(t),
						mode: "no-cors"
					});
					await e.text()
				} catch (n) {
					console.error(null == n ? void 0 : n.stack)
				}
			}
			setInterval(() => {
				Wh([...Hh]), Hh = []
			}, 5e3), Gh || document.addEventListener("visibilitychange", () => {
				"hidden" === document.visibilityState && (Wh([...Hh]), Hh = [])
			});
			let Vh = -1;
			const Qh = () => (Vh = (Vh + 1) % Dh.length, Dh[Vh]);

			function zh(e) {
				const {
					name: t,
					value: n,
					type: s,
					labels: r,
					createdAt: o
				} = e;
				return {
					age: Date.now() - o,
					type: "reddit-w3reporting",
					url: "",
					user_agent: navigator.userAgent,
					body: {
						sampling_fraction: 1,
						type: s,
						name: t,
						value: n,
						labels: null != r ? r : {}
					}
				}
			}

			function Kh() {
				const e = Object(he.e)(e => {
					const t = Object(xn.b)(e);
					return t && Object(ln.u)(t) || "unknown"
				});
				return Object(u.useEffect)(() => {
					(async () => {
						const {
							onCLS: t,
							onFID: s,
							onINP: r,
							onLCP: o,
							onTTFB: a
						} = await n.e("webvitals").then(n.bind(null, "./node_modules/web-vitals/dist/web-vitals.js"));
						t(t => {
							qh("desktop2x_perf_cumulative_layout_shift", t.value, {
								page_type: e
							}, "histogram")
						}), s(t => {
							qh("desktop2x_perf_first_input_delay_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}), r(t => {
							qh("desktop2x_perf_interaction_next_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), o(t => {
							qh("desktop2x_perf_largest_contentful_paint_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						}, {
							reportAllChanges: !0
						}), a(t => {
							qh("desktop2x_perf_time_to_first_byte_seconds", t.value / 1e3, {
								page_type: e
							}, "histogram")
						})
					})()
				}, []), null
			}
			var Jh = n("./src/reddit/components/Header/Sparse.tsx"),
				Xh = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Yh = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Zh = n.n(Yh);
			const {
				fbt: $h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), eg = Object(X.c)({
				showError: Pn.d.showVerboseErrors
			}), tg = Object(he.b)(eg)(e => {
				const t = Object(u.useContext)(Se.a);
				return m.a.createElement(nh.a.Provider, {
					value: !1
				}, m.a.createElement(Km.b, {
					subredditName: ""
				}, m.a.createElement("div", null, m.a.createElement(Jh.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), m.a.createElement("div", {
					className: Zh.a.container
				}, m.a.createElement("div", {
					className: Zh.a.mainContent
				}, m.a.createElement(Xh.a, {
					className: Zh.a.dizzySnoo
				}), m.a.createElement("h3", {
					className: Zh.a.title
				}, $h._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), m.a.createElement("div", {
					className: Zh.a.subTitle
				}, $h._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), m.a.createElement(tn.l, {
					onClick: () => window.location.reload(!0)
				}, $h._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: Zh.a.subTitle
				}, e.error.message), m.a.createElement("pre", null, m.a.createElement("code", null, e.error.stack)))), m.a.createElement("div", {
					className: Object(ye.a)(Zh.a.topImageContainer, {
						[Zh.a.topImageContainerExp]: t
					})
				}, m.a.createElement("img", {
					className: Zh.a.image,
					src: `${i.a.assetPath}/img/error/star_pattern.png`
				})), m.a.createElement("div", {
					className: Zh.a.bottomImageContainer
				}, m.a.createElement("img", {
					className: Zh.a.image,
					src: `${i.a.assetPath}/img/error/half_planet.png`
				}))))))
			});

			function ng() {
				return (ng = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const sg = Object(X.c)({
					isNavbarLikeMwebEnabled: kl.a,
					theme: e => e.themes.current
				}),
				rg = Object(he.b)(sg, {})(e => {
					let {
						children: t,
						theme: n,
						isNavbarLikeMwebEnabled: s
					} = e;
					const r = Object(Ve.a)({
						theme: n
					});
					return m.a.createElement(Se.a.Provider, {
						value: s
					}, m.a.createElement("div", {
						className: Object(ye.a)(ve.a.container, {
							[ve.a.containerExp]: s
						}),
						style: {
							"--background": r.body,
							"--canvas": r.canvas
						}
					}, t))
				});

			function og(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return m.a.createElement(Be.a, null, m.a.createElement(rg, null, m.a.createElement(Mh, null, m.a.createElement(Oe.a, null), m.a.createElement(Ih.a, null), m.a.createElement(Lh, null, m.a.createElement(t, null, m.a.createElement(ge.d, {
						component: ag(n)
					}))), m.a.createElement(Kh, null))))
				}
				return m.a.createElement(tg, {
					error: e.error
				})
			}
			const ag = e => t => m.a.createElement(Nh, ng({
					routes: e
				}, t)),
				ig = 1e3;
			class cg extends m.a.Component {
				constructor() {
					super(...arguments), this.flush = Pe()(() => Object(Sn.Eb)(this.props.storageKey, this.props.value), ig)
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
			cg.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const lg = Object(X.a)(v.Q, e => ({
				storageKey: _r.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var dg = Object(he.b)(lg)(cg);
			var ug = () => m.a.createElement(m.a.Fragment, null, m.a.createElement(dg, null)),
				mg = n("./src/reddit/constants/headers.ts"),
				pg = n("./src/reddit/constants/jsapiEvents.ts"),
				bg = n("./src/reddit/constants/screenWidths.ts"),
				hg = n("./src/reddit/contexts/AdminEvents.ts"),
				gg = n("./src/reddit/contexts/ApiContext.tsx"),
				fg = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				vg = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const Og = () => e => t => e(t);
			var yg = n("./src/lib/safeBadgeUpdate.ts");

			function Cg(e) {
				const t = Object(qu.g)(e);
				Object(yg.a)(t)
			}
			var Eg = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== vg.b && n.type !== vg.d || Cg(e.getState()), s
				} : Og,
				xg = n("./node_modules/brcast/dist/brcast.es.js"),
				jg = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var _g = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(xg.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(jg.b)(s) || Object(v.N)(s) || Object(v.M)(s)) && (e = !0, Object(G.e)(t)), s => r => {
								const o = s(r),
									a = n.getState();
								if (!Object(jg.b)(a)) {
									const n = Object(v.N)(a) || Object(v.M)(a);
									e && !n ? (e = !1, Object(G.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(G.e)(t), e = !0)
								}
								return o
							}
						}
					}
				} : () => ({
					broadcaster: Object(xg.a)([]),
					middleware: () => e => t => e(t)
				}),
				Pg = n("./src/lib/domUtils/index.ts");
			const Sg = 30 * P.kb;
			let kg = Date.now();
			const Ng = () => {
					kg = Date.now()
				},
				wg = !!Object(Pg.f)() && {
					passive: !0
				};
			window.addEventListener("click", Ng, !1), window.addEventListener("wheel", Za()(Ng, 250), wg), window.addEventListener("mousemove", Za()(Ng, 250), wg), window.addEventListener("keydown", Za()(Ng, 250), wg);
			var Mg = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - kg >= Sg ? (e.dispatch(de.h()), Ng()) : Ng()
					})), e => t => e(t)
				},
				Ig = n("./src/reddit/constants/preferences.ts"),
				Tg = n("./src/reddit/helpers/cookies/index.ts");
			const Ag = new Set([Hc.g, Hc.i, me.b, Hc.d, Hc.o, Ae.d, Ae.e, Hc.r]);
			var Rg = e => t => n => {
					const s = t(n);
					if (Ag.has(n.type)) {
						const t = e.getState().user,
							n = ba()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", Ig.b, Ig.d, Ig.e]);
						Object(Tg.a)({
							prefs: n
						})
					}
					return s
				},
				Lg = n("./src/reddit/actions/tabBadging.ts"),
				Dg = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Fg = n("./src/reddit/selectors/removedPosts.ts"),
				Ug = n("./src/reddit/models/Subreddit/index.ts"),
				Gg = n("./src/reddit/models/Post/index.ts");
			const Bg = (e, t) => ((e, t) => {
					var n, s, r, o;
					const a = "subreddit" === (null === (n = null == t ? void 0 : t.belongsTo) || void 0 === n ? void 0 : n.type) ? null === (s = null == t ? void 0 : t.belongsTo) || void 0 === s ? void 0 : s.id : null;
					if (!a) return !1;
					const i = null === (o = null === (r = e.subreddits) || void 0 === r ? void 0 : r.models) || void 0 === o ? void 0 : o[a];
					return !!i && ((null == i ? void 0 : i.type) !== Ug.f.Private && (null == i || !i.isQuarantined))
				})(e, t) && Object(Fg.b)(e) && (e => !!(e && e >= 5))(null == t ? void 0 : t.numComments) && (e => {
					return e > new Date(2016, 0, 1).getTime()
				})(t.created),
				qg = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Hg = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(xn.r)(e), r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, o = qg.has(r), a = Object(An.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Wg(e), l = s === P.Nb.COMMENTS || s === P.Nb.COLLECTION_COMMENTS, d = !(!n || !n.urlParams.partialCommentId), u = s === P.Nb.SEARCH_RESULTS || s === P.Nb.SUBREDDIT_LEADERBOARD || l && d, m = Object(Fg.d)(e) && !(e => {
						var t, n, s;
						const {
							currentPage: r
						} = e.platform;
						if (!Object(Fg.d)(e)) return !1;
						const o = null === (t = null == r ? void 0 : r.urlParams) || void 0 === t ? void 0 : t.partialPostId,
							a = o && Object(Gg.w)(o),
							i = a && (null === (s = null === (n = e.posts) || void 0 === n ? void 0 : n.models) || void 0 === s ? void 0 : s[a]);
						return !!i && Bg(e, i)
					})(e) || u;
					return i || o || c || m ? u ? "noindex" : "noindex,nofollow" : null
				},
				Wg = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(v.f)(e, s);
						n = !!Object(Dg.a)(t, !1, s)
					}
					return n
				};
			var Vg = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const Qg = "theme-color",
				zg = `meta[name="${Qg}"]`;

			function Kg(e) {
				return e ? Vg.b.body : Vg.a.body
			}
			var Jg = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === ie.f) {
						const t = e.getState(),
							s = Object(v.P)(t),
							{
								meta: r
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(qu.i)(e);
							Object(Lg.c)(n, t)
						})(t, r.title) : we.a.write(() => {
							document.title = r.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Hg(e),
										{
											head: r
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", r.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : r.removeChild && r.removeChild(n))
								}
							})(t, document)
						})
					} else if (n.type === Hc.i) {
						! function(e) {
							we.a.write(() => {
								const t = document.head.querySelector(zg);
								if (t) {
									const n = Object(v.db)(e);
									t.content = Kg(n)
								}
							})
						}(e.getState())
					}
					return s
				} : Og,
				Xg = n("./src/reddit/helpers/survey/index.ts");
			var Yg = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(Xg.a).filter(t => t === e).length)(t.type) && Object(Sn.U)(Xg.a[t.type]), e(t)) : Og;
			const Zg = 5 * P.kb;
			var $g = e => {
					const t = Pe()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(de.g())
					}, Zg);
					let n, s;
					const r = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const r = new Date(n.expires),
								o = s + Math.floor(.8 * (r.getTime() - s));
							Date.now() > o && t && t()
						},
						o = e => {
							s = Date.now();
							const r = new Date(e.expires).getTime() - s,
								o = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(o * e.expiresIn * 1e3), Math.floor(o * r));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && o(a.user.session), window.addEventListener("focus", r), window.addEventListener("touchend", r), document.body.addEventListener("mouseenter", r), e => t => (t.type !== de.a && t.type !== de.b && t.type !== de.c && t.type !== de.e || o(t.payload), t.type === de.d && (clearTimeout(n), n = null), e(t))
				},
				ef = n("./src/reddit/singleton/tracing/index.ts");
			var tf = e => e => t => {
					const n = () => e(t);
					return ef.b.isEnabled ? ef.b.recordLocalSpan(t.type, n) : e(t)
				},
				nf = n("./src/reddit/actions/frontpage/constants.ts"),
				sf = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				rf = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				of = n("./src/reddit/actions/pages/profilePosts.ts"),
				af = n("./src/reddit/actions/pages/search/index.ts"),
				cf = n("./src/reddit/actions/pages/subreddit.ts"),
				lf = n("./src/reddit/actions/tracking.ts"),
				df = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				uf = n("./src/reddit/helpers/history/index.ts"),
				mf = n("./src/reddit/helpers/trackers/commentList.ts"),
				pf = n("./src/reddit/helpers/trackers/postList.ts"),
				bf = n("./src/reddit/helpers/routeKey/index.ts");
			var hf = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(lf.c({
							routeKey: t
						}))
					};
					if (n.type === ie.b) {
						const s = e.getState(),
							r = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							o = Object(fr.G)(s, r) || "",
							i = (s.subreddits.about[o] || {}).advertiserCategory;
						a.trigger("pageview", {
							...ba()(n.payload.location, "pathname", "search", "hash"),
							subreddit: r,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(bf.b)(c, s, Object(df.a)(s));
							if (e && U.c.has(e)) {
								const t = U.c.end(e);
								!Object(xn.i)(s) && Object(uf.b)(eh.b.IsOverlay) || Object(Ga.k)(c, s, q.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(df.a)(s, l),
							u = Object(bf.b)(l, s, d);
						if (!u) return t(n);
						U.c.start(u)
					}
					const r = t(n);
					switch (n.type) {
						case nf.c:
						case rf.b:
						case rf.e:
						case of.PROFILE_POSTS_LOADED:
						case sf.e:
						case cf.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case af.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case nf.g:
						case yo.i:
						case of.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: r
							} = n.payload;
							s(t);
							const o = e.getState();
							if (r.length) break;
							if (void 0 === o.listings.postOrder.endMarkers[t]) break;
							pf.l(o, t);
							break
						}
						case sf.b: {
							const {
								key: t,
								commentIds: r
							} = n.payload;
							if (s(t), r.length) break;
							const o = e.getState();
							if (void 0 === o.profileCommentsPage.endMarkers[t]) break;
							mf.a(o, t);
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
					return r
				},
				gf = n("./src/reddit/helpers/datadome.ts"),
				ff = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				vf = n("./src/reddit/helpers/trackers/global.ts");
			let Of = null;
			const yf = () => {
				Of && window.clearTimeout(Of), Of = null
			};
			var Cf = e => {
					Of = window.setTimeout(() => {
						yf(), Object(U.a)(Object(vf.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", yf)
				},
				Ef = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				xf = n("./src/reddit/actions/connection/constants.ts");
			const jf = Object(b.a)(xf.b),
				_f = Object(b.a)(xf.a),
				Pf = Object(b.a)(xf.c);
			var Sf = n("./src/reddit/actions/meta.ts");
			const kf = (e, t) => Object(U.a)({
					...ln.n(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(ln.d)(e, {
						type: t
					})
				}),
				Nf = "(display-mode: minimal-ui)";
			const wf = 3 * P.Sb;

			function Mf(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(Nf).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(Sf.i)());
				const t = window.matchMedia(Nf);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(Sf.i)()) : e.dispatch(Object(Sf.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						Cg(t)
					}, 1e3), kf(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(jf()), setTimeout(() => e.dispatch(Pf()), wf)
				}), window.addEventListener("offline", () => e.dispatch(_f()))
			}
			const If = (e, t) => {
				if (!e) return;
				const n = (d.a.get(_n.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						r = {
							name: _n.g,
							value: s,
							cookieOptions: Object(Xp.a)(),
							cookieContext: t
						};
					Object(Ep.c)(r)
				}
			};
			var Tf = n("./src/reddit/layout/page/Listing/index.tsx"),
				Af = n("./src/reddit/reducers/index.ts");
			var Rf = n("./src/reddit/selectors/experiments/delayDnPermission.ts"),
				Lf = n("./src/reddit/selectors/experiments/index.ts"),
				Df = n("./src/reddit/selectors/experiments/utils.ts");
			const Ff = e => !!Object(Df.a)((e => Object(Na.c)(e, {
					experimentEligibilitySelector: Lf.f,
					experimentName: Tn.Ac
				}))(e)),
				Uf = {
					displayDelay: 15,
					displayOnRoutes: [P.Nb.SUBREDDIT, P.Nb.COMMENTS],
					experimentName: Tn.Xd,
					experimentVariant: Tn.be.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				Gf = e => {
					const {
						base_url: t
					} = Object(ln.Z)(e), n = Object(xn.b)(e), s = n && n.urlParams.partialPostId, r = n && n.urlParams.subredditName;
					return {
						...t && {
							rbl: t
						},
						...r && {
							s: r
						},
						...s && {
							p: s
						}
					}
				},
				Bf = e => {
					if ((((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return t.experimentOverrides[n] === s
						})(Uf, e) || (e => {
							let {
								samplingRate: t,
								seed: n
							} = e;
							return !!n && 0 === Math.floor(n * t)
						})(Uf)) && ((e, t) => {
							let {
								displayOnRoutes: n
							} = e;
							const s = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!s && n.includes(s)
						})(Uf, e) && ((e, t) => {
							let {
								isSEOOnly: n
							} = e;
							return !n || t.meta.isSessionSeo
						})(Uf, e) && ((e, t) => {
							let {
								experimentName: n,
								experimentVariant: s
							} = e;
							return Object(Na.c)(t, {
								experimentName: n,
								experimentEligibilitySelector: Na.a
							}) === s
						})(Uf, e)) return {
						displayDelay: Uf.displayDelay,
						externalVars: Gf(e)
					}
				};
			var qf = n("./src/reddit/singleton/EventSystem.ts"),
				Hf = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				Wf = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				Vf = n("./src/reddit/reducers/features/categories/index.ts"),
				Qf = n("./src/lib/sentry/index.ts"),
				zf = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Kf = Object(b.a)(zf.C),
				Jf = () => {
					return Object(Sn.A)(_r.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var Xf = n("./src/reddit/actions/global/constants.ts");
			Object(Ec.a)({
				features: {
					categories: Vf.a
				}
			});
			const Yf = Object(b.a)(Xf.a),
				Zf = e => async (t, n) => {
					t((() => async e => {
						const t = Jf();
						t && e(Kf(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || Qf.c.withScope(e => {
						Object(Qf.a)(e, {
							serverLogging: !1
						}), Qf.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: r
					} = e;
					r && t(Yf(r))
				}, $f = /^\/account\/magic_link\/landing\/[^\/]+\/?$/, ev = () => async (e, t) => {
					var n;
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return $f.test(t)
					})(null === (n = t().platform) || void 0 === n ? void 0 : n.sessionReferrer) && e(Object(K.openD2xOnboardingModal)())
				};
			var tv = n("./src/reddit/actions/notificationsInbox/index.ts"),
				nv = n("./src/reddit/actions/onboarding/index.ts"),
				sv = n("./src/reddit/constants/countrySites.ts"),
				rv = n("./src/reddit/selectors/countrySites.ts");
			const ov = sv.b ? `${sv.a}/${sv.b}` : `${sv.a}`,
				av = (e, t) => {
					return !!Object(rv.e)(e) && !(t && !Object(rv.d)(t))
				},
				iv = e => e.startsWith("/r/") ? e.replace("/r/", `/${ov}/r/`) : e;
			var cv = n("./src/reddit/selectors/experiments/countrySites.ts");
			var lv = n("./src/reddit/actions/economics/predictions/constants.ts"),
				dv = n("./src/reddit/actions/eventPosts/constants.ts"),
				uv = n("./src/reddit/actions/linkedPosts/constants.ts"),
				mv = n("./src/reddit/actions/multireddit/constants.ts"),
				pv = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				bv = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				hv = n("./src/reddit/actions/pages/countrySite/constants.ts"),
				gv = n("./src/reddit/actions/pages/modListing/constants.ts"),
				fv = n("./src/reddit/actions/pages/multireddit/constants.ts"),
				vv = n("./src/reddit/actions/pages/postCreation.ts"),
				Ov = n("./src/reddit/actions/pages/topic.ts"),
				yv = n("./src/reddit/actions/profileConversations.ts"),
				Cv = n("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Ev = n("./src/reddit/actions/recommendations.ts"),
				xv = n("./src/reddit/actions/subreddit/constants.ts"),
				jv = n("./src/lib/ads/session-signals.ts");
			let _v = !1;
			var Pv = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts");
			Object(o.e)(o.b.EntryPointStart);
			const Sv = Object(D.a)({
					actionDispatchers: {
						reddaidReceived: be.u,
						loidReceived: be.r,
						sessionTrackerReceived: be.z
					},
					authHeaders: {
						[mg.a]: "desktop2x"
					},
					cookies: d.a,
					receivedActions: {
						reddaidReceived: be.d,
						loidReceived: be.b,
						sessionTrackerReceived: be.k,
						userAuthenticated: de.c,
						userLoggedOut: de.d,
						userReauthenticated: de.e,
						headersReceived: H.a
					},
					onBeforeRequestFactory: Ef.a,
					statsAppName: P.m.Redesign
				}),
				kv = Object(F.a)(Sv.apiContext),
				Nv = Object(F.a)(Sv.apiContext, i.a.gqlRealtime2Url),
				wv = _g();
			let Mv;
			Object(w.a)({
				reducerMap: Af.a,
				routes: Bu,
				apiContext: Sv.apiContext,
				gqlContext: kv.gqlContext,
				gqlRealtime2Context: Nv.gqlContext,
				appFactory: (e, t) => m.a.createElement(hg.a.Provider, {
					value: wv.broadcaster
				}, m.a.createElement(gg.a.Provider, {
					value: {
						apiContext: Sv.apiContext,
						gqlContext: kv.gqlContext,
						gqlRealtime2Context: Nv.gqlContext
					}
				}, m.a.createElement(fg.b, null, m.a.createElement(og, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), m.a.createElement(ug, null)))),
				appName: P.m.Redesign,
				history: Object(c.a)({
					getUserConfirmation(e, t) {
						const n = Mv;
						if (!n) return;
						n.dispatch(Object(ie.l)({
							allowNavigationCallback: function() {
								let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								t(e), n.dispatch(Object(ie.k)())
							}
						}))
					}
				}),
				customMiddleware: [x.a.withExtraArgument({
					routes: Bu,
					apiContext: Sv.apiContext,
					gqlContext: kv.gqlContext,
					gqlRealtime2Context: Nv.gqlContext
				}), wv.middleware, Mg, Sv.middleware, kv.middleware, Nv.middleware, $g, Rg, tf, hf, Jg, Yg, cd.a, Eg, e => t => n => {
					let s, r;
					if (!Object(cv.b)(e.getState()) || !n.payload) return t(n);
					r = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const o = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!av(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.belongsTo.id,
									t = Object(rv.d)(e);
								(n || t) && (r.permalink = r.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${ov}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, r)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!av(e, n)) return t;
							for (const [s, r] of Object.entries(t)) {
								const e = r.subredditId,
									t = Object(rv.d)(e);
								(n || t) && (r.permalink = iv(r.permalink))
							}
							return t
						})(e.getState(), n.payload.comments, r))
					} catch (a) {
						n.payload = {
							...o
						}
					}
					return t(n)
				}, e => t => n => {
					if (!Object(cv.b)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === h.e ? n.payload = ((e, t) => {
							if (!av(e, t.name)) return t;
							const n = Object(rv.d)(t.id);
							if (t.name || n) {
								const e = iv(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!av(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(rv.d)(s.id),
									r = Object(rv.d)(s.name);
								if (e || r) {
									const e = iv(s.url),
										r = {
											...s,
											url: e
										};
									t[n] = r
								}
							}
							return t
						})(e.getState(), n.payload.subreddits))
					} catch (r) {
						n.payload = {
							...s
						}
					}
					return t(n)
				}, e => t => n => {
					var s, r, o;
					switch (_v || (Object(jv.c)(null === (r = null === (s = null == e ? void 0 : e.getState()) || void 0 === s ? void 0 : s.posts) || void 0 === r ? void 0 : r.models), _v = !0), n.type) {
						case hv.b:
						case hv.f:
						case vv.PAGE_LOADED:
						case uv.b:
						case pv.b:
						case gv.e:
						case gv.h:
						case sf.b:
						case sf.e:
						case rf.e:
						case rf.b:
						case of.PROFILE_POSTS_LOADED:
						case of.MORE_POSTS_LOADED:
						case cf.SUBREDDIT_LOADED:
						case nf.c:
						case fv.b:
						case bv.b:
						case mv.r:
						case nf.g:
						case yv.e:
						case Ev.b:
						case xv.k:
						case yo.i:
						case Cv.b:
						case Ov.TOPIC_DATA_LOADED:
						case Ov.MORE_POSTS_LOADED:
						case dv.c:
						case dv.d:
						case lv.o:
						case xv.s:
							Object(jv.c)(null === (o = n.payload) || void 0 === o ? void 0 : o.posts);
							break;
						case de.a:
						case de.b:
						case de.c:
						case de.e:
						case de.d:
							Object(jv.b)()
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
					loading: m.a.createElement(Tf.a, {
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
						e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || s.dispatch(Object(te.j)({
							height: e.data.height || 0,
							isDeleted: e.data.isDeleted || !1,
							postId: `t3_${e.data.id36}`
						}))
					}), Mf(s);
					const o = s.getState();
					s.dispatch(Object(H.b)({
							headers: {
								[r.a]: "1"
							}
						})), Object(G.d)("enabled" === Object(Na.c)(s.getState(), {
							experimentEligibilitySelector: Na.a,
							experimentName: Tn.Nf,
							expEventOverride: !1
						})), Object(G.c)("enabled" === Object(Na.c)(s.getState(), {
							experimentEligibilitySelector: Na.a,
							experimentName: Tn.Pf
						})), Object(G.g)("enabled" === Object(Na.c)(s.getState(), {
							experimentEligibilitySelector: Na.a,
							experimentName: Tn.Of
						})), Object(G.f)(kv.gqlContext), window.addEventListener("beforeunload", () => {
							const e = s.getState(),
								t = Object(vf.a)("tab_closed")(e),
								n = B.g(t),
								r = Object(Hf.a)(n),
								o = Object(Wf.b)(r);
							Object(L.b)("sendV2EventsData", {
								data: r,
								headers: o
							})
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(t.location.pathname) || s.dispatch(Object(ie.h)());
					const a = Object(v.db)(s.getState());
					s.dispatch(Object(me.c)({
						nightmode: a
					}));
					const l = (e => e.tracing.traceId)(s.getState());
					if (l && (e => Object(Na.c)(e, {
							experimentEligibilitySelector: Na.a,
							experimentName: Tn.P
						}) === Tn.ab.Enabled)(s.getState())) {
						ef.b.enableTracing(!0);
						const e = ef.b.createTraceFromId(l);
						ef.b.setParent(e)
					}
					s.dispatch(Object(ie.i)(n));
					t.listen((e, t) => {
						const r = Object(I.a)(Object(c.e)(e), n, s.getState());
						s.dispatch(Object(ie.j)(e, t, r))
					});
					const {
						currentPage: d
					} = o.platform;
					if (d) {
						const e = [Ra.f];
						if (Object(xn.j)(o) && e.push(Ra.c), e.length > 0) {
							const t = Object(k.a)(d.url, e);
							t !== d.url && s.dispatch(Object(p.c)(t))
						}
					}
					return Rn.a.initialize(o), {
						localStorageData: Object(Sn.B)()
					}
				},
				postRender: e => {
					let {
						browserHistory: t,
						routes: r,
						serverDocumentLength: c,
						store: l,
						localStorageData: d
					} = e;
					var u, m;
					Mv = l;
					t.listen((e, t) => {
						const n = l.getState(),
							{
								urlParams: s,
								queryParams: r
							} = n.platform.currentPage,
							o = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: r
							},
							a = s.subredditName,
							i = Object(fr.G)(n, a) || "";
						if (If(i, {
								country: n.meta.country
							}), i) {
							l.dispatch(O(i, a));
							const e = Object(xn.e)(n);
							e && l.dispatch(y(e))
						}
						qf.a.publish(pg.c, o, document)
					});
					const p = l.getState(),
						b = Object(cd.b)();
					l.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(C(n)), t(E(Array.from(s)))
					})(b));
					const h = (p.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						g = Object(fr.G)(p, h) || "";
					if (h) {
						l.dispatch(O(g, h));
						const e = Object(xn.e)(p);
						e && l.dispatch(y(e))
					}
					const f = Object(fr.G)(p, h) || "",
						x = (p.subreddits.about[f] || {}).advertiserCategory;
					a.setup({
						jailUrl: "https://www.redditmedia.com/gtm/jail",
						containerId: i.a.gtmContainerId,
						payload: {
							user: p.user.account ? p.user.account.id : p.user.loid.loid
						}
					}), a.trigger("pageview", {
						subreddit: h,
						advertiserCategory: x
					}), l.dispatch(Zf({
						localStorageData: d
					}));
					const w = Object(bh.c)(p);
					w && (l.dispatch(oe()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Ra.w]))), l.dispatch(ev());
					const I = Object(xn.q)(p),
						D = null == I ? void 0 : I[Ra.o];
					D && (history.replaceState(history.state, "", Object(k.a)(window.location.href, [Ra.o])), w || l.dispatch(Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/changeUsername.ts")).then(e => e.openWelcomeBackModalIfNeeded))())), (null == I ? void 0 : I[Ra.u]) && (l.dispatch(Object(M.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/login.ts")).then(e => e.openLoginModal))()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Ra.u]))), window.addEventListener("load", () => {
						const e = l.getState(),
							{
								currentPage: r
							} = e.platform,
							a = (r.urlParams.subredditName || "").toLowerCase(),
							i = Object(fr.G)(e, a) || "";
						if (Object(L.a)(), If(i, {
								country: e.meta.country
							}), r && r.meta) {
							const a = r.meta.name;
							if (Object(U.b)(P.m.Redesign, {
									page: a,
									type: "rum"
								}), Object(N.c)(e.meta.userAgent) && window.innerWidth > bg.b) {
								const t = Object(o.f)(c);
								T.a && T.a.timing && ef.b.isEnabled && (ef.b.recordPerformanceTimings(`${a}_time_to_first_byte`, T.a.timing.fetchStart, T.a.timing.responseStart), ef.b.recordPerformanceTimings(`${a}_time_to_interactive`, T.a.timing.fetchStart, T.a.timing.domInteractive));
								const n = [Object(gf.a)()],
									s = !0;
								if (Object(xn.g)(e)) {
									const t = Object(ff.a)(e);
									n.push(Object(ff.c)(t))
								}
								const r = {
									isLoggedIn: Object(v.Q)(e),
									name: a,
									statsdPathsForExperiments: n
								};
								Object(o.g)(r, t, s)
							}
							const i = T.a.timing.domInteractive - T.a.timing.navigationStart;
							Object(Ga.k)(r.routeMatch, l.getState(), q.TimerType.Initial, i, r.urlParams);
							const d = Object(S.a)(window.location.href);
							d && d.get(Ra.a) && history.replaceState(history.state, "", Object(k.a)(window.location.href, [Ra.a])), Object(R.a)(d.get(Ra.E)) && l.dispatch(Object(pe.f)({
								kind: sp.b.SuccessCommunity,
								text: s.fbt._("Email verification complete", null, {
									hk: "bqMP6"
								})
							})), d.get(Ra.F) && (l.dispatch(Object(z.a)(d.get(Ra.F))), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Ra.F])));
							let u = !1;
							const m = Object(v.T)(e);
							(Object(uf.b)(eh.b.JustLoggedIn) || m) && (l.dispatch(Object(pe.f)({
								text: s.fbt._("Successfully logged in!", null, {
									hk: "2POUVB"
								})
							})), u = !0, Object(uf.c)(eh.b.JustLoggedIn), history.replaceState(history.state, "", Object(k.a)(window.location.href, [Ra.n]))), Object(uf.b)(eh.b.JustLoggedOut) && (u = !0, Object(uf.c)(eh.b.JustLoggedOut)), se().then(e => {
								let {
									subscribeToPermissionsChange: t
								} = e;
								return l.dispatch(t())
							});
							const p = () => l.dispatch(Object(nv.openReonboardingModalIfNeeded)());
							let b;
							$(e) && (b = () => {
								const {
									dispatch: e
								} = l;
								t.listen(() => e(ee())), e(ee())
							});
							const h = Ff(e);
							if (!D)
								if (h || !1 === Sn.V()) h && b && b(), p();
								else {
									const t = () => {
											b && b(), p()
										},
										n = e => {
											se().then(e => e.requestNotificationsPermissions).then(t => l.dispatch(t(u, !1, e)))
										};
									Object(Rf.a)(e) ? Object(v.Q)(e) ? (n(), p()) : b && b() : n(t)
								} if (a === P.Nb.MULTIREDDIT && r.routeMatch) {
								const {
									multiredditName: e,
									username: t
								} = r.routeMatch.match.params;
								l.dispatch(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("CountryPage~Multireddit"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
									multiredditName: e,
									username: t
								}))
							}
							Object(tl.d)(l.getState()) || l.dispatch(Object(Q.c)())
						}
						Object(v.Q)(l.getState()) && l.dispatch(Object(W.d)()), Object(j.requestIdleCallback)(async () => {
							l.dispatch(Object(re.d)()), await Object(_.a)() && Object(vf.b)(l.getState());
							const e = async () => {
								const e = l.getState(),
									t = Bf(e);
								t && (await (async e => {
									return (await Object(ne.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
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
							if ("visible" !== document.visibilityState && (Sn.Ub(Date.now()), Object(U.a)(Object(vf.a)("tab_backgrounded")(t))), (e => Object(Na.c)(e, {
									experimentEligibilitySelector: e => !Object(Z.d)(e),
									experimentName: Tn.Jc
								}) === Tn.Wc.Enabled)(t) && "visible" === document.visibilityState && n && Object(Ga.k)(n.routeMatch, l.getState(), q.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
								const e = Sn.v(),
									t = Sn.w(),
									n = Sn.H(),
									s = Sn.R();
								if (s && e && n) {
									const r = Date.now() - s;
									Object(U.a)(Object(vf.e)("tab_backgrounded", n)(l.getState(), r, e, t))
								}(s || e || n || t) && (Sn.db(), Sn.hb(), Sn.fb(), Sn.eb())
							}(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && Pv.d[n.locationState.clickId] && !Pv.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(Pv.b)(n.locationState.clickId) : Object(Pv.c)(n.locationState.clickId))
						}), Object(Z.h)(l.getState()) && Cf(l.getState), l.dispatch(Object(ue.n)())
					}), window.history.scrollRestoration = "manual", qf.a.attachStore(l), l.dispatch(Object(le.b)(A.a.PageLoad));
					const F = Sn.p(null === (u = l.getState().user.account) || void 0 === u ? void 0 : u.id),
						G = Sn.o(null === (m = l.getState().user.account) || void 0 === m ? void 0 : m.id);
					l.dispatch(Object(ce.C)({
						posts: null != F ? F : []
					})), l.dispatch(Object(V.l)({
						comments: null != G ? G : []
					})), Object(cm.e)(l.getState()) && l.dispatch(Object(tv.e)()), Object(j.requestIdleCallback)(() => {
						if (Object(mh.g)(l.getState())) {
							const e = Sn.C();
							(!e || e && Date.now() - e.lastUpdated >= P.B) && l.dispatch(Object(ue.f)())
						}
					})
				},
				raven: {
					tags: {
						project: P.m.Redesign
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
				return r.a.createElement("div", u({
					className: Object(o.a)(d.a.backgroundContainer, n),
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
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
				g = Object(o.b)(h);
			t.a = b(g(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: s,
					dispatch: o,
					fitPageToContent: a,
					forcedLayout: d,
					isCollectionLayout: u,
					isEditing: b,
					layout: h,
					pageLayer: g,
					...f
				} = e;
				return r.a.createElement("div", p({
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
				r = n.n(s),
				o = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
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
			var y = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return r.a.createElement(b.a, {
						className: O.a.backToSubreddit,
						to: n
					}, r.a.createElement("div", {
						className: O.a.innerContainer
					}, r.a.createElement(f.a, {
						name: h.a.back,
						className: p()(O.a.content, O.a.back)
					}), r.a.createElement(g.b, {
						className: p()(O.a.content, O.a.subredditIcon)
					}), r.a.createElement("span", {
						className: p()(O.a.content, O.a.title)
					}, t)))
				},
				C = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
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
					hideOnlyChildMargin: j,
					isCollectionLayout: _,
					isPageSwapped: P,
					maxWidth: S,
					navBar: k,
					redditStyle: N,
					sidebar: w,
					sidebars: M,
					trendingUnit: I,
					subredditId: T
				} = e, A = I ? "28px" : "0", R = P ? {
					marginRight: `${c.p}px`,
					marginTop: A
				} : {
					marginLeft: `${c.p}px`,
					marginTop: A
				}, L = w && r.a.createElement("div", {
					className: Object(i.a)(x.a.sidebar, _ ? x.a["m-collectionLayout"] : x.a.defaultLayout),
					style: R
				}, w), D = r.a.createElement(a.a, {
					hideOnlyChildMargin: j,
					className: g,
					disableFullscreen: v,
					fitPageToContent: O,
					forcedLayout: E,
					isCollectionLayout: _
				}, h, n && r.a.createElement(y, {
					subredditName: n
				}), b);
				let F;
				F = M ? r.a.createElement(r.a.Fragment, null, M[0], D, M[1]) : P ? r.a.createElement(r.a.Fragment, null, L, D) : r.a.createElement(r.a.Fragment, null, D, L);
				const U = v ? `${S||d.a+2*c.l}px` : "100%",
					G = Object(s.useContext)(u.a);
				return r.a.createElement(C.a, {
					subredditId: T
				}, r.a.createElement("div", {
					className: Object(i.a)(x.a.outerContainer, l.i, m, {
						[x.a.outerContainerExp]: G
					}),
					ref: p
				}, r.a.createElement(o.a, {
					className: l.h,
					redditStyle: N,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: x.a.innerContainer
				}, k, f, (e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null)(e), r.a.createElement("div", {
					style: {
						maxWidth: U
					}
				}, I), r.a.createElement("div", {
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

			function r(e) {
				return "object" != typeof e[0]
			}
			var o;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Default = "default", e.Loading = "loading", e.Error = "error"
				}(o || (o = {}))
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
			var s, r, o;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.NavDropdown = "nav", e.LeftRail = "left"
				}(s || (s = {})),
				function(e) {
					e.XhrError = "xhr", e.ParseError = "parse"
				}(r || (r = {})),
				function(e) {
					e.LoggedIn = "loggedin", e.OneFeed = "onefeed", e.Popular = "popular"
				}(o || (o = {}))
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
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
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
					action: o.a,
					chunk: r.r.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
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
					action: o.a,
					chunk: r.r.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.APPEAL
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
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = [a, `${a}/:username`, `${a}/:username/:avatarId`, `${a}/nft/:chainId/:contractAddress/:tokenId`],
				c = {
					action: o.a,
					chunk: r.r.AVATAR,
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
						name: r.Nb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
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
					action: o.c,
					chunk: r.r.COINS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/page.ts");
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
					action: o.b,
					chunk: r.r.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/featureFlags/profileCollections.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CollectionCommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
			l = Object(o.c)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("CollectionCommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: r.r.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: r.Nb.COLLECTION_COMMENTS
					},
					prefetches: [r.r.FRONTPAGE, r.r.COMMENTS_PAGE, r.r.SUBREDDIT]
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
		"./src/reddit/routes/countrySitePage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/countrySites/index.ts"),
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
					chunk: r.r.INTERNATIONAL_SITE_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.INTERNATIONAL_SITE_PAGE
					},
					path: Object(o.c)(c, !1),
					prefetches: [r.r.SUBREDDIT]
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
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/econManagement.ts");
			const a = "/econ-management",
				i = "q",
				c = {
					action: o.a,
					chunk: r.r.ECON_MANAGEMENT,
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
						name: r.Nb.ECON_MANAGEMENT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/routes/econManagement2/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/econManagement2.ts");
			const a = "/econ-management-2",
				i = {
					action: o.a,
					chunk: r.r.ECON_MANAGEMENT_2,
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
						name: r.Nb.ECON_MANAGEMENT_2
					},
					path: a
				};
			t.a = i
		},
		"./src/reddit/routes/followers/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("ProfileFollowersAction").then(n.bind(null, "./src/reddit/actions/pages/followers/index.ts")).then(e => e.followersPageRequested)),
					chunk: r.r.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.FOLLOWERS
					},
					path: a,
					prefetches: [r.r.PROFILE_OVERVIEW]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/framedGild/index.ts");
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
					action: o.a,
					chunk: r.r.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/framedModal/index.ts");
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
					action: o.a,
					chunk: r.r.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object.keys(a.W).map(e => a.W[e]).join("|"),
				u = "/",
				m = `/:sort(${d})?`,
				p = Object(o.a)({
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
					routePredicate: e => !Object(l.Q)(e) && !Object(c.b)(e)
				},
				f = {
					...b,
					path: u,
					meta: {
						name: a.Nb.INDEX
					},
					routePredicate: e => Object(c.b)(e)
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
					routePredicate: e => !Object(l.Q)(e) && !Object(c.b)(e)
				},
				y = {
					...b,
					path: m,
					meta: {
						name: a.Nb.LISTING
					},
					routePredicate: e => Object(c.b)(e)
				},
				C = [h, g, f, v, O, y];
			t.a = C
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/topic.ts"),
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
							gqlContext: r
						} = n; {
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						try {
							s = await Object(o.fetchTopicPage)(r(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(o.topicFailed)())
						}
						if (!s) return;
						const i = t();
						e(Object(o.topicLoaded)({
							...s,
							key: "tagging",
							meta: i.meta
						}))
					},
					chunk: r.r.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: r.Nb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = l
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(o.a)({
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
				return r
			}));
			const s = "/community-points/",
				r = "/community-points/documentation/*"
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/noGasPage.ts"),
				l = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				d = n("./src/reddit/actions/users.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/routes/meta/constants.ts");
			const g = {
					action: () => async (e, t) => {
						Object(b.Q)(t()) || await e(Object(d.t)())
					},
					chunk: r.r.META_ARBITRUM_POINTS_MIGRATION_PAGE,
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
						name: r.Nb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/"]
				},
				f = {
					action: i.a,
					chunk: r.r.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
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
						name: r.Nb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
						isResponsive: !0
					},
					path: [h.b, h.a, "/vault/", "/web/community-points/"]
				},
				v = {
					action: l.a,
					chunk: r.r.META_MEMBERSHIP_PAYWALL_PAGE,
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
						name: r.Nb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				O = {
					action: c.a,
					chunk: r.r.META_NO_GAS_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "NoGasPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("NoGasPage").then(n.bind(null, "./src/reddit/pages/meta/NoGasPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/NoGasPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Nb.META_NO_GAS_PAGE,
						isResponsive: !0
					},
					path: ["/web/vault/no-gas"]
				},
				y = e => async (t, n) => {
					const s = Object(p.a)(e.queryParams);
					Object(b.Q)(n()) || await t(Object(d.t)()), s && setTimeout(async () => {
						await t(Object(o.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), m.d.spBurnLinks(n()) && t(Object(a.h)(u.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, C = {
					action: y,
					chunk: r.r.EMPTY,
					exact: !0,
					meta: {
						name: r.Nb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [g, f, v, O, C]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
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
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(o.a)({
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
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: r.r.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [r.r.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: r.r.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.POST_DRAFT
					},
					path: a,
					prefetches: [r.r.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/postSetPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("PostSetPageAction").then(n.bind(null, "./src/reddit/actions/pages/postSetPage/index.ts")).then(e => e.postSetPageRequested)),
					chunk: r.r.POST_SET_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.POST_SET
					},
					path: a,
					prefetches: [r.r.POST_SET_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/predictions.ts");
			const a = "/predictions",
				i = {
					action: o.a,
					chunk: r.r.PREDICTIONS,
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
						name: r.Nb.PREDICTIONS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileComments~ProfilePrivate"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: r.r.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [r.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: r.r.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: r.r.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [r.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/submitted",
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ProfileComments~ProfileOverview~ProfilePosts"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: r.r.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_POSTS
					},
					path: a,
					prefetches: [r.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const l = Object(o.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("ProfileComments~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts"),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: r.r.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = l
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: r.r.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: r.Nb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [r.r.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: r.r.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.REPORT
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/index.tsx")),
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~SearchResults"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: r.r.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [r.r.FRONTPAGE, r.r.SUBREDDIT, r.r.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				r = n.n(s),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.dc).map(e => a.dc[e]).join("|"),
				l = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("vendors~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(o.a)({
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
					component: Object(o.a)({
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
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/actions/pages/subredditLeaderboard.ts")).then(e => e.subredditLeaderboardPageRequested)),
					chunk: r.r.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: r.Nb.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [r.r.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
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
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~Subreddit~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
			d = Object(a.c)(d), d.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(r.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: o.r.EMPTY,
					exact: !0,
					meta: {
						name: o.Nb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~Subreddit~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: o.r.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: o.Nb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [o.r.SUBREDDIT]
				};
			t.a = [p, b]
		},
		"./src/reddit/routes/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/talk.ts");
			const a = "/talk",
				i = {
					action: o.a,
					chunk: r.r.TALK,
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
						name: r.Nb.TALK
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadableAction/index.ts");
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
					action: Object(o.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: r.r.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: r.Nb.TOPIC
					},
					prefetches: [r.r.COMMENTS_PAGE, r.r.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./src/config.ts"),
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
				experimentName: l.Ud
			}), e => e === l.Yd.Enabled);
			var h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = n("./src/reddit/selectors/experiments/magicLink.ts"),
				f = n("./src/reddit/actions/modal.ts"),
				v = n("./src/reddit/selectors/accountManager/modalData.ts"),
				O = n("./src/reddit/selectors/meta.ts");
			const y = Object(a.a)(p.f, O.b, v.a, (e, t, n) => e && "DE" === t && n === f.a.Report),
				C = Object(a.a)(e => Object(m.c)(e, {
					experimentEligibilitySelector: y,
					experimentName: l.Ce
				}), e => e === l.Le.Enabled);
			var E = n("./src/reddit/selectors/experiments/oneTapAuto/index.ts"),
				x = n("./src/lib/getParsedUserAgent/index.ts");
			const j = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(x.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: l.wf
			}), e => e === l.If.Enabled);
			var _ = n("./src/reddit/selectors/responsiveSettings.ts");
			const P = Object(a.c)({
					frontpageSignupVariant: u.a,
					magicLinkVariant: g.a,
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: l.yf
					}),
					blockingInterstitialVariant: h.e,
					blockingInterstitialV2Variant: h.f
				}),
				S = Object(a.c)({
					isAmModalDesignUpdateEnabled: d.a,
					isBlockingInterstitialEnabled: h.b,
					isBlockingInterstitialV2Enabled: h.c,
					isGoogleSsoGisEnabled: b,
					isNetzDGComplianceEnabled: C,
					isOneTapAutoEnabled: E.a,
					isSafariOneTapEnabled: j
				}),
				k = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, e => Object(v.c)(e), v.a, _.a, O.j, P, S, (e, t, n, a, d, u, m, p) => {
					const {
						blockingInterstitialVariant: b,
						blockingInterstitialV2Variant: h,
						frontpageSignupVariant: g,
						ssoLoginLinkVariant: f,
						magicLinkVariant: v
					} = m, {
						isAmModalDesignUpdateEnabled: O,
						isBlockingInterstitialEnabled: y,
						isBlockingInterstitialV2Enabled: C,
						isGoogleSsoGisEnabled: E,
						isNetzDGComplianceEnabled: x,
						isOneTapAutoEnabled: j,
						isSafariOneTapEnabled: _
					} = p;
					let P = `${o.a.accountManagerOrigin}${e}`;
					if (P = Object(i.a)(P, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), f && (P = Object(i.a)(P, {
							[`experiment_${l.yf}`]: f
						})), E && (P = Object(i.a)(P, {
							[`experiment_${l.Ud}`]: "enabled"
						})), x && (P = Object(i.a)(P, {
							[`experiment_${l.Ce}`]: l.Le.Enabled,
							thing_id: n
						})), j && (P = Object(i.a)(P, {
							[`experiment_${l.pc}`]: "enabled"
						})), P = Object(i.a)(P, {
							experiment_d2x_onboarding: "enabled"
						}), _ && (P = Object(i.a)(P, {
							[`experiment_${l.wf}`]: "enabled"
						})), y && (P = Object(i.a)(P, {
							[`experiment_${l.Sb}`]: b
						})), C && (P = Object(i.a)(P, {
							[`experiment_${l.Tb}`]: h
						})), O && (P = Object(i.a)(P, {
							[`experiment_${l.Bb}`]: "enabled"
						})), g && (P = Object(i.a)(P, {
							[l.Xc]: g,
							uiMode: t
						})), v && (P = Object(i.a)(P, {
							[`experiment_${l.pe}`]: v
						})), d && (P = Object(i.a)(P, {
							mweb_responsive_settings: "treatment"
						})), u) {
						const e = Object(s.isoLocaleToR2Language)(u);
						u !== r.DEFAULT_LOCALE && e && (P = Object(i.a)(P, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? P : P = Object(i.a)(P, {
						actionSource: a
					})
				})
		},
		"./src/reddit/selectors/accountManager/modalData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = e => e.accountManagerModalData.actionSource,
				r = e => e.accountManagerModalData.redirectUrl,
				o = e => e.accountManagerModalData.thingId
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
				r = n("./src/reddit/models/EconManagement/index.ts"),
				o = n("./src/reddit/actions/economics/econManagement/constants.ts");
			const a = {
				displayState: r.a.Default,
				currentEntity: null,
				relatedData: {},
				entityTypes: {}
			};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.c:
						return {
							...e, entityTypes: t.payload.reduce((e, t) => ({
								...e,
								[t.typename]: t
							}), {})
						};
					case o.e:
						return {
							...a, entityTypes: e.entityTypes, displayState: r.a.Loading
						};
					case o.d:
						return {
							...a, entityTypes: e.entityTypes, displayState: r.a.Error
						};
					case o.f: {
						const n = t.payload,
							s = n.typename;
						return {
							...e,
							displayState: r.a.Default,
							currentEntity: {
								id: n.entityId || "",
								type: s,
								prefixedId: `${n.typename}:${n.entityId}`,
								details: n
							},
							relatedData: {}
						}
					}
					case o.a: {
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
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.displayState) || r.a.Default
				},
				d = e => {
					var t, n;
					const s = c(e);
					if (!s) return [];
					const r = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.entityTypes[s.type];
					return r && r.externalRefs || []
				},
				u = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.relatedData[t]
				},
				m = (e, t) => {
					var n, s, r;
					return (null === (r = null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.entityTypes[t]) || void 0 === r ? void 0 : r.actions) || []
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
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const i = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(s.a)((e, t) => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), a.a),
				l = e => i.find(t => !!Object(a.a)(c(e, t))),
				d = Object(s.a)(l, e => !!e),
				u = e => {
					const t = l(e);
					return !!t && c(e, t) === r.hb.SkipOnboarding
				},
				m = e => {
					const t = l(e);
					return !!t && c(e, t) === r.hb.RegOnboarding
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
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(l.Z, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return !n || Object(o.A)(n)
				}, c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: r.Xc,
					throttledVariants: {
						[r.Td.CurrentThrottled]: r.Xc
					}
				}), i.a),
				m = e => e === r.Td.CurrentThrottled,
				p = e => e === r.Td.CurrentThrottled || e === r.Td.CurrentUnthrottled || e === r.Td.CurrentUnthrottledCopy || e === r.Td.NewPopUnthrottledCopy,
				b = e => e === r.Td.NewPopUnthrottledCopy,
				h = e => e === r.Td.NewPageUnthrottledCopy || e === r.Td.NewPageUnthrottledCopyFields,
				g = e => e === r.Td.NewPageUnthrottledCopyFields
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
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.ie,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(c, e => e === r.le.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.yc,
					experimentEligibilitySelector: a.e
				}), i.a),
				u = Object(s.a)(d, e => e === r.Tc.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Vb,
					experimentEligibilitySelector: a.e
				}), i.a),
				p = Object(s.a)(m, e => e === r.je.ContinuousScroll),
				b = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Wb,
					experimentEligibilitySelector: a.e
				}), i.a),
				h = Object(s.a)(b, e => e === r.ke.Enabled),
				g = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.gc,
					experimentEligibilitySelector: () => !0
				}), i.a),
				f = Object(s.a)(g, e => e === r.tb.Enabled)
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
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Zb,
					experimentEligibilitySelector: a.e
				}), e => e === r.jb.Enabled),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.ac,
					experimentEligibilitySelector: a.e
				}), e => e === r.kb.Enabled),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.bc,
					experimentEligibilitySelector: a.e
				}), e => e === r.lb.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.cc,
					experimentEligibilitySelector: a.e
				}), e => e === r.mb.Enabled),
				u = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.ec,
					experimentEligibilitySelector: a.e
				}), e => e === r.ob.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.dc,
					experimentEligibilitySelector: a.e
				}), e => e === r.nb.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
				experimentName: s.Be,
				experimentEligibilitySelector: r.a
			}) === s.Ke.Enabled
		},
		"./src/reddit/selectors/experiments/oneTapAuto/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/getParsedUserAgent/index.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(s.a)(i.f, e => Object(r.g)(e.meta.userAgent), (e, t) => e && !t),
				l = e => (e => Object(a.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: o.pc
				}))(e) === o.Jd
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
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.af
					}) === s.Jd
				},
				i = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Ze
					}) === s.Jd
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Oe
					}) === s.Jd
				},
				l = e => {
					if (Object(o.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Ne
					}) === s.Jd
				}
		},
		"./src/reddit/selectors/features/matrixChat/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/matrixChat/index.ts");
			Object(s.a)({
				features: {
					matrixChat: r.c
				}
			});
			const o = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.url) || r.a.url
				},
				a = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.state) || r.a.state
				},
				i = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.matrixChat) || void 0 === n ? void 0 : n.username
				}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
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
				r = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				o = e => e.features.removalReasons.api.pending
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
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx");
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
					return Object(o.B)(n)
				}, (e, t) => t && (e === r.Nb.COMMENTS || e === r.Nb.SUBREDDIT))
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
				r = n("./src/reddit/components/Settings/modalIds.ts"),
				o = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.Eb, e => !(!e || !e.length));
			const c = Object(s.a)(i.C, e => !e),
				l = Object(s.a)(i.Eb, e => e && e.find(e => e === o.a.Apple)),
				d = Object(s.a)(i.Eb, e => !(!e || !e.includes(o.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [r.b, r.d, r.e, r.g, r.p, r.r].includes(e))
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
			e.exports = JSON.parse('{"id":"4426c323acf3"}')
		},
		"./src/redditGQL/operations/EconAdminPanelQuery.json": function(e) {
			e.exports = JSON.parse('{"id":"d47c78bc4284"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		},
		"./src/redditGQL/operations/GiveCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"385450867622"}')
		},
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
		},
		"./src/redditGQL/operations/RemoveCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"1011718c41db"}')
		},
		"./src/redditGQL/operations/SearchTypeahead.json": function(e) {
			e.exports = JSON.parse('{"id":"0b7639937c2e"}')
		},
		"./src/redditGQL/operations/SearchTypeaheadLegacy.json": function(e) {
			e.exports = JSON.parse('{"id":"6b0c91d89d46"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3954b4d4b89c"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/server/helpers/profileRedirect.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/addQueryParams/index.ts"),
				r = n("./src/server/helpers/canonicalUrl.tsx");
			const o = e => {
					let {
						path: t,
						profileName: n,
						rest: r,
						queryParams: o
					} = e;
					const i = t.includes("posts") ? `/user/${n}/submitted` : `/user/${n}`,
						c = a(`${i}/${r||""}`);
					return Object(s.a)(c, o)
				},
				a = e => Object(r.a)(e.replace("posts", "submitted")),
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return `/user/${e}/submitted${t?"/":""}`
				}
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e", "vendors~CommentsPage~Governance~ModListing~ModerationPages~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "vendors~Reddit", "CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81", "PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "Governance~ModListing~Reddit~ReportFlow~Subreddit", "Chat~Governance~Reddit", "Governance~Reddit~Subreddit", "Governance~Reddit~SubredditForkingCTA", "Governance~Reddit", "Reddit~StandalonePostPage", "AuthorHovercard~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.ba8f211b9c09cb55112b.js.map