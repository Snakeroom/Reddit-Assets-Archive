// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.588f748fa7586c6410b6.js
// Retrieved at 2/7/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./src/reddit/actions/comment/authoring.ts": function(t, e, o) {
			"use strict";
			o.d(e, "e", (function() {
				return tt
			})), o.d(e, "o", (function() {
				return ot
			})), o.d(e, "m", (function() {
				return nt
			})), o.d(e, "q", (function() {
				return it
			})), o.d(e, "t", (function() {
				return ct
			})), o.d(e, "n", (function() {
				return at
			})), o.d(e, "s", (function() {
				return lt
			})), o.d(e, "l", (function() {
				return mt
			})), o.d(e, "a", (function() {
				return bt
			})), o.d(e, "b", (function() {
				return pt
			})), o.d(e, "p", (function() {
				return jt
			})), o.d(e, "f", (function() {
				return yt
			})), o.d(e, "g", (function() {
				return xt
			})), o.d(e, "j", (function() {
				return It
			})), o.d(e, "d", (function() {
				return ht
			})), o.d(e, "c", (function() {
				return _t
			})), o.d(e, "i", (function() {
				return St
			})), o.d(e, "h", (function() {
				return kt
			})), o.d(e, "k", (function() {
				return At
			})), o.d(e, "r", (function() {
				return Dt
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/makeDraftKey/index.ts"),
				c = o("./src/reddit/actions/changeUsername.ts"),
				d = o("./src/reddit/actions/login.ts"),
				a = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/post.ts"),
				m = o("./src/reddit/actions/postCreation/editorContent.ts"),
				u = o("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = o("./src/reddit/actions/shortcuts/utils.ts"),
				f = o("./src/reddit/actions/toaster.ts"),
				O = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				p = o("./src/reddit/constants/adEvents.ts"),
				j = o("./src/reddit/constants/localStorage.ts"),
				y = o("./src/redditGQL/operations/CommentToxicity.json"),
				x = o("./src/lib/makeApiRequest/index.ts"),
				I = o("./src/lib/makeGqlRequest/index.ts"),
				C = o("./src/lib/omitHeaders/index.ts"),
				h = o("./src/reddit/constants/headers.ts"),
				R = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = o("./src/reddit/helpers/genericServerError/index.ts"),
				E = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				_ = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = o("./src/reddit/models/PostCreationForm/index.ts"),
				g = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				N = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (t, e, o, n) => {
					let r, s;
					if (n === S.i.MARKDOWN) r = o.text, s = null;
					else {
						r = null;
						let t = null;
						o.rteState && (t = O.a.toRichTextJSON(o.rteState).document), s = JSON.stringify({
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
				k = async (t, e, o, n, s) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: e
					};
					if (s === S.i.MARKDOWN) i.text = o.text;
					else {
						i.text = null;
						let t = null;
						o.rteState && (t = O.a.toRichTextJSON(o.rteState).document), i.richtext_json = JSON.stringify({
							document: t
						})
					}
					return Object(x.a)(Object(C.a)(t, [h.a]), {
						method: r.jb.POST,
						endpoint: Object(R.a)(Object(g.a)(Object(N.a)(`${t.apiUrl}/api/comment.json`))),
						data: i
					}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
						...t,
						ok: !1,
						error: Object(_.a)(t)
					} : {
						...t,
						body: {
							comment: Object(E.a)(t.body.json.data.things[0].data, n)
						}
					} : {
						...t,
						body: {
							comment: Object(E.a)(t.body, n)
						}
					} : {
						...t,
						error: t.error || Object(T.a)()
					})
				};
			var A = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var D = o("./src/reddit/endpoints/post/index.tsx"),
				P = o("./src/reddit/endpoints/post/convert.ts"),
				w = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				K = o("./src/reddit/featureFlags/index.ts"),
				M = o("./src/reddit/helpers/correlationIdTracker.ts"),
				L = o("./src/reddit/helpers/dom/index.ts"),
				U = o("./src/reddit/helpers/localStorage/index.ts"),
				F = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				W = o("./src/reddit/models/Comment/index.ts"),
				B = o("./src/reddit/models/PostDraft/index.ts"),
				J = o("./src/reddit/models/RichTextJson/index.ts"),
				H = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				G = o("./src/reddit/models/Toast/index.ts"),
				V = o("./src/reddit/selectors/comments.ts"),
				Y = o("./src/reddit/selectors/commentSelector.ts"),
				q = o("./src/reddit/selectors/platform.ts"),
				z = o("./src/reddit/selectors/posts.ts"),
				Q = o("./src/reddit/selectors/user.ts"),
				X = o("./src/reddit/actions/comment/index.ts"),
				$ = o("./src/reddit/actions/comment/constants.ts");
			const Z = Object(s.a)($.k),
				tt = ({
					hasFocus: t,
					draftKey: e
				}) => async (o, n) => {
					const r = n();
					if (!!r.features.comments.drafts[e])
						if (Object(Q.M)(r) && t) {
							const n = Z({
								hasFocus: t,
								draftKey: e
							});
							o(Object(c.f)(n))
						} else o(Z({
							hasFocus: t,
							draftKey: e
						}))
				}, et = Object(s.a)($.H), ot = Object(s.a)($.J), nt = Object(s.a)($.I), rt = Object(s.a)($.G), st = async (t, e, o, n) => {
					const r = n.ok && n.body,
						s = r && r.comment && r.comment.id;
					await F.f(t, o, e, s)
				}, it = "Toxicity_Warning__Modal", ct = (t, e, o, n, r, s) => async (i, c, {
					gqlContext: d
				}) => {
					const l = c(),
						m = Object(q.e)(l);
					let u = "";
					if (m && (u = m.name), K.d.enableToxicityWarning(l)) {
						if (!(await v(d(), u, n, r))) return void i(Object(a.i)(it))
					}
					i(at(t, e, o, n, r, s))
				}, dt = t => t.rteState ? O.a.toRichTextJSON(t.rteState) : t.rtJson || t.text, at = (t, e, o, s, i, c, d) => async (m, O, {
					apiContext: j
				}) => {
					m(Object(a.g)(it));
					const y = O(),
						x = y.features.comments.submit.pending[o];
					if (!y.user.account || x) return;
					m(et({
						draftKey: o,
						draft: s
					}));
					const I = y.user.account.displayText,
						C = s.commentMode;
					let h;
					if (d ? (h = await Object(w.i)(j(), t, s, I), m(Object(u.a)({
							streamId: t,
							level: h.body.automuteLevel
						}))) : h = await k(j(), t, s, I, C), h.ok) {
						let n;
						n = h.body, m(ot({
							...n,
							headCommentId: Object(V.w)(y, {
								commentsPageKey: e
							}),
							commentsPageKey: e,
							draftKey: o
						}));
						const r = Object(z.G)(O(), {
							postId: t
						});
						m(Object(l.z)(r, p.a.CommentSubmitted))
					} else {
						h.error && h.error.type === r.Kb && F.h(y, dt(s), t);
						const e = h.error && h.error.fields && h.error.fields[0] ? h.error.fields[0].msg : n.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						m(rt({
							draftKey: o,
							error: h.error
						})), m(Object(f.f)({
							duration: f.a,
							kind: G.b.Error,
							text: e
						}))
					}
					st(O(), e, i, h).then(() => h.ok && i === S.i.RICH_TEXT ? Object(M.b)(M.a.CommentComposer) : void 0), c || Object(b.d)()
				}, lt = t => async (e, o, {
					gqlContext: n
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: s,
						parentCommentDepth: i,
						draftKey: c,
						formData: d,
						editorMode: l
					} = t, m = o(), u = Object(q.e)(m);
					let b = "";
					if (u && (b = u.name), K.d.enableToxicityWarning(m)) {
						if (!(await v(n(), b, d, l))) return void e(Object(a.i)(it))
					}
					e(mt({
						commentsPageKey: s,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: d,
						editorMode: l
					}))
				}, mt = t => async (e, o, {
					apiContext: n
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: i,
						parentCommentDepth: c,
						draftKey: d,
						formData: l,
						editorMode: m
					} = t;
					e(Object(a.g)(it));
					const u = o(),
						f = u.features.comments.submit.pending[d];
					if (!u.user.account || f) return;
					e(et({
						draftKey: d,
						draft: l
					}));
					const O = u.user.account.displayText,
						p = l.commentMode,
						j = await k(n(), s, l, O, p);
					if (j.ok) e(nt({
						...j.body,
						parentCommentId: s,
						commentsPageKey: i,
						draftKey: d,
						depth: c + 1
					}));
					else {
						if (j.error && j.error.type === r.Kb) {
							const t = Object(Y.b)(u, {
								commentId: s
							});
							if (!t) return;
							F.h(u, dt(l), t.postId, s)
						}
						e(rt({
							draftKey: d,
							error: j.error
						}))
					}
					st(o(), i, m, j), Object(b.d)()
				}, ut = Object(s.a)($.q), bt = Object(s.a)($.p), ft = Object(s.a)($.l), Ot = (Object(s.a)($.g), Object(s.a)($.m)), pt = (Object(s.a)($.t), (t, e, o) => async (r, s, {
					apiContext: i
				}) => {
					const c = t === S.i.RICH_TEXT;
					if (!e || "object" == typeof e && Object(J.G)(e)) r(Ot({
						editorMode: t,
						draftKey: o,
						content: c ? J.i : ""
					})), r(Object(m.c)(t));
					else {
						r(Object(m.b)(o));
						const s = await Object(P.a)(i(), t, c ? e : JSON.stringify(e));
						if (s.ok) {
							const e = s.body.output;
							r(Object(m.a)(o)), r(Ot({
								editorMode: t,
								draftKey: o,
								content: e
							})), r(Object(m.c)(t))
						} else r(Object(m.a)(o)), r(Object(f.f)({
							duration: f.a,
							kind: G.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), jt = ({
					commentsPageKey: t,
					parentCommentId: e,
					singleOpen: o
				}) => async (n, r) => {
					const s = r(),
						l = Object(i.a)(B.c.replyToComment, e);
					if (!Object(Q.K)(r())) return n(Object(d.j)()), void n(Object(a.k)({
						actionSource: a.a.Reply,
						redirectUrl: Object(V.m)(r(), {
							commentId: e
						})
					}));
					const m = s.features.comments.replyFormOpen[t],
						u = m && m[e];
					if ((u || m && o) && (Object.keys(m).forEach(e => m[e] && n(bt({
							parentCommentId: e,
							commentsPageKey: t
						}))), u)) return;
					let b = "",
						f = null;
					const O = s.user.prefs.commentMode,
						p = Object(L.d)();
					if (p) {
						const t = p.filter(t => !!t && 10 !== t.charCodeAt(0));
						if (O === S.i.MARKDOWN) b = t.map(t => `> ${t}\n`).join("");
						else {
							const e = t.map(t => H.s(t, null)).map(t => H.l([t])),
								o = H.s("", null),
								n = H.l([o]);
							f = {
								document: [H.c(e), n]
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
						}, Object(Q.M)(s)) {
						const o = ut({
							parentCommentId: e,
							commentsPageKey: t,
							draftKey: l,
							formData: y
						});
						n(Object(c.f)(o))
					} else n(ut({
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
				}) => async o => {
					o(bt({
						parentCommentId: t,
						commentsPageKey: e
					})), o(jt({
						parentCommentId: t,
						commentsPageKey: e
					})), o(Object(X.p)({
						commentId: t,
						commentsPageKey: e
					}))
				}, It = (t, e) => o => o(ft({
					draftKey: t,
					formData: e
				})), Ct = Object(s.a)($.s), ht = ({
					commentId: t,
					commentMode: e,
					commentsPageKey: o,
					draftKey: n,
					text: r
				}) => async (s, i) => {
					const c = i();
					c.user.account && (F.c(c), s(Ct({
						commentId: t,
						commentsPageKey: o,
						draftKey: n,
						formData: {
							text: r,
							commentMode: e,
							rteState: null,
							draftType: B.c.edit,
							hasFocus: !0
						}
					})))
				}, Rt = Object(s.a)($.C), Tt = Object(s.a)($.B), Et = Object(s.a)($.D), _t = Object(s.a)($.h), St = ({
					id: t,
					commentsPageKey: e,
					depth: o,
					draftKey: n,
					formData: s
				}) => async (o, i, {
					apiContext: c
				}) => {
					const d = i();
					if (!d.user.account) return;
					o(Rt({
						draftKey: n
					})), F.d(d);
					const a = d.user.account.displayText || "",
						l = s.commentMode,
						m = await (async (t, e, o, n, s, i) => {
							const c = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: e
							};
							if (i === S.i.MARKDOWN) c.text = n.text;
							else {
								c.text = null;
								let t = null;
								n.rteState && (t = O.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
									document: t
								})
							}
							return Object(x.a)(Object(C.a)(t, [h.a]), {
								endpoint: Object(R.a)(Object(N.a)(Object(g.a)(`${t.apiUrl}/api/editusertext`))),
								method: r.jb.POST,
								data: c
							}).then(t => t.ok ? t.body.json ? t.body.json.errors.length ? {
								...t,
								ok: !1,
								error: Object(_.a)(t)
							} : {
								...t,
								body: {
									comment: Object(E.a)(t.body.json.data.things[0].data, s)
								}
							} : {
								...t,
								body: {
									comment: Object(E.a)(t.body, s)
								}
							} : {
								...t,
								error: t.error || Object(T.a)()
							})
						})(c(), t, 0, s, a, l);
					if (m.ok) {
						const r = m.body;
						o(Et({
							commentId: t,
							commentsPageKey: e,
							draftKey: n
						})), o(Object(X.i)({
							[t]: {
								...r.comment
							}
						}))
					} else o(Tt({
						draftKey: n,
						error: m.error
					}))
				}, gt = Object(s.a)($.z), Nt = Object(s.a)($.y), vt = Object(s.a)($.A), kt = (t, e) => async (o, n, {
					apiContext: s
				}) => {
					const i = n();
					o(gt({
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
						error: Object(_.a)(t)
					} : {
						...t,
						body: {}
					} : {
						...t,
						error: t.error || Object(T.a)()
					}))(s(), t);
					c.ok ? o(vt({
						id: t,
						postId: e
					})) : o(Nt({
						id: t,
						error: c.error
					}))
				}, At = t => async (e, o, {
					apiContext: n
				}) => {
					const r = !o().features.comments.models[t].sendReplies;
					e(Object(X.i)({
						[t]: {
							sendReplies: r
						}
					})), (await Object(D.o)(n(), t, r)).ok || e(Object(X.i)({
						[t]: {
							sendReplies: !r
						}
					}))
				}, Dt = (t, e) => async (o, r, {
					gqlContext: s
				}) => {
					var i, c, d, a, l, m;
					o(Object(X.c)());
					const u = t => Object(f.f)(Object(f.e)(t, G.b.Error));
					if (((null === (c = null === (i = r().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === j.a) o(u(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const i = e === W.a.FOLLOWED,
							c = {
								id: t,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(X.n)(c)), (await ((t, e) => Object(I.a)(t, {
								...A,
								variables: {
									input: e
								}
							}))(s(), {
								commentId: t,
								followState: e
							})).ok) {
							Object(U.wb)(null !== (l = null === (a = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === a ? void 0 : a.followed) && void 0 !== l ? l : [], null === (m = r().user.account) || void 0 === m ? void 0 : m.id);
							const t = i ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(f.f)({
								kind: G.b.SuccessCommunityGreen,
								text: t
							}))
						} else o(Object(X.n)(c)), o(u(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return b
			})), o.d(e, "a", (function() {
				return f
			})), o.d(e, "d", (function() {
				return p
			})), o.d(e, "c", (function() {
				return j
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/toaster.ts"),
				i = o("./src/reddit/endpoints/post/convert.ts"),
				c = o("./src/reddit/helpers/localStorage/index.ts"),
				d = o("./src/reddit/helpers/trackers/postComposer.ts"),
				a = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/models/RichTextJson/index.ts"),
				m = o("./src/reddit/models/Toast/index.ts"),
				u = o("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(r.a)(u.G),
				f = Object(r.a)(u.p),
				O = Object(r.a)(u.Q),
				p = (t, e, o) => async (r, c, {
					apiContext: p
				}) => {
					d.j(c(), e);
					const y = e === a.i.MARKDOWN,
						x = e === a.i.RICH_TEXT,
						I = u.k;
					if (y && Object(l.G)(o)) return r(O({
						editorKey: t,
						editorMode: a.i.MARKDOWN,
						content: ""
					})), void r(j(e));
					if (x && !o) return r(O({
						editorKey: t,
						editorMode: a.i.RICH_TEXT,
						content: l.i
					})), void r(j(e));
					r(b(I));
					const C = await Object(i.a)(p(), e, y ? JSON.stringify(o) : o);
					C.ok ? (r(f(I)), r(O({
						editorKey: t,
						editorMode: e,
						content: C.body.output
					})), r(j(e))) : (r(f(I)), r(Object(s.f)({
						duration: s.a,
						kind: m.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, j = t => async (e, o) => {
					const r = Object(c.l)();
					if (r >= 3) return;
					const i = o().user.prefs.useMarkdown ? a.i.MARKDOWN : a.i.RICH_TEXT;
					if (t === i) return;
					const d = t === a.i.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : n.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					e(Object(s.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: n.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: m.b.SuccessCommunity,
						text: d
					})), Object(c.sb)(r + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return i
			})), o.d(e, "b", (function() {
				return d
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = o("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(n.a)(s.r),
				c = Object(n.a)(s.F),
				d = t => async (e, o, {
					apiContext: n
				}) => {
					const s = await Object(r.a)(n(), t);
					s && s.ok ? e(i({
						streamId: t,
						level: s.body.data.auto_mute_status.level
					})) : e(c(t))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return n
			}));
			var n, r = o("./node_modules/react/index.js"),
				s = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/reddit/actions/chat/toggle.ts"),
				d = o("./src/reddit/components/TrackingHelper/index.tsx"),
				a = o("./src/reddit/controls/Button/index.tsx"),
				l = o("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(t) {
				t.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const m = ({
				onStartChat: t,
				text: e,
				className: o,
				sendEvent: r,
				contextId: i,
				priority: c,
				Icon: d,
				redditStyle: m,
				isFullWidth: u,
				eventSource: b,
				onClick: f,
				onAddUserToQuickReplyList: O,
				children: p
			}) => {
				return s.a.createElement(a.t, {
					onClick: e => {
						if (f && f(e), t(), b === n.awardNotification) return O();
						r(Object(l.b)(i))
					},
					className: o,
					text: e,
					priority: c,
					Icon: d,
					redditStyle: m,
					isFullWidth: u
				}, p)
			};
			m.displayName = "ChatButton";
			const u = Object(i.b)(null, (t, {
				contextId: e,
				userId: o
			}) => ({
				onStartChat: () => {
					t(Object(c.b)(o, e))
				},
				onAddUserToQuickReplyList: () => {
					t(Object(c.a)(o))
				}
			}));
			e.b = u(Object(d.c)(m))
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(t, e, o) {
			"use strict";
			o.r(e);
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				s = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/makeCommentsPageKey/index.ts"),
				a = o("./src/reddit/actions/comment/authoring.ts"),
				l = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/components/ChatButton/index.tsx"),
				u = o("./src/reddit/controls/Button/index.tsx"),
				b = o("./src/reddit/helpers/graphql/helpers.ts"),
				f = o("./src/reddit/helpers/trackers/inbox.ts"),
				O = o("./src/reddit/icons/fonts/index.tsx"),
				p = o("./src/reddit/models/NotificationInbox/index.ts"),
				j = o("./src/reddit/models/Toast/index.ts"),
				y = o("./src/reddit/components/NotificationUnit/index.m.less"),
				x = o.n(y);
			const I = {
				kind: j.b.Error,
				text: n.fbt._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: l.a
			};
			e.default = t => {
				var e, o, r, j, y, C, h, R, T;
				const E = Object(i.d)(),
					{
						context: _,
						deeplinkUrl: S,
						isFullWidth: g,
						isUnread: N,
						isInboxCTAsAllEnabled: v,
						isInboxCTAsReplyEnabled: k,
						isInboxCTAsSeePostEnabled: A,
						isNightMode: D,
						notificationId: P,
						onEvent: w
					} = t,
					K = null == _ ? void 0 : _.messageType,
					M = null === (e = null == _ ? void 0 : _.post) || void 0 === e ? void 0 : e.permalink,
					L = K === p.a.PostReply ? P : null === (o = null == _ ? void 0 : _.comment) || void 0 === o ? void 0 : o.id,
					U = (null === (r = null == _ ? void 0 : _.post) || void 0 === r ? void 0 : r.id) || (null === (y = null === (j = null == _ ? void 0 : _.comment) || void 0 === j ? void 0 : j.postInfo) || void 0 === y ? void 0 : y.id),
					F = null === (h = null === (C = null == _ ? void 0 : _.awarding) || void 0 === C ? void 0 : C.award) || void 0 === h ? void 0 : h.id,
					W = null === (T = null === (R = null == _ ? void 0 : _.awarding) || void 0 === R ? void 0 : R.awarder) || void 0 === T ? void 0 : T.id;
				return (() => {
					switch (K) {
						case p.a.LifecyclePostSuggestions:
						case p.a.SubredditRecommendation: {
							if (!A && !v) return null;
							const t = t => {
								M ? w({
									position: f.c.SECOND
								}) : (t.preventDefault(), E(Object(l.f)(I)))
							};
							return s.a.createElement(u.t, {
								onClick: t,
								isFullWidth: g,
								priority: u.c.Tertiary,
								redditStyle: !0,
								className: Object(c.a)(x.a.notificationButton, {
									[x.a.isUnread]: N,
									[x.a.isNightMode]: D
								})
							}, s.a.createElement(O.a, {
								name: "text_post",
								className: x.a.postIcon
							}), n.fbt._("See Post", null, {
								hk: "mGXS5"
							}))
						}
						case p.a.PostReply:
						case p.a.CommentReply: {
							if (!k && !v) return null;
							const t = t => {
								if (U && L) {
									const t = Object(d.a)(U, L, Object(b.c)(S)),
										e = {
											parentCommentId: L,
											commentsPageKey: t
										};
									E(Object(a.g)(e)), w({
										position: f.c.SECOND
									})
								} else t.preventDefault(), E(Object(l.f)(I))
							};
							return s.a.createElement(u.t, {
								onClick: t,
								isFullWidth: g,
								priority: u.c.Tertiary,
								redditStyle: !0,
								className: Object(c.a)(x.a.notificationButton, {
									[x.a.isUnread]: N,
									[x.a.isNightMode]: D
								})
							}, s.a.createElement(O.a, {
								name: "reply",
								className: x.a.replyIcon
							}), n.fbt._("Reply", null, {
								hk: "zBpwB"
							}))
						}
						case p.a.AwardReceived: {
							if (!W) return null;
							const t = t => {
								t.preventDefault(), W ? w({
									position: f.c.SECOND,
									awardId: F
								}) : E(Object(l.f)(I))
							};
							return s.a.createElement(m.b, {
								userId: W,
								contextId: W,
								onClick: t,
								isFullWidth: g,
								priority: u.c.Tertiary,
								redditStyle: !0,
								eventSource: m.a.awardNotification,
								className: Object(c.a)(x.a.notificationButton, {
									[x.a.isUnread]: N,
									[x.a.isNightMode]: D
								})
							}, s.a.createElement(O.a, {
								name: "chat_new",
								className: x.a.replyIcon
							}), n.fbt._("Say thanks", null, {
								hk: "2FzJoo"
							}))
						}
						default:
							return null
					}
				})()
			}
		},
		"./src/reddit/endpoints/post/convert.ts": function(t, e, o) {
			"use strict";
			var n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeApiRequest/index.ts"),
				s = o("./src/lib/omitHeaders/index.ts"),
				i = o("./src/reddit/constants/headers.ts"),
				c = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts");
			e.a = (t, e, o) => {
				const a = {
					output_mode: "markdown" === e ? e : "rtjson"
				};
				return e === d.i.MARKDOWN ? a.richtext_json = o : a.markdown_text = o, Object(r.a)(Object(s.a)(t, [i.a]), {
					endpoint: Object(c.a)(`${t.apiUrl}/api/convert_rte_body_format`),
					method: n.jb.POST,
					data: a
				})
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/constants/index.ts");
			e.a = () => ({
				type: r.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return i
			}));
			var n = o("./src/lib/constants/index.ts");
			const r = t => {
					for (const e of t) {
						const t = e[0] || "";
						switch (t) {
							case n.I.NO_STRIPE_SUBSCRIPTION:
							case n.I.USER_DOESNT_EXIST:
							case n.I.USER_REQUIRED_ERROR:
							case n.I.VALIDATION_ERROR:
								return t;
							case n.I.NO_USER:
							case n.I.NO_TEXT:
							case n.I.NO_URL:
								return n.I.VALIDATION_ERROR;
							case n.I.CREDIT_CARD_FAILURE:
							case n.I.CREDIT_CARD_FAILURE_GENERIC:
								return n.I.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return n.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.I.VALIDATION_ERROR
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
		"./src/reddit/helpers/trackers/commentsPage.ts": function(t, e, o) {
			"use strict";
			o.d(e, "f", (function() {
				return m
			})), o.d(e, "h", (function() {
				return u
			})), o.d(e, "b", (function() {
				return b
			})), o.d(e, "e", (function() {
				return f
			})), o.d(e, "a", (function() {
				return O
			})), o.d(e, "c", (function() {
				return p
			})), o.d(e, "d", (function() {
				return j
			})), o.d(e, "g", (function() {
				return y
			}));
			var n = o("./src/reddit/constants/tracking.ts"),
				r = o("./src/reddit/helpers/correlationIdTracker.ts"),
				s = o("./src/reddit/models/PostDraft/index.ts"),
				i = o("./src/reddit/selectors/comments.ts"),
				c = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/telemetry.ts"),
				a = o("./src/telemetry/index.ts");
			const l = t => {
					const e = Object(c.o)(t);
					return {
						source: "comment_composer",
						action: n.c.CLICK,
						...Object(d.o)(t),
						screen: Object(d.bb)(t),
						subreddit: Object(d.jb)(t),
						post: e ? Object(d.J)(t, e) : null,
						profile: Object(d.S)(t),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				m = async (t, e, n, r) => {
					const s = {
							commentId: r,
							commentsPageKey: n
						},
						c = r && Object(i.j)(t, s) || 0,
						{
							getFlairData: m
						} = await o.e("getFlairData").then(o.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(a.a)({
						noun: "comment",
						...l(t),
						comment: r ? Object(d.i)(t, r) : null,
						listing: Object(d.A)(t, void 0, {
							depth: c
						}),
						commentComposer: {
							editorMode: e
						},
						userFlair: m(t)
					})
				}, u = (t, e, o, n) => {
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
							parentId: n,
							postId: o
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
					screen: Object(d.bb)(e),
					subreddit: Object(d.jb)(e),
					post: Object(d.J)(e, t)
				}), p = t => Object(a.a)({
					noun: "edit",
					...l(t)
				}), j = t => Object(a.a)({
					noun: "save_edit",
					...l(t)
				}), y = (t, e) => o => {
					const n = "image_upload" === t || "video_upload" === t;
					return {
						...l(o),
						noun: n ? t : "text_option",
						commentComposer: {
							textType: t,
							finalStatus: e ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(t, e, o) {
			"use strict";
			var n, r, s, i;
			o.d(e, "a", (function() {
					return n
				})), o.d(e, "b", (function() {
					return r
				})), o.d(e, "c", (function() {
					return s
				})),
				function(t) {
					t.AwardReceived = "AWARD_RECEIVED", t.CakeDay = "CAKE_DAY", t.ChatMessage = "CHAT_MESSAGE", t.CommentFollow = "COMMENT_FOLLOW", t.CommentReply = "COMMENT_REPLY", t.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", t.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", t.PostFollow = "POST_FOLLOW", t.PostReply = "POST_REPLY", t.PrivateMessage = "PRIVATE_MESSAGE", t.RedditLore = "REDDIT_LORE", t.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", t.ThreadReplies = "THREAD_REPLIES", t.TopLevelComment = "TOP_LEVEL_COMMENT", t.UpvoteComment = "UPVOTE_COMMENT", t.UpvotePost = "UPVOTE_POST", t.UsernameMention = "USERNAME_MENTION", t.UserNewFollower = "USER_NEW_FOLLOWER"
				}(n || (n = {})),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.588f748fa7586c6410b6.js.map