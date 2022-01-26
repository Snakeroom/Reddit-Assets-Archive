// https://www.redditstatic.com/desktop2x/removalReasonActions.f59c611cce4eafc342da.js
// Retrieved at 1/26/2022, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["removalReasonActions"], {
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
			})), n.d(t, "o", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "q", (function() {
				return ce
			})), n.d(t, "t", (function() {
				return ae
			})), n.d(t, "n", (function() {
				return ie
			})), n.d(t, "s", (function() {
				return me
			})), n.d(t, "l", (function() {
				return ue
			})), n.d(t, "a", (function() {
				return be
			})), n.d(t, "b", (function() {
				return pe
			})), n.d(t, "p", (function() {
				return je
			})), n.d(t, "f", (function() {
				return Re
			})), n.d(t, "g", (function() {
				return ye
			})), n.d(t, "j", (function() {
				return Se
			})), n.d(t, "d", (function() {
				return Ee
			})), n.d(t, "c", (function() {
				return Ie
			})), n.d(t, "i", (function() {
				return ke
			})), n.d(t, "h", (function() {
				return De
			})), n.d(t, "k", (function() {
				return Ne
			})), n.d(t, "r", (function() {
				return Te
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
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				l = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				O = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				p = n("./src/reddit/constants/adEvents.ts"),
				j = n("./src/reddit/constants/localStorage.ts"),
				R = n("./src/redditGQL/operations/CommentToxicity.json"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				S = n("./src/lib/makeGqlRequest/index.ts"),
				_ = n("./src/lib/omitHeaders/index.ts"),
				E = n("./src/reddit/constants/headers.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				A = n("./src/reddit/helpers/genericServerError/index.ts"),
				h = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				I = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				g = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const C = (e, t, n, o) => {
					let s, r;
					if (o === k.i.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(S.a)(e, {
						...R,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				D = async (e, t, n, o, r) => {
					const c = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === k.i.MARKDOWN) c.text = n.text;
					else {
						c.text = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), c.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(Object(_.a)(e, [E.a]), {
						method: s.jb.POST,
						endpoint: Object(x.a)(Object(v.a)(Object(g.a)(`${e.apiUrl}/api/comment.json`))),
						data: c
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(I.a)(e)
					} : {
						...e,
						body: {
							comment: Object(h.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(h.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(A.a)()
					})
				};
			var N = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var T = n("./src/reddit/endpoints/post/index.tsx"),
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
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const s = o();
					if (!!s.features.comments.drafts[t])
						if (Object(Q.L)(s) && e) {
							const o = Z({
								hasFocus: e,
								draftKey: t
							});
							n(Object(a.f)(o))
						} else n(Z({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(r.a)(Y.H), ne = Object(r.a)(Y.J), oe = Object(r.a)(Y.I), se = Object(r.a)(Y.G), re = async (e, t, n, o) => {
					const s = o.ok && o.body,
						r = s && s.comment && s.comment.id;
					await U.g(e, n, t, r)
				}, ce = "Toxicity_Warning__Modal", ae = (e, t, n, o, s, r) => async (c, a, {
					gqlContext: d
				}) => {
					const m = a(),
						u = Object(z.e)(m);
					let l = "";
					if (u && (l = u.name), L.d.enableToxicityWarning(m)) {
						if (!(await C(d(), l, o, s))) return void c(Object(i.i)(ce))
					}
					c(ie(e, t, n, o, s, r))
				}, de = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ie = (e, t, n, r, c, a, d) => async (u, f, {
					apiContext: j
				}) => {
					u(Object(i.g)(ce));
					const R = f(),
						y = R.features.comments.submit.pending[n];
					if (!R.user.account || y) return;
					u(te({
						draftKey: n,
						draft: r
					}));
					const S = R.user.account.displayText,
						_ = r.commentMode;
					let E;
					if (d ? (E = await Object(M.i)(j(), e, r, S), u(Object(l.a)({
							streamId: e,
							level: E.body.automuteLevel
						}))) : E = await D(j(), e, r, S, _), E.ok) {
						let o;
						o = E.body, u(ne({
							...o,
							headCommentId: Object($.w)(R, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const s = Object(H.H)(f(), {
							postId: e
						});
						u(Object(m.z)(s, p.a.CommentSubmitted))
					} else {
						E.error && E.error.type === s.Jb && U.i(R, de(r), e);
						const t = E.error && E.error.fields && E.error.fields[0] ? E.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: n,
							error: E.error
						})), u(Object(O.f)({
							duration: O.a,
							kind: q.b.Error,
							text: t
						}))
					}
					re(f(), t, c, E).then(() => E.ok && c === k.i.RICH_TEXT ? Object(w.b)(w.a.CommentComposer) : void 0), a || Object(b.d)()
				}, me = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: r,
						parentCommentDepth: c,
						draftKey: a,
						formData: d,
						editorMode: m
					} = e, u = n(), l = Object(z.e)(u);
					let b = "";
					if (l && (b = l.name), L.d.enableToxicityWarning(u)) {
						if (!(await C(o(), b, d, m))) return void t(Object(i.i)(ce))
					}
					t(ue({
						commentsPageKey: r,
						draftKey: a,
						parentCommentDepth: c,
						parentCommentId: s,
						formData: d,
						editorMode: m
					}))
				}, ue = e => async (t, n, {
					apiContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: c,
						parentCommentDepth: a,
						draftKey: d,
						formData: m,
						editorMode: u
					} = e;
					t(Object(i.g)(ce));
					const l = n(),
						O = l.features.comments.submit.pending[d];
					if (!l.user.account || O) return;
					t(te({
						draftKey: d,
						draft: m
					}));
					const f = l.user.account.displayText,
						p = m.commentMode,
						j = await D(o(), r, m, f, p);
					if (j.ok) t(oe({
						...j.body,
						parentCommentId: r,
						commentsPageKey: c,
						draftKey: d,
						depth: a + 1
					}));
					else {
						if (j.error && j.error.type === s.Jb) {
							const e = Object(W.b)(l, {
								commentId: r
							});
							if (!e) return;
							U.i(l, de(m), e.postId, r)
						}
						t(se({
							draftKey: d,
							error: j.error
						}))
					}
					re(n(), c, u, j), Object(b.d)()
				}, le = Object(r.a)(Y.q), be = Object(r.a)(Y.p), Oe = Object(r.a)(Y.l), fe = (Object(r.a)(Y.g), Object(r.a)(Y.m)), pe = (Object(r.a)(Y.t), (e, t, n) => async (s, r, {
					apiContext: c
				}) => {
					const a = e === k.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(G.G)(t)) s(fe({
						editorMode: e,
						draftKey: n,
						content: a ? G.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(n));
						const r = await Object(P.a)(c(), e, a ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(u.a)(n)), s(fe({
								editorMode: e,
								draftKey: n,
								content: t
							})), s(Object(u.c)(e))
						} else s(Object(u.a)(n)), s(Object(O.f)({
							duration: O.a,
							kind: q.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), je = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, s) => {
					const r = s(),
						m = Object(c.a)(B.c.replyToComment, t);
					if (!Object(Q.J)(s())) return o(Object(d.j)()), void o(Object(i.k)({
						actionSource: i.a.Reply,
						redirectUrl: Object($.m)(s(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						l = u && u[t];
					if ((l || u && n) && (Object.keys(u).forEach(t => u[t] && o(be({
							parentCommentId: t,
							commentsPageKey: e
						}))), l)) return;
					let b = "",
						O = null;
					const f = r.user.prefs.commentMode,
						p = Object(K.d)();
					if (p) {
						const e = p.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (f === k.i.MARKDOWN) b = e.map(e => `> ${e}\n`).join("");
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
						}, Object(Q.L)(r)) {
						const n = le({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: m,
							formData: R
						});
						o(Object(a.f)(n))
					} else o(le({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: m,
						formData: R
					}))
				}, Re = e => async t => {
					t(Object(X.p)(e)), t(Ee(e))
				}, ye = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(be({
						parentCommentId: e,
						commentsPageKey: t
					})), n(je({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(X.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, Se = (e, t) => n => n(Oe({
					draftKey: e,
					formData: t
				})), _e = Object(r.a)(Y.s), Ee = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: s
				}) => async (r, c) => {
					const a = c();
					a.user.account && (U.d(a), r(_e({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: s,
							commentMode: t,
							rteState: null,
							draftType: B.c.edit,
							hasFocus: !0
						}
					})))
				}, xe = Object(r.a)(Y.C), Ae = Object(r.a)(Y.B), he = Object(r.a)(Y.D), Ie = Object(r.a)(Y.h), ke = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: o,
					formData: r
				}) => async (n, c, {
					apiContext: a
				}) => {
					const d = c();
					if (!d.user.account) return;
					n(xe({
						draftKey: o
					})), U.e(d);
					const i = d.user.account.displayText || "",
						m = r.commentMode,
						u = await (async (e, t, n, o, r, c) => {
							const a = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (c === k.i.MARKDOWN) a.text = o.text;
							else {
								a.text = null;
								let e = null;
								o.rteState && (e = f.a.toRichTextJSON(o.rteState).document), a.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(y.a)(Object(_.a)(e, [E.a]), {
								endpoint: Object(x.a)(Object(g.a)(Object(v.a)(`${e.apiUrl}/api/editusertext`))),
								method: s.jb.POST,
								data: a
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(I.a)(e)
							} : {
								...e,
								body: {
									comment: Object(h.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(h.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(A.a)()
							})
						})(a(), e, 0, r, i, m);
					if (u.ok) {
						const s = u.body;
						n(he({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(X.i)({
							[e]: {
								...s.comment
							}
						}))
					} else n(Ae({
						draftKey: o,
						error: u.error
					}))
				}, ve = Object(r.a)(Y.z), ge = Object(r.a)(Y.y), Ce = Object(r.a)(Y.A), De = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const c = o();
					n(ve({
						id: e
					})), U.b(e, c);
					const a = await ((e, t) => Object(y.a)(Object(_.a)(e, [E.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/del`),
						method: s.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(I.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(A.a)()
					}))(r(), e);
					a.ok ? n(Ce({
						id: e,
						postId: t
					})) : n(ge({
						id: e,
						error: a.error
					}))
				}, Ne = e => async (t, n, {
					apiContext: o
				}) => {
					const s = !n().features.comments.models[e].sendReplies;
					t(Object(X.i)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(T.o)(o(), e, s)).ok || t(Object(X.i)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, Te = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					var c, a, d, i, m, u;
					n(Object(X.c)());
					const l = e => Object(O.f)(Object(O.e)(e, q.b.Error));
					if (((null === (a = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === a ? void 0 : a.followed) || []).length === j.a) n(l(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const c = t === V.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(X.n)(a)), (await ((e, t) => Object(S.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(F.tb)(null !== (m = null === (i = null === (d = s().pages) || void 0 === d ? void 0 : d.comments) || void 0 === i ? void 0 : i.followed) && void 0 !== m ? m : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = c ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(O.f)({
								kind: q.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(X.n)(a)), n(l(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "b", (function() {
				return v
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
				u = n("./src/reddit/endpoints/comment/index.tsx"),
				l = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				b = n("./src/reddit/models/Reportable/index.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/actions/comment/index.ts"),
				y = n("./src/reddit/actions/comment/constants.ts");
			const S = Object(r.a)(y.n),
				_ = e => async (t, n, {
					apiContext: o
				}) => {
					n().features.comments.models[e] && (await Object(u.j)(o(), e)).ok && t((e => async t => {
						t(S({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(j.J)(n())) return void t(Object(a.i)(m.a.LOGIN_MODAL_ID));
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.isLocked ? u.l : u.e;
					t(Object(R.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await c(s(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: r.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(R.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, x = Object(r.a)(y.F), A = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						c = r.features.comments.models[e],
						a = r.user.account ? r.user.account.displayText : null;
					c && a && (t(Object(R.i)({
						[e]: {
							isApproved: !0,
							approvedBy: a,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(s(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(R.i)({
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
					})), Object(d.d)())
				}, h = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s(),
						a = c.features.comments.models[e],
						m = c.user.account ? c.user.account.displayText : null;
					a && m && (n(Object(R.i)({
						[e]: {
							approvedBy: null,
							bannedBy: m,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(u.h)(r(), e, t)).ok ? n(Object(i.f)({
						kind: O.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(R.i)({
						[e]: {
							approvedBy: a.approvedBy,
							bannedBy: a.bannedBy,
							isApproved: a.isApproved,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam
						}
					})), Object(d.d)())
				}, I = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().features.comments.models[e];
					if (!r) return;
					const c = r.ignoreReports ? u.k : u.d;
					t(Object(R.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await c(s(), e)).ok ? t(Object(i.f)({
						kind: O.b.SuccessMod,
						text: r.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(R.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, k = (e, t, n) => async (r, c, {
					gqlContext: a
				}) => {
					const d = Object(f.b)(c(), {
						commentId: e
					});
					if (!d) return;
					const m = n === s.cc.Snoozed,
						u = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(l.a)(a(), {
							input: u
						})).ok) r(Object(R.i)({
						[e]: {
							userReports: Object(b.a)(d.userReports, t, m)
						}
					}));
					else {
						const e = Object(i.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), O.b.Error);
						r(Object(i.f)(e))
					}
				}, v = (e, t, n) => async (o, r, {
					apiContext: a,
					gqlContext: d
				}) => {
					const i = r(),
						m = i.features.comments.models[e];
					if (!m) return;
					const l = m.postId,
						b = i.postStickiedComments.data[l],
						O = s.g[t];
					let f;
					if (o(Object(R.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === s.G.ADMIN,
								isMod: t === s.G.MODERATOR,
								isStickied: !!n
							}
						})), n && b && b !== e && o(Object(R.i)({
							[b]: {
								isStickied: !1
							}
						})), Object(p.a)(r())) {
						const o = Object(u.b)(d(), e, t),
							s = Object(u.c)(d(), e, !!n),
							r = [o];
						(n || !n && e === b) && r.push(s), f = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else f = await Object(u.g)(a(), e, O, n || null);
					f.ok ? n && o(x({
						id: e,
						postId: l,
						commentsPageKey: Object(c.a)(l, null, {
							sort: s.u.CONFIDENCE,
							...i.platform.currentPage.queryParams
						})
					})) : (o(Object(R.i)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(R.i)({
						[b]: {
							isStickied: i.features.comments.models[b].isStickied
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
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(s.a)(l.G),
				O = Object(s.a)(l.p),
				f = Object(s.a)(l.Q),
				p = (e, t, n) => async (s, a, {
					apiContext: p
				}) => {
					d.j(a(), t);
					const R = t === i.i.MARKDOWN,
						y = t === i.i.RICH_TEXT,
						S = l.k;
					if (R && Object(m.G)(n)) return s(f({
						editorKey: e,
						editorMode: i.i.MARKDOWN,
						content: ""
					})), void s(j(t));
					if (y && !n) return s(f({
						editorKey: e,
						editorMode: i.i.RICH_TEXT,
						content: m.i
					})), void s(j(t));
					s(b(S));
					const _ = await Object(c.a)(p(), t, R ? JSON.stringify(n) : n);
					_.ok ? (s(O(S)), s(f({
						editorKey: e,
						editorMode: t,
						content: _.body.output
					})), s(j(t))) : (s(O(S)), s(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
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
						kind: u.b.SuccessCommunity,
						text: d
					})), Object(a.qb)(s + 1)
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
				d = e => async (t, n, {
					apiContext: o
				}) => {
					const r = await Object(s.a)(o(), e);
					r && r.ok ? t(c({
						streamId: e,
						level: r.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return X
			})), n.d(t, "removalReasonsLoaded", (function() {
				return Y
			})), n.d(t, "removalReasonsFailed", (function() {
				return Z
			})), n.d(t, "removalReasonsRequested", (function() {
				return ee
			})), n.d(t, "removalReasonAddedPending", (function() {
				return te
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return oe
			})), n.d(t, "addRemovalReason", (function() {
				return se
			})), n.d(t, "editRemovalReasonPending", (function() {
				return re
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ce
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return ae
			})), n.d(t, "editRemovalReason", (function() {
				return de
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return ie
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), n.d(t, "deleteRemovalReason", (function() {
				return le
			})), n.d(t, "removedItemsSelected", (function() {
				return be
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return Oe
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return pe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return je
			})), n.d(t, "removalReasonMessagePending", (function() {
				return Re
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ye
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Se
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), n.d(t, "submitRemovalReason", (function() {
				return Ee
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return xe
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
			const c = "REMOVALREASONS__ADD_PENDING",
				a = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				i = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				l = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				O = "REMOVALREASONS__DELETE_FAILED";
			var f = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case c:
					case a:
					case i:
					case m:
					case l:
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
			var p = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case c:
						case i:
						case l:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
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
				j = Object(r.c)({
					error: f,
					pending: p
				});
			const R = {};
			var y = (e = R, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
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
			const S = {};
			var _ = (e = S, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
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
			var E = (e = null, t) => {
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
				x = Object(r.c)({
					api: j,
					models: y,
					reasonOrder: _,
					removedItemIds: E
				}),
				A = n("./src/lib/constants/index.ts"),
				h = n("./src/lib/makeActionCreator/index.ts"),
				I = n("./src/lib/makeCommentsPageKey/index.ts"),
				k = n("./src/lib/makeDraftKey/index.ts"),
				v = n("./src/reddit/actions/bulkActions/index.ts"),
				g = n("./src/reddit/actions/comment/index.ts"),
				C = n("./src/reddit/actions/comment/authoring.ts"),
				D = n("./src/reddit/actions/comment/moderation.ts"),
				N = n("./src/reddit/actions/modal.ts"),
				T = n("./src/reddit/actions/post.ts"),
				P = n("./src/reddit/actions/toaster.ts"),
				M = n("./src/reddit/constants/modals.ts"),
				L = n("./src/lib/makeApiRequest/index.ts"),
				w = n("./src/lib/omitHeaders/index.ts"),
				K = n("./src/reddit/constants/headers.ts"),
				F = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const U = (e, t) => Object(L.a)(Object(w.a)(e, [K.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: A.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, n) => Object(L.a)(Object(w.a)(e, [K.a]), {
					endpoint: Object(F.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: A.jb.POST,
					type: "json",
					data: t
				});
			var B = n("./src/reddit/helpers/isPost.ts"),
				G = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				J = n("./src/reddit/helpers/routeKey/index.ts"),
				q = n("./src/reddit/models/ModQueue/index.ts"),
				$ = n("./src/reddit/models/PostDraft/index.ts"),
				W = n("./src/reddit/models/RemovalReason/index.ts"),
				z = n("./src/reddit/models/Toast/index.ts"),
				H = n("./src/reddit/selectors/comments.ts"),
				Q = n("./src/reddit/selectors/platform.ts");
			Object(s.a)({
				features: {
					removalReasons: x
				}
			});
			const X = Object(h.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(h.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Z = Object(h.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().subreddits.models[e].name;
					t(X());
					const r = await ((e, t) => Object(L.a)(Object(w.a)(e, [K.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: A.jb.GET
					}))(o(), s);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t(Z(r.error))
				}, te = Object(h.a)(c), ne = Object(h.a)(a), oe = Object(h.a)(d), se = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(te());
					const a = await ((e, t, n) => Object(L.a)(Object(w.a)(e, [K.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: A.jb.POST,
						data: n
					}))(r(), c, t);
					if (a.ok) {
						const {
							id: s
						} = a.body, r = {
							...t,
							id: s
						};
						n(ne({
							subredditId: e,
							reason: r
						})), n(Object(P.f)({
							kind: z.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(oe(a.error))
				}, re = Object(h.a)(i), ce = Object(h.a)(m), ae = Object(h.a)(u), de = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(re());
					const a = await ((e, t, n) => Object(L.a)(Object(w.a)(e, [K.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: A.jb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), c, t);
					a.ok ? (n(ce({
						subredditId: e,
						reason: t
					})), n(Object(P.f)({
						kind: z.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(ae(a.error))
				}, ie = Object(h.a)(l), me = Object(h.a)(b), ue = Object(h.a)(O), le = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const c = s().subreddits.models[e].name;
					n(ie());
					const a = await ((e, t, n) => Object(L.a)(Object(w.a)(e, [K.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: A.jb.DELETE
					}))(r(), c, t);
					a.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(P.f)({
						kind: z.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(a.error))
				}, be = Object(h.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), Oe = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(N.i)(M.a.ADD_REMOVAL_REASON))
				}, fe = Object(h.a)("REMOVALREASONS__SUBMIT_PENDING"), pe = Object(h.a)("REMOVALREASONS__SUBMIT_SUCCESS"), je = Object(h.a)("REMOVALREASONS__SUBMIT_FAILED"), Re = Object(h.a)("REMOVALREASONS__MESSAGE_PENDING"), ye = Object(h.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Se = Object(h.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(h.a)("REMOVALREASONS__MESSAGE_FAILED"), Ee = (e, t, n, o, s) => async (r, c, {
					apiContext: a
				}) => {
					const d = c(),
						i = d.user.account && d.user.account.displayText,
						m = e[0],
						u = Object(B.a)(m) ? W.e.Post : W.e.Comment,
						l = u === W.e.Post ? d.posts.models[m] : d.features.comments.models[m],
						b = u === W.e.Post ? T.S : g.i;
					if (!l || !i) return !1;
					r(fe()), r(b({
						[m]: {
							modNote: s,
							modRemovalReason: t && t.title,
							modReasonBy: i
						}
					}));
					const O = {
							itemIds: e,
							modNote: s,
							reasonId: t ? t.id : null
						},
						f = await U(a(), O);
					if (f.ok) {
						if (r(pe()), t) {
							r(Re());
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								c = await V(a(), Object(W.h)(s, u), u);
							if (c.ok) {
								if (o === W.f.Public) {
									if (r(Se()), c.body) {
										const e = Object(G.a)(c.body, i),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(Q.f)(d),
											o = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let s = n && o && Object(J.a)(o, d, d.posts.models[e.postId]);
										if (s || (s = Object(I.a)(e.postId, null, {
												sort: A.v,
												hasSortParam: !0
											})), u === W.e.Post) {
											const n = Object(k.a)($.c.replyToPost, m);
											r(Object(C.o)({
												...t,
												headCommentId: Object(H.w)(d, {
													commentsPageKey: s
												}),
												commentsPageKey: s,
												draftKey: n
											}));
											const o = d.postStickiedComments.data[m];
											r(Object(D.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: s
											})), o && o !== e.id && r(Object(g.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (u === W.e.Comment) {
											const e = Object(k.a)($.c.replyToComment, l.id),
												n = Object(H.j)(d, {
													commentId: m,
													commentsPageKey: s
												});
											r(Object(C.m)({
												...t,
												parentCommentId: m,
												commentsPageKey: s,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else r(ye());
								return !0
							}
							return r(_e(c.error)), !1
						}
					} else r(je(f.error)), r(b({
						[m]: {
							modNote: l.modNote,
							modRemovalReason: l.modRemovalReason,
							modReasonBy: l.modReasonBy
						}
					}));
					return !1
				}, xe = (e, t, n, s, r) => async (c, a, {
					apiContext: d
				}) => {
					const i = a(),
						m = i.user.account && i.user.account.displayText;
					if (!m) return;
					c(fe());
					const u = Object(P.f)({
							kind: z.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						l = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await U(d(), l);
					if (b.ok) {
						const o = {
							ids: e,
							operation: q.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (c(Object(v.b)(o)), t) {
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								r = await V(d(), Object(W.h)(o, W.e.Bulk), W.e.Bulk);
							r.ok ? (c(ye()), c(u)) : c(_e(r.error))
						} else c(u)
					} else c(je(b.error))
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
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "h", (function() {
				return y
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts");
			const m = "comment_composer",
				u = e => {
					const t = Object(a.o)(e);
					return {
						source: m,
						action: o.c.CLICK,
						...Object(d.m)(e),
						screen: Object(d.Y)(e),
						subreddit: Object(d.hb)(e),
						post: t ? Object(d.G)(e, t) : null,
						profile: Object(d.P)(e),
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
							getFlairData: m
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(i.a)({
						noun: "comment",
						...u(e),
						comment: s ? Object(d.h)(e, s) : null,
						listing: Object(d.x)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: m(e)
					})
				}, b = (e, t, n, o) => {
					const s = u(e);
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
				}, O = e => Object(i.a)({
					noun: "cancel",
					...u(e)
				}), f = (e, t) => {
					t === r.c.replyToPost && Object(i.a)({
						noun: "input",
						...u(e)
					})
				}, p = (e, t) => Object(i.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.m)(t),
					screen: Object(d.Y)(t),
					subreddit: Object(d.hb)(t),
					post: Object(d.G)(t, e)
				}), j = e => Object(i.a)({
					noun: "edit",
					...u(e)
				}), R = e => Object(i.a)({
					noun: "save_edit",
					...u(e)
				}), y = (e, t) => n => {
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
				return u
			}));
			var o = n("./src/reddit/helpers/isPost.ts");
			const s = 20,
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
				u = (e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/removalReasonActions.f59c611cce4eafc342da.js.map