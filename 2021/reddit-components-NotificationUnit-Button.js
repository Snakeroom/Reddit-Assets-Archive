// https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.60653850e6f2f14393ca.js
// Retrieved at 10/14/2021, 7:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-NotificationUnit-Button"], {
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ee
			})), n.d(t, "o", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "q", (function() {
				return ce
			})), n.d(t, "t", (function() {
				return ie
			})), n.d(t, "n", (function() {
				return ae
			})), n.d(t, "s", (function() {
				return me
			})), n.d(t, "l", (function() {
				return ue
			})), n.d(t, "a", (function() {
				return be
			})), n.d(t, "b", (function() {
				return Oe
			})), n.d(t, "p", (function() {
				return ye
			})), n.d(t, "f", (function() {
				return je
			})), n.d(t, "g", (function() {
				return he
			})), n.d(t, "j", (function() {
				return xe
			})), n.d(t, "d", (function() {
				return Ce
			})), n.d(t, "c", (function() {
				return ke
			})), n.d(t, "i", (function() {
				return Se
			})), n.d(t, "h", (function() {
				return Ee
			})), n.d(t, "k", (function() {
				return we
			})), n.d(t, "r", (function() {
				return Ne
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				l = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = n("./src/reddit/constants/adEvents.ts"),
				y = n("./src/reddit/constants/localStorage.ts"),
				j = n("./src/redditGQL/operations/CommentToxicity.json"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				I = n("./src/lib/omitHeaders/index.ts"),
				C = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = n("./src/reddit/helpers/genericServerError/index.ts"),
				v = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				P = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				_ = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const R = (e, t, n, o) => {
					let r, s;
					if (o === S.i.MARKDOWN) r = n.text, s = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), s = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...j,
						variables: {
							subredditName: t,
							markdown: r,
							richText: s
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				E = async (e, t, n, o, s) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (s === S.i.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = p.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(h.a)(Object(I.a)(e, [C.a]), {
						method: r.ib.POST,
						endpoint: Object(g.a)(Object(P.a)(Object(_.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {
							comment: Object(v.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(v.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(T.a)()
					})
				};
			var w = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var N = n("./src/reddit/endpoints/post/index.tsx"),
				K = n("./src/reddit/endpoints/post/convert.ts"),
				A = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				D = n("./src/reddit/featureFlags/index.ts"),
				L = n("./src/reddit/helpers/correlationIdTracker.ts"),
				M = n("./src/reddit/helpers/dom/index.ts"),
				U = n("./src/reddit/helpers/localStorage/index.ts"),
				F = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				H = n("./src/reddit/models/Comment/index.ts"),
				W = n("./src/reddit/models/PostDraft/index.ts"),
				J = n("./src/reddit/models/RichTextJson/index.ts"),
				B = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				G = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				q = n("./src/reddit/selectors/commentSelector.ts"),
				$ = n("./src/reddit/selectors/platform.ts"),
				Y = n("./src/reddit/selectors/posts.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				Q = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const Z = Object(s.a)(X.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const r = o();
					if (!!r.features.comments.drafts[t])
						if (Object(z.M)(r) && e) {
							const o = Z({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(o))
						} else n(Z({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(s.a)(X.H), ne = Object(s.a)(X.J), oe = Object(s.a)(X.I), re = Object(s.a)(X.G), se = async (e, t, n, o) => {
					const r = o.ok && o.body,
						s = r && r.comment && r.comment.id;
					await F.g(e, n, t, s)
				}, ce = "Toxicity_Warning__Modal", ie = (e, t, n, o, r, s) => async (c, i, {
					gqlContext: d
				}) => {
					const m = i(),
						u = Object($.e)(m);
					let l = "";
					if (u && (l = u.name), D.d.enableToxicityWarning(m)) {
						if (!(await R(d(), l, o, r))) return void c(Object(a.i)(ce))
					}
					c(ae(e, t, n, o, r, s))
				}, de = e => e.rteState ? p.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ae = (e, t, n, s, c, i, d) => async (u, p, {
					apiContext: y
				}) => {
					u(Object(a.g)(ce));
					const j = p(),
						h = j.features.comments.submit.pending[n];
					if (!j.user.account || h) return;
					u(te({
						draftKey: n,
						draft: s
					}));
					const x = j.user.account.displayText,
						I = s.commentMode;
					let C;
					if (d ? (C = await Object(A.i)(y(), e, s, x), u(Object(l.a)({
							streamId: e,
							level: C.body.automuteLevel
						}))) : C = await E(y(), e, s, x, I), C.ok) {
						let o;
						o = C.body, u(ne({
							...o,
							headCommentId: Object(V.w)(j, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const r = Object(Y.H)(p(), {
							postId: e
						});
						u(Object(m.z)(r, O.a.CommentSubmitted))
					} else {
						C.error && C.error.type === r.Ib && F.i(j, de(s), e);
						const t = C.error && C.error.fields && C.error.fields[0] ? C.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(re({
							draftKey: n,
							error: C.error
						})), u(Object(f.f)({
							duration: f.a,
							kind: G.b.Error,
							text: t
						}))
					}
					se(p(), t, c, C).then(() => C.ok && c === S.i.RICH_TEXT ? Object(L.b)(L.a.CommentComposer) : void 0), i || Object(b.d)()
				}, me = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: s,
						parentCommentDepth: c,
						draftKey: i,
						formData: d,
						editorMode: m
					} = e, u = n(), l = Object($.e)(u);
					let b = "";
					if (l && (b = l.name), D.d.enableToxicityWarning(u)) {
						if (!(await R(o(), b, d, m))) return void t(Object(a.i)(ce))
					}
					t(ue({
						commentsPageKey: s,
						draftKey: i,
						parentCommentDepth: c,
						parentCommentId: r,
						formData: d,
						editorMode: m
					}))
				}, ue = e => async (t, n, {
					apiContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: c,
						parentCommentDepth: i,
						draftKey: d,
						formData: m,
						editorMode: u
					} = e;
					t(Object(a.g)(ce));
					const l = n(),
						f = l.features.comments.submit.pending[d];
					if (!l.user.account || f) return;
					t(te({
						draftKey: d,
						draft: m
					}));
					const p = l.user.account.displayText,
						O = m.commentMode,
						y = await E(o(), s, m, p, O);
					if (y.ok) t(oe({
						...y.body,
						parentCommentId: s,
						commentsPageKey: c,
						draftKey: d,
						depth: i + 1
					}));
					else {
						if (y.error && y.error.type === r.Ib) {
							const e = Object(q.b)(l, {
								commentId: s
							});
							if (!e) return;
							F.i(l, de(m), e.postId, s)
						}
						t(re({
							draftKey: d,
							error: y.error
						}))
					}
					se(n(), c, u, y), Object(b.d)()
				}, le = Object(s.a)(X.q), be = Object(s.a)(X.p), fe = Object(s.a)(X.l), pe = (Object(s.a)(X.g), Object(s.a)(X.m)), Oe = (Object(s.a)(X.t), (e, t, n) => async (r, s, {
					apiContext: c
				}) => {
					const i = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(J.G)(t)) r(pe({
						editorMode: e,
						draftKey: n,
						content: i ? J.i : ""
					})), r(Object(u.c)(e));
					else {
						r(Object(u.b)(n));
						const s = await Object(K.a)(c(), e, i ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							r(Object(u.a)(n)), r(pe({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(u.c)(e))
						} else r(Object(u.a)(n)), r(Object(f.f)({
							duration: f.a,
							kind: G.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), ye = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, r) => {
					const s = r(),
						m = Object(c.a)(W.c.replyToComment, t);
					if (!Object(z.K)(r())) return o(Object(d.k)()), void o(Object(a.k)({
						actionSource: a.a.Reply,
						redirectUrl: Object(V.m)(r(), {
							commentId: t
						})
					}));
					const u = s.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && o(be({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						f = null;
					const p = s.user.prefs.commentMode,
						O = Object(M.d)();
					if (O) {
						const e = O.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (p === S.i.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => B.s(e, null)).map(e => B.l([e])),
								n = B.s("", null),
								o = B.l([n]);
							f = {
								document: [B.c(t), o]
							}
						}
					}
					const y = s.features.comments.drafts[m];
					let j;
					if (j = O ? {
							commentMode: p,
							draftType: W.c.replyToComment,
							rtJson: f,
							text: `${b}\n`
						} : y || {
							commentMode: p,
							draftType: W.c.replyToComment,
							rtJson: f,
							text: ""
						}, Object(z.M)(s)) {
						const n = le({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: j
						});
						o(Object(i.f)(n))
					} else o(le({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: j
					}))
				}, je = e => async t => {
					t(Object(Q.p)(e)), t(Ce(e))
				}, he = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(be({
						parentCommentId: e,
						commentsPageKey: t
					})), n(ye({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(Q.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, xe = (e, t) => n => n(fe({
					draftKey: e,
					formData: t
				})), Ie = Object(s.a)(X.s), Ce = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: r
				}) => async (s, c) => {
					const i = c();
					i.user.account && (F.d(i), s(Ie({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: r,
							commentMode: t,
							rteState: null,
							draftType: W.c.edit,
							hasFocus: !0
						}
					})))
				}, ge = Object(s.a)(X.C), Te = Object(s.a)(X.B), ve = Object(s.a)(X.D), ke = Object(s.a)(X.h), Se = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: o,
					formData: s
				}) => async (n, c, {
					apiContext: i
				}) => {
					const d = c();
					if (!d.user.account) return;
					n(ge({
						draftKey: o
					})), F.e(d);
					const a = d.user.account.displayText || "",
						m = s.commentMode,
						u = await (async (e, t, n, o, s, c) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === S.i.MARKDOWN) i.text = o.text;
							else {
								i.text = null;
								let e = null;
								o.rteState && (e = p.a.toRichTextJSON(o.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(h.a)(Object(I.a)(e, [C.a]), {
								endpoint: Object(g.a)(Object(_.a)(Object(P.a)(`${e.apiUrl}/api/editusertext`))),
								method: r.ib.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(k.a)(e)
							} : {
								...e,
								body: {
									comment: Object(v.a)(e.body.json.data.things[0].data, s)
								}
							} : {
								...e,
								body: {
									comment: Object(v.a)(e.body, s)
								}
							} : {
								...e,
								error: e.error || Object(T.a)()
							})
						})(i(), e, 0, s, a, m);
					if (u.ok) {
						const r = u.body;
						n(ve({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(Q.i)({
							[e]: {
								...r.comment
							}
						}))
					} else n(Te({
						draftKey: o,
						error: u.error
					}))
				}, Pe = Object(s.a)(X.z), _e = Object(s.a)(X.y), Re = Object(s.a)(X.A), Ee = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const c = o();
					n(Pe({
						id: e
					})), F.b(e, c);
					const i = await ((e, t) => Object(h.a)(Object(I.a)(e, [C.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/del`),
						method: r.ib.POST,
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
						error: e.error || Object(T.a)()
					}))(s(), e);
					i.ok ? n(Re({
						id: e,
						postId: t
					})) : n(_e({
						id: e,
						error: i.error
					}))
				}, we = e => async (t, n, {
					apiContext: o
				}) => {
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(Q.i)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(N.q)(o(), e, r)).ok || t(Object(Q.i)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Ne = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					var c, i, d, a, m, u;
					n(Object(Q.c)());
					const l = e => Object(f.f)(Object(f.e)(e, G.b.Error));
					if (((null === (i = null === (c = r().pages) || void 0 === c ? void 0 : c.comments) || void 0 === i ? void 0 : i.followed) || []).length === y.a) n(l(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === H.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Q.n)(i)), (await ((e, t) => Object(x.a)(e, {
								...w,
								variables: {
									input: t
								}
							}))(s(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(U.tb)(null !== (m = null === (a = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === a ? void 0 : a.followed) && void 0 !== m ? m : [], null === (u = r().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? o.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : o.fbt._("Unfollowed, You’ll no longer receive updates on this comment", null, {
								hk: "1L9sav"
							});
							n(Object(f.f)({
								kind: G.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Q.n)(i)), n(l(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return P
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "q", (function() {
				return M
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "o", (function() {
				return B
			})), n.d(t, "p", (function() {
				return G
			})), n.d(t, "d", (function() {
				return V
			})), n.d(t, "a", (function() {
				return $
			})), n.d(t, "b", (function() {
				return Y
			})), n.d(t, "n", (function() {
				return z
			})), n.d(t, "c", (function() {
				return Q
			})), n.d(t, "k", (function() {
				return X
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/telemetry/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/economics/helpers/async.ts"),
				d = n("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				a = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/shortcuts/utils.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				f = n("./src/reddit/endpoints/comment/index.tsx"),
				p = n("./src/reddit/helpers/commentList/index.ts"),
				O = n("./src/reddit/helpers/trackers/comment.ts"),
				y = n("./src/reddit/models/Comment/index.ts"),
				j = n("./src/reddit/models/Post/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				I = n("./src/reddit/selectors/comments.ts"),
				C = n("./src/reddit/selectors/commentSelector.ts"),
				g = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				T = n("./src/reddit/selectors/moderatingComments.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/actions/comment/constants.ts");
			const S = {},
				P = Object(c.a)(k.o),
				_ = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(v.K)(n())) return t(Object(a.k)()), void t(Object(m.k)({
						actionSource: m.a.Save,
						redirectUrl: Object(I.m)(n(), {
							commentId: e
						})
					}));
					const s = n().features.comments.models[e];
					if (!s) return;
					const c = s.isSaved ? f.k : f.g;
					if (t(P({
							[e]: {
								isSaved: !s.isSaved
							}
						})), (await c(o(), e)).ok) {
						const n = s.isSaved ? r.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : r.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							o = r.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(l.f)({
							text: n,
							kind: h.b.Undo,
							buttonText: o,
							buttonAction: _(e)
						}))
					} else t(P({
						[e]: {
							isSaved: s.isSaved
						}
					}))
				}, R = e => `viewing-comment-${e}`, E = o.a.telemetry.commentConsumedThreshold, w = e => async (t, n) => {
					const r = n();
					if (!Object(C.b)(r, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					O.c({
						state: r,
						commentId: e
					}), s.c.start(R(e));
					const c = setTimeout(() => O.a({
						state: r,
						commentId: e
					}), E);
					S[e] = c
				}, N = (e, t) => async (n, o) => {
					const r = o(),
						c = R(e);
					if (Object(C.b)(r, {
							commentId: e
						}) && s.c.has(c)) {
						const n = s.c.end(c);
						!t && n < E && (clearTimeout(S[e]), delete S[e])
					}
				}, K = Object(c.a)(k.x), A = Object(c.a)(k.w), D = Object(c.a)(k.v), L = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const s = o(),
						c = s.moreComments.models[t],
						a = s.platform.currentPage,
						m = a && a.routeMatch,
						u = m && m.match,
						{
							partialPostId: l
						} = u ? u.params : null;
					if (!l) return;
					const b = Object(j.s)(l);
					n(K({
						moreCommentsId: c.id
					}));
					const O = await Object(f.e)(r(), b, {
						token: c.token
					}, Object(g.a)(s));
					if (O.ok) {
						const t = O.body,
							o = Object(p.a)(t, b, s);
						n(A({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: o,
							...t
						}));
						const r = s.posts.models[b];
						let a;
						r && "subreddit" === r.belongsTo.type && t.comments && (a = r.belongsTo.id, await n(Object(i.a)({
							commentIds: Object.keys(O.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const m = O.body.comments;
						await n(Object(d.b)(a, m))
					} else n(D({
						moreCommentsItem: c,
						...O.error
					}))
				}, M = Object(b.a)(p.b, x.a.upvoted), U = Object(b.a)(p.b, x.a.downvoted), F = Object(c.a)(k.j), H = Object(c.a)(k.i), W = Object(c.a)(k.e), J = Object(c.a)(k.f), B = (Object(c.a)(k.c), Object(c.a)(k.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, r) => {
					const s = r(),
						c = Object(y.i)(e),
						i = Object(I.n)(s, {
							commentLink: c,
							commentsPageKey: t
						}),
						d = Object(T.b)(s, {
							commentId: e,
							commentsPageKey: t
						}),
						a = i.depth;
					o(W({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: d
					})), d || 0 !== a || n(e, !0), Object(u.d)()
				}), G = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(J({
						commentId: e,
						commentsPageKey: t
					}))
				}, V = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: o
				}) => async (r, s) => {
					const c = s(),
						i = Object(p.e)(t, e, n, c),
						d = Object(T.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					r(W({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: d
					})), 0 === n && o(i, !0), Object(u.d)()
				}, q = Object(c.a)(k.r), $ = e => t => t(q({
					draftKey: e
				})), Y = Object(c.a)(k.a), z = Object(c.a)(k.E), Q = Object(c.a)(k.b), X = Object(c.a)(k.u)
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/helpers/trackers/postComposer.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(r.a)(l.G),
				f = Object(r.a)(l.p),
				p = Object(r.a)(l.Q),
				O = (e, t, n) => async (r, i, {
					apiContext: O
				}) => {
					d.j(i(), t);
					const j = t === a.i.MARKDOWN,
						h = t === a.i.RICH_TEXT,
						x = l.k;
					if (j && Object(m.G)(n)) return r(p({
						editorKey: e,
						editorMode: a.i.MARKDOWN,
						content: ""
					})), void r(y(t));
					if (h && !n) return r(p({
						editorKey: e,
						editorMode: a.i.RICH_TEXT,
						content: m.i
					})), void r(y(t));
					r(b(x));
					const I = await Object(c.a)(O(), t, j ? JSON.stringify(n) : n);
					I.ok ? (r(f(x)), r(p({
						editorKey: e,
						editorMode: t,
						content: I.body.output
					})), r(y(t))) : (r(f(x)), r(Object(s.f)({
						duration: s.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, y = e => async (t, n) => {
					const r = Object(i.l)();
					if (r >= 3) return;
					const c = n().user.prefs.useMarkdown ? a.i.MARKDOWN : a.i.RICH_TEXT;
					if (e === c) return;
					const d = e === a.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(s.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: d
					})), Object(i.qb)(r + 1)
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
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(o.a)(s.r),
				i = Object(o.a)(s.F),
				d = e => async (t, n, {
					apiContext: o
				}) => {
					const s = await Object(r.a)(o(), e);
					s && s.ok ? t(c({
						streamId: e,
						level: s.body.data.auto_mute_status.level
					})) : t(i(e))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, r = n("./node_modules/react/index.js"),
				s = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(o || (o = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: r,
				contextId: c,
				priority: i,
				Icon: d,
				redditStyle: u,
				isFullWidth: l,
				eventSource: b,
				onClick: f,
				onAddUserToQuickReplyList: p,
				children: O
			}) => {
				return s.a.createElement(a.s, {
					onClick: t => {
						if (f && f(t), e(), b === o.awardNotification) return p();
						r(Object(m.b)(c))
					},
					className: n,
					text: t,
					priority: i,
					Icon: d,
					redditStyle: u,
					isFullWidth: l
				}, O)
			};
			u.displayName = "ChatButton";
			const l = Object(c.b)(null, (e, {
				contextId: t,
				userId: n
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(n))
				}
			}));
			t.b = l(Object(d.c)(u))
		},
		"./src/reddit/components/NotificationUnit/Button.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/comment/authoring.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/components/ChatButton/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/graphql/helpers.ts"),
				f = n("./src/reddit/helpers/trackers/inbox.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/models/NotificationInbox/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/components/NotificationUnit/index.m.less"),
				h = n.n(j);
			const x = {
				kind: y.b.Error,
				text: o.fbt._("Sorry, this content is no longer available.", null, {
					hk: "3q5siu"
				}),
				duration: m.a
			};
			t.default = e => {
				var t, n, r, y, j, I, C, g;
				const T = Object(c.d)(),
					{
						context: v,
						deeplinkUrl: k,
						isFullWidth: S,
						isUnread: P,
						isInboxCTAsAllEnabled: _,
						isInboxCTAsReplyEnabled: R,
						isInboxCTAsSeePostEnabled: E,
						isNightMode: w,
						notificationId: N,
						onEvent: K
					} = e,
					A = null == v ? void 0 : v.messageType,
					D = null === (t = null == v ? void 0 : v.post) || void 0 === t ? void 0 : t.permalink,
					L = A === O.a.PostReply ? N : null === (n = null == v ? void 0 : v.comment) || void 0 === n ? void 0 : n.id,
					M = (null === (r = null == v ? void 0 : v.post) || void 0 === r ? void 0 : r.id) || (null === (j = null === (y = null == v ? void 0 : v.comment) || void 0 === y ? void 0 : y.postInfo) || void 0 === j ? void 0 : j.id),
					U = null === (I = null == v ? void 0 : v.awarding) || void 0 === I ? void 0 : I.award.id,
					F = null === (g = null === (C = null == v ? void 0 : v.awarding) || void 0 === C ? void 0 : C.awarder) || void 0 === g ? void 0 : g.id;
				return (() => {
					switch (A) {
						case O.a.LifecyclePostSuggestions:
						case O.a.SubredditRecommendation: {
							if (!E && !_) return null;
							const e = e => {
								D ? K({
									position: f.c.SECOND
								}) : (e.preventDefault(), T(Object(m.f)(x)))
							};
							return s.a.createElement(l.s, {
								onClick: e,
								isFullWidth: S,
								priority: l.b.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(h.a.notificationButton, {
									[h.a.isUnread]: P,
									[h.a.isNightMode]: w
								})
							}, s.a.createElement(p.a, {
								name: "text_post",
								className: h.a.postIcon
							}), o.fbt._("See Post", null, {
								hk: "mGXS5"
							}))
						}
						case O.a.PostReply:
						case O.a.CommentReply: {
							if (!R && !_) return null;
							const e = e => {
								if (M && L) {
									const e = Object(d.a)(M, L, Object(b.c)(k)),
										t = {
											parentCommentId: L,
											commentsPageKey: e
										};
									T(Object(a.g)(t)), K({
										position: f.c.SECOND
									})
								} else e.preventDefault(), T(Object(m.f)(x))
							};
							return s.a.createElement(l.s, {
								onClick: e,
								isFullWidth: S,
								priority: l.b.Tertiary,
								redditStyle: !0,
								className: Object(i.a)(h.a.notificationButton, {
									[h.a.isUnread]: P,
									[h.a.isNightMode]: w
								})
							}, s.a.createElement(p.a, {
								name: "reply",
								className: h.a.replyIcon
							}), o.fbt._("Reply", null, {
								hk: "zBpwB"
							}))
						}
						case O.a.AwardReceived: {
							if (!F) return null;
							const e = e => {
								e.preventDefault(), F ? K({
									position: f.c.SECOND,
									awardId: U
								}) : T(Object(m.f)(x))
							};
							return s.a.createElement(u.b, {
								userId: F,
								contextId: F,
								onClick: e,
								isFullWidth: S,
								priority: l.b.Tertiary,
								redditStyle: !0,
								eventSource: u.a.awardNotification,
								className: Object(i.a)(h.a.notificationButton, {
									[h.a.isUnread]: P,
									[h.a.isNightMode]: w
								})
							}, s.a.createElement(p.a, {
								name: "chat_new",
								className: h.a.replyIcon
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
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return l
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "b", (function() {
				return C
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/save`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/unsave`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/lock`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/unlock`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/approve`),
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				y = (e, t, n) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/remove`),
					method: r.ib.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				j = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: r.ib.POST,
					data: {
						id: t
					}
				}),
				I = (e, t, n, c) => {
					let i = Object(d.a)(Object(u.a)(Object(m.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return c && (i = Object(a.a)(i)), Object(s.a)(e, {
						data: n,
						endpoint: i,
						method: r.ib.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				C = (e, t, n, o) => Object(s.a)(Object(c.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: r.ib.POST,
					data: {
						id: t,
						sticky: o
					}
				})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const a = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === d.i.MARKDOWN ? a.richtext_json = n : a.markdown_text = n, Object(r.a)(Object(s.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.ib.POST,
					data: a
				})
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/constants/comments.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				s = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (e, t) => t().features.comments.models[e],
				d = e => {
					switch (e.commentLink.type) {
						case o.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case o.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case o.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				a = (e, t) => e.type === o.a.MoreComments ? t[e.id].numComments : 1,
				m = (e, t, n, o) => {
					let s = Object(r.n)(o, {
							commentLink: t,
							commentsPageKey: e
						}),
						c = t;
					for (; s && s.depth > n && s.prev && (c = s.prev, (s = Object(r.n)(o, {
							commentLink: c,
							commentsPageKey: e
						})) && !(s.depth <= n)););
					return c.id
				},
				u = (e, t, n) => {
					const {
						commentLists: o,
						comments: r
					} = e, {
						head: i
					} = o[t];
					if (i) return Object.keys(r).filter(e => {
						const t = r[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(c.c)(e, {
								experimentEligibilitySelector: c.a,
								experimentName: s.E,
								expEventOverride: t
							});
							return !!(Object(s.Le)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.H.SERVER_ERROR,
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
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case o.H.NO_STRIPE_SUBSCRIPTION:
							case o.H.USER_DOESNT_EXIST:
							case o.H.USER_REQUIRED_ERROR:
							case o.H.VALIDATION_ERROR:
								return e;
							case o.H.NO_USER:
							case o.H.NO_TEXT:
							case o.H.NO_URL:
								return o.H.VALIDATION_ERROR;
							case o.H.CREDIT_CARD_FAILURE:
							case o.H.CREDIT_CARD_FAILURE_GENERIC:
								return o.H.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.H.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.H.VALIDATION_ERROR
				},
				s = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
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
						error: s(e)
					} : e
				};
			t.a = s
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const s = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...r.defaults(e),
					profile: r.profile(e),
					post: r.post(e, t),
					media: r.media(e, t),
					subreddit: r.subreddit(e),
					comment: r.comment(e, t)
				}),
				c = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...r.defaults(e),
					profile: r.profile(e),
					post: r.post(e, t),
					media: r.media(e, t),
					subreddit: r.subreddit(e),
					comment: r.comment(e, t)
				}),
				i = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: r.user(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					actionInfo: r.actionInfo(t),
					app: r.app(t),
					referrer: r.referrer(t),
					session: r.session(t)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "h", (function() {
				return h
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");
			const m = "comment_composer",
				u = e => {
					const t = Object(i.n)(e);
					return {
						source: m,
						action: o.c.CLICK,
						...Object(d.defaults)(e),
						screen: Object(d.screen)(e),
						subreddit: Object(d.subreddit)(e),
						post: t ? Object(d.post)(e, t) : null,
						profile: Object(d.profile)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				l = async (e, t, o, r) => {
					const s = {
							commentId: r,
							commentsPageKey: o
						},
						i = r && Object(c.j)(e, s) || 0,
						{
							getFlairData: m
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(a.a)({
						noun: "comment",
						...u(e),
						comment: r ? Object(d.comment)(e, r) : null,
						listing: Object(d.listing)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: m(e)
					})
				}, b = (e, t, n, o) => {
					const r = u(e);
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
							bodyText: t,
							parentId: o,
							postId: n
						}
					})
				}, f = e => Object(a.a)({
					noun: "cancel",
					...u(e)
				}), p = (e, t) => {
					t === s.c.replyToPost && Object(a.a)({
						noun: "input",
						...u(e)
					})
				}, O = (e, t) => Object(a.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.defaults)(t),
					screen: Object(d.screen)(t),
					subreddit: Object(d.subreddit)(t),
					post: Object(d.post)(t, e)
				}), y = e => Object(a.a)({
					noun: "edit",
					...u(e)
				}), j = e => Object(a.a)({
					noun: "save_edit",
					...u(e)
				}), h = (e, t) => n => {
					const o = "image_upload" === e || "video_upload" === e;
					return {
						...u(n),
						noun: o ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var o, r, s, c;
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "c", (function() {
					return s
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(o || (o = {})),
				function(e) {
					e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
				}(r || (r = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(s || (s = {})),
				function(e) {
					e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(c || (c = {}))
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/ads/constants.ts");
			const s = [];
			var c = (e = s, t) => {
					switch (t.type) {
						case r.o:
							return t.payload;
						case r.p:
						default:
							return e
					}
				},
				i = n("./src/reddit/actions/pages/constants.ts");
			const d = {};
			var a = (e = d, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.h:
					case i.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case i.a:
					case i.e: {
						const {
							key: n,
							error: o
						} = t.payload;
						return {
							...e,
							[n]: o || {}
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var u = (e = m, t) => {
				switch (t.type) {
					case i.c:
					case i.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var b = (e = l, t) => {
					switch (t.type) {
						case i.d:
						case i.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case i.b:
						case i.a:
						case i.f:
						case i.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				f = Object(o.c)({
					error: a,
					fullyLoaded: u,
					pending: b
				}),
				p = n("./src/reddit/actions/comment/constants.ts");
			const O = [];
			var y = (e = O, t) => {
					switch (t.type) {
						case p.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case p.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case p.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				j = n("./node_modules/lodash/uniqBy.js"),
				h = n.n(j),
				x = n("./node_modules/lodash/values.js"),
				I = n.n(x),
				C = n("./src/reddit/actions/comment/websocket/constants.ts");
			const g = {};

			function T(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var v = (e = g, t) => {
					switch (t.type) {
						case i.f:
						case p.w:
						case i.b: {
							const {
								comments: n,
								key: o
							} = t.payload, r = e[o] ? e[o] : [], s = function(e, t) {
								return I()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, r.find(e => e.stickied)), c = T([...r, ...s]);
							return {
								...e,
								[o]: [...c]
							}
						}
						case C.b:
						case C.c:
						case C.d:
						case p.J:
						case p.I: {
							const {
								comment: {
									id: n,
									created: o,
									isStickied: r,
									authorId: s
								},
								commentsPageKey: c
							} = t.payload;
							return {
								...e,
								[c]: [...T([...e[c] ? e[c] : [], {
									id: n,
									created: o,
									stickied: r,
									authorId: s
								}])]
							}
						}
						default:
							return e
					}
				},
				k = n("./node_modules/lodash/mapValues.js"),
				S = n.n(k),
				P = n("./src/reddit/helpers/commentList/index.ts"),
				_ = n("./src/reddit/models/Comment/index.ts");
			const R = {};

			function E(e) {
				const t = e;
				return S()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var w = (e = R, t) => {
				switch (t.type) {
					case p.w: {
						const {
							comments: n,
							commentLists: o,
							continueThreads: r,
							key: s,
							moreCommentsItem: c,
							moreComments: i
						} = t.payload, d = o[c.postId], a = e[s], m = {}, u = a[c.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							m[e] = {
								...a[e],
								next: d.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							m[e] = {
								...a[e],
								prev: d.tail || u.prev
							}
						}
						if (d.head && d.tail) {
							const e = Object(P.c)({
									commentLink: d.head,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: r
								}),
								t = Object(P.c)({
									commentLink: d.tail,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: r
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[s]: {
								...e[s],
								...E(n),
								...E(r),
								...E(i),
								...m
							}
						}
					}
					case i.b:
					case i.f: {
						const {
							comments: n,
							continueThreads: o,
							key: r,
							moreComments: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...E(n),
								...E(o),
								...E(s)
							}
						}
					}
					case C.b:
					case p.J: {
						const {
							comment: n,
							commentsPageKey: o,
							headCommentId: r
						} = t.payload, s = e[o], c = {};
						let i = null;
						return r && (c[r] = {
							...s[r],
							prev: Object(_.i)(n.id)
						}, i = Object(_.i)(r)), {
							...e,
							[o]: {
								...e[o],
								...c,
								[n.id]: {
									depth: 0,
									next: i,
									prev: null
								}
							}
						}
					}
					case p.I: {
						const {
							comment: n,
							commentsPageKey: o,
							parentCommentId: r,
							depth: s
						} = t.payload, c = e[o], i = {};
						let d = null;
						if (!c[r]) return e;
						const a = c[r].next;
						return a && (i[a.id] = {
							...c[a.id],
							prev: Object(_.i)(n.id)
						}, d = a), i[r] = {
							...c[r],
							next: Object(_.i)(n.id)
						}, {
							...e,
							[o]: {
								...e[o],
								...i,
								[n.id]: {
									depth: s,
									next: d,
									prev: Object(_.i)(r)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const N = {};
			var K = (e = N, t) => {
				switch (t.type) {
					case C.b:
					case C.c:
					case p.J: {
						const {
							comment: n,
							commentsPageKey: o
						} = t.payload;
						return {
							...e,
							[o]: n.id
						}
					}
					case i.b:
					case i.f: {
						const {
							commentLists: n,
							key: o,
							postId: r
						} = t.payload;
						return {
							...e,
							[o]: n[r] && n[r].head ? n[r].head.id : null
						}
					}
					default:
						return e
				}
			};
			const A = {};
			var D = (e = A, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.c:
					case i.h: {
						const {
							key: n,
							postId: o
						} = t.payload;
						return {
							...e,
							[n]: o
						}
					}
					case p.J: {
						const {
							parentId: n,
							commentsPageKey: o
						} = t.payload;
						return e[o] ? e : {
							...e,
							[o]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				api: f,
				followed: y,
				keyToChatCommentLinks: v,
				keyToCommentThreadLinkSets: w,
				keyToHeadCommentId: K,
				keyToPostId: D,
				ads: c
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "G", (function() {
				return C
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "q", (function() {
				return R
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "z", (function() {
				return N
			})), n.d(t, "I", (function() {
				return K
			})), n.d(t, "s", (function() {
				return A
			})), n.d(t, "C", (function() {
				return D
			})), n.d(t, "D", (function() {
				return L
			})), n.d(t, "E", (function() {
				return M
			})), n.d(t, "r", (function() {
				return U
			})), n.d(t, "e", (function() {
				return F
			})), n.d(t, "v", (function() {
				return H
			})), n.d(t, "J", (function() {
				return W
			})), n.d(t, "f", (function() {
				return J
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "F", (function() {
				return G
			})), n.d(t, "B", (function() {
				return V
			})), n.d(t, "H", (function() {
				return q
			})), n.d(t, "p", (function() {
				return $
			})), n.d(t, "K", (function() {
				return Y
			})), n.d(t, "y", (function() {
				return z
			})), n.d(t, "A", (function() {
				return Q
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/values.js"),
				r = n.n(o),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				u = n("./src/lib/initializeClient/installReducer.ts"),
				l = n("./src/reddit/reducers/features/comments/index.ts"),
				b = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(u.a)({
				features: {
					comments: l.a
				},
				pages: {
					comments: b.a
				}
			});
			const f = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				p = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				O = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				y = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				j = (e, t) => {
					const n = y(e, t);
					if (n) return Object(m.b)(e, {
						commentId: n
					})
				},
				h = [],
				x = Object(c.a)((e, t) => {
					const n = j(e, t),
						o = n && n.id;
					if (!o) return h;
					const {
						commentsPageKey: r
					} = t, s = e.pages.comments.keyToCommentThreadLinkSets[r], c = [];
					let d = {
						id: o,
						type: i.a.Comment
					};
					do {
						c.push(d), d = s[d.id].next
					} while (d);
					return c
				}),
				I = (e, t) => y(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				C = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				g = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: o
				}) => {
					const r = e.pages.comments.keyToCommentThreadLinkSets[o];
					return r ? n ? r[n.id] : t ? r[t] : null : null
				},
				T = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				v = (e, t) => {
					const n = t.commentsPageKey ? g(e, t) : null;
					return n ? n.depth : null
				},
				k = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: o
					} = t;
					switch (o) {
						case i.a.Comment:
							return e.features.comments.models[n];
						case i.a.MoreComments:
							return e.moreComments.models[n];
						case i.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				S = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== s.D).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				P = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				_ = e => e.moreComments.models,
				R = e => e.features.comments.models,
				E = (e, {
					commentId: t
				}) => {
					const n = Object(m.b)(e, {
						commentId: t
					});
					return n ? Object(m.a)(e, n) : ""
				},
				w = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				N = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				K = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				A = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						o = Object.keys(n).find(e => n[e]),
						r = Object(m.b)(e, {
							commentId: o
						}),
						s = r && v(e, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (r && "number" == typeof s) return {
						...r,
						depth: s
					}
				},
				D = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				L = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				M = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = r()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				U = (e, {
					id: t
				}) => e.continueThreads.models[t],
				F = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const o = e.authorFlair.models[n.subredditId];
					return o ? o[n.author] : null
				},
				H = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				W = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				J = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				B = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				G = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				V = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				q = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				$ = e => e.features.comments.visitHighlightFilter,
				Y = (e, t) => {
					const n = Object(m.b)(e, t);
					if (n) return Object(a.V)(e, n)
				},
				z = (e, {
					commentId: t
				}) => {
					var n, o;
					return !!((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t)
				},
				Q = (e, {
					commentId: t
				}) => {
					var n, o;
					const r = ((null === (o = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === o ? void 0 : o.followed) || []).find(e => e.id === t);
					return !!(r && r.expiresAt < Date.now())
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const o = e.features.comments.models[t];
					return !!o && ("computedCollapsed" in o ? !!o.computedCollapsed : o.collapsedBecauseCrowdControl ? !e.modModeEnabled : o.collapsed)
				},
				r = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-NotificationUnit-Button.60653850e6f2f14393ca.js.map