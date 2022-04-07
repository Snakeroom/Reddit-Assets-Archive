// https://www.redditstatic.com/desktop2x/ModerationPages.fd2e2f78632780c02e12.js
// Retrieved at 4/7/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages"], {
		"./node_modules/lodash/_arrayAggregator.js": function(e, t) {
			e.exports = function(e, t, n, s) {
				for (var a = -1, o = null == e ? 0 : e.length; ++a < o;) {
					var r = e[a];
					t(s, r, n(r), e)
				}
				return s
			}
		},
		"./node_modules/lodash/_baseAggregator.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t, n, a) {
				return s(e, (function(e, s, o) {
					t(a, e, n(e), o)
				})), a
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = [];
				return s(e, (function(e, s, a) {
					t(e, s, a) && n.push(e)
				})), n
			}
		},
		"./node_modules/lodash/_createAggregator.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayAggregator.js"),
				a = n("./node_modules/lodash/_baseAggregator.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return function(n, i) {
					var d = r(n) ? s : a,
						l = t ? t() : {};
					return d(n, e, o(i, 2), l)
				}
			}
		},
		"./node_modules/lodash/countBy.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseAssignValue.js"),
				a = n("./node_modules/lodash/_createAggregator.js"),
				o = Object.prototype.hasOwnProperty,
				r = a((function(e, t, n) {
					o.call(e, n) ? ++e[n] : s(e, n, 1)
				}));
			e.exports = r
		},
		"./node_modules/lodash/filter.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayFilter.js"),
				a = n("./node_modules/lodash/_baseFilter.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (r(e) ? s : a)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseIndexOf.js"),
				a = n("./node_modules/lodash/isArrayLike.js"),
				o = n("./node_modules/lodash/isString.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				i = n("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, n, l) {
				e = a(e) ? e : i(e), n = n && !l ? r(n) : 0;
				var c = e.length;
				return n < 0 && (n = d(c + n, 0)), o(e) ? n <= c && e.indexOf(t, n) > -1 : !!c && s(e, t, n) > -1
			}
		},
		"./node_modules/lodash/transform.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayEach.js"),
				a = n("./node_modules/lodash/_baseCreate.js"),
				o = n("./node_modules/lodash/_baseForOwn.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_getPrototype.js"),
				d = n("./node_modules/lodash/isArray.js"),
				l = n("./node_modules/lodash/isBuffer.js"),
				c = n("./node_modules/lodash/isFunction.js"),
				m = n("./node_modules/lodash/isObject.js"),
				u = n("./node_modules/lodash/isTypedArray.js");
			e.exports = function(e, t, n) {
				var p = d(e),
					b = p || l(e) || u(e);
				if (t = r(t, 4), null == n) {
					var h = e && e.constructor;
					n = b ? p ? new h : [] : m(e) && c(h) ? a(i(e)) : {}
				}
				return (b ? s : o)(e, (function(e, s, a) {
					return t(n, e, s, a)
				})), n
			}
		},
		"./node_modules/p-debounce/index.js": function(e, t, n) {
			"use strict";
			const s = (e, t, n = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let s, a, o = [];
				return function(...r) {
					return new Promise(i => {
						const d = n.leading && !a;
						clearTimeout(a), a = setTimeout(() => {
							a = null;
							const t = n.leading ? s : e.apply(this, r);
							for (i of o) i(t);
							o = []
						}, t), d ? (s = e.apply(this, r), i(s)) : o.push(i)
					})
				}
			};
			e.exports = s, e.exports.default = s
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = function() {
					var e = 1,
						t = new WeakMap,
						n = function(s, a) {
							return "number" == typeof s || "string" == typeof s ? a ? "idx-" + a : "val-" + s : t.has(s) ? "uid" + t.get(s) : (t.set(s, e++), n(s))
						};
					return n
				},
				o = (a(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: a()
					}
				}),
				r = o(),
				i = s.createContext(o()),
				d = function() {
					return s.useState((e = s.useContext(i), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || r) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return n + t.uid(e)
						}
					}));
					var e, t, n
				},
				l = function() {
					return d()[0].uid
				},
				c = function() {
					return d()[0].gen
				}
		},
		"./src/higherOrderComponents/withImageUploads.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/imageUploads.ts"),
				r = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/selectors/imageUploads.ts");
			const d = Object(a.c)({
				_imageUploads: i.b
			});

			function l(e, t) {
				return Object(s.b)(d, e => ({
					uploadImage: n => e(t(n)),
					cancelUpload: t => e(Object(o.h)(t))
				}), (function(e, t, n) {
					return {
						...n,
						...t,
						getImageUploadsIfModified: function(t) {
							return function(e, t) {
								const n = [];
								let s = !1;
								for (const a of t)
									if (Object(r.i)(a) || e[a.id])
										if (e[a.id]) {
											const t = e[a.id];
											n.push(t), s = s || t !== a
										} else s = !0;
								else n.push(a);
								return s ? n : null
							}(e._imageUploads, t)
						}
					}
				}))(e)
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(a.e)(e),
					r = encodeURIComponent(`${t}${o}`);
				return `${s.a.accountManagerOrigin}${n||"/login"}?dest=${r}`
			}
		},
		"./src/lib/stripQueryParams/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = n.n(s);
			t.a = e => {
				const t = a.a.parse(e);
				return t.search = void 0, t.query = null, a.a.format(t)
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(s.a)(a.c),
				r = Object(s.a)(a.b),
				i = Object(s.a)(a.a)
		},
		"./src/reddit/actions/economics/powerups/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/uuid/v4.js"),
				a = n.n(s),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				i = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/reddit/endpoints/gold/powerups/index.ts"),
				l = n("./src/reddit/helpers/media/index.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/actions/economics/powerups/constants.ts"),
				u = n("./src/reddit/actions/economics/powerups/helpers.ts");
			const p = Object(o.a)(m.b),
				b = Object(o.a)(m.c),
				h = e => {
					let {
						subredditId: t,
						file: n
					} = e;
					return async (e, s) => {
						var o;
						try {
							const r = s(),
								i = null === (o = Object(c.k)(r)) || void 0 === o ? void 0 : o.id;
							if (!i) throw new Error("Failed to get current user during emoji upload");
							const d = await Object(l.h)(n);
							if (!d) throw new Error("Cannot determine file mimeType");
							const {
								file: u,
								width: p,
								height: b
							} = await Object(l.o)(n, m.a), h = await e(g({
								subredditId: t,
								mimeType: d
							}, {
								userId: i
							})), x = await E({
								file: u,
								s3UploadLease: h
							}, {
								subredditId: t,
								userId: i
							});
							return await e(f({
								subredditId: t,
								mimeType: d,
								url: x,
								x: p,
								y: b,
								nonce: a()()
							}))
						} catch (i) {
							throw r.c.captureException(i), i
						}
					}
				},
				g = (e, t) => async (n, s, a) => {
					let {
						gqlContext: o
					} = a;
					const r = await Object(d.d)(o(), {
						input: e
					});
					if (r.error || !r.ok) throw new Error(`Failed to get emoji upload lease. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					const {
						ok: i,
						errors: l,
						s3UploadLease: c
					} = r.body.data.generateCustomEmojiUploadLease;
					if (!i || l) throw new Error(`Failed to get emoji upload lease: ${Object(u.a)(l)}. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					return c
				}, f = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					const o = await Object(d.a)(a(), {
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
					await Object(l.n)(m);
					const {
						subredditId: b
					} = e;
					return t(p({
						subredditId: b,
						emoji: c
					})), c
				}, E = async (e, t) => {
					let {
						file: n,
						s3UploadLease: s
					} = e, {
						subredditId: a,
						userId: o
					} = t;
					const r = await Object(i.a)(n, s);
					if (!r.ok) throw new Error(`Failed to upload custom emoji to S3. subredditId: ${a}; userId: ${o}`);
					const d = r.body.PostResponse;
					return `https://${d.Bucket}.s3.amazonaws.com/${d.Key}`
				}, x = e => {
					let {
						emojiId: t,
						subredditId: n
					} = e;
					return async (e, s, a) => {
						let {
							gqlContext: o
						} = a;
						const i = await Object(d.b)(o(), {
							input: {
								id: t
							}
						});
						if (i.error || !i.ok) {
							const e = new Error("Failed to delete custom emoji");
							throw r.c.captureException(e), e
						}
						const {
							ok: l,
							errors: c
						} = i.body.data.deleteCustomEmoji;
						if (!l || c) {
							const e = new Error(`Failed to delete custom emoji: ${Object(u.a)(c)}`);
							throw r.c.captureException(e), e
						}
						return e(b({
							subredditId: n,
							emojiId: t
						})), l
					}
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return B
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "f", (function() {
				return K
			})), n.d(t, "a", (function() {
				return Q
			})), n.d(t, "b", (function() {
				return Y
			})), n.d(t, "c", (function() {
				return X
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/bulkActions/index.ts"),
				i = n("./src/reddit/actions/modQueueTriggers/index.ts"),
				d = n("./src/reddit/actions/removalReasons/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/modQueue/index.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				p = n("./src/reddit/helpers/isPost.ts"),
				b = n("./src/reddit/models/ModQueue/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/chooseVariant/index.ts");
			var E = n("./src/reddit/selectors/modQueue.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/telemetry/index.ts"),
				C = n("./src/lib/initializeClient/installReducer.ts"),
				k = n("./src/reddit/reducers/pages/modHub/index.ts"),
				y = n("./src/reddit/actions/modQueue/constants.ts");
			Object(C.a)({
				pages: {
					modHub: k.a
				}
			});
			const O = Object(o.a)(y.j),
				S = Object(o.a)(y.i),
				j = Object(o.a)(y.h),
				N = Object(o.a)(y.g),
				w = Object(o.a)(y.f),
				I = Object(o.a)(y.e),
				T = Object(o.a)(y.n),
				M = Object(o.a)(y.m),
				P = Object(o.a)(y.l),
				R = Object(o.a)(y.q),
				A = Object(o.a)(y.p),
				F = Object(o.a)(y.o),
				D = Object(o.a)(y.w),
				L = Object(o.a)(y.v),
				U = Object(o.a)(y.u),
				B = (e, t, o) => async (r, d, m) => {
					let {
						apiContext: u,
						gqlContext: p
					} = m;
					var E;
					let x, v, _;
					switch (t) {
						case a.rb.Edited:
							x = N, v = I, _ = w;
							break;
						case a.rb.Modqueue:
							x = O, v = j, _ = S;
							break;
						case a.rb.Reports:
							x = T, v = P, _ = M;
							break;
						case a.rb.Spam:
							x = R, v = F, _ = A;
							break;
						case a.rb.Unmoderated:
							x = D, v = U, _ = L;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					r(x());
					const C = await Object(c.c)(u(), t, o);
					if (C.ok) {
						if (function(e) {
								return Object(f.c)(e, {
									experimentEligibilitySelector: f.a,
									experimentName: g.ud
								}) === g.hd
							}(d())) {
							const {
								normalizeModQueueListingFromGql: e,
								transformGatewayParamsToGQLVariables: s
							} = await n.e(10).then(n.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/index.ts")), {
								diffAndLog: a
							} = await n.e(8).then(n.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/diffAndLog.ts")), r = C.body, i = {
								...o
							};
							if (i.subreddit) {
								const e = null === (E = Object.values(r.subreddits).find(e => {
									let {
										name: t
									} = e;
									return t === o.subreddit
								})) || void 0 === E ? void 0 : E.id;
								i.subreddit = e
							}
							const l = s({
									getState: d,
									queueType: t,
									options: i
								}),
								m = await Object(c.b)(p(), l);
							if (!m.ok) return;
							const u = e(m.body.data),
								b = {
									posts: r.posts,
									comments: r.comments,
									modqueue: r.modqueue,
									reports: r.reports,
									authorFlair: r.authorFlair
								},
								h = {
									...C.body,
									...u
								};
							C.body = h, a({
								normalizedGqlResponse: u,
								gatewayResponse: b,
								rawGqlResponse: m.body.data
							})
						}
						const s = C.body;
						r(_({
							listingKey: e,
							page: `${o.page||b.b}`,
							response: s
						})), r(Object(i.a)({
							postIds: s.posts ? Object.keys(s.posts) : void 0,
							commentIds: s.comments ? Object.keys(s.comments) : void 0
						}))
					} else r(v(C.error)), r(Object(l.f)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, H = Object(o.a)(y.k), W = Object(o.a)(y.b), z = e => async (t, n, a) => {
					let {
						apiContext: o
					} = a;
					const r = n(),
						i = r.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						d = r.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						m = r.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: u
						} = r.platform.currentPage.urlParams,
						p = u;
					if (e && d || m || !i) return;
					const b = await Object(c.c)(o(), p, {
						moderated_after: i
					});
					if (b.ok) {
						const e = b.body;
						t(H(e)), e.moderatedAfter ? t(z()) : t(W())
					} else t(Object(l.f)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, V = Object(o.a)(y.t), q = Object(o.a)(y.s), G = Object(o.a)(y.r), K = (e, t, n) => async (a, o, i) => {
					let {
						apiContext: g
					} = i;
					a(Object(r.c)());
					const f = o(),
						C = Object(E.f)(f),
						k = f.user.account && f.user.account.displayText;
					Object(m.e)(m.a.ModQueue);
					const y = Object(m.c)(m.a.ModQueue);
					Object(_.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...v.n(f),
						actionInfo: v.d(f, {
							count: C.length,
							paneName: f.platform.currentPage ? f.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: v.Y(f),
						correlationId: y
					});
					for (let t = 0; t < C.length; t++) {
						const n = C[t];
						let s = e;
						[b.a.Approve, b.a.Remove, b.a.Spam].includes(e) && (Object(p.a)(n) ? s += "_link" : s += "_comment"), Object(_.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...v.n(f),
							actionInfo: v.d(f, {
								count: C.length,
								paneName: f.platform.currentPage ? f.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: v.h(f, n),
							post: v.H(f, n),
							profile: v.S(f, n),
							screen: v.Y(f),
							subreddit: v.jb(f, n),
							correlationId: y
						})
					}
					Object(m.b)(m.a.ModQueue);
					const O = {
						ids: C
					};
					t && (O.text = Object(u.g)(t) || "", O.flairTemplateId = ""), n && (O.cssClass = n, O.flairTemplateId = n);
					const S = await Object(c.a)(g(), e, O);
					if (S.ok) {
						a(Object(r.b)({
							...S.body,
							operation: e,
							ids: C,
							username: k,
							options: {
								flair: t
							}
						}));
						const n = function(e, t) {
							switch (e) {
								case b.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case b.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case b.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case b.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case b.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case b.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case b.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case b.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case b.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case b.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case b.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case b.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case b.a.Unspoiler:
								case b.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, C.length);
						if (e !== b.a.Approve && e !== b.a.Flair) {
							let t, o;
							const i = f.platform.currentPage && f.platform.currentPage.queryParams && f.platform.currentPage.queryParams.subreddit,
								m = i && Object(x.D)(f, i);
							e === b.a.Remove && m && C.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), o = Object(d.fetchReasonsAndOpenModal)(m, C));
							const u = Object(l.e)(n, h.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, n) => {
								let {
									apiContext: a
								} = n;
								e(V());
								const o = t(),
									i = Object.keys(o.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									d = o.pages.modHub.modQueue.bulkAction.undoLastAction[i],
									m = o.user.account && o.user.account.displayText;
								e(Object(r.c)());
								const u = await Object(c.a)(a(), i, {
									ids: d
								});
								u.ok ? e(q({
									...u.body,
									operation: i,
									ids: d,
									username: m
								})) : (e(G(u.error)), e(Object(l.f)({
									kind: h.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, o);
							a(Object(l.f)(u))
						} else {
							const e = Object(l.e)(n, h.b.SuccessMod);
							a(Object(l.f)(e))
						}
					} else {
						a(Object(r.a)(S.error));
						const e = Object(l.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), h.b.Error);
						a(Object(l.f)(e))
					}
				}, Q = Object(o.a)(y.a), Y = Object(o.a)(y.c), X = Object(o.a)(y.d)
		},
		"./src/reddit/actions/pages/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "moderationPageRequested", (function() {
				return Ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/lib/assertNever.ts"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/lib/makeListingKey/index.ts"),
				d = n("./src/reddit/actions/scheduledPosts/index.ts"),
				l = n("./src/reddit/helpers/canAccessModerationPage/index.ts"),
				c = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				m = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				u = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				p = n("./src/reddit/helpers/trackers/screenview.ts"),
				b = n("./src/reddit/actions/contentControls/index.ts"),
				h = n("./src/reddit/actions/emoji.ts"),
				g = n("./src/reddit/actions/eventPosts/index.ts"),
				f = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				E = n("./src/reddit/actions/gold/powerups.ts"),
				x = n("./src/reddit/actions/grantUserFlair/index.ts"),
				v = n("./src/lib/makeActionCreator/index.ts"),
				_ = n("./src/reddit/endpoints/subredditModeration/moderationLog.ts"),
				C = n("./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts"),
				k = n("./src/reddit/models/SubredditModeration/ModerationLog/index.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/actions/moderationLog/constants.ts");
			const S = Object(v.a)(O.b),
				j = (e, t) => async (n, s, a) => {
					let {
						gqlContext: o
					} = a;
					const r = await Object(_.a)(o(), e, t);
					if (r.body) {
						const t = r.body.data.subreddit.moderation;
						if (t && t.actions) {
							const a = s(),
								o = Object(C.b)(t.actions),
								r = Object(y.D)(a, e),
								{
									hasNextPage: i,
									hasPreviousPage: d,
									endCursor: l,
									startCursor: c
								} = t.actions.pageInfo,
								m = Object(k.a)(r, l, c),
								u = [];
							o.forEach(e => {
								u.push(e.id)
							}), n(S({
								hasNextPage: i,
								hasPreviousPage: d,
								endCursor: l,
								key: m,
								startCursor: c,
								normalizedModerationLog: o,
								actionIds: u,
								subredditId: r
							}))
						}
					}
				};
			var N = n("./src/reddit/actions/modQueue/index.ts"),
				w = n("./src/reddit/actions/pages/chatSettings.ts"),
				I = n("./src/reddit/actions/pages/subreddit.ts"),
				T = n("./src/reddit/actions/pages/subredditWiki/index.ts"),
				M = n("./src/reddit/actions/platform.ts"),
				P = n("./src/reddit/actions/profile/index.ts"),
				R = n("./src/reddit/actions/removalReasons/index.ts"),
				A = n("./src/reddit/actions/streaming/modSettings.ts"),
				F = n("./src/reddit/actions/subreddit.ts"),
				D = n("./src/reddit/actions/subreddit/questions.ts"),
				L = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts"),
				U = n("./src/reddit/actions/subredditModeration/index.ts"),
				B = n("./src/reddit/actions/subredditModeration/approvedSubmitters.ts"),
				H = n("./src/reddit/actions/subredditModeration/ban.ts"),
				W = n("./src/reddit/actions/subredditModeration/mute.ts"),
				z = n("./src/reddit/actions/subredditSettings.ts"),
				V = n("./src/reddit/actions/tags/index.ts"),
				q = n("./node_modules/fbt/lib/FbtPublic.js"),
				G = n("./src/reddit/actions/toaster.ts"),
				K = n("./src/reddit/actions/trafficStats/constants.ts"),
				Q = n("./src/lib/makeGqlRequest/index.ts"),
				Y = n("./src/redditGQL/operations/FetchSubredditTrafficStats.json");
			var X = n("./node_modules/lodash/forEach.js"),
				Z = n.n(X),
				J = n("./src/reddit/helpers/graphql/helpers.ts"),
				$ = n("./src/reddit/models/TrafficStats/index.ts");
			const ee = e => ({
					desktop: new Array(e).fill(0),
					oldReddit: new Array(e).fill(0),
					mWeb: new Array(e).fill(0),
					apps: new Array(e).fill(0),
					total: new Array(e).fill(0)
				}),
				te = (e, t) => {
					return Object(J.e)(e.startsAt) > Object(J.e)(t.startsAt) ? 1 : -1
				},
				ne = (e, t, n) => {
					const s = {
							pageViews: ee(t),
							uniqueUsers: ee(t)
						},
						a = Object(J.e)(e[0].startsAt);
					return e.map(e => {
						const o = Object(J.e)(e.startsAt),
							r = new Date(o),
							i = t === $.c ? r.getMonth() : Math.round((o - a) / n) % t,
							d = $.d[e.client];
						s.pageViews[d][i] += e.pageViews, s.uniqueUsers[d][i] += e.uniqueUsers
					}), s
				};
			var se = n("./src/reddit/models/Toast/index.ts");
			const ae = Object(v.a)(K.b),
				oe = Object(v.a)(K.c),
				re = Object(v.a)(K.a),
				ie = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					const r = Object(y.S)(n(), {
						subredditId: e
					}).name;
					t(oe({
						subredditId: e
					}));
					const i = await ((e, t) => Object(Q.a)(e, {
						...Y,
						variables: t
					}))(a(), {
						subredditName: r
					});
					if (i.ok) {
						const n = i.body.data.subreddit.moderation;
						if (n && n.trafficStats) {
							const s = (e => {
								const t = Z()(e, (e, t) => e.sort(te)),
									n = t.subscriptionData,
									s = n.map(e => e.subscribers),
									a = n.map(e => e.unsubscribers),
									r = ne(t.hourStats, $.b, o.Q),
									i = ne(t.dayStats, $.a, o.B),
									d = ne(t.monthStats, $.c, o.pb);
								return {
									pageViews: {
										byHour: r.pageViews,
										byDay: i.pageViews,
										byMonth: d.pageViews
									},
									uniqueUsers: {
										byHour: r.uniqueUsers,
										byDay: i.uniqueUsers,
										byMonth: d.uniqueUsers
									},
									subscribers: s,
									unsubscribers: a
								}
							})(n.trafficStats);
							t(ae({
								subredditId: e,
								trafficStats: s
							}))
						}
					} else t(re({
						subredditId: e
					})), t(G.f({
						id: "error-block-trafficStats",
						kind: se.b.Error,
						text: q.fbt._("Try again later", null, {
							hk: "41Goel"
						})
					}))
				};
			var de = n("./src/reddit/models/ModQueue/index.ts"),
				le = n("./src/reddit/models/ScheduledPost/index.ts"),
				ce = n("./src/reddit/reducers/pages/modHub/index.ts"),
				me = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ue = n("./src/reddit/selectors/modQueue.ts"),
				pe = n("./src/reddit/selectors/platform.ts"),
				be = n("./src/reddit/selectors/postCreations.ts"),
				he = n("./src/reddit/selectors/profile.ts"),
				ge = n("./src/reddit/selectors/streamingModSettings.ts"),
				fe = n("./src/reddit/selectors/user.ts");
			Object(r.a)({
				pages: {
					modHub: ce.a
				}
			});
			const Ee = e => async (t, n, r) => {
				const {
					params: v
				} = e, {
					pageName: _,
					profileName: C,
					subredditName: k
				} = v;
				if (_ === o.fc.Wiki) {
					if (await t(Object(T.handleWikiRedirects)(e))) return
				}
				if (_ === o.fc.SubredditContent) return void t(Object(s.c)(le.r));
				const O = e.queryParams,
					S = O.page || de.b,
					q = n();
				if (k) {
					const e = Object(i.a)(k, o.W.HOT),
						n = q.listings.postOrder.ids[e],
						s = q.listings.postOrder.api.error[e],
						a = q.listings.postOrder.api.pending[e];
					if (s) return;
					a || n && !s || await t(Object(I.subredditDataRequested)(e, k, {}))
				} else C && await t(Object(P.e)(C));
				if (!Object(fe.Q)(n()) && _ !== o.fc.SubredditRules && _ !== o.fc.Contributors) return void Object(m.a)(t, n());
				if (Object(p.i)(n(), !0, k, C), !_) return;
				let G, K, Q, Y, X, Z, J, $, ee, te = !1;
				switch (_) {
					case o.fc.Awards:
						G = f.i;
						break;
					case o.fc.Powerups:
						G = E.m;
						break;
					case o.fc.Muted:
						G = W.b;
						break;
					case o.fc.Contributors:
						G = B.b;
						break;
					case o.fc.Banned:
						G = H.c;
						break;
					case o.fc.Moderators:
						Q = !0;
						break;
					case o.fc.Removal:
						G = R.removalReasonsRequested;
						break;
					case o.fc.ContentControls:
						G = b.a, Z = !0;
						break;
					case o.fc.ChatSettings:
						te = !0;
						break;
					case o.fc.CommunitySettings:
						G = z.h, J = !0;
						break;
					case o.fc.Flair:
						G = x.c, X = !0;
						break;
					case o.fc.UserFlair:
					case o.fc.PostFlair:
						G = void 0;
						break;
					case o.fc.Emojis:
						G = h.l;
						break;
					case o.fc.Badges:
					case o.fc.Emotes:
					case o.fc.SubredditRules:
						G = void 0;
						break;
					case o.fc.Traffic:
						G = ie;
						break;
					case o.fc.Modlog:
						G = j, Y = !0;
						break;
					case o.fc.Streaming:
						G = A.g;
						break;
					case o.fc.Modqueue:
					case o.fc.Reports:
					case o.fc.Spam:
					case o.fc.Edited:
					case o.fc.Unmoderated:
						K = _;
						break;
					case o.fc.Wiki:
					case o.fc.WikiContributors:
					case o.fc.WikiBanned:
						await t(Object(T.subredditWikDataRequested)(v, O, !0));
						break;
					case o.fc.ScheduledPostContent:
						$ = !0, G = d.i;
						break;
					case o.fc.EventPostContent:
						ee = !0;
						break;
					case o.fc.Predictions:
						break;
					default:
						return Object(a.a)(_)
				}
				const ne = n(),
					se = !!k && Object(be.jb)(ne),
					ae = Object(fe.N)(ne),
					oe = k ? Object(y.V)(ne, {
						subredditName: k.toLowerCase()
					}) : Object(he.q)(ne, {
						profileName: C.toLowerCase()
					}),
					re = k && Object(y.D)(ne, k),
					ce = C && Object(he.m)(ne, C),
					Ee = re || ce;
				re && !Object(ge.b)(q, re) && await t(Object(A.g)(re));
				const xe = !!re && Object(ge.c)(ne, re),
					ve = Object(me.n)(ne, {
						subredditId: Ee
					}),
					_e = k && Object(y.u)(ne, {
						subredditName: k
					}),
					Ce = !(!_e || !_e.userIsContributor),
					ke = Object(y.X)(ne, {
						subredditId: Ee
					});
				if (Object(l.a)({
						canCreateScheduledPosts: se,
						isContributor: Ce,
						isEmployee: ae,
						isStreamingEnabled: xe,
						moderatorPermissions: ve,
						pageName: _,
						subredditType: ke
					})) {
					if (K && k) {
						const e = Object(c.a)({
								onlyOfType: O.only,
								subreddit: k
							}),
							s = !!Object(ue.c)(q, {
								pageName: K,
								page: `${S}`,
								subredditName: k,
								queryParams: O
							}),
							a = q.pages.modHub.modQueue[K].api.error;
						if (Object(ue.b)(q, {
								pageName: K
							}) || s && !a) return;
						if (!Object(pe.p)(q)) {
							const s = Object(N.e)(e, K, {
								...O,
								subreddit: k
							});
							await s(t, n, r)
						}
					} else if (Q && re) {
						if (await Object(U.g)(re, O)(t, n, r), q.moderatingSubreddits[re]) {
							await Object(U.e)(re, O)(t, n, r), q.pages.modHub.moderators.invitedModerators.userOrder[re] || await Object(U.f)(re)(t, n, r)
						}
					} else Z && k ? await G(k)(t, n, r) : te && re ? await Object(w.e)(re)(t, n, r) : J && re ? await Promise.all([G(k, re)(t, n, r), Object(V.g)(re, u.a.communitySettings)(t, n, r), Object(D.b)(re)(t, n, r), Object(L.d)(re)(t, n, r)]) : Y || X ? await G(k, O)(t, n, r) : $ && re ? await Object(d.i)({
						subredditId: re
					})(t, n, r) : ee && k ? await Object(g.eventPostsRequested)(k)(t, n, r) : G && await G(Ee, O)(t, n, r);
					k && re && !q.subreddits.rules[re] && await F.o(k)(t, n, r), t(M.m({
						title: oe
					}))
				}
			}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return J
			})), n.d(t, "removalReasonsLoaded", (function() {
				return $
			})), n.d(t, "removalReasonsFailed", (function() {
				return ee
			})), n.d(t, "removalReasonsRequested", (function() {
				return te
			})), n.d(t, "removalReasonAddedPending", (function() {
				return ne
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return ae
			})), n.d(t, "addRemovalReason", (function() {
				return oe
			})), n.d(t, "editRemovalReasonPending", (function() {
				return re
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ie
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), n.d(t, "editRemovalReason", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return ce
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), n.d(t, "deleteRemovalReason", (function() {
				return pe
			})), n.d(t, "removedItemsSelected", (function() {
				return be
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return ge
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return Ee
			})), n.d(t, "removalReasonMessagePending", (function() {
				return xe
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ve
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Ce
			})), n.d(t, "submitRemovalReason", (function() {
				return ke
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return ye
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./node_modules/redux/es/redux.js");
			const r = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				l = "REMOVALREASONS__ADD_FAILED",
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
					case d:
					case c:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case l:
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
						case d:
						case l:
						case m:
						case u:
						case b:
						case h:
							return !1;
						default:
							return e
					}
				},
				E = Object(o.c)({
					error: g,
					pending: f
				});
			const x = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r: {
						const {
							response: n
						} = t.payload, {
							data: s
						} = n;
						return {
							...e,
							...s
						}
					}
					case d:
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
							[n]: s,
							...a
						} = e;
						return a
					}
					default:
						return e
				}
			};
			const _ = {};
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r: {
						const {
							subredditId: n,
							response: s
						} = t.payload, {
							order: a
						} = s;
						return {
							...e,
							[n]: a
						}
					}
					case d: {
						const {
							subredditId: n,
							reason: s
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], s.id]
						}
					}
					case b: {
						const {
							subredditId: n,
							reasonId: s
						} = t.payload, a = [...e[n]].filter(e => e !== s);
						return {
							...e,
							[n]: a
						}
					}
					default:
						return e
				}
			};
			var k = function() {
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
				y = Object(o.c)({
					api: E,
					models: v,
					reasonOrder: C,
					removedItemIds: k
				}),
				O = n("./src/lib/constants/index.ts"),
				S = n("./src/lib/makeActionCreator/index.ts"),
				j = n("./src/lib/makeCommentsPageKey/index.ts"),
				N = n("./src/lib/makeDraftKey/index.ts"),
				w = n("./src/reddit/actions/bulkActions/index.ts"),
				I = n("./src/reddit/actions/comment/index.ts"),
				T = n("./src/reddit/actions/comment/authoring.ts"),
				M = n("./src/reddit/actions/comment/moderation.ts"),
				P = n("./src/reddit/actions/modal.ts"),
				R = n("./src/reddit/actions/post.ts"),
				A = n("./src/reddit/actions/toaster.ts"),
				F = n("./src/reddit/constants/modals.ts"),
				D = n("./src/lib/makeApiRequest/index.ts"),
				L = n("./src/lib/omitHeaders/index.ts"),
				U = n("./src/reddit/constants/headers.ts"),
				B = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
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
				W = (e, t, n) => Object(D.a)(Object(L.a)(e, [U.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: O.jb.POST,
					type: "json",
					data: t
				});
			var z = n("./src/reddit/helpers/isPost.ts"),
				V = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = n("./src/reddit/helpers/routeKey/index.ts"),
				G = n("./src/reddit/models/ModQueue/index.ts"),
				K = n("./src/reddit/models/PostDraft/index.ts"),
				Q = n("./src/reddit/models/RemovalReason/index.ts"),
				Y = n("./src/reddit/models/Toast/index.ts"),
				X = n("./src/reddit/selectors/comments.ts"),
				Z = n("./src/reddit/selectors/platform.ts");
			Object(a.a)({
				features: {
					removalReasons: y
				}
			});
			const J = Object(S.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(S.a)(r),
				ee = Object(S.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					const o = n().subreddits.models[e].name;
					t(J());
					const r = await ((e, t) => Object(D.a)(Object(L.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: O.jb.GET
					}))(a(), o);
					r.ok ? t($({
						subredditId: e,
						response: r.body
					})) : t(ee(r.error))
				}, ne = Object(S.a)(i), se = Object(S.a)(d), ae = Object(S.a)(l), oe = (e, t) => async (n, a, o) => {
					let {
						apiContext: r
					} = o;
					const i = a().subreddits.models[e].name;
					n(ne());
					const d = await ((e, t, n) => Object(D.a)(Object(L.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: O.jb.POST,
						data: n
					}))(r(), i, t);
					if (d.ok) {
						const {
							id: a
						} = d.body, o = {
							...t,
							id: a
						};
						n(se({
							subredditId: e,
							reason: o
						})), n(Object(A.f)({
							kind: Y.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(ae(d.error))
				}, re = Object(S.a)(c), ie = Object(S.a)(m), de = Object(S.a)(u), le = (e, t) => async (n, a, o) => {
					let {
						apiContext: r
					} = o;
					const i = a().subreddits.models[e].name;
					n(re());
					const d = await ((e, t, n) => Object(D.a)(Object(L.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: O.jb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), i, t);
					d.ok ? (n(ie({
						subredditId: e,
						reason: t
					})), n(Object(A.f)({
						kind: Y.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(d.error))
				}, ce = Object(S.a)(p), me = Object(S.a)(b), ue = Object(S.a)(h), pe = (e, t) => async (n, a, o) => {
					let {
						apiContext: r
					} = o;
					const i = a().subreddits.models[e].name;
					n(ce());
					const d = await ((e, t, n) => Object(D.a)(Object(L.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: O.jb.DELETE
					}))(r(), i, t);
					d.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(A.f)({
						kind: Y.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(ue(d.error))
				}, be = Object(S.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, s, a) => {
					let {
						apiContext: o
					} = a;
					const r = s();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || n(te(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(P.i)(F.a.ADD_REMOVAL_REASON))
				}, ge = Object(S.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(S.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Ee = Object(S.a)("REMOVALREASONS__SUBMIT_FAILED"), xe = Object(S.a)("REMOVALREASONS__MESSAGE_PENDING"), ve = Object(S.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(S.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ce = Object(S.a)("REMOVALREASONS__MESSAGE_FAILED"), ke = (e, t, n, s, a) => async (o, r, i) => {
					let {
						apiContext: d
					} = i;
					const l = r(),
						c = l.user.account && l.user.account.displayText,
						m = e[0],
						u = Object(z.a)(m) ? Q.e.Post : Q.e.Comment,
						p = u === Q.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						b = u === Q.e.Post ? R.S : I.i;
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
						g = await H(d(), h);
					if (g.ok) {
						if (o(fe()), t) {
							o(xe());
							const a = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								r = await W(d(), Object(Q.h)(a, u), u);
							if (r.ok) {
								if (s === Q.f.Public) {
									if (o(_e()), r.body) {
										const e = Object(V.a)(r.body, c),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(Z.f)(l),
											s = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let a = n && s && Object(q.a)(s, l, l.posts.models[e.postId]);
										if (a || (a = Object(j.a)(e.postId, null, {
												sort: O.v,
												hasSortParam: !0
											})), u === Q.e.Post) {
											const n = Object(N.a)(K.c.replyToPost, m);
											o(Object(T.p)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: n
											}));
											const s = l.postStickiedComments.data[m];
											o(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), s && s !== e.id && o(Object(I.i)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (u === Q.e.Comment) {
											const e = Object(N.a)(K.c.replyToComment, p.id),
												n = Object(X.j)(l, {
													commentId: m,
													commentsPageKey: a
												});
											o(Object(T.n)({
												...t,
												parentCommentId: m,
												commentsPageKey: a,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else o(ve());
								return !0
							}
							return o(Ce(r.error)), !1
						}
					} else o(Ee(g.error)), o(b({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, ye = (e, t, n, a, o) => async (r, i, d) => {
					let {
						apiContext: l
					} = d;
					const c = i(),
						m = c.user.account && c.user.account.displayText;
					if (!m) return;
					r(ge());
					const u = Object(A.f)({
							kind: Y.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await H(l(), p);
					if (b.ok) {
						const s = {
							ids: e,
							operation: G.a.RemovalReason,
							username: m,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (r(Object(w.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: a
								},
								o = await W(l(), Object(Q.h)(s, Q.e.Bulk), Q.e.Bulk);
							o.ok ? (r(ve()), r(u)) : r(Ce(o.error))
						} else r(u)
					} else r(Ee(b.error))
				}
		},
		"./src/reddit/actions/scheduledPosts/delete.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/DeleteScheduledPost.json");
			var d = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = n("./src/reddit/models/ScheduledPost/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				u = n("./src/telemetry/index.ts");
			const p = Object(s.a)(a.i),
				b = (e, t) => async (n, s, b) => {
					let {
						gqlContext: h
					} = b;
					const g = Object(m.a)(s(), {
						subredditId: e,
						scheduledPostId: t
					});
					g && Object(l.p)(g) && Object(u.a)(Object(d.s)()(s(), g)), g ? (await ((e, t) => Object(r.a)(e, {
						...i,
						variables: t
					}))(h(), {
						input: {
							id: g.id
						}
					})).ok ? (n(Object(o.f)(Object(o.e)(a.q(), c.b.SuccessCommunity))), n(p({
						subredditId: e,
						scheduledPostId: t
					}))) : n(Object(o.f)(Object(o.e)(a.p(), c.b.Error))) : n(Object(o.f)(Object(o.e)(a.u(), c.b.Error)))
				}
		},
		"./src/reddit/actions/subredditModeration/approvedSubmitters.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "d", (function() {
				return w
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/get.js"),
				o = n.n(a),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const p = (e, t, n) => Object(l.a)(Object(c.a)(e, [m.a]), {
				endpoint: Object(u.a)(`${e.apiUrl}/api/v1/${t}/contributors`),
				method: d.jb.GET,
				data: n
			});
			var b = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				h = n("./src/reddit/models/SubredditModeration/index.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/actions/subredditModeration/constants.ts");
			const E = Object(r.a)(f.g),
				x = Object(r.a)(f.f),
				v = Object(r.a)(f.e),
				_ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, s, a) => {
						let {
							apiContext: o
						} = a;
						const r = s(),
							i = t.after || "",
							d = Object(h.e)(e, i),
							l = r.pages.modHub.approvedSubmitters.fetchedTokens[d];
						if (r.pages.modHub.approvedSubmitters.api.pending[d] || l) return;
						n(E({
							subredditId: e,
							fetchedToken: i
						}));
						const c = r.subreddits.models[e].name,
							m = await p(o(), c, t);
						m.ok ? n(x({
							...m.body,
							fetchedToken: i
						})) : n(v({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				C = Object(r.a)(f.j),
				k = Object(r.a)(f.i),
				y = Object(r.a)(f.h),
				O = (e, t) => async (n, s, a) => {
					let {
						apiContext: o
					} = a;
					const r = s().subreddits.models[e].name,
						i = {
							username: Object(b.a)(t)
						};
					n(C());
					const d = await p(o(), r, i);
					d.ok ? n(k(d.body)) : n(y(d.error))
				}, S = Object(r.a)(f.d), j = Object(r.a)(f.k), N = (e, t) => async (n, a, r) => {
					let {
						apiContext: u
					} = r;
					const h = a(),
						f = h.subreddits.models[e].url,
						E = h.subreddits.models[e].name;
					t = Object(b.a)(t);
					const x = await ((e, t, n) => Object(l.a)(Object(c.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: d.jb.POST,
						data: {
							api_type: "json",
							name: n,
							type: "contributor"
						}
					}))(u(), f, t);
					if (x.ok) {
						const e = {
							username: t
						};
						n(Object(i.f)({
							kind: g.b.SuccessMod,
							text: s.fbt._("Successfully added an approved submitter", null, {
								hk: "4gruK7"
							})
						}));
						const a = await p(u(), E, e);
						a.ok && n(S(a.body))
					} else {
						const e = o()(x, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(i.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, w = (e, t) => async (n, a, r) => {
					let {
						apiContext: u
					} = r;
					const p = a().subreddits.models[e].url,
						b = await ((e, t, n) => Object(l.a)(Object(c.a)(e, [m.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: d.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "contributor"
							}
						}))(u(), p, t);
					if (b.ok) n(j({
						subredditId: e,
						userId: t
					}));
					else {
						const e = o()(b, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(i.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}
		},
		"./src/reddit/actions/subredditModeration/mute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "a", (function() {
				return w
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./node_modules/lodash/get.js"),
				r = n.n(o),
				i = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				m = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t, n) => Object(d.a)(Object(l.a)(e, [c.a]), {
				endpoint: Object(m.a)(`${e.apiUrl}/api/v1/${t}/muted`),
				method: i.jb.GET,
				data: n
			});
			var p = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				b = n("./src/reddit/models/SubredditModeration/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/subredditModeration/constants.ts");
			const E = Object(a.a)(f.U),
				x = Object(a.a)(f.S),
				v = Object(a.a)(f.R),
				_ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, s, a) => {
						let {
							apiContext: o
						} = a;
						const r = s(),
							i = t.after || "",
							d = Object(b.e)(e, i),
							l = r.pages.modHub.muted.fetchedTokens[d];
						if (r.pages.modHub.muted.api.pending[d] || l) return;
						n(E({
							subredditId: e,
							fetchedToken: i
						}));
						const c = r.subreddits.models[e].name,
							m = await u(o(), c, t);
						m.ok ? n(x({
							...m.body,
							fetchedToken: i
						})) : n(v({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				C = Object(a.a)(f.X),
				k = Object(a.a)(f.W),
				y = Object(a.a)(f.V),
				O = (e, t) => async (n, s, a) => {
					let {
						apiContext: o
					} = a;
					const r = s().subreddits.models[e].name,
						i = {
							username: Object(p.a)(t)
						};
					n(C());
					const d = await u(o(), r, i);
					d.ok ? n(k(d.body)) : n(y(d.error))
				}, S = Object(a.a)(f.T), j = Object(a.a)(f.Y), N = (e, t) => async (n, a, o) => {
					let {
						apiContext: m
					} = o;
					const u = a().subreddits.models[e].url,
						p = await ((e, t, n) => Object(d.a)(Object(l.a)(e, [c.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "muted"
							}
						}))(m(), u, t);
					if (p.ok) n(j({
						subredditId: e,
						userId: t
					}));
					else {
						const e = r()(p, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(g.f)({
							kind: h.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, w = (e, t, n) => async (a, o, m) => {
					let {
						apiContext: b
					} = m;
					const f = o(),
						E = f.subreddits.models[e].url,
						x = f.subreddits.models[e].name;
					t = Object(p.a)(t);
					const v = await ((e, t, n, s) => Object(d.a)(Object(l.a)(e, [c.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: i.jb.POST,
						data: {
							api_type: "json",
							name: n,
							note: s,
							type: "muted"
						}
					}))(b(), E, t, n);
					if (v.ok) {
						const e = {
							username: t
						};
						a(Object(g.f)({
							kind: h.b.SuccessMod,
							text: s.fbt._("Successfully muted a user", null, {
								hk: "2ypyuL"
							})
						}));
						const n = await u(b(), x, e);
						n.ok && a(S(n.body))
					} else {
						const e = r()(v, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
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
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				a = n.n(s);
			const o = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", a.a);
			t.a = o
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: a
				} = e, {
					source: d,
					callToAction: c,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let u = d.displayText;
				return d.displayText.length >= 40 && (u = d.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: l.a.leftSideContent
				}, m && !a && o.a.createElement("span", {
					className: l.a.caption,
					title: m
				}, m), o.a.createElement(i.a, {
					href: d.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d,
					className: l.a.displayUrl
				}, u)), c && o.a.createElement(r.a, {
					className: l.a.callToAction,
					href: d.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d
				}, c))
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_2MgVqpGJKTGicaQowt_R9h",
				primaryButton: "_2MgVqpGJKTGicaQowt_R9h"
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				p = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				b = n("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.m.less"),
				h = n.n(b);
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
					return o.a.createElement(d.e, null, o.a.createElement(d.i, null, o.a.createElement(p.a, null, o.a.createElement(d.q, null, s.fbt._("Add approved user", null, {
						hk: "rVlIL"
					})), o.a.createElement(m.a, {
						onClick: e.toggleModal
					}, o.a.createElement(d.b, null)))), o.a.createElement(d.l, null, o.a.createElement(l.d, {
						placeholder: s.fbt._("Enter username", null, {
							hk: "4DdFFr"
						}),
						onChange: this.onInputChange,
						value: this.state.username,
						autoFocus: !0
					})), o.a.createElement(d.g, null, o.a.createElement(d.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(g, {
						onClick: this.onSubmit,
						"data-redditstyle": !0,
						disabled: !Object(u.a)(t.username)
					}, s.fbt._("Add user", null, {
						hk: "23A7cj"
					}))))
				}
			}
			t.a = Object(r.a)(f)
		},
		"./src/reddit/components/ApprovedSubmitterList/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "_1XoRj9AWrCZUnxJt2JB2QS",
				pencilIcon: "_1XoRj9AWrCZUnxJt2JB2QS",
				noPermissions: "_2LSmyOf3zXlFqKumLW0h7B"
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/subredditModeration/approvedSubmitters.ts"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = n("./src/reddit/components/HumanDate/index.tsx"),
				h = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				g = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				E = n("./src/reddit/components/Scroller/Simple.tsx"),
				x = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				v = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				_ = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/models/SubredditModeration/index.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				S = n("./src/lib/objectSelector/index.ts"),
				j = n("./src/reddit/components/InboxTooltip/Component.tsx");
			const N = Object(S.a)((e, t) => {
				let {
					subredditId: n
				} = t;
				const s = e.pages.modHub.approvedSubmitters.userOrder[n];
				return s ? s.map(t => e.pages.modHub.approvedSubmitters.models[n][t]) : j.a
			});
			var w = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx"),
				M = n("./src/reddit/components/ApprovedSubmitterList/index.m.less"),
				P = n.n(M);
			const R = 24,
				A = Object(I.u)({
					username: e => Object(I.W)(e).user
				}),
				F = Object(d.c)({
					approvedSubmitters: N,
					approvedSubmittersListPending: (e, t) => {
						let {
							subredditId: n
						} = t;
						const s = Object(y.e)(n);
						return !!e.pages.modHub.approvedSubmitters.api.pending[s]
					},
					isAddUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(O.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--RemoveUserConfirmation" === Object(O.a)(e),
					loadMoreToken: (e, t) => {
						let {
							subredditId: n
						} = t;
						return e.pages.modHub.approvedSubmitters.loadMore[n]
					},
					searchPending: e => !!e.pages.modHub.approvedSubmitters.search.api.pending,
					searchResult: e => e.pages.modHub.approvedSubmitters.search.result,
					currentUser: w.k
				}),
				D = Object(i.b)(F, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						addSubmitter: (t, n) => e(Object(u.a)(t, n)),
						loadMore: t => e(Object(u.b)(n, {
							after: t
						})),
						removeSubmitter: (t, n) => e(Object(u.d)(t, n)),
						searchForSubmitter: (t, n) => e(Object(u.c)(t, n)),
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
						var t, n;
						return r.a.createElement(_.b, {
							timeAgo: r.a.createElement(b.d, {
								seconds: e.approvedAtUTC
							}),
							pageName: c.fc.Contributors,
							primaryButton: (null === (t = this.props.currentUser) || void 0 === t ? void 0 : t.id) !== e.id ? r.a.createElement("a", {
								href: `${s.a.redditUrl}/message/compose/?to=${e.username}`,
								rel: "noopener noreferrer",
								target: "_blank"
							}, r.a.createElement(C.r, null, a.fbt._("Send message", null, {
								hk: "2bul7M"
							}))) : null,
							secondaryButton: (null === (n = this.props.moderatorPermissions) || void 0 === n ? void 0 : n.access) ? r.a.createElement(C.r, {
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
						state: n
					} = this, o = t.approvedSubmitters.length ? t.approvedSubmitters[t.approvedSubmitters.length - 1].id : void 0, i = null === (e = t.moderatorPermissions) || void 0 === e ? void 0 : e.access;
					return t.approvedSubmitters.length ? r.a.createElement(r.a.Fragment, null, i && r.a.createElement(f.c, null, r.a.createElement(C.l, {
						onClick: this.approveSubmitter
					}, a.fbt._("Approve user", null, {
						hk: "2v6FxN"
					}))), r.a.createElement(f.a, {
						className: Object(l.a)(!i && P.a.noPermissions)
					}, r.a.createElement(f.b, null, a.fbt._("Approved users", null, {
						hk: "1alMeD"
					}), r.a.createElement(g.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009164452`
					})), r.a.createElement(v.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), n.searchTerm ? r.a.createElement(x.a, {
						cancelSearch: this.cancelSearch,
						noResultsFound: !t.searchResult,
						searchPending: t.searchPending,
						searchTerm: n.searchTerm
					}, t.searchResult && this.renderUser(t.searchResult)) : r.a.createElement(E.b, {
						loadMoreToken: o,
						onLoadMore: this.onLoadMore
					}, t.approvedSubmitters.map((e, t) => ({
						estHeight: R,
						id: e.id,
						render: () => this.renderUser(e)
					})))), t.isAddUserModalOpen && this.renderAddUserModal(), t.isConfirmModalOpen && n.userId && n.username && r.a.createElement(p.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						modalText: a.fbt._("Are you sure you want to remove {username} as an approved user?", [a.fbt._param("username", n.username)], {
							hk: "4ELjHt"
						}),
						onConfirm: this.handleRemoveConfirmed,
						toggleModal: t.toggleRemoveUserModal,
						trackClick: t.sendEventWithName("remove"),
						withOverlay: !0
					})) : r.a.createElement(r.a.Fragment, null, i && r.a.createElement(f.c, null, r.a.createElement(C.l, {
						onClick: this.approveSubmitter
					}, a.fbt._("Approve user", null, {
						hk: "1qX1LT"
					}))), r.a.createElement(f.a, {
						className: Object(l.a)(!i && P.a.noPermissions)
					}, r.a.createElement(f.b, null, a.fbt._("Approved users", null, {
						hk: "pxkv2"
					}), r.a.createElement(g.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009164452`
					})), t.approvedSubmittersListPending ? r.a.createElement(_.a, null) : r.a.createElement(h.c, {
						text: a.fbt._("No approved users in {subredditName}", [a.fbt._param("subredditName", t.subreddit.displayText)], {
							hk: "1VEG1v"
						})
					}, r.a.createElement(k.a, {
						name: "edit",
						className: P.a.PencilIcon
					}))), t.isAddUserModalOpen && this.renderAddUserModal())
				}
			}
			t.a = A(D(L))
		},
		"./src/reddit/components/BannedUserList/ExpandedComponent.m.less": function(e, t, n) {
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
		"./src/reddit/components/BannedUserList/index.m.less": function(e, t, n) {
			e.exports = {
				BanIcon: "_1c2rKv1iuQylye8ejI6-1v",
				banIcon: "_1c2rKv1iuQylye8ejI6-1v"
			}
		},
		"./src/reddit/components/BannedUserList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return K
			}));
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditModeration/ban.ts"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				h = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				g = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = n("./src/reddit/components/Scroller/Simple.tsx"),
				E = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				x = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/models/SubredditModeration/index.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/bannedUser.ts"),
				S = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				j = n("./src/lib/lessComponent.tsx"),
				N = n("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				w = n("./src/reddit/components/CompactPost/index.tsx"),
				I = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/components/BannedUserList/ExpandedComponent.m.less"),
				M = n.n(T);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = Object(I.u)({
				currentProfileName: I.i,
				isCommentsPage: I.x,
				isCommentPermalink: I.w,
				isProfilePostListing: I.L,
				pageLayer: e => e
			}), A = j.a.wrapped(N.c, "UnthreadedComment", M.a), F = j.a.div("BanReason", M.a), D = j.a.div("ExpandedComponentContainer", M.a), L = j.a.div("ModNote", M.a), U = j.a.div("ModNoteContainer", M.a), B = j.a.div("SectionTitle", M.a), H = j.a.div("ContextContainer", M.a), W = e => () => {};
			var z = R(e => {
					const {
						currentProfileName: t,
						isCommentPermalink: n,
						isCommentsPage: s,
						isProfilePostListing: a,
						pageLayer: o,
						user: i
					} = e;
					return r.a.createElement(D, null, i.modNote && r.a.createElement(U, null, r.a.createElement(B, null, P._("Mod note:", null, {
						hk: "2LBtSw"
					})), r.a.createElement(L, null, i.modNote)), r.a.createElement("div", null, r.a.createElement(B, null, P._("Banned For:", null, {
						hk: "3UbXsX"
					})), r.a.createElement(F, null, i.reason), (i.postId || i.commentId) && r.a.createElement(H, null, i.postId && r.a.createElement(w.default, {
						currentProfileName: t,
						isCommentsPage: s,
						isCommentPermalink: n,
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
				V = n("./src/reddit/components/BannedUserList/index.m.less"),
				q = n.n(V);
			const G = 48,
				K = e => null == e ? a.fbt._("Permanent", null, {
					hk: "3pNDzS"
				}) : a.fbt._({
					"*": "{number} days left",
					_1: "1 day left"
				}, [a.fbt._plural(e, "number")], {
					hk: "3VM32a"
				}),
				Q = Object(d.c)({
					bannedUsers: O.h,
					bannedUsersList: O.d,
					bannedUsersListPending: O.c,
					loadMoreToken: O.e,
					isBanUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(y.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--BanUserConfirmation" === Object(y.a)(e),
					searchPending: O.f,
					searchResult: O.g
				}),
				Y = Object(i.b)(Q, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						loadMore: t => e(Object(m.c)(n, {
							after: t
						})),
						onUnbanUser: t => () => e(Object(m.e)(n, t)),
						searchForBannedUser: t => e(Object(m.d)(n, t)),
						toggleBanUserModal: () => e(Object(c.i)("ModerationPage--Modal--AddUser"))
					}
				});
			class X extends r.a.Component {
				constructor(e) {
					super(e), this.handleBanUserToggled = e => {
						if (e) {
							const {
								id: t,
								username: n
							} = e;
							this.setState({
								userId: t,
								username: n
							})
						} else this.setState({
							...k.a,
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
							n = K(t.duration);
						return t ? r.a.createElement(v.b, {
							description: t.reason,
							expandedComponent: r.a.createElement(z, {
								user: t
							}),
							pageName: l.fc.Banned,
							primaryButton: r.a.createElement(_.r, {
								onClick: () => this.handleBanUserToggled(t),
								"data-redditstyle": !0
							}, a.fbt._("Edit", null, {
								hk: "1nftDt"
							})),
							subredditId: this.props.subredditId,
							timeAgo: r.a.createElement(r.a.Fragment, null, r.a.createElement(p.d, {
								seconds: t.bannedAtUTC
							}), " (", n, ")"),
							userIcon: t.accountIcon,
							username: t.username
						}) : r.a.createElement("div", null)
					}, this.renderAddBannedUserModal = () => r.a.createElement(S.a, {
						ignoreDefaultFocus: !0,
						onUnbanUser: this.state.userId ? this.props.onUnbanUser(this.state.userId) : void 0,
						subredditId: this.props.subredditId,
						toggleModal: () => this.handleBanUserToggled(null),
						trackAddEvent: this.props.sendEventWithName("add_banpage"),
						trackEventWithName: this.props.sendEventWithName,
						user: this.state.userId ? this.state.searchTerm ? this.props.searchResult || null : this.props.bannedUsers[this.state.userId] : null,
						withOverlay: !0
					}), this.state = k.a
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = e.bannedUsersList.length ? e.bannedUsersList[e.bannedUsersList.length - 1].id : void 0;
					return e.bannedUsersList.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(_.l, {
						onClick: this.addBannedUser,
						"data-redditstyle": !0
					}, a.fbt._("Ban user", null, {
						hk: "2q7TuL"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Banned users", null, {
						hk: "3hvISm"
					}), r.a.createElement(h.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), r.a.createElement(x.b, {
						onSearch: this.onSearch,
						activeSearchQuery: this.state.searchTerm
					}), t.searchTerm ? r.a.createElement(E.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && this.renderBannedUser(e.searchResult.id)) : r.a.createElement(f.b, {
						loadMoreToken: n,
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
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(_.l, {
						onClick: this.addBannedUser,
						"data-redditstyle": !0
					}, " ", a.fbt._("Ban user", null, {
						hk: "2q7TuL"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Banned users", null, {
						hk: "3hvISm"
					}), r.a.createElement(h.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), e.bannedUsersListPending ? r.a.createElement(v.a, null) : r.a.createElement(b.c, {
						text: a.fbt._("No banned users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1nOcbC"
						})
					}, r.a.createElement(C.a, {
						name: "ban",
						className: q.a.BanIcon
					}))), e.isBanUserModalOpen && this.renderAddBannedUserModal())
				}
			}
			t.a = Y(X)
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/CallToActionButton/index.m.less"),
				d = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
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
				return a.a.createElement(r.b, l({
					className: Object(o.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: n.isNotCardView
					})
				}, n))
			}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(r.b, {
				className: Object(o.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/ads/index.ts"),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/getShortenedLink.ts"),
				l = n("./src/lib/hooks/usePrevious.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/CreatorStats/loader.tsx"),
				h = n("./src/config.ts"),
				g = n("./node_modules/react-redux/es/index.js"),
				f = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/Econ/Audio/index.m.less"),
				x = n.n(E),
				v = n("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				_ = n("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var k = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: n
					} = t, o = () => Math.floor(10 * Math.random() + 1), i = Object(g.e)(f.db), [d, l] = Object(s.useState)(!1), [c, m] = Object(s.useState)(o());
					return Object(s.useEffect)(() => {
						const e = setInterval(() => {
							l(!0), setTimeout(() => l(!1), 3500), m(o())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == n ? void 0 : n.isLive) ? a.a.createElement("a", {
						href: `https://www.reddit.com/talk/${n.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: x.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, a.a.createElement("div", {
						className: x.a.classicSpeaker
					}, d && a.a.createElement(_.a, {
						className: Object(r.a)(x.a.speakerRings, {
							[x.a.nightMode]: i
						})
					}), a.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: x.a.snoovatar,
						src: `${h.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: C._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !d && a.a.createElement("div", {
						className: x.a.muteContainer
					}, a.a.createElement(v.a, {
						className: x.a.muteIcon
					})))) : a.a.createElement("div", {
						className: x.a.endedClassicContainer
					}, a.a.createElement(v.a, {
						className: x.a.muteIcon
					}))
				},
				y = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				O = n("./src/reddit/components/ExpandoButton/index.tsx"),
				S = n("./src/reddit/components/Flatlist/index.tsx"),
				j = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				w = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				I = n("./src/reddit/components/ModModeReports/index.tsx"),
				T = n("./src/reddit/components/ModModeReports/helpers.ts"),
				M = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				P = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				R = n("./src/reddit/components/PostContainer/index.tsx"),
				A = n("./src/reddit/components/PostMeta/index.tsx"),
				F = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				D = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				L = n("./src/reddit/components/PostTitle/index.tsx"),
				U = n("./src/reddit/components/PostTopMeta/index.tsx"),
				B = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				H = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				W = n("./src/reddit/models/Audio/index.ts"),
				z = n("./src/reddit/models/Media/index.ts"),
				V = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				q = n("./src/reddit/connectors/ClassicPost/index.tsx"),
				G = n("./src/reddit/constants/postLayout.ts"),
				K = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Q = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Y = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				X = n("./src/reddit/helpers/localStorage/index.ts"),
				Z = n("./src/reddit/helpers/search/renderMedia.tsx"),
				J = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				$ = n("./src/reddit/helpers/trackers/creatorStats.ts"),
				ee = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = n.n(ee),
				ne = n("./src/reddit/components/ClassicPost/index.m.less"),
				se = n.n(ne);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = Object(i.a)(e => {
				const {
					className: t,
					crosspost: n,
					currentUser: i,
					handleVote: h,
					isExpanded: g,
					inSubredditOrProfile: f,
					eventFactory: E,
					first: x,
					flairStyleTemplate: v,
					formatTitle: _,
					hostPostData: C,
					isCheckboxSelected: q,
					isCurrentUserProfilePost: ee,
					isFrontpage: ne,
					isGalleryTileLayoutDefault: oe,
					isLoggedIn: re,
					isOverlay: ie,
					isProfileCreatorStatsEnabled: de,
					imageGalleryCurrentItem: le,
					moderatorPermissions: ce,
					modModeEnabled: me,
					onClickPost: ue,
					onIgnoreReports: pe,
					onOpenReportsDropdown: be,
					onSizeChanged: he,
					poll: ge,
					post: fe,
					postId: Ee,
					redditStyle: xe,
					scrollerItemRef: ve,
					showBulkActionCheckbox: _e,
					showEditFlair: Ce,
					showMedia: ke,
					subredditOrProfile: ye,
					toggleCheckbox: Oe,
					userIsOp: Se,
					shouldShowGalleryTileOption: je,
					showPromotedCTA: Ne
				} = e, we = Object(c.a)(), Ie = Se && de, Te = Object(l.a)(g);
				Object(s.useEffect)(() => {
					he && Te !== g && he(fe.id)
				}, [g, he, fe.id, Te]);
				const Me = xe ? void 0 : v,
					Pe = n || void 0,
					Re = Object(Y.a)(ce),
					Ae = Object(K.a)(ce),
					Fe = Object(Q.a)(ce),
					De = me && Y.a,
					Le = Object(w.d)(fe),
					Ue = Object(T.c)(fe),
					Be = !!fe.media && fe.media.type === z.o.RTJSON,
					He = Se && Be,
					We = f && !ke,
					ze = !!fe.media && Object(z.H)(fe.media),
					Ve = !!fe.recommendationContext,
					qe = {
						flairStyleTemplate: Me,
						post: fe,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: ee,
						isOverlay: ie,
						shouldShowSubscribeButton: !(ne && re) || Ve && re,
						subredditOrProfile: ye
					},
					Ge = Object(o.t)(fe, le),
					{
						source: Ke
					} = Ge,
					[Qe, Ye] = Object(s.useState)(!1),
					Xe = Object(s.useCallback)(() => {
						Ye(!Qe), Object(X.Mb)(), we(Object($.d)(Ee))
					}, [Qe, Ee, we]);
				let Ze = a.a.createElement(V.a, {
					className: se.a.classicThumbnail,
					crosspost: Pe && fe,
					isMeta: fe.isMeta,
					post: Pe || fe,
					redditStyle: xe,
					templatePlaceholderImage: Me && Me.postPlaceholderImage,
					removeLink: ze
				});
				Object(W.b)(fe) && (Ze = a.a.createElement(k, {
					post: fe
				}));
				const Je = a.a.createElement(R.a, {
					className: Object(r.a)(te.a.classicPostStyles, se.a.postContainer, Object(J.a)(e), {
						[se.a.mFirst]: x,
						[se.a.shouldShowOverflow]: Ie
					}, t),
					isOverlay: ie,
					style: {
						...Object(J.d)(e),
						...Object(J.b)(Me)
					},
					post: fe,
					onClick: ue,
					eventFactory: E
				}, a.a.createElement(D.a, {
					model: fe,
					handleVote: h,
					showBulkActionCheckbox: _e,
					isCheckboxSelected: q,
					toggleCheckbox: Oe,
					flairStyleTemplate: Me,
					redditStyle: xe,
					postId: Ee
				}), a.a.createElement(P.a, {
					className: Ie ? se.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Me
				}, a.a.createElement(y.a, {
					className: se.a.eventMeta,
					post: fe
				}), a.a.createElement("div", {
					className: se.a.mainBody
				}, a.a.createElement("div", {
					className: We ? se.a.expandoContainer : se.a.thumbnailContainer
				}, !We && Ze, a.a.createElement(O.a, {
					crosspost: Pe,
					className: se.a.rightExpando,
					isExpanded: !!g,
					post: fe,
					useMediaIcons: !1
				})), a.a.createElement("div", {
					className: Object(r.a)(se.a.content, {
						[se.a.showBulkActionCheckbox]: _e
					}),
					"data-click-id": "body"
				}, !!fe.recommendationContext && a.a.createElement(M.a, {
					content: fe.recommendationContext.content,
					layout: G.g.Classic,
					post: fe
				}), a.a.createElement(L.c, {
					className: ge ? se.a.titleWithPoll : void 0,
					format: _,
					poll: ge,
					post: fe,
					redditStyle: xe,
					size: L.b.Medium,
					titleColor: Me && Me.postTitleColor,
					isOverlay: ie
				}, fe.source && !Pe && !fe.isSurveyAd && a.a.createElement(H.a, {
					href: fe.source.url,
					isSponsored: fe.isSponsored,
					postId: fe.id,
					source: fe.source
				}, Object(d.a)(fe))), a.a.createElement(A.a, ae({
					key: "PostMeta"
				}, qe)), me && Re && Le && a.a.createElement(N.a, {
					thing: fe
				}), me && Re && Ue && a.a.createElement(I.a, {
					onIgnoreReports: pe,
					reportable: fe
				}), Ne && Ke && Ke.url && !fe.isSurveyAd && a.a.createElement(m.a, {
					className: se.a.adLinkWrapper
				}, a.a.createElement(u.a, {
					post: fe,
					adLinkContent: Ge
				})), a.a.createElement("div", {
					className: se.a.flatlistContainer
				}, a.a.createElement(O.a, {
					className: se.a.leftExpando,
					crosspost: Pe,
					isExpanded: !!g,
					post: fe,
					useMediaIcons: !1
				}), a.a.createElement(p.a, {
					className: se.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Me,
					model: fe,
					onVoteClick: h
				}), a.a.createElement(S.a, {
					className: se.a.flatlistSeparator
				}), !fe.isSurveyAd && a.a.createElement(S.c, {
					className: se.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Ae,
					hasModPostPerms: Re,
					hasModFullPerms: Fe,
					hostPostData: C,
					isOverlay: !!ie,
					modModeEnabled: me,
					onClickInsightsButton: Xe,
					onIgnoreReports: pe,
					onOpenReportsDropdown: be,
					post: fe,
					shouldShowInsightsButton: Ie,
					showEditPost: He,
					showEditFlair: Ce,
					tooltipType: ie ? U.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(F.b)({
						editPost: !De,
						hide: !De,
						report: !De
					})
				})), a.a.createElement(j.d, null))), Object(Z.a)(fe, se.a, ve, g, je, oe), ye && Qe && a.a.createElement(b.a, {
					className: se.a.creatorStatsContainer,
					post: fe,
					subreddit: ye,
					isProfileStats: !0
				})));
				return a.a.createElement(B.b, null, Je)
			});
			t.default = Object(q.a)(oe)
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return A
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/comment/moderation.ts"),
				c = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				m = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				u = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				p = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				b = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				h = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				g = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				f = n("./src/reddit/components/ModModeReports/index.tsx"),
				E = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.tsx"),
				v = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/comments.ts"),
				k = n("./src/reddit/selectors/commentSelector.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				S = n.n(O),
				j = n("./src/lib/lessComponent.tsx");
			const N = j.a.div("VoteSpacer", S.a),
				w = j.a.div("ContentWrapper", S.a),
				I = j.a.div("CommentContentWrapper", S.a),
				T = j.a.div("CommentBody", S.a),
				M = j.a.div("ParentPostTitle", S.a),
				P = j.a.div("CommentParentWrapper", S.a),
				R = Object(r.c)({
					comment: (e, t) => Object(k.b)(e, t),
					commentPermalink: C.m,
					flair: C.e,
					subreddit: y.H
				}),
				A = Object(o.b)(R, (e, t) => {
					let {
						commentId: n,
						trackClick: s
					} = t;
					return {
						onIgnoreReports: () => e(Object(l.g)(n)),
						onVoteClick: t => {
							const [a, o] = t === _.a.upvoted ? [Object(d.q)(n), "upvote_comment"] : [Object(d.j)(n), "downvote_comment"];
							s(o)(), e(a)
						}
					}
				}),
				F = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = A(j.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					commentPermalink: s,
					flair: o,
					hasReports: r,
					isCheckboxSelected: i = !1,
					onIgnoreReports: d,
					onVoteClick: l,
					showModTools: _,
					subreddit: C,
					showBulkActionCheckbox: k,
					toggleCheckbox: y
				} = e, O = Object(g.d)(n);
				return a.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: s
				}, a.a.createElement(E.a, {
					model: n,
					handleVote: l,
					showBulkActionCheckbox: k,
					isCheckboxSelected: i,
					toggleCheckbox: y
				}), a.a.createElement(N, null, a.a.createElement(w, null, a.a.createElement(P, null, n.postTitle && a.a.createElement(M, null, n.postTitle), n.postAuthor && a.a.createElement(b.a, {
					comment: n
				})), a.a.createElement(I, null, a.a.createElement(u.a, {
					comment: n
				}, a.a.createElement(T, null, a.a.createElement(x.a, {
					content: Object(v.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: F(e)
				})), a.a.createElement(p.a, {
					comment: n,
					flair: o,
					subredditName: C ? C.displayText : null
				}), O && a.a.createElement(h.a, {
					thing: n
				}), r && a.a.createElement(f.a, {
					onIgnoreReports: d,
					reportable: n
				}), _ && !n.isDeleted && a.a.createElement(c.a, {
					comment: n
				}))))))
			}, "Component", S.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/addQueryParams/index.ts"),
				i = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = n("./src/reddit/helpers/overlay/index.ts");
			const l = Object(o.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class c extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: n,
						...s
					} = this.props, o = s => e(() => s.metaKey || s.ctrlKey || 1 === s.button ? window.open(Object(r.a)(t, {
						context: 3
					})) : n(Object(r.a)(t, {
						context: 3
					})))(s);
					return a.a.createElement("div", {
						className: s.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && o(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && o(e)
						}
					}, s.children)
				}
			}
			t.a = l(Object(i.a)(c))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = n.n(r);
			const d = o.a.div("DashWrapper", i.a);
			t.a = e => null === e.comment.parentId ? a.a.createElement(d, null, e.children) : a.a.createElement(d, null, a.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				i = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				l = n.n(d),
				c = n("./src/lib/lessComponent.tsx");
			const m = c.a.wrapped(i.a, "Inline", l.a),
				u = c.a.wrapped(i.a, "PostedInfo", l.a),
				p = c.a.wrapped(i.a, "SubredditWrapper", l.a),
				b = c.a.div("TextContainer", l.a),
				h = c.a.wrapped(r.a, "TopMeta", l.a);
			t.a = e => o.a.createElement(m, {
				className: e.className
			}, e.subredditName && o.a.createElement(p, null, e.subredditName && o.a.createElement(b, null, e.subredditName)), o.a.createElement(u, null, o.a.createElement(b, null, `${s.fbt._("Commented by",null,{hk:"4Dveap"})}`), o.a.createElement(h, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/AuthorLink/index.tsx"),
				r = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				c = n.n(l),
				m = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = u.a.wrapped(o.a, "AuthorLink", c.a), h = u.a.wrapped(d.a, "Inline", c.a), g = u.a.wrapped(d.a, "SubredditWrapper", c.a), f = u.a.div("TextContainer", c.a), E = u.a.wrapped(i.b, "SubredditIcon", c.a);
			t.a = e => a.a.createElement(h, null, e.subredditOrProfile && a.a.createElement(g, null, e.subredditOrProfile && a.a.createElement(E, {
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
		"./src/reddit/components/CommonAutocompleteDropdown/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityAwardList/AwardRow/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityAwardList/AwardSettings/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityAwardList/index.m.less": function(e, t, n) {
			e.exports = {
				contentContainer: "_27C02100EX-RnLoDyL_PYT",
				gildIcon: "_3f4YbBVVbX4YXols-8AmgC",
				infoIcon: "_1HPeb_FxEOzicQ4BuIVonK",
				pageInfo: "_2bEhfADeSjJE-8zKoxjbGy",
				awardToDelete: "dzAx082Iu3F9M7xS-PL80",
				awardToDeleteIcon: "_11ikfBu3qqa0paYAJLQINO"
			}
		},
		"./src/reddit/components/CommunityAwardList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/constants/gold.ts"),
				u = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				p = n("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/helpers/trackers/communityAwards.ts"),
				g = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/higherOrderComponents/makeAsync.tsx")),
				f = n("./src/lib/loadWithRetries/index.ts");
			var E = Object(g.a)({
					getComponent: () => Object(f.a)(() => Promise.all([n.e("AwardCreationModal").then(n.bind(null, "./src/reddit/components/AwardCreationModal/index.tsx"))])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				x = n("./src/reddit/models/Gold/Award.ts"),
				v = n("./src/reddit/components/ConfirmModal/index.tsx"),
				_ = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				C = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				k = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				S = n("./node_modules/lodash/times.js"),
				j = n.n(S),
				N = n("./src/lib/classNames/index.ts"),
				w = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				T = n("./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts"),
				M = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				P = n("./src/reddit/components/CommunityAwardList/AwardRow/index.m.less"),
				R = n.n(P);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), F = () => o.a.createElement("div", {
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
				className: Object(N.a)(e.className, R.a.awardLoadingContainer)
			}, j()(10, e => o.a.createElement(F, {
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
				className: Object(N.a)(R.a.awardName, R.a.unfilledAward)
			}, A._({
				"*": "Create up to {quantity} more {coin-price} Coin Awards",
				_1: "Create up to {quantity} more {coin-price} Coin Award"
			}, [A._param("quantity", e.quantity), A._param("coin-price", e.coinPrice), A._plural(e.quantity)], {
				hk: "4nSQI7"
			})), o.a.createElement(M.a, {
				className: R.a.rightAlign
			}, o.a.createElement(w.l, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, A._("Create", null, {
				hk: "3aEi77"
			})))), H = e => o.a.createElement("div", {
				className: R.a.row
			}, o.a.createElement("div", {
				className: Object(N.a)(R.a.awardName, R.a.unfilledAward)
			}, A._("Create a Moderator-Only Award", null, {
				hk: "3aMmTo"
			})), o.a.createElement(M.a, {
				className: R.a.rightAlign
			}, o.a.createElement(w.l, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, A._("Create", null, {
				hk: "3aEi77"
			})))), W = e => o.a.createElement("div", {
				className: R.a.row
			}, o.a.createElement("div", {
				className: Object(N.a)(R.a.awardName, R.a.unfilledAward)
			}, A._("Create an Award", null, {
				hk: "1zGxjw"
			})), o.a.createElement(M.a, {
				className: R.a.rightAlign
			}, o.a.createElement(w.l, {
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
						iconUrl: n,
						subredditId: s
					} = this.props, a = Object(T.a)(s), r = e.startsAt ? new Date(e.startsAt) : void 0, i = e.endsAt ? new Date(e.endsAt) : void 0;
					return o.a.createElement("div", {
						className: R.a.row
					}, o.a.createElement("div", {
						className: R.a.awardName
					}, e.name), o.a.createElement("div", {
						className: R.a.awardDetail
					}, o.a.createElement("img", {
						className: R.a.awardIconImage,
						src: n,
						title: e.name
					})), o.a.createElement("div", {
						className: R.a.awardDetail
					}, e.coinPrice || 0), o.a.createElement("div", {
						className: R.a.awardDetail
					}, e.awardType === x.f.Moderator ? A._("Mod only", null, {
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
				q = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				G = n("./src/reddit/hooks/useTracking.ts"),
				K = n("./src/reddit/selectors/communityAwards.ts"),
				Q = n("./src/reddit/selectors/gold/awardIcon.ts"),
				Y = n("./src/reddit/components/CommunityAwardList/AwardSettings/index.m.less"),
				X = n.n(Y);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = e => {
				let {
					award: t,
					iconUrl: n
				} = e;
				return o.a.createElement("div", {
					className: X.a.awardToggleLabelItem
				}, o.a.createElement("div", {
					className: X.a.awardIconWrapper
				}, o.a.createElement("img", {
					className: X.a.awardIcon,
					src: n
				})), o.a.createElement("div", {
					className: X.a.awardInfoWrapper
				}, o.a.createElement("div", {
					className: X.a.awardTitle
				}, t.name), o.a.createElement("div", {
					className: X.a.awardDescription
				}, t.description)))
			};
			var $ = e => {
					let {
						subredditOrProfile: t,
						subredditOrProfileId: n,
						moderatorPermissions: s
					} = e;
					const a = Object(r.d)(),
						i = Object(G.a)(),
						l = Object(r.e)(e => Object(K.f)(e, {
							subredditOrProfileId: n
						})),
						c = Object(r.e)(e => Object(K.d)(e, {
							subredditOrProfileId: n
						})),
						m = Object(r.e)(e => Object(Q.b)(e, {
							awards: l,
							minSize: 64
						}));
					if (!l.length) return o.a.createElement("div", {
						className: X.a.emptyToggleContainer
					}, o.a.createElement("div", {
						className: X.a.emptyToggleContainerLabel
					}, c ? Z._("Pending", null, {
						hk: "1heuFt"
					}) : Z._("No Awards currently available for configuration. Please try again later.", null, {
						hk: "3BsFsT"
					})));
					const u = s && s.all;
					return o.a.createElement("div", {
						className: X.a.awardToggleContainer
					}, o.a.createElement("div", {
						className: X.a.optionalAwardInfo
					}, Z._("Toggle whether these awards are available in your community. If disabled, they cannot be given on any posts or comments.", null, {
						hk: "4e1OPL"
					})), o.a.createElement("div", null, l.map(e => o.a.createElement(q.p, {
						key: e.id,
						on: e.isEnabled,
						forceOn: e.isEnabled,
						className: Object(N.a)(X.a.awardToggleItem, {
							[X.a.awardToggleItemDisabled]: !e.isEnabled
						}),
						label: o.a.createElement(J, {
							award: e,
							iconUrl: m[e.id]
						}),
						onClick: () => (e => {
							const s = e.isEnabled ? d.g : d.h,
								o = e.isEnabled ? h.h : h.i;
							i(o(e, n)), u && a(s(t, e))
						})(e),
						disabled: !u
					}))))
				},
				ee = n("./src/reddit/components/CommunityAwardList/index.m.less"),
				te = n.n(ee);
			const ne = Object(i.c)({
					awardIcons: (e, t) => {
						let {
							subredditOrProfileId: n
						} = t;
						const s = Object(K.e)(e, {
							subredditOrProfileId: n
						});
						return Object(Q.b)(e, {
							awards: s,
							minSize: 32
						})
					},
					awards: K.e,
					awardsPending: K.d,
					communityAwardsDisabled: K.b,
					isAddAwardModalOpen: e => Object(O.a)(e) === m.a,
					isConfirmModalOpen: e => Object(O.a)(e) === m.b
				}),
				se = Object(r.b)(ne, (e, t) => {
					let {
						subredditOrProfileId: n
					} = t;
					return {
						deleteAward: t => e(Object(d.j)(n, t)),
						toggleAddAwardModal: () => e(Object(l.i)(m.a)),
						toggleConfirmModal: () => e(Object(l.i)(m.b)),
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
						Object(b.e)(b.a.AwardCreationFlow), this.props.sendEvent(Object(h.e)()), this.setState({
							selectedCoinPrice: e,
							selectedModOnly: t
						}, this.props.toggleAddAwardModal)
					}, this.openDeleteAwardModal = e => {
						Object(b.e)(b.a.AwardDeletionFlow), this.props.toggleConfirmModal(), this.setState({
							awardId: e
						})
					}, this.confirmDeleteAward = () => {
						const {
							awardId: e
						} = this.state, {
							awards: t
						} = this.props;
						if (this.props.toggleConfirmModal(), e) {
							const n = t.filter(t => t.id === e)[0];
							n && this.props.sendEvent(Object(h.g)(n)), this.props.deleteAward(e), Object(b.b)(b.a.AwardDeletionFlow)
						}
					}, this.renderAwardSlotRow = e => {
						const {
							awardIcons: t,
							awards: n,
							moderatorPermissions: s,
							subredditOrProfileId: a
						} = this.props, r = !(!s || !s.all);
						if (!e.filled && n.length < m.d) return o.a.createElement(B, {
							coinPrice: e.price,
							key: e.price,
							onCreate: () => this.openAddAwardModal(e.price),
							quantity: e.quantity
						});
						if (!e.filled) return null;
						const {
							award: i
						} = e, d = t[i.id];
						return o.a.createElement(V, {
							key: i.id,
							award: i,
							canDelete: r,
							onDelete: this.openDeleteAwardModal,
							iconUrl: d,
							subredditId: a
						})
					}, this.renderAwardToDelete = () => {
						const {
							awards: e
						} = this.props, {
							awardId: t
						} = this.state;
						if (!t) return null;
						const n = e.filter(e => e.id === t)[0];
						return n ? o.a.createElement("div", {
							className: te.a.awardToDelete
						}, o.a.createElement("span", null, s.fbt._("Remove:", null, {
							hk: "1Y4r4o"
						})), o.a.createElement("img", {
							src: n.icon.url,
							className: te.a.awardToDeleteIcon
						}), o.a.createElement("span", null, n.name)) : null
					}, this.renderInfo = () => o.a.createElement("div", {
						className: te.a.pageInfo
					}, o.a.createElement(y.a, {
						name: "info",
						className: te.a.infoIcon
					}), o.a.createElement("p", null, s.fbt._("Community Awards are unique to each community, and members can give them to each other. Moderators can design and name the Awards however they want.", null, {
						hk: "1mzX5Y"
					})), o.a.createElement("p", null, s.fbt._("A portion of Coins from Community Award purchases will be deposited to the community’s Coin balance. Moderators can use Coins from that balance to reward members with Mod Awards. The Coin balance is shown only to moderators in the community’s sidebar", null, {
						hk: "2TVMDb"
					}))), this.state = ae
				}
				renderAwardsList() {
					const {
						awards: e,
						awardsPending: t,
						moderatorPermissions: n,
						subredditOrProfileId: s
					} = this.props;
					if (t) return o.a.createElement(D, null);
					const a = Object(p.a)(s),
						r = n && n.all,
						i = this.getAwardSlots().filter(e => r && !a || e.filled),
						d = e.filter(e => e.awardType === x.f.Moderator),
						l = e.length < m.d && d.length < m.e && r && !a;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(L, {
						subredditId: s
					}), a && o.a.createElement(W, {
						onCreate: () => this.openAddAwardModal()
					}), i.map(this.renderAwardSlotRow), l && o.a.createElement(H, {
						onCreate: () => this.openAddAwardModal(void 0, !0)
					}), this.renderInfo())
				}
				getAwardSlots() {
					const {
						awards: e
					} = this.props, t = Object(x.j)(e), n = e => e.filled && e.award.awardType === x.f.Moderator;
					return t.sort((e, t) => n(e) && !n(t) ? 1 : n(t) && !n(e) ? -1 : e.price !== t.price ? e.price - t.price : e.filled && !t.filled ? -1 : (t.filled && e.filled, 1))
				}
				render() {
					const {
						communityAwardsDisabled: e,
						isAddAwardModalOpen: t,
						isConfirmModalOpen: n,
						moderatorPermissions: a,
						subredditOrProfile: r,
						subredditOrProfileId: i,
						toggleAddAwardModal: d,
						toggleConfirmModal: l
					} = this.props, {
						awardId: c,
						selectedCoinPrice: m,
						selectedModOnly: p
					} = this.state, h = r.isNSFW || e;
					return o.a.createElement(o.a.Fragment, null, Object(u.a)(r) && o.a.createElement(C.a, {
						className: te.a.contentContainer
					}, o.a.createElement(C.b, null, s.fbt._("Community Awards", null, {
						hk: "lraSi"
					})), h ? this.renderBlacklistedView() : this.renderAwardsList()), o.a.createElement(C.a, {
						className: te.a.contentContainer
					}, o.a.createElement(C.b, null, s.fbt._("Enable/Disable Awards", null, {
						hk: "1IRmfG"
					})), o.a.createElement($, {
						subredditOrProfile: r,
						subredditOrProfileId: i,
						moderatorPermissions: a
					})), t && o.a.createElement(E, {
						defaultCoinPrice: m,
						defaultModOnly: p,
						subredditId: i,
						toggleModal: () => {
							d(), Object(b.b)(b.a.AwardCreationFlow)
						}
					}), n && c && o.a.createElement(v.a, {
						acceptText: s.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						cancelText: s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: s.fbt._("Delete Award", null, {
							hk: "7q2D7"
						}),
						message: s.fbt._("Deleting an Award will remove the option for members of your community to give the Award. Existing Awards will remain on the posts and comments that have received them.", null, {
							hk: "3tX5sQ"
						}),
						onAccept: this.confirmDeleteAward,
						onCancel: l,
						onClose: l,
						onOverlayClick: l,
						withOverlay: !0
					}, this.renderAwardToDelete()))
				}
				renderBlacklistedView() {
					return o.a.createElement(_.c, {
						text: s.fbt._("Community Awards have been disabled for this community.", null, {
							hk: "2g21s6"
						})
					}, o.a.createElement(y.a, {
						name: "award",
						className: te.a.gildIcon
					}))
				}
			}
			t.a = se(Object(k.c)(oe))
		},
		"./src/reddit/components/CommunitySettings/CountrySiteSettings/index.m.less": function(e, t, n) {
			e.exports = {
				countrySiteForm: "_3EwDpZ19gPFB461uuy7iGL",
				dropdownContainer: "_3XPnIpveWFDgMhBmnMyd9e",
				innerFlexboxContainer: "_1tHvQJ3zvN2gjV9HDwzxRj"
			}
		},
		"./src/reddit/components/CommunitySettings/ModPnSettings/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-CommunitySettings-ModPnSettings",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-CommunitySettings-ModPnSettings").then(n.bind(null, "./src/reddit/components/CommunitySettings/ModPnSettings/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunitySettings/ModPnSettings/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/CommunitySettings/components.m.less": function(e, t, n) {
			e.exports = {
				InputField: "_3V4RO9mtZyZCWAu4P0ST4A",
				inputField: "_3V4RO9mtZyZCWAu4P0ST4A",
				FormContainer: "_37sNfY6fNJVPqyQXOHlg3K",
				formContainer: "_37sNfY6fNJVPqyQXOHlg3K"
			}
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "l", (function() {
				return c
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const a = 500,
				o = 100,
				r = 5e3,
				i = 0,
				d = 1440,
				l = 36600,
				c = 1e9,
				m = {
					disabled: s.fbt._("Disabled", null, {
						hk: "1KaunG"
					}).toString(),
					modonly: s.fbt._("Mods only", null, {
						hk: "2yA6R8"
					}).toString(),
					anyone: s.fbt._("Anyone", null, {
						hk: "4gPsEy"
					}).toString()
				},
				u = [s.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), s.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), s.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				p = {
					any: s.fbt._("Any", null, {
						hk: "hVUT8"
					}),
					link: s.fbt._("Links only", null, {
						hk: "3upkyk"
					}),
					self: s.fbt._("Text posts only", null, {
						hk: "1VZn8Y"
					})
				},
				b = [s.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), s.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), s.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				h = {
					low: s.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					high: s.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					all: s.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				g = {
					low: s.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					high: s.fbt._("High", null, {
						hk: "ABfkc"
					}),
					all: s.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				f = {
					nullValue: s.fbt._("none (recommended)", null, {
						hk: "2FMwQH"
					}),
					confidence: s.fbt._("best", null, {
						hk: "13cLYH"
					}),
					old: s.fbt._("old", null, {
						hk: "3V0QN8"
					}),
					top: s.fbt._("top", null, {
						hk: "40R5FY"
					}),
					qa: s.fbt._("q&a", null, {
						hk: "3cm6YL"
					}),
					live: s.fbt._("live (beta)", null, {
						hk: "2EVYAd"
					}),
					controversial: s.fbt._("controversial", null, {
						hk: "1uFV5F"
					}),
					new: s.fbt._("new", null, {
						hk: "39TZi6"
					})
				}
		},
		"./src/reddit/components/CommunitySettings/index.m.less": function(e, t, n) {
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
				crowdControlLevelSetting: "_3Y9FV8OvxbRG6Hgsb2exNG",
				noMarginHeading: "kt9ucKpVrHFhY-_xvYiLF",
				flexSpacer: "_2urERRC5ZgXlBwG8augYFu"
			}
		},
		"./src/reddit/components/CommunitySettings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/isEqual.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/pages/shared.ts"),
				m = n("./src/reddit/actions/subredditSettings.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				p = n("./src/lib/makeGqlRequest/index.ts"),
				b = (n("./src/redditGQL/operations/GetSubredditWelcomeMessage.json"), n("./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json"));
			const h = e => {
				if (e) return {
					...e
				}
			};
			const g = (e, t, n) => async (s, a, o) => {
				let {
					gqlContext: r
				} = o;
				const i = {
						subredditId: e,
						isWelcomeMessageEnabled: t,
						welcomeMessage: {
							markdown: n
						}
					},
					d = await ((e, t) => Object(p.a)(e, {
						...b,
						variables: t
					}))(r(), {
						input: i
					});
				if (d.ok) {
					const t = (e => {
						var t, n;
						const s = null === (n = null === (t = null == e ? void 0 : e.data.updateSubredditSettings) || void 0 === t ? void 0 : t.subreddit) || void 0 === n ? void 0 : n.welcomeMessage;
						return h(s)
					})(d.body);
					t && s(f({
						subredditId: e,
						welcomeMessage: t
					}))
				}
			}, f = Object(u.a)("SUBREDDIT_WELCOME_MESSAGE__LOADED");
			var E = n("./src/reddit/actions/tags/index.ts"),
				x = n("./src/lib/lessComponent.tsx"),
				v = n("./src/reddit/controls/FormFields/index.tsx"),
				_ = n("./src/reddit/components/CommunitySettings/components.m.less"),
				C = n.n(_);
			const k = x.a.wrapped(v.b, "InputField", C.a),
				y = x.a.div("FormContainer", C.a);
			var O = n("./src/reddit/components/CommunitySettings/ModPnSettings/Loader.tsx"),
				S = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				j = n("./src/reddit/components/TrackingHelper/index.tsx"),
				N = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/reddit/helpers/trackers/communitySettings.ts"),
				I = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				T = n("./src/reddit/models/Tags/index.ts"),
				M = n("./src/reddit/selectors/chatPost.ts"),
				P = n("./src/reddit/selectors/streamingModSettings.ts"),
				R = n("./src/reddit/selectors/subreddit.ts");
			var A = n("./src/reddit/selectors/subredditSettings.ts"),
				F = n("./src/reddit/selectors/tags.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts"),
				U = n("./src/reddit/selectors/experiments/countrySites.ts"),
				B = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/config.ts")),
				H = n("./node_modules/fbt/lib/FbtPublic.js"),
				W = n("./src/lib/classNames/index.ts"),
				z = n("./src/reddit/components/CommunityTopics/index.tsx"),
				V = n("./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx"),
				q = n("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				G = n("./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx"),
				K = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				Q = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				Y = n("./src/reddit/components/SubredditCreationModal/index.tsx"),
				X = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				Z = n("./src/reddit/controls/RadioInput/index.tsx"),
				J = n("./src/reddit/models/Flair/index.ts"),
				$ = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				ee = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				te = n("./src/reddit/actions/toaster.ts"),
				ne = n("./src/reddit/components/GeoForm/GeoForm.tsx"),
				se = n("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				ae = n("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				oe = n("./src/reddit/helpers/localStorage/index.ts"),
				re = n("./src/reddit/hooks/useGqlContext.ts"),
				ie = n("./src/reddit/models/Toast/index.ts"),
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
			var le = [Object.freeze({
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
				ce = n("./node_modules/uuid/v4.js"),
				me = n.n(ce),
				ue = n("./src/lib/humanizeDate/index.ts"),
				pe = n("./src/reddit/constants/keycodes.ts"),
				be = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				he = n("./src/reddit/components/CommonAutocompleteDropdown/index.m.less"),
				ge = n.n(he);

			function fe(e) {
				const {
					icons: t = !0,
					id: n,
					items: s,
					currentIndex: a,
					selectValue: i
				} = e, d = Object(o.useRef)(null);
				return Object(o.useEffect)(() => {
					var e;
					let t = 30 * a;
					a > 10 && (t += 120), d && (null === (e = d.current) || void 0 === e || e.scrollTo({
						top: t
					}))
				}, [a]), r.a.createElement("ul", {
					className: ge.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${n}`,
					"data-testid": `autocomplete-dropdown-${n}`,
					ref: d
				}, s.map((e, n) => r.a.createElement("li", {
					onClick: () => i(n),
					key: `${n}`,
					className: Object(W.a)({
						[ge.a.highlight]: n === a
					}, ge.a.autocompleteDropdownItem, {
						[ge.a.autocompleteDropdownItem__rtl]: e.rtl
					})
				}, t && e.icon && r.a.createElement("span", {
					role: "img",
					"aria-label": e.value,
					className: ge.a.autocompleteDropdownItem__icon
				}, e.icon), e.value)))
			}
			const Ee = (e, t) => t.filter(t => 0 === t.value.toLowerCase().indexOf(e.toLocaleLowerCase()));

			function xe(e) {
				var t, n;
				const {
					className: s,
					customClickEvent: a,
					disabled: i,
					defaultIcon: d,
					icons: l = !1,
					initialItemIndex: c,
					listItems: m,
					locked: u = !1,
					placeholderText: p,
					sessionId: b,
					setSelectedParent: h
				} = e, [g, f] = Object(o.useState)(c), [E, x] = Object(o.useState)(m), [v, _] = Object(o.useState)(!0), [C, k] = Object(o.useState)((null === (t = m[c]) || void 0 === t ? void 0 : t.value) || ""), y = `autocomplete-input-${b}`, O = Object(o.useRef)(), S = (e, t) => {
					u || (_(!0), !t && e > -1 && (e = m.findIndex(t => E[e].key === t.key)), f(e), k(e > -1 && m[e].value || ""), h(e), x(m))
				};
				return Object(o.useEffect)(() => {
					var e;
					const t = function(e) {
						if (O && O.current) {
							O.current.contains(e.target) || _(!0)
						}
					};
					return f(c), k((null === (e = m[c]) || void 0 === e ? void 0 : e.value) || ""), document.addEventListener("click", t), () => document.removeEventListener("click", t)
				}, [c, m]), r.a.createElement("div", {
					className: ge.a.autocompleteInputContainer,
					ref: O
				}, l && r.a.createElement("label", {
					className: ge.a.autocompleteLabel,
					htmlFor: y
				}, (null === (n = E[g]) || void 0 === n ? void 0 : n.icon) || d), i ? r.a.createElement("span", {
					className: Object(W.a)(ge.a.autocompleteInput, ge.a.autocompleteInput__disabled, s)
				}, -1 !== c && m[c].value) : r.a.createElement("input", {
					id: `autocomplete-input-${b}`,
					"data-testid": `autocomplete-input-${b}`,
					className: Object(W.a)(ge.a.autocompleteInput, s, !l && ge.a.autocompleteInput__no_icon),
					name: y,
					value: C,
					placeholder: p,
					onChange: e => {
						u || (-1 !== g && (f(-1), h(-1)), k(e.currentTarget.value), x(Ee(e.currentTarget.value, m)))
					},
					onKeyDown: e => {
						if (u) return;
						let t = -1;
						const n = E.length > 0;
						_(!1), n && e.key === pe.b.ArrowDown ? (t = Math.min(g + 1, E.length - 1), f(t), h(-1), t > -1 && t < E.length && k(E[t].value)) : n && e.key === pe.b.ArrowUp ? (t = Math.max(g - 1, -1), f(t), h(-1), t > -1 && t < E.length ? k(E[t].value) : k("")) : n && e.key === pe.b.Enter ? (e.preventDefault(), g > -1 && g < E.length ? S(g, !1) : 1 === E.length && S(0, !1)) : e.key === pe.b.Backspace ? h(-1) : e.key === pe.b.Escape ? (_(!0), c > -1 && ("" !== C && S(c, !0), "" === C && S(-1, !0))) : e.key === pe.b.Tab && (_(!0), -1 !== g ? S(g, !1) : ("" !== C && S(c, !0), "" === C && S(-1, !0)))
					},
					onClick: () => {
						_(!1), a()
					},
					onFocus: () => {
						_(!1)
					}
				}), u && r.a.createElement("span", {
					className: ge.a.locked
				}, r.a.createElement(be.a, {
					className: ge.a.lockIcon
				})), u || i || v || !E.length ? null : r.a.createElement(fe, {
					id: b,
					items: E,
					currentIndex: g,
					selectValue: e => (e => {
						S(e, !1)
					})(e)
				}))
			}
			var ve, _e = n("./src/reddit/components/CommunitySettings/CountrySiteSettings/index.m.less"),
				Ce = n.n(_e);
			! function(e) {
				e[e.CountryForm = 0] = "CountryForm", e[e.LanguageForm = 1] = "LanguageForm"
			}(ve || (ve = {}));
			var ke = Object(j.c)((function(e) {
					const {
						defaultIcon: t = "📍",
						formType: n,
						icons: s = !0,
						initialSubredditCountrySite: a,
						inputClassName: d,
						placeholderText: l,
						subredditId: c,
						listItems: m
					} = e, u = n === ve.CountryForm, p = u ? "countryCode" : "languageCode", b = Object(i.d)();
					let h = a && a[p] || "";
					u && (h = h.toUpperCase());
					const [g] = Object(o.useState)(() => me()()), f = a && !(null == a ? void 0 : a.isCountrySiteEditable) || !1, E = u ? "country" : "language", x = a && u ? a.countryCode : (null == a ? void 0 : a.languageCode) || "";
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Ce.a.countrySiteForm
					}, r.a.createElement("div", {
						className: Ce.a.dropdownContainer
					}, r.a.createElement(xe, {
						className: d,
						defaultIcon: t,
						disabled: f,
						icons: s,
						initialItemIndex: (() => h ? m.findIndex(e => h.toUpperCase() === e.key.toUpperCase()) : -1)(),
						listItems: m,
						locked: f,
						placeholderText: l,
						sessionId: g,
						setSelectedParent: e => (e => {
							if (-1 !== e) {
								let t = m[e].code,
									n = a && a.languageCode || "";
								u || (t = a && a.countryCode || "", n = m[e].code), b(Object(L.g)({
									subredditId: c,
									subredditCountrySite: {
										countryCode: t,
										languageCode: n,
										isCountrySiteEditable: (null == a ? void 0 : a.isCountrySiteEditable) || !0,
										modMigrationAt: (null == a ? void 0 : a.modMigrationAt) || void 0
									}
								}))
							}
						})(e),
						customClickEvent: () => e.sendEvent(Object(w.a)(E, x))
					})), f && a && r.a.createElement(Q.n, null, H.fbt._("This setting was saved by a mod on {modMigrationDate} and can’t be changed", [H.fbt._param("modMigrationDate", (e => {
						if (!e || !e.modMigrationAt) return "";
						const t = Date.parse(e.modMigrationAt);
						return Object(ue.a)(t / 1e3, {
							showDay: !0
						})
					})(a))], {
						hk: "3OWLnm"
					}))))
				})),
				ye = n("./src/reddit/components/CommunitySettings/index.m.less"),
				Oe = n.n(ye);

			function Se(e) {
				var t;
				const {
					initialPlace: n,
					initialSubredditCountrySite: s,
					subredditId: a,
					subredditCountryEditEnabled: d = !1,
					subredditLanguageEditEnabled: l = !1,
					update: c
				} = e, m = Object(re.a)(), u = Object(i.d)(), [p, b] = Object(o.useState)(n), [h, g] = Object(o.useState)(!1), [f, E] = Object(o.useState)(!0);
				return Object(o.useEffect)(() => {
					E(Object(oe.G)("location")), Object(oe.Ib)("location")
				}, []), r.a.createElement(r.a.Fragment, null, r.a.createElement(K.a, {
					className: Oe.a.noMarginHeading
				}, H.fbt._("Community Location and main language", null, {
					hk: "3qWqzm"
				})), r.a.createElement(Q.n, null, H.fbt._("Adding a location helps your community show up in seach results and recommendations and helps local redditors find it easier.", null, {
					hk: "3EuMyx"
				})), r.a.createElement("div", {
					className: Oe.a.flexSpacer
				}), l && r.a.createElement(Q.l, {
					label: r.a.createElement(r.a.Fragment, null, H.fbt._("Language", null, {
						hk: "4iQFeH"
					}), !f && r.a.createElement(se.a, null)),
					textContainerClassName: Object(W.a)(Oe.a.fullWidthTextContainer, Oe.a.geoText)
				}, r.a.createElement(ke, {
					defaultIcon: "",
					icons: !1,
					formType: ve.LanguageForm,
					initialSubredditCountrySite: s,
					inputClassName: Oe.a.autocompleteInput,
					listItems: Array.from(le, e => ({
						code: e.isoCode,
						key: e.isoCode,
						icon: "",
						value: e.displayName,
						rtl: e.rtl
					})),
					placeholderText: H.fbt._("Type to search for a language", null, {
						hk: "4dZ6Zv"
					}),
					subredditId: a
				})), d && r.a.createElement(Q.l, {
					label: r.a.createElement(r.a.Fragment, null, H.fbt._("Country", null, {
						hk: "1tNtsz"
					}), !f && r.a.createElement(se.a, null)),
					textContainerClassName: Object(W.a)(Oe.a.fullWidthTextContainer, Oe.a.geoText)
				}, r.a.createElement(ke, {
					formType: ve.CountryForm,
					initialSubredditCountrySite: s,
					inputClassName: Oe.a.autocompleteInput,
					listItems: Array.from(de, e => ({
						code: e.countryCode || "",
						key: e.countryCode || "",
						icon: e.icon,
						value: e.value
					})),
					placeholderText: H.fbt._("Type to search for a country", null, {
						hk: "51VKS"
					}),
					subredditId: a
				})), r.a.createElement(Q.l, {
					label: r.a.createElement(r.a.Fragment, null, H.fbt._("Region", null, {
						hk: "scpaL"
					}), !f && r.a.createElement(se.a, null)),
					textContainerClassName: Object(W.a)(Oe.a.fullWidthTextContainer, Oe.a.geoText)
				}, r.a.createElement(ne.a, {
					initialValue: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : "",
					initialPlace: p,
					onPlace: e => c(e, "place"),
					onSubmit: async function(e) {
						let {
							place: t,
							sessionId: n
						} = e;
						if ((null == t ? void 0 : t.id) === (null == p ? void 0 : p.id)) return;
						g(!0);
						const s = await Object(ae.a)(m(), {
							subredditId: a,
							placeId: t.id,
							source: t.source,
							sessionId: n
						});
						if (g(!1), !s.ok) return u(Object(te.f)({
							kind: ie.b.Error,
							text: H.fbt._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						b(t), u(Object(te.f)({
							kind: ie.b.SuccessCommunity,
							text: H.fbt._("Successfully updated community location", null, {
								hk: "3aGk2e"
							}),
							duration: 5e3
						}))
					},
					disabled: h,
					className: Oe.a.geoForm,
					inputClassName: Oe.a.geoInput
				})))
			}
			const je = {
				[$.e.Post]: {
					short: () => H.fbt._("Post only (default)", null, {
						hk: "2XJHW4"
					}),
					long: () => H.fbt._("Only approved users can post. Anyone can comment.", null, {
						hk: "3frgit"
					})
				},
				[$.e.Comment]: {
					short: () => H.fbt._("Comment only", null, {
						hk: "2OhQB5"
					}),
					long: () => H.fbt._("Only approved users can comment. Anyone can post.", null, {
						hk: "2F24kr"
					})
				},
				[$.e.PostAndComment]: {
					short: () => H.fbt._("Post & Comment", null, {
						hk: "1lWCl2"
					}),
					long: () => H.fbt._("Only approved users can post and comment.", null, {
						hk: "4GkEs6"
					})
				}
			};

			function Ne(e) {
				const {
					isEmployee: t,
					restrictions: n,
					settings: s,
					subredditId: a,
					subredditName: o,
					testWelcomeMessage: i,
					update: d,
					geoPlace: c,
					onFocusWelcomeMessageInput: m,
					subredditCountrySite: u,
					subredditCountryEditEnabled: p,
					subredditLanguageEditEnabled: b
				} = e, {
					disableContributorRequests: h,
					over18: g,
					publicDescription: f,
					restrictCommenting: E,
					restrictPosting: x,
					subredditType: v,
					title: _,
					welcomeMessageEnabled: C,
					welcomeMessageText: k
				} = s, O = [], j = [];
				for (const r of Object.keys(je)) j.push(je[r].short()), O.push(je[r].long());
				const T = !k || 0 === (null == k ? void 0 : k.length);
				return r.a.createElement(S.a, null, r.a.createElement(y, null, r.a.createElement(S.b, null, H.fbt._("Community settings", null, {
					hk: "3mvH70"
				})), r.a.createElement(K.a, null, H.fbt._("Community Profile", null, {
					hk: "91aEK"
				})), r.a.createElement(Q.e, {
					label: H.fbt._("Community name", null, {
						hk: "260EEx"
					}),
					maxChars: ee.d,
					onChange: e => d(e.currentTarget.value, "title"),
					textContainerClassName: Oe.a.fullWidthTextContainer,
					value: _ || ""
				}), r.a.createElement(Q.l, {
					label: H.fbt._("Community topics", null, {
						hk: "49aoGo"
					}),
					textContainerClassName: Oe.a.fullWidthTextContainer,
					subtext: r.a.createElement("span", {
						className: Oe.a.subtextContainer
					}, H.fbt._("This will help Reddit recommend your community to relevant users and other discovery experiences.", null, {
						hk: "3WYTu5"
					}), " ", r.a.createElement(X.a, {
						className: Oe.a.communityTopicsHelpLink,
						href: "https://mods.reddithelp.com/hc/en-us/articles/360024518712",
						rel: "noopener noreferrer",
						target: "_blank"
					}, H.fbt._("Learn more.", null, {
						hk: "1y3kXY"
					})), " ", " ", r.a.createElement("span", {
						className: Oe.a.numCommunityTopicsSelected
					}, r.a.createElement(V.a, {
						subredditId: a
					}))),
					direction: "column"
				}, r.a.createElement(q.b, {
					subredditId: a,
					onPrimarySelect: e.onPrimarySelect
				}), (!!e.selectedPrimaryTag || e.hasSecondaryTags) && r.a.createElement(z.b, {
					context: I.a.communitySettings,
					subredditId: a
				}), r.a.createElement(G.a, {
					context: I.a.communitySettings,
					subredditId: a
				})), r.a.createElement(Q.h, {
					label: H.fbt._("Community description", null, {
						hk: "1XBKXj"
					}),
					onChange: e => d(e.currentTarget.value, "publicDescription", !1),
					maxChars: ee.c,
					rows: 2,
					subtext: H.fbt._("This is how new members come to understand your community.", null, {
						hk: "llaA4"
					}),
					value: f || ""
				}), r.a.createElement(Q.p, {
					className: C ? Oe.a.welcomeMessageEnabled : void 0,
					on: C,
					onClick: () => d(!C, "welcomeMessageEnabled"),
					label: H.fbt._("Send welcome message to new members", null, {
						hk: "4euZSE"
					}),
					subtext: r.a.createElement("span", null, H.fbt._("Create a custom welcome message to greet people the instant they join your community. New community members will see this in a direct message 1 hour after joining.", null, {
						hk: "1D5tM8"
					}), " ", r.a.createElement(X.a, {
						className: Oe.a.welcomeMessageHelpLink,
						href: "https://mods.reddithelp.com/hc/en-us/articles/360002551551-Welcoming-new-members",
						rel: "noopener noreferrer",
						target: "_blank"
					}, H.fbt._("Learn more.", null, {
						hk: "NkFhF"
					})))
				}), C && r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.h, {
					actionLink: r.a.createElement(N.t, {
						priority: N.c.PlainLink,
						className: Object(W.a)(Oe.a.previewButton, {
							[Oe.a.disabled]: T
						}),
						disabled: !k || 0 === (null == k ? void 0 : k.length),
						onClick: () => i(o, k)
					}, H.fbt._("Send me a test message", null, {
						hk: "4iE1go"
					})),
					label: null,
					onChange: e => {
						d(e.currentTarget.value, "welcomeMessageText")
					},
					onFocus: m,
					placeholder: H.fbt._("Welcome to our community! We’re here to discuss our passion for all things related to grated cheese. (Heads up—we’re a text-only community, so sorry no image posts.) Get started by introducing yourself in our post for newbies, then check out our rules to learn more and dive in.", null, {
						hk: "AnOYs"
					}),
					maxChars: ee.e,
					rows: 5,
					value: k || ""
				})), r.a.createElement(Se, {
					subredditId: a,
					update: d,
					initialPlace: c,
					initialSubredditCountrySite: u,
					subredditCountryEditEnabled: !!p,
					subredditLanguageEditEnabled: !!b
				}), r.a.createElement(K.a, null, H.fbt._("community type", null, {
					hk: "3T2OkK"
				})), r.a.createElement(Q.l, {
					label: H.fbt._("Type of Community", null, {
						hk: "2PReGw"
					}),
					direction: "column"
				}, r.a.createElement(Z.a, {
					value: v,
					name: "type",
					onChange: e => d(e, "subredditType")
				}, Object(Y.radioOptions)(t, n))), r.a.createElement(Q.p, {
					on: g,
					onClick: () => d(!g, "over18"),
					label: r.a.createElement("span", null, H.fbt._("18+ year old community", null, {
						hk: "3VzYZp"
					}), r.a.createElement(Q.m, {
						flair: J.f.Nsfw
					})),
					subtext: H.fbt._("When your community is marked as an 18+ community, users must be flagged as 18+ in their user settings", null, {
						hk: "2h28m0"
					})
				}), "restricted" === v && r.a.createElement(r.a.Fragment, null, r.a.createElement(K.a, null, H.fbt._("Restricted Community Settings", null, {
					hk: "1HiDiC"
				})), r.a.createElement(Q.d, {
					label: H.fbt._("Approved users have the ability to", null, {
						hk: "2pduhW"
					}),
					items: j,
					selected: (() => {
						let e = $.e.Post;
						return E && x ? e = $.e.PostAndComment : E && (e = $.e.Comment), je[e].short()
					})(),
					onClick: e => {
						e === je[$.e.PostAndComment].short() ? (d(!0, $.f.Comment), d(!0, $.f.Post)) : e === je[$.e.Comment].short() ? (d(!1, $.f.Post), d(!0, $.f.Comment)) : e === je[$.e.Post].short() && (d(!0, $.f.Post), d(!1, $.f.Comment))
					},
					id: "restrictionOptions",
					descriptions: O
				}), r.a.createElement(Q.p, {
					on: !h,
					onClick: () => d(!h, "disableContributorRequests"),
					label: H.fbt._("Accepting new requests to post", null, {
						hk: "bTpYB"
					})
				})), "private" === v && r.a.createElement(r.a.Fragment, null, r.a.createElement(K.a, null, H.fbt._("Private Community Settings", null, {
					hk: "2JjNXE"
				})), r.a.createElement(Q.p, {
					on: !h,
					onClick: () => d(!h, "disableContributorRequests"),
					label: H.fbt._("Accepting requests to join", null, {
						hk: "1l1acS"
					}),
					subtext: H.fbt._("Display a button on your private subreddit that allows users to request to join. Users may still send your subreddit modmail whether this is on or off.", null, {
						hk: "1bkLxN"
					})
				})), r.a.createElement(K.a, null, H.fbt._("Advanced Settings", null, {
					hk: "1e5Esr"
				})), r.a.createElement(Q.g, {
					label: H.fbt._("Settings for old site", null, {
						hk: "4wmYj3"
					}),
					subtext: H.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "gYPuP"
					}),
					link: `${B.a.oldRedditUrl}/r/${o}/about/edit`,
					onClick: () => e.sendEvent(Object(w.c)(l.gc.Posts)),
					openInNewTab: !0,
					last: !0
				})))
			}
			var we = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Ie = n("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				Te = n.n(Ie),
				Me = n("./src/reddit/components/ContentSurvey/RatingCard.tsx"),
				Pe = n("./src/reddit/components/ContentSurvey/SurveyModal.tsx"),
				Re = n("./src/reddit/helpers/trackers/contentTag.ts"),
				Ae = n("./src/reddit/hooks/useTracking.ts");
			const {
				fbt: Fe
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function De(e) {
				const {
					subreddit: t
				} = e, n = Object(i.e)(e => e.subreddits.survey[t.id]), s = Object(Ae.a)();
				Object(o.useEffect)(() => s(Object(Re.k)()), [s]);
				const [a, d] = Object(o.useState)(!1);

				function l() {
					s(Object(Re.o)()), d(!0)
				}
				const c = !(null == n ? void 0 : n.response) && (null == n ? void 0 : n.isEligible),
					m = (null == n ? void 0 : n.response) && (null == n ? void 0 : n.isEligible);
				return r.a.createElement("div", {
					className: Object(W.a)(Te.a.ContentContainer, Oe.a.contentTag)
				}, r.a.createElement("h2", null, Fe._("Content Tag", null, {
					hk: "1AhgrD"
				})), r.a.createElement("p", null, Fe._("Your content tag is based on a moderator survey about community posts and discussions. {=Learn More}", [Fe._param("=Learn More", r.a.createElement("a", {
					href: "https://www.reddithelp.com/hc/en-us/articles/360048185132",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => s(Object(Re.d)())
				}, Fe._("Learn More", null, {
					hk: "2gJ4PL"
				})))], {
					hk: "2xoqeD"
				})), r.a.createElement("div", {
					className: Oe.a.contentTagColumn
				}, r.a.createElement(Me.a, {
					subredditId: t.id,
					ratingResponse: null == n ? void 0 : n.response
				}, (null == n ? void 0 : n.response) ? r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: Oe.a.ratingAudience
				}, Fe._("Tagged as {ratingName} due to:", [Fe._param("ratingName", n.response.rating.name)], {
					hk: "3VVnt5"
				})), r.a.createElement("ul", null, n.response.ratingReasons.map(e => r.a.createElement("li", {
					key: e.id,
					className: Oe.a.ratingReason
				}, e.contentRatingReasonText)))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: Oe.a.ratingAudience
				}, Fe._("Set up your tag", null, {
					hk: "2Fb5bg"
				})), r.a.createElement("p", {
					className: Oe.a.ratingDescription
				}, Fe._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "VvmPr"
				})))), c && r.a.createElement(N.t, {
					redditStyle: !0,
					className: Oe.a.surveyButton,
					onClick: l
				}, Fe._("Start Survey", null, {
					hk: "myDPK"
				})), m && r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: Oe.a.promptText
				}, Fe._("Does this content tag look wrong to you?", null, {
					hk: "72VuM"
				})), r.a.createElement(N.t, {
					priority: N.c.Secondary,
					redditStyle: !0,
					className: Oe.a.surveyButton,
					onClick: l
				}, Fe._("Take the Survey", null, {
					hk: "W30wE"
				})), r.a.createElement(we.a, {
					to: "/r/modsupport/submit"
				}, r.a.createElement(N.t, {
					priority: N.c.Tertiary,
					redditStyle: !0,
					className: Oe.a.surveyButton,
					onClick: () => s(Object(Re.f)())
				}, "Message r/modsupport")))), a && n && r.a.createElement(Pe.a, {
					withOverlay: !0,
					subredditId: t.id,
					survey: n,
					onClose: () => d(!1)
				}))
			}
			var Le = e => {
				const {
					settings: t,
					subredditName: n,
					update: s,
					isChatPostsCreationEnabled: a
				} = e, {
					archivePostsEnabled: i,
					allowChatPostCreation: d,
					allowGalleries: c,
					allowImages: m,
					allowPolls: u,
					allowPostCrossposts: p,
					allowPredictionsTournament: b,
					collapseDeletedComments: h,
					commentScoreHideMins: g,
					contentOptions: f,
					spamComments: E,
					spamLinks: x,
					spamSelfposts: v,
					spoilersEnabled: _,
					suggestedCommentSort: C
				} = t, O = null === C ? "nullValue" : C, j = Object(o.useCallback)(() => s(!i, "archivePostsEnabled"), [i, s]);
				return r.a.createElement(S.a, null, r.a.createElement(y, null, r.a.createElement(S.b, null, H.fbt._("Post and Comment settings", null, {
					hk: "14OI7p"
				})), r.a.createElement(K.a, null, H.fbt._("Posts", null, {
					hk: "2i2G4r"
				})), r.a.createElement(Q.d, {
					label: H.fbt._("Post type options", null, {
						hk: "M9AdT"
					}),
					items: Object.keys(ee.h),
					displayItems: Object.values(ee.h),
					displayTitle: ee.h[f],
					selected: f,
					onClick: e => s(e, "contentOptions"),
					id: "contentOptions",
					descriptions: ee.g
				}), r.a.createElement(Q.p, {
					on: p,
					onClick: () => s(!p, "allowPostCrossposts"),
					label: H.fbt._("Allow crossposting of posts.", null, {
						hk: "19EiBT"
					})
				}), r.a.createElement(Q.p, {
					on: i,
					onClick: j,
					label: H.fbt._("Archive posts", null, {
						hk: "3FdbDg"
					}),
					subtext: H.fbt._("Don’t allow commenting or voting on posts older than 6 months", null, {
						hk: "4tIS0"
					})
				}), a && r.a.createElement(Q.p, {
					on: d,
					onClick: () => s(!d, "allowChatPostCreation"),
					label: H.fbt._("Allow chat posts creation by users.", null, {
						hk: "4zwoUf"
					})
				}), r.a.createElement(Q.p, {
					on: _,
					onClick: () => s(!_, "spoilersEnabled"),
					label: r.a.createElement("span", null, H.fbt._("Enable spoiler tag", null, {
						hk: "2CtBpB"
					}), r.a.createElement(Q.m, {
						flair: J.f.Spoiler
					})),
					subtext: H.fbt._("Media on posts with the spoiler tag are blurred", null, {
						hk: "4rVOs6"
					})
				}), r.a.createElement(Q.p, {
					on: m,
					onClick: () => {
						s(!m, "allowImages"), s(!m, "allowGalleries")
					},
					label: H.fbt._("Allow image uploads and links to image hosting sites", null, {
						hk: "20ETVO"
					})
				}), m && r.a.createElement(Q.p, {
					"data-testid": "allow-images-community-setting",
					on: c,
					onClick: () => s(!c, "allowGalleries"),
					label: H.fbt._("Allow multiple images per post", null, {
						hk: "Pcjq5"
					})
				}), r.a.createElement(Q.p, {
					on: u,
					onClick: () => s(!u, "allowPolls"),
					label: H.fbt._("Allow polls", null, {
						hk: "15LXRO"
					})
				}), r.a.createElement(Q.p, {
					on: b,
					onClick: () => s(!b, "allowPredictionsTournament"),
					label: H.fbt._("Allow predictions", null, {
						hk: "rcdMx"
					}),
					subtext: H.fbt._("Allow predictions by mods in your community (only for public, SFW communities with 10k or more members)", null, {
						hk: "40loX3"
					})
				}), r.a.createElement(Q.l, {
					label: H.fbt._("Spam filter strength", null, {
						hk: "4C4qar"
					}),
					subtext: H.fbt._("'HIGH' is the standard filter, 'LOW' disables most filtering, 'ALL' will filter every post initially and they will need to be approved manually to be visible", null, {
						hk: "mdxeP"
					})
				}), r.a.createElement(Q.d, {
					label: H.fbt._("Posts", null, {
						hk: "1SdpTj"
					}),
					items: Object.keys(ee.j),
					displayItems: Object.values(ee.j),
					displayTitle: ee.j[v],
					id: "spamSelfposts",
					selected: v,
					onClick: e => s(e, "spamSelfposts"),
					indent: !0
				}), r.a.createElement(Q.d, {
					label: H.fbt._("Links", null, {
						hk: "Ia7TU"
					}),
					items: Object.keys(ee.j),
					displayItems: Object.values(ee.j),
					displayTitle: ee.j[x],
					id: "spamLinks",
					selected: x,
					onClick: e => s(e, "spamLinks"),
					indent: !0
				}), r.a.createElement(Q.d, {
					label: H.fbt._("Comments", null, {
						hk: "1X5Fv2"
					}),
					items: Object.keys(ee.b),
					displayItems: Object.values(ee.b),
					displayTitle: ee.b[E],
					selected: E,
					onClick: e => s(e, "spamComments"),
					indent: !0,
					id: "spamComments"
				}), r.a.createElement(K.a, null, H.fbt._("Comments", null, {
					hk: "4sAqsA"
				})), r.a.createElement(Q.d, {
					label: H.fbt._("Suggested sort", null, {
						hk: "4Af3Lr"
					}),
					subtext: H.fbt._("All comment feeds in community will default to this sort setting", null, {
						hk: "4grj1W"
					}),
					items: Object.keys(ee.i),
					displayItems: Object.values(ee.i),
					displayTitle: ee.i[O],
					selected: O,
					onClick: e => s("nullValue" === e ? null : e, "suggestedCommentSort"),
					id: "suggestedCommentSort"
				}), r.a.createElement(Q.p, {
					on: h,
					onClick: () => s(!h, "collapseDeletedComments"),
					label: H.fbt._("Collapse deleted and removed comments", null, {
						hk: "Iw8kU"
					})
				}), r.a.createElement(Q.l, {
					label: H.fbt._("Minutes to hide comment scores", null, {
						hk: "1DJhj0"
					}),
					direction: "column"
				}, r.a.createElement(k, {
					onChange: e => s(e.currentTarget.value, "commentScoreHideMins"),
					isInvalid: !(g >= ee.f && g <= ee.a),
					min: ee.f,
					max: ee.a,
					type: "number",
					value: g
				})), r.a.createElement(K.a, null, H.fbt._("Advanced Settings", null, {
					hk: "53xlS"
				})), r.a.createElement(Q.g, {
					label: H.fbt._("Settings for old site", null, {
						hk: "2jzUi8"
					}),
					subtext: H.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "4DHBV2"
					}),
					link: `${B.a.oldRedditUrl}/r/${n}/about/edit`,
					onClick: () => e.sendEvent(Object(w.c)(l.gc.Posts)),
					openInNewTab: !0,
					last: !0
				})))
			};

			function Ue(e) {
				const {
					isChatPostsCreationEnabled: t,
					isBroadcastingEnabled: n,
					settings: s,
					subredditName: a,
					update: o
				} = e, {
					allowDiscovery: i,
					contentVisible: d,
					crowdControlFilter: c,
					crowdControlLevel: m,
					crowdControlChatLevel: u,
					crowdControlPostLevel: p,
					excludeBannedModqueue: b,
					toxicityThresholdChatLevel: h
				} = s, g = {
					0: {
						text: "Off",
						color: "#787C7E"
					},
					1: {
						text: "Lenient",
						color: "#46D160"
					},
					2: {
						text: "Moderate",
						color: "#FFB000"
					},
					3: {
						text: "Strict",
						color: "#EA0027"
					}
				}, f = {
					0: "Use Crowd Control to automatically collapse comments from users you’re not sure about.",
					1: "Comments from users who have negative karma in your community are automatically collapsed.",
					2: "Comments from new users and users with negative karma in your community are automatically collapsed.",
					3: "Comments from users who haven’t joined your community, new users, and users with negative karma in your community are automatically collapsed."
				};
				return r.a.createElement(S.a, null, r.a.createElement(y, null, r.a.createElement(S.b, null, H.fbt._("Safety & privacy settings", null, {
					hk: "34ghQV"
				})), r.a.createElement(K.a, null, H.fbt._("Safety", null, {
					hk: "2QSter"
				})), r.a.createElement(Q.p, {
					on: b,
					onClick: () => o(!b, "excludeBannedModqueue"),
					label: H.fbt._("Exclude posts by site-wide banned users", null, {
						hk: "Kmfy0"
					}),
					subtext: H.fbt._("Posts are excluded from modqueue/unmoderated", null, {
						hk: "2P2pfc"
					})
				}), r.a.createElement(Q.j, {
					className: Oe.a.crowdControlLevelSetting,
					ticks: g,
					min: 0,
					max: Object.keys(g).length - 1,
					step: 1,
					value: m,
					onChange: e => o(e.target.value, "crowdControlLevel"),
					label: H.fbt._("Adjust Crowd Control for Comments", null, {
						hk: "4oWV2B"
					}),
					subtext: H.fbt._("{subText}", [H.fbt._param("subText", f[m])], {
						hk: "3ZFhAV"
					})
				}), r.a.createElement(Q.p, {
					indent: !0,
					on: c,
					onClick: () => o(!c, "crowdControlFilter"),
					label: H.fbt._("Hold crowd controlled comments for review", null, {
						hk: "1c0Z06"
					}),
					subtext: H.fbt._("Instead of collapsing crowd controlled comments will be held for review in mod queue.", null, {
						hk: "1QBJUP"
					})
				}), r.a.createElement(Q.j, {
					className: Oe.a.crowdControlLevelSetting,
					ticks: g,
					min: 0,
					max: Object.keys(g).length - 1,
					step: 1,
					value: p,
					onChange: e => o(e.target.value, "crowdControlPostLevel"),
					label: H.fbt._("Adjust Crowd Control for Posts", null, {
						hk: "3k9pqR"
					}),
					subtext: H.fbt._("{subText}", [H.fbt._param("subText", {
						0: "Use Crowd Control to automatically filter posts from users you’re not sure about.",
						1: "Posts from users who have negative karma in your community are automatically held for review in mod queue.",
						2: "Posts from new users and users with negative karma in your community are automatically held for review in mod queue.",
						3: "Posts from users who haven’t joined your community, new users, and users with negative karma in your community are automatically held for review in mod queue."
					} [p])], {
						hk: "3ZFhAV"
					})
				}), (t || n) && r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.j, {
					ticks: g,
					min: 0,
					max: Object.keys(g).length - 1,
					step: 1,
					value: u,
					onChange: e => o(e.target.value, "crowdControlChatLevel"),
					label: H.fbt._("Adjust Crowd Control for Chat Posts", null, {
						hk: "vTy7k"
					}),
					subtext: H.fbt._("{subText}", [H.fbt._param("subText", f[u])], {
						hk: "12hf9Y"
					})
				}), r.a.createElement(Q.p, {
					on: !!Number(h),
					onClick: () => {
						o(Number(h) ? "0" : "1", "toxicityThresholdChatLevel")
					},
					label: H.fbt._("Collapse Toxic Messages in Chat Post", null, {
						hk: "1Pk3G5"
					}),
					subtext: H.fbt._("Comments that our model scores as toxic will be automatically collapsed.", null, {
						hk: "Rohtu"
					})
				})), r.a.createElement(K.a, null, H.fbt._("Discover", null, {
					hk: "1I53SY"
				})), r.a.createElement(Q.n, {
					className: Oe.a.sectionSubtext
				}, H.fbt._("Show your community to the general Reddit population or just to people who have similar interests, by adjusting how people can find it. Not sure what’s best for you? {=Learn More.}", [H.fbt._param("=Learn More.", r.a.createElement("a", {
					className: Oe.a.subtextLink,
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://mods.reddithelp.com/hc/en-us/sections/360000685771-General-Common-Questions"
				}, H.fbt._("Learn More.", null, {
					hk: "3oTITT"
				})))], {
					hk: "4nomNH"
				})), r.a.createElement(Q.p, {
					on: d,
					onClick: () => o(!d, "contentVisible"),
					label: H.fbt._("Show up in high-traffic feeds", null, {
						hk: "3l7KBc"
					}),
					subtext: H.fbt._("Allow your community to be in r/all, r/popular, and trending lists where it can be seen by the general Reddit population.", null, {
						hk: "iH0lY"
					})
				}), r.a.createElement(Q.p, {
					on: i,
					onClick: () => o(!i, "allowDiscovery"),
					label: H.fbt._("Get recommended to individual redditors", null, {
						hk: "4wmaiH"
					}),
					subtext: H.fbt._("Let Reddit recommend your community to people who have similar interests.", null, {
						hk: "487MMM"
					})
				}), r.a.createElement(K.a, null, H.fbt._("Advanced Settings", null, {
					hk: "3TL9Or"
				})), r.a.createElement(Q.g, {
					link: `${B.a.oldRedditUrl}/r/${a}/about/edit`,
					onClick: () => e.sendEvent(Object(w.c)(l.gc.Safety)),
					openInNewTab: !0,
					last: !0,
					label: H.fbt._("Settings for old site", null, {
						hk: "1WHvCJ"
					}),
					subtext: H.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "2wPmwa"
					})
				})))
			}

			function Be(e) {
				const {
					settings: t,
					subredditName: n,
					update: s
				} = e, {
					wikiEditAge: a,
					wikiEditKarma: o,
					wikimode: i
				} = t;
				return r.a.createElement(S.a, null, r.a.createElement(y, null, r.a.createElement(S.b, null, H.fbt._("Wiki settings", null, {
					hk: "1gmluS"
				})), r.a.createElement(K.a, null, H.fbt._("Community wiki pages", null, {
					hk: "1LwxaS"
				})), r.a.createElement(Q.d, {
					label: H.fbt._("Wikis can be edited by", null, {
						hk: "3brAqG"
					}),
					displayItems: Object.values(ee.n),
					displayTitle: ee.n[i],
					items: Object.keys(ee.n),
					selected: i,
					onClick: e => s(e, "wikimode"),
					id: "wikimode",
					descriptions: ee.m
				}), r.a.createElement(Q.l, {
					label: H.fbt._("Karma required to edit and create wiki pages", null, {
						hk: "3OgR7v"
					}),
					direction: "column"
				}, r.a.createElement(k, {
					onChange: e => s(e.currentTarget.value, "wikiEditKarma"),
					isInvalid: !(o >= ee.f && o <= ee.l),
					min: ee.f,
					max: ee.l,
					type: "number",
					value: o
				})), r.a.createElement(Q.l, {
					label: H.fbt._("Age of Reddit account required to edit and create wiki pages", null, {
						hk: "3UE6cD"
					}),
					direction: "column"
				}, r.a.createElement(k, {
					onChange: e => s(e.currentTarget.value, "wikiEditAge"),
					isInvalid: !(a >= ee.f && a <= ee.k),
					min: ee.f,
					max: ee.k,
					type: "number",
					value: a
				})), r.a.createElement(K.a, null, H.fbt._("Advanced Settings", null, {
					hk: "4drMhK"
				})), r.a.createElement(Q.g, {
					label: H.fbt._("Settings for old site", null, {
						hk: "2YU3sQ"
					}),
					subtext: H.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "1ihkVe"
					}),
					link: `${B.a.oldRedditUrl}/r/${n}/about/edit`,
					onClick: () => e.sendEvent(Object(w.c)(l.gc.Wikis)),
					openInNewTab: !0,
					last: !0
				})))
			}
			const {
				fbt: He
			} = n("./node_modules/fbt/lib/FbtPublic.js"), We = Object(d.c)({
				allowChatPostCreation: (e, t) => Object(M.b)(e, t.subredditId),
				isBroadcastingEnabled: (e, t) => Object(P.c)(e, t.subredditId),
				isChatPostsCreationEnabled: (e, t) => Object(M.c)(e, t.subredditId),
				isEmployee: D.N,
				notificationSettings: A.b,
				restrictions: R.m,
				settings: (e, t) => Object(R.U)(e, t.subredditId),
				subreddit: R.S,
				selectedPrimaryTag: F.s,
				hasSecondaryTags: F.m,
				geoPlace: (e, t) => e.tags.models.geoPlaces[t.subredditId],
				subredditCountrySite: (e, t) => ((e, t) => e.subreddits.countrySiteSettings[t])(e, t.subredditId),
				subredditCountryEditEnabled: (e, t) => Object(U.f)(e),
				subredditLanguageEditEnabled: (e, t) => Object(U.g)(e)
			}), ze = Object(i.b)(We, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					onViewPageEvent: () => e(Object(c.a)()),
					testWelcomeMessage: (t, n) => e(Object(m.i)(t, n)),
					save: (t, n) => e(Object(m.j)(n, t, void 0)),
					saveCommunityTopics: t => e(Object(E.e)(t, I.a.communitySettings)),
					onPrimarySelect: t => e(Object(E.f)({
						primaryTagId: t,
						subredditId: n
					})),
					savePrimaryTopic: t => {
						t && e(Object(E.o)(n, {
							tagId: t.id,
							state: T.d.TAGGED
						}, !1))
					},
					updateSubredditWelcomeMessage: (t, n, s) => e(g(t, n, s)),
					saveSubredditCountrysite: (t, n) => {
						if (n) return e(Object(L.e)(t, n))
					}
				}
			});
			class Ve extends r.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.saveSettings = () => {
						this.props.save(this.state.changed, this.props.subredditId), (this.props.subredditCountryEditEnabled || this.props.subredditLanguageEditEnabled) && this.props.subpageName === l.gc.Community && this.props.saveSubredditCountrysite(this.props.subredditId, this.props.subredditCountrySite), this.props.saveCommunityTopics(this.props.subredditId), this.props.savePrimaryTopic(this.props.selectedPrimaryTag);
						for (const e in this.state.changed) this.props.sendEvent(Object(w.d)(e, this.state.changed[e], this.props.settings[e]));
						this.setState({
							settings: this.state.settings,
							changed: {}
						})
					}, this.update = function(e, n) {
						let s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						s && t.props.sendEvent(Object(w.e)(n, e, t.state.settings[n])), t.setState(t => ({
							changed: {
								...t.changed,
								[n]: e
							},
							settings: {
								...t.settings,
								[n]: e
							}
						}))
					}, this.onFocusWelcomeMessageInput = () => this.props.sendEvent(Object(w.f)("click", "welcome_message_edit")), this.renderSubpage = () => {
						const e = {
							...this.props,
							settings: this.state.settings,
							update: this.update,
							onFocusWelcomeMessageInput: this.onFocusWelcomeMessageInput
						};
						if (!this.state.settings) return null;
						switch (this.props.subpageName) {
							case l.gc.Safety:
								return r.a.createElement(Ue, e);
							case l.gc.Notifications:
								return r.a.createElement(S.a, null, r.a.createElement(y, null, r.a.createElement(O.a, {
									subredditId: e.subredditId,
									subredditName: e.subredditName
								})));
							case l.gc.Posts:
								return r.a.createElement(Le, e);
							case l.gc.Wikis:
								return r.a.createElement(Be, e);
							case l.gc.ContentTag:
								return r.a.createElement(De, {
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
					return r.a.createElement(r.a.Fragment, null, this.props.subpageName !== l.gc.ContentTag && r.a.createElement(S.c, null, r.a.createElement(N.l, {
						onClick: this.saveSettings,
						"data-redditstyle": !0
					}, He._("Save changes", null, {
						hk: "8mSp0"
					}))), this.renderSubpage())
				}
			}
			t.a = ze(Object(j.c)(Ve))
		},
		"./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/models/Tags/index.ts"),
				d = n("./src/reddit/selectors/tags.ts");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = Object(r.c)({
				selectedOptions: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(d.r)(e, {
						subredditId: n
					})
				}
			});
			t.a = Object(o.b)(c)(e => a.a.createElement(a.a.Fragment, null, e.selectedOptions.length, "/", i.a))
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less": function(e, t, n) {
			e.exports = {
				menuItemsWrapper: "_1OISxDncG3tn4CibwqeC4e",
				tooltip: "UNHdPZIwwyCehEV-NfEY7"
			}
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tags/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/ContentTooltip/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/localStorage/index.ts"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				g = n.n(h);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class E extends o.a.Component {
				componentDidMount() {
					this.props.sendEvent(b.e), this.props.onViewTooltip()
				}
				render() {
					const {
						translatedTitle: e,
						translatedDesc: t,
						translatedButtonText: n
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
					}, n || f._("Got it", null, {
						hk: "4CoCjQ"
					})))
				}
			}
			var x = Object(r.b)(void 0, e => ({
				onDismissTooltip: () => {
					e(Object(l.i)()), Object(p.Ab)()
				},
				onViewTooltip: () => {
					Object(p.Vb)()
				}
			}))(Object(m.c)(E));
			const v = "editable-primary-topic-idcard";
			var _ = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				C = n("./src/reddit/models/Tags/index.ts"),
				k = n("./src/reddit/selectors/tags.ts"),
				y = n("./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less"),
				O = n.n(y);
			const S = e => {
					let {
						hasPrimaryTag: t,
						hasSecondaryTags: n
					} = e;
					if (t) return null;
					let a = s.fbt._("Add Community Topics", null, {
							hk: "2wd4kg"
						}),
						r = s.fbt._("Tell us what topics are relevant to your community so we can surface it to the right users", null, {
							hk: "24NCiQ"
						});
					return n && (a = s.fbt._("Add a Primary Topic", null, {
						hk: "41x5Gv"
					}), r = s.fbt._("Oops we don’t have a primary topic yet. Add one so we can surface your community to the right users", null, {
						hk: "XayPA"
					})), o.a.createElement(c.a, {
						className: O.a.tooltip,
						tooltipId: v,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, o.a.createElement(x, {
						translatedTitle: a,
						translatedDesc: r
					}))
				},
				j = {
					availablePrimaryTags: k.p
				},
				N = Object(i.c)({
					...j,
					selectedPrimaryTag: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n && Object(k.s)(e, {
							subredditId: n
						}) || null
					},
					hasSecondaryTags: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object.keys(Object(k.o)(e, {
							itemId: n
						})).length > 0
					},
					isSaving: k.D
				}),
				w = Object(i.c)({
					...j,
					selectedPrimaryTag: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n && Object(k.x)(e, {
							subredditId: n
						}) || null
					},
					hasSecondaryTags: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object.keys(Object(k.o)(e, {
							itemId: n
						})).length > 0
					},
					isSaving: k.D
				}),
				I = Object(i.c)({
					...j,
					selectedPrimaryTag: k.v,
					hasSecondaryTags: () => !1,
					isSaving: e => Object(k.D)(e)
				}),
				T = (e, t) => {
					let {
						subredditId: n,
						onPrimarySelect: s
					} = t;
					return {
						onPrimaryTopicSelected: t => {
							t.isSelected || !s ? t.isSelected || (e(Object(d.f)({
								primaryTagId: t.value,
								subredditId: n
							})), e(Object(d.o)(n, {
								tagId: t.value,
								state: C.d.TAGGED
							}))) : s(t.value)
						},
						onShowTooltip: () => {
							e(Object(l.f)({
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
						hasSecondaryTags: n,
						isSaving: a,
						onPrimaryTopicSelected: r,
						selectedPrimaryTag: i
					} = this.props, d = i && i.text;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(_.b, {
						id: this.isTooltipEnabled() ? v : void 0,
						className: t,
						isTopicsStyle: !0,
						displayText: d || s.fbt._("Add a Primary Topic", null, {
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
					}), this.isTooltipEnabled() && o.a.createElement(S, {
						hasPrimaryTag: !!i,
						hasSecondaryTags: n
					}))
				}
			}
			Object(r.b)(I, e => ({
				onPrimaryTopicSelected: t => {
					e(Object(d.a)({
						primaryTagId: t.value
					}))
				}
			}))(M);
			const P = Object(r.b)(w, T)(M),
				R = Object(r.b)(N, T);
			t.b = R(M)
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/tags/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				p = n("./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less"),
				b = n.n(p);
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
				g = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				f = n("./src/reddit/models/Tags/index.ts"),
				E = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/tags.ts");
			const v = Object(i.c)({
					suggestedOptions: (e, t) => {
						let {
							subredditId: n
						} = t;
						const s = Object(x.y)(e, {
								itemId: n
							}),
							a = Object(x.r)(e, {
								subredditId: n
							}),
							o = Object(x.w)(e, {
								subredditId: n
							});
						return s.filter(e => !!e.id && o !== e.id && !a.find(t => !!t.id && t.id === e.id))
					}
				}),
				_ = Object(r.b)(v, (e, t) => {
					let {
						subredditId: n,
						onOptionSelected: a,
						context: o
					} = t;
					return {
						onSuggestedOptionDismissed: t => {
							e(Object(l.n)(n, [], [{
								subredditId: n,
								tagId: t.id,
								isRelevant: !1
							}], o, !0))
						},
						onSuggestedOptionSelected: t => {
							e((e, r) => {
								const i = r();
								Object(x.r)(i, {
									subredditId: n
								}).length >= f.a ? e(Object(c.f)({
									...Object(c.e)(s.fbt._("You can only add up to {max number of topics} community topics", [s.fbt._param("max number of topics", f.a.toString())], {
										hk: "1OySAh"
									}), E.b.Error),
									duration: c.a
								})) : (e(Object(l.j)({
									subredditId: n,
									option: t
								})), Object(g.c)(r(), n, t, {
									context: o
								}), a && a(t))
							})
						}
					}
				});
			t.a = _(e => e.suggestedOptions.length ? o.a.createElement("div", {
				className: Object(d.a)(b.a.suggestedTopicsContainer, e.className)
			}, e.children || o.a.createElement("span", {
				className: b.a.relatedText
			}, s.fbt._("Related:", null, {
				hk: "1qt7CO"
			})), e.suggestedOptions.map(t => o.a.createElement(h, {
				key: t.id,
				suggestedTopic: t,
				onSuggestedTopicSelected: e.onSuggestedOptionSelected,
				onSuggestedTopicDismissed: e.onSuggestedOptionDismissed
			}))) : null)
		},
		"./src/reddit/components/CommunityTopics/index.m.less": function(e, t, n) {
			e.exports = {
				communityTopicsContainer: "wsNyCIZw7veQPURlfXwXb"
			}
		},
		"./src/reddit/components/CommunityTopics/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tags/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/MultiOptionSelect/index.tsx"),
				m = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				u = n("./src/reddit/models/Tags/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/tags.ts"),
				h = n("./src/reddit/components/CommunityTopics/index.m.less"),
				g = n.n(h);
			const f = Object(i.c)({
				availableSubredditTags: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(b.d)(e, {
						subredditId: n
					})
				},
				subredditTags: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(b.o)(e, {
						itemId: n
					})
				},
				availableGlobalOptions: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(b.a)(e, {
						thingId: n
					})
				},
				selectedOptions: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(b.r)(e, {
						subredditId: n
					})
				},
				isLoading: e => Object(b.B)(e),
				currentInput: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(b.i)(e, {
						subredditId: n
					})
				}
			});
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							n = e.filter(e => !e.selected);
						this.onOptionsSelected(t), n.forEach(e => this.onOptionDeselected(e))
					}, this.onFocus = () => {
						this.props.onSearchBarFocused(), this.props.onFocus && this.props.onFocus()
					}
				}
				onOptionsSelected(e) {
					const t = u.a - this.props.selectedOptions.length,
						n = e.filter(e => !!e.displayText.trim()),
						s = n.slice(0, t);
					s.forEach(e => {
						if (!e.id) {
							const t = Object(b.c)(e.displayText, this.props.availableSubredditTags);
							t && (e = Object(u.f)(t, !0))
						}
						this.props.optionSelected({
							...e,
							displayText: e.displayText.trim()
						})
					}), s.length !== n.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected(e)
				}
				render() {
					return o.a.createElement("div", {
						className: g.a.communityTopicsContainer
					}, o.a.createElement(c.a, {
						readOnlyMode: this.props.readOnlyMode,
						addText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						childClassNames: this.props.childClassNames,
						dropdownHeaderText: s.fbt._("Suggested topics", null, {
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
					subredditId: n,
					context: a
				} = t;
				return {
					optionSelected: t => {
						e(Object(d.j)({
							subredditId: n,
							option: t
						})), e((e, s) => {
							m.e(s(), n, t, {
								context: a
							})
						})
					},
					optionDeselected: t => {
						e(Object(d.i)({
							subredditId: n,
							option: t
						})), e((e, s) => {
							m.d(s(), n, t, {
								context: a
							})
						})
					},
					onInputChanged: t => e(Object(d.h)({
						subredditId: n,
						input: t
					})),
					onSearchBarFocused: () => e((e, t) => {
						m.b(t(), n, {
							context: a
						})
					}),
					onMaxTopicsHit: () => e((e, t) => {
						e(Object(l.f)({
							...Object(l.e)(s.fbt._({
								"*": "You can only add up to max {number} community topics",
								_1: "You can only add up to max 1 community topic"
							}, [s.fbt._plural(u.a, "number")], {
								hk: "s07I1"
							}), p.b.Error),
							duration: l.a
						}))
					})
				}
			})(E)
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "renderSubredditIcon", (function() {
				return Te
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				p = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				b = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/models/User/index.ts"),
				E = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/actions/post.ts"),
				v = n("./src/reddit/actions/postFlair.ts"),
				_ = n("./src/reddit/actions/tooltip.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				k = n("./src/reddit/selectors/moderatorPermissions.ts"),
				y = n("./src/reddit/selectors/postFlair.ts"),
				O = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				j = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				N = n("./src/reddit/components/AwardBadges/index.tsx"),
				w = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				I = n("./src/reddit/components/CommentsLink/index.tsx"),
				T = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				P = n("./src/reddit/components/ExpandoButton/index.tsx"),
				R = n("./src/reddit/components/Flatlist/index.tsx"),
				A = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				F = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				L = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				U = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				B = n("./src/reddit/components/ModModeReports/index.tsx"),
				H = n("./src/reddit/components/ModModeReports/helpers.ts"),
				W = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				z = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				V = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				q = n("./src/reddit/components/PostBadges/index.tsx"),
				G = n("./src/reddit/components/PostContainer/index.tsx"),
				K = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				Q = n("./src/reddit/components/PostLeftRail/index.tsx"),
				Y = n("./src/reddit/components/PostMedia/index.tsx"),
				X = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Z = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				J = n("./src/reddit/components/PostTitle/index.tsx"),
				$ = n("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				te = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ne = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = n("./src/reddit/components/SubredditIcon/index.tsx"),
				ae = n("./src/reddit/components/VerticalVotes/index.tsx"),
				oe = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				re = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = n("./src/reddit/contexts/Post/index.tsx"),
				de = n("./src/reddit/controls/Checkbox/index.tsx"),
				le = n("./src/reddit/controls/MetaData/index.tsx"),
				ce = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				me = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ue = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				pe = n("./src/reddit/helpers/postEvent.ts"),
				be = n("./src/reddit/hooks/useIsOverlay.ts"),
				he = n("./src/reddit/hooks/useTheme.ts"),
				ge = n("./src/reddit/hooks/useUserContext.ts"),
				fe = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ee = n("./src/reddit/icons/fonts/Report/index.tsx"),
				xe = n("./src/reddit/selectors/showPromotedCTA.ts"),
				ve = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				_e = n.n(ve),
				Ce = n("./src/reddit/components/CompactPost/index.m.less"),
				ke = n.n(Ce);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = e => {
					let {
						isCompact: t,
						...n
					} = e;
					return a.a.createElement(P.a, ye({
						className: Object(l.a)(ke.a.responsiveExpandoButton, {
							[ke.a.mHideAboveSmallTablets]: !!t,
							[ke.a.mHideBelowSmallTablets]: !t
						})
					}, n))
				},
				Se = () => Object(i.c)({
					activeModalId: C.a,
					crosspost: O.d,
					flairStyleTemplate: re.V,
					isActive: O.j,
					isExpanded: O.m,
					showPromotedCTA: xe.a,
					layout: re.R,
					moderatorPermissions: k.m,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: y.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: n
						} = t;
						return !!n && Object(k.i)(e, n.id)
					}
				}),
				je = (e, t) => {
					let {
						postId: n
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: n,
								previewFlair: s,
								selectedTemplateId: a
							} = t;
							return e(Object(v.h)({
								post: n,
								previewFlair: s,
								selectedTemplateId: a
							}))
						},
						handleVote: t => {
							const s = t === E.a.upvoted ? Object(x.kb)(n) : Object(x.w)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(x.gb)(n)),
						onOpenReportsDropdown: t => e(Object(_.h)({
							tooltipId: t
						}))
					}
				};
			class Ne extends a.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: n,
						crosspost: s,
						currentUser: o,
						eventFactory: r,
						flairStyleTemplate: i,
						handleVote: c,
						imageGalleryCurrentItem: m,
						isCheckboxSelected: E = !1,
						isCommentsPage: x,
						isCommentPermalink: v,
						isExpanded: _,
						isGalleryTileLayoutDefault: C,
						isModWithUserNotesPermissions: k,
						isOverlay: y,
						isProfilePostListing: O,
						inSubredditOrProfile: P = !1,
						layout: Y,
						moderatorPermissions: ne,
						modModeEnabled: se,
						onClickPost: re,
						onFlairChanged: ie,
						onIgnoreReports: le,
						poll: be,
						post: he,
						subredditOrProfile: ge,
						userIsOp: xe,
						hideModTools: ve,
						scrollerItemRef: Ce,
						showBulkActionCheckbox: ye,
						showEditFlair: Se,
						toggleCheckbox: je,
						tooltipType: Ne,
						sendEvent: Ie,
						shouldShowGalleryTileOption: Te,
						showPromotedCTA: Pe
					} = this.props, Re = !!he.media && he.media.type === g.o.RTJSON, Ae = xe && Re, Fe = Object(K.b)(he.id, y), De = Object(ue.a)(ne), Le = Object(ce.a)(ne), Ue = Object(me.a)(ne), Be = `-mod-actions-menu-${he.id}`, He = `voting-arrows-${he.id}`, We = !!o && Object(f.e)(o) === he.author, ze = Object(U.d)(he), Ve = Object(H.c)(he), qe = Object(A.a)("View--Reports", he.id, Ne), Ge = Object(H.a)(he), Ke = !(y || x || v), Qe = he.media && he.media.type === g.o.LIVEVIDEO, Ye = e => Ie(Object(h.h)(he.id, e)), Xe = Object(d.t)(he, m), {
						source: Ze
					} = Xe, Je = a.a.createElement(G.a, {
						className: Object(l.a)(_e.a.compactPostStyles, ke.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: y,
						style: {
							...Object(b.d)(this.props),
							...Object(b.b)(this.props.flairStyleTemplate)
						},
						post: he,
						onClick: re,
						eventFactory: r
					}, a.a.createElement("div", {
						className: ke.a.compactWrapper
					}, a.a.createElement("div", {
						className: ke.a.leftRailWrapper
					}, a.a.createElement("div", {
						className: ke.a.leftRail,
						style: {
							borderColor: Object(Q.c)({
								isRemoved: !!he.bannedBy,
								isReported: Object(p.a)(he),
								isSponsored: he.isSponsored,
								theme: this.props.theme
							})
						}
					}, ye && a.a.createElement(de.a, {
						className: ke.a.bulkActionCheckbox,
						isCheckboxSelected: E,
						toggleCheckbox: je
					}), a.a.createElement(ae.a, {
						className: ke.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: he,
						onVoteClick: c
					}), a.a.createElement(T.a, {
						className: ke.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: he,
						onVoteClick: c,
						upvoteTooltipId: He
					}))), a.a.createElement(V.a, {
						className: Object(l.a)(ke.a.content, {
							[ke.a.isEvent]: Object(pe.a)(he)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, a.a.createElement(M.a, {
						isCompactMode: !0,
						post: he
					}), a.a.createElement("div", {
						className: ke.a.compactPostRow
					}, !ve && a.a.createElement(Oe, {
						crosspost: s,
						isCommentsPage: x,
						isCompact: !1,
						isExpanded: _,
						post: he,
						useMediaIcons: !0
					}), !P && !he.isSponsored && a.a.createElement(F.h, {
						type: he.belongsTo.type,
						id: he.belongsTo.id
					}), a.a.createElement("div", {
						className: ke.a.topLine,
						"data-click-id": "body"
					}, !!he.recommendationContext && a.a.createElement(z.a, {
						content: he.recommendationContext.content,
						layout: u.g.Compact,
						post: he
					}), a.a.createElement(J.c, {
						post: he,
						poll: be,
						size: J.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Me(he, ge), a.a.createElement($.d, {
						className: ke.a.postTopMeta,
						flairStyleTemplate: i,
						isModWithUserNotesPermissions: k,
						post: he,
						showSub: !!ge && !P && !he.isSponsored,
						subredditOrProfile: ge
					}), a.a.createElement(q.a, {
						className: ke.a.postBadges,
						displayText: ge ? ge.displayText : null,
						inSubredditOrProfile: P,
						post: he
					}), a.a.createElement(N.a, {
						thing: he,
						tooltipType: y ? $.c.Lightbox : void 0
					})), Ke && !Qe && a.a.createElement("div", null, a.a.createElement(w.a, {
						className: ke.a.liveDiscussionIcon,
						isMod: De,
						postId: he.postId
					})), !he.isSurveyAd && a.a.createElement("div", {
						className: ke.a.flatList
					}, a.a.createElement(I.a, {
						className: ke.a.commentsLink,
						hasModPostPerms: De,
						isCommentsPage: x,
						isCommentPermalink: v,
						isOverlay: y,
						postId: he.id,
						modModeEnabled: se,
						numComments: he.numComments,
						type: u.g.Compact
					}), a.a.createElement(W.a, {
						className: ke.a.modToolsFlatlist,
						isOverlay: !1,
						layout: Y,
						modModeEnabled: se,
						post: he,
						sendEvent: Ie,
						showIconsOnly: !0
					}), De && a.a.createElement(D.a, {
						dropdownId: Be,
						onClick: () => Ye("post_mod_action_menu")
					}, a.a.createElement(R.b, null), a.a.createElement(X.a, {
						canEditFlair: Le && Se,
						hasModPostPerms: De,
						hasModFullPerms: Ue,
						isOverlay: !1,
						isPostAuthor: We,
						modModeEnabled: se,
						post: he,
						tooltipId: Be
					})), De && Ve && !se && a.a.createElement(te.c, {
						text: `${Ge}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(qe), Ye("post_report_menu")
						},
						id: qe
					}, a.a.createElement(oe.a, {
						model: he,
						onIgnoreReports: () => {
							le(), Ye(he.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: qe
					}), he.ignoreReports ? a.a.createElement(fe.a, null) : a.a.createElement(Ee.a, null)), a.a.createElement(Z.a, {
						currentProfileName: n,
						isCommentsPage: x,
						isOverlay: !1,
						isProfilePostListing: O,
						isRecommendationPost: !!he.recommendationContext,
						layout: Y,
						permalink: he.permalink,
						sendEvent: Ie,
						showEditPost: Ae,
						showEditFlair: Se,
						dropdownId: `${he.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(Z.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ve && a.a.createElement(Oe, {
						crosspost: s,
						isCommentsPage: x,
						isCompact: !0,
						isExpanded: _,
						post: he,
						useMediaIcons: !0
					}))), Pe && Ze && Ze.url && !he.isSurveyAd && a.a.createElement(S.a, {
						className: ke.a.adLinkWrapper
					}, a.a.createElement(j.a, {
						post: he,
						adLinkContent: Xe,
						isCompact: !0
					})), se && De && ze && a.a.createElement("div", {
						className: ke.a.modModeBannerWrapper
					}, a.a.createElement(L.a, {
						thing: he
					})), se && De && Ve && a.a.createElement("div", {
						className: ke.a.modModeBannerWrapper
					}, a.a.createElement(B.a, {
						onIgnoreReports: le,
						reportable: he
					})), a.a.createElement(F.d, null))), _ && a.a.createElement(we, {
						post: he,
						scrollerItemRef: Ce,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Te,
						isGalleryTileLayoutDefault: C
					}), e === Fe && a.a.createElement(K.a, {
						flairs: he.flair,
						subredditId: he.belongsTo.id,
						modalId: Fe,
						onFlairChanged: ie
					}));
					return a.a.createElement(ee.b, null, Je)
				}
			}
			const we = e => a.a.createElement(V.a, {
					className: Object(l.a)(e.className, ke.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? a.a.createElement("div", {
					className: ke.a.crosspostMediaWrapper
				}, Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Ie = (e, t, n, s) => a.a.createElement(Y.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: s,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: n,
					showCentered: !0,
					showFull: !0,
					showPromotedCTA: !0
				}),
				Te = e => a.a.createElement(r.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, a.a.createElement(se.b, {
					className: ke.a.subredditIcon,
					subredditOrProfile: e
				})),
				Me = (e, t) => a.a.createElement("div", {
					className: ke.a.responsiveMeta
				}, a.a.createElement(le.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), a.a.createElement(le.c, null), Object(le.d)(e.numComments), a.a.createElement(le.c, null), t && a.a.createElement("a", {
					href: t.url
				}, a.a.createElement(le.a, null, t.displayText)), e.isSponsored && [a.a.createElement(ne.a, {
					key: "label",
					isSurveyAd: e.isSurveyAd
				}), a.a.createElement(le.c, {
					key: "separator"
				})], !e.isSponsored && a.a.createElement(le.a, null, " Posted by "), a.a.createElement($.b, {
					post: e,
					isDeleted: e.author === c.E
				}));
			t.default = Object(ie.b)(a.a.memo((function(e) {
				const t = Object(ge.a)(),
					n = Object(s.useMemo)(() => Se(), []),
					r = Object(o.e)(s => n(s, {
						...e,
						...t
					})),
					i = Object(o.d)(),
					d = je(i, {
						...e,
						...t
					});
				return a.a.createElement(Ne, ye({}, e, t, r, d, {
					onFlairChanged: t => {
						let {
							previewFlair: n,
							selectedTemplateId: s
						} = t;
						return d.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: s
						})
					},
					sendEvent: Object(m.b)(),
					isOverlay: Object(be.a)(),
					theme: Object(he.a)()
				}))
			})))
		},
		"./src/reddit/components/ConfirmModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ConfirmModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				d = n.n(i),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(o.a)(e => a.a.createElement("div", {
				className: d.a.container
			}, a.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: d.a.close
			}, a.a.createElement(l.b, null)), a.a.createElement(l.i, null, a.a.createElement("h2", {
				className: d.a.headerText
			}, e.headerText)), a.a.createElement(l.l, null, e.message && a.a.createElement("p", {
				className: d.a.text
			}, e.message), e.children && a.a.createElement("div", {
				className: d.a.text
			}, e.children), a.a.createElement("div", {
				className: d.a.buttonWrapper
			}, e.cancelText && a.a.createElement(r.o, {
				className: d.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), a.a.createElement(r.l, {
				className: d.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/ContentSurvey/RatingCard.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/components/ContentSurvey/index.m.less"),
				i = n.n(r),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				c = n("./src/reddit/hooks/useTheme.ts"),
				m = n("./src/reddit/icons/svgs/Info/index.tsx"),
				u = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				var t, n;
				const {
					ratingResponse: s,
					subredditId: r,
					children: g
				} = e, f = null !== (t = Object(o.e)(e => Object(b.S)(e, {
					subredditId: r
				}))) && void 0 !== t ? t : {}, E = Object(c.a)();
				return a.a.createElement("div", {
					className: i.a.ratingCard
				}, "PENDING" === (null == s ? void 0 : s.status) && a.a.createElement("div", {
					className: Object(d.a)(i.a.card, i.a.pending)
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
							theme: E
						}).banner.backgroundColor, Object(p.a)({
							theme: E
						}).banner.backgroundImage, Object(p.a)({
							theme: E
						}).banner.backgroundImagePosition)
					}
				}, a.a.createElement(l.b, {
					className: i.a.communityIcon,
					iconUrl: null === (n = f.icon) || void 0 === n ? void 0 : n.url
				})), a.a.createElement("h3", {
					className: i.a.communityName
				}, s ? a.a.createElement("span", null, f.displayText, a.a.createElement("img", {
					className: i.a.ratingImg,
					src: s.rating.icon.png
				})) : f.displayText), g))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e(5), n.e(7)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				r = Object(a.a)(o);
			t.a = r
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("CreatorStats").then(n.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/components/EmailInvitePaintedDoor/loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "EmailInvitePaintedDoor",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailInvitePaintedDoor").then(n.bind(null, "./src/reddit/components/EmailInvitePaintedDoor/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailInvitePaintedDoor/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				l = n("./src/reddit/components/PostFollow/index.tsx"),
				c = n("./src/reddit/helpers/postCollection.ts"),
				m = n("./src/reddit/helpers/postEvent.ts"),
				u = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(u);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					post: s
				} = e;
				if (!Object(m.a)(s)) return null;
				const i = s && s.eventInfo,
					u = Object(c.a)(s),
					h = i && Object(r.c)(i.eventStart, i.eventEnd);
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.container, t, {
						[p.a.isCompact]: !!n
					})
				}, a.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, a.a.createElement(d.a, {
					post: s
				}), !u && h && a.a.createElement(l.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/eventTools/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/icons/fonts/helpers.tsx"),
				l = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(l);
			var m = e => a.a.createElement("i", {
				className: Object(i.a)(Object(d.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			});
			var u = e => a.a.createElement("i", {
					className: Object(i.a)(Object(d.b)("live", e.isFilled), c.a.liveIcon, e.className)
				}),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				h = n.n(b),
				g = n("./src/lib/lessComponent.tsx");
			const f = g.a.span("PostEventFutureText", h.a),
				E = g.a.span("PostEventPastText", h.a),
				x = g.a.span("PostEventNowText", h.a),
				v = g.a.span("Container", h.a),
				_ = g.a.wrapped(m, "CalendarIcon", h.a),
				C = g.a.wrapped(u, "LiveIcon", h.a),
				k = g.a.div("LoadingState", h.a);
			class y extends s.Component {
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
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: i,
						eventStart: d
					} = n, l = Object(o.e)(d, s);
					let c, m;
					if (this.state.mounted || l === o.a.Live) c = a.a.createElement(p.c, {
						startTime: d,
						endTime: s,
						isLive: i
					});
					else {
						const e = Object(r.a)({
							isLoading: !0
						});
						c = a.a.createElement(k, {
							className: e
						})
					}
					if (i) m = a.a.createElement(x, null, a.a.createElement(C, null), c);
					else if (l === o.a.Future) m = a.a.createElement(f, null, a.a.createElement(_, null), c);
					else {
						if (l !== o.a.Past) return null;
						m = a.a.createElement(E, null, a.a.createElement(_, null), c)
					}
					return a.a.createElement(v, {
						className: e
					}, m)
				}
			}
			t.a = y
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/reddit/helpers/path/index.ts"),
				p = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = n("./src/telemetry/models/Outbound.ts"),
				E = n("./src/reddit/components/ExpandoButton/index.m.less"),
				x = n.n(E);
			const v = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(c.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(c.bb)(Object(u.b)(t.permalink), t.id))
				})),
				_ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 ? arguments[2] : void 0;
					const s = Object(d.a)(x.a.icon, x.a.hideOnHover);
					if (t) return o.a.createElement(b.a, {
						name: "crosspost",
						className: s
					});
					if (n.pollData) return o.a.createElement(b.a, {
						name: "poll_post",
						className: s
					});
					if (n.audioRoom) return o.a.createElement(b.a, {
						name: "audio",
						className: s
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return o.a.createElement(b.a, {
								name: "gif_post",
								className: s
							});
						case h.o.IMAGE:
							return o.a.createElement(b.a, {
								name: "image_post",
								className: s
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return o.a.createElement(b.a, {
								name: "text_post",
								className: s
							});
						case h.o.VIDEO:
							return o.a.createElement(b.a, {
								name: "video_post",
								className: s
							});
						case h.o.GALLERY:
							return o.a.createElement(b.a, {
								name: "media_gallery",
								className: s
							});
						case h.o.EMBED:
						default:
							return o.a.createElement(b.a, {
								name: "embed",
								className: s
							})
					}
				};
			t.a = v(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: a,
					isCommentsPage: c,
					isExpanded: u,
					post: h,
					toggle: E,
					useMediaIcons: v
				} = e, C = n || h, k = Object(r.e)(g.b), y = t => {
					k && (t.preventDefault(), e.showModalOnPostLinkClick(C))
				}, O = a && !!n;
				return C.media && !(("rtjson" === C.media.type || "text" === C.media.type || "liveaudio" === C.media.type) && !Object(p.a)(C)) || !!h.pollData ? o.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": s.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, x.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					onClick: E
				}, u ? o.a.createElement(b.a, {
					name: "collapse",
					className: x.a.icon
				}) : v ? o.a.createElement(o.a.Fragment, null, _(C.media && C.media.type, O, h), o.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(x.a.icon, x.a.showOnHover)
				})) : o.a.createElement(b.a, {
					name: "expand",
					className: x.a.icon
				})) : C.source && C.source.url ? o.a.createElement(m.b, {
					"aria-label": s.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, x.a.outer),
					"data-click-id": "expando_open",
					href: C.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: c ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(x.a.icon, x.a.outboundLinkIcon)
				})) : o.a.createElement(i.a, {
					"aria-label": s.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, x.a.outer),
					"data-click-id": "expando_open",
					to: Object(l.a)(C.permalink),
					rel: "nofollow",
					onClick: y
				}, o.a.createElement(b.a, {
					name: "text_post",
					className: x.a.icon
				}))
			})
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/config.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Footer/index.m.less"),
				d = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = r.a.div("FooterContainer", d.a), m = r.a.div("UserAgreement", d.a), u = r.a.a("UserAgreementLink", d.a), p = r.a.a("PrivacyLink", d.a);
			t.a = () => a.a.createElement(c, null, a.a.createElement(m, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", a.a.createElement(u, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "2srkM2"
			}))), l._param("=Privacy Policy", a.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy", null, {
				hk: "2nBcYA"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "335pdO"
			})))
		},
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/uuid/v4.js"),
				i = n.n(r),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/Button/index.tsx");
			var c, m = n("./node_modules/p-debounce/index.js"),
				u = n.n(m),
				p = n("./src/lib/hooks/useOnClickOutside.ts"),
				b = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/lib/makeGqlRequest/index.ts"),
				g = n("./src/lib/sentry/index.ts"),
				f = n("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(c || (c = {}));
			const E = (e, t) => async n => {
				let s;
				try {
					s = await async function(e, t) {
						return Object(h.a)(e, {
							...f,
							variables: t
						})
					}(e(), {
						query: n,
						sessionId: t
					})
				} catch (a) {
					return g.c.captureException(a), []
				}
				return s.body.data.geoPlaceAutocomplete || []
			};
			var x = n("./src/reddit/hooks/useGqlContext.ts"),
				v = n("./src/reddit/icons/svgs/Location/index.tsx"),
				_ = n("./src/reddit/components/GeoForm/index.m.less"),
				C = n.n(_);

			function k(e) {
				const {
					value: t,
					setValue: n,
					setPlace: r,
					disabled: i,
					onFocus: l,
					sessionId: c,
					className: m
				} = e, p = Object(x.a)(), [h, g] = Object(a.useState)(!1), f = function(e, t, n) {
					const [s, o] = Object(a.useState)([]), r = Object(a.useMemo)(() => u()(n, 300), [n]);
					return Object(a.useEffect)(() => {
						e && t && r(e).then(e => {
							o(e)
						}).catch(() => o([]))
					}, [e]), s
				}(t, h, E(p, c)), {
					highlightValue: _,
					selectedIndex: k,
					onKeyDown: O,
					isClosed: S,
					setClosed: j
				} = function(e, t, n) {
					const [s, o] = Object(a.useState)(-1), [r, i] = Object(a.useState)(!!e.length), [d, l] = Object(a.useState)(void 0);
					return {
						highlightValue: d,
						selectedIndex: s,
						onKeyDown: a => {
							if (a.key === b.b.ArrowDown) {
								const t = Math.min(s + 1, e.length - 1);
								o(t), l(e[t])
							} else if (a.key === b.b.ArrowUp) {
								const t = Math.max(s - 1, -1);
								o(t), l(e[t])
							} else a.key === b.b.Enter && s > -1 ? (o(-1), t(e[s].name), n(e[s]), i(!0), a.preventDefault()) : a.key === b.b.Escape ? (o(-1), i(!0)) : l(void 0)
						},
						isClosed: r,
						setClosed: i
					}
				}(f, n, r), N = `location-input-${c}`;
				return o.a.createElement("div", {
					className: C.a.autocompleteInput
				}, o.a.createElement("label", {
					className: C.a.geoLabel,
					htmlFor: N
				}, o.a.createElement(v.a, {
					className: C.a.locationIcon
				})), o.a.createElement("input", {
					className: Object(d.a)(C.a.geoInput, m),
					name: N,
					disabled: i,
					onKeyDown: O,
					value: _ && _.name || t,
					placeholder: s.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						n(e.currentTarget.value), r(void 0), j(!1)
					},
					onFocus: () => {
						g(!0), l()
					},
					onBlur: () => g(!1)
				}), f.length && !S ? o.a.createElement(y, {
					id: c,
					items: f.map(e => e.name),
					selectedIndex: k,
					selectValue: e => {
						n(f[e].name), r(f[e]), j(!0)
					},
					onClickOutside: () => j(!0)
				}) : null)
			}

			function y(e) {
				const {
					id: t,
					items: n,
					selectedIndex: s,
					selectValue: a,
					onClickOutside: r
				} = e;
				return Object(p.a)(`autocomplete-dropdown-${t}`, r), o.a.createElement("ul", {
					className: C.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, n.map((e, t) => o.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => a(t),
					className: Object(d.a)({
						[C.a.highlight]: t === s
					})
				}, e)))
			}
			const O = () => {};

			function S(e) {
				const {
					className: t,
					initialValue: n,
					initialPlace: r,
					disabled: c = !1,
					onFocus: m = O,
					onPlace: u = O,
					onValue: p = O,
					inputClassName: b
				} = e, h = function() {
					const [e, t] = Object(a.useState)(!1);
					return Object(a.useEffect)(() => t(!0), []), e
				}(), [g] = Object(a.useState)(() => i()()), [f, E] = Object(a.useState)(n || ""), [x, v] = Object(a.useState)(r);
				return h ? o.a.createElement("form", {
					className: Object(d.a)(C.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == r ? void 0 : r.id) !== (null == x ? void 0 : x.id) && e.onSubmit({
							name: f,
							place: x,
							sessionId: g
						})
					}
				}, o.a.createElement(k, {
					className: b,
					value: f,
					sessionId: g,
					setValue: e => {
						E(e), p(e)
					},
					setPlace: e => {
						v(e), u(e)
					},
					disabled: c,
					onFocus: m
				}), x && x.id !== (null == r ? void 0 : r.id) && o.a.createElement(l.o, {
					className: C.a.submitButton,
					type: "submit",
					disabled: c
				}, s.fbt._("Submit", null, {
					hk: "4aU3dh"
				}))) : null
			}
		},
		"./src/reddit/components/GeoForm/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GrantUserFlair/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GrantUserFlair/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/find.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/omitKey/index.ts"),
				p = n("./src/lib/stripQueryParams/index.ts"),
				b = n("./src/reddit/actions/grantUserFlair/index.ts"),
				h = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				g = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = n("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				E = n("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				x = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				v = n("./src/lib/classNames/index.ts"),
				_ = n("./src/reddit/components/SaveIndicator/index.m.less"),
				C = n.n(_),
				k = n("./src/reddit/icons/svgs/CheckmarkFitted/index.tsx"),
				y = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				O = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				S = n("./src/reddit/models/ApiRequestState/index.ts");
			const j = {
				[S.a.Pending]: () => a.fbt._("Saving", null, {
					hk: "3r9uZO"
				}),
				[S.a.Complete]: () => a.fbt._("Saved", null, {
					hk: "e9tAk"
				}),
				[S.a.Failed]: () => a.fbt._("Save error", null, {
					hk: "3NFi3S"
				})
			};
			var N = e => d.a.createElement(d.a.Fragment, null, e.status === S.a.Pending && d.a.createElement(O.a, {
					className: Object(v.a)(C.a.icon, C.a.pendingIcon)
				}), e.status === S.a.Complete && d.a.createElement(k.a, {
					className: Object(v.a)(C.a.icon, C.a.savedIcon)
				}), e.status === S.a.Failed && d.a.createElement(y.a, {
					className: Object(v.a)(C.a.icon, C.a.saveErrorIcon)
				}), d.a.createElement("span", {
					className: C.a.caption
				}, j[e.status]())),
				w = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				I = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				T = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				M = n("./src/reddit/components/TrackingHelper/index.tsx"),
				P = n("./src/reddit/constants/colors.ts"),
				R = n("./src/reddit/contexts/PageLayer/index.tsx"),
				A = n("./src/reddit/helpers/flair.ts"),
				F = n("./src/reddit/selectors/telemetry.ts");
			const D = e => ({
					subreddit: F.gb(e),
					profile: F.Q(e),
					userSubreddit: F.qb(e)
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
				z = (e, t) => n => ({
					source: "grant_user_flair",
					action: "autosave",
					noun: e,
					actionInfo: {
						...F.d(n),
						settingValue: t
					},
					...D(n)
				}),
				V = () => z("flair_text"),
				q = e => z("flair_template", e || "none"),
				G = e => z("css_class", e);
			var K = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Q = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Y = n("./src/reddit/icons/svgs/User/index.tsx"),
				X = n("./src/reddit/models/SubredditModeration/index.ts");
			const Z = [];
			var J = n("./src/reddit/selectors/meta.ts"),
				$ = n("./src/reddit/selectors/userFlair.ts"),
				ee = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				te = n("./src/reddit/components/GrantUserFlair/index.m.less"),
				ne = n.n(te);
			var se = () => d.a.createElement("div", {
					className: ne.a.emptyList
				}, d.a.createElement(ee.a, {
					className: ne.a.flairIcon
				}), d.a.createElement("div", {
					className: ne.a.mainText
				}, a.fbt._("You do not have any users with user flair", null, {
					hk: "4D1S5Z"
				})), d.a.createElement("div", null, a.fbt._("Search for a user to assign a user flair", null, {
					hk: "2YaDOy"
				}))),
				ae = n("./node_modules/lodash/filter.js"),
				oe = n.n(ae),
				re = n("./node_modules/lodash/isEqual.js"),
				ie = n.n(re),
				de = n("./node_modules/lodash/omit.js"),
				le = n.n(de),
				ce = n("./src/reddit/constants/flair.ts"),
				me = n("./src/reddit/helpers/validateFlairCssClass.ts");
			const ue = 200;
			var pe;
			! function(e) {
				e[e.Save = 0] = "Save", e[e.Delete = 1] = "Delete"
			}(pe || (pe = {}));
			const be = e => null === e.flair,
				he = e => !(!e.apiError && !e.clientValidationError),
				ge = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const n = Date.now();
					return oe()(e, e => {
						if (!e || e.clientValidationError) return !1;
						if (e.apiError && !t) return !1;
						if (be(e)) return !0;
						return n - e.changedAt > 2e3 || t
					})
				},
				fe = (e, t, n) => {
					const s = Object.keys(e).filter(s => {
						const a = e[s],
							o = t[s] || null;
						return !(!!o || s === n || !he(a)) || !!ie()(o, a.flair)
					});
					return s.length ? le()(e, s) : e
				},
				Ee = (e, t) => {
					const n = t || ce.a;
					return (e ? Object(A.m)(e, n) || Object(me.a)(e.cssClass || "") : "") || void 0
				};
			var xe = n("./node_modules/lodash/noop.js"),
				ve = n.n(xe),
				_e = n("./src/reddit/components/Flair/index.tsx"),
				Ce = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				ke = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				ye = n("./src/reddit/controls/InternalLink/index.tsx"),
				Oe = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Se = n("./src/reddit/models/Flair/index.ts"),
				je = n("./src/higherOrderComponents/asTooltip.tsx"),
				Ne = n("./src/reddit/actions/tooltip.ts"),
				we = n("./src/reddit/constants/keycodes.ts"),
				Ie = n("./src/reddit/controls/Dropdown/index.tsx"),
				Te = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				Me = n("./src/reddit/selectors/tooltip.ts");
			const Pe = e => `UserFlairPicker--${e}`,
				Re = Object(je.a)(Ie.a),
				Ae = e => {
					let {
						flair: t
					} = e;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(_e.b, {
						flair: Object(A.c)(t),
						forceSmallEmojis: !0
					}), t.textEditable && d.a.createElement(Y.a, {
						className: ne.a.userIcon
					}), t.modOnly && d.a.createElement(K.a, {
						className: ne.a.modIcon
					}))
				},
				Fe = Object(c.c)({
					isDropdownOpen: (e, t) => Object(Me.b)(Pe(t.userName))(e)
				});
			class De extends d.a.Component {
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
						if (e.keyCode === we.a.ArrowDown)
							if (e.preventDefault(), this.props.isDropdownOpen) {
								const e = this.findNextFocusableItem();
								if (void 0 !== e) {
									const t = document.getElementById(`focus-${e}`);
									t && (t.focus(), t.scrollIntoView({
										block: "nearest"
									})), this.onSetFocus(e)
								}
							} else this.props.onToggleDropdown();
						if (e.keyCode === we.a.ArrowUp) {
							e.preventDefault();
							const t = this.findPreviousFocusableItem();
							if (void 0 !== t) {
								const e = document.getElementById(`focus-${t}`);
								e && (e.focus(), e.scrollIntoView({
									block: "nearest"
								})), this.onSetFocus(t)
							}
						}
						if (e.keyCode === we.a.Tab && this.props.isDropdownOpen && e.preventDefault(), e.keyCode === we.a.Enter) {
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
					return d.a.createElement("button", {
						className: ne.a.dropdownTarget,
						id: Pe(e.userName),
						onClick: e.onToggleDropdown,
						onKeyDown: this.onKeyDown
					}, e.selectedTemplateId && e.userFlairTemplates[e.selectedTemplateId] ? d.a.createElement(Ae, {
						flair: e.userFlairTemplates[e.selectedTemplateId]
					}) : a.fbt._("none", null, {
						hk: "ng6B"
					}), d.a.createElement(Te.a, {
						className: ne.a.dropdownTriangle
					}), d.a.createElement(Re, {
						className: ne.a.dropdownContainer,
						isOpen: e.isDropdownOpen,
						tooltipId: Pe(e.userName)
					}, d.a.createElement("button", {
						className: ne.a.dropdownRow,
						id: "focus--1",
						onClick: () => e.onSelectFlairTemplate(void 0),
						onMouseEnter: () => this.onMouseEnter(-1),
						tabIndex: -1
					}, a.fbt._("none", null, {
						hk: "ng6B"
					})), e.templateIds.map((t, n) => {
						const s = e.userFlairTemplates[t];
						return d.a.createElement("button", {
							className: ne.a.dropdownRow,
							id: `focus-${n}`,
							key: t,
							onClick: () => e.onSelectFlairTemplate(t),
							onMouseEnter: () => this.onMouseEnter(n),
							tabIndex: -1
						}, d.a.createElement(Ae, {
							flair: s
						}))
					})))
				}
			}
			var Le = Object(l.b)(Fe, (e, t) => ({
				onToggleDropdown: () => e(Object(Ne.h)({
					tooltipId: Pe(t.userName)
				}))
			}))(De);
			const Ue = e => `emoji-picker-${e}`,
				Be = Object(A.b)();
			class He extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.onSelectFlairTemplate = e => {
						const t = e && this.props.userFlairTemplates[e],
							n = t ? Object(A.c)(t) : Be;
						this.props.onChange(this.props.username, n)
					}, this.onFlairContentChanged = e => {
						this.props.onChange(this.props.username, e)
					}, this.onChangeCssClass = e => {
						const t = e.target.value,
							n = this.props.flair || Be;
						this.props.onChange(this.props.username, {
							...n,
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
					} = e, n = e.flair || Be, s = Object(Ce.a)(), a = n.templateId, o = a && e.userFlairTemplates[a] || ce.a, r = !!o && o.modOnly, i = !Object(me.a)(n.cssClass || "");
					return d.a.createElement("div", {
						className: Object(v.a)(ne.a.row, t ? ne.a.hasError : null)
					}, d.a.createElement("div", {
						className: ne.a.errorIndicator
					}, d.a.createElement(y.a, null)), d.a.createElement(ye.a, {
						className: ne.a.userLink,
						to: `/user/${e.username}`
					}, d.a.createElement(ke.a, {
						user: e.username,
						tooltipId: `grantuserflair--userhovercard--${e.username}`,
						subredditId: e.subredditId,
						sendHoverCardEvent: ve.a
					}, e.username, d.a.createElement("div", {
						className: ne.a.flairContainer
					}, d.a.createElement(_e.b, {
						flair: n
					})))), d.a.createElement("div", {
						className: ne.a.flairDetails
					}, d.a.createElement("div", {
						className: ne.a.column
					}, d.a.createElement(Le, {
						onSelectFlairTemplate: this.onSelectFlairTemplate,
						selectedTemplateId: a,
						templateIds: e.templateIds,
						userFlairTemplates: e.userFlairTemplates,
						userName: this.props.username
					})), d.a.createElement("div", {
						className: ne.a.flairEditColumn
					}, d.a.createElement(s, {
						allowBlank: !e.isChanged,
						emojiPickerId: Ue(e.username),
						flair: n,
						flairTemplateType: Se.d.UserFlair,
						flairTemplate: o,
						helperTextClass: ne.a.flairEditHelperText,
						isCompact: !0,
						isFlairModOnly: r,
						onChange: this.onFlairContentChanged,
						subredditId: e.subredditId
					})), d.a.createElement("div", {
						className: ne.a.column
					}, d.a.createElement("input", {
						className: Object(v.a)(ne.a.textInput, {
							[ne.a.cssInputError]: !i
						}),
						value: n.cssClass || "",
						onChange: this.onChangeCssClass,
						disabled: !!o.id
					})), d.a.createElement("button", {
						className: ne.a.removeButton,
						onClick: this.removeFlair
					}, d.a.createElement(Oe.a, {
						className: ne.a.removeIcon
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
						const n = Object(X.e)(t.subredditId, t.after, t.before);
						return e.pages.modHub.flairedUsers.userOrder[n] || Z
					},
					flairedUsers: (e, t) => e.pages.modHub.flairedUsers.models[t.subredditId],
					isFlairedUsersListPending: e => e.pages.modHub.flairedUsers.api.pending,
					isSearchPending: e => e.pages.modHub.flairedUsers.search.api.pending,
					isUserFlairEnabled: $.a,
					origin: J.j,
					pageInfo: (e, t) => {
						const n = Object(X.e)(t.subredditId, t.after, t.before);
						return e.pages.modHub.flairedUsers.pageInfo[n]
					},
					searchResult: (e, t) => e.pages.modHub.flairedUsers.search.result,
					userFlairData: $.d
				}),
				Ge = Object(l.b)(qe, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						deleteUserFlair: (t, n) => e(Object(b.a)(t, n)),
						saveFlairedUser: (t, s) => e(Object(b.d)(t, n, s)),
						searchFlairedUser: t => e(Object(b.e)(n, t))
					}
				});
			class Ke extends d.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.isUnmounted = !1, this.pendingRequestsMap = new Map, this.autoSaveIntervalId = 0, this.processChanges = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						t.autoSaveIntervalId || (t.autoSaveIntervalId = window.setInterval(t.processChanges, ue));
						const {
							flairedUsers: n
						} = t.props, {
							unsavedChanges: s,
							searchTerm: a
						} = t.state, o = fe(s, n, a), r = ge(o, e);
						r.forEach(t.sendChangeToServer), o !== s && t.setState({
							unsavedChanges: o
						})
					}, this.sendChangeToServer = async e => {
						const t = e.username;
						if (this.pendingRequestsMap.get(t)) return;
						const n = this.props.flairedUsers[t] || null;
						this.sendTelemetryEvents(n, e.flair);
						const s = e.flair ? {
							type: pe.Save,
							promise: this.props.saveFlairedUser(t, e.flair)
						} : {
							type: pe.Delete,
							promise: this.props.deleteUserFlair(t, this.props.subredditId)
						};
						this.pendingRequestsMap.set(t, s);
						const a = await s.promise;
						this.pendingRequestsMap.delete(t), this.isUnmounted || this.setState(n => {
							const s = n.unsavedChanges[t];
							return e !== s ? null : {
								unsavedChanges: !0 === a ? Object(u.a)(n.unsavedChanges, t) : {
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
							templates: n
						} = this.props.userFlairData, s = t && t.templateId ? n[t.templateId] : void 0;
						this.setState(n => {
							return {
								unsavedChanges: {
									...n.unsavedChanges,
									[e]: {
										flair: t,
										username: e,
										changedAt: Date.now(),
										clientValidationError: Ee(t, s)
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
							props: n
						} = this, s = n.flairedUsers[e] || null, a = t.unsavedChanges[e], o = a && !be(a) ? a.flair : s;
						return d.a.createElement(We, {
							flair: o,
							hasError: !!a && he(a),
							isChanged: !!a,
							key: e,
							onChange: this.onFlairChanged,
							subredditId: n.subredditId,
							templateIds: n.userFlairData.templateIds,
							userFlairTemplates: n.userFlairData.templates,
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
					let n = e || Object(A.b)();
					const s = n.templateId || void 0,
						a = t.templateId || void 0;
					if (a !== s) {
						this.props.sendEvent(q(a));
						const e = t.templateId && this.props.userFlairData.templates[t.templateId];
						n = e ? Object(A.c)(e) : n
					}
					Object(A.p)(t, n) || this.props.sendEvent(V()), t.cssClass !== n.cssClass && this.props.sendEvent(G(t.cssClass || ""))
				}
				getIndicatorStatus() {
					const {
						unsavedChanges: e
					} = this.state;
					if (e === ze) return null;
					const t = !!r()(e, e => he(e));
					return !!r()(e, e => !he(e)) ? S.a.Pending : t ? S.a.Failed : S.a.Complete
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = this.getIndicatorStatus(), o = e.pageInfo && (e.pageInfo.hasNextPage || e.pageInfo.hasPreviousPage), r = !e.flairedUserOrder.length && !o;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(x.c, {
						className: ne.a.topBar
					}, null !== n && d.a.createElement(N, {
						status: n
					})), d.a.createElement(x.a, null, d.a.createElement(x.b, null, a.fbt._("Grant user flair", null, {
						hk: "N1r42"
					}), d.a.createElement(g.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360028091332`
					})), !e.isUserFlairEnabled && d.a.createElement(h.a, {
						className: ne.a.disabledBanner,
						color: P.a.quarantine,
						icon: d.a.createElement(Q.a, {
							className: ne.a.warningIcon
						}),
						title: a.fbt._("User flair has been disabled for this community", null, {
							hk: "3BBvFe"
						}),
						subtitle: a.fbt._("User flair will not be displayed in posts or comments", null, {
							hk: "3E4WaA"
						})
					}), d.a.createElement(I.b, {
						activeSearchQuery: t.searchTerm,
						onSearch: this.onSearch
					}, e.pageInfo && !t.searchTerm && d.a.createElement(E.a, {
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
					})), d.a.createElement("div", {
						className: ne.a.titleRow
					}, a.fbt._("Username with preview", null, {
						hk: "1RFjbI"
					}), d.a.createElement("div", {
						className: ne.a.flairDetails
					}, d.a.createElement("div", {
						className: ne.a.column
					}, a.fbt._("Flair template", null, {
						hk: "18cQfH"
					}), d.a.createElement(f.a, {
						className: ne.a.infoTooltip
					}, d.a.createElement("div", {
						className: ne.a.tooltipText
					}, a.fbt._("Flair templates determine the flair's background colors, text colors, and permissions", null, {
						hk: "4y58Eg"
					})), d.a.createElement("div", {
						className: ne.a.tooltipIconContainer
					}, d.a.createElement("div", {
						className: ne.a.tooltipIconRow
					}, d.a.createElement(K.a, {
						className: ne.a.modIcon
					}), d.a.createElement("span", {
						className: ne.a.tooltipIconText
					}, a.fbt._("Available only to mods", null, {
						hk: "2s7Gci"
					}))), d.a.createElement("div", {
						className: ne.a.tooltipIconRow
					}, d.a.createElement(Y.a, {
						className: ne.a.userIcon
					}), d.a.createElement("span", {
						className: ne.a.tooltipIconText
					}, a.fbt._("User editable", null, {
						hk: "3tIGRy"
					})))))), d.a.createElement("div", {
						className: ne.a.flairEditColumn
					}, a.fbt._("Flair text", null, {
						hk: "2ab8Up"
					}), d.a.createElement(f.a, {
						text: a.fbt._("Changes the text and emojis within the user flair", null, {
							hk: "4dBW4C"
						})
					})), d.a.createElement("div", {
						className: ne.a.column
					}, a.fbt._("Css class", null, {
						hk: "1TNNcJ"
					}), d.a.createElement(f.a, {
						text: a.fbt._("CSS classes determine styling for flair in old Reddit", null, {
							hk: "j4AU"
						})
					})))), t.searchTerm ? d.a.createElement(w.a, {
						cancelSearch: this.onCancelSearch,
						noResultsFound: !e.searchResult,
						searchTerm: t.searchTerm,
						searchPending: e.isSearchPending
					}, e.searchResult && this.renderUserRow(e.searchResult)) : e.isFlairedUsersListPending ? d.a.createElement(T.a, null) : r ? d.a.createElement(se, null) : e.flairedUserOrder.map(this.renderUserRow), e.pageInfo && !t.searchTerm && d.a.createElement("div", {
						className: ne.a.bottomBarRow
					}, d.a.createElement(E.a, {
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
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = n.n(r),
				d = n("./src/lib/lessComponent.tsx");
			const l = d.a.div("IconWrapper", i.a),
				c = d.a.div("TextWrapper", i.a);

			function m(e) {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: r,
					title: d,
					textWrapperClassName: m
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(t, i.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, a.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? a.a.createElement(l, null, s) : a.a.createElement(l, null), a.a.createElement(c, {
					className: m
				}, a.a.createElement("div", {
					className: i.a.title
				}, d), r && a.a.createElement("div", {
					className: i.a.subtitle
				}, r)))
			}
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, n) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/EmptyState/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_12gWQ2C_gotA8s5-CJIlq9",
				icon: "_3-Fcrds7R5ihAWPAttv3AL",
				title: "_1vL1j4mpTYI5NOR335bInG",
				subtitle: "_3FOOtAw2Q-T7szrSBAbo9i"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/TabBar/index.m.less": function(e, t, n) {
			e.exports = {
				tabBar: "_1ItRVjBpP4aLG0vg-nXbwO",
				tab: "_3A18ggmDWAI5_Fz0nDOs-z",
				selected: "_3U85C8qDDoOUoOINg-E_3S"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/BadgesAndEmotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return W
			})), n.d(t, "b", (function() {
				return z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/governance/errorToast.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				c = n("./src/reddit/contexts/ApiContext.tsx"),
				m = n("./src/reddit/endpoints/economics/uploadedAssets.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				h = n("./src/reddit/components/ModHub/BadgesAndEmotes/EmptyState/index.m.less"),
				g = n.n(h);
			const f = {
				[m.a.Uploaded]: {
					title: () => s.fbt._("No more to review!", null, {
						hk: "2rF58X"
					}),
					subtitle: () => s.fbt._("There are no new submissions", null, {
						hk: "3h54Ot"
					})
				},
				[m.a.Approved]: {
					title: () => s.fbt._("Nothing approved yet", null, {
						hk: "157fUO"
					}),
					subtitle: () => s.fbt._("Submissions will be here once you approve them", null, {
						hk: "pLc2c"
					})
				},
				[m.a.Rejected]: {
					title: () => s.fbt._("Nothing rejected yet", null, {
						hk: "1XN9kw"
					}),
					subtitle: () => s.fbt._("Submissions will be here once you reject them", null, {
						hk: "2IYFHB"
					})
				}
			};

			function E(e) {
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
			var x = n("./src/reddit/components/AuthorLink/index.tsx"),
				v = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				_ = n("./src/reddit/components/ModHub/BadgesAndEmotes/index.m.less"),
				C = n.n(_);
			const k = p.a.div("cell", C.a),
				y = () => [{
					displayText: s.fbt._("New", null, {
						hk: "2xTBYx"
					}),
					value: m.a.Uploaded
				}, {
					displayText: s.fbt._("Approved", null, {
						hk: "1xx5DL"
					}),
					value: m.a.Approved
				}, {
					displayText: s.fbt._("Rejected", null, {
						hk: "25TTJE"
					}),
					value: m.a.Rejected
				}],
				O = () => y().slice(1, 3),
				S = new Intl.DateTimeFormat(void 0, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).format;

			function j(e) {
				const {
					item: t,
					onItemAction: n
				} = e, a = y().find(e => e.value === t.status);
				let r = t.type === m.b.Badge ? t.extra.description : void 0;
				return r && r.endsWith(" u/" + t.uploader) && (r = r.slice(0, r.length - t.uploader.length - 3)), o.a.createElement(o.a.Fragment, null, o.a.createElement(k, {
					className: C.a.imageCell
				}, o.a.createElement("div", {
					className: C.a.image,
					style: {
						backgroundImage: `url(${t.url})`
					}
				})), o.a.createElement(k, {
					className: C.a.nameCell
				}, o.a.createElement("div", {
					className: C.a.title
				}, t.type === m.b.Emote ? `:${t.name}:` : t.name), o.a.createElement("div", {
					className: C.a.caption
				}, r, " ", o.a.createElement(x.a, {
					author: t.uploader,
					style: {
						color: t.type === m.b.Badge ? t.extra.color : void 0
					}
				}, "u/", t.uploader))), o.a.createElement(k, {
					className: C.a.timeCell
				}, S(t.createdAt)), o.a.createElement(k, {
					className: C.a.actionCell
				}, o.a.createElement(v.a, {
					className: C.a.dropdownSelector,
					displayText: a ? a.displayText : "",
					options: O(),
					onSelect: e => n(t, e.value),
					isCompactStyle: !0
				}), t.status !== m.a.Uploaded && !!t.moderator && !!t.modifiedAt && o.a.createElement("div", {
					className: C.a.byModerator
				}, s.fbt._("by u/ {moderator}, {time-modified}", [s.fbt._param("moderator", t.moderator), s.fbt._param("time-modified", S(t.modifiedAt))], {
					hk: "25I5ES"
				}))), o.a.createElement("div", {
					className: C.a.line
				}))
			}
			var N = n("./src/lib/classNames/index.ts");
			const w = p.a.div("cell", C.a),
				I = () => o.a.createElement(o.a.Fragment, null, o.a.createElement(w, {
					className: C.a.imageCell
				}, o.a.createElement("div", {
					className: Object(N.a)(C.a.image, C.a.imagePlaceholder)
				})), o.a.createElement(w, {
					className: C.a.nameCell
				}, o.a.createElement("div", {
					className: C.a.loadingTextLong
				})), o.a.createElement(w, null, o.a.createElement("div", {
					className: C.a.loadingTextShort
				})), o.a.createElement(w, {
					className: C.a.actionCell
				}, o.a.createElement("div", {
					className: C.a.loadingTextShort
				})), o.a.createElement("div", {
					className: C.a.line
				}));
			var T = () => o.a.createElement(o.a.Fragment, null, o.a.createElement(I, null), o.a.createElement(I, null), o.a.createElement(I, null), o.a.createElement(I, null));
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), P = p.a.div("header", C.a);

			function R(e) {
				const {
					onAssetAction: t,
					assets: n,
					selectedStatus: s
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: C.a.grid
				}, o.a.createElement(P, null, M._("Image", null, {
					hk: "3ImlXy"
				})), o.a.createElement(P, null, M._("Name and Description", null, {
					hk: "ZMWPH"
				})), o.a.createElement(P, null, M._("Submission Time", null, {
					hk: "3qPqQa"
				})), o.a.createElement(P, {
					className: C.a.actionHeader
				}, M._("Action", null, {
					hk: "27SYzP"
				})), !n && o.a.createElement(T, null), n && !!n.length && n.map(e => o.a.createElement(j, {
					item: e,
					key: e.name,
					onItemAction: t
				}))), n && !n.length && o.a.createElement(E, {
					selectedStatus: s
				}))
			}
			var A = n("./src/reddit/components/ModHub/BadgesAndEmotes/TabBar/index.m.less"),
				F = n.n(A);
			const D = e => o.a.createElement("button", {
					className: Object(N.a)(F.a.tab, {
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
							return s.fbt._("Uploaded", null, {
								hk: "1AgqhR"
							});
						case m.a.Approved:
							return s.fbt._("Approved", null, {
								hk: "37lIL9"
							});
						case m.a.Rejected:
							return s.fbt._("Rejected", null, {
								hk: "W16pI"
							});
						default:
							return s.fbt._("Uploaded", null, {
								hk: "1AgqhR"
							})
					}
				})(t))));

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
						const n = this.props.assetType,
							s = await Object(m.d)(this.props.apiContext(), this.props.subredditId, n, e.id, {
								status: t
							});
						if (s.ok) {
							const s = this.state.assets;
							this.setState({
								assets: s && s.filter(t => t !== e)
							}), t === m.a.Approved ? this.props.onApproved(n) : t === m.a.Rejected && this.props.onRejected(n)
						} else this.props.onGovernanceError(s.error)
					}
				}
				componentDidMount() {
					this.onTabChange(this.state.selectedStatus)
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(l.a, {
						className: C.a.contentContainer
					}, o.a.createElement(l.b, null, this.props.assetType === m.b.Badge ? s.fbt._("User uploaded badges", null, {
						hk: "3qGdzT"
					}) : s.fbt._("User uploaded emotes", null, {
						hk: "1GJiVz"
					})), o.a.createElement("div", {
						className: C.a.content
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
					onApproved: t => e(Object(d.f)({
						kind: u.b.SuccessCommunity,
						text: t === m.b.Badge ? s.fbt._("Approved badge!", null, {
							hk: "3B3r07"
						}) : s.fbt._("Approved emote!", null, {
							hk: "tWzSE"
						})
					})),
					onRejected: t => e(Object(d.f)({
						kind: u.b.SuccessCommunity,
						text: t === m.b.Badge ? s.fbt._("Rejected badge", null, {
							hk: "1X6cSg"
						}) : s.fbt._("Rejected emote", null, {
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
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/ModHub/Content/index.m.less"),
				c = n.n(l);
			t.a = e => {
				const t = Object(o.useContext)(i.a);
				return r.a.createElement("div", {
					className: Object(d.a)(c.a.noPermissions, {
						[c.a.noPermissionsExp]: t
					})
				}, r.a.createElement("img", {
					className: c.a.rememberTheHuman,
					src: `${s.a.assetPath}/img/content-gate-icons/remember-the-human.png`
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
		"./src/reddit/components/ModHub/Content/WelcomeMessage.m.less": function(e, t, n) {
			e.exports = {
				ModerateIcon: "khXWcHNm7cUFKCGgNfNPy",
				moderateIcon: "khXWcHNm7cUFKCGgNfNPy",
				ModHubWelcomeMessage: "_1WUhYUiKwTt20VZZiLFRXQ",
				modHubWelcomeMessage: "_1WUhYUiKwTt20VZZiLFRXQ"
			}
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/Content/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/lib/assertNever.ts"),
				i = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/ApprovedSubmitterList/index.tsx"),
				l = n("./src/reddit/components/BannedUserList/index.tsx"),
				c = n("./src/reddit/components/CommunityAwardList/index.tsx"),
				m = n("./src/reddit/components/CommunitySettings/index.tsx"),
				u = n("./src/reddit/components/GrantUserFlair/index.tsx"),
				p = n("./src/reddit/components/ModerationLog/index.tsx"),
				b = n("./src/reddit/components/ModeratorsList/index.tsx"),
				h = n("./src/reddit/components/ModHub/BadgesAndEmotes/index.tsx"),
				g = n("./src/reddit/components/ModHub/Emojis/index.tsx"),
				f = n("./src/reddit/components/MutedUserList/index.tsx"),
				E = n("./src/reddit/components/PowerupsSettings/index.tsx"),
				x = n("./src/reddit/components/RemovalReasons/index.tsx"),
				v = n("./src/reddit/components/Streaming/ModSettings/index.tsx"),
				_ = n("./src/reddit/components/SubredditContent/EventPostContent/index.tsx"),
				C = n("./src/reddit/components/SubredditContent/PredictionsContent/async.ts"),
				k = n("./src/reddit/components/SubredditContent/ScheduledPostContent/index.tsx"),
				y = n("./src/reddit/components/SubredditRules/index.tsx");
			const O = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-ContentControls",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ModHub-ContentControls").then(n.bind(null, "./src/reddit/components/ModHub/ContentControls/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/ContentControls/index.tsx"
					}
				}),
				S = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-ChatSettings",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ModHub-ChatSettings").then(n.bind(null, "./src/reddit/components/ModHub/ChatSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/ChatSettings/index.tsx"
					}
				}),
				j = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-TrafficStats",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ModHub-TrafficStats").then(n.bind(null, "./src/reddit/components/ModHub/TrafficStats/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/TrafficStats/index.tsx"
					}
				}),
				N = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-flairs-PostFlairManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"), n.e("reddit-components-ModHub-flairs-PostFlairManagement")]).then(n.bind(null, "./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx"
					}
				}),
				w = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-flairs-UserFlairManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"), n.e("reddit-components-ModHub-flairs-UserFlairManagement")]).then(n.bind(null, "./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx"
					}
				}),
				I = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-Wiki-ModHubWikiManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("reddit-components-Wiki-ModHubWikiManagement")]).then(n.bind(null, "./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx"
					}
				}),
				T = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-Content-ModQueue",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ModHub-Content-ModQueue").then(n.bind(null, "./src/reddit/components/ModHub/Content/ModQueue.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/Content/ModQueue.tsx"
					}
				}),
				M = e => {
					const {
						layout: t,
						pageName: n,
						postTypeFilter: s,
						subpageName: a,
						...M
					} = e, P = {
						...M,
						subredditId: e.subreddit.id
					};
					switch (n) {
						case i.fc.Removal:
							return o.a.createElement(x.a, {
								subredditId: e.subreddit.id,
								sendEventWithName: e.sendEventWithName
							});
						case i.fc.Contributors:
							return o.a.createElement(d.a, P);
						case i.fc.Banned:
							return o.a.createElement(l.a, P);
						case i.fc.Streaming:
							return o.a.createElement(v.a, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id
							});
						case i.fc.Muted:
							return o.a.createElement(f.a, P);
						case i.fc.Moderators:
							return o.a.createElement(b.a, P);
						case i.fc.Modlog:
							return o.a.createElement(p.a, P);
						case i.fc.ContentControls:
							return o.a.createElement(O, {
								subredditName: e.subreddit.name
							});
						case i.fc.ChatSettings:
							return o.a.createElement(S, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id
							});
						case i.fc.Flair:
							return o.a.createElement(u.a, {
								after: e.after,
								before: e.before,
								subredditId: e.subreddit.id
							});
						case i.fc.PostFlair:
							return o.a.createElement(N, {
								subredditId: e.subreddit.id
							});
						case i.fc.UserFlair:
							return o.a.createElement(w, {
								subredditId: e.subreddit.id
							});
						case i.fc.Badges:
							return o.a.createElement(h.a, {
								subredditId: e.subreddit.id
							});
						case i.fc.Emotes:
							return o.a.createElement(h.b, {
								subredditId: e.subreddit.id
							});
						case i.fc.SubredditRules:
							return o.a.createElement(y.a, {
								subreddit: e.subreddit
							});
						case i.fc.CommunitySettings:
							return o.a.createElement(m.a, {
								subredditId: e.subreddit.id,
								subpageName: e.subpageName,
								subredditName: e.subreddit.name
							});
						case i.fc.Modqueue:
						case i.fc.Reports:
						case i.fc.Spam:
						case i.fc.Edited:
						case i.fc.Unmoderated:
							return o.a.createElement(T, {
								after: e.after,
								layout: t,
								page: e.page,
								pageName: n,
								postTypeFilter: s,
								sendEventWithName: e.sendEventWithName,
								subredditName: e.subreddit.name
							});
						case i.fc.Awards:
							return o.a.createElement(c.a, {
								subredditOrProfile: e.subreddit,
								subredditOrProfileId: e.subreddit.id,
								moderatorPermissions: e.moderatorPermissions
							});
						case i.fc.Powerups:
							return o.a.createElement(E.a, {
								subredditId: e.subreddit.id
							});
						case i.fc.Emojis:
							return o.a.createElement(g.a, {
								subreddit: e.subreddit
							});
						case i.fc.Wiki:
						case i.fc.WikiContributors:
						case i.fc.WikiBanned:
							return o.a.createElement(I, {
								subreddit: e.subreddit
							});
						case i.fc.Traffic:
							return o.a.createElement(j, {
								subreddit: e.subreddit
							});
						case i.fc.SubredditContent:
							return null;
						case i.fc.ScheduledPostContent:
							return o.a.createElement(k.a, {
								subreddit: e.subreddit
							});
						case i.fc.EventPostContent:
							return o.a.createElement(_.a, {
								subredditName: e.subreddit.name
							});
						case i.fc.Predictions:
							return o.a.createElement(C.a, {
								subreddit: e.subreddit
							});
						default:
							return Object(r.a)(n)
					}
				};
			t.a = M
		},
		"./src/reddit/components/ModHub/Emojis/EmojiUploadModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/Emojis/EmojiUploader/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/Emojis/index.m.less": function(e, t, n) {
			e.exports = {
				alertIcon: "_3x5p0Ujs6EWdeLO8-fVE7v",
				emojisDisabled: "_2H7y73ZptDGSake8tFEj0n",
				labelTitle: "_2R2K1Sz81kscliWYqOq1xU",
				labelDescription: "_1TqFvv__UfmckLHp5llo7q",
				leftForm: "_22aW9zYAhDGH2HdlJ-WWIM",
				modalBody: "_1_UK8ZmVC7e_nkeSs5CGnA",
				modalCloseButton: "_2-arZqA5i-aG-76OM9aj7k",
				modalEnableSection: "_2Wd3qBH4SU1NauwzVOQbVT",
				modalEmojiSizeSection: "_3PsrWxvZyoYyzlCO8-teTE",
				disabledSection: "nviCef6_SvGHUNBJ0PXCH",
				customSizesForm: "YV6F0NfRo0VVVRzgk8aWf",
				emojiSizeBlock: "_1W4FjSOnfJWdtKYBcNtUYO",
				emojiDimensions: "_1_bSuIYPhn5kOylTKydVsO",
				emojiDimensionInput: "e4AoJYmrnNFhWAXR_KBWX",
				sizeLimitText: "_3bUpAXL4dOTbZTUE9bJ_5s",
				sizeLimitTextWarning: "_2JlgfupPT3v8ScLuT7NYXC",
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
		"./src/reddit/components/ModHub/Emojis/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/map.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/emoji.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				g = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = n("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				E = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				x = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/constants/colors.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/selectors/telemetry.ts");
			const y = e => ({
					subreddit: k.gb(e),
					profile: k.Q(e),
					userSubreddit: k.qb(e)
				}),
				O = (e, t) => n => ({
					source: "emoji",
					action: "toggle",
					noun: e,
					actionInfo: {
						settingValue: t ? "on" : "off"
					},
					...y(n)
				}),
				S = e => t => ({
					source: "emoji",
					action: "click",
					noun: e,
					...y(t)
				}),
				j = (e, t) => n => ({
					source: "emoji",
					action: "click",
					noun: e,
					actionInfo: k.d(n, {
						count: t
					}),
					...y(n)
				});
			var N = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				w = n("./src/reddit/selectors/activeModalId.ts"),
				I = n("./src/reddit/selectors/emojis.ts"),
				T = n("./src/reddit/components/ModHub/Emojis/index.m.less"),
				M = n.n(T),
				P = n("./src/reddit/controls/ImageDisplay/index.tsx"),
				R = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				A = n("./src/reddit/layout/row/Inline/index.tsx");
			const F = m.a.span("appears", M.a),
				D = m.a.span("buttonWrapper", M.a),
				L = m.a.span("displayWrapper", M.a),
				U = m.a.wrapped(P.a, "emojiDisplay", M.a),
				B = m.a.span("emojiName", M.a),
				H = m.a.span("permissions", M.a),
				W = m.a.wrapped(A.a, "row", M.a),
				z = m.a.wrapped(R.b, "trashIcon", M.a);
			var V = e => d.a.createElement(W, null, d.a.createElement(L, null, d.a.createElement(U, {
					backgroundImage: e.emoji.url
				})), d.a.createElement(B, null, e.emoji.name), d.a.createElement(F, null, ((e, t) => e && t ? a.fbt._("Post flair, user flair", null, {
					hk: "gLvKb"
				}) : e ? a.fbt._("Post flair", null, {
					hk: "dcIoz"
				}) : t ? a.fbt._("User flair", null, {
					hk: "4fQagx"
				}) : "")(e.emoji.postFlairAllowed, e.emoji.userFlairAllowed)), d.a.createElement(H, null, e.emoji.modFlairOnly && a.fbt._("Mod only", null, {
					hk: "NMZoE"
				})), d.a.createElement(D, null, d.a.createElement(C.r, {
					className: e.isSnoomoji ? M.a.editSnoomoji : M.a.editEmoji,
					onClick: () => e.onEdit(e.emoji, e.isSnoomoji)
				}, a.fbt._("Edit", null, {
					hk: "1nftDt"
				})), !e.isSnoomoji && d.a.createElement("button", {
					onClick: () => e.onRemove(e.emoji.name)
				}, d.a.createElement(z, null)))),
				q = n("./node_modules/lodash/clamp.js"),
				G = n.n(q),
				K = n("./src/higherOrderComponents/asModal/index.tsx"),
				Q = n("./src/lib/classNames/index.ts"),
				Y = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				X = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				Z = n("./src/reddit/controls/TextButton/index.tsx"),
				J = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				$ = n("./src/reddit/selectors/subreddit.ts"),
				ee = n("./src/reddit/controls/ToggleSwitch/index.tsx");
			const te = m.a.span("labelDescription", M.a),
				ne = m.a.span("labelTitle", M.a),
				se = m.a.div("leftForm", M.a),
				ae = m.a.div("rightForm", M.a),
				oe = m.a.wrapped(ee.a, "toggleSwitch", M.a);
			var re = e => d.a.createElement("div", {
				className: e.className
			}, d.a.createElement(se, null, d.a.createElement(ne, null, a.fbt._("{title}", [a.fbt._param("title", e.title)], {
				hk: "4bYhaP"
			})), d.a.createElement(te, null, a.fbt._("{description}", [a.fbt._param("description", e.description)], {
				hk: "1lFxbr"
			}))), d.a.createElement(ae, null, d.a.createElement(oe, {
				on: e.on,
				onToggle: e.onToggle
			})));
			const ie = 40,
				de = 16,
				le = {
					width: 32,
					height: 32
				},
				ce = e => {
					const t = parseInt(e, 10) || 0;
					return G()(t, 1, ie)
				},
				me = m.a.wrapped(X.c, "emojiDimensionInput", M.a),
				ue = m.a.span("emojiDimensions", M.a),
				pe = m.a.span("emojiSizeBlock", M.a),
				be = m.a.wrapped(re, "modalEnableSection", M.a),
				he = m.a.wrapped(Y.e, "modalBody", M.a),
				ge = m.a.wrapped(Y.a, "modalCancelButton", M.a),
				fe = m.a.wrapped(Z.a, "modalCloseButton", M.a),
				Ee = m.a.wrapped(Y.g, "modalFooter", M.a),
				xe = m.a.wrapped(C.l, "modalSubmitButton", M.a),
				ve = Object(c.c)({
					emojisCustomSize: (e, t) => Object($.u)(e, {
						subredditName: t.subreddit.name
					}).emojisCustomSize,
					isEmojisEnabled: (e, t) => Object($.u)(e, {
						subredditName: t.subreddit.name
					}).emojisEnabled
				}),
				_e = Object(l.b)(ve, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						setCustomSize: t => e(Object(u.n)(n.id, t)),
						toggleEnableEmojis: t => e(Object(u.k)(n.id, t))
					}
				});
			class Ce extends d.a.Component {
				constructor(e) {
					super(e), this.handleEmojiSizesToggle = () => this.setState({
						customSizeEnabled: !this.state.customSizeEnabled
					}), this.handleEnableEmojisToggle = () => this.setState({
						emojisEnabled: !this.state.emojisEnabled
					}), this.handleWidthChange = e => {
						const t = ce(e.target.value);
						this.setState({
							width: t
						})
					}, this.handleHeightChange = e => {
						const t = ce(e.target.value);
						this.setState({
							height: t
						})
					}, this.enableHasBeenToggled = () => this.props.isEmojisEnabled !== this.state.emojisEnabled, this.sizeHasBeenToggled = () => !!this.props.emojisCustomSize !== this.state.customSizeEnabled, this.sizeHasBeenEdited = () => !(!this.props.emojisCustomSize || !this.state.customSizeEnabled) && (this.props.emojisCustomSize[0] !== this.state.width || this.props.emojisCustomSize[1] !== this.state.height), this.canSave = () => this.enableHasBeenToggled() || this.sizeHasBeenToggled() || this.sizeHasBeenEdited(), this.onSave = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.enableHasBeenToggled() && (e.toggleEnableEmojis(t.emojisEnabled), e.sendEvent(O("enable", t.emojisEnabled))), this.sizeHasBeenToggled() || this.sizeHasBeenEdited()) {
							const n = t.customSizeEnabled ? {
								width: Math.max(t.width, de),
								height: Math.max(t.height, de)
							} : void 0;
							e.setCustomSize(n), e.sendEvent(O("custom_sizing", t.customSizeEnabled))
						}
						e.toggleModal(), e.sendEvent(S("save_emoji_settings"))
					}, this.state = {
						customSizeEnabled: !!e.emojisCustomSize,
						emojisEnabled: e.isEmojisEnabled,
						height: e.emojisCustomSize ? e.emojisCustomSize[1] : le.height,
						width: e.emojisCustomSize ? e.emojisCustomSize[0] : le.width
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = t.customSizeEnabled && (t.width < de || t.height < de), s = n ? a.fbt._("Invalid number, must be between {minSize} to {maxSize}px", [a.fbt._param("minSize", de.toString()), a.fbt._param("maxSize", ie.toString())], {
						hk: "3bkWk5"
					}) : a.fbt._("Must be between {minSize} to {maxSize}px", [a.fbt._param("minSize", de.toString()), a.fbt._param("maxSize", ie.toString())], {
						hk: "1Gp9cj"
					});
					return d.a.createElement(he, null, d.a.createElement(Y.i, null, d.a.createElement(J.a, null, d.a.createElement(Y.q, null, a.fbt._("Emoji settings", null, {
						hk: "1GjUM3"
					})), d.a.createElement(fe, {
						onClick: e.toggleModal
					}, d.a.createElement(Y.b, null)))), d.a.createElement(Y.l, null, d.a.createElement(be, {
						description: "Allow emojis to be used in post and user flair within your community",
						on: t.emojisEnabled,
						onToggle: this.handleEnableEmojisToggle,
						title: "Enable emojis in this community"
					}), d.a.createElement(re, {
						className: t.emojisEnabled ? M.a.modalEmojiSizeSection : Object(Q.a)(M.a.modalEmojiSizeSection, M.a.disabledSection),
						description: "Enables emojis to be displayed at custom sizes for user flair in comments. Emojis will be displayed 16 x 16px everywhere else.",
						on: t.customSizeEnabled,
						onToggle: this.handleEmojiSizesToggle,
						title: "Custom sized emojis"
					}), d.a.createElement("span", {
						className: t.emojisEnabled && t.customSizeEnabled ? M.a.customSizesForm : Object(Q.a)(M.a.customSizesForm, M.a.disabledSection)
					}, d.a.createElement(pe, null, d.a.createElement(ue, null, a.fbt._("Width", null, {
						hk: "3jjMQm"
					})), d.a.createElement(me, {
						disabled: !t.customSizeEnabled || !t.emojisEnabled,
						name: "width",
						onChange: this.handleWidthChange,
						value: t.width
					})), d.a.createElement(pe, null, d.a.createElement(ue, null, a.fbt._("Height", null, {
						hk: "3nMJXk"
					})), d.a.createElement(me, {
						disabled: !t.customSizeEnabled || !t.emojisEnabled,
						name: "height",
						onChange: this.handleHeightChange,
						value: t.height
					})), d.a.createElement("div", {
						className: n ? M.a.sizeLimitTextWarning : M.a.sizeLimitText
					}, s))), d.a.createElement(Ee, null, d.a.createElement(ge, {
						onClick: e.toggleModal
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(xe, {
						disabled: !this.canSave() || n,
						onClick: this.onSave
					}, a.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			var ke = Object(K.a)(_e(Ce)),
				ye = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/toaster.ts")),
				Oe = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				Se = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				je = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				Ne = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				we = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				Ie = n("./src/reddit/models/Image/index.tsx"),
				Te = n("./src/reddit/models/Toast/index.ts"),
				Me = n("./src/reddit/components/ModHub/Emojis/EmojiUploadModal/index.m.less"),
				Pe = n.n(Me),
				Re = n("./src/higherOrderComponents/withImageUploads.tsx"),
				Ae = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				Fe = n("./src/reddit/models/Emoji/index.ts"),
				De = n("./src/reddit/components/ModHub/Emojis/EmojiUploader/index.m.less"),
				Le = n.n(De),
				Ue = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				Be = n("./src/reddit/components/ProgressBar/index.tsx"),
				He = n("./src/reddit/controls/ErrorText/index.tsx");
			const We = 5,
				ze = 95,
				Ve = 600,
				qe = 100;
			class Ge extends d.a.Component {
				constructor() {
					super(...arguments), this.intervalToken = 0, this.state = {
						timeStarted: Date.now(),
						percent: We
					}, this.tick = () => {
						const e = function(e) {
							const t = e / Ve,
								n = (Math.log(t / 10) + 3) / 2.1;
							return Math.max(ze, Math.min(We, 100 * n))
						}(Date.now() - this.state.timeStarted);
						this.setState({
							percent: e
						}), e === ze && this.intervalToken && window.clearInterval(this.intervalToken)
					}
				}
				componentDidMount() {
					this.intervalToken = window.setInterval(this.tick, qe)
				}
				componentWillUnmount() {
					this.intervalToken && window.clearInterval(this.intervalToken)
				}
				render() {
					return d.a.createElement(Be.a, {
						className: Le.a.progressBar,
						innerBarClassName: Le.a.innerBarClassName,
						percent: this.state.percent
					})
				}
			}
			var Ke = Ge;
			const Qe = m.a.wrapped(Ue.a, "characterCountdown", Le.a),
				Ye = m.a.wrapped(Ae.a, "clearIcon", Le.a),
				Xe = m.a.wrapped(He.b, "errorText", Le.a),
				Ze = m.a.wrapped(J.a, "expandLeft", Le.a),
				Je = m.a.div("iconSpacer", Le.a),
				$e = m.a.wrapped(P.a, "imageDisplay", Le.a),
				et = m.a.div("inputPlaceholder", Le.a),
				tt = m.a.wrapped(J.a, "inputPlaceholder", Le.a),
				nt = m.a.wrapped(Z.a, "textButton", Le.a);
			class st extends d.a.Component {
				constructor() {
					super(...arguments), this.handleChangeEmojiName = e => {
						this.props.onChangeEmojiName && this.props.onChangeEmojiName(this.props.index, e.target.value)
					}, this.handleRemove = e => {
						this.props.onCancel(this.props.index)
					}, this.renderContent = () => {
						const {
							emojiName: e,
							errorText: t,
							fileName: n,
							handleRetry: s,
							imageData: o,
							isDuplicate: r
						} = this.props;
						switch (o.kind) {
							case Ie.b.NotUploaded:
							case Ie.b.Pending:
								return d.a.createElement("div", null, d.a.createElement(tt, null, o.kind === Ie.b.NotUploaded ? d.a.createElement(Ke, null) : d.a.createElement(Be.a, {
									className: Le.a.progressBar,
									innerBarClassName: Le.a.innerBarClassName,
									percent: 0
								}), d.a.createElement(nt, {
									onClick: this.handleRemove
								}, a.fbt._("Cancel", null, {
									hk: "2TSLl5"
								}))), d.a.createElement(Se.b, null, a.fbt._("Uploading {fileName}", [a.fbt._param("fileName", n)], {
									hk: "NIxvK"
								})));
							case Ie.b.FailedToUpload:
							case Ie.b.Invalid:
								return d.a.createElement("div", null, d.a.createElement(tt, null, a.fbt._("Failed to upload", null, {
									hk: "2LBRW2"
								}), s ? d.a.createElement(nt, {
									onClick: s
								}, a.fbt._("Retry", null, {
									hk: "3EwbaK"
								})) : d.a.createElement(nt, {
									onClick: this.handleRemove
								}, a.fbt._("Remove", null, {
									hk: "3tYl0U"
								}))), t && d.a.createElement(Xe, null, t));
							case Ie.b.Uploaded:
								return d.a.createElement(et, null, a.fbt._("Saved", null, {
									hk: "2xDFZZ"
								}));
							default:
								return d.a.createElement("div", null, d.a.createElement(X.c, {
									className: r ? Le.a.duplicateInput : Le.a.input,
									onChange: this.handleChangeEmojiName,
									placeholder: a.fbt._("Emoji name", null, {
										hk: "UpQdA"
									}),
									value: e
								}), d.a.createElement(Ze, null, d.a.createElement(Qe, {
									maxChars: Fe.d,
									text: e
								}), d.a.createElement(nt, {
									onClick: this.handleRemove
								}, a.fbt._("Remove", null, {
									hk: "3tYl0U"
								}))), t && d.a.createElement(Xe, null, t))
						}
					}
				}
				render() {
					const {
						emojiName: e,
						imageData: t,
						isSaving: n
					} = this.props;
					return n ? d.a.createElement(d.a.Fragment, null, d.a.createElement(et, null, d.a.createElement(Ke, null)), d.a.createElement(Se.b, null, a.fbt._("Saving {emojiName}", [a.fbt._param("emojiName", e)], {
						hk: "3lMST7"
					}))) : d.a.createElement(we.a, null, t.kind === Ie.b.FailedToUpload || t.kind === Ie.b.Invalid ? d.a.createElement(Je, null, d.a.createElement(Ye, null)) : d.a.createElement($e, {
						backgroundImage: t.url
					}), this.renderContent())
				}
			}
			var at = st,
				ot = n("./node_modules/lodash/countBy.js"),
				rt = n.n(ot),
				it = n("./node_modules/lodash/filter.js"),
				dt = n.n(it),
				lt = n("./node_modules/lodash/includes.js"),
				ct = n.n(lt),
				mt = n("./node_modules/lodash/transform.js"),
				ut = n.n(mt);
			const pt = /^[A-Za-z0-9_-]{1,24}$/,
				bt = ["reddit", "snoo", "spez"],
				ht = (e, t, n) => !pt.test(e) || !n && (e => {
					const t = e.toLowerCase();
					return bt.reduce((e, n) => e || -1 !== t.indexOf(n), !1)
				})(e) ? a.fbt._("Invalid emoji name", null, {
					hk: "2Oromm"
				}) : ct()(t, e) ? a.fbt._("This name is already taken", null, {
					hk: "4dwdJL"
				}) : "",
				gt = e => e.name ? e.name.replace(/\.[^.]*$/, "").replace(/[^A-Za-z0-9_-]/g, " ").trim().replace(/ +/g, "_").slice(0, 24) : "",
				ft = (e, t) => (t.kind !== Ie.b.TempUploaded || !e.emojiNameError && !e.isNameMissing) && (t.kind !== Ie.b.NotUploaded && t.kind !== Ie.b.Pending),
				Et = e => {
					let t = "";
					return e.file.size > Fe.a ? t = "file-size-error" : (e.height > Fe.b || e.width > Fe.c) && (t = "image-size-error"), {
						emojiNameError: "",
						imageError: t,
						name: gt(e.file),
						fileName: e.file.name,
						isNameMissing: !1
					}
				},
				xt = (e, t) => t.reduce((t, n) => n.kind === e ? t + 1 : t, 0),
				vt = (e, t) => {
					const {
						emojiNameError: n,
						imageError: s,
						isNameMissing: o
					} = t;
					let r = "";
					e.kind === Ie.b.FailedToUpload && (r = e.error.fields && e.error.fields.length ? e.error.fields[0].msg : a.fbt._("Something went wrong", null, {
						hk: "2fCWXR"
					}));
					const i = r || !1,
						d = n || !!o && a.fbt._("Emoji name is required", null, {
							hk: "4sL3l7"
						});
					let l = "";
					return "file-size-error" === s ? l = a.fbt._("File size too large", null, {
						hk: "EksGU"
					}) : "image-size-error" === s && (l = a.fbt._("Image size too large", null, {
						hk: "1xjOmq"
					})), l || i || d || ""
				},
				_t = e => {
					const t = dt()(e, e => !e.emojiNameError && !e.imageError),
						n = rt()(t, e => e.name);
					return ut()(n, (e, t, n) => {
						t > 1 && e.push(n)
					}, [])
				},
				Ct = 500,
				kt = m.a.div("UploaderContainer", Le.a),
				yt = m.a.wrapped(N.a, "alertIcon", Le.a),
				Ot = m.a.wrapped(Ae.a, "duplicatesIcon", Le.a),
				St = m.a.wrapped(Y.p, "duplicateWarning", Le.a),
				jt = m.a.wrapped(C.l, "modalAddButton", Le.a),
				Nt = m.a.wrapped(Y.a, "modalCancelButton", Le.a),
				wt = m.a.div("uploaderContainer", Le.a),
				It = m.a.wrapped(Y.p, "modProTip", Le.a),
				Tt = m.a.div("progressText", Le.a),
				Mt = m.a.wrapped(Y.p, "replacingDescription", Le.a),
				Pt = m.a.div("replacingTitle", Le.a),
				Rt = m.a.div("uploadingTitle", Le.a),
				At = Object(c.c)({
					emojis: I.d,
					isSnoomojiSubreddit: $.k,
					reservedEmojiNames: I.e
				}),
				Ft = Object(l.b)(At, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						emojisUploadedToast: () => e(ye.f({
							kind: Te.b.SuccessCommunityGreen,
							text: a.fbt._("New emojis added!", null, {
								hk: "1Q1mEq"
							})
						})),
						saveEmoji: (t, s, a) => e(Object(u.p)({
							imageData: t,
							subredditId: n,
							emojiName: s,
							settings: a
						}))
					}
				});
			class Dt extends d.a.Component {
				constructor(e) {
					super(e), this.timeoutToken = 0, this.loadIndex = 0, this.tempUploadNext = async () => {
						const e = this.getNextPendingImageToLoad();
						if (!e) return this.timeoutToken = 0, void(this.loadIndex = 0);
						const {
							subredditId: t
						} = this.props, n = this.state.emojiData[e.id], s = Object(Ie.m)(e);
						await this.props.uploadImage({
							imageData: s,
							subredditId: t,
							emojiName: n.name,
							settings: this.props.emojiSettings
						}), this.loadIndex += 1, this.loadIndex < this.state.localData.length ? this.timeoutToken = window.setTimeout(this.tempUploadNext, Ct) : (this.loadIndex = 0, this.timeoutToken = 0)
					}, this.emojiIsADuplicate = (e, t) => e && t && t.some(t => t.id === e.id), this.saveNext = e => {
						const t = this.getNextTempUploadedImageToSave();
						if (!t) return this.timeoutToken = 0, void(this.loadIndex = 0);
						if (!this.emojiIsADuplicate(t, e)) {
							const e = this.state.emojiData[t.id],
								n = this.props.saveEmoji(t, e.name, this.props.emojiSettings);
							this.setState({
								emojisUploaded: this.state.emojisUploaded || n
							})
						}
						this.loadIndex += 1, this.loadIndex < this.state.localData.length ? this.timeoutToken = window.setTimeout(() => this.saveNext(e), Ct) : (this.loadIndex = 0, this.timeoutToken = 0)
					}, this.onChangeEmojiName = (e, t) => {
						const {
							isSnoomojiSubreddit: n,
							reservedEmojiNames: s
						} = this.props;
						if (t.length > Fe.d) return;
						const a = this.state.isReplacing ? this.state.replacingEmoji && this.state.replacingEmoji[e] : this.state.localData[e];
						if (!a) return;
						const o = this.state.emojiData,
							r = o[a.id],
							i = t ? ht(t, s, n) : "";
						o[a.id].emojiNameError = i, o[a.id].name = t;
						const d = _t(o);
						this.setState({
							duplicateNames: d,
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
							if (!ft(this.state.emojiData[t.id], t)) return !1;
							t.kind === Ie.b.TempUploaded && (e = !0)
						}
						return e
					}, this.getValidatedState = () => {
						const {
							isSnoomojiSubreddit: e,
							reservedEmojiNames: t
						} = this.props, n = {};
						for (const s of this.state.localData) {
							let a = this.state.emojiData[s.id];
							const o = ht(a.name, t, e);
							a.name && !o || (a = {
								...a,
								emojiNameError: o,
								isNameMissing: !a.name
							}), n[s.id] = a
						}
						return {
							emojiData: n
						}
					}, this.onApply = () => {
						const e = this.getValidatedState();
						this.setState(e, () => {
							if (this.canSave()) {
								const e = this.props.emojis[this.props.subredditId].emojis,
									t = [];
								for (const s of this.state.localData) {
									if (s.kind !== Ie.b.TempUploaded) continue;
									this.state.emojiData[s.id].name in e && t.push(s)
								}
								t.length ? (this.setState({
									replacingEmoji: t,
									isReplacing: !0
								}), this.saveNext(t)) : (this.setState({
									isSavingImage: !0
								}), this.props.setIsSaving(!0), this.saveNext());
								const n = xt(Ie.b.TempUploaded, this.state.localData) - t.length;
								n > 0 && (this.props.sendEvent(j("add", n)), this.sendSettingsEvent())
							}
						})
					}, this.sendSettingsEvent = () => {
						const {
							modFlairOnly: e,
							userFlairAllowed: t,
							postFlairAllowed: n
						} = this.props.emojiSettings;
						this.props.sendEvent(O("mods_only", e)), this.props.sendEvent(O("appear_user_flair", t)), this.props.sendEvent(O("appear_post_flair", n))
					}, this.handleSaveAndReplace = () => {
						this.setState({
							isReplacing: !1,
							isSavingImage: !0
						}), this.props.setIsSaving(!0);
						const {
							replacingEmoji: e
						} = this.state, t = e ? e.length : 0;
						this.saveNext(), t > 0 && (this.props.sendEvent(j("replace", t)), this.sendSettingsEvent())
					}, this.handleCancelReplace = () => {
						this.setState({
							isReplacing: !1,
							replacingEmoji: null
						}), this.props.stopEditing(), this.props.sendEvent(S("dont_replace"))
					}, this.findEmojiIndexById = e => this.state.localData.findIndex(t => t.id === e), this.removeEmoji = e => {
						const {
							isReplacing: t,
							localData: n,
							replacingEmoji: s
						} = this.state;
						let a, o = e;
						t && s && s[e] && (o = this.findEmojiIndexById(s[e].id), (a = s.slice(0)).splice(e, 1), this.setState({
							replacingEmoji: a
						}));
						const r = n[o],
							i = n.slice(0);
						i.splice(o, 1);
						const d = {
							...this.state.emojiData
						};
						delete d[r.id], this.setState({
							duplicateNames: _t(d),
							emojiData: d,
							localData: i
						}), t && s ? 0 === a.length && this.props.returnToAddState() : 0 === i.length && this.props.returnToAddState()
					}, this.retryEmojiUpload = () => {
						this.props.returnToAddState()
					};
					const t = {},
						n = [];
					for (const s of e.images) {
						const e = Et(s);
						t[s.id] = e, e.imageError ? n.push(Object(Ie.l)(s, e.imageError)) : n.push(s)
					}
					this.state = {
						duplicateNames: _t(t),
						emojiData: t,
						emojisUploaded: !1,
						isReplacing: !1,
						isSavingImage: !1,
						localData: n,
						replacingEmoji: null
					}
				}
				UNSAFE_componentWillMount() {
					this.loadIndex = 0, this.tempUploadNext()
				}
				getNextPendingImageToLoad() {
					let e, t = null;
					for (e = this.loadIndex; e < this.state.localData.length; e++) {
						const n = this.state.localData[e];
						if (n.kind === Ie.b.Pending) {
							t = n;
							break
						}
					}
					return this.loadIndex = e, t
				}
				getNextTempUploadedImageToSave() {
					let e, t = null;
					for (e = this.loadIndex; e < this.state.localData.length; e++) {
						const n = this.state.localData[e];
						if (n.kind === Ie.b.TempUploaded) {
							t = n;
							break
						}
					}
					return this.loadIndex = e, t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = e.getImageUploadsIfModified(this.state.localData);
					if (!t) return;
					let n = !1;
					const {
						isSavingImage: s
					} = this.state, a = {};
					for (const o of t) a[o.id] = this.state.emojiData[o.id], n = n || o.kind === Ie.b.TempUploaded;
					!s || n ? (this.props.setIsSaving(s), this.setState({
						emojiData: a,
						isSavingImage: s,
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
					} = this, n = t.isReplacing ? t.replacingEmoji || [] : t.localData;
					return d.a.createElement(kt, null, d.a.createElement(wt, null, t.duplicateNames.length > 0 ? d.a.createElement(St, null, d.a.createElement(Ot, null), a.fbt._("Duplicate names", null, {
						hk: "4kkNr1"
					})) : !t.isReplacing && d.a.createElement(It, null, d.a.createElement(yt, null), a.fbt._("Names cannot be edited once added", null, {
						hk: "3f45r5"
					})), d.a.createElement(Y.l, null, t.isReplacing ? d.a.createElement(d.a.Fragment, null, d.a.createElement(Pt, null, a.fbt._("Replacing emojis", null, {
						hk: "4cKike"
					})), d.a.createElement(Mt, null, a.fbt._("These emoji names already exist in your community. Replacing these emojis will not change pre-existing permissions. Do you want to replace them?", null, {
						hk: "3iPBUU"
					}))) : d.a.createElement(Rt, null, a.fbt._("Uploading emojis", null, {
						hk: "7keSV"
					})), d.a.createElement("div", {
						className: t.isReplacing ? void 0 : Le.a.emojiDisplays
					}, n.map((e, n) => {
						const s = this.state.emojiData[e.id],
							a = e.kind === Ie.b.FailedToUpload || e.kind === Ie.b.Invalid,
							o = t.replacingEmoji && !t.replacingEmoji.find(t => t.id === e.id);
						if (t.isSavingImage && (a || o)) return;
						const r = vt(e, s);
						return d.a.createElement(Se.a, {
							key: e.id
						}, d.a.createElement(at, {
							emojiName: s.name,
							errorText: r,
							fileName: s.fileName,
							imageData: e,
							index: n,
							isDuplicate: t.duplicateNames.includes(s.name),
							isSaving: t.isSavingImage,
							onCancel: this.removeEmoji,
							onChangeEmojiName: this.onChangeEmojiName
						}))
					})), !t.isReplacing && d.a.createElement(Tt, null, t.isSavingImage ? a.fbt._("{savedCount} out of {savedTotal} saved", [a.fbt._param("savedCount", xt(Ie.b.Uploaded, t.localData).toString()), a.fbt._param("savedTotal", t.localData.length.toString())], {
						hk: "3v1E9N"
					}) : a.fbt._("{uploadedCount} out of {uploadedTotal} uploaded", [a.fbt._param("uploadedCount", xt(Ie.b.TempUploaded, t.localData).toString()), a.fbt._param("uploadedTotal", t.localData.length.toString())], {
						hk: "41qbSa"
					})))), d.a.createElement(Y.g, null, d.a.createElement(Nt, {
						disabled: t.isSavingImage,
						onClick: t.isReplacing ? this.handleCancelReplace : e.stopEditing
					}, t.isReplacing ? a.fbt._("Don't replace", null, {
						hk: "4d8hwM"
					}) : a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(jt, {
						disabled: t.isSavingImage || !this.canSave() || t.duplicateNames.length > 0,
						onClick: t.isReplacing ? this.handleSaveAndReplace : this.onApply
					}, t.isReplacing ? a.fbt._("Replace", null, {
						hk: "45noqB"
					}) : a.fbt._("Add", null, {
						hk: "2wi3d4"
					}))))
				}
			}
			var Lt = Object(Re.a)(Ft(Dt), u.q),
				Ut = n("./src/reddit/actions/imageUploads.ts"),
				Bt = n("./src/reddit/selectors/imageUploads.ts");
			const Ht = m.a.div("UploaderContainer", Le.a),
				Wt = m.a.wrapped(Ht, "editEmojiDisplay", Le.a),
				zt = Object(c.c)({
					reduxImage: (e, t) => {
						let {
							pendingImage: n
						} = t;
						const s = Object(Bt.b)(e),
							a = n && n.id;
						return a && s[a] || void 0
					}
				});
			class Vt extends d.a.Component {
				constructor(e) {
					super(e), this.onCancelAndRetry = () => {
						this.props.reduxImage && this.props.cancelUpload(this.props.reduxImage), this.props.onRetryUpload()
					}
				}
				componentDidMount() {
					const e = Object(Ie.m)(this.props.pendingImage);
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
						emoji: n
					} = this.props, s = Et(e), a = Object(Ie.l)(e, s.imageError), o = s.imageError ? a : t || e, r = vt(o, s);
					return !r && o.kind === Ie.b.TempUploaded || o.kind === Ie.b.Uploaded ? null : d.a.createElement(Wt, null, d.a.createElement(at, {
						emojiName: n.name,
						errorText: r,
						fileName: s.fileName,
						handleRetry: this.onCancelAndRetry,
						imageData: o,
						index: 0,
						isSaving: !1,
						onCancel: this.onCancelAndRetry
					}))
				}
			}
			var qt = Object(l.b)(zt, e => ({
				uploadImage: t => e(Object(u.q)(t)),
				cancelUpload: t => e(Object(Ut.h)(t))
			}))(Vt);

			function Gt() {
				return (Gt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Kt = 32,
				Qt = 128,
				Yt = 64,
				Xt = 100,
				Zt = m.a.div("appearsIn", Pe.a),
				Jt = m.a.wrapped(je.a, "checkbox", Pe.a),
				$t = m.a.span("checkboxText", Pe.a),
				en = m.a.wrapped(Z.a, "closeButton", Pe.a),
				tn = m.a.div("imageTitle", Pe.a),
				nn = m.a.wrapped(C.l, "modalAddButton", Pe.a),
				sn = m.a.wrapped(Y.e, "modalBody", Pe.a),
				an = m.a.wrapped(Y.a, "modalCancelButton", Pe.a),
				on = m.a.wrapped(Y.l, "modalMain", Pe.a),
				rn = m.a.wrapped(re, "modFlairOnlyToggle", Pe.a),
				dn = m.a.wrapped(Ne.a, "modIcon", Pe.a),
				ln = m.a.li("modProTip", Pe.a),
				cn = m.a.div("modProTips", Pe.a),
				mn = m.a.div("modProTipTitle", Pe.a),
				un = m.a.div("proTip", Pe.a),
				pn = m.a.ul("tipList", Pe.a),
				bn = e => !!e && (e.kind === Ie.b.Pending ? !!Et(e).imageError : e.kind === Ie.b.FailedToUpload);
			var hn;
			! function(e) {
				e[e.AddState = 0] = "AddState", e[e.SingleEmojiEditState = 1] = "SingleEmojiEditState", e[e.BulkUploadState = 2] = "BulkUploadState"
			}(hn || (hn = {}));
			const gn = m.a.wrapped(we.a, "emojiDisplay", Pe.a),
				fn = m.a.div("emojiNameDisplay", Pe.a),
				En = m.a.wrapped(P.a, "imageDisplay", Pe.a),
				xn = e => d.a.createElement(gn, null, d.a.createElement(En, {
					backgroundImage: e.url
				}), d.a.createElement(fn, null, e.emojiName)),
				vn = Object(c.c)({
					emojisCustomSize: (e, t) => Object($.u)(e, {
						subredditName: t.subreddit.name
					}).emojisCustomSize
				}),
				_n = Object(l.b)(vn, (e, t) => {
					let {
						emoji: n,
						isSnoomoji: s,
						subreddit: o
					} = t;
					return {
						saveEmoji: (t, n, s) => e(u.p({
							imageData: s,
							subredditId: o.id,
							emojiName: t,
							settings: n
						})),
						saveEmojiSettings: t => {
							n && e(u.o(n.name, s, t, o.id))
						},
						saveEmojiSuccessToast: () => e(ye.f({
							kind: Te.b.SuccessCommunityGreen,
							text: a.fbt._("Emoji edits saved!", null, {
								hk: "3luBMA"
							})
						}))
					}
				});
			class Cn extends d.a.Component {
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
						const n = this.state.emojiState === hn.SingleEmojiEditState;
						n && this.clearImageData(), t = Array.isArray(e) ? n ? e.slice(0, 1) : e.slice(0, Xt) : [e];
						const s = await Promise.all(t.map(Ie.f));
						n ? this.setState({
							imageData: s
						}) : this.setState({
							emojiState: hn.BulkUploadState,
							imageData: s
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
							emojiState: hn.AddState
						}), this.clearImageData()
					}, this.sendToggleEvent = (e, t) => this.props.sendEvent(O(e, t)), this.modFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.modFlairOnly !== this.state.settings.modFlairOnly, this.userFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.userFlairAllowed !== this.state.settings.userFlairAllowed, this.postFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.postFlairAllowed !== this.state.settings.postFlairAllowed, this.settingsHaveBeenChanged = () => this.modFlairSettingHasChanged() || this.userFlairSettingHasChanged() || this.postFlairSettingHasChanged(), this.sendTelemetryEvents = () => {
						const {
							modFlairOnly: e,
							userFlairAllowed: t,
							postFlairAllowed: n
						} = this.state.settings;
						this.modFlairSettingHasChanged() && this.sendToggleEvent("mods_only", e), this.userFlairSettingHasChanged() && this.sendToggleEvent("appear_user_flair", t), this.postFlairSettingHasChanged() && this.sendToggleEvent("appear_post_flair", n)
					}, this.saveEmoji = async () => {
						const {
							props: e,
							state: t
						} = this, n = {
							modFlairOnly: t.settings.modFlairOnly,
							postFlairAllowed: t.settings.postFlairAllowed,
							userFlairAllowed: t.settings.userFlairAllowed
						};
						if (this.setIsSaving(!0), e.emoji) {
							if (e.isSnoomoji || e.emoji && !t.emojiDraftImage) e.saveEmojiSettings(n);
							else if (e.emoji && t.emojiDraftImage && t.emojiDraftImage.kind === Ie.b.TempUploaded) {
								await e.saveEmoji(e.emoji.name, n, t.emojiDraftImage) && e.saveEmojiSuccessToast()
							}
							this.sendTelemetryEvents()
						}
						this.closeModal(), this.setIsSaving(!1)
					}, this.setIsSaving = e => this.setState({
						isSaving: e
					}), this.state = {
						emojiState: e.emoji ? hn.SingleEmojiEditState : hn.AddState,
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
						isSnoomoji: n,
						sendEvent: s,
						subreddit: o
					} = this.props, {
						emojiDraftImage: r,
						emojiState: i,
						imageData: l,
						isSaving: c,
						settings: m
					} = this.state, u = {
						emojiSettings: m,
						stopEditing: this.closeModal,
						subredditId: o.id
					}, p = 2 * (t ? t[0] : Kt), b = 2 * (t ? t[1] : Kt), h = l.length > 0 ? l[0] : void 0, g = h && h.url, f = r && r.url, E = g || f, x = r && r.kind === Ie.b.TempUploaded, v = bn(h || r), _ = i !== hn.SingleEmojiEditState || (!this.settingsHaveBeenChanged() && !x || v);
					return d.a.createElement(sn, null, d.a.createElement(Y.i, null, d.a.createElement(J.a, null, d.a.createElement(Y.q, null, e ? a.fbt._("Edit emoji", null, {
						hk: "4awCz5"
					}) : a.fbt._("Add new emojis", null, {
						hk: "2DrJ62"
					})), d.a.createElement(en, {
						disabled: c,
						onClick: this.closeModal
					}, d.a.createElement(Y.b, null)))), (i === hn.AddState || i === hn.SingleEmojiEditState) && d.a.createElement(d.a.Fragment, null, i === hn.AddState && d.a.createElement(cn, null, d.a.createElement(mn, null, d.a.createElement(dn, null), a.fbt._("Mod pro tips!", null, {
						hk: "30l9bq"
					})), d.a.createElement(pn, null, d.a.createElement(ln, null, a.fbt._("Emoji names will use the image file name and will be editable once uploaded", null, {
						hk: "2fvAIQ"
					})), d.a.createElement(ln, null, a.fbt._("You can upload up to {maxUpload} emojis at once", [a.fbt._param("maxUpload", Xt.toString())], {
						hk: "4aMYoX"
					})))), d.a.createElement(on, null, i === hn.SingleEmojiEditState && e && d.a.createElement(xn, {
						emojiName: e.name,
						url: E || e.url
					}), !n && d.a.createElement(d.a.Fragment, null, d.a.createElement(Se.i, null, d.a.createElement(tn, null, e ? a.fbt._("Image", null, {
						hk: "3fzI70"
					}) : a.fbt._("Images", null, {
						hk: "3SapUk"
					})), e && i === hn.SingleEmojiEditState && h && d.a.createElement(qt, Gt({}, u, {
						emoji: e,
						onRetryUpload: this.clearImageData,
						pendingImage: h,
						onImageChange: this.onEditingImageChange
					})), (!l.length || x) && !(e && v) && d.a.createElement(Oe.b, {
						label: a.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3y5WvP"
						}),
						onChange: this.handleMultiImageInput,
						multiple: !0
					}), d.a.createElement(Se.b, null, a.fbt._("Max upload dimensions {maxEmojiWidth} x {maxEmojiHeight}px", [a.fbt._param("maxEmojiWidth", Qt.toString()), a.fbt._param("maxEmojiHeight", Qt.toString())], {
						hk: "yal28"
					})), d.a.createElement(Se.b, null, a.fbt._("Max file size {MAX_FILE_SIZE}KB", [a.fbt._param("MAX_FILE_SIZE", Yt.toString())], {
						hk: "1t1L0f"
					}))), d.a.createElement(un, null, a.fbt._("Recommended upload dimensions: {recommendedWidth} x {recommendedHeight}px", [a.fbt._param("recommendedWidth", p.toString()), a.fbt._param("recommendedHeight", b.toString())], {
						hk: "35CqDV"
					}))), d.a.createElement(Zt, null, a.fbt._("Appears in:", null, {
						hk: "3SZP5W"
					})), d.a.createElement(Jt, {
						name: "postFlair",
						onChange: this.handleTogglePostFlair,
						value: m.postFlairAllowed
					}, d.a.createElement($t, null, a.fbt._("Post flair", null, {
						hk: "mAzeZ"
					}))), d.a.createElement(Jt, {
						name: "userFlair",
						onChange: this.handleToggleUserFlair,
						value: m.userFlairAllowed
					}, d.a.createElement($t, null, a.fbt._("User flair", null, {
						hk: "qVf7x"
					}))), d.a.createElement(rn, {
						description: "Only appears in post and user flair that are restricted for mod use.",
						on: m.modFlairOnly,
						onToggle: this.handleModExclusiveToggle,
						title: "Mod only"
					})), d.a.createElement(Y.g, null, d.a.createElement(an, {
						disabled: c,
						onClick: this.closeModal
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(nn, {
						disabled: _,
						onClick: this.saveEmoji
					}, e ? a.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : a.fbt._("Add", null, {
						hk: "2wi3d4"
					})))), i === hn.BulkUploadState && d.a.createElement(Lt, Gt({}, u, {
						images: l,
						returnToAddState: this.returnToAdd,
						sendEvent: s,
						setIsSaving: this.setIsSaving
					})))
				}
			}
			var kn = Object(K.a)(_n(Cn));
			const yn = m.a.wrapped(N.a, "alertIcon", M.a),
				On = m.a.span("appearsTitle", M.a),
				Sn = m.a.span("imageTitle", M.a),
				jn = m.a.span("nameTitle", M.a),
				Nn = m.a.span("permissionsTitle", M.a),
				wn = m.a.wrapped(C.o, "settingsButton", M.a),
				In = m.a.wrapped(f.a, "titleTooltip", M.a),
				Tn = m.a.wrapped(x.a, "topRow", M.a),
				Mn = Object(c.c)({
					emojis: I.d,
					isConfirmModalOpen: Object(w.b)("EmojiManager--DeleteEmojiConfirmation--Modal"),
					isEmojisEnabled: (e, t) => Object(I.b)(e, t.subreddit.name),
					isEmojiSettingsModalOpen: Object(w.b)("EmojiManager--Settings--Modal"),
					isUploadEmojisModalOpen: Object(w.b)("EmojiManager--UploadEmojis--Modal")
				}),
				Pn = Object(l.b)(Mn, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						deleteEmoji: t => e(u.j(t, n.id)),
						toggleDeleteConfirmationModal: () => e(Object(p.i)("EmojiManager--DeleteEmojiConfirmation--Modal")),
						toggleSettingsModal: () => e(Object(p.i)("EmojiManager--Settings--Modal")),
						toggleUploadEmojisModal: () => e(Object(p.i)("EmojiManager--UploadEmojis--Modal"))
					}
				});
			class Rn extends d.a.Component {
				constructor(e) {
					super(e), this.onClickEditEmoji = (e, t) => {
						this.props.toggleUploadEmojisModal(), this.setState({
							emojiToEdit: e,
							isSnoomoji: t
						})
					}, this.onConfirmDelete = () => {
						this.props.deleteEmoji(this.state.emojiNameToDelete), this.setState({
							emojiNameToDelete: ""
						}), this.props.sendEvent(S("delete"))
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
						isEmojisEnabled: n,
						isEmojiSettingsModalOpen: o,
						isUploadEmojisModalOpen: i,
						sendEvent: l,
						subreddit: c,
						toggleDeleteConfirmationModal: m,
						toggleSettingsModal: u,
						toggleUploadEmojisModal: p
					} = this.props;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(E.c, null, d.a.createElement(wn, {
						onClick: u
					}, a.fbt._("Emoji settings", null, {
						hk: "2k202A"
					})), d.a.createElement(C.l, {
						onClick: p
					}, a.fbt._("Add emoji", null, {
						hk: "DTe8a"
					}))), d.a.createElement(E.a, null, d.a.createElement(E.b, null, a.fbt._("Emoji management", null, {
						hk: "6xN5s"
					}), d.a.createElement(g.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360010560371`
					})), !n && d.a.createElement(h.a, {
						className: M.a.emojisDisabled,
						color: _.a.quarantine,
						icon: d.a.createElement(yn, null),
						subtitle: a.fbt._("Emojis in flairs will not be displayed, and existing emojis will appear as plain text.", null, {
							hk: "2WaMtH"
						}),
						title: a.fbt._("Emojis have been disabled for this community", null, {
							hk: "7LNIO"
						})
					}), d.a.createElement(Tn, null, d.a.createElement(Sn, null, a.fbt._("Image", null, {
						hk: "1rlqjH"
					})), d.a.createElement(jn, null, a.fbt._("Name", null, {
						hk: "1ugGFI"
					})), d.a.createElement(On, null, a.fbt._("Appears in", null, {
						hk: "3K8vjU"
					}), d.a.createElement(In, {
						text: a.fbt._("Set emoji to appear in post flair or user flair", null, {
							hk: "4cg4Se"
						})
					})), d.a.createElement(Nn, null, a.fbt._("Settings", null, {
						hk: "2CRrAq"
					}), d.a.createElement(In, {
						text: a.fbt._("Set emoji to only appear in mod-only flair", null, {
							hk: "2yS10f"
						})
					}))), e[c.id] && r()(e[c.id].emojis, e => d.a.createElement(V, {
						emoji: e,
						enabled: !0,
						isSnoomoji: !1,
						key: e.name,
						onEdit: this.onClickEditEmoji,
						onRemove: this.handleRemoveEmoji
					})), e[c.id] && r()(e[c.id].snoomojis, e => d.a.createElement(V, {
						emoji: e,
						enabled: !0,
						isSnoomoji: !0,
						key: e.name,
						onEdit: this.onClickEditEmoji,
						onRemove: this.handleRemoveEmoji
					})), t && d.a.createElement(b.a, {
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
					}), o && d.a.createElement(ke, {
						sendEvent: l,
						subreddit: c,
						toggleModal: u,
						withOverlay: !0
					}), i && d.a.createElement(kn, {
						emoji: this.state.emojiToEdit,
						isSnoomoji: this.state.isSnoomoji,
						sendEvent: l,
						subreddit: c,
						toggleModal: p,
						withOverlay: !0
					})))
				}
			}
			t.a = Pn(Object(v.c)(Rn))
		},
		"./src/reddit/components/ModHub/InfoLink/index.m.less": function(e, t, n) {
			e.exports = {
				linkContainer: "_3-yXs2bljbMxTPT6hDZU1I",
				infoIcon: "_2Eloqzd6Vfz9eGsjyzVfsf"
			}
		},
		"./src/reddit/components/ModHub/InfoLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/icons/fonts/Info/index.tsx"),
				l = n("./src/reddit/components/ModHub/InfoLink/index.m.less"),
				c = n.n(l);
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
					}, o.a.createElement(d.a, {
						className: c.a.infoIcon
					}), o.a.createElement(m, {
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: u,
						text: s.fbt._("Learn more", null, {
							hk: "3zoGtq"
						}),
						tooltipPosition: p
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/ModHub/ModHubNav/NavItem.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/components/ModHub/ModHubNav/index.m.less"),
				c = n.n(l);
			const m = () => o.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, s.fbt._("New", null, {
				hk: "BnhHE"
			}));
			t.b = e => e.path ? e.isExternal ? o.a.createElement("a", {
				className: c.a.navLinkStyles,
				href: e.path,
				onClick: e.onClick,
				target: "_blank",
				rel: "noopener noreferrer"
			}, e.label, o.a.createElement(d.a, {
				name: "external_link",
				className: c.a.outboundLinkIcon
			})) : o.a.createElement(i.a, {
				className: Object(r.a)(c.a.navLinkStyles, {
					[c.a.activeLink]: !!e.isActive
				}),
				to: e.path,
				onClick: e.onClick
			}, e.label, e.isNew && o.a.createElement(m, null), e.isBeta && o.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, s.fbt._("Beta", null, {
				hk: "z4XPh"
			})), e.isUpdated && o.a.createElement("div", {
				className: c.a.updatedLinkIndicator
			}, s.fbt._("Updated", null, {
				hk: "2xkGR3"
			})), e.showInboundArrow && o.a.createElement(d.a, {
				name: "right",
				className: c.a.inboundLinkIcon
			})) : o.a.createElement("button", {
				className: c.a.navLinkStyles,
				onClick: e.onClick
			}, e.label, e.isNew && o.a.createElement(m, null), e.isBeta && o.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, s.fbt._("Beta", null, {
				hk: "z4XPh"
			})), e.isUpdated && o.a.createElement("div", {
				className: c.a.updatedLinkIndicator
			}, s.fbt._("Updated", null, {
				hk: "2xkGR3"
			})))
		},
		"./src/reddit/components/ModHub/ModHubNav/WikiNavPanel/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/ModHubNav/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/PaginationButtons/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2QinjfjfDTG6Df4_Tb_eRN",
				iconStyles: "_1MvzgnzkNefTZKkd4A5o1Y",
				arrowLeft: "_1Hul4w6ANujC9NsFF6_j4f"
			}
		},
		"./src/reddit/components/ModHub/PaginationButtons/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				d = n("./src/reddit/components/ModHub/PaginationButtons/index.m.less"),
				l = n.n(d);
			t.a = e => a.a.createElement("div", {
				className: l.a.container
			}, e.prevButtonEnabled && a.a.createElement(r.a, {
				to: e.prevTo,
				onClick: e.prevButtonOnClick
			}, a.a.createElement(i.a, {
				className: Object(o.a)(l.a.iconStyles, l.a.arrowLeft)
			})), e.nextButtonEnabled && a.a.createElement(r.a, {
				to: e.nextTo,
				onClick: e.nextButtonOnClick
			}, a.a.createElement(i.a, {
				className: l.a.iconStyles
			})))
		},
		"./src/reddit/components/ModHub/StyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				ContentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				contentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				PageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				pageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				TopBar: "_2YY5qLRbI5q6_0JQVKiGt_",
				topBar: "_2YY5qLRbI5q6_0JQVKiGt_"
			}
		},
		"./src/reddit/components/ModHub/StyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				o = n.n(a);
			const r = s.a.div("ContentContainer", o.a),
				i = s.a.div("PageTitle", o.a),
				d = s.a.div("TopBar", o.a)
		},
		"./src/reddit/components/ModerationLog/FilterByDropdowns/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModerationLog/ModerationLogItem/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModerationLog/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModerationLog/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/endpoints/subredditModeration/moderationLog.ts"),
				m = n("./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/actions/moderationLog/constants.ts");
			const b = Object(l.a)(p.a);
			var h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/higherOrderComponents/asTooltip.tsx"),
				f = n("./src/reddit/actions/tooltip.ts"),
				E = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/constants/keycodes.ts"));
			const x = ["Anti-Evil Operations", "Reddit Legal"];
			var v;
			! function(e) {
				e.ACTION = "action", e.MODERATOR = "moderator"
			}(v || (v = {}));
			const _ = {
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
					CREATE_RULE: () => a.fbt._("Create rule", null, {
						hk: "28uE69"
					}),
					CREATE_SCHEDULED_POST: () => a.fbt._("Create scheduled post", null, {
						hk: "mVbI1"
					}),
					DELETE_AWARD: () => a.fbt._("Delete award", null, {
						hk: "3xYaZ7"
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
				C = {
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
			var k, y;
			! function(e) {
				e.AWARD = "Award", e.COMMENT = "Comment", e.FLAIR = "Flair", e.MULTIPLE = "Multiple", e.POST = "Post", e.REDDITOR = "Redditor", e.SETTINGS = "Settings", e.WIKI = "Wiki", e.COLLECTION = "Collection", e.EVENT = "Event", e.NOTE = "Note"
			}(k || (k = {})),
			function(e) {
				e.NONE = "none", e.POSITIVE = "positive", e.NEGATIVE = "negative"
			}(y || (y = {}));
			var O = n("./src/reddit/controls/InternalLink/index.tsx"),
				S = n("./src/lib/addQueryParams/index.ts"),
				j = n("./src/lib/stripQueryParams/index.ts");
			const N = e => {
				const t = e.action && "ALL_ACTIONS" !== e.action ? e.action : null,
					n = e.moderator || null,
					s = e.endCursor || null,
					a = e.startCursor || null;
				return Object(S.a)(Object(j.a)(e.currentPageUrl), {
					action: t,
					moderator: n,
					after: s,
					before: a
				})
			};
			var w = n("./src/reddit/selectors/telemetry.ts");
			const I = e => ({
					subreddit: w.gb(e),
					userSubreddit: w.qb(e)
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
			var A = n("./src/reddit/components/ModerationLog/FilterByDropdowns/index.m.less"),
				F = n.n(A);
			class D extends r.a.Component {
				constructor(e) {
					super(e), this.buildModLogUrlForAction = e => {
						const {
							currentPageUrl: t,
							moderator: n
						} = this.props;
						return N({
							currentPageUrl: t,
							moderator: n,
							action: e
						})
					}, this.onChangeFilterText = e => {
						const t = e.currentTarget.value,
							n = this.getFilteredActions(t);
						this.setState({
							currentInputText: t,
							filteredActions: n
						})
					}, this.onKeyDown = e => {
						if (e.which === E.a.Enter) {
							const {
								filteredActions: t
							} = this.state, n = t.length ? this.buildModLogUrlForAction(t[0]) : null;
							n && (this.props.onChangeUrl(n), e.preventDefault())
						}
					}, this.onActionClick = e => {
						this.props.sendEvent(R(e))
					}, this.state = {
						currentInputText: "",
						filteredActions: this.getFilteredActions("")
					}
				}
				getFilteredActions(e) {
					let t = Object.keys(_);
					if (e) {
						const n = e.toLowerCase();
						t = t.filter(e => _[e]().toString().toLowerCase().includes(n))
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
					}), t.map(e => r.a.createElement(O.a, {
						className: F.a.dropdownRow,
						onClick: () => this.onActionClick(e),
						to: this.buildModLogUrlForAction(e)
					}, _[e]())))
				}
			}
			var L = D,
				U = n("./src/lib/constants/index.ts"),
				B = n("./src/lib/objectSelector/index.ts"),
				H = n("./src/reddit/models/SubredditModeration/ModerationLog/index.ts");
			const W = Object(B.a)((e, t) => {
					let {
						subredditId: n
					} = t, s = [];
					const a = z(e),
						o = V(e);
					if (a && o) {
						const t = Object(H.a)(n, a, o),
							r = e.pages.modHub.moderationLog.actions.itemOrder[n] && e.pages.modHub.moderationLog.actions.itemOrder[n][t];
						r && (s = r.map(t => e.pages.modHub.moderationLog.actions.models[n][t]))
					}
					return s
				}),
				z = e => e.pages.modHub.moderationLog.endCursor,
				V = e => e.pages.modHub.moderationLog.startCursor,
				q = e => {
					let {
						name: t,
						urlPath: n
					} = e;
					return r.a.createElement(O.a, {
						className: F.a.dropdownRow,
						to: n
					}, t)
				},
				G = "a",
				K = Object(d.c)({
					allModerators: (e, t) => {
						let {
							subredditId: n
						} = t;
						return ((e, t) => e.pages.modHub.moderationLog.moderators[t] || [])(e, n)
					}
				});
			class Q extends r.a.Component {
				constructor(e) {
					super(e), this.onChangeFilterText = e => {
						const t = e.currentTarget.value,
							n = this.getList(t);
						this.setState({
							currentInputText: t,
							filteredList: n
						})
					}, this.onKeyDown = e => {
						if (e.which === E.a.Enter) {
							const {
								filteredList: t
							} = this.state, n = t.length ? t[0].url : "";
							n && (this.props.onChangeUrl(n), e.preventDefault())
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
						currentPageUrl: n
					} = this.props, s = e => N({
						currentPageUrl: n,
						action: t,
						moderator: e
					}), o = [{
						url: s(""),
						displayText: `${a.fbt._("All Moderators",null,{hk:"3vmWA8"})}`
					}, {
						url: s(G),
						displayText: `${a.fbt._("Admins",null,{hk:"4mKRNI"})}`
					}, {
						url: s(U.l),
						displayText: `${a.fbt._("AutoModerator",null,{hk:"4wxc1W"})}`
					}, ...this.props.allModerators.map(e => ({
						url: s(e.name),
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
			var Y = Object(i.b)(K)(Q),
				X = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Z = n("./src/reddit/controls/Dropdown/index.tsx"),
				J = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				$ = n("./src/reddit/selectors/tooltip.ts");
			const ee = "mod-log-action-filter-dropdown",
				te = "mod-log-moderator-filter-dropdown",
				ne = Object(g.a)(Z.a),
				se = Object(d.c)({
					isActionFilterDropdownOpen: Object($.b)(ee),
					isModeratorFilterDropdownOpen: Object($.b)(te)
				});
			class ae extends r.a.Component {
				constructor() {
					super(...arguments), this.getContainerText = e => {
						const {
							action: t,
							moderator: n
						} = this.props;
						if (e === v.MODERATOR) {
							let e = n;
							return n === G && (e = a.fbt._("Admins", null, {
								hk: "1qJDMA"
							})), e || a.fbt._("All Moderators", null, {
								hk: "18DhaK"
							})
						}
						if (e === v.ACTION) {
							return t && _[t] && _[t]() || a.fbt._("Actions", null, {
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
						isActionFilterDropdownOpen: n,
						isModeratorFilterDropdownOpen: s,
						moderator: o,
						subredditId: i
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: F.a.container,
						onClickCapture: this.stopPropagation
					}, r.a.createElement("button", {
						"aria-expanded": s,
						"aria-label": a.fbt._("Start typing to filter moderators or use up and down to select.", null, {
							hk: "4ff0MW"
						}),
						className: F.a.selector,
						id: te,
						onClick: this.openModFilterDropdown,
						role: "navigation"
					}, r.a.createElement("span", {
						className: F.a.containerText
					}, this.getContainerText(v.MODERATOR)), r.a.createElement(J.a, null)), r.a.createElement(ne, {
						tooltipId: te,
						isOpen: s
					}, r.a.createElement(Y, {
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
						"aria-expanded": n,
						"aria-label": a.fbt._("Start typing to filter the mod actions or use up and down to select.", null, {
							hk: "32A4KB"
						}),
						className: F.a.selector,
						id: ee,
						onClick: this.openActionFilterDropdown,
						role: "navigation"
					}, r.a.createElement("span", {
						className: F.a.containerText
					}, this.getContainerText(v.ACTION)), r.a.createElement(J.a, null)), r.a.createElement(ne, {
						tooltipId: ee,
						isOpen: n
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
			var oe = Object(i.b)(se, e => ({
					onOpenDropdown: t => e(Object(f.h)({
						tooltipId: t
					})),
					pushUrl: t => e(Object(h.b)(t))
				}))(Object(X.c)(ae)),
				re = n("./node_modules/lodash/noop.js"),
				ie = n.n(re),
				de = n("./src/reddit/components/AuthorLink/index.tsx"),
				le = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				ce = n("./src/reddit/components/HumanDate/index.tsx"),
				me = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ue = n("./src/reddit/models/User/index.ts"),
				pe = (n("./src/lib/assertNever.ts"), n("./src/lib/sentry/index.ts"));
			var be = n("./src/reddit/icons/fonts/index.tsx"),
				he = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				ge = n("./src/reddit/icons/svgs/Collection/index.tsx"),
				fe = n("./src/reddit/icons/svgs/Event/index.tsx"),
				Ee = n("./src/reddit/icons/svgs/Gild/index.tsx"),
				xe = n("./src/reddit/icons/svgs/ModLogPosts/index.tsx"),
				ve = n("./src/reddit/icons/svgs/Negative/index.tsx"),
				_e = n("./src/reddit/icons/svgs/Positive/index.tsx"),
				Ce = n("./src/reddit/icons/svgs/Redditor/index.tsx"),
				ke = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				ye = n("./src/reddit/icons/svgs/Tag/index.tsx"),
				Oe = n("./src/reddit/icons/svgs/Wiki/index.tsx"),
				Se = n("./src/reddit/models/Comment/index.ts"),
				je = n("./src/reddit/models/FeedElement/index.ts"),
				Ne = n("./src/reddit/components/ModerationLog/ModerationLogItem/index.m.less"),
				we = n.n(Ne);
			const Ie = e => {
					let {
						action: t,
						urlPath: n
					} = e;
					const s = (e => {
							switch (e) {
								case "ALL_ACTIONS":
									return;
								case "ADD_CONTRIBUTOR":
								case "ADD_MODERATOR":
									return {
										type: k.REDDITOR, treatment: y.POSITIVE
									};
								case "BAN_USER":
								case "MUTE_USER":
								case "REMOVE_CONTRIBUTOR":
								case "REMOVE_MODERATOR":
									return {
										type: k.REDDITOR, treatment: y.NEGATIVE
									};
								case "CREATE_AWARD":
								case "MOD_AWARD_GIVEN":
									return {
										type: k.AWARD, treatment: y.POSITIVE
									};
								case "DELETE_AWARD":
								case "DISABLE_AWARD":
								case "ENABLE_AWARD":
								case "HIDDEN_AWARD":
									return {
										type: k.AWARD, treatment: y.NEGATIVE
									};
								case "ACCEPT_MODERATOR_INVITE":
								case "INVITE_MODERATOR":
								case "INVITE_SUBSCRIBER":
								case "SET_PERMISSIONS":
								case "UNBAN_USER":
								case "UNINVITE_MODERATOR":
								case "UNMUTE_USER":
									return {
										type: k.REDDITOR, treatment: y.NONE
									};
								case "APPROVE_COMMENT":
								case "SHOW_COMMENT":
									return {
										type: k.COMMENT, treatment: y.POSITIVE
									};
								case "REMOVE_COMMENT":
								case "SPAM_COMMENT":
									return {
										type: k.COMMENT, treatment: y.NEGATIVE
									};
								case "EDIT_FLAIR":
									return {
										type: k.FLAIR, treatment: y.NONE
									};
								case "APPROVE_LINK":
									return {
										type: k.POST, treatment: y.POSITIVE
									};
								case "REMOVE_LINK":
								case "SPAM_LINK":
								case "ADD_REMOVAL_REASON":
									return {
										type: k.POST, treatment: y.NEGATIVE
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
										type: k.POST, treatment: y.NONE
									};
								case "DISTINGUISH":
								case "IGNORE_REPORTS":
								case "SNOOZE_REPORTS":
								case "STICKY":
								case "UNIGNORE_REPORTS":
								case "UNSNOOZE_REPORTS":
								case "UNSTICKY":
									return {
										type: k.MULTIPLE, treatment: y.NONE
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
									return {
										type: k.SETTINGS, treatment: y.NONE
									};
								case "REMOVE_WIKI_CONTRIBUTOR":
								case "WIKI_BANNED":
									return {
										type: k.WIKI, treatment: y.NEGATIVE
									};
								case "WIKI_CONTRIBUTOR":
								case "WIKI_PAGE_LISTED":
								case "WIKI_PERM_LEVEL":
								case "WIKI_REVISE":
								case "WIKI_UNBANNED":
									return {
										type: k.WIKI, treatment: y.NONE
									};
								case "COLLECTIONS":
									return {
										type: k.COLLECTION, treatment: y.NONE
									};
								case "EVENTS":
									return {
										type: k.EVENT, treatment: y.NONE
									};
								case "CREATE_SCHEDULED_POST":
								case "EDIT_SCHEDULED_POST":
								case "DELETE_SCHEDULED_POST":
								case "SUBMIT_SCHEDULED_POST":
									return {
										type: k.POST, treatment: y.NONE
									};
								case "ADD_NOTE":
									return {
										type: k.NOTE, treatment: y.POSITIVE
									};
								case "DELETE_NOTE":
									return {
										type: k.NOTE, treatment: y.NEGATIVE
									};
								default:
									return void pe.c.captureMessage(`Unknown mod action "${e}"`)
							}
						})(t.action),
						a = t.target && t.target.__typename,
						o = a === Se.d.Comment || Se.d.DeletedComment;
					let i;
					switch (s && s.type) {
						case k.AWARD:
							i = r.a.createElement(Ee.a, {
								className: we.a.icon
							});
							break;
						case k.COMMENT:
							i = r.a.createElement(he.a, null);
							break;
						case k.FLAIR:
							i = r.a.createElement(ye.a, {
								className: we.a.icon
							});
							break;
						case k.POST:
							i = r.a.createElement(xe.a, {
								className: we.a.icon
							});
							break;
						case k.REDDITOR:
							i = r.a.createElement(Ce.a, {
								className: we.a.icon
							});
							break;
						case k.SETTINGS:
							i = r.a.createElement(ke.a, {
								className: we.a.icon
							});
							break;
						case k.WIKI:
							i = r.a.createElement(Oe.a, {
								className: we.a.icon
							});
							break;
						case k.COLLECTION:
							i = r.a.createElement(ge.a, {
								className: we.a.icon
							});
							break;
						case k.EVENT:
							i = r.a.createElement(fe.a, {
								className: we.a.icon
							});
							break;
						case k.MULTIPLE:
							o && (i = r.a.createElement(he.a, null)), a === je.a.SubredditPost && (i = r.a.createElement(xe.a, {
								className: we.a.icon
							}));
							break;
						case k.NOTE:
							const e = Object(be.b)("user_note");
							i = r.a.createElement(e, {
								className: we.a.icon,
								style: {
									fontSize: "16px"
								}
							})
					}
					const d = _[t.action];
					return r.a.createElement(O.a, {
						className: we.a.actionLink,
						to: n
					}, r.a.createElement("span", {
						className: we.a.iconWrapper
					}, i, s && s.treatment === y.POSITIVE ? r.a.createElement(_e.a, {
						className: we.a.positiveTreatment
					}) : s && s.treatment === y.NEGATIVE ? r.a.createElement(ve.a, {
						className: we.a.negativeTreatment
					}) : null), d && d())
				},
				Te = e => {
					let {
						action: t
					} = e;
					const n = t.target && t.target.__typename;
					let s, a, o, i = t.target;
					switch (n) {
						case je.a.SubredditPost:
							s = (i = i).authorInfo && i.authorInfo.__typename === ue.c.AvailableRedditor && i.authorInfo.name || null, a = i.title, o = i.permalink;
							break;
						case je.a.DeletedSubredditPost:
							s = null, a = (i = i).title, o = i.permalink;
							break;
						case ue.c.AvailableRedditor:
							s = (i = i) && i.name || null, a = null;
							break;
						case Se.d.Comment:
							s = (i = i).authorInfo && i.authorInfo.__typename === ue.c.AvailableRedditor && i.authorInfo.name || null, a = i.content && i.content.markdown, o = i.permalink;
							break;
						case Se.d.DeletedComment:
							s = null, a = (i = i).postInfo && i.postInfo.title, o = i.postInfo && i.postInfo.permalink;
							break;
						default:
							s = null, a = null, o = void 0
					}
					let d = t.details;
					C[t.details] && (d = t.details && C[t.details]());
					let l = t.actionNotes || d;
					return t.actionNotes && d && (l = `${d}: ${t.actionNotes}`), r.a.createElement("div", {
						className: we.a.detailsContainer
					}, s && !x.includes(s) ? r.a.createElement(le.a, {
						tooltipId: `userlink-${t.id}`,
						user: s,
						sendHoverCardEvent: ie.a
					}, r.a.createElement(de.a, {
						className: we.a.usernameLink,
						author: s
					}, `u/${s}`)) : s, a && o && r.a.createElement("a", {
						className: we.a.detailsContent,
						target: "_blank",
						rel: "noopener noreferrer",
						href: o
					}, a), l && r.a.createElement("span", {
						className: we.a.detailsType
					}, `(${l})`))
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
						moderator: n,
						onHideTooltip: s,
						onShowTooltip: a
					} = this.props, o = this.getTooltipId(e.id), i = this.getActionModeratorName(e.moderator);
					return r.a.createElement("tr", {
						className: we.a.row
					}, r.a.createElement("td", null, r.a.createElement("span", {
						id: o,
						onMouseEnter: () => a(o),
						onMouseLeave: s,
						className: we.a.tooltip
					}, r.a.createElement(ce.d, {
						seconds: e.createdAt / U.Sb
					}), r.a.createElement(me.c, {
						className: we.a.createdAtTooltip,
						tooltipId: o,
						text: this.createTimestamp(e.createdAt)
					}))), r.a.createElement("td", {
						className: we.a.modNameCell
					}, i && !x.includes(i) ? r.a.createElement(le.a, {
						tooltipId: `modlink-${e.id}`,
						user: i,
						sendHoverCardEvent: ie.a
					}, r.a.createElement(de.a, {
						author: i,
						className: we.a.usernameLink
					}, i)) : i), r.a.createElement("td", null, r.a.createElement(Ie, {
						action: e,
						urlPath: N({
							currentPageUrl: t,
							action: e.action,
							moderator: n
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
				Ae = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				Fe = n("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				De = n("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				Le = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				Ue = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				Be = n("./src/reddit/constants/parameters.ts"),
				He = n("./src/reddit/contexts/PageLayer/index.tsx"),
				We = n("./src/reddit/components/ModerationLog/index.m.less"),
				ze = n.n(We);
			const Ve = Object(He.u)({
					currentPageUrl: He.f,
					queryParams: He.W
				}),
				qe = Object(d.c)({
					actionsList: W,
					endCursor: z,
					nextPage: (e, t) => {
						let {
							subredditId: n
						} = t;
						return e.pages.modHub.moderationLog.hasNextPage[n]
					},
					previousPage: (e, t) => {
						let {
							subredditId: n
						} = t;
						return e.pages.modHub.moderationLog.hasPreviousPage[n]
					},
					startCursor: V
				}),
				Ge = Object(i.b)(qe, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						fetchAllModerators: () => e((e => async (t, n, s) => {
							let {
								gqlContext: a
							} = s;
							const o = n(),
								r = Object(u.D)(o, e);
							if (o.pages.modHub.moderationLog.moderators[r]) return;
							const i = await Object(c.b)(a(), e);
							if (i.body) {
								const e = i.body.data.subreddit.moderators;
								if (e) {
									const n = Object(m.a)(e);
									t(b({
										normalizedModerators: n,
										subredditId: r
									}))
								}
							}
						})(n.name))
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
						endCursor: n,
						nextPage: o,
						previousPage: i,
						queryParams: d,
						startCursor: l,
						subredditId: c
					} = this.props, m = d[Be.p] || null, u = d[Be.o] || null, p = {
						currentPageUrl: t,
						action: m,
						moderator: u,
						startCursor: l
					}, b = {
						currentPageUrl: t,
						endCursor: n,
						action: m,
						moderator: u
					};
					return r.a.createElement(Le.a, {
						className: ze.a.contentContainer
					}, r.a.createElement(Le.b, null, a.fbt._("Mod log", null, {
						hk: "UdwRO"
					}), r.a.createElement(Ae.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360022402312`
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
						prevTo: N(p),
						nextButtonEnabled: o,
						nextTo: N(b)
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
					}, r.a.createElement(xe.a, {
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
					}, r.a.createElement(Ce.a, {
						className: ze.a.icon
					}), a.fbt._("User management", null, {
						hk: "NIFnh"
					})), r.a.createElement("div", {
						className: ze.a.iconContainer
					}, r.a.createElement(ke.a, {
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
					}, r.a.createElement(Ee.a, {
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
						prevTo: N(p),
						nextButtonEnabled: o,
						nextTo: N(b)
					})))
				}
			}
			t.a = Ve(Ge(Ke))
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.m.less": function(e, t, n) {
			e.exports = {
				NoResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				noResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				NoResultsText: "_3V0T64xptTp5xLaY-1nsaz",
				noResultsText: "_3V0T64xptTp5xLaY-1nsaz"
			}
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/ModerationPagesEmptyList/index.m.less"),
				i = n.n(r);
			const d = o.a.div("NoResultsContainer", i.a),
				l = o.a.div("NoResultsText", i.a);

			function c(e) {
				const {
					childrenPosition: t = "top"
				} = e;
				return a.a.createElement(d, {
					className: e.className
				}, "top" === t && e.children, a.a.createElement(l, null, e.text), "bottom" === t && e.children)
			}
		},
		"./src/reddit/components/ModeratorsList/AddModeratorModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModeratorsList/InvitePendingModal.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModeratorsList/InvitedModeratorsList.m.less": function(e, t, n) {
			e.exports = {
				ListTitle: "_1LuVAChAgGbcgUPh_K7ebp",
				listTitle: "_1LuVAChAgGbcgUPh_K7ebp",
				ListContainer: "_1IFQy3zyz-Lgs7iYZtQaPI",
				listContainer: "_1IFQy3zyz-Lgs7iYZtQaPI"
			}
		},
		"./src/reddit/components/ModeratorsList/Moderator.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "_2Pdzq06b5akGcY4hZ05n_5",
				pencilIcon: "_2Pdzq06b5akGcY4hZ05n_5",
				TrashIcon: "_2TU9GRodUTR72kz4zcFzxJ",
				trashIcon: "_2TU9GRodUTR72kz4zcFzxJ",
				InteractiveDiv: "qaNZ40bbce8HBshNk04f0",
				interactiveDiv: "qaNZ40bbce8HBshNk04f0"
			}
		},
		"./src/reddit/components/ModeratorsList/ResignAsModeratorModal/index.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_3j2WCnh8ZjDRHIILJwKzkx",
				primaryButton: "_3j2WCnh8ZjDRHIILJwKzkx"
			}
		},
		"./src/reddit/components/ModeratorsList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModeratorsList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/stripQueryParams/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/subredditModeration/index.ts"),
				b = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				h = n("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				g = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				E = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				x = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				k = n("./src/reddit/models/SubredditModeration/index.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/meta.ts"),
				S = n("./src/reddit/selectors/moderatorPermissions.ts"),
				j = n("./src/reddit/selectors/subredditModeration.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				w = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/higherOrderComponents/asModal/index.tsx")),
				I = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				T = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				M = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				P = n("./src/reddit/controls/TextButton/index.tsx"),
				R = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				A = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				F = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				D = n("./src/reddit/components/ModeratorsList/AddModeratorModal/index.m.less"),
				L = n.n(D);
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
							return a.fbt._("Manage Chats", null, {
								hk: "3U1O8t"
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
							return a.fbt._("Create and manage chats, set up filters and rate limits, and block domains.", null, {
								hk: "3wcRBu"
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
						subredditId: n,
						after: s,
						before: a
					} = t;
					return {
						addModerator: (t, s) => e(Object(p.b)(n, t, s)),
						editModerator: (t, s, a) => e(Object(p.d)(n, t, s, a)),
						removeModerator: t => e(Object(p.k)(n, t, s, a))
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
						const n = {
							...this.state.permissions,
							[e]: !t
						};
						"all" === e ? Object.keys(n).forEach(e => n[e] = n.all) : n[e] || (n.all = !1), this.setState({
							permissions: n
						}), this.props.sendEventWithName("permission")()
					}, this.onSubmit = e => {
						e.preventDefault();
						const {
							props: t,
							state: n
						} = this;
						t.isEditingSelf ? t.toggleModal() : (t.isEditingPerms && t.user ? (t.editModerator(n.username, n.permissions, t.user.id), t.sendEventWithName("edit")()) : (t.addModerator(n.username, n.permissions), t.sendEventWithName("invite_moderator")()), t.toggleModal())
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
					} = this, n = ["all", ...Object.keys(t.permissions).filter(e => "all" !== e)];
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
					})), t.permissions && n.map((n, s) => r.a.createElement("div", {
						className: L.a.checkboxContainer,
						key: n
					}, r.a.createElement(M.a, {
						autoFocus: !(!e.isEditingPerms || 0 !== s) || void 0,
						className: L.a.checkbox,
						disabled: e.isEditingSelf,
						isSelected: t.permissions[n],
						onClick: () => this.toggleSelect(n, t.permissions[n]),
						text: U(n)
					}), r.a.createElement("p", {
						className: L.a.checkboxDescription
					}, B(n, e.isModWithUserNotesPermissions)), "all" === n && r.a.createElement("hr", {
						className: L.a.divider
					}))), r.a.createElement("p", {
						className: L.a.automodMore
					}, a.fbt._("*Note: To manage AutoMod, mods must have access to Wiki Pages and Manage Settings. To mute users, mods must have access to Mod Mail and Manage Users.", null, {
						hk: "1AYX38"
					}))), r.a.createElement(I.g, {
						className: L.a.footer
					}, r.a.createElement(_.l, {
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
			var q = Object(w.a)(H(V)),
				G = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = n("./src/reddit/selectors/telemetry.ts");
			const Y = e => ({
					screen: Q.Y(e),
					subreddit: Q.gb(e)
				}),
				X = e => t => ({
					source: "remove_mod_invite",
					action: "click",
					noun: e,
					...Y(t)
				});
			var Z = n("./src/lib/constants/index.ts"),
				J = n("./src/reddit/components/HumanDate/index.tsx"),
				$ = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ee = n("./src/reddit/icons/svgs/Trash/index.tsx"),
				te = n("./src/reddit/components/ModeratorsList/Moderator.m.less"),
				ne = n.n(te);
			const se = e => {
					const t = [],
						n = Object.keys(e);
					return e.all ? U("all") : (n.forEach((function(n) {
						e[n] && t.push(U(n))
					})), 0 === t.length ? a.fbt._("No permissions", null, {
						hk: "3eH05z"
					}) : t.join(", "))
				},
				ae = c.a.wrapped($.a, "PencilIcon", ne.a),
				oe = c.a.wrapped(ee.a, "TrashIcon", ne.a),
				re = c.a.div("InteractiveDiv", ne.a),
				ie = e => r.a.createElement(re, {
					onClick: e.onClick
				}, e.moderatorType === k.c.Editable ? r.a.createElement(ae, null) : r.a.createElement(oe, null));
			var de = e => r.a.createElement(x.b, {
					additionalText: se(e.moderator.modPermissions),
					pageName: Z.fc.Moderators,
					primaryButton: e.moderatorType && e.onClick && r.a.createElement(ie, {
						onClick: e.onClick,
						moderatorType: e.moderatorType
					}),
					timeAgo: r.a.createElement(J.d, {
						seconds: e.moderator.moddedAtUTC
					}),
					subredditId: e.subredditId,
					userIcon: e.moderator.accountIcon,
					username: e.moderator.username,
					moderatorType: e.moderatorType
				}),
				le = n("./src/reddit/components/ModeratorsList/InvitedModeratorsList.m.less"),
				ce = n.n(le);
			const me = c.a.div("ListTitle", ce.a),
				ue = c.a.div("ListContainer", ce.a),
				pe = Object(d.c)({
					invitedModeratorsList: j.f,
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
					const n = () => this.props.sendEvent(X("cancel"));
					return r.a.createElement("div", null, r.a.createElement(me, null, a.fbt._("Invited moderators", null, {
						hk: "2UdpbF"
					})), r.a.createElement(ue, null, e.invitedModeratorsList.map(t => r.a.createElement(de, {
						key: t.id,
						moderator: t,
						moderatorType: k.c.Invited,
						onClick: () => this.onToggleRemovalModal(t),
						subredditId: e.subredditId
					}))), e.isConfirmModalOpen && t.selectedModerator && r.a.createElement(G.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						modalText: a.fbt._("Are you sure you want to rescind the moderator invite to {username}", [a.fbt._param("username", t.selectedModerator.username)], {
							hk: "4c5sRy"
						}),
						onConfirm: () => e.removeInvitedModerator(t.selectedModerator.id),
						toggleModal: this.onToggleRemovalModal,
						onCancel: n,
						onClose: n,
						trackClick: () => this.props.sendEvent(X("remove"))
					}))
				}
			}
			var he = Object(i.b)(pe, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						removeInvitedModerator: t => e(Object(p.j)(n, t)),
						toggleConfirmUserActionModal: () => e(Object(u.i)("ModerationPage--Modal--RemoveModeratorConfirmation"))
					}
				})(Object(K.c)(be)),
				ge = n("./src/reddit/components/ModeratorsList/InvitePendingModal.m.less"),
				fe = n.n(ge);
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xe = Object(i.b)(null, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					acceptInvite: () => e(Object(p.a)(n)),
					declineInvite: () => e(Object(p.c)(n))
				}
			}), ve = c.a.wrapped(I.p, "ModalText", fe.a), _e = c.a.wrapped(ve, "ModalTextBold", fe.a), Ce = c.a.wrapped(_.l, "PrimaryButton", fe.a), ke = c.a.wrapped(_.o, "SecondaryButton", fe.a), ye = c.a.div("Section", fe.a), Oe = c.a.img("Image", fe.a), Se = c.a.wrapped(I.l, "ModalMain", fe.a);
			var je = Object(w.a)(xe(e => r.a.createElement(I.e, null, r.a.createElement(Se, null, r.a.createElement(A.a, null, r.a.createElement("div", null), r.a.createElement(P.a, {
					onClick: e.toggleModal
				}, r.a.createElement(I.b, null))), r.a.createElement(ye, null, r.a.createElement(Oe, {
					src: `${s.a.assetPath}/img/snoo-success@2x.png`
				})), r.a.createElement(_e, null, Ee._("Congrats!", null, {
					hk: "T4Ccw"
				})), r.a.createElement(ve, null, Ee._("You are invited to become a moderator!", null, {
					hk: "1jRLWz"
				}))), r.a.createElement(I.g, null, r.a.createElement(ke, {
					onClick: t => {
						e.toggleModal(), e.declineInvite(), e.sendEventWithName("declineinvite")()
					},
					"data-redditstyle": !0
				}, Ee._("Decline", null, {
					hk: "1iOsJe"
				})), r.a.createElement(Ce, {
					onClick: t => {
						e.toggleModal(), e.acceptInvite(), e.sendEventWithName("acceptinvite")()
					},
					"data-redditstyle": !0
				}, Ee._("Accept", null, {
					hk: "2fkYc4"
				})))))),
				Ne = n("./src/reddit/components/ModeratorsList/ResignAsModeratorModal/index.m.less"),
				we = n.n(Ne);
			const {
				fbt: Ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Te = Object(i.b)(null, (e, t) => {
				let {
					subredditId: n,
					userId: s,
					after: a,
					before: o
				} = t;
				return {
					removeModerator: () => e(Object(p.k)(n, s, a, o))
				}
			}), Me = c.a.wrapped(_.l, "PrimaryButton", we.a);
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
			var Re = Object(w.a)(Te(Pe)),
				Ae = n("./src/reddit/components/ModeratorsList/index.m.less"),
				Fe = n.n(Ae);
			const De = c.a.div("ListContainer", Fe.a),
				Le = c.a.wrapped(_.o, "SecondaryButton", Fe.a),
				Ue = Object(v.u)({
					currentPageUrl: v.f
				}),
				Be = Object(d.c)({
					currentUser: N.k,
					nextAfterToken: j.k,
					nextAfterEditableToken: j.c,
					nextBeforeToken: j.l,
					nextBeforeEditableToken: j.d,
					editableModerators: j.e,
					editableModeratorsList: j.b,
					isInvitePending: j.h,
					moderators: j.o,
					moderatorsList: j.j,
					moderatorPermissions: S.n,
					isAddUserModalOpen: Object(y.b)("ModerationPage--Modal--AddModerator"),
					isEditableListPending: j.a,
					isInvitePendingModalOpen: Object(y.b)("ModerationPage--Modal--InvitePending"),
					isModeratorListPending: j.i,
					isResignAsModeratorModalOpen: Object(y.b)("ModerationPage--Modal--Resign"),
					origin: O.j,
					searchPending: j.m,
					searchResult: j.n,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(S.i)(e, n)
					}
				}),
				He = Object(i.b)(Be, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						searchForModerator: t => e(Object(p.h)(n, t)),
						toggleAddModeratorModal: () => e(Object(u.i)("ModerationPage--Modal--AddModerator")),
						toggleInvitePendingModal: () => e(Object(u.i)("ModerationPage--Modal--InvitePending")),
						toggleResignAsModModal: () => e(Object(u.i)("ModerationPage--Modal--Resign"))
					}
				}),
				We = c.a.div("EditableTitle", Fe.a),
				ze = c.a.wrapped(x.a, "UsersLoading", Fe.a);
			class Ve extends r.a.Component {
				constructor() {
					super(...arguments), this.state = k.a, this.toggleModal = (e, t) => () => {
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
							n = e.isEditableListPending || e.isModeratorListPending;
						return r.a.createElement(r.a.Fragment, null, r.a.createElement(We, null, a.fbt._("You can edit these moderators", null, {
							hk: "1KTZtm"
						})), t && r.a.createElement(E.a, null, r.a.createElement(h.a, {
							prevButtonEnabled: this.isButtonEnabled(e.editableModeratorsList, e.nextBeforeEditableToken),
							prevTo: Object(l.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
								before: e.before,
								beforeEditable: e.nextBeforeEditableToken,
								after: e.after
							}),
							nextButtonEnabled: this.isButtonEnabled(e.editableModeratorsList, e.nextAfterEditableToken),
							nextTo: Object(l.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
								after: e.after,
								afterEditable: e.nextAfterEditableToken,
								before: e.before
							})
						})), r.a.createElement(De, null, e.editableModeratorsList && e.editableModeratorsList.length > 0 ? e.editableModeratorsList.map(e => r.a.createElement(de, {
							key: e.id,
							moderator: e,
							moderatorType: k.c.Editable,
							onClick: this.toggleModal(e.id, e.username),
							subredditId: this.props.subredditId
						})) : n ? r.a.createElement(ze, null) : null))
					}
				}
				componentDidMount() {
					this.props.isInvitePending && !this.props.isInvitePendingModalOpen && this.props.toggleInvitePendingModal()
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = !!e.moderatorPermissions, o = Object(C.a)(e.moderatorPermissions);
					return r.a.createElement(r.a.Fragment, null, n && r.a.createElement(g.c, null, r.a.createElement(Le, {
						onClick: e.toggleResignAsModModal
					}, a.fbt._("Leave as mod", null, {
						hk: "3TwqTg"
					})), o && r.a.createElement(_.l, {
						onClick: this.toggleModal(null, null)
					}, a.fbt._("Invite user as mod", null, {
						hk: "3lJRJW"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Moderators of {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
						hk: "3p7NwA"
					}), r.a.createElement(b.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009381491`
					})), r.a.createElement(E.b, {
						onSearch: this.onSearch,
						activeSearchQuery: t.searchTerm
					}, !t.searchTerm && this.isModeratorsListPaginated() && r.a.createElement(h.a, {
						prevButtonEnabled: this.isButtonEnabled(e.moderatorsList, e.nextBeforeToken),
						prevTo: Object(l.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
							afterEditable: e.afterEditable,
							before: e.nextBeforeToken,
							beforeEditable: e.beforeEditable
						}),
						nextButtonEnabled: this.isButtonEnabled(e.moderatorsList, e.nextAfterToken),
						nextTo: Object(l.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
							after: e.nextAfterToken,
							afterEditable: e.afterEditable,
							beforeEditable: e.beforeEditable
						})
					})), t.searchTerm ? r.a.createElement(f.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && r.a.createElement(de, {
						moderator: e.searchResult,
						moderatorType: e.searchResult.isEditable ? k.c.Editable : void 0,
						onClick: e.searchResult.isEditable ? this.toggleModal(e.searchResult.id, e.searchResult.username) : void 0,
						subredditId: e.subredditId
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(De, null, e.moderatorsList && e.moderatorsList.length > 0 ? e.moderatorsList.map(e => r.a.createElement(de, {
						key: e.id,
						moderator: e,
						subredditId: this.props.subredditId
					})) : e.isModeratorListPending ? r.a.createElement(ze, null) : null), o && r.a.createElement(r.a.Fragment, null, this.renderEditableList(e), r.a.createElement(he, {
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
						isModWithUserNotesPermissions: e.isModWithUserNotesPermissions
					}), e.currentUser && e.isResignAsModeratorModalOpen && r.a.createElement(Re, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId,
						toggleModal: e.toggleResignAsModModal,
						userId: e.currentUser.id,
						withOverlay: !0
					}), e.isInvitePendingModalOpen && r.a.createElement(je, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId,
						toggleModal: e.toggleInvitePendingModal,
						withOverlay: !0
					}))
				}
			}
			t.a = Ue(He(Ve))
		},
		"./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less": function(e, t, n) {
			e.exports = {
				selectedOptionComponentContainer: "_3nUaRUcJJfrvOWldA3i10S",
				closeIcon: "_1RvgsgnXdbtv2cwTTTbT7o",
				selectedOptionComponentContainerError: "_2Qpr0YORGp3CmDjJW9Txrf"
			}
		},
		"./src/reddit/components/MultiOptionSelect/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/some.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less"),
				c = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
						divRef: n,
						handleOnMouseEnter: s,
						handleOptionSelected: a,
						index: o,
						className: d,
						...l
					} = this.props;
					return r.a.createElement("div", m({
						className: Object(i.a)(c.a.availableOptionContainer, d)
					}, l, {
						onMouseEnter: this.handleMouseEnter,
						onClick: this.handleClick,
						ref: n
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
					if (e.clipboardData.types.includes("text/plain")) return e.preventDefault(), e.stopPropagation(), void this.handleOptionsSelected(e.clipboardData.getData("text/plain").split(d.b.Comma).filter(e => !!e).map(e => ({
						id: null,
						displayText: e.trim(),
						selected: !0
					})))
				}
				handleKeyPress(e) {
					const {
						splitOnCommaPress: t
					} = this.props;
					return e.which === d.a.ArrowUp ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex - 1 > -1 ? this.state.selectedIndex - 1 : this.getOptionsLength() - 1)) : e.which === d.a.ArrowDown ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex + 1 < this.getOptionsLength() ? this.state.selectedIndex + 1 : 0)) : e.which === d.a.Comma && t ? (e.preventDefault(), e.stopPropagation(), this.handleFreeTextOptionSelected()) : e.which === d.a.Enter ? (e.preventDefault(), e.stopPropagation(), !this.validOptionSelected() || this.freeTextOptionSelected() ? this.handleFreeTextOptionSelected() : this.handleOptionSelected(this.props.selectableOptions[this.state.selectedIndex])) : void 0
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
						const n = [this.state.selectedIndex === t ? c.a.activeOption : c.a.option];
						return this.freeTextEntryActive() && t === this.props.selectableOptions.length - 1 && n.push(c.a.lastFixedOption), r.a.createElement(u, {
							key: e.id,
							className: Object(i.a)(...n),
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
			var b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less"),
				g = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var E = e => {
					const {
						className: t,
						innerRef: n,
						onClickHandler: s,
						option: a,
						maxLength: o,
						...d
					} = e, l = [g.a.selectedOptionComponentContainer, t];
					return o && o < a.displayText.length && l.push(g.a.selectedOptionComponentContainerError), r.a.createElement("div", f({
						className: Object(i.a)(...l),
						ref: n
					}, d, {
						onClick: s
					}), a.displayText, r.a.createElement(b.a, {
						className: g.a.closeIcon
					}))
				},
				x = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/helpers/readOnlyMode/index.ts"),
				_ = n("./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less"),
				C = n.n(_);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 10,
				O = e => e.stopPropagation();
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.handleKeyPress = e => {
						e.which !== d.a.Delete && e.which !== d.a.Backspace || !this.lastSelectedOptionComponentRef.current || "" !== this.props.value || (this.lastSelectedOptionComponentRef.current.focus(), e.preventDefault(), e.stopPropagation())
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
					this.state.isHoveringOverSelectedOption || e.which !== d.a.Delete && e.which !== d.a.Backspace || (e.preventDefault(), e.stopPropagation(), this.deselectOption(t), this.focus())
				}
				render() {
					const e = {};
					Object(v.c)(this.props.readOnlyMode) || (e.tabIndex = 0);
					const t = this.props.selectedOptionComponent || E,
						n = "number" == typeof this.props.maxOptionsToDisplay && this.props.options.length > this.props.maxOptionsToDisplay;
					return r.a.createElement("div", k({
						"aria-invalid": this.props.isError,
						className: Object(i.a)(this.props.className, C.a.optionSearchBarContainer, {
							[C.a.optionSearchBarError]: this.props.isError,
							[C.a.optionSearchBarReadOnly]: Object(v.c)(this.props.readOnlyMode)
						}),
						ref: this.containerRef,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur
					}, e), this.props.options.map((e, s) => {
						if (!(n && s >= (this.props.maxOptionsToDisplay || 0))) return r.a.createElement(t, {
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
							innerRef: s === this.props.options.length - 1 ? this.lastSelectedOptionComponentRef : void 0
						})
					}), n && r.a.createElement("span", {
						className: C.a.optionsOverflowIndication
					}, `+${this.props.options.length-(this.props.maxOptionsToDisplay||0)}`), this.props.children, !Object(v.c)(this.props.readOnlyMode) && r.a.createElement("input", {
						className: Object(i.a)(C.a.input, {
							[C.a.hiddenInput]: Object(v.b)(this.props.readOnlyMode)
						}),
						ref: this.inputRef,
						type: "text",
						onKeyDown: this.handleKeyPress,
						value: this.props.value,
						onChange: this.props.onInputChanged,
						maxLength: this.props.maxLength
					}), this.props.isLoading && r.a.createElement(x.a, {
						className: C.a.loadingIcon,
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
			var j = n("./node_modules/reselect/es/index.js");
			const N = [],
				w = {};
			class I extends r.a.Component {
				constructor(e) {
					super(e), this._selectableOptionsSelector = Object(j.a)(e => e.availableOptions || N, e => e.input, (e, t) => e.filter(e => {
						const n = e.displayText.toLowerCase(),
							s = t.toLowerCase();
						return 0 === n.indexOf(s) || a()(n.split(/[\s\/]+/), e => 0 === e.indexOf(s))
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
						childClassNames: e = w
					} = this.props;
					return r.a.createElement("div", {
						className: this.props.className,
						onKeyDown: this.onKeyDown,
						onPaste: this.onPaste
					}, r.a.createElement(S, {
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
		"./src/reddit/components/MutedUserList/ExpandedComponent.m.less": function(e, t, n) {
			e.exports = {
				BannedBy: "_2004IKQq9AjT3xoiDBg7m_",
				bannedBy: "_2004IKQq9AjT3xoiDBg7m_",
				EmptyState: "_1O-zxip2q_mFxBe_WVFPZC",
				emptyState: "_1O-zxip2q_mFxBe_WVFPZC",
				ExpandedContainer: "_1EEdKUOD4OiTBBQQkot-L9",
				expandedContainer: "_1EEdKUOD4OiTBBQQkot-L9"
			}
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_16-AoomiQ2Zxycd1wA0ZL-",
				primaryButton: "_16-AoomiQ2Zxycd1wA0ZL-",
				ModalText: "_3P1niYqJc2au-fmA-xIl7i",
				modalText: "_3P1niYqJc2au-fmA-xIl7i"
			}
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/subredditModeration/mute.ts"),
				c = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				g = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				f = n("./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.m.less"),
				E = n.n(f);
			const x = 300,
				v = Object(r.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						onMuteUser: (t, s) => e(Object(l.a)(n, t, s))
					}
				}),
				_ = d.a.wrapped(p.l, "PrimaryButton", E.a),
				C = d.a.wrapped(m.p, "ModalText", E.a);
			class k extends o.a.Component {
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
					return o.a.createElement(m.e, null, o.a.createElement(m.i, null, o.a.createElement(g.a, null, o.a.createElement(m.q, null, s.fbt._("Mute user", null, {
						hk: "326ljo"
					}), e.username && `: u/${e.username}`), o.a.createElement(b.a, {
						onClick: e.toggleModal
					}, o.a.createElement(m.b, null)))), o.a.createElement(m.l, null, !e.username && o.a.createElement(m.h, null, o.a.createElement(u.d, {
						autoFocus: !0,
						placeholder: s.fbt._("Username to mute", null, {
							hk: "3GB7UW"
						}),
						onChange: this.onUsernameChange,
						value: this.state.username,
						"data-redditstyle": !0
					})), o.a.createElement(m.h, null, o.a.createElement(C, null, s.fbt._("Note about why they are muted", null, {
						hk: "12YIn5"
					})), o.a.createElement(m.f, null, s.fbt._("Only visible to other moderators. Not visible to user", null, {
						hk: "4Ahum2"
					}))), o.a.createElement(m.t, {
						maxLength: x,
						onChange: this.onReasonChange,
						placeholder: s.fbt._("Reason they were muted", null, {
							hk: "3E29Hf"
						}),
						value: this.state.reason,
						"data-redditstyle": !0
					}), o.a.createElement(c.a, {
						maxChars: x,
						text: this.state.reason
					})), o.a.createElement(m.g, null, o.a.createElement(m.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(_, {
						onClick: this.onSubmit,
						"data-redditstyle": !0,
						disabled: !e.username && !Object(h.a)(t.username)
					}, s.fbt._("Mute user", null, {
						hk: "1z1Ss8"
					}))))
				}
			}
			t.default = Object(i.a)(v(k))
		},
		"./src/reddit/components/MutedUserList/index.m.less": function(e, t, n) {
			e.exports = {
				MuteIcon: "XHViv8EEjdjsATc3T66r9",
				muteIcon: "XHViv8EEjdjsATc3T66r9"
			}
		},
		"./src/reddit/components/MutedUserList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditModeration/mute.ts"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				h = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				g = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = n("./src/reddit/components/Scroller/Simple.tsx"),
				E = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				x = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/models/SubredditModeration/index.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/muted.ts"),
				S = n("./src/reddit/components/MutedUserList/ExpandedComponent.m.less"),
				j = n.n(S),
				N = n("./src/lib/lessComponent.tsx");
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = N.a.span("BannedBy", j.a), T = N.a.span("EmptyState", j.a), M = N.a.div("ExpandedContainer", j.a);
			var P = e => r.a.createElement(M, null, e.reason ? r.a.createElement(I, null, w._("Mod note {mutedByUsername}", [w._param("mutedByUsername", e.mutedBy)], {
					hk: "15D34v"
				})) : r.a.createElement(T, null, w._("No mod note.", null, {
					hk: "3rpIuv"
				})), e.reason),
				R = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				A = n("./src/reddit/components/MutedUserList/index.m.less"),
				F = n.n(A);
			const D = 24,
				L = Object(d.c)({
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
						subredditId: n
					} = t;
					return {
						loadMore: t => e(Object(m.b)(n, {
							after: t
						})),
						searchForMutedUser: t => e(Object(m.c)(n, t)),
						toggleAddUserModal: () => e(Object(c.i)("ModerationPage--Modal--AddUser")),
						toggleUnmuteUserModal: () => e(Object(c.i)("ModerationPage--Modal--RemoveUserConfirmation")),
						unmuteUser: t => () => e(Object(m.d)(n, t))
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
						pageName: l.fc.Muted,
						primaryButton: r.a.createElement(_.r, {
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
					}), this.state = k.a
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						mutedUsers: n
					} = e;
					let o;
					return n.length && (o = n[n.length - 1].id), e.mutedUsers.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(_.l, {
						onClick: this.muteUser
					}, a.fbt._("Mute user", null, {
						hk: "4AJ7nf"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Muted users", null, {
						hk: "2kc6Jt"
					}), r.a.createElement(h.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), r.a.createElement(x.b, {
						onSearch: this.onSearch,
						activeSearchQuery: t.searchTerm
					}), t.searchTerm ? r.a.createElement(E.a, {
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
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(_.l, {
						onClick: this.muteUser
					}, a.fbt._("Mute user", null, {
						hk: "4AJ7nf"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Muted users", null, {
						hk: "2kc6Jt"
					}), r.a.createElement(h.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), e.mutedUsersListPending ? r.a.createElement(v.a, null) : r.a.createElement(b.c, {
						text: a.fbt._("No muted users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1o0lOP"
						})
					}, r.a.createElement(C.a, {
						name: "mod_mute",
						className: F.a.MuteIcon
					})), e.isAddUserModalOpen && this.renderMuteUserModal()))
				}
			}
			t.a = U(B)
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, n) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/components/RichTextJson/index.tsx"),
				d = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				c = n.n(l);
			const m = Object(r.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: n,
					post: s
				} = e;
				return a.a.createElement(i.a, {
					className: Object(o.a)(c.a.RecommendationContextStyles, {
						[c.a.classicLayout]: n === d.g.Classic,
						[c.a.compactLayout]: n === d.g.Compact,
						[c.a.largeLayout]: n === d.g.Large
					}),
					content: t,
					rtJsonElementProps: m(s),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/Paginator/index.m.less": function(e, t, n) {
			e.exports = {
				controlRow: "_2ixigr45sqDsYvVlMBgbMm",
				nextButtonContainer: "CloCv22o0KvzOk8LzB4VX",
				prevButtonContainer: "_2Tfdm_mlb1NvgbaCCkMtdV",
				nextButton: "_1VFGYMJpiKtL_S9_RYS-CD",
				prevButton: "eX92mTA_HDG9gpfIzIGhs"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				l = n.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: r,
					post: d,
					redditStyle: m,
					theme: u,
					...p
				} = e;
				return a.a.createElement("div", c({
					className: Object(o.a)(l.a.backgroundWrapper, n),
					style: Object(i.c)(s, e),
					onClick: r
				}, p), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/ads/index.ts"),
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				d = n("./src/reddit/helpers/trackers/gallery.ts"),
				l = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = n("./src/reddit/hooks/useTracking.ts");
			var m = a.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(c.a)(),
						o = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(d.d(e.postId))
							})
						}, [n, e.postId]),
						r = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(l.a)(t, o, r), a.a.createElement("div", {
						role: "presentation"
					}, a.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/lib/classNames/index.ts"),
				E = n("./src/lib/objectSelector/index.ts"),
				x = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = n("./src/reddit/components/PostContainer/index.m.less"),
				_ = n.n(v);
			const C = Object(p.a)(() => Object(o.c)({
				basePixelMetadata: Object(E.a)((e, t) => {
					let {
						post: n
					} = t;
					return Object(h.b)(e, n.id)
				}),
				clickTrackingId: (e, t) => {
					let {
						post: n
					} = t;
					return n.id
				},
				imageGalleryCurrentItem: (e, t) => {
					let {
						post: n
					} = t;
					return Object(h.i)(e, {
						postId: n.id
					})
				},
				pageType: e => Object(g.d)(e).pageType
			}));
			class k extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: o,
						makePostContainerId: l,
						post: c,
						onClick: u,
						pageType: p,
						sendEvent: h,
						style: g,
						ref: E,
						shouldAddGalleryViewability: x = !0
					} = this.props, v = a.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: E,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => u && u(n, c, t, o, p))(n), c.id && o) {
								const {
									source: e
								} = Object(r.t)(c, o);
								e && e.outboundUrl && h(Object(d.c)(c.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(_.a.WrappedPost, s, `Post ${c.id}`, {
							promotedlink: c.isSponsored
						}),
						"data-testid": "post-container",
						id: l ? l(c.id) : c.id,
						tabIndex: -1
					}, n), C = !!c.media && c.media.type === b.o.VIDEO;
					return c.isSponsored || C ? a.a.createElement(i.a, {
						post: c,
						trackDisplay: !0
					}, v) : c.media && Object(b.E)(c.media) && x ? a.a.createElement(m, {
						postId: c.id
					}, v) : v
				}
			}
			t.a = C(Object(x.a)(Object(u.c)(k)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/trackers/postCollection.ts"),
				u = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(u);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: a
						} = this.props, o = !!s;
						a(e ? Object(m.o)({
							postId: n,
							isFollowed: o
						}) : Object(m.g)({
							postId: n,
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
						post: n
					} = this.props, a = this.state.isHovered, r = n.isFollowed;
					let i = r ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return r && a && (i = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(d.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
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
					post: n
				} = t;
				return {
					onFollow: () => e(Object(l.A)(n.isSponsored ? n.postId : n.id))
				}
			})(Object(c.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/CrosspostBox/index.tsx"),
				r = n("./src/reddit/components/Media/index.tsx");

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
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/PostLeftRail/index.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.tsx"),
				l = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = n.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: g,
					isOverlay: f,
					isVoteCountAnimation: E,
					postId: x,
					shouldShowUpvoteRatioOnHover: v
				} = e, _ = `upvote-button-${t.id}${f?"-overlay":""}`;
				return a.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(l.b)(t) && t.isSponsored,
					redditStyle: g
				}, s && a.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), a.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: g,
					upvoteTooltipId: _,
					isVoteCountAnimation: E,
					isCountAnimShadowTestEnabled: p,
					postId: x,
					scoreClassName: Object(o.a)(u.a.score, {
						[u.a.allowPointerEvents]: v
					}),
					shouldShowUpvoteRatioOnHover: v
				}))
			}
		},
		"./src/reddit/components/PowerupsSettings/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PowerupsSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/config.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/actions/gold/powerups.ts"),
				c = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				m = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/economics/powerups/index.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				g = n("./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx"),
				f = n("./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts"),
				E = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/helpers/trackers/powerups.ts"),
				v = n("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/gold/powerups/index.ts"),
				k = n("./src/reddit/components/PowerupsSettings/index.m.less"),
				y = n.n(k);
			const O = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(o.d)(),
					r = Object(d.a)(),
					[l, c] = Object(s.useState)(null),
					m = () => c(null),
					[k, O] = Object(s.useState)(!1),
					S = Object(o.e)(e => Object(C.i)(e, {
						subredditId: t
					})),
					{
						uploadInput: j,
						maxEmojisUploading: N,
						numUploading: w,
						onFileChange: I,
						onClickUpload: T
					} = Object(f.a)(t, S, e => {
						n(Object(b.f)({
							duration: b.a,
							kind: _.b.Error,
							text: i.fbt._({
								"*": "You can only add {number} more emojis.",
								_1: "You can only add 1 more emoji."
							}, [i.fbt._plural(e, "number")], {
								hk: "117Ker"
							})
						}))
					}, e => {
						r(Object(x.a)(e, "mod_tools"))
					}, e => {
						r(Object(x.A)(e, "mod_tools")), n(Object(b.f)({
							duration: b.a,
							kind: _.b.SuccessCommunity,
							text: i.fbt._({
								"*": "Looking good! Emojis added.",
								_1: "Looking good! Emoji added."
							}, [i.fbt._plural(e)], {
								hk: "43WkeN"
							})
						}))
					}, e => {
						n(Object(b.f)({
							duration: b.a,
							kind: _.b.Error,
							text: i.fbt._({
								"*": "Failed to upload {number} emojis",
								_1: "Failed to upload 1 emoji"
							}, [i.fbt._plural(e, "number")], {
								hk: "2s093I"
							})
						}))
					}),
					M = N;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("input", {
					ref: j,
					className: y.a.uploadInput,
					onChange: I,
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), w ? a.a.createElement("div", {
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
				})), S.map(e => a.a.createElement(h.a, {
					key: e.id,
					className: y.a.emoteButton,
					containerClassName: y.a.emoteButtonContainer,
					imageClassName: y.a.customEmoteImage,
					imagePath: e.emoji.path,
					onClickDelete: () => c(e),
					mouseEnterBufferTime: 0
				})), [...Array(w)].map((e, t) => a.a.createElement("div", {
					key: t,
					className: Object(u.a)(y.a.emoteButton, y.a.placeholderEmoteButton)
				}, a.a.createElement(E.a, {
					sizePx: 12,
					center: !0
				}))), l && a.a.createElement(g.a, {
					emojiUrl: l.emoji.path,
					onCancel: m,
					onClose: m,
					onConfirm: async () => {
						if (l && !k) try {
							O(!0), await n(Object(p.a)({
								subredditId: t,
								emojiId: l.id
							})), m(), r(Object(x.d)(1, "mod_tools")), n(Object(b.f)({
								duration: b.a,
								kind: _.b.SuccessCommunity,
								text: i.fbt._("Emoji removed.", null, {
									hk: "3Ox8xb"
								})
							}))
						} catch (e) {
							n(Object(b.f)({
								duration: b.a,
								kind: _.b.Error,
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
			var S = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				j = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				N = n("./src/reddit/models/Gold/Powerups/index.ts"),
				w = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				I = n("./src/reddit/selectors/subreddit.ts");
			const T = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(o.d)(),
					s = Object(d.a)(),
					u = Object(o.e)(e => Object(C.h)(e, {
						subredditId: t
					})),
					p = Object(o.e)(e => Object(I.S)(e, {
						subredditId: t
					})),
					b = Object(o.e)(e => Object(w.a)(e, {
						subredditId: t
					})),
					h = (null == b ? void 0 : b[N.a.CommentsWithGifs]) || !1;
				return a.a.createElement(m.a, {
					className: y.a.contentContainer
				}, a.a.createElement(m.b, null, i.fbt._("Powerups settings", null, {
					hk: "1OxM4K"
				}), a.a.createElement(c.a, {
					linkUrl: `${r.a.redditModHelpUrl}/hc/en-us/articles/4403699823629`
				})), a.a.createElement("div", {
					className: y.a.formContainer
				}, u && a.a.createElement(a.a.Fragment, null, a.a.createElement(S.a, null, i.fbt._("Comments", null, {
					hk: "1TCs6F"
				})), a.a.createElement(j.p, {
					on: h,
					onClick: () => (e => {
						s(Object(x.I)("comments_with_gifs", e, !e)), n(Object(l.n)(t, {
							[N.a.CommentsWithGifs]: e
						}))
					})(!h),
					label: i.fbt._("Allow GIFs in comments", null, {
						hk: "2nJiHt"
					}),
					subtext: i.fbt._("It may take a few minutes to update", null, {
						hk: "aU7tk"
					})
				}), a.a.createElement(j.l, {
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
		"./src/reddit/components/ProgressBar/index.m.less": function(e, t, n) {
			e.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/ProgressBar/index.m.less"),
				i = n.n(r);
			t.a = e => {
				let {
					className: t,
					innerBarClassName: n,
					percent: s
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(i.a.outerBar, t)
				}, a.a.createElement("div", {
					className: Object(o.a)(i.a.innerBar, n),
					style: {
						width: `${s.toFixed(2)}%`
					}
				}))
			}
		},
		"./src/reddit/components/RecurringPostList/ChangePageButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1i9YssSDgp0wmEC43VdLTX",
				prevButton: "_2IBDYNRoTxtwgs13LWRpeM",
				arrowIcon: "QD6Re7us6VNRFNYSiD6to",
				disabled: "_3Lm3n-nPFfEcJoNjVwcm3r"
			}
		},
		"./src/reddit/components/RecurringPostList/EditModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-RecurringPostList-EditModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-RecurringPostList-EditModal").then(n.bind(null, "./src/reddit/components/RecurringPostList/EditModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/RecurringPostList/EditModal/index.tsx"
				}
			})
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/ContentMeta/index.m.less": function(e, t, n) {
			e.exports = {
				contentRow: "Bt3uIal7yhwFSN9JorIng",
				contentRowMeta: "t6hD4d7F06TL2yv9vfp7h",
				title: "_3Evplg8YGmH6GDFsdQ0_nE",
				ownerName: "_215cUXwEuCE5hl0eYEIt_o",
				ownerNameContainer: "_2yAEv_Vw_ItUYbNbAjpSsL"
			}
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/RecurringPostList/RecurringPost/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return R
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/scheduledPosts/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/Thumbnail/index.tsx"),
				p = n("./src/reddit/components/RecurringPostList/Thumbnail/index.m.less"),
				b = n.n(p);
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
				g = n("./src/reddit/components/ScheduledPost/index.tsx"),
				f = n("./src/reddit/models/ScheduledPost/index.ts"),
				E = n("./node_modules/reselect/es/index.js"),
				x = n("./src/reddit/components/RecurringPostList/RecurringPost/ContentMeta/index.m.less"),
				v = n.n(x);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = Object(E.c)({
				media: (e, t) => {
					let {
						scheduledPost: n
					} = t;
					return {
						...g.b,
						isNSFW: n.isNsfw,
						title: n.title
					}
				}
			});
			var k = Object(o.b)(C)(e => {
					const {
						scheduledPost: t
					} = e, {
						isPostAsMetaMod: n,
						owner: s
					} = t, o = n ? c.l : Object(f.n)(s) ? s.name : void 0;
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
					}, _._("by {username}", [_._param("username", a.a.createElement(m.a, {
						author: o,
						isUnstyled: !0
					}, `u/${o}`))], {
						hk: "FAgpK"
					})), e.children)))
				}),
				y = n("./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx");
			var O = Object(y.a)(e => a.a.createElement(a.a.Fragment, null, e.renderOverflowMenu())),
				S = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				j = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				N = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				w = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				I = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				T = n("./src/reddit/components/RecurringPostList/RecurringPost/index.m.less"),
				M = n.n(T);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = "RECURRING_POSTS__EDIT", A = Object(o.b)(null, (e, t) => ({
				editRecurringPostRequested: () => {
					e(Object(l.c)({
						id: t.item.id,
						subredditId: t.item.subreddit.id
					})), e((e, t) => Object(r.a)(Object(N.e)()(t()))), e(Object(d.i)(R))
				},
				onOpenOverflow: () => {
					e((e, t) => Object(r.a)(Object(N.h)(!0)(t())))
				},
				onUpdateMetadata: n => e(Object(l.b)(n, t.item))
			}));
			class F extends a.a.PureComponent {
				render() {
					const {
						className: e,
						item: t,
						editRecurringPostRequested: n
					} = this.props, s = Object(j.e)(t), o = t.state === f.e.FAILED, {
						owner: r
					} = t, d = Object(f.n)(r) && r.prefixedName;
					return a.a.createElement("div", {
						className: Object(i.a)(e, M.a.container)
					}, o && a.a.createElement("div", {
						className: M.a.failedStateIndicator
					}, P._("Recurring post failed to submit. {Link: update recurring scheduled post} to reset", [P._param("Link: update recurring scheduled post", a.a.createElement(S.o, {
						onClick: n
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
						title: s
					}, s), a.a.createElement("div", null, P._("Scheduled by {=[post owner]}", [P._param("=[post owner]", a.a.createElement("span", {
						className: M.a.parametricMetaData
					}, P._("{post owner}", [P._param("post owner", d)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					}))), a.a.createElement("button", {
						onClick: n
					}, a.a.createElement(w.a, {
						className: M.a.pencilIcon
					}))), a.a.createElement(k, {
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
		"./src/reddit/components/RecurringPostList/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				placeholderIcon: "_2rWvDY38-Fa_14y347Il6W",
				thumbnailContainer: "_3cYCw7NYRAJwj6LvL8esBu"
			}
		},
		"./src/reddit/components/RecurringPostList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Dropdown/index.tsx"),
				d = n("./src/reddit/controls/Dropdown/Row.tsx"),
				l = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				m = n("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				u = n.n(m);
			const p = r.a.wrapped(c.a, "DisplayContainer", u.a),
				b = r.a.div("DropdownLabel", u.a),
				h = r.a.div("ReasonTitle", u.a),
				g = e => o.a.createElement(p, null, o.a.createElement(b, null, e.dropdownLabel), e.selectedReason && o.a.createElement(h, null, e.selectedReason)),
				f = r.a.wrapped(i.a, "Dropdown", u.a),
				E = r.a.wrapped(l.b, "DropdownTriangle", u.a),
				x = r.a.wrapped(d.b, "DropdownRow", u.a),
				v = r.a.button("DropdownContainer", u.a);
			t.a = e => o.a.createElement(v, {
				onClick: e.onToggleDropdown
			}, o.a.createElement(g, {
				dropdownLabel: e.isLoading ? s.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : s.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), o.a.createElement(E, null), e.isDropdownOpen && o.a.createElement(f, {
				isOverlay: !0
			}, o.a.createElement(x, {
				displayText: s.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, n) => o.a.createElement(x, {
				displayText: `${n+1}. ${t.title}`,
				key: t.title,
				onClick: () => e.onSelectReason(t)
			}))))
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "dispatcher", (function() {
				return w
			})), n.d(t, "selector", (function() {
				return I
			})), n.d(t, "connector", (function() {
				return T
			})), n.d(t, "CharacterCountdown", (function() {
				return M
			})), n.d(t, "EmptyState", (function() {
				return P
			})), n.d(t, "MessageInput", (function() {
				return U
			})), n.d(t, "FormOptionsContainer", (function() {
				return W
			})), n.d(t, "ModalFooter", (function() {
				return z
			})), n.d(t, "ButtonRow", (function() {
				return q
			})), n.d(t, "AddRemovalReasonModal", (function() {
				return G
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/removalReasons/index.ts"),
				c = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = n("./src/reddit/controls/TextButton/index.tsx"),
				f = n("./src/reddit/icons/fonts/Info/index.tsx"),
				E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				x = n("./src/reddit/models/RemovalReason/index.ts"),
				v = n("./src/reddit/selectors/removalReasons.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				y = n("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				O = n.n(y);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
				switch (e) {
					case x.f.Private:
						return "private_subreddit";
					case x.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, N = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: x.f.Public,
				selectedReason: null
			}, w = e => ({
				submitBulkRemovalReason: (t, n, s, a, o) => e(Object(l.submitBulkRemovalReason)(t, n, s, a, o)),
				submitRemovalReason: (t, n, s, a, o) => e(Object(l.submitRemovalReason)(t, n, s, a, o))
			}), I = Object(r.c)({
				currentUserName: e => {
					const t = Object(C.k)(e);
					if (t) return t.displayText
				},
				isLoading: v.a,
				removalReasons: v.c,
				subredditName: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(_.S)(e, {
						subredditId: n
					}).name
				}
			}), T = Object(o.b)(I, w), M = d.a.wrapped(c.a, "CharacterCountdown", O.a), P = d.a.div("EmptyState", O.a), R = d.a.wrapped(m.o, "ModNoteDescription", O.a), A = d.a.wrapped(u.l, "PrimaryButton", O.a), F = d.a.wrapped(h.a, "RadioOption", O.a), D = d.a.span("BoldText", O.a), L = d.a.wrapped(m.t, "ModNoteInput", O.a), U = d.a.wrapped(m.t, "MessageInput", O.a), B = d.a.wrapped(f.a, "Info", O.a), H = d.a.div("SmallInfoText", O.a), W = d.a.div("FormOptionsContainer", O.a), z = d.a.wrapped(m.g, "ModalFooter", O.a), V = d.a.div("FooterRow", O.a), q = d.a.wrapped(V, "ButtonRow", O.a);
			class G extends a.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick(`type_${j(e)}`)()
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
					}, this.canSave = () => !(this.state.message.length > x.a || this.state.modNote.length > x.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === x.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick(`sent_${j(t.removalType)}`)(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, n = [];
						return t.removalContextType !== x.e.Bulk && n.push(a.a.createElement(F, {
							key: x.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: x.f.Public
						}, a.a.createElement("div", null, t.removalContextType === x.e.Post ? S._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : S._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), n.push(a.a.createElement(F, {
							key: x.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: x.f.Private
						}, a.a.createElement("div", null, S._("Private: send a Modmail from {subredditName} to the user", [S._param("subredditName", a.a.createElement(D, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && n.push(a.a.createElement(F, {
							key: x.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: x.f.PrivateExposed
						}, a.a.createElement("div", null, S._("Private: send a Modmail from {currentUserName} to the user", [S._param("currentUserName", a.a.createElement(D, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), n
					}, this.state = {
						...N,
						removalContextType: Object(x.g)(e.itemIds)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return a.a.createElement(m.e, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && a.a.createElement(m.i, null, a.a.createElement(E.a, null, a.a.createElement(m.q, null, S._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && S._("({number of items} posts/comments)", [S._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), a.a.createElement(g.a, {
						onClick: this.onCancel
					}, a.a.createElement(m.b, null)))), a.a.createElement(m.l, null, e.isLoading || e.removalReasons.length > 0 ? a.a.createElement(k.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : a.a.createElement(P, null, S._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), a.a.createElement(p.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, a.a.createElement(u.r, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, S._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && a.a.createElement(W, null, a.a.createElement(m.h, null, a.a.createElement(b.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), a.a.createElement(U, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), a.a.createElement(M, {
						maxChars: x.a,
						text: t.message.trim()
					}), a.a.createElement(H, null, t.removalType !== x.f.Public && a.a.createElement(a.a.Fragment, null, a.a.createElement(B, null), S._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), a.a.createElement(z, null, a.a.createElement(V, null, a.a.createElement(R, null, S._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), a.a.createElement(V, null, a.a.createElement(L, {
						placeholder: S._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), a.a.createElement(V, null, a.a.createElement(M, {
						maxChars: x.b,
						text: t.modNote.trim()
					})), a.a.createElement(q, null, a.a.createElement(u.o, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, S._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(A, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, S._("Submit", null, {
						hk: "4aU3dh"
					})))))
				}
			}
			t.default = Object(i.a)(T(G))
		},
		"./src/reddit/components/RemovalReasons/RemovalReasonEditorModal.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/RemovalReasonItem.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/constants/colors.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/removalReasons/index.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = n("./src/reddit/components/ContentTooltip/index.tsx"),
				h = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				g = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				E = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/helpers/localStorage/index.ts"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/models/RemovalReason/index.ts"),
				k = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/removalReasons.ts"),
				O = n("./src/higherOrderComponents/asModal/index.tsx"),
				S = n("./src/lib/lessComponent.tsx"),
				j = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				N = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				w = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				I = n("./src/reddit/controls/TextButton/index.tsx"),
				T = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				M = n("./src/reddit/components/RemovalReasons/RemovalReasonEditorModal.m.less"),
				P = n.n(M);
			const R = {
					message: "",
					title: ""
				},
				A = S.a.wrapped(N.f, "GenericGreetingText", P.a),
				F = S.a.wrapped(N.s, "DeleteReasonButton", P.a),
				D = S.a.wrapped(x.l, "PrimaryButton", P.a),
				L = S.a.wrapped(N.t, "TextArea", P.a),
				U = S.a.wrapped(N.g, "ModalFooter", P.a),
				B = S.a.wrapped(w.c, "Input", P.a);
			class H extends r.a.Component {
				constructor(e) {
					super(e), this.onTitleInputChange = e => {
						e.currentTarget.value.length <= C.d && this.setState({
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
					}, this.canSave = () => this.state.title.trim().length > 0 && this.state.title.trim().length <= C.d && this.state.message.trim().length > 0 && this.state.message.trim().length <= C.a, this.state = e.removalReason ? {
						title: e.removalReason.title,
						message: e.removalReason.message
					} : R
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(N.e, null, r.a.createElement(N.i, null, r.a.createElement(T.a, null, r.a.createElement(N.q, null, e.removalReason ? a.fbt._("Edit removal reason", null, {
						hk: "1P0jAw"
					}) : a.fbt._("Add new reason", null, {
						hk: "jDYo"
					})), r.a.createElement(I.a, {
						onClick: e.toggleModal
					}, r.a.createElement(N.b, null)))), r.a.createElement(N.l, null, r.a.createElement(N.h, null, r.a.createElement(B, {
						placeholder: a.fbt._("Removal reason title", null, {
							hk: "4hFurd"
						}),
						value: t.title,
						onChange: this.onTitleInputChange
					}), r.a.createElement(j.a, {
						text: t.title.trim(),
						maxChars: C.d
					})), r.a.createElement(N.o, null, a.fbt._("Reason message:", null, {
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
					}), r.a.createElement(j.a, {
						text: t.message.trim(),
						maxChars: C.a
					})), r.a.createElement(U, null, r.a.createElement(D, {
						onClick: this.onSave,
						"data-redditstyle": !0,
						disabled: !this.canSave()
					}, e.removalReason ? a.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : a.fbt._("Add new reason", null, {
						hk: "34P0ii"
					})), r.a.createElement(N.a, {
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
				z = n("./src/reddit/layout/row/Inline/index.tsx"),
				V = n("./src/reddit/components/RemovalReasons/RemovalReasonItem.m.less"),
				q = n.n(V);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = S.a.wrapped(x.r, "EditButton", q.a), Q = S.a.wrapped(z.a, "Row", q.a), Y = S.a.div("ReasonNumber", q.a), X = S.a.div("ReasonText", q.a);
			var Z = e => r.a.createElement(Q, null, r.a.createElement(Y, null, e.index + 1), r.a.createElement(X, null, e.removalReason.title), r.a.createElement(K, {
					onClick: e.onEdit,
					"data-redditstyle": !0
				}, G._("Edit", null, {
					hk: "1nftDt"
				}))),
				J = n("./src/reddit/components/RemovalReasons/index.m.less"),
				$ = n.n(J);
			const ee = "RemovalReasons--Tooltip",
				te = 1e4,
				ne = {
					reasonToEdit: null
				},
				se = Object(d.c)({
					isConfirmModalOpen: e => "RemovalReasons--Modal--DeleteConfirmation" === Object(k.a)(e),
					isRemovalReasonEditorModalOpen: e => "RemovalReasons--Editor--Modal" === Object(k.a)(e),
					removalReasons: y.c
				}),
				ae = Object(i.b)(se, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						addRemovalReason: t => e(Object(m.addRemovalReason)(n, t)),
						deleteRemovalReason: t => e(Object(m.deleteRemovalReason)(n, t)),
						editRemovalReason: t => e(Object(m.editRemovalReason)(n, t)),
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
						Object(v.v)() || (this.props.onShowTooltip(ee), setTimeout(() => {
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
					}), this.state = ne
				}
				componentDidMount() {
					this.onShowTooltip()
				}
				render() {
					const {
						deleteRemovalReason: e,
						isConfirmModalOpen: t,
						isRemovalReasonEditorModalOpen: n,
						removalReasons: o,
						sendEventWithName: i,
						toggleConfirmationModal: d
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.c, null, r.a.createElement(x.l, {
						onClick: this.onAddReason,
						disabled: o.length >= C.c || n,
						"data-redditstyle": !0
					}, a.fbt._("Add removal reason", null, {
						hk: "2fHPVe"
					}))), r.a.createElement(f.a, null, r.a.createElement(f.b, {
						className: $.a.title
					}, a.fbt._("Removal reasons", null, {
						hk: "3IWxkH"
					}), r.a.createElement(g.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360010094892`
					}), r.a.createElement(E.n, {
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
							right: l.a.alienblue
						}
					}, r.a.createElement("div", {
						className: $.a.tooltipContent
					}, a.fbt._("NEW! Add up to 50 removal reasons.", null, {
						hk: "1LM0MR"
					}))), o.length, "/", C.c))), o.length > 0 ? o.map((e, t) => r.a.createElement(Z, {
						index: t,
						key: e.id,
						onEdit: this.onEditReason(e),
						removalReason: e
					})) : r.a.createElement(h.c, {
						text: a.fbt._("No removal reasons yet", null, {
							hk: "1j70G1"
						})
					}, r.a.createElement(_.a, {
						name: "rules",
						className: $.a.Rules
					}))), n && this.renderReasonEditorModal(), t && this.state.reasonToEdit && r.a.createElement(p.a, {
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
							d(), this.setState({
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
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				d = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = r.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: s,
					text: r,
					tooltipContentClass: i,
					...c
				} = e;
				return a.a.createElement("div", l({}, c, {
					className: Object(o.a)(d.a.container, n)
				}), r ? a.a.createElement("div", {
					className: Object(o.a)(d.a.tooltip, i, s ? d.a.below : d.a.above)
				}, r) : null, t)
			}, "HoverTooltip", d.a)
		},
		"./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s, a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				l = n.n(d);
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(s || (s = {}));
			const c = 750,
				m = e => {
					let {
						className: t,
						containerClassName: n,
						imageClassName: d,
						disabled: m,
						id: u,
						imagePath: p,
						onClick: b,
						onKeyDown: h,
						title: g,
						onClickDelete: f,
						mouseEnterBufferTime: E = c
					} = e;
					const x = Object(a.useRef)(s.Outside),
						[v, _] = Object(a.useState)(!1);
					return o.a.createElement("div", {
						className: Object(r.a)(l.a.container, n),
						onMouseEnter: f ? () => {
							x.current = s.Inside, setTimeout(() => {
								x.current === s.Inside && _(!0)
							}, E)
						} : void 0,
						onMouseLeave: f ? () => {
							x.current = s.Outside, _(!1)
						} : void 0
					}, v && o.a.createElement("button", {
						className: l.a.deleteButton,
						onClick: f
					}, o.a.createElement(i.b, {
						className: l.a.deleteIcon
					})), o.a.createElement("button", {
						className: Object(r.a)(l.a.emoteButton, t),
						disabled: m,
						id: u,
						title: g,
						onClick: b,
						onKeyDown: h,
						tabIndex: 1
					}, o.a.createElement("div", {
						className: Object(r.a)(l.a.emoteImage, d),
						style: {
							backgroundImage: `url(${p})`
						}
					})))
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				r = n("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				i = n.n(r);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					emojiUrl: t,
					onConfirm: n,
					onCancel: s,
					onClose: r
				} = e;
				return a.a.createElement(o.a, {
					onConfirm: n,
					onCancel: s,
					onClose: r,
					headerText: d._("Delete emoji", null, {
						hk: "27GEDb"
					}),
					modalText: a.a.createElement("p", {
						className: i.a.deleteModalContainer
					}, a.a.createElement("img", {
						className: i.a.deleteModalImage,
						src: t
					}), d._("Are you sure you want to delete this emoji?", null, {
						hk: "1bmNdu"
					})),
					actionText: d._("Delete", null, {
						hk: "4lt26q"
					}),
					cancelActionText: d._("Go back", null, {
						hk: "3zzMov"
					}),
					withOverlay: !0
				})
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less": function(e, t, n) {
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
				unlockButton: "_3EI1On_HJixL24yeuq2w62",
				deleteModalContainer: "_2JcZhkY3vXBVFEAMyuM8D5",
				deleteModalImage: "_1V2bCmzxzskT1fA3fY70lK"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/powerups/index.ts");
			const r = (e, t, n, r, i, d) => {
				const l = Object(a.d)(),
					c = Object(s.useRef)(null),
					[m, u] = Object(s.useState)(0),
					p = async function(t) {
						let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							s = arguments.length > 2 ? arguments[2] : void 0;
						try {
							return await l(Object(o.b)({
								subredditId: e,
								file: t
							})), s(), {
								success: !0
							}
						} catch (a) {
							return n ? p(t, !1, s) : (s(), {
								success: !1,
								error: a.message
							})
						}
					}, b = () => u(e => e - 1);
				return {
					maxEmojisUploaded: t.length >= 20,
					maxEmojisUploading: t.length + m >= 20,
					onFileChange: async e => {
						const s = e.currentTarget.files;
						if (!(null == s ? void 0 : s.length)) return;
						if (s.length + t.length > 20) {
							const e = 20 - t.length;
							return null == n || n(e), void(c.current && (c.current.value = ""))
						}
						u(s.length), null == r || r(s.length);
						const a = await Promise.all([...s].map(e => p(e, !0, b))),
							o = a.reduce((e, t) => e + (t.success ? 1 : 0), 0);
						o > 0 && (null == i || i(o));
						const l = a.length - o;
						l > 0 && (null == d || d(l)), c.current && (c.current.value = ""), u(0)
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
		"./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less": function(e, t, n) {
			e.exports = {
				container: "_1xDkiINVQUjf0tjZcbF3a7",
				emoteButton: "_2-SqXmcI6RcjKEbTfkrLVe",
				emoteImage: "_1WpEszyqkHofX36kiLrJ8x",
				deleteButton: "_2mgKNuqCKnjSfh2dBW7iqI",
				deleteIcon: "_1BJNzscR61JS-t7pR4p3Ik"
			}
		},
		"./src/reddit/components/SaveIndicator/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ScheduledPost/ControlRow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1xM2tjm8c7LuqnoEJG1Ws1",
				controlRow: "P7KCCrRfT4TO2wcnk_Kjv",
				controlRowItem: "_1AkGbjxtRpq3ZhKADdUTU3"
			}
		},
		"./src/reddit/components/ScheduledPost/MetaLine/index.m.less": function(e, t, n) {
			e.exports = {
				content: "_297_pyPlxmqBF0tLkUhTME",
				icon: "_1n_ojuNDT8JeH9DxmHJZt9",
				author: "_1k9D_vEsQ8odWCNERbDOxX",
				modIcon: "_3ryKOTfQ_vqgap0EZsZHAl",
				stickyIcon: "qfjbZcX6-FZK2BGrOXezD"
			}
		},
		"./src/reddit/components/ScheduledPost/MetaLine/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/components/AuthorLink/index.tsx"),
				i = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				l = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				c = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				m = n("./src/reddit/models/ScheduledPost/index.ts"),
				u = n("./src/reddit/components/ScheduledPost/MetaLine/index.m.less"),
				p = n.n(u);
			class b extends a.a.PureComponent {
				render() {
					if (!Object(m.o)(this.props.subreddit)) return null;
					const {
						isModDistinguished: e,
						isPostAsMetaMod: t,
						subreddit: n,
						owner: s,
						isSticky: u
					} = this.props, b = t ? o.l : Object(m.n)(s) ? s.name : void 0;
					return a.a.createElement("span", {
						className: p.a.content
					}, a.a.createElement(i.a, {
						to: n.path
					}, n.prefixedName), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(d.a, null), a.a.createElement(r.a, {
						className: p.a.author,
						author: b,
						isUnstyled: !0
					}, `u/${b}`)), e && a.a.createElement(c.a, {
						className: p.a.modIcon
					}), u && a.a.createElement(l.a, {
						className: p.a.stickyIcon
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./src/reddit/components/OverflowMenu/index.tsx"),
				l = n("./src/reddit/controls/CheckboxMenuItem/index.tsx");
			var c = e => a.a.createElement(d.b, {
					dropdownId: `SCHEDULED_POST_DROPDOWN${e.scheduledPostId}`,
					onClick: e.onOpenOverflow
				}, a.a.createElement(l.a, {
					isSelected: e.isSticky,
					onClick: e.onToggleIsSticky,
					text: i.fbt._("Sticky post", null, {
						hk: "UOShB"
					})
				}), a.a.createElement(l.a, {
					isSelected: e.isModDistinguished,
					onClick: e.onToggleIsModDistinguished,
					text: i.fbt._("Distinguish as Mod", null, {
						hk: "3opu7K"
					})
				}), a.a.createElement(l.a, {
					isSelected: e.isOriginalContent,
					onClick: e.onToggleIsOC,
					text: i.fbt._("Mark as OC", null, {
						hk: "32LGcQ"
					})
				}), a.a.createElement(l.a, {
					isSelected: e.isNsfw,
					onClick: e.onToggleIsNsfw,
					text: i.fbt._("Mark as NSFW", null, {
						hk: "2qBIcp"
					})
				}), a.a.createElement(l.a, {
					isSelected: e.isSpoiler,
					onClick: e.onToggleIsSpoiler,
					text: i.fbt._("Mark as Spoiler", null, {
						hk: "rOev9"
					})
				})),
				m = n("./src/reddit/selectors/scheduledPosts/index.ts");
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
							scheduledPost: n,
							onUpdateMetadata: s,
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
		"./src/reddit/components/ScheduledPost/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				title: "_3jA9JBnv4bqmmiAw3Akmug"
			}
		},
		"./src/reddit/components/ScheduledPost/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/ScheduledPost/PostTitle/index.m.less"),
				r = n.n(o);
			class i extends a.a.PureComponent {
				render() {
					return a.a.createElement("span", {
						className: r.a.title
					}, this.props.title)
				}
			}
			t.a = i
		},
		"./src/reddit/components/ScheduledPost/TopMetaLine/FailureMetaLine/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1YrhJ0z1RfTXg7jHYgApSr",
				error: "_2_f_ecVpbx4yoMzazJYkDP",
				retryButton: "_1KbjdUJVdbZQOJN8d6LTsX",
				parametricMetaData: "_2x3oXUTdLAKAob3BYLRkmH"
			}
		},
		"./src/reddit/components/ScheduledPost/TopMetaLine/TemporalMetaLine/index.m.less": function(e, t, n) {
			e.exports = {
				container: "qDE3oDok1392-t8IDOBfk",
				clock: "_2sfIhl6E6vfZCwxx54EUNB",
				parametricMetaData: "_3bAfM2inJTjD3ZXNzO5nE5"
			}
		},
		"./src/reddit/components/ScheduledPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ScheduledPost/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return fe
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/telemetry/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/scheduledPosts/index.ts"),
				u = n("./src/reddit/actions/scheduledPosts/delete.ts"),
				p = n("./src/reddit/actions/scheduledPosts/edit.ts"),
				b = n("./src/lib/makeActionCreator/index.ts"),
				h = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/urlRequested.ts"),
				E = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/redditGQL/operations/SubmitScheduledPost.json");
			var v = n("./src/reddit/models/Toast/index.ts");
			const _ = Object(b.a)(h.l),
				C = (e, t) => async (n, s, a) => {
					let {
						gqlContext: o
					} = a;
					const r = Object(i.p)(s(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (!r) return void n(Object(g.f)(Object(g.e)(h.u(), v.b.Error)));
					const d = await ((e, t) => Object(E.a)(e, {
						...x,
						variables: t
					}))(o(), {
						input: {
							id: r.id
						}
					});
					if (!d.ok) return void n(Object(g.f)(Object(g.e)(h.v(), v.b.Error, h.s(), C(e, t))));
					const l = d.body.data.submitScheduledPost.post.permalink;
					n(Object(f.a)(l, !1)), n(Object(g.f)(Object(g.e)(h.x(), v.b.SuccessCommunity))), n(_({
						subredditId: e,
						scheduledPostId: t
					}))
				};
			var k = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				y = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = n("./src/reddit/components/FlairList/index.tsx"),
				S = n("./src/reddit/components/PostLeftRail/index.tsx"),
				j = n("./src/lib/classNames/index.ts"),
				N = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				w = n("./src/reddit/controls/Score/index.tsx"),
				I = n("./src/reddit/models/Vote/index.ts"),
				T = n("./src/reddit/components/VerticalVotes/index.m.less"),
				M = n.n(T);
			class P extends o.a.PureComponent {
				render() {
					return o.a.createElement("div", {
						className: M.a.votesContainer
					}, o.a.createElement("button", {
						className: M.a.disabledVoteIcon,
						"aria-label": s.fbt._("Upvote", null, {
							hk: "4aEt1X"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, o.a.createElement(N.d, {
						compact: !1,
						voteState: I.a.notVoted,
						interactive: !1
					})), o.a.createElement(w.a, {
						disableInlineColor: !0,
						className: Object(j.a)(M.a.Score, M.a.disabledScore),
						score: 0,
						voteState: I.a.notVoted,
						isScoreHidden: !0
					}), o.a.createElement("button", {
						className: M.a.disabledVoteIcon,
						"aria-label": s.fbt._("downvote", null, {
							hk: "4xXpvV"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, o.a.createElement(N.c, {
						compact: !1,
						voteState: I.a.notVoted,
						interactive: !1
					})))
				}
			}
			var R = P,
				A = n("./src/reddit/constants/thumbnails.ts"),
				F = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				L = n("./src/reddit/models/PostCreationForm/index.ts"),
				U = n("./src/reddit/models/ScheduledPost/index.ts"),
				B = n("./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx"),
				H = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				W = n("./src/reddit/icons/svgs/Post/index.tsx"),
				z = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				V = n("./src/reddit/components/ScheduledPost/ControlRow/index.m.less"),
				q = n.n(V);
			const G = e => {
				const {
					icon: t,
					onClick: n
				} = e;
				return o.a.createElement("span", {
					onClick: n,
					className: Object(j.a)(q.a.controlRowItem, e.className)
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
						text: s.fbt._("Submit post now", null, {
							hk: "QkS4y"
						}),
						onClick: this.props.onSubmitPostNow
					}), o.a.createElement(G, {
						icon: H.a,
						text: s.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.props.onEditScheduledPost
					}), o.a.createElement(G, {
						icon: z.b,
						text: s.fbt._("Delete", null, {
							hk: "1uVY7w"
						}),
						onClick: this.props.onDeleteScheduledPost
					}), this.props.renderOverflowMenu())
				}
			}
			var Q = Object(B.a)(K),
				Y = n("./src/reddit/components/ScheduledPost/MetaLine/index.tsx"),
				X = n("./src/reddit/components/ScheduledPost/PostTitle/index.tsx"),
				Z = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				J = n("./src/reddit/components/ScheduledPost/TopMetaLine/FailureMetaLine/index.m.less"),
				$ = n.n(J);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class te extends o.a.PureComponent {
				componentDidMount() {
					this.props.onViewFailedPost()
				}
				render() {
					const {
						scheduledPost: e
					} = this.props, {
						owner: t
					} = e, n = Object(U.n)(t) && t.prefixedName;
					return o.a.createElement("div", {
						className: $.a.container
					}, o.a.createElement("div", null, o.a.createElement(Z.a, {
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
					}, ee._("{post owner}", [ee._param("post owner", n)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					})))
				}
			}
			var ne = Object(r.b)(null, (e, t) => {
					let {
						scheduledPost: n
					} = t;
					return {
						onSubmitPostNow: () => {
							e(C(n.subreddit.id, n.id)), e((e, t) => Object(l.a)(Object(D.n)()(t())))
						},
						onViewFailedPost: () => e((e, t) => Object(l.a)(Object(D.w)()(t(), n)))
					}
				})(te),
				se = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				ae = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				oe = n("./src/reddit/components/ScheduledPost/TopMetaLine/TemporalMetaLine/index.m.less"),
				re = n.n(oe);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), de = e => {
				return `${Object(se.c)(e.publishAt)} ${Object(se.d)(e.clientTimezone).displayText}`
			};
			class le extends o.a.PureComponent {
				render() {
					const {
						scheduledPost: e
					} = this.props, {
						owner: t
					} = e, n = Object(U.n)(t) && t.prefixedName;
					return o.a.createElement("div", {
						className: re.a.container
					}, o.a.createElement(ae.a, {
						className: re.a.clock
					}), o.a.createElement("div", null, o.a.createElement("div", null, ie._("This post is scheduled for {=[time]}", [ie._param("=[time]", o.a.createElement("span", {
						className: re.a.parametricMetaData
					}, ie._("{time}", [ie._param("time", de(e))], {
						hk: "JrMs3"
					})))], {
						hk: "4gFrnr"
					})), o.a.createElement("div", null, ie._("Scheduled by {=[post owner]}", [ie._param("=[post owner]", o.a.createElement("span", {
						className: re.a.parametricMetaData
					}, ie._("{post owner}", [ie._param("post owner", n)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					}))))
				}
			}
			var ce = le;
			class me extends o.a.PureComponent {
				render() {
					const {
						scheduledPost: e
					} = this.props;
					switch (e.state) {
						case U.e.FAILED:
							return o.a.createElement(ne, {
								scheduledPost: e
							});
						case U.e.PROCESSING:
						case U.e.CREATED:
						default:
							return o.a.createElement(ce, {
								scheduledPost: e
							})
					}
				}
			}
			var ue = me,
				pe = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = n.n(pe),
				he = n("./src/reddit/components/ScheduledPost/index.m.less"),
				ge = n.n(he);
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
				Ee = Object(d.c)({
					media: (e, t) => {
						let {
							scheduledPostId: n,
							subredditId: s
						} = t;
						const a = Object(i.p)(e, {
							subredditId: s,
							scheduledPostId: n
						});
						return a ? {
							...fe,
							isNSFW: a.isNsfw,
							title: a.title
						} : null
					},
					flair: (e, t) => {
						let {
							scheduledPostId: n,
							subredditId: s
						} = t;
						const a = Object(i.p)(e, {
							subredditId: s,
							scheduledPostId: n
						});
						return a ? Object(i.m)({
							scheduledPost: a
						}) : null
					},
					scheduledPost: (e, t) => {
						let {
							scheduledPostId: n,
							subredditId: s
						} = t;
						return Object(i.p)(e, {
							subredditId: s,
							scheduledPostId: n
						})
					}
				}),
				xe = Object(r.b)(Ee, (e, t) => {
					let {
						scheduledPostId: n,
						subredditId: s
					} = t;
					return {
						onSubmitPostNow: () => {
							e(C(s, n)), e((e, t) => Object(l.a)(Object(D.n)()(t())))
						},
						onEditScheduledPost: () => {
							e(Object(p.b)(s, n)), e((e, t) => Object(l.a)(Object(D.d)()(t())))
						},
						onDeleteScheduledPost: () => e(Object(u.a)(s, n)),
						onOpenOverflow: () => {
							e((e, t) => Object(l.a)(Object(D.h)(!1)(t())))
						},
						onUpdateMetadata: t => e((e, a) => {
							const o = Object(i.p)(a(), {
								subredditId: s,
								scheduledPostId: n
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
						scheduledPost: n
					} = this.props;
					return e && t && n ? o.a.createElement("div", {
						className: ge.a.container
					}, o.a.createElement(ue, {
						scheduledPost: n
					}), o.a.createElement("div", {
						className: be.a.classicPostStyles
					}, o.a.createElement(S.b, null, o.a.createElement(R, null)), o.a.createElement("div", {
						style: Object(F.c)(void 0, this.props),
						className: ge.a.backgroundWrapper
					}, o.a.createElement("div", {
						className: ge.a.mainBody
					}, o.a.createElement("div", {
						className: ge.a.thumbnailContainer
					}, o.a.createElement(k.a, {
						post: e
					})), o.a.createElement("div", {
						className: ge.a.content
					}, o.a.createElement("div", null, o.a.createElement(X.a, {
						title: n.title
					}), o.a.createElement(O.a, {
						className: ge.a.flairList,
						flair: t
					})), o.a.createElement(Y.a, {
						isModDistinguished: n.isModDistinguished,
						isPostAsMetaMod: n.isPostAsMetaMod,
						isSticky: !!n.sticky && "NONE" !== n.sticky,
						subreddit: n.subreddit,
						owner: n.owner
					}), o.a.createElement(Q, {
						onSubmitPostNow: n.state === U.e.FAILED ? void 0 : this.onSubmitPostNow,
						onEditScheduledPost: this.onEditScheduledPost,
						onDeleteScheduledPost: this.onDeleteScheduledPost,
						onUpdateMetadata: this.props.onUpdateMetadata,
						scheduledPost: n,
						onOpenOverflow: this.props.onOpenOverflow
					}))))), this.state.deleteConfirmModalIsOpen && o.a.createElement(y.a, {
						onClose: this.onCancelDeleteScheduledPost,
						onCancel: this.onCancelDeleteScheduledPost,
						onConfirm: this.onConfirmDeleteScheduledPost,
						actionText: s.fbt._("Delete", null, {
							hk: "1WN0R6"
						}),
						modalText: s.fbt._("Are you sure you want to delete this scheduled post? This action cannot be undone.", null, {
							hk: "1EdQC7"
						}),
						withOverlay: !0
					}), this.state.submitConfirmModalIsOpen && o.a.createElement(y.a, {
						onClose: this.onCancelSubmitPostNow,
						onCancel: this.onCancelSubmitPostNow,
						onConfirm: this.onConfirmSubmitPostNow,
						actionText: s.fbt._("Submit", null, {
							hk: "3kl12J"
						}),
						modalText: s.fbt._("Are you sure you want to submit this scheduled post now? This action cannot be undone.", null, {
							hk: "18O8dB"
						}),
						withOverlay: !0
					})) : null
				}
			}
			t.a = Object(c.a)(xe(ve))
		},
		"./src/reddit/components/Settings/shared/SectionHeading.m.less": function(e, t, n) {
			e.exports = {
				Component: "BotIImuktRA9aFAPP0O4Z",
				component: "BotIImuktRA9aFAPP0O4Z"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.h3("Component", a.a)
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, n) {
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
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "n", (function() {
				return V
			})), n.d(t, "k", (function() {
				return Y
			})), n.d(t, "o", (function() {
				return Z
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "p", (function() {
				return re
			})), n.d(t, "j", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return be
			})), n.d(t, "g", (function() {
				return he
			})), n.d(t, "a", (function() {
				return ge
			})), n.d(t, "d", (function() {
				return Ee
			})), n.d(t, "i", (function() {
				return xe
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "e", (function() {
				return _e
			})), n.d(t, "h", (function() {
				return Ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/controls/FormFields/index.tsx"),
				f = n("./src/lib/lessComponent.tsx"),
				E = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Select/index.m.less"),
				v = n.n(x);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = f.a.span("Wrapper", v.a),
				k = f.a.select("Inner", v.a),
				y = f.a.wrapped(E.b, "Caret", v.a);

			function O(e) {
				let {
					className: t,
					innerClassName: n,
					...s
				} = e;
				const o = s.disabled ? {
					"data-disabled": s.disabled
				} : {};
				return a.a.createElement(C, {
					className: t
				}, a.a.createElement(k, _({
					className: n
				}, s)), a.a.createElement(y, _({
					isSubreddit: !0
				}, o)))
			}
			var S = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				j = n("./src/reddit/controls/Typography/index.tsx"),
				N = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				w = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				I = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				T = n("./node_modules/lodash/range.js"),
				M = n.n(T),
				P = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/reddit/layout/row/Inline/index.tsx"),
				A = n("./src/reddit/models/Flair/index.ts"),
				F = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				U = n.n(L);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(c.a)(b.a),
				W = f.a.wrapped(w.a, "Circle", U.a),
				z = f.a.h3("Label", U.a),
				V = f.a.wrapped(j.c, "Subtext", U.a),
				q = f.a.wrapped(u.a, "HoverTooltip", U.a),
				G = f.a.div("ControlContainer", U.a),
				K = f.a.div("TextContainer", U.a),
				Q = f.a.div("ActionContainer", U.a),
				Y = e => {
					let {
						className: t,
						direction: n,
						isCreateCommunity: s,
						inModal: o,
						isNightModeOn: r,
						disabled: i,
						indent: l,
						last: c,
						...m
					} = e;
					return a.a.createElement("div", B({}, m, {
						className: Object(d.a)(U.a.Wrapper, t, {
							[U.a.mColumn]: "column" === n,
							[U.a.mDisabled]: !!i,
							[U.a.mIndent]: !!l,
							[U.a.mLast]: !!c,
							[U.a.isCreateCommunity]: !!s,
							[U.a.inModal]: !!o,
							[U.a.isNightModeOn]: !!r
						})
					}))
				},
				X = f.a.a("Link", U.a),
				Z = f.a.wrapped(X, "SubtextLink", U.a),
				J = f.a.wrapped(I.a, "LinkIcon", U.a),
				$ = f.a.button("LinkButton", U.a),
				ee = f.a.wrapped(N.a, "ArrowRight", U.a),
				te = e => a.a.createElement(Y, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, a.a.createElement(K, {
					className: e.textContainerClassName
				}, a.a.createElement(z, null, e.label, e.isRequired && a.a.createElement(W, null)), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, e.children)),
				ne = f.a.div("StyledFlair", U.a),
				se = f.a.wrapped(ne, "SpoilerFlair", U.a),
				ae = f.a.wrapped(ne, "NSFWFlair", U.a),
				oe = e => {
					switch (e.flair) {
						case A.f.Nsfw:
							return a.a.createElement(ae, null, "NSFW");
						case A.f.Spoiler:
							return a.a.createElement(se, null, "SPOILER");
						default:
							return null
					}
				},
				re = e => {
					const t = Object(r.a)();
					return a.a.createElement(Y, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, a.a.createElement(K, null, a.a.createElement(R.a, null, a.a.createElement("label", {
						htmlFor: t
					}, a.a.createElement(z, null, e.label))), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, a.a.createElement(G, null, e.tooltip && a.a.createElement(q, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), a.a.createElement(S.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = f.a.input("RangeSliderInput", U.a),
				de = f.a.div("RangeSlider", U.a),
				le = f.a.div("Ticks", U.a),
				ce = f.a.div("TickText", U.a),
				me = f.a.div("PreSubText", U.a),
				ue = Object(i.c)({
					isNightModeOn: D.db
				}),
				pe = Object(o.b)(ue)(e => a.a.createElement(Y, {
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
				}, !e.inModal && a.a.createElement(R.a, null, a.a.createElement(z, null, e.label)), !e.hideSubtext && a.a.createElement(V, null, " ", a.a.createElement(me, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), a.a.createElement(Q, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, a.a.createElement(de, null, a.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + M()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
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
				}), a.a.createElement(le, null, Object.keys(e.ticks).map((t, n) => a.a.createElement(ce, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => a.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(K, null, a.a.createElement(R.a, null, a.a.createElement(z, null, e.label)), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, a.a.createElement(G, null, a.a.createElement(P.o, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => a.a.createElement(Y, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(K, null, a.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, a.a.createElement(J, null)), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, a.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, a.a.createElement(ee, null)))),
				ge = e => a.a.createElement(Y, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(K, null, a.a.createElement($, {
					onClick: e.onClick,
					className: Object(d.a)({
						[U.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, !!e.hintText && a.a.createElement("div", {
					className: U.a.ActionHintText
				}, e.hintText), a.a.createElement($, {
					onClick: e.onClick,
					className: Object(d.a)({
						[U.a.NoColor]: e.color && "none" === e.color
					})
				}, a.a.createElement(ee, {
					className: Object(d.a)({
						[U.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				fe = Object(i.c)({
					isOpen: (e, t) => Object(F.b)(t.id)(e)
				}),
				Ee = Object(o.b)(fe, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => a.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(K, null, a.a.createElement(z, null, e.label), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, (e => a.a.createElement("div", {
					className: U.a.DropdownWrapper,
					onClick: e.openDropdown
				}, a.a.createElement("span", {
					className: U.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), a.a.createElement(E.b, {
					className: U.a.DropdownTriangle
				}), a.a.createElement(H, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => a.a.createElement(h.b, {
					className: U.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && a.a.createElement("div", {
					className: U.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				xe = e => {
					let {
						disabled: t,
						last: n,
						onClick: o,
						onChange: r,
						...i
					} = e;
					const d = Object(s.useCallback)(e => r(e.target.value), [r]),
						{
							items: l
						} = i;
					return a.a.createElement(Y, {
						disabled: t
					}, a.a.createElement(K, null, a.a.createElement("label", {
						htmlFor: i.id
					}, a.a.createElement(z, {
						className: i.labelClassname
					}, i.label)), a.a.createElement(V, null, i.subtext)), a.a.createElement("div", {
						className: U.a.Wrapper__LineBreak
					}), a.a.createElement(Y, {
						last: n,
						indent: !0,
						disabled: t
					}, a.a.createElement(O, {
						id: i.id,
						className: "redditStyle",
						disabled: t || i.inputDisabled,
						onChange: d,
						value: i.selected
					}, l.map(e => {
						let {
							value: t,
							displayName: n
						} = e;
						return a.a.createElement("option", {
							key: t,
							value: t
						}, n)
					}))))
				},
				ve = e => a.a.createElement(Y, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(K, null, a.a.createElement(z, null, e.label), a.a.createElement(V, null, e.subtext)), a.a.createElement(Q, null, e.children)),
				_e = e => a.a.createElement(te, {
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
				Ce = e => a.a.createElement(te, {
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
		"./src/reddit/components/Streaming/ModSettings/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_16pMBJPhtfeyyncMfo7aDr",
				topBar: "_1DEjdLJpmb7fufFzhwqQm0",
				contentContainer: "ZV-o_W-prpE7EI4zyZ1hr",
				formBody: "_3xfSWCFu_alfjEX12_hBAB"
			}
		},
		"./src/reddit/components/Streaming/ModSettings/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/streaming/modSettings.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx"),
				u = n("./src/reddit/components/BlockNavigation/index.tsx"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				h = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				g = n("./src/reddit/contexts/ApiContext.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/controls/FormFields/index.tsx"),
				x = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/platform.ts"),
				k = n("./src/reddit/selectors/streamingModSettings.ts"),
				y = n("./src/reddit/components/Streaming/ModSettings/index.m.less"),
				O = n.n(y);
			const S = "streaming-settings-discard-confirmation",
				j = e => Object(c.e)(e, v.b.Error),
				N = Object(i.c)({
					allowNavigationCallback: C.a,
					modSettings: k.e,
					isAddUserModalOpen: e => "ModerationPage--Streaming--AddUser" === Object(_.a)(e),
					isLivestreamingCurrentlyOn: k.d,
					isDiscardModalOpen: Object(_.b)(S),
					isModSettingsSaving: e => Object(k.a)(e)
				}),
				w = Object(r.b)(N, (e, t) => ({
					closeAllModals: () => e(Object(d.f)()),
					onSave: (t, n) => e(Object(l.f)(t, n)),
					onUserAdd: (t, n, s) => e(Object(l.d)(t, n, s)),
					onUserRemove: (t, n, s) => e(Object(l.e)(t, n, s)),
					showToast: t => e(Object(c.f)({
						...t,
						duration: c.a
					})),
					toggleAddUserModal: () => e(Object(d.i)("ModerationPage--Streaming--AddUser")),
					toggleDiscardChangesModal: () => e(Object(d.i)(S))
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
						let n = !1;
						Object.keys(t).forEach(e => {
							t[e] !== this.props.modSettings[e] && (n = !0)
						}), this.setState({
							changedModSettings: t,
							hasUnsavedChanges: n
						})
					}, this.onSaveClick = async () => {
						this.props.onSave(this.state.changedModSettings, this.props.subredditId), this.setState({
							hasUnsavedChanges: !1
						})
					}, this.onUserAdd = async (e, t) => {
						this.isDuplicateUser(t) ? await this.props.showToast(j(s.fbt._("'{username}' has already been added", [s.fbt._param("username", t)], {
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
							minKarma: n,
							minAccountAgeDays: a,
							durationLimitSeconds: r,
							broadcasterPrompt: i,
							isDiscoveryUnitShown: d,
							inSubMinKarma: l
						} = e;
					return o.a.createElement("div", {
						className: O.a.container
					}, o.a.createElement(b.c, {
						className: O.a.topBar
					}, o.a.createElement(f.l, {
						onClick: this.onSaveClick,
						disabled: this.props.isModSettingsSaving
					}, this.props.isModSettingsSaving ? o.a.createElement(x.a, {
						className: O.a.loadingIcon,
						sizePx: 14,
						center: !0
					}) : s.fbt._("Save changes", null, {
						hk: "1IXBxj"
					}))), o.a.createElement(b.a, {
						className: O.a.contentContainer
					}, o.a.createElement(b.b, null, s.fbt._("Broadcasting", null, {
						hk: "3WAsEz"
					})), o.a.createElement("div", {
						className: O.a.formBody
					}, o.a.createElement(h.p, {
						on: this.state.livestreamingToggleStateOn,
						label: s.fbt._("Allow RPAN Broadcasts", null, {
							hk: "2Jt8fz"
						}),
						subtext: s.fbt._("Allow live broadcasts to the Reddit Public Access Network (RPAN) in this community.", null, {
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
						on: d,
						label: s.fbt._("Display RPAN Discovery Unit", null, {
							hk: "3mInib"
						}),
						subtext: s.fbt._("Allow discovery unit for Reddit Public Access Network (RPAN) to be displayed in this community.", null, {
							hk: "3MsZuO"
						}),
						onClick: () => {
							this.onChange({
								isDiscoveryUnitShown: !d
							})
						}
					}), o.a.createElement(h.l, {
						label: s.fbt._("Maximum live broadcasts", null, {
							hk: "bjAcp"
						}),
						direction: "row",
						subtext: s.fbt._("Set the number of broadcasts that can be live at the same time.", null, {
							hk: "fmNzG"
						})
					}, o.a.createElement(E.b, {
						onChange: e => this.onChange({
							maxLiveStreams: I(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						max: 1e3,
						value: t
					})), o.a.createElement(h.l, {
						label: s.fbt._("Required karma", null, {
							hk: "1UzH6K"
						}),
						direction: "row",
						subtext: s.fbt._("Set the amount of global Reddit comment karma someone needs to broadcast live.", null, {
							hk: "1Xa56V"
						})
					}, o.a.createElement(E.b, {
						onChange: e => this.onChange({
							minKarma: I(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						value: n
					})), o.a.createElement(h.l, {
						label: s.fbt._("Required community karma", null, {
							hk: "nSuPZ"
						}),
						direction: "row",
						subtext: s.fbt._("Set the amount of community comment karma someone needs to broadcast live.", null, {
							hk: "24qW8L"
						})
					}, o.a.createElement(E.b, {
						onChange: e => this.onChange({
							inSubMinKarma: I(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						value: l
					})), o.a.createElement(h.l, {
						label: s.fbt._("Required Account Age", null, {
							hk: "3OXG2v"
						}),
						direction: "row",
						subtext: s.fbt._("Set how old (in days) someone’s Reddit account needs to be to broadcast live.", null, {
							hk: "24iax6"
						})
					}, o.a.createElement(E.b, {
						onChange: e => this.onChange({
							minAccountAgeDays: I(e.currentTarget.value)
						}),
						min: 0,
						type: "number",
						value: a
					})), o.a.createElement(h.l, {
						label: s.fbt._("Time Limit", null, {
							hk: "2x8YNI"
						}),
						direction: "row",
						subtext: s.fbt._("Broadcasts will end after hitting this limit (in minutes), unless viewers award them more time.", null, {
							hk: "4wwLJ4"
						})
					}, o.a.createElement(E.b, {
						onChange: e => this.onChange({
							durationLimitSeconds: 60 * I(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						max: 1440,
						value: Math.round(r || 0) / 60,
						disabled: !0
					})), o.a.createElement(h.h, {
						label: s.fbt._("RPAN Description", null, {
							hk: "1WiS6G"
						}),
						direction: "row",
						subtext: s.fbt._("Write a quick description of your community to help broadcasters know what you're about", null, {
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
						dialogId: S,
						enabled: this.state.hasUnsavedChanges
					}), this.props.isDiscardModalOpen && o.a.createElement(p.a, {
						actionText: s.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: s.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: s.fbt._("You have made some changes to broadcasting settings, do you wish to discard the changes?", null, {
							hk: "20tlQp"
						}),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}))
				}
			}
			t.a = Object(g.b)(w(P))
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/helpers/trackers/blade.ts"),
				d = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				c = n.n(l);
			const m = o.a.wrapped(d.a, "StyledChevron", c.a),
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
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/FileDrop/index.tsx"),
				d = n("./src/reddit/controls/ImageInput/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				m = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				u = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = r.a.wrapped(c.a, "ImageUploadIcon", u.a), h = r.a.div("ImageIconRow", u.a), g = r.a.div("ImageUploadText", u.a), f = r.a.wrapped(i.a, "FileDrop", u.a), E = r.a.div("ContainerUploading", u.a), x = e => a.a.createElement(E, {
				className: e.className
			}, a.a.createElement(h, null, a.a.createElement(l.a, {
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
				}, a.a.createElement(h, null, e.icon || a.a.createElement(b, null)), a.a.createElement(g, null, e.label), a.a.createElement(d.a, {
					className: u.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return r
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return _
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(a);
			const r = s.a.section("FormPage", o.a),
				i = s.a.h1("HomePageTitle", o.a),
				d = s.a.button("HomePageBreadcrumb", o.a),
				l = s.a.div("HomePageGroup", o.a),
				c = s.a.h1("FormPageTitle", o.a),
				m = s.a.div("FormPageSection", o.a),
				u = s.a.div("FormGroup", o.a),
				p = s.a.h2("FormGroupTitle", o.a),
				b = s.a.div("FormElement", o.a),
				h = s.a.div("FormGroupDescription", o.a),
				g = s.a.div("FormItem", o.a),
				f = s.a.h3("FormElementTitle", o.a),
				E = s.a.div("FormElementDescription", o.a),
				x = s.a.div("FormElementError", o.a),
				v = s.a.div("FormElementSubGroup", o.a),
				_ = s.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return x
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				r = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				d = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(l);
			const m = s.a.wrapped(a.a, "ModalInput", c.a),
				u = s.a.input("Input", c.a),
				p = s.a.wrapped(d.a, "RadioOn", c.a),
				b = s.a.wrapped(i.a, "RadioOff", c.a),
				h = s.a.wrapped(o.a, "Checkbox", c.a),
				g = s.a.wrapped(r.a, "CheckboxSelected", c.a),
				f = s.a.textarea("Textarea", c.a),
				E = s.a.label("StyledLabel", c.a),
				x = s.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				i = n.n(r);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
					let {
						disabled: t,
						...n
					} = e;
					return a.a.createElement("div", d({}, n, {
						className: Object(o.a)(i.a.FormNavElement, {
							[i.a.disabled]: t
						})
					}), n.children)
				},
				c = e => {
					let {
						canDrop: t,
						className: n,
						isDragging: s,
						isOver: r,
						disabled: l,
						...c
					} = e;
					return a.a.createElement("div", d({}, c, {
						className: Object(o.a)(i.a.DragCard, {
							[i.a.disabled]: l,
							[i.a.isDraffing]: s,
							[i.a.isOverAndCanDrop]: r && t
						}, n)
					}))
				}
		},
		"./src/reddit/components/SubredditContent/EventPostContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/eventPosts/index.ts"),
				c = n("./src/reddit/components/ClassicPost/index.tsx"),
				m = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				u = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				p = n("./src/reddit/components/Scroller/Simple.tsx"),
				b = n("./src/reddit/components/SubredditContent/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/constants/postLayout.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/helpers/overlay/index.ts"),
				x = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/routes/postCreation/index.ts"),
				C = n("./src/reddit/selectors/eventPosts.ts"),
				k = n("./src/reddit/components/SubredditContent/index.m.less"),
				y = n.n(k);
			const O = Object(d.c)({
					eventPosts: C.f,
					isPending: C.d,
					hasData: C.b,
					endCursor: C.a
				}),
				S = Object(r.b)(O, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						onClickPost: t => {
							e(Object(E.a)(t.permalink))
						},
						fetchMorePosts: () => {
							e(Object(l.eventPostsRequested)(n))
						}
					}
				});
			class j extends o.a.PureComponent {
				renderEmptyState() {
					const {
						subredditName: e
					} = this.props;
					return o.a.createElement(m.c, {
						className: y.a.emptyStateContainer,
						text: s.fbt._("No upcoming or live events in r/{subredditName}", [s.fbt._param("subredditName", e)], {
							hk: "3wRma7"
						}),
						childrenPosition: "bottom"
					}, o.a.createElement(v.a, {
						name: "scheduled",
						className: y.a.icon
					}), o.a.createElement(i.a, {
						className: y.a.schedulePostLink,
						to: Object(_.c)(e)
					}, s.fbt._("Create Event Post", null, {
						hk: "PXBmQ"
					})))
				}
				renderBody() {
					const {
						endCursor: e,
						eventPosts: t,
						fetchMorePosts: n,
						hasData: s,
						onClickPost: a
					} = this.props;
					return o.a.createElement("div", {
						className: y.a.contentContainer
					}, o.a.createElement("div", {
						className: y.a.standaloneContainer
					}, s ? o.a.createElement(p.b, {
						className: y.a.scroller,
						onLoadMore: n,
						loadMoreToken: e || void 0
					}, t.map((e, t) => ({
						id: e.id,
						estHeight: Object(x.c)(e, g.g.Classic),
						render: n => o.a.createElement(c.default, {
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
						to: Object(_.c)(this.props.subredditName)
					}, o.a.createElement(f.l, null, s.fbt._("Schedule an event post", null, {
						hk: "nk1bA"
					})))), o.a.createElement(u.a, null, o.a.createElement(u.b, {
						className: y.a.pageTitle
					}, s.fbt._("Upcoming and live events", null, {
						hk: "MAeQO"
					})), !t && e ? Object(b.a)() : this.renderBody(), t && e && Object(b.a)(1)))
				}
			}
			t.a = S(Object(h.c)(j))
		},
		"./src/reddit/components/SubredditContent/PredictionsContent/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-SubredditContent-PredictionsContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-SubredditContent-PredictionsContent").then(n.bind(null, "./src/reddit/components/SubredditContent/PredictionsContent/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditContent/PredictionsContent/index.tsx"
				}
			})
		},
		"./src/reddit/components/SubredditContent/ScheduledPostContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/scheduledPosts/index.ts"),
				l = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				c = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				m = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/lib/CSSVariableProvider/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/components/Paginator/index.m.less"),
				f = n.n(g);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = e => {
				const {
					isNextButton: t,
					isActive: n,
					...s
				} = e;
				return o.a.createElement(h.i, E({
					disabled: !n
				}, s))
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
					} = this.props, n = this.getCurrentCursorIdx() + 1;
					return e.slice(n, n + t)
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
						itemsPerPage: n
					} = this.props, s = this.getCurrentCursorIdx();
					if (e && !this.hasNextPage()) return;
					if (!e && !this.hasPrevPage()) return;
					const a = e ? Math.max(-1, Math.min(s + n, t.length - 2)) : Math.max(-1, s - n);
					this.setState({
						currentCursor: t[a] ? t[a].id : void 0
					})
				}
				renderControlRow() {
					const {
						usePortalForControlRow: e,
						controlRowPortal: t,
						pagerButton: n = x
					} = this.props, a = this.hasPrevPage(), r = this.hasNextPage();
					if (!a && !r) return null;
					const i = o.a.createElement("div", {
						className: f.a.controlRow
					}, o.a.createElement("span", {
						className: f.a.prevButtonContainer
					}, o.a.createElement(n, {
						className: f.a.prevButton,
						onClick: this.onHandlePrev,
						isNextButton: !1,
						isActive: a
					}, s.fbt._("Previous", null, {
						hk: "4hX0ue"
					}))), o.a.createElement("span", {
						className: f.a.nextButtonContainer
					}, o.a.createElement(n, {
						className: f.a.nextButton,
						onClick: this.onHandleNext,
						isNextButton: !0,
						isActive: r
					}, s.fbt._("Next", null, {
						hk: "2mEXAi"
					}))));
					return e && !t ? null : t ? Object(b.d)(i, t) : i
				}
				render() {
					const {
						className: e,
						lastItemClassName: t,
						itemComponent: n
					} = this.props, s = this.getRenderableItems();
					return o.a.createElement("div", {
						className: e
					}, s.map((e, a) => o.a.createElement(n, {
						className: t && a === s.length - 1 ? t : void 0,
						key: e.id,
						item: e
					})), this.renderControlRow())
				}
			}
			var _ = v,
				C = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				k = n("./src/reddit/components/RecurringPostList/ChangePageButton/index.m.less"),
				y = n.n(k);
			var O = e => o.a.createElement("button", {
					className: Object(u.a)(y.a.button, e.className, {
						[y.a.prevButton]: !e.isNextButton,
						[y.a.disabled]: !e.isActive
					}),
					onClick: e.onClick,
					disabled: !e.isActive
				}, o.a.createElement(C.a, {
					className: y.a.arrowIcon
				})),
				S = n("./src/reddit/components/RecurringPostList/EditModal/async.tsx"),
				j = n("./src/reddit/components/RecurringPostList/RecurringPost/index.tsx"),
				N = n("./src/reddit/components/TrackingHelper/index.tsx"),
				w = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = n("./src/reddit/icons/fonts/index.tsx"),
				T = n("./src/reddit/routes/postCreation/index.ts"),
				M = n("./src/reddit/selectors/activeModalId.ts"),
				P = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				R = n("./src/reddit/components/RecurringPostList/index.m.less"),
				A = n.n(R);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), D = 5, L = Object(m.c)({
				recurringPosts: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(P.l)(e, {
						subredditId: n.id
					})
				},
				editModalIsOpen: e => Object(M.a)(e) === j.a,
				editingRecurringPostId: P.d,
				editingRecurringPostSubredditId: P.e
			});
			class U extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.pageButtonPortalRef = o.a.createRef(), this.onEditModalSuccessfulSave = () => {
						this.props.editModalIsOpen && this.props.toggleModal()
					}, this.onClickLink = () => {
						this.props.sendEvent(Object(w.j)())
					}
				}
				renderEmptyState() {
					return o.a.createElement(l.c, {
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
						editModalIsOpen: n,
						subreddit: s,
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
					})), t.length ? o.a.createElement(_, {
						className: A.a.recurringPostsContainer,
						lastItemClassName: A.a.lastRecurringPostItem,
						itemsPerPage: D,
						items: t,
						itemComponent: j.b,
						pagerButton: O,
						usePortalForControlRow: !0,
						controlRowPortal: this.pageButtonPortalRef.current
					}) : this.renderEmptyState()), n && !!r && !!a && s.id === a && o.a.createElement(S.a, {
						scheduledPostId: r,
						subredditId: a,
						onSuccessfulSave: this.onEditModalSuccessfulSave,
						withOverlay: !0
					}))
				}
			}
			var B = Object(r.b)(L, (e, t) => ({
					toggleModal: () => e(Object(p.i)(j.a))
				}))(Object(N.c)(U)),
				H = n("./src/reddit/components/ScheduledPost/index.tsx"),
				W = n("./src/reddit/components/Scroller/Simple.tsx"),
				z = n("./src/reddit/components/SubredditContent/index.tsx"),
				V = n("./src/reddit/components/SubredditContent/index.m.less"),
				q = n.n(V),
				G = n("./src/reddit/models/ScheduledPost/index.ts");
			const K = Object(m.c)({
					isLoading: P.i,
					hasData: (e, t) => {
						let {
							subreddit: n
						} = t;
						return Object(P.h)(e, {
							subredditId: n.id
						})
					},
					standalonePosts: (e, t) => {
						let {
							subreddit: n
						} = t;
						return Object(P.q)(e, {
							subredditId: n.id
						})
					},
					loadMoreToken: (e, t) => {
						let {
							subreddit: n
						} = t;
						return Object(P.c)(e, {
							subredditId: n.id,
							type: G.f.standalonePosts
						})
					}
				}),
				Q = Object(r.b)(K, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						onLoadMoreStandaloneScheduledPosts: () => e(Object(d.a)(n.id))
					}
				});
			class Y extends o.a.PureComponent {
				render() {
					const {
						hasData: e,
						standalonePosts: t,
						onLoadMore: n,
						loadMoreToken: s,
						renderEmptyState: a,
						subreddit: r
					} = this.props;
					return o.a.createElement("div", {
						className: q.a.contentContainer
					}, o.a.createElement("div", {
						className: q.a.standaloneContainer
					}, e && t.length ? o.a.createElement(W.b, {
						className: q.a.scroller,
						onLoadMore: n,
						loadMoreToken: s || void 0
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
			class X extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.renderStandaloneEmptyState = () => {
						const {
							subreddit: e
						} = this.props;
						return o.a.createElement(l.c, {
							className: q.a.emptyStateContainer,
							text: s.fbt._("No scheduled posts in r/{subredditName}", [s.fbt._param("subredditName", e.name)], {
								hk: "mUwQ4"
							}),
							childrenPosition: "bottom"
						}, o.a.createElement(I.a, {
							name: "history",
							className: q.a.icon
						}), o.a.createElement(i.a, {
							className: q.a.schedulePostLink,
							to: Object(T.c)(e.name)
						}, s.fbt._("Schedule post", null, {
							hk: "xI07X"
						})))
					}
				}
				renderBody() {
					const {
						hasData: e,
						loadMoreToken: t,
						onLoadMoreStandaloneScheduledPosts: n,
						standalonePosts: s,
						subreddit: a
					} = this.props;
					return o.a.createElement(Y, {
						renderEmptyState: this.renderStandaloneEmptyState,
						hasData: e,
						standalonePosts: s,
						onLoadMore: n,
						subreddit: a,
						loadMoreToken: t
					})
				}
				render() {
					const {
						isLoading: e,
						hasData: t,
						subreddit: n
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(c.c, null, o.a.createElement(i.a, {
						to: Object(T.c)(n.name)
					}, o.a.createElement(h.l, null, s.fbt._("Schedule Post", null, {
						hk: "2Ygkzg"
					})))), o.a.createElement(c.a, null, o.a.createElement(c.b, {
						className: q.a.pageTitle
					}, s.fbt._("Scheduled posts", null, {
						hk: "28Qjmj"
					})), !t && e ? Object(z.a)() : this.renderBody(), t && e && Object(z.a)(1)))
				}
			}
			t.a = Q(X)
		},
		"./src/reddit/components/SubredditContent/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/ClassicPost/Placeholder.tsx");

			function r() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
				const t = [];
				for (let n = 0; n < e; n++) t.push(a.a.createElement(o.b, {
					isLoading: !0
				}));
				return a.a.createElement(a.a.Fragment, null, t)
			}
		},
		"./src/reddit/components/SubredditCreationModal/Layout/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditCreationModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditCreationModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "radioOptions", (function() {
				return ie
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditCreation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				b = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				g = n("./src/reddit/contexts/NavbarExp.ts"),
				f = n("./src/reddit/components/SubredditCreationModal/Layout/index.m.less"),
				E = n.n(f);
			var x = e => {
					const t = Object(a.useContext)(g.a);
					return o.a.createElement("div", {
						className: E.a.OuterContainer
					}, o.a.createElement("div", {
						className: Object(l.a)(e.className, E.a.Container)
					}, o.a.createElement("div", {
						className: Object(l.a)(E.a.Content, {
							[E.a.ContainerExp]: t
						})
					}, e.children)))
				},
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/constants/modals.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				y = n("./src/reddit/controls/ErrorText/index.tsx"),
				O = n("./src/reddit/controls/RadioInput/index.tsx"),
				S = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				j = n("./src/reddit/controls/TextButton/index.tsx"),
				N = n("./src/reddit/helpers/trackers/emailInvite.ts"),
				w = n("./src/reddit/helpers/trackers/screenview.ts"),
				I = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				T = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				M = n("./src/reddit/icons/svgs/Close/index.tsx"),
				P = n("./src/reddit/icons/svgs/Eye/index.tsx"),
				R = n("./src/reddit/icons/svgs/Info/index.tsx"),
				A = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				F = n("./src/reddit/icons/svgs/User/index.tsx"),
				D = n("./src/reddit/models/Subreddit/index.ts"),
				L = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				U = n("./src/reddit/selectors/experiments/emailInvite.ts"),
				B = n("./src/reddit/selectors/subreddit.ts"),
				H = n("./src/reddit/selectors/tags.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				z = n("./src/lib/formatApiError/index.ts");
			const V = (e, t) => {
				if (!e) return {};
				const n = e.fields && e.fields.length && e.fields[0] && e.fields[0].field,
					a = e.type;
				if ("name" === n) {
					if ("NO_TEXT" === a) return {
						name: s.fbt._("A community name is required", null, {
							hk: "QIlYS"
						})
					};
					if ("BAD_SR_NAME" === a) return {
						name: s.fbt._("Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.", null, {
							hk: "2rmVgd"
						})
					};
					if ("SUBREDDIT_EXISTS" === a) return {
						name: s.fbt._("Sorry, r/{subreddit name attempt} is taken. Try another.", [s.fbt._param("subreddit name attempt", t)], {
							hk: "CLwzs"
						})
					};
					if ("SUBREDDIT_UNAVAILABLE" === a) return {
						name: s.fbt._("This community name is unavailable", null, {
							hk: "15j6BB"
						})
					}
				}
				return {
					generic: Object(z.a)(e)
				}
			};
			var q = n("./src/reddit/components/SubredditCreationModal/index.m.less"),
				G = n.n(q),
				K = n("./src/lib/lessComponent.tsx");
			const Q = 21,
				Y = "create-title-info",
				X = K.a.wrapped(R.a, "Info", G.a),
				Z = K.a.wrapped(S.a, "RadioOption", G.a),
				J = K.a.wrapped(b.c, "Tooltip", G.a),
				$ = K.a.wrapped(F.a, "Public", G.a),
				ee = K.a.wrapped(P.a, "Restricted", G.a),
				te = K.a.wrapped(A.a, "Private", G.a),
				ne = K.a.wrapped(T.a, "Employee", G.a),
				se = K.a.wrapped(M.a, "CloseButton", G.a),
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
					onCloseModal: () => e(Object(c.g)(_.a.SUBREDDIT_CREATION_MODAL_ID)),
					onShowTooltip: () => e(Object(u.f)({
						tooltipId: Y
					})),
					onHideTooltip: () => e(Object(u.i)()),
					validateSubredditName: t => e(Object(m.i)(t))
				})),
				ie = (e, t) => [o.a.createElement(Z, {
					key: "public",
					showButton: !0,
					value: "public"
				}, o.a.createElement("div", {
					className: G.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement($, null)), o.a.createElement("div", {
					className: G.a.radioContainer
				}, o.a.createElement("div", {
					className: G.a.sublabel
				}, s.fbt._("Public", null, {
					hk: "DK992"
				})), o.a.createElement("div", {
					className: Object(l.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, s.fbt._("Anyone can view, post, and comment to this community", null, {
					hk: "1PfFUA"
				}))))), o.a.createElement(Z, {
					key: "restricted",
					showButton: !0,
					value: "restricted"
				}, o.a.createElement("div", {
					className: G.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(ee, null)), o.a.createElement("div", {
					className: G.a.radioContainer
				}, o.a.createElement("div", {
					className: G.a.sublabel
				}, s.fbt._("Restricted", null, {
					hk: "1iBTDq"
				})), o.a.createElement("div", {
					className: Object(l.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, Object(L.g)(t))))), o.a.createElement(Z, {
					key: "private",
					showButton: !0,
					value: "private"
				}, o.a.createElement("div", {
					className: G.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(te, null)), o.a.createElement("div", {
					className: G.a.radioContainer
				}, o.a.createElement("div", {
					className: G.a.sublabel
				}, s.fbt._("Private", null, {
					hk: "3q5SYn"
				})), o.a.createElement("div", {
					className: Object(l.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, s.fbt._("Only approved users can view and submit to this community", null, {
					hk: "3z8OI6"
				}))))), o.a.createElement(Z, {
					key: "employees_only",
					showButton: !0,
					value: "employees_only",
					hidden: !e
				}, o.a.createElement("div", {
					className: G.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(ne, null)), o.a.createElement("div", {
					className: G.a.radioContainer
				}, o.a.createElement("div", {
					className: G.a.sublabel
				}, s.fbt._("Employees only", null, {
					hk: "1arrQC"
				})), o.a.createElement("div", {
					className: Object(l.a)(G.a.metafieldDescription, G.a.radioDescription)
				}, s.fbt._("Only Reddit employees can view and submit to this community", null, {
					hk: "3ty23C"
				})))))];
			class de extends o.a.Component {
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
						e(Object(N.a)("community_creation")), this.setState({
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
						type: D.f.Public,
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
					e(Object(w.x)())
				}
				componentWillUnmount() {
					clearTimeout(this.timeout), this.props.clearErrors()
				}
				render() {
					const {
						error: e,
						isCreatePending: t,
						isEmailInviteExperimentEnabled: n,
						isEmployee: a,
						onHideTooltip: r,
						onShowTooltip: i,
						sendEvent: d,
						userDoesNotHaveEnoughExpToCreateCommunity: c,
						userIsSuspended: m
					} = this.props, u = V(e, this.state.name), {
						over18: b,
						showEmailInviteModal: g,
						waitingForSuccessfulCommunity: f
					} = this.state;
					return o.a.createElement(x, {
						className: G.a.subredditCreation
					}, o.a.createElement("div", {
						className: G.a.container
					}, o.a.createElement("h1", {
						className: G.a.title
					}, s.fbt._("Create a community", null, {
						hk: "SlFa7"
					}), o.a.createElement(se, {
						onClick: this.onCloseModal
					})), c ? o.a.createElement("h2", {
						className: G.a.sublabel
					}, s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "44qhJp"
					})) : m ? o.a.createElement("h2", {
						className: G.a.sublabel
					}, s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "3trJMZ"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(h.e, {
						isCreateCommunity: !0,
						label: s.fbt._("Name", null, {
							hk: "3OIzgl"
						}),
						textContainerClassName: G.a.fullWidthTextContainer,
						onBlur: this.onValidateSubredditName,
						onChange: this.onNameChange,
						maxChars: Q,
						value: this.state.name,
						subtext: o.a.createElement("span", {
							className: G.a.subtextContainer
						}, s.fbt._("Community names including capitalization cannot be changed.", null, {
							hk: "VjrZg"
						}), o.a.createElement("span", {
							id: Y,
							onMouseEnter: i,
							onMouseLeave: r,
							className: G.a.info
						}, o.a.createElement(X, null), o.a.createElement(J, {
							className: G.a.StyledTooltip,
							caretOnTop: !0,
							tooltipId: Y,
							text: s.fbt._('Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").', null, {
								hk: "3RsycS"
							})
						})))
					}), u.name && o.a.createElement(ae, null, u.name), o.a.createElement(h.l, {
						label: s.fbt._("Community type", null, {
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
						className: Object(l.a)(G.a.field, {
							[G.a.isCreatePending]: t
						})
					}, o.a.createElement("div", {
						className: G.a.subtitle
					}, s.fbt._("Adult content", null, {
						hk: "20arB"
					})), o.a.createElement(k.a, {
						name: "over18",
						value: b,
						onChange: this.onUpdateOver18,
						disabled: t
					}, o.a.createElement("div", {
						className: G.a.nsfw
					}, "NSFW"), o.a.createElement("div", {
						className: G.a.sublabel
					}, s.fbt._("18+ year old community", null, {
						hk: "1XxZMV"
					})))), n && o.a.createElement("div", {
						className: Object(l.a)(G.a.field, {
							[G.a.isCreatePending]: t
						})
					}, o.a.createElement(j.a, {
						className: G.a.textButton,
						onClick: this.onInviteViaEmailClick
					}, s.fbt._("Invite members via email", null, {
						hk: "2uViIf"
					}))), u.generic && o.a.createElement(ae, null, u.generic), f && o.a.createElement("div", {
						className: G.a.pendingText
					}, s.fbt._("Your community is being created...", null, {
						hk: "3dSTrq"
					})), o.a.createElement("div", {
						className: G.a.buttonContainer
					}, o.a.createElement(C.t, {
						disabled: t,
						className: G.a.createButton,
						onClick: this.onCancelCreation,
						priority: C.c.Secondary
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(C.t, {
						disabled: t,
						className: G.a.createButton,
						onClick: this.onCreateCommunityClick
					}, s.fbt._("Create Community", null, {
						hk: "QE8Y3"
					}))))), g && o.a.createElement(p.a, {
						onClose: this.onCloseInviteViaEmailModal,
						sendEvent: d
					}))
				}
			}
			t.default = Object(d.a)(Object(v.c)(re(de)))
		},
		"./src/reddit/components/SubredditModerationSearch/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditModerationSearch/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				m = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				u = n("./src/reddit/icons/svgs/Search/index.tsx"),
				p = n("./src/reddit/components/SubredditModerationSearch/index.m.less"),
				b = n.n(p);
			const h = r.a.wrapped(u.a, "SearchIcon", b.a),
				g = r.a.wrapped(i.a, "NoResultsContainer", b.a),
				f = r.a.div("Container", b.a),
				E = r.a.wrapped(c.a, "SearchStatusBar", b.a),
				x = r.a.div("SearchStatus", b.a),
				v = r.a.span("Bold", b.a);

			function _(e) {
				if (e.searchPending) return null;
				const t = Object(l.a)(e.searchTerm);
				return e.noResultsFound ? o.a.createElement(g, null, o.a.createElement(h, null), o.a.createElement(i.b, null, s.fbt._("No results for {searchTerm}", [s.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), o.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, s.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : o.a.createElement(f, null, o.a.createElement(E, null, o.a.createElement(x, null, s.fbt._("1 search result for {=[searchTerm]}", [s.fbt._param("=[searchTerm]", o.a.createElement(v, {
					"data-redditstyle": !0
				}, s.fbt._("{searchTerm}", [s.fbt._param("searchTerm", `'${t}':`)], {
					hk: "1B9ZWG"
				})))], {
					hk: "iAcV5"
				})), o.a.createElement(m.a, null, o.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, s.fbt._("See all", null, {
					hk: "3aLS8s"
				})))), e.children)
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				topBarRow: "_3H6HwkSZ2zUC1pwaIMv-EY",
				searchBar: "_2LvB93iPopVPdhNBxBnfAH",
				searchIcon: "_1lo1uHsqx3-EkgYDL4xKEB",
				searchInput: "_1ox94KT4YX0mmZgLO51PG_",
				searchButton: "_3-3xbjG4pcuzlB7SzgBvzg"
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				d = n("./src/reddit/icons/svgs/Search/index.tsx"),
				l = n("./src/reddit/components/SubredditModerationTopBar/index.m.less"),
				c = n.n(l);
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
						placeholder: s.fbt._("Search for a user", null, {
							hk: "1yTo6e"
						}),
						type: "text",
						value: t.searchInputText
					}), o.a.createElement("button", {
						className: c.a.searchButton,
						onClick: this.onSearch
					}, o.a.createElement(d.a, {
						className: c.a.searchIcon
					}))), !e.positionSearchRight && e.children)
				}
			}
		},
		"./src/reddit/components/SubredditModerationUserItem/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditModerationUserItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return R
			}));
			var s = n("./node_modules/lodash/times.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/helpers/trackers/moderationPages.ts"),
				c = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				p = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/SubredditModerationUserItem/index.m.less"),
				f = n.n(g);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = (e, t) => {
				const n = `UserInfoTooltip--${e}`;
				return t ? `${n}--${t}` : n
			}, v = i.a.wrapped(b.a, "Row", f.a), _ = i.a.div("Username", f.a), C = i.a.wrapped(h.a, "RightAlign", f.a), k = i.a.div("Description", f.a), y = i.a.div("AdditionalText", f.a), O = i.a.wrapped(u.a, "ChevronDown", f.a), S = i.a.wrapped(p.a, "ChevronUp", f.a), j = i.a.div("ExpandoContainer", f.a), N = i.a.span("Bullet", f.a), w = i.a.div("PlaceholderItem", f.a), I = i.a.wrapped(w, "EmptyUserIcon", f.a), T = i.a.wrapped(w, "EmptyDetails", f.a), M = i.a.div("UsersLoadingContainer", f.a), P = () => r.a.createElement(v, null, r.a.createElement(I, null), r.a.createElement(T, null), r.a.createElement(T, null)), R = e => r.a.createElement(M, {
				className: e.className
			}, a()(e.rows || 10, e => r.a.createElement(P, {
				key: e
			})));
			class A extends r.a.Component {
				constructor(e) {
					super(e), this.onToggleExpandedComponent = () => {
						this.props.pageName && !this.state.isExpanded && this.props.sendEvent(l.a("more_detail", this.props.pageName)), this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.sendHoverCardEvent = () => {
						this.props.pageName && this.props.sendEvent(l.c(this.props.pageName))
					}, this.state = {
						isExpanded: !1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(v, null, r.a.createElement(_, null, r.a.createElement(c.a, {
						username: e.username,
						userIcon: e.userIcon,
						tooltipId: x(e.username, e.moderatorType),
						subredditId: e.subredditId,
						sendHoverCardEvent: this.sendHoverCardEvent
					})), r.a.createElement(k, null, e.timeAgo, e.description && r.a.createElement(r.a.Fragment, null, r.a.createElement(N, null, "•"), e.description)), r.a.createElement(C, null, e.additionalText && r.a.createElement(y, null, e.additionalText), e.primaryButton, e.secondaryButton, e.tertiaryButton, e.expandedComponent && r.a.createElement(m.r, {
						onClick: this.onToggleExpandedComponent
					}, E._("More Details", null, {
						hk: "KnMc6"
					}), t.isExpanded ? r.a.createElement(S, null) : r.a.createElement(O, null)))), t.isExpanded && r.a.createElement(j, null, e.expandedComponent))
				}
			}
			t.b = Object(d.c)(A)
		},
		"./src/reddit/components/SubredditRules/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/config.ts"),
				o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				i = n("./node_modules/lodash/times.js"),
				d = n.n(i),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				m = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/actions/modal.ts"),
				h = n("./src/lib/makeActionCreator/index.ts"),
				g = n("./src/reddit/actions/subredditRules/constants.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				E = n("./src/reddit/endpoints/subreddit/rules.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/subreddit.ts");
			const _ = Object(h.a)(g.e),
				C = (e, t) => async (n, a, o) => {
					let {
						apiContext: r
					} = o;
					const i = Object(v.S)(a(), {
							subredditId: e
						}).name,
						d = `success-block-${t.rule}`,
						l = `error-block-${t.rule}`,
						c = await Object(E.a)(r(), i, t);
					if (c.ok) {
						const t = c.body;
						n(_({
							rules: t,
							subredditId: e
						})), n(f.f({
							id: d,
							kind: x.b.SuccessCommunityGreen,
							text: s.fbt._("Rule added", null, {
								hk: "4D4jbP"
							})
						}))
					} else n(f.f({
						id: l,
						kind: x.b.Error,
						text: c.json.errors ? c.json.errors[0][1] : s.fbt._("An error has occured. Please try again later", null, {
							hk: "2C9b4N"
						})
					}))
				}, k = Object(h.a)(g.f), y = Object(h.a)(g.g), O = Object(h.a)(g.d), S = (e, t) => async (n, a, o) => {
					let {
						apiContext: r
					} = o;
					const i = Object(v.S)(a(), {
							subredditId: e
						}).name,
						d = Object(v.O)(a(), {
							subredditId: e
						}),
						l = `success-block-${e}`,
						c = `error-block-${e}`,
						m = await Object(E.e)(r(), i, t);
					if (m.ok) {
						const t = m.body;
						n(O({
							rules: t,
							subredditId: e
						})), n(f.f({
							id: l,
							kind: x.b.SuccessCommunityGreen,
							text: s.fbt._("Rule order updated", null, {
								hk: "3bmmvl"
							}),
							buttonText: s.fbt._("Undo", null, {
								hk: "1RYWKC"
							}),
							buttonAction: S(e, d)
						}))
					} else n(f.f({
						id: c,
						kind: x.b.Error,
						text: "explanation" in m ? m.explanation : m.json && "errors" in m.json ? m.json.errors[0][1] : s.fbt._("An error has occured. Please try again later", null, {
							hk: "1XJ2UQ"
						})
					}))
				};
			var j = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				N = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				w = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				I = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				T = n("./src/reddit/components/TrackingHelper/index.tsx"),
				M = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/controls/Sortable/index.tsx"),
				R = n("./src/reddit/selectors/telemetry.ts");
			const A = e => ({
					subreddit: R.gb(e),
					profile: R.Q(e),
					userSubreddit: R.qb(e)
				}),
				F = e => t => ({
					source: "rules",
					action: "click",
					noun: e,
					...A(t)
				}),
				D = (e, t) => n => ({
					source: "rules",
					action: "click",
					noun: e,
					actionInfo: R.d(n, {
						count: t
					}),
					...A(n)
				});
			var L = n("./src/reddit/icons/fonts/index.tsx"),
				U = n("./src/reddit/layout/row/Inline/index.tsx"),
				B = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				H = n("./src/reddit/models/Rule/index.ts"),
				W = n("./src/reddit/selectors/activeModalId.ts"),
				z = n("./src/reddit/selectors/moderatorPermissions.ts"),
				V = n("./src/reddit/components/SubredditRules/index.m.less"),
				q = n.n(V),
				G = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				K = n("./src/reddit/icons/svgs/Grapple/index.tsx");
			const Q = p.a.wrapped(G.a, "DragCard", q.a);
			var Y = e => c.a.createElement(Q, {
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
					title: s.fbt._("Drag", null, {
						hk: "dBKmA"
					})
				})))),
				X = n("./src/higherOrderComponents/asModal/index.tsx"),
				Z = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				J = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				$ = n("./src/reddit/controls/RadioInput/index.tsx"),
				ee = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				te = n("./src/reddit/controls/TextButton/index.tsx"),
				ne = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const se = {
					rule: "",
					kind: "all",
					reportReason: "",
					description: ""
				},
				ae = Object(m.b)(null, (e, t) => ({
					createRule: n => e(C(t.subredditId, n)),
					updateRule: (n, a) => e(((e, t, n) => async (a, o, r) => {
						let {
							apiContext: i
						} = r;
						const d = Object(v.S)(o(), {
								subredditId: e
							}).name,
							l = `success-block-${t.rule}`,
							c = `error-block-${t.rule}`,
							m = await Object(E.f)(i(), d, t, n);
						if (m.ok) {
							const t = m.body;
							a(k({
								rules: t,
								subredditId: e,
								oldName: n
							})), a(f.f({
								id: l,
								kind: x.b.SuccessCommunityGreen,
								text: s.fbt._("Rule updated", null, {
									hk: "1ljetO"
								})
							}))
						} else a(f.f({
							id: c,
							kind: x.b.Error,
							text: m.json.errors ? m.json.errors[0][1] : s.fbt._("An error has occured. Please try again later", null, {
								hk: "2acjBM"
							})
						}))
					})(t.subredditId, n, a))
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
						} = this, n = {
							rule: t.rule.trim(),
							kind: t.kind,
							reason: t.reportReason.trim(),
							description: t.description.trim()
						};
						e.rule ? e.updateRule(n, e.rule.shortName) : e.createRule(n), e.toggleModal(), e.sendEvent()
					}, this.canSave = () => {
						const {
							props: e,
							state: t
						} = this, n = t.rule.trim(), s = t.reportReason.trim(), a = t.description.trim(), o = !e.ruleNames.includes(n) || e.ruleNames.includes(n) && e.rule && e.rule.shortName === n, r = !e.rule || (e.rule.shortName !== n || e.rule.violationReason !== t.reportReason || e.rule.kind !== t.kind || e.rule.description !== a);
						return o && r && n.length > 0 && n.length <= H.g && s.length <= H.f && a.length <= H.a && t.kind
					}, this.selectRuleKind = e => {
						this.setState({
							kind: e
						})
					}, this.isDuplicateRuleName = () => {
						const {
							props: e,
							state: t
						} = this, n = !e.rule || e.rule.shortName !== t.rule.trim(), s = e.ruleNames.includes(t.rule.trim());
						return 0 !== t.rule.trim().length && n && s
					}, this.state = e.rule ? {
						rule: e.rule.shortName,
						kind: e.rule.kind,
						reportReason: e.rule.violationReason || "",
						description: e.rule.description || ""
					} : se
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return c.a.createElement(J.e, null, c.a.createElement(J.i, null, c.a.createElement(ne.a, null, c.a.createElement(J.q, null, e.rule ? s.fbt._("Edit rule", null, {
						hk: "2zflTO"
					}) : s.fbt._("Add rule", null, {
						hk: "1xqo5O"
					})), c.a.createElement(te.a, {
						className: q.a.modalCloseButton,
						onClick: e.toggleModal
					}, c.a.createElement(J.b, null)))), c.a.createElement(J.l, null, c.a.createElement(J.h, null, c.a.createElement(J.p, {
						className: q.a.modalRule
					}, s.fbt._("Rule", null, {
						hk: "1W7esG"
					})), c.a.createElement(J.t, {
						className: q.a.modalRuleField,
						onChange: this.onRuleInputChange,
						placeholder: s.fbt._('Rule displayed (e.g. "No photos")', null, {
							hk: "GdEW"
						}),
						value: t.rule
					}), this.isDuplicateRuleName() && c.a.createElement("span", {
						className: q.a.duplicateName
					}, s.fbt._("You have another rule with this title. Please change.", null, {
						hk: "2EPSGv"
					})), c.a.createElement(Z.a, {
						maxChars: H.g,
						text: t.rule.trim()
					})), c.a.createElement(J.h, null, c.a.createElement(J.p, {
						className: q.a.modalRuleTitle
					}, s.fbt._("Applies to", null, {
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
					}, c.a.createElement(J.p, {
						className: q.a.modalRadioText
					}, s.fbt._("Posts & comments", null, {
						hk: "tHmQq"
					}))), c.a.createElement(ee.a, {
						className: q.a.modalRadioButton,
						key: H.b.post,
						value: H.b.post,
						selected: t.kind === H.b.post,
						showButton: !0,
						tabIndex: t.kind === H.b.post ? 0 : -1
					}, c.a.createElement(J.p, {
						className: q.a.modalRadioText
					}, s.fbt._("Posts only", null, {
						hk: "16dDBr"
					}))), c.a.createElement(ee.a, {
						className: q.a.modalRadioButton,
						key: H.b.comment,
						value: H.b.comment,
						selected: t.kind === H.b.comment,
						showButton: !0,
						tabIndex: t.kind === H.b.comment ? 0 : -1
					}, c.a.createElement(J.p, {
						className: q.a.modalRadioText
					}, s.fbt._("Comments only", null, {
						hk: "2V8qUA"
					}))))), c.a.createElement(J.h, null, c.a.createElement(J.p, {
						className: q.a.modalReportTitle
					}, s.fbt._("Report reason", null, {
						hk: "3ShjE9"
					})), c.a.createElement(J.m, {
						className: q.a.modalReportMeta
					}, s.fbt._("Defaults to rule name if left blank", null, {
						hk: "2xObiU"
					})), c.a.createElement(J.t, {
						className: q.a.modalReasonField,
						onChange: this.onReportReasonInputChange,
						placeholder: t.rule.trim().length > 0 && 0 === t.reportReason.trim().length ? t.rule : s.fbt._('Reason rule is broken (e.g. "This is a photo")', null, {
							hk: "2Op1SL"
						}),
						value: t.reportReason
					}), c.a.createElement(Z.a, {
						maxChars: H.f,
						text: t.reportReason.trim()
					})), c.a.createElement("div", {
						className: q.a.modalDescriptionBlock
					}, c.a.createElement(J.p, {
						className: q.a.modalRuleTitle
					}, s.fbt._("Full description", null, {
						hk: "4CTvQy"
					})), c.a.createElement(J.t, {
						className: q.a.modalDescriptionField,
						onChange: this.onDescriptionInputChange,
						placeholder: s.fbt._("Enter the full description of the rule.", null, {
							hk: "3EyaJe"
						}),
						value: t.description
					}), c.a.createElement(Z.a, {
						maxChars: H.a,
						text: t.description.trim()
					}))), c.a.createElement(J.g, {
						className: q.a.modalFooter
					}, c.a.createElement(M.l, {
						className: q.a.modalSubmitButton,
						onClick: this.onSave,
						disabled: !this.canSave()
					}, e.rule ? s.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : s.fbt._("Add new rule", null, {
						hk: "2dy0gV"
					})), c.a.createElement(J.a, {
						onClick: e.toggleModal
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.rule && c.a.createElement(J.s, {
						className: q.a.modalRemoveButton,
						onClick: e.onDelete
					}, s.fbt._("Delete", null, {
						hk: "4lt26q"
					}))))
				}
			}
			var re = Object(X.a)(ae(oe)),
				ie = n("./src/lib/timeAgo/index.ts"),
				de = n("./src/reddit/components/HumanDate/index.tsx"),
				le = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				ce = n("./src/reddit/components/RichTextJson/index.tsx"),
				me = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				ue = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				pe = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				be = n("./src/reddit/models/RichTextJson/index.ts");
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
						onEdit: n,
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
						onClick: n
					}, c.a.createElement(pe.a, {
						className: q.a.icon,
						title: s.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					})), c.a.createElement("button", {
						className: q.a.iconButton,
						onClick: this.toggleExpandDetails
					}, this.state.isExpanded ? c.a.createElement(me.a, {
						className: q.a.icon,
						title: s.fbt._("Collapse", null, {
							hk: "eGqwd"
						})
					}) : c.a.createElement(ue.a, {
						className: q.a.icon,
						title: s.fbt._("Expand", null, {
							hk: "4dMVPg"
						})
					})))), this.state.isExpanded && c.a.createElement(U.a, {
						className: q.a.expandDetails
					}, c.a.createElement("span", {
						className: q.a.metadata
					}, c.a.createElement("span", {
						className: q.a.ruleMetaTitle
					}, s.fbt._("Report reason", null, {
						hk: "2RH1DJ"
					})), c.a.createElement("span", {
						className: q.a.ruleMetaText
					}, a.violationReason && 0 !== a.violationReason.length ? a.violationReason : a.shortName)), c.a.createElement("span", {
						className: q.a.middleMeta
					}, c.a.createElement("div", {
						className: q.a.middleMetaBlock
					}, c.a.createElement("div", {
						className: q.a.ruleMetaTitle
					}, s.fbt._("Applies to", null, {
						hk: "19eYpy"
					})), c.a.createElement("div", {
						className: q.a.ruleMetaText
					}, a.kind === H.b.all ? s.fbt._("Posts & comments", null, {
						hk: "34PjHx"
					}) : a.kind === H.b.post ? s.fbt._("Posts only", null, {
						hk: "3MllWy"
					}) : s.fbt._("Comments only", null, {
						hk: "StCEa"
					}))), c.a.createElement("div", {
						className: q.a.middleMetaBlock
					}, c.a.createElement("div", {
						className: q.a.ruleMetaTitle
					}, s.fbt._("Created", null, {
						hk: "gSE9w"
					})), c.a.createElement("div", {
						className: q.a.ruleMetaText
					}, r ? c.a.createElement(de.b, {
						seconds: a.createdUtc
					}) : c.a.createElement(de.d, {
						seconds: a.createdUtc
					})))), c.a.createElement("span", {
						className: q.a.metadata
					}, c.a.createElement("span", {
						className: q.a.ruleMetaTitle
					}, s.fbt._("Full description", null, {
						hk: "20Lgcg"
					})), c.a.createElement("span", {
						className: q.a.ruleMetaText
					}, o && !Object(be.G)({
						document: o
					}) ? c.a.createElement(ce.a, {
						className: q.a.ruleMetaText,
						content: {
							document: o
						},
						rtJsonElementProps: he
					}) : a.descriptionHtml ? c.a.createElement(le.a, {
						className: q.a.ruleMetaText,
						html: a.descriptionHtml
					}) : a.description))))
				}
			}
			var fe = ge;
			const Ee = p.a.wrapped(M.l, "PrimaryButton", q.a),
				xe = () => c.a.createElement(U.a, {
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
				}, d()(15, e => c.a.createElement(xe, {
					key: e
				}))),
				_e = Object(u.c)({
					hasModConfigPerms: (e, t) => Object(z.b)(B.c.config)(e, {
						subredditId: t.subreddit.id
					}),
					isConfirmModalOpen: e => "SubredditRule--Modal--DeleteConfirmation" === Object(W.a)(e),
					isRuleEditorOpen: e => "SubredditRule--Editor--Modal" === Object(W.a)(e),
					isSubredditRulesPending: e => Object(v.Q)(e),
					ruleOrder: (e, t) => Object(v.O)(e, {
						subredditId: t.subreddit.id
					}),
					subredditRules: (e, t) => Object(v.R)(e, {
						subredditId: t.subreddit.id
					})
				}),
				Ce = Object(m.b)(_e, (e, t) => ({
					removeRule: (n, a) => e(((e, t, n) => async (a, o, r) => {
						let {
							apiContext: i
						} = r;
						const d = Object(v.S)(o(), {
								subredditId: e
							}).name,
							l = Object(v.R)(o(), {
								subredditId: e
							})[n],
							c = `success-block-${t}`,
							m = `error-block-${t}`,
							u = await Object(E.d)(i(), d, t);
						if (u.ok) {
							const t = u.body;
							a(y({
								rules: t,
								subredditId: e
							})), a(f.f({
								id: c,
								kind: x.b.SuccessCommunityGreen,
								text: s.fbt._("Rule deleted", null, {
									hk: "2Kwoph"
								}),
								buttonText: s.fbt._("Undo", null, {
									hk: "1RYWKC"
								}),
								buttonAction: C(e, {
									rule: l.shortName,
									kind: l.kind,
									reason: l.violationReason,
									description: l.description
								})
							}))
						} else a(f.f({
							id: m,
							kind: x.b.Error,
							text: u.json.errors ? u.json.errors[0][1] : s.fbt._("An error has occured. Please try again later", null, {
								hk: "37ELrZ"
							})
						}))
					})(t.subreddit.id, n, a)),
					reorderRules: n => {
						e(S(t.subreddit.id, n))
					},
					toggleConfirmationModal: () => e(Object(b.i)("SubredditRule--Modal--DeleteConfirmation")),
					toggleRuleEditorModal: () => e(Object(b.i)("SubredditRule--Editor--Modal"))
				}));
			class ke extends c.a.Component {
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
					}, this.handleDrop = (e, t, n) => this.setState({
						ruleOrder: n,
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
						isRuleEditorOpen: n,
						isSubredditRulesPending: o,
						subreddit: i,
						subredditRules: d
					} = this.props;
					return c.a.createElement(c.a.Fragment, null, e && c.a.createElement(I.c, null, this.state.isReordering ? c.a.createElement(M.o, {
						onClick: this.stopReorder
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})) : c.a.createElement(M.r, {
						onClick: this.startReorder,
						disabled: d.length <= 1
					}, s.fbt._("Reorder rules", null, {
						hk: "1qh7V6"
					})), this.state.isReordering ? c.a.createElement(Ee, {
						onClick: this.reorderRules,
						disabled: r()(d.map(e => e.shortName), this.state.ruleOrder)
					}, s.fbt._("Save", null, {
						hk: "4yMsMq"
					})) : c.a.createElement(Ee, {
						onClick: this.toggleEditorModal,
						disabled: o || d.length >= H.e
					}, s.fbt._("Add rule", null, {
						hk: "6GEk0"
					}))), d.length ? c.a.createElement(I.a, null, c.a.createElement("div", {
						className: q.a.header
					}, c.a.createElement(I.b, {
						className: q.a.rulesHeader
					}, s.fbt._("Rules", null, {
						hk: "41SmPR"
					}), c.a.createElement(w.a, {
						linkUrl: `${a.a.redditModHelpUrl}/hc/en-us/articles/360023379211`
					})), !this.state.isReordering && c.a.createElement("div", {
						className: q.a.rulesInfo
					}, s.fbt._("These are rules that visitors must follow to participate. They can be used as reasons to report or ban posts, comments, and users. Communities can have a maximum of 15 rules.", null, {
						hk: "1C2Vjc"
					}))), this.state.isReordering ? c.a.createElement(P.a, {
						values: this.state.ruleOrder,
						render: (e, t, n, s, a) => c.a.createElement(Y, {
							isDragging: n,
							isOver: s,
							canDrop: a,
							index: t,
							shortName: e
						}),
						onDrop: this.handleDrop
					}) : d.map((t, n) => c.a.createElement(fe, {
						hasConfigPerms: e,
						index: n,
						key: `${i.name}-${t.shortName}`,
						onEdit: () => this.onEditRule(t),
						subredditRule: t
					}))) : c.a.createElement(I.a, null, c.a.createElement("div", {
						className: q.a.header
					}, c.a.createElement(I.b, {
						className: q.a.rulesHeader
					}, s.fbt._("Rules", null, {
						hk: "41SmPR"
					}), c.a.createElement(w.a, {
						linkUrl: `${a.a.redditModHelpUrl}/hc/en-us/articles/360023379211`
					}))), o ? c.a.createElement(ve, null) : c.a.createElement(N.c, {
						text: s.fbt._("No rules yet", null, {
							hk: "pYLkV"
						})
					}, c.a.createElement(L.a, {
						name: "rules",
						className: q.a.rulesIcon
					}))), n && c.a.createElement(re, {
						onDelete: this.onConfirmDeleteRule,
						rule: this.state.ruleToEdit,
						ruleNames: d.map(e => e.shortName),
						sendEvent: this.trackEdit,
						subredditId: i.id,
						toggleModal: this.toggleEditorModal,
						withOverlay: !0
					}), t && this.state.ruleToEdit && c.a.createElement(j.a, {
						actionText: s.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						headerText: s.fbt._("Delete rule", null, {
							hk: "5q2Ri"
						}),
						modalText: s.fbt._("Are you sure you want to delete this rule?", null, {
							hk: "2diD6u"
						}),
						onConfirm: this.deleteRule,
						toggleModal: this.toggleConfirmationModal,
						trackClick: this.trackDelete,
						withOverlay: !0
					}))
				}
			}
			t.a = Ce(Object(T.c)(ke))
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, n) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				d = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				m = n.n(c);
			const u = r.a.span("UserIconContainer", m.a),
				p = r.a.wrapped(d.a, "UserIcon", m.a),
				b = r.a.wrapped(l.a, "UserLink", m.a);
			t.a = e => o.a.createElement(b, {
				className: e.className,
				to: `${s.a.redditUrl}/user/${e.username}`
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
		"./src/reddit/components/Wiki/CreateNewWikiPageModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/post.ts"),
				r = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/contexts/InsideOverlay.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/contexts/Post/index.tsx"),
				m = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/chatPost.ts"),
				p = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/selectors/postFlair.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/showPromotedCTA.ts"),
				f = n("./src/reddit/selectors/user.ts");
			const E = {
					autoplayPref: f.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: f.Q,
					showPromotedCTA: g.a,
					moderatorPermissions: p.m,
					modModeEnabled: l.T,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						return n ? e.polls.models[n] : null
					},
					showEditFlair: b.a,
					showMedia: l.s,
					flairStyleTemplate: l.V
				},
				x = Object(s.b)(() => Object(a.c)(E), (e, t) => {
					let {
						postId: n
					} = t;
					return {
						handleVote: t => {
							const s = t === i.a.upvoted ? Object(o.kb)(n) : Object(o.w)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(o.gb)(n)),
						onOpenReportsDropdown: t => e(Object(r.h)({
							tooltipId: t
						}))
					}
				}, (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: e => e.title
				}));
			t.a = e => Object(c.b)(x(Object(d.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return m
			}));
			const s = "ModerationPage--Modal--AddAward",
				a = "ModerationPage--Modal--DeleteAwardConfirmation",
				o = 20,
				r = 4,
				i = 1e4,
				d = .2,
				l = .1,
				c = .1,
				m = 500
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				c = n.n(l);
			t.a = e => a.a.createElement(d.a, {
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
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/Dropdown/Row.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx");
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
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: s
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), s(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
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
							const n = this.menuItems.current.getElementsByClassName(r.a.menuOption);
							for (let s = 0; s < n.length; s++) e.relatedTarget === n[s] && (t = !0)
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
							for (let n = 0; n < t.length; n++) t[n] === e.target && (38 === e.keyCode && n > 0 && t[n - 1].focus(), 40 === e.keyCode && n < t.length - 1 && t[n + 1].focus())
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
						isTopicsStyle: n,
						menuOptionClassName: s
					} = this.props;
					return e.map((e, o) => a.a.createElement(d.b, {
						key: o + e.displayText,
						className: Object(i.a)(r.a.menuOption, s, {
							[r.a.topics]: n
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: n
					}, e.icon && e.icon, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: s,
						isTopicsStyle: o,
						menuItemsClassName: d,
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
							[r.a.compact]: s
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
					}, b), n), h ? null : p ? a.a.createElement(l.a, {
						sizePx: 8,
						className: r.a.loadingIcon
					}) : a.a.createElement(c.a, {
						name: "caret_down"
					})), a.a.createElement("div", {
						className: Object(i.a)(r.a.menuItems, d, {
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
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/flow.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-dnd/lib/index.js"),
				d = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const c = d.NativeTypes.FILE,
				m = a()(Object(i.DropTarget)(c, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), l.a);
			class u extends r.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(r.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = m(u)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = n("./src/reddit/controls/FormFields/index.m.less"),
				m = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
						children: n,
						inputRef: s,
						className: r,
						isInvalid: i,
						...d
					} = e;
					const l = void 0 !== d.value && "" !== d.value;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.inputWrapper, r, {
							[m.a.mIsInvalid]: i
						}),
						onClick: b
					}, a.a.createElement(p, u({
						"aria-invalid": i,
						innerRef: s
					}, d)), t && a.a.createElement("label", {
						className: Object(o.a)(m.a.label, {
							[m.a.mHasValue]: l
						})
					}, t), n)
				},
				g = e => {
					let {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: r,
						className: i,
						redditStyle: d,
						...l
					} = e;
					const c = void 0 !== l.value && "" !== l.value;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.inputMovingLabelWrapper, i, {
							[m.a.mIsInvalid]: r,
							[m.a.mIsRedditStyle]: d
						}),
						onClick: b
					}, a.a.createElement(p, u({
						innerRef: s
					}, l)), t && a.a.createElement("label", {
						className: Object(o.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, t), n)
				},
				f = e => a.a.createElement("div", {
					className: Object(o.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(d.a, {
					className: m.a.plus
				}));
			var E;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(E || (E = {}));
			class x extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: E.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: E.REMOVE,
							value: n,
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
						label: n,
						placeholder: s,
						errors: o = []
					} = this.props;
					return e.map((e, r) => a.a.createElement(h, {
						inputRef: e => this.setInputRef(e, r),
						isInvalid: !!o[r],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, r),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(r)
					}, a.a.createElement(l.b, {
						className: m.a.trash
					})), !!o[r] && a.a.createElement(i.b, {
						className: m.a.errorText
					}, o[r])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: r,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const d = !(!!s && n.length >= s) && !i;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.multiInputWrapper, e)
					}, t && d && a.a.createElement(f, {
						onClick: this.addValue,
						text: r
					}), this.renderFields(), !t && d && a.a.createElement(f, {
						onClick: this.addValue,
						text: r
					}))
				}
			}
		},
		"./src/reddit/controls/ImageDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				imageDisplay: "_1OSym2TYADlQNpSDWNxtjB"
			}
		},
		"./src/reddit/controls/ImageDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/controls/ImageDisplay/index.m.less"),
				i = n.n(r);
			t.a = e => {
				let {
					backgroundImage: t,
					children: n,
					className: s
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(i.a.imageDisplay, s),
					style: {
						backgroundImage: `url('${t}')`
					},
					children: n
				})
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			class o extends a.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
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
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, o = n || s;
					return a.a.createElement("div", {
						className: e.className
					}, n && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
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
		"./src/reddit/controls/Select/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/helpers/dragDropContext/index.ts"),
				r = n("./node_modules/lodash/flow.js"),
				i = n.n(r),
				d = n("./node_modules/react-dnd/lib/index.js");
			class l extends a.a.Component {
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
			var c = i()(Object(d.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const n = t.getDropResult();
						e.onDrop(e.id, n.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(d.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const n = t.getItem();
					return e.id !== n.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(l);
			class m extends a.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const s = n.values.slice(),
								a = s.indexOf(e),
								o = s.splice(a, 1)[0];
							let r = s.indexOf(t);
							return a <= r && (r += 1), s.splice(r, 0, o), this.props.onDrop(e, t, s), {
								values: s
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
						onClick: n,
						render: s
					} = this.props;
					return a.a.createElement("div", {
						className: e
					}, this.state.values.map((e, o) => a.a.createElement(c, {
						id: e,
						key: t && t(e, o),
						index: o,
						render: s,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(o.a)(m)
		},
		"./src/reddit/endpoints/economics/uploadedAssets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			}));
			var s, a, o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t, n, s) {
				const a = `assetType=${n}&assetStatus=${s}`;
				return Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets?${a}`
				})
			}

			function d(e, t, n) {
				const a = new FormData;
				return a.append("assetType", n.assetType), a.append("assetName", n.assetName), a.append("upfile", n.imageFile), n.assetType === s.Badge && (a.append("badgeColor", n.badgeColor || ""), a.append("badgeDescription", n.badgeDescription || "")), Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets`,
					method: "post",
					type: null,
					data: a
				})
			}

			function l(e, t, n, s, a) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets/${n}s/${s}`,
					method: "patch",
					data: a
				})
			}! function(e) {
				e.Badge = "badge", e.Emote = "emote"
			}(s || (s = {})),
			function(e) {
				e.Uploaded = "uploaded", e.Approved = "approved", e.Rejected = "rejected"
			}(a || (a = {}))
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SetSubredditGeoPlace.json");
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
			t.a = async (e, t) => Object(s.a)(e, {
				...a,
				variables: o(t)
			})
		},
		"./src/reddit/endpoints/subredditModeration/moderationLog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/AllModerators.json"),
				o = n("./src/redditGQL/operations/FetchModerationLogActions.json");
			const r = (e, t, n) => Object(s.a)(e, {
					...o,
					variables: {
						subredditName: t,
						...n
					}
				}),
				i = (e, t) => Object(s.a)(e, {
					...a,
					variables: {
						subredditName: t
					}
				})
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Subreddit/index.ts");
			const a = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo", "translation_piglatin", "translation_pirate", "translation_initials", "translation_german", "translation_british", "translation_french_fr", "translation_es_mx", "translation_br_pt", "german_translation", "lssgoldnormal_13", "test_automation_001"]),
				o = new Set([s.f.Private, s.f.User]),
				r = e => !(!e || !e.name) && (!!a.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !o.has(e.type));
			t.a = r
		},
		"./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = new Set(["t5_22cerq"]),
				a = e => s.has(e);
			t.a = a
		},
		"./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = new Set(["t5_q0gj4", "t5_z5gli", "t5_22cerq", "t5_3j0kj"]),
				a = e => s.has(e)
		},
		"./src/reddit/helpers/canAccessModerationPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/models/Subreddit/index.ts");
			t.a = e => {
				let {
					pageName: t,
					moderatorPermissions: n,
					canCreateScheduledPosts: o,
					isEmployee: r,
					isStreamingEnabled: i,
					subredditType: d,
					isContributor: l
				} = e;
				switch (t) {
					case s.fc.Awards:
						return !!n;
					case s.fc.Powerups:
						return !!(null == n ? void 0 : n.config);
					case s.fc.SubredditRules:
					case s.fc.Moderators:
						return !0;
					case s.fc.Modlog:
						return !!n;
					case s.fc.Muted:
						return !!(n && n.access && n.mail);
					case s.fc.Banned:
						return !(!n || !n.access);
					case s.fc.Contributors:
						return !!(n && n.access || d === a.f.Restricted || d === a.f.Private && l);
					case s.fc.Flair:
					case s.fc.PostFlair:
					case s.fc.UserFlair:
						return !(!n || !n.flair);
					case s.fc.CommunitySettings:
						return !(!n || !n.config);
					case s.fc.Modqueue:
					case s.fc.Reports:
					case s.fc.Edited:
					case s.fc.Spam:
					case s.fc.Unmoderated:
					case s.fc.ContentControls:
					case s.fc.Removal:
						return !(!n || !n.posts);
					case s.fc.ChatSettings:
						return !!n;
					case s.fc.Badges:
					case s.fc.Emojis:
						return !!n;
					case s.fc.Emotes:
						return !(!n || !n.config);
					case s.fc.Streaming:
						return !!(n && n.all && i);
					case s.fc.Wiki:
					case s.fc.WikiBanned:
					case s.fc.WikiContributors:
						return !(!n || !n.wiki);
					case s.fc.Traffic:
						return r || !!n;
					case s.fc.EventPostContent:
					case s.fc.ScheduledPostContent:
						return !!o;
					case s.fc.Predictions:
						return !(!n || !n.posts);
					default:
						return !1
				}
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				a = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				o = n.n(a);
			t.a = Object(s.DragDropContext)(o.a)
		},
		"./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/helpers/graphql/helpers.ts");
			const a = e => {
					const t = [];
					for (const {
							node: n
						} of e.edges) {
						const {
							action: e,
							actionNotes: a,
							createdAt: o,
							details: r,
							id: i,
							moderator: d,
							subredditName: l,
							target: c
						} = n, m = {
							action: e,
							actionNotes: a,
							createdAt: Object(s.e)(o),
							details: r,
							id: i,
							moderator: d,
							subredditName: l,
							target: c
						};
						t.push(m)
					}
					return t
				},
				o = e => {
					const t = [];
					for (const {
							node: n
						} of e.edges) {
						const {
							id: e,
							name: s
						} = n, a = {
							id: e,
							name: s
						};
						t.push(a)
					}
					return t
				}
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const a = e => {
				let {
					edges: t
				} = e;
				const n = [];
				for (const {
						node: a
					} of t) n.push(Object(s.f)(a));
				return n
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/isValidUsername/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/helpers/normalizeUsername/index.tsx");
			t.a = e => {
				const t = Object(s.a)(e.trim());
				return t.length > 2 && t.length <= 20
			}
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: n
				} = e;
				let s = n && `r/${n}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (s += `--[${e.onlyOfType}]`), s
			}
		},
		"./src/reddit/helpers/readOnlyMode/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.editable = "editable", e.focusableReadOnly = "focusablereadonly", e.readOnly = "readonly"
				}(s || (s = {}));
			const a = e => o(e) || e === s.focusableReadOnly,
				o = e => e === s.readOnly
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/PostMedia/index.tsx");
			const r = (e, t, n, s, o, r) => s ? e.crosspostRootId ? a.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, n, o, r)) : i(e, n, o, r) : null,
				i = (e, t, n, s) => a.a.createElement(o.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: s,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: n,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				r = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = n("./src/reddit/models/Theme/index.ts"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				c = n.n(l);
			const m = {},
				u = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(s.k)(.2, e),
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
		"./src/reddit/helpers/trackers/communitySettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/lodash/snakeCase.js"),
				a = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = {
					contentOptions: "link_type",
					contentVisible: "allow_top",
					subredditType: "type",
					welcomeMessageText: "welcome_message"
				},
				d = {
					allowChatPostCreation: o.gc.Posts,
					allowDiscovery: o.gc.Safety,
					allowGalleries: o.gc.Posts,
					allowImages: o.gc.Posts,
					allowPolls: o.gc.Posts,
					allowPostCrossposts: o.gc.Posts,
					collapseDeletedComments: o.gc.Posts,
					commentScoreHideMins: o.gc.Posts,
					contentOptions: o.gc.Posts,
					contentVisible: o.gc.Safety,
					crowdControlChatLevel: o.gc.Safety,
					crowdControlPostLevel: o.gc.Safety,
					crowdControlLevel: o.gc.Safety,
					crowdControlFilter: o.gc.Safety,
					crowdControlMode: o.gc.Safety,
					disableContributorRequests: o.gc.Community,
					excludeBannedModqueue: o.gc.Safety,
					over18: o.gc.Community,
					publicDescription: o.gc.Community,
					restrictCommenting: o.gc.Community,
					restrictPosting: o.gc.Community,
					spamComments: o.gc.Posts,
					spamLinks: o.gc.Posts,
					spamSelfposts: o.gc.Posts,
					spoilersEnabled: o.gc.Posts,
					subredditType: o.gc.Community,
					suggestedCommentSort: o.gc.Posts,
					toxicityThresholdChatLevel: o.gc.Safety,
					welcomeMessageEnabled: o.gc.Community,
					welcomeMessageText: o.gc.Community,
					wikiEditAge: o.gc.Wikis,
					wikiEditKarma: o.gc.Wikis,
					wikimode: o.gc.Wikis
				},
				l = {
					[o.gc.Community]: "community_settings_details",
					[o.gc.Notifications]: "community_settings_notifications",
					[o.gc.Safety]: "community_settings_safety",
					[o.gc.Posts]: "community_settings_content",
					[o.gc.Wikis]: "community_settings_wiki",
					[o.gc.ContentTag]: "content_tag"
				},
				c = e => i[e] || a()(e),
				m = e => {
					const t = d[e];
					return t && l[t] || "community_settings"
				},
				u = (e, t, n) => s => ({
					source: m(e),
					action: "click",
					noun: c(e),
					setting: {
						value: String(t),
						oldValue: String(n)
					},
					subreddit: r.gb(s),
					...r.n(s)
				}),
				p = (e, t, n) => s => ({
					source: m(e),
					action: "save",
					noun: c(e),
					setting: {
						value: String(t),
						oldValue: String(n)
					},
					subreddit: r.gb(s),
					...r.n(s)
				}),
				b = e => t => ({
					source: "community_settings",
					action: "click",
					noun: l[e],
					...r.n(t)
				}),
				h = e => t => ({
					source: l[e],
					action: "click",
					noun: "r2_community_settings",
					...r.n(t)
				}),
				g = (e, t, n, s) => a => ({
					...r.n(a),
					source: "mod_tools",
					action: e,
					noun: t,
					...void 0 !== n && void 0 !== s && {
						setting: {
							value: String(n),
							oldValue: String(s)
						}
					},
					subreddit: r.gb(a),
					actionInfo: r.d(a, {
						reason: "welcome_message"
					})
				}),
				f = (e, t) => n => {
					var s;
					return {
						...r.n(n),
						source: "community_settings",
						action: "click",
						noun: e,
						subreddit: r.gb(n),
						subredditId: null === (s = r.gb(n)) || void 0 === s ? void 0 : s.id,
						value: t
					}
				}
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return s
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "l", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "j", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			}));
			const s = () => () => ({
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
				d = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				l = e => () => ({
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
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./src/reddit/components/CreatorStats/helpers.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => {
					switch (e) {
						case s.b.Available:
							return "insights_shown";
						case s.b.NotAvailableYet:
							return "not_enough_views";
						case s.b.NotAvailable:
							return "post_too_old";
						case s.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => n => ({
					...Object(o.n)(n),
					action: a.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(o.gb)(n),
					post: Object(o.H)(n, e),
					userSubreddit: Object(o.qb)(n),
					actionInfo: Object(o.d)(n, {
						reason: r(t)
					})
				}),
				d = (e, t) => n => ({
					...Object(o.n)(n),
					action: a.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(o.H)(n, t),
					subreddit: Object(o.gb)(n),
					userSubreddit: Object(o.qb)(n)
				}),
				l = e => {
					switch (e) {
						case s.b.Available:
							return "stats";
						case s.b.NotAvailableYet:
							return "not_enough_views";
						case s.b.NotAvailable:
						case s.b.Expired:
							return "no_data";
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
					post: Object(o.H)(t, e, void 0, 0),
					profile: Object(o.Q)(t)
				}),
				m = (e, t, n) => s => ({
					...Object(o.n)(s),
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					source: "global",
					actionInfo: Object(o.d)(s, {
						pageType: "post_stats",
						reason: l(t)
					}),
					post: Object(o.H)(s, e, void 0, n)
				}),
				u = (e, t, n, s, r, i) => d => ({
					...Object(o.n)(d),
					action: a.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(o.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(o.H)(d, e, void 0, i),
					subreddit: Object(o.gb)(d),
					outbound: {
						postId: n,
						url: t,
						subredditId: s,
						subredditName: r
					}
				}),
				p = (e, t, n) => s => ({
					...Object(o.n)(s),
					action: a.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(o.d)(s, {
						pageType: "post_stats",
						reason: l(t)
					}),
					post: Object(o.H)(s, e, void 0, n),
					subreddit: Object(o.gb)(s)
				})
		},
		"./src/reddit/helpers/trackers/emailInvite.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					action: "click",
					noun: "invite_via_email",
					...a.n(t),
					subreddit: a.gb(t),
					actionInfo: a.d(t),
					correlationId: Object(s.e)(s.a.SubredditCreation, !1)
				}),
				r = () => e => ({
					source: "email_invite_painted_door",
					action: "view",
					noun: "modal",
					...a.n(e),
					subreddit: a.gb(e),
					actionInfo: a.d(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				i = e => t => ({
					source: "email_invite_painted_door",
					action: "click",
					noun: e,
					...a.n(t),
					subreddit: a.gb(t),
					actionInfo: a.d(t),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					screen: s.Y(e),
					subreddit: s.gb(e),
					profile: s.Q(e),
					userSubreddit: s.qb(e)
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
		"./src/reddit/helpers/trackers/moderationPages.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: a.Y(e),
					profile: a.Q(e),
					subreddit: a.gb(e)
				}),
				r = e => {
					switch (e) {
						case s.fc.Banned:
							return "banned";
						case s.fc.Muted:
							return "muted";
						case s.fc.Contributors:
							return "contributors";
						case s.fc.Moderators:
							return "modmanagement";
						case s.fc.Removal:
							return "set_removal_reasons";
						case s.fc.CommunitySettings:
							return "edit";
						default:
							return e
					}
				},
				i = (e, t) => n => ({
					source: r(t),
					noun: e,
					action: "click",
					...o(n)
				}),
				d = e => t => ({
					source: r(e),
					noun: "hover_user_hovercard",
					action: "view",
					...o(t)
				})
		},
		"./src/reddit/helpers/validateFlairCssClass.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/reddit/constants/flair.ts");
			const o = new RegExp(`^[a-zA-Z0-9-]{1,${a.f}}$`);
			t.a = e => {
				if (!e) return;
				const t = e.split(" ").filter(Boolean);
				if (t.length > a.c) return s.fbt._("Too many class names", null, {
					hk: "musK5"
				});
				const n = t.find(e => !e.match(o));
				return n ? n.length > a.f ? s.fbt._("Class name should not be longer than 100 characters", null, {
					hk: "2nBmgP"
				}) : s.fbt._("Class name contains an invalid character", null, {
					hk: "4kdVCU"
				}) : void 0
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, n) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = n.n(r);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: `${Object(o.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = n.n(r);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: `${Object(o.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(o.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/icons/svgs/CheckmarkFitted/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "3 4 14 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = n.n(r);
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
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = n.n(r);
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
		"./src/reddit/icons/svgs/Collection/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(r);

			function d() {
				return (d = Object.assign || function(e) {
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
				return a.a.createElement("svg", d({
					className: Object(o.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), a.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = l
		},
		"./src/reddit/icons/svgs/Event/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

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
		"./src/reddit/icons/svgs/Gild/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, n) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				i = n.n(r);
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
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(r);
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
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/ModLogPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/constants/colors.ts");
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
		"./src/reddit/icons/svgs/Negative/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, a.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M6.2103,5.78636 C6.3275,5.90356 6.3275,6.09356 6.2103,6.21076 C6.1519,6.26916 6.0751,6.29836 5.9983,6.29836 C5.9211,6.29836 5.8447,6.26916 5.7859,6.21076 L4.9983,5.42276 L4.2103,6.21076 C4.1519,6.26916 4.0751,6.29836 3.9983,6.29836 C3.9211,6.29836 3.8447,6.26916 3.7859,6.21076 C3.6687,6.09356 3.6687,5.90356 3.7859,5.78636 L4.5739,4.99836 L3.7859,4.21076 C3.6687,4.09356 3.6687,3.90356 3.7859,3.78636 C3.9031,3.66916 4.0931,3.66916 4.2103,3.78636 L4.9983,4.57436 L5.7859,3.78636 C5.9031,3.66916 6.0931,3.66916 6.2103,3.78636 C6.3275,3.90356 6.3275,4.09356 6.2103,4.21076 L5.4223,4.99836 L6.2103,5.78636 Z M7.4023,2.59436 C6.0767,1.26836 3.9195,1.26916 2.5939,2.59436 C1.2687,3.91996 1.2687,6.07716 2.5939,7.40276 C3.2567,8.06556 4.1275,8.39676 4.9983,8.39676 C5.8687,8.39676 6.7395,8.06556 7.4023,7.40276 C8.7279,6.07716 8.7279,3.91996 7.4023,2.59436 Z"
			}))
		},
		"./src/reddit/icons/svgs/Positive/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, a.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M8.0828,3.27736 L7.5232,2.71736 C7.448,2.64216 7.3464,2.60016 7.2404,2.60016 C7.134,2.60016 7.0324,2.64216 6.9576,2.71736 L4.16,5.51456 L3.0428,4.39736 C2.8868,4.24096 2.6336,4.24096 2.4772,4.39736 L1.9172,4.95736 C1.7608,5.11376 1.7608,5.36696 1.9172,5.52296 L3.8772,7.48296 C3.9556,7.56096 4.0576,7.60016 4.16,7.60016 C4.2624,7.60016 4.3648,7.56096 4.4428,7.48296 L8.0828,3.84296 C8.2392,3.68656 8.2392,3.43376 8.0828,3.27736 Z"
			}))
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(r);
			const d = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/icons/svgs/Wiki/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				o = n.n(a);
			t.a = s.a.div("rightAligned", o.a)
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/isPost.ts");
			const a = 50,
				o = 50,
				r = 1e4,
				i = 100;
			var d, l;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(l || (l = {}));
			const c = e => 1 === e.length ? Object(s.a)(e[0]) ? l.Post : l.Comment : l.Bulk,
				m = (e, t) => {
					return {
						[t === l.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/models/SubredditModeration/ModerationLog/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t, n) => `${e}-${((e,t)=>t||e||"1")(n,t)}`
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var s, a;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(s || (s = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(a || (a = {}))
		},
		"./src/reddit/models/TrafficStats/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			}));
			const s = 97,
				a = 57,
				o = 12;
			var r;
			! function(e) {
				e.TOTAL = "total", e.DESKTOP = "desktop", e.OLD_REDDIT = "oldReddit", e.IOS = "apps", e.ANDROID = "apps", e.MOBILE_WEB = "mWeb"
			}(r || (r = {}))
		},
		"./src/reddit/pages/ModHub/Header.m.less": function(e, t, n) {
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
		"./src/reddit/pages/ModHub/Header.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/pages/ModHub/Header.m.less"),
				r = n.n(o),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/controls/InternalLink/index.tsx");
			t.a = e => {
				var t, n;
				return a.a.createElement("div", {
					className: r.a.header
				}, a.a.createElement(i.b, {
					className: r.a.subredditIcon,
					subredditOrProfile: e.subredditOrProfile
				}), a.a.createElement(d.a, {
					className: r.a.subredditLink,
					to: (null === (t = e.subredditOrProfile) || void 0 === t ? void 0 : t.url) || "",
					onClick: e.onClick
				}, null === (n = e.subredditOrProfile) || void 0 === n ? void 0 : n.displayText), e.pageName && `/ ${e.pageName}`)
			}
		},
		"./src/reddit/pages/ModHub/index.m.less": function(e, t, n) {
			e.exports = {
				contentWrapper: "_2Z3MiFrgj2rofHXrH1YVKn",
				isModerator: "_1haViLcso0RRPvkDGZgDLJ",
				BackgroundContainer: "_1XAvW8OS9HO-SVS7BDAIGe",
				backgroundContainer: "_1XAvW8OS9HO-SVS7BDAIGe",
				Body: "_3hAOyl8ThaUgCBqiNvN_sN",
				body: "_3hAOyl8ThaUgCBqiNvN_sN"
			}
		},
		"./src/reddit/pages/ModHub/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/ContentGate/index.tsx"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/assertNever.ts"),
				h = n("./src/lib/constants/index.ts");
			const g = e => {
				switch (e) {
					case h.fc.Awards:
						return p.fbt._("Awards", null, {
							hk: "EiSXW"
						});
					case h.fc.Powerups:
						return p.fbt._("Powerups", null, {
							hk: "3SZBhK"
						});
					case h.fc.Banned:
						return p.fbt._("Banned", null, {
							hk: "35R8OD"
						});
					case h.fc.Muted:
						return p.fbt._("Muted", null, {
							hk: "f2nJu"
						});
					case h.fc.ContentControls:
						return p.fbt._("Content controls", null, {
							hk: "H1yxv"
						});
					case h.fc.Contributors:
						return p.fbt._("Approved", null, {
							hk: "180AS9"
						});
					case h.fc.Moderators:
						return p.fbt._("Moderators", null, {
							hk: "4qdV8t"
						});
					case h.fc.SubredditRules:
						return p.fbt._("Rules", null, {
							hk: "2SNdd8"
						});
					case h.fc.Removal:
						return p.fbt._("Removal reasons", null, {
							hk: "1smDUM"
						});
					case h.fc.Modqueue:
						return p.fbt._("Mod queue", null, {
							hk: "yEBGb"
						});
					case h.fc.Reports:
						return p.fbt._("Reports", null, {
							hk: "4Ctcb1"
						});
					case h.fc.Spam:
						return p.fbt._("Spam", null, {
							hk: "1D73Vp"
						});
					case h.fc.Unmoderated:
						return p.fbt._("Unmoderated", null, {
							hk: "3TOaeD"
						});
					case h.fc.Edited:
						return p.fbt._("Edited", null, {
							hk: "OLtvW"
						});
					case h.fc.ChatSettings:
						return p.fbt._("Chat settings", null, {
							hk: "3gycCw"
						});
					case h.fc.Modlog:
						return p.fbt._("Mod log", null, {
							hk: "3uy7LL"
						});
					case h.fc.Flair:
						return p.fbt._("Grant user flair", null, {
							hk: "2B8sTJ"
						});
					case h.fc.CommunitySettings:
						return p.fbt._("Community settings", null, {
							hk: "XbHzi"
						});
					case h.fc.Emojis:
						return p.fbt._("Emojis", null, {
							hk: "3mPnxe"
						});
					case h.fc.UserFlair:
						return p.fbt._("User flair", null, {
							hk: "3kleCv"
						});
					case h.fc.PostFlair:
						return p.fbt._("Post flair", null, {
							hk: "2Y1FKb"
						});
					case h.fc.Badges:
						return p.fbt._("Badges", null, {
							hk: "3vM0lt"
						});
					case h.fc.Emotes:
						return p.fbt._("Emotes", null, {
							hk: "2Ivxxq"
						});
					case h.fc.Wiki:
					case h.fc.WikiContributors:
					case h.fc.WikiBanned:
						return p.fbt._("Wiki pages", null, {
							hk: "WdSXv"
						});
					case h.fc.Traffic:
						return p.fbt._("Traffic stats", null, {
							hk: "3mcw71"
						});
					case h.fc.ScheduledPostContent:
					case h.fc.SubredditContent:
						return p.fbt._("Scheduled posts", null, {
							hk: "19KZjq"
						});
					case h.fc.EventPostContent:
						return p.fbt._("Event posts", null, {
							hk: "3ejc42"
						});
					case h.fc.Streaming:
						return p.fbt._("Broadcasting", null, {
							hk: "1Cz44z"
						});
					case h.fc.Predictions:
						return p.fbt._("Predictions", null, {
							hk: "1yASCC"
						});
					default:
						return Object(b.a)(e)
				}
			};
			var f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/helpers/canAccessModerationPage/index.ts"),
				v = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				_ = n("./src/reddit/helpers/trackers/moderationPages.ts"),
				C = n("./src/reddit/helpers/trackers/modHub.ts"),
				k = n("./src/reddit/models/ModQueue/index.ts"),
				y = n("./src/reddit/selectors/moderatorPermissions.ts"),
				O = n("./src/reddit/selectors/postCreations.ts"),
				S = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/streamingModSettings.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/ModHub/Content/index.tsx"),
				T = n("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				M = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				P = n("./src/reddit/components/ModHub/Content/WelcomeMessage.m.less"),
				R = n.n(P);
			const A = m.a.wrapped(M.a, "ModerateIcon", R.a),
				F = m.a.div("ModHubWelcomeMessage", R.a);
			var D = e => r.a.createElement(F, null, r.a.createElement(A, null), p.fbt._("Welcome to the mod tools for {subredditName}", [p.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "7Usff"
				})),
				L = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/config.ts")),
				U = n("./node_modules/react-router-redux/es/index.js"),
				B = n("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				H = n("./src/reddit/contexts/NavbarExp.ts"),
				W = n("./src/reddit/featureFlags/index.ts"),
				z = n("./src/reddit/helpers/localStorage/index.ts"),
				V = n("./src/reddit/helpers/trackers/communitySettings.ts"),
				q = n("./src/reddit/helpers/trackers/emailInvite.ts"),
				G = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				K = n("./src/reddit/icons/fonts/index.tsx"),
				Q = n("./src/reddit/routes/moderationPages/index.ts"),
				Y = n("./src/reddit/selectors/experiments/emailInvite.ts"),
				X = n("./src/reddit/selectors/gold/powerups/index.ts"),
				Z = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				J = n("./src/reddit/components/ModHub/ModHubNav/index.m.less"),
				$ = n.n(J);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var te = e => r.a.createElement("div", ee({
					className: Object(l.a)($.a.breadcrumb, e.className)
				}, e), r.a.createElement("button", {
					className: $.a.breadcrumbButton
				}, r.a.createElement(Z.a, null), p.fbt._("Back to mod tools", null, {
					hk: "4udiKO"
				}))),
				ne = n("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				se = n("./src/reddit/actions/modal.ts"),
				ae = n("./src/higherOrderComponents/asModal/index.tsx"),
				oe = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				re = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ie = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				de = n("./src/reddit/constants/wiki.ts"),
				le = n("./src/reddit/controls/Button/index.tsx"),
				ce = n("./src/reddit/controls/TextButton/index.tsx"),
				me = n("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				ue = n("./src/reddit/helpers/wiki/validatePageName.ts"),
				pe = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				be = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				he = n("./src/reddit/controls/Dropdown/index.tsx"),
				ge = n("./src/reddit/controls/Dropdown/Row.tsx"),
				fe = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Ee = n("./src/reddit/components/Wiki/CreateNewWikiPageModal/index.m.less"),
				xe = n.n(Ee);
			class ve extends r.a.Component {
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
						isDropdownOpen: n
					} = this.state, s = p.fbt._("None", null, {
						hk: "3FT0YQ"
					});
					return r.a.createElement("div", {
						className: xe.a.dropdownContainer
					}, r.a.createElement("button", {
						className: xe.a.dropdownTarget,
						onClick: this.onToggleDropdown
					}, r.a.createElement("div", {
						className: xe.a.targetText
					}, t || s), r.a.createElement(fe.b, null)), n && r.a.createElement(he.a, {
						className: xe.a.dropdown
					}, r.a.createElement(ge.b, {
						className: xe.a.dropdownRow,
						displayText: s,
						onClick: () => this.onSelectParentPage(void 0)
					}), e.map(e => e.depth >= de.c ? null : de.f.has(e.path.split("/")[0]) ? null : r.a.createElement(ge.b, {
						className: xe.a.dropdownRow,
						displayText: e.path,
						key: e.path,
						onClick: () => this.onSelectParentPage(e.path)
					}))))
				}
			}
			var _e = ve;
			const Ce = e => {
				switch (e) {
					case ue.a.InvalidPageName:
						return p.fbt._("Invalid page name", null, {
							hk: "1gQvCb"
						});
					case ue.a.MaxLengthExceed:
						return p.fbt._("Name exceeds character limit", null, {
							hk: "RDoIC"
						});
					case ue.a.PageAlreadyExists:
						return p.fbt._("That page already exists", null, {
							hk: "xEyyR"
						});
					case ue.a.RestrictedPageName:
						return p.fbt._("Restricted page name", null, {
							hk: "Bjv5o"
						})
				}
			};
			class ke extends r.a.Component {
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
					return Object(ue.c)(t) || Object(ue.b)(this.getNewPagePath(), e)
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = this.hasError();
					return r.a.createElement(re.e, {
						className: xe.a.modalBody
					}, r.a.createElement(re.i, null, r.a.createElement(be.a, null, r.a.createElement(re.q, null, p.fbt._("Create a new wiki page", null, {
						hk: "V7Jnm"
					})), r.a.createElement(ce.a, {
						onClick: e.toggleModal
					}, r.a.createElement(re.b, null)))), r.a.createElement("div", {
						className: xe.a.notice
					}, r.a.createElement(pe.a, null), p.fbt._("Parent page and page URL cannot be edited once created", null, {
						hk: "20D6uz"
					})), r.a.createElement(re.l, null, r.a.createElement("div", {
						className: xe.a.sectionTitle
					}, p.fbt._("Parent page", null, {
						hk: "1FeKiT"
					})), r.a.createElement(_e, {
						onSelectParentPage: this.onSelectParentPage,
						pageTree: Object(me.b)(e.pageTree || []),
						parentPageName: t.parentPageName
					}), r.a.createElement("div", {
						className: xe.a.sectionTitle
					}, p.fbt._("Page URL", null, {
						hk: "WL8sn"
					})), r.a.createElement(ie.d, {
						placeholder: p.fbt._("ex: rules", null, {
							hk: "J0qH1"
						}),
						onChange: this.onChangePageName,
						value: t.partialPageName
					}), r.a.createElement(oe.a, {
						text: this.getNewPagePath(),
						maxChars: de.d
					}), r.a.createElement("div", {
						className: xe.a.errorText
					}, t.partialPageName && n ? Ce(n) : null)), r.a.createElement(re.g, null, r.a.createElement(re.a, {
						onClick: e.toggleModal
					}, p.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(le.n, {
						disabled: !t.partialPageName || !!n,
						className: xe.a.primaryButton,
						to: `${e.subredditUrl}about/wiki/create/${this.getNewPagePath()}`
					}, p.fbt._("Create", null, {
						hk: "2W0PL1"
					}))))
				}
			}
			var ye = Object(ae.a)(ke),
				Oe = n("./src/reddit/selectors/activeModalId.ts"),
				Se = n("./src/reddit/selectors/subredditWiki.ts"),
				je = n("./node_modules/lodash/times.js"),
				Ne = n.n(je),
				we = n("./src/reddit/controls/InternalLink/index.tsx"),
				Ie = n("./src/reddit/components/ModHub/ModHubNav/WikiNavPanel/index.m.less"),
				Te = n.n(Ie);
			class Me extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.containerRef = r.a.createRef()
				}
				componentDidMount() {
					this.scrollToActiveItemIfNeeded()
				}
				scrollToActiveItemIfNeeded() {
					const e = this.containerRef.current,
						t = e && e.getElementsByClassName(Te.a.mActive)[0];
					if (!e || !t) return;
					const n = e.getBoundingClientRect(),
						s = t.getBoundingClientRect();
					s.top >= n.top && s.bottom <= n.bottom || t.scrollIntoView()
				}
				render() {
					const {
						activePageName: e,
						baseUrl: t,
						directory: n
					} = this.props, s = Object(me.b)(n && n.pageTree || []);
					return r.a.createElement("div", {
						ref: this.containerRef,
						className: Te.a.contentTree
					}, s.map(n => {
						const s = n.path === e;
						return r.a.createElement(we.a, {
							key: n.path,
							className: Te.a.pageNavLink,
							to: `${t}/${n.path}`
						}, r.a.createElement("div", {
							className: Object(l.a)(Te.a.pageNavItem, {
								[Te.a.mActive]: s,
								[Te.a.mExists]: n.isPagePresent
							})
						}, Ne()(n.depth, () => r.a.createElement("div", {
							className: Te.a.indentLine
						})), r.a.createElement("span", {
							className: Te.a.itemText
						}, `/${n.name}`)))
					}))
				}
			}
			const Pe = Object(d.c)({
				directory: (e, t) => Object(Se.b)(e, {
					subredditName: t.subreddit.name
				}),
				isCreateWikiPageModalOpen: e => "CreateWikiPageModal" === Object(Oe.a)(e)
			});
			class Re extends r.a.Component {
				constructor() {
					super(...arguments), this.onToggleCreateWikiModal = () => {
						this.props.toggleCreateWikiModal()
					}
				}
				render() {
					const {
						directory: e,
						isCreateWikiPageModalOpen: t,
						subreddit: n,
						toggleCreateWikiModal: s,
						pageLayer: a
					} = this.props;
					if (!a) return null;
					const {
						urlParams: o
					} = a, {
						wikiPageName: i,
						wikiSubRoute: d,
						pageName: l
					} = o;
					return r.a.createElement("div", {
						className: Te.a.wikiNavPanel
					}, r.a.createElement(le.l, {
						className: Te.a.primaryButton,
						onClick: this.onToggleCreateWikiModal
					}, p.fbt._("Create new page", null, {
						hk: "35WDuL"
					})), r.a.createElement(Me, {
						activePageName: i,
						baseUrl: `${n.url}about/wiki`,
						directory: e
					}), r.a.createElement("div", {
						className: Te.a.footer
					}, r.a.createElement(ne.b, {
						isActive: d === de.m.Revisions && !i,
						label: p.fbt._("Recent wiki revisions", null, {
							hk: "278VnD"
						}),
						path: `${n.url}about/wiki/revisions`
					}), r.a.createElement(ne.b, {
						isActive: l === h.fc.WikiContributors,
						label: p.fbt._("Add wiki contributors", null, {
							hk: "1XHd90"
						}),
						path: `${n.url}about/wikicontributors`
					}), r.a.createElement(ne.b, {
						isActive: l === h.fc.WikiBanned,
						label: p.fbt._("Ban wiki contributors", null, {
							hk: "3IVNKp"
						}),
						path: `${n.url}about/wikibanned`
					}), r.a.createElement(ne.b, {
						label: p.fbt._("Wiki settings", null, {
							hk: "1Jctxf"
						}),
						path: `${n.url}about/edit?page=wikis`
					})), t && r.a.createElement(ye, {
						pageTree: e && e.pageTree,
						subredditUrl: n.url,
						toggleModal: s,
						withOverlay: !0
					}))
				}
			}
			var Ae = Object(E.u)()(Object(i.b)(Pe, e => ({
				toggleCreateWikiModal: () => e(Object(se.i)("CreateWikiPageModal"))
			}))(Re));
			const Fe = Object(d.c)({
				isBadgesAndEmotesEnabled: W.d.spCustomBadgesAndEmotes,
				isContentTagEnabled: (e, t) => !!e.subreddits.survey[t.subreddit.id],
				isEligibleForScheduledPosts: W.d.scheduledPosts,
				isEmailInviteExperimentEnabled: Y.a,
				isBroadcastingEnabled: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(j.c)(e, n.id)
				},
				isTournamentsEnabled: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(N.M)(e, {
						subredditId: n.id
					})
				},
				isPowerupsTabVisible: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(X.h)(e, {
						subredditId: n.id
					})
				}
			});
			class De extends r.a.Component {
				constructor(e, t) {
					super(e, t), this.trackClick = e => this.props.sendEvent(C.b(e)), this.trackCommunitySettingsNavItemClick = e => this.props.sendEvent(Object(V.b)(e)), this.onClickAwards = () => this.trackClick("awards"), this.onClickPowerups = () => this.trackClick("powerups"), this.onClickStreaming = () => this.trackClick("streaming"), this.onClickModQueue = () => this.trackClick("mod_queue"), this.onClickReports = () => this.trackClick("reports"), this.onClickSpam = () => this.trackClick("spam"), this.onClickEdited = () => this.trackClick("edited"), this.onClickUnmoderated = () => this.trackClick("unmoderated"), this.onClickBannedUsers = () => this.trackClick("ban_users"), this.onClickMutedUsers = () => this.trackClick("mute_users"), this.onClickApprovedSubmitters = () => this.trackClick("approved_submitters"), this.onClickEmojis = () => this.trackClick("emoji"), this.onClickModerators = () => this.trackClick("moderators"), this.onClickChatSettings = () => this.trackClick("chat_settings"), this.onClickCommunitySettings = () => this.trackClick("community_settings"), this.onClickCommunityAppearance = () => this.trackClick("community_appearance"), this.onClickModMail = () => this.trackClick("mod_mail"), this.onClickRemovalReasons = () => this.trackClick("removal_reasons"), this.onClickRules = () => this.trackClick("rules"), this.onClickPostRequirements = () => this.trackClick("post_requirements"), this.onClickAutomodConfig = () => this.trackClick("automod_config"), this.onClickWikiPages = () => this.trackClick("wiki"), this.onClickTraffic = () => this.trackClick("traffic"), this.onClickModLog = () => this.trackClick("mod_log"), this.onClickModSupport = () => this.trackClick("r_mod_support"), this.onClickModHelp = () => this.trackClick("mod_help"), this.onClickContactReddit = () => this.trackClick("contact_reddit"), this.onClickModGuidelines = () => this.trackClick("mod_guidelines"), this.onClickModHelpCenter = () => this.trackClick("mod_help_center"), this.onClickPostFlair = () => this.trackClick("post_flair"), this.onClickUserFlair = () => this.trackClick("user_flair"), this.onClickGrantUserFlair = () => this.trackClick("grant_user_flair"), this.onClickBadges = () => this.trackClick("badges"), this.onClickEmotes = () => this.trackClick("emotes"), this.onClickScheduledPosts = () => this.props.sendEvent(Object(G.k)()), this.onClickEventPosts = () => this.props.sendEvent(Object(G.f)()), this.onClickPredictions = () => this.trackClick("predictions"), this.onGoToModHub = () => {
						const e = this.props.moderatorPermissions && this.props.moderatorPermissions.posts,
							t = `${this.props.subreddit.url}about/`,
							n = e ? `${t}modqueue` : t;
						this.props.pushUrl(n)
					}, this.onClickInviteViaEmail = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(q.a)("mod_hub_nav")), this.setState({
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
						locationSettingSeen: Object(z.G)("location")
					})
				}
				render() {
					const {
						props: e
					} = this, t = e.isEligibleForScheduledPosts && !e.isProfile || e.isTournamentsEnabled;
					switch (e.pageName) {
						case h.fc.CommunitySettings: {
							const t = !e.subpageName || !Object.values(h.gc).includes(e.subpageName);
							return e.isProfile ? null : r.a.createElement(H.a.Consumer, null, n => r.a.createElement("div", {
								className: Object(l.a)($.a.navContainer, {
									[$.a.navContainerExp]: n
								})
							}, r.a.createElement(te, {
								onClick: this.onGoToModHub
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Community", null, {
									hk: "1EIoJe"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.gc.Community),
								isNew: !0,
								path: `${e.subreddit.url}about/edit?page=community`,
								isActive: t || e.subpageName === h.gc.Community
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Safety and Privacy", null, {
									hk: "3E0TnI"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.gc.Safety),
								path: `${e.subreddit.url}about/edit?page=safety`,
								isActive: e.subpageName === h.gc.Safety
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Posts and Comments", null, {
									hk: "2jt4ea"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.gc.Posts),
								path: `${e.subreddit.url}about/edit?page=posts`,
								isActive: e.subpageName === h.gc.Posts
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Wikis", null, {
									hk: "2X1iz1"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.gc.Wikis),
								path: `${e.subreddit.url}about/edit?page=wikis`,
								isActive: e.subpageName === h.gc.Wikis
							}), e.isContentTagEnabled && r.a.createElement(ne.b, {
								label: p.fbt._("Content Tag", null, {
									hk: "VuxaQ"
								}),
								isNew: !0,
								onClick: () => this.trackCommunitySettingsNavItemClick(h.gc.ContentTag),
								path: `${e.subreddit.url}about/edit?page=content_tag`,
								isActive: e.subpageName === h.gc.ContentTag
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Notifications", null, {
									hk: "SRNLx"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.gc.Notifications),
								path: `${e.subreddit.url}about/edit?page=notifications`,
								isActive: e.subpageName === h.gc.Notifications
							})))
						}
						case h.fc.Wiki:
						case h.fc.WikiContributors:
						case h.fc.WikiBanned:
							return e.isProfile ? null : r.a.createElement(H.a.Consumer, null, t => r.a.createElement("div", {
								className: Object(l.a)($.a.navContainer, $.a.wikiNavContainer, {
									[$.a.navContainerExp]: t
								})
							}, r.a.createElement(te, {
								onClick: this.onGoToModHub
							}), e.moderatorPermissions.wiki && r.a.createElement(Ae, {
								subreddit: e.subreddit
							})));
						default:
							return r.a.createElement(H.a.Consumer, null, n => r.a.createElement("div", {
								className: Object(l.a)($.a.navContainer, {
									[$.a.navContainerExp]: n
								})
							}, e.moderatorPermissions.posts && !e.isProfile && r.a.createElement("div", {
								className: $.a.navSection
							}, r.a.createElement("div", {
								className: $.a.sectionHeader
							}, r.a.createElement(K.a, {
								name: "mod_queue",
								className: $.a.iconStyles
							}), p.fbt._("Queues", null, {
								hk: "2BbIZV"
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Modqueue,
								label: g(h.fc.Modqueue),
								onClick: this.onClickModQueue,
								path: `${e.subreddit.url}about/modqueue`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Reports,
								label: g(h.fc.Reports),
								onClick: this.onClickReports,
								path: `${e.subreddit.url}about/reports`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Spam,
								label: g(h.fc.Spam),
								onClick: this.onClickSpam,
								path: `${e.subreddit.url}about/spam`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Edited,
								label: g(h.fc.Edited),
								onClick: this.onClickEdited,
								path: `${e.subreddit.url}about/edited`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Unmoderated,
								label: g(h.fc.Unmoderated),
								onClick: this.onClickUnmoderated,
								path: `${e.subreddit.url}about/unmoderated`
							})), !e.isProfile && r.a.createElement("div", {
								className: $.a.navSection
							}, r.a.createElement("div", {
								className: $.a.sectionHeader
							}, r.a.createElement(K.a, {
								name: "user",
								className: $.a.iconStyles
							}), p.fbt._("User management", null, {
								hk: "3G4BgD"
							})), e.moderatorPermissions.access && r.a.createElement(r.a.Fragment, null, r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Banned,
								label: g(h.fc.Banned),
								onClick: this.onClickBannedUsers,
								path: `${e.subreddit.url}about/banned`
							}), e.moderatorPermissions.mail && r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Muted,
								label: g(h.fc.Muted),
								onClick: this.onClickMutedUsers,
								path: `${e.subreddit.url}about/muted`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Contributors,
								label: g(h.fc.Contributors),
								onClick: this.onClickApprovedSubmitters,
								path: `${e.subreddit.url}about/contributors`
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Moderators,
								label: g(h.fc.Moderators),
								onClick: this.onClickModerators,
								path: `${e.subreddit.url}about/moderators`
							}), e.isEmailInviteExperimentEnabled && r.a.createElement(ne.b, {
								label: p.fbt._("Bulk Email Invite", null, {
									hk: "3GTIEm"
								}),
								isNew: !0,
								onClick: this.onClickInviteViaEmail
							}), this.state.showEmailInvitePaintedDoor && r.a.createElement(B.a, {
								onClose: this.onCloseInviteViaEmailModal,
								sendEvent: e.sendEvent
							})), (e.moderatorPermissions.flair || e.moderatorPermissions.config) && !e.isProfile && r.a.createElement("div", {
								className: $.a.navSection
							}, r.a.createElement("div", {
								className: $.a.sectionHeader
							}, r.a.createElement(K.a, {
								name: "tag",
								className: $.a.iconStyles
							}), this.getFlairSectionName()), e.moderatorPermissions.flair && r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Flair,
								label: g(h.fc.Flair),
								onClick: this.onClickGrantUserFlair,
								path: `${e.subreddit.url}about/flair`
							}), e.moderatorPermissions.config && r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Emojis,
								label: g(h.fc.Emojis),
								onClick: this.onClickEmojis,
								path: `${e.subreddit.url}about/emojis`
							}), e.moderatorPermissions.flair && r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.UserFlair,
								label: g(h.fc.UserFlair),
								onClick: this.onClickUserFlair,
								path: `${e.subreddit.url}about/userflair`
							}), e.moderatorPermissions.flair && e.moderatorPermissions.config && r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.PostFlair,
								label: g(h.fc.PostFlair),
								onClick: this.onClickPostFlair,
								path: `${e.subreddit.url}about/postflair`
							}), e.isBadgesAndEmotesEnabled && r.a.createElement(r.a.Fragment, null, r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Badges,
								label: g(h.fc.Badges),
								onClick: this.onClickBadges,
								path: `${e.subreddit.url}about/badges`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Emotes,
								label: g(h.fc.Emotes),
								onClick: this.onClickEmotes,
								path: `${e.subreddit.url}about/emotes`
							}))), (e.moderatorPermissions.config || e.moderatorPermissions.posts) && !e.isProfile && r.a.createElement("div", {
								className: $.a.navSection
							}, r.a.createElement("div", {
								className: $.a.sectionHeader
							}, r.a.createElement(K.a, {
								name: "rules",
								className: $.a.iconStyles
							}), p.fbt._("Rules and regulations", null, {
								hk: "QAksk"
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.SubredditRules,
								label: g(h.fc.SubredditRules),
								onClick: this.onClickRules,
								path: `${e.subreddit.url}about/rules`
							}), e.moderatorPermissions.posts && r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Removal,
								label: g(h.fc.Removal),
								onClick: this.onClickRemovalReasons,
								path: `${e.subreddit.url}about/removal`
							}), e.moderatorPermissions.config && r.a.createElement(r.a.Fragment, null, r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.ContentControls,
								label: g(h.fc.ContentControls),
								onClick: this.onClickPostRequirements,
								path: `${e.subreddit.url}about/settings`
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Automod", null, {
									hk: "1IngsO"
								}),
								onClick: this.onClickAutomodConfig,
								path: `${e.subreddit.url}about/wiki/config/automoderator`
							}))), t && r.a.createElement("div", {
								className: $.a.navSection
							}, r.a.createElement("div", {
								className: $.a.sectionHeader
							}, r.a.createElement(K.a, {
								name: "list_bulleted",
								className: $.a.iconStyles
							}), p.fbt._("Content", null, {
								hk: "IAh5R"
							})), e.isEligibleForScheduledPosts && !e.isProfile && r.a.createElement(r.a.Fragment, null, r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.ScheduledPostContent,
								label: p.fbt._("Scheduled posts", null, {
									hk: "11S6dN"
								}),
								onClick: this.onClickScheduledPosts,
								path: Object(Q.e)(e.subreddit.url)
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.EventPostContent,
								label: p.fbt._("Event posts", null, {
									hk: "3D98hc"
								}),
								onClick: this.onClickEventPosts,
								path: Object(Q.b)(e.subreddit.url)
							})), e.isTournamentsEnabled && r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Predictions,
								label: p.fbt._("Predictions", null, {
									hk: "Serjr"
								}),
								onClick: this.onClickPredictions,
								path: Object(Q.d)(e.subreddit.url),
								isNew: !0
							})), (e.moderatorPermissions.config || e.moderatorPermissions.wiki) && r.a.createElement("div", {
								className: $.a.navSection
							}, r.a.createElement("div", {
								className: $.a.sectionHeader
							}, r.a.createElement(K.a, {
								name: "settings",
								className: $.a.iconStyles
							}), p.fbt._("Other", null, {
								hk: "ST5RE"
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Awards,
								label: p.fbt._("Awards", null, {
									hk: "48U4Du"
								}),
								onClick: this.onClickAwards,
								path: `${e.subreddit.url}about/awards`
							}), e.moderatorPermissions.config && e.isPowerupsTabVisible && r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Powerups,
								label: p.fbt._("Powerups", null, {
									hk: "1fgdwA"
								}),
								onClick: this.onClickPowerups,
								path: `${e.subreddit.url}about/powerups`,
								isNew: !0
							}), e.moderatorPermissions.config && !e.isProfile && e.isBroadcastingEnabled && r.a.createElement(ne.b, {
								label: g(h.fc.Streaming),
								onClick: this.onClickStreaming,
								path: `${e.subreddit.url}about/broadcasting`,
								isNew: !0
							}), e.moderatorPermissions.wiki && !e.isProfile && r.a.createElement(ne.b, {
								label: p.fbt._("Wiki pages", null, {
									hk: "wShFl"
								}),
								onClick: this.onClickWikiPages,
								path: `${L.a.redditUrl}${e.subreddit.url}about/wiki/index`
							}), e.moderatorPermissions.config && !e.isProfile && r.a.createElement(ne.b, {
								label: p.fbt._("Community settings", null, {
									hk: "2xOUK6"
								}),
								onClick: this.onClickCommunitySettings,
								isNew: !this.state.locationSettingSeen,
								path: `${e.subreddit.url}about/edit?page=community`,
								showInboundArrow: !0
							}), e.moderatorPermissions.config && !e.isProfile && r.a.createElement(ne.b, {
								label: p.fbt._("Community appearance", null, {
									hk: "3AHttA"
								}),
								path: `${e.subreddit.url}?styling=true`,
								onClick: this.onClickCommunityAppearance,
								showInboundArrow: !0
							})), e.moderatorPermissions.mail && !e.isProfile && r.a.createElement("div", {
								className: $.a.navSection
							}, r.a.createElement("div", {
								className: $.a.sectionHeader
							}, r.a.createElement(K.a, {
								name: "mod_mail",
								className: $.a.iconStyles
							}), p.fbt._("Modmail", null, {
								hk: "Eh4Vu"
							})), r.a.createElement(ne.b, {
								isExternal: !0,
								label: p.fbt._("Modmail", null, {
									hk: "3Xkgqo"
								}),
								onClick: this.onClickModMail,
								path: "https://mod.reddit.com"
							})), e.moderatorPermissions.config && !e.isProfile && r.a.createElement("div", {
								className: $.a.navSection
							}, r.a.createElement("div", {
								className: $.a.sectionHeader
							}, r.a.createElement(K.a, {
								name: "chat",
								className: $.a.iconStyles
							}), p.fbt._("Chat", null, {
								hk: "4mJ2vR"
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.ChatSettings,
								label: g(h.fc.ChatSettings),
								onClick: this.onClickChatSettings,
								path: `${e.subreddit.url}about/chat`
							})), !e.isProfile && r.a.createElement("div", {
								className: $.a.navSection
							}, r.a.createElement("div", {
								className: $.a.sectionHeader
							}, r.a.createElement(K.a, {
								name: "statistics",
								className: $.a.iconStyles
							}), p.fbt._("Community activity", null, {
								hk: "1vGSer"
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Traffic,
								label: p.fbt._("Traffic stats", null, {
									hk: "vw5CU"
								}),
								onClick: this.onClickTraffic,
								path: `${e.subreddit.url}about/traffic`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.fc.Modlog,
								label: g(h.fc.Modlog),
								onClick: this.onClickModLog,
								path: `${e.subreddit.url}about/log`
							})), r.a.createElement("div", {
								className: $.a.navSection
							}, r.a.createElement("div", {
								className: $.a.sectionHeader
							}, r.a.createElement(K.a, {
								name: "help",
								className: $.a.iconStyles
							}), p.fbt._("Mod help center", null, {
								hk: "256YE"
							})), r.a.createElement(ne.b, {
								isExternal: !0,
								label: p.fbt._("Mod help center", null, {
									hk: "4dCwWU"
								}),
								onClick: this.onClickModHelpCenter,
								path: L.a.redditModHelpUrl
							}), r.a.createElement(ne.b, {
								isExternal: !0,
								label: p.fbt._("Moderator guidelines", null, {
									hk: "3marKI"
								}),
								onClick: this.onClickModGuidelines,
								path: "https://www.reddit.com/help/healthycommunities/"
							}), r.a.createElement(ne.b, {
								isExternal: !0,
								label: "r/ModSupport",
								onClick: this.onClickModSupport,
								path: "/r/ModSupport/"
							}), r.a.createElement(ne.b, {
								isExternal: !0,
								label: "r/ModHelp",
								onClick: this.onClickModHelp,
								path: "/r/modhelp/"
							}), r.a.createElement(ne.b, {
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
			var Le = Object(i.b)(Fe, e => ({
					pushUrl: t => e(Object(U.b)(t))
				}))(Object(f.c)(De)),
				Ue = n("./src/reddit/pages/ModHub/Header.tsx"),
				Be = n("./src/reddit/pages/ModHub/index.m.less"),
				He = n.n(Be);
			const We = m.a.div("BackgroundContainer", He.a),
				ze = m.a.div("Body", He.a),
				Ve = Object(d.c)({
					contentGateInfo: (e, t) => Object(w.f)(e, t.match.params.subredditName)
				}),
				qe = Object(d.c)({
					queryParams: (e, t) => {
						let {
							location: n
						} = t;
						return a()([...Object(c.a)(n.search)])
					}
				}),
				Ge = Object(d.c)({
					moderatorPermissions: (e, t) => {
						var n;
						const {
							subredditName: s,
							profileName: a
						} = t.match.params, o = s ? Object(N.D)(e, s) : null === (n = Object(S.j)(e, {
							profileName: a
						})) || void 0 === n ? void 0 : n.id;
						if (o) return Object(y.n)(e, {
							subredditId: o
						})
					}
				}),
				Ke = Object(d.c)({
					isContributor: (e, t) => {
						const {
							subredditName: n
						} = t.match.params;
						if (n) {
							const t = Object(N.u)(e, {
								subredditName: n
							});
							if (t) return t.userIsContributor
						}
						return !1
					}
				}),
				Qe = Object(d.c)({
					subreddit: (e, t) => t.match.params.subredditName ? Object(N.x)(e, {
						subredditName: t.match.params.subredditName
					}) : Object(S.j)(e, {
						profileName: t.match.params.profileName
					})
				}),
				Ye = Object(i.b)(() => Object(d.a)(Ve, w.N, E.R, Ge, w.kb, O.jb, Qe, Ke, qe, (e, t) => t.match.params.pageName, e => e, (e, t, n, s, a, o, r, i, d, l, c) => {
					let {
						contentGateInfo: m
					} = e, {
						moderatorPermissions: u
					} = s, {
						subreddit: p
					} = r, {
						isContributor: b
					} = i, {
						queryParams: h
					} = d;
					const {
						after: g,
						afterEditable: f,
						before: E,
						beforeEditable: x,
						only: v,
						page: _
					} = h;
					return {
						contentGateInfo: m,
						isBroadcastingEnabled: !!p && Object(j.c)(c, p.id),
						isContributor: b,
						isEmployee: t,
						layout: n,
						moderatorPermissions: u,
						isScheduledPostsEnabled: o,
						subreddit: p,
						renderNSFWContentGate: !!p && p.isNSFW && !a,
						page: `${_||k.b}`,
						pageName: l,
						postTypeFilter: v,
						after: g || "",
						afterEditable: f,
						before: E,
						beforeEditable: x
					}
				})),
				Xe = Object(E.u)();
			class Ze extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => {
						this.props.sendEvent(t => ({
							source: Object(_.b)(this.props.pageName),
							action: "click",
							noun: e
						}))
					}, this.onClickSubredditLink = () => {
						this.props.sendEvent(C.c())
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
					return r.a.createElement(We, null, r.a.createElement(Ue.a, {
						onClick: this.onClickSubredditLink,
						subredditOrProfile: e.subreddit,
						pageName: e.pageName ? g(e.pageName) : void 0
					}), r.a.createElement(ze, null, e.moderatorPermissions && r.a.createElement(Le, {
						moderatorPermissions: e.moderatorPermissions,
						pageName: e.pageName,
						subpageName: e.page,
						subreddit: e.subreddit,
						isProfile: !!e.match.params.profileName
					}), r.a.createElement("div", {
						className: Object(l.a)(He.a.contentWrapper, t && He.a.isModerator)
					}, e.pageName && Object(x.a)({
						pageName: e.pageName,
						moderatorPermissions: e.moderatorPermissions,
						canCreateScheduledPosts: e.isScheduledPostsEnabled,
						isEmployee: e.isEmployee,
						isStreamingEnabled: e.isBroadcastingEnabled,
						subredditType: e.subreddit.type,
						isContributor: e.isContributor
					}) ? r.a.createElement(I.a, {
						after: e.after,
						afterEditable: e.afterEditable,
						before: e.before,
						beforeEditable: e.beforeEditable,
						layout: e.layout,
						moderatorPermissions: e.moderatorPermissions,
						page: e.page,
						pageName: e.pageName,
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: this.sendEventWithName,
						subpageName: e.page,
						subreddit: e.subreddit
					}) : e.moderatorPermissions ? r.a.createElement(D, {
						subredditDisplayText: e.subreddit.displayText
					}) : r.a.createElement(T.a, {
						isModerator: t,
						subredditDisplayText: e.subreddit.displayText
					}))))
				}
			}
			t.default = Xe(Ye(Object(f.c)(Ze)))
		},
		"./src/reddit/selectors/experiments/emailInvite.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: s.gd
				});
				return !(!t || Object(s.zf)(t))
			}
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/constants/index.ts");
			var s = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				a = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/comments/index.ts"),
				i = n("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				features: {
					comments: r.a
				},
				pages: {
					modHub: i.a
				}
			});
			const d = (e, t) => Object(s.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				l = Object(a.a)((e, t) => {
					var n, s, a;
					const {
						pageName: o,
						page: r
					} = t, i = d(0, t);
					if (!(null === (a = null === (s = null === (n = e.pages.modHub.modQueue[o]) || void 0 === n ? void 0 : n.itemOrder) || void 0 === s ? void 0 : s[i]) || void 0 === a ? void 0 : a[r])) return;
					const l = e.pages.modHub.modQueue[o].itemOrder[i][r];
					return l ? l.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				c = (e, t) => {
					var n;
					const {
						pageName: s
					} = t;
					return null === (n = e.pages.modHub.modQueue[s]) || void 0 === n || !n.api || e.pages.modHub.modQueue[s].api.pending
				},
				m = (e, t) => {
					var n;
					const s = d(0, t);
					return null === (n = e.pages.modHub.modQueue[t.pageName]) || void 0 === n ? void 0 : n.loadMore[s]
				},
				u = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				b = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/posts.ts");
			const i = e => Object(o.c)(e, {
					experimentName: a.ve,
					experimentEligibilitySelector: o.a
				}),
				d = (e, t) => t === a.De.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				l = Object(s.a)(r.G, i, (e, t) => d(e, t));
			Object(s.a)((e, t) => t, i, (e, t) => d(e, t))
		},
		"./src/reddit/selectors/streamingModSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			}));
			const s = {
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
						sunday: s,
						monday: s,
						tuesday: s,
						wednesday: s,
						thursday: s,
						friday: s,
						saturday: s
					},
					whitelistedUsers: [],
					broadcasterPrompt: "",
					isDiscoveryUnitShown: !1,
					inSubMinKarma: void 0
				},
				o = (e, t) => {
					const n = e.streaming.modSettings[t.subredditId];
					return n ? {
						isLiveStreamingEnabled: n.isLiveStreamingEnabled,
						maxLiveStreams: n.maxLiveStreams,
						minKarma: n.minKarma,
						minAccountAgeDays: n.minAccountAgeDays,
						durationLimitSeconds: n.durationLimitSeconds,
						schedule: {
							sunday: l(n.weeklySchedule.sunday),
							monday: l(n.weeklySchedule.monday),
							tuesday: l(n.weeklySchedule.tuesday),
							wednesday: l(n.weeklySchedule.wednesday),
							thursday: l(n.weeklySchedule.thursday),
							friday: l(n.weeklySchedule.friday),
							saturday: l(n.weeklySchedule.saturday)
						},
						whitelistedUsers: n.whitelistedRedditors,
						broadcasterPrompt: n.broadcasterPrompt,
						isDiscoveryUnitShown: n.isDiscoveryUnitShown,
						inSubMinKarma: n.inSubMinKarma
					} : a
				},
				r = (e, t) => !!e.streaming.modSettings[t],
				i = e => !!e.streaming.api.pending,
				d = (e, t) => !!e.streaming.modSettings[t] && e.streaming.modSettings[t].isLiveStreamingEnabled,
				l = e => ({
					...s,
					...e[0]
				}),
				c = (e, t) => {
					const n = e.streaming.modSettings[t.subredditId];
					if (!n) return !1;
					const s = new Date;
					return m(s, n.weeklySchedule)
				},
				m = (e, t) => {
					const n = u(e);
					return p(n, t).some(t => b(e, t))
				},
				u = e => {
					return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][e.getUTCDay()]
				},
				p = (e, t) => t[e],
				b = (e, t) => {
					const n = e.getUTCHours(),
						s = e.getUTCMinutes(),
						{
							startTime: a,
							endTime: o
						} = t,
						[r, i] = a.split(":").map(Number),
						[d, l] = o.split(":").map(Number);
					let c = 60 * r + i,
						m = 60 * d + l;
					const u = 60 * n + s;
					return 1439 === m && m++, 1439 === c && c++, u >= c && u < m
				}
		},
		"./src/reddit/selectors/subredditModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return r
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return v
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/models/SubredditModeration/index.ts");
			const o = [],
				r = Object(s.a)((e, t) => {
					let {
						subredditId: n,
						before: s,
						after: o
					} = t;
					const r = Object(a.e)(n, o, s),
						i = e.pages.modHub.moderators.userOrder.data[n] && e.pages.modHub.moderators.userOrder.data[n][r];
					return i ? i.map(t => e.pages.modHub.moderators.models[n][t]) : []
				}),
				i = (e, t, n) => !!e.pages.modHub.moderators.models[t] && !!e.pages.modHub.moderators.models[t][n],
				d = (e, t) => {
					let {
						subredditId: n,
						beforeEditable: s,
						afterEditable: o
					} = t;
					const r = Object(a.e)(n, o, s),
						i = e.pages.modHub.moderators.editableUserOrder.data[n] && e.pages.modHub.moderators.editableUserOrder.data[n][r];
					return i ? i.map(t => e.pages.modHub.moderators.editableModerators[n][t]) : []
				},
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.editableModerators[n] || null
				},
				c = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.models[n] || null
				},
				m = e => !!e.pages.modHub.moderators.search.api.pending,
				u = e => e.pages.modHub.moderators.search.result,
				p = (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!e.pages.modHub.moderators.invitePending[n]
				},
				b = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreModerators[n] && e.pages.modHub.moderators.loadMoreModerators[n].after
				},
				h = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreModerators[n] && e.pages.modHub.moderators.loadMoreModerators[n].before
				},
				g = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreEditableModerators[n] && e.pages.modHub.moderators.loadMoreEditableModerators[n].after
				},
				f = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreEditableModerators[n] && e.pages.modHub.moderators.loadMoreEditableModerators[n].before
				},
				E = (e, t) => {
					const n = Object(a.e)(t.subredditId, t.after, t.before);
					return !!e.pages.modHub.moderators.userOrder.api.pending[n]
				},
				x = (e, t) => {
					const n = Object(a.e)(t.subredditId, t.afterEditable, t.beforeEditable);
					return !!e.pages.modHub.moderators.editableUserOrder.api.pending[n]
				},
				v = Object(s.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.pages.modHub.moderators.invitedModerators.userOrder[n];
					return s ? s.map(t => e.pages.modHub.moderators.invitedModerators.models[n][t]) : o
				})
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
		"./src/redditGQL/operations/SetSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"ece6b91ed02d"}')
		},
		"./src/redditGQL/operations/SubmitScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"6f9e584d390a"}')
		},
		"./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"5f408850ebd9"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages.fd2e2f78632780c02e12.js.map