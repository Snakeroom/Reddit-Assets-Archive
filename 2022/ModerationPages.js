// https://www.redditstatic.com/desktop2x/ModerationPages.c901aca385f771d636a3.js
// Retrieved at 7/7/2022, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages"], {
		"./src/higherOrderComponents/withImageUploads.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/imageUploads.ts"),
				r = s("./src/reddit/models/Image/index.tsx"),
				i = s("./src/reddit/selectors/imageUploads.ts");
			const l = Object(a.c)({
				_imageUploads: i.b
			});

			function d(e, t) {
				return Object(n.b)(l, e => ({
					uploadImage: s => e(t(s)),
					cancelUpload: t => e(Object(o.h)(t))
				}), (function(e, t, s) {
					return {
						...s,
						...t,
						getImageUploadsIfModified: function(t) {
							return function(e, t) {
								const s = [];
								let n = !1;
								for (const a of t)
									if (Object(r.i)(a) || e[a.id])
										if (e[a.id]) {
											const t = e[a.id];
											s.push(t), n = n || t !== a
										} else n = !0;
								else s.push(a);
								return n ? s : null
							}(e._imageUploads, t)
						}
					}
				}))(e)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "i", (function() {
				return C
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				a = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				r = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				l = s("./node_modules/lodash/values.js"),
				d = s.n(l);
			const c = e => d()(i.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				u = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				p = a()().tlds(r.a).set({
					fuzzyIP: !0
				}),
				b = a()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = u(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				g = u(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				f = a()().tlds(r.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				x = a()().tlds(r.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				E = p.normalize;
			p.normalize = e => {
				E.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const v = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const s = c(e.text);
						return !s || s && t
					})
				},
				k = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !c(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				C = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const s = t[0];
						return s.lastIndex === e.length ? s : ((e, t) => {
							const s = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(s)) return t.lastIndex += s.length, t.url += s, t
						})(e, s)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(a.e)(e),
					r = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${r}`
			}
		},
		"./src/lib/stripQueryParams/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(n);
			t.a = e => {
				const t = a.a.parse(e);
				return t.search = void 0, t.query = null, a.a.format(t)
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(n.a)(a.c),
				r = Object(n.a)(a.b),
				i = Object(n.a)(a.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return k
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "g", (function() {
				return j
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "b", (function() {
				return S
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeCommentsPageKey/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/shortcuts/utils.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/actions/comment/index.ts"),
				E = s("./src/reddit/actions/comment/constants.ts");
			const v = Object(o.a)(E.p),
				k = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					s().features.comments.models[e] && (await Object(m.k)(a(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, s, a) => {
					let {
						apiContext: o
					} = a;
					if (!Object(f.Q)(s())) return void t(Object(i.i)(c.a.LOGIN_MODAL_ID));
					const r = s().features.comments.models[e];
					if (!r) return;
					const l = r.isLocked ? m.m : m.f;
					t(Object(x.j)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await l(o(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: r.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(x.j)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, C = Object(o.a)(E.H), y = e => async (t, s, a) => {
					let {
						apiContext: o,
						gqlContext: r
					} = a;
					const i = s(),
						c = i.features.comments.models[e],
						u = i.user.account ? i.user.account.displayText : null;
					c && u && (t(Object(x.j)({
						[e]: {
							isApproved: !0,
							approvedBy: u,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (Object(g.a)(i) ? await Object(m.a)(r(), e) : await Object(m.b)(o(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(x.j)({
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
					})), Object(l.d)())
				}, O = (e, t) => async (s, a, o) => {
					let {
						apiContext: r,
						gqlContext: i
					} = o;
					const c = a(),
						u = c.features.comments.models[e],
						p = c.user.account ? c.user.account.displayText : null;
					u && p && (s(Object(x.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (Object(g.a)(c) ? await Object(m.h)(i(), e, t) : await Object(m.i)(r(), e, t)).ok ? s(Object(d.f)({
						kind: b.b.SuccessMod,
						text: t ? n.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : n.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(x.j)({
						[e]: {
							approvedBy: u.approvedBy,
							bannedBy: u.bannedBy,
							isApproved: u.isApproved,
							isRemoved: u.isRemoved,
							isSpam: u.isSpam
						}
					})), Object(l.d)())
				}, j = e => async (t, s, a) => {
					let {
						apiContext: o
					} = a;
					const r = s().features.comments.models[e];
					if (!r) return;
					const i = r.ignoreReports ? m.l : m.e;
					t(Object(x.j)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await i(o(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: r.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(x.j)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, w = (e, t, s) => async (o, r, i) => {
					let {
						gqlContext: l
					} = i;
					const c = Object(h.b)(r(), {
						commentId: e
					});
					if (!c) return;
					const m = s === a.ec.Snoozed,
						g = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(l(), {
							input: g
						})).ok) o(Object(x.j)({
						[e]: {
							userReports: Object(p.a)(c.userReports, t, m)
						}
					}));
					else {
						const e = Object(d.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						o(Object(d.f)(e))
					}
				}, S = (e, t, s) => async (n, o, i) => {
					let {
						apiContext: l,
						gqlContext: d
					} = i;
					const c = o(),
						u = c.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = c.postStickiedComments.data[p];
					n(Object(x.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === a.G.ADMIN,
							isMod: t === a.G.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && n(Object(x.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const h = Object(m.c)(d(), e, t),
						g = Object(m.d)(d(), e, !!s),
						f = [h];
					(s || !s && e === b) && f.push(g), (await Promise.all(f)).every(e => e.ok) ? s && n(C({
						id: e,
						postId: p,
						commentsPageKey: Object(r.a)(p, null, {
							sort: a.t.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (n(Object(x.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), n(Object(x.j)({
						[b]: {
							isStickied: c.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/economics/powerups/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/uuid/v4.js"),
				a = s.n(n),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				i = s("./src/lib/uploadToS3/index.ts"),
				l = s("./src/reddit/endpoints/gold/powerups/index.ts"),
				d = s("./src/reddit/helpers/media/index.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/actions/economics/powerups/constants.ts"),
				u = s("./src/reddit/actions/economics/powerups/helpers.ts");
			const p = Object(o.a)(m.b),
				b = Object(o.a)(m.c),
				h = e => {
					let {
						subredditId: t,
						file: s
					} = e;
					return async (e, n) => {
						var o;
						try {
							const r = n(),
								i = null === (o = Object(c.k)(r)) || void 0 === o ? void 0 : o.id;
							if (!i) throw new Error("Failed to get current user during emoji upload");
							const l = await Object(d.h)(s);
							if (!l) throw new Error("Cannot determine file mimeType");
							const {
								file: u,
								width: p,
								height: b
							} = await Object(d.o)(s, m.a), h = await e(g({
								subredditId: t,
								mimeType: l
							}, {
								userId: i
							})), E = await x({
								file: u,
								s3UploadLease: h
							}, {
								subredditId: t,
								userId: i
							});
							return await e(f({
								subredditId: t,
								mimeType: l,
								url: E,
								x: p,
								y: b,
								nonce: a()()
							}))
						} catch (i) {
							throw r.c.captureException(i), i
						}
					}
				},
				g = (e, t) => async (s, n, a) => {
					let {
						gqlContext: o
					} = a;
					const r = await Object(l.c)(o(), {
						input: e
					});
					if (r.error || !r.ok) throw new Error(`Failed to get emoji upload lease. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					const {
						ok: i,
						errors: d,
						s3UploadLease: c
					} = r.body.data.generateCustomEmojiUploadLease;
					if (!i || d) throw new Error(`Failed to get emoji upload lease: ${Object(u.a)(d)}. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					return c
				}, f = e => async (t, s, n) => {
					let {
						gqlContext: a
					} = n;
					const o = await Object(l.a)(a(), {
						input: e
					});
					if (o.error || !o.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: r,
						errors: i,
						emoji: c
					} = o.body.data.createCustomEmoji;
					if (!r || i) throw new Error(`Failed to create custom emoji: ${Object(u.a)(i)}`);
					const m = c.emojiIcon.url;
					await Object(d.n)(m);
					const {
						subredditId: b
					} = e;
					return t(p({
						subredditId: b,
						emoji: c
					})), c
				}, x = async (e, t) => {
					let {
						file: s,
						s3UploadLease: n
					} = e, {
						subredditId: a,
						userId: o
					} = t;
					const r = await Object(i.a)(s, n);
					if (!r.ok) throw new Error(`Failed to upload custom emoji to S3. subredditId: ${a}; userId: ${o}`);
					const l = r.body.PostResponse;
					return `https://${l.Bucket}.s3.amazonaws.com/${l.Key}`
				}, E = e => {
					let {
						emojiId: t,
						subredditId: s
					} = e;
					return async (e, n, a) => {
						let {
							gqlContext: o
						} = a;
						const i = await Object(l.b)(o(), {
							input: {
								id: t
							}
						});
						if (i.error || !i.ok) {
							const e = new Error("Failed to delete custom emoji");
							throw r.c.captureException(e), e
						}
						const {
							ok: d,
							errors: c
						} = i.body.data.deleteCustomEmoji;
						if (!d || c) {
							const e = new Error(`Failed to delete custom emoji: ${Object(u.a)(c)}`);
							throw r.c.captureException(e), e
						}
						return e(b({
							subredditId: s,
							emojiId: t
						})), d
					}
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return Y
			})), s.d(t, "d", (function() {
				return ee
			})), s.d(t, "f", (function() {
				return ae
			})), s.d(t, "a", (function() {
				return oe
			})), s.d(t, "b", (function() {
				return re
			})), s.d(t, "c", (function() {
				return ie
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/index.ts"),
				i = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				l = s("./src/reddit/actions/removalReasons/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/modQueue/index.ts"),
				m = s("./src/reddit/endpoints/user/index.ts"),
				u = s("./src/reddit/helpers/correlationIdTracker.ts"),
				p = s("./src/reddit/helpers/flair.ts"),
				b = s("./node_modules/Base64/base64.js"),
				h = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				g = s("./src/reddit/helpers/isPost.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/redditGQL/types.ts"),
				v = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const C = {
					[a.rb.Edited]: E.r.Edited,
					[a.rb.Modqueue]: E.r.Mod,
					[a.rb.Reports]: E.r.Reported,
					[a.rb.Spam]: E.r.Removed,
					[a.rb.Unmoderated]: E.r.Unmoderated
				},
				y = {
					comments: E.p.Comment,
					links: E.p.Post,
					chat_comments: E.p.ChatComment
				};

			function O(e) {
				let {
					getState: t,
					queueType: s,
					options: n
				} = e;
				const a = t();
				let o;
				n.only && (o = y[n.only]);
				const r = {};
				n.after && (r[n.sort === h.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const s = Object(g.a)(t) ? Object(x.G)(e, {
						postId: t
					}) : Object(f.b)(e, {
						commentId: t
					});
					if (s) return Object(b.btoa)(`${s.id}|${s.created}`)
				}(a, n.after));
				const i = {};
				return n.sort === h.a.OldestFirst ? i.last = 25 : i.first = 25, {
					queueType: C[s],
					...i,
					...!!o && {
						itemTypes: o
					},
					...!!n.subreddit && {
						subredditIds: [n.subreddit]
					},
					...!!n.profile && {
						subredditIds: [n.profile]
					},
					sort: n.sort === h.a.MostReportedFirst ? E.q.SortReports : E.q.SortDate,
					...r
				}
			}
			var j;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost", e.ChatComment = "ModQueueItemChatComment"
			}(j || (j = {}));
			var w = s("./src/reddit/models/ModQueue/index.ts"),
				S = s("./src/reddit/models/Toast/index.ts"),
				N = s("./src/reddit/selectors/modQueue.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/telemetry.ts"),
				M = s("./src/telemetry/index.ts"),
				P = s("./src/lib/initializeClient/installReducer.ts"),
				R = s("./src/reddit/reducers/pages/modHub/index.ts"),
				A = s("./src/reddit/actions/modQueue/constants.ts");
			Object(P.a)({
				pages: {
					modHub: R.a
				}
			});
			const F = Object(o.a)(A.j),
				D = Object(o.a)(A.i),
				L = Object(o.a)(A.h),
				U = Object(o.a)(A.g),
				B = Object(o.a)(A.f),
				H = Object(o.a)(A.e),
				W = Object(o.a)(A.n),
				z = Object(o.a)(A.m),
				V = Object(o.a)(A.l),
				q = Object(o.a)(A.q),
				G = Object(o.a)(A.p),
				K = Object(o.a)(A.o),
				Q = Object(o.a)(A.w),
				X = Object(o.a)(A.v),
				J = Object(o.a)(A.u),
				Y = (e, t, s) => async (o, r, l) => {
					let {
						apiContext: u,
						gqlContext: p
					} = l;
					var b, h;
					let g, f, x;
					switch (t) {
						case a.rb.Edited:
							g = U, f = H, x = B;
							break;
						case a.rb.Modqueue:
							g = F, f = L, x = D;
							break;
						case a.rb.Reports:
							g = W, f = V, x = z;
							break;
						case a.rb.Spam:
							g = q, f = K, x = G;
							break;
						case a.rb.Unmoderated:
							g = Q, f = J, x = X;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					o(g());
					const E = await Object(c.c)(u(), t, s);
					if (E.ok) {
						const a = E.body,
							l = {
								...s
							};
						if (l.subreddit) {
							const e = null === (b = Object.values(a.subreddits).find(e => {
								let {
									name: t
								} = e;
								return t === s.subreddit
							})) || void 0 === b ? void 0 : b.id;
							l.subreddit = e
						}
						if (l.profile) {
							const e = null === (h = (await Object(m.b)(u(), l.profile)).body[l.profile]) || void 0 === h ? void 0 : h.profileId;
							l.profile = e
						}
						const g = O({
								getState: r,
								queueType: t,
								options: l
							}),
							C = await Object(c.b)(p(), g);
						if (!C.ok) return o(f(C.error)), void o(Object(d.f)({
							kind: S.b.Error,
							text: n.fbt._("Oh no! Something went wrong!", null, {
								hk: "16O2Sk"
							})
						}));
						const y = function(e) {
							let {
								modQueueItems: t
							} = e;
							const s = {
								posts: {},
								comments: {},
								reports: {},
								modqueue: [],
								authorFlair: {},
								listingOrder: []
							};
							return t && t.edges ? (t.edges.forEach(e => {
								var t, n;
								if (!e) return;
								const {
									node: a
								} = e;
								if (!a) return;
								const {
									__typename: o,
									subredditInfo: r
								} = a;
								if (!r) return;
								const {
									id: i
								} = r;
								if (o === j.Comment || o === j.ChatComment) {
									const {
										commentInfo: e
									} = a;
									if (!e) return;
									const n = Object(v.a)(e);
									s.comments[n.id] = n, s.listingOrder.push({
										id: n.id,
										type: "comment"
									}), s.modqueue.push(n.id);
									const {
										authorInfo: o,
										authorFlair: r
									} = e, l = r ? null === (t = Object(k.a)(r)) || void 0 === t ? void 0 : t[0] : null;
									s.authorFlair[i] = {
										...s.authorFlair[i],
										...(null == o ? void 0 : o.name) ? {
											[null == o ? void 0 : o.name]: l
										} : {}
									};
									const d = [];
									n.modReports.forEach(e => {
										d.push({
											type: "moderator",
											reason: e[0],
											reporter: e[1]
										})
									}), n.userReports.forEach(e => {
										d.push({
											type: "user",
											reason: e[0]
										})
									}), s.reports[n.id] = d
								}
								if (o === j.Post) {
									const {
										postInfo: e
									} = a;
									if (!e) return;
									const t = Object(_.f)(e);
									s.posts[t.id] = t, s.listingOrder.push({
										id: t.id,
										type: "post"
									}), s.modqueue.push(t.id);
									const {
										authorInfo: o,
										authorFlair: r
									} = e, l = r ? null === (n = Object(k.a)(r)) || void 0 === n ? void 0 : n[0] : null;
									s.authorFlair[i] = {
										...s.authorFlair[i],
										...(null == o ? void 0 : o.name) ? {
											[null == o ? void 0 : o.name]: l
										} : {}
									};
									const d = [];
									t.modReports.forEach(e => {
										d.push({
											type: "moderator",
											reason: e[0],
											reporter: e[1]
										})
									}), t.userReports.forEach(e => {
										d.push({
											type: "user",
											reason: e[0]
										})
									}), s.reports[t.id] = d
								}
							}), s) : s
						}(C.body.data);
						o(x({
							listingKey: e,
							page: `${s.page||w.b}`,
							response: {
								...a,
								...y
							}
						})), o(Object(i.a)({
							postIds: a.posts ? Object.keys(a.posts) : void 0,
							commentIds: a.comments ? Object.keys(a.comments) : void 0
						}))
					} else o(f(E.error)), o(Object(d.f)({
						kind: S.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, Z = Object(o.a)(A.k), $ = Object(o.a)(A.b), ee = e => async (t, s, a) => {
					let {
						apiContext: o
					} = a;
					const r = s(),
						i = r.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						l = r.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						m = r.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: u
						} = r.platform.currentPage.urlParams,
						p = u;
					if (e && l || m || !i) return;
					const b = await Object(c.c)(o(), p, {
						moderated_after: i
					});
					if (b.ok) {
						const e = b.body;
						t(Z(e)), e.moderatedAfter ? t(ee()) : t($())
					} else t(Object(d.f)({
						kind: S.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, te = Object(o.a)(A.t), se = Object(o.a)(A.s), ne = Object(o.a)(A.r), ae = (e, t, s) => async (a, o, i) => {
					let {
						apiContext: m
					} = i;
					a(Object(r.c)());
					const b = o(),
						h = Object(N.g)(b),
						f = b.user.account && b.user.account.displayText;
					Object(u.d)(u.a.ModQueue);
					const x = Object(u.c)(u.a.ModQueue);
					Object(M.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...T.n(b),
						actionInfo: T.d(b, {
							count: h.length,
							paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: T.Z(b),
						correlationId: x
					});
					for (let t = 0; t < h.length; t++) {
						const s = h[t];
						let n = e;
						[w.a.Approve, w.a.Remove, w.a.Spam].includes(e) && (Object(g.a)(s) ? n += "_link" : n += "_comment"), Object(M.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: n,
							...T.n(b),
							actionInfo: T.d(b, {
								count: h.length,
								paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: T.h(b, s),
							post: T.I(b, s),
							profile: T.T(b, s),
							screen: T.Z(b),
							subreddit: T.kb(b, s),
							correlationId: x
						})
					}
					Object(u.b)(u.a.ModQueue);
					const E = {
						ids: h
					};
					t && (E.text = Object(p.g)(t) || "", E.flairTemplateId = ""), s && (E.cssClass = s, E.flairTemplateId = s);
					const v = await Object(c.a)(m(), e, E);
					if (v.ok) {
						a(Object(r.b)({
							...v.body,
							operation: e,
							ids: h,
							username: f,
							options: {
								flair: t
							}
						}));
						const s = function(e, t) {
							switch (e) {
								case w.a.Approve:
									return n.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [n.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case w.a.Flair:
									return n.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [n.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case w.a.IgnoreReports:
									return n.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [n.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case w.a.Lock:
									return n.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [n.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case w.a.MarkNSFW:
									return n.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [n.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case w.a.RemovalReason:
									return n.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [n.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case w.a.Remove:
									return n.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [n.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case w.a.Spam:
									return n.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [n.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case w.a.Spoiler:
									return n.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [n.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case w.a.UnignoreReports:
									return n.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [n.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case w.a.Unlock:
									return n.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [n.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case w.a.UnmarkNSFW:
									return n.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [n.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case w.a.Unspoiler:
								case w.a.Unspoiler:
									return n.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [n.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, h.length);
						if (e !== w.a.Approve && e !== w.a.Flair) {
							let t, o;
							const i = b.platform.currentPage && b.platform.currentPage.queryParams && b.platform.currentPage.queryParams.subreddit,
								m = i && Object(I.F)(b, i);
							e === w.a.Remove && m && h.length > 1 && (t = n.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), o = Object(l.fetchReasonsAndOpenModal)(m, h));
							const u = Object(d.e)(s, S.b.Undo, n.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, s) => {
								let {
									apiContext: a
								} = s;
								e(te());
								const o = t(),
									i = Object.keys(o.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									l = o.pages.modHub.modQueue.bulkAction.undoLastAction[i],
									m = o.user.account && o.user.account.displayText;
								e(Object(r.c)());
								const u = await Object(c.a)(a(), i, {
									ids: l
								});
								u.ok ? e(se({
									...u.body,
									operation: i,
									ids: l,
									username: m
								})) : (e(ne(u.error)), e(Object(d.f)({
									kind: S.b.Error,
									text: n.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, o);
							a(Object(d.f)(u))
						} else {
							const e = Object(d.e)(s, S.b.SuccessMod);
							a(Object(d.f)(e))
						}
					} else {
						a(Object(r.a)(v.error));
						const e = Object(d.e)(n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), S.b.Error);
						a(Object(d.f)(e))
					}
				}, oe = Object(o.a)(A.a), re = Object(o.a)(A.c), ie = Object(o.a)(A.d)
		},
		"./src/reddit/actions/pages/moderationPages/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "moderationPageRequested", (function() {
				return ve
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/lib/assertNever.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				l = s("./src/reddit/actions/scheduledPosts/index.ts"),
				d = s("./src/reddit/helpers/canAccessModerationPage/index.ts"),
				c = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				m = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				u = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				p = s("./src/reddit/helpers/trackers/screenview.ts"),
				b = s("./src/reddit/actions/contentControls/index.ts"),
				h = s("./src/reddit/actions/emoji.ts"),
				g = s("./src/reddit/actions/eventPosts/index.ts"),
				f = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				x = s("./src/reddit/actions/gold/powerups.ts"),
				E = s("./src/reddit/actions/grantUserFlair/index.ts"),
				v = s("./src/lib/makeActionCreator/index.ts"),
				k = s("./src/reddit/endpoints/subredditModeration/moderationLog.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts"),
				C = s("./src/reddit/models/SubredditModeration/ModerationLog/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/actions/moderationLog/constants.ts");
			const j = Object(v.a)(O.b),
				w = (e, t) => async (s, n, a) => {
					let {
						gqlContext: o
					} = a;
					const r = await Object(k.a)(o(), e, t);
					if (r.body) {
						const t = r.body.data.subreddit.moderation;
						if (t && t.actions) {
							const a = n(),
								o = Object(_.b)(t.actions),
								r = Object(y.F)(a, e),
								{
									hasNextPage: i,
									hasPreviousPage: l,
									endCursor: d,
									startCursor: c
								} = t.actions.pageInfo,
								m = Object(C.a)(r, d, c),
								u = [];
							o.forEach(e => {
								u.push(e.id)
							}), s(j({
								hasNextPage: i,
								hasPreviousPage: l,
								endCursor: d,
								key: m,
								startCursor: c,
								normalizedModerationLog: o,
								actionIds: u,
								subredditId: r
							}))
						}
					}
				};
			var S = s("./src/reddit/actions/modQueue/index.ts"),
				N = s("./src/reddit/actions/pages/chatSettings.ts"),
				I = s("./src/reddit/actions/pages/subreddit.ts"),
				T = s("./src/reddit/actions/pages/subredditWiki/index.ts"),
				M = s("./src/reddit/actions/platform.ts"),
				P = s("./src/reddit/actions/profile/index.ts"),
				R = s("./src/reddit/actions/removalReasons/index.ts"),
				A = s("./src/reddit/actions/streaming/modSettings.ts"),
				F = s("./src/reddit/actions/subreddit.ts"),
				D = s("./src/reddit/actions/subreddit/questions.ts"),
				L = s("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts"),
				U = s("./src/reddit/actions/subredditModeration/index.ts"),
				B = s("./src/reddit/actions/subredditModeration/approvedSubmitters.ts"),
				H = s("./src/reddit/actions/subredditModeration/approvedTalkHosts.ts"),
				W = s("./src/reddit/actions/subredditModeration/ban.ts"),
				z = s("./src/reddit/actions/subredditModeration/mute.ts"),
				V = s("./src/reddit/actions/subredditSettings.ts"),
				q = s("./src/reddit/actions/tags/index.ts"),
				G = s("./node_modules/fbt/lib/FbtPublic.js"),
				K = s("./src/reddit/actions/toaster.ts"),
				Q = s("./src/reddit/actions/trafficStats/constants.ts"),
				X = s("./src/lib/makeGqlRequest/index.ts"),
				J = s("./src/redditGQL/operations/FetchSubredditTrafficStats.json");
			var Y = s("./node_modules/lodash/forEach.js"),
				Z = s.n(Y),
				$ = s("./src/reddit/helpers/graphql/helpers.ts"),
				ee = s("./src/reddit/models/TrafficStats/index.ts");
			const te = e => ({
					desktop: new Array(e).fill(0),
					oldReddit: new Array(e).fill(0),
					mWeb: new Array(e).fill(0),
					apps: new Array(e).fill(0),
					total: new Array(e).fill(0)
				}),
				se = (e, t) => {
					return Object($.g)(e.startsAt) > Object($.g)(t.startsAt) ? 1 : -1
				},
				ne = (e, t, s) => {
					const n = {
							pageViews: te(t),
							uniqueUsers: te(t)
						},
						a = Object($.g)(e[0].startsAt);
					return e.map(e => {
						const o = Object($.g)(e.startsAt),
							r = new Date(o),
							i = t === ee.c ? r.getMonth() : Math.round((o - a) / s) % t,
							l = ee.d[e.client];
						n.pageViews[l][i] += e.pageViews, n.uniqueUsers[l][i] += e.uniqueUsers
					}), n
				};
			var ae = s("./src/reddit/models/Toast/index.ts");
			const oe = Object(v.a)(Q.b),
				re = Object(v.a)(Q.c),
				ie = Object(v.a)(Q.a),
				le = e => async (t, s, n) => {
					let {
						gqlContext: a
					} = n;
					const r = Object(y.U)(s(), {
						subredditId: e
					}).name;
					t(re({
						subredditId: e
					}));
					const i = await ((e, t) => Object(X.a)(e, {
						...J,
						variables: t
					}))(a(), {
						subredditName: r
					});
					if (i.ok) {
						const s = i.body.data.subreddit.moderation;
						if (s && s.trafficStats) {
							const n = (e => {
								const t = Z()(e, (e, t) => e.sort(se)),
									s = t.subscriptionData,
									n = s.map(e => e.subscribers),
									a = s.map(e => e.unsubscribers),
									r = ne(t.hourStats, ee.b, o.Q),
									i = ne(t.dayStats, ee.a, o.B),
									l = ne(t.monthStats, ee.c, o.pb);
								return {
									pageViews: {
										byHour: r.pageViews,
										byDay: i.pageViews,
										byMonth: l.pageViews
									},
									uniqueUsers: {
										byHour: r.uniqueUsers,
										byDay: i.uniqueUsers,
										byMonth: l.uniqueUsers
									},
									subscribers: n,
									unsubscribers: a
								}
							})(s.trafficStats);
							t(oe({
								subredditId: e,
								trafficStats: n
							}))
						}
					} else t(ie({
						subredditId: e
					})), t(K.f({
						id: "error-block-trafficStats",
						kind: ae.b.Error,
						text: G.fbt._("Try again later", null, {
							hk: "41Goel"
						})
					}))
				};
			var de = s("./src/reddit/models/ModQueue/index.ts"),
				ce = s("./src/reddit/models/ScheduledPost/index.ts"),
				me = s("./src/reddit/reducers/pages/modHub/index.ts"),
				ue = s("./src/reddit/selectors/experiments/econ/index.ts"),
				pe = s("./src/reddit/selectors/moderatorPermissions.ts"),
				be = s("./src/reddit/selectors/modQueue.ts"),
				he = s("./src/reddit/selectors/platform.ts"),
				ge = s("./src/reddit/selectors/postCreations.ts"),
				fe = s("./src/reddit/selectors/profile.ts"),
				xe = s("./src/reddit/selectors/streamingModSettings.ts"),
				Ee = s("./src/reddit/selectors/user.ts");
			Object(r.a)({
				pages: {
					modHub: me.a
				}
			});
			const ve = e => async (t, s, r) => {
				const {
					params: v
				} = e, {
					pageName: k,
					profileName: _,
					subredditName: C
				} = v;
				if (k === o.gc.Wiki) {
					if (await t(Object(T.handleWikiRedirects)(e))) return
				}
				if (k === o.gc.SubredditContent) return void t(Object(n.c)(ce.s));
				const O = e.queryParams,
					j = O.page || de.b,
					G = s();
				if (C) {
					const e = Object(i.a)(C, o.W.HOT),
						s = G.listings.postOrder.ids[e],
						n = G.listings.postOrder.api.error[e],
						a = G.listings.postOrder.api.pending[e];
					if (n) return;
					a || s && !n || await t(Object(I.subredditDataRequested)(e, C, {}))
				} else _ && await t(Object(P.e)(_));
				if (!Object(Ee.Q)(s()) && k !== o.gc.SubredditRules && k !== o.gc.Contributors) return void Object(m.a)(t, s());
				if (Object(p.i)(s(), !0, C, _), !k) return;
				let K, Q, X, J, Y, Z, $, ee, te, se, ne = !1;
				switch (k) {
					case o.gc.Awards:
						K = f.i;
						break;
					case o.gc.Powerups:
						K = x.k;
						break;
					case o.gc.Muted:
						K = z.b;
						break;
					case o.gc.Contributors:
						K = B.b;
						break;
					case o.gc.Banned:
						K = W.c;
						break;
					case o.gc.Moderators:
						X = !0;
						break;
					case o.gc.Removal:
						K = R.removalReasonsRequested;
						break;
					case o.gc.ContentControls:
						K = b.a, Z = !0;
						break;
					case o.gc.ChatSettings:
						ne = !0;
						break;
					case o.gc.CommunitySettings:
						K = V.h, $ = !0;
						break;
					case o.gc.Flair:
						K = E.c, Y = !0;
						break;
					case o.gc.UserFlair:
					case o.gc.PostFlair:
						K = void 0;
						break;
					case o.gc.Emojis:
						K = h.k;
						break;
					case o.gc.Badges:
					case o.gc.Emotes:
					case o.gc.SubredditRules:
						K = void 0;
						break;
					case o.gc.Traffic:
						K = le;
						break;
					case o.gc.Modlog:
						K = w, J = !0;
						break;
					case o.gc.Streaming:
						K = A.g;
						break;
					case o.gc.Modqueue:
					case o.gc.Reports:
					case o.gc.Spam:
					case o.gc.Edited:
					case o.gc.Unmoderated:
						Q = k;
						break;
					case o.gc.Wiki:
					case o.gc.WikiContributors:
					case o.gc.WikiBanned:
						await t(Object(T.subredditWikDataRequested)(v, O, !0));
						break;
					case o.gc.ScheduledPostContent:
						ee = !0, K = l.i;
						break;
					case o.gc.EventPostContent:
						te = !0;
						break;
					case o.gc.Predictions:
						break;
					case o.gc.TalkHosts:
						se = !0;
						break;
					default:
						return Object(a.a)(k)
				}
				const ae = s(),
					oe = !!C && Object(ge.jb)(ae),
					re = Object(Ee.N)(ae),
					ie = C ? Object(y.X)(ae, {
						subredditName: C.toLowerCase()
					}) : Object(fe.q)(ae, {
						profileName: _.toLowerCase()
					}),
					me = C && Object(y.F)(ae, C),
					ve = _ && Object(fe.m)(ae, _),
					ke = me || ve;
				me && !Object(xe.b)(G, me) && await t(Object(A.g)(me));
				const _e = !!me && Object(xe.c)(ae, me),
					Ce = Object(ue.t)(G),
					ye = Object(pe.n)(ae, {
						subredditId: ke
					}),
					Oe = C && Object(y.w)(ae, {
						subredditName: C
					}),
					je = !(!Oe || !Oe.userIsContributor),
					we = Object(y.Z)(ae, {
						subredditId: ke
					});
				if (Object(d.a)({
						canCreateScheduledPosts: oe,
						isContributor: je,
						isEmployee: re,
						isStreamingEnabled: _e,
						isTalkHostsEnabled: Ce,
						moderatorPermissions: ye,
						pageName: k,
						subredditType: we
					})) {
					if (Q && C) {
						const e = Object(c.a)({
								onlyOfType: O.only,
								sort: O.sort,
								subreddit: C
							}),
							n = !!Object(be.d)(G, {
								pageName: Q,
								page: `${j}`,
								subredditName: C,
								queryParams: O
							}),
							a = G.pages.modHub.modQueue[Q].api.error;
						if (Object(be.c)(G, {
								pageName: Q
							}) || n && !a) return;
						if (!Object(he.p)(G)) {
							const n = Object(S.e)(e, Q, {
								...O,
								subreddit: C
							});
							await n(t, s, r)
						}
					} else if (X && me) {
						if (await Object(U.g)(me, O)(t, s, r), G.moderatingSubreddits[me]) {
							await Object(U.e)(me, O)(t, s, r), G.pages.modHub.moderators.invitedModerators.userOrder[me] || await Object(U.f)(me)(t, s, r)
						}
					} else se && me ? await Object(H.b)({
						subredditId: me
					})(t, s, r) : Z && C ? await K(C)(t, s, r) : ne && me ? await Object(N.e)(me)(t, s, r) : $ && me ? await Promise.all([K(C, me)(t, s, r), Object(q.g)(me, u.a.communitySettings)(t, s, r), Object(D.b)(me)(t, s, r), Object(L.d)(me)(t, s, r)]) : J || Y ? await K(C, O)(t, s, r) : ee && me ? await Object(l.i)({
						subredditId: me
					})(t, s, r) : te && C ? await Object(g.eventPostsRequested)(C)(t, s, r) : K && await K(ke, O)(t, s, r);
					C && me && !G.subreddits.rules[me] && await F.o(C)(t, s, r), t(M.m({
						title: ie
					}))
				}
			}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Z
			})), s.d(t, "removalReasonsLoaded", (function() {
				return $
			})), s.d(t, "removalReasonsFailed", (function() {
				return ee
			})), s.d(t, "removalReasonsRequested", (function() {
				return te
			})), s.d(t, "removalReasonAddedPending", (function() {
				return se
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return ae
			})), s.d(t, "addRemovalReason", (function() {
				return oe
			})), s.d(t, "editRemovalReasonPending", (function() {
				return re
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ie
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return le
			})), s.d(t, "editRemovalReason", (function() {
				return de
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ce
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), s.d(t, "deleteRemovalReason", (function() {
				return pe
			})), s.d(t, "removedItemsSelected", (function() {
				return be
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return ge
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return xe
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Ee
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ke
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), s.d(t, "submitRemovalReason", (function() {
				return Ce
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ye
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./node_modules/redux/es/redux.js");
			const r = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				l = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				c = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case r:
					case i:
					case l:
					case c:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case u:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case i:
						case c:
						case p:
							return !0;
						case r:
						case "REMOVALREASONS__LOAD_FAILED":
						case l:
						case d:
						case m:
						case u:
						case b:
						case h:
							return !1;
						default:
							return e
					}
				},
				x = Object(o.c)({
					error: g,
					pending: f
				});
			const E = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r: {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return {
							...e,
							...n
						}
					}
					case l:
					case m: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case b: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: n,
							...a
						} = e;
						return a
					}
					default:
						return e
				}
			};
			const k = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: a
						} = n;
						return {
							...e,
							[s]: a
						}
					}
					case l: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], n.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, a = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: a
						}
					}
					default:
						return e
				}
			};
			var C = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				y = Object(o.c)({
					api: x,
					models: v,
					reasonOrder: _,
					removedItemIds: C
				}),
				O = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/makeActionCreator/index.ts"),
				w = s("./src/lib/makeCommentsPageKey/index.ts"),
				S = s("./src/lib/makeDraftKey/index.ts"),
				N = s("./src/reddit/actions/bulkActions/index.ts"),
				I = s("./src/reddit/actions/comment/index.ts"),
				T = s("./src/reddit/actions/comment/authoring.ts"),
				M = s("./src/reddit/actions/comment/moderation.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/post.ts"),
				A = s("./src/reddit/actions/toaster.ts"),
				F = s("./src/reddit/constants/modals.ts"),
				D = s("./src/lib/makeApiRequest/index.ts"),
				L = s("./src/lib/omitHeaders/index.ts"),
				U = s("./src/reddit/constants/headers.ts"),
				B = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const H = (e, t) => Object(D.a)(Object(L.a)(e, [U.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: O.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, s) => Object(D.a)(Object(L.a)(e, [U.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: O.jb.POST,
					type: "json",
					data: t
				});
			var z = s("./src/reddit/helpers/isPost.ts"),
				V = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = s("./src/reddit/helpers/routeKey/index.ts"),
				G = s("./src/reddit/models/ModQueue/index.ts"),
				K = s("./src/reddit/models/PostDraft/index.ts"),
				Q = s("./src/reddit/models/RemovalReason/index.ts"),
				X = s("./src/reddit/models/Toast/index.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/platform.ts");
			Object(a.a)({
				features: {
					removalReasons: y
				}
			});
			const Z = Object(j.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(j.a)(r),
				ee = Object(j.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const o = s().subreddits.models[e].name;
					t(Z());
					const r = await ((e, t) => Object(D.a)(Object(L.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: O.jb.GET
					}))(a(), o);
					r.ok ? t($({
						subredditId: e,
						response: r.body
					})) : t(ee(r.error))
				}, se = Object(j.a)(i), ne = Object(j.a)(l), ae = Object(j.a)(d), oe = (e, t) => async (s, a, o) => {
					let {
						apiContext: r
					} = o;
					const i = a().subreddits.models[e].name;
					s(se());
					const l = await ((e, t, s) => Object(D.a)(Object(L.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: O.jb.POST,
						data: s
					}))(r(), i, t);
					if (l.ok) {
						const {
							id: a
						} = l.body, o = {
							...t,
							id: a
						};
						s(ne({
							subredditId: e,
							reason: o
						})), s(Object(A.f)({
							kind: X.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(ae(l.error))
				}, re = Object(j.a)(c), ie = Object(j.a)(m), le = Object(j.a)(u), de = (e, t) => async (s, a, o) => {
					let {
						apiContext: r
					} = o;
					const i = a().subreddits.models[e].name;
					s(re());
					const l = await ((e, t, s) => Object(D.a)(Object(L.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: O.jb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(r(), i, t);
					l.ok ? (s(ie({
						subredditId: e,
						reason: t
					})), s(Object(A.f)({
						kind: X.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(le(l.error))
				}, ce = Object(j.a)(p), me = Object(j.a)(b), ue = Object(j.a)(h), pe = (e, t) => async (s, a, o) => {
					let {
						apiContext: r
					} = o;
					const i = a().subreddits.models[e].name;
					s(ce());
					const l = await ((e, t, s) => Object(D.a)(Object(L.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: O.jb.DELETE
					}))(r(), i, t);
					l.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(A.f)({
						kind: X.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(ue(l.error))
				}, be = Object(j.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, n, a) => {
					let {
						apiContext: o
					} = a;
					const r = n();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(be({
						subredditId: e,
						itemIds: t
					})), s(Object(P.i)(F.a.ADD_REMOVAL_REASON))
				}, ge = Object(j.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(j.a)("REMOVALREASONS__SUBMIT_SUCCESS"), xe = Object(j.a)("REMOVALREASONS__SUBMIT_FAILED"), Ee = Object(j.a)("REMOVALREASONS__MESSAGE_PENDING"), ve = Object(j.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ke = Object(j.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(j.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, s, n, a) => async (o, r, i) => {
					let {
						apiContext: l
					} = i;
					const d = r(),
						c = d.user.account && d.user.account.displayText,
						m = e[0],
						u = Object(z.a)(m) ? Q.e.Post : Q.e.Comment,
						p = u === Q.e.Post ? d.posts.models[m] : d.features.comments.models[m],
						b = u === Q.e.Post ? R.S : I.j;
					if (!p || !c) return !1;
					o(ge()), o(b({
						[m]: {
							modNote: a,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const h = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						g = await H(l(), h);
					if (g.ok) {
						if (o(fe()), t) {
							o(Ee());
							const a = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								r = await W(l(), Object(Q.h)(a, u), u);
							if (r.ok) {
								if (n === Q.f.Public) {
									if (o(ke()), r.body) {
										const e = Object(V.a)(r.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(Y.f)(d),
											n = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let a = s && n && Object(q.a)(n, d, d.posts.models[e.postId]);
										if (a || (a = Object(w.a)(e.postId, null, {
												sort: O.u,
												hasSortParam: !0
											})), u === Q.e.Post) {
											const s = Object(S.a)(K.c.replyToPost, m);
											o(Object(T.q)({
												...t,
												headCommentId: Object(J.w)(d, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: s
											}));
											const n = d.postStickiedComments.data[m];
											o(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), n && n !== e.id && o(Object(I.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (u === Q.e.Comment) {
											const e = Object(S.a)(K.c.replyToComment, p.id),
												s = Object(J.j)(d, {
													commentId: m,
													commentsPageKey: a
												});
											o(Object(T.o)({
												...t,
												parentCommentId: m,
												commentsPageKey: a,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else o(ve());
								return !0
							}
							return o(_e(r.error)), !1
						}
					} else o(xe(g.error)), o(b({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, ye = (e, t, s, a, o) => async (r, i, l) => {
					let {
						apiContext: d
					} = l;
					const c = i(),
						m = c.user.account && c.user.account.displayText;
					if (!m) return;
					r(ge());
					const u = Object(A.f)({
							kind: X.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await H(d(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: G.a.RemovalReason,
							username: m,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (r(Object(N.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: a
								},
								o = await W(d(), Object(Q.h)(n, Q.e.Bulk), Q.e.Bulk);
							o.ok ? (r(ve()), r(u)) : r(_e(o.error))
						} else r(u)
					} else r(xe(b.error))
				}
		},
		"./src/reddit/actions/scheduledPosts/delete.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/DeleteScheduledPost.json");
			var l = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				d = s("./src/reddit/models/ScheduledPost/index.ts"),
				c = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				u = s("./src/telemetry/index.ts");
			const p = Object(n.a)(a.i),
				b = (e, t) => async (s, n, b) => {
					let {
						gqlContext: h
					} = b;
					const g = Object(m.a)(n(), {
						subredditId: e,
						scheduledPostId: t
					});
					g && Object(d.q)(g) && Object(u.a)(Object(l.s)()(n(), g)), g ? (await ((e, t) => Object(r.a)(e, {
						...i,
						variables: t
					}))(h(), {
						input: {
							id: g.id
						}
					})).ok ? (s(Object(o.f)(Object(o.e)(a.q(), c.b.SuccessCommunity))), s(p({
						subredditId: e,
						scheduledPostId: t
					}))) : s(Object(o.f)(Object(o.e)(a.p(), c.b.Error))) : s(Object(o.f)(Object(o.e)(a.u(), c.b.Error)))
				}
		},
		"./src/reddit/actions/subredditModeration/approvedSubmitters.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "d", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/get.js"),
				o = s.n(a),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const p = (e, t, s) => Object(d.a)(Object(c.a)(e, [m.a]), {
				endpoint: Object(u.a)(`${e.apiUrl}/api/v1/${t}/contributors`),
				method: l.jb.GET,
				data: s
			});
			var b = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				h = s("./src/reddit/models/SubredditModeration/index.ts"),
				g = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(r.a)(f.g),
				E = Object(r.a)(f.f),
				v = Object(r.a)(f.e),
				k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (s, n, a) => {
						let {
							apiContext: o
						} = a;
						const r = n(),
							i = t.after || "",
							l = Object(h.e)(e, i),
							d = r.pages.modHub.approvedSubmitters.fetchedTokens[l];
						if (r.pages.modHub.approvedSubmitters.api.pending[l] || d) return;
						s(x({
							subredditId: e,
							fetchedToken: i
						}));
						const c = r.subreddits.models[e].name,
							m = await p(o(), c, t);
						m.ok ? s(E({
							...m.body,
							fetchedToken: i
						})) : s(v({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				_ = Object(r.a)(f.j),
				C = Object(r.a)(f.i),
				y = Object(r.a)(f.h),
				O = (e, t) => async (s, n, a) => {
					let {
						apiContext: o
					} = a;
					const r = n().subreddits.models[e].name,
						i = {
							username: Object(b.a)(t)
						};
					s(_());
					const l = await p(o(), r, i);
					l.ok ? s(C(l.body)) : s(y(l.error))
				}, j = Object(r.a)(f.d), w = Object(r.a)(f.k), S = (e, t) => async (s, a, r) => {
					let {
						apiContext: u
					} = r;
					const h = a(),
						f = h.subreddits.models[e].url,
						x = h.subreddits.models[e].name;
					t = Object(b.a)(t);
					const E = await ((e, t, s) => Object(d.a)(Object(c.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: l.jb.POST,
						data: {
							api_type: "json",
							name: s,
							type: "contributor"
						}
					}))(u(), f, t);
					if (E.ok) {
						const e = {
							username: t
						};
						s(Object(i.f)({
							kind: g.b.SuccessMod,
							text: n.fbt._("Successfully added an approved submitter", null, {
								hk: "4gruK7"
							})
						}));
						const a = await p(u(), x, e);
						a.ok && s(j(a.body))
					} else {
						const e = o()(E, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(i.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, N = (e, t) => async (s, a, r) => {
					let {
						apiContext: u
					} = r;
					const p = a().subreddits.models[e].url,
						b = await ((e, t, s) => Object(d.a)(Object(c.a)(e, [m.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: l.jb.POST,
							data: {
								api_type: "json",
								id: s,
								type: "contributor"
							}
						}))(u(), p, t);
					if (b.ok) s(w({
						subredditId: e,
						userId: t
					}));
					else {
						const e = o()(b, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(i.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}
		},
		"./src/reddit/actions/subredditModeration/approvedTalkHosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "c", (function() {
				return k
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/sentry/index.ts"),
				o = s("./src/reddit/actions/subredditModeration/constants.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/redditGQL/operations/AddApprovedTalkHost.json"),
				d = s("./src/redditGQL/operations/RedditorIdByName.json"),
				c = s("./src/redditGQL/operations/RemoveApprovedTalkHost.json"),
				m = s("./src/redditGQL/operations/SubredditApprovedTalkHosts.json");
			var u = s("./src/reddit/models/SubredditModeration/index.ts"),
				p = s("./src/reddit/models/Toast/index.ts");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = Object(n.a)(o.n), g = Object(n.a)(o.m), f = Object(n.a)(o.l), x = Object(n.a)(o.o), E = e => async (t, s, n) => {
				let {
					gqlContext: o
				} = n;
				var l;
				const d = s(),
					{
						subredditId: c,
						before: x,
						forceRefresh: E
					} = e,
					v = Object(u.f)(c, x),
					k = d.pages.modHub.approvedTalkHosts.fetchedTokens[v];
				if (!(d.pages.modHub.approvedTalkHosts.api.pending[v] || k && !E)) {
					t(h({
						subredditId: c,
						fetchedToken: x
					}));
					try {
						const e = await ((e, t) => Object(i.a)(e, {
							...m,
							variables: {
								...t,
								last: 20
							}
						}))(o(), {
							subredditId: c,
							before: x
						});
						if (e.ok) {
							const {
								data: {
									subredditInfoById: s
								}
							} = e.body;
							if ("Subreddit" === (null == s ? void 0 : s.__typename) && (null === (l = null == s ? void 0 : s.talkApprovedHostMembers) || void 0 === l ? void 0 : l.edges)) {
								const {
									edges: e,
									pageInfo: n
								} = s.talkApprovedHostMembers, a = [];
								e.forEach(e => {
									e && e.node && a.push(e.node)
								}), t(g({
									subredditId: c,
									approvedTalkHosts: a,
									fetchedToken: x,
									loadMoreToken: n.hasNextPage ? n.endCursor : null,
									forceRefresh: E
								}))
							}
							const {
								errors: n
							} = e.body;
							n && n.length && a.c.captureException(n)
						} else t(f({
							subredditId: c,
							fetchedToken: x
						})), t(Object(r.f)({
							kind: p.b.Error,
							text: b._("Oops, something went wrong. Try again.", null, {
								hk: "2VQ3RW"
							}),
							duration: 3e3
						}))
					} catch (_) {
						a.c.captureException(_), t(Object(r.f)({
							kind: p.b.Error,
							text: b._("Oops, something went wrong. Try again.", null, {
								hk: "2VQ3RW"
							}),
							duration: 3e3
						}))
					}
				}
			}, v = (e, t) => async (s, n, a) => {
				let {
					gqlContext: o
				} = a;
				var c;
				let m = "";
				const u = await ((e, t) => Object(i.a)(e, {
					...d,
					variables: t
				}))(o(), {
					name: t
				});
				if (u.ok) {
					m = null === (c = u.body.data.redditorInfoByName) || void 0 === c ? void 0 : c.id
				}
				if (!u.ok || !m) return void s(Object(r.f)({
					kind: p.b.Error,
					text: b._("{username} doesn’t exist. Double-check your spelling.", [b._param("username", t)], {
						hk: "1sikIN"
					}),
					duration: 3e3
				}));
				const h = {
						subredditId: e,
						userId: m
					},
					g = await ((e, t) => Object(i.a)(e, {
						...l,
						variables: t
					}))(o(), h);
				if (g.ok) {
					if (!g.body) return void s(Object(r.f)({
						kind: p.b.Error,
						text: b._("Something went wrong", null, {
							hk: "28RRuF"
						}),
						duration: 3e3
					}));
					s(E({
						subredditId: e,
						forceRefresh: !0
					})), s(Object(r.f)({
						kind: p.b.SuccessMod,
						text: b._("User approved!", null, {
							hk: "PeRM2"
						}),
						duration: 3e3
					}))
				} else {
					const {
						errors: e
					} = g.body, t = e[0] ? e[0].message : b._("Something went wrong", null, {
						hk: "HsnIE"
					});
					s(Object(r.f)({
						kind: p.b.Error,
						text: t,
						duration: 3e3
					}))
				}
			}, k = (e, t) => async (s, n, a) => {
				let {
					gqlContext: o
				} = a;
				const l = {
						subredditId: e,
						userId: t
					},
					d = await ((e, t) => Object(i.a)(e, {
						...c,
						variables: t
					}))(o(), l);
				if (d.ok) {
					if (!d.body) return void s(Object(r.f)({
						kind: p.b.Error,
						text: b._("Something went wrong", null, {
							hk: "1o9j5I"
						}),
						duration: 3e3
					}));
					s(x({
						subredditId: e,
						userId: t
					})), s(Object(r.f)({
						kind: p.b.SuccessMod,
						text: b._("User removed from approved hosts list", null, {
							hk: "1RWvrp"
						}),
						duration: 3e3
					}))
				} else {
					const {
						errors: e
					} = d.body, t = e[0] ? e[0].message : b._("Something went wrong", null, {
						hk: "HsnIE"
					});
					s(Object(r.f)({
						kind: p.b.Error,
						text: t,
						duration: 3e3
					}))
				}
			}
		},
		"./src/reddit/actions/subredditModeration/mute.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "a", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./node_modules/lodash/get.js"),
				r = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t, s) => Object(l.a)(Object(d.a)(e, [c.a]), {
				endpoint: Object(m.a)(`${e.apiUrl}/api/v1/${t}/muted`),
				method: i.jb.GET,
				data: s
			});
			var p = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				b = s("./src/reddit/models/SubredditModeration/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(a.a)(f.Y),
				E = Object(a.a)(f.W),
				v = Object(a.a)(f.V),
				k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (s, n, a) => {
						let {
							apiContext: o
						} = a;
						const r = n(),
							i = t.after || "",
							l = Object(b.e)(e, i),
							d = r.pages.modHub.muted.fetchedTokens[l];
						if (r.pages.modHub.muted.api.pending[l] || d) return;
						s(x({
							subredditId: e,
							fetchedToken: i
						}));
						const c = r.subreddits.models[e].name,
							m = await u(o(), c, t);
						m.ok ? s(E({
							...m.body,
							fetchedToken: i
						})) : s(v({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				_ = Object(a.a)(f.bb),
				C = Object(a.a)(f.ab),
				y = Object(a.a)(f.Z),
				O = (e, t) => async (s, n, a) => {
					let {
						apiContext: o
					} = a;
					const r = n().subreddits.models[e].name,
						i = {
							username: Object(p.a)(t)
						};
					s(_());
					const l = await u(o(), r, i);
					l.ok ? s(C(l.body)) : s(y(l.error))
				}, j = Object(a.a)(f.X), w = Object(a.a)(f.cb), S = (e, t) => async (s, a, o) => {
					let {
						apiContext: m
					} = o;
					const u = a().subreddits.models[e].url,
						p = await ((e, t, s) => Object(l.a)(Object(d.a)(e, [c.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.jb.POST,
							data: {
								api_type: "json",
								id: s,
								type: "muted"
							}
						}))(m(), u, t);
					if (p.ok) s(w({
						subredditId: e,
						userId: t
					}));
					else {
						const e = r()(p, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(g.f)({
							kind: h.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, N = (e, t, s) => async (a, o, m) => {
					let {
						apiContext: b
					} = m;
					const f = o(),
						x = f.subreddits.models[e].url,
						E = f.subreddits.models[e].name;
					t = Object(p.a)(t);
					const v = await ((e, t, s, n) => Object(l.a)(Object(d.a)(e, [c.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: i.jb.POST,
						data: {
							api_type: "json",
							name: s,
							note: n,
							type: "muted"
						}
					}))(b(), x, t, s);
					if (v.ok) {
						const e = {
							username: t
						};
						a(Object(g.f)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Successfully muted a user", null, {
								hk: "2ypyuL"
							})
						}));
						const s = await u(b(), E, e);
						s.ok && a(j(s.body))
					} else {
						const e = r()(v, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(g.f)({
							kind: h.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				i = s.n(r);

			function l(e) {
				const {
					className: t,
					ctaExperimentDesign: s,
					children: n
				} = e, r = Object(o.a)(i.a.adLinkWrapper, t, {
					[i.a.ctaExperiment]: !!s,
					[i.a.borders]: "classic" === s,
					[i.a.borderTop]: "compact" === s || "conversation" === s,
					[i.a.borderBottom]: "card" === s
				});
				return a.a.createElement("div", {
					className: r
				}, n)
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				ctaExperimentLink: "a3FqJA6bjuoLKqPBEp52R",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				ctaExperimentNoPadding: "_2pWpf_lwFeF9qkMKAgnF1j",
				ctaExperimentPadded: "_3xECPPLU5gHGEwtMV_um7R",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: a
				} = e, {
					source: d,
					callToAction: m,
					caption: u
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "...");
				const b = Object(r.a)(c.a.leftSideContent, {
						[c.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[c.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					h = Object(r.a)(c.a.displayUrl, {
						[c.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: b
				}, u && !a && o.a.createElement("span", {
					className: c.a.caption,
					title: u
				}, u), o.a.createElement(l.a, {
					href: d.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: h
				}, p)), m && o.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					showCTAExperiment: !!e.ctaExperimentDesign
				}, m))
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_2MgVqpGJKTGicaQowt_R9h",
				primaryButton: "_2MgVqpGJKTGicaQowt_R9h"
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/TextButton/index.tsx"),
				u = s("./src/reddit/helpers/isValidUsername/index.tsx"),
				p = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				b = s("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.m.less"),
				h = s.n(b);
			const g = i.a.wrapped(c.l, "PrimaryButton", h.a);
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.onInputChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						e.onAddSubmitter(e.subredditId, t.username), e.sendEventWithName("add")(), e.toggleModal()
					}, this.state = {
						username: ""
					}
				}
				componentDidMount() {
					this.setState({
						username: this.props.username || ""
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(l.e, null, o.a.createElement(l.i, null, o.a.createElement(p.a, null, o.a.createElement(l.q, null, n.fbt._("Add approved user", null, {
						hk: "rVlIL"
					})), o.a.createElement(m.a, {
						onClick: e.toggleModal
					}, o.a.createElement(l.b, null)))), o.a.createElement(l.l, null, o.a.createElement(d.d, {
						placeholder: n.fbt._("Enter username", null, {
							hk: "4DdFFr"
						}),
						onChange: this.onInputChange,
						value: this.state.username,
						autoFocus: !0
					})), o.a.createElement(l.g, null, o.a.createElement(l.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(g, {
						onClick: this.onSubmit,
						"data-redditstyle": !0,
						disabled: !Object(u.a)(t.username)
					}, n.fbt._("Add user", null, {
						hk: "23A7cj"
					}))))
				}
			}
			t.a = Object(r.a)(f)
		},
		"./src/reddit/components/ApprovedSubmitterList/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "_1XoRj9AWrCZUnxJt2JB2QS",
				pencilIcon: "_1XoRj9AWrCZUnxJt2JB2QS",
				noPermissions: "_2LSmyOf3zXlFqKumLW0h7B"
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/subredditModeration/approvedSubmitters.ts"),
				p = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./src/reddit/components/HumanDate/index.tsx"),
				h = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				x = s("./src/reddit/components/Scroller/Simple.tsx"),
				E = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				v = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				k = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/models/SubredditModeration/index.ts"),
				O = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/lib/objectSelector/index.ts"),
				w = s("./src/reddit/components/InboxTooltip/Component.tsx");
			const S = Object(j.a)((e, t) => {
				let {
					subredditId: s
				} = t;
				const n = e.pages.modHub.approvedSubmitters.userOrder[s];
				return n ? n.map(t => e.pages.modHub.approvedSubmitters.models[s][t]) : w.a
			});
			var N = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				T = s("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx"),
				M = s("./src/reddit/components/ApprovedSubmitterList/index.m.less"),
				P = s.n(M);
			const R = 24,
				A = Object(I.u)({
					username: e => Object(I.X)(e).user
				}),
				F = Object(l.c)({
					approvedSubmitters: S,
					approvedSubmittersListPending: (e, t) => {
						let {
							subredditId: s
						} = t;
						const n = Object(y.e)(s);
						return !!e.pages.modHub.approvedSubmitters.api.pending[n]
					},
					isAddUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(O.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--RemoveUserConfirmation" === Object(O.a)(e),
					loadMoreToken: (e, t) => {
						let {
							subredditId: s
						} = t;
						return e.pages.modHub.approvedSubmitters.loadMore[s]
					},
					searchPending: e => !!e.pages.modHub.approvedSubmitters.search.api.pending,
					searchResult: e => e.pages.modHub.approvedSubmitters.search.result,
					currentUser: N.k
				}),
				D = Object(i.b)(F, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						addSubmitter: (t, s) => e(Object(u.a)(t, s)),
						loadMore: t => e(Object(u.b)(s, {
							after: t
						})),
						removeSubmitter: (t, s) => e(Object(u.d)(t, s)),
						searchForSubmitter: (t, s) => e(Object(u.c)(t, s)),
						toggleRemoveUserModal: () => e(Object(m.i)("ModerationPage--Modal--RemoveUserConfirmation")),
						toggleAddUserModal: () => e(Object(m.i)("ModerationPage--Modal--AddUser"))
					}
				});
			class L extends r.a.Component {
				constructor(e) {
					super(e), this.handleRemoveToggled = (e, t) => {
						this.setState({
							userId: e,
							username: t
						}), this.props.toggleRemoveUserModal()
					}, this.handleRemoveConfirmed = () => {
						this.state.userId && this.props.removeSubmitter(this.props.subredditId, this.state.userId)
					}, this.onSearch = e => {
						this.props.searchForSubmitter(this.props.subredditId, e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.onLoadMore = () => {
						this.props.loadMoreToken && this.props.loadMore(this.props.loadMoreToken)
					}, this.approveSubmitter = () => {
						this.props.sendEventWithName("open_add_dialog")(), this.props.toggleAddUserModal()
					}, this.renderUser = e => {
						var t, s;
						return r.a.createElement(k.b, {
							timeAgo: r.a.createElement(b.d, {
								seconds: e.approvedAtUTC
							}),
							pageName: c.gc.Contributors,
							primaryButton: (null === (t = this.props.currentUser) || void 0 === t ? void 0 : t.id) !== e.id ? r.a.createElement("a", {
								href: `${n.a.redditUrl}/message/compose/?to=${e.username}`,
								rel: "noopener noreferrer",
								target: "_blank"
							}, r.a.createElement(_.r, null, a.fbt._("Send message", null, {
								hk: "2bul7M"
							}))) : null,
							secondaryButton: (null === (s = this.props.moderatorPermissions) || void 0 === s ? void 0 : s.access) ? r.a.createElement(_.r, {
								onClick: () => this.handleRemoveToggled(e.id, e.username)
							}, a.fbt._("Remove", null, {
								hk: "3tYl0U"
							})) : null,
							subredditId: this.props.subredditId,
							userIcon: e.accountIcon,
							username: e.username
						})
					}, this.renderAddUserModal = () => r.a.createElement(T.a, {
						ignoreDefaultFocus: !0,
						onAddSubmitter: this.props.addSubmitter,
						sendEventWithName: this.props.sendEventWithName,
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleAddUserModal,
						username: this.props.username,
						withOverlay: !0
					}), this.state = y.a
				}
				componentDidMount() {
					this.props.username && this.approveSubmitter()
				}
				render() {
					var e;
					const {
						props: t,
						state: s
					} = this, o = t.approvedSubmitters.length ? t.approvedSubmitters[t.approvedSubmitters.length - 1].id : void 0, i = null === (e = t.moderatorPermissions) || void 0 === e ? void 0 : e.access;
					return t.approvedSubmitters.length ? r.a.createElement(r.a.Fragment, null, i && r.a.createElement(f.c, null, r.a.createElement(_.l, {
						onClick: this.approveSubmitter
					}, a.fbt._("Approve user", null, {
						hk: "2v6FxN"
					}))), r.a.createElement(f.a, {
						className: Object(d.a)(!i && P.a.noPermissions)
					}, r.a.createElement(f.b, null, a.fbt._("Approved users", null, {
						hk: "1alMeD"
					}), r.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009164452`
					})), r.a.createElement(v.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), s.searchTerm ? r.a.createElement(E.a, {
						cancelSearch: this.cancelSearch,
						noResultsFound: !t.searchResult,
						searchPending: t.searchPending,
						searchTerm: s.searchTerm
					}, t.searchResult && this.renderUser(t.searchResult)) : r.a.createElement(x.b, {
						loadMoreToken: o,
						onLoadMore: this.onLoadMore
					}, t.approvedSubmitters.map((e, t) => ({
						estHeight: R,
						id: e.id,
						render: () => this.renderUser(e)
					})))), t.isAddUserModalOpen && this.renderAddUserModal(), t.isConfirmModalOpen && s.userId && s.username && r.a.createElement(p.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						modalText: a.fbt._("Are you sure you want to remove {username} as an approved user?", [a.fbt._param("username", s.username)], {
							hk: "4ELjHt"
						}),
						onConfirm: this.handleRemoveConfirmed,
						toggleModal: t.toggleRemoveUserModal,
						trackClick: t.sendEventWithName("remove"),
						withOverlay: !0
					})) : r.a.createElement(r.a.Fragment, null, i && r.a.createElement(f.c, null, r.a.createElement(_.l, {
						onClick: this.approveSubmitter
					}, a.fbt._("Approve user", null, {
						hk: "1qX1LT"
					}))), r.a.createElement(f.a, {
						className: Object(d.a)(!i && P.a.noPermissions)
					}, r.a.createElement(f.b, null, a.fbt._("Approved users", null, {
						hk: "pxkv2"
					}), r.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009164452`
					})), t.approvedSubmittersListPending ? r.a.createElement(k.a, null) : r.a.createElement(h.c, {
						text: a.fbt._("No approved users in {subredditName}", [a.fbt._param("subredditName", t.subreddit.displayText)], {
							hk: "1VEG1v"
						})
					}, r.a.createElement(C.a, {
						name: "edit",
						className: P.a.PencilIcon
					}))), t.isAddUserModalOpen && this.renderAddUserModal())
				}
			}
			t.a = A(D(L))
		},
		"./src/reddit/components/BannedUserList/ExpandedComponent.m.less": function(e, t, s) {
			e.exports = {
				UnthreadedComment: "lOLiM3i26F_WjvQ8LeLft",
				unthreadedComment: "lOLiM3i26F_WjvQ8LeLft",
				BanReason: "SrZ1u3sJDzvdTgFW_XYZl",
				banReason: "SrZ1u3sJDzvdTgFW_XYZl",
				ExpandedComponentContainer: "_3q58C3lscUB_CbjoSfgVW2",
				expandedComponentContainer: "_3q58C3lscUB_CbjoSfgVW2",
				ModNote: "_3hA381rnksvJreaBfQTIC3",
				modNote: "_3hA381rnksvJreaBfQTIC3",
				ModNoteContainer: "_35E0y1j_QASeOMGpNM97k7",
				modNoteContainer: "_35E0y1j_QASeOMGpNM97k7",
				SectionTitle: "_3QIBdlHwReGVNodLBY3cSt",
				sectionTitle: "_3QIBdlHwReGVNodLBY3cSt",
				ContextContainer: "_1pqL5T1jpl-iWaJcvRftmU",
				contextContainer: "_1pqL5T1jpl-iWaJcvRftmU"
			}
		},
		"./src/reddit/components/BannedUserList/index.m.less": function(e, t, s) {
			e.exports = {
				BanIcon: "_1c2rKv1iuQylye8ejI6-1v",
				banIcon: "_1c2rKv1iuQylye8ejI6-1v"
			}
		},
		"./src/reddit/components/BannedUserList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return K
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/subredditModeration/ban.ts"),
				u = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				h = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				g = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = s("./src/reddit/components/Scroller/Simple.tsx"),
				x = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				E = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				k = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/SubredditModeration/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/bannedUser.ts"),
				j = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				w = s("./src/lib/lessComponent.tsx"),
				S = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				N = s("./src/reddit/components/CompactPost/index.tsx"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				T = s("./src/reddit/components/BannedUserList/ExpandedComponent.m.less"),
				M = s.n(T);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = Object(I.u)({
				currentProfileName: I.i,
				isCommentsPage: I.x,
				isCommentPermalink: I.w,
				isProfilePostListing: I.L,
				pageLayer: e => e
			}), A = w.a.wrapped(S.c, "UnthreadedComment", M.a), F = w.a.div("BanReason", M.a), D = w.a.div("ExpandedComponentContainer", M.a), L = w.a.div("ModNote", M.a), U = w.a.div("ModNoteContainer", M.a), B = w.a.div("SectionTitle", M.a), H = w.a.div("ContextContainer", M.a), W = e => () => {};
			var z = R(e => {
					const {
						currentProfileName: t,
						isCommentPermalink: s,
						isCommentsPage: n,
						isProfilePostListing: a,
						pageLayer: o,
						user: i
					} = e;
					return r.a.createElement(D, null, i.modNote && r.a.createElement(U, null, r.a.createElement(B, null, P._("Mod note:", null, {
						hk: "2LBtSw"
					})), r.a.createElement(L, null, i.modNote)), r.a.createElement("div", null, r.a.createElement(B, null, P._("Banned For:", null, {
						hk: "3UbXsX"
					})), r.a.createElement(F, null, i.reason), (i.postId || i.commentId) && r.a.createElement(H, null, i.postId && r.a.createElement(N.default, {
						currentProfileName: t,
						isCommentsPage: n,
						isCommentPermalink: s,
						isProfilePostListing: a,
						pageLayer: o,
						last: !0,
						postId: i.postId,
						hideModTools: !0,
						inSubredditOrProfile: !0
					}), i.commentId && r.a.createElement(A, {
						commentId: i.commentId,
						highlight: !1,
						trackClick: W
					}))))
				}),
				V = s("./src/reddit/components/BannedUserList/index.m.less"),
				q = s.n(V);
			const G = 48,
				K = e => null == e ? a.fbt._("Permanent", null, {
					hk: "3pNDzS"
				}) : a.fbt._({
					"*": "{number} days left",
					_1: "1 day left"
				}, [a.fbt._plural(e, "number")], {
					hk: "3VM32a"
				}),
				Q = Object(l.c)({
					bannedUsers: O.h,
					bannedUsersList: O.d,
					bannedUsersListPending: O.c,
					loadMoreToken: O.e,
					isBanUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(y.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--BanUserConfirmation" === Object(y.a)(e),
					searchPending: O.f,
					searchResult: O.g
				}),
				X = Object(i.b)(Q, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						loadMore: t => e(Object(m.c)(s, {
							after: t
						})),
						onUnbanUser: t => () => e(Object(m.e)(s, t)),
						searchForBannedUser: t => e(Object(m.d)(s, t)),
						toggleBanUserModal: () => e(Object(c.i)("ModerationPage--Modal--AddUser"))
					}
				});
			class J extends r.a.Component {
				constructor(e) {
					super(e), this.handleBanUserToggled = e => {
						if (e) {
							const {
								id: t,
								username: s
							} = e;
							this.setState({
								userId: t,
								username: s
							})
						} else this.setState({
							...C.a,
							searchTerm: this.state.searchTerm
						});
						this.props.isBanUserModalOpen || this.props.sendEventWithName(e ? "edit_user" : "ban_dialog_banpage")(), this.props.toggleBanUserModal()
					}, this.addBannedUser = () => this.handleBanUserToggled(null), this.onSearch = e => {
						this.props.searchForBannedUser(e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.onLoadMore = () => {
						this.props.loadMoreToken && this.props.loadMore(this.props.loadMoreToken)
					}, this.renderBannedUser = e => {
						const t = this.props.bannedUsers[e] || this.props.searchResult,
							s = K(t.duration);
						return t ? r.a.createElement(v.b, {
							description: t.reason,
							expandedComponent: r.a.createElement(z, {
								user: t
							}),
							pageName: d.gc.Banned,
							primaryButton: r.a.createElement(k.r, {
								onClick: () => this.handleBanUserToggled(t),
								"data-redditstyle": !0
							}, a.fbt._("Edit", null, {
								hk: "1nftDt"
							})),
							subredditId: this.props.subredditId,
							timeAgo: r.a.createElement(r.a.Fragment, null, r.a.createElement(p.d, {
								seconds: t.bannedAtUTC
							}), " (", s, ")"),
							userIcon: t.accountIcon,
							username: t.username
						}) : r.a.createElement("div", null)
					}, this.renderAddBannedUserModal = () => r.a.createElement(j.a, {
						ignoreDefaultFocus: !0,
						onUnbanUser: this.state.userId ? this.props.onUnbanUser(this.state.userId) : void 0,
						subredditId: this.props.subredditId,
						toggleModal: () => this.handleBanUserToggled(null),
						trackAddEvent: this.props.sendEventWithName("add_banpage"),
						trackEventWithName: this.props.sendEventWithName,
						user: this.state.userId ? this.state.searchTerm ? this.props.searchResult || null : this.props.bannedUsers[this.state.userId] : null,
						withOverlay: !0
					}), this.state = C.a
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.bannedUsersList.length ? e.bannedUsersList[e.bannedUsersList.length - 1].id : void 0;
					return e.bannedUsersList.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(k.l, {
						onClick: this.addBannedUser,
						"data-redditstyle": !0
					}, a.fbt._("Ban user", null, {
						hk: "2q7TuL"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Banned users", null, {
						hk: "3hvISm"
					}), r.a.createElement(h.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), r.a.createElement(E.b, {
						onSearch: this.onSearch,
						activeSearchQuery: this.state.searchTerm
					}), t.searchTerm ? r.a.createElement(x.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && this.renderBannedUser(e.searchResult.id)) : r.a.createElement(f.b, {
						loadMoreToken: s,
						onLoadMore: this.onLoadMore
					}, e.bannedUsersList.map(e => ({
						estHeight: G,
						id: e.id,
						render: () => this.renderBannedUser(e.id)
					})))), e.isBanUserModalOpen && this.renderAddBannedUserModal(), e.isConfirmModalOpen && t.userId && t.username && r.a.createElement(u.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						modalText: a.fbt._("Are you sure you want to ban {username}?", [a.fbt._param("username", t.username)], {
							hk: "4f7Mkp"
						}),
						onConfirm: () => {},
						toggleModal: e.toggleBanUserModal,
						trackClick: e.sendEventWithName("remove")
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(k.l, {
						onClick: this.addBannedUser,
						"data-redditstyle": !0
					}, " ", a.fbt._("Ban user", null, {
						hk: "2q7TuL"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Banned users", null, {
						hk: "3hvISm"
					}), r.a.createElement(h.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), e.bannedUsersListPending ? r.a.createElement(v.a, null) : r.a.createElement(b.c, {
						text: a.fbt._("No banned users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1nOcbC"
						})
					}, r.a.createElement(_.a, {
						name: "ban",
						className: q.a.BanIcon
					}))), e.isBanUserModalOpen && this.renderAddBannedUserModal())
				}
			}
			t.a = X(J)
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				ctaExperiment: "O3tUaKrd54EXILNilEqF_",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				l = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: s,
					...n
				} = e;
				return a.a.createElement(r.b, d({
					className: Object(o.a)(l.a.CallToActionButton, t, {
						[l.a.mNotCardView]: n.isNotCardView,
						[l.a.ctaExperiment]: !!s
					})
				}, n))
			}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				l = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(r.b, {
				className: Object(o.a)(e.className, l.a.container, e.text.length >= e.maxChars ? l.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/ads/index.ts"),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				c = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				h = s("./src/config.ts"),
				g = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/Econ/Audio/index.m.less"),
				E = s.n(x),
				v = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				k = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var C = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s
					} = t, o = () => Math.floor(10 * Math.random() + 1), i = Object(g.e)(f.db), [l, d] = Object(n.useState)(!1), [c, m] = Object(n.useState)(o());
					return Object(n.useEffect)(() => {
						const e = setInterval(() => {
							d(!0), setTimeout(() => d(!1), 3500), m(o())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == s ? void 0 : s.isLive) ? a.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: E.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, a.a.createElement("div", {
						className: E.a.classicSpeaker
					}, l && a.a.createElement(k.a, {
						className: Object(r.a)(E.a.speakerRings, {
							[E.a.nightMode]: i
						})
					}), a.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: E.a.snoovatar,
						src: `${h.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: _._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !l && a.a.createElement("div", {
						className: E.a.muteContainer
					}, a.a.createElement(v.a, {
						className: E.a.muteIcon
					})))) : a.a.createElement("div", {
						className: E.a.endedClassicContainer
					}, a.a.createElement(v.a, {
						className: E.a.muteIcon
					}))
				},
				y = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				O = s("./src/reddit/components/ExpandoButton/index.tsx"),
				j = s("./src/reddit/components/Flatlist/index.tsx"),
				w = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				N = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				I = s("./src/reddit/components/ModModeReports/index.tsx"),
				T = s("./src/reddit/components/ModModeReports/helpers.ts"),
				M = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				P = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				R = s("./src/reddit/components/PostContainer/index.tsx"),
				A = s("./src/reddit/components/PostMeta/index.tsx"),
				F = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				D = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				L = s("./src/reddit/components/PostTitle/index.tsx"),
				U = s("./src/reddit/components/PostTopMeta/index.tsx"),
				B = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				H = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				W = s("./src/reddit/models/Audio/index.ts"),
				z = s("./src/reddit/models/Media/index.ts"),
				V = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				q = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				G = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Q = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				X = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				J = s("./src/reddit/helpers/localStorage/index.ts"),
				Y = s("./src/reddit/helpers/search/renderMedia.tsx"),
				Z = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = s.n(ee),
				se = s("./src/reddit/components/ClassicPost/index.m.less"),
				ne = s.n(se);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: h,
					isExpanded: g,
					inSubredditOrProfile: f,
					eventFactory: x,
					first: E,
					flairStyleTemplate: v,
					formatTitle: k,
					hostPostData: _,
					isCheckboxSelected: q,
					isCurrentUserProfilePost: ee,
					isFrontpage: se,
					isGalleryTileLayoutDefault: oe,
					isLoggedIn: re,
					isOverlay: ie,
					imageGalleryCurrentItem: le,
					moderatorPermissions: de,
					modModeEnabled: ce,
					onClickPost: me,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					onSizeChanged: be,
					poll: he,
					post: ge,
					postId: fe,
					redditStyle: xe,
					scrollerItemRef: Ee,
					showBulkActionCheckbox: ve,
					showEditFlair: ke,
					showMedia: _e,
					shouldShowInsightsButton: Ce,
					subredditOrProfile: ye,
					toggleCheckbox: Oe,
					userIsOp: je,
					shouldShowGalleryTileOption: we,
					showPromotedCTA: Se,
					showCTAExperimentDesign: Ne
				} = e, Ie = Object(c.a)(), Te = Object(d.a)(g);
				Object(n.useEffect)(() => {
					be && Te !== g && be(ge.id)
				}, [g, be, ge.id, Te]);
				const Me = xe ? void 0 : v,
					Pe = s || void 0,
					Re = Object(X.a)(de),
					Ae = Object(K.a)(de),
					Fe = Object(Q.a)(de),
					De = ce && X.a,
					Le = Object(N.a)(ge),
					Ue = Object(T.c)(ge),
					Be = !!ge.media && ge.media.type === z.o.RTJSON,
					He = je && Be,
					We = f && !_e,
					ze = !!ge.media && Object(z.H)(ge.media),
					Ve = !!ge.recommendationContext,
					qe = {
						flairStyleTemplate: Me,
						post: ge,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: ee,
						isOverlay: ie,
						shouldShowSubscribeButton: !(se && re) || Ve && re,
						subredditOrProfile: ye
					},
					Ge = Object(o.t)(ge, le),
					{
						source: Ke
					} = Ge,
					[Qe, Xe] = Object(n.useState)(!1),
					Je = Object(n.useCallback)(() => {
						Xe(!Qe), Object(J.Mb)(), Ie(Object($.d)(fe))
					}, [Qe, fe, Ie]);
				let Ye = a.a.createElement(V.a, {
					className: ne.a.classicThumbnail,
					crosspost: Pe && ge,
					isMeta: ge.isMeta,
					post: Pe || ge,
					redditStyle: xe,
					templatePlaceholderImage: Me && Me.postPlaceholderImage,
					removeLink: ze
				});
				Object(W.b)(ge) && (Ye = a.a.createElement(C, {
					post: ge
				}));
				const Ze = a.a.createElement(R.a, {
					className: Object(r.a)(te.a.classicPostStyles, ne.a.postContainer, Object(Z.a)(e), {
						[ne.a.mFirst]: E,
						[ne.a.shouldShowOverflow]: Ce
					}, t),
					isOverlay: ie,
					style: {
						...Object(Z.d)(e),
						...Object(Z.b)(Me)
					},
					post: ge,
					onClick: me,
					eventFactory: x
				}, a.a.createElement(D.a, {
					model: ge,
					handleVote: h,
					showBulkActionCheckbox: ve,
					isCheckboxSelected: q,
					toggleCheckbox: Oe,
					flairStyleTemplate: Me,
					redditStyle: xe,
					postId: fe
				}), a.a.createElement(P.a, {
					className: Ce ? ne.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Me
				}, a.a.createElement(y.a, {
					className: ne.a.eventMeta,
					post: ge
				}), a.a.createElement("div", {
					className: ne.a.mainBody
				}, a.a.createElement("div", {
					className: We ? ne.a.expandoContainer : ne.a.thumbnailContainer
				}, !We && Ye, a.a.createElement(O.a, {
					crosspost: Pe,
					className: ne.a.rightExpando,
					isExpanded: !!g,
					post: ge,
					useMediaIcons: !1
				})), a.a.createElement("div", {
					className: Object(r.a)(ne.a.content, {
						[ne.a.showBulkActionCheckbox]: ve
					}),
					"data-click-id": "body"
				}, !!ge.recommendationContext && a.a.createElement(M.a, {
					content: ge.recommendationContext.content,
					layout: G.g.Classic,
					post: ge
				}), a.a.createElement(L.c, {
					className: he ? ne.a.titleWithPoll : void 0,
					format: k,
					poll: he,
					post: ge,
					redditStyle: xe,
					size: L.b.Medium,
					titleColor: Me && Me.postTitleColor,
					isOverlay: ie
				}, ge.source && !Pe && !ge.isSurveyAd && a.a.createElement(H.a, {
					href: ge.source.url,
					isSponsored: ge.isSponsored,
					postId: ge.id,
					source: ge.source
				}, Object(l.a)(ge))), a.a.createElement(A.a, ae({
					key: "PostMeta"
				}, qe)), ce && Re && Le && a.a.createElement(S.a, {
					thing: ge
				}), ce && Re && Ue && a.a.createElement(I.a, {
					onIgnoreReports: ue,
					reportable: ge
				}), Se && Ke && Ke.url && !ge.isSurveyAd && a.a.createElement(m.a, {
					ctaExperimentDesign: Ne && "classic",
					className: Object(r.a)(ne.a.adLinkWrapper, {
						[ne.a.ctaExperiment]: Ne
					})
				}, a.a.createElement(u.a, {
					post: ge,
					adLinkContent: Ge,
					ctaExperimentDesign: Ne && "classic"
				})), a.a.createElement("div", {
					className: ne.a.flatlistContainer
				}, a.a.createElement(O.a, {
					className: ne.a.leftExpando,
					crosspost: Pe,
					isExpanded: !!g,
					post: ge,
					useMediaIcons: !1
				}), a.a.createElement(p.a, {
					className: ne.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Me,
					model: ge,
					onVoteClick: h
				}), a.a.createElement(j.a, {
					className: ne.a.flatlistSeparator
				}), !ge.isSurveyAd && a.a.createElement(j.c, {
					className: ne.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Ae,
					hasModPostPerms: Re,
					hasModFullPerms: Fe,
					hostPostData: _,
					isOverlay: !!ie,
					modModeEnabled: ce,
					onClickInsightsButton: Je,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					post: ge,
					shouldShowInsightsButton: Ce,
					showEditPost: He,
					showEditFlair: ke,
					tooltipType: ie ? U.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(F.b)({
						editPost: !De,
						hide: !De,
						report: !De
					})
				})), a.a.createElement(w.d, null))), Object(Y.a)(ge, ne.a, Ee, g, we, oe), ye && Qe && a.a.createElement(b.a, {
					className: ne.a.creatorStatsContainer,
					post: ge,
					subreddit: ye,
					isOwnProfileStats: !0
				})));
				return a.a.createElement(B.b, null, Ze)
			});
			t.default = Object(q.a)(oe)
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/comment/moderation.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/helpers/trackers/modTools.ts"),
				f = s("./src/reddit/selectors/moderatingComments.ts"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				C = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				O = s("./src/reddit/icons/svgs/Show/index.tsx"),
				j = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				w = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				S = s.n(w);
			const N = Object(h.u)(),
				I = e => `Distinguish--Dropdown--${e}`,
				T = Object(i.c)({
					currentUser: v.k,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(f.a)(e, {
							commentId: s.id
						})
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(E.b)(I(s.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: s
						} = t;
						return Object(h.h)(e, t) || Object(x.n)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: h.U
				}),
				M = Object(r.b)(T, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(m.a)(s.id)),
						onDistinguishComment: (t, n) => e(Object(m.b)(s.id, t, n)),
						onLockComment: () => e(Object(m.c)(s.id)),
						onRemoveComment: () => e(Object(m.e)(s.id, !1)),
						onSpamComment: () => e(Object(m.e)(s.id, !0)),
						onShowComment: () => e(Object(m.d)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(u.h)({
							tooltipId: I(s.id)
						}))
					}
				});
			t.a = N(M(c.a.wrapped(Object(b.c)(e => {
				let {
					className: t,
					comment: s,
					currentUser: a,
					isCommentAuthor: r,
					collapsedBecauseCrowdControl: i,
					moderatorPermissions: c,
					modModeEnabled: m,
					onApproveComment: u,
					onDistinguishComment: b,
					onLockComment: h,
					onRemoveComment: f,
					onShowComment: x,
					onSpamComment: E,
					onToggleDistinguishDropdown: v,
					sendEvent: w,
					pageLayer: N,
					...I
				} = e;
				const T = Object(p.b)(s),
					M = s.isApproved && T,
					P = !s.isRemoved || s.bannedBy === d.k,
					R = i,
					A = e => w(Object(g.b)(e, s.id)),
					F = "chat_comments" === (null == N ? void 0 : N.queryParams.only);
				return o.a.createElement("div", {
					className: t
				}, (s.bannedBy || T) && o.a.createElement(j.a, {
					text: M ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						u(), F && w(Object(g.a)("approve", s.id)), A("approve")
					}
				}, o.a.createElement(k.a, {
					className: S.a.icon
				})), P && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.a, {
					text: s.bannedBy === d.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						f(), F && w(Object(g.a)("remove", s.id)), s.bannedBy === d.k ? A("confirm_remove") : A("remove")
					}
				}, o.a.createElement(C.a, {
					className: S.a.icon
				})), o.a.createElement(j.a, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						E(), A("spam")
					}
				}, o.a.createElement(y.a, {
					className: S.a.icon
				}))), o.a.createElement(j.a, {
					text: s.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), A(s.isLocked ? "unlock" : "lock")
					}
				}, o.a.createElement(_.a, {
					className: S.a.icon
				})), R && o.a.createElement(j.a, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						x()
					}
				}, o.a.createElement(O.a, {
					className: Object(l.a)(S.a.icon, S.a.Show)
				})))
			}), "CommentModToolsFlatlist", S.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, s) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				achievementFlair: "_2a_XgY10KOzM0PRvywwDuY",
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H",
				LastAuthorModNoteIcon: "_3TVHJ99XXRlGtv0wqGCBFy",
				lastAuthorModNoteIcon: "_3TVHJ99XXRlGtv0wqGCBFy"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, s) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, s) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, s) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, s) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, s) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, s) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				iconStyles: "S8WH2aCfP030wVxp0iR_o",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				NftAuthor: "kDnKKJWz2PJGoalLInCW1",
				nftAuthor: "kDnKKJWz2PJGoalLInCW1",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				m = s("./src/reddit/components/AuthorLink/index.tsx"),
				u = s("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = s.n(u);
			const b = e => {
				const {
					className: t,
					collapsed: s,
					comment: a,
					isAuthorDeleted: r,
					isCommentAuthorBlocked: i,
					isLivestreaming: d,
					isStrong: c,
					onClick: u,
					style: b
				} = e;
				return s && i ? o.a.createElement("p", {
					className: Object(l.a)(p.a.commentAuthorLink, t)
				}, n.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : o.a.createElement(m.a, {
					author: a.author,
					className: Object(l.a)(p.a.commentAuthorLink, t),
					isAuthorDeleted: r,
					isCommentAuthorBlocked: i,
					isLivestreaming: d,
					isStrong: c,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: u,
					style: b
				}, a.author)
			};
			var h = s("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				g = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = s("./src/reddit/components/Flair/index.tsx"),
				x = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				E = s("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				v = s("./src/reddit/components/PostTopMeta/index.tsx"),
				k = s("./src/reddit/controls/MetaData/index.tsx"),
				_ = s("./src/reddit/helpers/flair.ts"),
				C = s("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				y = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/models/Comment/index.ts"),
				j = s("./src/reddit/selectors/gold/powerups/index.ts"),
				w = s("./src/lib/constants/index.ts"),
				S = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				N = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				I = s("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				T = s.n(I);
			const M = e => {
				let {
					authorClassName: t,
					className: s,
					comment: n,
					collapsed: a,
					isLivestreaming: r,
					isStrong: i,
					onClick: d,
					renderedInOverlay: c
				} = e;
				const m = Object(O.f)(n),
					u = o.a.createElement(S.b, {
						ignore: m || !!n.distinguishType && n.distinguishType !== w.G.NONE,
						subredditId: n.subredditId,
						userId: n.authorId
					}, o.a.createElement(b, {
						className: t,
						collapsed: a,
						comment: n,
						isAuthorDeleted: Object(O.f)(n),
						isCommentAuthorBlocked: Object(O.g)(n),
						isLivestreaming: r,
						isStrong: i,
						onClick: d
					}));
				return m ? u : o.a.createElement(N.b, {
					className: Object(l.a)(T.a.authorHoverCard, s),
					collapsed: a,
					isCommentAuthorBlocked: Object(O.g)(n),
					postOrComment: n,
					tooltipType: c ? v.c.Lightbox : void 0
				}, u)
			};
			var P = s("./src/config.ts"),
				R = s("./src/reddit/actions/tooltip.ts"),
				A = s("./src/reddit/components/InfoTextTooltip/index.tsx");
			const F = function(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				return `${e}${t}${s?"inOverlay":""}`
			};
			var D = s("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				L = s.n(D);
			const U = e => {
				let {
					className: t,
					commentId: s,
					renderedInOverlay: a
				} = e;
				const i = Object(r.d)(),
					d = () => i(Object(R.h)({
						tooltipId: c
					})),
					c = F("CommentTopMeta--cakeday--", s, a),
					m = n.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					className: Object(l.a)(L.a.cakedayIcon, t),
					src: `${P.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: c,
					onMouseEnter: d,
					onMouseLeave: d,
					"data-testid": "cakeday-icon"
				}), o.a.createElement(A.c, {
					tooltipId: c,
					text: m
				}))
			};
			var B = s("./src/lib/addQueryParams/index.ts"),
				H = s("./src/reddit/actions/comment/index.ts"),
				W = s("./src/reddit/actions/post.ts"),
				z = s("./src/reddit/components/HumanDate/index.tsx"),
				V = s("./src/reddit/helpers/path/index.ts");
			const q = e => {
					const {
						className: t,
						comment: s,
						compact: n,
						onClick: a,
						permalink: i,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: d
					} = e, c = Object(r.d)(), m = F("CommentTopMeta--Created--", s.id, l), u = () => c(Object(R.h)({
						tooltipId: m
					}));
					return o.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(B.a)(i, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == a || a(e), G(c, s.id), d && (e.preventDefault(), c(Object(W.Z)(Object(V.b)(i), s.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, o.a.createElement(z.d, {
						seconds: s.created,
						shortenedUnit: n
					}), o.a.createElement(A.c, {
						tooltipId: m
					}, o.a.createElement(z.b, {
						seconds: s.created
					})))
				},
				G = (e, t) => {
					window.addEventListener("focus", (function s() {
						K(e, t, s)
					}))
				},
				K = (e, t, s) => {
					window.removeEventListener("focus", s), e(Object(H.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(H.h)({
						commentListNodeId: t
					})), 5e3)
				};
			var Q = s("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				X = s.n(Q);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Y = () => o.a.createElement(k.a, {
				className: X.a.crowdControlText
			}, J._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Z = s("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				$ = s.n(Z);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = e => {
				let {
					compact: t,
					editedAt: s
				} = e;
				return o.a.createElement(k.a, {
					className: $.a.editedText
				}, ee._("edited {time}", [ee._param("time", o.a.createElement(z.d, {
					seconds: s,
					shortenedUnit: t
				}))], {
					hk: "1tiB0u"
				}))
			};
			var se = s("./src/reddit/helpers/isRemoved.ts"),
				ne = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ae = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				oe = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				re = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				ie = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				le = s("./src/reddit/icons/fonts/Report/index.tsx"),
				de = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				ce = s("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = s.n(ce);
			const ue = e => {
				let {
					comment: t,
					ignoreLock: a,
					renderedInOverlay: i,
					isAdmin: l
				} = e;
				const d = Object(r.d)(),
					c = e => () => d(Object(R.f)({
						tooltipId: e
					})),
					m = () => d(Object(R.i)()),
					u = e => F(e, t.id, i),
					p = u("CommentTopMeta--Approve--"),
					b = u("CommentTopMeta--Remove--"),
					h = u("CommentTopMeta--Report--"),
					g = u("CommentTopMeta--Spam--"),
					f = c(b);
				return o.a.createElement(o.a.Fragment, null, (t.approvedBy || t.isApproved) && o.a.createElement(o.a.Fragment, null, o.a.createElement(oe.a, {
					className: me.a.approveIcon,
					desc: Object(ne.a)(t),
					id: p,
					onMouseEnter: c(p),
					onMouseLeave: m,
					isFilled: !0
				}), o.a.createElement(A.c, {
					tooltipId: p,
					text: Object(ne.a)(t)
				})), Object(se.a)(t) && o.a.createElement(o.a.Fragment, null, o.a.createElement(ie.a, {
					className: me.a.removeIcon,
					desc: Object(ne.b)(t),
					id: b,
					onMouseEnter: f,
					onMouseLeave: m,
					isFilled: !0
				}), o.a.createElement(A.c, {
					tooltipId: b,
					text: Object(ne.b)(t)
				})), Object(se.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => d(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, n.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(se.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: f,
					onMouseLeave: m
				}, n.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !a && o.a.createElement(re.a, {
					className: me.a.lockIcon,
					desc: n.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && o.a.createElement(o.a.Fragment, null, o.a.createElement(de.a, {
					className: me.a.spamIcon,
					desc: Object(ne.d)(t),
					id: g,
					onMouseEnter: c(g),
					onMouseLeave: m,
					isFilled: !0
				}), o.a.createElement(A.c, {
					tooltipId: g,
					text: Object(ne.d)(t)
				})), Object(ae.a)(t) && o.a.createElement(o.a.Fragment, null, o.a.createElement(le.a, {
					className: me.a.reportIcon,
					desc: Object(ne.c)(t.numReports),
					id: h,
					onMouseEnter: c(h),
					onMouseLeave: m,
					isFilled: !0
				}), o.a.createElement(A.c, {
					tooltipId: h,
					text: Object(ne.c)(t.numReports)
				})), t.isDeleted && l && o.a.createElement(o.a.Fragment, null, o.a.createElement(ie.a, {
					className: me.a.removeIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: me.a.userDeletion
				}, n.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var pe, be = s("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(pe || (pe = {}));
			var he = s("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ge = s.n(he);
			const fe = {
					[pe.Admin]: {
						color: be.c,
						getLabel: () => n.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => n.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: be.d,
						getLabel: () => n.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: be.a,
						getLabel: () => n.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => n.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: be.c,
						getLabel: () => n.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => n.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: be.a,
						getLabel: () => n.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => n.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				xe = e => {
					const t = Object(r.d)(),
						s = function(e) {
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === w.G.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!s) return null;
					if (s === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: n,
						color: a,
						getLabel: i,
						tooltipTemplate: d
					} = fe[s], c = i(), m = F(n, e.comment.id, e.renderedInOverlay), u = d(e), p = () => t(Object(R.h)({
						tooltipId: m
					}));
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
						className: Object(l.a)(ge.a.role, e.className),
						style: {
							color: a
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, o.a.createElement("span", null, c), s === pe.Mod && o.a.createElement(Ee, null)), o.a.createElement(A.c, {
						tooltipId: m,
						text: u
					}))
				},
				Ee = () => o.a.createElement("img", {
					alt: n.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: ge.a.modAchievement,
					src: `${P.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var ve = s("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ke = s.n(ve);
			const {
				fbt: _e
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ce = () => o.a.createElement(k.a, {
				className: ke.a.stickiedText
			}, _e._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ye = s("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Oe = s.n(ye);
			const je = e => {
				const {
					className: t,
					collapsed: s,
					collapsedBecauseCrowdControl: a,
					comment: i,
					flair: d,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: b,
					onCommentTimestampClick: w,
					permalink: S,
					renderContractorBadge: N,
					renderedInOverlay: I,
					subredditDisplayText: T,
					isAdmin: P
				} = e, R = Object(y.a)(), A = i.subredditId, F = Object(r.e)(e => Object(j.f)(e, {
					subredditId: A
				}));
				if (i.isDeleted && !P) return o.a.createElement("div", {
					className: Object(l.a)(Oe.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, o.a.createElement("span", {
					className: Oe.a.authorLine
				}, o.a.createElement("span", {
					className: Oe.a.metaText
				}, i.deletedBy === O.c.User ? n.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : n.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), o.a.createElement(k.c, {
					className: Oe.a.separator
				}), o.a.createElement(q, {
					key: "Created",
					className: Oe.a.metaText,
					comment: i,
					compact: !0,
					permalink: S,
					renderedInOverlay: I
				})));
				return o.a.createElement("div", {
					className: Object(l.a)(Oe.a.container, t),
					"data-testid": "post-comment-header"
				}, o.a.createElement("span", {
					className: Oe.a.authorLine
				}, !Object(O.f)(i) && o.a.createElement(g.b, {
					className: Oe.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), o.a.createElement("div", {
					className: Oe.a.baselineItem
				}, o.a.createElement(M, {
					authorClassName: Oe.a.author,
					collapsed: s,
					comment: i,
					isLivestreaming: p,
					onClick: b,
					renderedInOverlay: I
				})), !Object(O.f)(i) && u && o.a.createElement(E.a, {
					postOrComment: i,
					className: Oe.a.LastAuthorModNoteIcon
				}), a && o.a.createElement(Y, null), o.a.createElement(xe, {
					className: Oe.a.role,
					comment: i,
					subredditDisplayText: T,
					renderContractorBadge: N,
					renderedInOverlay: I
				}), i.isAuthorCakeday ? o.a.createElement(U, {
					className: Oe.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: I
				}) : !Object(O.f)(i) && F && o.a.createElement(h.a, {
					className: Oe.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						R(Object(C.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), o.a.createElement(x.a, {
					className: Oe.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), o.a.createElement(k.c, {
					className: Oe.a.separator
				}), o.a.createElement(q, {
					key: "Created",
					className: Oe.a.metaText,
					comment: i,
					compact: !0,
					onClick: w,
					permalink: S,
					renderedInOverlay: I
				}), i.isStickied && o.a.createElement(o.a.Fragment, null, o.a.createElement(k.c, {
					className: Oe.a.separator
				}), o.a.createElement(Ce, null)), i.editedAt && o.a.createElement(o.a.Fragment, null, o.a.createElement(k.c, {
					className: Oe.a.separator
				}), o.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), o.a.createElement(ue, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: I,
					isAdmin: P
				}), o.a.createElement(c.a, {
					thing: i,
					tooltipType: I ? v.c.Lightbox : void 0
				})), d && !Object(_.o)(d) && o.a.createElement("span", {
					className: Oe.a.userFlairLine
				}, o.a.createElement(f.b, {
					className: Oe.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var we = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Se = s("./src/reddit/selectors/economics.ts"),
				Ne = s("./src/reddit/models/Flair/index.ts"),
				Ie = s("./src/reddit/selectors/comments.ts"),
				Te = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Me = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Pe = s("./src/reddit/selectors/subreddit.ts"),
				Re = s("./src/reddit/selectors/userFlair.ts"),
				Ae = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Fe = s.n(Ae);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Le = d.a.wrapped(f.b, "RightPositionedAuthorFlair", Fe.a),
				Ue = d.a.span("DeletedText", Fe.a),
				Be = d.a.wrapped(k.a, "MetaSeparator", Fe.a),
				He = Object(r.b)(() => Object(i.c)({
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(Se.q)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(Pe.J)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Re.e)(e, {
							subredditId: s.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Ie.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Te.b,
					isBlockingInterstitialV2Enabled: Te.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Me.i)(e, s.subredditId)
					}
				}));
			t.a = He(e => {
				const {
					children: t,
					className: s,
					collapsed: n,
					collapsedBecauseCrowdControl: a,
					comment: r,
					commentPermalink: i,
					commentsPageKey: d,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: b,
					hideAwards: h = !1,
					ignoreFlairPosition: E,
					ignoreLock: _,
					isAdmin: C,
					isBlockingInterstitialEnabled: y,
					isBlockingInterstitialV2Enabled: j,
					isModWithUserNotesPermissions: w,
					isLivestreaming: S,
					isPostComment: N,
					onCommentAuthorClick: I,
					onCommentTimestampClick: T,
					renderContractorBadge: P,
					renderedInOverlay: R,
					subredditDisplayText: A,
					userHasNft: F
				} = e, D = o.a.createElement(o.a.Fragment, null, o.a.createElement(we.b, {
					commentId: r.id
				}), o.a.createElement(we.a, {
					commentId: r.id,
					commentsPageKey: d
				}));
				if (N) return o.a.createElement(o.a.Fragment, null, o.a.createElement(je, {
					className: Object(l.a)(s, {
						[Fe.a.collapsed]: n
					}),
					collapsed: n,
					collapsedBecauseCrowdControl: a,
					comment: r,
					flair: u || null,
					ignoreLock: _,
					isAdmin: C,
					isModWithUserNotesPermissions: w,
					isLivestreaming: S,
					onCommentAuthorClick: I,
					onCommentTimestampClick: T,
					permalink: i,
					renderContractorBadge: !!P,
					renderedInOverlay: R,
					subredditDisplayText: A
				}), D);
				if (r.isDeleted) return o.a.createElement(We, De({}, e, {
					className: Object(l.a)(s, Fe.a.container, {
						[Fe.a.collapsed]: n
					})
				}));
				if (n) return o.a.createElement(ze, De({}, e, {
					className: Object(l.a)(s, Fe.a.container, {
						[Fe.a.collapsed]: n
					})
				}));
				const L = !E && p === Ne.b.Left;
				return o.a.createElement("div", {
					className: Object(l.a)(s, Fe.a.container, {
						[Fe.a.collapsed]: n,
						[Fe.a.hasBadges]: b,
						[Fe.a.liveStreaming]: S
					}),
					"data-testid": "comment-top-meta"
				}, u && L && o.a.createElement(f.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(O.f)(r) && o.a.createElement(g.b, {
					className: Fe.a.userBadges,
					showAddCustom: !0,
					subredditId: r.subredditId,
					userId: r.authorId,
					uniqueIdentifier: r.id
				}), t && t, o.a.createElement(M, {
					authorClassName: F ? Fe.a.NftAuthor : void 0,
					collapsed: n,
					comment: r,
					isLivestreaming: S,
					isStrong: !!m,
					onClick: I,
					renderedInOverlay: R
				}), a && o.a.createElement(Y, null), a && o.a.createElement(k.c, {
					className: Fe.a.metaText,
					key: "crowdControlSeparator"
				}), u && !L && o.a.createElement(Le, {
					flair: u,
					forceSmallEmojis: m
				}), !m && o.a.createElement(x.a, {
					className: Fe.a.publicPoints,
					contentId: r.id,
					metaSeparator: o.a.createElement(k.c, {
						className: Fe.a.metaText
					}),
					subredditId: r.subredditId,
					userId: r.authorId,
					username: r.author
				}), D, o.a.createElement(xe, {
					className: Fe.a.authorRole,
					comment: r,
					subredditDisplayText: A,
					renderContractorBadge: !!P,
					renderedInOverlay: R
				}), !m && o.a.createElement(o.a.Fragment, null, !r.isDeleted && !N && o.a.createElement(o.a.Fragment, null, o.a.createElement(k.b, {
					className: Fe.a.metaText,
					isScoreHidden: r.isScoreHidden,
					score: r.score
				}), o.a.createElement(k.c, {
					className: Fe.a.metaText,
					key: "scoreCreatedSeparator"
				})), o.a.createElement(q, {
					key: "Created",
					className: Fe.a.MetaLink,
					comment: r,
					permalink: i,
					renderedInOverlay: R,
					isBlockingInterstitialEnabled: y || j
				}), r.isStickied && o.a.createElement(o.a.Fragment, null, o.a.createElement(k.c, {
					className: Fe.a.separator
				}), o.a.createElement(Ce, null)), r.editedAt && o.a.createElement(o.a.Fragment, null, o.a.createElement(k.c, {
					className: Fe.a.separator
				}), o.a.createElement(te, {
					editedAt: r.editedAt
				}))), o.a.createElement(ue, {
					comment: r,
					ignoreLock: _,
					renderedInOverlay: R
				}), !h && o.a.createElement(c.a, {
					thing: r,
					tooltipType: R ? v.c.Lightbox : void 0
				}))
			});
			const We = e => {
					const {
						childrenInfo: t,
						collapsed: s,
						className: a,
						comment: r,
						commentPermalink: i,
						isBlockingInterstitialEnabled: l,
						isBlockingInterstitialV2Enabled: d,
						renderedInOverlay: c
					} = e;
					return o.a.createElement("div", {
						className: a
					}, o.a.createElement(Ue, null, r.deletedBy === O.c.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), o.a.createElement(q, {
						key: "Created",
						className: Fe.a.MetaLink,
						comment: r,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: l || d
					}), s && Ve({
						childrenInfo: t
					}))
				},
				ze = e => {
					const {
						comment: t,
						className: s,
						childrenInfo: n,
						renderedInOverlay: a,
						collapsed: r,
						commentPermalink: i,
						isBlockingInterstitialEnabled: l,
						isBlockingInterstitialV2Enabled: d
					} = e;
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement("div", null, o.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(O.f)(t),
						collapsed: r
					})), o.a.createElement(k.b, {
						className: Fe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), o.a.createElement(k.c, {
						className: Fe.a.metaText,
						key: "scoreCreatedSeparator"
					}), o.a.createElement(q, {
						key: "Created",
						className: Fe.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: a,
						isBlockingInterstitialEnabled: l || d
					}), Ve({
						childrenInfo: n
					}))
				},
				Ve = e => {
					const {
						hasContinueThread: t,
						numChildren: s
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return o.a.createElement(Be, {
						className: Fe.a.metaText
					}, t ? n.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [n.fbt._plural(s, "number")], {
						hk: "13XC7a"
					}) : n.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [n.fbt._plural(s, "number")], {
						hk: "dhX9w"
					}))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, s) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U",
				userDeletion: "_1KVzcRpEm0U5vCgrZbgiyN"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, s) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, s) {
			e.exports = {
				VoteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				voteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				ContentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				contentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				CommentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				commentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				CommentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				commentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				CommentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				commentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				ParentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				parentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				Component: "_29-oldqrqqPwwjRRH0aLqU",
				component: "_29-oldqrqqPwwjRRH0aLqU"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return M
			})), s.d(t, "b", (function() {
				return A
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				l = s("./src/reddit/actions/comment/index.ts"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				m = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				p = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				b = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				h = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				g = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				f = s("./src/reddit/components/ModModeReports/index.tsx"),
				x = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				E = s("./src/reddit/components/RichTextJson/index.tsx"),
				v = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				k = s("./src/reddit/models/Vote/index.ts"),
				_ = s("./src/reddit/selectors/comments.ts"),
				C = s("./src/reddit/selectors/commentSelector.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				j = s.n(O),
				w = s("./src/lib/lessComponent.tsx");
			const S = w.a.div("VoteSpacer", j.a),
				N = w.a.div("ContentWrapper", j.a),
				I = w.a.div("CommentContentWrapper", j.a),
				T = w.a.div("CommentBody", j.a),
				M = w.a.div("ParentPostTitle", j.a),
				P = w.a.div("CommentParentWrapper", j.a),
				R = Object(r.c)({
					comment: (e, t) => Object(C.b)(e, t),
					commentPermalink: _.m,
					flair: _.e,
					subreddit: y.J
				}),
				A = Object(o.b)(R, (e, t) => {
					let {
						commentId: s,
						trackClick: n
					} = t;
					return {
						onIgnoreReports: () => e(Object(d.g)(s)),
						onVoteClick: t => {
							const [a, o] = t === k.a.upvoted ? [Object(l.r)(s), "upvote_comment"] : [Object(l.k)(s), "downvote_comment"];
							n(o)(), e(a)
						}
					}
				}),
				F = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = A(w.a.wrapped(e => {
				const {
					className: t,
					comment: s,
					commentPermalink: n,
					flair: o,
					hasReports: r,
					isCheckboxSelected: i = !1,
					onIgnoreReports: l,
					onVoteClick: d,
					showModTools: k,
					subreddit: _,
					showBulkActionCheckbox: C,
					toggleCheckbox: y
				} = e, O = Object(g.a)(s);
				return a.a.createElement(m.a, {
					className: t,
					clickTrackingId: s.id,
					permalink: n
				}, a.a.createElement(x.a, {
					model: s,
					handleVote: d,
					showBulkActionCheckbox: C,
					isCheckboxSelected: i,
					toggleCheckbox: y
				}), a.a.createElement(S, null, a.a.createElement(N, null, a.a.createElement(P, null, s.postTitle && a.a.createElement(M, null, s.postTitle), s.postAuthor && a.a.createElement(b.a, {
					comment: s
				})), a.a.createElement(I, null, a.a.createElement(u.a, {
					comment: s
				}, a.a.createElement(T, null, a.a.createElement(E.b, {
					content: Object(v.a)(s),
					mediaMetadata: s.media && s.media.mediaMetadata,
					rtJsonElementProps: F(e)
				})), a.a.createElement(p.a, {
					comment: s,
					flair: o,
					subredditName: _ ? _.displayText : null
				}), O && a.a.createElement(h.a, {
					thing: s
				}), r && a.a.createElement(f.a, {
					onIgnoreReports: l,
					reportable: s
				}), k && !s.isDeleted && a.a.createElement(c.a, {
					comment: s
				}))))))
			}, "Component", j.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				l = s("./src/reddit/helpers/overlay/index.ts");
			const d = Object(o.b)(null, e => ({
				openLightbox: t => e(Object(l.a)(t))
			}));
			class c extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: s,
						...n
					} = this.props, o = n => e(() => n.metaKey || n.ctrlKey || 1 === n.button ? window.open(Object(r.a)(t, {
						context: 3
					})) : s(Object(r.a)(t, {
						context: 3
					})))(n);
					return a.a.createElement("div", {
						className: n.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && o(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && o(e)
						}
					}, n.children)
				}
			}
			t.a = d(Object(i.a)(c))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = s.n(r);
			const l = o.a.div("DashWrapper", i.a);
			t.a = e => null === e.comment.parentId ? a.a.createElement(l, null, e.children) : a.a.createElement(l, null, a.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				subredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				TopMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				topMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				Inline: "meK3ndVOmnvQt6wVaAg5W",
				inline: "meK3ndVOmnvQt6wVaAg5W",
				PostedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				postedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				TextContainer: "iV3Hb5JWIQSpA3WhioY-N",
				textContainer: "iV3Hb5JWIQSpA3WhioY-N"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				i = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				d = s.n(l),
				c = s("./src/lib/lessComponent.tsx");
			const m = c.a.wrapped(i.a, "Inline", d.a),
				u = c.a.wrapped(i.a, "PostedInfo", d.a),
				p = c.a.wrapped(i.a, "SubredditWrapper", d.a),
				b = c.a.div("TextContainer", d.a),
				h = c.a.wrapped(r.a, "TopMeta", d.a);
			t.a = e => o.a.createElement(m, {
				className: e.className
			}, e.subredditName && o.a.createElement(p, null, e.subredditName && o.a.createElement(b, null, e.subredditName)), o.a.createElement(u, null, o.a.createElement(b, null, `${n.fbt._("Commented by",null,{hk:"4Dveap"})}`), o.a.createElement(h, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				AuthorLink: "_2jljMb6FK7HnIb15zmm1of",
				authorLink: "_2jljMb6FK7HnIb15zmm1of",
				SubredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				subredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				TextContainer: "_2in6k_0-sFgKVz16hifq03",
				textContainer: "_2in6k_0-sFgKVz16hifq03",
				SubredditIcon: "uCjYZbKNai0INWGwHjoUh",
				subredditIcon: "uCjYZbKNai0INWGwHjoUh",
				Inline: "_2VWXAfRlnHG_4nydI7J4l3",
				inline: "_2VWXAfRlnHG_4nydI7J4l3"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/AuthorLink/index.tsx"),
				r = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				c = s.n(d),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = u.a.wrapped(o.a, "AuthorLink", c.a), h = u.a.wrapped(l.a, "Inline", c.a), g = u.a.wrapped(l.a, "SubredditWrapper", c.a), f = u.a.div("TextContainer", c.a), x = u.a.wrapped(i.b, "SubredditIcon", c.a);
			t.a = e => a.a.createElement(h, null, e.subredditOrProfile && a.a.createElement(g, null, e.subredditOrProfile && a.a.createElement(x, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && a.a.createElement(f, null, e.subredditOrProfile.displayText)), p._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && a.a.createElement(r.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, a.a.createElement(b, {
				author: e.comment.postAuthor,
				isUnstyled: !0,
				isAuthorDeleted: e.comment.postAuthor === m.E
			}, `u/${e.comment.postAuthor}`)))
		},
		"./src/reddit/components/CommonAutocompleteDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				autocompleteLabel: "_39qccdns_RvOZZlRIIVGoK",
				locked: "_2WupD4z680kgaOvurMIh3K",
				labelIcon: "_3dK0j9mvmwPub-EQjQEF-f",
				lockIcon: "m15TxfKz9KwlKtTpuUOGU",
				autocompleteInput: "_2DhRYyE3X6UOdxywO4xoas",
				autocompleteInput__no_icon: "_2gDZgLjG5_0otT8r_3nrX9",
				autocompleteInputNoIcon: "_2gDZgLjG5_0otT8r_3nrX9",
				autocompleteInput__disabled: "_2y-MwvP_24hapwkGLPhGNv",
				autocompleteInputDisabled: "_2y-MwvP_24hapwkGLPhGNv",
				autocompleteInputContainer: "_3G7m5yzFmzVctZTxy3ZUkf",
				autocompleteDropdown: "nUeCIjmjHU-llTCBuUdnn",
				autocompleteDropdownItem: "_3eWYFOsdnA9K-Jw8qXFbfH",
				autocompleteDropdownItem__rtl: "_3e5-Tc_WqzN-NNzAg8R7T6",
				autocompleteDropdownItemRtl: "_3e5-Tc_WqzN-NNzAg8R7T6",
				autocompleteDropdownItem__icon: "_1x6PJuPScW1xzB8k-WzEN",
				autocompleteDropdownItemIcon: "_1x6PJuPScW1xzB8k-WzEN",
				highlight: "_2cIM3xprCSzGFYnQGsdVSL",
				selected: "_1EEVp702_ABu8mple5Dpfk"
			}
		},
		"./src/reddit/components/CommunityAwardList/AwardRow/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_1SJYzo3UAyKEOF7dfuB9mj",
				awardName: "KMxVBNnYo_dcBwZGB9Y7a",
				unfilledAward: "_3s20dmDQOAFnj9VBvMb_K9",
				awardDetail: "_2NA5kHSdCz8PTAq-oiC2lE",
				awardExpiresDetail: "_23IvuOow0OJsmKnkmU_FEX",
				headerRow: "_1NbiD8qa7KncC2IlK9RoSb",
				awardIconImage: "_3sB_KQUJdYFc6cPgCjizd4",
				deleteIcon: "_1Aox5T2z7StzW_M0WfnDTe",
				rightAlign: "_3MpqTEDv3tS3-u-1uNAt6Y",
				createButton: "_3pXwHsShRJ0s12b9e-_gCX",
				emptyIcon: "yy-p6aZDVdPVBPBYMhbEy",
				emptyDetails: "LUZArpcpRdOTEPUDrjKVR",
				awardLoadingContainer: "_2WNYZIJMYIXJIS_IJIIiTe"
			}
		},
		"./src/reddit/components/CommunityAwardList/AwardSettings/index.m.less": function(e, t, s) {
			e.exports = {
				awardToggleContainer: "_2E_k43b0N9nhGQKfSvT_c_",
				emptyToggleContainer: "_1lQVQi-D8yElpWeJLbrix0",
				emptyToggleContainerLabel: "_2Porr9EjtYqQt8OhMaCU3h",
				optionalAwardInfo: "ZViyY3IDk7c6MplUKuCKa",
				awardToggleItem: "XwXRf6eWep27jKV1kkNDN",
				awardToggleLabelItem: "_2d9jt8apy5IwNRPdrC_RtG",
				awardIconWrapper: "_3DGDvlViP1uosxrUobijCu",
				awardIcon: "_10ar4v6qlEgLvqEhxk_wyP",
				awardInfoWrapper: "_2LxUe9vOie60H44Rkl5YYd",
				awardToggleItemDisabled: "_1touzuLFgoSGqEcDiLDD00",
				awardTitle: "_1fG-NkjOvo6khgB4qJmizu",
				awardDescription: "_2VABiA5W4pgqWyCK_oV4Hg"
			}
		},
		"./src/reddit/components/CommunityAwardList/index.m.less": function(e, t, s) {
			e.exports = {
				contentContainer: "_27C02100EX-RnLoDyL_PYT",
				gildIcon: "_3f4YbBVVbX4YXols-8AmgC",
				infoIcon: "_1HPeb_FxEOzicQ4BuIVonK",
				pageInfo: "_2bEhfADeSjJE-8zKoxjbGy",
				awardToDelete: "dzAx082Iu3F9M7xS-PL80",
				awardToDeleteIcon: "_11ikfBu3qqa0paYAJLQINO"
			}
		},
		"./src/reddit/components/CommunityAwardList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/constants/gold.ts"),
				u = s("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				p = s("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				b = s("./src/reddit/helpers/correlationIdTracker.ts"),
				h = s("./src/reddit/helpers/trackers/communityAwards.ts"),
				g = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/makeAsync.tsx")),
				f = s("./src/lib/loadWithRetries/index.ts");
			var x = Object(g.a)({
					getComponent: () => Object(f.a)(() => Promise.all([s.e("AwardCreationModal").then(s.bind(null, "./src/reddit/components/AwardCreationModal/index.tsx"))])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				E = s("./src/reddit/models/Gold/Award.ts"),
				v = s("./src/reddit/components/ConfirmModal/index.tsx"),
				k = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				_ = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./node_modules/lodash/times.js"),
				w = s.n(j),
				S = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/controls/Button/index.tsx"),
				I = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				T = s("./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts"),
				M = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				P = s("./src/reddit/components/CommunityAwardList/AwardRow/index.m.less"),
				R = s.n(P);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = () => o.a.createElement("div", {
				className: R.a.row
			}, o.a.createElement("div", {
				className: R.a.awardName
			}, o.a.createElement("div", {
				className: R.a.emptyDetails
			})), o.a.createElement("div", {
				className: R.a.awardDetail
			}, o.a.createElement("div", {
				className: R.a.emptyIcon
			})), o.a.createElement("div", {
				className: R.a.awardDetail
			}, o.a.createElement("div", {
				className: R.a.emptyDetails
			})), o.a.createElement("div", {
				className: R.a.awardDetail
			}, o.a.createElement("div", {
				className: R.a.emptyDetails
			}))), D = e => o.a.createElement("div", {
				className: Object(S.a)(e.className, R.a.awardLoadingContainer)
			}, w()(10, e => o.a.createElement(F, {
				key: e
			}))), L = e => {
				let {
					subredditId: t
				} = e;
				return o.a.createElement("div", {
					className: R.a.headerRow
				}, o.a.createElement("div", {
					className: R.a.awardName
				}, A._("Name", null, {
					hk: "2rgEdc"
				})), o.a.createElement("div", {
					className: R.a.awardDetail
				}, A._("Icon", null, {
					hk: "zWzOj"
				})), o.a.createElement("div", {
					className: R.a.awardDetail
				}, A._("Coins", null, {
					hk: "2uhz31"
				})), o.a.createElement("div", {
					className: R.a.awardDetail
				}, A._("Type", null, {
					hk: "1rYgKO"
				})), Object(T.a)(t) && o.a.createElement("div", {
					className: R.a.awardDetail
				}, A._("Starts", null, {
					hk: "HW61W"
				})), Object(T.a)(t) && o.a.createElement("div", {
					className: R.a.awardDetail
				}, A._("Expires", null, {
					hk: "3hS2VX"
				})))
			}, U = e => {
				let {
					date: t
				} = e;
				return o.a.createElement("div", {
					className: R.a.awardExpiresDetail
				}, t && t.toLocaleString())
			}, B = e => o.a.createElement("div", {
				className: R.a.row
			}, o.a.createElement("div", {
				className: Object(S.a)(R.a.awardName, R.a.unfilledAward)
			}, A._({
				"*": "Create up to {quantity} more {coin-price} Coin Awards",
				_1: "Create up to {quantity} more {coin-price} Coin Award"
			}, [A._param("quantity", e.quantity), A._param("coin-price", e.coinPrice), A._plural(e.quantity)], {
				hk: "4nSQI7"
			})), o.a.createElement(M.a, {
				className: R.a.rightAlign
			}, o.a.createElement(N.l, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, A._("Create", null, {
				hk: "3aEi77"
			})))), H = e => o.a.createElement("div", {
				className: R.a.row
			}, o.a.createElement("div", {
				className: Object(S.a)(R.a.awardName, R.a.unfilledAward)
			}, A._("Create a Moderator-Only Award", null, {
				hk: "3aMmTo"
			})), o.a.createElement(M.a, {
				className: R.a.rightAlign
			}, o.a.createElement(N.l, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, A._("Create", null, {
				hk: "3aEi77"
			})))), W = e => o.a.createElement("div", {
				className: R.a.row
			}, o.a.createElement("div", {
				className: Object(S.a)(R.a.awardName, R.a.unfilledAward)
			}, A._("Create an Award", null, {
				hk: "1zGxjw"
			})), o.a.createElement(M.a, {
				className: R.a.rightAlign
			}, o.a.createElement(N.l, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, A._("Create", null, {
				hk: "3aEi77"
			}))));
			class z extends o.a.Component {
				constructor() {
					super(...arguments), this.onDelete = e => {
						e.preventDefault(), this.props.onDelete(this.props.award.id)
					}
				}
				render() {
					const {
						award: e,
						canDelete: t,
						iconUrl: s,
						subredditId: n
					} = this.props, a = Object(T.a)(n), r = e.startsAt ? new Date(e.startsAt) : void 0, i = e.endsAt ? new Date(e.endsAt) : void 0;
					return o.a.createElement("div", {
						className: R.a.row
					}, o.a.createElement("div", {
						className: R.a.awardName
					}, e.name), o.a.createElement("div", {
						className: R.a.awardDetail
					}, o.a.createElement("img", {
						className: R.a.awardIconImage,
						src: s,
						title: e.name
					})), o.a.createElement("div", {
						className: R.a.awardDetail
					}, e.coinPrice || 0), o.a.createElement("div", {
						className: R.a.awardDetail
					}, e.awardType === E.f.Moderator ? A._("Mod only", null, {
						hk: "UxkP0"
					}) : A._("All", null, {
						hk: "2J55F0"
					})), a && [o.a.createElement(U, {
						key: "startDate",
						date: r
					}), o.a.createElement(U, {
						key: "endDate",
						date: i
					})], o.a.createElement(M.a, {
						className: R.a.rightAlign
					}, t && o.a.createElement("a", {
						href: ".",
						onClick: this.onDelete
					}, o.a.createElement(I.b, {
						className: R.a.deleteIcon
					}))))
				}
			}
			var V = z,
				q = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				G = s("./src/reddit/hooks/useTracking.ts"),
				K = s("./src/reddit/selectors/communityAwards.ts"),
				Q = s("./src/reddit/selectors/gold/awardIcon.ts"),
				X = s("./src/reddit/components/CommunityAwardList/AwardSettings/index.m.less"),
				J = s.n(X);
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Z = e => {
				let {
					award: t,
					iconUrl: s
				} = e;
				return o.a.createElement("div", {
					className: J.a.awardToggleLabelItem
				}, o.a.createElement("div", {
					className: J.a.awardIconWrapper
				}, o.a.createElement("img", {
					className: J.a.awardIcon,
					src: s
				})), o.a.createElement("div", {
					className: J.a.awardInfoWrapper
				}, o.a.createElement("div", {
					className: J.a.awardTitle
				}, t.name), o.a.createElement("div", {
					className: J.a.awardDescription
				}, t.description)))
			};
			var $ = e => {
					let {
						subredditOrProfile: t,
						subredditOrProfileId: s,
						moderatorPermissions: n
					} = e;
					const a = Object(r.d)(),
						i = Object(G.a)(),
						d = Object(r.e)(e => Object(K.f)(e, {
							subredditOrProfileId: s
						})),
						c = Object(r.e)(e => Object(K.d)(e, {
							subredditOrProfileId: s
						})),
						m = Object(r.e)(e => Object(Q.b)(e, {
							awards: d,
							minSize: 64
						}));
					if (!d.length) return o.a.createElement("div", {
						className: J.a.emptyToggleContainer
					}, o.a.createElement("div", {
						className: J.a.emptyToggleContainerLabel
					}, c ? Y._("Pending", null, {
						hk: "1heuFt"
					}) : Y._("No Awards currently available for configuration. Please try again later.", null, {
						hk: "3BsFsT"
					})));
					const u = n && n.all;
					return o.a.createElement("div", {
						className: J.a.awardToggleContainer
					}, o.a.createElement("div", {
						className: J.a.optionalAwardInfo
					}, Y._("Toggle whether these awards are available in your community. If disabled, they cannot be given on any posts or comments.", null, {
						hk: "4e1OPL"
					})), o.a.createElement("div", null, d.map(e => o.a.createElement(q.p, {
						key: e.id,
						on: e.isEnabled,
						forceOn: e.isEnabled,
						className: Object(S.a)(J.a.awardToggleItem, {
							[J.a.awardToggleItemDisabled]: !e.isEnabled
						}),
						label: o.a.createElement(Z, {
							award: e,
							iconUrl: m[e.id]
						}),
						onClick: () => (e => {
							const n = e.isEnabled ? l.g : l.h,
								o = e.isEnabled ? h.h : h.i;
							i(o(e, s)), u && a(n(t, e))
						})(e),
						disabled: !u
					}))))
				},
				ee = s("./src/reddit/components/CommunityAwardList/index.m.less"),
				te = s.n(ee);
			const se = Object(i.c)({
					awardIcons: (e, t) => {
						let {
							subredditOrProfileId: s
						} = t;
						const n = Object(K.e)(e, {
							subredditOrProfileId: s
						});
						return Object(Q.b)(e, {
							awards: n,
							minSize: 32
						})
					},
					awards: K.e,
					awardsPending: K.d,
					communityAwardsDisabled: K.b,
					isAddAwardModalOpen: e => Object(O.a)(e) === m.a,
					isConfirmModalOpen: e => Object(O.a)(e) === m.b
				}),
				ne = Object(r.b)(se, (e, t) => {
					let {
						subredditOrProfileId: s
					} = t;
					return {
						deleteAward: t => e(Object(l.j)(s, t)),
						toggleAddAwardModal: () => e(Object(d.i)(m.a)),
						toggleConfirmModal: () => e(Object(d.i)(m.b)),
						toggleTooltip: t => e(Object(c.h)({
							tooltipId: t
						}))
					}
				}),
				ae = {
					awardId: null,
					selectedCoinPrice: void 0,
					selectedModOnly: void 0
				};
			class oe extends o.a.Component {
				constructor(e) {
					super(e), this.openAddAwardModal = (e, t) => {
						Object(b.d)(b.a.AwardCreationFlow), this.props.sendEvent(Object(h.e)()), this.setState({
							selectedCoinPrice: e,
							selectedModOnly: t
						}, this.props.toggleAddAwardModal)
					}, this.openDeleteAwardModal = e => {
						Object(b.d)(b.a.AwardDeletionFlow), this.props.toggleConfirmModal(), this.setState({
							awardId: e
						})
					}, this.confirmDeleteAward = () => {
						const {
							awardId: e
						} = this.state, {
							awards: t
						} = this.props;
						if (this.props.toggleConfirmModal(), e) {
							const s = t.filter(t => t.id === e)[0];
							s && this.props.sendEvent(Object(h.g)(s)), this.props.deleteAward(e), Object(b.b)(b.a.AwardDeletionFlow)
						}
					}, this.renderAwardSlotRow = e => {
						const {
							awardIcons: t,
							awards: s,
							moderatorPermissions: n,
							subredditOrProfileId: a
						} = this.props, r = !(!n || !n.all);
						if (!e.filled && s.length < m.d) return o.a.createElement(B, {
							coinPrice: e.price,
							key: e.price,
							onCreate: () => this.openAddAwardModal(e.price),
							quantity: e.quantity
						});
						if (!e.filled) return null;
						const {
							award: i
						} = e, l = t[i.id];
						return o.a.createElement(V, {
							key: i.id,
							award: i,
							canDelete: r,
							onDelete: this.openDeleteAwardModal,
							iconUrl: l,
							subredditId: a
						})
					}, this.renderAwardToDelete = () => {
						const {
							awards: e
						} = this.props, {
							awardId: t
						} = this.state;
						if (!t) return null;
						const s = e.filter(e => e.id === t)[0];
						return s ? o.a.createElement("div", {
							className: te.a.awardToDelete
						}, o.a.createElement("span", null, n.fbt._("Remove:", null, {
							hk: "1Y4r4o"
						})), o.a.createElement("img", {
							src: s.icon.url,
							className: te.a.awardToDeleteIcon
						}), o.a.createElement("span", null, s.name)) : null
					}, this.renderInfo = () => o.a.createElement("div", {
						className: te.a.pageInfo
					}, o.a.createElement(y.a, {
						name: "info",
						className: te.a.infoIcon
					}), o.a.createElement("p", null, n.fbt._("Community Awards are unique to each community, and members can give them to each other. Moderators can design and name the Awards however they want.", null, {
						hk: "1mzX5Y"
					})), o.a.createElement("p", null, n.fbt._("A portion of Coins from Community Award purchases will be deposited to the community’s Coin balance. Moderators can use Coins from that balance to reward members with Mod Awards. The Coin balance is shown only to moderators in the community’s sidebar", null, {
						hk: "2TVMDb"
					}))), this.state = ae
				}
				renderAwardsList() {
					const {
						awards: e,
						awardsPending: t,
						moderatorPermissions: s,
						subredditOrProfileId: n
					} = this.props;
					if (t) return o.a.createElement(D, null);
					const a = Object(p.a)(n),
						r = s && s.all,
						i = this.getAwardSlots().filter(e => r && !a || e.filled),
						l = e.filter(e => e.awardType === E.f.Moderator),
						d = e.length < m.d && l.length < m.e && r && !a;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(L, {
						subredditId: n
					}), a && o.a.createElement(W, {
						onCreate: () => this.openAddAwardModal()
					}), i.map(this.renderAwardSlotRow), d && o.a.createElement(H, {
						onCreate: () => this.openAddAwardModal(void 0, !0)
					}), this.renderInfo())
				}
				getAwardSlots() {
					const {
						awards: e
					} = this.props, t = Object(E.l)(e), s = e => e.filled && e.award.awardType === E.f.Moderator;
					return t.sort((e, t) => s(e) && !s(t) ? 1 : s(t) && !s(e) ? -1 : e.price !== t.price ? e.price - t.price : e.filled && !t.filled ? -1 : (t.filled && e.filled, 1))
				}
				render() {
					const {
						communityAwardsDisabled: e,
						isAddAwardModalOpen: t,
						isConfirmModalOpen: s,
						moderatorPermissions: a,
						subredditOrProfile: r,
						subredditOrProfileId: i,
						toggleAddAwardModal: l,
						toggleConfirmModal: d
					} = this.props, {
						awardId: c,
						selectedCoinPrice: m,
						selectedModOnly: p
					} = this.state, h = r.isNSFW || e;
					return o.a.createElement(o.a.Fragment, null, Object(u.a)(r) && o.a.createElement(_.a, {
						className: te.a.contentContainer
					}, o.a.createElement(_.b, null, n.fbt._("Community Awards", null, {
						hk: "lraSi"
					})), h ? this.renderBlacklistedView() : this.renderAwardsList()), o.a.createElement(_.a, {
						className: te.a.contentContainer
					}, o.a.createElement(_.b, null, n.fbt._("Enable/Disable Awards", null, {
						hk: "1IRmfG"
					})), o.a.createElement($, {
						subredditOrProfile: r,
						subredditOrProfileId: i,
						moderatorPermissions: a
					})), t && o.a.createElement(x, {
						defaultCoinPrice: m,
						defaultModOnly: p,
						subredditId: i,
						toggleModal: () => {
							l(), Object(b.b)(b.a.AwardCreationFlow)
						}
					}), s && c && o.a.createElement(v.a, {
						acceptText: n.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						cancelText: n.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: n.fbt._("Delete Award", null, {
							hk: "7q2D7"
						}),
						message: n.fbt._("Deleting an Award will remove the option for members of your community to give the Award. Existing Awards will remain on the posts and comments that have received them.", null, {
							hk: "3tX5sQ"
						}),
						onAccept: this.confirmDeleteAward,
						onCancel: d,
						onClose: d,
						onOverlayClick: d,
						withOverlay: !0
					}, this.renderAwardToDelete()))
				}
				renderBlacklistedView() {
					return o.a.createElement(k.c, {
						text: n.fbt._("Community Awards have been disabled for this community.", null, {
							hk: "2g21s6"
						})
					}, o.a.createElement(y.a, {
						name: "award",
						className: te.a.gildIcon
					}))
				}
			}
			t.a = ne(Object(C.c)(oe))
		},
		"./src/reddit/components/CommunitySettings/CountrySiteSettings/index.m.less": function(e, t, s) {
			e.exports = {
				countrySiteForm: "_3EwDpZ19gPFB461uuy7iGL",
				dropdownContainer: "_3XPnIpveWFDgMhBmnMyd9e",
				innerFlexboxContainer: "_1tHvQJ3zvN2gjV9HDwzxRj"
			}
		},
		"./src/reddit/components/CommunitySettings/ModPnSettings/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-CommunitySettings-ModPnSettings",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-CommunitySettings-ModPnSettings").then(s.bind(null, "./src/reddit/components/CommunitySettings/ModPnSettings/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunitySettings/ModPnSettings/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/CommunitySettings/components.m.less": function(e, t, s) {
			e.exports = {
				InputField: "_3V4RO9mtZyZCWAu4P0ST4A",
				inputField: "_3V4RO9mtZyZCWAu4P0ST4A",
				FormContainer: "_37sNfY6fNJVPqyQXOHlg3K",
				formContainer: "_37sNfY6fNJVPqyQXOHlg3K"
			}
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "l", (function() {
				return d
			})), s.d(t, "m", (function() {
				return c
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "i", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "j", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const a = 500,
				o = 100,
				r = 5e3,
				i = 0,
				l = 1440,
				d = 36600,
				c = 1e9,
				m = {
					disabled: n.fbt._("Disabled", null, {
						hk: "1KaunG"
					}).toString(),
					modonly: n.fbt._("Mods only", null, {
						hk: "2yA6R8"
					}).toString(),
					anyone: n.fbt._("Anyone", null, {
						hk: "4gPsEy"
					}).toString()
				},
				u = [n.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), n.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), n.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				p = {
					any: n.fbt._("Any", null, {
						hk: "hVUT8"
					}),
					link: n.fbt._("Links only", null, {
						hk: "3upkyk"
					}),
					self: n.fbt._("Text posts only", null, {
						hk: "1VZn8Y"
					})
				},
				b = [n.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), n.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), n.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				h = {
					mods: n.fbt._("Moderators", null, {
						hk: "2rrkiT"
					}),
					anyone: n.fbt._("Anyone", null, {
						hk: "Xp8Fs"
					})
				},
				g = {
					low: n.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					high: n.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					all: n.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				f = {
					low: n.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					high: n.fbt._("High", null, {
						hk: "ABfkc"
					}),
					all: n.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				x = {
					nullValue: n.fbt._("none (recommended)", null, {
						hk: "2FMwQH"
					}),
					confidence: n.fbt._("best", null, {
						hk: "13cLYH"
					}),
					old: n.fbt._("old", null, {
						hk: "3V0QN8"
					}),
					top: n.fbt._("top", null, {
						hk: "40R5FY"
					}),
					qa: n.fbt._("q&a", null, {
						hk: "3cm6YL"
					}),
					live: n.fbt._("live (beta)", null, {
						hk: "2EVYAd"
					}),
					controversial: n.fbt._("controversial", null, {
						hk: "1uFV5F"
					}),
					new: n.fbt._("new", null, {
						hk: "39TZi6"
					})
				}
		},
		"./src/reddit/components/CommunitySettings/index.m.less": function(e, t, s) {
			e.exports = {
				communityTopicsHelpLink: "_2Tzl9XrmQzUn94gYHRUYMI",
				welcomeMessageHelpLink: "_3-XV8EhlxRlIzoFKUI6gmQ",
				fullWidthTextContainer: "_2SnK_8NMPSqmFfF-es2GGa",
				subtextContainer: "_2sWG233wmE9wNycTEyRHRN",
				sectionSubtext: "_2gZA-d4bPf-v-QStyl39CP",
				subtextLink: "_3m7YXm3a55mNltI6wwKkal",
				numCommunityTopicsSelected: "Ty_datAAaSbn2GX5-1O58",
				welcomeMessageEnabled: "_21a0DjKnRl3i1ItjJ8cSyf",
				geoForm: "_1QCMnCbDgm4T-QmBwOFkQ7",
				geoText: "lhgqy5yEx-4vqJhuaRIW_",
				geoInput: "_20j3hiEorqFwMLxftPVQG1",
				contentTag: "_26M_DkGPAeiqHaMshbczhg",
				contentTagColumn: "_2lbeaHzGFIYy6MK6YfLqrd",
				ratingAudience: "_3HR2r8RW7cFhNSKPiAT6VO",
				ratingDescription: "_3Wy4OBl1ksNXzpoeV4dvli",
				ratingReason: "_254fRg3JX4apEtqVAAXfbm",
				promptText: "RqDOw50ARYjx_TliwJR0l",
				surveyButton: "_7aZGYzh7hj5VihV4LcNzP",
				previewButton: "_2OmdANJm2jP7a_6G2-JCqg",
				disabled: "_3DyIlr3eqm1Pq3T9Jx0Kgx",
				rangeSetting: "_3BfcidCIw4ZNn2i2jR7fKT",
				noMarginHeading: "kt9ucKpVrHFhY-_xvYiLF",
				flexSpacer: "_2urERRC5ZgXlBwG8augYFu",
				labelWithNewTag: "_2tw6jmSgf4-SvF7sT8DIwT",
				labelNewTag: "_1W9XvmIuDMXygCmP-t8uxn"
			}
		},
		"./src/reddit/components/CommunitySettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/pages/shared.ts"),
				m = s("./src/reddit/actions/subredditSettings.ts"),
				u = s("./src/lib/makeActionCreator/index.ts"),
				p = s("./src/lib/makeGqlRequest/index.ts"),
				b = (s("./src/redditGQL/operations/GetSubredditWelcomeMessage.json"), s("./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json"));
			const h = e => {
				if (e) return {
					...e
				}
			};
			const g = (e, t, s) => async (n, a, o) => {
				let {
					gqlContext: r
				} = o;
				const i = {
						subredditId: e,
						isWelcomeMessageEnabled: t,
						welcomeMessage: {
							markdown: s
						}
					},
					l = await ((e, t) => Object(p.a)(e, {
						...b,
						variables: t
					}))(r(), {
						input: i
					});
				if (l.ok) {
					const t = (e => {
						var t, s;
						const n = null === (s = null === (t = null == e ? void 0 : e.data.updateSubredditSettings) || void 0 === t ? void 0 : t.subreddit) || void 0 === s ? void 0 : s.welcomeMessage;
						return h(n)
					})(l.body);
					t && n(f({
						subredditId: e,
						welcomeMessage: t
					}))
				}
			}, f = Object(u.a)("SUBREDDIT_WELCOME_MESSAGE__LOADED");
			var x = s("./src/reddit/actions/tags/index.ts"),
				E = s("./src/lib/lessComponent.tsx"),
				v = s("./src/reddit/controls/FormFields/index.tsx"),
				k = s("./src/reddit/components/CommunitySettings/components.m.less"),
				_ = s.n(k);
			const C = E.a.wrapped(v.b, "InputField", _.a),
				y = E.a.div("FormContainer", _.a);
			var O = s("./src/reddit/components/CommunitySettings/ModPnSettings/Loader.tsx"),
				j = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/controls/Button/index.tsx"),
				N = s("./src/reddit/featureFlags/index.ts"),
				I = s("./src/reddit/helpers/trackers/communitySettings.ts"),
				T = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				M = s("./src/reddit/models/Tags/index.ts"),
				P = s("./src/reddit/selectors/chatPost.ts"),
				R = s("./src/reddit/selectors/streamingModSettings.ts"),
				A = s("./src/reddit/selectors/subreddit.ts");
			var F = s("./src/reddit/selectors/subredditSettings.ts"),
				D = s("./src/reddit/selectors/tags.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts"),
				B = s("./src/reddit/selectors/experiments/countrySites.ts"),
				H = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/config.ts")),
				W = s("./node_modules/fbt/lib/FbtPublic.js"),
				z = s("./src/lib/classNames/index.ts"),
				V = s("./src/reddit/components/CommunityTopics/index.tsx"),
				q = s("./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx"),
				G = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				K = s("./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx"),
				Q = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				X = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				J = s("./src/reddit/components/SubredditCreationModal/index.tsx"),
				Y = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				Z = s("./src/reddit/controls/RadioInput/index.tsx"),
				$ = s("./src/reddit/models/Flair/index.ts"),
				ee = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				te = s("./src/reddit/components/CommunitySettings/helpers.ts"),
				se = s("./src/reddit/actions/toaster.ts"),
				ne = s("./src/reddit/components/GeoForm/GeoForm.tsx"),
				ae = s("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				oe = s("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				re = s("./src/reddit/helpers/localStorage/index.ts"),
				ie = s("./src/reddit/hooks/useGqlContext.ts"),
				le = s("./src/reddit/models/Toast/index.ts"),
				de = [{
					value: "Global",
					countryCode: "*",
					icon: "🌎"
				}, {
					value: "United States",
					countryCode: "US",
					icon: "🇺🇸"
				}, {
					value: "Argentina",
					countryCode: "AR",
					icon: "🇦🇷"
				}, {
					value: "Australia",
					countryCode: "AU",
					icon: "🇦🇺"
				}, {
					value: "Austria",
					countryCode: "AT",
					icon: "🇦🇹"
				}, {
					value: "Belgium",
					countryCode: "BE",
					icon: "🇧🇪"
				}, {
					value: "Brazil",
					countryCode: "BR",
					icon: "🇧🇷"
				}, {
					value: "Canada",
					countryCode: "CA",
					icon: "🇨🇦"
				}, {
					value: "Chile",
					countryCode: "CL",
					icon: "🇨🇱"
				}, {
					value: "Colombia",
					countryCode: "CO",
					icon: "🇨🇴"
				}, {
					value: "Czech Republic",
					countryCode: "CZ",
					icon: "🇨🇿"
				}, {
					value: "Denmark",
					countryCode: "DK",
					icon: "🇩🇰"
				}, {
					value: "Egypt",
					countryCode: "EG",
					icon: "🇪🇬"
				}, {
					value: "Finland",
					countryCode: "FI",
					icon: "🇫🇮"
				}, {
					value: "France",
					countryCode: "FR",
					icon: "🇫🇷"
				}, {
					value: "Germany",
					countryCode: "DE",
					icon: "🇩🇪"
				}, {
					value: "Greece",
					countryCode: "GR",
					icon: "🇬🇷"
				}, {
					value: "Hungary",
					countryCode: "HU",
					icon: "🇭🇺"
				}, {
					value: "India",
					countryCode: "IN",
					icon: "🇮🇳"
				}, {
					value: "Indonesia",
					countryCode: "ID",
					icon: "🇮🇩"
				}, {
					value: "Ireland",
					countryCode: "IE",
					icon: "🇮🇪"
				}, {
					value: "Italy",
					countryCode: "IT",
					icon: "🇮🇹"
				}, {
					value: "Japan",
					countryCode: "JP",
					icon: "🇯🇵"
				}, {
					value: "Korea, Republic of",
					countryCode: "KR",
					icon: "🇰🇷"
				}, {
					value: "Malaysia",
					countryCode: "MY",
					icon: "🇲🇾"
				}, {
					value: "Mexico",
					countryCode: "MX",
					icon: "🇲🇽"
				}, {
					value: "Netherlands",
					countryCode: "NL",
					icon: "🇳🇱"
				}, {
					value: "New Zealand",
					countryCode: "NZ",
					icon: "🇳🇿"
				}, {
					value: "Nigeria",
					countryCode: "NG",
					icon: "🇳🇬"
				}, {
					value: "Norway",
					countryCode: "NO",
					icon: "🇳🇴"
				}, {
					value: "Peru",
					countryCode: "PE",
					icon: "🇵🇪"
				}, {
					value: "Philippines",
					countryCode: "PH",
					icon: "🇵🇭"
				}, {
					value: "Poland",
					countryCode: "PL",
					icon: "🇵🇱"
				}, {
					value: "Portugal",
					countryCode: "PT",
					icon: "🇵🇹"
				}, {
					value: "Romania",
					countryCode: "RO",
					icon: "🇷🇴"
				}, {
					value: "Russia",
					countryCode: "RU",
					icon: "🇷🇺"
				}, {
					value: "Saudi Arabia",
					countryCode: "SA",
					icon: "🇸🇦"
				}, {
					value: "Singapore",
					countryCode: "SG",
					icon: "🇸🇬"
				}, {
					value: "South Africa",
					countryCode: "ZA",
					icon: "🇿🇦"
				}, {
					value: "Spain",
					countryCode: "ES",
					icon: "🇪🇸"
				}, {
					value: "Sweden",
					countryCode: "SE",
					icon: "🇸🇪"
				}, {
					value: "Switzerland",
					countryCode: "CH",
					icon: "🇨🇭"
				}, {
					value: "Thailand",
					countryCode: "TH",
					icon: "🇹🇭"
				}, {
					value: "Turkey",
					countryCode: "TR",
					icon: "🇹🇷"
				}, {
					value: "United Arab Emirates",
					countryCode: "AE",
					icon: "🇦🇪"
				}, {
					value: "United Kingdom",
					countryCode: "UK",
					icon: "🇬🇧"
				}, {
					value: "Vietnam",
					countryCode: "VN",
					icon: "🇻🇳"
				}];
			var ce = [Object.freeze({
					isoCode: "",
					displayName: "Other",
					englishName: "Other",
					rtl: !1
				}), Object.freeze({
					isoCode: "af",
					displayName: "Afrikaans",
					englishName: "Afrikaans",
					rtl: !1
				}), Object.freeze({
					isoCode: "az",
					displayName: "Azərbaycan",
					englishName: "Azerbaijani",
					rtl: !1
				}), Object.freeze({
					isoCode: "id",
					displayName: "Bahasa Indonesia",
					englishName: "Indonesian",
					rtl: !1
				}), Object.freeze({
					isoCode: "ms",
					displayName: "Bahasa Melayu",
					englishName: "Malay",
					rtl: !1
				}), Object.freeze({
					isoCode: "bs",
					displayName: "Bosanski",
					englishName: "Bosnian",
					rtl: !1
				}), Object.freeze({
					isoCode: "ca",
					displayName: "Català",
					englishName: "Catalan",
					rtl: !1
				}), Object.freeze({
					isoCode: "cs",
					displayName: "Čeština",
					englishName: "Czech",
					rtl: !1
				}), Object.freeze({
					isoCode: "da",
					displayName: "Dansk",
					englishName: "Danish",
					rtl: !1
				}), Object.freeze({
					isoCode: "de",
					displayName: "Deutsch",
					englishName: "German",
					rtl: !1
				}), Object.freeze({
					isoCode: "et",
					displayName: "Eesti",
					englishName: "Estonian",
					rtl: !1
				}), Object.freeze({
					isoCode: "en",
					displayName: "English",
					englishName: "English",
					rtl: !1
				}), Object.freeze({
					isoCode: "en-IN",
					displayName: "English (India)",
					englishName: "English (India)",
					rtl: !1
				}), Object.freeze({
					isoCode: "en-GB",
					displayName: "English (UK)",
					englishName: "English (UK)",
					rtl: !1
				}), Object.freeze({
					isoCode: "en-US",
					displayName: "English (US)",
					englishName: "English (US)",
					rtl: !1
				}), Object.freeze({
					isoCode: "es-ES",
					displayName: "Español (España)",
					englishName: "Spanish (Spain)",
					rtl: !1
				}), Object.freeze({
					isoCode: "es",
					displayName: "Español (Latinoamérica)",
					englishName: "Spanish (Latam)",
					rtl: !1
				}), Object.freeze({
					isoCode: "es-US",
					displayName: "Español (US)",
					englishName: "Spanish (US)",
					rtl: !1
				}), Object.freeze({
					isoCode: "eu",
					displayName: "Euskara",
					englishName: "Basque",
					rtl: !1
				}), Object.freeze({
					isoCode: "tl",
					displayName: "Filipino",
					englishName: "Filipino",
					rtl: !1
				}), Object.freeze({
					isoCode: "fr",
					displayName: "Français",
					englishName: "French",
					rtl: !1
				}), Object.freeze({
					isoCode: "fr-CA",
					displayName: "Français (Canada)",
					englishName: "French Canada",
					rtl: !1
				}), Object.freeze({
					isoCode: "gl",
					displayName: "Galego",
					englishName: "Galician",
					rtl: !1
				}), Object.freeze({
					isoCode: "hr",
					displayName: "Hrvatski",
					englishName: "Croatian",
					rtl: !1
				}), Object.freeze({
					isoCode: "zu",
					displayName: "IsiZulu",
					englishName: "Zulu",
					rtl: !1
				}), Object.freeze({
					isoCode: "is",
					displayName: "Íslenska",
					englishName: "Icelandic",
					rtl: !1
				}), Object.freeze({
					isoCode: "it",
					displayName: "Italiano",
					englishName: "Italian",
					rtl: !1
				}), Object.freeze({
					isoCode: "sw",
					displayName: "Kiswahili",
					englishName: "Swahili",
					rtl: !1
				}), Object.freeze({
					isoCode: "lv",
					displayName: "Latviešu",
					englishName: "Latvian",
					rtl: !1
				}), Object.freeze({
					isoCode: "lt",
					displayName: "Lietuvių",
					englishName: "Lithuanian",
					rtl: !1
				}), Object.freeze({
					isoCode: "hu",
					displayName: "Magyar",
					englishName: "Hungarian",
					rtl: !1
				}), Object.freeze({
					isoCode: "nl",
					displayName: "Nederlands",
					englishName: "Dutch",
					rtl: !1
				}), Object.freeze({
					isoCode: "no",
					displayName: "Norsk",
					englishName: "Norwegian",
					rtl: !1
				}), Object.freeze({
					isoCode: "uz",
					displayName: "O‘zbek",
					englishName: "Uzbek",
					rtl: !1
				}), Object.freeze({
					isoCode: "pl",
					displayName: "Polski",
					englishName: "Polish",
					rtl: !1
				}), Object.freeze({
					isoCode: "pt",
					displayName: "Português",
					englishName: "Portugues",
					rtl: !1
				}), Object.freeze({
					isoCode: "pt-BR",
					displayName: "Português (Brasil)",
					englishName: "Portugues (Brazil)",
					rtl: !1
				}), Object.freeze({
					isoCode: "ro",
					displayName: "Română",
					englishName: "Romanian",
					rtl: !1
				}), Object.freeze({
					isoCode: "sq",
					displayName: "Shqip",
					englishName: "Sango",
					rtl: !1
				}), Object.freeze({
					isoCode: "sk",
					displayName: "Slovenčina",
					englishName: "Slovak",
					rtl: !1
				}), Object.freeze({
					isoCode: "sl",
					displayName: "Slovenščina",
					englishName: "Slovenian",
					rtl: !1
				}), Object.freeze({
					isoCode: "sr",
					displayName: "Srpski",
					englishName: "Serbian",
					rtl: !1
				}), Object.freeze({
					isoCode: "fi",
					displayName: "Suomi",
					englishName: "Finnish",
					rtl: !1
				}), Object.freeze({
					isoCode: "sv",
					displayName: "Svenska",
					englishName: "Swedish",
					rtl: !1
				}), Object.freeze({
					isoCode: "vi",
					displayName: "Tiếng Việt",
					englishName: "Vietnamese",
					rtl: !1
				}), Object.freeze({
					isoCode: "tr",
					displayName: "Türkçe",
					englishName: "Turkish",
					rtl: !1
				}), Object.freeze({
					isoCode: "el",
					displayName: "Ελληνικά",
					englishName: "Greek, Modern",
					rtl: !1
				}), Object.freeze({
					isoCode: "be",
					displayName: "Беларуская",
					englishName: "Belarusian",
					rtl: !1
				}), Object.freeze({
					isoCode: "bg",
					displayName: "Български",
					englishName: "Bulgarian",
					rtl: !1
				}), Object.freeze({
					isoCode: "ky",
					displayName: "Кыргызча",
					englishName: "Kirghiz",
					rtl: !1
				}), Object.freeze({
					isoCode: "kk",
					displayName: "Қазақ Тілі",
					englishName: "Kazakh",
					rtl: !1
				}), Object.freeze({
					isoCode: "mk",
					displayName: "Македонски",
					englishName: "Macedonian",
					rtl: !1
				}), Object.freeze({
					isoCode: "mn",
					displayName: "Монгол",
					englishName: "Mongolian",
					rtl: !1
				}), Object.freeze({
					isoCode: "ru",
					displayName: "Русский",
					englishName: "Russian",
					rtl: !1
				}), Object.freeze({
					isoCode: "sr",
					displayName: "Српски",
					englishName: "Serbian",
					rtl: !1
				}), Object.freeze({
					isoCode: "uk",
					displayName: "Українська",
					englishName: "Ukrainian",
					rtl: !1
				}), Object.freeze({
					isoCode: "ka",
					displayName: "ქართული",
					englishName: "Georgian",
					rtl: !1
				}), Object.freeze({
					isoCode: "hy",
					displayName: "Հայերեն",
					englishName: "Armenian",
					rtl: !1
				}), Object.freeze({
					isoCode: "he",
					displayName: "עברית",
					englishName: "Hebrew",
					rtl: !0
				}), Object.freeze({
					isoCode: "ur",
					displayName: "اردو",
					englishName: "Urdu",
					rtl: !0
				}), Object.freeze({
					isoCode: "ar",
					displayName: "العربية",
					englishName: "Arabic",
					rtl: !0
				}), Object.freeze({
					isoCode: "fa",
					displayName: "فارسی",
					englishName: "Persian",
					rtl: !0
				}), Object.freeze({
					isoCode: "am",
					displayName: "አማርኛ",
					englishName: "Amharic",
					rtl: !1
				}), Object.freeze({
					isoCode: "ne",
					displayName: "नेपाली",
					englishName: "Nepali",
					rtl: !1
				}), Object.freeze({
					isoCode: "mr",
					displayName: "मराठी",
					englishName: "Marathi",
					rtl: !1
				}), Object.freeze({
					isoCode: "hi",
					displayName: "हिन्दी",
					englishName: "Hindi",
					rtl: !1
				}), Object.freeze({
					isoCode: "as",
					displayName: "অসমীয়া",
					englishName: "Assamese",
					rtl: !1
				}), Object.freeze({
					isoCode: "bn",
					displayName: "বাংলা",
					englishName: "Bengali",
					rtl: !1
				}), Object.freeze({
					isoCode: "pa",
					displayName: "ਪੰਜਾਬੀ",
					englishName: "Punjabi",
					rtl: !1
				}), Object.freeze({
					isoCode: "gu",
					displayName: "ગુજરાતી",
					englishName: "Gujarati",
					rtl: !1
				}), Object.freeze({
					isoCode: "or",
					displayName: "ଓଡ଼ିଆ",
					englishName: "Oriya",
					rtl: !1
				}), Object.freeze({
					isoCode: "ta",
					displayName: "தமிழ்",
					englishName: "Tamil",
					rtl: !1
				}), Object.freeze({
					isoCode: "te",
					displayName: "తెలుగు",
					englishName: "Telugu",
					rtl: !1
				}), Object.freeze({
					isoCode: "kn",
					displayName: "ಕನ್ನಡ",
					englishName: "Kannada",
					rtl: !1
				}), Object.freeze({
					isoCode: "ml",
					displayName: "മലയാളം",
					englishName: "Malayalam",
					rtl: !1
				}), Object.freeze({
					isoCode: "si",
					displayName: "සිංහල",
					englishName: "Sinhala",
					rtl: !1
				}), Object.freeze({
					isoCode: "th",
					displayName: "ภาษาไทย",
					englishName: "Thai",
					rtl: !1
				}), Object.freeze({
					isoCode: "lo",
					displayName: "ລາວ",
					englishName: "Lao",
					rtl: !1
				}), Object.freeze({
					isoCode: "my",
					displayName: "မြန်မာစကား",
					englishName: "Burmese",
					rtl: !1
				}), Object.freeze({
					isoCode: "km",
					displayName: "ភាសាខ្មែរ",
					englishName: "Central Khmer",
					rtl: !1
				}), Object.freeze({
					isoCode: "ko",
					displayName: "한국어",
					englishName: "Korean",
					rtl: !1
				}), Object.freeze({
					isoCode: "zh-CN",
					displayName: "中文 (简体)",
					englishName: "Chinese (Simplified)",
					rtl: !1
				}), Object.freeze({
					isoCode: "zh",
					displayName: "中文 (繁體)",
					englishName: "Chinese (Traditional)",
					rtl: !1
				}), Object.freeze({
					isoCode: "zh-HK",
					displayName: "中文 (香港)",
					englishName: "Chinese (Hong Kong)",
					rtl: !1
				}), Object.freeze({
					isoCode: "ja",
					displayName: "日本語",
					englishName: "Japanese",
					rtl: !1
				})],
				me = s("./node_modules/uuid/v4.js"),
				ue = s.n(me),
				pe = s("./src/lib/humanizeDate/index.ts"),
				be = s("./src/reddit/constants/keycodes.ts"),
				he = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				ge = s("./src/reddit/components/CommonAutocompleteDropdown/index.m.less"),
				fe = s.n(ge);

			function xe(e) {
				const {
					icons: t = !0,
					id: s,
					items: n,
					currentIndex: a,
					selectValue: i
				} = e, l = Object(o.useRef)(null);
				return Object(o.useEffect)(() => {
					var e;
					let t = 30 * a;
					a > 10 && (t += 120), l && (null === (e = l.current) || void 0 === e || e.scrollTo({
						top: t
					}))
				}, [a]), r.a.createElement("ul", {
					className: fe.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${s}`,
					"data-testid": `autocomplete-dropdown-${s}`,
					ref: l
				}, n.map((e, s) => r.a.createElement("li", {
					onClick: () => i(s),
					key: `${s}`,
					className: Object(z.a)({
						[fe.a.highlight]: s === a
					}, fe.a.autocompleteDropdownItem, {
						[fe.a.autocompleteDropdownItem__rtl]: e.rtl
					})
				}, t && e.icon && r.a.createElement("span", {
					role: "img",
					"aria-label": e.value,
					className: fe.a.autocompleteDropdownItem__icon
				}, e.icon), e.value)))
			}
			const Ee = (e, t) => t.filter(t => 0 === t.value.toLowerCase().indexOf(e.toLocaleLowerCase()));

			function ve(e) {
				var t, s;
				const {
					className: n,
					customClickEvent: a,
					disabled: i,
					defaultIcon: l,
					icons: d = !1,
					initialItemIndex: c,
					listItems: m,
					locked: u = !1,
					placeholderText: p,
					sessionId: b,
					setSelectedParent: h
				} = e, [g, f] = Object(o.useState)(c), [x, E] = Object(o.useState)(m), [v, k] = Object(o.useState)(!0), [_, C] = Object(o.useState)((null === (t = m[c]) || void 0 === t ? void 0 : t.value) || ""), y = `autocomplete-input-${b}`, O = Object(o.useRef)(), j = (e, t) => {
					u || (k(!0), !t && e > -1 && (e = m.findIndex(t => x[e].key === t.key)), f(e), C(e > -1 && m[e].value || ""), h(e), E(m))
				};
				return Object(o.useEffect)(() => {
					var e;
					const t = function(e) {
						if (O && O.current) {
							O.current.contains(e.target) || k(!0)
						}
					};
					return f(c), C((null === (e = m[c]) || void 0 === e ? void 0 : e.value) || ""), document.addEventListener("click", t), () => document.removeEventListener("click", t)
				}, [c, m]), r.a.createElement("div", {
					className: fe.a.autocompleteInputContainer,
					ref: O
				}, d && r.a.createElement("label", {
					className: fe.a.autocompleteLabel,
					htmlFor: y
				}, (null === (s = x[g]) || void 0 === s ? void 0 : s.icon) || l), i ? r.a.createElement("span", {
					className: Object(z.a)(fe.a.autocompleteInput, fe.a.autocompleteInput__disabled, n)
				}, -1 !== c && m[c].value) : r.a.createElement("input", {
					id: `autocomplete-input-${b}`,
					"data-testid": `autocomplete-input-${b}`,
					className: Object(z.a)(fe.a.autocompleteInput, n, !d && fe.a.autocompleteInput__no_icon),
					name: y,
					value: _,
					placeholder: p,
					onChange: e => {
						u || (-1 !== g && (f(-1), h(-1)), C(e.currentTarget.value), E(Ee(e.currentTarget.value, m)))
					},
					onKeyDown: e => {
						if (u) return;
						let t = -1;
						const s = x.length > 0;
						k(!1), s && e.key === be.b.ArrowDown ? (t = Math.min(g + 1, x.length - 1), f(t), h(-1), t > -1 && t < x.length && C(x[t].value)) : s && e.key === be.b.ArrowUp ? (t = Math.max(g - 1, -1), f(t), h(-1), t > -1 && t < x.length ? C(x[t].value) : C("")) : s && e.key === be.b.Enter ? (e.preventDefault(), g > -1 && g < x.length ? j(g, !1) : 1 === x.length && j(0, !1)) : e.key === be.b.Backspace ? h(-1) : e.key === be.b.Escape ? (k(!0), c > -1 && ("" !== _ && j(c, !0), "" === _ && j(-1, !0))) : e.key === be.b.Tab && (k(!0), -1 !== g ? j(g, !1) : ("" !== _ && j(c, !0), "" === _ && j(-1, !0)))
					},
					onClick: () => {
						k(!1), a()
					},
					onFocus: () => {
						k(!1)
					}
				}), u && r.a.createElement("span", {
					className: fe.a.locked
				}, r.a.createElement(he.a, {
					className: fe.a.lockIcon
				})), u || i || v || !x.length ? null : r.a.createElement(xe, {
					id: b,
					items: x,
					currentIndex: g,
					selectValue: e => (e => {
						j(e, !1)
					})(e)
				}))
			}
			var ke, _e = s("./src/reddit/components/CommunitySettings/CountrySiteSettings/index.m.less"),
				Ce = s.n(_e);
			! function(e) {
				e[e.CountryForm = 0] = "CountryForm", e[e.LanguageForm = 1] = "LanguageForm"
			}(ke || (ke = {}));
			var ye = Object(w.c)((function(e) {
					const {
						defaultIcon: t = "📍",
						formType: s,
						icons: n = !0,
						initialSubredditCountrySite: a,
						inputClassName: l,
						placeholderText: d,
						subredditId: c,
						listItems: m
					} = e, u = s === ke.CountryForm, p = u ? "countryCode" : "languageCode", b = Object(i.d)();
					let h = a && a[p] || "";
					u && (h = h.toUpperCase());
					const [g] = Object(o.useState)(() => ue()()), f = a && !(null == a ? void 0 : a.isCountrySiteEditable) || !1, x = u ? "country" : "language", E = a && u ? a.countryCode : (null == a ? void 0 : a.languageCode) || "";
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Ce.a.countrySiteForm
					}, r.a.createElement("div", {
						className: Ce.a.dropdownContainer
					}, r.a.createElement(ve, {
						className: l,
						defaultIcon: t,
						disabled: f,
						icons: n,
						initialItemIndex: (() => h ? m.findIndex(e => h.toUpperCase() === e.key.toUpperCase()) : -1)(),
						listItems: m,
						locked: f,
						placeholderText: d,
						sessionId: g,
						setSelectedParent: e => (e => {
							if (-1 !== e) {
								let t = m[e].code,
									s = a && a.languageCode || "";
								u || (t = a && a.countryCode || "", s = m[e].code), b(Object(U.g)({
									subredditId: c,
									subredditCountrySite: {
										countryCode: t,
										languageCode: s,
										isCountrySiteEditable: (null == a ? void 0 : a.isCountrySiteEditable) || !0,
										modMigrationAt: (null == a ? void 0 : a.modMigrationAt) || void 0
									}
								}))
							}
						})(e),
						customClickEvent: () => e.sendEvent(Object(I.a)(x, E))
					})), f && a && r.a.createElement(X.n, null, W.fbt._("This setting was saved by a mod on {modMigrationDate} and can’t be changed", [W.fbt._param("modMigrationDate", (e => {
						if (!e || !e.modMigrationAt) return "";
						const t = Date.parse(e.modMigrationAt);
						return Object(pe.a)(t / 1e3, {
							showDay: !0
						})
					})(a))], {
						hk: "3OWLnm"
					}))))
				})),
				Oe = s("./src/reddit/components/CommunitySettings/index.m.less"),
				je = s.n(Oe);

			function we(e) {
				var t;
				const {
					initialPlace: s,
					initialSubredditCountrySite: n,
					subredditId: a,
					subredditCountryEditEnabled: l = !1,
					subredditLanguageEditEnabled: d = !1,
					update: c
				} = e, m = Object(ie.a)(), u = Object(i.d)(), [p, b] = Object(o.useState)(s), [h, g] = Object(o.useState)(!1), [f, x] = Object(o.useState)(!0);
				return Object(o.useEffect)(() => {
					x(Object(re.F)("location")), Object(re.Hb)("location")
				}, []), r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.a, {
					className: je.a.noMarginHeading
				}, W.fbt._("Community Location and main language", null, {
					hk: "3qWqzm"
				})), r.a.createElement(X.n, null, W.fbt._("Adding a location helps your community show up in seach results and recommendations and helps local redditors find it easier.", null, {
					hk: "3EuMyx"
				})), r.a.createElement("div", {
					className: je.a.flexSpacer
				}), d && r.a.createElement(X.l, {
					label: r.a.createElement(r.a.Fragment, null, W.fbt._("Language", null, {
						hk: "4iQFeH"
					}), !f && r.a.createElement(ae.a, null)),
					textContainerClassName: Object(z.a)(je.a.fullWidthTextContainer, je.a.geoText)
				}, r.a.createElement(ye, {
					defaultIcon: "",
					icons: !1,
					formType: ke.LanguageForm,
					initialSubredditCountrySite: n,
					inputClassName: je.a.autocompleteInput,
					listItems: Array.from(ce, e => ({
						code: e.isoCode,
						key: e.isoCode,
						icon: "",
						value: e.displayName,
						rtl: e.rtl
					})),
					placeholderText: W.fbt._("Type to search for a language", null, {
						hk: "4dZ6Zv"
					}),
					subredditId: a
				})), l && r.a.createElement(X.l, {
					label: r.a.createElement(r.a.Fragment, null, W.fbt._("Country", null, {
						hk: "1tNtsz"
					}), !f && r.a.createElement(ae.a, null)),
					textContainerClassName: Object(z.a)(je.a.fullWidthTextContainer, je.a.geoText)
				}, r.a.createElement(ye, {
					formType: ke.CountryForm,
					initialSubredditCountrySite: n,
					inputClassName: je.a.autocompleteInput,
					listItems: Array.from(de, e => ({
						code: e.countryCode || "",
						key: e.countryCode || "",
						icon: e.icon,
						value: e.value
					})),
					placeholderText: W.fbt._("Type to search for a country", null, {
						hk: "51VKS"
					}),
					subredditId: a
				})), r.a.createElement(X.l, {
					label: r.a.createElement(r.a.Fragment, null, W.fbt._("Region", null, {
						hk: "scpaL"
					}), !f && r.a.createElement(ae.a, null)),
					textContainerClassName: Object(z.a)(je.a.fullWidthTextContainer, je.a.geoText)
				}, r.a.createElement(ne.a, {
					initialValue: null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : "",
					initialPlace: p,
					onPlace: e => c(e, "place"),
					onSubmit: async function(e) {
						let {
							place: t,
							sessionId: s
						} = e;
						if ((null == t ? void 0 : t.id) === (null == p ? void 0 : p.id)) return;
						g(!0);
						const n = await Object(oe.a)(m(), {
							subredditId: a,
							placeId: t.id,
							source: t.source,
							sessionId: s
						});
						if (g(!1), !n.ok) return u(Object(se.f)({
							kind: le.b.Error,
							text: W.fbt._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						b(t), u(Object(se.f)({
							kind: le.b.SuccessCommunity,
							text: W.fbt._("Successfully updated community location", null, {
								hk: "3aGk2e"
							}),
							duration: 5e3
						}))
					},
					disabled: h,
					className: je.a.geoForm,
					inputClassName: je.a.geoInput
				})))
			}
			const Se = {
				[ee.e.Post]: {
					short: () => W.fbt._("Post only (default)", null, {
						hk: "2XJHW4"
					}),
					long: () => W.fbt._("Only approved users can post. Anyone can comment.", null, {
						hk: "3frgit"
					})
				},
				[ee.e.Comment]: {
					short: () => W.fbt._("Comment only", null, {
						hk: "2OhQB5"
					}),
					long: () => W.fbt._("Only approved users can comment. Anyone can post.", null, {
						hk: "2F24kr"
					})
				},
				[ee.e.PostAndComment]: {
					short: () => W.fbt._("Post & Comment", null, {
						hk: "1lWCl2"
					}),
					long: () => W.fbt._("Only approved users can post and comment.", null, {
						hk: "4GkEs6"
					})
				}
			};

			function Ne(e) {
				const {
					isEmployee: t,
					restrictions: s,
					settings: n,
					subredditId: a,
					subredditName: o,
					testWelcomeMessage: i,
					update: l,
					geoPlace: c,
					onFocusWelcomeMessageInput: m,
					subredditCountrySite: u,
					subredditCountryEditEnabled: p,
					subredditLanguageEditEnabled: b
				} = e, {
					disableContributorRequests: h,
					over18: g,
					publicDescription: f,
					restrictCommenting: x,
					restrictPosting: E,
					subredditType: v,
					title: k,
					welcomeMessageEnabled: _,
					welcomeMessageText: C
				} = n, O = [], w = [];
				for (const r of Object.keys(Se)) w.push(Se[r].short()), O.push(Se[r].long());
				const N = !C || 0 === (null == C ? void 0 : C.length);
				return r.a.createElement(j.a, null, r.a.createElement(y, null, r.a.createElement(j.b, null, W.fbt._("Community settings", null, {
					hk: "3mvH70"
				})), r.a.createElement(Q.a, null, W.fbt._("Community Profile", null, {
					hk: "91aEK"
				})), r.a.createElement(X.e, {
					label: W.fbt._("Community name", null, {
						hk: "260EEx"
					}),
					maxChars: te.e,
					onChange: e => l(e.currentTarget.value, "title"),
					textContainerClassName: je.a.fullWidthTextContainer,
					value: k || ""
				}), r.a.createElement(X.l, {
					label: W.fbt._("Community topics", null, {
						hk: "49aoGo"
					}),
					textContainerClassName: je.a.fullWidthTextContainer,
					subtext: r.a.createElement("span", {
						className: je.a.subtextContainer
					}, W.fbt._("This will help Reddit recommend your community to relevant users and other discovery experiences.", null, {
						hk: "3WYTu5"
					}), " ", r.a.createElement(Y.a, {
						className: je.a.communityTopicsHelpLink,
						href: "https://mods.reddithelp.com/hc/en-us/articles/360024518712",
						rel: "noopener noreferrer",
						target: "_blank"
					}, W.fbt._("Learn more.", null, {
						hk: "1y3kXY"
					})), " ", " ", r.a.createElement("span", {
						className: je.a.numCommunityTopicsSelected
					}, r.a.createElement(q.a, {
						subredditId: a
					}))),
					direction: "column"
				}, r.a.createElement(G.b, {
					subredditId: a,
					onPrimarySelect: e.onPrimarySelect
				}), (!!e.selectedPrimaryTag || e.hasSecondaryTags) && r.a.createElement(V.b, {
					context: T.a.communitySettings,
					subredditId: a
				}), r.a.createElement(K.a, {
					context: T.a.communitySettings,
					subredditId: a
				})), r.a.createElement(X.h, {
					label: W.fbt._("Community description", null, {
						hk: "1XBKXj"
					}),
					onChange: e => l(e.currentTarget.value, "publicDescription", !1),
					maxChars: te.d,
					rows: 2,
					subtext: W.fbt._("This is how new members come to understand your community.", null, {
						hk: "llaA4"
					}),
					value: f || ""
				}), r.a.createElement(X.p, {
					className: _ ? je.a.welcomeMessageEnabled : void 0,
					on: _,
					onClick: () => l(!_, "welcomeMessageEnabled"),
					label: W.fbt._("Send welcome message to new members", null, {
						hk: "4euZSE"
					}),
					subtext: r.a.createElement("span", null, W.fbt._("Create a custom welcome message to greet people the instant they join your community. New community members will see this in a direct message 1 hour after joining.", null, {
						hk: "1D5tM8"
					}), " ", r.a.createElement(Y.a, {
						className: je.a.welcomeMessageHelpLink,
						href: "https://mods.reddithelp.com/hc/en-us/articles/360002551551-Welcoming-new-members",
						rel: "noopener noreferrer",
						target: "_blank"
					}, W.fbt._("Learn more.", null, {
						hk: "NkFhF"
					})))
				}), _ && r.a.createElement(r.a.Fragment, null, r.a.createElement(X.h, {
					actionLink: r.a.createElement(S.t, {
						priority: S.c.PlainLink,
						className: Object(z.a)(je.a.previewButton, {
							[je.a.disabled]: N
						}),
						disabled: !C || 0 === (null == C ? void 0 : C.length),
						onClick: () => i(o, C)
					}, W.fbt._("Send me a test message", null, {
						hk: "4iE1go"
					})),
					label: null,
					onChange: e => {
						l(e.currentTarget.value, "welcomeMessageText")
					},
					onFocus: m,
					placeholder: W.fbt._("Welcome to our community! We’re here to discuss our passion for all things related to grated cheese. (Heads up—we’re a text-only community, so sorry no image posts.) Get started by introducing yourself in our post for newbies, then check out our rules to learn more and dive in.", null, {
						hk: "AnOYs"
					}),
					maxChars: te.f,
					rows: 5,
					value: C || ""
				})), r.a.createElement(we, {
					subredditId: a,
					update: l,
					initialPlace: c,
					initialSubredditCountrySite: u,
					subredditCountryEditEnabled: !!p,
					subredditLanguageEditEnabled: !!b
				}), r.a.createElement(Q.a, null, W.fbt._("community type", null, {
					hk: "3T2OkK"
				})), r.a.createElement(X.l, {
					label: W.fbt._("Type of Community", null, {
						hk: "2PReGw"
					}),
					direction: "column"
				}, r.a.createElement(Z.a, {
					value: v,
					name: "type",
					onChange: e => l(e, "subredditType")
				}, Object(J.radioOptions)(t, s))), r.a.createElement(X.p, {
					on: g,
					onClick: () => l(!g, "over18"),
					label: r.a.createElement("span", null, W.fbt._("18+ year old community", null, {
						hk: "3VzYZp"
					}), r.a.createElement(X.m, {
						flair: $.f.Nsfw
					})),
					subtext: W.fbt._("When your community is marked as an 18+ community, users must be flagged as 18+ in their user settings", null, {
						hk: "2h28m0"
					})
				}), "restricted" === v && r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.a, null, W.fbt._("Restricted Community Settings", null, {
					hk: "1HiDiC"
				})), r.a.createElement(X.d, {
					label: W.fbt._("Approved users have the ability to", null, {
						hk: "2pduhW"
					}),
					items: w,
					selected: (() => {
						let e = ee.e.Post;
						return x && E ? e = ee.e.PostAndComment : x && (e = ee.e.Comment), Se[e].short()
					})(),
					onClick: e => {
						e === Se[ee.e.PostAndComment].short() ? (l(!0, ee.f.Comment), l(!0, ee.f.Post)) : e === Se[ee.e.Comment].short() ? (l(!1, ee.f.Post), l(!0, ee.f.Comment)) : e === Se[ee.e.Post].short() && (l(!0, ee.f.Post), l(!1, ee.f.Comment))
					},
					id: "restrictionOptions",
					descriptions: O
				}), r.a.createElement(X.p, {
					on: !h,
					onClick: () => l(!h, "disableContributorRequests"),
					label: W.fbt._("Accepting new requests to post", null, {
						hk: "bTpYB"
					})
				})), "private" === v && r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.a, null, W.fbt._("Private Community Settings", null, {
					hk: "2JjNXE"
				})), r.a.createElement(X.p, {
					on: !h,
					onClick: () => l(!h, "disableContributorRequests"),
					label: W.fbt._("Accepting requests to join", null, {
						hk: "1l1acS"
					}),
					subtext: W.fbt._("Display a button on your private subreddit that allows users to request to join. Users may still send your subreddit modmail whether this is on or off.", null, {
						hk: "1bkLxN"
					})
				})), r.a.createElement(Q.a, null, W.fbt._("Advanced Settings", null, {
					hk: "1e5Esr"
				})), r.a.createElement(X.g, {
					label: W.fbt._("Settings for old site", null, {
						hk: "4wmYj3"
					}),
					subtext: W.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "gYPuP"
					}),
					link: `${H.a.oldRedditUrl}/r/${o}/about/edit`,
					onClick: () => e.sendEvent(Object(I.c)(d.hc.Posts)),
					openInNewTab: !0,
					last: !0
				})))
			}
			var Ie = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Te = s("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				Me = s.n(Te),
				Pe = s("./src/reddit/components/ContentSurvey/RatingCard.tsx"),
				Re = s("./src/reddit/components/ContentSurvey/SurveyModal.tsx"),
				Ae = s("./src/reddit/helpers/trackers/contentTag.ts"),
				Fe = s("./src/reddit/hooks/useTracking.ts");
			const {
				fbt: De
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Le(e) {
				const {
					subreddit: t
				} = e, s = Object(i.e)(e => e.subreddits.survey[t.id]), n = Object(Fe.a)();
				Object(o.useEffect)(() => n(Object(Ae.k)()), [n]);
				const [a, l] = Object(o.useState)(!1);

				function d() {
					n(Object(Ae.o)()), l(!0)
				}
				const c = !(null == s ? void 0 : s.response) && (null == s ? void 0 : s.isEligible),
					m = (null == s ? void 0 : s.response) && (null == s ? void 0 : s.isEligible);
				return r.a.createElement("div", {
					className: Object(z.a)(Me.a.ContentContainer, je.a.contentTag)
				}, r.a.createElement("h2", null, De._("Content Tag", null, {
					hk: "1AhgrD"
				})), r.a.createElement("p", null, De._("Your content tag is based on a moderator survey about community posts and discussions. {=Learn More}", [De._param("=Learn More", r.a.createElement("a", {
					href: "https://www.reddithelp.com/hc/en-us/articles/360048185132",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => n(Object(Ae.d)())
				}, De._("Learn More", null, {
					hk: "2gJ4PL"
				})))], {
					hk: "2xoqeD"
				})), r.a.createElement("div", {
					className: je.a.contentTagColumn
				}, r.a.createElement(Pe.a, {
					subredditId: t.id,
					ratingResponse: null == s ? void 0 : s.response
				}, (null == s ? void 0 : s.response) ? r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: je.a.ratingAudience
				}, De._("Tagged as {ratingName} due to:", [De._param("ratingName", s.response.rating.name)], {
					hk: "3VVnt5"
				})), r.a.createElement("ul", null, s.response.ratingReasons.map(e => r.a.createElement("li", {
					key: e.id,
					className: je.a.ratingReason
				}, e.contentRatingReasonText)))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: je.a.ratingAudience
				}, De._("Set up your tag", null, {
					hk: "2Fb5bg"
				})), r.a.createElement("p", {
					className: je.a.ratingDescription
				}, De._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "VvmPr"
				})))), c && r.a.createElement(S.t, {
					redditStyle: !0,
					className: je.a.surveyButton,
					onClick: d
				}, De._("Start Survey", null, {
					hk: "myDPK"
				})), m && r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: je.a.promptText
				}, De._("Does this content tag look wrong to you?", null, {
					hk: "72VuM"
				})), r.a.createElement(S.t, {
					priority: S.c.Secondary,
					redditStyle: !0,
					className: je.a.surveyButton,
					onClick: d
				}, De._("Take the Survey", null, {
					hk: "W30wE"
				})), r.a.createElement(Ie.a, {
					to: "/r/modsupport/submit"
				}, r.a.createElement(S.t, {
					priority: S.c.Tertiary,
					redditStyle: !0,
					className: je.a.surveyButton,
					onClick: () => n(Object(Ae.f)())
				}, "Message r/modsupport")))), a && s && r.a.createElement(Re.a, {
					withOverlay: !0,
					subredditId: t.id,
					survey: s,
					onClose: () => l(!1)
				}))
			}
			var Ue = s("./src/reddit/models/Subreddit/index.ts"),
				Be = s("./src/reddit/selectors/experiments/mediaInComments.ts"),
				He = s("./src/reddit/selectors/experiments/chat.ts");
			var We = e => {
					const {
						settings: t,
						subredditName: s,
						update: n,
						isChatPostsCreationEnabled: a,
						subreddit: l
					} = e, {
						archivePostsEnabled: c,
						allowChatPostCreation: m,
						allowGalleries: u,
						allowImages: p,
						allowPolls: b,
						allowPostCrossposts: h,
						allowPredictionsTournament: g,
						allowedMediaInComments: f,
						collapseDeletedComments: x,
						commentScoreHideMins: E,
						contentOptions: v,
						spamComments: k,
						spamLinks: _,
						spamSelfposts: O,
						spoilersEnabled: w,
						suggestedCommentSort: S
					} = t, N = Object(i.e)(Be.b), T = Object(i.e)(He.e), M = N && l.showMediaInCommentsSetting, P = null === S ? "nullValue" : S, R = Object(o.useCallback)(() => n(!c, "archivePostsEnabled"), [c, n]);
					return r.a.createElement(j.a, null, r.a.createElement(y, null, r.a.createElement(j.b, null, W.fbt._("Post and Comment settings", null, {
						hk: "14OI7p"
					})), r.a.createElement(Q.a, null, W.fbt._("Posts", null, {
						hk: "2i2G4r"
					})), r.a.createElement(X.d, {
						label: W.fbt._("Post type options", null, {
							hk: "M9AdT"
						}),
						items: Object.keys(te.i),
						displayItems: Object.values(te.i),
						displayTitle: te.i[v],
						selected: v,
						onClick: e => n(e, "contentOptions"),
						id: "contentOptions",
						descriptions: te.h
					}), r.a.createElement(X.p, {
						on: h,
						onClick: () => n(!h, "allowPostCrossposts"),
						label: W.fbt._("Allow crossposting of posts.", null, {
							hk: "19EiBT"
						})
					}), r.a.createElement(X.p, {
						on: c,
						onClick: R,
						label: W.fbt._("Archive posts", null, {
							hk: "3FdbDg"
						}),
						subtext: W.fbt._("Don’t allow commenting or voting on posts older than 6 months", null, {
							hk: "4tIS0"
						})
					}), a && T && r.a.createElement(X.d, {
						label: W.fbt._("Live Chat Creators", null, {
							hk: "2Yd8cb"
						}),
						selected: m ? te.a.anyone : te.a.mods,
						items: Object.values(te.a),
						onClick: e => n(e === te.a.anyone, "allowChatPostCreation"),
						id: "chatPostOptions",
						subtext: W.fbt._("Choose who can start live chat posts in your community", null, {
							hk: "3F7D5k"
						})
					}), a && !T && r.a.createElement(X.p, {
						on: m,
						onClick: () => n(!m, "allowChatPostCreation"),
						label: W.fbt._("Allow chat posts creation by users.", null, {
							hk: "4zwoUf"
						})
					}), r.a.createElement(X.p, {
						on: w,
						onClick: () => n(!w, "spoilersEnabled"),
						label: r.a.createElement("span", null, W.fbt._("Enable spoiler tag", null, {
							hk: "2CtBpB"
						}), r.a.createElement(X.m, {
							flair: $.f.Spoiler
						})),
						subtext: W.fbt._("Media on posts with the spoiler tag are blurred", null, {
							hk: "4rVOs6"
						})
					}), r.a.createElement(X.p, {
						on: p,
						onClick: () => {
							n(!p, "allowImages"), n(!p, "allowGalleries")
						},
						label: W.fbt._("Allow image uploads and links to image hosting sites", null, {
							hk: "20ETVO"
						})
					}), p && r.a.createElement(X.p, {
						"data-testid": "allow-images-community-setting",
						on: u,
						onClick: () => n(!u, "allowGalleries"),
						label: W.fbt._("Allow multiple images per post", null, {
							hk: "Pcjq5"
						})
					}), r.a.createElement(X.p, {
						on: b,
						onClick: () => n(!b, "allowPolls"),
						label: W.fbt._("Allow polls", null, {
							hk: "15LXRO"
						})
					}), r.a.createElement(X.p, {
						on: g,
						onClick: () => n(!g, "allowPredictionsTournament"),
						label: W.fbt._("Allow predictions", null, {
							hk: "rcdMx"
						}),
						subtext: W.fbt._("Allow predictions by mods in your community (only for public, SFW communities with 10k or more members)", null, {
							hk: "40loX3"
						})
					}), r.a.createElement(X.l, {
						label: W.fbt._("Spam filter strength", null, {
							hk: "4C4qar"
						}),
						subtext: W.fbt._("'HIGH' is the standard filter, 'LOW' disables most filtering, 'ALL' will filter every post initially and they will need to be approved manually to be visible", null, {
							hk: "mdxeP"
						})
					}), r.a.createElement(X.d, {
						label: W.fbt._("Posts", null, {
							hk: "1SdpTj"
						}),
						items: Object.keys(te.k),
						displayItems: Object.values(te.k),
						displayTitle: te.k[O],
						id: "spamSelfposts",
						selected: O,
						onClick: e => n(e, "spamSelfposts"),
						indent: !0
					}), r.a.createElement(X.d, {
						label: W.fbt._("Links", null, {
							hk: "Ia7TU"
						}),
						items: Object.keys(te.k),
						displayItems: Object.values(te.k),
						displayTitle: te.k[_],
						id: "spamLinks",
						selected: _,
						onClick: e => n(e, "spamLinks"),
						indent: !0
					}), r.a.createElement(X.d, {
						label: W.fbt._("Comments", null, {
							hk: "1X5Fv2"
						}),
						items: Object.keys(te.c),
						displayItems: Object.values(te.c),
						displayTitle: te.c[k],
						selected: k,
						onClick: e => n(e, "spamComments"),
						indent: !0,
						id: "spamComments"
					}), r.a.createElement(Q.a, null, W.fbt._("Comments", null, {
						hk: "4sAqsA"
					})), r.a.createElement(X.d, {
						label: W.fbt._("Suggested sort", null, {
							hk: "4Af3Lr"
						}),
						subtext: W.fbt._("All comment feeds in community will default to this sort setting", null, {
							hk: "4grj1W"
						}),
						items: Object.keys(te.j),
						displayItems: Object.values(te.j),
						displayTitle: te.j[P],
						selected: P,
						onClick: e => n("nullValue" === e ? null : e, "suggestedCommentSort"),
						id: "suggestedCommentSort"
					}), r.a.createElement(X.p, {
						on: x,
						onClick: () => n(!x, "collapseDeletedComments"),
						label: W.fbt._("Collapse deleted and removed comments", null, {
							hk: "Iw8kU"
						})
					}), r.a.createElement(X.l, {
						label: W.fbt._("Minutes to hide comment scores", null, {
							hk: "1DJhj0"
						}),
						direction: "column"
					}, r.a.createElement(C, {
						onChange: e => n(e.currentTarget.value, "commentScoreHideMins"),
						isInvalid: !(E >= te.g && E <= te.b),
						min: te.g,
						max: te.b,
						type: "number",
						value: E
					})), M && r.a.createElement(r.a.Fragment, null, r.a.createElement(X.l, {
						label: W.fbt._("Media in comments", null, {
							hk: "25YOda"
						}),
						subtext: W.fbt._("Allow users to insert GIFs from Giphy directly into their comments. Coming soon, a setting to allow users to upload and attach images from their device into comments.", null, {
							hk: "44aVKk"
						})
					}), r.a.createElement(X.p, {
						on: !1,
						onClick: () => n(function(e, t) {
							return e.includes(t) ? e.filter(e => e !== t) : [...e, t]
						}(f, Ue.b.Giphy), "allowedMediaInComments"),
						label: W.fbt._("GIFs", null, {
							hk: "2vQkCj"
						})
					})), r.a.createElement(Q.a, null, W.fbt._("Advanced Settings", null, {
						hk: "53xlS"
					})), r.a.createElement(X.g, {
						label: W.fbt._("Settings for old site", null, {
							hk: "2jzUi8"
						}),
						subtext: W.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
							hk: "4DHBV2"
						}),
						link: `${H.a.oldRedditUrl}/r/${s}/about/edit`,
						onClick: () => e.sendEvent(Object(I.c)(d.hc.Posts)),
						openInNewTab: !0,
						last: !0
					})))
				},
				ze = s("./src/reddit/components/CrowdControlAdoptionCampaign/useCrowdControlCampaign.tsx");
			const Ve = {
					0: {
						text: W.fbt._("Off", null, {
							hk: "30Jfc7"
						}),
						color: "#787C7E"
					},
					1: {
						text: W.fbt._("Lenient", null, {
							hk: "2TWZ21"
						}),
						color: "#46D160"
					},
					2: {
						text: W.fbt._("Moderate", null, {
							hk: "2s7qbB"
						}),
						color: "#FFB000"
					},
					3: {
						text: W.fbt._("Strict", null, {
							hk: "4s6ECM"
						}),
						color: "#EA0027"
					}
				},
				qe = {
					0: W.fbt._("Use Crowd Control to automatically collapse comments from users you’re not sure about.", null, {
						hk: "n75Tc"
					}),
					1: W.fbt._("Comments from users who have negative karma in your community are automatically collapsed.", null, {
						hk: "37Keyu"
					}),
					2: W.fbt._("Comments from new users and users with negative karma in your community are automatically collapsed.", null, {
						hk: "v6NNK"
					}),
					3: W.fbt._("Comments from users who haven’t joined your community, new users, and users with negative karma in your community are automatically collapsed.", null, {
						hk: "4NqwJ"
					})
				},
				Ge = {
					0: W.fbt._("Use Crowd Control to automatically filter posts from users you’re not sure about.", null, {
						hk: "RFsOk"
					}),
					1: W.fbt._("Posts from users who have negative karma in your community are automatically held for review in mod queue.", null, {
						hk: "2cFJqC"
					}),
					2: W.fbt._("Posts from new users and users with negative karma in your community are automatically held for review in mod queue.", null, {
						hk: "1TwCdK"
					}),
					3: W.fbt._("Posts from users who haven’t joined your community, new users, and users with negative karma in your community are automatically held for review in mod queue.", null, {
						hk: "Syn69"
					})
				},
				Ke = {
					0: W.fbt._("No content posted from accounts suspected of ban evasion will automatically be held for review.", null, {
						hk: "ziWwq"
					}),
					1: W.fbt._("Content posted from accounts suspected of ban evasion within the past few weeks will automatically be held for review.", null, {
						hk: "2MWoA6"
					}),
					2: W.fbt._("Content posted from accounts suspected of ban evasion within the past few months will automatically be held for review.", null, {
						hk: "3YPzrf"
					}),
					3: W.fbt._("Content posted from accounts suspected of ban evasion will automatically be held for review.", null, {
						hk: "3CLgTG"
					})
				};

			function Qe(e) {
				const {
					banEvasionProtectionEnabled: t,
					isChatPostsCreationEnabled: s,
					isBroadcastingEnabled: n,
					settings: a,
					subredditName: o,
					subreddit: i,
					update: l
				} = e, {
					allowDiscovery: c,
					banEvasionThreshold: m,
					contentVisible: u,
					crowdControlFilter: p,
					crowdControlLevel: b,
					crowdControlChatLevel: h,
					crowdControlPostLevel: g,
					excludeBannedModqueue: f,
					toxicityThresholdChatLevel: x
				} = a, {
					showCrowdControlCampaign: E
				} = Object(ze.b)(), v = Math.max(m - 1, 0);
				return r.a.createElement(j.a, null, r.a.createElement(y, null, r.a.createElement(j.b, null, W.fbt._("Safety & privacy settings", null, {
					hk: "34ghQV"
				})), r.a.createElement(Q.a, null, W.fbt._("Safety", null, {
					hk: "2QSter"
				})), r.a.createElement(X.p, {
					on: f,
					onClick: () => l(!f, "excludeBannedModqueue"),
					label: W.fbt._("Exclude posts by site-wide banned users", null, {
						hk: "Kmfy0"
					}),
					subtext: W.fbt._("Posts are excluded from modqueue/unmoderated", null, {
						hk: "2P2pfc"
					})
				}), r.a.createElement(X.j, {
					className: je.a.rangeSetting,
					ticks: Ve,
					min: 0,
					max: Object.keys(Ve).length - 1,
					step: 1,
					value: b,
					onChange: e => l(e.target.value, "crowdControlLevel"),
					label: W.fbt._("Adjust Crowd Control for Comments", null, {
						hk: "4oWV2B"
					}),
					subtext: qe[b]
				}), r.a.createElement(X.p, {
					indent: !0,
					on: p,
					labelClassname: E ? je.a.labelWithNewTag : void 0,
					onClick: () => l(!p, "crowdControlFilter"),
					label: r.a.createElement(r.a.Fragment, null, W.fbt._("Hold crowd controlled comments for review", null, {
						hk: "1c0Z06"
					}), E && r.a.createElement(ae.a, {
						className: je.a.labelNewTag
					})),
					subtext: W.fbt._("Instead of collapsing crowd controlled comments will be held for review in mod queue.", null, {
						hk: "1QBJUP"
					})
				}), r.a.createElement(X.j, {
					className: je.a.rangeSetting,
					ticks: Ve,
					min: 0,
					max: Object.keys(Ve).length - 1,
					step: 1,
					value: g,
					onChange: e => l(e.target.value, "crowdControlPostLevel"),
					labelClassname: E ? je.a.labelWithNewTag : void 0,
					label: r.a.createElement(r.a.Fragment, null, W.fbt._("Adjust Crowd Control for Posts", null, {
						hk: "3k9pqR"
					}), E && r.a.createElement(ae.a, {
						className: je.a.labelNewTag
					})),
					subtext: Ge[g]
				}), (s || n) && r.a.createElement(r.a.Fragment, null, r.a.createElement(X.j, {
					ticks: Ve,
					min: 0,
					max: Object.keys(Ve).length - 1,
					step: 1,
					value: h,
					onChange: e => l(e.target.value, "crowdControlChatLevel"),
					label: W.fbt._("Adjust Crowd Control for Chat Posts", null, {
						hk: "vTy7k"
					}),
					subtext: qe[h]
				}), r.a.createElement(X.p, {
					on: !!Number(x),
					onClick: () => {
						l(Number(x) ? "0" : "1", "toxicityThresholdChatLevel")
					},
					label: W.fbt._("Collapse Toxic Messages in Chat Post", null, {
						hk: "1Pk3G5"
					}),
					subtext: W.fbt._("Comments that our model scores as toxic will be automatically collapsed.", null, {
						hk: "Rohtu"
					})
				})), t && r.a.createElement(X.j, {
					className: je.a.rangeSetting,
					ticks: Ve,
					min: 0,
					max: Object.keys(Ve).length - 1,
					step: 1,
					value: v,
					onChange: e => l((e => `${Math.min(parseInt(e,10)+1,4)}`)(e.target.value), "banEvasionThreshold"),
					label: W.fbt._("Ban Evasion Protection", null, {
						hk: "1TrdWv"
					}),
					subtext: Ke[v]
				}), r.a.createElement(Q.a, null, W.fbt._("Discover", null, {
					hk: "1I53SY"
				})), r.a.createElement(X.n, {
					className: je.a.sectionSubtext
				}, W.fbt._("Show your community to the general Reddit population or just to people who have similar interests, by adjusting how people can find it. Not sure what’s best for you? {=Learn More.}", [W.fbt._param("=Learn More.", r.a.createElement("a", {
					className: je.a.subtextLink,
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://mods.reddithelp.com/hc/en-us/sections/360000685771-General-Common-Questions"
				}, W.fbt._("Learn More.", null, {
					hk: "3oTITT"
				})))], {
					hk: "4nomNH"
				})), !i.isQuarantined && r.a.createElement(r.a.Fragment, null, r.a.createElement(X.p, {
					on: u,
					onClick: () => l(!u, "contentVisible"),
					label: W.fbt._("Show up in high-traffic feeds", null, {
						hk: "3l7KBc"
					}),
					subtext: W.fbt._("Allow your community to be in r/all, r/popular, and trending lists where it can be seen by the general Reddit population.", null, {
						hk: "iH0lY"
					})
				}), r.a.createElement(X.p, {
					on: c,
					onClick: () => l(!c, "allowDiscovery"),
					label: W.fbt._("Get recommended to individual redditors", null, {
						hk: "4wmaiH"
					}),
					subtext: W.fbt._("Let Reddit recommend your community to people who have similar interests.", null, {
						hk: "487MMM"
					})
				})), r.a.createElement(Q.a, null, W.fbt._("Advanced Settings", null, {
					hk: "3TL9Or"
				})), r.a.createElement(X.g, {
					link: `${H.a.oldRedditUrl}/r/${o}/about/edit`,
					onClick: () => e.sendEvent(Object(I.c)(d.hc.Safety)),
					openInNewTab: !0,
					last: !0,
					label: W.fbt._("Settings for old site", null, {
						hk: "1WHvCJ"
					}),
					subtext: W.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "2wPmwa"
					})
				})))
			}

			function Xe(e) {
				const {
					settings: t,
					subredditName: s,
					update: n
				} = e, {
					wikiEditAge: a,
					wikiEditKarma: o,
					wikimode: i
				} = t;
				return r.a.createElement(j.a, null, r.a.createElement(y, null, r.a.createElement(j.b, null, W.fbt._("Wiki settings", null, {
					hk: "1gmluS"
				})), r.a.createElement(Q.a, null, W.fbt._("Community wiki pages", null, {
					hk: "1LwxaS"
				})), r.a.createElement(X.d, {
					label: W.fbt._("Wikis can be edited by", null, {
						hk: "3brAqG"
					}),
					displayItems: Object.values(te.o),
					displayTitle: te.o[i],
					items: Object.keys(te.o),
					selected: i,
					onClick: e => n(e, "wikimode"),
					id: "wikimode",
					descriptions: te.n
				}), r.a.createElement(X.l, {
					label: W.fbt._("Karma required to edit and create wiki pages", null, {
						hk: "3OgR7v"
					}),
					direction: "column"
				}, r.a.createElement(C, {
					onChange: e => n(e.currentTarget.value, "wikiEditKarma"),
					isInvalid: !(o >= te.g && o <= te.m),
					min: te.g,
					max: te.m,
					type: "number",
					value: o
				})), r.a.createElement(X.l, {
					label: W.fbt._("Age of Reddit account required to edit and create wiki pages", null, {
						hk: "3UE6cD"
					}),
					direction: "column"
				}, r.a.createElement(C, {
					onChange: e => n(e.currentTarget.value, "wikiEditAge"),
					isInvalid: !(a >= te.g && a <= te.l),
					min: te.g,
					max: te.l,
					type: "number",
					value: a
				})), r.a.createElement(Q.a, null, W.fbt._("Advanced Settings", null, {
					hk: "4drMhK"
				})), r.a.createElement(X.g, {
					label: W.fbt._("Settings for old site", null, {
						hk: "2YU3sQ"
					}),
					subtext: W.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "1ihkVe"
					}),
					link: `${H.a.oldRedditUrl}/r/${s}/about/edit`,
					onClick: () => e.sendEvent(Object(I.c)(d.hc.Wikis)),
					openInNewTab: !0,
					last: !0
				})))
			}
			const {
				fbt: Je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ye = Object(l.c)({
				allowChatPostCreation: (e, t) => Object(P.b)(e, t.subredditId),
				banEvasionProtectionEnabled: N.d.banEvasionProtectionEnabled,
				isBroadcastingEnabled: (e, t) => Object(R.c)(e, t.subredditId),
				isChatPostsCreationEnabled: (e, t) => Object(P.c)(e, t.subredditId),
				isEmployee: L.N,
				notificationSettings: F.b,
				restrictions: A.o,
				settings: (e, t) => Object(A.W)(e, t.subredditId),
				subreddit: A.U,
				selectedPrimaryTag: D.s,
				hasSecondaryTags: D.m,
				geoPlace: (e, t) => e.tags.models.geoPlaces[t.subredditId],
				subredditCountrySite: (e, t) => ((e, t) => e.subreddits.countrySiteSettings[t])(e, t.subredditId),
				subredditCountryEditEnabled: (e, t) => Object(B.g)(e),
				subredditLanguageEditEnabled: (e, t) => Object(B.h)(e)
			}), Ze = Object(i.b)(Ye, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onViewPageEvent: () => e(Object(c.a)()),
					testWelcomeMessage: (t, s) => e(Object(m.i)(t, s)),
					save: (t, s) => e(Object(m.j)(s, t, void 0)),
					saveCommunityTopics: t => e(Object(x.e)(t, T.a.communitySettings)),
					onPrimarySelect: t => e(Object(x.f)({
						primaryTagId: t,
						subredditId: s
					})),
					savePrimaryTopic: t => {
						t && e(Object(x.o)(s, {
							tagId: t.id,
							state: M.d.TAGGED
						}, !1))
					},
					updateSubredditWelcomeMessage: (t, s, n) => e(g(t, s, n)),
					saveSubredditCountrysite: (t, s) => {
						if (s) return e(Object(U.e)(t, s))
					}
				}
			});
			class $e extends r.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.saveSettings = () => {
						this.props.save(this.state.changed, this.props.subredditId), (this.props.subredditCountryEditEnabled || this.props.subredditLanguageEditEnabled) && this.props.subpageName === d.hc.Community && this.props.saveSubredditCountrysite(this.props.subredditId, this.props.subredditCountrySite), this.props.saveCommunityTopics(this.props.subredditId), this.props.savePrimaryTopic(this.props.selectedPrimaryTag);
						for (const e in this.state.changed) this.props.sendEvent(Object(I.d)(e, this.state.changed[e], this.props.settings[e]));
						this.setState({
							settings: this.state.settings,
							changed: {}
						})
					}, this.update = function(e, s) {
						let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						n && t.props.sendEvent(Object(I.e)(s, e, t.state.settings[s])), t.setState(t => ({
							changed: {
								...t.changed,
								[s]: e
							},
							settings: {
								...t.settings,
								[s]: e
							}
						}))
					}, this.onFocusWelcomeMessageInput = () => this.props.sendEvent(Object(I.f)("click", "welcome_message_edit")), this.renderSubpage = () => {
						const e = {
							...this.props,
							settings: this.state.settings,
							update: this.update,
							onFocusWelcomeMessageInput: this.onFocusWelcomeMessageInput
						};
						if (!this.state.settings) return null;
						switch (this.props.subpageName) {
							case d.hc.Safety:
								return r.a.createElement(Qe, e);
							case d.hc.Notifications:
								return r.a.createElement(j.a, null, r.a.createElement(y, null, r.a.createElement(O.a, {
									subredditId: e.subredditId,
									subredditName: e.subredditName
								})));
							case d.hc.Posts:
								return r.a.createElement(We, e);
							case d.hc.Wikis:
								return r.a.createElement(Xe, e);
							case d.hc.ContentTag:
								return r.a.createElement(Le, {
									subreddit: e.subreddit
								});
							default:
								return r.a.createElement(Ne, e)
						}
					}, this.state = {
						settings: e.settings,
						changed: {}
					}
				}
				componentDidMount() {
					this.props.onViewPageEvent()
				}
				componentDidUpdate(e) {
					!this.props.settings || a()(e.settings, this.props.settings) || a()(this.state.settings, this.props.settings) || this.setState({
						settings: this.props.settings
					})
				}
				render() {
					return r.a.createElement(r.a.Fragment, null, this.props.subpageName !== d.hc.ContentTag && r.a.createElement(j.c, null, r.a.createElement(S.l, {
						onClick: this.saveSettings,
						"data-redditstyle": !0
					}, Je._("Save changes", null, {
						hk: "8mSp0"
					}))), this.renderSubpage())
				}
			}
			t.a = Ze(Object(w.c)($e))
		},
		"./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/models/Tags/index.ts"),
				l = s("./src/reddit/selectors/tags.ts");
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), c = Object(r.c)({
				selectedOptions: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(l.r)(e, {
						subredditId: s
					})
				}
			});
			t.a = Object(o.b)(c)(e => a.a.createElement(a.a.Fragment, null, e.selectedOptions.length, "/", i.a))
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less": function(e, t, s) {
			e.exports = {
				menuItemsWrapper: "_1OISxDncG3tn4CibwqeC4e",
				tooltip: "UNHdPZIwwyCehEV-NfEY7"
			}
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/tags/index.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/ContentTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				g = s.n(h);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class x extends o.a.Component {
				componentDidMount() {
					this.props.sendEvent(b.e), this.props.onViewTooltip()
				}
				render() {
					const {
						translatedTitle: e,
						translatedDesc: t,
						translatedButtonText: s
					} = this.props;
					return o.a.createElement("div", {
						className: g.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, o.a.createElement("span", {
						className: g.a.topRow
					}, o.a.createElement("h3", {
						className: g.a.title
					}, e)), o.a.createElement("p", {
						className: g.a.tooltipBody
					}, t), o.a.createElement(u.l, {
						className: g.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, s || f._("Got it", null, {
						hk: "4CoCjQ"
					})))
				}
			}
			var E = Object(r.b)(void 0, e => ({
				onDismissTooltip: () => {
					e(Object(d.i)()), Object(p.zb)()
				},
				onViewTooltip: () => {
					Object(p.Wb)()
				}
			}))(Object(m.c)(x));
			const v = "editable-primary-topic-idcard";
			var k = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				_ = s("./src/reddit/models/Tags/index.ts"),
				C = s("./src/reddit/selectors/tags.ts"),
				y = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less"),
				O = s.n(y);
			const j = e => {
					let {
						hasPrimaryTag: t,
						hasSecondaryTags: s
					} = e;
					if (t) return null;
					let a = n.fbt._("Add Community Topics", null, {
							hk: "2wd4kg"
						}),
						r = n.fbt._("Tell us what topics are relevant to your community so we can surface it to the right users", null, {
							hk: "24NCiQ"
						});
					return s && (a = n.fbt._("Add a Primary Topic", null, {
						hk: "41x5Gv"
					}), r = n.fbt._("Oops we don’t have a primary topic yet. Add one so we can surface your community to the right users", null, {
						hk: "XayPA"
					})), o.a.createElement(c.a, {
						className: O.a.tooltip,
						tooltipId: v,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, o.a.createElement(E, {
						translatedTitle: a,
						translatedDesc: r
					}))
				},
				w = {
					availablePrimaryTags: C.p
				},
				S = Object(i.c)({
					...w,
					selectedPrimaryTag: (e, t) => {
						let {
							subredditId: s
						} = t;
						return s && Object(C.s)(e, {
							subredditId: s
						}) || null
					},
					hasSecondaryTags: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object.keys(Object(C.o)(e, {
							itemId: s
						})).length > 0
					},
					isSaving: C.D
				}),
				N = Object(i.c)({
					...w,
					selectedPrimaryTag: (e, t) => {
						let {
							subredditId: s
						} = t;
						return s && Object(C.x)(e, {
							subredditId: s
						}) || null
					},
					hasSecondaryTags: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object.keys(Object(C.o)(e, {
							itemId: s
						})).length > 0
					},
					isSaving: C.D
				}),
				I = Object(i.c)({
					...w,
					selectedPrimaryTag: C.v,
					hasSecondaryTags: () => !1,
					isSaving: e => Object(C.D)(e)
				}),
				T = (e, t) => {
					let {
						subredditId: s,
						onPrimarySelect: n
					} = t;
					return {
						onPrimaryTopicSelected: t => {
							t.isSelected || !n ? t.isSelected || (e(Object(l.f)({
								primaryTagId: t.value,
								subredditId: s
							})), e(Object(l.o)(s, {
								tagId: t.value,
								state: _.d.TAGGED
							}))) : n(t.value)
						},
						onShowTooltip: () => {
							e(Object(d.f)({
								tooltipId: v
							}))
						}
					}
				};
			class M extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					const e = this.props.onShowTooltip;
					this.setState({
						tooltipDismissed: Object(p.r)()
					}, () => {
						this.isTooltipEnabled() && e && e()
					})
				}
				isTooltipEnabled() {
					const {
						shouldShowTooltip: e = !1,
						selectedPrimaryTag: t
					} = this.props;
					return !this.state.tooltipDismissed && !t && e
				}
				render() {
					const {
						availablePrimaryTags: e,
						className: t,
						hasSecondaryTags: s,
						isSaving: a,
						onPrimaryTopicSelected: r,
						selectedPrimaryTag: i
					} = this.props, l = i && i.text;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(k.b, {
						id: this.isTooltipEnabled() ? v : void 0,
						className: t,
						isTopicsStyle: !0,
						displayText: l || n.fbt._("Add a Primary Topic", null, {
							hk: "1HgVte"
						}),
						options: e.map(e => ({
							displayText: e.text,
							value: e.id,
							isSelected: !!i && i.id === e.id
						})),
						onSelect: r,
						menuItemsClassName: O.a.menuItemsWrapper,
						showSelectedCheckmark: !0,
						isSaving: a
					}), this.isTooltipEnabled() && o.a.createElement(j, {
						hasPrimaryTag: !!i,
						hasSecondaryTags: s
					}))
				}
			}
			Object(r.b)(I, e => ({
				onPrimaryTopicSelected: t => {
					e(Object(l.a)({
						primaryTagId: t.value
					}))
				}
			}))(M);
			const P = Object(r.b)(N, T)(M),
				R = Object(r.b)(S, T);
			t.b = R(M)
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less": function(e, t, s) {
			e.exports = {
				suggestedTopicsContainer: "_3qCTJNZ-iSCZa0wyVfs6my",
				relatedText: "_389N9jvZJu60U3E7vIF00n",
				closeIcon: "M40GQ3RaivlkCl8WQ-pXo",
				plusIcon: "_2OYvdU1reofcbKMJ0wvC_x",
				suggestedTopic: "_1RmiLhJpOUx_hgduPf3F5O",
				closeIconContainer: "sHLJV3zATRod0k1f_m71I",
				suggestedTopicText: "_1-rmQV4Wee08Dt-h2GyW-o"
			}
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/tags/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/icons/svgs/Close/index.tsx"),
				u = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				p = s("./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less"),
				b = s.n(p);
			var h = e => o.a.createElement("span", {
					className: b.a.suggestedTopic,
					onClick: () => e.onSuggestedTopicSelected(e.suggestedTopic)
				}, o.a.createElement(u.a, {
					className: b.a.plusIcon
				}), o.a.createElement("span", {
					className: b.a.suggestedTopicText
				}, e.suggestedTopic.displayText), o.a.createElement("span", {
					className: b.a.closeIconContainer,
					onClick: t => {
						t.preventDefault(), t.stopPropagation(), e.onSuggestedTopicDismissed(e.suggestedTopic)
					}
				}, o.a.createElement(m.a, {
					className: b.a.closeIcon
				}))),
				g = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				f = s("./src/reddit/models/Tags/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/tags.ts");
			const v = Object(i.c)({
					suggestedOptions: (e, t) => {
						let {
							subredditId: s
						} = t;
						const n = Object(E.y)(e, {
								itemId: s
							}),
							a = Object(E.r)(e, {
								subredditId: s
							}),
							o = Object(E.w)(e, {
								subredditId: s
							});
						return n.filter(e => !!e.id && o !== e.id && !a.find(t => !!t.id && t.id === e.id))
					}
				}),
				k = Object(r.b)(v, (e, t) => {
					let {
						subredditId: s,
						onOptionSelected: a,
						context: o
					} = t;
					return {
						onSuggestedOptionDismissed: t => {
							e(Object(d.n)(s, [], [{
								subredditId: s,
								tagId: t.id,
								isRelevant: !1
							}], o, !0))
						},
						onSuggestedOptionSelected: t => {
							e((e, r) => {
								const i = r();
								Object(E.r)(i, {
									subredditId: s
								}).length >= f.a ? e(Object(c.f)({
									...Object(c.e)(n.fbt._("You can only add up to {max number of topics} community topics", [n.fbt._param("max number of topics", f.a.toString())], {
										hk: "1OySAh"
									}), x.b.Error),
									duration: c.a
								})) : (e(Object(d.j)({
									subredditId: s,
									option: t
								})), Object(g.c)(r(), s, t, {
									context: o
								}), a && a(t))
							})
						}
					}
				});
			t.a = k(e => e.suggestedOptions.length ? o.a.createElement("div", {
				className: Object(l.a)(b.a.suggestedTopicsContainer, e.className)
			}, e.children || o.a.createElement("span", {
				className: b.a.relatedText
			}, n.fbt._("Related:", null, {
				hk: "1qt7CO"
			})), e.suggestedOptions.map(t => o.a.createElement(h, {
				key: t.id,
				suggestedTopic: t,
				onSuggestedTopicSelected: e.onSuggestedOptionSelected,
				onSuggestedTopicDismissed: e.onSuggestedOptionDismissed
			}))) : null)
		},
		"./src/reddit/components/CommunityTopics/index.m.less": function(e, t, s) {
			e.exports = {
				communityTopicsContainer: "wsNyCIZw7veQPURlfXwXb"
			}
		},
		"./src/reddit/components/CommunityTopics/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/tags/index.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/components/MultiOptionSelect/index.tsx"),
				m = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				u = s("./src/reddit/models/Tags/index.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/tags.ts"),
				h = s("./src/reddit/components/CommunityTopics/index.m.less"),
				g = s.n(h);
			const f = Object(i.c)({
				availableSubredditTags: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(b.d)(e, {
						subredditId: s
					})
				},
				subredditTags: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(b.o)(e, {
						itemId: s
					})
				},
				availableGlobalOptions: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(b.a)(e, {
						thingId: s
					})
				},
				selectedOptions: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(b.r)(e, {
						subredditId: s
					})
				},
				isLoading: e => Object(b.B)(e),
				currentInput: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(b.i)(e, {
						subredditId: s
					})
				}
			});
			class x extends o.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							s = e.filter(e => !e.selected);
						this.onOptionsSelected(t), s.forEach(e => this.onOptionDeselected(e))
					}, this.onFocus = () => {
						this.props.onSearchBarFocused(), this.props.onFocus && this.props.onFocus()
					}
				}
				onOptionsSelected(e) {
					const t = u.a - this.props.selectedOptions.length,
						s = e.filter(e => !!e.displayText.trim()),
						n = s.slice(0, t);
					n.forEach(e => {
						if (!e.id) {
							const t = Object(b.c)(e.displayText, this.props.availableSubredditTags);
							t && (e = Object(u.f)(t, !0))
						}
						this.props.optionSelected({
							...e,
							displayText: e.displayText.trim()
						})
					}), n.length !== s.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected(e)
				}
				render() {
					return o.a.createElement("div", {
						className: g.a.communityTopicsContainer
					}, o.a.createElement(c.a, {
						readOnlyMode: this.props.readOnlyMode,
						addText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						childClassNames: this.props.childClassNames,
						dropdownHeaderText: n.fbt._("Suggested topics", null, {
							hk: "1RASWg"
						}),
						input: this.props.currentInput,
						isError: this.props.selectedOptions.length > u.a,
						isLoading: this.props.isLoading,
						maxOptionLength: u.b,
						maxOptionsToDisplay: this.props.maxTopicsToDisplay,
						onSearchBarFocus: this.onFocus,
						onSearchBarBlur: this.props.onBlur,
						onInputChanged: e => {
							this.props.onInputChanged(e)
						},
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: this.props.selectedOptions,
						selectedOptionComponent: this.props.selectedOptionComponent,
						splitOnCommaPress: !0
					}, this.props.children))
				}
			}
			t.b = Object(r.b)(f, (e, t) => {
				let {
					subredditId: s,
					context: a
				} = t;
				return {
					optionSelected: t => {
						e(Object(l.j)({
							subredditId: s,
							option: t
						})), e((e, n) => {
							m.e(n(), s, t, {
								context: a
							})
						})
					},
					optionDeselected: t => {
						e(Object(l.i)({
							subredditId: s,
							option: t
						})), e((e, n) => {
							m.d(n(), s, t, {
								context: a
							})
						})
					},
					onInputChanged: t => e(Object(l.h)({
						subredditId: s,
						input: t
					})),
					onSearchBarFocused: () => e((e, t) => {
						m.b(t(), s, {
							context: a
						})
					}),
					onMaxTopicsHit: () => e((e, t) => {
						e(Object(d.f)({
							...Object(d.e)(n.fbt._({
								"*": "You can only add up to max {number} community topics",
								_1: "You can only add up to max 1 community topic"
							}, [n.fbt._plural(u.a, "number")], {
								hk: "s07I1"
							}), p.b.Error),
							duration: d.a
						}))
					})
				}
			})(x)
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				ctaExperiment: "_3xMykgG1y_Ln8tQs4ciV4i",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe",
				modModeBannerWrapper: "_1_voPxd0-GKljAjvO7ZcgJ"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderSubredditIcon", (function() {
				return Pe
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/User/index.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/actions/postFlair.ts"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				y = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				N = s("./src/reddit/components/AwardBadges/index.tsx"),
				I = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				T = s("./src/reddit/components/CommentsLink/index.tsx"),
				M = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				P = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				R = s("./src/reddit/components/ExpandoButton/index.tsx"),
				A = s("./src/reddit/components/Flatlist/index.tsx"),
				F = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				D = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				U = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				B = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				H = s("./src/reddit/components/ModModeReports/index.tsx"),
				W = s("./src/reddit/components/ModModeReports/helpers.ts"),
				z = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				V = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				q = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				G = s("./src/reddit/components/PostBadges/index.tsx"),
				K = s("./src/reddit/components/PostContainer/index.tsx"),
				Q = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				X = s("./src/reddit/components/PostLeftRail/index.tsx"),
				J = s("./src/reddit/components/PostMedia/index.tsx"),
				Y = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Z = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				$ = s("./src/reddit/components/PostTitle/index.tsx"),
				ee = s("./src/reddit/components/PostTopMeta/index.tsx"),
				te = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				se = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ne = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				ae = s("./src/reddit/components/SubredditIcon/index.tsx"),
				oe = s("./src/reddit/components/VerticalVotes/index.tsx"),
				re = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				le = s("./src/reddit/contexts/Post/index.tsx"),
				de = s("./src/reddit/controls/Checkbox/index.tsx"),
				ce = s("./src/reddit/controls/MetaData/index.tsx"),
				me = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ue = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				pe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				be = s("./src/reddit/helpers/postEvent.ts"),
				he = s("./src/reddit/hooks/useIsOverlay.ts"),
				ge = s("./src/reddit/hooks/useTheme.ts"),
				fe = s("./src/reddit/hooks/useUserContext.ts"),
				xe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ve = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				ke = s("./src/reddit/selectors/showPromotedCTA.ts"),
				_e = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ce = s.n(_e),
				ye = s("./src/reddit/components/CompactPost/index.m.less"),
				Oe = s.n(ye);

			function je() {
				return (je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const we = e => {
					let {
						isCompact: t,
						...s
					} = e;
					return o.a.createElement(R.a, je({
						className: Object(c.a)(Oe.a.responsiveExpandoButton, {
							[Oe.a.mHideAboveSmallTablets]: !!t,
							[Oe.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				Se = () => Object(l.c)({
					activeModalId: C.a,
					crosspost: j.d,
					flairStyleTemplate: ie.W,
					isActive: j.j,
					isExpanded: j.m,
					showPromotedCTA: ke.a,
					layout: ie.S,
					moderatorPermissions: y.m,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					showEditFlair: O.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(y.i)(e, s.id)
					},
					showCTAExperimentDesign: ve.a
				}),
				Ne = (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: a
							} = t;
							return e(Object(k.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: a
							}))
						},
						handleVote: t => {
							const n = t === E.a.upvoted ? Object(v.kb)(s) : Object(v.w)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(v.gb)(s)),
						onOpenReportsDropdown: t => e(Object(_.h)({
							tooltipId: t
						}))
					}
				};
			class Ie extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: n,
						currentUser: a,
						eventFactory: r,
						flairStyleTemplate: i,
						handleVote: l,
						imageGalleryCurrentItem: m,
						isCheckboxSelected: u = !1,
						isCommentsPage: E,
						isCommentPermalink: v,
						isExpanded: k,
						isGalleryTileLayoutDefault: _,
						isModWithUserNotesPermissions: C,
						isOverlay: y,
						isProfilePostListing: O,
						inSubredditOrProfile: j = !1,
						layout: R,
						moderatorPermissions: J,
						modModeEnabled: ne,
						onClickPost: ae,
						onFlairChanged: ie,
						onIgnoreReports: le,
						poll: ce,
						post: he,
						subredditOrProfile: ge,
						userIsOp: fe,
						hideModTools: ve,
						scrollerItemRef: ke,
						showBulkActionCheckbox: _e,
						showEditFlair: ye,
						toggleCheckbox: je,
						tooltipType: Se,
						sendEvent: Ne,
						shouldShowGalleryTileOption: Ie,
						showPromotedCTA: Me,
						showCTAExperimentDesign: Pe
					} = this.props, Ae = !!he.media && he.media.type === f.o.RTJSON, Fe = fe && Ae, De = Object(Q.b)(he.id, y), Le = Object(pe.a)(J), Ue = Object(me.a)(J), Be = Object(ue.a)(J), He = `-mod-actions-menu-${he.id}`, We = `voting-arrows-${he.id}`, ze = !!a && Object(x.e)(a) === he.author, Ve = Object(B.a)(he), qe = Object(W.c)(he), Ge = Object(F.a)("View--Reports", he.id, Se), Ke = Object(W.a)(he), Qe = !(y || E || v), Xe = he.media && he.media.type === f.o.LIVEVIDEO, Je = e => Ne(Object(g.k)(he.id, e)), Ye = Object(d.t)(he, m), {
						source: Ze
					} = Ye, $e = o.a.createElement(K.a, {
						className: Object(c.a)(Ce.a.compactPostStyles, Oe.a.postContainer, Object(h.a)(this.props), t),
						isOverlay: y,
						style: {
							...Object(h.d)(this.props),
							...Object(h.b)(this.props.flairStyleTemplate)
						},
						post: he,
						onClick: ae,
						eventFactory: r
					}, o.a.createElement("div", {
						className: Oe.a.compactWrapper
					}, o.a.createElement("div", {
						className: Oe.a.leftRailWrapper
					}, o.a.createElement("div", {
						className: Oe.a.leftRail,
						style: {
							borderColor: Object(X.c)({
								isRemoved: !!he.bannedBy,
								isReported: Object(b.a)(he),
								isSponsored: he.isSponsored,
								theme: this.props.theme
							})
						}
					}, _e && o.a.createElement(de.a, {
						className: Oe.a.bulkActionCheckbox,
						isCheckboxSelected: u,
						toggleCheckbox: je
					}), o.a.createElement(oe.a, {
						className: Oe.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: he,
						onVoteClick: l
					}), o.a.createElement(M.a, {
						className: Oe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: he,
						onVoteClick: l,
						upvoteTooltipId: We
					}))), o.a.createElement(q.a, {
						className: Object(c.a)(Oe.a.content, {
							[Oe.a.isEvent]: Object(be.a)(he)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, o.a.createElement(P.a, {
						isCompactMode: !0,
						post: he
					}), o.a.createElement("div", {
						className: Oe.a.compactPostRow
					}, !ve && o.a.createElement(we, {
						crosspost: n,
						isCommentsPage: E,
						isCompact: !1,
						isExpanded: k,
						post: he,
						useMediaIcons: !0
					}), !j && !he.isSponsored && o.a.createElement(D.h, {
						type: he.belongsTo.type,
						id: he.belongsTo.id
					}), o.a.createElement("div", {
						className: Oe.a.topLine,
						"data-click-id": "body"
					}, !!he.recommendationContext && o.a.createElement(V.a, {
						content: he.recommendationContext.content,
						layout: p.g.Compact,
						post: he
					}), o.a.createElement($.c, {
						post: he,
						poll: ce,
						size: $.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Re(he, ge), o.a.createElement(ee.d, {
						className: Oe.a.postTopMeta,
						flairStyleTemplate: i,
						isModWithUserNotesPermissions: C,
						post: he,
						showSub: !!ge && !j && !he.isSponsored,
						subredditOrProfile: ge
					}), o.a.createElement(G.a, {
						className: Oe.a.postBadges,
						displayText: ge ? ge.displayText : null,
						inSubredditOrProfile: j,
						post: he
					}), o.a.createElement(N.a, {
						thing: he,
						tooltipType: y ? ee.c.Lightbox : void 0
					})), Qe && !Xe && o.a.createElement("div", null, o.a.createElement(I.a, {
						className: Oe.a.liveDiscussionIcon,
						postId: he.postId
					})), !he.isSurveyAd && o.a.createElement("div", {
						className: Oe.a.flatList
					}, o.a.createElement(T.a, {
						className: Oe.a.commentsLink,
						hasModPostPerms: Le,
						isCommentsPage: E,
						isCommentPermalink: v,
						isOverlay: y,
						postId: he.id,
						modModeEnabled: ne,
						numComments: he.numComments,
						type: p.g.Compact
					}), o.a.createElement(z.a, {
						className: Oe.a.modToolsFlatlist,
						isOverlay: !1,
						layout: R,
						modModeEnabled: ne,
						post: he,
						sendEvent: Ne,
						showIconsOnly: !0
					}), Le && o.a.createElement(L.a, {
						dropdownId: He,
						onClick: () => Je("post_mod_action_menu")
					}, o.a.createElement(A.b, null), o.a.createElement(Y.a, {
						canEditFlair: Ue && ye,
						hasModPostPerms: Le,
						hasModFullPerms: Be,
						isOverlay: !1,
						isPostAuthor: ze,
						modModeEnabled: ne,
						post: he,
						tooltipId: He
					})), Le && qe && !ne && o.a.createElement(se.c, {
						text: `${Ke}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Ge), Je("post_report_menu")
						},
						id: Ge
					}, o.a.createElement(re.a, {
						model: he,
						onIgnoreReports: () => {
							le(), Je(he.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ge
					}), he.ignoreReports ? o.a.createElement(xe.a, null) : o.a.createElement(Ee.a, null)), o.a.createElement(Z.a, {
						currentProfileName: s,
						isCommentsPage: E,
						isOverlay: !1,
						isProfilePostListing: O,
						isRecommendationPost: !!he.recommendationContext,
						layout: R,
						permalink: he.permalink,
						sendEvent: Ne,
						showEditPost: Fe,
						showEditFlair: ye,
						dropdownId: `${he.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(Z.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ve && o.a.createElement(we, {
						crosspost: n,
						isCommentsPage: E,
						isCompact: !0,
						isExpanded: k,
						post: he,
						useMediaIcons: !0
					}))), Me && Ze && Ze.url && !he.isSurveyAd && o.a.createElement(w.a, {
						className: Object(c.a)(Oe.a.adLinkWrapper, {
							[Oe.a.ctaExperiment]: Pe
						}),
						ctaExperimentDesign: Pe && "compact"
					}, o.a.createElement(S.a, {
						post: he,
						adLinkContent: Ye,
						isCompact: !0,
						ctaExperimentDesign: Pe && "compact"
					})), ne && Le && Ve && o.a.createElement("div", {
						className: Oe.a.modModeBannerWrapper
					}, o.a.createElement(U.a, {
						thing: he
					})), ne && Le && qe && o.a.createElement("div", {
						className: Oe.a.modModeBannerWrapper
					}, o.a.createElement(H.a, {
						onIgnoreReports: le,
						reportable: he
					})), o.a.createElement(D.d, null))), k && o.a.createElement(Te, {
						post: he,
						scrollerItemRef: ke,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Ie,
						isGalleryTileLayoutDefault: _
					}), e === De && o.a.createElement(Q.a, {
						flairs: he.flair,
						subredditId: he.belongsTo.id,
						modalId: De,
						onFlairChanged: ie
					}));
					return o.a.createElement(te.b, null, $e)
				}
			}
			const Te = e => o.a.createElement(q.a, {
					className: Object(c.a)(e.className, Oe.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? o.a.createElement("div", {
					className: Oe.a.crosspostMediaWrapper
				}, Me(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Me(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Me = (e, t, s, n) => o.a.createElement(J.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0,
					showPromotedCTA: !0
				}),
				Pe = e => o.a.createElement(i.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, o.a.createElement(ae.b, {
					className: Oe.a.subredditIcon,
					subredditOrProfile: e
				})),
				Re = (e, t) => o.a.createElement("div", {
					className: Oe.a.responsiveMeta
				}, o.a.createElement(ce.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), o.a.createElement(ce.c, null), Object(ce.d)(e.numComments), o.a.createElement(ce.c, null), t && o.a.createElement("a", {
					href: t.url
				}, o.a.createElement(ce.a, null, t.displayText)), e.isSponsored && [o.a.createElement(ne.a, {
					key: "label",
					isSurveyAd: e.isSurveyAd
				}), o.a.createElement(ce.c, {
					key: "separator"
				})], !e.isSponsored && o.a.createElement(ce.a, null, " ", n.fbt._("Posted by", null, {
					hk: "UqFDR"
				}), " "), o.a.createElement(ee.b, {
					post: e,
					isDeleted: e.author === m.E
				}));
			t.default = Object(le.b)(o.a.memo((function(e) {
				const t = Object(fe.a)(),
					s = Object(a.useMemo)(() => Se(), []),
					n = Object(r.e)(n => s(n, {
						...e,
						...t
					})),
					i = Object(r.d)(),
					l = Ne(i, {
						...e,
						...t
					});
				return o.a.createElement(Ie, je({}, e, t, n, l, {
					onFlairChanged: t => {
						let {
							previewFlair: s,
							selectedTemplateId: n
						} = t;
						return l.dispatchFlairChanged({
							post: e.post,
							previewFlair: s,
							selectedTemplateId: n
						})
					},
					sendEvent: Object(u.b)(),
					isOverlay: Object(he.a)(),
					theme: Object(ge.a)()
				}))
			})))
		},
		"./src/reddit/components/ConfirmModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3DhQ2s_h1XCiwltypHmlbp",
				close: "_2oxgXPm-tiPAEPsJoUw-ZD",
				headerText: "_2sDCzF6zlpNJ5cbVDRCPOS",
				text: "_3eWjwYvkDvPzyq4FlubrF9",
				buttonWrapper: "_6ZHRZ8Epefe887d7LL-q6",
				primaryButton: "Ch-0dFLxLOtcc6xCyQvsk",
				secondaryButton: "bgwHoiDoSwFVZKRTLRQMF"
			}
		},
		"./src/reddit/components/ConfirmModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				r = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/components/ConfirmModal/index.m.less"),
				l = s.n(i),
				d = s("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(o.a)(e => a.a.createElement("div", {
				className: l.a.container
			}, a.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: l.a.close
			}, a.a.createElement(d.b, null)), a.a.createElement(d.i, null, a.a.createElement("h2", {
				className: l.a.headerText
			}, e.headerText)), a.a.createElement(d.l, null, e.message && a.a.createElement("p", {
				className: l.a.text
			}, e.message), e.children && a.a.createElement("div", {
				className: l.a.text
			}, e.children), a.a.createElement("div", {
				className: l.a.buttonWrapper
			}, e.cancelText && a.a.createElement(r.o, {
				className: l.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), a.a.createElement(r.l, {
				className: l.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/ContentSurvey/RatingCard.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/components/ContentSurvey/index.m.less"),
				i = s.n(r),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/hooks/useTheme.ts"),
				m = s("./src/reddit/icons/svgs/Info/index.tsx"),
				u = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				var t, s;
				const {
					ratingResponse: n,
					subredditId: r,
					children: g
				} = e, f = null !== (t = Object(o.e)(e => Object(b.U)(e, {
					subredditId: r
				}))) && void 0 !== t ? t : {}, x = Object(c.a)();
				return a.a.createElement("div", {
					className: i.a.ratingCard
				}, "PENDING" === (null == n ? void 0 : n.status) && a.a.createElement("div", {
					className: Object(l.a)(i.a.card, i.a.pending)
				}, a.a.createElement(m.a, {
					className: i.a.infoIcon
				}), h._("Content tag is pending until reviewed", null, {
					hk: "Umha7"
				})), a.a.createElement("div", {
					className: i.a.card
				}, a.a.createElement("div", {
					className: i.a.banner,
					style: {
						background: Object(u.g)(Object(p.a)({
							theme: x
						}).banner.backgroundColor, Object(p.a)({
							theme: x
						}).banner.backgroundImage, Object(p.a)({
							theme: x
						}).banner.backgroundImagePosition)
					}
				}, a.a.createElement(d.b, {
					className: i.a.communityIcon,
					iconUrl: null === (s = f.icon) || void 0 === s ? void 0 : s.url
				})), a.a.createElement("h3", {
					className: i.a.communityName
				}, n ? a.a.createElement("span", null, f.displayText, a.a.createElement("img", {
					className: i.a.ratingImg,
					src: n.rating.icon.png
				})) : f.displayText), g))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e(6), s.e(8)]).then(s.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				r = Object(a.a)(o);
			t.a = r
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, s) {
			e.exports = {
				feedBanner: "_3oY2sjcQ7EgBYd7agqleJv",
				notepadSnoo: "B0cLCCVs794x74kjJidDO",
				bannerCopy: "_2NfcId0Mtt4-NP4AbrAck5",
				copy: "BcSr5zM39F4cQJ9MQqkRn",
				meta: "r9AkMaLWOPKfC5Swx9XQf",
				chevron: "yFbNzMMxa-u2DgUP3Gz5h",
				header: "wKkshJ3Og8gaDgJmSULiK",
				introCopy: "m3rT-KnA6An7scRNg10UW",
				checkbox: "Y5aDAUsXXQaMbdCe1-qdG",
				result: "_29ewfEVekvKEl_P2hqf4tI",
				heading: "_3yKTUBG4MrGHv9n644t4Ua",
				card: "_18VT-IpGoX6SDdyHHLI_eo",
				pending: "hg80uiMz2ssH44RLsmlhG",
				infoIcon: "_3HgNBpJCFAy2mohcd9VxmZ",
				banner: "_23eBsXSECZlQ3Eh-zXhEbC",
				communityIcon: "_2Z8cRxGvjX2hQUlQK_VEOE",
				communityName: "_1sHP__xe_7iTbSpLKp7FeC",
				ratingImg: "UZWqo3i6ydUcE18iJqx3P",
				ratingAudience: "_1Y5aAemcMRF3uwSgYpqbsT",
				ratingDescription: "_1e5wHYsIyWJlZSjZCHhBKg",
				reasonsHeader: "_1npcgCYHbRcUsU6KOI7ony",
				reason: "_3rlzPcuZsxLsVx6ib3oBjk"
			}
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CrosspostBox/index.m.less"),
				k = s.n(v),
				_ = s("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 8,
				O = 1,
				j = _.a.div("Container", k.a),
				w = _.a.div("PostMetaWrapper", k.a),
				S = _.a.wrapped(p.c, "PostTitle", k.a),
				N = _.a.div("FlatList", k.a),
				I = _.a.div("FlatItem", k.a),
				T = _.a.span("FlatListDotSpacer", k.a),
				M = _.a.wrapped(j, "LinkContainer", k.a),
				P = _.a.div("Content", k.a),
				R = _.a.div("ThumbnailContainer", k.a),
				A = Object(l.c)({
					isCurrentUserProfilePost: x.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== g.Nb.TOPIC),
					shouldOpenPostInNewTab: E.jb
				}),
				F = Object(r.b)(A);
			t.c = Object(f.b)(F(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: a,
					post: r,
					subredditOrProfile: i
				} = e;
				if (!r) return null;
				const l = {
						post: r,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${a.isListing}`
					},
					d = t;
				return r && !r.media ? o.a.createElement(M, {
					className: d
				}, o.a.createElement(P, null, o.a.createElement(w, null, o.a.createElement(u.a, l)), D(r), r.source && o.a.createElement(b.a, {
					post: r
				}), U(e)), H(e)) : o.a.createElement(j, {
					className: d
				}, o.a.createElement(w, null, o.a.createElement(u.a, l)), D(r), L(e), U(e))
			}));
			const D = e => o.a.createElement(S, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				L = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return o.a.createElement("div", null, o.a.createElement(m.a, C({}, n, {
						className: k.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				U = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return o.a.createElement(N, null, o.a.createElement(I, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(c.b)(s))], {
						hk: "PNZhd"
					})), o.a.createElement(T, null), o.a.createElement(I, null, B(e)))
				},
				B = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: a
					} = t;
					return o.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(a, "comment count", Object(c.b)(a))], {
						hk: "xPYWL"
					}))
				},
				H = e => o.a.createElement(R, null, o.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/CrowdControlAdoptionCampaign/useCrowdControlCampaign.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return E
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/constants/experiments.ts"),
				l = s("./src/reddit/constants/localStorage.ts"),
				d = s("./src/reddit/hooks/useExperimentVariant.ts"),
				c = s("./src/reddit/hooks/useLocalStorage.ts"),
				m = s("./src/reddit/hooks/useMounted.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				p = s("./src/reddit/selectors/subreddit.ts");
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const b = new Set(["antievilplayground", "dirtyr4r", "amitheasshole", "gonewild", "advice", "askreddit", "legaladvice", "trueoffmychest", "ishowspeed", "needysluts", "sex", "freekarma4u", "sluttyconfessions", "preguntaleareddit", "nolawrus", "freekarma4you", "askgaybros", "worldpolitics", "videos", "dreamgenderlove", "atheism", "manga", "anime", "wichsbros3", "ladybonersgw", "sugarmommas", "cumsluts", "travel", "confessions", "tooafraidtoask", "israelexposed", "tiktokthots", "clashofclans", "ama", "tribute_girls_i_know", "christianity", "changemyview", "ratemyboobs", "xboxone", "fortnitebr", "straightturnedgay", "sissies", "funny", "femboy", "place", "virgin", "apexlegends", "gaming", "incestconfessions", "tipofmytongue", "dirtysocialmedia", "normalnudes", "piracy", "askgaymen", "unpopularopinion", "mildlyinfuriating", "conspiracy", "gtaonline", "slutsofonlyfans", "askscience", "wtf", "stepn", "newmexico_nsfw", "banvideogames", "dogecoin", "personalfinancecanada", "askarussian", "mildlyinteresting", "naughtyonlyfans", "deutschepornos", "deadbydaylight", "twitch", "wow", "meetpeople", "askwomenadvice", "dadshouldbeproud", "onlyfansxxx", "techsupport", "offmychest", "twitchtributes", "fortnite", "nebraskanudes", "ohiohookups", "branlette_entre_potes", "jokes", "findfashion", "onlyfanscollabs", "biology", "germany", "skincareaddiction", "bitcoin", "onlyfanshottest", "confession", "punhetabr", "onlyfansamateurs", "iphone", "assistance", "baseballcards", "jailbreak", "sugarmamma", "mexico", "yugioh", "aww", "casualuk", "mapporn", "dating", "seduction", "plasticsurgery", "hardwareswap", "gonewildonlyfans", "summonerswar", "juicyonlyfans", "movies", "tifu", "scams", "sluttyonlyfans", "nintendo", "tipofmypenis", "television", "destiny2", "pcmasterrace", "onlyfanschicks", "escapefromtarkov", "antilolitary", "sugarbabygroup", "dating_advice", "hotonlyfans", "chess", "asknyc", "skyrim", "warthunder", "rape_hentai", "mlbtheshow", "ginalaitschek_", "julesboringlifevideos", "nsfw_tributes", "sugarmommyclub", "asktransgender", "safemoon", "ps5", "austin", "destinythegame", "askengineers", "autism", "coachella", "degradethispig", "playrust", "deutschetributes", "michigantitties", "nftexchange", "pornid", "australia", "cats", "dreamwastaken2", "legaladvicecanada", "bettercallsaul", "motorcycles", "hearthstone", "wonderlands", "watches", "noelleleyvahot", "cumarmy", "programming", "philadelphiar4r", "naughtychicks", "fantomfoundation", "casualiama", "ubereats", "coins", "nashvilleswingersr4r", "youtube", "seaofthieves", "legaladviceofftopic", "tradenudesnolimits", "generationstation", "help", "dykesgonewild", "bodybuilding", "askredditafterdark", "comicbooks", "stuffers", "juliabeautxnew", "touhou", "writing", "librandu", "genshin_impact", "2007scape", "blatantmisogyny", "dreamwastaken", "cocaine", "askanamerican", "ukraineinvasionvideos", "earthporn", "army", "povertyfinance", "rant", "lululemon", "celebasspussymouth", "grandorder", "gamedev", "germancelebritiesfap2", "morbosypajas", "moonknight", "femboys", "polls", "btc", "cooking", "coffee", "pokemon", "pennsylvaniar4r", "nosleep", "lego", "casero", "cincinnatiohiogirls", "ethereum", "mtgfinance", "rocketleague", "sixers", "suicidewatch", "maiaknight", "poland", "crappydesign", "halo", "buildapc", "kingdomhearts", "foodporn", "ufos", "cumtributeee", "publicfreakout", "depression", "peytoncoffee_nsfw", "showerthoughts", "curvy", "de", "vent", "mikeadriano", "ontarioswingers", "bitcoinbeginners", "overwatch", "dadsandboys", "mbti", "amateurgirlsbigcocks", "finland", "6ix9ine", "fatfire", "magictcg", "the8bitryanreddit", "adorableonlyfans", "oddlyterrifying", "memes", "tinder", "bigtiddygothgf", "wrestlefap", "creepypms", "parenting", "askphysics", "celebsarg", "southdakotar4r", "college", "nofap", "serbia", "etsysellers", "gloryholelocations", "marylandr4r", "starwars", "batman", "forzahorizon", "twitter", "gwcouples", "allhoesmatter", "wildrift", "bad_cop_no_donut", "idiotsincars", "scotland", "ghosts", "femboyhentai", "shrooms", "bangalore", "politically_nsfw", "spiderman", "ontariocanada", "askdocs", "nystateofmind", "kitchenconfidential", "bbw", "medical", "incestfucking", "theimaginednsfw", "running", "tulsar4r", "fanfiction", "samplesize", "hextcg", "askhr", "btd6", "footballmanagergames", "hasan_piker", "askto", "lifeprotips", "beyondthebump", "loseit", "methodsandjuggs", "gamingcirclejerk", "phinvest", "askagerman", "ucla", "momforaminute", "askphilosophy", "modsupport", "trees", "pidigroscul", "newswithjingjing", "tihi", "codcompetitive", "naruto", "magicarena", "nascar", "rustconsole", "lawschool", "machinelearning", "coinbase", "askfeminists", "neoliberal", "politicalcompassmemes", "amithebuttface", "cursedcomments", "texansgonewild", "realestate", "meme", "gardening", "alabamar4r", "music", "irelandgonewild", "juuicyjordan", "glocks", "juicyasians", "collegerant", "jordanpeterson", "fetishbuyerscommunity", "iwantout", "ww2", "watchpeopledieinside", "tiktoknsfw", "bourbon", "classicwow", "sextoys", "oklahomar4r", "yumi_waifu", "dubai", "dualipafapclub", "hingeapp", "languagelearning", "poker", "uscis", "wordpress", "utahswingers", "facepalm", "debateanatheist", "latestagecapitalism", "hololive", "timberwolves", "egg_irl", "exchristian", "abdl", "pregnant", "oculusnsfw", "truerateme", "agedlikemilk", "askredditespanol", "lifehacks", "airdrie", "grindr", "massivecock", "debateavegan", "thefighterandthekid", "figureskating", "clashofclansleaks", "madfut", "rapekink", "castlecrashers", "cyprus", "godzilla", "piratedgames", "walmart", "guitar", "radiology", "academicpsychology", "shitpostxiv", "privacy", "skyrimmods", "pornfree", "guitarporn", "jrpg", "paymoneywubby", "questions", "lawofattraction", "drawforme", "gaybros", "premierleague", "prius", "soccercirclejerk", "tattoo", "teenagersbuthot", "art", "performium", "worldnews", "terraluna", "unexpected", "feminineboys", "mmabetting", "turningred", "hawaiiswingers", "swingers", "consulting", "sugarlifestyleforum", "dogtraining", "shittydarksouls", "masterduel", "psychic", "rpdrdrama", "serbiancringe", "rpscommunity", "mommit", "smite", "gettingbigger", "emogirls", "apple", "saudiarabia", "binichdasarschloch", "helpmefind", "germansgonewild", "eldenbling", "funnyanimals", "dragonball", "sexpolls", "muslimlounge", "photography", "popculturechat", "washingtondc", "aspergers", "tampa", "gabygardez2", "optometry", "peakyblinders", "celebritycumtributes", "assholedesign", "coprophiles", "gamecollecting", "tax", "quebec", "escortclientsonly", "paag", "prolife", "environment", "nft", "vaushv", "nftcollect", "eyeblech", "sacramento", "smallpenishumiliation", "buttcoin", "fire", "bumble", "texas", "bitcoincashsv", "damnthatsinteresting", "celebnsfw", "hentai_gif", "freecompliments", "confidentlyincorrect", "socialjusticeinaction", "destiny", "truscum", "laclippers", "truechristian", "justneckbeardthings", "satoshibets", "iamatotalpieceofshit", "atlantahawks", "mtf", "landlord", "truefmk", "trashy", "shitposting", "boxoffice", "amiugly", "gothsluts", "04twerkin", "dealflags", "dealparty", "comingdeals", "surprisediscounts", "horny", "raidcelebration", "famil", "snapchatsingles_xxx", "anticommie", "snapchatsext_", "louisianagonewild", "sypherpk", "losangelesswingers", "rateme", "blackedfantasy", "morbius", "indianahookup", "cousinfuckers_2", "steamtradingmods", "smalldickhumiliation", "sacramentor4r", "pennsylvaniadirtyr4r", "real_life_ladies", "addison_rae_worship", "deutschevideos", "kentuckygonewild", "churchofthebbc", "sissykik2", "german_kahis", "celebcucking", "minnesotar4r", "portlandsex", "michigangw", "hornyamateurgirls", "cock", "lasvegasxxxparties", "corpuschristinsfw", "drewdurnil", "wickrforhotteens", "wixbrosneu2", "dadsgonewild", "stlouisgw", "dmmeporn", "britneyyyofficial__", "phr4r", "julesboringlife_hot", "omahanudes", "sukihannagoat", "taliamarcumtribut", "columbushookups", "erayileboslugadogru", "oregonhookups", "whootyclappers", "californiahookupsex", "shadowban", "ukpakibeautyv2", "calii", "nashvillegw", "fifa", "ratemycock", "massachusettsfreaks", "sanantonioswingers", "mngonewild", "georgiaswingers", "atlantology", "famosasgifs", "julesboringlife1", "indieheads", "wixbros_nsfw", "aradiroff", "deutschememes", "mississippihookups", "ratorix", "bpdlovedones", "arizonansfw", "gameassets", "tiktoklive", "malaysia", "cassiiemelindaxxx", "elpasoswings", "newhampshiresex", "warframe", "onlyifshespackin", "bombshellbra", "cencalgonewild", "cuckbetchallenge", "misogynygonewild", "tanyateyhanna", "thighzone", "missouri_r4r", "anykinks", "arizonahookups", "cuckoldparadise", "grenbaud", "louisianasex", "nvidia", "sandiegonsfwpt2", "socialmediachicks", "unsentletters", "wickr_jerkrs", "theestallion", "tributo_br", "unicornswingers", "learnprogramming", "kentuckyr4r", "mother_son_incest", "chicagohookup", "jaliyah", "sanjosegonewild", "toribrixx2", "dallashookups", "bodyswap", "asiangirls4whitecocks", "fredericksburgonewild", "indianansfw", "nsfwgg", "wetpussys", "amateurgonewildplus", "londonr4r", "gaysnapchat", "bibisbeautypalacehott", "dakotagonzalez", "highandhorny", "ilgabbrone", "malutrevejoonlyfans", "mba", "zargoryangalaksisi", "coloradosex", "bigtiddiegothgirls", "daniellemcqueennn", "gaykik", "phr4friends", "slaveworld", "vevecollectables", "construction", "youtubehaiku", "datascience", "dylangonzalez", "socalswingers", "illinoisswingers", "showercoffee", "umurafan", "wisconsinswingers", "fortworthhookups", "hentaiandroleplayy", "trap", "refunduk", "naughtymediachicks", "osugame", "baddieviral", "boobsbetweenarms", "calango", "elpasoratedr", "onlyliveslips", "pickone", "qcofleak", "dnb", "germancelebfeet", "uncommonposes", "dommesforsissies", "guysfrombehind", "nudetrades01", "louisianaswingers", "onlineaffairs", "auntnsfw", "ayonnarenee", "cuckikofficial", "fatpussylovers", "mdmamollygonewild", "men_in_panties", "perfectdick", "pornselected", "southcarolinaswingers", "texascuckoldcommunity", "thotnetwork", "whatsthatbook", "raceplay", "krissummrs", "philadelphiagonewild", "physics", "misogynisticlife", "sggirls", "onlyfans_naked", "clashofclansrecruit", "cubandasavage", "filipinohotties", "jacksucksatlife", "marylandhookups", "sdhookups", "sissygermany", "sjr4r", "snapchatdiscussion", "symbaserothick", "tabooempirex", "xfibiiiund15cellystuf", "hottiesoftvandyt", "imkung_fulove", "shezbooteeful", "pokemontcg", "adultcontentcreator", "andyousayblm", "dojacatfans", "elizaluv", "german_cumtribute", "happycuckold", "herpespics", "kentuckyhookups", "kpoptributes", "leaeluig", "missourimilfs", "pantiesfetish", "sellingnudesxx", "snapsexting1", "thatkittygurll", "basketballcards", "hiphopheads", "xxfitness", "knockmeup", "trianglestrategy", "endthefurryhate", "gainesviller4r", "albuquerquehookup", "audiobooks_knigachet", "beelcitosmemes", "bloxymemes", "bot_test66", "broslikeus", "cocktribute", "coloradosluts", "coloradoswingers", "comfybuthorny", "concentrates", "emo", "fofocah", "frenchfilles", "hayday", "iam_amarie", "incestdoujinshi", "kopiernudeln", "lubatv", "michiganpussy", "minicompetition", "nerf", "portlandhookups", "shamelessplug", "surveyexchange", "thundapawg", "whereisthis", "amd", "fridaynighthighjinks", "homeimprovement", "nomansskythegame", "thegirlsurvivalguide", "femdomselfies", "freekarma4all", "socialhoes", "tiktokclap", "residentevil", "xbox", "afkarena", "brittneyhoney", "newyorkthotclub", "guildwars2", "houstonhookups", "adhdwomen", "alabamaswingerreal", "babycousinspotlights", "blackedmilfs", "branletteentrebi_", "cxxxxstfuuu", "dirtyphoenixr4r", "freakyhoesforever", "fresnoafterdark", "gangbangporno", "goosiest", "gwgirls4girls", "juliabeautxnsfw2", "lightskinkeishaa", "lolaclr_vms", "lostmedia", "mzstandingovation", "nickiminajbody", "onlyfanssales101", "puredata", "real_onlyfans", "repostingrisk", "tucsonazgw", "wichsende", "brandonde", "house", "animecumtributes", "deepintoyoutube", "miyamarie", "sandyycheekssssof", "washingtongw", "javahelp", "navy", "wwegames", "backpacking", "worldbuilding", "columbiaschookups", "psnfriends", "activitati_si_jocuri", "adele_grisoni", "alahnalypics", "apsarabazaar", "arizonagirls", "charliedmealio18", "ctgonewild2", "degradebollywhore3", "deutschenudez", "dirtysexykikpals", "ethothub", "fabriziocerrone", "gaypaypigs", "germanpornstuff", "graffiti", "jakertown", "krunkerio", "laredotx_nsfw", "multitasker", "ponytails", "refereum", "sidehustleideas", "smurfdomuca", "snapcaps", "snapchatsext_1826", "stuffpeoplebuy", "swensfw", "amberlynnsnark", "apexuniversity", "brawlhalla", "forcedbreeding", "thesilphroad", "advertiseeverything", "desimom", "mariamalkk", "nudetrading2", "brawlstars", "electricians", "terraria", "angelwrld", "worshiptaylorswift", "crushes", "gachaclub", "legostarwarsvideogame", "mercari", "playstationplus", "memesita", "airdropalertcom", "alienswingers", "amigas_gostosas", "angelakinseyjerk", "angelbrothel", "azswingers", "bellyexpansion", "boisesex", "chegganswers", "deutschporntiktok", "dilarahava", "dragonballlegends", "dreddxxx", "gayinceststory", "gaymexico", "geileumfragen", "hookups_nepal", "hookupsfs", "houston", "ineedthatass", "j0eistestingh1snewb0t", "jadaamornsfw", "kansasswingers", "kyliejennerpics", "perthnaughtyfun", "pokemongo", "promote", "puberty", "punegw", "retrogaming", "sextsnap", "sissy_heaven", "snapchathoez", "stellacox", "sunraybee", "upvote", "veterinary", "wisconsinhookup", "aggies", "airforce", "bigdickjoy", "celebswithpetitetits", "deutschesissys", "flipping", "golf", "lean", "milfie", "singleparents", "tacoma", "tewbre", "vinyl", "wrestlefaptributes", "bhadyayaof", "diamondmonroe1", "evansvillensfw", "nsfwskype", "rapperasses", "tay_5_", "android", "askmath", "petsimulatorx", "camgirlproblems", "tvtoohigh", "frenchgonewild", "rpfr_anim_celebrite", "pokemoncards", "1004ko", "airdroprating", "armsupporn", "asiangaypornplace", "azgonewild", "bahrain", "bullysfuckyourmom", "bunniemmie", "celebroleplay", "darkviperau", "denvergw", "destinyfashion", "dickslips", "dubaiencounters", "ebayselleradvice", "enneagram", "faceofpain", "felps", "fighters", "gaycumsluts", "gayrateme", "goldiemrsperfect", "greenbayhookup", "incestobrazil", "jana_librahot", "kennedycymone_", "luvtheflexgw", "malluhorny", "metalgearsolid", "michigandate", "milwaukee_gone_wild", "mississippir4r", "mollymaensfwnew", "ohiopersonals", "orlandoswingers", "overheardsex", "pahookups", "paolaparente", "passiveincome", "photographs", "pnw_4_adults", "rapefantasies2", "referalcodesforfree", "roadtrip", "rock", "sextingfun", "smilingsluts", "tampar4r", "louisvuitton", "plex", "stardustcrusaders", "freakywhitewomen", "germannsfwboerse", "scholarships", "snapchatstreaks", "hardstyle", "horror", "lawyertalk", "boardgames", "iowansfw", "penis", "arifletcherv2", "dannygonzalez", "kalibugandito", "pinaywalker", "wikicatcoin", "cookierunkingdoms", "mira004", "berlinsocialclub", "kokkorohentai", "mousereview", "ajar_malaysia", "aothentai", "arabshentai", "assholegonewild", "awaitingcum", "batonrougeslutclub", "beastierp", "blackpornlegends", "businessintelligence", "buyingcontent", "carrot_cake_nude2", "celebwouldyourather", "cockheadlovers", "dallasr4r", "dariomocciatwitch", "daytonohiohookup", "ebonydsls", "ediblebuttholes", "elizabetholsenfans", "embarrassedyiff", "f4m1", "fambase", "followforfollow", "fortniteleaks", "gabriellaannalisaa", "hentaitrades", "himawarinsfww", "houstonswingers", "imaginarymaps", "jodiecalussionlyfan", "juliabayonetta", "kansashookupss", "katstickler", "kindafunny", "kykilo", "livensfwnow", "locochon", "macrofetish", "manifestationin", "marryfuckkillcelebs", "marylandadultparty", "mathematics", "midlandtxhookups", "nakedandfunnygirls", "naturalpenis", "phillyhookup", "polishinflucumtribute", "pornaddiction", "pupplay", "sissytribute", "sklaven", "southcarolinansfw", "spotifyplaylists", "suckdaddysballs", "tanmaybhatkedost", "theresaxre_official_", "tightywhities", "trovo", "truth", "westtexasmeets", "whopperme4", "barber", "camping", "csharp", "dentalhygiene", "hypixelskyblock", "liminalspace", "ludwigahgren", "musictheory", "rapbattles", "sexypolishyoutuber", "wowservers", "bangaloregw", "bengalimomsonfantasy", "bludsuc1", "college_homework", "missouriswingers3", "schwul_iel", "starlink", "thabootygawduss", "3ds", "amithedevil", "audioengineering", "cinematography", "jawsurgery", "moviesanywhere", "disability", "kenya", "cyberpunkgame", "diablo", "polyamoryr4r", "ask", "oculus", "screenwriting", "bigboobsgw", "saturnstormcube", "teenleaksnew", "polygonmoonshots", "xrptrader", "bttcoin", "uniswap", "shitcoin", "polygon", "polygonnfts", "bsc", "nearprotocol", "lowcapcryptogems", "nothowgirlswork", "cryptocurrencyclassic", "dogelonarmy", "poocoin", "justiceserved", "ethereumnoobies", "amandacernyonlyfans", "solanax", "watchitfortheplot", "blondegirlsfucking", "byebyejob", "shibadults", "bitcoinabc", "technews", "bsclorax", "coingecko", "binance_lawsuit", "trxhub", "binanceexchange", "bnbtrader", "luna", "btcnews", "galacoin", "thatsinsane", "dot", "arbitrage", "shitcoinstreet", "babydogearmy", "hitbtc", "coronavirus", "shibainucoin", "boredapeyachtclub", "bscarmy", "cryptomarketsbet", "altcoin_news", "metaverse_blockchain", "dodge", "sushiswap", "cryptotofuture", "defi_", "loopring", "bestofredditorupdates", "enjincoin", "solananft", "cryptodevs", "adaxpro", "bscbomb_crypto", "filecoin", "memecoinnews", "moonbeam", "moonhunters", "oceanprotocol", "originprotocol", "uuex", "betterbitcoin", "cryptoall", "cryptocurrencyoffers", "helium", "manacoin", "harmony_markets", "doubangoosegroup", "defisignals", "marswallstreet", "safepal", "cryptomooncoins", "findapath", "illnessfakers", "raiblocks", "cryptogamesnft", "satoshistreetsbets", "polkadot_io", "meirl", "thebidenshitshow", "litecoinmining", "cryptocurrencydefi", "bnbcash", "criptomonede", "qtum", "legitgemhunters", "transformation", "bnbbets", "aave_official", "cryptomator", "milliontoken", "tronuprising", "bsclistings", "guro", "cryptotax", "ohlympics", "notinteresting", "bi_irl", "cryptocurrencygems", "shitamericanssay", "fitgirls", "bnbinance", "economy", "hentai", "hilariabaldwin", "crt_so_scary", "chiliz", "mississippi", "babydogecoin", "cryptomarsmoonshots", "deficryptos", "loomnetwork", "landlordlove", "thickthighs", "yearn_finance", "gentlefemdom", "cryptosoul", "solana", "dogelon", "cryptomars", "bsccryptolistings", "toiletpaperusa", "enlightenedcentrism", "samoyedcoin", "spotted", "asiansgonewild", "canadapolitics", "cro", "defi", "killingeve", "vvsfinance", "tinyman", "cryptography", "pitbullhate", "makemycoffin", "fightsticks", "benshapiro", "grandrapids", "openseanft", "fedexers", "cryptostreetbets", "realmadrid", "cryptogemdiscovery", "dogemining", "kpopfap", "shib", "allcryptobets", "cryptomarsshots", "interestingasfuck", "economics", "redscarepod", "gme_meltdown", "nextfuckinglevel", "openseamarket", "nftmarketplace", "lostgeneration", "psychology", "antinatalism", "communismmemes", "bostonceltics", "books", "rule34", "historymemes", "comics", "crazyfuckingvideos", "cryptomoon", "technology", "ukraina", "cryptocurrencyico", "trueatheism", "clevelandcavs", "ico", "atletico", "selfawarewolves", "anarcho_capitalism", "exhindu", "israelpalestine", "denvernuggets", "memphisgrizzlies", "nbayoungboy", "ccw", "memepiece", "gaymers", "lesbianactually", "actuallesbians", "asexuality", "bisexual", "malefashionadvice", "malehairadvice", "gay", "femalefashionadvice", "lingerieaddiction", "twoxsex", "accutane", "ausskincare", "beards", "haircarescience", "tattoos", "abcdesis", "asablackman", "asexual", "ausfemalefashion", "awfuleyebrows", "beauty", "beautydiagrams", "bigboobproblems", "blackculture", "blackhair", "blackpeople", "climbergirls", "curlyhair", "lacqueristas", "makeup", "muacirclejerk", "naturalhair", "nopoo", "redditlaqueristas", "transbeauty", "vaginismus", "xxketo", "transgender", "girlgamers", "honesttransgender", "acne", "chickflixxx", "eczema", "blackpeoplegifs", "veganbeauty", "blackgirls", "fancyfollicles", "abrathatfits", "africanhistory", "australianmakeup", "beautytalkph", "ladiesofscience", "makeupaddictionuk", "sweden", "tumblrinaction", "nyyankees", "ohio", "outoftheloop", "tech", "australianpolitics", "futurology", "hololewd", "ithinkyoushouldleave", "workersstrikeback", "askaliberal", "awfuleverything", "losangeles", "celebs", "basedislamists", "shanghai", "whatcouldgowrong", "kanye", "yimo", "dankmemes", "catholicism", "lolitary", "hawaii", "sadcringe", "actualpublicfreakouts", "blowjobs", "banned4life", "furry", "darkjokes", "kidsarefuckingstupid", "lawschooladmissions", "persecutionfetish", "teachers", "space", "dankleft", "muslumanturk", "aznidentity", "debatereligion", "insurance", "sexstories", "paris", "beamazed", "programmerhumor", "financialindependence", "tiktokcringe", "mhahentai", "tja", "entertainment", "nhl", "playboicarti", "ssbm", "abruptchaos", "decentraland", "extomatoes", "battlejackets", "starbucks", "arethestraightsok", "hentaibondage", "monstergirl", "leafs", "maybemaybemaybe", "oldschoolcool", "reactiongifs", "sikh", "waifuism", "dmt", "inceltear", "loveforlandlords", "trishyland", "kiwisavengers", "china_irl", "winstupidprizes", "askouija", "girlskissing", "historyporn", "serialpodcast", "amptoken", "childfree", "indiandankmemes", "overwatchtmz", "transpassing", "tumblr", "debatevaccines", "greentext", "shitpoliticssays", "openchristian", "aberdeen", "arethecisok", "celebritybutts", "contagiouslaughter", "rarepuppers", "warhammer30k", "binance", "oddlysatisfying", "studentloans", "summertimesaga", "bdsmpersonals", "legendsofruneterra", "moviedetails", "hardware", "transgenderuk", "absoluteunits", "pitbulls", "redditmoment", "ufc", "suns", "solarpunk", "youtubersgonewild", "aboringdystopia", "bdsmcommunity", "deadbedrooms", "workingmoms", "bloodborne", "mcfc", "bdsm", "asianmasculinity", "deepthroat", "pandr", "playboy", "schaffrillas", "wholesomememes", "rareinsults", "starwarscantina", "90s", "homestead", "kosovo", "rolex", "fightporn", "xboxinsiders", "lotrmemes", "askmiddleeast", "bonehealingjuice", "dementia", "law", "saintmeghanmarkle", "stopdrinking", "yiff", "adviceanimals", "nolapelicans", "sleepapnea", "toradora", "vore", "pornstarescort", "reptime", "acab", "politicaldiscussion", "amcstock", "gaysoundsshitposts", "sinfest", "brooklyn", "terriblefacebookmemes", "newyorkmets", "wayofthebern", "adoptmerbx", "askacanadian", "askhistorians", "dndmemes", "lostredditors", "antilgbtq", "prequelmemes", "hindutvawatch", "pamedicalmarijuana", "askspain", "baddragon", "dayz", "newyorkcity", "nootropics", "thelastairbender", "azurlewd", "petioles", "pokemonbdsp", "raisedbynarcissists", "singaporeraw", "streamersgonewild", "vexillologycirclejerk", "youtubetitties", "jeep", "netherlands", "religion", "funpiece", "gachagaming", "joi", "undertale", "asroma", "blessedimages", "celebritypussy", "edanonymemes", "jav", "seamonkeys", "aphextwin", "business", "enoughpetersonspam", "jocat", "mealtimevideos", "transsocialism", "saltierthancrait", "sissycaptions", "dc_cinematic", "adultery", "belarus", "fo76", "diabetes_t1", "abortion", "billieeilishgw", "doujinshi", "funsized", "futanaripegging", "nio", "tili", "fragilemaleredditor", "houseofthedragon", "spiders", "straightpegging", "muslimmarriage", "survivinginfidelity", "cycling", "victoria3", "wellthatsucks", "asklosangeles", "strangerthings", "kendricklamar", "popping", "animalcrossing", "target", "biggerthanherhead", "bluray", "hugedildos", "maher", "pokemonart", "yesyesyesno", "algeria", "entrepreneur", "genshin_impact_leaks", "lesbians", "peds", "scjerk", "traphentai", "askle", "breastenvy", "dccomicscirclejerk", "evangelion", "iasip", "lockdownskepticism", "talktherapy", "ukbabes", "writingcirclejerk", "blender", "gunaccessoriesforsale", "stocks", "cybersecurity", "tf2", "badchoicesgoodstories", "cltv", "courtneytailorhub", "covid19", "feminism", "genshin_memepact", "labouruk", "queervexillology", "suspiciouslyspecific", "thetrumpzone", "instagramreality", "izlam", "medical_advice", "newyorknine", "noahgettheboat", "tankporn", "topmindsofreddit", "coronabr", "cricket", "hugeboobshardcore", "sakartvelo", "theleftcantmeme", "theultimatumnetflix", "torontorealestate", "trippieredd", "tryingforababy", "incelexit", "incest", "attackonretards", "liverpoolfc", "muslim", "the10thdentist", "wallstreetsilver", "lakers", "royalehightrading", "sadboys", "taxpros", "agender", "futadomworld", "keskustelu", "lewdgames", "me_irl", "missoula", "emulation", "fetishsellersforum", "fuckyoukaren", "hijabis", "hpv", "joinsquad", "kazakhstan", "kurdistan", "lds", "libertarianmeme", "masskillers", "northernireland", "prematurefetish", "truesph", "armenia", "nsfw", "trashtaste", "amsterdam", "borderlands3", "chrischansonichu", "ftm", "hairtransplants", "socialskills", "teslamodel3", "energy", "windows11", "yeagerbomb", "askconservatives", "bicycling", "elderscrollsonline", "exismailis", "animemilfs", "chaoticgood", "chastity", "dadjokes", "death_by_snusnu", "internationalleft", "kentucky", "netorare", "severanceappletvplus", "suicidegirls", "tiktokcringetime", "tucker_carlson", "wgbeforeafter", "xmen", "ayato_mains", "genshinimpactnsfw", "goldenretrievers", "houseplants", "nintendowaifus", "ootp", "starterpacks", "translater", "vet", "bondage", "erotichypnosis", "plussize", "relacionamentos", "trueratecelebrities", "uwaterloo", "youngpeopleyoutube", "daniellarson", "belgium", "wearethemusicmakers", "accidentalally", "afghan", "aroundthenfl", "bdsmerotica", "chennai", "clevercomebacks", "copenhagen", "coronavirus_nz", "indianews", "justrolledintotheshop", "murderedbyaoc", "nonbinary", "progressive_islam", "proship", "purplepilldebate", "recruitinghell", "stevenaveryisguilty", "conspiracy_commons", "edmontonoilers", "fireindia", "gadgets", "gangstalking", "gay_irl", "iptv", "supplements", "urantia", "money", "oakville", "phenotypes", "transplace", "anime_irl", "bollywood", "chicagobulls", "enoughmuskspam", "newworldgame", "nofapchristians", "nuclear", "redsox", "rwby", "addiction", "aoe2", "fuckyourbicycle", "guitarpedals", "vegas", "aliens", "dankinindia", "juicewrld", "norge", "taskmaster", "austria", "warhammercompetitive", "asktrumpsupporters", "bidenisnotmypresident", "bikinibottomtwitter", "breakingmom", "covid19positive", "eroticliterature", "genshinimpacthentai", "groupofnudegirls", "happyendingmassage", "healthygamergg", "heyimbee_sfw", "japaneseporn2", "leftistvexillology", "moldymemes", "oklahoma", "playarkservers", "polska_wpz", "ukinvesting", "wfh", "antitheistcheesecake", "fresno", "newyorkislanders", "nsfwgaming", "phallo", "pornoinromana", "publix", "rebubble", "sciencebasedparenting", "scuba", "texasrangers", "travisscott", "averagedickproblems", "dancegavindance", "realtesla", "seinfeld", "stripper", "windows10", "90dayfiance", "algorand", "applehelp", "auslegal", "ballbusting", "joerogan", "martialarts", "popheadscirclejerk", "trueunpopularopinion", "wikipedia", "witcher3", "yourmomshousepodcast", "fakecartridges", "fantasypl", "fragreddit", "jujutsukaisen", "nostalgia", "shitpostcrusaders", "vindictaratecelebs", "atheistexperience", "celinasmith", "discgolf", "gunners", "speedrun", "creditcards", "nashville", "barrie", "blackmagicfuckery", "canadianconservative", "churning", "collared", "conservatives", "cracksmokers", "credibledefense", "demonslayer34", "dutchgonewild", "femdomcommunity", "forwardsfromgrandma", "fuckamazon", "guessmyage", "knoxville", "librarians", "makemesuffer", "maliciouscompliance", "nsfw_japan", "okmarijuana", "rule34_comics", "russophobiawatch", "spacefrogs", "starwarsnsfw", "teenmomogandteenmom2", "the_pack", "toocuteforporn", "vindictarateme", "virginiapolitics", "xenogendersandmore", "arianagrande", "bellypunchingchamber", "bigseo", "cantax", "catfish", "cringe", "fightingfakenews", "howto", "indianfood", "indoorgarden", "ksi", "medicalgore", "michigents", "minecraftchampionship", "nfl_draft", "peoplefuckingdying", "pizzacrimes", "retailhell", "shittymoviedetails", "taiwan", "ukdrill", "votedem", "winnipegmusicscene", "bodydysmorphia", "demonssouls", "linuxmasterrace", "mkebucks", "professors", "stardewvalley", "streetfighter", "ukrainewarreports", "animalsbeingjerks", "godsunchained", "mac", "mensa", "padres", "primeiraliga", "rants", "reno", "spacexlounge", "youtooz", "3dshacks", "airsoft", "bimbofication", "etsy", "ladiesofwrestling", "mycology", "seltinsweety", "switchpirates", "whowouldwin", "maine", "marvel", "mavericks", "self", "unpopularkpopopinions", "huntshowdown", "airbnb", "brandonherrara", "chastitytraining", "crossstitch", "datingoverthirty", "diamonds", "drogasbrazilrebooted", "femalehairadvice", "gatekeeping", "halifax", "hentaibeast", "jjdandfamily", "kotakuinaction", "leavingneverlandhbo", "litrpg", "modafinil", "nsfwfunny", "ptsd", "regularcarreviews", "republicanvalues", "rhodeisland", "smashrage", "spacex", "tappedout", "teslamodely", "theamazingrace", "uoguelph", "worldofpvp", "youshouldknow", "americabad", "astrologyreadings", "brandnewsentence", "bulgaria", "canadianforces", "completeanarchy", "cyberpunk", "elderscrolls", "entitledparents", "etsystrike", "globeskepticism", "infp", "intermittentfasting", "loopringorg", "redscareforcishetmen", "spells", "ucsd", "adhdmeme", "amazonfc", "askparents", "assassinscreed", "cheating_stories", "dodgers", "eicerb", "evolution", "gonewildtrans", "hangukin", "keto", "linuxquestions", "marvelmemes", "nbaspurs", "outerwilds", "phillies", "shittyfoodporn", "smalldickproblems", "starcraft", "theamericans", "vamscenes", "whatisthiscar", "worldoftanks", "colombia", "edc", "financialplanning", "jamesbond", "kerala", "persona5", "rabm", "uktrees", "unimelb", "bigdickproblems", "clopclop", "dundermifflin", "gymnastics", "hollowknight", "testosterone", "virginiagonewild", "ausfinance", "campinggear", "celsiusnetwork", "discordapp", "hockeyplayers", "japanlife", "weightgain", "edm", "ardspotd", "balticssrs", "bokoen1", "celebsbr", "chinalife", "deltarune", "diablo2resurrected", "dogfreehumor", "forwardsfromklandma", "geschichtsmaimais", "gothgirls", "gtfo", "koreanfood", "lincoln", "memevideos", "mopeio", "mylittlepony", "narcissisticparents", "nevillegoddard", "nsfwcyoa", "offlinetvgirls", "pandemicpreps", "philosophy", "pickoneceleb", "piltoversfinest", "pinkomega", "schoolfight", "spiderbro", "systemscringe", "tallahassee", "titfuck", "transgenderau", "trustapp", "trustwalletcommunity", "turkishchicks", "virtualyoutubers", "wallstreetbetsogs", "weird", "whitesox", "woahdude", "anarchychess", "aoe3", "auckland", "bdsmadvice", "bettafish", "cosplaybutts", "cvs", "diablo2", "eremika", "galatasaray", "german", "howyoudoin", "malefashion", "moderatepolitics", "moretankie196", "namenerds", "piratefolk", "plotholes", "pokemongofriends", "portugalcaralho", "ragnarokonline", "sexyfrex", "shitmomgroupssay", "skateboarding", "sorare", "thunder", "tigerbelly", "ubreddit", "unket", "agegap", "anorexianervosa", "argentina", "blursedimages", "buffalo", "christian", "delta", "dndnext", "grime", "hermanmiller", "jizzedtothis", "rapefantasies", "riddles", "russiangirls", "startrekdiscovery", "ateistturk", "buddhism", "choosingbeggars", "cruise", "hmmm", "illegallysmolcats", "immigrationcanada", "ismailis", "mortalkombat", "oculusquest", "short", "torontobluejays", "truegaming", "warzone", "deathgrips", "edinburgh", "germanrap", "linguistics", "marijuanaenthusiasts", "medicalschool", "northcarolina", "pennsylvania", "raiders", "raidshadowlegends", "simracingstewards", "survivor", "berserklejerk", "tfablineporn", "unethicallifeprotips", "ups", "berkeley", "filmmakers", "hamster", "market76", "mechanicalkeyboards", "networking", "worldnews2", "1000ccplus", "90dayfianceuncensored", "aaaaaaacccccccce", "alcoholicsanonymous", "alltheleft", "amd_stock", "asiancuties", "askfrance", "bolehland", "bonersinpublic", "caps", "childrenfallingover", "chloe", "columbiyeah", "comedyheaven", "damngoodinterracial", "disturbedmedia", "eldenrule34", "excatholic", "fcbayern", "femboy_irl", "gamepaddigital", "gaybrosgonemild", "genshinhacked", "hentaibondagetales", "hyderabad", "lactation", "leangains", "mewgulf_the_series", "minipainting", "mschvs", "nsfwcelebs", "perfectlycutscreams", "pokemonconspiracies", "pornstarsonpoles", "progun", "publicfreakouts", "re_zero", "redpillwomen", "saltierthankrayt", "scatporn2", "sleepycabin", "tgirls", "thelastkingdom", "thepaknarrative", "throatpies", "veganfoodporn", "warplaneporn", "alaskaairlines", "androidquestions", "askculinary", "canadacoronavirus", "es", "fantheories", "harley", "homeowners", "macdemarco", "mechanicadvice", "mintmobile", "panthers", "pokemonunite", "porsche", "purdue", "rotc", "sexualassault", "teamfourstar", "veteransbenefits", "worldcup", "chat", "chickens", "competitiveoverwatch", "emulationonandroid", "indianapolis", "instantkarma", "marvellegends", "outdoors", "prettypussypage", "puppy101", "quant", "r4rtoronto", "stupidfood", "swedishproblems", "tressless", "yeat_", "academicbiblical", "askprofessors", "boruto", "detroitlions", "dividends", "emory", "expats", "premed", "psych", "quityourbullshit", "smashbros", "snakes", "spain", "thebatmanfilm", "totalwar", "xxxtentacion", "broadway", "cringepics", "glasgow", "iphonehelp", "learnjapanese", "minecraftsuggestions", "monsterdicks", "okcupid", "spyxfamily", "suddenlygay", "ubc", "archlinux", "bmw", "equestrian", "gamestop", "home", "mmfinance", "nbacirclejerk", "chemistry", "flexigirls", "lsd", "realonlyfansreviews"]);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function g() {
				return Object(d.a)(i.W) === i.yd
			}

			function f() {
				return function(e) {
					let {
						storageKey: t,
						setValueOnDismiss: s,
						checkIfDismissed: n
					} = e;
					const a = g(),
						r = Object(o.e)(u.e),
						[i, d] = Object(c.a)(l.b.CROWD_CONTROL_CAMPAIGN_STORE, {}),
						h = Object(o.e)(e => Object(p.W)(e, null == r ? void 0 : r.id)),
						f = Object(m.a)(),
						x = !(!r || !b.has(r.name.toLowerCase())),
						E = !1 === (null == h ? void 0 : h.crowdControlFilter) && 0 === (null == h ? void 0 : h.crowdControlPostLevel),
						v = !n(i[t]);
					return {
						showCrowdControlCampaign: f && a && x && E && v,
						dismissCrowdControlCampaign: () => d({
							...i,
							[t]: s()
						})
					}
				}({
					storageKey: "hideModQueueCTAUntil",
					setValueOnDismiss: () => Date.now() + 30 * r.B,
					checkIfDismissed: e => !!e && Date.now() < e
				})
			}

			function x() {
				return {
					showCrowdControlCampaign: g()
				}
			}

			function E(e) {
				function t(t) {
					const {
						showCrowdControlCampaign: s
					} = x();
					return a.a.createElement(e, h({}, t, {
						showCrowdControlCampaign: s
					}))
				}
				const s = e.name || e.displayName;
				return t.displayName = `CrowdControlCampaignNewTag(${s})`, t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, a.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), a.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), a.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					width: "226",
					height: "226",
					viewBox: "0 0 226 226",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					opacity: "0.8"
				}, a.a.createElement("rect", {
					opacity: "0.8",
					x: "36.7704",
					y: "36.7703",
					width: "152.462",
					height: "152.462",
					rx: "76.2308",
					stroke: "url(#paint0_linear)",
					strokeWidth: "4"
				}), a.a.createElement("rect", {
					opacity: "0.5",
					x: "18.8851",
					y: "18.8822",
					width: "188.231",
					height: "188.231",
					rx: "94.1153",
					stroke: "url(#paint1_linear)",
					strokeWidth: "3"
				}), a.a.createElement("rect", {
					opacity: "0.3",
					x: "1.25",
					y: "1.25",
					width: "223.5",
					height: "223.5",
					rx: "111.75",
					stroke: "url(#paint2_linear)",
					strokeWidth: "2.5"
				})), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "17.886",
					y1: "34.7703",
					x2: "213.283",
					y2: "40.3684",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#FF538C"
				}), a.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), a.a.createElement("linearGradient", {
					id: "paint1_linear",
					x1: "-3.25127",
					y1: "17.3822",
					x2: "235.567",
					y2: "24.2243",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#FF538C"
				}), a.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), a.a.createElement("linearGradient", {
					id: "paint2_linear",
					x1: "-24.3885",
					y1: "2.87774e-05",
					x2: "257.851",
					y2: "8.08615",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#FF538C"
				}), a.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("UserAchievementFlair").then(s.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/EmailInvitePaintedDoor/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "EmailInvitePaintedDoor",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("EmailInvitePaintedDoor").then(s.bind(null, "./src/reddit/components/EmailInvitePaintedDoor/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/EmailInvitePaintedDoor/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				c = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(u);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const i = n && n.eventInfo,
					u = Object(c.a)(n),
					h = i && Object(r.c)(i.eventStart, i.eventEnd);
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, a.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, a.a.createElement(l.a, {
					post: n
				}), !u && h && a.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(d);
			var m = e => a.a.createElement("i", {
				className: Object(i.a)(Object(l.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			});
			var u = e => a.a.createElement("i", {
					className: Object(i.a)(Object(l.b)("live", e.isFilled), c.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				h = s.n(b),
				g = s("./src/lib/lessComponent.tsx");
			const f = g.a.span("PostEventFutureText", h.a),
				x = g.a.span("PostEventPastText", h.a),
				E = g.a.span("PostEventNowText", h.a),
				v = g.a.span("Container", h.a),
				k = g.a.wrapped(m, "CalendarIcon", h.a),
				_ = g.a.wrapped(u, "LiveIcon", h.a),
				C = g.a.div("LoadingState", h.a);
			class y extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: i,
						eventStart: l
					} = s, d = Object(o.e)(l, n);
					let c, m;
					if (this.state.mounted || d === o.a.Live) c = a.a.createElement(p.c, {
						startTime: l,
						endTime: n,
						isLive: i
					});
					else {
						const e = Object(r.a)({
							isLoading: !0
						});
						c = a.a.createElement(C, {
							className: e
						})
					}
					if (i) m = a.a.createElement(E, null, a.a.createElement(_, null), c);
					else if (d === o.a.Future) m = a.a.createElement(f, null, a.a.createElement(k, null), c);
					else {
						if (d !== o.a.Past) return null;
						m = a.a.createElement(x, null, a.a.createElement(k, null), c)
					}
					return a.a.createElement(v, {
						className: e
					}, m)
				}
			}
			t.a = y
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				x = s("./src/telemetry/models/Outbound.ts"),
				E = s("./src/reddit/components/ExpandoButton/index.m.less"),
				v = s.n(E);
			const k = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(c.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(c.bb)(Object(u.b)(t.permalink), t.id))
				})),
				_ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(l.a)(v.a.icon, v.a.hideOnHover);
					if (t) return o.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return o.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return o.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return o.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case h.o.IMAGE:
							return o.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return o.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case h.o.VIDEO:
							return o.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case h.o.GALLERY:
							return o.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case h.o.EMBED:
						default:
							return o.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = k(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: a,
					isCommentsPage: c,
					isExpanded: u,
					post: h,
					toggle: E,
					useMediaIcons: k
				} = e, C = s || h, y = Object(r.e)(f.b), O = Object(r.e)(f.c), j = t => {
					(y || O) && (t.preventDefault(), e.showModalOnPostLinkClick(C))
				}, w = C.media, S = Object(g.p)(h), N = a && !!s;
				return w && !S && !(("rtjson" === w.type || "text" === w.type || "liveaudio" === w.type) && !Object(p.a)(C)) || !!h.pollData ? o.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(l.a)(t, v.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					onClick: E
				}, u ? o.a.createElement(b.a, {
					name: "collapse",
					className: v.a.icon
				}) : k ? o.a.createElement(o.a.Fragment, null, _(C.media && C.media.type, N, h), o.a.createElement(b.a, {
					name: "expand",
					className: Object(l.a)(v.a.icon, v.a.showOnHover)
				})) : o.a.createElement(b.a, {
					name: "expand",
					className: v.a.icon
				})) : C.source && C.source.url ? o.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(l.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					href: C.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: c ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(b.a, {
					name: "external_link",
					className: Object(l.a)(v.a.icon, v.a.outboundLinkIcon)
				})) : o.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(l.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(C.permalink),
					rel: "nofollow",
					onClick: j
				}, o.a.createElement(b.a, {
					name: "text_post",
					className: v.a.icon
				}))
			})
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/config.ts"),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/Footer/index.m.less"),
				d = s.n(l);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.div("UserAgreement", d.a), u = i.a.a("UserAgreementLink", d.a), p = i.a.a("PrivacyLink", d.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => a.a.createElement("div", {
				className: Object(r.a)(d.a.FooterContainer, {
					[d.a.mIsGrey]: e.textColor === b.Grey,
					[d.a.mIsWhite]: e.textColor === b.White
				})
			}, a.a.createElement(m, null, c._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [c._param("=User Agreement", a.a.createElement(u, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, c._("User Agreement", null, {
				hk: "YviZP"
			}))), c._param("=Privacy Policy.", a.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, c._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), c._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			var n, a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/uuid/v4.js"),
				l = s.n(i),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/hooks/useMounted.ts"),
				u = s("./node_modules/p-debounce/index.js"),
				p = s.n(u),
				b = s("./src/lib/hooks/useOnClickOutside.ts"),
				h = s("./src/reddit/constants/keycodes.ts"),
				g = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/lib/sentry/index.ts"),
				x = s("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(n || (n = {}));
			const E = (e, t) => async s => {
				let n;
				try {
					n = await async function(e, t) {
						return Object(g.a)(e, {
							...x,
							variables: t
						})
					}(e(), {
						query: s,
						sessionId: t
					})
				} catch (a) {
					return f.c.captureException(a), []
				}
				return n.body.data.geoPlaceAutocomplete || []
			};
			var v = s("./src/reddit/hooks/useGqlContext.ts"),
				k = s("./src/reddit/icons/svgs/Location/index.tsx"),
				_ = s("./src/reddit/components/GeoForm/index.m.less"),
				C = s.n(_);

			function y(e) {
				const {
					value: t,
					setValue: s,
					setPlace: n,
					disabled: i,
					onFocus: l,
					sessionId: c,
					className: m
				} = e, u = Object(v.a)(), [b, g] = Object(o.useState)(!1), f = function(e, t, s) {
					const [n, a] = Object(o.useState)([]), r = Object(o.useMemo)(() => p()(s, 300), [s]);
					return Object(o.useEffect)(() => {
						e && t && r(e).then(e => {
							a(e)
						}).catch(() => a([]))
					}, [e]), n
				}(t, b, E(u, c)), {
					highlightValue: x,
					selectedIndex: _,
					onKeyDown: y,
					isClosed: j,
					setClosed: w
				} = function(e, t, s) {
					const [n, a] = Object(o.useState)(-1), [r, i] = Object(o.useState)(!!e.length), [l, d] = Object(o.useState)(void 0);
					return {
						highlightValue: l,
						selectedIndex: n,
						onKeyDown: o => {
							if (o.key === h.b.ArrowDown) {
								const t = Math.min(n + 1, e.length - 1);
								a(t), d(e[t])
							} else if (o.key === h.b.ArrowUp) {
								const t = Math.max(n - 1, -1);
								a(t), d(e[t])
							} else o.key === h.b.Enter && n > -1 ? (a(-1), t(e[n].name), s(e[n]), i(!0), o.preventDefault()) : o.key === h.b.Escape ? (a(-1), i(!0)) : d(void 0)
						},
						isClosed: r,
						setClosed: i
					}
				}(f, s, n), S = `location-input-${c}`;
				return r.a.createElement("div", {
					className: C.a.autocompleteInput
				}, r.a.createElement("label", {
					className: C.a.geoLabel,
					htmlFor: S
				}, r.a.createElement(k.a, {
					className: C.a.locationIcon
				})), r.a.createElement("input", {
					className: Object(d.a)(C.a.geoInput, m),
					name: S,
					disabled: i,
					onKeyDown: y,
					value: x && x.name || t,
					placeholder: a.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						s(e.currentTarget.value), n(void 0), w(!1)
					},
					onFocus: () => {
						g(!0), l()
					},
					onBlur: () => g(!1)
				}), f.length && !j ? r.a.createElement(O, {
					id: c,
					items: f.map(e => e.name),
					selectedIndex: _,
					selectValue: e => {
						s(f[e].name), n(f[e]), w(!0)
					},
					onClickOutside: () => w(!0)
				}) : null)
			}

			function O(e) {
				const {
					id: t,
					items: s,
					selectedIndex: n,
					selectValue: a,
					onClickOutside: o
				} = e;
				return Object(b.a)(`autocomplete-dropdown-${t}`, o), r.a.createElement("ul", {
					className: C.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, s.map((e, t) => r.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => a(t),
					className: Object(d.a)({
						[C.a.highlight]: t === n
					})
				}, e)))
			}
			const j = () => {};

			function w(e) {
				const {
					className: t,
					initialValue: s,
					initialPlace: n,
					disabled: i = !1,
					onFocus: u = j,
					onPlace: p = j,
					onValue: b = j,
					inputClassName: h
				} = e, g = Object(m.a)(), [f] = Object(o.useState)(() => l()()), [x, E] = Object(o.useState)(s || ""), [v, k] = Object(o.useState)(n);
				return g ? r.a.createElement("form", {
					className: Object(d.a)(C.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == n ? void 0 : n.id) !== (null == v ? void 0 : v.id) && e.onSubmit({
							name: x,
							place: v,
							sessionId: f
						})
					}
				}, r.a.createElement(y, {
					className: h,
					value: x,
					sessionId: f,
					setValue: e => {
						E(e), b(e)
					},
					setPlace: e => {
						k(e), p(e)
					},
					disabled: i,
					onFocus: u
				}), v && v.id !== (null == n ? void 0 : n.id) && r.a.createElement(c.o, {
					className: C.a.submitButton,
					type: "submit",
					disabled: i
				}, a.fbt._("Submit", null, {
					hk: "4aU3dh"
				}))) : null
			}
		},
		"./src/reddit/components/GeoForm/index.m.less": function(e, t, s) {
			e.exports = {
				geoForm: "dnC9V9HtkUxsmza-vEXgC",
				geoLabel: "_3T9bJ1ttSXUxb9rxZI9jMC",
				locationIcon: "_2Jm0p-hd1-KYZJI9iP3n6",
				geoInput: "_2O28-fZaU1kYnMmsiMKw3y",
				autocompleteInput: "oP84ZJjEgYLr154hrXHd8",
				autocompleteDropdown: "_1pwsnPyclgUCyjdfT0xWmx",
				highlight: "_1kfPE4TrjHsTFgvmrF1s33"
			}
		},
		"./src/reddit/components/GrantUserFlair/index.m.less": function(e, t, s) {
			e.exports = {
				titleRow: "_1knBg4PWacEaLvDRHAvsTp",
				flairDetails: "_2bPY-7msbc_UjCac-In6Li",
				flairEditColumn: "_2ebZb7SML8ZCy-QsS6tUc0",
				column: "_3vuuCvX3U56Wb64Bz3AX9W",
				iconsColumn: "Q9C1YLEYQHPi_NuLIcsS3",
				removeIcon: "_2IP600IxdVV8-hzfus_xst",
				removeButton: "Yd-aY1XSmw6atYPPJHm9n",
				row: "_3W5UQ4TDClfiDY4zEBYSqT",
				flairEditHelperText: "_2JpPK1gCbDBJBbMRrx-fe6",
				errorIndicator: "_1gmumWT2YihpY16NJJw_ac",
				hasError: "Uu_my_fNiUJaUT-wFhyeq",
				flairContainer: "_1c46XAzSY3wg6lATaRh11v",
				userLink: "_14IDyvxQsRUGTR9unevdzm",
				textInput: "_3OzKI46CUHBipWh2v7Cfq",
				dropdownTriangle: "_3L2zEwdN8hdor-MjnuTTXx",
				dropdownTarget: "_2q91kdzeOjUsLeozfWfPZI",
				dropdownContainer: "_2SgxV6WihN0lLBZ06jChDN",
				dropdownRow: "Hsh_7uWgjhtYFcA5QqiI6",
				userIcon: "uHVmBRWHNpGMMkIFBthWs",
				modIcon: "_31YDoZrj2KLLxWJhYimRfb",
				infoTooltip: "i75byXeh_ZzdbD0HGxb4",
				tooltipText: "_3FXJw0xh37YZHaJP_j3Npe",
				tooltipIconContainer: "_1dZeti3tpsM8YrfluheTX5",
				tooltipIconRow: "_2B9YDCXdUsKx20YPQ_0guj",
				tooltipIconText: "_2_doCenMWfLXsGEvDSq1NB",
				cssInputError: "_3ySNKx0QJZRCNOFB6345zX",
				bottomBarRow: "Tf16TWgXZcNKzLmD4PDPq",
				topBar: "e-h9YD6UZh8FOUPTG6drY",
				disabledBanner: "_3rrCSsx0QD7pFwGJquTq-6",
				warningIcon: "_3MSU8YNfdz6icABES0GIkK",
				emptyList: "y4YDfdWBHO7s3GVuYjBDF",
				flairIcon: "_3RYWcdo8Ov1AjwCGeCUsfs",
				mainText: "_8uYoAAuUrGW1iwcBP-2eS",
				fadeIn: "_3YR0vW4lNgbJJ7RgssVmf-"
			}
		},
		"./src/reddit/components/GrantUserFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/find.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				l = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/omitKey/index.ts"),
				p = s("./src/lib/stripQueryParams/index.ts"),
				b = s("./src/reddit/actions/grantUserFlair/index.ts"),
				h = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				x = s("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				E = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				v = s("./src/lib/classNames/index.ts"),
				k = s("./src/reddit/components/SaveIndicator/index.m.less"),
				_ = s.n(k),
				C = s("./src/reddit/icons/svgs/CheckmarkFitted/index.tsx"),
				y = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				O = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				j = s("./src/reddit/models/ApiRequestState/index.ts");
			const w = {
				[j.a.Pending]: () => a.fbt._("Saving", null, {
					hk: "3r9uZO"
				}),
				[j.a.Complete]: () => a.fbt._("Saved", null, {
					hk: "e9tAk"
				}),
				[j.a.Failed]: () => a.fbt._("Save error", null, {
					hk: "3NFi3S"
				})
			};
			var S = e => l.a.createElement(l.a.Fragment, null, e.status === j.a.Pending && l.a.createElement(O.a, {
					className: Object(v.a)(_.a.icon, _.a.pendingIcon)
				}), e.status === j.a.Complete && l.a.createElement(C.a, {
					className: Object(v.a)(_.a.icon, _.a.savedIcon)
				}), e.status === j.a.Failed && l.a.createElement(y.a, {
					className: Object(v.a)(_.a.icon, _.a.saveErrorIcon)
				}), l.a.createElement("span", {
					className: _.a.caption
				}, w[e.status]())),
				N = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				I = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				T = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				M = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/constants/colors.ts"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/helpers/flair.ts"),
				F = s("./src/reddit/selectors/telemetry.ts");
			const D = e => ({
					subreddit: F.hb(e),
					profile: F.R(e),
					userSubreddit: F.rb(e)
				}),
				L = e => t => ({
					source: "grant_user_flair",
					action: "click",
					noun: e,
					...D(t)
				}),
				U = () => L("search_username"),
				B = () => L("page_forward"),
				H = () => L("page_back"),
				W = () => L("remove_granted_user_flair"),
				z = (e, t) => s => ({
					source: "grant_user_flair",
					action: "autosave",
					noun: e,
					actionInfo: {
						...F.d(s),
						settingValue: t
					},
					...D(s)
				}),
				V = () => z("flair_text"),
				q = e => z("flair_template", e || "none"),
				G = e => z("css_class", e);
			var K = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Q = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				X = s("./src/reddit/icons/svgs/User/index.tsx"),
				J = s("./src/reddit/models/SubredditModeration/index.ts");
			const Y = [];
			var Z = s("./src/reddit/selectors/meta.ts"),
				$ = s("./src/reddit/selectors/userFlair.ts"),
				ee = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				te = s("./src/reddit/components/GrantUserFlair/index.m.less"),
				se = s.n(te);
			var ne = () => l.a.createElement("div", {
					className: se.a.emptyList
				}, l.a.createElement(ee.a, {
					className: se.a.flairIcon
				}), l.a.createElement("div", {
					className: se.a.mainText
				}, a.fbt._("You do not have any users with user flair", null, {
					hk: "4D1S5Z"
				})), l.a.createElement("div", null, a.fbt._("Search for a user to assign a user flair", null, {
					hk: "2YaDOy"
				}))),
				ae = s("./node_modules/lodash/filter.js"),
				oe = s.n(ae),
				re = s("./node_modules/lodash/isEqual.js"),
				ie = s.n(re),
				le = s("./node_modules/lodash/omit.js"),
				de = s.n(le),
				ce = s("./src/reddit/constants/flair.ts"),
				me = s("./src/reddit/helpers/validateFlairCssClass.ts");
			const ue = 200;
			var pe;
			! function(e) {
				e[e.Save = 0] = "Save", e[e.Delete = 1] = "Delete"
			}(pe || (pe = {}));
			const be = e => null === e.flair,
				he = e => !(!e.apiError && !e.clientValidationError),
				ge = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Date.now();
					return oe()(e, e => {
						if (!e || e.clientValidationError) return !1;
						if (e.apiError && !t) return !1;
						if (be(e)) return !0;
						return s - e.changedAt > 2e3 || t
					})
				},
				fe = (e, t, s) => {
					const n = Object.keys(e).filter(n => {
						const a = e[n],
							o = t[n] || null;
						return !(!!o || n === s || !he(a)) || !!ie()(o, a.flair)
					});
					return n.length ? de()(e, n) : e
				},
				xe = (e, t) => {
					const s = t || ce.a;
					return (e ? Object(A.m)(e, s) || Object(me.a)(e.cssClass || "") : "") || void 0
				};
			var Ee = s("./node_modules/lodash/noop.js"),
				ve = s.n(Ee),
				ke = s("./src/reddit/components/Flair/index.tsx"),
				_e = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				Ce = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				ye = s("./src/reddit/controls/InternalLink/index.tsx"),
				Oe = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				je = s("./src/reddit/models/Flair/index.ts"),
				we = s("./src/higherOrderComponents/asTooltip.tsx"),
				Se = s("./src/reddit/actions/tooltip.ts"),
				Ne = s("./src/reddit/constants/keycodes.ts"),
				Ie = s("./src/reddit/controls/Dropdown/index.tsx"),
				Te = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				Me = s("./src/reddit/selectors/tooltip.ts");
			const Pe = e => `UserFlairPicker--${e}`,
				Re = Object(we.a)(Ie.a),
				Ae = e => {
					let {
						flair: t
					} = e;
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(ke.b, {
						flair: Object(A.c)(t),
						forceSmallEmojis: !0
					}), t.textEditable && l.a.createElement(X.a, {
						className: se.a.userIcon
					}), t.modOnly && l.a.createElement(K.a, {
						className: se.a.modIcon
					}))
				},
				Fe = Object(c.c)({
					isDropdownOpen: (e, t) => Object(Me.b)(Pe(t.userName))(e)
				});
			class De extends l.a.Component {
				constructor(e) {
					super(e), this.onSetFocus = e => {
						this.setState({
							focusedIndex: e
						})
					}, this.findNextFocusableItem = () => {
						if (void 0 === this.state.focusedIndex) return -1; {
							const e = this.state.focusedIndex + 1;
							if (e <= this.props.templateIds.length - 1) return e
						}
					}, this.onMouseEnter = e => {
						const t = document.getElementById(`focus-${e}`);
						t && (t.focus(), this.onSetFocus(e))
					}, this.findPreviousFocusableItem = () => {
						if (void 0 !== this.state.focusedIndex && -1 !== this.state.focusedIndex) return this.state.focusedIndex - 1
					}, this.onKeyDown = e => {
						if (e.keyCode === Ne.a.ArrowDown)
							if (e.preventDefault(), this.props.isDropdownOpen) {
								const e = this.findNextFocusableItem();
								if (void 0 !== e) {
									const t = document.getElementById(`focus-${e}`);
									t && (t.focus(), t.scrollIntoView({
										block: "nearest"
									})), this.onSetFocus(e)
								}
							} else this.props.onToggleDropdown();
						if (e.keyCode === Ne.a.ArrowUp) {
							e.preventDefault();
							const t = this.findPreviousFocusableItem();
							if (void 0 !== t) {
								const e = document.getElementById(`focus-${t}`);
								e && (e.focus(), e.scrollIntoView({
									block: "nearest"
								})), this.onSetFocus(t)
							}
						}
						if (e.keyCode === Ne.a.Tab && this.props.isDropdownOpen && e.preventDefault(), e.keyCode === Ne.a.Enter) {
							if (e.preventDefault(), e.stopPropagation(), this.props.isDropdownOpen && void 0 !== this.state.focusedIndex) {
								const e = this.props.templateIds[this.state.focusedIndex];
								this.props.onSelectFlairTemplate(e)
							}
							this.props.onToggleDropdown()
						}
					}, this.state = {}
				}
				render() {
					const {
						props: e
					} = this;
					return l.a.createElement("button", {
						className: se.a.dropdownTarget,
						id: Pe(e.userName),
						onClick: e.onToggleDropdown,
						onKeyDown: this.onKeyDown
					}, e.selectedTemplateId && e.userFlairTemplates[e.selectedTemplateId] ? l.a.createElement(Ae, {
						flair: e.userFlairTemplates[e.selectedTemplateId]
					}) : a.fbt._("none", null, {
						hk: "ng6B"
					}), l.a.createElement(Te.a, {
						className: se.a.dropdownTriangle
					}), l.a.createElement(Re, {
						className: se.a.dropdownContainer,
						isOpen: e.isDropdownOpen,
						tooltipId: Pe(e.userName)
					}, l.a.createElement("button", {
						className: se.a.dropdownRow,
						id: "focus--1",
						onClick: () => e.onSelectFlairTemplate(void 0),
						onMouseEnter: () => this.onMouseEnter(-1),
						tabIndex: -1
					}, a.fbt._("none", null, {
						hk: "ng6B"
					})), e.templateIds.map((t, s) => {
						const n = e.userFlairTemplates[t];
						return l.a.createElement("button", {
							className: se.a.dropdownRow,
							id: `focus-${s}`,
							key: t,
							onClick: () => e.onSelectFlairTemplate(t),
							onMouseEnter: () => this.onMouseEnter(s),
							tabIndex: -1
						}, l.a.createElement(Ae, {
							flair: n
						}))
					})))
				}
			}
			var Le = Object(d.b)(Fe, (e, t) => ({
				onToggleDropdown: () => e(Object(Se.h)({
					tooltipId: Pe(t.userName)
				}))
			}))(De);
			const Ue = e => `emoji-picker-${e}`,
				Be = Object(A.b)();
			class He extends l.a.PureComponent {
				constructor() {
					super(...arguments), this.onSelectFlairTemplate = e => {
						const t = e && this.props.userFlairTemplates[e],
							s = t ? Object(A.c)(t) : Be;
						this.props.onChange(this.props.username, s)
					}, this.onFlairContentChanged = e => {
						this.props.onChange(this.props.username, e)
					}, this.onChangeCssClass = e => {
						const t = e.target.value,
							s = this.props.flair || Be;
						this.props.onChange(this.props.username, {
							...s,
							cssClass: t
						})
					}, this.removeFlair = () => {
						this.props.onChange(this.props.username, null)
					}
				}
				render() {
					const {
						props: e
					} = this, {
						hasError: t
					} = e, s = e.flair || Be, n = Object(_e.a)(), a = s.templateId, o = a && e.userFlairTemplates[a] || ce.a, r = !!o && o.modOnly, i = !Object(me.a)(s.cssClass || "");
					return l.a.createElement("div", {
						className: Object(v.a)(se.a.row, t ? se.a.hasError : null)
					}, l.a.createElement("div", {
						className: se.a.errorIndicator
					}, l.a.createElement(y.a, null)), l.a.createElement(ye.default, {
						className: se.a.userLink,
						to: `/user/${e.username}`
					}, l.a.createElement(Ce.a, {
						user: e.username,
						tooltipId: `grantuserflair--userhovercard--${e.username}`,
						subredditId: e.subredditId,
						sendHoverCardEvent: ve.a
					}, e.username, l.a.createElement("div", {
						className: se.a.flairContainer
					}, l.a.createElement(ke.b, {
						flair: s
					})))), l.a.createElement("div", {
						className: se.a.flairDetails
					}, l.a.createElement("div", {
						className: se.a.column
					}, l.a.createElement(Le, {
						onSelectFlairTemplate: this.onSelectFlairTemplate,
						selectedTemplateId: a,
						templateIds: e.templateIds,
						userFlairTemplates: e.userFlairTemplates,
						userName: this.props.username
					})), l.a.createElement("div", {
						className: se.a.flairEditColumn
					}, l.a.createElement(n, {
						allowBlank: !e.isChanged,
						emojiPickerId: Ue(e.username),
						flair: s,
						flairTemplateType: je.d.UserFlair,
						flairTemplate: o,
						helperTextClass: se.a.flairEditHelperText,
						isCompact: !0,
						isFlairModOnly: r,
						onChange: this.onFlairContentChanged,
						subredditId: e.subredditId
					})), l.a.createElement("div", {
						className: se.a.column
					}, l.a.createElement("input", {
						className: Object(v.a)(se.a.textInput, {
							[se.a.cssInputError]: !i
						}),
						value: s.cssClass || "",
						onChange: this.onChangeCssClass,
						disabled: !!o.id
					})), l.a.createElement("button", {
						className: se.a.removeButton,
						onClick: this.removeFlair
					}, l.a.createElement(Oe.a, {
						className: se.a.removeIcon
					}))))
				}
			}
			var We = He;
			const ze = {},
				Ve = Object(R.u)({
					currentPageUrl: R.f
				}),
				qe = Object(c.c)({
					flairedUserOrder: (e, t) => {
						const s = Object(J.e)(t.subredditId, t.after, t.before);
						return e.pages.modHub.flairedUsers.userOrder[s] || Y
					},
					flairedUsers: (e, t) => e.pages.modHub.flairedUsers.models[t.subredditId],
					isFlairedUsersListPending: e => e.pages.modHub.flairedUsers.api.pending,
					isSearchPending: e => e.pages.modHub.flairedUsers.search.api.pending,
					isUserFlairEnabled: $.a,
					origin: Z.j,
					pageInfo: (e, t) => {
						const s = Object(J.e)(t.subredditId, t.after, t.before);
						return e.pages.modHub.flairedUsers.pageInfo[s]
					},
					searchResult: (e, t) => e.pages.modHub.flairedUsers.search.result,
					userFlairData: $.d
				}),
				Ge = Object(d.b)(qe, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						deleteUserFlair: (t, s) => e(Object(b.a)(t, s)),
						saveFlairedUser: (t, n) => e(Object(b.d)(t, s, n)),
						searchFlairedUser: t => e(Object(b.e)(s, t))
					}
				});
			class Ke extends l.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.isUnmounted = !1, this.pendingRequestsMap = new Map, this.autoSaveIntervalId = 0, this.processChanges = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						t.autoSaveIntervalId || (t.autoSaveIntervalId = window.setInterval(t.processChanges, ue));
						const {
							flairedUsers: s
						} = t.props, {
							unsavedChanges: n,
							searchTerm: a
						} = t.state, o = fe(n, s, a), r = ge(o, e);
						r.forEach(t.sendChangeToServer), o !== n && t.setState({
							unsavedChanges: o
						})
					}, this.sendChangeToServer = async e => {
						const t = e.username;
						if (this.pendingRequestsMap.get(t)) return;
						const s = this.props.flairedUsers[t] || null;
						this.sendTelemetryEvents(s, e.flair);
						const n = e.flair ? {
							type: pe.Save,
							promise: this.props.saveFlairedUser(t, e.flair)
						} : {
							type: pe.Delete,
							promise: this.props.deleteUserFlair(t, this.props.subredditId)
						};
						this.pendingRequestsMap.set(t, n);
						const a = await n.promise;
						this.pendingRequestsMap.delete(t), this.isUnmounted || this.setState(s => {
							const n = s.unsavedChanges[t];
							return e !== n ? null : {
								unsavedChanges: !0 === a ? Object(u.a)(s.unsavedChanges, t) : {
									...this.state.unsavedChanges,
									[t]: {
										...e,
										apiError: a
									}
								}
							}
						})
					}, this.onFlairChanged = (e, t) => {
						const {
							templates: s
						} = this.props.userFlairData, n = t && t.templateId ? s[t.templateId] : void 0;
						this.setState(s => {
							return {
								unsavedChanges: {
									...s.unsavedChanges,
									[e]: {
										flair: t,
										username: e,
										changedAt: Date.now(),
										clientValidationError: xe(t, n)
									}
								}
							}
						})
					}, this.onSearch = e => {
						this.props.searchFlairedUser(e), this.setState({
							searchTerm: e
						}), this.props.sendEvent(U())
					}, this.onCancelSearch = () => {
						this.setState({
							searchTerm: null
						})
					}, this.onClickNextPage = () => this.props.sendEvent(B()), this.onClickPrevPage = () => this.props.sendEvent(H()), this.renderUserRow = e => {
						const {
							state: t,
							props: s
						} = this, n = s.flairedUsers[e] || null, a = t.unsavedChanges[e], o = a && !be(a) ? a.flair : n;
						return l.a.createElement(We, {
							flair: o,
							hasError: !!a && he(a),
							isChanged: !!a,
							key: e,
							onChange: this.onFlairChanged,
							subredditId: s.subredditId,
							templateIds: s.userFlairData.templateIds,
							userFlairTemplates: s.userFlairData.templates,
							username: e
						})
					}, this.state = {
						searchTerm: null,
						unsavedChanges: ze
					}
				}
				componentDidUpdate() {
					this.processChanges()
				}
				componentWillUnmount() {
					this.isUnmounted = !0, this.processChanges(!0), window.clearInterval(this.autoSaveIntervalId)
				}
				sendTelemetryEvents(e, t) {
					if (!t) return void this.props.sendEvent(W());
					let s = e || Object(A.b)();
					const n = s.templateId || void 0,
						a = t.templateId || void 0;
					if (a !== n) {
						this.props.sendEvent(q(a));
						const e = t.templateId && this.props.userFlairData.templates[t.templateId];
						s = e ? Object(A.c)(e) : s
					}
					Object(A.p)(t, s) || this.props.sendEvent(V()), t.cssClass !== s.cssClass && this.props.sendEvent(G(t.cssClass || ""))
				}
				getIndicatorStatus() {
					const {
						unsavedChanges: e
					} = this.state;
					if (e === ze) return null;
					const t = !!r()(e, e => he(e));
					return !!r()(e, e => !he(e)) ? j.a.Pending : t ? j.a.Failed : j.a.Complete
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = this.getIndicatorStatus(), o = e.pageInfo && (e.pageInfo.hasNextPage || e.pageInfo.hasPreviousPage), r = !e.flairedUserOrder.length && !o;
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(E.c, {
						className: se.a.topBar
					}, null !== s && l.a.createElement(S, {
						status: s
					})), l.a.createElement(E.a, null, l.a.createElement(E.b, null, a.fbt._("Grant user flair", null, {
						hk: "N1r42"
					}), l.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360028091332`
					})), !e.isUserFlairEnabled && l.a.createElement(h.a, {
						className: se.a.disabledBanner,
						color: P.a.quarantine,
						icon: l.a.createElement(Q.a, {
							className: se.a.warningIcon
						}),
						title: a.fbt._("User flair has been disabled for this community", null, {
							hk: "3BBvFe"
						}),
						subtitle: a.fbt._("User flair will not be displayed in posts or comments", null, {
							hk: "3E4WaA"
						})
					}), l.a.createElement(I.b, {
						activeSearchQuery: t.searchTerm,
						onSearch: this.onSearch
					}, e.pageInfo && !t.searchTerm && l.a.createElement(x.a, {
						prevTo: Object(m.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							before: e.pageInfo.startCursor
						}),
						prevButtonEnabled: e.pageInfo.hasPreviousPage,
						prevButtonOnClick: this.onClickPrevPage,
						nextButtonEnabled: e.pageInfo.hasNextPage,
						nextButtonOnClick: this.onClickNextPage,
						nextTo: Object(m.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							after: e.pageInfo.endCursor
						})
					})), l.a.createElement("div", {
						className: se.a.titleRow
					}, a.fbt._("Username with preview", null, {
						hk: "1RFjbI"
					}), l.a.createElement("div", {
						className: se.a.flairDetails
					}, l.a.createElement("div", {
						className: se.a.column
					}, a.fbt._("Flair template", null, {
						hk: "18cQfH"
					}), l.a.createElement(f.a, {
						className: se.a.infoTooltip
					}, l.a.createElement("div", {
						className: se.a.tooltipText
					}, a.fbt._("Flair templates determine the flair's background colors, text colors, and permissions", null, {
						hk: "4y58Eg"
					})), l.a.createElement("div", {
						className: se.a.tooltipIconContainer
					}, l.a.createElement("div", {
						className: se.a.tooltipIconRow
					}, l.a.createElement(K.a, {
						className: se.a.modIcon
					}), l.a.createElement("span", {
						className: se.a.tooltipIconText
					}, a.fbt._("Available only to mods", null, {
						hk: "2s7Gci"
					}))), l.a.createElement("div", {
						className: se.a.tooltipIconRow
					}, l.a.createElement(X.a, {
						className: se.a.userIcon
					}), l.a.createElement("span", {
						className: se.a.tooltipIconText
					}, a.fbt._("User editable", null, {
						hk: "3tIGRy"
					})))))), l.a.createElement("div", {
						className: se.a.flairEditColumn
					}, a.fbt._("Flair text", null, {
						hk: "2ab8Up"
					}), l.a.createElement(f.a, {
						text: a.fbt._("Changes the text and emojis within the user flair", null, {
							hk: "4dBW4C"
						})
					})), l.a.createElement("div", {
						className: se.a.column
					}, a.fbt._("Css class", null, {
						hk: "1TNNcJ"
					}), l.a.createElement(f.a, {
						text: a.fbt._("CSS classes determine styling for flair in old Reddit", null, {
							hk: "j4AU"
						})
					})))), t.searchTerm ? l.a.createElement(N.a, {
						cancelSearch: this.onCancelSearch,
						noResultsFound: !e.searchResult,
						searchTerm: t.searchTerm,
						searchPending: e.isSearchPending
					}, e.searchResult && this.renderUserRow(e.searchResult)) : e.isFlairedUsersListPending ? l.a.createElement(T.a, null) : r ? l.a.createElement(ne, null) : e.flairedUserOrder.map(this.renderUserRow), e.pageInfo && !t.searchTerm && l.a.createElement("div", {
						className: se.a.bottomBarRow
					}, l.a.createElement(x.a, {
						prevTo: Object(m.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							before: e.pageInfo.startCursor
						}),
						prevButtonEnabled: e.pageInfo.hasPreviousPage,
						prevButtonOnClick: this.onClickPrevPage,
						nextButtonEnabled: e.pageInfo.hasNextPage,
						nextButtonOnClick: this.onClickNextPage,
						nextTo: Object(m.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							after: e.pageInfo.endCursor
						})
					}))))
				}
			}
			t.a = Ve(Ge(Object(M.c)(Ke)))
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(r),
				l = s("./src/lib/lessComponent.tsx");
			const d = l.a.div("IconWrapper", i.a),
				c = l.a.div("TextWrapper", i.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: r,
					title: l,
					textWrapperClassName: m
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, a.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? a.a.createElement(d, null, n) : a.a.createElement(d, null), a.a.createElement(c, {
					className: m
				}, a.a.createElement("div", {
					className: i.a.title
				}, l), r && a.a.createElement("div", {
					className: i.a.subtitle
				}, r)))
			}
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, s) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/ModHub/ApprovedTalkHosts/AddApprovedTalkHostModal.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "yumI0nyT2gr7SFtITyKpa",
				primaryButton: "yumI0nyT2gr7SFtITyKpa"
			}
		},
		"./src/reddit/components/ModHub/ApprovedTalkHosts/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "_2no2YPg0_yUhnhUSmNU8Xu",
				pencilIcon: "_2no2YPg0_yUhnhUSmNU8Xu",
				noPermissions: "_2L3p28vjPxj-Ab-h1gRXii",
				helperTitle: "_3qVhi7y_9yxVxxDGEHORe9"
			}
		},
		"./src/reddit/components/ModHub/ApprovedTalkHosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/subredditModeration/approvedTalkHosts.ts"),
				p = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./src/reddit/components/HumanDate/index.tsx"),
				h = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				g = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = s("./src/reddit/components/Scroller/Simple.tsx"),
				x = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				E = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/SubredditModeration/index.ts"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/lib/objectSelector/index.ts"),
				y = s("./src/reddit/components/InboxTooltip/Component.tsx");
			const O = Object(C.a)((e, t) => {
				let {
					subredditId: s
				} = t;
				return e.pages.modHub.approvedTalkHosts.models[s] || y.a
			});
			var j = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				S = s("./src/higherOrderComponents/asModal/index.tsx"),
				N = s("./src/lib/lessComponent.tsx"),
				I = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				T = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				M = s("./src/reddit/controls/TextButton/index.tsx"),
				P = s("./src/reddit/helpers/isValidUsername/index.tsx"),
				R = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				A = s("./src/reddit/components/ModHub/ApprovedTalkHosts/AddApprovedTalkHostModal.m.less"),
				F = s.n(A);
			const D = N.a.wrapped(E.l, "PrimaryButton", F.a);
			var L = Object(S.a)(e => {
					let {
						subredditId: t,
						onAddTalkHost: s,
						toggleModal: n,
						sendEventWithName: i
					} = e;
					const [l, d] = Object(o.useState)("");
					return r.a.createElement(I.e, null, r.a.createElement(I.i, null, r.a.createElement(R.a, null, r.a.createElement(I.q, null, a.fbt._("Add approved Talk host", null, {
						hk: "38DcZT"
					})), r.a.createElement(M.a, {
						onClick: n
					}, r.a.createElement(I.b, null)))), r.a.createElement(I.l, null, r.a.createElement(T.d, {
						placeholder: a.fbt._("Enter username", null, {
							hk: "4DdFFr"
						}),
						onChange: e => {
							d(e.currentTarget.value)
						},
						value: l,
						autoFocus: !0
					})), r.a.createElement(I.g, null, r.a.createElement(I.a, {
						onClick: n,
						"data-redditstyle": !0
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(D, {
						onClick: () => {
							s(t, l), i("add")(), n()
						},
						"data-redditstyle": !0,
						disabled: !Object(P.a)(l)
					}, a.fbt._("Approve user", null, {
						hk: "4Awx1T"
					}))))
				}),
				U = s("./src/reddit/components/ModHub/ApprovedTalkHosts/index.m.less"),
				B = s.n(U);
			const H = 24,
				W = Object(l.c)({
					approvedTalkHosts: O,
					approvedTalkHostsListPending: (e, t) => {
						let {
							subredditId: s
						} = t;
						const n = Object(k.f)(s);
						return !!e.pages.modHub.approvedTalkHosts.api.pending[n]
					},
					loadMoreToken: (e, t) => {
						let {
							subredditId: s
						} = t;
						return e.pages.modHub.approvedTalkHosts.loadMore[s]
					},
					currentUser: j.k,
					isAddApprovedTalkHostModalOpen: e => "ModerationPage--Modal--AddApprovedTalkHost" === Object(_.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--RemoveHostConfirmation" === Object(_.a)(e)
				}),
				z = Object(i.b)(W, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						addApprovedTalkHost: (t, s) => e(Object(u.a)(t, s)),
						loadMore: t => e(Object(u.b)({
							subredditId: s,
							before: t
						})),
						toggleAddApprovedHostModal: () => e(Object(m.i)("ModerationPage--Modal--AddApprovedTalkHost")),
						toggleRemoveHostModal: () => e(Object(m.i)("ModerationPage--Modal--RemoveHostConfirmation")),
						removeApprovedTalkHost: (t, s) => e(Object(u.c)(t, s))
					}
				});
			class V extends r.a.Component {
				constructor(e) {
					super(e), this.onLoadMore = () => {
						this.props.loadMoreToken && this.props.loadMore(this.props.loadMoreToken)
					}, this.approveTalkHost = () => {
						this.props.sendEventWithName("open_add_dialog")(), this.props.toggleAddApprovedHostModal()
					}, this.handleRemoveToggled = (e, t) => {
						this.setState({
							userId: e,
							username: t
						}), this.props.toggleRemoveHostModal()
					}, this.handleRemoveConfirmed = () => {
						this.state.userId && this.props.removeApprovedTalkHost(this.props.subredditId, this.state.userId)
					}, this.renderAddApprovedHostModal = () => r.a.createElement(L, {
						ignoreDefaultFocus: !0,
						onAddTalkHost: this.props.addApprovedTalkHost,
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleAddApprovedHostModal,
						sendEventWithName: this.props.sendEventWithName,
						withOverlay: !0
					}), this.renderUser = e => {
						var t, s, o;
						return r.a.createElement(x.b, {
							timeAgo: r.a.createElement(b.d, {
								seconds: Date.parse(e.addedAt) / 1e3
							}),
							pageName: c.gc.TalkHosts,
							primaryButton: (null === (t = this.props.currentUser) || void 0 === t ? void 0 : t.id) !== e.redditor.id ? r.a.createElement("a", {
								href: `${n.a.redditUrl}/message/compose/?to=${e.redditor.displayName}`,
								rel: "noopener noreferrer",
								target: "_blank"
							}, r.a.createElement(E.r, null, a.fbt._("Send message", null, {
								hk: "2bul7M"
							}))) : null,
							secondaryButton: (null === (s = this.props.moderatorPermissions) || void 0 === s ? void 0 : s.access) ? r.a.createElement(E.r, {
								onClick: () => this.handleRemoveToggled(e.redditor.id, e.redditor.displayName)
							}, a.fbt._("Remove", null, {
								hk: "3tYl0U"
							})) : null,
							subredditId: this.props.subredditId,
							userIcon: null === (o = e.redditor.icon) || void 0 === o ? void 0 : o.url,
							username: e.redditor.displayName
						})
					}, this.state = k.a
				}
				render() {
					var e;
					const {
						props: t,
						state: s
					} = this, o = t.approvedTalkHosts.length > 0 ? t.approvedTalkHosts[t.approvedTalkHosts.length - 1].redditor.id : void 0, i = null === (e = t.moderatorPermissions) || void 0 === e ? void 0 : e.access;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(E.l, {
						disabled: !i,
						onClick: this.approveTalkHost
					}, a.fbt._("Add Talk Host", null, {
						hk: "w94Fa"
					}))), r.a.createElement(g.a, {
						className: Object(d.a)(!i && B.a.noPermissions)
					}, r.a.createElement(g.b, null, a.fbt._("Talk hosts", null, {
						hk: "3ypfgA"
					}), r.a.createElement(w.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/4411156549389`
					})), r.a.createElement("p", {
						className: B.a.helperTitle
					}, a.fbt._("Talk hosts are members who are approved to create Reddit Talk posts.", null, {
						hk: "2mnjQi"
					})), t.approvedTalkHostsListPending && r.a.createElement(x.a, null), t.approvedTalkHosts.length > 0 ? r.a.createElement(f.b, {
						loadMoreToken: o,
						onLoadMore: this.onLoadMore
					}, t.approvedTalkHosts.map(e => ({
						estHeight: H,
						id: e.redditor.id,
						render: () => this.renderUser(e)
					}))) : r.a.createElement(h.c, {
						text: a.fbt._("No approved Talk hosts in {subredditName}", [a.fbt._param("subredditName", t.subredditName)], {
							hk: "3lDejn"
						})
					}, r.a.createElement(v.a, {
						name: "edit",
						className: B.a.PencilIcon
					}))), t.isAddApprovedTalkHostModalOpen && this.renderAddApprovedHostModal(), t.isConfirmModalOpen && s.userId && s.username && r.a.createElement(p.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						modalText: a.fbt._("Are you sure you want to remove {username} as an approved Talk host?", [a.fbt._param("username", s.username)], {
							hk: "1p0fqz"
						}),
						onConfirm: this.handleRemoveConfirmed,
						toggleModal: t.toggleRemoveHostModal,
						trackClick: t.sendEventWithName("remove"),
						withOverlay: !0
					}))
				}
			}
			t.a = z(V)
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/EmptyState/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_12gWQ2C_gotA8s5-CJIlq9",
				icon: "_3-Fcrds7R5ihAWPAttv3AL",
				title: "_1vL1j4mpTYI5NOR335bInG",
				subtitle: "_3FOOtAw2Q-T7szrSBAbo9i"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/TabBar/index.m.less": function(e, t, s) {
			e.exports = {
				tabBar: "_1ItRVjBpP4aLG0vg-nXbwO",
				tab: "_3A18ggmDWAI5_Fz0nDOs-z",
				selected: "_3U85C8qDDoOUoOINg-E_3S"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/index.m.less": function(e, t, s) {
			e.exports = {
				contentContainer: "_2O3bUryrh35-WVnz9Zoet5",
				content: "_1FTRfhuddBV5YzYiIzObiO",
				grid: "_3i8uEN2ZVREoZOqW0PBJKD",
				header: "_3TFv4L83k0sAQxxxDJCzh9",
				actionHeader: "_3XGx1tfvY30VXMwrnAYMfZ",
				cell: "_30GfT3S_RWhS9B1JiSCaIJ",
				imageCell: "_1mzA539xYQn08RGzbn-Rgl",
				image: "_2UKv8w6-nnOZn6-lOqv57x",
				imagePlaceholder: "_2-8LfoYIQ37smNisBTPrPA",
				title: "_2cEKePFj4PUyuqlM_8uInw",
				caption: "_33iTirQvYAUBeq5vAp6Nr6",
				timeCell: "_1EzbYLhrmLPhhpk2FFAmcj",
				actionCell: "_1JvlfJR1EFT7pnSONpgiXk",
				dropdownSelector: "_2K7txHCmQX-J_7K7zNiCM1",
				byModerator: "_3czV_FVsdvYbnimTT57vCK",
				line: "_22JqeR_rL-tI8mxRb7N8Mq",
				loadingTextLong: "_2AZFpVa_LwltM1gTwCGIDe",
				loadingTextShort: "_1LWRk2sNojXWsOI1Y85nf7"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return W
			})), s.d(t, "b", (function() {
				return z
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/governance/errorToast.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				c = s("./src/reddit/contexts/ApiContext.tsx"),
				m = s("./src/reddit/endpoints/economics/uploadedAssets.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				h = s("./src/reddit/components/ModHub/BadgesAndEmotes/EmptyState/index.m.less"),
				g = s.n(h);
			const f = {
				[m.a.Uploaded]: {
					title: () => n.fbt._("No more to review!", null, {
						hk: "2rF58X"
					}),
					subtitle: () => n.fbt._("There are no new submissions", null, {
						hk: "3h54Ot"
					})
				},
				[m.a.Approved]: {
					title: () => n.fbt._("Nothing approved yet", null, {
						hk: "157fUO"
					}),
					subtitle: () => n.fbt._("Submissions will be here once you approve them", null, {
						hk: "pLc2c"
					})
				},
				[m.a.Rejected]: {
					title: () => n.fbt._("Nothing rejected yet", null, {
						hk: "1XN9kw"
					}),
					subtitle: () => n.fbt._("Submissions will be here once you reject them", null, {
						hk: "2IYFHB"
					})
				}
			};

			function x(e) {
				const t = f[e.selectedStatus];
				return o.a.createElement("div", {
					className: g.a.container
				}, o.a.createElement(b.a, {
					className: g.a.icon
				}), o.a.createElement("h3", {
					className: g.a.title
				}, t.title()), o.a.createElement("p", {
					className: g.a.subtitle
				}, t.subtitle()))
			}
			var E = s("./src/reddit/components/AuthorLink/index.tsx"),
				v = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				k = s("./src/reddit/components/ModHub/BadgesAndEmotes/index.m.less"),
				_ = s.n(k);
			const C = p.a.div("cell", _.a),
				y = () => [{
					displayText: n.fbt._("New", null, {
						hk: "2xTBYx"
					}),
					value: m.a.Uploaded
				}, {
					displayText: n.fbt._("Approved", null, {
						hk: "1xx5DL"
					}),
					value: m.a.Approved
				}, {
					displayText: n.fbt._("Rejected", null, {
						hk: "25TTJE"
					}),
					value: m.a.Rejected
				}],
				O = () => y().slice(1, 3),
				j = new Intl.DateTimeFormat(void 0, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).format;

			function w(e) {
				const {
					item: t,
					onItemAction: s
				} = e, a = y().find(e => e.value === t.status);
				let r = t.type === m.b.Badge ? t.extra.description : void 0;
				return r && r.endsWith(" u/" + t.uploader) && (r = r.slice(0, r.length - t.uploader.length - 3)), o.a.createElement(o.a.Fragment, null, o.a.createElement(C, {
					className: _.a.imageCell
				}, o.a.createElement("div", {
					className: _.a.image,
					style: {
						backgroundImage: `url(${t.url})`
					}
				})), o.a.createElement(C, {
					className: _.a.nameCell
				}, o.a.createElement("div", {
					className: _.a.title
				}, t.type === m.b.Emote ? `:${t.name}:` : t.name), o.a.createElement("div", {
					className: _.a.caption
				}, r, " ", o.a.createElement(E.a, {
					author: t.uploader,
					style: {
						color: t.type === m.b.Badge ? t.extra.color : void 0
					}
				}, "u/", t.uploader))), o.a.createElement(C, {
					className: _.a.timeCell
				}, j(t.createdAt)), o.a.createElement(C, {
					className: _.a.actionCell
				}, o.a.createElement(v.a, {
					className: _.a.dropdownSelector,
					displayText: a ? a.displayText : "",
					options: O(),
					onSelect: e => s(t, e.value),
					isCompactStyle: !0
				}), t.status !== m.a.Uploaded && !!t.moderator && !!t.modifiedAt && o.a.createElement("div", {
					className: _.a.byModerator
				}, n.fbt._("by u/ {moderator}, {time-modified}", [n.fbt._param("moderator", t.moderator), n.fbt._param("time-modified", j(t.modifiedAt))], {
					hk: "25I5ES"
				}))), o.a.createElement("div", {
					className: _.a.line
				}))
			}
			var S = s("./src/lib/classNames/index.ts");
			const N = p.a.div("cell", _.a),
				I = () => o.a.createElement(o.a.Fragment, null, o.a.createElement(N, {
					className: _.a.imageCell
				}, o.a.createElement("div", {
					className: Object(S.a)(_.a.image, _.a.imagePlaceholder)
				})), o.a.createElement(N, {
					className: _.a.nameCell
				}, o.a.createElement("div", {
					className: _.a.loadingTextLong
				})), o.a.createElement(N, null, o.a.createElement("div", {
					className: _.a.loadingTextShort
				})), o.a.createElement(N, {
					className: _.a.actionCell
				}, o.a.createElement("div", {
					className: _.a.loadingTextShort
				})), o.a.createElement("div", {
					className: _.a.line
				}));
			var T = () => o.a.createElement(o.a.Fragment, null, o.a.createElement(I, null), o.a.createElement(I, null), o.a.createElement(I, null), o.a.createElement(I, null));
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = p.a.div("header", _.a);

			function R(e) {
				const {
					onAssetAction: t,
					assets: s,
					selectedStatus: n
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: _.a.grid
				}, o.a.createElement(P, null, M._("Image", null, {
					hk: "3ImlXy"
				})), o.a.createElement(P, null, M._("Name and Description", null, {
					hk: "ZMWPH"
				})), o.a.createElement(P, null, M._("Submission Time", null, {
					hk: "3qPqQa"
				})), o.a.createElement(P, {
					className: _.a.actionHeader
				}, M._("Action", null, {
					hk: "27SYzP"
				})), !s && o.a.createElement(T, null), s && !!s.length && s.map(e => o.a.createElement(w, {
					item: e,
					key: e.name,
					onItemAction: t
				}))), s && !s.length && o.a.createElement(x, {
					selectedStatus: n
				}))
			}
			var A = s("./src/reddit/components/ModHub/BadgesAndEmotes/TabBar/index.m.less"),
				F = s.n(A);
			const D = e => o.a.createElement("button", {
					className: Object(S.a)(F.a.tab, {
						[F.a.selected]: e.selected
					}),
					onClick: e.onClick
				}, e.children),
				L = e => o.a.createElement("div", {
					className: F.a.tabBar
				}, [m.a.Uploaded, m.a.Approved, m.a.Rejected].map(t => o.a.createElement(D, {
					onClick: () => e.onTabSelected(t),
					selected: t === e.value,
					value: t,
					key: t
				}, (e => {
					switch (e) {
						case m.a.Uploaded:
							return n.fbt._("Uploaded", null, {
								hk: "1AgqhR"
							});
						case m.a.Approved:
							return n.fbt._("Approved", null, {
								hk: "37lIL9"
							});
						case m.a.Rejected:
							return n.fbt._("Rejected", null, {
								hk: "W16pI"
							});
						default:
							return n.fbt._("Uploaded", null, {
								hk: "1AgqhR"
							})
					}
				})(t))));

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class B extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						selectedStatus: m.a.Uploaded
					}, this.onTabChange = async e => {
						this.setState({
							assets: void 0,
							selectedStatus: e
						});
						const t = await Object(m.c)(this.props.apiContext(), this.props.subredditId, this.props.assetType, e);
						t.ok ? this.setState({
							assets: t.body.assets || []
						}) : this.props.onGovernanceError(t.error)
					}, this.onAssetAction = async (e, t) => {
						if (e.status === t) return;
						const s = this.props.assetType,
							n = await Object(m.d)(this.props.apiContext(), this.props.subredditId, s, e.id, {
								status: t
							});
						if (n.ok) {
							const n = this.state.assets;
							this.setState({
								assets: n && n.filter(t => t !== e)
							}), t === m.a.Approved ? this.props.onApproved(s) : t === m.a.Rejected && this.props.onRejected(s)
						} else this.props.onGovernanceError(n.error)
					}
				}
				componentDidMount() {
					this.onTabChange(this.state.selectedStatus)
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(d.a, {
						className: _.a.contentContainer
					}, o.a.createElement(d.b, null, this.props.assetType === m.b.Badge ? n.fbt._("User uploaded badges", null, {
						hk: "3qGdzT"
					}) : n.fbt._("User uploaded emotes", null, {
						hk: "1GJiVz"
					})), o.a.createElement("div", {
						className: _.a.content
					}, o.a.createElement(L, {
						onTabSelected: this.onTabChange,
						value: this.state.selectedStatus
					}), o.a.createElement(R, {
						selectedStatus: this.state.selectedStatus,
						assets: this.state.assets,
						onAssetAction: this.onAssetAction
					}))))
				}
			}
			const H = Object(c.b)(Object(r.b)(void 0, (e, t) => ({
					onGovernanceError: t => Object(i.a)(e, t),
					onApproved: t => e(Object(l.f)({
						kind: u.b.SuccessCommunity,
						text: t === m.b.Badge ? n.fbt._("Approved badge!", null, {
							hk: "3B3r07"
						}) : n.fbt._("Approved emote!", null, {
							hk: "tWzSE"
						})
					})),
					onRejected: t => e(Object(l.f)({
						kind: u.b.SuccessCommunity,
						text: t === m.b.Badge ? n.fbt._("Rejected badge", null, {
							hk: "1X6cSg"
						}) : n.fbt._("Rejected emote", null, {
							hk: "3RS2kT"
						})
					}))
				}))(B)),
				W = e => o.a.createElement(H, U({
					assetType: m.b.Badge
				}, e)),
				z = e => o.a.createElement(H, U({
					assetType: m.b.Emote
				}, e))
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/contexts/NavbarExp.ts"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/ModHub/Content/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const t = Object(o.useContext)(i.a);
				return r.a.createElement("div", {
					className: Object(l.a)(c.a.noPermissions, {
						[c.a.noPermissionsExp]: t
					})
				}, r.a.createElement("img", {
					className: c.a.rememberTheHuman,
					src: `${n.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? a.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : a.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), r.a.createElement("div", {
					className: c.a.noPermissionsSmallText
				}, e.isModerator ? a.fbt._("You need to change your mod permissions to view this page", null, {
					hk: "RS9sd"
				}) : e.subredditDisplayText ? a.fbt._("You must be a moderator of {subredditName} to view this page", [a.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "8eU68"
				}) : a.fbt._("You must be a moderator to view this page", null, {
					hk: "2N7TXH"
				})))
			}
		},
		"./src/reddit/components/ModHub/Content/WelcomeMessage.m.less": function(e, t, s) {
			e.exports = {
				ModerateIcon: "khXWcHNm7cUFKCGgNfNPy",
				moderateIcon: "khXWcHNm7cUFKCGgNfNPy",
				ModHubWelcomeMessage: "_1WUhYUiKwTt20VZZiLFRXQ",
				modHubWelcomeMessage: "_1WUhYUiKwTt20VZZiLFRXQ"
			}
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				buttonFontXS: "X1zM6CuE0STTL567u2KEr",
				buttonFontXs: "X1zM6CuE0STTL567u2KEr",
				buttonFontS: "_35xxostuR-t_KnCQpTxb0F",
				buttonFontM: "_1siVd6fOXNWDs8SbSH_HQ5",
				buttonFontL: "_1mAbhFs88EE9k-jaJMzlbM",
				buttonFontXL: "FxQ8KBPxEROiwB1EG0sLr",
				buttonFontXl: "FxQ8KBPxEROiwB1EG0sLr",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFontH6Small: "mhRrYXj7dAprAm-wE7DdO",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsExp: "_30KCF1VJPMgbkHOfEhoE2p",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModHub/Content/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/assertNever.ts"),
				i = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/components/ApprovedSubmitterList/index.tsx"),
				d = s("./src/reddit/components/BannedUserList/index.tsx"),
				c = s("./src/reddit/components/CommunityAwardList/index.tsx"),
				m = s("./src/reddit/components/CommunitySettings/index.tsx"),
				u = s("./src/reddit/components/GrantUserFlair/index.tsx"),
				p = s("./src/reddit/components/ModerationLog/index.tsx"),
				b = s("./src/reddit/components/ModeratorsList/index.tsx"),
				h = s("./src/reddit/components/ModHub/ApprovedTalkHosts/index.tsx"),
				g = s("./src/reddit/components/ModHub/BadgesAndEmotes/index.tsx"),
				f = s("./src/reddit/components/ModHub/Emojis/index.tsx"),
				x = s("./src/reddit/components/MutedUserList/index.tsx"),
				E = s("./src/reddit/components/PowerupsSettings/index.tsx"),
				v = s("./src/reddit/components/RemovalReasons/index.tsx"),
				k = s("./src/reddit/components/Streaming/ModSettings/index.tsx"),
				_ = s("./src/reddit/components/SubredditContent/EventPostContent/index.tsx"),
				C = s("./src/reddit/components/SubredditContent/PredictionsContent/async.ts"),
				y = s("./src/reddit/components/SubredditContent/ScheduledPostContent/index.tsx"),
				O = s("./src/reddit/components/SubredditRules/index.tsx");
			const j = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-ContentControls",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ModHub-ContentControls").then(s.bind(null, "./src/reddit/components/ModHub/ContentControls/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/ContentControls/index.tsx"
					}
				}),
				w = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-ChatSettings",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ModHub-ChatSettings").then(s.bind(null, "./src/reddit/components/ModHub/ChatSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/ChatSettings/index.tsx"
					}
				}),
				S = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-TrafficStats",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ModHub-TrafficStats").then(s.bind(null, "./src/reddit/components/ModHub/TrafficStats/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/TrafficStats/index.tsx"
					}
				}),
				N = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-flairs-PostFlairManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"), s.e("reddit-components-ModHub-flairs-PostFlairManagement")]).then(s.bind(null, "./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx"
					}
				}),
				I = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-flairs-UserFlairManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"), s.e("reddit-components-ModHub-flairs-UserFlairManagement")]).then(s.bind(null, "./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx"
					}
				}),
				T = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-Wiki-ModHubWikiManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), s.e("reddit-components-Wiki-ModHubWikiManagement")]).then(s.bind(null, "./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx"
					}
				}),
				M = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-Content-ModQueue",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ModHub-Content-ModQueue").then(s.bind(null, "./src/reddit/components/ModHub/Content/ModQueue.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/Content/ModQueue.tsx"
					}
				}),
				P = e => {
					const {
						layout: t,
						pageName: s,
						postTypeFilter: n,
						postSort: a,
						subpageName: P,
						...R
					} = e, A = {
						...R,
						subredditId: e.subreddit.id
					};
					switch (s) {
						case i.gc.Removal:
							return o.a.createElement(v.a, {
								subredditId: e.subreddit.id,
								sendEventWithName: e.sendEventWithName
							});
						case i.gc.Contributors:
							return o.a.createElement(l.a, A);
						case i.gc.Banned:
							return o.a.createElement(d.a, A);
						case i.gc.Streaming:
							return o.a.createElement(k.a, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id
							});
						case i.gc.Muted:
							return o.a.createElement(x.a, A);
						case i.gc.Moderators:
							return o.a.createElement(b.a, A);
						case i.gc.Modlog:
							return o.a.createElement(p.a, A);
						case i.gc.ContentControls:
							return o.a.createElement(j, {
								subredditName: e.subreddit.name
							});
						case i.gc.ChatSettings:
							return o.a.createElement(w, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id
							});
						case i.gc.Flair:
							return o.a.createElement(u.a, {
								after: e.after,
								before: e.before,
								subredditId: e.subreddit.id
							});
						case i.gc.PostFlair:
							return o.a.createElement(N, {
								subredditId: e.subreddit.id
							});
						case i.gc.UserFlair:
							return o.a.createElement(I, {
								subredditId: e.subreddit.id
							});
						case i.gc.Badges:
							return o.a.createElement(g.a, {
								subredditId: e.subreddit.id
							});
						case i.gc.Emotes:
							return o.a.createElement(g.b, {
								subredditId: e.subreddit.id
							});
						case i.gc.SubredditRules:
							return o.a.createElement(O.a, {
								subreddit: e.subreddit
							});
						case i.gc.CommunitySettings:
							return o.a.createElement(m.a, {
								subredditId: e.subreddit.id,
								subpageName: e.subpageName,
								subredditName: e.subreddit.name
							});
						case i.gc.Modqueue:
						case i.gc.Reports:
						case i.gc.Spam:
						case i.gc.Edited:
						case i.gc.Unmoderated:
							return o.a.createElement(M, {
								after: e.after,
								layout: t,
								page: e.page,
								pageName: s,
								postTypeFilter: n,
								postSort: a,
								sendEventWithName: e.sendEventWithName,
								subredditName: e.subreddit.name
							});
						case i.gc.Awards:
							return o.a.createElement(c.a, {
								subredditOrProfile: e.subreddit,
								subredditOrProfileId: e.subreddit.id,
								moderatorPermissions: e.moderatorPermissions
							});
						case i.gc.Powerups:
							return o.a.createElement(E.a, {
								subredditId: e.subreddit.id
							});
						case i.gc.Emojis:
							return o.a.createElement(f.a, {
								subreddit: e.subreddit
							});
						case i.gc.Wiki:
						case i.gc.WikiContributors:
						case i.gc.WikiBanned:
							return o.a.createElement(T, {
								subreddit: e.subreddit
							});
						case i.gc.Traffic:
							return o.a.createElement(S, {
								subreddit: e.subreddit
							});
						case i.gc.SubredditContent:
							return null;
						case i.gc.ScheduledPostContent:
							return o.a.createElement(y.a, {
								subreddit: e.subreddit
							});
						case i.gc.EventPostContent:
							return o.a.createElement(_.a, {
								subredditName: e.subreddit.name
							});
						case i.gc.Predictions:
							return o.a.createElement(C.a, {
								subreddit: e.subreddit
							});
						case i.gc.TalkHosts:
							return o.a.createElement(h.a, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id,
								moderatorPermissions: e.moderatorPermissions,
								sendEventWithName: e.sendEventWithName
							});
						default:
							return Object(r.a)(s)
					}
				};
			t.a = P
		},
		"./src/reddit/components/ModHub/Emojis/EmojiUploadModal/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_20ADRJAodM5zU1OpvNEeRz",
				checkboxText: "_21Bw38NODPHxkJ8zAXjoUZ",
				closeButton: "_3m2cog1fzR2zNYfyXI2GUB",
				emojiDisplay: "_1mMSj2QBZEQ97i-4y3-WOp",
				emojiNameDisplay: "_2lbIQVKPZ4LHDNpBLwSOps",
				imageDisplay: "_3BXziWyChS-zhQ5XC9lt4k",
				appearsIn: "_1DhToTbLLM2OC-Ze5nDwCq",
				imageTitle: "_2KrLezTGMfd18btz-KkYMi",
				modalBody: "_1PLlW-_ZV0vWQQ6LS1Z2lH",
				modalAddButton: "_1vUjBClk27uHOAYH__0rj9",
				modalCancelButton: "_23RRFTkR9NKrC22rmMDNfI",
				modFlairOnlyToggle: "_19ExxuLL5lOZW35TZFXIHf",
				modIcon: "_3ta-U9hY9R1H_BRwYv1zhl",
				modProTip: "_2yN7aUrL8peCADm-u303LV",
				modProTips: "_3WtRXJc1jCLpCEw7-mlEBU",
				proTip: "_8wjmRK1w6qEGzue3BNNOA",
				modProTipTitle: "_392GI--ZxhpUHn1eRTKzqA",
				tipList: "_3PPlagKiQrtoOsW4pcf3vc"
			}
		},
		"./src/reddit/components/ModHub/Emojis/EmojiUploader/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_34rhMfrLYNSjUkhTK958Um",
				characterCountdown: "_15Hq3tMBKH4TWo9OJs8gny",
				clearIcon: "aCmT6tHKACP3PLk6IU6XT",
				duplicatesIcon: "Eq88P0Zb-rOoo4N5OL5uk",
				duplicateWarning: "DRp2YTik6Ln3yUKp7LBUv",
				editEmojiFooter: "_2ZoRiRDs45wlLK-ZnHzUh",
				editEmojiDisplay: "_2rDJJ0Uk_ySvUA9QNoKoKU",
				emojiDisplays: "_2FsakuX5ZR_IIPcwXQu0eD",
				errorText: "_3bRRwpzb2xfP5erPt9R6Cg",
				expandLeft: "_2byjR1IbLclRfoyvyjMDUz",
				iconSpacer: "_3tWeESqi0MQaqN5wKqkv68",
				imageDisplay: "_1MHWj3sdAGALX7r7UzFF0J",
				duplicateInput: "_280zGglckljUYhFjwaBt14",
				input: "_3xzW-TBy6RXHXBjCE9Yz7s",
				inputPlaceholder: "_1964bAdk8xBAb8-d_Mthtt",
				modalAddButton: "_2yQ10LXNPJ6antT2NgaTmI",
				modalCancelButton: "_31Qk2tb7PaP2XWWL2o4HM1",
				modProTip: "NSSpRN8n70A1TesDNcvxE",
				progressBar: "_3EbPa1JwqT9b_QgXnHzJsx",
				innerBarClassName: "_3CJpdsYAp2vfEOO_U7AaO8",
				progressText: "Wz5fdVLDZuS4d-ix-j4s9",
				replacingDescription: "_1oXr6AKswirSKypchDoX1n",
				replacingTitle: "oNyr5QxUcemiI3SFwjhvc",
				uploadingTitle: "_3ZEFRZKrLVT92hTIG7sRa9",
				textButton: "_3ZzQTZKV1t84-ND6HHwnsx",
				uploaderContainer: "OCFZ6HIQUbokDXiubxQEZ"
			}
		},
		"./src/reddit/components/ModHub/Emojis/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_3x5p0Ujs6EWdeLO8-fVE7v",
				emojisDisabled: "_2H7y73ZptDGSake8tFEj0n",
				labelTitle: "_2R2K1Sz81kscliWYqOq1xU",
				labelDescription: "_1TqFvv__UfmckLHp5llo7q",
				leftForm: "_22aW9zYAhDGH2HdlJ-WWIM",
				modalBody: "_1_UK8ZmVC7e_nkeSs5CGnA",
				modalCloseButton: "_2-arZqA5i-aG-76OM9aj7k",
				modalEnableSection: "_2Wd3qBH4SU1NauwzVOQbVT",
				modalFooter: "_2R2UP3vtcyZqyNdUy9Y0nX",
				modalSubmitButton: "w7T2GA8_RqtkSpD4h6YKH",
				modalCancelButton: "_2wvHObzKgyjObCvFZ0QOp0",
				rightForm: "_1eE1s4H4f1_A3ck0iF679O",
				row: "_2NQoOHp9q7uhb8h4XdVWK",
				displayWrapper: "jiCIuKa0E1BjfGfUV407r",
				emojiDisplay: "_32BxZer8uLzSVJMZqqo95_",
				emojiName: "_2hJHG1X01WKzuznOL4l6ge",
				appears: "ZVOiCMvsomJLwhS8k4VPP",
				permissions: "UxdnKubszq3iR9sJGFwiY",
				buttonWrapper: "PflXNgwgKckPGaFe9wW8V",
				editEmoji: "_3RR0-7gyjso1AHuVhVbb6u",
				editSnoomoji: "FCFv4UPC_NQjiTCEBoOCD",
				trashIcon: "_2l2KeCLkXUEz_czKdpFqSw",
				settingsButton: "_2dh14d_OrE4Etrg44_cb4t",
				toggleSwitch: "_17kocpcRdOCXJwPiOk68B-",
				topRow: "_2oevuimQpT3hztJ5Rpf_hy",
				appearsTitle: "_1Qzxm6lOFpTR3O3hzKloA9",
				imageTitle: "_1NOoO9mz09cpZjIRT9nHTh",
				nameTitle: "_1Ra9yqtrrSj9q0akrKs83v",
				permissionsTitle: "_1gNO8_Ywz6va1MbMV7-jDG",
				titleTooltip: "_279Uba_Gpg0WVLV8efIdK_"
			}
		},
		"./src/reddit/components/ModHub/Emojis/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/map.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				l = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/emoji.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				x = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				E = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/constants/colors.ts"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/selectors/telemetry.ts");
			const y = e => ({
					subreddit: C.hb(e),
					profile: C.R(e),
					userSubreddit: C.rb(e)
				}),
				O = (e, t) => s => ({
					source: "emoji",
					action: "toggle",
					noun: e,
					actionInfo: {
						settingValue: t ? "on" : "off"
					},
					...y(s)
				}),
				j = e => t => ({
					source: "emoji",
					action: "click",
					noun: e,
					...y(t)
				}),
				w = (e, t) => s => ({
					source: "emoji",
					action: "click",
					noun: e,
					actionInfo: C.d(s, {
						count: t
					}),
					...y(s)
				});
			var S = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				N = s("./src/reddit/selectors/activeModalId.ts"),
				I = s("./src/reddit/selectors/emojis.ts"),
				T = s("./src/reddit/components/ModHub/Emojis/index.m.less"),
				M = s.n(T),
				P = s("./src/reddit/controls/ImageDisplay/index.tsx"),
				R = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				A = s("./src/reddit/layout/row/Inline/index.tsx");
			const F = m.a.span("appears", M.a),
				D = m.a.span("buttonWrapper", M.a),
				L = m.a.span("displayWrapper", M.a),
				U = m.a.wrapped(P.a, "emojiDisplay", M.a),
				B = m.a.span("emojiName", M.a),
				H = m.a.span("permissions", M.a),
				W = m.a.wrapped(A.a, "row", M.a),
				z = m.a.wrapped(R.b, "trashIcon", M.a);
			var V = e => l.a.createElement(W, null, l.a.createElement(L, null, l.a.createElement(U, {
					backgroundImage: e.emoji.url
				})), l.a.createElement(B, null, e.emoji.name), l.a.createElement(F, null, ((e, t) => e && t ? a.fbt._("Post flair, user flair", null, {
					hk: "gLvKb"
				}) : e ? a.fbt._("Post flair", null, {
					hk: "dcIoz"
				}) : t ? a.fbt._("User flair", null, {
					hk: "4fQagx"
				}) : "")(e.emoji.postFlairAllowed, e.emoji.userFlairAllowed)), l.a.createElement(H, null, e.emoji.modFlairOnly && a.fbt._("Mod only", null, {
					hk: "NMZoE"
				})), l.a.createElement(D, null, l.a.createElement(_.r, {
					className: e.isSnoomoji ? M.a.editSnoomoji : M.a.editEmoji,
					onClick: () => e.onEdit(e.emoji, e.isSnoomoji)
				}, a.fbt._("Edit", null, {
					hk: "1nftDt"
				})), !e.isSnoomoji && l.a.createElement("button", {
					onClick: () => e.onRemove(e.emoji.name)
				}, l.a.createElement(z, null)))),
				q = s("./src/higherOrderComponents/asModal/index.tsx"),
				G = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				K = s("./src/reddit/controls/TextButton/index.tsx"),
				Q = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				X = s("./src/reddit/selectors/subreddit.ts"),
				J = s("./src/reddit/controls/ToggleSwitch/index.tsx");
			const Y = m.a.span("labelDescription", M.a),
				Z = m.a.span("labelTitle", M.a),
				$ = m.a.div("leftForm", M.a),
				ee = m.a.div("rightForm", M.a),
				te = m.a.wrapped(J.a, "toggleSwitch", M.a);
			var se = e => l.a.createElement("div", {
				className: e.className
			}, l.a.createElement($, null, l.a.createElement(Z, null, a.fbt._("{title}", [a.fbt._param("title", e.title)], {
				hk: "4bYhaP"
			})), l.a.createElement(Y, null, a.fbt._("{description}", [a.fbt._param("description", e.description)], {
				hk: "1lFxbr"
			}))), l.a.createElement(ee, null, l.a.createElement(te, {
				on: e.on,
				onToggle: e.onToggle
			})));
			const ne = m.a.wrapped(se, "modalEnableSection", M.a),
				ae = m.a.wrapped(G.e, "modalBody", M.a),
				oe = m.a.wrapped(G.a, "modalCancelButton", M.a),
				re = m.a.wrapped(K.a, "modalCloseButton", M.a),
				ie = m.a.wrapped(G.g, "modalFooter", M.a),
				le = m.a.wrapped(_.l, "modalSubmitButton", M.a),
				de = Object(c.c)({
					isEmojisEnabled: (e, t) => Object(X.w)(e, {
						subredditName: t.subreddit.name
					}).emojisEnabled
				}),
				ce = Object(d.b)(de, (e, t) => {
					let {
						subreddit: s
					} = t;
					return {
						toggleEnableEmojis: t => e(Object(u.j)(s.id, t))
					}
				});
			class me extends l.a.Component {
				constructor(e) {
					super(e), this.handleEnableEmojisToggle = () => this.setState({
						emojisEnabled: !this.state.emojisEnabled
					}), this.enableHasBeenToggled = () => this.props.isEmojisEnabled !== this.state.emojisEnabled, this.canSave = () => this.enableHasBeenToggled(), this.onSave = () => {
						const {
							props: e,
							state: t
						} = this;
						this.enableHasBeenToggled() && (e.toggleEnableEmojis(t.emojisEnabled), e.sendEvent(O("enable", t.emojisEnabled))), e.toggleModal(), e.sendEvent(j("save_emoji_settings"))
					}, this.state = {
						emojisEnabled: e.isEmojisEnabled
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return l.a.createElement(ae, null, l.a.createElement(G.i, null, l.a.createElement(Q.a, null, l.a.createElement(G.q, null, a.fbt._("Emoji settings", null, {
						hk: "1GjUM3"
					})), l.a.createElement(re, {
						onClick: e.toggleModal
					}, l.a.createElement(G.b, null)))), l.a.createElement(G.l, null, l.a.createElement(ne, {
						description: a.fbt._("Allow emojis to be used in post and user flair within your community", null, {
							hk: "3ppqgX"
						}),
						on: t.emojisEnabled,
						onToggle: this.handleEnableEmojisToggle,
						title: a.fbt._("Enable emojis in this community", null, {
							hk: "3uLrQi"
						})
					})), l.a.createElement(ie, null, l.a.createElement(oe, {
						onClick: e.toggleModal
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), l.a.createElement(le, {
						disabled: !this.canSave(),
						onClick: this.onSave
					}, a.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			var ue = Object(q.a)(ce(me)),
				pe = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/toaster.ts")),
				be = s("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				he = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				ge = s("./src/reddit/controls/CheckboxInput/index.tsx"),
				fe = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				xe = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				Ee = s("./src/reddit/models/Image/index.tsx"),
				ve = s("./src/reddit/models/Toast/index.ts"),
				ke = s("./src/reddit/components/ModHub/Emojis/EmojiUploadModal/index.m.less"),
				_e = s.n(ke),
				Ce = s("./src/higherOrderComponents/withImageUploads.tsx"),
				ye = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				Oe = s("./src/reddit/models/Emoji/index.ts"),
				je = s("./src/reddit/components/ModHub/Emojis/EmojiUploader/index.m.less"),
				we = s.n(je),
				Se = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				Ne = s("./src/reddit/components/ProgressBar/index.tsx"),
				Ie = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				Te = s("./src/reddit/controls/ErrorText/index.tsx");
			const Me = 5,
				Pe = 95,
				Re = 600,
				Ae = 100;
			class Fe extends l.a.Component {
				constructor() {
					super(...arguments), this.intervalToken = 0, this.state = {
						timeStarted: Date.now(),
						percent: Me
					}, this.tick = () => {
						const e = function(e) {
							const t = e / Re,
								s = (Math.log(t / 10) + 3) / 2.1;
							return Math.max(Pe, Math.min(Me, 100 * s))
						}(Date.now() - this.state.timeStarted);
						this.setState({
							percent: e
						}), e === Pe && this.intervalToken && window.clearInterval(this.intervalToken)
					}
				}
				componentDidMount() {
					this.intervalToken = window.setInterval(this.tick, Ae)
				}
				componentWillUnmount() {
					this.intervalToken && window.clearInterval(this.intervalToken)
				}
				render() {
					return l.a.createElement(Ne.a, {
						className: we.a.progressBar,
						innerBarClassName: we.a.innerBarClassName,
						percent: this.state.percent
					})
				}
			}
			var De = Fe;
			const Le = m.a.wrapped(Se.a, "characterCountdown", we.a),
				Ue = m.a.wrapped(ye.a, "clearIcon", we.a),
				Be = m.a.wrapped(Te.b, "errorText", we.a),
				He = m.a.wrapped(Q.a, "expandLeft", we.a),
				We = m.a.div("iconSpacer", we.a),
				ze = m.a.wrapped(P.a, "imageDisplay", we.a),
				Ve = m.a.div("inputPlaceholder", we.a),
				qe = m.a.wrapped(Q.a, "inputPlaceholder", we.a),
				Ge = m.a.wrapped(K.a, "textButton", we.a);
			class Ke extends l.a.Component {
				constructor() {
					super(...arguments), this.handleChangeEmojiName = e => {
						this.props.onChangeEmojiName && this.props.onChangeEmojiName(this.props.index, e.target.value)
					}, this.handleRemove = e => {
						this.props.onCancel(this.props.index)
					}, this.renderContent = () => {
						const {
							emojiName: e,
							errorText: t,
							fileName: s,
							handleRetry: n,
							imageData: o,
							isDuplicate: r
						} = this.props;
						switch (o.kind) {
							case Ee.b.NotUploaded:
							case Ee.b.Pending:
								return l.a.createElement("div", null, l.a.createElement(qe, null, o.kind === Ee.b.NotUploaded ? l.a.createElement(De, null) : l.a.createElement(Ne.a, {
									className: we.a.progressBar,
									innerBarClassName: we.a.innerBarClassName,
									percent: 0
								}), l.a.createElement(Ge, {
									onClick: this.handleRemove
								}, a.fbt._("Cancel", null, {
									hk: "2TSLl5"
								}))), l.a.createElement(he.b, null, a.fbt._("Uploading {fileName}", [a.fbt._param("fileName", s)], {
									hk: "NIxvK"
								})));
							case Ee.b.FailedToUpload:
							case Ee.b.Invalid:
								return l.a.createElement("div", null, l.a.createElement(qe, null, a.fbt._("Failed to upload", null, {
									hk: "2LBRW2"
								}), n ? l.a.createElement(Ge, {
									onClick: n
								}, a.fbt._("Retry", null, {
									hk: "3EwbaK"
								})) : l.a.createElement(Ge, {
									onClick: this.handleRemove
								}, a.fbt._("Remove", null, {
									hk: "3tYl0U"
								}))), t && l.a.createElement(Be, null, t));
							case Ee.b.Uploaded:
								return l.a.createElement(Ve, null, a.fbt._("Saved", null, {
									hk: "2xDFZZ"
								}));
							default:
								return l.a.createElement("div", null, l.a.createElement(Ie.c, {
									className: r ? we.a.duplicateInput : we.a.input,
									onChange: this.handleChangeEmojiName,
									placeholder: a.fbt._("Emoji name", null, {
										hk: "UpQdA"
									}),
									value: e
								}), l.a.createElement(He, null, l.a.createElement(Le, {
									maxChars: Oe.d,
									text: e
								}), l.a.createElement(Ge, {
									onClick: this.handleRemove
								}, a.fbt._("Remove", null, {
									hk: "3tYl0U"
								}))), t && l.a.createElement(Be, null, t))
						}
					}
				}
				render() {
					const {
						emojiName: e,
						imageData: t,
						isSaving: s
					} = this.props;
					return s ? l.a.createElement(l.a.Fragment, null, l.a.createElement(Ve, null, l.a.createElement(De, null)), l.a.createElement(he.b, null, a.fbt._("Saving {emojiName}", [a.fbt._param("emojiName", e)], {
						hk: "3lMST7"
					}))) : l.a.createElement(xe.a, null, t.kind === Ee.b.FailedToUpload || t.kind === Ee.b.Invalid ? l.a.createElement(We, null, l.a.createElement(Ue, null)) : l.a.createElement(ze, {
						backgroundImage: t.url
					}), this.renderContent())
				}
			}
			var Qe = Ke,
				Xe = s("./node_modules/lodash/countBy.js"),
				Je = s.n(Xe),
				Ye = s("./node_modules/lodash/filter.js"),
				Ze = s.n(Ye),
				$e = s("./node_modules/lodash/includes.js"),
				et = s.n($e),
				tt = s("./node_modules/lodash/transform.js"),
				st = s.n(tt);
			const nt = /^[A-Za-z0-9_-]{1,24}$/,
				at = ["reddit", "snoo", "spez"],
				ot = (e, t, s) => !nt.test(e) || !s && (e => {
					const t = e.toLowerCase();
					return at.reduce((e, s) => e || -1 !== t.indexOf(s), !1)
				})(e) ? a.fbt._("Invalid emoji name", null, {
					hk: "2Oromm"
				}) : et()(t, e) ? a.fbt._("This name is already taken", null, {
					hk: "4dwdJL"
				}) : "",
				rt = e => e.name ? e.name.replace(/\.[^.]*$/, "").replace(/[^A-Za-z0-9_-]/g, " ").trim().replace(/ +/g, "_").slice(0, 24) : "",
				it = (e, t) => (t.kind !== Ee.b.TempUploaded || !e.emojiNameError && !e.isNameMissing) && (t.kind !== Ee.b.NotUploaded && t.kind !== Ee.b.Pending),
				lt = e => {
					let t = "";
					return e.file.size > Oe.a ? t = "file-size-error" : (e.height > Oe.b || e.width > Oe.c) && (t = "image-size-error"), {
						emojiNameError: "",
						imageError: t,
						name: rt(e.file),
						fileName: e.file.name,
						isNameMissing: !1
					}
				},
				dt = (e, t) => t.reduce((t, s) => s.kind === e ? t + 1 : t, 0),
				ct = (e, t) => {
					const {
						emojiNameError: s,
						imageError: n,
						isNameMissing: o
					} = t;
					let r = "";
					e.kind === Ee.b.FailedToUpload && (r = e.error.fields && e.error.fields.length ? e.error.fields[0].msg : a.fbt._("Something went wrong", null, {
						hk: "2fCWXR"
					}));
					const i = r || !1,
						l = s || !!o && a.fbt._("Emoji name is required", null, {
							hk: "4sL3l7"
						});
					let d = "";
					return "file-size-error" === n ? d = a.fbt._("File size too large", null, {
						hk: "EksGU"
					}) : "image-size-error" === n && (d = a.fbt._("Image size too large", null, {
						hk: "1xjOmq"
					})), d || i || l || ""
				},
				mt = e => {
					const t = Ze()(e, e => !e.emojiNameError && !e.imageError),
						s = Je()(t, e => e.name);
					return st()(s, (e, t, s) => {
						t > 1 && e.push(s)
					}, [])
				},
				ut = 500,
				pt = m.a.div("UploaderContainer", we.a),
				bt = m.a.wrapped(S.a, "alertIcon", we.a),
				ht = m.a.wrapped(ye.a, "duplicatesIcon", we.a),
				gt = m.a.wrapped(G.p, "duplicateWarning", we.a),
				ft = m.a.wrapped(_.l, "modalAddButton", we.a),
				xt = m.a.wrapped(G.a, "modalCancelButton", we.a),
				Et = m.a.div("uploaderContainer", we.a),
				vt = m.a.wrapped(G.p, "modProTip", we.a),
				kt = m.a.div("progressText", we.a),
				_t = m.a.wrapped(G.p, "replacingDescription", we.a),
				Ct = m.a.div("replacingTitle", we.a),
				yt = m.a.div("uploadingTitle", we.a),
				Ot = Object(c.c)({
					emojis: I.d,
					isSnoomojiSubreddit: X.l,
					reservedEmojiNames: I.e
				}),
				jt = Object(d.b)(Ot, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						emojisUploadedToast: () => e(pe.f({
							kind: ve.b.SuccessCommunityGreen,
							text: a.fbt._("New emojis added!", null, {
								hk: "1Q1mEq"
							})
						})),
						saveEmoji: (t, n, a) => e(Object(u.n)({
							imageData: t,
							subredditId: s,
							emojiName: n,
							settings: a
						}))
					}
				});
			class wt extends l.a.Component {
				constructor(e) {
					super(e), this.timeoutToken = 0, this.loadIndex = 0, this.tempUploadNext = async () => {
						const e = this.getNextPendingImageToLoad();
						if (!e) return this.timeoutToken = 0, void(this.loadIndex = 0);
						const {
							subredditId: t
						} = this.props, s = this.state.emojiData[e.id], n = Object(Ee.m)(e);
						await this.props.uploadImage({
							imageData: n,
							subredditId: t,
							emojiName: s.name,
							settings: this.props.emojiSettings
						}), this.loadIndex += 1, this.loadIndex < this.state.localData.length ? this.timeoutToken = window.setTimeout(this.tempUploadNext, ut) : (this.loadIndex = 0, this.timeoutToken = 0)
					}, this.emojiIsADuplicate = (e, t) => e && t && t.some(t => t.id === e.id), this.saveNext = e => {
						const t = this.getNextTempUploadedImageToSave();
						if (!t) return this.timeoutToken = 0, void(this.loadIndex = 0);
						if (!this.emojiIsADuplicate(t, e)) {
							const e = this.state.emojiData[t.id],
								s = this.props.saveEmoji(t, e.name, this.props.emojiSettings);
							this.setState({
								emojisUploaded: this.state.emojisUploaded || s
							})
						}
						this.loadIndex += 1, this.loadIndex < this.state.localData.length ? this.timeoutToken = window.setTimeout(() => this.saveNext(e), ut) : (this.loadIndex = 0, this.timeoutToken = 0)
					}, this.onChangeEmojiName = (e, t) => {
						const {
							isSnoomojiSubreddit: s,
							reservedEmojiNames: n
						} = this.props;
						if (t.length > Oe.d) return;
						const a = this.state.isReplacing ? this.state.replacingEmoji && this.state.replacingEmoji[e] : this.state.localData[e];
						if (!a) return;
						const o = this.state.emojiData,
							r = o[a.id],
							i = t ? ot(t, n, s) : "";
						o[a.id].emojiNameError = i, o[a.id].name = t;
						const l = mt(o);
						this.setState({
							duplicateNames: l,
							emojiData: {
								...this.state.emojiData,
								[a.id]: {
									...r,
									emojiNameError: i,
									isNameMissing: !t,
									name: t
								}
							}
						})
					}, this.canSave = () => {
						let e = !1;
						for (const t of this.state.localData) {
							if (!it(this.state.emojiData[t.id], t)) return !1;
							t.kind === Ee.b.TempUploaded && (e = !0)
						}
						return e
					}, this.getValidatedState = () => {
						const {
							isSnoomojiSubreddit: e,
							reservedEmojiNames: t
						} = this.props, s = {};
						for (const n of this.state.localData) {
							let a = this.state.emojiData[n.id];
							const o = ot(a.name, t, e);
							a.name && !o || (a = {
								...a,
								emojiNameError: o,
								isNameMissing: !a.name
							}), s[n.id] = a
						}
						return {
							emojiData: s
						}
					}, this.onApply = () => {
						const e = this.getValidatedState();
						this.setState(e, () => {
							if (this.canSave()) {
								const e = this.props.emojis[this.props.subredditId].emojis,
									t = [];
								for (const n of this.state.localData) {
									if (n.kind !== Ee.b.TempUploaded) continue;
									this.state.emojiData[n.id].name in e && t.push(n)
								}
								t.length ? (this.setState({
									replacingEmoji: t,
									isReplacing: !0
								}), this.saveNext(t)) : (this.setState({
									isSavingImage: !0
								}), this.props.setIsSaving(!0), this.saveNext());
								const s = dt(Ee.b.TempUploaded, this.state.localData) - t.length;
								s > 0 && (this.props.sendEvent(w("add", s)), this.sendSettingsEvent())
							}
						})
					}, this.sendSettingsEvent = () => {
						const {
							modFlairOnly: e,
							userFlairAllowed: t,
							postFlairAllowed: s
						} = this.props.emojiSettings;
						this.props.sendEvent(O("mods_only", e)), this.props.sendEvent(O("appear_user_flair", t)), this.props.sendEvent(O("appear_post_flair", s))
					}, this.handleSaveAndReplace = () => {
						this.setState({
							isReplacing: !1,
							isSavingImage: !0
						}), this.props.setIsSaving(!0);
						const {
							replacingEmoji: e
						} = this.state, t = e ? e.length : 0;
						this.saveNext(), t > 0 && (this.props.sendEvent(w("replace", t)), this.sendSettingsEvent())
					}, this.handleCancelReplace = () => {
						this.setState({
							isReplacing: !1,
							replacingEmoji: null
						}), this.props.stopEditing(), this.props.sendEvent(j("dont_replace"))
					}, this.findEmojiIndexById = e => this.state.localData.findIndex(t => t.id === e), this.removeEmoji = e => {
						const {
							isReplacing: t,
							localData: s,
							replacingEmoji: n
						} = this.state;
						let a, o = e;
						t && n && n[e] && (o = this.findEmojiIndexById(n[e].id), (a = n.slice(0)).splice(e, 1), this.setState({
							replacingEmoji: a
						}));
						const r = s[o],
							i = s.slice(0);
						i.splice(o, 1);
						const l = {
							...this.state.emojiData
						};
						delete l[r.id], this.setState({
							duplicateNames: mt(l),
							emojiData: l,
							localData: i
						}), t && n ? 0 === a.length && this.props.returnToAddState() : 0 === i.length && this.props.returnToAddState()
					}, this.retryEmojiUpload = () => {
						this.props.returnToAddState()
					};
					const t = {},
						s = [];
					for (const n of e.images) {
						const e = lt(n);
						t[n.id] = e, e.imageError ? s.push(Object(Ee.l)(n, e.imageError)) : s.push(n)
					}
					this.state = {
						duplicateNames: mt(t),
						emojiData: t,
						emojisUploaded: !1,
						isReplacing: !1,
						isSavingImage: !1,
						localData: s,
						replacingEmoji: null
					}
				}
				UNSAFE_componentWillMount() {
					this.loadIndex = 0, this.tempUploadNext()
				}
				getNextPendingImageToLoad() {
					let e, t = null;
					for (e = this.loadIndex; e < this.state.localData.length; e++) {
						const s = this.state.localData[e];
						if (s.kind === Ee.b.Pending) {
							t = s;
							break
						}
					}
					return this.loadIndex = e, t
				}
				getNextTempUploadedImageToSave() {
					let e, t = null;
					for (e = this.loadIndex; e < this.state.localData.length; e++) {
						const s = this.state.localData[e];
						if (s.kind === Ee.b.TempUploaded) {
							t = s;
							break
						}
					}
					return this.loadIndex = e, t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = e.getImageUploadsIfModified(this.state.localData);
					if (!t) return;
					let s = !1;
					const {
						isSavingImage: n
					} = this.state, a = {};
					for (const o of t) a[o.id] = this.state.emojiData[o.id], s = s || o.kind === Ee.b.TempUploaded;
					!n || s ? (this.props.setIsSaving(n), this.setState({
						emojiData: a,
						isSavingImage: n,
						localData: t
					})) : this.props.stopEditing()
				}
				componentWillUnmount() {
					for (const e of this.state.localData) this.props.cancelUpload(e);
					this.timeoutToken && window.clearTimeout(this.timeoutToken), this.state.emojisUploaded && this.props.emojisUploadedToast(), this.setState({
						emojisUploaded: !1,
						isReplacing: !1
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = t.isReplacing ? t.replacingEmoji || [] : t.localData;
					return l.a.createElement(pt, null, l.a.createElement(Et, null, t.duplicateNames.length > 0 ? l.a.createElement(gt, null, l.a.createElement(ht, null), a.fbt._("Duplicate names", null, {
						hk: "4kkNr1"
					})) : !t.isReplacing && l.a.createElement(vt, null, l.a.createElement(bt, null), a.fbt._("Names cannot be edited once added", null, {
						hk: "3f45r5"
					})), l.a.createElement(G.l, null, t.isReplacing ? l.a.createElement(l.a.Fragment, null, l.a.createElement(Ct, null, a.fbt._("Replacing emojis", null, {
						hk: "4cKike"
					})), l.a.createElement(_t, null, a.fbt._("These emoji names already exist in your community. Replacing these emojis will not change pre-existing permissions. Do you want to replace them?", null, {
						hk: "3iPBUU"
					}))) : l.a.createElement(yt, null, a.fbt._("Uploading emojis", null, {
						hk: "7keSV"
					})), l.a.createElement("div", {
						className: t.isReplacing ? void 0 : we.a.emojiDisplays
					}, s.map((e, s) => {
						const n = this.state.emojiData[e.id],
							a = e.kind === Ee.b.FailedToUpload || e.kind === Ee.b.Invalid,
							o = t.replacingEmoji && !t.replacingEmoji.find(t => t.id === e.id);
						if (t.isSavingImage && (a || o)) return;
						const r = ct(e, n);
						return l.a.createElement(he.a, {
							key: e.id
						}, l.a.createElement(Qe, {
							emojiName: n.name,
							errorText: r,
							fileName: n.fileName,
							imageData: e,
							index: s,
							isDuplicate: t.duplicateNames.includes(n.name),
							isSaving: t.isSavingImage,
							onCancel: this.removeEmoji,
							onChangeEmojiName: this.onChangeEmojiName
						}))
					})), !t.isReplacing && l.a.createElement(kt, null, t.isSavingImage ? a.fbt._("{savedCount} out of {savedTotal} saved", [a.fbt._param("savedCount", dt(Ee.b.Uploaded, t.localData).toString()), a.fbt._param("savedTotal", t.localData.length.toString())], {
						hk: "3v1E9N"
					}) : a.fbt._("{uploadedCount} out of {uploadedTotal} uploaded", [a.fbt._param("uploadedCount", dt(Ee.b.TempUploaded, t.localData).toString()), a.fbt._param("uploadedTotal", t.localData.length.toString())], {
						hk: "41qbSa"
					})))), l.a.createElement(G.g, null, l.a.createElement(xt, {
						disabled: t.isSavingImage,
						onClick: t.isReplacing ? this.handleCancelReplace : e.stopEditing
					}, t.isReplacing ? a.fbt._("Don't replace", null, {
						hk: "4d8hwM"
					}) : a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), l.a.createElement(ft, {
						disabled: t.isSavingImage || !this.canSave() || t.duplicateNames.length > 0,
						onClick: t.isReplacing ? this.handleSaveAndReplace : this.onApply
					}, t.isReplacing ? a.fbt._("Replace", null, {
						hk: "45noqB"
					}) : a.fbt._("Add", null, {
						hk: "2wi3d4"
					}))))
				}
			}
			var St = Object(Ce.a)(jt(wt), u.o),
				Nt = s("./src/reddit/actions/imageUploads.ts"),
				It = s("./src/reddit/selectors/imageUploads.ts");
			const Tt = m.a.div("UploaderContainer", we.a),
				Mt = m.a.wrapped(Tt, "editEmojiDisplay", we.a),
				Pt = Object(c.c)({
					reduxImage: (e, t) => {
						let {
							pendingImage: s
						} = t;
						const n = Object(It.b)(e),
							a = s && s.id;
						return a && n[a] || void 0
					}
				});
			class Rt extends l.a.Component {
				constructor(e) {
					super(e), this.onCancelAndRetry = () => {
						this.props.reduxImage && this.props.cancelUpload(this.props.reduxImage), this.props.onRetryUpload()
					}
				}
				componentDidMount() {
					const e = Object(Ee.m)(this.props.pendingImage);
					this.props.uploadImage({
						imageData: e,
						subredditId: this.props.subredditId,
						emojiName: this.props.emoji.name,
						settings: this.props.emojiSettings
					})
				}
				componentDidUpdate(e) {
					this.props.reduxImage && this.props.reduxImage !== e.reduxImage && this.props.onImageChange(this.props.reduxImage)
				}
				componentWillUnmount() {
					this.props.reduxImage && this.props.cancelUpload(this.props.reduxImage)
				}
				render() {
					const {
						pendingImage: e,
						reduxImage: t,
						emoji: s
					} = this.props, n = lt(e), a = Object(Ee.l)(e, n.imageError), o = n.imageError ? a : t || e, r = ct(o, n);
					return !r && o.kind === Ee.b.TempUploaded || o.kind === Ee.b.Uploaded ? null : l.a.createElement(Mt, null, l.a.createElement(Qe, {
						emojiName: s.name,
						errorText: r,
						fileName: n.fileName,
						handleRetry: this.onCancelAndRetry,
						imageData: o,
						index: 0,
						isSaving: !1,
						onCancel: this.onCancelAndRetry
					}))
				}
			}
			var At = Object(d.b)(Pt, e => ({
				uploadImage: t => e(Object(u.o)(t)),
				cancelUpload: t => e(Object(Nt.h)(t))
			}))(Rt);

			function Ft() {
				return (Ft = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Dt = 32,
				Lt = 128,
				Ut = 64,
				Bt = 100,
				Ht = m.a.div("appearsIn", _e.a),
				Wt = m.a.wrapped(ge.a, "checkbox", _e.a),
				zt = m.a.span("checkboxText", _e.a),
				Vt = m.a.wrapped(K.a, "closeButton", _e.a),
				qt = m.a.div("imageTitle", _e.a),
				Gt = m.a.wrapped(_.l, "modalAddButton", _e.a),
				Kt = m.a.wrapped(G.e, "modalBody", _e.a),
				Qt = m.a.wrapped(G.a, "modalCancelButton", _e.a),
				Xt = m.a.wrapped(G.l, "modalMain", _e.a),
				Jt = m.a.wrapped(se, "modFlairOnlyToggle", _e.a),
				Yt = m.a.wrapped(fe.a, "modIcon", _e.a),
				Zt = m.a.li("modProTip", _e.a),
				$t = m.a.div("modProTips", _e.a),
				es = m.a.div("modProTipTitle", _e.a),
				ts = m.a.div("proTip", _e.a),
				ss = m.a.ul("tipList", _e.a),
				ns = e => !!e && (e.kind === Ee.b.Pending ? !!lt(e).imageError : e.kind === Ee.b.FailedToUpload);
			var as;
			! function(e) {
				e[e.AddState = 0] = "AddState", e[e.SingleEmojiEditState = 1] = "SingleEmojiEditState", e[e.BulkUploadState = 2] = "BulkUploadState"
			}(as || (as = {}));
			const os = m.a.wrapped(xe.a, "emojiDisplay", _e.a),
				rs = m.a.div("emojiNameDisplay", _e.a),
				is = m.a.wrapped(P.a, "imageDisplay", _e.a),
				ls = e => l.a.createElement(os, null, l.a.createElement(is, {
					backgroundImage: e.url
				}), l.a.createElement(rs, null, e.emojiName)),
				ds = Object(c.c)({
					emojisCustomSize: (e, t) => Object(X.w)(e, {
						subredditName: t.subreddit.name
					}).emojisCustomSize
				}),
				cs = Object(d.b)(ds, (e, t) => {
					let {
						emoji: s,
						isSnoomoji: n,
						subreddit: o
					} = t;
					return {
						saveEmoji: (t, s, n) => e(u.n({
							imageData: n,
							subredditId: o.id,
							emojiName: t,
							settings: s
						})),
						saveEmojiSettings: t => {
							s && e(u.m(s.name, n, t, o.id))
						},
						saveEmojiSuccessToast: () => e(pe.f({
							kind: ve.b.SuccessCommunityGreen,
							text: a.fbt._("Emoji edits saved!", null, {
								hk: "3luBMA"
							})
						}))
					}
				});
			class ms extends l.a.Component {
				constructor(e) {
					super(e), this.closeModal = () => {
						this.props.toggleModal()
					}, this.clearImageData = () => {
						this.setState({
							imageData: [],
							emojiDraftImage: void 0
						})
					}, this.onEditingImageChange = e => {
						this.setState({
							emojiDraftImage: e
						})
					}, this.handleMultiImageInput = async e => {
						let t;
						const s = this.state.emojiState === as.SingleEmojiEditState;
						s && this.clearImageData(), t = Array.isArray(e) ? s ? e.slice(0, 1) : e.slice(0, Bt) : [e];
						const n = await Promise.all(t.map(Ee.f));
						s ? this.setState({
							imageData: n
						}) : this.setState({
							emojiState: as.BulkUploadState,
							imageData: n
						})
					}, this.handleModExclusiveToggle = () => this.setState({
						settings: {
							...this.state.settings,
							modFlairOnly: !this.state.settings.modFlairOnly
						}
					}), this.handleTogglePostFlair = () => this.setState({
						settings: {
							...this.state.settings,
							postFlairAllowed: !this.state.settings.postFlairAllowed
						}
					}), this.handleToggleUserFlair = () => this.setState({
						settings: {
							...this.state.settings,
							userFlairAllowed: !this.state.settings.userFlairAllowed
						}
					}), this.returnToAdd = () => {
						this.setState({
							emojiState: as.AddState
						}), this.clearImageData()
					}, this.sendToggleEvent = (e, t) => this.props.sendEvent(O(e, t)), this.modFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.modFlairOnly !== this.state.settings.modFlairOnly, this.userFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.userFlairAllowed !== this.state.settings.userFlairAllowed, this.postFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.postFlairAllowed !== this.state.settings.postFlairAllowed, this.settingsHaveBeenChanged = () => this.modFlairSettingHasChanged() || this.userFlairSettingHasChanged() || this.postFlairSettingHasChanged(), this.sendTelemetryEvents = () => {
						const {
							modFlairOnly: e,
							userFlairAllowed: t,
							postFlairAllowed: s
						} = this.state.settings;
						this.modFlairSettingHasChanged() && this.sendToggleEvent("mods_only", e), this.userFlairSettingHasChanged() && this.sendToggleEvent("appear_user_flair", t), this.postFlairSettingHasChanged() && this.sendToggleEvent("appear_post_flair", s)
					}, this.saveEmoji = async () => {
						const {
							props: e,
							state: t
						} = this, s = {
							modFlairOnly: t.settings.modFlairOnly,
							postFlairAllowed: t.settings.postFlairAllowed,
							userFlairAllowed: t.settings.userFlairAllowed
						};
						if (this.setIsSaving(!0), e.emoji) {
							if (e.isSnoomoji || e.emoji && !t.emojiDraftImage) e.saveEmojiSettings(s);
							else if (e.emoji && t.emojiDraftImage && t.emojiDraftImage.kind === Ee.b.TempUploaded) {
								await e.saveEmoji(e.emoji.name, s, t.emojiDraftImage) && e.saveEmojiSuccessToast()
							}
							this.sendTelemetryEvents()
						}
						this.closeModal(), this.setIsSaving(!1)
					}, this.setIsSaving = e => this.setState({
						isSaving: e
					}), this.state = {
						emojiState: e.emoji ? as.SingleEmojiEditState : as.AddState,
						imageData: [],
						isSaving: !1,
						settings: {
							modFlairOnly: !!e.emoji && e.emoji.modFlairOnly,
							postFlairAllowed: !e.emoji || e.emoji.postFlairAllowed,
							userFlairAllowed: !e.emoji || e.emoji.userFlairAllowed
						}
					}
				}
				render() {
					const {
						emoji: e,
						emojisCustomSize: t,
						isSnoomoji: s,
						sendEvent: n,
						subreddit: o
					} = this.props, {
						emojiDraftImage: r,
						emojiState: i,
						imageData: d,
						isSaving: c,
						settings: m
					} = this.state, u = {
						emojiSettings: m,
						stopEditing: this.closeModal,
						subredditId: o.id
					}, p = 2 * (t ? t[0] : Dt), b = 2 * (t ? t[1] : Dt), h = d.length > 0 ? d[0] : void 0, g = h && h.url, f = r && r.url, x = g || f, E = r && r.kind === Ee.b.TempUploaded, v = ns(h || r), k = i !== as.SingleEmojiEditState || (!this.settingsHaveBeenChanged() && !E || v);
					return l.a.createElement(Kt, null, l.a.createElement(G.i, null, l.a.createElement(Q.a, null, l.a.createElement(G.q, null, e ? a.fbt._("Edit emoji", null, {
						hk: "4awCz5"
					}) : a.fbt._("Add new emojis", null, {
						hk: "2DrJ62"
					})), l.a.createElement(Vt, {
						disabled: c,
						onClick: this.closeModal
					}, l.a.createElement(G.b, null)))), (i === as.AddState || i === as.SingleEmojiEditState) && l.a.createElement(l.a.Fragment, null, i === as.AddState && l.a.createElement($t, null, l.a.createElement(es, null, l.a.createElement(Yt, null), a.fbt._("Mod pro tips!", null, {
						hk: "30l9bq"
					})), l.a.createElement(ss, null, l.a.createElement(Zt, null, a.fbt._("Emoji names will use the image file name and will be editable once uploaded", null, {
						hk: "2fvAIQ"
					})), l.a.createElement(Zt, null, a.fbt._("You can upload up to {maxUpload} emojis at once", [a.fbt._param("maxUpload", Bt.toString())], {
						hk: "4aMYoX"
					})))), l.a.createElement(Xt, null, i === as.SingleEmojiEditState && e && l.a.createElement(ls, {
						emojiName: e.name,
						url: x || e.url
					}), !s && l.a.createElement(l.a.Fragment, null, l.a.createElement(he.i, null, l.a.createElement(qt, null, e ? a.fbt._("Image", null, {
						hk: "3fzI70"
					}) : a.fbt._("Images", null, {
						hk: "3SapUk"
					})), e && i === as.SingleEmojiEditState && h && l.a.createElement(At, Ft({}, u, {
						emoji: e,
						onRetryUpload: this.clearImageData,
						pendingImage: h,
						onImageChange: this.onEditingImageChange
					})), (!d.length || E) && !(e && v) && l.a.createElement(be.b, {
						label: a.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3y5WvP"
						}),
						onChange: this.handleMultiImageInput,
						multiple: !0
					}), l.a.createElement(he.b, null, a.fbt._("Max upload dimensions {maxEmojiWidth} x {maxEmojiHeight}px", [a.fbt._param("maxEmojiWidth", Lt.toString()), a.fbt._param("maxEmojiHeight", Lt.toString())], {
						hk: "yal28"
					})), l.a.createElement(he.b, null, a.fbt._("Max file size {MAX_FILE_SIZE}KB", [a.fbt._param("MAX_FILE_SIZE", Ut.toString())], {
						hk: "1t1L0f"
					}))), l.a.createElement(ts, null, a.fbt._("Recommended upload dimensions: {recommendedWidth} x {recommendedHeight}px", [a.fbt._param("recommendedWidth", p.toString()), a.fbt._param("recommendedHeight", b.toString())], {
						hk: "35CqDV"
					}))), l.a.createElement(Ht, null, a.fbt._("Appears in:", null, {
						hk: "3SZP5W"
					})), l.a.createElement(Wt, {
						name: "postFlair",
						onChange: this.handleTogglePostFlair,
						value: m.postFlairAllowed
					}, l.a.createElement(zt, null, a.fbt._("Post flair", null, {
						hk: "mAzeZ"
					}))), l.a.createElement(Wt, {
						name: "userFlair",
						onChange: this.handleToggleUserFlair,
						value: m.userFlairAllowed
					}, l.a.createElement(zt, null, a.fbt._("User flair", null, {
						hk: "qVf7x"
					}))), l.a.createElement(Jt, {
						description: "Only appears in post and user flair that are restricted for mod use.",
						on: m.modFlairOnly,
						onToggle: this.handleModExclusiveToggle,
						title: "Mod only"
					})), l.a.createElement(G.g, null, l.a.createElement(Qt, {
						disabled: c,
						onClick: this.closeModal
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), l.a.createElement(Gt, {
						disabled: k,
						onClick: this.saveEmoji
					}, e ? a.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : a.fbt._("Add", null, {
						hk: "2wi3d4"
					})))), i === as.BulkUploadState && l.a.createElement(St, Ft({}, u, {
						images: d,
						returnToAddState: this.returnToAdd,
						sendEvent: n,
						setIsSaving: this.setIsSaving
					})))
				}
			}
			var us = Object(q.a)(cs(ms));
			const ps = m.a.wrapped(S.a, "alertIcon", M.a),
				bs = m.a.span("appearsTitle", M.a),
				hs = m.a.span("imageTitle", M.a),
				gs = m.a.span("nameTitle", M.a),
				fs = m.a.span("permissionsTitle", M.a),
				xs = m.a.wrapped(_.o, "settingsButton", M.a),
				Es = m.a.wrapped(f.a, "titleTooltip", M.a),
				vs = m.a.wrapped(E.a, "topRow", M.a),
				ks = Object(c.c)({
					emojis: I.d,
					isConfirmModalOpen: Object(N.b)("EmojiManager--DeleteEmojiConfirmation--Modal"),
					isEmojisEnabled: (e, t) => Object(I.b)(e, t.subreddit.name),
					isEmojiSettingsModalOpen: Object(N.b)("EmojiManager--Settings--Modal"),
					isUploadEmojisModalOpen: Object(N.b)("EmojiManager--UploadEmojis--Modal")
				}),
				_s = Object(d.b)(ks, (e, t) => {
					let {
						subreddit: s
					} = t;
					return {
						deleteEmoji: t => e(u.i(t, s.id)),
						toggleDeleteConfirmationModal: () => e(Object(p.i)("EmojiManager--DeleteEmojiConfirmation--Modal")),
						toggleSettingsModal: () => e(Object(p.i)("EmojiManager--Settings--Modal")),
						toggleUploadEmojisModal: () => e(Object(p.i)("EmojiManager--UploadEmojis--Modal"))
					}
				});
			class Cs extends l.a.Component {
				constructor(e) {
					super(e), this.onClickEditEmoji = (e, t) => {
						this.props.toggleUploadEmojisModal(), this.setState({
							emojiToEdit: e,
							isSnoomoji: t
						})
					}, this.onConfirmDelete = () => {
						this.props.deleteEmoji(this.state.emojiNameToDelete), this.setState({
							emojiNameToDelete: ""
						}), this.props.sendEvent(j("delete"))
					}, this.handleRemoveEmoji = e => {
						this.setState({
							emojiNameToDelete: e
						}), this.props.toggleDeleteConfirmationModal()
					}, this.state = {
						emojiNameToDelete: "",
						emojiToEdit: null,
						isSnoomoji: !1
					}
				}
				static getDerivedStateFromProps(e, t) {
					return t.emojiToEdit && !e.isUploadEmojisModalOpen ? {
						emojiToEdit: null,
						isSnoomoji: !1
					} : null
				}
				render() {
					const {
						emojis: e,
						isConfirmModalOpen: t,
						isEmojisEnabled: s,
						isEmojiSettingsModalOpen: o,
						isUploadEmojisModalOpen: i,
						sendEvent: d,
						subreddit: c,
						toggleDeleteConfirmationModal: m,
						toggleSettingsModal: u,
						toggleUploadEmojisModal: p
					} = this.props;
					return l.a.createElement(l.a.Fragment, null, l.a.createElement(x.c, null, l.a.createElement(xs, {
						onClick: u
					}, a.fbt._("Emoji settings", null, {
						hk: "2k202A"
					})), l.a.createElement(_.l, {
						onClick: p
					}, a.fbt._("Add emoji", null, {
						hk: "DTe8a"
					}))), l.a.createElement(x.a, null, l.a.createElement(x.b, null, a.fbt._("Emoji management", null, {
						hk: "6xN5s"
					}), l.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360010560371`
					})), !s && l.a.createElement(h.a, {
						className: M.a.emojisDisabled,
						color: k.a.quarantine,
						icon: l.a.createElement(ps, null),
						subtitle: a.fbt._("Emojis in flairs will not be displayed, and existing emojis will appear as plain text.", null, {
							hk: "2WaMtH"
						}),
						title: a.fbt._("Emojis have been disabled for this community", null, {
							hk: "7LNIO"
						})
					}), l.a.createElement(vs, null, l.a.createElement(hs, null, a.fbt._("Image", null, {
						hk: "1rlqjH"
					})), l.a.createElement(gs, null, a.fbt._("Name", null, {
						hk: "1ugGFI"
					})), l.a.createElement(bs, null, a.fbt._("Appears in", null, {
						hk: "3K8vjU"
					}), l.a.createElement(Es, {
						text: a.fbt._("Set emoji to appear in post flair or user flair", null, {
							hk: "4cg4Se"
						})
					})), l.a.createElement(fs, null, a.fbt._("Settings", null, {
						hk: "2CRrAq"
					}), l.a.createElement(Es, {
						text: a.fbt._("Set emoji to only appear in mod-only flair", null, {
							hk: "2yS10f"
						})
					}))), e[c.id] && r()(e[c.id].emojis, e => l.a.createElement(V, {
						emoji: e,
						enabled: !0,
						isSnoomoji: !1,
						key: e.name,
						onEdit: this.onClickEditEmoji,
						onRemove: this.handleRemoveEmoji
					})), e[c.id] && r()(e[c.id].snoomojis, e => l.a.createElement(V, {
						emoji: e,
						enabled: !0,
						isSnoomoji: !0,
						key: e.name,
						onEdit: this.onClickEditEmoji,
						onRemove: this.handleRemoveEmoji
					})), t && l.a.createElement(b.a, {
						toggleModal: m,
						onConfirm: this.onConfirmDelete,
						actionText: a.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						headerText: a.fbt._("Delete emoji?", null, {
							hk: "3VBsS8"
						}),
						modalText: a.fbt._("Do you wish to delete this emoji?", null, {
							hk: "2sPCxc"
						}),
						trackClick: () => {},
						withOverlay: !0
					}), o && l.a.createElement(ue, {
						sendEvent: d,
						subreddit: c,
						toggleModal: u,
						withOverlay: !0
					}), i && l.a.createElement(us, {
						emoji: this.state.emojiToEdit,
						isSnoomoji: this.state.isSnoomoji,
						sendEvent: d,
						subreddit: c,
						toggleModal: p,
						withOverlay: !0
					})))
				}
			}
			t.a = _s(Object(v.c)(Cs))
		},
		"./src/reddit/components/ModHub/InfoLink/index.m.less": function(e, t, s) {
			e.exports = {
				linkContainer: "_3-yXs2bljbMxTPT6hDZU1I",
				infoIcon: "_2Eloqzd6Vfz9eGsjyzVfsf"
			}
		},
		"./src/reddit/components/ModHub/InfoLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/icons/fonts/Info/index.tsx"),
				d = s("./src/reddit/components/ModHub/InfoLink/index.m.less"),
				c = s.n(d);
			const m = Object(r.a)(i.b),
				u = ["center", "top"],
				p = ["center", "bottom"];
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					return o.a.createElement("a", {
						className: c.a.linkContainer,
						href: this.props.linkUrl,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o.a.createElement(l.a, {
						className: c.a.infoIcon
					}), o.a.createElement(m, {
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: u,
						text: n.fbt._("Learn more", null, {
							hk: "3zoGtq"
						}),
						tooltipPosition: p
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/ModHub/ModHubNav/NavItem.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				l = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/ModHub/ModHubNav/index.m.less"),
				c = s.n(d);
			const m = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.newLinkIndicator, t)
				}, n.fbt._("New", null, {
					hk: "BnhHE"
				}))
			};
			t.b = e => e.path ? e.isExternal ? o.a.createElement("a", {
				className: c.a.navLinkStyles,
				href: e.path,
				onClick: e.onClick,
				target: "_blank",
				rel: "noopener noreferrer"
			}, e.label, o.a.createElement(l.a, {
				name: "external_link",
				className: c.a.outboundLinkIcon
			})) : o.a.createElement(i.default, {
				className: Object(r.a)(c.a.navLinkStyles, {
					[c.a.activeLink]: !!e.isActive
				}),
				to: e.path,
				onClick: e.onClick
			}, e.label, e.isNew && o.a.createElement(m, null), e.isBeta && o.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, n.fbt._("Beta", null, {
				hk: "z4XPh"
			})), e.isUpdated && o.a.createElement("div", {
				className: c.a.updatedLinkIndicator
			}, n.fbt._("Updated", null, {
				hk: "2xkGR3"
			})), e.showInboundArrow && o.a.createElement(l.a, {
				name: "right",
				className: c.a.inboundLinkIcon
			})) : o.a.createElement("button", {
				className: c.a.navLinkStyles,
				onClick: e.onClick
			}, e.label, e.isNew && o.a.createElement(m, null), e.isBeta && o.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, n.fbt._("Beta", null, {
				hk: "z4XPh"
			})), e.isUpdated && o.a.createElement("div", {
				className: c.a.updatedLinkIndicator
			}, n.fbt._("Updated", null, {
				hk: "2xkGR3"
			})))
		},
		"./src/reddit/components/ModHub/ModHubNav/WikiNavPanel/index.m.less": function(e, t, s) {
			e.exports = {
				wikiNavPanel: "KAUs91LhLIPR2bTL1aZRJ",
				contentTree: "_3_qIKXEwRmWcog7k9kGSno",
				footer: "_3FqEpSEBROhNwQ6pW6xmwJ",
				primaryButton: "_3fO0HSLh0kUxdhfv06hiTX",
				pageNavItem: "gCZ0Yr9nZYa9NaCdn8-eS",
				indentLine: "_2qFuXxmElNrzv3E9Qyb5xi",
				itemText: "_8bMrzJrL3U19A5yc6HTgj",
				mActive: "_1gyKwA8_GLuoQ1hu3Apd-w",
				mExists: "_3E5JJL5f6BXoTxqDq40IbB"
			}
		},
		"./src/reddit/components/ModHub/ModHubNav/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1rWejsW3eX4yw72E6Wfmyh",
				titleFontH2: "_10H_HMu7R7ett8pmawqwCS",
				titleFontH3: "_22nuZii7bWeL3c1xoXOl9",
				titleFontH4: "_2UjVJakiyf4d3yQ1sBrOzz",
				titleFontH5: "_22v1odcGzDJaLHik5W5qCz",
				titleFontH6: "_3BdZeq3g8CWhfeqBhIiW7f",
				metadataFont: "BQ88O08B4nIUNd4oLud39",
				flairFont: "_24GksXJ4va-4ZEamEGSlFB",
				labelsFont: "bd2r035T3aLLBkiMZaODQ",
				actionFont: "v0ITosHo9F3Rl2_llDtrc",
				smallButtonFont: "_3Sxxei5IvhyFBFPSQeJemM",
				largeButtonFont: "_-8HW12kqXpCzSoPxOQgrN",
				strongTextFont: "jPwoQR2t4sGD2BGLwCS0o",
				tabFont: "_2TpZx4pScQqA92z2QTYbIk",
				buttonFontXS: "_3hhxR89D6EPPCn0stnyDtx",
				buttonFontXs: "_3hhxR89D6EPPCn0stnyDtx",
				buttonFontS: "_2geB6McFSdWvuGRz3nyzjb",
				buttonFontM: "_1uuuzIbDmUCEWDPkR9T_dx",
				buttonFontL: "_1AhaF3ULgALw9k8OUmf0pY",
				buttonFontXL: "_2iQE9slD0Zw-wYQx5FCL1j",
				buttonFontXl: "_2iQE9slD0Zw-wYQx5FCL1j",
				bodyFontH1: "_3hxV-zVTwf7J5X6U1gL2PA",
				bodyFontH2: "_1lSzh7ct7vogYQk35ULeJl",
				bodyFontH3: "_2C3DyZAU4ai6HhZtVTe-Bu",
				bodyFontH4: "_2tzV3r0Sow-B7LA2KMLD45",
				bodyFontH5: "_1-ivrwr3LQQJ2_7q7woFBf",
				bodyFontH6: "pJbG4WvyXqhjYGMHv_062",
				bodyFontH6Small: "_2lZmvARU6npWzDSAF2ffm7",
				bodyFont: "gPA4LKC5gx8g56loAEuW2",
				bodyFontSmall: "_2U2PATpiHbmfDjkovIbtF9",
				bodyFontMono: "_1tyVWTRiPy8hBs1o6HBJ_a",
				navContainer: "_2xA0SygQ9V-9Vkdad_4tnh",
				wikiNavContainer: "_3wKmughJWQCbpbTpgwf2R_",
				navContainerExp: "_1HiZS01lfLdV-mZxJbB2r1",
				navSection: "_1hDKgrVgEqwg3ogyzK0xTx",
				sectionHeader: "_1C6NYhYvuXKUDoONxrMR0d",
				iconStyles: "_1lHK5OQSXGaQzgW07E3Fh4",
				inboundLinkIcon: "_1cE0_wpoZtV5YKzwxXgxQ6",
				outboundLinkIcon: "_2Fb1fof3pZ4qO7_ZowwnXG",
				navLinkStyles: "jFCRipwFbBNJ4rl18HMK5",
				activeLink: "_4Gq-jEYAhrOCtha4RZ1JZ",
				breadcrumb: "_2Pw-8XrjTaQdxaxIicJXly",
				breadcrumbButton: "_1ofO-HYNTNyx_FUAEbIMME",
				newLinkIndicator: "_26hxZhi3N_WA1WUC6pQRpa",
				updatedLinkIndicator: "_1oCiY0B1NLkEfFfIfSJIF_"
			}
		},
		"./src/reddit/components/ModHub/PaginationButtons/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2QinjfjfDTG6Df4_Tb_eRN",
				iconStyles: "_1MvzgnzkNefTZKkd4A5o1Y",
				arrowLeft: "_1Hul4w6ANujC9NsFF6_j4f"
			}
		},
		"./src/reddit/components/ModHub/PaginationButtons/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/InternalLink/index.tsx"),
				i = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				l = s("./src/reddit/components/ModHub/PaginationButtons/index.m.less"),
				d = s.n(l);
			t.a = e => a.a.createElement("div", {
				className: d.a.container
			}, e.prevButtonEnabled && a.a.createElement(r.default, {
				to: e.prevTo,
				onClick: e.prevButtonOnClick
			}, a.a.createElement(i.a, {
				className: Object(o.a)(d.a.iconStyles, d.a.arrowLeft)
			})), e.nextButtonEnabled && a.a.createElement(r.default, {
				to: e.nextTo,
				onClick: e.nextButtonOnClick
			}, a.a.createElement(i.a, {
				className: d.a.iconStyles
			})))
		},
		"./src/reddit/components/ModHub/StyledComponents/index.m.less": function(e, t, s) {
			e.exports = {
				ContentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				contentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				PageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				pageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				TopBar: "_2YY5qLRbI5q6_0JQVKiGt_",
				topBar: "_2YY5qLRbI5q6_0JQVKiGt_"
			}
		},
		"./src/reddit/components/ModHub/StyledComponents/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return l
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				o = s.n(a);
			const r = n.a.div("ContentContainer", o.a),
				i = n.a.div("PageTitle", o.a),
				l = n.a.div("TopBar", o.a)
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const a = e => (e => !e.isApproved && !!Object(n.b)(e, n.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/ModModeBanners/index.m.less"),
				l = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), c = () => r.a.createElement("div", {
				className: Object(a.a)(l.a.banner, l.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: r.a.createElement(c, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/ModModeBanners/index.m.less"),
				l = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), c = () => r.a.createElement("div", {
				className: Object(a.a)(l.a.banner, l.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(c, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModerationLog/FilterByDropdowns/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_3aaWXDPwVg-rhD0DvWeyIg",
				titleFontH2: "_3RrF8F_t0SfGrUYfrMwbPy",
				titleFontH3: "_36oA-I2A9k4cBPYs3kAlux",
				titleFontH4: "_1neT2k10waDvSZYxkd9bk8",
				titleFontH5: "_3oeJNjYGx_aLE6l4o6Jhcr",
				titleFontH6: "_2CsvILRAMCNlhcGlq7eAZF",
				metadataFont: "_2odnjtlqO4r8tdO5H9fwLW",
				flairFont: "k5rlVaQw1fQ4nW2C-cK8H",
				labelsFont: "_20rPk9VJ1JfA7IuzEuFf25",
				actionFont: "_1YoZx3mOGBx4yxG_aQD3dq",
				smallButtonFont: "_3eWaIQ1VVjPR_5vUm4bU74",
				largeButtonFont: "rBsu7j_nL4EsDsP9nsEx4",
				strongTextFont: "_1efJllSuh9p67WrocQmmWR",
				tabFont: "_3WOHej9q3BPonP3nmtGWrh",
				buttonFontXS: "_1MX_r3WunmJuovmTcVFbK2",
				buttonFontXs: "_1MX_r3WunmJuovmTcVFbK2",
				buttonFontS: "_2KcOk-_dCdoa6LYzk-AP_9",
				buttonFontM: "BRJSsisfnzhNDIzzkZ0iD",
				buttonFontL: "WtDuFUG7c1VkpSlmXgZux",
				buttonFontXL: "_1K99pLAcTgTp5K71-CnCYk",
				buttonFontXl: "_1K99pLAcTgTp5K71-CnCYk",
				bodyFontH1: "_1m_v2MMDlDugLUDKRkPnPP",
				bodyFontH2: "uhtqruCImDdb6YMrply29",
				bodyFontH3: "oI7G9eYumAFmPy69WN078",
				bodyFontH4: "_3NN_fRjCSJGnly_ejXsz8m",
				bodyFontH5: "_1lK4S52h6Glz4-OysTx6SF",
				bodyFontH6: "BarCcSBvd2WaM4vhBY1_R",
				bodyFontH6Small: "BxuTxX9RmChqU7mme4ODG",
				bodyFont: "RIX67Ch_ZE4SYGnQlkPWs",
				bodyFontSmall: "_1_FK7Ynr3eStBK-2Nbutbg",
				bodyFontMono: "_1mpZy47SxXNRDTLTEdCUmV",
				dropdownRow: "_3p4amLmnNdNRS9NcI_TnQm",
				filter: "_1LUEYTVtU-JweRiTGrVNn6",
				container: "_1GH53do8Ql17wdDC_i_NDf",
				containerText: "KiwwtIazAS77Aa_w3AdBE",
				listContainer: "FyBjuKMom1xYgTT7w5Dg1",
				selector: "_3fe64brTItATv48WIPt-Af"
			}
		},
		"./src/reddit/components/ModerationLog/ModerationLogItem/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1o6EpuTR_pbdKk4biOJFOD",
				titleFontH2: "_2scGKAM0oQo5UQ0sAeTYcJ",
				titleFontH3: "nZ8gtQ7wSBH1Ei4U88QyH",
				titleFontH4: "cWWmG8ptxDy68exgcmkxK",
				titleFontH5: "_2ltEgDFK7lEC55mqYn2t1k",
				titleFontH6: "_1wRduyAnZyUXSUvy0rPJ7E",
				metadataFont: "_3iKB3xohr95CjhTE-YrXL4",
				flairFont: "_2tIFOrubLwHvQfSpZ7MBvr",
				labelsFont: "_1Qc6zGFV60DgXsfeg4iK1-",
				actionFont: "bD7YA5ocXtmwPNG0x7gqi",
				smallButtonFont: "wa3Y6CP3s2WY-9hiMRcK6",
				largeButtonFont: "_1Td1TQRNZA20xRbI-LLHsA",
				strongTextFont: "_2bBsKMYboYeah9nlKp4p8e",
				tabFont: "_3Bdl5CdTghtfz5X9Qkn7y0",
				buttonFontXS: "_2hkAgq5O_JUGmz41U0fhSZ",
				buttonFontXs: "_2hkAgq5O_JUGmz41U0fhSZ",
				buttonFontS: "zi9zhcyy9sg1XQb4uP15B",
				buttonFontM: "_2V_SS1DAOgvZNAM9mW40qn",
				buttonFontL: "_3yj5sHGC15tSX0YBraNh9S",
				buttonFontXL: "_2rPaWVGnRh6kEv7M1PJXWa",
				buttonFontXl: "_2rPaWVGnRh6kEv7M1PJXWa",
				bodyFontH1: "_2b6RUiVz7aEMUoaiEalXki",
				bodyFontH2: "_1gD38a1FX6kmxcFvUyP8bB",
				bodyFontH3: "_20D34o21pcOy-JSvp0fq42",
				bodyFontH4: "_368KGbv676rMnmb_kPY7-A",
				bodyFontH5: "_2o6Gp_6yxl-T5p9MHsV3hI",
				bodyFontH6: "_2jp4S3tPdfLXU3FVoOvCWi",
				bodyFontH6Small: "_1OIs3KOCi4nPYoXgyoYWwD",
				bodyFont: "O3aukKYU-BhYFQQgCIAcN",
				bodyFontSmall: "_10AKt1uw6lDYoTkaQ2Egu-",
				bodyFontMono: "_3tQKpxkireZBsmkNyZ5-0J",
				row: "_3sZTiywtJTK5dskqy0h2G2",
				modNameCell: "_1hV1AUW4J0YvMuEK7-Ph1H",
				usernameLink: "_25VIbQ9CpcAT2Uys4A2mFb",
				actionLink: "_2yXBXFFI2XxJRqd89Zwd25",
				createdAtTooltip: "zMBbz2oHRB9_15CBkQ3P4",
				detailsContainer: "_3pusa5HaB8VO3ODi63vjLl",
				detailsContent: "piNOo-es-o0F7rcLiUu0N",
				detailsType: "_3P62Ird8EqkkVbqN0bv1tU",
				icon: "VzgXNIgPGoNVtsv9-uwYE",
				iconWrapper: "_3cDZ1nhaOv-edC1Ixznjgd",
				negativeTreatment: "XqM6DP9JAGpvwgodvCcuI",
				positiveTreatment: "Ob5o1Q3oVSaizQinm6DD",
				tooltip: "_33OjvBwqb5PPwalXFSmAoy"
			}
		},
		"./src/reddit/components/ModerationLog/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_2OYuAlGNOY6MlJjEC6nWEY",
				titleFontH2: "_2cz1b71RqIGBP0q1sEpoc1",
				titleFontH3: "pNuW5Xi4qPFjDgkhE2utU",
				titleFontH4: "HnjsgzUiJm7Rz4yf-QTnU",
				titleFontH5: "_32jYSRMv-UqDvlwAZ9yI4P",
				titleFontH6: "WyhSydN2c9D7w_ikI_LsS",
				metadataFont: "klmtj4Euuox2ljWXOzJqz",
				flairFont: "_1XFZbbYMt1bMVk_65YaTug",
				labelsFont: "_2lbFHk9fPHfy-Pj2cQ56ef",
				actionFont: "_250q84vRQ0qeydB79AJun",
				smallButtonFont: "_3QKadDpX2GixU1usvLUiww",
				largeButtonFont: "_24SnRKi2v2z3Q8DfWx8Cfd",
				strongTextFont: "_1bRU6ybRMZMA-zL-dR_BFc",
				tabFont: "_1y1SLpqv4ViOdLE8d7R03R",
				buttonFontXS: "_3WZjqmvG0dFKc8UjITKDDM",
				buttonFontXs: "_3WZjqmvG0dFKc8UjITKDDM",
				buttonFontS: "_2wD06G9nLrctZ6G6-fnvzn",
				buttonFontM: "f89wHQzBr1xXirRhM2r3L",
				buttonFontL: "_2B8vK6cxvYeJYneLcXU7pS",
				buttonFontXL: "_2wEcZ9dZ6skPqfnohnMjY8",
				buttonFontXl: "_2wEcZ9dZ6skPqfnohnMjY8",
				bodyFontH1: "_2qrAJcHH1W18XK6K_iZjmY",
				bodyFontH2: "_2yInLfhO3hB7n5aflEa_Y5",
				bodyFontH3: "_31VlGQEcOO_KNq8afFO4lZ",
				bodyFontH4: "_13MU9oPUeX9-FTZJw6fEdd",
				bodyFontH5: "_3h1ag_p5AVxzseMoTk9Oee",
				bodyFontH6: "_2GA-IlakdRmzOgQVFN2Q_F",
				bodyFontH6Small: "_19LZGpX04-M-lUtj-duZpb",
				bodyFont: "_3W9ZZjex4uhC0x4j0tXUE8",
				bodyFontSmall: "_2wYhe0C_P9ON8nur1uwzBd",
				bodyFontMono: "Ygu6NDZ2VS1jqJxKuuJ67",
				contentContainer: "PLQrC-Lzmu2AHBmciLxW5",
				table: "_27_l-nXesULxjvqLhpd6Ie",
				timeColHeader: "_1qWSBc-O0drE3JbIiVNEqE",
				modNameColHeader: "_2vKvLM8vE2iV6p5T0b5J42",
				actionNameColHeader: "_3pOXEjq1uyvW71Pp3gS7yv",
				icon: "_2iiHYO0HlG5gGeXyf7S3_q",
				iconContainer: "_3leJW5B-x65UTDfhDAblD_",
				title: "_2pFg2GOWUWlkKFlSaV-iFq",
				tooltip: "jkeAqS2MNV7nCHZkp4vi9",
				actionTooltip: "p12QqrsFSXUXQXCVTreZ5",
				actionTooltipDescription: "_2SZhKngNXxQ-MnrDr17Fm-",
				allIconsContainer: "_2zekEhqxlIqb4STkFCskIT",
				detailTooltip: "_20tDXbrpUnXW12ZXmRZdKa",
				bottomBarRow: "_28pYv3DHnyqXo6lJwzAOcG"
			}
		},
		"./src/reddit/components/ModerationLog/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/endpoints/subredditModeration/moderationLog.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/actions/moderationLog/constants.ts");
			const b = Object(d.a)(p.a);
			var h = s("./node_modules/react-router-redux/es/index.js"),
				g = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/reddit/actions/tooltip.ts"),
				x = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/constants/keycodes.ts"));
			const E = ["Anti-Evil Operations", "Reddit Legal"];
			var v;
			! function(e) {
				e.ACTION = "action", e.MODERATOR = "moderator"
			}(v || (v = {}));
			const k = {
					ALL_ACTIONS: () => a.fbt._("All actions", null, {
						hk: "3sHzD4"
					}),
					ACCEPT_MODERATOR_INVITE: () => a.fbt._("Accept moderator invite", null, {
						hk: "3WJot2"
					}),
					ADD_COMMUNITY_TOPICS: () => a.fbt._("Add community topics", null, {
						hk: "4xgglk"
					}),
					ADD_CONTRIBUTOR: () => a.fbt._("Add contributor", null, {
						hk: "444ZK"
					}),
					ADD_MODERATOR: () => a.fbt._("Add moderator", null, {
						hk: "4rRghF"
					}),
					ADD_NOTE: () => a.fbt._("Add note", null, {
						hk: "2UjBm"
					}),
					ADD_REMOVAL_REASON: () => a.fbt._("Add removal reason", null, {
						hk: "jCC35"
					}),
					ADJUST_POST_CROWD_CONTROL_LEVEL: () => a.fbt._("Adjust post crowd control level", null, {
						hk: "Eqwnv"
					}),
					ENABLE_POST_CROWD_CONTROL_FILTER: () => a.fbt._("Enable post crowd control filter", null, {
						hk: "1uzJGq"
					}),
					DISABLE_POST_CROWD_CONTROL_FILTER: () => a.fbt._("Disable post crowd control filter", null, {
						hk: "UrQCB"
					}),
					APPROVE_COMMENT: () => a.fbt._("Approve comment", null, {
						hk: "1gvHWC"
					}),
					APPROVE_LINK: () => a.fbt._("Approve link", null, {
						hk: "2LqFt4"
					}),
					BAN_USER: () => a.fbt._("Ban user", null, {
						hk: "4DmPqi"
					}),
					COLLECTIONS: () => a.fbt._("Collections", null, {
						hk: "3a39Wa"
					}),
					COMMUNITY_STYLING: () => a.fbt._("Community styling", null, {
						hk: "386ps9"
					}),
					COMMUNITY_WIDGETS: () => a.fbt._("Community widgets", null, {
						hk: "4ml45n"
					}),
					CREATE_AWARD: () => a.fbt._("Create award", null, {
						hk: "bWa9w"
					}),
					CREATE_REMOVAL_REASON: () => a.fbt._("Create removal reason", null, {
						hk: "i1LIy"
					}),
					CREATE_RULE: () => a.fbt._("Create rule", null, {
						hk: "28uE69"
					}),
					CREATE_SCHEDULED_POST: () => a.fbt._("Create scheduled post", null, {
						hk: "mVbI1"
					}),
					DELETE_AWARD: () => a.fbt._("Delete award", null, {
						hk: "3xYaZ7"
					}),
					DELETE_REMOVAL_REASON: () => a.fbt._("Delete removal reason", null, {
						hk: "3FdYhk"
					}),
					DELETE_RULE: () => a.fbt._("Delete rule", null, {
						hk: "2lWdRL"
					}),
					DELETE_SCHEDULED_POST: () => a.fbt._("Delete scheduled post", null, {
						hk: "MhwRy"
					}),
					DELETE_OVERRIDDEN_CLASSIFICATION: () => a.fbt._("Delete overridden classification", null, {
						hk: "3hPfDT"
					}),
					DELETE_NOTE: () => a.fbt._("Delete note", null, {
						hk: "1P0prb"
					}),
					DISABLE_AWARD: () => a.fbt._("Disable award", null, {
						hk: "2yFBt7"
					}),
					DISTINGUISH: () => a.fbt._("Distinguish", null, {
						hk: "3cWniK"
					}),
					EDIT_FLAIR: () => a.fbt._("Edit flair", null, {
						hk: "mD0CV"
					}),
					EDIT_POST_REQUIREMENTS: () => a.fbt._("Edit post requirements", null, {
						hk: "1SLqNE"
					}),
					EDIT_RULE: () => a.fbt._("Edit rule", null, {
						hk: "2T4TJx"
					}),
					EDIT_SCHEDULED_POST: () => a.fbt._("Edit scheduled post", null, {
						hk: "1XCmsI"
					}),
					EDIT_SETTINGS: () => a.fbt._("Edit settings", null, {
						hk: "3o8q46"
					}),
					ENABLE_AWARD: () => a.fbt._("Enable award", null, {
						hk: "3zYir4"
					}),
					HIDDEN_AWARD: () => a.fbt._("Hide award", null, {
						hk: "31lRN8"
					}),
					EVENTS: () => a.fbt._("Events", null, {
						hk: "4Bq9wt"
					}),
					IGNORE_REPORTS: () => a.fbt._("Ignore reports", null, {
						hk: "1defIy"
					}),
					INVITE_MODERATOR: () => a.fbt._("Invite moderator", null, {
						hk: "1DbgL5"
					}),
					INVITE_SUBSCRIBER: () => a.fbt._("Invite subscriber", null, {
						hk: "4yEMNb"
					}),
					LOCK: () => a.fbt._("Lock", null, {
						hk: "39hTi5"
					}),
					MARK_NSFW: () => a.fbt._("Mark nsfw", null, {
						hk: "3bo45o"
					}),
					MARK_ORIGINAL_CONTENT: () => a.fbt._("Mark original content", null, {
						hk: "SadHO"
					}),
					MOD_AWARD_GIVEN: () => a.fbt._("Mod award given by moderators", null, {
						hk: "35cQgR"
					}),
					MODMAIL_ENROLLMENT: () => a.fbt._("Modmail enrollment", null, {
						hk: "4ee1XK"
					}),
					MUTE_USER: () => a.fbt._("Mute user", null, {
						hk: "3kPYe4"
					}),
					OVERRIDE_CLASSIFICATION: () => a.fbt._("Override classification", null, {
						hk: "2VPY6n"
					}),
					REMOVE_COMMENT: () => a.fbt._("Remove comment", null, {
						hk: "vEI4S"
					}),
					REMOVE_COMMUNITY_TOPICS: () => a.fbt._("Remove community topics", null, {
						hk: "1tLjxQ"
					}),
					REMOVE_CONTRIBUTOR: () => a.fbt._("Remove contributor", null, {
						hk: "4FMLz6"
					}),
					REMOVE_LINK: () => a.fbt._("Remove link", null, {
						hk: "tmjch"
					}),
					REMOVE_MODERATOR: () => a.fbt._("Remove moderator", null, {
						hk: "1FHVTB"
					}),
					REMOVE_WIKI_CONTRIBUTOR: () => a.fbt._("Remove wiki contributor", null, {
						hk: "1PcCja"
					}),
					REORDER_MODERATORS: () => a.fbt._("Reorder moderators", null, {
						hk: "3Csxj8"
					}),
					REORDER_RULES: () => a.fbt._("Reorder rules", null, {
						hk: "306Bqx"
					}),
					SET_CONTEST_MODE: () => a.fbt._("Set contest mode", null, {
						hk: "1pERnU"
					}),
					SET_PERMISSIONS: () => a.fbt._("Set permissions", null, {
						hk: "3UzkKU"
					}),
					SET_SUGGESTEDSORT: () => a.fbt._("Set suggested sort", null, {
						hk: "208T6K"
					}),
					SHOW_COMMENT: () => a.fbt._("Show comment", null, {
						hk: "n5M3i"
					}),
					SNOOZE_REPORTS: () => a.fbt._("Snooze reports", null, {
						hk: "3gOkDV"
					}),
					SPAM_COMMENT: () => a.fbt._("Spam comment", null, {
						hk: "2ROyTD"
					}),
					SPAM_LINK: () => a.fbt._("Spam link", null, {
						hk: "2G5xg3"
					}),
					SPOILER: () => a.fbt._("Spoiler", null, {
						hk: "2nfv1a"
					}),
					STICKY: () => a.fbt._("Sticky", null, {
						hk: "1W6JrJ"
					}),
					SUBMIT_CONTENT_RATING_SURVEY: () => a.fbt._("Submit content rating survey", null, {
						hk: "1F1ead"
					}),
					SUBMIT_SCHEDULED_POST: () => a.fbt._("Submit scheduled post", null, {
						hk: "1i2VUH"
					}),
					UNBAN_USER: () => a.fbt._("Unban user", null, {
						hk: "4m2iNP"
					}),
					UNIGNORE_REPORTS: () => a.fbt._("Unignore reports", null, {
						hk: "1wfp99"
					}),
					UNINVITE_MODERATOR: () => a.fbt._("Uninvite moderator", null, {
						hk: "3E6UkD"
					}),
					UNLOCK: () => a.fbt._("Unlock", null, {
						hk: "2BHnOC"
					}),
					UNMUTE_USER: () => a.fbt._("Unmute user", null, {
						hk: "25tct2"
					}),
					UNSET_CONTEST_MODE: () => a.fbt._("Unset contest mode", null, {
						hk: "AxsDk"
					}),
					UNSNOOZE_REPORTS: () => a.fbt._("Unsnooze reports", null, {
						hk: "4nlwcg"
					}),
					UNSPOILER: () => a.fbt._("Unspoiler", null, {
						hk: "2gE1K1"
					}),
					UNSTICKY: () => a.fbt._("Unsticky", null, {
						hk: "U5tvd"
					}),
					UPDATE_REMOVAL_REASON: () => a.fbt._("Update removal reason", null, {
						hk: "aDPHp"
					}),
					WIKI_BANNED: () => a.fbt._("Wiki banned", null, {
						hk: "1nk4H7"
					}),
					WIKI_CONTRIBUTOR: () => a.fbt._("Wiki contributor", null, {
						hk: "1W6zn3"
					}),
					WIKI_PAGE_LISTED: () => a.fbt._("Wiki page listed", null, {
						hk: "4aghdO"
					}),
					WIKI_PERM_LEVEL: () => a.fbt._("Wiki perm level", null, {
						hk: "4waHE"
					}),
					WIKI_REVISE: () => a.fbt._("Wiki revise", null, {
						hk: "3FZuIJ"
					}),
					WIKI_UNBANNED: () => a.fbt._("Wiki unbanned", null, {
						hk: "1fAtKd"
					})
				},
				_ = {
					added_event_times: () => a.fbt._("added event times to post", null, {
						hk: "1TpgVq"
					}),
					added_flair_styling: () => a.fbt._("added flair styling", null, {
						hk: "zQ6Tv"
					}),
					added_styling: () => a.fbt._("modified community styling", null, {
						hk: "xSJ7B"
					}),
					added_to_collection: () => a.fbt._("added post to collection", null, {
						hk: "3V4fk0"
					}),
					added_widget: () => a.fbt._("added widget", null, {
						hk: "1eVJg6"
					}),
					allow_discovery: () => a.fbt._("toggle allow in search/onboarding/discovery", null, {
						hk: "3on6Qf"
					}),
					allow_top: () => a.fbt._("toggle allow in default/trending lists", null, {
						hk: "DikzW"
					}),
					collapse_deleted_comments: () => a.fbt._("toggle collapse deleted/removed comments", null, {
						hk: "22QPzD"
					}),
					comment_score_hide_mins: () => a.fbt._("comment score hide period", null, {
						hk: "21jsup"
					}),
					confirm_ham: () => a.fbt._("approved", null, {
						hk: "3xh84x"
					}),
					confirm_spam: () => a.fbt._("confirm spam", null, {
						hk: "2yAos0"
					}),
					created_collection: () => a.fbt._("created collection", null, {
						hk: "3vtmUM"
					}),
					css_on_cname: () => a.fbt._("toggle custom css from cname", null, {
						hk: "LTlcB"
					}),
					del_banner: () => a.fbt._("delete banner image", null, {
						hk: "2HRlu"
					}),
					del_header: () => a.fbt._("delete header image", null, {
						hk: "2k08m2"
					}),
					del_icon: () => a.fbt._("delete icon image", null, {
						hk: "43ObSQ"
					}),
					del_image: () => a.fbt._("delete image", null, {
						hk: "4ztzG0"
					}),
					deleted_collection: () => a.fbt._("deleted collection", null, {
						hk: "1T8FDF"
					}),
					description: () => a.fbt._("sidebar description", null, {
						hk: "3gBQBx"
					}),
					domain: () => a.fbt._("domain", null, {
						hk: "37Eg7w"
					}),
					edit_post_requirements: () => a.fbt._("edited post requirements", null, {
						hk: "CoMF6"
					}),
					edited_collection_description: () => a.fbt._("edited collection description", null, {
						hk: "ViGod"
					}),
					edited_collection_display_layout: () => a.fbt._("edited collection display layout", null, {
						hk: "xGExq"
					}),
					edited_collection_title: () => a.fbt._("edited collection title", null, {
						hk: "2x6aKQ"
					}),
					edited_event_body: () => a.fbt._("edited event post body", null, {
						hk: "2uwjvL"
					}),
					edited_event_times: () => a.fbt._("edited event post times", null, {
						hk: "3HNoa4"
					}),
					edited_event_title: () => a.fbt._("edited event post title", null, {
						hk: "4itZHA"
					}),
					edited_widget: () => a.fbt._("edited widget", null, {
						hk: "4eaNe6"
					}),
					enable_award: () => a.fbt._("enabled award", null, {
						hk: "3Ehki9"
					}),
					exclude_banned_modqueue: () => a.fbt._("toggle exclude banned users posts from modqueue", null, {
						hk: "j41F1"
					}),
					flair_clear_template: () => a.fbt._("clear flair template", null, {
						hk: "1IMRYi"
					}),
					flair_csv: () => a.fbt._("edit flair by csv", null, {
						hk: "480ZDT"
					}),
					flair_delete_template: () => a.fbt._("delete flair template", null, {
						hk: "bJ8f2"
					}),
					flair_add: () => a.fbt._("add flair", null, {
						hk: "281rsb"
					}),
					flair_delete: () => a.fbt._("delete flair", null, {
						hk: "2UkqAp"
					}),
					flair_edit: () => a.fbt._("edit flair", null, {
						hk: "3oxZYq"
					}),
					flair_enabled: () => a.fbt._("toggle flair enabled", null, {
						hk: "9WUzt"
					}),
					flair_position: () => a.fbt._("toggle user flair position", null, {
						hk: "4cwkk5"
					}),
					flair_self_enabled: () => a.fbt._("toggle user assigned flair enabled", null, {
						hk: "4q13ZR"
					}),
					flair_template: () => a.fbt._("add/edit flair templates", null, {
						hk: "NSSHD"
					}),
					free_form_reports: () => a.fbt._("toggle allow free form reports by users", null, {
						hk: "3MBfJn"
					}),
					header_title: () => a.fbt._("header title", null, {
						hk: "40Y0QO"
					}),
					ignore_reports: () => a.fbt._("ignore reports", null, {
						hk: "h7fov"
					}),
					lang: () => a.fbt._("language", null, {
						hk: "2xhrR8"
					}),
					link_flair_position: () => a.fbt._("toggle link flair position", null, {
						hk: "3j33wQ"
					}),
					link_flair_self_enabled: () => a.fbt._("toggle submitter assigned link flair enabled", null, {
						hk: "43EykN"
					}),
					link_type: () => a.fbt._("link type", null, {
						hk: "2FuNM"
					}),
					over_18: () => a.fbt._("toggle viewers must be over 18", null, {
						hk: "PRgas"
					}),
					permanent: () => a.fbt._("permanent ban", null, {
						hk: "3MeL5T"
					}),
					permission_moderator_invite: () => a.fbt._("set permissions on moderator invitation", null, {
						hk: "hA7I9"
					}),
					permission_moderator: () => a.fbt._("set permissions on moderator", null, {
						hk: "1yq3O2"
					}),
					public_description: () => a.fbt._("description", null, {
						hk: "JizZj"
					}),
					public_traffic: () => a.fbt._("toggle public traffic stats page", null, {
						hk: "qIXty"
					}),
					remove_self: () => a.fbt._("removed self", null, {
						hk: "I5wgr"
					}),
					remove: () => a.fbt._("remove", null, {
						hk: "mAXhe"
					}),
					removed_from_collection: () => a.fbt._("removed post from collection", null, {
						hk: "2dwuxr"
					}),
					removed_styling: () => a.fbt._("removed community styling", null, {
						hk: "1p7Io9"
					}),
					removed_widget: () => a.fbt._("removed widget", null, {
						hk: "43WUko"
					}),
					show_cname_sidebar: () => a.fbt._("toggle show sidebar from cname", null, {
						hk: "4nlv2A"
					}),
					show_media: () => a.fbt._("toggle show thumbnail images of content", null, {
						hk: "2XmVTJ"
					}),
					spam: () => a.fbt._("spam", null, {
						hk: "3usg93"
					}),
					stylesheet: () => a.fbt._("stylesheet", null, {
						hk: "1TOdUF"
					}),
					submit_link_label: () => a.fbt._("submit link button label", null, {
						hk: "4BdL19"
					}),
					submit_text_label: () => a.fbt._("submit text post button label", null, {
						hk: "4wc8qi"
					}),
					title: () => a.fbt._("title", null, {
						hk: "3tlhiX"
					}),
					type: () => a.fbt._("type", null, {
						hk: "14BQua"
					}),
					unspam: () => a.fbt._("unspam", null, {
						hk: "3SxHQ4"
					}),
					upload_image_banner: () => a.fbt._("upload image banner", null, {
						hk: "1ocFEe"
					}),
					upload_image_header: () => a.fbt._("upload image header", null, {
						hk: "3J6pke"
					}),
					upload_image_icon: () => a.fbt._("upload image icon", null, {
						hk: "4jr6Eg"
					}),
					upload_image: () => a.fbt._("upload image", null, {
						hk: "2KN9ig"
					}),
					copyright_removal: () => a.fbt._("copyright removal", null, {
						hk: "9vN6G"
					}),
					copyright_restoration: () => a.fbt._("copyright restoration", null, {
						hk: "35qFx5"
					})
				};
			var C, y;
			! function(e) {
				e.AWARD = "Award", e.COMMENT = "Comment", e.FLAIR = "Flair", e.MULTIPLE = "Multiple", e.POST = "Post", e.REDDITOR = "Redditor", e.SETTINGS = "Settings", e.WIKI = "Wiki", e.COLLECTION = "Collection", e.EVENT = "Event", e.NOTE = "Note"
			}(C || (C = {})),
			function(e) {
				e.NONE = "none", e.POSITIVE = "positive", e.NEGATIVE = "negative"
			}(y || (y = {}));
			var O = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/lib/addQueryParams/index.ts"),
				w = s("./src/lib/stripQueryParams/index.ts");
			const S = e => {
				const t = e.action && "ALL_ACTIONS" !== e.action ? e.action : null,
					s = e.moderator || null,
					n = e.endCursor || null,
					a = e.startCursor || null;
				return Object(j.a)(Object(w.a)(e.currentPageUrl), {
					action: t,
					moderator: s,
					after: n,
					before: a
				})
			};
			var N = s("./src/reddit/selectors/telemetry.ts");
			const I = e => ({
					subreddit: N.hb(e),
					userSubreddit: N.rb(e)
				}),
				T = () => e => ({
					source: "mod_log",
					action: "click",
					noun: "mod_filter_dropdown",
					...I(e)
				}),
				M = () => e => ({
					source: "mod_filter_dropdown",
					action: "click",
					noun: "moderator",
					...I(e)
				}),
				P = () => e => ({
					source: "mod_log",
					action: "click",
					noun: "mod_action_dropdown",
					...I(e)
				}),
				R = e => t => ({
					source: "mod_action_dropdown",
					action: "click",
					noun: e.toLowerCase(),
					...I(t)
				});
			var A = s("./src/reddit/components/ModerationLog/FilterByDropdowns/index.m.less"),
				F = s.n(A);
			class D extends r.a.Component {
				constructor(e) {
					super(e), this.buildModLogUrlForAction = e => {
						const {
							currentPageUrl: t,
							moderator: s
						} = this.props;
						return S({
							currentPageUrl: t,
							moderator: s,
							action: e
						})
					}, this.onChangeFilterText = e => {
						const t = e.currentTarget.value,
							s = this.getFilteredActions(t);
						this.setState({
							currentInputText: t,
							filteredActions: s
						})
					}, this.onKeyDown = e => {
						if (e.which === x.a.Enter) {
							const {
								filteredActions: t
							} = this.state, s = t.length ? this.buildModLogUrlForAction(t[0]) : null;
							s && (this.props.onChangeUrl(s), e.preventDefault())
						}
					}, this.onActionClick = e => {
						this.props.sendEvent(R(e))
					}, this.state = {
						currentInputText: "",
						filteredActions: this.getFilteredActions("")
					}
				}
				getFilteredActions(e) {
					let t = Object.keys(k);
					if (e) {
						const s = e.toLowerCase();
						t = t.filter(e => k[e]().toString().toLowerCase().includes(s))
					}
					return t
				}
				render() {
					const {
						className: e
					} = this.props, {
						filteredActions: t
					} = this.state;
					return r.a.createElement("div", {
						role: "menu",
						className: e
					}, r.a.createElement("input", {
						"aria-label": a.fbt._("Filter", null, {
							hk: "UqHZD"
						}),
						className: F.a.filter,
						placeholder: a.fbt._("Filter", null, {
							hk: "3sxP3l"
						}),
						onChange: this.onChangeFilterText,
						onKeyDown: this.onKeyDown
					}), t.map(e => r.a.createElement(O.default, {
						className: F.a.dropdownRow,
						onClick: () => this.onActionClick(e),
						to: this.buildModLogUrlForAction(e)
					}, k[e]())))
				}
			}
			var L = D,
				U = s("./src/lib/constants/index.ts"),
				B = s("./src/lib/objectSelector/index.ts"),
				H = s("./src/reddit/models/SubredditModeration/ModerationLog/index.ts");
			const W = Object(B.a)((e, t) => {
					let {
						subredditId: s
					} = t, n = [];
					const a = z(e),
						o = V(e);
					if (a && o) {
						const t = Object(H.a)(s, a, o),
							r = e.pages.modHub.moderationLog.actions.itemOrder[s] && e.pages.modHub.moderationLog.actions.itemOrder[s][t];
						r && (n = r.map(t => e.pages.modHub.moderationLog.actions.models[s][t]))
					}
					return n
				}),
				z = e => e.pages.modHub.moderationLog.endCursor,
				V = e => e.pages.modHub.moderationLog.startCursor,
				q = e => {
					let {
						name: t,
						urlPath: s
					} = e;
					return r.a.createElement(O.default, {
						className: F.a.dropdownRow,
						to: s
					}, t)
				},
				G = "a",
				K = Object(l.c)({
					allModerators: (e, t) => {
						let {
							subredditId: s
						} = t;
						return ((e, t) => e.pages.modHub.moderationLog.moderators[t] || [])(e, s)
					}
				});
			class Q extends r.a.Component {
				constructor(e) {
					super(e), this.onChangeFilterText = e => {
						const t = e.currentTarget.value,
							s = this.getList(t);
						this.setState({
							currentInputText: t,
							filteredList: s
						})
					}, this.onKeyDown = e => {
						if (e.which === x.a.Enter) {
							const {
								filteredList: t
							} = this.state, s = t.length ? t[0].url : "";
							s && (this.props.onChangeUrl(s), e.preventDefault())
						}
					}, this.onDropdownClick = e => {
						e.target instanceof HTMLAnchorElement && this.props.sendEvent(M())
					}, this.state = {
						currentInputText: "",
						filteredList: this.getList("")
					}
				}
				getList(e) {
					const {
						action: t,
						currentPageUrl: s
					} = this.props, n = e => S({
						currentPageUrl: s,
						action: t,
						moderator: e
					}), o = [{
						url: n(""),
						displayText: `${a.fbt._("All Moderators",null,{hk:"3vmWA8"})}`
					}, {
						url: n(G),
						displayText: `${a.fbt._("Admins",null,{hk:"4mKRNI"})}`
					}, {
						url: n(U.k),
						displayText: `${a.fbt._("AutoModerator",null,{hk:"4wxc1W"})}`
					}, ...this.props.allModerators.map(e => ({
						url: n(e.name),
						displayText: e.name
					}))];
					if (e) {
						const t = e.toLowerCase();
						return o.filter(e => e.displayText.toLowerCase().includes(t))
					}
					return o
				}
				render() {
					const {
						className: e
					} = this.props, {
						filteredList: t
					} = this.state;
					return r.a.createElement("div", {
						role: "menu",
						className: e,
						onClick: this.onDropdownClick
					}, r.a.createElement("input", {
						"aria-label": a.fbt._("Filter", null, {
							hk: "1qnOD5"
						}),
						className: F.a.filter,
						placeholder: a.fbt._("Filter", null, {
							hk: "1sWvOA"
						}),
						onChange: this.onChangeFilterText,
						onKeyDown: this.onKeyDown
					}), t.map((e, t) => r.a.createElement(q, {
						key: t,
						name: e.displayText,
						urlPath: e.url
					})))
				}
			}
			var X = Object(i.b)(K)(Q),
				J = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Y = s("./src/reddit/controls/Dropdown/index.tsx"),
				Z = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				$ = s("./src/reddit/selectors/tooltip.ts");
			const ee = "mod-log-action-filter-dropdown",
				te = "mod-log-moderator-filter-dropdown",
				se = Object(g.a)(Y.a),
				ne = Object(l.c)({
					isActionFilterDropdownOpen: Object($.b)(ee),
					isModeratorFilterDropdownOpen: Object($.b)(te)
				});
			class ae extends r.a.Component {
				constructor() {
					super(...arguments), this.getContainerText = e => {
						const {
							action: t,
							moderator: s
						} = this.props;
						if (e === v.MODERATOR) {
							let e = s;
							return s === G && (e = a.fbt._("Admins", null, {
								hk: "1qJDMA"
							})), e || a.fbt._("All Moderators", null, {
								hk: "18DhaK"
							})
						}
						if (e === v.ACTION) {
							return t && k[t] && k[t]() || a.fbt._("Actions", null, {
								hk: "1s4OJD"
							})
						}
					}, this.openModFilterDropdown = () => {
						this.props.onOpenDropdown(te), this.props.sendEvent(T())
					}, this.openActionFilterDropdown = () => {
						this.props.onOpenDropdown(ee), this.props.sendEvent(P())
					}
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						action: e,
						currentPageUrl: t,
						isActionFilterDropdownOpen: s,
						isModeratorFilterDropdownOpen: n,
						moderator: o,
						subredditId: i
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: F.a.container,
						onClickCapture: this.stopPropagation
					}, r.a.createElement("button", {
						"aria-expanded": n,
						"aria-label": a.fbt._("Start typing to filter moderators or use up and down to select.", null, {
							hk: "4ff0MW"
						}),
						className: F.a.selector,
						id: te,
						onClick: this.openModFilterDropdown,
						role: "navigation"
					}, r.a.createElement("span", {
						className: F.a.containerText
					}, this.getContainerText(v.MODERATOR)), r.a.createElement(Z.a, null)), r.a.createElement(se, {
						tooltipId: te,
						isOpen: n
					}, r.a.createElement(X, {
						action: e,
						className: F.a.listContainer,
						currentPageUrl: t,
						moderator: o,
						onChangeUrl: this.props.pushUrl,
						sendEvent: this.props.sendEvent,
						subredditId: i
					}))), r.a.createElement("div", {
						className: F.a.container,
						onClickCapture: this.stopPropagation
					}, r.a.createElement("button", {
						"aria-expanded": s,
						"aria-label": a.fbt._("Start typing to filter the mod actions or use up and down to select.", null, {
							hk: "32A4KB"
						}),
						className: F.a.selector,
						id: ee,
						onClick: this.openActionFilterDropdown,
						role: "navigation"
					}, r.a.createElement("span", {
						className: F.a.containerText
					}, this.getContainerText(v.ACTION)), r.a.createElement(Z.a, null)), r.a.createElement(se, {
						tooltipId: ee,
						isOpen: s
					}, r.a.createElement(L, {
						action: e,
						className: F.a.listContainer,
						currentPageUrl: t,
						moderator: o,
						onChangeUrl: this.props.pushUrl,
						sendEvent: this.props.sendEvent
					}))))
				}
			}
			var oe = Object(i.b)(ne, e => ({
					onOpenDropdown: t => e(Object(f.h)({
						tooltipId: t
					})),
					pushUrl: t => e(Object(h.b)(t))
				}))(Object(J.c)(ae)),
				re = s("./node_modules/lodash/noop.js"),
				ie = s.n(re),
				le = s("./src/reddit/components/AuthorLink/index.tsx"),
				de = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				ce = s("./src/reddit/components/HumanDate/index.tsx"),
				me = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ue = s("./src/reddit/models/User/index.ts"),
				pe = (s("./src/lib/assertNever.ts"), s("./src/lib/sentry/index.ts"));
			var be = s("./src/reddit/icons/fonts/index.tsx"),
				he = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				ge = s("./src/reddit/icons/svgs/Collection/index.tsx"),
				fe = s("./src/reddit/icons/svgs/Event/index.tsx"),
				xe = s("./src/reddit/icons/svgs/Gild/index.tsx"),
				Ee = s("./src/reddit/icons/svgs/ModLogPosts/index.tsx"),
				ve = s("./src/reddit/icons/svgs/Negative/index.tsx"),
				ke = s("./src/reddit/icons/svgs/Positive/index.tsx"),
				_e = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				Ce = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				ye = s("./src/reddit/icons/svgs/Tag/index.tsx"),
				Oe = s("./src/reddit/icons/svgs/Wiki/index.tsx"),
				je = s("./src/reddit/models/Comment/index.ts"),
				we = s("./src/reddit/models/FeedElement/index.ts"),
				Se = s("./src/reddit/components/ModerationLog/ModerationLogItem/index.m.less"),
				Ne = s.n(Se);
			const Ie = e => {
					let {
						action: t,
						urlPath: s
					} = e;
					const n = (e => {
							switch (e) {
								case "ALL_ACTIONS":
									return;
								case "ADD_CONTRIBUTOR":
								case "ADD_MODERATOR":
									return {
										type: C.REDDITOR, treatment: y.POSITIVE
									};
								case "BAN_USER":
								case "MUTE_USER":
								case "REMOVE_CONTRIBUTOR":
								case "REMOVE_MODERATOR":
									return {
										type: C.REDDITOR, treatment: y.NEGATIVE
									};
								case "CREATE_AWARD":
								case "MOD_AWARD_GIVEN":
									return {
										type: C.AWARD, treatment: y.POSITIVE
									};
								case "DELETE_AWARD":
								case "DISABLE_AWARD":
								case "ENABLE_AWARD":
								case "HIDDEN_AWARD":
									return {
										type: C.AWARD, treatment: y.NEGATIVE
									};
								case "ACCEPT_MODERATOR_INVITE":
								case "INVITE_MODERATOR":
								case "INVITE_SUBSCRIBER":
								case "SET_PERMISSIONS":
								case "UNBAN_USER":
								case "UNINVITE_MODERATOR":
								case "UNMUTE_USER":
									return {
										type: C.REDDITOR, treatment: y.NONE
									};
								case "APPROVE_COMMENT":
								case "SHOW_COMMENT":
									return {
										type: C.COMMENT, treatment: y.POSITIVE
									};
								case "REMOVE_COMMENT":
								case "SPAM_COMMENT":
									return {
										type: C.COMMENT, treatment: y.NEGATIVE
									};
								case "EDIT_FLAIR":
									return {
										type: C.FLAIR, treatment: y.NONE
									};
								case "APPROVE_LINK":
									return {
										type: C.POST, treatment: y.POSITIVE
									};
								case "REMOVE_LINK":
								case "SPAM_LINK":
								case "ADD_REMOVAL_REASON":
									return {
										type: C.POST, treatment: y.NEGATIVE
									};
								case "LOCK":
								case "MARK_NSFW":
								case "MARK_ORIGINAL_CONTENT":
								case "SET_CONTEST_MODE":
								case "SET_SUGGESTEDSORT":
								case "SPOILER":
								case "UNLOCK":
								case "UNSET_CONTEST_MODE":
								case "UNSPOILER":
									return {
										type: C.POST, treatment: y.NONE
									};
								case "DISTINGUISH":
								case "IGNORE_REPORTS":
								case "SNOOZE_REPORTS":
								case "STICKY":
								case "UNIGNORE_REPORTS":
								case "UNSNOOZE_REPORTS":
								case "UNSTICKY":
									return {
										type: C.MULTIPLE, treatment: y.NONE
									};
								case "ADD_COMMUNITY_TOPICS":
								case "ADJUST_POST_CROWD_CONTROL_LEVEL":
								case "ENABLE_POST_CROWD_CONTROL_FILTER":
								case "DISABLE_POST_CROWD_CONTROL_FILTER":
								case "REMOVE_COMMUNITY_TOPICS":
								case "COMMUNITY_STYLING":
								case "COMMUNITY_WIDGETS":
								case "CREATE_RULE":
								case "DELETE_RULE":
								case "EDIT_POST_REQUIREMENTS":
								case "EDIT_RULE":
								case "REORDER_RULES":
								case "REORDER_MODERATORS":
								case "EDIT_SETTINGS":
								case "MODMAIL_ENROLLMENT":
								case "SUBMIT_CONTENT_RATING_SURVEY":
								case "DELETE_OVERRIDDEN_CLASSIFICATION":
								case "OVERRIDE_CLASSIFICATION":
								case "CREATE_REMOVAL_REASON":
								case "DELETE_REMOVAL_REASON":
								case "UPDATE_REMOVAL_REASON":
									return {
										type: C.SETTINGS, treatment: y.NONE
									};
								case "REMOVE_WIKI_CONTRIBUTOR":
								case "WIKI_BANNED":
									return {
										type: C.WIKI, treatment: y.NEGATIVE
									};
								case "WIKI_CONTRIBUTOR":
								case "WIKI_PAGE_LISTED":
								case "WIKI_PERM_LEVEL":
								case "WIKI_REVISE":
								case "WIKI_UNBANNED":
									return {
										type: C.WIKI, treatment: y.NONE
									};
								case "COLLECTIONS":
									return {
										type: C.COLLECTION, treatment: y.NONE
									};
								case "EVENTS":
									return {
										type: C.EVENT, treatment: y.NONE
									};
								case "CREATE_SCHEDULED_POST":
								case "EDIT_SCHEDULED_POST":
								case "DELETE_SCHEDULED_POST":
								case "SUBMIT_SCHEDULED_POST":
									return {
										type: C.POST, treatment: y.NONE
									};
								case "ADD_NOTE":
									return {
										type: C.NOTE, treatment: y.POSITIVE
									};
								case "DELETE_NOTE":
									return {
										type: C.NOTE, treatment: y.NEGATIVE
									};
								default:
									return void pe.c.captureMessage(`Unknown mod action "${e}"`)
							}
						})(t.action),
						a = t.target && t.target.__typename,
						o = a === je.d.Comment || je.d.DeletedComment;
					let i;
					switch (n && n.type) {
						case C.AWARD:
							i = r.a.createElement(xe.a, {
								className: Ne.a.icon
							});
							break;
						case C.COMMENT:
							i = r.a.createElement(he.a, null);
							break;
						case C.FLAIR:
							i = r.a.createElement(ye.a, {
								className: Ne.a.icon
							});
							break;
						case C.POST:
							i = r.a.createElement(Ee.a, {
								className: Ne.a.icon
							});
							break;
						case C.REDDITOR:
							i = r.a.createElement(_e.a, {
								className: Ne.a.icon
							});
							break;
						case C.SETTINGS:
							i = r.a.createElement(Ce.a, {
								className: Ne.a.icon
							});
							break;
						case C.WIKI:
							i = r.a.createElement(Oe.a, {
								className: Ne.a.icon
							});
							break;
						case C.COLLECTION:
							i = r.a.createElement(ge.a, {
								className: Ne.a.icon
							});
							break;
						case C.EVENT:
							i = r.a.createElement(fe.a, {
								className: Ne.a.icon
							});
							break;
						case C.MULTIPLE:
							o && (i = r.a.createElement(he.a, null)), a === we.a.SubredditPost && (i = r.a.createElement(Ee.a, {
								className: Ne.a.icon
							}));
							break;
						case C.NOTE:
							const e = Object(be.b)("user_note");
							i = r.a.createElement(e, {
								className: Ne.a.icon,
								style: {
									fontSize: "16px"
								}
							})
					}
					const l = k[t.action];
					return r.a.createElement(O.default, {
						className: Ne.a.actionLink,
						to: s
					}, r.a.createElement("span", {
						className: Ne.a.iconWrapper
					}, i, n && n.treatment === y.POSITIVE ? r.a.createElement(ke.a, {
						className: Ne.a.positiveTreatment
					}) : n && n.treatment === y.NEGATIVE ? r.a.createElement(ve.a, {
						className: Ne.a.negativeTreatment
					}) : null), l && l())
				},
				Te = e => {
					let {
						action: t
					} = e;
					const s = t.target && t.target.__typename;
					let n, a, o, i = t.target;
					switch (s) {
						case we.a.SubredditPost:
							n = (i = i).authorInfo && i.authorInfo.__typename === ue.c.AvailableRedditor && i.authorInfo.name || null, a = i.title, o = i.permalink;
							break;
						case we.a.DeletedSubredditPost:
							n = null, a = (i = i).title, o = i.permalink;
							break;
						case ue.c.AvailableRedditor:
							n = (i = i) && i.name || null, a = null;
							break;
						case je.d.Comment:
							n = (i = i).authorInfo && i.authorInfo.__typename === ue.c.AvailableRedditor && i.authorInfo.name || null, a = i.content && i.content.markdown, o = i.permalink;
							break;
						case je.d.DeletedComment:
							n = null, a = (i = i).postInfo && i.postInfo.title, o = i.postInfo && i.postInfo.permalink;
							break;
						default:
							n = null, a = null, o = void 0
					}
					let l = t.details;
					_[t.details] && (l = t.details && _[t.details]());
					let d = t.actionNotes || l;
					return t.actionNotes && l && (d = `${l}: ${t.actionNotes}`), r.a.createElement("div", {
						className: Ne.a.detailsContainer
					}, n && !E.includes(n) ? r.a.createElement(de.a, {
						tooltipId: `userlink-${t.id}`,
						user: n,
						sendHoverCardEvent: ie.a
					}, r.a.createElement(le.a, {
						className: Ne.a.usernameLink,
						author: n
					}, `u/${n}`)) : n, a && o && r.a.createElement("a", {
						className: Ne.a.detailsContent,
						target: "_blank",
						rel: "noopener noreferrer",
						href: o
					}, a), d && r.a.createElement("span", {
						className: Ne.a.detailsType
					}, `(${d})`))
				},
				Me = "mod-log-timestamp-";
			class Pe extends r.a.Component {
				constructor() {
					super(...arguments), this.createTimestamp = e => {
						return new Date(e).toString()
					}, this.getTooltipId = e => `${Me}${e}`, this.getActionModeratorName = e => e && e.__typename === ue.c.AvailableRedditor ? e.name : null
				}
				render() {
					const {
						action: e,
						currentPageUrl: t,
						moderator: s,
						onHideTooltip: n,
						onShowTooltip: a
					} = this.props, o = this.getTooltipId(e.id), i = this.getActionModeratorName(e.moderator);
					return r.a.createElement("tr", {
						className: Ne.a.row
					}, r.a.createElement("td", null, r.a.createElement("span", {
						id: o,
						onMouseEnter: () => a(o),
						onMouseLeave: n,
						className: Ne.a.tooltip
					}, r.a.createElement(ce.d, {
						seconds: e.createdAt / U.Sb
					}), r.a.createElement(me.c, {
						className: Ne.a.createdAtTooltip,
						tooltipId: o,
						text: this.createTimestamp(e.createdAt)
					}))), r.a.createElement("td", {
						className: Ne.a.modNameCell
					}, i && !E.includes(i) ? r.a.createElement(de.a, {
						tooltipId: `modlink-${e.id}`,
						user: i,
						sendHoverCardEvent: ie.a
					}, r.a.createElement(le.a, {
						author: i,
						className: Ne.a.usernameLink
					}, i)) : i), r.a.createElement("td", null, r.a.createElement(Ie, {
						action: e,
						urlPath: S({
							currentPageUrl: t,
							action: e.action,
							moderator: s
						})
					})), r.a.createElement("td", null, r.a.createElement(Te, {
						action: e
					})))
				}
			}
			var Re = Object(i.b)(null, e => ({
					onHideTooltip: () => e(Object(f.i)()),
					onShowTooltip: t => e(Object(f.f)({
						tooltipId: t
					}))
				}))(Pe),
				Ae = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				Fe = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				De = s("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				Le = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				Ue = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				Be = s("./src/reddit/constants/parameters.ts"),
				He = s("./src/reddit/contexts/PageLayer/index.tsx"),
				We = s("./src/reddit/components/ModerationLog/index.m.less"),
				ze = s.n(We);
			const Ve = Object(He.u)({
					currentPageUrl: He.f,
					queryParams: He.X
				}),
				qe = Object(l.c)({
					actionsList: W,
					endCursor: z,
					nextPage: (e, t) => {
						let {
							subredditId: s
						} = t;
						return e.pages.modHub.moderationLog.hasNextPage[s]
					},
					previousPage: (e, t) => {
						let {
							subredditId: s
						} = t;
						return e.pages.modHub.moderationLog.hasPreviousPage[s]
					},
					startCursor: V
				}),
				Ge = Object(i.b)(qe, (e, t) => {
					let {
						subreddit: s
					} = t;
					return {
						fetchAllModerators: () => e((e => async (t, s, n) => {
							let {
								gqlContext: a
							} = n;
							const o = s(),
								r = Object(u.F)(o, e);
							if (o.pages.modHub.moderationLog.moderators[r]) return;
							const i = await Object(c.b)(a(), e);
							if (i.body) {
								const e = i.body.data.subreddit.moderators;
								if (e) {
									const s = Object(m.a)(e);
									t(b({
										normalizedModerators: s,
										subredditId: r
									}))
								}
							}
						})(s.name))
					}
				});
			class Ke extends r.a.Component {
				componentDidMount() {
					"complete" === document.readyState ? this.props.fetchAllModerators() : window.addEventListener("load", this.props.fetchAllModerators)
				}
				render() {
					const {
						actionsList: e,
						currentPageUrl: t,
						endCursor: s,
						nextPage: o,
						previousPage: i,
						queryParams: l,
						startCursor: d,
						subredditId: c
					} = this.props, m = l[Be.m] || null, u = l[Be.l] || null, p = {
						currentPageUrl: t,
						action: m,
						moderator: u,
						startCursor: d
					}, b = {
						currentPageUrl: t,
						endCursor: s,
						action: m,
						moderator: u
					};
					return r.a.createElement(Le.a, {
						className: ze.a.contentContainer
					}, r.a.createElement(Le.b, null, a.fbt._("Mod log", null, {
						hk: "UdwRO"
					}), r.a.createElement(Ae.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360022402312`
					})), r.a.createElement(Ue.a, null, r.a.createElement("span", {
						className: ze.a.title
					}, a.fbt._("Filter by", null, {
						hk: "3RkGvd"
					})), r.a.createElement(oe, {
						action: m,
						currentPageUrl: t,
						moderator: u,
						subredditId: c
					}), r.a.createElement(De.a, {
						prevButtonEnabled: i,
						prevTo: S(p),
						nextButtonEnabled: o,
						nextTo: S(b)
					})), r.a.createElement("table", {
						className: ze.a.table
					}, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", {
						className: ze.a.timeColHeader
					}, a.fbt._("time", null, {
						hk: "1EnamY"
					})), r.a.createElement("th", {
						className: ze.a.modNameColHeader
					}, a.fbt._("moderator", null, {
						hk: "22lRDF"
					})), r.a.createElement("th", {
						className: ze.a.actionNameColHeader
					}, r.a.createElement("span", {
						className: ze.a.tooltip
					}, a.fbt._("action", null, {
						hk: "243Ltb"
					}), r.a.createElement(Fe.a, {
						className: ze.a.actionTooltip
					}, r.a.createElement("div", {
						className: ze.a.actionTooltipDescription
					}, a.fbt._("Actions performed within your community", null, {
						hk: "3RTNED"
					})), r.a.createElement("div", {
						className: ze.a.allIconsContainer
					}, r.a.createElement("div", {
						className: ze.a.iconContainer
					}, r.a.createElement(Ee.a, {
						className: ze.a.icon
					}), a.fbt._("Post", null, {
						hk: "9rK7i"
					})), r.a.createElement("div", {
						className: ze.a.iconContainer
					}, r.a.createElement(he.a, null), a.fbt._("Comment", null, {
						hk: "1N3Vo2"
					})), r.a.createElement("div", {
						className: ze.a.iconContainer
					}, r.a.createElement(ye.a, {
						className: ze.a.icon
					}), a.fbt._("Flair", null, {
						hk: "roX9r"
					})), r.a.createElement("div", {
						className: ze.a.iconContainer
					}, r.a.createElement(Oe.a, {
						className: ze.a.icon
					}), a.fbt._("Wiki", null, {
						hk: "27Czfb"
					})), r.a.createElement("div", {
						className: ze.a.iconContainer
					}, r.a.createElement(_e.a, {
						className: ze.a.icon
					}), a.fbt._("User management", null, {
						hk: "NIFnh"
					})), r.a.createElement("div", {
						className: ze.a.iconContainer
					}, r.a.createElement(Ce.a, {
						className: ze.a.icon
					}), a.fbt._("Community settings", null, {
						hk: "139FAy"
					})), r.a.createElement("div", {
						className: ze.a.iconContainer
					}, r.a.createElement(ge.a, {
						className: ze.a.icon
					}), a.fbt._("Collection", null, {
						hk: "3a6W4E"
					})), r.a.createElement("div", {
						className: ze.a.iconContainer
					}, r.a.createElement(fe.a, {
						className: ze.a.icon
					}), a.fbt._("Event", null, {
						hk: "2odtv8"
					})), r.a.createElement("div", {
						className: ze.a.iconContainer
					}, r.a.createElement(xe.a, {
						className: ze.a.icon
					}), a.fbt._("Award", null, {
						hk: "2l9uEL"
					})))))), r.a.createElement("th", null, r.a.createElement("span", {
						className: ze.a.tooltip
					}, a.fbt._("details", null, {
						hk: "1hCsar"
					}), r.a.createElement(Fe.a, {
						text: a.fbt._("Displays the author, post or comment link, and any additional information", null, {
							hk: "1EN2HF"
						})
					}))))), r.a.createElement("tbody", null, e.map(e => r.a.createElement(Re, {
						key: e.id,
						action: e,
						currentPageUrl: t,
						moderator: u
					})))), r.a.createElement("div", {
						className: ze.a.bottomBarRow
					}, r.a.createElement(De.a, {
						prevButtonEnabled: i,
						prevTo: S(p),
						nextButtonEnabled: o,
						nextTo: S(b)
					})))
				}
			}
			t.a = Ve(Ge(Ke))
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.m.less": function(e, t, s) {
			e.exports = {
				NoResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				noResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				NoResultsText: "_3V0T64xptTp5xLaY-1nsaz",
				noResultsText: "_3V0T64xptTp5xLaY-1nsaz"
			}
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/ModerationPagesEmptyList/index.m.less"),
				i = s.n(r);
			const l = o.a.div("NoResultsContainer", i.a),
				d = o.a.div("NoResultsText", i.a);

			function c(e) {
				const {
					childrenPosition: t = "top"
				} = e;
				return a.a.createElement(l, {
					className: e.className
				}, "top" === t && e.children, a.a.createElement(d, null, e.text), "bottom" === t && e.children)
			}
		},
		"./src/reddit/components/ModeratorsList/AddModeratorModal/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "TOhrvfHoucDPr36mCCzXd",
				titleFontH2: "_3brDTRw250hGX1o5_C0hbB",
				titleFontH3: "_1wry80KT9v8gZ-OR85HxZU",
				titleFontH4: "_3UyiSE-qM-508iK8v3J9VE",
				titleFontH5: "_1X7-zzcj5Xf8vTf2xtYjK5",
				titleFontH6: "_2o19XEin0G5ad6iDvABrhH",
				metadataFont: "_1IpedXmIlnKyWpICNENnHX",
				flairFont: "_17kIb-dmfAlFCaIsLz34ar",
				labelsFont: "_3IrRBgoth_MxadAqzwGE2p",
				actionFont: "_1F_YPbXlF7ItI0z0j2Kdvy",
				smallButtonFont: "Irj9r66tO2hdWqbJx-vWa",
				largeButtonFont: "_26FBjOBHlTgNO9o-fMxWOX",
				strongTextFont: "_2umiFjo_kHT370YVhqkBUV",
				tabFont: "_1DLO-Qu2r3PHt-swAklwVx",
				buttonFontXS: "_2v4AgLqNSVXbMZLYk9vcId",
				buttonFontXs: "_2v4AgLqNSVXbMZLYk9vcId",
				buttonFontS: "_2MZUL_NnTj8rQV3EzNYnUE",
				buttonFontM: "_3cvFNq2HJE_JQWxO1GFYqj",
				buttonFontL: "_3PGa9K2pADItl7cyT0ykh_",
				buttonFontXL: "_1ZxChwU_-XfEgc5UHBhcTo",
				buttonFontXl: "_1ZxChwU_-XfEgc5UHBhcTo",
				bodyFontH1: "czPuE4HoIQInpzrURaqrX",
				bodyFontH2: "_1RMqo3EKzteTfSdM5Q-OSg",
				bodyFontH3: "_1SHo5_8OixTqxTjJ466mw1",
				bodyFontH4: "_3_zdAqdo55tnx5RHhyuGVr",
				bodyFontH5: "_22jno3ihRm-Ef63KN0Wuxa",
				bodyFontH6: "_28OREyYTHZDHgLjcK4pt_d",
				bodyFontH6Small: "_2TEwXCwEPVa9d9qN9FdZkk",
				bodyFont: "_38nKHi6IDujIOM7SuazWPd",
				bodyFontSmall: "_1lPuNthSPFYSROqTVgJlNG",
				bodyFontMono: "_3C9ynyJ6Z174Fb3-8O20xa",
				footer: "_1a_UtwKPW009WQq9JDInTY",
				checkbox: "hXaFasafnItuHCckiO50p",
				checkboxDescription: "_2HjmM9sJH5PNkLQde58pxS",
				checkboxContainer: "_15zz-Q8aRGCDeqROyYsa6f",
				divider: "_1QbYDWR424D6xhw9foYGiP",
				primaryButton: "h4QlBfFmd6UnAtiNaOhcR",
				SecondaryText: "jJBOgTxr1pZp_VDUmHpJ3",
				secondaryText: "jJBOgTxr1pZp_VDUmHpJ3",
				ModalBody: "_2UK71LqBvNes-Kto-uSxfU",
				modalBody: "_2UK71LqBvNes-Kto-uSxfU",
				automodMore: "_2IpMI7l5irmIV4rSq0_hXy"
			}
		},
		"./src/reddit/components/ModeratorsList/InvitePendingModal.m.less": function(e, t, s) {
			e.exports = {
				ModalText: "LuEOOX6cpsihxJHcF5aDv",
				modalText: "LuEOOX6cpsihxJHcF5aDv",
				ModalTextBold: "_3FiaV5-fR6fAX63py6Vyzz",
				modalTextBold: "_3FiaV5-fR6fAX63py6Vyzz",
				PrimaryButton: "_1s7NYS-cterYTwRKWqmaY6",
				primaryButton: "_1s7NYS-cterYTwRKWqmaY6",
				SecondaryButton: "_31o7G_2349tIzHKunBJEua",
				secondaryButton: "_31o7G_2349tIzHKunBJEua",
				Section: "K3DxSh_MxIy1lMkeHIPMc",
				section: "K3DxSh_MxIy1lMkeHIPMc",
				Image: "_2kAbqMQ0IHDV7bXgZ6Jsmf",
				image: "_2kAbqMQ0IHDV7bXgZ6Jsmf",
				ModalMain: "_3Nec6X3UqKJgLUGDaw4NCq",
				modalMain: "_3Nec6X3UqKJgLUGDaw4NCq"
			}
		},
		"./src/reddit/components/ModeratorsList/InvitedModeratorsList.m.less": function(e, t, s) {
			e.exports = {
				ListTitle: "_1LuVAChAgGbcgUPh_K7ebp",
				listTitle: "_1LuVAChAgGbcgUPh_K7ebp",
				ListContainer: "_1IFQy3zyz-Lgs7iYZtQaPI",
				listContainer: "_1IFQy3zyz-Lgs7iYZtQaPI"
			}
		},
		"./src/reddit/components/ModeratorsList/Moderator.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "_2Pdzq06b5akGcY4hZ05n_5",
				pencilIcon: "_2Pdzq06b5akGcY4hZ05n_5",
				TrashIcon: "_2TU9GRodUTR72kz4zcFzxJ",
				trashIcon: "_2TU9GRodUTR72kz4zcFzxJ",
				InteractiveDiv: "qaNZ40bbce8HBshNk04f0",
				interactiveDiv: "qaNZ40bbce8HBshNk04f0"
			}
		},
		"./src/reddit/components/ModeratorsList/ResignAsModeratorModal/index.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_3j2WCnh8ZjDRHIILJwKzkx",
				primaryButton: "_3j2WCnh8ZjDRHIILJwKzkx"
			}
		},
		"./src/reddit/components/ModeratorsList/index.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "_3s9PIWHO5f49Yj01FelAkk",
				listContainer: "_3s9PIWHO5f49Yj01FelAkk",
				SecondaryButton: "_3wQwmI4Vsj0qouIT5DTZo",
				secondaryButton: "_3wQwmI4Vsj0qouIT5DTZo",
				EditableTitle: "_1IBuDqoejky7tmj25quCUh",
				editableTitle: "_1IBuDqoejky7tmj25quCUh",
				UsersLoading: "_1oLmt3eyMItCQozx1nTk1E",
				usersLoading: "_1oLmt3eyMItCQozx1nTk1E"
			}
		},
		"./src/reddit/components/ModeratorsList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/stripQueryParams/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/subredditModeration/index.ts"),
				b = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				h = s("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				g = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				x = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				E = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				C = s("./src/reddit/models/SubredditModeration/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/meta.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/subredditModeration.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				N = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/asModal/index.tsx")),
				I = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				T = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				M = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				P = s("./src/reddit/controls/TextButton/index.tsx"),
				R = s("./src/reddit/helpers/isValidUsername/index.tsx"),
				A = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				F = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				D = s("./src/reddit/components/ModeratorsList/AddModeratorModal/index.m.less"),
				L = s.n(D);
			const U = e => {
					switch (e) {
						case F.c.access:
							return a.fbt._("Manage Users", null, {
								hk: "2cVPGG"
							});
						case F.c.config:
							return a.fbt._("Manage Settings", null, {
								hk: "10NyX"
							});
						case "chat_config":
						case F.c.chatConfig:
							return a.fbt._("Create Live Chats", null, {
								hk: "2OsHBQ"
							});
						case "chat_operator":
						case F.c.chatOperator:
							return a.fbt._("Monitor Chats", null, {
								hk: "3x751K"
							});
						case F.c.flair:
							return a.fbt._("Manage Flair", null, {
								hk: "IgS6W"
							});
						case F.c.mail:
							return a.fbt._("Manage Mod Mail", null, {
								hk: "1H5qJm"
							});
						case F.c.posts:
							return a.fbt._("Manage Posts & Comments", null, {
								hk: "1IVGI9"
							});
						case F.c.wiki:
							return a.fbt._("Manage Wiki Pages", null, {
								hk: "4gZJ2V"
							});
						case F.c.all:
						default:
							return a.fbt._("Everything", null, {
								hk: "24E26J"
							})
					}
				},
				B = (e, t) => {
					switch (e) {
						case F.c.access:
							return t ? a.fbt._("Access mod notes, ban and mute users, and approve submitters*.", null, {
								hk: "24IuB9"
							}) : a.fbt._("Approve submitters and ban and mute users*.", null, {
								hk: "KndNL"
							});
						case F.c.config:
							return a.fbt._("Manage community settings, appearance, emojis, rules, and AutoMod*.", null, {
								hk: "4djZSI"
							});
						case "chat_config":
						case F.c.chatConfig:
							return a.fbt._("Create live chat posts in this community.", null, {
								hk: "1Hxgd8"
							});
						case "chat_operator":
						case F.c.chatOperator:
							return a.fbt._("Remove messages, remove users, and lock chats.", null, {
								hk: "TFYA1"
							});
						case F.c.flair:
							return a.fbt._("Create and manage user and post flair.", null, {
								hk: "1oN7ft"
							});
						case F.c.mail:
							return a.fbt._("Read and respond to modmail and mute users*.", null, {
								hk: "2F8Yd"
							});
						case F.c.posts:
							return a.fbt._("Access queues, take action on content, and manage collections and events.", null, {
								hk: "vJ5lR"
							});
						case F.c.wiki:
							return a.fbt._("Create and manage wiki pages and AutoMod*.", null, {
								hk: "JarEL"
							});
						case F.c.all:
						default:
							return a.fbt._("Full access including the ability to manage moderator access and permissions.", null, {
								hk: "2r1vEj"
							})
					}
				},
				H = Object(i.b)(null, (e, t) => {
					let {
						subredditId: s,
						after: n,
						before: a
					} = t;
					return {
						addModerator: (t, n) => e(Object(p.b)(s, t, n)),
						editModerator: (t, n, a) => e(Object(p.d)(s, t, n, a)),
						removeModerator: t => e(Object(p.k)(s, t, n, a))
					}
				}),
				W = c.a.span("SecondaryText", L.a),
				z = c.a.wrapped(I.e, "ModalBody", L.a);
			class V extends r.a.Component {
				constructor(e) {
					super(e), this.onUsernameChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.toggleSelect = (e, t) => {
						if (this.props.isEditingSelf) return;
						const s = {
							...this.state.permissions,
							[e]: !t
						};
						"all" === e ? Object.keys(s).forEach(e => s[e] = s.all) : s[e] || (s.all = !1), this.setState({
							permissions: s
						}), this.props.sendEventWithName("permission")()
					}, this.onSubmit = e => {
						e.preventDefault();
						const {
							props: t,
							state: s
						} = this;
						t.isEditingSelf ? t.toggleModal() : (t.isEditingPerms && t.user ? (t.editModerator(s.username, s.permissions, t.user.id), t.sendEventWithName("edit")()) : (t.addModerator(s.username, s.permissions), t.sendEventWithName("invite_moderator")()), t.toggleModal())
					}, this.onRemove = () => {
						this.props.user && (this.props.removeModerator(this.props.user.id), this.props.sendEventWithName("remove")()), this.props.toggleModal()
					}, this.state = {
						username: e.user ? e.user.username : "",
						permissions: e.user ? e.user.modPermissions : F.a
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = ["all", ...Object.keys(t.permissions).filter(t => !["all", ...e.isLivePostCreatorModRoleEnabled ? ["chat_operator", F.c.chatOperator] : []].includes(t))];
					return r.a.createElement(z, null, r.a.createElement(I.i, null, r.a.createElement(A.a, null, r.a.createElement(I.q, null, e.isEditingPerms ? a.fbt._("Edit", null, {
						hk: "1nftDt"
					}) : a.fbt._("Invite Moderators", null, {
						hk: "hkBh1"
					}), e.username && a.fbt._(": u/{username}", [a.fbt._param("username", e.username)], {
						hk: "2FWWEd"
					})), r.a.createElement(P.a, {
						onClick: e.toggleModal
					}, r.a.createElement(I.b, null)))), r.a.createElement("form", {
						onSubmit: this.onSubmit
					}, r.a.createElement(I.l, null, !e.isEditingPerms && r.a.createElement(I.h, null, r.a.createElement(T.d, {
						autoFocus: !0,
						placeholder: a.fbt._("Enter Username", null, {
							hk: "2fYsDe"
						}),
						onChange: this.onUsernameChange
					})), r.a.createElement(I.q, null, e.isEditingSelf ? r.a.createElement(r.a.Fragment, null, a.fbt._("Access", null, {
						hk: "2We3HN"
					}), r.a.createElement(W, null, a.fbt._("(can't edit)", null, {
						hk: "3LZvZi"
					}))) : a.fbt._("Give them access to...", null, {
						hk: "1DzYmU"
					})), t.permissions && s.map((s, n) => r.a.createElement("div", {
						className: L.a.checkboxContainer,
						key: s
					}, r.a.createElement(M.a, {
						autoFocus: !(!e.isEditingPerms || 0 !== n) || void 0,
						className: L.a.checkbox,
						disabled: e.isEditingSelf,
						isSelected: t.permissions[s],
						onClick: () => this.toggleSelect(s, t.permissions[s]),
						text: U(s)
					}), r.a.createElement("p", {
						className: L.a.checkboxDescription
					}, B(s, e.isModWithUserNotesPermissions)), "all" === s && r.a.createElement("hr", {
						className: L.a.divider
					}))), r.a.createElement("p", {
						className: L.a.automodMore
					}, a.fbt._("*Note: To manage AutoMod, mods must have access to Wiki Pages and Manage Settings. To mute users, mods must have access to Mod Mail and Manage Users.", null, {
						hk: "1AYX38"
					}))), r.a.createElement(I.g, {
						className: L.a.footer
					}, r.a.createElement(k.l, {
						className: L.a.primaryButton,
						"data-redditstyle": !0,
						disabled: !e.username && !Object(R.a)(t.username),
						type: "submit"
					}, e.isEditingPerms ? a.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : a.fbt._("Invite", null, {
						hk: "2F1syY"
					})), r.a.createElement(I.a, {
						autoFocus: !!e.isEditingSelf || void 0,
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.isEditingPerms && !e.isEditingSelf && r.a.createElement(I.s, {
						onClick: this.onRemove,
						"data-redditstyle": !0
					}, a.fbt._("Remove", null, {
						hk: "3tYl0U"
					})))))
				}
			}
			var q = Object(N.a)(H(V)),
				G = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/selectors/telemetry.ts");
			const X = e => ({
					screen: Q.Z(e),
					subreddit: Q.hb(e)
				}),
				J = e => t => ({
					source: "remove_mod_invite",
					action: "click",
					noun: e,
					...X(t)
				});
			var Y = s("./src/lib/constants/index.ts"),
				Z = s("./src/reddit/components/HumanDate/index.tsx"),
				$ = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ee = s("./src/reddit/icons/svgs/Trash/index.tsx"),
				te = s("./src/reddit/components/ModeratorsList/Moderator.m.less"),
				se = s.n(te);
			const ne = e => {
					const t = [],
						s = Object.keys(e);
					return e.all ? U("all") : (s.forEach((function(s) {
						e[s] && t.push(U(s))
					})), 0 === t.length ? a.fbt._("No permissions", null, {
						hk: "3eH05z"
					}) : t.join(", "))
				},
				ae = c.a.wrapped($.a, "PencilIcon", se.a),
				oe = c.a.wrapped(ee.a, "TrashIcon", se.a),
				re = c.a.div("InteractiveDiv", se.a),
				ie = e => r.a.createElement(re, {
					onClick: e.onClick
				}, e.moderatorType === C.c.Editable ? r.a.createElement(ae, null) : r.a.createElement(oe, null));
			var le = e => r.a.createElement(E.b, {
					additionalText: ne(e.moderator.modPermissions),
					pageName: Y.gc.Moderators,
					primaryButton: e.moderatorType && e.onClick && r.a.createElement(ie, {
						onClick: e.onClick,
						moderatorType: e.moderatorType
					}),
					timeAgo: r.a.createElement(Z.d, {
						seconds: e.moderator.moddedAtUTC
					}),
					subredditId: e.subredditId,
					userIcon: e.moderator.accountIcon,
					username: e.moderator.username,
					moderatorType: e.moderatorType
				}),
				de = s("./src/reddit/components/ModeratorsList/InvitedModeratorsList.m.less"),
				ce = s.n(de);
			const me = c.a.div("ListTitle", ce.a),
				ue = c.a.div("ListContainer", ce.a),
				pe = Object(l.c)({
					invitedModeratorsList: w.f,
					isConfirmModalOpen: Object(y.b)("ModerationPage--Modal--RemoveModeratorConfirmation")
				});
			class be extends r.a.Component {
				constructor(e) {
					super(e), this.onToggleRemovalModal = e => {
						this.setState({
							selectedModerator: e
						}), this.props.toggleConfirmUserActionModal(), e && this.props.sendEventWithName("remove_mod_invite")()
					}, this.state = {
						selectedModerator: void 0
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (0 === e.invitedModeratorsList.length) return null;
					const s = () => this.props.sendEvent(J("cancel"));
					return r.a.createElement("div", null, r.a.createElement(me, null, a.fbt._("Invited moderators", null, {
						hk: "2UdpbF"
					})), r.a.createElement(ue, null, e.invitedModeratorsList.map(t => r.a.createElement(le, {
						key: t.id,
						moderator: t,
						moderatorType: C.c.Invited,
						onClick: () => this.onToggleRemovalModal(t),
						subredditId: e.subredditId
					}))), e.isConfirmModalOpen && t.selectedModerator && r.a.createElement(G.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						modalText: a.fbt._("Are you sure you want to rescind the moderator invite to {username}?", [a.fbt._param("username", t.selectedModerator.username)], {
							hk: "3Z7yAI"
						}),
						onConfirm: () => e.removeInvitedModerator(t.selectedModerator.id),
						toggleModal: this.onToggleRemovalModal,
						onCancel: s,
						onClose: s,
						trackClick: () => this.props.sendEvent(J("remove"))
					}))
				}
			}
			var he = Object(i.b)(pe, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						removeInvitedModerator: t => e(Object(p.j)(s, t)),
						toggleConfirmUserActionModal: () => e(Object(u.i)("ModerationPage--Modal--RemoveModeratorConfirmation"))
					}
				})(Object(K.c)(be)),
				ge = s("./src/reddit/components/ModeratorsList/InvitePendingModal.m.less"),
				fe = s.n(ge);
			const {
				fbt: xe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = Object(i.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					acceptInvite: () => e(Object(p.a)(s)),
					declineInvite: () => e(Object(p.c)(s))
				}
			}), ve = c.a.wrapped(I.p, "ModalText", fe.a), ke = c.a.wrapped(ve, "ModalTextBold", fe.a), _e = c.a.wrapped(k.l, "PrimaryButton", fe.a), Ce = c.a.wrapped(k.o, "SecondaryButton", fe.a), ye = c.a.div("Section", fe.a), Oe = c.a.img("Image", fe.a), je = c.a.wrapped(I.l, "ModalMain", fe.a);
			var we = Object(N.a)(Ee(e => r.a.createElement(I.e, null, r.a.createElement(je, null, r.a.createElement(A.a, null, r.a.createElement("div", null), r.a.createElement(P.a, {
					onClick: e.toggleModal
				}, r.a.createElement(I.b, null))), r.a.createElement(ye, null, r.a.createElement(Oe, {
					src: `${n.a.assetPath}/img/snoo-success@2x.png`
				})), r.a.createElement(ke, null, xe._("Congrats!", null, {
					hk: "T4Ccw"
				})), r.a.createElement(ve, null, xe._("You are invited to become a moderator!", null, {
					hk: "1jRLWz"
				}))), r.a.createElement(I.g, null, r.a.createElement(Ce, {
					onClick: t => {
						e.toggleModal(), e.declineInvite(), e.sendEventWithName("declineinvite")()
					},
					"data-redditstyle": !0
				}, xe._("Decline", null, {
					hk: "1iOsJe"
				})), r.a.createElement(_e, {
					onClick: t => {
						e.toggleModal(), e.acceptInvite(), e.sendEventWithName("acceptinvite")()
					},
					"data-redditstyle": !0
				}, xe._("Accept", null, {
					hk: "2fkYc4"
				})))))),
				Se = s("./src/reddit/components/ModeratorsList/ResignAsModeratorModal/index.m.less"),
				Ne = s.n(Se);
			const {
				fbt: Ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Te = Object(i.b)(null, (e, t) => {
				let {
					subredditId: s,
					userId: n,
					after: a,
					before: o
				} = t;
				return {
					removeModerator: () => e(Object(p.k)(s, n, a, o))
				}
			}), Me = c.a.wrapped(k.l, "PrimaryButton", Ne.a);
			class Pe extends r.a.Component {
				constructor() {
					super(...arguments), this.onRemove = () => {
						this.props.removeModerator(), this.props.sendEventWithName("resign")(), this.props.toggleModal()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(I.e, null, r.a.createElement(I.i, null, r.a.createElement(A.a, null, r.a.createElement(I.q, null, Ie._("Leave as mod", null, {
						hk: "3ajWeG"
					})), r.a.createElement(P.a, {
						onClick: e.toggleModal
					}, r.a.createElement(I.b, null)))), r.a.createElement(I.l, null, r.a.createElement(I.p, null, Ie._("Once you leave as a mod, you will lose mod permissions and will be unable to access any mod tools for this community. Are you sure you wish to leave as a mod of this community?", null, {
						hk: "4qm9md"
					}))), r.a.createElement(I.g, null, r.a.createElement(I.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, Ie._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(Me, {
						onClick: this.onRemove,
						"data-redditstyle": !0
					}, Ie._("Leave", null, {
						hk: "2ZHZVX"
					}))))
				}
			}
			var Re = Object(N.a)(Te(Pe)),
				Ae = s("./src/reddit/selectors/experiments/chat.ts"),
				Fe = s("./src/reddit/components/ModeratorsList/index.m.less"),
				De = s.n(Fe);
			const Le = c.a.div("ListContainer", De.a),
				Ue = c.a.wrapped(k.o, "SecondaryButton", De.a),
				Be = Object(v.u)({
					currentPageUrl: v.f
				}),
				He = Object(l.c)({
					currentUser: S.k,
					nextAfterToken: w.k,
					nextAfterEditableToken: w.c,
					nextBeforeToken: w.l,
					nextBeforeEditableToken: w.d,
					editableModerators: w.e,
					editableModeratorsList: w.b,
					isInvitePending: w.h,
					moderators: w.o,
					moderatorsList: w.j,
					moderatorPermissions: j.n,
					isAddUserModalOpen: Object(y.b)("ModerationPage--Modal--AddModerator"),
					isEditableListPending: w.a,
					isInvitePendingModalOpen: Object(y.b)("ModerationPage--Modal--InvitePending"),
					isLivePostCreatorModRoleEnabled: Ae.e,
					isModeratorListPending: w.i,
					isResignAsModeratorModalOpen: Object(y.b)("ModerationPage--Modal--Resign"),
					origin: O.j,
					searchPending: w.m,
					searchResult: w.n,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(j.i)(e, s)
					}
				}),
				We = Object(i.b)(He, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						searchForModerator: t => e(Object(p.h)(s, t)),
						toggleAddModeratorModal: () => e(Object(u.i)("ModerationPage--Modal--AddModerator")),
						toggleInvitePendingModal: () => e(Object(u.i)("ModerationPage--Modal--InvitePending")),
						toggleResignAsModModal: () => e(Object(u.i)("ModerationPage--Modal--Resign"))
					}
				}),
				ze = c.a.div("EditableTitle", De.a),
				Ve = c.a.wrapped(E.a, "UsersLoading", De.a);
			class qe extends r.a.Component {
				constructor() {
					super(...arguments), this.state = C.a, this.toggleModal = (e, t) => () => {
						this.setState({
							userId: e,
							username: t
						}), this.props.isAddUserModalOpen || t || this.props.sendEventWithName("open_invite_dialog")(), this.props.toggleAddModeratorModal()
					}, this.onSearch = e => {
						this.props.searchForModerator(e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.isButtonEnabled = (e, t) => !!(e && e.length > 0 && t), this.isModeratorsListPaginated = () => !(!this.props.nextBeforeToken && !this.props.nextAfterToken), this.renderEditableList = e => {
						const t = !(!e.nextBeforeEditableToken && !e.nextAfterEditableToken),
							s = e.isEditableListPending || e.isModeratorListPending;
						return r.a.createElement(r.a.Fragment, null, r.a.createElement(ze, null, a.fbt._("You can edit these moderators", null, {
							hk: "1KTZtm"
						})), t && r.a.createElement(x.a, null, r.a.createElement(h.a, {
							prevButtonEnabled: this.isButtonEnabled(e.editableModeratorsList, e.nextBeforeEditableToken),
							prevTo: Object(d.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
								before: e.before,
								beforeEditable: e.nextBeforeEditableToken,
								after: e.after
							}),
							nextButtonEnabled: this.isButtonEnabled(e.editableModeratorsList, e.nextAfterEditableToken),
							nextTo: Object(d.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
								after: e.after,
								afterEditable: e.nextAfterEditableToken,
								before: e.before
							})
						})), r.a.createElement(Le, null, e.editableModeratorsList && e.editableModeratorsList.length > 0 ? e.editableModeratorsList.map(e => r.a.createElement(le, {
							key: e.id,
							moderator: e,
							moderatorType: C.c.Editable,
							onClick: this.toggleModal(e.id, e.username),
							subredditId: this.props.subredditId
						})) : s ? r.a.createElement(Ve, null) : null))
					}
				}
				componentDidMount() {
					this.props.isInvitePending && !this.props.isInvitePendingModalOpen && this.props.toggleInvitePendingModal()
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = !!e.moderatorPermissions, o = Object(_.a)(e.moderatorPermissions);
					return r.a.createElement(r.a.Fragment, null, s && r.a.createElement(g.c, null, r.a.createElement(Ue, {
						onClick: e.toggleResignAsModModal
					}, a.fbt._("Leave as mod", null, {
						hk: "3TwqTg"
					})), o && r.a.createElement(k.l, {
						onClick: this.toggleModal(null, null)
					}, a.fbt._("Invite user as mod", null, {
						hk: "3lJRJW"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Moderators of {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
						hk: "3p7NwA"
					}), r.a.createElement(b.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009381491`
					})), r.a.createElement(x.b, {
						onSearch: this.onSearch,
						activeSearchQuery: t.searchTerm
					}, !t.searchTerm && this.isModeratorsListPaginated() && r.a.createElement(h.a, {
						prevButtonEnabled: this.isButtonEnabled(e.moderatorsList, e.nextBeforeToken),
						prevTo: Object(d.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
							afterEditable: e.afterEditable,
							before: e.nextBeforeToken,
							beforeEditable: e.beforeEditable
						}),
						nextButtonEnabled: this.isButtonEnabled(e.moderatorsList, e.nextAfterToken),
						nextTo: Object(d.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
							after: e.nextAfterToken,
							afterEditable: e.afterEditable,
							beforeEditable: e.beforeEditable
						})
					})), t.searchTerm ? r.a.createElement(f.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && r.a.createElement(le, {
						moderator: e.searchResult,
						moderatorType: e.searchResult.isEditable ? C.c.Editable : void 0,
						onClick: e.searchResult.isEditable ? this.toggleModal(e.searchResult.id, e.searchResult.username) : void 0,
						subredditId: e.subredditId
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Le, null, e.moderatorsList && e.moderatorsList.length > 0 ? e.moderatorsList.map(e => r.a.createElement(le, {
						key: e.id,
						moderator: e,
						subredditId: this.props.subredditId
					})) : e.isModeratorListPending ? r.a.createElement(Ve, null) : null), o && r.a.createElement(r.a.Fragment, null, this.renderEditableList(e), r.a.createElement(he, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId
					})))), e.isAddUserModalOpen && r.a.createElement(q, {
						ignoreDefaultFocus: !0,
						after: e.afterEditable,
						before: e.beforeEditable,
						subredditId: e.subredditId,
						sendEventWithName: e.sendEventWithName,
						toggleModal: this.toggleModal(null, null),
						isEditingPerms: !!t.username,
						isEditingSelf: !(!t.userId || !e.currentUser) && t.userId === e.currentUser.id,
						username: t.username,
						user: t.userId && e.editableModerators ? e.editableModerators[t.userId] : null,
						withOverlay: !0,
						isModWithUserNotesPermissions: e.isModWithUserNotesPermissions,
						isLivePostCreatorModRoleEnabled: e.isLivePostCreatorModRoleEnabled
					}), e.currentUser && e.isResignAsModeratorModalOpen && r.a.createElement(Re, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId,
						toggleModal: e.toggleResignAsModModal,
						userId: e.currentUser.id,
						withOverlay: !0
					}), e.isInvitePendingModalOpen && r.a.createElement(we, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId,
						toggleModal: e.toggleInvitePendingModal,
						withOverlay: !0
					}))
				}
			}
			t.a = Be(We(qe))
		},
		"./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less": function(e, t, s) {
			e.exports = {
				optionSearchBarContainer: "_3eVrzdp5khbz6W2NhQv7kl",
				optionSearchBarError: "_3va8RfTnDLBo2hfMm5URpu",
				optionSearchBarReadOnly: "_2siJVLOBn72IxBt8i_A1gZ",
				loadingIcon: "_3UsfWdV2CKiIs_EOeGhVxv",
				input: "_1OEtZmrYX2ct3ycV1AaUZS",
				hiddenInput: "_3WSlf55CAQYRdOxtxENgA7",
				optionsOverflowIndication: "_2qfFc8Ix-QpBqu8UNEXeH3"
			}
		},
		"./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				activeOption: "_2Kg5EXAuLcqhsBbdEr4SGZ",
				freeTextOption: "_2H29-4MOHAslt1eKYtcGaV",
				lastFixedOption: "_1ClyNNAK4vP9o_uoSwKe0Q",
				option: "_1xWVaijFIih7uj-n4FXzH2",
				availableOptionContainer: "T2jLhmuhOy8DeOHjz6WRG",
				addText: "_1OqThwyrfhl2eJ9YhWoy2I",
				optionsContainer: "_1ZmC1GBXYnksnMU9IrTAHd",
				relativeContainer: "_3SrGeaD5FxXfpWjhSAFBD-",
				dropdown: "_2dqCXnStO_Dc8Srt_lJqVj",
				dropdownHeaderText: "_2EaXrPilAtjz6VRh_xvOGU"
			}
		},
		"./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less": function(e, t, s) {
			e.exports = {
				selectedOptionComponentContainer: "_3nUaRUcJJfrvOWldA3i10S",
				closeIcon: "_1RvgsgnXdbtv2cwTTTbT7o",
				selectedOptionComponentContainerError: "_2Qpr0YORGp3CmDjJW9Txrf"
			}
		},
		"./src/reddit/components/MultiOptionSelect/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/some.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/constants/keycodes.ts"),
				d = s("./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less"),
				c = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class u extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.handleOptionSelected(this.props.index)
					}, this.handleMouseEnter = () => {
						this.props.handleOnMouseEnter(this.props.index)
					}
				}
				shouldComponentUpdate(e) {
					return e.className !== this.props.className || e.divRef !== this.props.divRef || e.displayText !== this.props.displayText
				}
				render() {
					const {
						addText: e,
						displayText: t,
						divRef: s,
						handleOnMouseEnter: n,
						handleOptionSelected: a,
						index: o,
						className: l,
						...d
					} = this.props;
					return r.a.createElement("div", m({
						className: Object(i.a)(c.a.availableOptionContainer, l)
					}, d, {
						onMouseEnter: this.handleMouseEnter,
						onClick: this.handleClick,
						ref: s
					}), e && r.a.createElement("span", {
						className: c.a.addText
					}, e, " "), t)
				}
			}
			class p extends r.a.Component {
				constructor(e) {
					super(e), this.handleOptionSelectedByIndex = e => {
						this.props.selectableOptions[e] && this.handleOptionSelected(this.props.selectableOptions[e])
					}, this.handleFreeTextOptionSelected = () => {
						this.handleOptionSelected({
							id: null,
							displayText: this.props.currentInput,
							selected: !0
						})
					}, this.clearSelectedIndex = () => {
						this.setSelectedIndex(-1)
					}, this.setOptionActiveByIndex = e => {
						"number" == typeof e && e > -1 && this.setSelectedIndex(e)
					}, this.setFreeTextOptionActive = () => {
						this.setSelectedIndex(this.getOptionsLength() - 1)
					}, this.state = {
						selectedIndex: -1
					}, this.scrollContainer = r.a.createRef(), this.optionsContainer = r.a.createRef(), this.activeOptionDOMRef = r.a.createRef()
				}
				focus() {
					this.optionsContainer.current && this.optionsContainer.current.focus()
				}
				matchesDOMElement(e) {
					return this.optionsContainer.current === e
				}
				handleOptionSelected(e) {
					this.handleOptionsSelected([e])
				}
				handleOptionsSelected(e) {
					this.props.onOptionsChanged(e.map(e => ({
						...e,
						selected: !0
					})))
				}
				setSelectedIndex(e) {
					this.setState({
						selectedIndex: e
					})
				}
				freeTextEntryActive() {
					return this.props.allowFreeTextEntry && this.props.currentInput
				}
				getOptionsLength() {
					return this.freeTextEntryActive() ? this.props.selectableOptions.length + 1 : this.props.selectableOptions.length
				}
				freeTextOptionSelected() {
					return this.freeTextEntryActive() && this.state.selectedIndex === this.getOptionsLength() - 1
				}
				validOptionSelected() {
					return this.state.selectedIndex > -1 && this.state.selectedIndex < this.getOptionsLength()
				}
				handlePaste(e) {
					if (e.clipboardData.types.includes("text/plain")) return e.preventDefault(), e.stopPropagation(), void this.handleOptionsSelected(e.clipboardData.getData("text/plain").split(l.b.Comma).filter(e => !!e).map(e => ({
						id: null,
						displayText: e.trim(),
						selected: !0
					})))
				}
				handleKeyPress(e) {
					const {
						splitOnCommaPress: t
					} = this.props;
					return e.which === l.a.ArrowUp ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex - 1 > -1 ? this.state.selectedIndex - 1 : this.getOptionsLength() - 1)) : e.which === l.a.ArrowDown ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex + 1 < this.getOptionsLength() ? this.state.selectedIndex + 1 : 0)) : e.which === l.a.Comma && t ? (e.preventDefault(), e.stopPropagation(), this.handleFreeTextOptionSelected()) : e.which === l.a.Enter ? (e.preventDefault(), e.stopPropagation(), !this.validOptionSelected() || this.freeTextOptionSelected() ? this.handleFreeTextOptionSelected() : this.handleOptionSelected(this.props.selectableOptions[this.state.selectedIndex])) : void 0
				}
				componentDidUpdate() {
					if (!this.activeOptionDOMRef.current || !this.scrollContainer.current) return;
					const e = this.activeOptionDOMRef.current.getBoundingClientRect(),
						t = this.scrollContainer.current.getBoundingClientRect();
					if (e.top < t.top || e.bottom > t.bottom) {
						if (0 === this.state.selectedIndex) return void(this.scrollContainer.current.scrollTop = 0);
						if (e.top < t.top) return void(this.scrollContainer.current.scrollTop = this.activeOptionDOMRef.current.offsetTop);
						this.scrollContainer.current.scrollTop += e.bottom - t.bottom
					}
				}
				shouldRenderDropdownHeaderText() {
					return !!this.props.dropdownHeaderText && (!this.freeTextEntryActive() || this.props.selectableOptions.length > 0)
				}
				render() {
					return r.a.createElement("div", {
						className: c.a.relativeContainer
					}, r.a.createElement("div", {
						className: Object(i.a)(c.a.dropdown, this.props.className),
						ref: this.scrollContainer
					}, r.a.createElement("div", {
						ref: this.optionsContainer,
						tabIndex: -1,
						className: c.a.optionsContainer,
						onMouseOut: this.clearSelectedIndex
					}, this.shouldRenderDropdownHeaderText() && r.a.createElement("h3", {
						className: c.a.dropdownHeaderText
					}, this.props.dropdownHeaderText), this.props.selectableOptions.map((e, t) => {
						const s = [this.state.selectedIndex === t ? c.a.activeOption : c.a.option];
						return this.freeTextEntryActive() && t === this.props.selectableOptions.length - 1 && s.push(c.a.lastFixedOption), r.a.createElement(u, {
							key: e.id,
							className: Object(i.a)(...s),
							index: t,
							handleOptionSelected: this.handleOptionSelectedByIndex,
							handleOnMouseEnter: this.setOptionActiveByIndex,
							divRef: t === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
							displayText: e.displayText
						})
					}), this.freeTextEntryActive() && r.a.createElement(u, {
						key: "options-list-dropdown-free-text-option",
						className: Object(i.a)(c.a.freeTextOption, this.state.selectedIndex === this.getOptionsLength() - 1 ? c.a.activeOption : c.a.option),
						handleOptionSelected: () => this.handleFreeTextOptionSelected(),
						handleOnMouseEnter: this.setFreeTextOptionActive,
						divRef: this.getOptionsLength() - 1 === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
						addText: this.props.addText,
						displayText: this.props.currentInput
					}))))
				}
			}
			var b = s("./src/reddit/icons/svgs/Close/index.tsx"),
				h = s("./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less"),
				g = s.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = e => {
					const {
						className: t,
						innerRef: s,
						onClickHandler: n,
						option: a,
						maxLength: o,
						...l
					} = e, d = [g.a.selectedOptionComponentContainer, t];
					return o && o < a.displayText.length && d.push(g.a.selectedOptionComponentContainerError), r.a.createElement("div", f({
						className: Object(i.a)(...d),
						ref: s
					}, l, {
						onClick: n
					}), a.displayText, r.a.createElement(b.a, {
						className: g.a.closeIcon
					}))
				},
				E = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/helpers/readOnlyMode/index.ts"),
				k = s("./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less"),
				_ = s.n(k);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 10,
				O = e => e.stopPropagation();
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.handleKeyPress = e => {
						e.which !== l.a.Delete && e.which !== l.a.Backspace || !this.lastSelectedOptionComponentRef.current || "" !== this.props.value || (this.lastSelectedOptionComponentRef.current.focus(), e.preventDefault(), e.stopPropagation())
					}, this.handleMouseEnterSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !0
						})
					}, this.handleMouseLeaveSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !1
						})
					}, this.onSearchBarFocus = e => {
						Object(v.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
							isFocused: !0
						}), this.props.onFocus && this.inputRef.current === e.target && this.props.onFocus())
					}, this.onSearchBarBlur = e => {
						if (this.containerRef.current && e.relatedTarget && this.containerRef.current.contains(e.relatedTarget)) return e.preventDefault(), void e.stopPropagation();
						this.props.onBlur && this.props.onBlur(e), this.setState({
							isFocused: !1
						})
					}, this.inputRef = r.a.createRef(), this.containerRef = r.a.createRef(), this.lastSelectedOptionComponentRef = r.a.createRef(), this.state = {
						isHoveringOverSelectedOption: !1,
						isFocused: !1
					}
				}
				focus() {
					Object(v.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
						isFocused: !0
					}))
				}
				reset() {
					this.inputRef.current && (this.inputRef.current.value = "")
				}
				deselectOption(e) {
					this.props.onOptionsChanged([{
						...e,
						selected: !1
					}]), this.setState({
						isHoveringOverSelectedOption: !1
					})
				}
				onSelectedOptionComponentKeyDown(e, t) {
					this.state.isHoveringOverSelectedOption || e.which !== l.a.Delete && e.which !== l.a.Backspace || (e.preventDefault(), e.stopPropagation(), this.deselectOption(t), this.focus())
				}
				render() {
					const e = {};
					Object(v.c)(this.props.readOnlyMode) || (e.tabIndex = 0);
					const t = this.props.selectedOptionComponent || x,
						s = "number" == typeof this.props.maxOptionsToDisplay && this.props.options.length > this.props.maxOptionsToDisplay;
					return r.a.createElement("div", C({
						"aria-invalid": this.props.isError,
						className: Object(i.a)(this.props.className, _.a.optionSearchBarContainer, {
							[_.a.optionSearchBarError]: this.props.isError,
							[_.a.optionSearchBarReadOnly]: Object(v.c)(this.props.readOnlyMode)
						}),
						ref: this.containerRef,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur
					}, e), this.props.options.map((e, n) => {
						if (!(s && n >= (this.props.maxOptionsToDisplay || 0))) return r.a.createElement(t, {
							tabIndex: 0,
							onFocus: O,
							key: e.id || e.displayText,
							option: e,
							onKeyDown: t => this.onSelectedOptionComponentKeyDown(t, e),
							onClickHandler: () => {
								this.deselectOption(e), this.focus()
							},
							onMouseEnter: this.handleMouseEnterSelectedOptionComponent,
							onMouseLeave: this.handleMouseLeaveSelectedOptionComponent,
							maxLength: this.props.maxLength,
							innerRef: n === this.props.options.length - 1 ? this.lastSelectedOptionComponentRef : void 0
						})
					}), s && r.a.createElement("span", {
						className: _.a.optionsOverflowIndication
					}, `+${this.props.options.length-(this.props.maxOptionsToDisplay||0)}`), this.props.children, !Object(v.c)(this.props.readOnlyMode) && r.a.createElement("input", {
						className: Object(i.a)(_.a.input, {
							[_.a.hiddenInput]: Object(v.b)(this.props.readOnlyMode)
						}),
						ref: this.inputRef,
						type: "text",
						onKeyDown: this.handleKeyPress,
						value: this.props.value,
						onChange: this.props.onInputChanged,
						maxLength: this.props.maxLength
					}), this.props.isLoading && r.a.createElement(E.a, {
						className: _.a.loadingIcon,
						sizePx: y
					}), this.state.isFocused && r.a.createElement(p, {
						className: this.props.dropdownClassName,
						dropdownHeaderText: this.props.dropdownHeaderText,
						addText: this.props.addText,
						selectableOptions: this.props.selectableOptions,
						onOptionsChanged: this.props.onOptionsChanged,
						ref: this.props.dropdownRef,
						currentInput: this.props.value,
						allowFreeTextEntry: this.props.allowFreeTextEntry,
						splitOnCommaPress: this.props.splitOnCommaPress
					}))
				}
			}
			var w = s("./node_modules/reselect/es/index.js");
			const S = [],
				N = {};
			class I extends r.a.Component {
				constructor(e) {
					super(e), this._selectableOptionsSelector = Object(w.a)(e => e.availableOptions || S, e => e.input, (e, t) => e.filter(e => {
						const s = e.displayText.toLowerCase(),
							n = t.toLowerCase();
						return 0 === s.indexOf(n) || a()(s.split(/[\s\/]+/), e => 0 === e.indexOf(n))
					})), this.onSearchBarFocus = () => {
						Object(v.c)(this.props.readOnlyMode) || this.state.searchBarIsFocused || (this.setState({
							searchBarIsFocused: !0
						}), this.props.onSearchBarFocus && this.props.onSearchBarFocus())
					}, this.onSearchBarBlur = e => {
						if (!Object(v.c)(this.props.readOnlyMode)) return e.relatedTarget && this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.matchesDOMElement(e.relatedTarget) ? (e.stopPropagation(), e.preventDefault(), void setTimeout(() => {
							this.optionSearchBarRef.current && this.optionSearchBarRef.current.focus()
						}, 0)) : (this.setState({
							searchBarIsFocused: !1
						}), void(this.props.onSearchBarBlur && this.props.onSearchBarBlur(e)))
					}, this.setInput = e => {
						Object(v.b)(this.props.readOnlyMode) || this.props.input !== e && this.props.onInputChanged(e)
					}, this.onOptionChanged = e => {
						this.onOptionsChanged([e])
					}, this.onOptionsChanged = e => {
						this.props.onOptionsChanged(e), a()(e, e => !!e.selected) && this.setInput("")
					}, this.onInputChanged = e => {
						Object(v.b)(this.props.readOnlyMode) || this.setInput(e.currentTarget.value)
					}, this.onKeyDown = e => {
						Object(v.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handleKeyPress(e)
					}, this.onPaste = e => {
						Object(v.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handlePaste(e)
					}, this.state = {
						searchBarIsFocused: !1
					}, this.optionsListDropdownRef = r.a.createRef(), this.optionSearchBarRef = r.a.createRef()
				}
				getSelectableOptions() {
					return this._selectableOptionsSelector(this.props)
				}
				render() {
					const {
						childClassNames: e = N
					} = this.props;
					return r.a.createElement("div", {
						className: this.props.className,
						onKeyDown: this.onKeyDown,
						onPaste: this.onPaste
					}, r.a.createElement(j, {
						className: e.searchBarClassName,
						dropdownClassName: e.optionsListDropdownClassName,
						isError: this.props.isError,
						readOnlyMode: this.props.readOnlyMode || v.a.editable,
						isLoading: this.props.isLoading,
						ref: this.optionSearchBarRef,
						options: this.props.selectedOptions,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur,
						onOptionsChanged: this.onOptionsChanged,
						onInputChanged: this.onInputChanged,
						maxLength: this.props.maxOptionLength,
						maxOptionsToDisplay: this.props.maxOptionsToDisplay,
						value: this.props.input,
						dropdownHeaderText: this.props.dropdownHeaderText,
						addText: this.props.addText,
						allowFreeTextEntry: this.props.allowFreeTextEntry,
						selectableOptions: this.getSelectableOptions(),
						dropdownRef: this.optionsListDropdownRef,
						selectedOptionComponent: this.props.selectedOptionComponent,
						splitOnCommaPress: this.props.splitOnCommaPress
					}, this.props.children))
				}
			}
			t.a = I
		},
		"./src/reddit/components/MutedUserList/ExpandedComponent.m.less": function(e, t, s) {
			e.exports = {
				BannedBy: "_2004IKQq9AjT3xoiDBg7m_",
				bannedBy: "_2004IKQq9AjT3xoiDBg7m_",
				EmptyState: "_1O-zxip2q_mFxBe_WVFPZC",
				emptyState: "_1O-zxip2q_mFxBe_WVFPZC",
				ExpandedContainer: "_1EEdKUOD4OiTBBQQkot-L9",
				expandedContainer: "_1EEdKUOD4OiTBBQQkot-L9"
			}
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_16-AoomiQ2Zxycd1wA0ZL-",
				primaryButton: "_16-AoomiQ2Zxycd1wA0ZL-",
				ModalText: "_3P1niYqJc2au-fmA-xIl7i",
				modalText: "_3P1niYqJc2au-fmA-xIl7i"
			}
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/subredditModeration/mute.ts"),
				c = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/TextButton/index.tsx"),
				h = s("./src/reddit/helpers/isValidUsername/index.tsx"),
				g = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				f = s("./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.m.less"),
				x = s.n(f);
			const E = 300,
				v = Object(r.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						onMuteUser: (t, n) => e(Object(d.a)(s, t, n))
					}
				}),
				k = l.a.wrapped(p.l, "PrimaryButton", x.a),
				_ = l.a.wrapped(m.p, "ModalText", x.a);
			class C extends o.a.Component {
				constructor(e) {
					super(e), this.onUsernameChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onReasonChange = e => {
						this.setState({
							reason: e.currentTarget.value
						})
					}, this.onSubmit = () => {
						const e = this.state.username;
						this.props.onMuteUser(e, this.state.reason), this.props.trackAddEvent(), this.props.toggleModal()
					}, this.state = {
						username: this.props.username || "",
						reason: ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(m.e, null, o.a.createElement(m.i, null, o.a.createElement(g.a, null, o.a.createElement(m.q, null, n.fbt._("Mute user", null, {
						hk: "326ljo"
					}), e.username && `: u/${e.username}`), o.a.createElement(b.a, {
						onClick: e.toggleModal
					}, o.a.createElement(m.b, null)))), o.a.createElement(m.l, null, !e.username && o.a.createElement(m.h, null, o.a.createElement(u.d, {
						autoFocus: !0,
						placeholder: n.fbt._("Username to mute", null, {
							hk: "3GB7UW"
						}),
						onChange: this.onUsernameChange,
						value: this.state.username,
						"data-redditstyle": !0
					})), o.a.createElement(m.h, null, o.a.createElement(_, null, n.fbt._("Note about why they are muted", null, {
						hk: "12YIn5"
					})), o.a.createElement(m.f, null, n.fbt._("Only visible to other moderators. Not visible to user", null, {
						hk: "4Ahum2"
					}))), o.a.createElement(m.t, {
						maxLength: E,
						onChange: this.onReasonChange,
						placeholder: n.fbt._("Reason they were muted", null, {
							hk: "3E29Hf"
						}),
						value: this.state.reason,
						"data-redditstyle": !0
					}), o.a.createElement(c.a, {
						maxChars: E,
						text: this.state.reason
					})), o.a.createElement(m.g, null, o.a.createElement(m.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(k, {
						onClick: this.onSubmit,
						"data-redditstyle": !0,
						disabled: !e.username && !Object(h.a)(t.username)
					}, n.fbt._("Mute user", null, {
						hk: "1z1Ss8"
					}))))
				}
			}
			t.default = Object(i.a)(v(C))
		},
		"./src/reddit/components/MutedUserList/index.m.less": function(e, t, s) {
			e.exports = {
				MuteIcon: "XHViv8EEjdjsATc3T66r9",
				muteIcon: "XHViv8EEjdjsATc3T66r9"
			}
		},
		"./src/reddit/components/MutedUserList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/subredditModeration/mute.ts"),
				u = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				h = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				g = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = s("./src/reddit/components/Scroller/Simple.tsx"),
				x = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				E = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				k = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/SubredditModeration/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/muted.ts"),
				j = s("./src/reddit/components/MutedUserList/ExpandedComponent.m.less"),
				w = s.n(j),
				S = s("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = S.a.span("BannedBy", w.a), T = S.a.span("EmptyState", w.a), M = S.a.div("ExpandedContainer", w.a);
			var P = e => r.a.createElement(M, null, e.reason ? r.a.createElement(I, null, N._("Mod note {mutedByUsername}", [N._param("mutedByUsername", e.mutedBy)], {
					hk: "15D34v"
				})) : r.a.createElement(T, null, N._("No mod note.", null, {
					hk: "3rpIuv"
				})), e.reason),
				R = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				A = s("./src/reddit/components/MutedUserList/index.m.less"),
				F = s.n(A);
			const D = 24,
				L = Object(l.c)({
					isAddUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(y.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--RemoveUserConfirmation" === Object(y.a)(e),
					loadMoreToken: O.d,
					mutedUsers: O.g,
					mutedUsersListPending: O.c,
					searchPending: O.e,
					searchResult: O.f
				}),
				U = Object(i.b)(L, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						loadMore: t => e(Object(m.b)(s, {
							after: t
						})),
						searchForMutedUser: t => e(Object(m.c)(s, t)),
						toggleAddUserModal: () => e(Object(c.i)("ModerationPage--Modal--AddUser")),
						toggleUnmuteUserModal: () => e(Object(c.i)("ModerationPage--Modal--RemoveUserConfirmation")),
						unmuteUser: t => () => e(Object(m.d)(s, t))
					}
				});
			class B extends r.a.Component {
				constructor(e) {
					super(e), this.onSearch = e => {
						this.props.searchForMutedUser(e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.unmuteToggled = (e, t) => () => {
						this.setState({
							userId: e,
							username: t
						}), this.props.sendEventWithName("edit_user")(), this.props.toggleUnmuteUserModal()
					}, this.onLoadMore = () => {
						this.props.loadMoreToken && this.props.loadMore(this.props.loadMoreToken)
					}, this.muteUser = () => {
						this.props.toggleAddUserModal(), this.props.sendEventWithName("mute_dialog_mutepage")()
					}, this.renderMutedUser = e => r.a.createElement(v.b, {
						description: e.reason,
						expandedComponent: r.a.createElement(P, {
							mutedBy: e.mutedBy,
							reason: e.reason
						}),
						pageName: d.gc.Muted,
						primaryButton: r.a.createElement(k.r, {
							onClick: this.unmuteToggled(e.id, e.username)
						}, a.fbt._("Unmute", null, {
							hk: "334kKM"
						})),
						subredditId: this.props.subredditId,
						timeAgo: r.a.createElement(p.d, {
							seconds: e.mutedAtUTC
						}),
						userIcon: e.accountIcon,
						username: e.username
					}), this.renderMuteUserModal = () => r.a.createElement(R.a, {
						ignoreDefaultFocus: !0,
						trackAddEvent: this.props.sendEventWithName("add_mutepage"),
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleAddUserModal,
						withOverlay: !0
					}), this.state = C.a
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						mutedUsers: s
					} = e;
					let o;
					return s.length && (o = s[s.length - 1].id), e.mutedUsers.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(k.l, {
						onClick: this.muteUser
					}, a.fbt._("Mute user", null, {
						hk: "4AJ7nf"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Muted users", null, {
						hk: "2kc6Jt"
					}), r.a.createElement(h.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), r.a.createElement(E.b, {
						onSearch: this.onSearch,
						activeSearchQuery: t.searchTerm
					}), t.searchTerm ? r.a.createElement(x.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && this.renderMutedUser(e.searchResult)) : r.a.createElement(f.b, {
						loadMoreToken: o,
						onLoadMore: this.onLoadMore
					}, e.mutedUsers.map((e, t) => ({
						estHeight: D,
						id: e.id,
						render: () => this.renderMutedUser(e)
					})))), e.isAddUserModalOpen && this.renderMuteUserModal(), e.isConfirmModalOpen && t.userId && t.username && r.a.createElement(u.a, {
						actionText: a.fbt._("Unmute", null, {
							hk: "334kKM"
						}),
						modalText: a.fbt._("Are you sure you want to unmute {username}?", [a.fbt._param("username", t.username)], {
							hk: "2Pq8hv"
						}),
						onConfirm: e.unmuteUser(t.userId),
						toggleModal: e.toggleUnmuteUserModal,
						trackClick: e.sendEventWithName("remove"),
						withOverlay: !0
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(k.l, {
						onClick: this.muteUser
					}, a.fbt._("Mute user", null, {
						hk: "4AJ7nf"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Muted users", null, {
						hk: "2kc6Jt"
					}), r.a.createElement(h.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), e.mutedUsersListPending ? r.a.createElement(v.a, null) : r.a.createElement(b.c, {
						text: a.fbt._("No muted users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1o0lOP"
						})
					}, r.a.createElement(_.a, {
						name: "mod_mute",
						className: F.a.MuteIcon
					})), e.isAddUserModalOpen && this.renderMuteUserModal()))
				}
			}
			t.a = U(B)
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				c = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(c);
			const u = Object(r.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : a.a.createElement(i.b, {
					className: Object(o.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === l.g.Classic,
						[m.a.compactLayout]: s === l.g.Compact,
						[m.a.largeLayout]: s === l.g.Large
					}),
					content: t,
					rtJsonElementProps: u(n),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/Paginator/index.m.less": function(e, t, s) {
			e.exports = {
				controlRow: "_2ixigr45sqDsYvVlMBgbMm",
				nextButtonContainer: "CloCv22o0KvzOk8LzB4VX",
				prevButtonContainer: "_2Tfdm_mlb1NvgbaCCkMtdV",
				nextButton: "_1VFGYMJpiKtL_S9_RYS-CD",
				prevButton: "eX92mTA_HDG9gpfIzIGhs"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(l);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: r,
					post: l,
					redditStyle: m,
					theme: u,
					...p
				} = e;
				return a.a.createElement("div", c({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: r
				}, p), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				l = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = s("./src/reddit/hooks/useTracking.ts");
			var m = a.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(c.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(l.d(e.postId))
							})
						}, [s, e.postId]),
						r = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, r), a.a.createElement("div", {
						role: "presentation"
					}, a.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				E = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.m.less"),
				k = s.n(v);
			const _ = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(x.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(g.d)(e).pageType
				})),
				C = "post-container";
			class y extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: c,
						onClick: u,
						pageType: p,
						sendEvent: h,
						style: g,
						ref: x,
						shouldAddGalleryViewability: E = !0
					} = this.props, v = a.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => u && u(s, c, t, o, p))(s), c.id && o) {
								const {
									source: e
								} = Object(r.t)(c, o);
								e && e.outboundUrl && h(Object(l.c)(c.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(k.a.WrappedPost, n, `Post ${c.id}`, {
							promotedlink: c.isSponsored
						}),
						"data-testid": C,
						id: d ? d(c.id) : c.id,
						tabIndex: -1
					}, s), _ = !!c.media && c.media.type === b.o.VIDEO;
					return (e => c.media && Object(b.E)(c.media) && E ? a.a.createElement(m, {
						postId: c.id
					}, e) : e)((e => c.isSponsored || _ ? a.a.createElement(i.a, {
						post: c,
						trackDisplay: !0
					}, e) : e)(v))
				}
			}
			t.a = _(Object(E.a)(Object(u.c)(y)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				u = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(u);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: a
						} = this.props, o = !!n;
						a(e ? Object(m.o)({
							postId: s,
							isFollowed: o
						}) : Object(m.g)({
							postId: s,
							isFollowed: o
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, a = this.state.isHovered, r = s.isFollowed;
					let i = r ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return r && a && (i = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(l.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const h = Object(r.b)(() => Object(i.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(c.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				r = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? a.a.createElement(o.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * o.b - 2 * o.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : a.a.createElement(r.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				l = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/hooks/useClickSourceData.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/components/PostMeta/index.m.less"),
				_ = s.n(k);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: k,
					isOverlay: C,
					isTopicPage: y,
					post: O,
					shouldShowSubscribeButton: j,
					subredditOrProfile: w,
					tooltipType: S
				} = e, N = !!y, I = Object(E.a)(), T = Object(o.e)(e => !!w && Object(r.i)(e, w.id));
				return a.a.createElement("div", {
					className: _.a.metaContainer
				}, !n && !O.isSponsored && w && a.a.createElement(l.a, {
					postId: O.id,
					subredditName: w.name
				}, a.a.createElement(p.a, {
					className: _.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: w.url,
						state: I
					}
				}, w.displayText)), w && w.isQuarantined && a.a.createElement(u.a, null), !n && !O.isSponsored && w && j && !k && a.a.createElement(b.a, {
					className: _.a.SubscribeButton,
					getEventFactory: e => Object(x.k)(O.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(v.i)(w) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: O.id,
					size: g.d.XXS,
					small: !0
				}), !n && !O.isSponsored && a.a.createElement(f.b, null), !n && !O.isSponsored && a.a.createElement(d.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				}), a.a.createElement(m.d, {
					className: _.a.postTopMeta,
					flairStyleTemplate: t,
					post: O,
					tooltipType: S,
					isModWithUserNotesPermissions: T
				}), a.a.createElement(c.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!n,
					post: O,
					tooltipType: S
				}), !N && a.a.createElement(i.a, {
					hideCta: s,
					thing: O,
					tooltipType: C ? m.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: g,
					isOverlay: f,
					isVoteCountAnimation: x,
					postId: E,
					shouldShowUpvoteRatioOnHover: v
				} = e, k = `upvote-button-${t.id}${f?"-overlay":""}`;
				return a.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: g
				}, n && a.a.createElement(l.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), a.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: g,
					upvoteTooltipId: k,
					isVoteCountAnimation: x,
					isCountAnimShadowTestEnabled: p,
					postId: E,
					scoreClassName: Object(o.a)(u.a.score, {
						[u.a.allowPointerEvents]: v
					}),
					shouldShowUpvoteRatioOnHover: v
				}))
			}
		},
		"./src/reddit/components/PowerupsSettings/index.m.less": function(e, t, s) {
			e.exports = {
				contentContainer: "_2UnJkyErREO4UdPRO2_Nu_",
				formContainer: "_24DNbvpFOApkjl_aDxLQIe",
				emojiContainer: "KGb-9Fn_9opTkp9y4F7pK",
				emoteButtonContainer: "_3M018emNKEEexK1HjMZQTj",
				emoteButton: "_2f3AHI0QU_oQcjl8U5ZdRz",
				placeholderEmoteButton: "_2YQF3WYehiGNW2iR67S75X",
				uploadInput: "KmfMmSLuXzGdzc_3tPHy2",
				loadingContainer: "_2Z0VpSy4swcUtFNyxmSsg8",
				addButton: "_36wmuGVu3czQNqKncBoxBO",
				addButtonDisabled: "_3mYS-GLsakSC0Gu9a3ux8H",
				addIcon: "_3yRqzxOhoT1PNGoWZLh4bl"
			}
		},
		"./src/reddit/components/PowerupsSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return M
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/config.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/actions/gold/powerups.ts"),
				c = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				m = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/economics/powerups/index.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				g = s("./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx"),
				f = s("./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = s("./src/reddit/helpers/trackers/powerups.ts"),
				v = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				k = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/gold/powerups/index.ts"),
				C = s("./src/reddit/components/PowerupsSettings/index.m.less"),
				y = s.n(C);
			const O = e => {
				let {
					subredditId: t
				} = e;
				const s = Object(o.d)(),
					r = Object(l.a)(),
					[d, c] = Object(n.useState)(null),
					m = () => c(null),
					[C, O] = Object(n.useState)(!1),
					j = Object(o.e)(e => Object(_.g)(e, {
						subredditId: t
					})),
					{
						uploadInput: w,
						maxEmojisUploading: S,
						numUploading: N,
						onFileChange: I,
						onClickUpload: T
					} = Object(f.a)(t, j, e => {
						s(Object(b.f)({
							duration: b.a,
							kind: k.b.Error,
							text: i.fbt._({
								"*": "You can only add {number} more emojis.",
								_1: "You can only add 1 more emoji."
							}, [i.fbt._plural(e, "number")], {
								hk: "117Ker"
							})
						}))
					}, e => {
						r(Object(E.a)(e, "mod_tools"))
					}, e => {
						r(Object(E.o)(e, "mod_tools")), s(Object(b.f)({
							duration: b.a,
							kind: k.b.SuccessCommunity,
							text: i.fbt._({
								"*": "Looking good! Emojis added.",
								_1: "Looking good! Emoji added."
							}, [i.fbt._plural(e)], {
								hk: "43WkeN"
							})
						}))
					}, e => {
						s(Object(b.f)({
							duration: b.a,
							kind: k.b.Error,
							text: i.fbt._({
								"*": "Failed to upload {number} emojis",
								_1: "Failed to upload 1 emoji"
							}, [i.fbt._plural(e, "number")], {
								hk: "2s093I"
							})
						}))
					}),
					M = S;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("input", {
					ref: w,
					className: y.a.uploadInput,
					onChange: I,
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), N ? a.a.createElement("div", {
					className: y.a.loadingContainer
				}, a.a.createElement(v.a, {
					className: y.a.addIcon
				})) : a.a.createElement("button", {
					className: Object(u.a)(y.a.emoteButton, y.a.addButton, {
						[y.a.addButtonDisabled]: M
					}),
					disabled: M,
					onClick: T,
					title: i.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					})
				}, a.a.createElement(v.a, {
					className: y.a.addIcon
				})), j.map(e => a.a.createElement(h.a, {
					key: e.id,
					className: y.a.emoteButton,
					containerClassName: y.a.emoteButtonContainer,
					imageClassName: y.a.customEmoteImage,
					imagePath: e.emoji.path,
					onClickDelete: () => c(e),
					mouseEnterBufferTime: 0
				})), [...Array(N)].map((e, t) => a.a.createElement("div", {
					key: t,
					className: Object(u.a)(y.a.emoteButton, y.a.placeholderEmoteButton)
				}, a.a.createElement(x.a, {
					sizePx: 12,
					center: !0
				}))), d && a.a.createElement(g.a, {
					emojiUrl: d.emoji.path,
					onCancel: m,
					onClose: m,
					onConfirm: async () => {
						if (d && !C) try {
							O(!0), await s(Object(p.a)({
								subredditId: t,
								emojiId: d.id
							})), m(), r(Object(E.b)(1, "mod_tools")), s(Object(b.f)({
								duration: b.a,
								kind: k.b.SuccessCommunity,
								text: i.fbt._("Emoji removed.", null, {
									hk: "3Ox8xb"
								})
							}))
						} catch (e) {
							s(Object(b.f)({
								duration: b.a,
								kind: k.b.Error,
								text: i.fbt._("Failed to delete emoji", null, {
									hk: "2GukOR"
								})
							}))
						} finally {
							O(!1)
						}
					}
				}))
			};
			var j = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				w = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				S = s("./src/reddit/models/Gold/Powerups/index.ts"),
				N = s("./src/reddit/selectors/experiments/mediaInComments.ts"),
				I = s("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				T = s("./src/reddit/selectors/subreddit.ts");
			const M = e => {
				let {
					subredditId: t
				} = e;
				const s = Object(o.d)(),
					n = Object(l.a)(),
					u = Object(o.e)(e => Object(_.f)(e, {
						subredditId: t
					})),
					p = Object(o.e)(e => Object(T.U)(e, {
						subredditId: t
					})),
					b = Object(o.e)(e => Object(I.a)(e, {
						subredditId: t
					})),
					h = (null == b ? void 0 : b[S.a.CommentsWithGifs]) || !1,
					g = Object(o.e)(N.b);
				return a.a.createElement(m.a, {
					className: y.a.contentContainer
				}, a.a.createElement(m.b, null, i.fbt._("Powerups settings", null, {
					hk: "1OxM4K"
				}), a.a.createElement(c.a, {
					linkUrl: `${r.a.redditModHelpUrl}/hc/en-us/articles/4403699823629`
				})), a.a.createElement("div", {
					className: y.a.formContainer
				}, u && a.a.createElement(a.a.Fragment, null, a.a.createElement(j.a, null, i.fbt._("Comments", null, {
					hk: "1TCs6F"
				})), !g && a.a.createElement(w.p, {
					on: h,
					onClick: () => (e => {
						n(Object(E.q)("comments_with_gifs", e, !e)), s(Object(d.l)(t, {
							[S.a.CommentsWithGifs]: e
						}))
					})(!h),
					label: i.fbt._("Allow GIFs in comments", null, {
						hk: "2nJiHt"
					}),
					subtext: i.fbt._("It may take a few minutes to update", null, {
						hk: "aU7tk"
					})
				}), a.a.createElement(w.l, {
					label: i.fbt._("{subreddit name} emojis", [i.fbt._param("subreddit name", p.displayText)], {
						hk: "4tuD3i"
					}),
					subtext: i.fbt._("Add up to 20 custom emojis. Images under 128kb with a transparent background work the best.", null, {
						hk: "EAXAA"
					})
				}), a.a.createElement("div", {
					className: y.a.emojiContainer
				}, a.a.createElement(O, {
					subredditId: t
				})))))
			}
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(e, t, s) {
			e.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/ProgressBar/index.m.less"),
				i = s.n(r);
			t.a = e => {
				let {
					className: t,
					innerBarClassName: s,
					percent: n
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(i.a.outerBar, t)
				}, a.a.createElement("div", {
					className: Object(o.a)(i.a.innerBar, s),
					style: {
						width: `${n.toFixed(2)}%`
					}
				}))
			}
		},
		"./src/reddit/components/RecurringPostList/ChangePageButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_1i9YssSDgp0wmEC43VdLTX",
				prevButton: "_2IBDYNRoTxtwgs13LWRpeM",
				arrowIcon: "QD6Re7us6VNRFNYSiD6to",
				disabled: "_3Lm3n-nPFfEcJoNjVwcm3r"
			}
		},
		"./src/reddit/components/RecurringPostList/EditModal/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-RecurringPostList-EditModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-RecurringPostList-EditModal").then(s.bind(null, "./src/reddit/components/RecurringPostList/EditModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/RecurringPostList/EditModal/index.tsx"
				}
			})
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/ContentMeta/index.m.less": function(e, t, s) {
			e.exports = {
				contentRow: "Bt3uIal7yhwFSN9JorIng",
				contentRowMeta: "t6hD4d7F06TL2yv9vfp7h",
				title: "_3Evplg8YGmH6GDFsdQ0_nE",
				ownerName: "_215cUXwEuCE5hl0eYEIt_o",
				ownerNameContainer: "_2yAEv_Vw_ItUYbNbAjpSsL"
			}
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_29n8ITXzfA7e5YAUZXR5Tv",
				failedStateIndicator: "_3wJPsvksvDytrEsrrZd1vI",
				metaRow: "NjfRmSRZrEkWYNAACYBql",
				replayIcon: "_17pwQtUdmIHAeybqNegNzP",
				metaRowText: "qlCreM7NlHbkzV-xkEGE7",
				recurrenceRules: "rX2aiRDwgPF22x70hQxqp",
				parametricMetaData: "_3mlGpRO1Z1gZJkATQcRNHO",
				pencilIcon: "z5A_DxaYn2G2TQSSQCpi2"
			}
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return R
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/telemetry/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/scheduledPosts/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/AuthorLink/index.tsx"),
				u = s("./src/reddit/components/Thumbnail/index.tsx"),
				p = s("./src/reddit/components/RecurringPostList/Thumbnail/index.m.less"),
				b = s.n(p);
			var h = e => {
					let {
						post: t
					} = e;
					return a.a.createElement("div", {
						className: b.a.thumbnailContainer
					}, a.a.createElement(u.a, {
						post: t,
						contentTypeClassName: b.a.placeholderIcon
					}))
				},
				g = s("./src/reddit/components/ScheduledPost/index.tsx"),
				f = s("./src/reddit/models/ScheduledPost/index.ts"),
				x = s("./node_modules/reselect/es/index.js"),
				E = s("./src/reddit/components/RecurringPostList/RecurringPost/ContentMeta/index.m.less"),
				v = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(x.c)({
				media: (e, t) => {
					let {
						scheduledPost: s
					} = t;
					const n = {
							...g.b
						},
						a = s.postKind === f.e.LINK;
					return a && (n.media = null), {
						...n,
						isNSFW: s.isNsfw,
						title: s.title,
						...a && {
							source: s.url
						},
						pollData: s.poll
					}
				}
			});
			var C = Object(o.b)(_)(e => {
					const {
						scheduledPost: t
					} = e, {
						isPostAsMetaMod: s,
						owner: n
					} = t, o = s ? c.k : Object(f.o)(n) ? n.name : void 0;
					return a.a.createElement("div", {
						className: Object(i.a)(v.a.contentRow, e.className)
					}, a.a.createElement(h, {
						post: e.media
					}), a.a.createElement("div", {
						className: v.a.contentRowMeta
					}, a.a.createElement("div", {
						className: v.a.title
					}, e.scheduledPost.title), a.a.createElement("div", {
						className: v.a.ownerNameContainer
					}, o && a.a.createElement("span", {
						className: v.a.ownerName
					}, k._("by {username}", [k._param("username", a.a.createElement(m.a, {
						author: o,
						isUnstyled: !0
					}, `u/${o}`))], {
						hk: "FAgpK"
					})), e.children)))
				}),
				y = s("./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx");
			var O = Object(y.a)(e => a.a.createElement(a.a.Fragment, null, e.renderOverflowMenu())),
				j = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				w = s("./src/reddit/helpers/scheduledPosts/index.ts"),
				S = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				N = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				I = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				T = s("./src/reddit/components/RecurringPostList/RecurringPost/index.m.less"),
				M = s.n(T);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = "RECURRING_POSTS__EDIT", A = Object(o.b)(null, (e, t) => ({
				editRecurringPostRequested: () => {
					e(Object(d.c)({
						id: t.item.id,
						subredditId: t.item.subreddit.id
					})), e((e, t) => Object(r.a)(Object(S.e)()(t()))), e(Object(l.i)(R))
				},
				onOpenOverflow: () => {
					e((e, t) => Object(r.a)(Object(S.h)(!0)(t())))
				},
				onUpdateMetadata: s => e(Object(d.b)(s, t.item))
			}));
			class F extends a.a.PureComponent {
				render() {
					const {
						className: e,
						item: t,
						editRecurringPostRequested: s
					} = this.props, n = Object(w.e)(t), o = t.state === f.f.FAILED, {
						owner: r
					} = t, l = Object(f.o)(r) && r.prefixedName;
					return a.a.createElement("div", {
						className: Object(i.a)(e, M.a.container)
					}, o && a.a.createElement("div", {
						className: M.a.failedStateIndicator
					}, P._("Recurring post failed to submit. {Link: update recurring scheduled post} to reset", [P._param("Link: update recurring scheduled post", a.a.createElement(j.o, {
						onClick: s
					}, "Update schedule"))], {
						hk: "3Uitas"
					})), a.a.createElement("div", {
						className: M.a.metaRow
					}, a.a.createElement(I.a, {
						className: M.a.replayIcon
					}), a.a.createElement("div", {
						className: M.a.metaRowText
					}, a.a.createElement("div", {
						className: M.a.recurrenceRules,
						title: n
					}, n), a.a.createElement("div", null, P._("Scheduled by {=[post owner]}", [P._param("=[post owner]", a.a.createElement("span", {
						className: M.a.parametricMetaData
					}, P._("{post owner}", [P._param("post owner", l)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					}))), a.a.createElement("button", {
						onClick: s
					}, a.a.createElement(N.a, {
						className: M.a.pencilIcon
					}))), a.a.createElement(C, {
						scheduledPost: t
					}, a.a.createElement(O, {
						scheduledPost: t,
						onUpdateMetadata: this.props.onUpdateMetadata,
						onOpenOverflow: this.props.onOpenOverflow
					})))
				}
			}
			t.b = A(F)
		},
		"./src/reddit/components/RecurringPostList/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				placeholderIcon: "_2rWvDY38-Fa_14y347Il6W",
				thumbnailContainer: "_3cYCw7NYRAJwj6LvL8esBu"
			}
		},
		"./src/reddit/components/RecurringPostList/index.m.less": function(e, t, s) {
			e.exports = {
				titleContainer: "p9wLLlADU1pVQu4nx3HCF",
				postList: "_1qL48rnJIqcVj5nNuXkDSw",
				pageButtonPortal: "_3lBUQT-Vexm0jXk3WmIYJq",
				recurringPostsContainer: "_2UggIw0Xee7HvpOtrWrepd",
				lastRecurringPostItem: "dx2RjIkNec1E2-a1DyP07",
				emptyContainer: "_1Aurc-hBrd1zsfrQxHeZoq",
				icon: "_1BRYUIpfNcLUEr5L8DeJ8i",
				schedulePostLink: "_1mxUgytAdxfLqJuzRgGifT"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less": function(e, t, s) {
			e.exports = {
				DisplayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				displayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				DropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				dropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				ReasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				reasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				Dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				DropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				dropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				DropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				dropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				DropdownContainer: "_33sg6HoBYll4rCDqRzRUdu",
				dropdownContainer: "_33sg6HoBYll4rCDqRzRUdu"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/Row.tsx"),
				d = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				u = s.n(m);
			const p = r.a.wrapped(c.a, "DisplayContainer", u.a),
				b = r.a.div("DropdownLabel", u.a),
				h = r.a.div("ReasonTitle", u.a),
				g = e => o.a.createElement(p, null, o.a.createElement(b, null, e.dropdownLabel), e.selectedReason && o.a.createElement(h, null, e.selectedReason)),
				f = r.a.wrapped(i.a, "Dropdown", u.a),
				x = r.a.wrapped(d.b, "DropdownTriangle", u.a),
				E = r.a.wrapped(l.b, "DropdownRow", u.a),
				v = r.a.button("DropdownContainer", u.a);
			t.a = e => o.a.createElement(v, {
				onClick: e.onToggleDropdown
			}, o.a.createElement(g, {
				dropdownLabel: e.isLoading ? n.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : n.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), o.a.createElement(x, null), e.isDropdownOpen && o.a.createElement(f, {
				isOverlay: !0
			}, o.a.createElement(E, {
				displayText: n.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => o.a.createElement(E, {
				displayText: `${s+1}. ${t.title}`,
				key: t.title,
				onClick: () => e.onSelectReason(t)
			}))))
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less": function(e, t, s) {
			e.exports = {
				CharacterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				characterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				EmptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				emptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				ModNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				modNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				PrimaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				primaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				RadioOption: "_30JuaHooKBU-I9UQwxEwhL",
				radioOption: "_30JuaHooKBU-I9UQwxEwhL",
				BoldText: "_22_ggqyuhsjDD3F2auyNjc",
				boldText: "_22_ggqyuhsjDD3F2auyNjc",
				ModNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				modNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				MessageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				messageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				Info: "_3Bf1PCbZnJJBM391IWRv8D",
				info: "_3Bf1PCbZnJJBM391IWRv8D",
				SmallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				smallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				FormOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				formOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				ModalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				modalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				FooterRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				footerRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				ButtonRow: "_3zZmX0EjloIkzwt2-sRI2_",
				buttonRow: "_3zZmX0EjloIkzwt2-sRI2_"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "dispatcher", (function() {
				return N
			})), s.d(t, "selector", (function() {
				return I
			})), s.d(t, "connector", (function() {
				return T
			})), s.d(t, "CharacterCountdown", (function() {
				return M
			})), s.d(t, "EmptyState", (function() {
				return P
			})), s.d(t, "MessageInput", (function() {
				return U
			})), s.d(t, "FormOptionsContainer", (function() {
				return W
			})), s.d(t, "ModalFooter", (function() {
				return z
			})), s.d(t, "ButtonRow", (function() {
				return q
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return G
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/removalReasons/index.ts"),
				c = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = s("./src/reddit/controls/TextButton/index.tsx"),
				f = s("./src/reddit/icons/fonts/Info/index.tsx"),
				x = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				E = s("./src/reddit/models/RemovalReason/index.ts"),
				v = s("./src/reddit/selectors/removalReasons.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				y = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				O = s.n(y);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = e => {
				switch (e) {
					case E.f.Private:
						return "private_subreddit";
					case E.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, S = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: E.f.Public,
				selectedReason: null
			}, N = e => ({
				submitBulkRemovalReason: (t, s, n, a, o) => e(Object(d.submitBulkRemovalReason)(t, s, n, a, o)),
				submitRemovalReason: (t, s, n, a, o) => e(Object(d.submitRemovalReason)(t, s, n, a, o))
			}), I = Object(r.c)({
				currentUserName: e => {
					const t = Object(_.k)(e);
					if (t) return t.displayText
				},
				isLoading: v.a,
				removalReasons: v.c,
				subredditName: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(k.U)(e, {
						subredditId: s
					}).name
				}
			}), T = Object(o.b)(I, N), M = l.a.wrapped(c.a, "CharacterCountdown", O.a), P = l.a.div("EmptyState", O.a), R = l.a.wrapped(m.o, "ModNoteDescription", O.a), A = l.a.wrapped(u.l, "PrimaryButton", O.a), F = l.a.wrapped(h.a, "RadioOption", O.a), D = l.a.span("BoldText", O.a), L = l.a.wrapped(m.t, "ModNoteInput", O.a), U = l.a.wrapped(m.t, "MessageInput", O.a), B = l.a.wrapped(f.a, "Info", O.a), H = l.a.div("SmallInfoText", O.a), W = l.a.div("FormOptionsContainer", O.a), z = l.a.wrapped(m.g, "ModalFooter", O.a), V = l.a.div("FooterRow", O.a), q = l.a.wrapped(V, "ButtonRow", O.a);
			class G extends a.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick(`type_${w(e)}`)()
					}, this.onMessageInputChange = e => {
						this.setState({
							message: e.currentTarget.value
						})
					}, this.onUpdateModNote = e => {
						this.setState({
							modNote: e.currentTarget.value
						})
					}, this.handleToggleDropdown = () => this.setState({
						isDropdownOpen: !this.state.isDropdownOpen
					}), this.closeDropdown = () => {
						this.state.isDropdownOpen && this.setState({
							isDropdownOpen: !1
						})
					}, this.onSelectReason = e => {
						this.setState({
							selectedReason: e
						}), this.props.trackClick("reason")(), e && this.setState({
							message: e.message
						}), this.closeDropdown()
					}, this.canSave = () => !(this.state.message.length > E.a || this.state.modNote.length > E.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === E.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick(`sent_${w(t.removalType)}`)(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== E.e.Bulk && s.push(a.a.createElement(F, {
							key: E.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: E.f.Public
						}, a.a.createElement("div", null, t.removalContextType === E.e.Post ? j._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : j._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(a.a.createElement(F, {
							key: E.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: E.f.Private
						}, a.a.createElement("div", null, j._("Private: send a Modmail from {subredditName} to the user", [j._param("subredditName", a.a.createElement(D, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(a.a.createElement(F, {
							key: E.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: E.f.PrivateExposed
						}, a.a.createElement("div", null, j._("Private: send a Modmail from {currentUserName} to the user", [j._param("currentUserName", a.a.createElement(D, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), s
					}, this.state = {
						...S,
						removalContextType: Object(E.g)(e.itemIds)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return a.a.createElement(m.e, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && a.a.createElement(m.i, null, a.a.createElement(x.a, null, a.a.createElement(m.q, null, j._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && j._("({number of items} posts/comments)", [j._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), a.a.createElement(g.a, {
						onClick: this.onCancel
					}, a.a.createElement(m.b, null)))), a.a.createElement(m.l, null, e.isLoading || e.removalReasons.length > 0 ? a.a.createElement(C.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : a.a.createElement(P, null, j._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), a.a.createElement(p.default, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, a.a.createElement(u.r, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, j._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && a.a.createElement(W, null, a.a.createElement(m.h, null, a.a.createElement(b.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), a.a.createElement(U, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), a.a.createElement(M, {
						maxChars: E.a,
						text: t.message.trim()
					}), a.a.createElement(H, null, t.removalType !== E.f.Public && a.a.createElement(a.a.Fragment, null, a.a.createElement(B, null), j._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), a.a.createElement(z, null, a.a.createElement(V, null, a.a.createElement(R, null, j._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), a.a.createElement(V, null, a.a.createElement(L, {
						placeholder: j._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), a.a.createElement(V, null, a.a.createElement(M, {
						maxChars: E.b,
						text: t.modNote.trim()
					})), a.a.createElement(q, null, a.a.createElement(u.o, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, j._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(A, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, j._("Submit", null, {
						hk: "4aU3dh"
					})))))
				}
			}
			t.default = Object(i.a)(T(G))
		},
		"./src/reddit/components/RemovalReasons/RemovalReasonEditorModal.m.less": function(e, t, s) {
			e.exports = {
				GenericGreetingText: "_1RYmGXZkbjV_9GAwCiqmLp",
				genericGreetingText: "_1RYmGXZkbjV_9GAwCiqmLp",
				DeleteReasonButton: "_3LU38GqHnVONELmzr-6CjS",
				deleteReasonButton: "_3LU38GqHnVONELmzr-6CjS",
				PrimaryButton: "_1Qw31YEY4D8vZqqnidfBid",
				primaryButton: "_1Qw31YEY4D8vZqqnidfBid",
				TextArea: "_2g19cC2dTjD8Ivp0iaxvPI",
				textArea: "_2g19cC2dTjD8Ivp0iaxvPI",
				ModalFooter: "a8KANZ6wvta1y_8QSZmeS",
				modalFooter: "a8KANZ6wvta1y_8QSZmeS",
				Input: "tWupUgopHVvjD9_bZZVy0",
				input: "tWupUgopHVvjD9_bZZVy0"
			}
		},
		"./src/reddit/components/RemovalReasons/RemovalReasonItem.m.less": function(e, t, s) {
			e.exports = {
				EditButton: "_3Z3niHttcaJCxThBE2-eNN",
				editButton: "_3Z3niHttcaJCxThBE2-eNN",
				Row: "_1ERpdeakuaRdyW5OEGvV_a",
				row: "_1ERpdeakuaRdyW5OEGvV_a",
				ReasonNumber: "_37ciCG1flXTYWdLXzWUVSP",
				reasonNumber: "_37ciCG1flXTYWdLXzWUVSP",
				ReasonText: "_3Vv7n3XK-P5uslyAy7Li0w",
				reasonText: "_3Vv7n3XK-P5uslyAy7Li0w"
			}
		},
		"./src/reddit/components/RemovalReasons/index.m.less": function(e, t, s) {
			e.exports = {
				Rules: "-z_XjylM-4VxXIVlUJupm",
				rules: "-z_XjylM-4VxXIVlUJupm",
				title: "_1wclVdwRTNycOnlbH1IkQU",
				subtext: "_2IxjljuOnx5CrtK0CMzstT",
				removalReasonsCount: "_1B3ouNDntikHo-PDWo9Gwk",
				tooltipContent: "_2KMnTQyMVHRHQBFfwLKxrJ",
				tooltip: "_3YCzepP6_mhRVOdUDnmkEo"
			}
		},
		"./src/reddit/components/RemovalReasons/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/colors.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/removalReasons/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./src/reddit/components/ContentTooltip/index.tsx"),
				h = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				x = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				E = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/helpers/localStorage/index.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/models/RemovalReason/index.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				y = s("./src/reddit/selectors/removalReasons.ts"),
				O = s("./src/higherOrderComponents/asModal/index.tsx"),
				j = s("./src/lib/lessComponent.tsx"),
				w = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				S = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				N = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				I = s("./src/reddit/controls/TextButton/index.tsx"),
				T = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				M = s("./src/reddit/components/RemovalReasons/RemovalReasonEditorModal.m.less"),
				P = s.n(M);
			const R = {
					message: "",
					title: ""
				},
				A = j.a.wrapped(S.f, "GenericGreetingText", P.a),
				F = j.a.wrapped(S.s, "DeleteReasonButton", P.a),
				D = j.a.wrapped(E.l, "PrimaryButton", P.a),
				L = j.a.wrapped(S.t, "TextArea", P.a),
				U = j.a.wrapped(S.g, "ModalFooter", P.a),
				B = j.a.wrapped(N.c, "Input", P.a);
			class H extends r.a.Component {
				constructor(e) {
					super(e), this.onTitleInputChange = e => {
						e.currentTarget.value.length <= _.d && this.setState({
							title: e.currentTarget.value
						})
					}, this.onMessageInputChange = e => {
						this.setState({
							message: e.currentTarget.value
						})
					}, this.onSave = () => {
						const e = {
							title: this.state.title.trim(),
							message: this.state.message.trim()
						};
						this.props.removalReason && (e.id = this.props.removalReason.id), this.props.onSubmit(e), this.props.sendEvent(), this.props.toggleModal()
					}, this.canSave = () => this.state.title.trim().length > 0 && this.state.title.trim().length <= _.d && this.state.message.trim().length > 0 && this.state.message.trim().length <= _.a, this.state = e.removalReason ? {
						title: e.removalReason.title,
						message: e.removalReason.message
					} : R
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(S.e, null, r.a.createElement(S.i, null, r.a.createElement(T.a, null, r.a.createElement(S.q, null, e.removalReason ? a.fbt._("Edit removal reason", null, {
						hk: "1P0jAw"
					}) : a.fbt._("Add new reason", null, {
						hk: "jDYo"
					})), r.a.createElement(I.a, {
						onClick: e.toggleModal
					}, r.a.createElement(S.b, null)))), r.a.createElement(S.l, null, r.a.createElement(S.h, null, r.a.createElement(B, {
						placeholder: a.fbt._("Removal reason title", null, {
							hk: "4hFurd"
						}),
						value: t.title,
						onChange: this.onTitleInputChange
					}), r.a.createElement(w.a, {
						text: t.title.trim(),
						maxChars: _.d
					})), r.a.createElement(S.o, null, a.fbt._("Reason message:", null, {
						hk: "yMtrM"
					})), r.a.createElement(A, null, a.fbt._("Hi u/username,", null, {
						hk: "NE4XP"
					})), r.a.createElement(L, {
						placeholder: a.fbt._("Write a message that will communicate to the user why their post was removed.", null, {
							hk: "4u5AVO"
						}),
						value: t.message,
						onChange: this.onMessageInputChange,
						"data-redditstyle": !0
					}), r.a.createElement(w.a, {
						text: t.message.trim(),
						maxChars: _.a
					})), r.a.createElement(U, null, r.a.createElement(D, {
						onClick: this.onSave,
						"data-redditstyle": !0,
						disabled: !this.canSave()
					}, e.removalReason ? a.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : a.fbt._("Add new reason", null, {
						hk: "34P0ii"
					})), r.a.createElement(S.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.removalReason && r.a.createElement(F, {
						onClick: e.onDeleteReason
					}, a.fbt._("Delete", null, {
						hk: "4lt26q"
					}))))
				}
			}
			var W = Object(O.a)(H),
				z = s("./src/reddit/layout/row/Inline/index.tsx"),
				V = s("./src/reddit/components/RemovalReasons/RemovalReasonItem.m.less"),
				q = s.n(V);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = j.a.wrapped(E.r, "EditButton", q.a), Q = j.a.wrapped(z.a, "Row", q.a), X = j.a.div("ReasonNumber", q.a), J = j.a.div("ReasonText", q.a);
			var Y = e => r.a.createElement(Q, null, r.a.createElement(X, null, e.index + 1), r.a.createElement(J, null, e.removalReason.title), r.a.createElement(K, {
					onClick: e.onEdit,
					"data-redditstyle": !0
				}, G._("Edit", null, {
					hk: "1nftDt"
				}))),
				Z = s("./src/reddit/components/RemovalReasons/index.m.less"),
				$ = s.n(Z);
			const ee = "RemovalReasons--Tooltip",
				te = 1e4,
				se = {
					reasonToEdit: null
				},
				ne = Object(l.c)({
					isConfirmModalOpen: e => "RemovalReasons--Modal--DeleteConfirmation" === Object(C.a)(e),
					isRemovalReasonEditorModalOpen: e => "RemovalReasons--Editor--Modal" === Object(C.a)(e),
					removalReasons: y.c
				}),
				ae = Object(i.b)(ne, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						addRemovalReason: t => e(Object(m.addRemovalReason)(s, t)),
						deleteRemovalReason: t => e(Object(m.deleteRemovalReason)(s, t)),
						editRemovalReason: t => e(Object(m.editRemovalReason)(s, t)),
						toggleConfirmationModal: () => e(Object(c.i)("RemovalReasons--Modal--DeleteConfirmation")),
						toggleReasonEditorModal: () => e(Object(c.i)("RemovalReasons--Editor--Modal")),
						onShowTooltip: t => e(Object(u.f)({
							tooltipId: t
						})),
						onHideTooltip: () => e(Object(u.i)())
					}
				});
			class oe extends r.a.Component {
				constructor(e) {
					super(e), this.onShowTooltip = () => {
						Object(v.u)() || (this.props.onShowTooltip(ee), setTimeout(() => {
							this.props.onHideTooltip()
						}, te), Object(v.Pb)())
					}, this.onAddReason = () => {
						this.setState({
							reasonToEdit: null
						}), this.props.toggleReasonEditorModal(), this.props.sendEventWithName("add_new")()
					}, this.onEditReason = e => () => {
						this.setState({
							reasonToEdit: e
						}), this.props.toggleReasonEditorModal(), e && this.props.sendEventWithName("edit")()
					}, this.onClickTooltip = () => {
						this.props.onHideTooltip()
					}, this.renderReasonEditorModal = () => r.a.createElement(W, {
						onDeleteReason: () => {
							this.props.toggleReasonEditorModal(), this.props.toggleConfirmationModal()
						},
						onSubmit: this.state.reasonToEdit ? this.props.editRemovalReason : this.props.addRemovalReason,
						removalReason: this.state.reasonToEdit,
						sendEvent: this.state.reasonToEdit ? this.props.sendEventWithName("edit_save") : this.props.sendEventWithName("new_save"),
						subredditId: this.props.subredditId,
						toggleModal: this.onEditReason(null),
						withOverlay: !0
					}), this.state = se
				}
				componentDidMount() {
					this.onShowTooltip()
				}
				render() {
					const {
						deleteRemovalReason: e,
						isConfirmModalOpen: t,
						isRemovalReasonEditorModalOpen: s,
						removalReasons: o,
						sendEventWithName: i,
						toggleConfirmationModal: l
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.c, null, r.a.createElement(E.l, {
						onClick: this.onAddReason,
						disabled: o.length >= _.c || s,
						"data-redditstyle": !0
					}, a.fbt._("Add removal reason", null, {
						hk: "2fHPVe"
					}))), r.a.createElement(f.a, null, r.a.createElement(f.b, {
						className: $.a.title
					}, a.fbt._("Removal reasons", null, {
						hk: "3IWxkH"
					}), r.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360010094892`
					}), r.a.createElement(x.n, {
						className: $.a.subtext
					}, a.fbt._("Help people become better posters by giving a short reason why their post was removed.", null, {
						hk: "2X1Ma2"
					}), r.a.createElement("span", {
						className: $.a.removalReasonsCount,
						id: ee,
						onClick: this.onClickTooltip
					}, r.a.createElement(b.a, {
						className: $.a.tooltip,
						defaultTooltipPosition: "left",
						tooltipId: ee,
						caretColor: {
							right: d.a.alienblue
						}
					}, r.a.createElement("div", {
						className: $.a.tooltipContent
					}, a.fbt._("NEW! Add up to 50 removal reasons.", null, {
						hk: "1LM0MR"
					}))), o.length, "/", _.c))), o.length > 0 ? o.map((e, t) => r.a.createElement(Y, {
						index: t,
						key: e.id,
						onEdit: this.onEditReason(e),
						removalReason: e
					})) : r.a.createElement(h.c, {
						text: a.fbt._("No removal reasons yet", null, {
							hk: "1j70G1"
						})
					}, r.a.createElement(k.a, {
						name: "rules",
						className: $.a.Rules
					}))), s && this.renderReasonEditorModal(), t && this.state.reasonToEdit && r.a.createElement(p.a, {
						actionText: a.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						headerText: a.fbt._("Delete reason", null, {
							hk: "q2qun"
						}),
						modalText: a.fbt._("Are you sure you want to delete this reason?", null, {
							hk: "1FTfMR"
						}),
						onConfirm: () => {
							this.state.reasonToEdit && e(this.state.reasonToEdit.id)
						},
						toggleModal: () => {
							l(), this.setState({
								reasonToEdit: null
							})
						},
						trackClick: i("delete"),
						withOverlay: !0
					}))
				}
			}
			t.a = ae(oe)
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				l = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = r.a.wrapped(e => {
				const {
					children: t,
					className: s,
					renderBelow: n,
					text: r,
					tooltipContentClass: i,
					...c
				} = e;
				return a.a.createElement("div", d({}, c, {
					className: Object(o.a)(l.a.container, s)
				}), r ? a.a.createElement("div", {
					className: Object(o.a)(l.a.tooltip, i, n ? l.a.below : l.a.above)
				}, r) : null, t)
			}, "HoverTooltip", l.a)
		},
		"./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n, a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = s("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				d = s.n(l);
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(n || (n = {}));
			const c = 750,
				m = e => {
					let {
						className: t,
						containerClassName: s,
						imageClassName: l,
						disabled: m,
						id: u,
						imagePath: p,
						onClick: b,
						onKeyDown: h,
						title: g,
						onClickDelete: f,
						mouseEnterBufferTime: x = c
					} = e;
					const E = Object(a.useRef)(n.Outside),
						[v, k] = Object(a.useState)(!1);
					return o.a.createElement("div", {
						className: Object(r.a)(d.a.container, s),
						onMouseEnter: f ? () => {
							E.current = n.Inside, setTimeout(() => {
								E.current === n.Inside && k(!0)
							}, x)
						} : void 0,
						onMouseLeave: f ? () => {
							E.current = n.Outside, k(!1)
						} : void 0
					}, v && o.a.createElement("button", {
						className: d.a.deleteButton,
						onClick: f
					}, o.a.createElement(i.b, {
						className: d.a.deleteIcon
					})), o.a.createElement("button", {
						className: Object(r.a)(d.a.emoteButton, t),
						disabled: m,
						id: u,
						title: g,
						onClick: b,
						onKeyDown: h,
						tabIndex: 1
					}, o.a.createElement("div", {
						className: Object(r.a)(d.a.emoteImage, l),
						style: {
							backgroundImage: `url(${p})`
						}
					})))
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				r = s("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				i = s.n(r);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), d = e => {
				let {
					emojiUrl: t,
					onConfirm: s,
					onCancel: n,
					onClose: r
				} = e;
				return a.a.createElement(o.a, {
					onConfirm: s,
					onCancel: n,
					onClose: r,
					headerText: l._("Delete emoji", null, {
						hk: "27GEDb"
					}),
					modalText: a.a.createElement("p", {
						className: i.a.deleteModalContainer
					}, a.a.createElement("img", {
						className: i.a.deleteModalImage,
						src: t
					}), l._("Are you sure you want to delete this emoji?", null, {
						hk: "1bmNdu"
					})),
					actionText: l._("Delete", null, {
						hk: "4lt26q"
					}),
					cancelActionText: l._("Go back", null, {
						hk: "3zzMov"
					}),
					withOverlay: !0
				})
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less": function(e, t, s) {
			e.exports = {
				addButton: "_131SsHx6UfUQsBbPHh8m1D",
				addButtonDisabled: "eRYyo8WYr0Hti7IAGe_gO",
				addIcon: "R3xFUrQvsMx3gn2gqGv0w",
				uploadInput: "_183AY4WVSatH9Qe_MAXDE-",
				loadingContainer: "_2xoHnDYYs7peY_5Im4vQDn",
				emoteButton: "_2s68zj-4Pb6nTX2IUDzLkz",
				placeholderEmoteButton: "_1xLXujnXEDJIfZl94qCnb6",
				customEmoteImage: "_3yyGg_Mez5tP41OCc9Nne8",
				emotePackTitle: "_2ukOHQG9KkBde1ztDLudOP",
				newIcon: "_3_QvdlHkxRkqBb9ZNRQZXx",
				emotePackSubtitle: "_1-OnXZrmw20X79pBvJWaEy",
				emotes: "DNWbRyf3z71g0nqfrzQ4T",
				freeEmotePack: "_13ylKQWUAkdhTJRIuHyJfq",
				disabled: "Ejq92_2ovDkhH3FjoerXW",
				deleteModalContainer: "_2JcZhkY3vXBVFEAMyuM8D5",
				deleteModalImage: "_1V2bCmzxzskT1fA3fY70lK"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/actions/economics/powerups/index.ts");
			const r = (e, t, s, r, i, l) => {
				const d = Object(a.d)(),
					c = Object(n.useRef)(null),
					[m, u] = Object(n.useState)(0),
					p = async function(t) {
						let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							n = arguments.length > 2 ? arguments[2] : void 0;
						try {
							return await d(Object(o.b)({
								subredditId: e,
								file: t
							})), n(), {
								success: !0
							}
						} catch (a) {
							return s ? p(t, !1, n) : (n(), {
								success: !1,
								error: a.message
							})
						}
					}, b = () => u(e => e - 1);
				return {
					maxEmojisUploaded: t.length >= 20,
					maxEmojisUploading: t.length + m >= 20,
					onFileChange: async e => {
						const n = e.currentTarget.files;
						if (!(null == n ? void 0 : n.length)) return;
						if (n.length + t.length > 20) {
							const e = 20 - t.length;
							return null == s || s(e), void(c.current && (c.current.value = ""))
						}
						u(n.length), null == r || r(n.length);
						const a = await Promise.all([...n].map(e => p(e, !0, b))),
							o = a.reduce((e, t) => e + (t.success ? 1 : 0), 0);
						o > 0 && (null == i || i(o));
						const d = a.length - o;
						d > 0 && (null == l || l(d)), c.current && (c.current.value = ""), u(0)
					},
					numUploading: m,
					onClickUpload: () => {
						var e;
						null === (e = c.current) || void 0 === e || e.click()
					},
					uploadInput: c
				}
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less": function(e, t, s) {
			e.exports = {
				container: "_1xDkiINVQUjf0tjZcbF3a7",
				emoteButton: "_2-SqXmcI6RcjKEbTfkrLVe",
				emoteImage: "_1WpEszyqkHofX36kiLrJ8x",
				deleteButton: "_2mgKNuqCKnjSfh2dBW7iqI",
				deleteIcon: "_1BJNzscR61JS-t7pR4p3Ik"
			}
		},
		"./src/reddit/components/SaveIndicator/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_13ubiSSjUBWaeyJM-itH7X",
				titleFontH2: "_2V4_0G0gJO4R1v-_sO5D_j",
				titleFontH3: "_32Uo9qgINsZX5CSOtFM0e2",
				titleFontH4: "_2AWEwOuuK5wBnQGyiB5sSq",
				titleFontH5: "_8460KZXLwbKYkuLfDNr_-",
				titleFontH6: "_7GhKEQrcNu3JuSHqj9pJc",
				metadataFont: "qilOmvvpr4iY8iiHxuV5Y",
				flairFont: "SovT7HaLHcqz1BM9MWXPA",
				labelsFont: "_3Ngpaj84VwPqy3s6Tr3GEJ",
				actionFont: "_3RLwRjy5tGM8nl4kID8Tfg",
				smallButtonFont: "nb_OfRzzHKNkGteZC-TyY",
				largeButtonFont: "_2fhzAdDCEdDseFevwE6mBQ",
				strongTextFont: "_2vvi6WI_4yX2H2H-b2aBCF",
				tabFont: "_3E-egg7Cy7bL6JzsZuFTcn",
				buttonFontXS: "_2ubuuRpTK-U-kDLRRU6pyd",
				buttonFontXs: "_2ubuuRpTK-U-kDLRRU6pyd",
				buttonFontS: "_2fsKOual6xDsvmfB9Z_Gab",
				buttonFontM: "_3pHwBKAuUlalHSG7AJTpEP",
				buttonFontL: "fC3WZNZt7dm3kVDpkLV2",
				buttonFontXL: "_1A7d3cQhRmAUn05diOyF_D",
				buttonFontXl: "_1A7d3cQhRmAUn05diOyF_D",
				bodyFontH1: "_2_nWm6krUlDJnEF9pk7xNK",
				bodyFontH2: "_3zzd4vTmfrG1aK91i6m2j9",
				bodyFontH3: "_3tFwmsoGmyp52EFCoZ0GCV",
				bodyFontH4: "MdKdTVjxUaPPkDvG_msXr",
				bodyFontH5: "_2dNFOZceckCrwGYG8Avi-k",
				bodyFontH6: "_3sSb6LvOgvwy7eawwX4Gtq",
				bodyFontH6Small: "_1W_jjzqvHEQ70RO1EVPhFD",
				bodyFont: "_2fiuzofxgtB6yu9nAHLuqW",
				bodyFontSmall: "_2IcqO4djjAVsOalbW_Zpa9",
				bodyFontMono: "_2i_EmKzaFJfCskmkHdmmgJ",
				icon: "cO908rcinWKz894i8I5jJ",
				pendingIcon: "U2dgL2i9_EJN8R_MLFTjS",
				savedIcon: "_1iGcF7LdvT-OMRgF7xKWqm",
				saveErrorIcon: "kWS-87C-v-iTlGGxQOmxu",
				caption: "_1MAESVWNqu44JbWmHGJsuI"
			}
		},
		"./src/reddit/components/ScheduledPost/ControlRow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1xM2tjm8c7LuqnoEJG1Ws1",
				controlRow: "P7KCCrRfT4TO2wcnk_Kjv",
				controlRowItem: "_1AkGbjxtRpq3ZhKADdUTU3"
			}
		},
		"./src/reddit/components/ScheduledPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_297_pyPlxmqBF0tLkUhTME",
				icon: "_1n_ojuNDT8JeH9DxmHJZt9",
				author: "_1k9D_vEsQ8odWCNERbDOxX",
				modIcon: "_3ryKOTfQ_vqgap0EZsZHAl",
				stickyIcon: "qfjbZcX6-FZK2BGrOXezD"
			}
		},
		"./src/reddit/components/ScheduledPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/AuthorLink/index.tsx"),
				i = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				d = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				c = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				m = s("./src/reddit/models/ScheduledPost/index.ts"),
				u = s("./src/reddit/components/ScheduledPost/MetaLine/index.m.less"),
				p = s.n(u);
			class b extends a.a.PureComponent {
				render() {
					if (!Object(m.p)(this.props.subreddit)) return null;
					const {
						isModDistinguished: e,
						isPostAsMetaMod: t,
						subreddit: s,
						owner: n,
						isSticky: u
					} = this.props, b = t ? o.k : Object(m.o)(n) ? n.name : void 0;
					return a.a.createElement("span", {
						className: p.a.content
					}, a.a.createElement(i.a, {
						to: s.path
					}, s.prefixedName), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(l.a, null), a.a.createElement(r.a, {
						className: p.a.author,
						author: b,
						isUnstyled: !0
					}, `u/${b}`)), e && a.a.createElement(c.a, {
						className: p.a.modIcon
					}), u && a.a.createElement(d.a, {
						className: p.a.stickyIcon
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				l = s("./src/reddit/components/OverflowMenu/index.tsx"),
				d = s("./src/reddit/controls/CheckboxMenuItem/index.tsx");
			var c = e => a.a.createElement(l.b, {
					dropdownId: `SCHEDULED_POST_DROPDOWN${e.scheduledPostId}`,
					onClick: e.onOpenOverflow
				}, a.a.createElement(d.a, {
					isSelected: e.isSticky,
					onClick: e.onToggleIsSticky,
					text: i.fbt._("Sticky post", null, {
						hk: "UOShB"
					})
				}), a.a.createElement(d.a, {
					isSelected: e.isModDistinguished,
					onClick: e.onToggleIsModDistinguished,
					text: i.fbt._("Distinguish as Mod", null, {
						hk: "3opu7K"
					})
				}), a.a.createElement(d.a, {
					isSelected: e.isOriginalContent,
					onClick: e.onToggleIsOC,
					text: i.fbt._("Mark as OC", null, {
						hk: "32LGcQ"
					})
				}), a.a.createElement(d.a, {
					isSelected: e.isNsfw,
					onClick: e.onToggleIsNsfw,
					text: i.fbt._("Mark as NSFW", null, {
						hk: "2qBIcp"
					})
				}), a.a.createElement(d.a, {
					isSelected: e.isSpoiler,
					onClick: e.onToggleIsSpoiler,
					text: i.fbt._("Mark as Spoiler", null, {
						hk: "rOev9"
					})
				})),
				m = s("./src/reddit/selectors/scheduledPosts/index.ts");
			const u = Object(r.c)({
					isLoading: m.j
				}),
				p = Object(o.b)(u);

			function b(e) {
				class t extends a.a.Component {
					constructor(e) {
						super(e), this.isSaving = !1, this.onToggleMetadata = e => {
							this.setState({
								...this.state,
								[e]: !this.state[e]
							}), this.isSaving = !0, this.props.onUpdateMetadata(e)
						}, this.onToggleIsSticky = () => this.onToggleMetadata("isSticky"), this.onToggleIsModDistinguished = () => this.onToggleMetadata("isModDistinguished"), this.onToggleIsOriginalContent = () => this.onToggleMetadata("isOriginalContent"), this.onToggleIsNsfw = () => this.onToggleMetadata("isNsfw"), this.onToggleIsSpoiler = () => this.onToggleMetadata("isSpoiler"), this.renderOverflowMenu = () => a.a.createElement(c, {
							scheduledPostId: this.props.scheduledPost.id,
							onOpenOverflow: this.props.onOpenOverflow,
							onToggleIsSticky: this.onToggleIsSticky,
							onToggleIsModDistinguished: this.onToggleIsModDistinguished,
							onToggleIsOC: this.onToggleIsOriginalContent,
							onToggleIsNsfw: this.onToggleIsNsfw,
							onToggleIsSpoiler: this.onToggleIsSpoiler,
							isModDistinguished: this.state.isModDistinguished,
							isOriginalContent: this.state.isOriginalContent,
							isNsfw: this.state.isNsfw,
							isSticky: this.state.isSticky,
							isSpoiler: this.state.isSpoiler
						}), this.state = {
							isModDistinguished: e.scheduledPost.isModDistinguished,
							isNsfw: e.scheduledPost.isNsfw,
							isOriginalContent: e.scheduledPost.isOriginalContent,
							isSpoiler: e.scheduledPost.isSpoiler,
							isSticky: !!e.scheduledPost.sticky && "NONE" !== e.scheduledPost.sticky
						}
					}
					componentDidUpdate(e) {
						e.isLoading && !this.props.isLoading && this.isSaving && (this.isSaving = !1, this.setState({
							isModDistinguished: this.props.scheduledPost.isModDistinguished || !1,
							isNsfw: this.props.scheduledPost.isNsfw || !1,
							isOriginalContent: this.props.scheduledPost.isOriginalContent || !1,
							isSpoiler: this.props.scheduledPost.isSpoiler || !1,
							isSticky: !!this.props.scheduledPost.sticky && "NONE" !== this.props.scheduledPost.sticky
						}))
					}
					render() {
						const {
							isLoading: t,
							scheduledPost: s,
							onUpdateMetadata: n,
							onOpenOverflow: o,
							...r
						} = this.props, i = {
							...r,
							renderOverflowMenu: this.renderOverflowMenu
						};
						return a.a.createElement(e, i)
					}
				}
				return t.displayName = `WithOverflowMenu(${e.displayName||e.name})`, p(t)
			}
		},
		"./src/reddit/components/ScheduledPost/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3jA9JBnv4bqmmiAw3Akmug"
			}
		},
		"./src/reddit/components/ScheduledPost/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/ScheduledPost/PostTitle/index.m.less"),
				r = s.n(o);
			class i extends a.a.PureComponent {
				render() {
					return a.a.createElement("span", {
						className: r.a.title
					}, this.props.title)
				}
			}
			t.a = i
		},
		"./src/reddit/components/ScheduledPost/TopMetaLine/FailureMetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1YrhJ0z1RfTXg7jHYgApSr",
				error: "_2_f_ecVpbx4yoMzazJYkDP",
				retryButton: "_1KbjdUJVdbZQOJN8d6LTsX",
				parametricMetaData: "_2x3oXUTdLAKAob3BYLRkmH"
			}
		},
		"./src/reddit/components/ScheduledPost/TopMetaLine/TemporalMetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "qDE3oDok1392-t8IDOBfk",
				clock: "_2sfIhl6E6vfZCwxx54EUNB",
				parametricMetaData: "_3bAfM2inJTjD3ZXNzO5nE5"
			}
		},
		"./src/reddit/components/ScheduledPost/index.m.less": function(e, t, s) {
			e.exports = {
				body: "_320l2eVngsr4Ord9dXc2er",
				container: "_26zeT5d9JKXWbWzOT4ncpg",
				thumbnailContainer: "_2UwJRJuqEbkRCV8O6REq8h",
				mainBody: "_3pHV3zwe-Q9-xNEB0iM3WT",
				backgroundWrapper: "_2KWv8ukh9RMgpOturAiV9z",
				content: "hAQclO6xLNG3WDMgkywGo",
				flairList: "_1-tY_25z_pkhbFvUz2-AqS",
				Icon: "_3XIOnqmz8vxSaPmPEY11Wh",
				icon: "_3XIOnqmz8vxSaPmPEY11Wh"
			}
		},
		"./src/reddit/components/ScheduledPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return fe
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/telemetry/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/scheduledPosts/index.ts"),
				u = s("./src/reddit/actions/scheduledPosts/delete.ts"),
				p = s("./src/reddit/actions/scheduledPosts/edit.ts"),
				b = s("./src/lib/makeActionCreator/index.ts"),
				h = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/actions/urlRequested.ts"),
				x = s("./src/lib/makeGqlRequest/index.ts"),
				E = s("./src/redditGQL/operations/SubmitScheduledPost.json");
			var v = s("./src/reddit/models/Toast/index.ts");
			const k = Object(b.a)(h.l),
				_ = (e, t) => async (s, n, a) => {
					let {
						gqlContext: o
					} = a;
					const r = Object(i.p)(n(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (!r) return void s(Object(g.f)(Object(g.e)(h.u(), v.b.Error)));
					const l = await ((e, t) => Object(x.a)(e, {
						...E,
						variables: t
					}))(o(), {
						input: {
							id: r.id
						}
					});
					if (!l.ok) return void s(Object(g.f)(Object(g.e)(h.v(), v.b.Error, h.s(), _(e, t))));
					const d = l.body.data.submitScheduledPost.post.permalink;
					s(Object(f.a)(d, !1)), s(Object(g.f)(Object(g.e)(h.x(), v.b.SuccessCommunity))), s(k({
						subredditId: e,
						scheduledPostId: t
					}))
				};
			var C = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				y = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = s("./src/reddit/components/FlairList/index.tsx"),
				j = s("./src/reddit/components/PostLeftRail/index.tsx"),
				w = s("./src/lib/classNames/index.ts"),
				S = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				N = s("./src/reddit/controls/Score/index.tsx"),
				I = s("./src/reddit/models/Vote/index.ts"),
				T = s("./src/reddit/components/VerticalVotes/index.m.less"),
				M = s.n(T);
			class P extends o.a.PureComponent {
				render() {
					return o.a.createElement("div", {
						className: M.a.votesContainer
					}, o.a.createElement("button", {
						className: M.a.disabledVoteIcon,
						"aria-label": n.fbt._("Upvote", null, {
							hk: "4aEt1X"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, o.a.createElement(S.d, {
						compact: !1,
						voteState: I.a.notVoted,
						interactive: !1
					})), o.a.createElement(N.a, {
						disableInlineColor: !0,
						className: Object(w.a)(M.a.Score, M.a.disabledScore),
						score: 0,
						voteState: I.a.notVoted,
						isScoreHidden: !0
					}), o.a.createElement("button", {
						className: M.a.disabledVoteIcon,
						"aria-label": n.fbt._("downvote", null, {
							hk: "4xXpvV"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, o.a.createElement(S.c, {
						compact: !1,
						voteState: I.a.notVoted,
						interactive: !1
					})))
				}
			}
			var R = P,
				A = s("./src/reddit/constants/thumbnails.ts"),
				F = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				L = s("./src/reddit/models/PostCreationForm/index.ts"),
				U = s("./src/reddit/models/ScheduledPost/index.ts"),
				B = s("./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx"),
				H = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				W = s("./src/reddit/icons/svgs/Post/index.tsx"),
				z = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				V = s("./src/reddit/components/ScheduledPost/ControlRow/index.m.less"),
				q = s.n(V);
			const G = e => {
				const {
					icon: t,
					onClick: s
				} = e;
				return o.a.createElement("span", {
					onClick: s,
					className: Object(w.a)(q.a.controlRowItem, e.className)
				}, o.a.createElement(t, {
					className: q.a.icon
				}), " ", e.text)
			};
			class K extends o.a.Component {
				render() {
					return o.a.createElement("span", {
						className: q.a.controlRow
					}, this.props.onSubmitPostNow && o.a.createElement(G, {
						icon: W.a,
						text: n.fbt._("Submit post now", null, {
							hk: "QkS4y"
						}),
						onClick: this.props.onSubmitPostNow
					}), o.a.createElement(G, {
						icon: H.a,
						text: n.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.props.onEditScheduledPost
					}), o.a.createElement(G, {
						icon: z.b,
						text: n.fbt._("Delete", null, {
							hk: "1uVY7w"
						}),
						onClick: this.props.onDeleteScheduledPost
					}), this.props.renderOverflowMenu())
				}
			}
			var Q = Object(B.a)(K),
				X = s("./src/reddit/components/ScheduledPost/MetaLine/index.tsx"),
				J = s("./src/reddit/components/ScheduledPost/PostTitle/index.tsx"),
				Y = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				Z = s("./src/reddit/components/ScheduledPost/TopMetaLine/FailureMetaLine/index.m.less"),
				$ = s.n(Z);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class te extends o.a.PureComponent {
				componentDidMount() {
					this.props.onViewFailedPost()
				}
				render() {
					const {
						scheduledPost: e
					} = this.props, {
						owner: t
					} = e, s = Object(U.o)(t) && t.prefixedName;
					return o.a.createElement("div", {
						className: $.a.container
					}, o.a.createElement("div", null, o.a.createElement(Y.a, {
						className: $.a.error
					}), ee._("Post failed to submit! Please {=retry}", [ee._param("=retry", o.a.createElement("button", {
						className: $.a.retryButton,
						onClick: this.props.onSubmitPostNow
					}, ee._("retry", null, {
						hk: "hER94"
					})))], {
						hk: "4yOnl8"
					})), o.a.createElement("div", null, ee._("Scheduled by {=[post owner]}", [ee._param("=[post owner]", o.a.createElement("span", {
						className: $.a.parametricMetaData
					}, ee._("{post owner}", [ee._param("post owner", s)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					})))
				}
			}
			var se = Object(r.b)(null, (e, t) => {
					let {
						scheduledPost: s
					} = t;
					return {
						onSubmitPostNow: () => {
							e(_(s.subreddit.id, s.id)), e((e, t) => Object(d.a)(Object(D.n)()(t())))
						},
						onViewFailedPost: () => e((e, t) => Object(d.a)(Object(D.w)()(t(), s)))
					}
				})(te),
				ne = s("./src/reddit/helpers/scheduledPosts/index.ts"),
				ae = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				oe = s("./src/reddit/components/ScheduledPost/TopMetaLine/TemporalMetaLine/index.m.less"),
				re = s.n(oe);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), le = e => {
				return `${Object(ne.c)(e.publishAt)} ${Object(ne.d)(e.clientTimezone).displayText}`
			};
			class de extends o.a.PureComponent {
				render() {
					const {
						scheduledPost: e
					} = this.props, {
						owner: t
					} = e, s = Object(U.o)(t) && t.prefixedName;
					return o.a.createElement("div", {
						className: re.a.container
					}, o.a.createElement(ae.a, {
						className: re.a.clock
					}), o.a.createElement("div", null, o.a.createElement("div", null, ie._("This post is scheduled for {=[time]}", [ie._param("=[time]", o.a.createElement("span", {
						className: re.a.parametricMetaData
					}, ie._("{time}", [ie._param("time", le(e))], {
						hk: "JrMs3"
					})))], {
						hk: "4gFrnr"
					})), o.a.createElement("div", null, ie._("Scheduled by {=[post owner]}", [ie._param("=[post owner]", o.a.createElement("span", {
						className: re.a.parametricMetaData
					}, ie._("{post owner}", [ie._param("post owner", s)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					}))))
				}
			}
			var ce = de;
			class me extends o.a.PureComponent {
				render() {
					const {
						scheduledPost: e
					} = this.props;
					switch (e.state) {
						case U.f.FAILED:
							return o.a.createElement(se, {
								scheduledPost: e
							});
						case U.f.PROCESSING:
						case U.f.CREATED:
						default:
							return o.a.createElement(ce, {
								scheduledPost: e
							})
					}
				}
			}
			var ue = me,
				pe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = s.n(pe),
				he = s("./src/reddit/components/ScheduledPost/index.m.less"),
				ge = s.n(he);
			const fe = {
					isNSFW: !1,
					media: {
						content: "",
						markdownContent: "",
						isRichtextPreview: !0,
						mediaMetadata: null,
						obfuscated: null,
						richtextContent: {
							document: []
						},
						rteMode: L.i.RICH_TEXT,
						type: "rtjson"
					},
					thumbnail: {
						url: A.a.DEFAULT,
						width: null,
						height: null
					},
					title: "",
					source: null,
					isSponsored: !1
				},
				xe = Object(l.c)({
					media: (e, t) => {
						let {
							scheduledPostId: s,
							subredditId: n
						} = t;
						const a = Object(i.p)(e, {
							subredditId: n,
							scheduledPostId: s
						});
						if (!a) return null;
						const o = {
								...fe
							},
							r = a.postKind === U.e.LINK;
						return r && (o.media = null), {
							...o,
							isNSFW: a.isNsfw,
							title: a.title,
							...r && {
								source: a.url
							},
							pollData: a.poll
						}
					},
					flair: (e, t) => {
						let {
							scheduledPostId: s,
							subredditId: n
						} = t;
						const a = Object(i.p)(e, {
							subredditId: n,
							scheduledPostId: s
						});
						return a ? Object(i.m)({
							scheduledPost: a
						}) : null
					},
					scheduledPost: (e, t) => {
						let {
							scheduledPostId: s,
							subredditId: n
						} = t;
						return Object(i.p)(e, {
							subredditId: n,
							scheduledPostId: s
						})
					}
				}),
				Ee = Object(r.b)(xe, (e, t) => {
					let {
						scheduledPostId: s,
						subredditId: n
					} = t;
					return {
						onSubmitPostNow: () => {
							e(_(n, s)), e((e, t) => Object(d.a)(Object(D.n)()(t())))
						},
						onEditScheduledPost: () => {
							e(Object(p.b)(n, s)), e((e, t) => Object(d.a)(Object(D.d)()(t())))
						},
						onDeleteScheduledPost: () => e(Object(u.a)(n, s)),
						onOpenOverflow: () => {
							e((e, t) => Object(d.a)(Object(D.h)(!1)(t())))
						},
						onUpdateMetadata: t => e((e, a) => {
							const o = Object(i.p)(a(), {
								subredditId: n,
								scheduledPostId: s
							});
							o && e(Object(m.b)(t, o))
						})
					}
				});
			class ve extends o.a.PureComponent {
				constructor(e) {
					super(e), this.onSubmitPostNow = () => this.setState({
						submitConfirmModalIsOpen: !0
					}), this.onCancelSubmitPostNow = () => this.setState({
						submitConfirmModalIsOpen: !1
					}), this.onConfirmSubmitPostNow = () => this.props.onSubmitPostNow(), this.onEditScheduledPost = () => {
						this.props.onEditScheduledPost()
					}, this.onDeleteScheduledPost = () => this.setState({
						deleteConfirmModalIsOpen: !0
					}), this.onCancelDeleteScheduledPost = () => this.setState({
						deleteConfirmModalIsOpen: !1
					}), this.onConfirmDeleteScheduledPost = () => this.props.onDeleteScheduledPost(), this.state = {
						deleteConfirmModalIsOpen: !1,
						submitConfirmModalIsOpen: !1
					}
				}
				render() {
					const {
						media: e,
						flair: t,
						scheduledPost: s
					} = this.props;
					return e && t && s ? o.a.createElement("div", {
						className: ge.a.container
					}, o.a.createElement(ue, {
						scheduledPost: s
					}), o.a.createElement("div", {
						className: be.a.classicPostStyles
					}, o.a.createElement(j.b, null, o.a.createElement(R, null)), o.a.createElement("div", {
						style: Object(F.c)(void 0, this.props),
						className: ge.a.backgroundWrapper
					}, o.a.createElement("div", {
						className: ge.a.mainBody
					}, o.a.createElement("div", {
						className: ge.a.thumbnailContainer
					}, o.a.createElement(C.a, {
						post: e
					})), o.a.createElement("div", {
						className: ge.a.content
					}, o.a.createElement("div", null, o.a.createElement(J.a, {
						title: s.title
					}), o.a.createElement(O.a, {
						className: ge.a.flairList,
						flair: t
					})), o.a.createElement(X.a, {
						isModDistinguished: s.isModDistinguished,
						isPostAsMetaMod: s.isPostAsMetaMod,
						isSticky: !!s.sticky && "NONE" !== s.sticky,
						subreddit: s.subreddit,
						owner: s.owner
					}), o.a.createElement(Q, {
						onSubmitPostNow: s.state === U.f.FAILED ? void 0 : this.onSubmitPostNow,
						onEditScheduledPost: this.onEditScheduledPost,
						onDeleteScheduledPost: this.onDeleteScheduledPost,
						onUpdateMetadata: this.props.onUpdateMetadata,
						scheduledPost: s,
						onOpenOverflow: this.props.onOpenOverflow
					}))))), this.state.deleteConfirmModalIsOpen && o.a.createElement(y.a, {
						onClose: this.onCancelDeleteScheduledPost,
						onCancel: this.onCancelDeleteScheduledPost,
						onConfirm: this.onConfirmDeleteScheduledPost,
						actionText: n.fbt._("Delete", null, {
							hk: "1WN0R6"
						}),
						modalText: n.fbt._("Are you sure you want to delete this scheduled post? This action cannot be undone.", null, {
							hk: "1EdQC7"
						}),
						withOverlay: !0
					}), this.state.submitConfirmModalIsOpen && o.a.createElement(y.a, {
						onClose: this.onCancelSubmitPostNow,
						onCancel: this.onCancelSubmitPostNow,
						onConfirm: this.onConfirmSubmitPostNow,
						actionText: n.fbt._("Submit", null, {
							hk: "3kl12J"
						}),
						modalText: n.fbt._("Are you sure you want to submit this scheduled post now? This action cannot be undone.", null, {
							hk: "18O8dB"
						}),
						withOverlay: !0
					})) : null
				}
			}
			t.a = Object(c.a)(Ee(ve))
		},
		"./src/reddit/components/Settings/shared/SectionHeading.m.less": function(e, t, s) {
			e.exports = {
				Component: "BotIImuktRA9aFAPP0O4Z",
				component: "BotIImuktRA9aFAPP0O4Z"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.h3("Component", a.a)
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, s) {
			e.exports = {
				Label: "asxizthf5kZpmoY27VBKd",
				label: "asxizthf5kZpmoY27VBKd",
				HoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				hoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				ControlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				controlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				TextContainer: "_3dLmvT0hpACHFxhncqzCOr",
				textContainer: "_3dLmvT0hpACHFxhncqzCOr",
				inModal: "_2O2JPVgOlh8J6OW_9ur4BQ",
				ActionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				actionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				Wrapper: "_2f63as5b5FASHMqGd5P1o0",
				wrapper: "_2f63as5b5FASHMqGd5P1o0",
				isCreateCommunity: "_38bDTwLcytTCF-174R0UXB",
				mColumn: "_1HH_g-CLQB1BPcqOhZcakt",
				mLast: "_3Lu6XJyVbSLDVKDx-wue2g",
				mIndent: "_2D65jEbgD16ae_sJ8BG4AD",
				mDisabled: "LvI7FSBTGgYo2skaf18Zv",
				Subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
				ActionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
				actionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
				Link: "oFObIzV6ZJDQuG09BXh8u",
				link: "oFObIzV6ZJDQuG09BXh8u",
				SubtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				subtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				LinkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				linkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				LinkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				linkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				ArrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				arrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				NoColor: "mI7WmWMma8pZnlYRHtE56",
				noColor: "mI7WmWMma8pZnlYRHtE56",
				StyledFlair: "_1F2irboi-xRChkhyndP6ct",
				styledFlair: "_1F2irboi-xRChkhyndP6ct",
				SpoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				spoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				NSFWFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				nsfwFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				DropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				dropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				DropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				dropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				Row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				DropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				dropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				DescriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				descriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				Circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				RangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				rangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				Ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				TickText: "_1hEYjTFCxEu2ILobPvatAp",
				tickText: "_1hEYjTFCxEu2ILobPvatAp",
				PreSubText: "_2_hv6QgJ151j9WmCyETVfC",
				preSubText: "_2_hv6QgJ151j9WmCyETVfC",
				MultiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				multiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				ActionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				input: "_14_SnmD6g3FrozcKjTpqoH",
				tag: "_1GQzFyg5xYq94euL74ZaeJ"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "n", (function() {
				return V
			})), s.d(t, "k", (function() {
				return X
			})), s.d(t, "o", (function() {
				return Y
			})), s.d(t, "f", (function() {
				return $
			})), s.d(t, "l", (function() {
				return te
			})), s.d(t, "m", (function() {
				return oe
			})), s.d(t, "p", (function() {
				return re
			})), s.d(t, "j", (function() {
				return pe
			})), s.d(t, "b", (function() {
				return be
			})), s.d(t, "g", (function() {
				return he
			})), s.d(t, "a", (function() {
				return ge
			})), s.d(t, "d", (function() {
				return xe
			})), s.d(t, "i", (function() {
				return Ee
			})), s.d(t, "c", (function() {
				return ve
			})), s.d(t, "e", (function() {
				return ke
			})), s.d(t, "h", (function() {
				return _e
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = s("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/controls/FormFields/index.tsx"),
				f = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Select/index.m.less"),
				v = s.n(E);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = f.a.span("Wrapper", v.a),
				C = f.a.select("Inner", v.a),
				y = f.a.wrapped(x.b, "Caret", v.a);

			function O(e) {
				let {
					className: t,
					innerClassName: s,
					...n
				} = e;
				const o = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return a.a.createElement(_, {
					className: t
				}, a.a.createElement(C, k({
					className: s
				}, n)), a.a.createElement(y, k({
					isSubreddit: !0
				}, o)))
			}
			var j = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				w = s("./src/reddit/controls/Typography/index.tsx"),
				S = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = s("./src/reddit/icons/svgs/Circle/index.tsx"),
				I = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				T = s("./node_modules/lodash/range.js"),
				M = s.n(T),
				P = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/layout/row/Inline/index.tsx"),
				A = s("./src/reddit/models/Flair/index.ts"),
				F = s("./src/reddit/selectors/tooltip.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/Settings/shared/Widgets.m.less"),
				U = s.n(L);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(c.a)(b.a),
				W = f.a.wrapped(N.a, "Circle", U.a),
				z = f.a.h3("Label", U.a),
				V = f.a.wrapped(w.c, "Subtext", U.a),
				q = f.a.wrapped(u.a, "HoverTooltip", U.a),
				G = f.a.div("ControlContainer", U.a),
				K = f.a.div("TextContainer", U.a),
				Q = f.a.div("ActionContainer", U.a),
				X = e => {
					let {
						className: t,
						direction: s,
						isCreateCommunity: n,
						inModal: o,
						isNightModeOn: r,
						disabled: i,
						indent: d,
						last: c,
						...m
					} = e;
					return a.a.createElement("div", B({}, m, {
						className: Object(l.a)(U.a.Wrapper, t, {
							[U.a.mColumn]: "column" === s,
							[U.a.mDisabled]: !!i,
							[U.a.mIndent]: !!d,
							[U.a.mLast]: !!c,
							[U.a.isCreateCommunity]: !!n,
							[U.a.inModal]: !!o,
							[U.a.isNightModeOn]: !!r
						})
					}))
				},
				J = f.a.a("Link", U.a),
				Y = f.a.wrapped(J, "SubtextLink", U.a),
				Z = f.a.wrapped(I.a, "LinkIcon", U.a),
				$ = f.a.button("LinkButton", U.a),
				ee = f.a.wrapped(S.a, "ArrowRight", U.a),
				te = e => a.a.createElement(X, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, a.a.createElement(K, {
					className: e.textContainerClassName
				}, a.a.createElement(z, null, e.label, e.isRequired && a.a.createElement(W, null)), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, e.children)),
				se = f.a.div("StyledFlair", U.a),
				ne = f.a.wrapped(se, "SpoilerFlair", U.a),
				ae = f.a.wrapped(se, "NSFWFlair", U.a),
				oe = e => {
					switch (e.flair) {
						case A.f.Nsfw:
							return a.a.createElement(ae, null, "NSFW");
						case A.f.Spoiler:
							return a.a.createElement(ne, null, "SPOILER");
						default:
							return null
					}
				},
				re = e => {
					const t = Object(r.a)();
					return a.a.createElement(X, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, a.a.createElement(K, null, a.a.createElement(R.a, null, a.a.createElement("label", {
						htmlFor: t,
						className: e.labelClassname
					}, a.a.createElement(z, null, e.label))), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, a.a.createElement(G, null, e.tooltip && a.a.createElement(q, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), a.a.createElement(j.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = f.a.input("RangeSliderInput", U.a),
				le = f.a.div("RangeSlider", U.a),
				de = f.a.div("Ticks", U.a),
				ce = f.a.div("TickText", U.a),
				me = f.a.span("PreSubText", U.a),
				ue = Object(i.c)({
					isNightModeOn: D.db
				}),
				pe = Object(o.b)(ue)(e => a.a.createElement(X, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, a.a.createElement(K, {
					style: {
						flex: 5
					}
				}, !e.inModal && a.a.createElement(R.a, null, a.a.createElement(z, {
					className: e.labelClassname
				}, e.label)), !e.hideSubtext && a.a.createElement(V, null, " ", a.a.createElement(me, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), a.a.createElement(Q, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, a.a.createElement(le, null, a.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + M()(1, e.max + 1).map((t, s) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange,
					disabled: e.disabled
				}), a.a.createElement(de, null, Object.keys(e.ticks).map((t, s) => a.a.createElement(ce, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => a.a.createElement(X, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(K, null, a.a.createElement(R.a, null, a.a.createElement(z, null, e.label)), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, a.a.createElement(G, null, a.a.createElement(P.o, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => a.a.createElement(X, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(K, null, a.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, a.a.createElement(Z, null)), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, a.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, a.a.createElement(ee, null)))),
				ge = e => a.a.createElement(X, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(K, null, a.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[U.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, !!e.hintText && a.a.createElement("div", {
					className: U.a.ActionHintText
				}, e.hintText), a.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[U.a.NoColor]: e.color && "none" === e.color
					})
				}, a.a.createElement(ee, {
					className: Object(l.a)({
						[U.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				fe = Object(i.c)({
					isOpen: (e, t) => Object(F.b)(t.id)(e)
				}),
				xe = Object(o.b)(fe, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.id
						}))
					}
				}))(e => a.a.createElement(X, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(K, null, a.a.createElement(z, null, e.label), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, (e => a.a.createElement("div", {
					className: U.a.DropdownWrapper,
					onClick: e.openDropdown
				}, a.a.createElement("span", {
					className: U.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), a.a.createElement(x.b, {
					className: U.a.DropdownTriangle
				}), a.a.createElement(H, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, s) => a.a.createElement(h.b, {
					className: U.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[s] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + s,
					item: t
				}))), e.descriptions && a.a.createElement("div", {
					className: U.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				Ee = e => {
					let {
						disabled: t,
						last: s,
						onClick: o,
						onChange: r,
						...i
					} = e;
					const l = Object(n.useCallback)(e => r(e.target.value), [r]),
						{
							items: d
						} = i;
					return a.a.createElement(X, {
						disabled: t
					}, a.a.createElement(K, null, a.a.createElement("label", {
						htmlFor: i.id
					}, a.a.createElement(z, {
						className: i.labelClassname
					}, i.label)), a.a.createElement(V, null, i.subtext)), a.a.createElement("div", {
						className: U.a.Wrapper__LineBreak
					}), a.a.createElement(X, {
						last: s,
						indent: !0,
						disabled: t
					}, a.a.createElement(O, {
						id: i.id,
						className: "redditStyle",
						disabled: t || i.inputDisabled,
						onChange: l,
						value: i.selected
					}, d.map(e => {
						let {
							value: t,
							displayName: s
						} = e;
						return a.a.createElement("option", {
							key: t,
							value: t
						}, s)
					}))))
				},
				ve = e => a.a.createElement(X, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(K, null, a.a.createElement(z, null, e.label), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, e.children)),
				ke = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && a.a.createElement("span", {
					className: U.a.tag
				}, "r/"), a.a.createElement(g.a, {
					className: e.isCreateCommunity ? U.a.input : void 0,
					disabled: !!e.disabled,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && a.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				_e = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, a.a.createElement(p.i, {
					disabled: !1,
					onChange: e.onChange,
					onFocus: e.onFocus,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					rows: e.rows || 4,
					style: {
						marginBottom: e.isCreateCommunity ? "4px" : 0,
						resize: e.isCreateCommunity ? "vertical" : "both"
					},
					value: e.value,
					onBlur: e.onBlur
				}), a.a.createElement("div", {
					className: U.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && a.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && a.a.createElement("div", {
					className: U.a.ActionLinkContainer
				}, e.actionLink)))
		},
		"./src/reddit/components/Streaming/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_16pMBJPhtfeyyncMfo7aDr",
				topBar: "_1DEjdLJpmb7fufFzhwqQm0",
				contentContainer: "ZV-o_W-prpE7EI4zyZ1hr",
				formBody: "_3xfSWCFu_alfjEX12_hBAB"
			}
		},
		"./src/reddit/components/Streaming/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/streaming/modSettings.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx"),
				u = s("./src/reddit/components/BlockNavigation/index.tsx"),
				p = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				h = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				g = s("./src/reddit/contexts/ApiContext.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/FormFields/index.tsx"),
				E = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/activeModalId.ts"),
				_ = s("./src/reddit/selectors/platform.ts"),
				C = s("./src/reddit/selectors/streamingModSettings.ts"),
				y = s("./src/reddit/components/Streaming/ModSettings/index.m.less"),
				O = s.n(y);
			const j = "streaming-settings-discard-confirmation",
				w = e => Object(c.e)(e, v.b.Error),
				S = Object(i.c)({
					allowNavigationCallback: _.a,
					modSettings: C.e,
					isAddUserModalOpen: e => "ModerationPage--Streaming--AddUser" === Object(k.a)(e),
					isLivestreamingCurrentlyOn: C.d,
					isDiscardModalOpen: Object(k.b)(j),
					isModSettingsSaving: e => Object(C.a)(e)
				}),
				N = Object(r.b)(S, (e, t) => ({
					closeAllModals: () => e(Object(l.f)()),
					onSave: (t, s) => e(Object(d.f)(t, s)),
					onUserAdd: (t, s, n) => e(Object(d.d)(t, s, n)),
					onUserRemove: (t, s, n) => e(Object(d.e)(t, s, n)),
					showToast: t => e(Object(c.f)({
						...t,
						duration: c.a
					})),
					toggleAddUserModal: () => e(Object(l.i)("ModerationPage--Streaming--AddUser")),
					toggleDiscardChangesModal: () => e(Object(l.i)(j))
				})),
				I = e => parseInt(e, 10),
				T = {
					sunday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					monday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					tuesday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					wednesday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					thursday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					friday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					saturday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}]
				},
				M = {
					sunday: [],
					monday: [],
					tuesday: [],
					wednesday: [],
					thursday: [],
					friday: [],
					saturday: []
				};
			class P extends o.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = {
							...this.state.changedModSettings,
							...e
						};
						let s = !1;
						Object.keys(t).forEach(e => {
							t[e] !== this.props.modSettings[e] && (s = !0)
						}), this.setState({
							changedModSettings: t,
							hasUnsavedChanges: s
						})
					}, this.onSaveClick = async () => {
						this.props.onSave(this.state.changedModSettings, this.props.subredditId), this.setState({
							hasUnsavedChanges: !1
						})
					}, this.onUserAdd = async (e, t) => {
						this.isDuplicateUser(t) ? await this.props.showToast(w(n.fbt._("'{username}' has already been added", [n.fbt._param("username", t)], {
							hk: "25Zkkf"
						}))) : this.props.onUserAdd(this.props.subredditId, t, this.props.modSettings)
					}, this.isDuplicateUser = e => !!this.props.modSettings.whitelistedUsers.find(t => t.name === e), this.onDiscardUnsavedChangesConfirmed = () => {
						this.performPendingNavigationIfNeeded()
					}, this.onCloseModal = () => {
						this.props.closeAllModals(), this.resetPendingNavigation()
					}, this.resetPendingNavigation = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.performPendingNavigationIfNeeded = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onUserRemove = async e => {
						this.props.onUserRemove(this.props.subredditId, e, this.props.modSettings)
					}, this.onUserAddButtonClick = () => {
						this.props.toggleAddUserModal()
					}, this.getUpdatedSchedule = e => e ? M : T, this.renderAddUserModal = () => o.a.createElement(m.a, {
						ignoreDefaultFocus: !0,
						onAddSubmitter: this.onUserAdd,
						sendEventWithName: this.noopEventSend,
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleAddUserModal,
						username: "",
						withOverlay: !0
					}), this.noopEventSend = () => () => {}, this.state = {
						changedModSettings: {},
						livestreamingToggleStateOn: this.props.isLivestreamingCurrentlyOn,
						hasUnsavedChanges: !1
					}
				}
				render() {
					const e = {
							...this.props.modSettings,
							...this.state.changedModSettings
						},
						{
							maxLiveStreams: t,
							minKarma: s,
							minAccountAgeDays: a,
							durationLimitSeconds: r,
							broadcasterPrompt: i,
							isDiscoveryUnitShown: l,
							inSubMinKarma: d
						} = e;
					return o.a.createElement("div", {
						className: O.a.container
					}, o.a.createElement(b.c, {
						className: O.a.topBar
					}, o.a.createElement(f.l, {
						onClick: this.onSaveClick,
						disabled: this.props.isModSettingsSaving
					}, this.props.isModSettingsSaving ? o.a.createElement(E.a, {
						className: O.a.loadingIcon,
						sizePx: 14,
						center: !0
					}) : n.fbt._("Save changes", null, {
						hk: "1IXBxj"
					}))), o.a.createElement(b.a, {
						className: O.a.contentContainer
					}, o.a.createElement(b.b, null, n.fbt._("Broadcasting", null, {
						hk: "3WAsEz"
					})), o.a.createElement("div", {
						className: O.a.formBody
					}, o.a.createElement(h.p, {
						on: this.state.livestreamingToggleStateOn,
						label: n.fbt._("Allow RPAN Broadcasts", null, {
							hk: "2Jt8fz"
						}),
						subtext: n.fbt._("Allow live broadcasts to the Reddit Public Access Network (RPAN) in this community.", null, {
							hk: "2wjtPG"
						}),
						onClick: () => {
							const e = !this.state.livestreamingToggleStateOn;
							this.onChange({
								weeklySchedule: this.getUpdatedSchedule(this.state.livestreamingToggleStateOn)
							}), this.setState({
								livestreamingToggleStateOn: e,
								hasUnsavedChanges: e !== this.props.isLivestreamingCurrentlyOn
							})
						}
					}), o.a.createElement(h.p, {
						on: l,
						label: n.fbt._("Display RPAN Discovery Unit", null, {
							hk: "3mInib"
						}),
						subtext: n.fbt._("Allow discovery unit for Reddit Public Access Network (RPAN) to be displayed in this community.", null, {
							hk: "3MsZuO"
						}),
						onClick: () => {
							this.onChange({
								isDiscoveryUnitShown: !l
							})
						}
					}), o.a.createElement(h.l, {
						label: n.fbt._("Maximum live broadcasts", null, {
							hk: "bjAcp"
						}),
						direction: "row",
						subtext: n.fbt._("Set the number of broadcasts that can be live at the same time.", null, {
							hk: "fmNzG"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							maxLiveStreams: I(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						max: 1e3,
						value: t
					})), o.a.createElement(h.l, {
						label: n.fbt._("Required karma", null, {
							hk: "1UzH6K"
						}),
						direction: "row",
						subtext: n.fbt._("Set the amount of global Reddit comment karma someone needs to broadcast live.", null, {
							hk: "1Xa56V"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							minKarma: I(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						value: s
					})), o.a.createElement(h.l, {
						label: n.fbt._("Required community karma", null, {
							hk: "nSuPZ"
						}),
						direction: "row",
						subtext: n.fbt._("Set the amount of community comment karma someone needs to broadcast live.", null, {
							hk: "24qW8L"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							inSubMinKarma: I(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						value: d
					})), o.a.createElement(h.l, {
						label: n.fbt._("Required Account Age", null, {
							hk: "3OXG2v"
						}),
						direction: "row",
						subtext: n.fbt._("Set how old (in days) someone’s Reddit account needs to be to broadcast live.", null, {
							hk: "24iax6"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							minAccountAgeDays: I(e.currentTarget.value)
						}),
						min: 0,
						type: "number",
						value: a
					})), o.a.createElement(h.l, {
						label: n.fbt._("Time Limit", null, {
							hk: "2x8YNI"
						}),
						direction: "row",
						subtext: n.fbt._("Broadcasts will end after hitting this limit (in minutes), unless viewers award them more time.", null, {
							hk: "4wwLJ4"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							durationLimitSeconds: 60 * I(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						max: 1440,
						value: Math.round(r || 0) / 60,
						disabled: !0
					})), o.a.createElement(h.h, {
						label: n.fbt._("RPAN Description", null, {
							hk: "1WiS6G"
						}),
						direction: "row",
						subtext: n.fbt._("Write a quick description of your community to help broadcasters know what you're about", null, {
							hk: "1fcoqh"
						}),
						onChange: e => this.onChange({
							broadcasterPrompt: e.currentTarget.value
						}),
						maxChars: 250,
						rows: 2,
						value: i || ""
					}))), this.props.isAddUserModalOpen && this.renderAddUserModal(), o.a.createElement(u.a, {
						blockOnBeforeUnload: !0,
						dialogId: j,
						enabled: this.state.hasUnsavedChanges
					}), this.props.isDiscardModalOpen && o.a.createElement(p.a, {
						actionText: n.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: n.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: n.fbt._("You have made some changes to broadcasting settings, do you wish to discard the changes?", null, {
							hk: "20tlQp"
						}),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}))
				}
			}
			t.a = Object(g.b)(N(P))
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less": function(e, t, s) {
			e.exports = {
				StyledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				styledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				BreadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				breadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				BreadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbTitle: "_2N7RnlFNJblZD8KUBuiBEQ"
			}
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/helpers/trackers/blade.ts"),
				l = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				d = s("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				c = s.n(d);
			const m = o.a.wrapped(l.a, "StyledChevron", c.a),
				u = o.a.div("BreadcrumbElement", c.a),
				p = o.a.div("BreadcrumbContainer", c.a);
			t.b = Object(r.c)(e => a.a.createElement(p, null, e.breadcrumbs.map(t => a.a.createElement(u, {
				key: t.title,
				onClick: () => {
					e.sendEvent(Object(i.a)()), e.onNavigate(t)
				}
			}, a.a.createElement(m, null), a.a.createElement("span", {
				className: c.a.breadcrumbTitle
			}, t.title)))))
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, s) {
			e.exports = {
				ImageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				imageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				ImageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				imageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				ImageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				imageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				FileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				fileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				ContainerUploading: "rOyNUbZnjJvWxtyInd1T8",
				containerUploading: "rOyNUbZnjJvWxtyInd1T8",
				Label: "_2ZFG2IQMaso9iA14qjicA_",
				label: "_2ZFG2IQMaso9iA14qjicA_",
				isOver: "_1B5UKMPaEBX3HOKKEBfp7o",
				ImageInput: "_362HLUlCiz7UbtVPniNjjW",
				imageInput: "_362HLUlCiz7UbtVPniNjjW"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/FileDrop/index.tsx"),
				l = s("./src/reddit/controls/ImageInput/index.tsx"),
				d = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = s("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				m = s("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = r.a.wrapped(c.a, "ImageUploadIcon", u.a), h = r.a.div("ImageIconRow", u.a), g = r.a.div("ImageUploadText", u.a), f = r.a.wrapped(i.a, "FileDrop", u.a), x = r.a.div("ContainerUploading", u.a), E = e => a.a.createElement(x, {
				className: e.className
			}, a.a.createElement(h, null, a.a.createElement(d.a, {
				sizePx: 40,
				center: !0
			})), a.a.createElement(g, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), v = r.a.label("Label", u.a);
			t.b = e => a.a.createElement(f, {
				className: e.className,
				onDrop: e.onChange,
				render: t => a.a.createElement(v, {
					className: Object(o.a)({
						[u.a.isOver]: t
					}, e.labelClassName)
				}, a.a.createElement(h, null, e.icon || a.a.createElement(b, null)), a.a.createElement(g, null, e.label), a.a.createElement(l.a, {
					className: u.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return r
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return l
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "m", (function() {
				return c
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "j", (function() {
				return k
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = s.n(a);
			const r = n.a.section("FormPage", o.a),
				i = n.a.h1("HomePageTitle", o.a),
				l = n.a.button("HomePageBreadcrumb", o.a),
				d = n.a.div("HomePageGroup", o.a),
				c = n.a.h1("FormPageTitle", o.a),
				m = n.a.div("FormPageSection", o.a),
				u = n.a.div("FormGroup", o.a),
				p = n.a.h2("FormGroupTitle", o.a),
				b = n.a.div("FormElement", o.a),
				h = n.a.div("FormGroupDescription", o.a),
				g = n.a.div("FormItem", o.a),
				f = n.a.h3("FormElementTitle", o.a),
				x = n.a.div("FormElementDescription", o.a),
				E = n.a.div("FormElementError", o.a),
				v = n.a.div("FormElementSubGroup", o.a),
				k = n.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, s) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "g", (function() {
				return E
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Input/ModalInput.tsx"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				r = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = s.n(d);
			const m = n.a.wrapped(a.a, "ModalInput", c.a),
				u = n.a.input("Input", c.a),
				p = n.a.wrapped(l.a, "RadioOn", c.a),
				b = n.a.wrapped(i.a, "RadioOff", c.a),
				h = n.a.wrapped(o.a, "Checkbox", c.a),
				g = n.a.wrapped(r.a, "CheckboxSelected", c.a),
				f = n.a.textarea("Textarea", c.a),
				x = n.a.label("StyledLabel", c.a),
				E = n.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, s) {
			e.exports = {
				FormNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				formNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				disabled: "_2omjYUqCweNidaShU2H5EC",
				DragCard: "ygS6b189jD1GHwzotinJB",
				dragCard: "ygS6b189jD1GHwzotinJB",
				isOverAndCanDrop: "_3_GRCa3UIhqQ68fvB00PLZ",
				isDragging: "_2yg01oNjKP8Gcb4HPjf58k"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				i = s.n(r);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
					let {
						disabled: t,
						...s
					} = e;
					return a.a.createElement("div", l({}, s, {
						className: Object(o.a)(i.a.FormNavElement, {
							[i.a.disabled]: t
						})
					}), s.children)
				},
				c = e => {
					let {
						canDrop: t,
						className: s,
						isDragging: n,
						isOver: r,
						disabled: d,
						...c
					} = e;
					return a.a.createElement("div", l({}, c, {
						className: Object(o.a)(i.a.DragCard, {
							[i.a.disabled]: d,
							[i.a.isDraffing]: n,
							[i.a.isOverAndCanDrop]: r && t
						}, s)
					}))
				}
		},
		"./src/reddit/components/SubredditContent/EventPostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/eventPosts/index.ts"),
				c = s("./src/reddit/components/ClassicPost/index.tsx"),
				m = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				u = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/components/SubredditContent/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				E = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/routes/postCreation/index.ts"),
				_ = s("./src/reddit/selectors/eventPosts.ts"),
				C = s("./src/reddit/components/SubredditContent/index.m.less"),
				y = s.n(C);
			const O = Object(l.c)({
					eventPosts: _.f,
					isPending: _.d,
					hasData: _.b,
					endCursor: _.a
				}),
				j = Object(r.b)(O, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						onClickPost: t => {
							e(Object(x.a)(t.permalink))
						},
						fetchMorePosts: () => {
							e(Object(d.eventPostsRequested)(s))
						}
					}
				});
			class w extends o.a.PureComponent {
				renderEmptyState() {
					const {
						subredditName: e
					} = this.props;
					return o.a.createElement(m.c, {
						className: y.a.emptyStateContainer,
						text: n.fbt._("No upcoming or live events in r/{subredditName}", [n.fbt._param("subredditName", e)], {
							hk: "3wRma7"
						}),
						childrenPosition: "bottom"
					}, o.a.createElement(v.a, {
						name: "scheduled",
						className: y.a.icon
					}), o.a.createElement(i.a, {
						className: y.a.schedulePostLink,
						to: Object(k.c)(e)
					}, n.fbt._("Create Event Post", null, {
						hk: "PXBmQ"
					})))
				}
				renderBody() {
					const {
						endCursor: e,
						eventPosts: t,
						fetchMorePosts: s,
						hasData: n,
						onClickPost: a
					} = this.props;
					return o.a.createElement("div", {
						className: y.a.contentContainer
					}, o.a.createElement("div", {
						className: y.a.standaloneContainer
					}, n ? o.a.createElement(p.b, {
						className: y.a.scroller,
						onLoadMore: s,
						loadMoreToken: e || void 0
					}, t.map((e, t) => ({
						id: e.id,
						estHeight: Object(E.c)(e, g.g.Classic),
						render: s => o.a.createElement(c.default, {
							key: `event-post-id-${e.id}`,
							postId: e.id,
							className: y.a.eventPostContainer,
							first: 0 === t,
							isOverlay: !1,
							onClickPost: () => a(e)
						})
					}))) : this.renderEmptyState()))
				}
				render() {
					const {
						isPending: e,
						hasData: t
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(u.c, null, o.a.createElement(i.a, {
						to: Object(k.c)(this.props.subredditName)
					}, o.a.createElement(f.l, null, n.fbt._("Schedule an event post", null, {
						hk: "nk1bA"
					})))), o.a.createElement(u.a, null, o.a.createElement(u.b, {
						className: y.a.pageTitle
					}, n.fbt._("Upcoming and live events", null, {
						hk: "MAeQO"
					})), !t && e ? Object(b.a)() : this.renderBody(), t && e && Object(b.a)(1)))
				}
			}
			t.a = j(Object(h.c)(w))
		},
		"./src/reddit/components/SubredditContent/PredictionsContent/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-SubredditContent-PredictionsContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-SubredditContent-PredictionsContent").then(s.bind(null, "./src/reddit/components/SubredditContent/PredictionsContent/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditContent/PredictionsContent/index.tsx"
				}
			})
		},
		"./src/reddit/components/SubredditContent/ScheduledPostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/reddit/actions/scheduledPosts/index.ts"),
				d = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				c = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/lib/CSSVariableProvider/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/components/Paginator/index.m.less"),
				f = s.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = e => {
				const {
					isNextButton: t,
					isActive: s,
					...n
				} = e;
				return o.a.createElement(h.i, x({
					disabled: !s
				}, n))
			};
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.onHandlePrev = () => this.onHandlePageChange(!1), this.onHandleNext = () => this.onHandlePageChange(!0), this.state = {
						currentCursor: void 0
					}
				}
				getCurrentCursorIdx() {
					const {
						items: e
					} = this.props, {
						currentCursor: t
					} = this.state;
					return t ? e.findIndex(e => e.id === t) : -1
				}
				getRenderableItems() {
					const {
						items: e,
						itemsPerPage: t
					} = this.props, s = this.getCurrentCursorIdx() + 1;
					return e.slice(s, s + t)
				}
				hasPrevPage() {
					return !(this.getCurrentCursorIdx() <= 0)
				}
				hasNextPage() {
					const {
						items: e,
						itemsPerPage: t
					} = this.props;
					return !(this.getCurrentCursorIdx() + t > e.length - 2)
				}
				onHandlePageChange(e) {
					const {
						items: t,
						itemsPerPage: s
					} = this.props, n = this.getCurrentCursorIdx();
					if (e && !this.hasNextPage()) return;
					if (!e && !this.hasPrevPage()) return;
					const a = e ? Math.max(-1, Math.min(n + s, t.length - 2)) : Math.max(-1, n - s);
					this.setState({
						currentCursor: t[a] ? t[a].id : void 0
					})
				}
				renderControlRow() {
					const {
						usePortalForControlRow: e,
						controlRowPortal: t,
						pagerButton: s = E
					} = this.props, a = this.hasPrevPage(), r = this.hasNextPage();
					if (!a && !r) return null;
					const i = o.a.createElement("div", {
						className: f.a.controlRow
					}, o.a.createElement("span", {
						className: f.a.prevButtonContainer
					}, o.a.createElement(s, {
						className: f.a.prevButton,
						onClick: this.onHandlePrev,
						isNextButton: !1,
						isActive: a
					}, n.fbt._("Previous", null, {
						hk: "4hX0ue"
					}))), o.a.createElement("span", {
						className: f.a.nextButtonContainer
					}, o.a.createElement(s, {
						className: f.a.nextButton,
						onClick: this.onHandleNext,
						isNextButton: !0,
						isActive: r
					}, n.fbt._("Next", null, {
						hk: "2mEXAi"
					}))));
					return e && !t ? null : t ? Object(b.d)(i, t) : i
				}
				render() {
					const {
						className: e,
						lastItemClassName: t,
						itemComponent: s
					} = this.props, n = this.getRenderableItems();
					return o.a.createElement("div", {
						className: e
					}, n.map((e, a) => o.a.createElement(s, {
						className: t && a === n.length - 1 ? t : void 0,
						key: e.id,
						item: e
					})), this.renderControlRow())
				}
			}
			var k = v,
				_ = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				C = s("./src/reddit/components/RecurringPostList/ChangePageButton/index.m.less"),
				y = s.n(C);
			var O = e => o.a.createElement("button", {
					className: Object(u.a)(y.a.button, e.className, {
						[y.a.prevButton]: !e.isNextButton,
						[y.a.disabled]: !e.isActive
					}),
					onClick: e.onClick,
					disabled: !e.isActive
				}, o.a.createElement(_.a, {
					className: y.a.arrowIcon
				})),
				j = s("./src/reddit/components/RecurringPostList/EditModal/async.tsx"),
				w = s("./src/reddit/components/RecurringPostList/RecurringPost/index.tsx"),
				S = s("./src/reddit/components/TrackingHelper/index.tsx"),
				N = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = s("./src/reddit/icons/fonts/index.tsx"),
				T = s("./src/reddit/routes/postCreation/index.ts"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				R = s("./src/reddit/components/RecurringPostList/index.m.less"),
				A = s.n(R);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = 5, L = Object(m.c)({
				recurringPosts: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(P.l)(e, {
						subredditId: s.id
					})
				},
				editModalIsOpen: e => Object(M.a)(e) === w.a,
				editingRecurringPostId: P.d,
				editingRecurringPostSubredditId: P.e
			});
			class U extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.pageButtonPortalRef = o.a.createRef(), this.onEditModalSuccessfulSave = () => {
						this.props.editModalIsOpen && this.props.toggleModal()
					}, this.onClickLink = () => {
						this.props.sendEvent(Object(N.j)())
					}
				}
				renderEmptyState() {
					return o.a.createElement(d.c, {
						className: A.a.emptyContainer,
						text: F._("No recurring posts", null, {
							hk: "2G7szl"
						}),
						childrenPosition: "bottom"
					}, o.a.createElement(I.a, {
						name: "refresh",
						className: A.a.icon
					}), o.a.createElement(i.a, {
						className: A.a.schedulePostLink,
						onClick: this.onClickLink,
						to: Object(T.c)(this.props.subreddit.name)
					}, F._("Schedule recurring post", null, {
						hk: "1TrUPC"
					})))
				}
				render() {
					const {
						className: e,
						recurringPosts: t,
						editModalIsOpen: s,
						subreddit: n,
						editingRecurringPostSubredditId: a,
						editingRecurringPostId: r
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(u.a)(e, A.a.postList)
					}, o.a.createElement("div", {
						className: A.a.titleContainer
					}, F._("Recurring posts", null, {
						hk: "30aHKv"
					}), o.a.createElement("div", {
						ref: this.pageButtonPortalRef,
						className: A.a.pageButtonPortal
					})), t.length ? o.a.createElement(k, {
						className: A.a.recurringPostsContainer,
						lastItemClassName: A.a.lastRecurringPostItem,
						itemsPerPage: D,
						items: t,
						itemComponent: w.b,
						pagerButton: O,
						usePortalForControlRow: !0,
						controlRowPortal: this.pageButtonPortalRef.current
					}) : this.renderEmptyState()), s && !!r && !!a && n.id === a && o.a.createElement(j.a, {
						scheduledPostId: r,
						subredditId: a,
						onSuccessfulSave: this.onEditModalSuccessfulSave,
						withOverlay: !0
					}))
				}
			}
			var B = Object(r.b)(L, (e, t) => ({
					toggleModal: () => e(Object(p.i)(w.a))
				}))(Object(S.c)(U)),
				H = s("./src/reddit/components/ScheduledPost/index.tsx"),
				W = s("./src/reddit/components/Scroller/Simple.tsx"),
				z = s("./src/reddit/components/SubredditContent/index.tsx"),
				V = s("./src/reddit/components/SubredditContent/index.m.less"),
				q = s.n(V),
				G = s("./src/reddit/models/ScheduledPost/index.ts");
			const K = Object(m.c)({
					isLoading: P.i,
					hasData: (e, t) => {
						let {
							subreddit: s
						} = t;
						return Object(P.h)(e, {
							subredditId: s.id
						})
					},
					standalonePosts: (e, t) => {
						let {
							subreddit: s
						} = t;
						return Object(P.q)(e, {
							subredditId: s.id
						})
					},
					loadMoreToken: (e, t) => {
						let {
							subreddit: s
						} = t;
						return Object(P.c)(e, {
							subredditId: s.id,
							type: G.g.standalonePosts
						})
					}
				}),
				Q = Object(r.b)(K, (e, t) => {
					let {
						subreddit: s
					} = t;
					return {
						onLoadMoreStandaloneScheduledPosts: () => e(Object(l.a)(s.id))
					}
				});
			class X extends o.a.PureComponent {
				render() {
					const {
						hasData: e,
						standalonePosts: t,
						onLoadMore: s,
						loadMoreToken: n,
						renderEmptyState: a,
						subreddit: r
					} = this.props;
					return o.a.createElement("div", {
						className: q.a.contentContainer
					}, o.a.createElement("div", {
						className: q.a.standaloneContainer
					}, e && t.length ? o.a.createElement(W.b, {
						className: q.a.scroller,
						onLoadMore: s,
						loadMoreToken: n || void 0
					}, t.map(e => ({
						id: e.id,
						estHeight: 112,
						render: t => o.a.createElement(H.a, {
							key: `scheduled-post-id-${e.id}`,
							scheduledPostId: e.id,
							subredditId: e.subreddit.id
						})
					}))) : a()), o.a.createElement(B, {
						className: q.a.sidebar,
						subreddit: r
					}))
				}
			}
			class J extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.renderStandaloneEmptyState = () => {
						const {
							subreddit: e
						} = this.props;
						return o.a.createElement(d.c, {
							className: q.a.emptyStateContainer,
							text: n.fbt._("No scheduled posts in r/{subredditName}", [n.fbt._param("subredditName", e.name)], {
								hk: "mUwQ4"
							}),
							childrenPosition: "bottom"
						}, o.a.createElement(I.a, {
							name: "history",
							className: q.a.icon
						}), o.a.createElement(i.a, {
							className: q.a.schedulePostLink,
							to: Object(T.c)(e.name)
						}, n.fbt._("Schedule post", null, {
							hk: "xI07X"
						})))
					}
				}
				renderBody() {
					const {
						hasData: e,
						loadMoreToken: t,
						onLoadMoreStandaloneScheduledPosts: s,
						standalonePosts: n,
						subreddit: a
					} = this.props;
					return o.a.createElement(X, {
						renderEmptyState: this.renderStandaloneEmptyState,
						hasData: e,
						standalonePosts: n,
						onLoadMore: s,
						subreddit: a,
						loadMoreToken: t
					})
				}
				render() {
					const {
						isLoading: e,
						hasData: t,
						subreddit: s
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(c.c, null, o.a.createElement(i.a, {
						to: Object(T.c)(s.name)
					}, o.a.createElement(h.l, null, n.fbt._("Schedule Post", null, {
						hk: "2Ygkzg"
					})))), o.a.createElement(c.a, null, o.a.createElement(c.b, {
						className: q.a.pageTitle
					}, n.fbt._("Scheduled posts", null, {
						hk: "28Qjmj"
					})), !t && e ? Object(z.a)() : this.renderBody(), t && e && Object(z.a)(1)))
				}
			}
			t.a = Q(J)
		},
		"./src/reddit/components/SubredditContent/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1N366WahaKnCqUlSezl6CQ",
				titleFontH2: "_2ySCAslCokkxUasLc4m7l0",
				titleFontH3: "_3Na_u-vwpkuPZfuuvUROk-",
				titleFontH4: "_30jImFPUovcaQMWasU-Ohq",
				titleFontH5: "_1fkIEAH9a9eCt2B8XAaUbq",
				titleFontH6: "bHSjFLbSCNEywMorkTrqn",
				metadataFont: "_2Qe8DvvY_RxPEkj-mRpX65",
				flairFont: "_1TXuHKPD3YeZiCgMqyoBBe",
				labelsFont: "_1MiMOmZyBl0g5x8oLzodW8",
				actionFont: "_3USAKL0kbrc0ZhCvZS-J4j",
				smallButtonFont: "_2JaNUow_hy9X8yw0QFNOSg",
				largeButtonFont: "_2QdyaDMXRLLL3gChJ0NOE9",
				strongTextFont: "_3qauH8UCZvDtHIr65uebN5",
				tabFont: "_1bq9fxhlMVaxA2GQdVomf4",
				buttonFontXS: "_7W4YggPAccJm6b7j_5tM_",
				buttonFontXs: "_7W4YggPAccJm6b7j_5tM_",
				buttonFontS: "_2ZBn3QtRUE4GU3UTdoCOzY",
				buttonFontM: "_1FF_0_g8KF3VAe3NMA-Lu6",
				buttonFontL: "_12R7hgqLzyY_mHo7tL6VIy",
				buttonFontXL: "_1c2eC_5e586qF7hV3NBVj_",
				buttonFontXl: "_1c2eC_5e586qF7hV3NBVj_",
				bodyFontH1: "_2qU2oh77HnIxSqTey1ZezW",
				bodyFontH2: "_2XZkZ1zrfSvpi64O-KP4IB",
				bodyFontH3: "_1icF_z4wcZT687-ao6Mzr7",
				bodyFontH4: "ZRi07Zo9aba1n7XQY_Xio",
				bodyFontH5: "_1dhvcwu2KcypL8_En9Aa7I",
				bodyFontH6: "_1FGIk1pK7xZjRbWXhruioE",
				bodyFontH6Small: "gX_Loj9AWtmLld5X2fYAM",
				bodyFont: "_3xTpswgMylBeM6Y-XFNTUD",
				bodyFontSmall: "_3U8U5anYwaLfjJvSrrhIKo",
				bodyFontMono: "_1VL2XaMyhrq5PiMxCa8tkv",
				icon: "_1wICBaO2ARQK5N8CBXP8kI",
				schedulePostLink: "_3hO2emEyTZ-txWczRsI6lb",
				betaIndicator: "q9zqS5nIMgIr22a55zflg",
				pageTitle: "_2HS4U5X7Rt3fT__Kpgmp9M",
				contentContainer: "_2i38uCMOvjLO0N4T-QGmV1",
				scroller: "_2toQcR3aw1_hj1A49e4wi7",
				sidebar: "_3Pz5gIKK5q2FYttguHTNa3",
				emptyStateContainer: "_3uHuaRL_-Tec711luXRhl8",
				standaloneContainer: "Q7W5RJknO1UJ-qscCW0k6",
				eventPostContainer: "_1WvFOm4w7Qt8CpM_XKK9y8"
			}
		},
		"./src/reddit/components/SubredditContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/ClassicPost/Placeholder.tsx");

			function r() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
				const t = [];
				for (let s = 0; s < e; s++) t.push(a.a.createElement(o.b, {
					isLoading: !0
				}));
				return a.a.createElement(a.a.Fragment, null, t)
			}
		},
		"./src/reddit/components/SubredditCreationModal/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				Content: "gGAX8JwsFcDSDsT5KcKrL",
				content: "gGAX8JwsFcDSDsT5KcKrL",
				Container: "_1J0hJj-EXr49KppYTmtS9S",
				container: "_1J0hJj-EXr49KppYTmtS9S",
				ContainerExp: "_3Cb_x0VK1tr3QTaBDGU_-K",
				containerExp: "_3Cb_x0VK1tr3QTaBDGU_-K",
				OuterContainer: "_1wLNhgzYyv0-JBg0BfYf3Y",
				outerContainer: "_1wLNhgzYyv0-JBg0BfYf3Y"
			}
		},
		"./src/reddit/components/SubredditCreationModal/index.m.less": function(e, t, s) {
			e.exports = {
				sublabel: "_1l4AkEjhz6oh1lmsJv-6Oo",
				subtitle: "SJ8r-Lx8GZVAGXaT954wj",
				radioDescription: "_1FBE2BnOrrXe8bCr6ZLfGq",
				buttonContainer: "pllx1jz7x_s-pSUC5f15v",
				field: "_2m493sVo9iDo-3EBxQrAJc",
				isCreatePending: "_39K9U8eGRvjiN3lSUWfoXF",
				subredditCreation: "_3O95baBiXBhn2SNtTQXPun",
				container: "o5ISTIh6L_lvDC1gObc76",
				title: "_2d-OkUXQj6P8CRIrcoi1i9",
				nsfw: "_3bx-zSg4-Vgfi3x1IUw6QP",
				createButton: "_2shIfL3K7ivaojvZFjvI-Z",
				pendingText: "A8PHuGr_4pbV_7t_GaokO",
				metaFieldDescription: "HsJgPFCmZ8OKgFe3tYiOB",
				numCommunityTopicsSelected: "_3-RTBwxKbhnYzfNZydOubp",
				subtextContainer: "_1V3LfcGf8bnGW9vw7JkOOs",
				radioContainer: "_247NCf2PSxl4rhmx2dDhDC",
				radioContent: "_2QiRZZs4K5lTjMTuSaMgDC",
				textButton: "c6YtB-MsWwD2pwSxCRQWE",
				fullWidthTextContainer: "_39cm2YKltxh0YW0O1f54y3",
				Info: "_16_IgJ4BqtadthCKIpnW1g",
				info: "_16_IgJ4BqtadthCKIpnW1g",
				RadioOption: "_12umGu0WfWJw9rxGq4ykrZ",
				radioOption: "_12umGu0WfWJw9rxGq4ykrZ",
				StyledTooltip: "j2Jvuy8Yu-jexJED1Ap51",
				styledTooltip: "j2Jvuy8Yu-jexJED1Ap51",
				RadioIcon: "_1g89RGQdzecmnfVeXck6JL",
				radioIcon: "_1g89RGQdzecmnfVeXck6JL",
				Employee: "_2gDVAtwwxskByrxI2Zr9BL",
				employee: "_2gDVAtwwxskByrxI2Zr9BL",
				Private: "_1Ma7YYe0ShiEmNSS16r18H",
				private: "_1Ma7YYe0ShiEmNSS16r18H",
				Public: "_3WyydSidemq34inFmhA1SE",
				public: "_3WyydSidemq34inFmhA1SE",
				Restricted: "CodbGPlWjCpPE6jWVhkOn",
				restricted: "CodbGPlWjCpPE6jWVhkOn",
				CloseButton: "_1P7Eow5rs9Xxm1uqMMEr2h",
				closeButton: "_1P7Eow5rs9Xxm1uqMMEr2h",
				ErrorText: "_2dXAoHGf_uRg0D6ofrpJbr",
				errorText: "_2dXAoHGf_uRg0D6ofrpJbr"
			}
		},
		"./src/reddit/components/SubredditCreationModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "radioOptions", (function() {
				return ie
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/subredditCreation.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				b = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				g = s("./src/reddit/contexts/NavbarExp.ts"),
				f = s("./src/reddit/components/SubredditCreationModal/Layout/index.m.less"),
				x = s.n(f);
			var E = e => {
					const t = Object(a.useContext)(g.a);
					return o.a.createElement("div", {
						className: x.a.OuterContainer
					}, o.a.createElement("div", {
						className: Object(d.a)(e.className, x.a.Container)
					}, o.a.createElement("div", {
						className: Object(d.a)(x.a.Content, {
							[x.a.ContainerExp]: t
						})
					}, e.children)))
				},
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/constants/modals.ts"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/controls/CheckboxInput/index.tsx"),
				y = s("./src/reddit/controls/ErrorText/index.tsx"),
				O = s("./src/reddit/controls/RadioInput/index.tsx"),
				j = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				w = s("./src/reddit/controls/TextButton/index.tsx"),
				S = s("./src/reddit/helpers/trackers/emailInvite.ts"),
				N = s("./src/reddit/helpers/trackers/screenview.ts"),
				I = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				T = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				M = s("./src/reddit/icons/svgs/Close/index.tsx"),
				P = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				R = s("./src/reddit/icons/svgs/Info/index.tsx"),
				A = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				F = s("./src/reddit/icons/svgs/User/index.tsx"),
				D = s("./src/reddit/models/Subreddit/index.ts"),
				L = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				U = s("./src/reddit/selectors/experiments/emailInvite.ts"),
				B = s("./src/reddit/selectors/subreddit.ts"),
				H = s("./src/reddit/selectors/tags.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				z = s("./src/lib/formatApiError/index.ts");
			const V = (e, t) => {
				if (!e) return {};
				const s = e.fields && e.fields.length && e.fields[0] && e.fields[0].field,
					a = e.type;
				if ("name" === s) {
					if ("NO_TEXT" === a) return {
						name: n.fbt._("A community name is required", null, {
							hk: "QIlYS"
						})
					};
					if ("BAD_SR_NAME" === a) return {
						name: n.fbt._("Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.", null, {
							hk: "2rmVgd"
						})
					};
					if ("SUBREDDIT_EXISTS" === a) return {
						name: n.fbt._("Sorry, r/{subreddit name attempt} is taken. Try another.", [n.fbt._param("subreddit name attempt", t)], {
							hk: "CLwzs"
						})
					};
					if ("SUBREDDIT_UNAVAILABLE" === a) return {
						name: n.fbt._("This community name is unavailable", null, {
							hk: "15j6BB"
						})
					}
				}
				return {
					generic: Object(z.a)(e)
				}
			};
			var q = s("./src/reddit/components/SubredditCreationModal/index.m.less"),
				G = s.n(q),
				K = s("./src/lib/lessComponent.tsx");
			const Q = 21,
				X = "create-title-info",
				J = K.a.wrapped(R.a, "Info", G.a),
				Y = K.a.wrapped(j.a, "RadioOption", G.a),
				Z = K.a.wrapped(b.c, "Tooltip", G.a),
				$ = K.a.wrapped(F.a, "Public", G.a),
				ee = K.a.wrapped(P.a, "Restricted", G.a),
				te = K.a.wrapped(A.a, "Private", G.a),
				se = K.a.wrapped(T.a, "Employee", G.a),
				ne = K.a.wrapped(M.a, "CloseButton", G.a),
				ae = K.a.wrapped(y.b, "ErrorText", G.a),
				oe = Object(i.c)({
					error: B.f,
					isCreatePending: B.j,
					isEmailInviteExperimentEnabled: U.a,
					isEmployee: W.N,
					crosspostId: B.i,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(W.pb)(e),
					userIsSuspended: W.X,
					allTags: H.e,
					existingTags: H.f,
					newTags: H.g,
					selectedPrimaryTagId: H.h
				}),
				re = Object(r.b)(oe, e => ({
					createCommunity: t => e(Object(m.h)(t)),
					clearErrors: () => e(Object(m.f)()),
					onCloseModal: () => e(Object(c.g)(k.a.SUBREDDIT_CREATION_MODAL_ID)),
					onShowTooltip: () => e(Object(u.f)({
						tooltipId: X
					})),
					onHideTooltip: () => e(Object(u.i)()),
					validateSubredditName: t => e(Object(m.i)(t))
				})),
				ie = (e, t) => [o.a.createElement(Y, {
					key: "public",
					showButton: !0,
					value: "public"
				}, o.a.createElement("div", {
					className: G.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement($, null)), o.a.createElement("div", {
					className: G.a.radioContainer
				}, o.a.createElement("div", {
					className: G.a.sublabel
				}, n.fbt._("Public", null, {
					hk: "DK992"
				})), o.a.createElement("div", {
					className: Object(d.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, n.fbt._("Anyone can view, post, and comment to this community", null, {
					hk: "1PfFUA"
				}))))), o.a.createElement(Y, {
					key: "restricted",
					showButton: !0,
					value: "restricted"
				}, o.a.createElement("div", {
					className: G.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(ee, null)), o.a.createElement("div", {
					className: G.a.radioContainer
				}, o.a.createElement("div", {
					className: G.a.sublabel
				}, n.fbt._("Restricted", null, {
					hk: "1iBTDq"
				})), o.a.createElement("div", {
					className: Object(d.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, Object(L.g)(t))))), o.a.createElement(Y, {
					key: "private",
					showButton: !0,
					value: "private"
				}, o.a.createElement("div", {
					className: G.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(te, null)), o.a.createElement("div", {
					className: G.a.radioContainer
				}, o.a.createElement("div", {
					className: G.a.sublabel
				}, n.fbt._("Private", null, {
					hk: "3q5SYn"
				})), o.a.createElement("div", {
					className: Object(d.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, n.fbt._("Only approved users can view and submit to this community", null, {
					hk: "3z8OI6"
				}))))), o.a.createElement(Y, {
					key: "employees_only",
					showButton: !0,
					value: "employees_only",
					hidden: !e
				}, o.a.createElement("div", {
					className: G.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(se, null)), o.a.createElement("div", {
					className: G.a.radioContainer
				}, o.a.createElement("div", {
					className: G.a.sublabel
				}, n.fbt._("Employees only", null, {
					hk: "1arrQC"
				})), o.a.createElement("div", {
					className: Object(d.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, n.fbt._("Only Reddit employees can view and submit to this community", null, {
					hk: "3ty23C"
				})))))];
			class le extends o.a.Component {
				constructor(e) {
					super(e), this.onNameChange = e => {
						this.setState({
							name: e.target.value
						}), this.props.clearErrors()
					}, this.update = (e, t) => this.setState({
						[t]: e
					}), this.onTypeChange = e => {
						this.setState({
							type: e
						})
					}, this.onInviteViaEmailClick = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(S.a)("community_creation")), this.setState({
							showEmailInviteModal: !0
						})
					}, this.onCloseInviteViaEmailModal = () => {
						this.setState({
							showEmailInviteModal: !1
						})
					}, this.onCreateCommunityClick = () => {
						this.props.isCreatePending || (clearTimeout(this.timeout), this.props.createCommunity({
							name: this.state.name,
							publicDescription: "",
							type: this.state.type,
							over18: this.state.over18,
							restrictCommenting: this.state.restrictCommenting,
							restrictPosting: this.state.restrictPosting,
							allTags: this.props.allTags,
							newTags: this.props.newTags,
							crosspostId: this.state.crosspostId,
							existingTags: this.props.existingTags,
							primaryTagId: this.props.selectedPrimaryTagId || void 0
						}), this.timeout = window.setTimeout(() => {
							this.props.isCreatePending && this.setState({
								waitingForSuccessfulCommunity: !0
							})
						}, 2e3))
					}, this.onValidateSubredditName = () => this.props.validateSubredditName(this.state.name), this.onCloseModal = () => {
						this.props.sendEvent(Object(I.b)()), this.props.onCloseModal()
					}, this.onCancelCreation = () => {
						this.props.onCloseModal(), this.props.sendEvent(Object(I.b)())
					}, this.onUpdateOver18 = () => this.update(!this.state.over18, "over18"), this.state = {
						name: "",
						type: D.g.Public,
						crosspostId: e.crosspostId,
						over18: !1,
						waitingForSuccessfulCommunity: !1,
						restrictCommenting: !1,
						restrictPosting: !0,
						showEmailInviteModal: !1
					}
				}
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(N.x)())
				}
				componentWillUnmount() {
					clearTimeout(this.timeout), this.props.clearErrors()
				}
				render() {
					const {
						error: e,
						isCreatePending: t,
						isEmailInviteExperimentEnabled: s,
						isEmployee: a,
						onHideTooltip: r,
						onShowTooltip: i,
						sendEvent: l,
						userDoesNotHaveEnoughExpToCreateCommunity: c,
						userIsSuspended: m
					} = this.props, u = V(e, this.state.name), {
						over18: b,
						showEmailInviteModal: g,
						waitingForSuccessfulCommunity: f
					} = this.state;
					return o.a.createElement(E, {
						className: G.a.subredditCreation
					}, o.a.createElement("div", {
						className: G.a.container
					}, o.a.createElement("h1", {
						className: G.a.title
					}, n.fbt._("Create a community", null, {
						hk: "SlFa7"
					}), o.a.createElement(ne, {
						onClick: this.onCloseModal
					})), c ? o.a.createElement("h2", {
						className: G.a.sublabel
					}, n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "44qhJp"
					})) : m ? o.a.createElement("h2", {
						className: G.a.sublabel
					}, n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "3trJMZ"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(h.e, {
						isCreateCommunity: !0,
						label: n.fbt._("Name", null, {
							hk: "3OIzgl"
						}),
						textContainerClassName: G.a.fullWidthTextContainer,
						onBlur: this.onValidateSubredditName,
						onChange: this.onNameChange,
						maxChars: Q,
						value: this.state.name,
						subtext: o.a.createElement("span", {
							className: G.a.subtextContainer
						}, n.fbt._("Community names including capitalization cannot be changed.", null, {
							hk: "VjrZg"
						}), o.a.createElement("span", {
							id: X,
							onMouseEnter: i,
							onMouseLeave: r,
							className: G.a.info
						}, o.a.createElement(J, null), o.a.createElement(Z, {
							className: G.a.StyledTooltip,
							caretOnTop: !0,
							tooltipId: X,
							text: n.fbt._('Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").', null, {
								hk: "3RsycS"
							})
						})))
					}), u.name && o.a.createElement(ae, null, u.name), o.a.createElement(h.l, {
						label: n.fbt._("Community type", null, {
							hk: "152EhZ"
						}),
						direction: "column",
						isCreateCommunity: !0,
						textContainerClassName: G.a.fullWidthTextContainer
					}, o.a.createElement(O.a, {
						value: this.state.type,
						name: "type",
						onChange: this.onTypeChange
					}, ie(a, "post"))), o.a.createElement("div", {
						className: Object(d.a)(G.a.field, {
							[G.a.isCreatePending]: t
						})
					}, o.a.createElement("div", {
						className: G.a.subtitle
					}, n.fbt._("Adult content", null, {
						hk: "20arB"
					})), o.a.createElement(C.a, {
						name: "over18",
						value: b,
						onChange: this.onUpdateOver18,
						disabled: t
					}, o.a.createElement("div", {
						className: G.a.nsfw
					}, "NSFW"), o.a.createElement("div", {
						className: G.a.sublabel
					}, n.fbt._("18+ year old community", null, {
						hk: "1XxZMV"
					})))), s && o.a.createElement("div", {
						className: Object(d.a)(G.a.field, {
							[G.a.isCreatePending]: t
						})
					}, o.a.createElement(w.a, {
						className: G.a.textButton,
						onClick: this.onInviteViaEmailClick
					}, n.fbt._("Invite members via email", null, {
						hk: "2uViIf"
					}))), u.generic && o.a.createElement(ae, null, u.generic), f && o.a.createElement("div", {
						className: G.a.pendingText
					}, n.fbt._("Your community is being created...", null, {
						hk: "3dSTrq"
					})), o.a.createElement("div", {
						className: G.a.buttonContainer
					}, o.a.createElement(_.t, {
						disabled: t,
						className: G.a.createButton,
						onClick: this.onCancelCreation,
						priority: _.c.Secondary
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(_.t, {
						disabled: t,
						className: G.a.createButton,
						onClick: this.onCreateCommunityClick
					}, n.fbt._("Create Community", null, {
						hk: "QE8Y3"
					}))))), g && o.a.createElement(p.a, {
						onClose: this.onCloseInviteViaEmailModal,
						sendEvent: l
					}))
				}
			}
			t.default = Object(l.a)(Object(v.c)(re(le)))
		},
		"./src/reddit/components/SubredditModerationSearch/index.m.less": function(e, t, s) {
			e.exports = {
				SearchIcon: "_2LL7WLn2-4Pv8zCUsmDPv9",
				searchIcon: "_2LL7WLn2-4Pv8zCUsmDPv9",
				NoResultsContainer: "_38zxhEjlOjKTVFYaSwtDTL",
				noResultsContainer: "_38zxhEjlOjKTVFYaSwtDTL",
				Container: "_3RNapyf_4ZQOEfoJhVRMEO",
				container: "_3RNapyf_4ZQOEfoJhVRMEO",
				SearchStatusBar: "_3yWFGY3HrViWVFFUCsTUjv",
				searchStatusBar: "_3yWFGY3HrViWVFFUCsTUjv",
				SearchStatus: "uTK2QKUebu8hg0gYZWTI7",
				searchStatus: "uTK2QKUebu8hg0gYZWTI7",
				Bold: "_2u65S50DJfsU-z8bR0G2DQ",
				bold: "_2u65S50DJfsU-z8bR0G2DQ"
			}
		},
		"./src/reddit/components/SubredditModerationSearch/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				u = s("./src/reddit/icons/svgs/Search/index.tsx"),
				p = s("./src/reddit/components/SubredditModerationSearch/index.m.less"),
				b = s.n(p);
			const h = r.a.wrapped(u.a, "SearchIcon", b.a),
				g = r.a.wrapped(i.a, "NoResultsContainer", b.a),
				f = r.a.div("Container", b.a),
				x = r.a.wrapped(c.a, "SearchStatusBar", b.a),
				E = r.a.div("SearchStatus", b.a),
				v = r.a.span("Bold", b.a);

			function k(e) {
				if (e.searchPending) return null;
				const t = Object(d.a)(e.searchTerm);
				return e.noResultsFound ? o.a.createElement(g, null, o.a.createElement(h, null), o.a.createElement(i.b, null, n.fbt._("No results for {searchTerm}", [n.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), o.a.createElement(l.r, {
					onClick: e.cancelSearch
				}, n.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : o.a.createElement(f, null, o.a.createElement(x, null, o.a.createElement(E, null, n.fbt._("1 search result for {=[searchTerm]}", [n.fbt._param("=[searchTerm]", o.a.createElement(v, {
					"data-redditstyle": !0
				}, n.fbt._("{searchTerm}", [n.fbt._param("searchTerm", `'${t}':`)], {
					hk: "1B9ZWG"
				})))], {
					hk: "iAcV5"
				})), o.a.createElement(m.a, null, o.a.createElement(l.r, {
					onClick: e.cancelSearch
				}, n.fbt._("See all", null, {
					hk: "3aLS8s"
				})))), e.children)
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				topBarRow: "_3H6HwkSZ2zUC1pwaIMv-EY",
				searchBar: "_2LvB93iPopVPdhNBxBnfAH",
				searchIcon: "_1lo1uHsqx3-EkgYDL4xKEB",
				searchInput: "_1ox94KT4YX0mmZgLO51PG_",
				searchButton: "_3-3xbjG4pcuzlB7SzgBvzg"
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				l = s("./src/reddit/icons/svgs/Search/index.tsx"),
				d = s("./src/reddit/components/SubredditModerationTopBar/index.m.less"),
				c = s.n(d);
			const m = r.a.div("topBarRow", c.a);
			class u extends o.a.Component {
				constructor(e) {
					super(e), this.onSearchChange = e => {
						Object(i.a)(e.currentTarget.value).length < 21 && this.setState({
							searchInputText: e.currentTarget.value
						})
					}, this.onKeyPress = e => {
						"Enter" === e.key && this.onSearch()
					}, this.onSearch = () => {
						this.props.onSearch(this.state.searchInputText)
					}, this.state = {
						searchInputText: ""
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.activeSearchQuery && null === e.activeSearchQuery && this.setState({
						searchInputText: ""
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement("div", {
						className: c.a.topBarRow
					}, e.positionSearchRight && e.children, o.a.createElement("div", {
						className: c.a.searchBar
					}, o.a.createElement("input", {
						className: c.a.searchInput,
						onChange: this.onSearchChange,
						onKeyPress: this.onKeyPress,
						placeholder: n.fbt._("Search for a user", null, {
							hk: "1yTo6e"
						}),
						type: "text",
						value: t.searchInputText
					}), o.a.createElement("button", {
						className: c.a.searchButton,
						onClick: this.onSearch
					}, o.a.createElement(l.a, {
						className: c.a.searchIcon
					}))), !e.positionSearchRight && e.children)
				}
			}
		},
		"./src/reddit/components/SubredditModerationUserItem/index.m.less": function(e, t, s) {
			e.exports = {
				Row: "_2O5kmPXewMHlCcrRWrjEB_",
				row: "_2O5kmPXewMHlCcrRWrjEB_",
				Username: "_1sIhmckJjyRyuR_z7M5kbI",
				username: "_1sIhmckJjyRyuR_z7M5kbI",
				RightAlign: "_3f00u5KR-M4rdaonscLX8k",
				rightAlign: "_3f00u5KR-M4rdaonscLX8k",
				Description: "_3YjnH6nyw9xU3dQ5hTVmEg",
				description: "_3YjnH6nyw9xU3dQ5hTVmEg",
				AdditionalText: "_2FHMhpmaJ7uKirIBSL-nfq",
				additionalText: "_2FHMhpmaJ7uKirIBSL-nfq",
				ChevronDown: "_13LaWwDlCX3ERr0EUCo3Lx",
				chevronDown: "_13LaWwDlCX3ERr0EUCo3Lx",
				ChevronUp: "_2wUaFuEtiqP0eWtfI9dDoI",
				chevronUp: "_2wUaFuEtiqP0eWtfI9dDoI",
				ExpandoContainer: "_2AQcG05ynImXmYdd8D8PMU",
				expandoContainer: "_2AQcG05ynImXmYdd8D8PMU",
				Bullet: "_1VQtDRh-JtZQghS8jetaHR",
				bullet: "_1VQtDRh-JtZQghS8jetaHR",
				PlaceholderItem: "_3KdpSC_L0JbYqsU7OmeaGX",
				placeholderItem: "_3KdpSC_L0JbYqsU7OmeaGX",
				EmptyUserIcon: "iNRbW9Tpfe2qsnXftvupu",
				emptyUserIcon: "iNRbW9Tpfe2qsnXftvupu",
				EmptyDetails: "_16EL0HBUzdiC9vh2S9H5Ee",
				emptyDetails: "_16EL0HBUzdiC9vh2S9H5Ee",
				UsersLoadingContainer: "_1s6c6XYRhTyY6FWEkJHQg",
				usersLoadingContainer: "_1s6c6XYRhTyY6FWEkJHQg"
			}
		},
		"./src/reddit/components/SubredditModerationUserItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return R
			}));
			var n = s("./node_modules/lodash/times.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/helpers/trackers/moderationPages.ts"),
				c = s("./src/reddit/components/UserNameAndIcon/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				p = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = s("./src/reddit/components/SubredditModerationUserItem/index.m.less"),
				f = s.n(g);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = (e, t) => {
				const s = `UserInfoTooltip--${e}`;
				return t ? `${s}--${t}` : s
			}, v = i.a.wrapped(b.a, "Row", f.a), k = i.a.div("Username", f.a), _ = i.a.wrapped(h.a, "RightAlign", f.a), C = i.a.div("Description", f.a), y = i.a.div("AdditionalText", f.a), O = i.a.wrapped(u.a, "ChevronDown", f.a), j = i.a.wrapped(p.a, "ChevronUp", f.a), w = i.a.div("ExpandoContainer", f.a), S = i.a.span("Bullet", f.a), N = i.a.div("PlaceholderItem", f.a), I = i.a.wrapped(N, "EmptyUserIcon", f.a), T = i.a.wrapped(N, "EmptyDetails", f.a), M = i.a.div("UsersLoadingContainer", f.a), P = () => r.a.createElement(v, null, r.a.createElement(I, null), r.a.createElement(T, null), r.a.createElement(T, null)), R = e => r.a.createElement(M, {
				className: e.className
			}, a()(e.rows || 10, e => r.a.createElement(P, {
				key: e
			})));
			class A extends r.a.Component {
				constructor(e) {
					super(e), this.onToggleExpandedComponent = () => {
						this.props.pageName && !this.state.isExpanded && this.props.sendEvent(d.a("more_detail", this.props.pageName)), this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.sendHoverCardEvent = () => {
						this.props.pageName && this.props.sendEvent(d.c(this.props.pageName))
					}, this.state = {
						isExpanded: !1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(v, null, r.a.createElement(k, null, r.a.createElement(c.a, {
						username: e.username,
						userIcon: e.userIcon,
						tooltipId: E(e.username, e.moderatorType),
						subredditId: e.subredditId,
						sendHoverCardEvent: this.sendHoverCardEvent
					})), r.a.createElement(C, null, e.timeAgo, e.description && r.a.createElement(r.a.Fragment, null, r.a.createElement(S, null, "•"), e.description)), r.a.createElement(_, null, e.additionalText && r.a.createElement(y, null, e.additionalText), e.primaryButton, e.secondaryButton, e.tertiaryButton, e.expandedComponent && r.a.createElement(m.r, {
						onClick: this.onToggleExpandedComponent
					}, x._("More Details", null, {
						hk: "KnMc6"
					}), t.isExpanded ? r.a.createElement(j, null) : r.a.createElement(O, null)))), t.isExpanded && r.a.createElement(w, null, e.expandedComponent))
				}
			}
			t.b = Object(l.c)(A)
		},
		"./src/reddit/components/SubredditRules/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1fQ3jmS7djNiAnk2kVsPko",
				titleFontH2: "_39dtESYDu10VI6hZlt8jT_",
				titleFontH3: "_2_Ya84laiZ_AK4zBLZeXmE",
				titleFontH4: "_2k9S2SK_mdrMw9dXzIJka3",
				titleFontH5: "_3hrj37O_iGAZk7ssKstspL",
				titleFontH6: "_2KYRCY7gyTJjBx_Vr5pjqd",
				metadataFont: "_2hHNLn3quM7R0Znfoal7Wi",
				flairFont: "KkD9-eQEXAm_GdJAbixZ5",
				labelsFont: "_1xgXWixwTrYRf6JjxPm7ft",
				actionFont: "_1HQtdMEzh4gag8do4e9j7Z",
				smallButtonFont: "zWcRyj2-0oiXHbpM-5L1A",
				largeButtonFont: "_2PIOcp6QTxVygtl2u9ji_a",
				strongTextFont: "_2adE8ldKa4w_dETRAs-vdP",
				tabFont: "UtQUA6_scmmMeiLaweTg2",
				buttonFontXS: "_10ruUMhuBmxZqA1yF_MlA9",
				buttonFontXs: "_10ruUMhuBmxZqA1yF_MlA9",
				buttonFontS: "_1TFRBw_YwgrsDelv1Pi-SM",
				buttonFontM: "_2H_oQnXKALaCioWB1K9l-O",
				buttonFontL: "_2gy3VLIz6UYY1qlR5-fcVm",
				buttonFontXL: "_1drcPUSEFqtlwYnTDdJsro",
				buttonFontXl: "_1drcPUSEFqtlwYnTDdJsro",
				bodyFontH1: "_3lbK38dxFajKo78JrAEtIe",
				bodyFontH2: "_1CH0HVqZd3qMaT2gzU5mYn",
				bodyFontH3: "xk7ESbG2cmLPdln3D1fVi",
				bodyFontH4: "_29_oVfDyKoOggix5Gj6kah",
				bodyFontH5: "_1RoE8VrwOjvkyDDc-a8RZ_",
				bodyFontH6: "_3jwZ9V_jg7YZ4T-0cmGzxY",
				bodyFontH6Small: "_3WMZAYheSFIrrjKgM6FOG1",
				bodyFont: "_2iji_FM7kTNPRlaRGrPpq8",
				bodyFontSmall: "oJpqQ5hwA0NwwwlDu-EZH",
				bodyFontMono: "_2nUMbdZlQ1fQpJ_LaDNrbn",
				duplicateName: "_31Visb7b2S-tj09Ls_2Acy",
				emptyDetails: "_8PDfWWfcYPlmlmOr2Notr",
				emptyIcon: "_2tEWDkQudqJGiBAQsXSYXE",
				emptyRightIcon: "aF9GyLBXjDrRFO_7BTOYU",
				expandDetails: "_19etb4qzR1xpaHDy7AVdRr",
				header: "_2Xb_1g-T9iGzHDDy3_XpMD",
				DragCard: "_1KNUx1QX0DDrtynCc-GRE_",
				dragCard: "_1KNUx1QX0DDrtynCc-GRE_",
				dragIcon: "RR4AdUs4L9geua2bjCoqQ",
				icon: "PbUpiwMGWTjzrcYfCTdc0",
				iconButton: "_138C3cC0PAtIwsXoIAfGvJ",
				iconWrapper: "Ep3vJhfng2q2-wfiIgstP",
				loadingContainer: "ve35wYJQyEHavtRQYDY7V",
				metadata: "_1xQ_DrqnJXDZq1ptXHxYIB",
				middleMeta: "_2OWUxJA0Dhi0onvygJk3_i",
				middleMetaBlock: "n1lY8o9sGnqcqSfVzm5Vs",
				modalCloseButton: "zKQ8lyAF3pYyDoSlTpTjA",
				modalDescriptionBlock: "_26a81Mk5bsppGjI9AXbmWS",
				modalDescriptionField: "_1brIoxFWlohWpvu34OwZQP",
				modalFooter: "R-9ebJbU9igzPDfUi4Txg",
				modalRadioButton: "_1KFGHoJGHbU05yh6-sQIr5",
				modalRadioText: "_360Lh4DKj256s8RdElARFo",
				modalReasonField: "_1hdSGf--gQDRwsU96bzao1",
				modalRemoveButton: "_2yAePObDkhgZql3P1FHRu1",
				modalReportMeta: "_21sqmEi4OnC4uXlcUGDT_T",
				modalReportTitle: "_1y0X9006mE_5nlHfol1nc2",
				modalRule: "_1AlCnggMuPLxxDUbWWhG2q",
				modalRuleField: "QP-_TXfrh6G1-IRJif4Cy",
				modalRuleTitle: "_2I1A_fyvhaC7TYrYwA047Y",
				modalSubmitButton: "hHFW3BkgX7tSn5Nev-ooY",
				placeholderRow: "hv6YY1IfCww5loDzbkuMS",
				row: "_1LfPdWXylWmVTmLinhd4xl",
				rulesHeader: "_3MOq7UPqtI4o9EnAyCWkEQ",
				rulesIcon: "_29Fl8s_IvZwHxUPNV2ARiW",
				rulesInfo: "KTZ0Ir6xknUXuN4WMI7RN",
				ruleMetaText: "iVYauV_t6_ChREoxhNGsU",
				ruleMetaTitle: "ffGjaCMPoTUkhkVp6rHw5",
				emptyWrapper: "_2-xwKK1EqJlzI2dO7SIrbF",
				ruleNumber: "_3DEhjnxmn1BzXcJ_ml7kSQ",
				ruleText: "_1ZwBW5sLL75ZAZvQreMjn-",
				PrimaryButton: "_3GOmWOjCh6hPWZg1j-zPkr",
				primaryButton: "_3GOmWOjCh6hPWZg1j-zPkr"
			}
		},
		"./src/reddit/components/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/config.ts"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/times.js"),
				l = s.n(i),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/actions/modal.ts"),
				h = s("./src/lib/makeActionCreator/index.ts"),
				g = s("./src/reddit/actions/subredditRules/constants.ts"),
				f = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/endpoints/subreddit/rules.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts");
			const k = Object(h.a)(g.e),
				_ = (e, t) => async (s, a, o) => {
					let {
						apiContext: r
					} = o;
					const i = Object(v.U)(a(), {
							subredditId: e
						}).name,
						l = `success-block-${t.rule}`,
						d = `error-block-${t.rule}`,
						c = await Object(x.a)(r(), i, t);
					if (c.ok) {
						const t = c.body;
						s(k({
							rules: t,
							subredditId: e
						})), s(f.f({
							id: l,
							kind: E.b.SuccessCommunityGreen,
							text: n.fbt._("Rule added", null, {
								hk: "4D4jbP"
							})
						}))
					} else s(f.f({
						id: d,
						kind: E.b.Error,
						text: c.json.errors ? c.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
							hk: "2C9b4N"
						})
					}))
				}, C = Object(h.a)(g.f), y = Object(h.a)(g.g), O = Object(h.a)(g.d), j = (e, t) => async (s, a, o) => {
					let {
						apiContext: r
					} = o;
					const i = Object(v.U)(a(), {
							subredditId: e
						}).name,
						l = Object(v.Q)(a(), {
							subredditId: e
						}),
						d = `success-block-${e}`,
						c = `error-block-${e}`,
						m = await Object(x.e)(r(), i, t);
					if (m.ok) {
						const t = m.body;
						s(O({
							rules: t,
							subredditId: e
						})), s(f.f({
							id: d,
							kind: E.b.SuccessCommunityGreen,
							text: n.fbt._("Rule order updated", null, {
								hk: "3bmmvl"
							}),
							buttonText: n.fbt._("Undo", null, {
								hk: "1RYWKC"
							}),
							buttonAction: j(e, l)
						}))
					} else s(f.f({
						id: c,
						kind: E.b.Error,
						text: "explanation" in m ? m.explanation : m.json && "errors" in m.json ? m.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
							hk: "1XJ2UQ"
						})
					}))
				};
			var w = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				S = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				N = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				I = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				M = s("./src/reddit/controls/Button/index.tsx"),
				P = s("./src/reddit/controls/Sortable/index.tsx"),
				R = s("./src/reddit/selectors/telemetry.ts");
			const A = e => ({
					subreddit: R.hb(e),
					profile: R.R(e),
					userSubreddit: R.rb(e)
				}),
				F = e => t => ({
					source: "rules",
					action: "click",
					noun: e,
					...A(t)
				}),
				D = (e, t) => s => ({
					source: "rules",
					action: "click",
					noun: e,
					actionInfo: R.d(s, {
						count: t
					}),
					...A(s)
				});
			var L = s("./src/reddit/icons/fonts/index.tsx"),
				U = s("./src/reddit/layout/row/Inline/index.tsx"),
				B = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				H = s("./src/reddit/models/Rule/index.ts"),
				W = s("./src/reddit/selectors/activeModalId.ts"),
				z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/components/SubredditRules/index.m.less"),
				q = s.n(V),
				G = s("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				K = s("./src/reddit/icons/svgs/Grapple/index.tsx");
			const Q = p.a.wrapped(G.a, "DragCard", q.a);
			var X = e => c.a.createElement(Q, {
					isDragging: e.isDragging,
					isOver: e.isOver,
					canDrop: e.canDrop
				}, c.a.createElement(U.a, {
					className: q.a.row
				}, c.a.createElement("span", {
					className: q.a.ruleNumber
				}, e.index + 1), c.a.createElement("span", {
					className: q.a.ruleText
				}, e.shortName), c.a.createElement("span", {
					className: q.a.iconWrapper
				}, c.a.createElement(K.a, {
					className: q.a.dragIcon,
					title: n.fbt._("Drag", null, {
						hk: "dBKmA"
					})
				})))),
				J = s("./src/higherOrderComponents/asModal/index.tsx"),
				Y = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				Z = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				$ = s("./src/reddit/controls/RadioInput/index.tsx"),
				ee = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				te = s("./src/reddit/controls/TextButton/index.tsx"),
				se = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const ne = {
					rule: "",
					kind: "all",
					reportReason: "",
					description: ""
				},
				ae = Object(m.b)(null, (e, t) => ({
					createRule: s => e(_(t.subredditId, s)),
					updateRule: (s, a) => e(((e, t, s) => async (a, o, r) => {
						let {
							apiContext: i
						} = r;
						const l = Object(v.U)(o(), {
								subredditId: e
							}).name,
							d = `success-block-${t.rule}`,
							c = `error-block-${t.rule}`,
							m = await Object(x.f)(i(), l, t, s);
						if (m.ok) {
							const t = m.body;
							a(C({
								rules: t,
								subredditId: e,
								oldName: s
							})), a(f.f({
								id: d,
								kind: E.b.SuccessCommunityGreen,
								text: n.fbt._("Rule updated", null, {
									hk: "1ljetO"
								})
							}))
						} else a(f.f({
							id: c,
							kind: E.b.Error,
							text: m.json.errors ? m.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
								hk: "2acjBM"
							})
						}))
					})(t.subredditId, s, a))
				}));
			class oe extends c.a.Component {
				constructor(e) {
					super(e), this.onRuleInputChange = e => {
						e.currentTarget.value.trim().length <= H.g && this.setState({
							rule: e.currentTarget.value
						})
					}, this.onReportReasonInputChange = e => {
						e.currentTarget.value.trim().length <= H.f && this.setState({
							reportReason: e.currentTarget.value
						})
					}, this.onDescriptionInputChange = e => {
						e.currentTarget.value.trim().length <= H.a && this.setState({
							description: e.currentTarget.value
						})
					}, this.onSave = () => {
						const {
							props: e,
							state: t
						} = this, s = {
							rule: t.rule.trim(),
							kind: t.kind,
							reason: t.reportReason.trim(),
							description: t.description.trim()
						};
						e.rule ? e.updateRule(s, e.rule.shortName) : e.createRule(s), e.toggleModal(), e.sendEvent()
					}, this.canSave = () => {
						const {
							props: e,
							state: t
						} = this, s = t.rule.trim(), n = t.reportReason.trim(), a = t.description.trim(), o = !e.ruleNames.includes(s) || e.ruleNames.includes(s) && e.rule && e.rule.shortName === s, r = !e.rule || (e.rule.shortName !== s || e.rule.violationReason !== t.reportReason || e.rule.kind !== t.kind || e.rule.description !== a);
						return o && r && s.length > 0 && s.length <= H.g && n.length <= H.f && a.length <= H.a && t.kind
					}, this.selectRuleKind = e => {
						this.setState({
							kind: e
						})
					}, this.isDuplicateRuleName = () => {
						const {
							props: e,
							state: t
						} = this, s = !e.rule || e.rule.shortName !== t.rule.trim(), n = e.ruleNames.includes(t.rule.trim());
						return 0 !== t.rule.trim().length && s && n
					}, this.state = e.rule ? {
						rule: e.rule.shortName,
						kind: e.rule.kind,
						reportReason: e.rule.violationReason || "",
						description: e.rule.description || ""
					} : ne
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return c.a.createElement(Z.e, null, c.a.createElement(Z.i, null, c.a.createElement(se.a, null, c.a.createElement(Z.q, null, e.rule ? n.fbt._("Edit rule", null, {
						hk: "2zflTO"
					}) : n.fbt._("Add rule", null, {
						hk: "1xqo5O"
					})), c.a.createElement(te.a, {
						className: q.a.modalCloseButton,
						onClick: e.toggleModal
					}, c.a.createElement(Z.b, null)))), c.a.createElement(Z.l, null, c.a.createElement(Z.h, null, c.a.createElement(Z.p, {
						className: q.a.modalRule
					}, n.fbt._("Rule", null, {
						hk: "1W7esG"
					})), c.a.createElement(Z.t, {
						className: q.a.modalRuleField,
						onChange: this.onRuleInputChange,
						placeholder: n.fbt._('Rule displayed (e.g. "No photos")', null, {
							hk: "GdEW"
						}),
						value: t.rule
					}), this.isDuplicateRuleName() && c.a.createElement("span", {
						className: q.a.duplicateName
					}, n.fbt._("You have another rule with this title. Please change.", null, {
						hk: "2EPSGv"
					})), c.a.createElement(Y.a, {
						maxChars: H.g,
						text: t.rule.trim()
					})), c.a.createElement(Z.h, null, c.a.createElement(Z.p, {
						className: q.a.modalRuleTitle
					}, n.fbt._("Applies to", null, {
						hk: "Pzu3b"
					})), c.a.createElement($.a, {
						name: "RULE_KIND_PICKER",
						onChange: this.selectRuleKind,
						value: t.kind
					}, c.a.createElement(ee.a, {
						className: q.a.modalRadioButton,
						key: H.b.all,
						value: H.b.all,
						selected: t.kind === H.b.all,
						showButton: !0,
						tabIndex: t.kind === H.b.all ? 0 : -1
					}, c.a.createElement(Z.p, {
						className: q.a.modalRadioText
					}, n.fbt._("Posts & comments", null, {
						hk: "tHmQq"
					}))), c.a.createElement(ee.a, {
						className: q.a.modalRadioButton,
						key: H.b.post,
						value: H.b.post,
						selected: t.kind === H.b.post,
						showButton: !0,
						tabIndex: t.kind === H.b.post ? 0 : -1
					}, c.a.createElement(Z.p, {
						className: q.a.modalRadioText
					}, n.fbt._("Posts only", null, {
						hk: "16dDBr"
					}))), c.a.createElement(ee.a, {
						className: q.a.modalRadioButton,
						key: H.b.comment,
						value: H.b.comment,
						selected: t.kind === H.b.comment,
						showButton: !0,
						tabIndex: t.kind === H.b.comment ? 0 : -1
					}, c.a.createElement(Z.p, {
						className: q.a.modalRadioText
					}, n.fbt._("Comments only", null, {
						hk: "2V8qUA"
					}))))), c.a.createElement(Z.h, null, c.a.createElement(Z.p, {
						className: q.a.modalReportTitle
					}, n.fbt._("Report reason", null, {
						hk: "3ShjE9"
					})), c.a.createElement(Z.m, {
						className: q.a.modalReportMeta
					}, n.fbt._("Defaults to rule name if left blank", null, {
						hk: "2xObiU"
					})), c.a.createElement(Z.t, {
						className: q.a.modalReasonField,
						onChange: this.onReportReasonInputChange,
						placeholder: t.rule.trim().length > 0 && 0 === t.reportReason.trim().length ? t.rule : n.fbt._('Reason rule is broken (e.g. "This is a photo")', null, {
							hk: "2Op1SL"
						}),
						value: t.reportReason
					}), c.a.createElement(Y.a, {
						maxChars: H.f,
						text: t.reportReason.trim()
					})), c.a.createElement("div", {
						className: q.a.modalDescriptionBlock
					}, c.a.createElement(Z.p, {
						className: q.a.modalRuleTitle
					}, n.fbt._("Full description", null, {
						hk: "4CTvQy"
					})), c.a.createElement(Z.t, {
						className: q.a.modalDescriptionField,
						onChange: this.onDescriptionInputChange,
						placeholder: n.fbt._("Enter the full description of the rule.", null, {
							hk: "3EyaJe"
						}),
						value: t.description
					}), c.a.createElement(Y.a, {
						maxChars: H.a,
						text: t.description.trim()
					}))), c.a.createElement(Z.g, {
						className: q.a.modalFooter
					}, c.a.createElement(M.l, {
						className: q.a.modalSubmitButton,
						onClick: this.onSave,
						disabled: !this.canSave()
					}, e.rule ? n.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : n.fbt._("Add new rule", null, {
						hk: "2dy0gV"
					})), c.a.createElement(Z.a, {
						onClick: e.toggleModal
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.rule && c.a.createElement(Z.s, {
						className: q.a.modalRemoveButton,
						onClick: e.onDelete
					}, n.fbt._("Delete", null, {
						hk: "4lt26q"
					}))))
				}
			}
			var re = Object(J.a)(ae(oe)),
				ie = s("./src/lib/timeAgo/index.ts"),
				le = s("./src/reddit/components/HumanDate/index.tsx"),
				de = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				ce = s("./src/reddit/components/RichTextJson/index.tsx"),
				me = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				pe = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				be = s("./src/reddit/models/RichTextJson/index.ts");
			const he = {};
			class ge extends c.a.Component {
				constructor(e) {
					super(e), this.toggleExpandDetails = () => {
						this.setState(e => ({
							isExpanded: !e.isExpanded
						}))
					}, this.state = {
						isExpanded: !1
					}
				}
				render() {
					const {
						hasConfigPerms: e,
						index: t,
						onEdit: s,
						subredditRule: a
					} = this.props, o = a.descriptionRichText ? JSON.parse(a.descriptionRichText).document : void 0, r = Object(ie.c)(a.createdUtc) >= 1;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(U.a, {
						className: q.a.row
					}, c.a.createElement("span", {
						className: q.a.ruleNumber
					}, t + 1), c.a.createElement("span", {
						className: q.a.ruleText
					}, a.shortName), c.a.createElement("span", {
						className: q.a.iconWrapper
					}, e && c.a.createElement("button", {
						className: q.a.iconButton,
						onClick: s
					}, c.a.createElement(pe.a, {
						className: q.a.icon,
						title: n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					})), c.a.createElement("button", {
						className: q.a.iconButton,
						onClick: this.toggleExpandDetails
					}, this.state.isExpanded ? c.a.createElement(me.a, {
						className: q.a.icon,
						title: n.fbt._("Collapse", null, {
							hk: "eGqwd"
						})
					}) : c.a.createElement(ue.a, {
						className: q.a.icon,
						title: n.fbt._("Expand", null, {
							hk: "4dMVPg"
						})
					})))), this.state.isExpanded && c.a.createElement(U.a, {
						className: q.a.expandDetails
					}, c.a.createElement("span", {
						className: q.a.metadata
					}, c.a.createElement("span", {
						className: q.a.ruleMetaTitle
					}, n.fbt._("Report reason", null, {
						hk: "2RH1DJ"
					})), c.a.createElement("span", {
						className: q.a.ruleMetaText
					}, a.violationReason && 0 !== a.violationReason.length ? a.violationReason : a.shortName)), c.a.createElement("span", {
						className: q.a.middleMeta
					}, c.a.createElement("div", {
						className: q.a.middleMetaBlock
					}, c.a.createElement("div", {
						className: q.a.ruleMetaTitle
					}, n.fbt._("Applies to", null, {
						hk: "19eYpy"
					})), c.a.createElement("div", {
						className: q.a.ruleMetaText
					}, a.kind === H.b.all ? n.fbt._("Posts & comments", null, {
						hk: "34PjHx"
					}) : a.kind === H.b.post ? n.fbt._("Posts only", null, {
						hk: "3MllWy"
					}) : n.fbt._("Comments only", null, {
						hk: "StCEa"
					}))), c.a.createElement("div", {
						className: q.a.middleMetaBlock
					}, c.a.createElement("div", {
						className: q.a.ruleMetaTitle
					}, n.fbt._("Created", null, {
						hk: "gSE9w"
					})), c.a.createElement("div", {
						className: q.a.ruleMetaText
					}, r ? c.a.createElement(le.b, {
						seconds: a.createdUtc
					}) : c.a.createElement(le.d, {
						seconds: a.createdUtc
					})))), c.a.createElement("span", {
						className: q.a.metadata
					}, c.a.createElement("span", {
						className: q.a.ruleMetaTitle
					}, n.fbt._("Full description", null, {
						hk: "20Lgcg"
					})), c.a.createElement("span", {
						className: q.a.ruleMetaText
					}, o && !Object(be.G)({
						document: o
					}) ? c.a.createElement(ce.b, {
						className: q.a.ruleMetaText,
						content: {
							document: o
						},
						rtJsonElementProps: he
					}) : a.descriptionHtml ? c.a.createElement(de.a, {
						className: q.a.ruleMetaText,
						html: a.descriptionHtml
					}) : a.description))))
				}
			}
			var fe = ge;
			const xe = p.a.wrapped(M.l, "PrimaryButton", q.a),
				Ee = () => c.a.createElement(U.a, {
					className: q.a.placeholderRow
				}, c.a.createElement("span", {
					className: q.a.emptyWrapper
				}, c.a.createElement("span", {
					className: q.a.emptyIcon
				})), c.a.createElement("span", {
					className: q.a.emptyDetails
				}), c.a.createElement("span", {
					className: q.a.iconWrapper
				}, c.a.createElement("span", {
					className: q.a.emptyRightIcon
				}), c.a.createElement("span", {
					className: q.a.emptyRightIcon
				}))),
				ve = () => c.a.createElement("div", {
					className: q.a.loadingContainer
				}, l()(15, e => c.a.createElement(Ee, {
					key: e
				}))),
				ke = Object(u.c)({
					hasModConfigPerms: (e, t) => Object(z.b)(B.c.config)(e, {
						subredditId: t.subreddit.id
					}),
					isConfirmModalOpen: e => "SubredditRule--Modal--DeleteConfirmation" === Object(W.a)(e),
					isRuleEditorOpen: e => "SubredditRule--Editor--Modal" === Object(W.a)(e),
					isSubredditRulesPending: e => Object(v.S)(e),
					ruleOrder: (e, t) => Object(v.Q)(e, {
						subredditId: t.subreddit.id
					}),
					subredditRules: (e, t) => Object(v.T)(e, {
						subredditId: t.subreddit.id
					})
				}),
				_e = Object(m.b)(ke, (e, t) => ({
					removeRule: (s, a) => e(((e, t, s) => async (a, o, r) => {
						let {
							apiContext: i
						} = r;
						const l = Object(v.U)(o(), {
								subredditId: e
							}).name,
							d = Object(v.T)(o(), {
								subredditId: e
							})[s],
							c = `success-block-${t}`,
							m = `error-block-${t}`,
							u = await Object(x.d)(i(), l, t);
						if (u.ok) {
							const t = u.body;
							a(y({
								rules: t,
								subredditId: e
							})), a(f.f({
								id: c,
								kind: E.b.SuccessCommunityGreen,
								text: n.fbt._("Rule deleted", null, {
									hk: "2Kwoph"
								}),
								buttonText: n.fbt._("Undo", null, {
									hk: "1RYWKC"
								}),
								buttonAction: _(e, {
									rule: d.shortName,
									kind: d.kind,
									reason: d.violationReason,
									description: d.description
								})
							}))
						} else a(f.f({
							id: m,
							kind: E.b.Error,
							text: u.json.errors ? u.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
								hk: "37ELrZ"
							})
						}))
					})(t.subreddit.id, s, a)),
					reorderRules: s => {
						e(j(t.subreddit.id, s))
					},
					toggleConfirmationModal: () => e(Object(b.i)("SubredditRule--Modal--DeleteConfirmation")),
					toggleRuleEditorModal: () => e(Object(b.i)("SubredditRule--Editor--Modal"))
				}));
			class Ce extends c.a.Component {
				constructor(e) {
					super(e), this.deleteRule = () => {
						const e = this.state.ruleToEdit;
						e && this.props.removeRule(e.shortName, e.priority)
					}, this.onConfirmDeleteRule = () => {
						this.props.toggleConfirmationModal()
					}, this.onEditRule = e => {
						this.setState({
							ruleToEdit: e
						}), this.props.toggleRuleEditorModal()
					}, this.handleDrop = (e, t, s) => this.setState({
						ruleOrder: s,
						numRulesMoved: this.state.numRulesMoved + 1
					}), this.reorderRules = () => {
						this.props.reorderRules(this.state.ruleOrder), this.props.sendEvent(D("save_reorder", this.state.numRulesMoved)), this.stopReorder()
					}, this.startReorder = () => {
						this.setState({
							isReordering: !0,
							ruleOrder: this.props.ruleOrder
						})
					}, this.stopReorder = () => this.setState({
						isReordering: !1,
						numRulesMoved: 0
					}), this.toggleConfirmationModal = () => {
						this.props.toggleConfirmationModal(), this.setState({
							ruleToEdit: null
						})
					}, this.toggleEditorModal = () => {
						this.props.toggleRuleEditorModal(), this.setState({
							ruleToEdit: null
						})
					}, this.trackClick = e => this.props.sendEvent(F(e)), this.trackEdit = () => this.state.ruleToEdit ? this.trackClick("save_edit") : this.trackClick("save_new"), this.trackDelete = () => this.trackClick("delete"), this.state = {
						numRulesMoved: 0,
						ruleToEdit: null,
						ruleOrder: e.ruleOrder,
						isReordering: !1
					}
				}
				render() {
					const {
						hasModConfigPerms: e,
						isConfirmModalOpen: t,
						isRuleEditorOpen: s,
						isSubredditRulesPending: o,
						subreddit: i,
						subredditRules: l
					} = this.props;
					return c.a.createElement(c.a.Fragment, null, e && c.a.createElement(I.c, null, this.state.isReordering ? c.a.createElement(M.o, {
						onClick: this.stopReorder
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})) : c.a.createElement(M.r, {
						onClick: this.startReorder,
						disabled: l.length <= 1
					}, n.fbt._("Reorder rules", null, {
						hk: "1qh7V6"
					})), this.state.isReordering ? c.a.createElement(xe, {
						onClick: this.reorderRules,
						disabled: r()(l.map(e => e.shortName), this.state.ruleOrder)
					}, n.fbt._("Save", null, {
						hk: "4yMsMq"
					})) : c.a.createElement(xe, {
						onClick: this.toggleEditorModal,
						disabled: o || l.length >= H.e
					}, n.fbt._("Add rule", null, {
						hk: "6GEk0"
					}))), l.length ? c.a.createElement(I.a, null, c.a.createElement("div", {
						className: q.a.header
					}, c.a.createElement(I.b, {
						className: q.a.rulesHeader
					}, n.fbt._("Rules", null, {
						hk: "41SmPR"
					}), c.a.createElement(N.a, {
						linkUrl: `${a.a.redditModHelpUrl}/hc/en-us/articles/360023379211`
					})), !this.state.isReordering && c.a.createElement("div", {
						className: q.a.rulesInfo
					}, n.fbt._("These are rules that visitors must follow to participate. They can be used as reasons to report or ban posts, comments, and users. Communities can have a maximum of 15 rules.", null, {
						hk: "1C2Vjc"
					}))), this.state.isReordering ? c.a.createElement(P.a, {
						values: this.state.ruleOrder,
						render: (e, t, s, n, a) => c.a.createElement(X, {
							isDragging: s,
							isOver: n,
							canDrop: a,
							index: t,
							shortName: e
						}),
						onDrop: this.handleDrop
					}) : l.map((t, s) => c.a.createElement(fe, {
						hasConfigPerms: e,
						index: s,
						key: `${i.name}-${t.shortName}`,
						onEdit: () => this.onEditRule(t),
						subredditRule: t
					}))) : c.a.createElement(I.a, null, c.a.createElement("div", {
						className: q.a.header
					}, c.a.createElement(I.b, {
						className: q.a.rulesHeader
					}, n.fbt._("Rules", null, {
						hk: "41SmPR"
					}), c.a.createElement(N.a, {
						linkUrl: `${a.a.redditModHelpUrl}/hc/en-us/articles/360023379211`
					}))), o ? c.a.createElement(ve, null) : c.a.createElement(S.c, {
						text: n.fbt._("No rules yet", null, {
							hk: "pYLkV"
						})
					}, c.a.createElement(L.a, {
						name: "rules",
						className: q.a.rulesIcon
					}))), s && c.a.createElement(re, {
						onDelete: this.onConfirmDeleteRule,
						rule: this.state.ruleToEdit,
						ruleNames: l.map(e => e.shortName),
						sendEvent: this.trackEdit,
						subredditId: i.id,
						toggleModal: this.toggleEditorModal,
						withOverlay: !0
					}), t && this.state.ruleToEdit && c.a.createElement(w.a, {
						actionText: n.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						headerText: n.fbt._("Delete rule", null, {
							hk: "5q2Ri"
						}),
						modalText: n.fbt._("Are you sure you want to delete this rule?", null, {
							hk: "2diD6u"
						}),
						onConfirm: this.deleteRule,
						toggleModal: this.toggleConfirmationModal,
						trackClick: this.trackDelete,
						withOverlay: !0
					}))
				}
			}
			t.a = _e(Object(T.c)(Ce))
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, s) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				l = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/controls/InternalLink/index.tsx"),
				c = s("./src/reddit/components/UserNameAndIcon/index.m.less"),
				m = s.n(c);
			const u = r.a.span("UserIconContainer", m.a),
				p = r.a.wrapped(l.a, "UserIcon", m.a),
				b = r.a.wrapped(d.default, "UserLink", m.a);
			t.a = e => o.a.createElement(b, {
				className: e.className,
				to: `${n.a.redditUrl}/user/${e.username}`
			}, o.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, o.a.createElement(u, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, o.a.createElement(p, {
				iconUrl: e.userIcon,
				isNSFW: !1,
				userName: e.username
			})), e.username))
		},
		"./src/reddit/components/Wiki/CreateNewWikiPageModal/index.m.less": function(e, t, s) {
			e.exports = {
				modalBody: "_1bgWTt9jbjzFmQBe0xzfBc",
				notice: "_19wd_7K0Gqdp6cf0Pno6jX",
				sectionTitle: "_2eB-lbdBJ7yGnpy9iCXf27",
				primaryButton: "_1Wp9oAwAZieyVMe4wA5SeL",
				dropdownContainer: "_2-waVlosIHdWwUa_OBavKm",
				dropdownTarget: "_1mcRpBQSnN5ALeKix2x4Py",
				targetText: "_3QRCCOc1SfjMkk4bZCW5lD",
				dropdown: "_1Uq_MgLQhUk4iL9iHGz3qL",
				dropdownRow: "_2UfNC6z3v6GQsT_TQn-eoZ",
				errorText: "_31tw_6Xr1vH0KRVUnoJEdv"
			}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				r = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				l = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/showPromotedCTA.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const E = {
					autoplayPref: x.b,
					activeModalId: m.a,
					crosspost: g.d,
					isActive: g.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: g.l,
					isExpanded: g.m,
					isLoggedIn: x.Q,
					showPromotedCTA: f.a,
					moderatorPermissions: b.m,
					modModeEnabled: d.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: d.s,
					flairStyleTemplate: d.W,
					showCTAExperimentDesign: p.a
				},
				v = Object(n.b)(() => Object(a.c)(E), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === i.a.upvoted ? Object(o.kb)(s) : Object(o.w)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(o.gb)(s)),
						onOpenReportsDropdown: t => e(Object(r.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(c.b)(v(Object(l.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				a = "ModerationPage--Modal--DeleteAwardConfirmation",
				o = 20,
				r = 4,
				i = 1e4,
				l = .2,
				d = .1,
				c = .1,
				m = 500
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/controls/CheckboxInput/index.m.less"),
				c = s.n(d);
			t.a = e => a.a.createElement(l.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(o.a)(e.className, c.a.checkboxInput, e.disabled ? c.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, a.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? a.a.createElement(i.a, {
				className: c.a.checkboxSelected
			}) : a.a.createElement(r.a, null), e.children)
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, s) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				disabled: "FVIZ8GUq5tMGZlJ7y28ll",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				isClosed: "_3sZzbLftdYnJNnJ7m7ImmO",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V",
				buttonIcon: "_1J0h3Uv7HEaVZiJLcCUlQw"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/controls/DropdownSelector/index.m.less"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/controls/Dropdown/Row.tsx"),
				d = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = s("./src/reddit/icons/fonts/index.tsx");
			const m = e => {
				e.preventDefault()
			};
			class u extends a.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = a.a.createRef(), this.menuItems = a.a.createRef(), this.containerRef = a.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, s) => {
						const {
							onSelect: n
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), n(t), s && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
							isOpen: !1
						})
					}, this.onOptionClick = (e, t) => {
						this.onSelectOption(e, t)
					}, this.handleDropdownClick = e => {
						e.preventDefault(), e.stopPropagation(), this.props.onOpen && this.props.onOpen(), this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.handleDropdownBlur = e => {
						let t = !1;
						if (e.relatedTarget === this.dropdownButton.current) t = !0;
						else {
							if (!this.menuItems.current) return;
							const s = this.menuItems.current.getElementsByClassName(r.a.menuOption);
							for (let n = 0; n < s.length; n++) e.relatedTarget === s[n] && (t = !0)
						}
						this.setState({
							isOpen: t
						})
					}, this.handleDropdownKeyDown = e => {
						if (!this.state.isOpen && [40, 32, 13].includes(e.keyCode)) return e.preventDefault(), void this.setState({
							isOpen: !0
						}, this.focusOnFirstOption);
						40 === e.keyCode && (e.preventDefault(), this.focusOnFirstOption()), 27 === e.keyCode && this.state.isOpen && (e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), this.setState({
							isOpen: !1
						}))
					}, this.handleOptionKeyDown = (e, t) => {
						if (32 === e.keyCode || 13 === e.keyCode) this.onSelectOption(e, t, !0);
						else if (38 === e.keyCode || 40 === e.keyCode) {
							if (e.preventDefault(), !this.menuItems.current) return;
							const t = this.menuItems.current.getElementsByClassName(r.a.menuOption);
							for (let s = 0; s < t.length; s++) t[s] === e.target && (38 === e.keyCode && s > 0 && t[s - 1].focus(), 40 === e.keyCode && s < t.length - 1 && t[s + 1].focus())
						}
					}
				}
				componentDidMount() {
					document.body.addEventListener("click", this.handleDocumentClick, !1)
				}
				componentWillUnmount() {
					document.body.removeEventListener("click", this.handleDocumentClick, !1)
				}
				focusOnFirstOption() {
					if (!this.menuItems.current) return;
					const e = this.menuItems.current.getElementsByClassName(r.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: s,
						menuOptionClassName: n
					} = this.props;
					return e.map((e, o) => a.a.createElement(l.b, {
						key: o + e.displayText,
						className: Object(i.a)(r.a.menuOption, n, {
							[r.a.topics]: s
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: s
					}, e.icon && e.icon, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: s,
						isCompactStyle: n,
						isTopicsStyle: o,
						menuItemsClassName: l,
						name: u,
						isSaving: p,
						buttonIcon: b,
						disabled: h
					} = this.props, {
						isOpen: g
					} = this.state;
					return a.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(r.a.dropdownMenu, t, {
							[r.a.topics]: o
						})
					}, a.a.createElement("button", {
						onClick: h ? void 0 : this.handleDropdownClick,
						className: Object(i.a)(e, r.a.selector, {
							[r.a.compact]: n
						}, {
							[r.a.topics]: o
						}, {
							[r.a.disabled]: h
						}),
						name: u,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: h ? void 0 : this.handleDropdownBlur,
						onKeyDown: h ? void 0 : this.handleDropdownKeyDown
					}, a.a.createElement("span", {
						className: r.a.selectorContent,
						tabIndex: -1
					}, b && a.a.createElement("span", {
						className: r.a.buttonIcon
					}, b), s), h ? null : p ? a.a.createElement(d.a, {
						sizePx: 8,
						className: r.a.loadingIcon
					}) : a.a.createElement(c.a, {
						name: "caret_down"
					})), a.a.createElement("div", {
						className: Object(i.a)(r.a.menuItems, l, {
							[r.a.topics]: o,
							[r.a.isClosed]: !g
						}),
						onMouseDown: m,
						ref: this.menuItems
					}, !h && g && this.getDropdownMenuItems()))
				}
			}
			t.b = u
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/flow.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-dnd/lib/index.js"),
				l = s("./node_modules/react-dnd-html5-backend/lib/index.js"),
				d = s("./src/reddit/helpers/dragDropContext/index.ts");
			const c = l.NativeTypes.FILE,
				m = a()(Object(i.DropTarget)(c, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const s = t.getItem();
						s.files && e.onDrop(s.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), d.a);
			class u extends r.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(r.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = m(u)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/ErrorText/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = s("./src/reddit/controls/FormFields/index.m.less"),
				m = s.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = r.a.input("input", m.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
					let {
						label: t,
						children: s,
						inputRef: n,
						className: r,
						isInvalid: i,
						...l
					} = e;
					const d = void 0 !== l.value && "" !== l.value;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.inputWrapper, r, {
							[m.a.mIsInvalid]: i
						}),
						onClick: b
					}, a.a.createElement(p, u({
						"aria-invalid": i,
						innerRef: n
					}, l)), t && a.a.createElement("label", {
						className: Object(o.a)(m.a.label, {
							[m.a.mHasValue]: d
						})
					}, t), s)
				},
				g = e => {
					let {
						label: t,
						children: s,
						inputRef: n,
						isInvalid: r,
						className: i,
						redditStyle: l,
						...d
					} = e;
					const c = void 0 !== d.value && "" !== d.value;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.inputMovingLabelWrapper, i, {
							[m.a.mIsInvalid]: r,
							[m.a.mIsRedditStyle]: l
						}),
						onClick: b
					}, a.a.createElement(p, u({
						innerRef: n
					}, d)), t && a.a.createElement("label", {
						className: Object(o.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, t), s)
				},
				f = e => a.a.createElement("div", {
					className: Object(o.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(l.a, {
					className: m.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const s = this.props.values.slice();
						s[t] = e.target.value, this.props.onChange(s)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							s = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
							value: s,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: s,
						placeholder: n,
						errors: o = []
					} = this.props;
					return e.map((e, r) => a.a.createElement(h, {
						inputRef: e => this.setInputRef(e, r),
						isInvalid: !!o[r],
						disabled: t,
						type: "text",
						label: s,
						onChange: e => this.updateValue(e, r),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(r)
					}, a.a.createElement(d.b, {
						className: m.a.trash
					})), !!o[r] && a.a.createElement(i.b, {
						className: m.a.errorText
					}, o[r])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: s,
						maxLength: n,
						addValueText: r,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const l = !(!!n && s.length >= n) && !i;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.multiInputWrapper, e)
					}, t && l && a.a.createElement(f, {
						onClick: this.addValue,
						text: r
					}), this.renderFields(), !t && l && a.a.createElement(f, {
						onClick: this.addValue,
						text: r
					}))
				}
			}
		},
		"./src/reddit/controls/ImageDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				imageDisplay: "_1OSym2TYADlQNpSDWNxtjB"
			}
		},
		"./src/reddit/controls/ImageDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/ImageDisplay/index.m.less"),
				i = s.n(r);
			t.a = e => {
				let {
					backgroundImage: t,
					children: s,
					className: n
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(i.a.imageDisplay, n),
					style: {
						backgroundImage: `url('${t}')`
					},
					children: s
				})
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			class o extends a.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, o = s || n;
					return a.a.createElement("div", {
						className: e.className
					}, s && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), (!o || e.multiple || void 0 !== e.isPending && !e.isPending) && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				l = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(l);
			const c = r.a.span("metaText", d.a),
				m = e => o.a.createElement(c, e, " · "),
				u = e => {
					let {
						isScoreHidden: t,
						score: s,
						useUpvotes: a,
						...r
					} = e;
					const l = Object(i.b)(s),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", l)], {
							hk: "2L3T21"
						}),
						m = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", l)], {
							hk: "gf67v"
						});
					return o.a.createElement(c, r, m)
				},
				p = e => o.a.createElement(c, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/Select/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "DuuuuIp9EubfvJyrdxytL",
				wrapper: "DuuuuIp9EubfvJyrdxytL",
				Caret: "_8fOXBcWxu_c3tlrAKMR3R",
				caret: "_8fOXBcWxu_c3tlrAKMR3R",
				Inner: "_3-_epznhOfLDNH3-plYM6l",
				inner: "_3-_epznhOfLDNH3-plYM6l",
				active: "wFEhEmBm9HI3jG6QDUnaw",
				redditStyle: "_2PDExzXmSTOdxzNjRB1Pww"
			}
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/helpers/dragDropContext/index.ts"),
				r = s("./node_modules/lodash/flow.js"),
				i = s.n(r),
				l = s("./node_modules/react-dnd/lib/index.js");
			class d extends a.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? i()(e.connectDropTarget, e.connectDragSource)(a.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var c = i()(Object(l.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const s = t.getDropResult();
						e.onDrop(e.id, s.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(l.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const s = t.getItem();
					return e.id !== s.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(d);
			class m extends a.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(s => {
							const n = s.values.slice(),
								a = n.indexOf(e),
								o = n.splice(a, 1)[0];
							let r = n.indexOf(t);
							return a <= r && (r += 1), n.splice(r, 0, o), this.props.onDrop(e, t, n), {
								values: n
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: s,
						render: n
					} = this.props;
					return a.a.createElement("div", {
						className: e
					}, this.state.values.map((e, o) => a.a.createElement(c, {
						id: e,
						key: t && t(e, o),
						index: o,
						render: n,
						onDrop: this.onDrop,
						onClick: s
					})))
				}
			}
			t.a = Object(o.a)(m)
		},
		"./src/reddit/endpoints/economics/uploadedAssets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "d", (function() {
				return d
			}));
			var n, a, o = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t, s, n) {
				const a = `assetType=${s}&assetStatus=${n}`;
				return Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets?${a}`
				})
			}

			function l(e, t, s) {
				const a = new FormData;
				return a.append("assetType", s.assetType), a.append("assetName", s.assetName), a.append("upfile", s.imageFile), s.assetType === n.Badge && (a.append("badgeColor", s.badgeColor || ""), a.append("badgeDescription", s.badgeDescription || "")), Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets`,
					method: "post",
					type: null,
					data: a
				})
			}

			function d(e, t, s, n, a) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets/${s}s/${n}`,
					method: "patch",
					data: a
				})
			}! function(e) {
				e.Badge = "badge", e.Emote = "emote"
			}(n || (n = {})),
			function(e) {
				e.Uploaded = "uploaded", e.Approved = "approved", e.Rejected = "rejected"
			}(a || (a = {}))
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/SetSubredditGeoPlace.json");
			const o = e => ({
				input: {
					subredditId: e.subredditId,
					geoPlace: {
						id: e.placeId,
						source: e.source,
						sessionId: e.sessionId
					}
				}
			});
			t.a = async (e, t) => Object(n.a)(e, {
				...a,
				variables: o(t)
			})
		},
		"./src/reddit/endpoints/subredditModeration/moderationLog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/AllModerators.json"),
				o = s("./src/redditGQL/operations/FetchModerationLogActions.json");
			const r = (e, t, s) => Object(n.a)(e, {
					...o,
					variables: {
						subredditName: t,
						...s
					}
				}),
				i = (e, t) => Object(n.a)(e, {
					...a,
					variables: {
						subredditName: t
					}
				})
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Subreddit/index.ts");
			const a = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo", "translation_piglatin", "translation_pirate", "translation_initials", "translation_german", "translation_british", "translation_french_fr", "translation_es_mx", "translation_br_pt", "german_translation", "lssgoldnormal_13", "test_automation_001"]),
				o = new Set([n.g.Private, n.g.User]),
				r = e => !(!e || !e.name) && (!!a.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !o.has(e.type));
			t.a = r
		},
		"./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = new Set(["t5_22cerq"]),
				a = e => n.has(e);
			t.a = a
		},
		"./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = new Set(["t5_q0gj4", "t5_z5gli", "t5_22cerq", "t5_3j0kj"]),
				a = e => n.has(e)
		},
		"./src/reddit/helpers/canAccessModerationPage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/models/Subreddit/index.ts");
			t.a = e => {
				let {
					pageName: t,
					moderatorPermissions: s,
					canCreateScheduledPosts: o,
					isEmployee: r,
					isStreamingEnabled: i,
					isTalkHostsEnabled: l,
					subredditType: d,
					isContributor: c
				} = e;
				switch (t) {
					case n.gc.Awards:
						return !!s;
					case n.gc.Powerups:
						return !!(null == s ? void 0 : s.config);
					case n.gc.SubredditRules:
					case n.gc.Moderators:
						return !0;
					case n.gc.Modlog:
						return !!s;
					case n.gc.Muted:
						return !!(s && s.access && s.mail);
					case n.gc.Banned:
						return !(!s || !s.access);
					case n.gc.Contributors:
						return !!(s && s.access || d === a.g.Restricted || d === a.g.Private && c);
					case n.gc.Flair:
					case n.gc.PostFlair:
					case n.gc.UserFlair:
						return !(!s || !s.flair);
					case n.gc.CommunitySettings:
						return !(!s || !s.config);
					case n.gc.Modqueue:
					case n.gc.Reports:
					case n.gc.Edited:
					case n.gc.Spam:
					case n.gc.Unmoderated:
					case n.gc.ContentControls:
					case n.gc.Removal:
						return !(!s || !s.posts);
					case n.gc.ChatSettings:
						return !!s;
					case n.gc.Badges:
					case n.gc.Emojis:
						return !!s;
					case n.gc.Emotes:
						return !(!s || !s.config);
					case n.gc.Streaming:
						return !!(s && s.all && i);
					case n.gc.Wiki:
					case n.gc.WikiBanned:
					case n.gc.WikiContributors:
						return !(!s || !s.wiki);
					case n.gc.Traffic:
						return r || !!s;
					case n.gc.EventPostContent:
					case n.gc.ScheduledPostContent:
						return !!o;
					case n.gc.Predictions:
						return !(!s || !s.posts);
					case n.gc.TalkHosts:
						return !!l && !!s;
					default:
						return !1
				}
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-dnd/lib/index.js"),
				a = s("./node_modules/react-dnd-html5-backend/lib/index.js"),
				o = s.n(a);
			t.a = Object(n.DragDropContext)(o.a)
		},
		"./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/helpers.ts");
			const a = e => {
					const t = [];
					for (const {
							node: s
						} of e.edges) {
						const {
							action: e,
							actionNotes: a,
							createdAt: o,
							details: r,
							id: i,
							moderator: l,
							subredditName: d,
							target: c
						} = s, m = {
							action: e,
							actionNotes: a,
							createdAt: Object(n.g)(o),
							details: r,
							id: i,
							moderator: l,
							subredditName: d,
							target: c
						};
						t.push(m)
					}
					return t
				},
				o = e => {
					const t = [];
					for (const {
							node: s
						} of e.edges) {
						const {
							id: e,
							name: n
						} = s, a = {
							id: e,
							name: n
						};
						t.push(a)
					}
					return t
				}
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const a = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: a
					} of t) s.push(Object(n.f)(a));
				return s
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/isValidUsername/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/helpers/normalizeUsername/index.tsx");
			t.a = e => {
				const t = Object(n.a)(e.trim());
				return t.length > 2 && t.length <= 20
			}
		},
		"./src/reddit/helpers/readOnlyMode/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return a
				})), s.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.editable = "editable", e.focusableReadOnly = "focusablereadonly", e.readOnly = "readonly"
				}(n || (n = {}));
			const a = e => o(e) || e === n.focusableReadOnly,
				o = e => e === n.readOnly
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/PostMedia/index.tsx");
			const r = (e, t, s, n, o, r) => n ? e.crosspostRootId ? a.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, o, r)) : i(e, s, o, r) : null,
				i = (e, t, s, n) => a.a.createElement(o.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				r = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				c = s.n(d);
			const m = {},
				u = e => Object(i.g)(Object(l.a)(e).post, Object(l.a)(e).backgroundImage, Object(l.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(l.a)(t).post, e.postBackgroundImage, Object(l.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(n.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? c.a.mIsActive : void 0,
				f = e => {
					const t = Object(o.a)(Object(a.a)(e), r.a.actionIcon, r.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/communitySettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/lodash/snakeCase.js"),
				a = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = {
					contentOptions: "link_type",
					contentVisible: "allow_top",
					subredditType: "type",
					welcomeMessageText: "welcome_message"
				},
				l = {
					allowChatPostCreation: o.hc.Posts,
					allowDiscovery: o.hc.Safety,
					allowGalleries: o.hc.Posts,
					allowImages: o.hc.Posts,
					allowPolls: o.hc.Posts,
					allowPostCrossposts: o.hc.Posts,
					collapseDeletedComments: o.hc.Posts,
					commentScoreHideMins: o.hc.Posts,
					contentOptions: o.hc.Posts,
					contentVisible: o.hc.Safety,
					crowdControlChatLevel: o.hc.Safety,
					crowdControlPostLevel: o.hc.Safety,
					crowdControlLevel: o.hc.Safety,
					crowdControlFilter: o.hc.Safety,
					crowdControlMode: o.hc.Safety,
					disableContributorRequests: o.hc.Community,
					excludeBannedModqueue: o.hc.Safety,
					over18: o.hc.Community,
					publicDescription: o.hc.Community,
					restrictCommenting: o.hc.Community,
					restrictPosting: o.hc.Community,
					spamComments: o.hc.Posts,
					spamLinks: o.hc.Posts,
					spamSelfposts: o.hc.Posts,
					spoilersEnabled: o.hc.Posts,
					subredditType: o.hc.Community,
					suggestedCommentSort: o.hc.Posts,
					toxicityThresholdChatLevel: o.hc.Safety,
					welcomeMessageEnabled: o.hc.Community,
					welcomeMessageText: o.hc.Community,
					wikiEditAge: o.hc.Wikis,
					wikiEditKarma: o.hc.Wikis,
					wikimode: o.hc.Wikis
				},
				d = {
					[o.hc.Community]: "community_settings_details",
					[o.hc.Notifications]: "community_settings_notifications",
					[o.hc.Safety]: "community_settings_safety",
					[o.hc.Posts]: "community_settings_content",
					[o.hc.Wikis]: "community_settings_wiki",
					[o.hc.ContentTag]: "content_tag"
				},
				c = e => i[e] || a()(e),
				m = e => {
					const t = l[e];
					return t && d[t] || "community_settings"
				},
				u = (e, t, s) => n => ({
					source: m(e),
					action: "click",
					noun: c(e),
					setting: {
						value: String(t),
						oldValue: String(s)
					},
					subreddit: r.hb(n),
					...r.n(n)
				}),
				p = (e, t, s) => n => ({
					source: m(e),
					action: "save",
					noun: c(e),
					setting: {
						value: String(t),
						oldValue: String(s)
					},
					subreddit: r.hb(n),
					...r.n(n)
				}),
				b = e => t => ({
					source: "community_settings",
					action: "click",
					noun: d[e],
					...r.n(t)
				}),
				h = e => t => ({
					source: d[e],
					action: "click",
					noun: "r2_community_settings",
					...r.n(t)
				}),
				g = (e, t, s, n) => a => ({
					...r.n(a),
					source: "mod_tools",
					action: e,
					noun: t,
					...void 0 !== s && void 0 !== n && {
						setting: {
							value: String(s),
							oldValue: String(n)
						}
					},
					subreddit: r.hb(a),
					actionInfo: r.d(a, {
						reason: "welcome_message"
					})
				}),
				f = (e, t) => s => {
					var n;
					return {
						...r.n(s),
						source: "community_settings",
						action: "click",
						noun: e,
						subreddit: r.hb(s),
						subredditId: null === (n = r.hb(s)) || void 0 === n ? void 0 : n.id,
						value: t
					}
				}
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return n
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "l", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "j", (function() {
				return l
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "m", (function() {
				return p
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "o", (function() {
				return h
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			const n = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				a = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				r = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				l = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				c = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				m = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				u = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				h = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/reddit/components/CreatorStats/helpers.ts"),
				a = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => {
					switch (e) {
						case n.b.Available:
							return "insights_shown";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
							return "post_too_old";
						case n.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => s => ({
					...Object(o.n)(s),
					action: a.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(o.hb)(s),
					post: Object(o.I)(s, e),
					userSubreddit: Object(o.rb)(s),
					actionInfo: Object(o.d)(s, {
						reason: r(t)
					})
				}),
				l = (e, t) => s => ({
					...Object(o.n)(s),
					action: a.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(o.I)(s, t),
					subreddit: Object(o.hb)(s),
					userSubreddit: Object(o.rb)(s)
				}),
				d = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						case n.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				c = e => t => ({
					...Object(o.n)(t),
					action: a.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(o.d)(t, {
						pageType: "profile"
					}),
					post: Object(o.I)(t, e, void 0, 0),
					profile: Object(o.R)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(o.n)(n),
					action: a.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(o.d)(n, {
						reason: d(t)
					}),
					post: Object(o.I)(n, e, void 0, s)
				}),
				u = (e, t, s, n, r, i) => l => ({
					...Object(o.n)(l),
					action: a.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(o.d)(l, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(o.I)(l, e, void 0, i),
					subreddit: Object(o.hb)(l),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: r
					}
				}),
				p = (e, t, s) => n => ({
					...Object(o.n)(n),
					action: a.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(o.d)(n, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(o.I)(n, e, void 0, s),
					subreddit: Object(o.hb)(n)
				})
		},
		"./src/reddit/helpers/trackers/emailInvite.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					action: "click",
					noun: "invite_via_email",
					...a.n(t),
					subreddit: a.hb(t),
					actionInfo: a.d(t),
					correlationId: Object(n.d)(n.a.SubredditCreation, !1)
				}),
				r = () => e => ({
					source: "email_invite_painted_door",
					action: "view",
					noun: "modal",
					...a.n(e),
					subreddit: a.hb(e),
					actionInfo: a.d(e),
					correlationId: Object(n.c)(n.a.SubredditCreation)
				}),
				i = e => t => ({
					source: "email_invite_painted_door",
					action: "click",
					noun: e,
					...a.n(t),
					subreddit: a.hb(t),
					actionInfo: a.d(t),
					correlationId: Object(n.c)(n.a.SubredditCreation)
				})
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				a = s("./src/reddit/selectors/comments.ts"),
				o = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => i => {
					const l = Object(a.e)(i, {
							commentId: e
						}),
						d = Object(o.g)(i, {
							subredditId: t,
							userId: s
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...r.n(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == l ? void 0 : l.templateId,
							title: l ? Object(n.g)(l) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				},
				l = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...r.n(e)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					screen: n.Z(e),
					subreddit: n.hb(e),
					profile: n.R(e),
					userSubreddit: n.rb(e)
				}),
				o = e => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: e,
					...a(t)
				}),
				r = () => e => ({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit",
					...a(e)
				}),
				i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "mod_hub_nav",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/moderationPages.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return l
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: a.Z(e),
					profile: a.R(e),
					subreddit: a.hb(e)
				}),
				r = e => {
					switch (e) {
						case n.gc.Banned:
							return "banned";
						case n.gc.Muted:
							return "muted";
						case n.gc.Contributors:
							return "contributors";
						case n.gc.Moderators:
							return "modmanagement";
						case n.gc.Removal:
							return "set_removal_reasons";
						case n.gc.CommunitySettings:
							return "edit";
						default:
							return e
					}
				},
				i = (e, t) => s => ({
					source: r(t),
					noun: e,
					action: "click",
					...o(s)
				}),
				l = e => t => ({
					source: r(e),
					noun: "hover_user_hovercard",
					action: "view",
					...o(t)
				})
		},
		"./src/reddit/helpers/validateFlairCssClass.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/reddit/constants/flair.ts");
			const o = new RegExp(`^[a-zA-Z0-9-]{1,${a.f}}$`);
			t.a = e => {
				if (!e) return;
				const t = e.split(" ").filter(Boolean);
				if (t.length > a.c) return n.fbt._("Too many class names", null, {
					hk: "musK5"
				});
				const s = t.find(e => !e.match(o));
				return s ? s.length > a.f ? n.fbt._("Class name should not be longer than 100 characters", null, {
					hk: "2nBmgP"
				}) : n.fbt._("Class name contains an invalid character", null, {
					hk: "4kdVCU"
				}) : void 0
			}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.a;
				return Object(n.e)(s => Object(a.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js");

			function a() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => t(!0), []), e
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(r);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: `${Object(o.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(r);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: `${Object(o.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(o.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), a.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, a.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/CheckmarkFitted/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "3 4 14 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, s) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, a.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, a.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, a.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Collection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M14 0H2a2 2 0 0 0-2 2v.78A2.979 2.979 0 0 1 2 2h12c.77 0 1.468.301 2 .78V2a2 2 0 0 0-2-2zm0 3H2a2 2 0 0 0-2 2v.78A2.979 2.979 0 0 1 2 5h12c.77 0 1.468.301 2 .78V5a2 2 0 0 0-2-2zM2 6h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
			})))
		},
		"./src/reddit/icons/svgs/Event/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M4 16h12V9H4v7zM17 4h-2V3a1 1 0 0 0-2 0v1H7V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Gild/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", {
				stroke: "none",
				strokeWidth: "1",
				fillRule: "evenodd"
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "m15.1275768 8.9935-2.059 2.204.371 2.992c.022.181-.055.359-.203.466-.087.064-.19.096-.294.096-.072 0-.144-.016-.211-.047l-2.73200003-1.277-2.731 1.277c-.164.076-.359.059-.506-.049-.148-.107-.225-.285-.202-.466l.37-2.992-2.059-2.204c-.124-.133-.166-.323-.11-.496s.202-.302.381-.336l2.96-.573 1.46-2.639c.175-.318.69900003-.318.87500003 0l1.46 2.639 2.959.573c.179.034.325.163.381.336s.014.363-.11.496m2.911-2.985-6.586-4.786c-.869-.63-2.03700003-.63-2.90600003 0v.001l-6.586 4.785c-.869.631-1.23 1.742-.898 2.764l2.515 7.743c.332 1.021 1.278 1.708 2.352 1.708h8.14000003c1.075 0 2.02-.687 2.352-1.708l2.516-7.743c.332-1.022-.03-2.133-.899-2.764"
			}))))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, s) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Grapple/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.grapple, {
					[i.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), a.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 13 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-4 -2)"
			}))
		},
		"./src/reddit/icons/svgs/ModLogPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M15.5,7.75 L12.5,7.75 C12.224,7.75 12,7.526 12,7.25 C12,6.974 12.224,6.75 12.5,6.75 L15.5,6.75 C15.776,6.75 16,6.974 16,7.25 C16,7.526 15.776,7.75 15.5,7.75 Z M15.5,10.5 L12.5,10.5 C12.224,10.5 12,10.276 12,10 C12,9.724 12.224,9.5 12.5,9.5 L15.5,9.5 C15.776,9.5 16,9.724 16,10 C16,10.276 15.776,10.5 15.5,10.5 Z M15.5,13.25 L4.5,13.25 C4.224,13.25 4,13.026 4,12.75 C4,12.474 4.224,12.25 4.5,12.25 L15.5,12.25 C15.776,12.25 16,12.474 16,12.75 C16,13.026 15.776,13.25 15.5,13.25 Z M4.5,16 C4.224,16 4,15.776 4,15.5 C4,15.224 4.224,15 4.5,15 L15.5,15 C15.776,15 16,15.224 16,15.5 C16,15.776 15.776,16 15.5,16 L4.5,16 Z M4,4.5 C4,4.224 4.224,4 4.5,4 L9.813,4 C10.089,4 10.313,4.224 10.313,4.5 L10.313,10 C10.313,10.276 10.089,10.5 9.813,10.5 L4.5,10.5 C4.224,10.5 4,10.276 4,10 L4,4.5 Z M3,2 C2.447,2 2,2.447 2,3 L2,17 C2,17.553 2.447,18 3,18 L17,18 C17.553,18 18,17.553 18,17 L18,3 C18,2.447 17.553,2 17,2 L3,2 Z"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/constants/colors.ts");
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), a.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), a.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Negative/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, a.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M6.2103,5.78636 C6.3275,5.90356 6.3275,6.09356 6.2103,6.21076 C6.1519,6.26916 6.0751,6.29836 5.9983,6.29836 C5.9211,6.29836 5.8447,6.26916 5.7859,6.21076 L4.9983,5.42276 L4.2103,6.21076 C4.1519,6.26916 4.0751,6.29836 3.9983,6.29836 C3.9211,6.29836 3.8447,6.26916 3.7859,6.21076 C3.6687,6.09356 3.6687,5.90356 3.7859,5.78636 L4.5739,4.99836 L3.7859,4.21076 C3.6687,4.09356 3.6687,3.90356 3.7859,3.78636 C3.9031,3.66916 4.0931,3.66916 4.2103,3.78636 L4.9983,4.57436 L5.7859,3.78636 C5.9031,3.66916 6.0931,3.66916 6.2103,3.78636 C6.3275,3.90356 6.3275,4.09356 6.2103,4.21076 L5.4223,4.99836 L6.2103,5.78636 Z M7.4023,2.59436 C6.0767,1.26836 3.9195,1.26916 2.5939,2.59436 C1.2687,3.91996 1.2687,6.07716 2.5939,7.40276 C3.2567,8.06556 4.1275,8.39676 4.9983,8.39676 C5.8687,8.39676 6.7395,8.06556 7.4023,7.40276 C8.7279,6.07716 8.7279,3.91996 7.4023,2.59436 Z"
			}))
		},
		"./src/reddit/icons/svgs/Positive/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, a.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M8.0828,3.27736 L7.5232,2.71736 C7.448,2.64216 7.3464,2.60016 7.2404,2.60016 C7.134,2.60016 7.0324,2.64216 6.9576,2.71736 L4.16,5.51456 L3.0428,4.39736 C2.8868,4.24096 2.6336,4.24096 2.4772,4.39736 L1.9172,4.95736 C1.7608,5.11376 1.7608,5.36696 1.9172,5.52296 L3.8772,7.48296 C3.9556,7.56096 4.0576,7.60016 4.16,7.60016 C4.2624,7.60016 4.3648,7.56096 4.4428,7.48296 L8.0828,3.84296 C8.2392,3.68656 8.2392,3.43376 8.0828,3.27736 Z"
			}))
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
			})))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, a.a.createElement("g", null, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("polygon", {
				points: "10,38.8 30,38.8 31.2,10.9 8.7,10.9"
			}), a.a.createElement("path", {
				d: "M27.5,3.8H25c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5h-2.5c-2.8,0-5,2.2-5,5h25C32.5,6,30.3,3.8,27.5,3.8z"
			}))))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(r);
			const l = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/icons/svgs/Wiki/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M13.8711,6 L5.8711,6 C5.5951,6 5.3711,5.776 5.3711,5.5 C5.3711,5.224 5.5951,5 5.8711,5 L13.8711,5 C14.1471,5 14.3711,5.224 14.3711,5.5 C14.3711,5.776 14.1471,6 13.8711,6 M13.8711,9 L5.8711,9 C5.5951,9 5.3711,8.776 5.3711,8.5 C5.3711,8.224 5.5951,8 5.8711,8 L13.8711,8 C14.1471,8 14.3711,8.224 14.3711,8.5 C14.3711,8.776 14.1471,9 13.8711,9 M13.8711,12 L5.8711,12 C5.5951,12 5.3711,11.776 5.3711,11.5 C5.3711,11.224 5.5951,11 5.8711,11 L13.8711,11 C14.1471,11 14.3711,11.224 14.3711,11.5 C14.3711,11.776 14.1471,12 13.8711,12 M13.8711,15 L5.8711,15 C5.5951,15 5.3711,14.776 5.3711,14.5 C5.3711,14.224 5.5951,14 5.8711,14 L13.8711,14 C14.1471,14 14.3711,14.224 14.3711,14.5 C14.3711,14.776 14.1471,15 13.8711,15 M16.0001,2 L4.0001,2 C3.4471,2 3.0001,2.448 3.0001,3 L3.0001,17 C3.0001,17.552 3.4471,18 4.0001,18 L16.0001,18 C16.5531,18 17.0001,17.552 17.0001,17 L17.0001,3 C17.0001,2.448 16.5531,2 16.0001,2"
			})))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				o = s.n(a);
			t.a = n.a.div("rightAligned", o.a)
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function a(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(n || (n = {}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "h", (function() {
				return m
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const a = 50,
				o = 50,
				r = 1e4,
				i = 100;
			var l, d;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(l || (l = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(d || (d = {}));
			const c = e => 1 === e.length ? Object(n.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
				m = (e, t) => {
					return {
						[t === d.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/models/SubredditModeration/ModerationLog/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t, s) => `${e}-${((e,t)=>t||e||"1")(s,t)}`
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, a;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(a || (a = {}))
		},
		"./src/reddit/models/TrafficStats/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			}));
			const n = 97,
				a = 57,
				o = 12;
			var r;
			! function(e) {
				e.TOTAL = "total", e.DESKTOP = "desktop", e.OLD_REDDIT = "oldReddit", e.IOS = "apps", e.ANDROID = "apps", e.MOBILE_WEB = "mWeb"
			}(r || (r = {}))
		},
		"./src/reddit/pages/ModHub/Header.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_3moWGMnbR8K4S0yEul07nr",
				titleFontH2: "_2oI68wVKNMPkDrFs5iv-mT",
				titleFontH3: "_2SjfolwDVVvPkTR19n53-N",
				titleFontH4: "_2PCswqdAkej43QrI3i2XD6",
				titleFontH5: "_2ClzPN9iMLeouYjBczMuak",
				titleFontH6: "-Ys2BgGuQrEY2uMl3yymz",
				metadataFont: "_13D6uHC3HmU2n303ICkc2Z",
				flairFont: "jd22g-ATlzm80vQJWeapy",
				labelsFont: "_1UxIO379jfzGXKK-UTji0l",
				actionFont: "_33izYXQ9DA6aVnhOiSApGv",
				smallButtonFont: "_3gTmhpwBqqacn2Fbh1nFPi",
				largeButtonFont: "_18NraFj-4C_LqHvfoVPar1",
				strongTextFont: "_3tRumE3gvvS_0BYlnDtcIA",
				tabFont: "_1DLPo8qhiBT00GYX1ng3ad",
				buttonFontXS: "_1jy5yDpKOT5-Cv2QAMnE8Z",
				buttonFontXs: "_1jy5yDpKOT5-Cv2QAMnE8Z",
				buttonFontS: "_3DmXGTGm5YD5IApa9MyBNq",
				buttonFontM: "_32Yvll-0lWSj_SZKU0TKRR",
				buttonFontL: "_1wDiG7XcGSvunA559KlfGG",
				buttonFontXL: "xpxpmGAZ5HYQvDSsMNvp8",
				buttonFontXl: "xpxpmGAZ5HYQvDSsMNvp8",
				bodyFontH1: "_1ygLn4-Vtd31oQv6zylo5z",
				bodyFontH2: "_1btDxE6K9AP_wtfakdg11l",
				bodyFontH3: "cMjXJNdI0iac3nSCHtBrq",
				bodyFontH4: "_3ZsC5lxE3Dnw9-duolQiN3",
				bodyFontH5: "_3gWD0dGAav6VxMQZ2iY4qc",
				bodyFontH6: "_2yKCC1d-C1qheMkCr5CedW",
				bodyFontH6Small: "_1AyCUR1VQn-opitbpGpNcf",
				bodyFont: "_1RI3wkzuynRc_Bqno__Uom",
				bodyFontSmall: "_2MlCobLFb0alel2wzuIFVK",
				bodyFontMono: "_3RdMKJzgzPT9lgXHEf0XZB",
				header: "_3u9on6H92JkZNRumczPd67",
				subredditLink: "_3EIUrhztcaaHcqMILEsnBq",
				subredditIcon: "_3uA1he5X3WeG6mpoUWdcXy"
			}
		},
		"./src/reddit/pages/ModHub/Header.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/pages/ModHub/Header.m.less"),
				r = s.n(o),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/controls/InternalLink/index.tsx");
			t.a = e => {
				var t, s;
				return a.a.createElement("div", {
					className: r.a.header
				}, a.a.createElement(i.b, {
					className: r.a.subredditIcon,
					subredditOrProfile: e.subredditOrProfile
				}), a.a.createElement(l.default, {
					className: r.a.subredditLink,
					to: (null === (t = e.subredditOrProfile) || void 0 === t ? void 0 : t.url) || "",
					onClick: e.onClick
				}, null === (s = e.subredditOrProfile) || void 0 === s ? void 0 : s.displayText), e.pageName && `/ ${e.pageName}`)
			}
		},
		"./src/reddit/pages/ModHub/index.m.less": function(e, t, s) {
			e.exports = {
				contentWrapper: "_2Z3MiFrgj2rofHXrH1YVKn",
				isModerator: "_1haViLcso0RRPvkDGZgDLJ",
				BackgroundContainer: "_1XAvW8OS9HO-SVS7BDAIGe",
				backgroundContainer: "_1XAvW8OS9HO-SVS7BDAIGe",
				Body: "_3hAOyl8ThaUgCBqiNvN_sN",
				body: "_3hAOyl8ThaUgCBqiNvN_sN"
			}
		},
		"./src/reddit/pages/ModHub/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/ContentGate/index.tsx"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/assertNever.ts"),
				h = s("./src/lib/constants/index.ts");
			const g = e => {
				switch (e) {
					case h.gc.Awards:
						return p.fbt._("Awards", null, {
							hk: "EiSXW"
						});
					case h.gc.Powerups:
						return p.fbt._("Powerups", null, {
							hk: "3SZBhK"
						});
					case h.gc.Banned:
						return p.fbt._("Banned", null, {
							hk: "35R8OD"
						});
					case h.gc.Muted:
						return p.fbt._("Muted", null, {
							hk: "f2nJu"
						});
					case h.gc.ContentControls:
						return p.fbt._("Content controls", null, {
							hk: "H1yxv"
						});
					case h.gc.Contributors:
						return p.fbt._("Approved", null, {
							hk: "180AS9"
						});
					case h.gc.Moderators:
						return p.fbt._("Moderators", null, {
							hk: "4qdV8t"
						});
					case h.gc.SubredditRules:
						return p.fbt._("Rules", null, {
							hk: "2SNdd8"
						});
					case h.gc.Removal:
						return p.fbt._("Removal reasons", null, {
							hk: "1smDUM"
						});
					case h.gc.Modqueue:
						return p.fbt._("Mod queue", null, {
							hk: "yEBGb"
						});
					case h.gc.Reports:
						return p.fbt._("Reports", null, {
							hk: "4Ctcb1"
						});
					case h.gc.Spam:
						return p.fbt._("Spam", null, {
							hk: "1D73Vp"
						});
					case h.gc.Unmoderated:
						return p.fbt._("Unmoderated", null, {
							hk: "3TOaeD"
						});
					case h.gc.Edited:
						return p.fbt._("Edited", null, {
							hk: "OLtvW"
						});
					case h.gc.ChatSettings:
						return p.fbt._("Chat settings", null, {
							hk: "3gycCw"
						});
					case h.gc.Modlog:
						return p.fbt._("Mod log", null, {
							hk: "3uy7LL"
						});
					case h.gc.Flair:
						return p.fbt._("Grant user flair", null, {
							hk: "2B8sTJ"
						});
					case h.gc.CommunitySettings:
						return p.fbt._("Community settings", null, {
							hk: "XbHzi"
						});
					case h.gc.Emojis:
						return p.fbt._("Emojis", null, {
							hk: "3mPnxe"
						});
					case h.gc.UserFlair:
						return p.fbt._("User flair", null, {
							hk: "3kleCv"
						});
					case h.gc.PostFlair:
						return p.fbt._("Post flair", null, {
							hk: "2Y1FKb"
						});
					case h.gc.Badges:
						return p.fbt._("Badges", null, {
							hk: "3vM0lt"
						});
					case h.gc.Emotes:
						return p.fbt._("Emotes", null, {
							hk: "2Ivxxq"
						});
					case h.gc.Wiki:
					case h.gc.WikiContributors:
					case h.gc.WikiBanned:
						return p.fbt._("Wiki pages", null, {
							hk: "WdSXv"
						});
					case h.gc.Traffic:
						return p.fbt._("Traffic stats", null, {
							hk: "3mcw71"
						});
					case h.gc.ScheduledPostContent:
					case h.gc.SubredditContent:
						return p.fbt._("Scheduled posts", null, {
							hk: "19KZjq"
						});
					case h.gc.EventPostContent:
						return p.fbt._("Event posts", null, {
							hk: "3ejc42"
						});
					case h.gc.Streaming:
						return p.fbt._("Broadcasting", null, {
							hk: "1Cz44z"
						});
					case h.gc.Predictions:
						return p.fbt._("Predictions", null, {
							hk: "1yASCC"
						});
					case h.gc.TalkHosts:
						return p.fbt._("Talk hosts", null, {
							hk: "3BAjFt"
						});
					default:
						return Object(b.a)(e)
				}
			};
			var f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/canAccessModerationPage/index.ts"),
				v = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				k = s("./src/reddit/helpers/trackers/moderationPages.ts"),
				_ = s("./src/reddit/helpers/trackers/modHub.ts"),
				C = s("./src/reddit/models/ModQueue/index.ts"),
				y = s("./src/reddit/selectors/experiments/econ/index.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/postCreations.ts"),
				w = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/streamingModSettings.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/ModHub/Content/index.tsx"),
				M = s("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				P = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				R = s("./src/reddit/components/ModHub/Content/WelcomeMessage.m.less"),
				A = s.n(R);
			const F = m.a.wrapped(P.a, "ModerateIcon", A.a),
				D = m.a.div("ModHubWelcomeMessage", A.a);
			var L = e => r.a.createElement(D, null, r.a.createElement(F, null), p.fbt._("Welcome to the mod tools for {subredditName}", [p.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "7Usff"
				})),
				U = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/config.ts")),
				B = s("./node_modules/react-router-redux/es/index.js"),
				H = s("./src/reddit/components/CrowdControlAdoptionCampaign/useCrowdControlCampaign.tsx"),
				W = s("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				z = s("./src/reddit/contexts/NavbarExp.ts"),
				V = s("./src/reddit/featureFlags/index.ts"),
				q = s("./src/reddit/helpers/localStorage/index.ts"),
				G = s("./src/reddit/helpers/trackers/communitySettings.ts"),
				K = s("./src/reddit/helpers/trackers/emailInvite.ts"),
				Q = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				X = s("./src/reddit/icons/fonts/index.tsx"),
				J = s("./src/reddit/routes/moderationPages/index.ts"),
				Y = s("./src/reddit/selectors/experiments/emailInvite.ts"),
				Z = s("./src/reddit/selectors/gold/powerups/index.ts"),
				$ = s("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				ee = s("./src/reddit/components/ModHub/ModHubNav/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ne = e => r.a.createElement("div", se({
					className: Object(d.a)(te.a.breadcrumb, e.className)
				}, e), r.a.createElement("button", {
					className: te.a.breadcrumbButton
				}, r.a.createElement($.a, null), p.fbt._("Back to mod tools", null, {
					hk: "4udiKO"
				}))),
				ae = s("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				oe = s("./src/reddit/actions/modal.ts"),
				re = s("./src/higherOrderComponents/asModal/index.tsx"),
				ie = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				le = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				de = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				ce = s("./src/reddit/constants/wiki.ts"),
				me = s("./src/reddit/controls/Button/index.tsx"),
				ue = s("./src/reddit/controls/TextButton/index.tsx"),
				pe = s("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				be = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				he = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				ge = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				fe = s("./src/reddit/controls/Dropdown/index.tsx"),
				xe = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Ee = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				ve = s("./src/reddit/components/Wiki/CreateNewWikiPageModal/index.m.less"),
				ke = s.n(ve);
			class _e extends r.a.Component {
				constructor(e) {
					super(e), this.onToggleDropdown = () => {
						this.setState({
							isDropdownOpen: !this.state.isDropdownOpen
						})
					}, this.onSelectParentPage = e => {
						this.props.onSelectParentPage(e), this.onToggleDropdown()
					}, this.state = {
						isDropdownOpen: !1
					}
				}
				render() {
					const {
						pageTree: e,
						parentPageName: t
					} = this.props, {
						isDropdownOpen: s
					} = this.state, n = p.fbt._("None", null, {
						hk: "3FT0YQ"
					});
					return r.a.createElement("div", {
						className: ke.a.dropdownContainer
					}, r.a.createElement("button", {
						className: ke.a.dropdownTarget,
						onClick: this.onToggleDropdown
					}, r.a.createElement("div", {
						className: ke.a.targetText
					}, t || n), r.a.createElement(Ee.b, null)), s && r.a.createElement(fe.a, {
						className: ke.a.dropdown
					}, r.a.createElement(xe.b, {
						className: ke.a.dropdownRow,
						displayText: n,
						onClick: () => this.onSelectParentPage(void 0)
					}), e.map(e => e.depth >= ce.c ? null : ce.f.has(e.path.split("/")[0]) ? null : r.a.createElement(xe.b, {
						className: ke.a.dropdownRow,
						displayText: e.path,
						key: e.path,
						onClick: () => this.onSelectParentPage(e.path)
					}))))
				}
			}
			var Ce = _e;
			const ye = e => {
				switch (e) {
					case be.a.InvalidPageName:
						return p.fbt._("Invalid page name", null, {
							hk: "1gQvCb"
						});
					case be.a.MaxLengthExceed:
						return p.fbt._("Name exceeds character limit", null, {
							hk: "RDoIC"
						});
					case be.a.PageAlreadyExists:
						return p.fbt._("That page already exists", null, {
							hk: "xEyyR"
						});
					case be.a.RestrictedPageName:
						return p.fbt._("Restricted page name", null, {
							hk: "Bjv5o"
						})
				}
			};
			class Oe extends r.a.Component {
				constructor(e) {
					super(e), this.onChangePageName = e => {
						this.setState({
							partialPageName: e.currentTarget.value
						})
					}, this.onSelectParentPage = e => {
						this.setState({
							parentPageName: e
						})
					}, this.getNewPagePath = () => {
						let e = "";
						return this.state.parentPageName && (e += `${this.state.parentPageName}/`), (e += `${this.state.partialPageName}`).toLowerCase()
					}, this.state = {
						partialPageName: "",
						parentPageName: void 0
					}
				}
				hasError() {
					const {
						pageTree: e
					} = this.props, {
						partialPageName: t
					} = this.state;
					return Object(be.c)(t) || Object(be.b)(this.getNewPagePath(), e)
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = this.hasError();
					return r.a.createElement(le.e, {
						className: ke.a.modalBody
					}, r.a.createElement(le.i, null, r.a.createElement(ge.a, null, r.a.createElement(le.q, null, p.fbt._("Create a new wiki page", null, {
						hk: "V7Jnm"
					})), r.a.createElement(ue.a, {
						onClick: e.toggleModal
					}, r.a.createElement(le.b, null)))), r.a.createElement("div", {
						className: ke.a.notice
					}, r.a.createElement(he.a, null), p.fbt._("Parent page and page URL cannot be edited once created", null, {
						hk: "20D6uz"
					})), r.a.createElement(le.l, null, r.a.createElement("div", {
						className: ke.a.sectionTitle
					}, p.fbt._("Parent page", null, {
						hk: "1FeKiT"
					})), r.a.createElement(Ce, {
						onSelectParentPage: this.onSelectParentPage,
						pageTree: Object(pe.b)(e.pageTree || []),
						parentPageName: t.parentPageName
					}), r.a.createElement("div", {
						className: ke.a.sectionTitle
					}, p.fbt._("Page URL", null, {
						hk: "WL8sn"
					})), r.a.createElement(de.d, {
						placeholder: p.fbt._("ex: rules", null, {
							hk: "J0qH1"
						}),
						onChange: this.onChangePageName,
						value: t.partialPageName
					}), r.a.createElement(ie.a, {
						text: this.getNewPagePath(),
						maxChars: ce.d
					}), r.a.createElement("div", {
						className: ke.a.errorText
					}, t.partialPageName && s ? ye(s) : null)), r.a.createElement(le.g, null, r.a.createElement(le.a, {
						onClick: e.toggleModal
					}, p.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(me.n, {
						disabled: !t.partialPageName || !!s,
						className: ke.a.primaryButton,
						to: `${e.subredditUrl}about/wiki/create/${this.getNewPagePath()}`
					}, p.fbt._("Create", null, {
						hk: "2W0PL1"
					}))))
				}
			}
			var je = Object(re.a)(Oe),
				we = s("./src/reddit/selectors/activeModalId.ts"),
				Se = s("./src/reddit/selectors/subredditWiki.ts"),
				Ne = s("./node_modules/lodash/times.js"),
				Ie = s.n(Ne),
				Te = s("./src/reddit/controls/InternalLink/index.tsx"),
				Me = s("./src/reddit/components/ModHub/ModHubNav/WikiNavPanel/index.m.less"),
				Pe = s.n(Me);
			class Re extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.containerRef = r.a.createRef()
				}
				componentDidMount() {
					this.scrollToActiveItemIfNeeded()
				}
				scrollToActiveItemIfNeeded() {
					const e = this.containerRef.current,
						t = e && e.getElementsByClassName(Pe.a.mActive)[0];
					if (!e || !t) return;
					const s = e.getBoundingClientRect(),
						n = t.getBoundingClientRect();
					n.top >= s.top && n.bottom <= s.bottom || t.scrollIntoView()
				}
				render() {
					const {
						activePageName: e,
						baseUrl: t,
						directory: s
					} = this.props, n = Object(pe.b)(s && s.pageTree || []);
					return r.a.createElement("div", {
						ref: this.containerRef,
						className: Pe.a.contentTree
					}, n.map(s => {
						const n = s.path === e;
						return r.a.createElement(Te.default, {
							key: s.path,
							className: Pe.a.pageNavLink,
							to: `${t}/${s.path}`
						}, r.a.createElement("div", {
							className: Object(d.a)(Pe.a.pageNavItem, {
								[Pe.a.mActive]: n,
								[Pe.a.mExists]: s.isPagePresent
							})
						}, Ie()(s.depth, () => r.a.createElement("div", {
							className: Pe.a.indentLine
						})), r.a.createElement("span", {
							className: Pe.a.itemText
						}, `/${s.name}`)))
					}))
				}
			}
			const Ae = Object(l.c)({
				directory: (e, t) => Object(Se.b)(e, {
					subredditName: t.subreddit.name
				}),
				isCreateWikiPageModalOpen: e => "CreateWikiPageModal" === Object(we.a)(e)
			});
			class Fe extends r.a.Component {
				constructor() {
					super(...arguments), this.onToggleCreateWikiModal = () => {
						this.props.toggleCreateWikiModal()
					}
				}
				render() {
					const {
						directory: e,
						isCreateWikiPageModalOpen: t,
						subreddit: s,
						toggleCreateWikiModal: n,
						pageLayer: a
					} = this.props;
					if (!a) return null;
					const {
						urlParams: o
					} = a, {
						wikiPageName: i,
						wikiSubRoute: l,
						pageName: d
					} = o;
					return r.a.createElement("div", {
						className: Pe.a.wikiNavPanel
					}, r.a.createElement(me.l, {
						className: Pe.a.primaryButton,
						onClick: this.onToggleCreateWikiModal
					}, p.fbt._("Create new page", null, {
						hk: "35WDuL"
					})), r.a.createElement(Re, {
						activePageName: i,
						baseUrl: `${s.url}about/wiki`,
						directory: e
					}), r.a.createElement("div", {
						className: Pe.a.footer
					}, r.a.createElement(ae.b, {
						isActive: l === ce.m.Revisions && !i,
						label: p.fbt._("Recent wiki revisions", null, {
							hk: "278VnD"
						}),
						path: `${s.url}about/wiki/revisions`
					}), r.a.createElement(ae.b, {
						isActive: d === h.gc.WikiContributors,
						label: p.fbt._("Add wiki contributors", null, {
							hk: "1XHd90"
						}),
						path: `${s.url}about/wikicontributors`
					}), r.a.createElement(ae.b, {
						isActive: d === h.gc.WikiBanned,
						label: p.fbt._("Ban wiki contributors", null, {
							hk: "3IVNKp"
						}),
						path: `${s.url}about/wikibanned`
					}), r.a.createElement(ae.b, {
						label: p.fbt._("Wiki settings", null, {
							hk: "1Jctxf"
						}),
						path: `${s.url}about/edit?page=wikis`
					})), t && r.a.createElement(je, {
						pageTree: e && e.pageTree,
						subredditUrl: s.url,
						toggleModal: n,
						withOverlay: !0
					}))
				}
			}
			var De = Object(x.u)()(Object(i.b)(Ae, e => ({
				toggleCreateWikiModal: () => e(Object(oe.i)("CreateWikiPageModal"))
			}))(Fe));
			const Le = Object(l.c)({
				isBadgesAndEmotesEnabled: V.d.spCustomBadgesAndEmotes,
				isContentTagEnabled: (e, t) => !!e.subreddits.survey[t.subreddit.id],
				isEligibleForScheduledPosts: V.d.scheduledPosts,
				isEmailInviteExperimentEnabled: Y.a,
				isBroadcastingEnabled: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(S.c)(e, s.id)
				},
				isTournamentsEnabled: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(N.O)(e, {
						subredditId: s.id
					})
				},
				isPowerupsTabVisible: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(Z.f)(e, {
						subredditId: s.id
					})
				},
				isTalkHostsExperimentEnabled: y.t
			});
			class Ue extends r.a.Component {
				constructor(e, t) {
					super(e, t), this.trackClick = e => this.props.sendEvent(_.c(e)), this.trackCommunitySettingsNavItemClick = e => this.props.sendEvent(Object(G.b)(e)), this.onClickAwards = () => this.trackClick("awards"), this.onClickPowerups = () => this.trackClick("powerups"), this.onClickStreaming = () => this.trackClick("streaming"), this.onClickModQueue = () => this.trackClick("mod_queue"), this.onClickReports = () => this.trackClick("reports"), this.onClickSpam = () => this.trackClick("spam"), this.onClickEdited = () => this.trackClick("edited"), this.onClickUnmoderated = () => this.trackClick("unmoderated"), this.onClickBannedUsers = () => this.trackClick("ban_users"), this.onClickMutedUsers = () => this.trackClick("mute_users"), this.onClickApprovedSubmitters = () => this.trackClick("approved_submitters"), this.onClickApprovedTalkHosts = () => this.trackClick("talk_hosts"), this.onClickEmojis = () => this.trackClick("emoji"), this.onClickModerators = () => this.trackClick("moderators"), this.onClickChatSettings = () => this.trackClick("chat_settings"), this.onClickCommunitySettings = () => this.trackClick("community_settings"), this.onClickCommunityAppearance = () => this.trackClick("community_appearance"), this.onClickModMail = () => this.trackClick("mod_mail"), this.onClickRemovalReasons = () => this.trackClick("removal_reasons"), this.onClickRules = () => this.trackClick("rules"), this.onClickPostRequirements = () => this.trackClick("post_requirements"), this.onClickAutomodConfig = () => this.trackClick("automod_config"), this.onClickWikiPages = () => this.trackClick("wiki"), this.onClickTraffic = () => this.trackClick("traffic"), this.onClickModLog = () => this.trackClick("mod_log"), this.onClickModSupport = () => this.trackClick("r_mod_support"), this.onClickModHelp = () => this.trackClick("mod_help"), this.onClickContactReddit = () => this.trackClick("contact_reddit"), this.onClickModGuidelines = () => this.trackClick("mod_guidelines"), this.onClickModHelpCenter = () => this.trackClick("mod_help_center"), this.onClickPostFlair = () => this.trackClick("post_flair"), this.onClickUserFlair = () => this.trackClick("user_flair"), this.onClickGrantUserFlair = () => this.trackClick("grant_user_flair"), this.onClickBadges = () => this.trackClick("badges"), this.onClickEmotes = () => this.trackClick("emotes"), this.onClickScheduledPosts = () => this.props.sendEvent(Object(Q.k)()), this.onClickEventPosts = () => this.props.sendEvent(Object(Q.f)()), this.onClickPredictions = () => this.trackClick("predictions"), this.onGoToModHub = () => {
						const e = this.props.moderatorPermissions && this.props.moderatorPermissions.posts,
							t = `${this.props.subreddit.url}about/`,
							s = e ? `${t}modqueue` : t;
						this.props.pushUrl(s)
					}, this.onClickInviteViaEmail = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(K.a)("mod_hub_nav")), this.setState({
							showEmailInvitePaintedDoor: !0
						})
					}, this.onCloseInviteViaEmailModal = () => {
						this.setState({
							showEmailInvitePaintedDoor: !1
						})
					}, this.getFlairSectionName = () => this.props.isBadgesAndEmotesEnabled ? p.fbt._("Badges, flair & emojis", null, {
						hk: "1FuDnm"
					}) : this.props.isPowerupsTabVisible ? p.fbt._("Flair", null, {
						hk: "1fYKUf"
					}) : p.fbt._("Flair & emojis", null, {
						hk: "42b2AJ"
					}), this.state = {
						locationSettingSeen: !0,
						showEmailInvitePaintedDoor: !1
					}
				}
				componentDidMount() {
					this.setState({
						locationSettingSeen: Object(q.F)("location")
					})
				}
				render() {
					const {
						props: e
					} = this, t = e.isEligibleForScheduledPosts && !e.isProfile || e.isTournamentsEnabled;
					switch (e.pageName) {
						case h.gc.CommunitySettings: {
							const t = !e.subpageName || !Object.values(h.hc).includes(e.subpageName);
							return e.isProfile ? null : r.a.createElement(z.a.Consumer, null, s => r.a.createElement("div", {
								className: Object(d.a)(te.a.navContainer, {
									[te.a.navContainerExp]: s
								})
							}, r.a.createElement(ne, {
								onClick: this.onGoToModHub
							}), r.a.createElement(ae.b, {
								label: p.fbt._("Community", null, {
									hk: "1EIoJe"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.hc.Community),
								path: `${e.subreddit.url}about/edit?page=community`,
								isActive: t || e.subpageName === h.hc.Community
							}), r.a.createElement(ae.b, {
								label: p.fbt._("Safety and Privacy", null, {
									hk: "3E0TnI"
								}),
								isNew: e.showCrowdControlCampaign,
								onClick: () => this.trackCommunitySettingsNavItemClick(h.hc.Safety),
								path: `${e.subreddit.url}about/edit?page=safety`,
								isActive: e.subpageName === h.hc.Safety
							}), r.a.createElement(ae.b, {
								label: p.fbt._("Posts and Comments", null, {
									hk: "2jt4ea"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.hc.Posts),
								path: `${e.subreddit.url}about/edit?page=posts`,
								isActive: e.subpageName === h.hc.Posts
							}), r.a.createElement(ae.b, {
								label: p.fbt._("Wikis", null, {
									hk: "2X1iz1"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.hc.Wikis),
								path: `${e.subreddit.url}about/edit?page=wikis`,
								isActive: e.subpageName === h.hc.Wikis
							}), e.isContentTagEnabled && r.a.createElement(ae.b, {
								label: p.fbt._("Content Tag", null, {
									hk: "VuxaQ"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.hc.ContentTag),
								path: `${e.subreddit.url}about/edit?page=content_tag`,
								isActive: e.subpageName === h.hc.ContentTag
							}), r.a.createElement(ae.b, {
								label: p.fbt._("Notifications", null, {
									hk: "SRNLx"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.hc.Notifications),
								path: `${e.subreddit.url}about/edit?page=notifications`,
								isActive: e.subpageName === h.hc.Notifications
							})))
						}
						case h.gc.Wiki:
						case h.gc.WikiContributors:
						case h.gc.WikiBanned:
							return e.isProfile ? null : r.a.createElement(z.a.Consumer, null, t => r.a.createElement("div", {
								className: Object(d.a)(te.a.navContainer, te.a.wikiNavContainer, {
									[te.a.navContainerExp]: t
								})
							}, r.a.createElement(ne, {
								onClick: this.onGoToModHub
							}), e.moderatorPermissions.wiki && r.a.createElement(De, {
								subreddit: e.subreddit
							})));
						default:
							return r.a.createElement(z.a.Consumer, null, s => r.a.createElement("div", {
								className: Object(d.a)(te.a.navContainer, {
									[te.a.navContainerExp]: s
								})
							}, e.moderatorPermissions.posts && !e.isProfile && r.a.createElement("div", {
								className: te.a.navSection
							}, r.a.createElement("div", {
								className: te.a.sectionHeader
							}, r.a.createElement(X.a, {
								name: "mod_queue",
								className: te.a.iconStyles
							}), p.fbt._("Queues", null, {
								hk: "2BbIZV"
							})), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Modqueue,
								label: g(h.gc.Modqueue),
								onClick: this.onClickModQueue,
								path: `${e.subreddit.url}about/modqueue`
							}), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Reports,
								label: g(h.gc.Reports),
								onClick: this.onClickReports,
								path: `${e.subreddit.url}about/reports`
							}), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Spam,
								label: g(h.gc.Spam),
								onClick: this.onClickSpam,
								path: `${e.subreddit.url}about/spam`
							}), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Edited,
								label: g(h.gc.Edited),
								onClick: this.onClickEdited,
								path: `${e.subreddit.url}about/edited`
							}), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Unmoderated,
								label: g(h.gc.Unmoderated),
								onClick: this.onClickUnmoderated,
								path: `${e.subreddit.url}about/unmoderated`
							})), !e.isProfile && r.a.createElement("div", {
								className: te.a.navSection
							}, r.a.createElement("div", {
								className: te.a.sectionHeader
							}, r.a.createElement(X.a, {
								name: "user",
								className: te.a.iconStyles
							}), p.fbt._("User management", null, {
								hk: "3G4BgD"
							})), e.moderatorPermissions.access && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Banned,
								label: g(h.gc.Banned),
								onClick: this.onClickBannedUsers,
								path: `${e.subreddit.url}about/banned`
							}), e.moderatorPermissions.mail && r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Muted,
								label: g(h.gc.Muted),
								onClick: this.onClickMutedUsers,
								path: `${e.subreddit.url}about/muted`
							}), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Contributors,
								label: g(h.gc.Contributors),
								onClick: this.onClickApprovedSubmitters,
								path: `${e.subreddit.url}about/contributors`
							}), e.isTalkHostsExperimentEnabled && r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.TalkHosts,
								label: g(h.gc.TalkHosts),
								onClick: this.onClickApprovedTalkHosts,
								path: `${e.subreddit.url}about/talkhosts`
							})), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Moderators,
								label: g(h.gc.Moderators),
								onClick: this.onClickModerators,
								path: `${e.subreddit.url}about/moderators`
							}), e.isEmailInviteExperimentEnabled && r.a.createElement(ae.b, {
								label: p.fbt._("Bulk Email Invite", null, {
									hk: "3GTIEm"
								}),
								isNew: !0,
								onClick: this.onClickInviteViaEmail
							}), this.state.showEmailInvitePaintedDoor && r.a.createElement(W.a, {
								onClose: this.onCloseInviteViaEmailModal,
								sendEvent: e.sendEvent
							})), (e.moderatorPermissions.flair || e.moderatorPermissions.config) && !e.isProfile && r.a.createElement("div", {
								className: te.a.navSection
							}, r.a.createElement("div", {
								className: te.a.sectionHeader
							}, r.a.createElement(X.a, {
								name: "tag",
								className: te.a.iconStyles
							}), this.getFlairSectionName()), e.moderatorPermissions.flair && r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Flair,
								label: g(h.gc.Flair),
								onClick: this.onClickGrantUserFlair,
								path: `${e.subreddit.url}about/flair`
							}), e.moderatorPermissions.config && r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Emojis,
								label: g(h.gc.Emojis),
								onClick: this.onClickEmojis,
								path: `${e.subreddit.url}about/emojis`
							}), e.moderatorPermissions.flair && r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.UserFlair,
								label: g(h.gc.UserFlair),
								onClick: this.onClickUserFlair,
								path: `${e.subreddit.url}about/userflair`
							}), e.moderatorPermissions.flair && e.moderatorPermissions.config && r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.PostFlair,
								label: g(h.gc.PostFlair),
								onClick: this.onClickPostFlair,
								path: `${e.subreddit.url}about/postflair`
							}), e.isBadgesAndEmotesEnabled && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Badges,
								label: g(h.gc.Badges),
								onClick: this.onClickBadges,
								path: `${e.subreddit.url}about/badges`
							}), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Emotes,
								label: g(h.gc.Emotes),
								onClick: this.onClickEmotes,
								path: `${e.subreddit.url}about/emotes`
							}))), (e.moderatorPermissions.config || e.moderatorPermissions.posts) && !e.isProfile && r.a.createElement("div", {
								className: te.a.navSection
							}, r.a.createElement("div", {
								className: te.a.sectionHeader
							}, r.a.createElement(X.a, {
								name: "rules",
								className: te.a.iconStyles
							}), p.fbt._("Rules and regulations", null, {
								hk: "QAksk"
							})), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.SubredditRules,
								label: g(h.gc.SubredditRules),
								onClick: this.onClickRules,
								path: `${e.subreddit.url}about/rules`
							}), e.moderatorPermissions.posts && r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Removal,
								label: g(h.gc.Removal),
								onClick: this.onClickRemovalReasons,
								path: `${e.subreddit.url}about/removal`
							}), e.moderatorPermissions.config && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.ContentControls,
								label: g(h.gc.ContentControls),
								onClick: this.onClickPostRequirements,
								path: `${e.subreddit.url}about/settings`
							}), r.a.createElement(ae.b, {
								label: p.fbt._("Automod", null, {
									hk: "1IngsO"
								}),
								onClick: this.onClickAutomodConfig,
								path: `${e.subreddit.url}about/wiki/config/automoderator`
							}))), t && r.a.createElement("div", {
								className: te.a.navSection
							}, r.a.createElement("div", {
								className: te.a.sectionHeader
							}, r.a.createElement(X.a, {
								name: "list_bulleted",
								className: te.a.iconStyles
							}), p.fbt._("Content", null, {
								hk: "IAh5R"
							})), e.isEligibleForScheduledPosts && !e.isProfile && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.ScheduledPostContent,
								label: p.fbt._("Scheduled posts", null, {
									hk: "11S6dN"
								}),
								onClick: this.onClickScheduledPosts,
								path: Object(J.e)(e.subreddit.url)
							}), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.EventPostContent,
								label: p.fbt._("Event posts", null, {
									hk: "3D98hc"
								}),
								onClick: this.onClickEventPosts,
								path: Object(J.b)(e.subreddit.url)
							})), e.isTournamentsEnabled && r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Predictions,
								label: p.fbt._("Predictions", null, {
									hk: "Serjr"
								}),
								onClick: this.onClickPredictions,
								path: Object(J.d)(e.subreddit.url),
								isNew: !0
							})), (e.moderatorPermissions.config || e.moderatorPermissions.wiki) && r.a.createElement("div", {
								className: te.a.navSection
							}, r.a.createElement("div", {
								className: te.a.sectionHeader
							}, r.a.createElement(X.a, {
								name: "settings",
								className: te.a.iconStyles
							}), p.fbt._("Other", null, {
								hk: "ST5RE"
							})), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Awards,
								label: p.fbt._("Awards", null, {
									hk: "48U4Du"
								}),
								onClick: this.onClickAwards,
								path: `${e.subreddit.url}about/awards`
							}), e.moderatorPermissions.config && e.isPowerupsTabVisible && r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Powerups,
								label: p.fbt._("Powerups", null, {
									hk: "1fgdwA"
								}),
								onClick: this.onClickPowerups,
								path: `${e.subreddit.url}about/powerups`,
								isNew: !0
							}), e.moderatorPermissions.config && !e.isProfile && e.isBroadcastingEnabled && r.a.createElement(ae.b, {
								label: g(h.gc.Streaming),
								onClick: this.onClickStreaming,
								path: `${e.subreddit.url}about/broadcasting`,
								isNew: !0
							}), e.moderatorPermissions.wiki && !e.isProfile && r.a.createElement(ae.b, {
								label: p.fbt._("Wiki pages", null, {
									hk: "wShFl"
								}),
								onClick: this.onClickWikiPages,
								path: `${U.a.redditUrl}${e.subreddit.url}about/wiki/index`
							}), e.moderatorPermissions.config && !e.isProfile && r.a.createElement(ae.b, {
								label: p.fbt._("Community settings", null, {
									hk: "2xOUK6"
								}),
								onClick: this.onClickCommunitySettings,
								isNew: !this.state.locationSettingSeen || e.showCrowdControlCampaign,
								path: `${e.subreddit.url}about/edit?page=community`,
								showInboundArrow: !0
							}), e.moderatorPermissions.config && !e.isProfile && r.a.createElement(ae.b, {
								label: p.fbt._("Community appearance", null, {
									hk: "3AHttA"
								}),
								path: `${e.subreddit.url}?styling=true`,
								onClick: this.onClickCommunityAppearance,
								showInboundArrow: !0
							})), e.moderatorPermissions.mail && !e.isProfile && r.a.createElement("div", {
								className: te.a.navSection
							}, r.a.createElement("div", {
								className: te.a.sectionHeader
							}, r.a.createElement(X.a, {
								name: "mod_mail",
								className: te.a.iconStyles
							}), p.fbt._("Modmail", null, {
								hk: "Eh4Vu"
							})), r.a.createElement(ae.b, {
								isExternal: !0,
								label: p.fbt._("Modmail", null, {
									hk: "3Xkgqo"
								}),
								onClick: this.onClickModMail,
								path: "https://mod.reddit.com"
							})), e.moderatorPermissions.config && !e.isProfile && r.a.createElement("div", {
								className: te.a.navSection
							}, r.a.createElement("div", {
								className: te.a.sectionHeader
							}, r.a.createElement(X.a, {
								name: "chat",
								className: te.a.iconStyles
							}), p.fbt._("Chat", null, {
								hk: "4mJ2vR"
							})), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.ChatSettings,
								label: g(h.gc.ChatSettings),
								onClick: this.onClickChatSettings,
								path: `${e.subreddit.url}about/chat`
							})), !e.isProfile && r.a.createElement("div", {
								className: te.a.navSection
							}, r.a.createElement("div", {
								className: te.a.sectionHeader
							}, r.a.createElement(X.a, {
								name: "statistics",
								className: te.a.iconStyles
							}), p.fbt._("Community activity", null, {
								hk: "1vGSer"
							})), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Traffic,
								label: p.fbt._("Traffic stats", null, {
									hk: "vw5CU"
								}),
								onClick: this.onClickTraffic,
								path: `${e.subreddit.url}about/traffic`
							}), r.a.createElement(ae.b, {
								isActive: e.pageName === h.gc.Modlog,
								label: g(h.gc.Modlog),
								onClick: this.onClickModLog,
								path: `${e.subreddit.url}about/log`
							})), r.a.createElement("div", {
								className: te.a.navSection
							}, r.a.createElement("div", {
								className: te.a.sectionHeader
							}, r.a.createElement(X.a, {
								name: "help",
								className: te.a.iconStyles
							}), p.fbt._("Mod help center", null, {
								hk: "256YE"
							})), r.a.createElement(ae.b, {
								isExternal: !0,
								label: p.fbt._("Mod help center", null, {
									hk: "4dCwWU"
								}),
								onClick: this.onClickModHelpCenter,
								path: U.a.redditModHelpUrl
							}), r.a.createElement(ae.b, {
								isExternal: !0,
								label: p.fbt._("Moderator guidelines", null, {
									hk: "3marKI"
								}),
								onClick: this.onClickModGuidelines,
								path: "https://www.reddit.com/help/healthycommunities/"
							}), r.a.createElement(ae.b, {
								isExternal: !0,
								label: "r/ModSupport",
								onClick: this.onClickModSupport,
								path: "/r/ModSupport/"
							}), r.a.createElement(ae.b, {
								isExternal: !0,
								label: "r/ModHelp",
								onClick: this.onClickModHelp,
								path: "/r/modhelp/"
							}), r.a.createElement(ae.b, {
								isExternal: !0,
								label: p.fbt._("Contact Reddit", null, {
									hk: "2NRBBx"
								}),
								onClick: this.onClickContactReddit,
								path: "https://www.reddithelp.com/hc/en-us/requests/new"
							}))))
					}
				}
			}
			var Be = Object(i.b)(Le, e => ({
					pushUrl: t => e(Object(B.b)(t))
				}))(Object(f.c)(Object(H.c)(Ue))),
				He = s("./src/reddit/pages/ModHub/Header.tsx"),
				We = s("./src/reddit/pages/ModHub/index.m.less"),
				ze = s.n(We);
			const Ve = m.a.div("BackgroundContainer", ze.a),
				qe = m.a.div("Body", ze.a),
				Ge = Object(l.c)({
					contentGateInfo: (e, t) => Object(I.f)(e, t.match.params.subredditName)
				}),
				Ke = Object(l.c)({
					queryParams: (e, t) => {
						let {
							location: s
						} = t;
						return a()([...Object(c.a)(s.search)])
					}
				}),
				Qe = Object(l.c)({
					moderatorPermissions: (e, t) => {
						var s;
						const {
							subredditName: n,
							profileName: a
						} = t.match.params, o = n ? Object(N.F)(e, n) : null === (s = Object(w.j)(e, {
							profileName: a
						})) || void 0 === s ? void 0 : s.id;
						if (o) return Object(O.n)(e, {
							subredditId: o
						})
					}
				}),
				Xe = Object(l.c)({
					isContributor: (e, t) => {
						const {
							subredditName: s
						} = t.match.params;
						if (s) {
							const t = Object(N.w)(e, {
								subredditName: s
							});
							if (t) return t.userIsContributor
						}
						return !1
					}
				}),
				Je = Object(l.c)({
					subreddit: (e, t) => t.match.params.subredditName ? Object(N.z)(e, {
						subredditName: t.match.params.subredditName
					}) : Object(w.j)(e, {
						profileName: t.match.params.profileName
					})
				}),
				Ye = Object(i.b)(() => Object(l.a)(Ge, I.N, x.S, Qe, I.kb, j.jb, Je, Xe, Ke, (e, t) => t.match.params.pageName, e => e, (e, t, s, n, a, o, r, i, l, d, c) => {
					let {
						contentGateInfo: m
					} = e, {
						moderatorPermissions: u
					} = n, {
						subreddit: p
					} = r, {
						isContributor: b
					} = i, {
						queryParams: h
					} = l;
					const {
						after: g,
						afterEditable: f,
						before: x,
						beforeEditable: E,
						only: v,
						page: k,
						sort: _
					} = h;
					return {
						contentGateInfo: m,
						isBroadcastingEnabled: !!p && Object(S.c)(c, p.id),
						isTalkHostsEnabled: Object(y.t)(c),
						isContributor: b,
						isEmployee: t,
						layout: s,
						moderatorPermissions: u,
						isScheduledPostsEnabled: o,
						subreddit: p,
						renderNSFWContentGate: !!p && p.isNSFW && !a,
						page: `${k||C.b}`,
						pageName: d,
						postTypeFilter: v,
						after: g || "",
						afterEditable: f,
						before: x,
						postSort: _,
						beforeEditable: E
					}
				})),
				Ze = Object(x.u)();
			class $e extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => {
						this.props.sendEvent(t => ({
							source: e.includes("modqueue_sort") ? "moderator" : Object(k.b)(this.props.pageName),
							action: "click",
							noun: e,
							..._.b(t)
						}))
					}, this.onClickSubredditLink = () => {
						this.props.sendEvent(_.d())
					}
				}
				componentDidUpdate(e) {
					(this.props.pageName && this.props.pageName !== e.pageName || this.props.page && this.props.page !== e.page) && (document.documentElement.scrollTop = document.body.scrollTop = 0)
				}
				render() {
					const {
						props: e
					} = this;
					if (!e.subreddit) {
						const t = Object(v.a)(e.contentGateInfo, e.renderNSFWContentGate, e.match.params.subredditName);
						return t ? r.a.createElement(u.default, t) : null
					}
					const t = !!e.moderatorPermissions;
					return r.a.createElement(Ve, null, r.a.createElement(He.a, {
						onClick: this.onClickSubredditLink,
						subredditOrProfile: e.subreddit,
						pageName: e.pageName ? g(e.pageName) : void 0
					}), r.a.createElement(qe, null, e.moderatorPermissions && r.a.createElement(Be, {
						moderatorPermissions: e.moderatorPermissions,
						pageName: e.pageName,
						subpageName: e.page,
						subreddit: e.subreddit,
						isProfile: !!e.match.params.profileName
					}), r.a.createElement("div", {
						className: Object(d.a)(ze.a.contentWrapper, t && ze.a.isModerator)
					}, e.pageName && Object(E.a)({
						pageName: e.pageName,
						moderatorPermissions: e.moderatorPermissions,
						canCreateScheduledPosts: e.isScheduledPostsEnabled,
						isEmployee: e.isEmployee,
						isStreamingEnabled: e.isBroadcastingEnabled,
						isTalkHostsEnabled: e.isTalkHostsEnabled,
						subredditType: e.subreddit.type,
						isContributor: e.isContributor
					}) ? r.a.createElement(T.a, {
						after: e.after,
						afterEditable: e.afterEditable,
						before: e.before,
						beforeEditable: e.beforeEditable,
						layout: e.layout,
						moderatorPermissions: e.moderatorPermissions,
						page: e.page,
						pageName: e.pageName,
						postSort: e.postSort,
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: this.sendEventWithName,
						subpageName: e.page,
						subreddit: e.subreddit
					}) : e.moderatorPermissions ? r.a.createElement(L, {
						subredditDisplayText: e.subreddit.displayText
					}) : r.a.createElement(M.a, {
						isModerator: t,
						subredditDisplayText: e.subreddit.displayText
					}))))
				}
			}
			t.default = Ze(Ye(Object(f.c)($e)))
		},
		"./src/reddit/selectors/experiments/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(a.a)(n.K),
				r = Object(a.a)(n.I),
				i = Object(a.a)(n.je),
				l = Object(a.a)(n.L),
				d = Object(a.a)(n.M),
				c = Object(a.a)(n.H),
				m = Object(a.a)(n.J)
		},
		"./src/reddit/selectors/experiments/emailInvite.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.xd
				});
				return !(!t || Object(n.ag)(t))
			}
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = Object(n.a)(e => Object(o.c)(e, {
					experimentName: a.Rf,
					experimentEligibilitySelector: o.a
				}), e => e),
				i = Object(n.a)(r, e => e === a.Jf)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/posts.ts");
			const i = e => Object(o.c)(e, {
					experimentName: a.Qe,
					experimentEligibilitySelector: o.a
				}),
				l = (e, t) => t === a.Ye.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(n.a)(r.G, i, (e, t) => l(e, t));
			Object(n.a)((e, t) => t, i, (e, t) => l(e, t))
		},
		"./src/reddit/selectors/streamingModSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return c
			}));
			const n = {
					startTime: "",
					endTime: ""
				},
				a = {
					isLiveStreamingEnabled: !1,
					maxLiveStreams: void 0,
					minKarma: void 0,
					minAccountAgeDays: void 0,
					durationLimitSeconds: void 0,
					schedule: {
						sunday: n,
						monday: n,
						tuesday: n,
						wednesday: n,
						thursday: n,
						friday: n,
						saturday: n
					},
					whitelistedUsers: [],
					broadcasterPrompt: "",
					isDiscoveryUnitShown: !1,
					inSubMinKarma: void 0
				},
				o = (e, t) => {
					const s = e.streaming.modSettings[t.subredditId];
					return s ? {
						isLiveStreamingEnabled: s.isLiveStreamingEnabled,
						maxLiveStreams: s.maxLiveStreams,
						minKarma: s.minKarma,
						minAccountAgeDays: s.minAccountAgeDays,
						durationLimitSeconds: s.durationLimitSeconds,
						schedule: {
							sunday: d(s.weeklySchedule.sunday),
							monday: d(s.weeklySchedule.monday),
							tuesday: d(s.weeklySchedule.tuesday),
							wednesday: d(s.weeklySchedule.wednesday),
							thursday: d(s.weeklySchedule.thursday),
							friday: d(s.weeklySchedule.friday),
							saturday: d(s.weeklySchedule.saturday)
						},
						whitelistedUsers: s.whitelistedRedditors,
						broadcasterPrompt: s.broadcasterPrompt,
						isDiscoveryUnitShown: s.isDiscoveryUnitShown,
						inSubMinKarma: s.inSubMinKarma
					} : a
				},
				r = (e, t) => !!e.streaming.modSettings[t],
				i = e => !!e.streaming.api.pending,
				l = (e, t) => !!e.streaming.modSettings[t] && e.streaming.modSettings[t].isLiveStreamingEnabled,
				d = e => ({
					...n,
					...e[0]
				}),
				c = (e, t) => {
					const s = e.streaming.modSettings[t.subredditId];
					if (!s) return !1;
					const n = new Date;
					return m(n, s.weeklySchedule)
				},
				m = (e, t) => {
					const s = u(e);
					return p(s, t).some(t => b(e, t))
				},
				u = e => {
					return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][e.getUTCDay()]
				},
				p = (e, t) => t[e],
				b = (e, t) => {
					const s = e.getUTCHours(),
						n = e.getUTCMinutes(),
						{
							startTime: a,
							endTime: o
						} = t,
						[r, i] = a.split(":").map(Number),
						[l, d] = o.split(":").map(Number);
					let c = 60 * r + i,
						m = 60 * l + d;
					const u = 60 * s + n;
					return 1439 === m && m++, 1439 === c && c++, u >= c && u < m
				}
		},
		"./src/reddit/selectors/subredditModeration.ts": function(e, t, s) {
			"use strict";
			s.d(t, "j", (function() {
				return r
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "o", (function() {
				return c
			})), s.d(t, "m", (function() {
				return m
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "l", (function() {
				return h
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "f", (function() {
				return v
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/models/SubredditModeration/index.ts");
			const o = [],
				r = Object(n.a)((e, t) => {
					let {
						subredditId: s,
						before: n,
						after: o
					} = t;
					const r = Object(a.e)(s, o, n),
						i = e.pages.modHub.moderators.userOrder.data[s] && e.pages.modHub.moderators.userOrder.data[s][r];
					return i ? i.map(t => e.pages.modHub.moderators.models[s][t]) : []
				}),
				i = (e, t, s) => !!e.pages.modHub.moderators.models[t] && !!e.pages.modHub.moderators.models[t][s],
				l = (e, t) => {
					let {
						subredditId: s,
						beforeEditable: n,
						afterEditable: o
					} = t;
					const r = Object(a.e)(s, o, n),
						i = e.pages.modHub.moderators.editableUserOrder.data[s] && e.pages.modHub.moderators.editableUserOrder.data[s][r];
					return i ? i.map(t => e.pages.modHub.moderators.editableModerators[s][t]) : []
				},
				d = (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.pages.modHub.moderators.editableModerators[s] || null
				},
				c = (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.pages.modHub.moderators.models[s] || null
				},
				m = e => !!e.pages.modHub.moderators.search.api.pending,
				u = e => e.pages.modHub.moderators.search.result,
				p = (e, t) => {
					let {
						subredditId: s
					} = t;
					return !!e.pages.modHub.moderators.invitePending[s]
				},
				b = (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.pages.modHub.moderators.loadMoreModerators[s] && e.pages.modHub.moderators.loadMoreModerators[s].after
				},
				h = (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.pages.modHub.moderators.loadMoreModerators[s] && e.pages.modHub.moderators.loadMoreModerators[s].before
				},
				g = (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.pages.modHub.moderators.loadMoreEditableModerators[s] && e.pages.modHub.moderators.loadMoreEditableModerators[s].after
				},
				f = (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.pages.modHub.moderators.loadMoreEditableModerators[s] && e.pages.modHub.moderators.loadMoreEditableModerators[s].before
				},
				x = (e, t) => {
					const s = Object(a.e)(t.subredditId, t.after, t.before);
					return !!e.pages.modHub.moderators.userOrder.api.pending[s]
				},
				E = (e, t) => {
					const s = Object(a.e)(t.subredditId, t.afterEditable, t.beforeEditable);
					return !!e.pages.modHub.moderators.editableUserOrder.api.pending[s]
				},
				v = Object(n.a)((e, t) => {
					let {
						subredditId: s
					} = t;
					const n = e.pages.modHub.moderators.invitedModerators.userOrder[s];
					return n ? n.map(t => e.pages.modHub.moderators.invitedModerators.models[s][t]) : o
				})
		},
		"./src/redditGQL/operations/AddApprovedTalkHost.json": function(e) {
			e.exports = JSON.parse('{"id":"84b1688a0244"}')
		},
		"./src/redditGQL/operations/AllModerators.json": function(e) {
			e.exports = JSON.parse('{"id":"e29846f6d98c"}')
		},
		"./src/redditGQL/operations/DeleteScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"dea861ad7f0d"}')
		},
		"./src/redditGQL/operations/FetchModerationLogActions.json": function(e) {
			e.exports = JSON.parse('{"id":"f20f90e251f3"}')
		},
		"./src/redditGQL/operations/FetchSubredditTrafficStats.json": function(e) {
			e.exports = JSON.parse('{"id":"d2b39ab0293a"}')
		},
		"./src/redditGQL/operations/GeoPlaceAutocomplete.json": function(e) {
			e.exports = JSON.parse('{"id":"8a89fd7c7db1"}')
		},
		"./src/redditGQL/operations/GetSubredditWelcomeMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"ba4eb4e2972f"}')
		},
		"./src/redditGQL/operations/RedditorIdByName.json": function(e) {
			e.exports = JSON.parse('{"id":"a24cf5c8adf7"}')
		},
		"./src/redditGQL/operations/RemoveApprovedTalkHost.json": function(e) {
			e.exports = JSON.parse('{"id":"e016564e243a"}')
		},
		"./src/redditGQL/operations/SetSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"ece6b91ed02d"}')
		},
		"./src/redditGQL/operations/SubmitScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"6f9e584d390a"}')
		},
		"./src/redditGQL/operations/SubredditApprovedTalkHosts.json": function(e) {
			e.exports = JSON.parse('{"id":"86107f5fbae2"}')
		},
		"./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"1e4c7b58a2a4"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages.c901aca385f771d636a3.js.map