// https://www.redditstatic.com/desktop2x/Governance~Reddit~SubredditForkingCTA.2bab5d5ec038e3e53160.js
// Retrieved at 12/15/2022, 7:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~SubredditForkingCTA"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/bignumber.js/bignumber.js");

			function n(e, t) {
				const r = new s.BigNumber(e),
					n = new s.BigNumber(t),
					d = new s.BigNumber(r.dividedBy(n)),
					i = new s.BigNumber("100").multipliedBy(d);
				return new s.BigNumber(i).toNumber()
			}
		},
		"./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "f", (function() {
				return v
			}));
			var s = r("./node_modules/@sentry/minimal/esm/index.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/redditGQL/operations/GetSubredditCountrySiteSettings.json"),
				o = r("./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json");
			const a = e => ({
				input: {
					subredditId: e.subredditId,
					countryCode: e.countryCode || "",
					languageCode: e.languageCode || ""
				}
			});
			var c = async (e, t) => Object(d.a)(e, {
				...o,
				variables: a(t)
			}), u = r("./node_modules/fbt/lib/FbtPublic.js"), l = r("./src/reddit/models/Toast/index.ts"), b = r("./node_modules/reselect/es/index.js"), f = r("./src/reddit/constants/experiments.ts"), p = r("./src/reddit/helpers/chooseVariant/index.ts"), m = r("./src/reddit/selectors/user.ts");
			const h = Object(b.a)(e => Object(p.c)(e, {
				experimentEligibilitySelector: m.S,
				experimentName: f.Vb
			}), e => e === f.Qd);
			var O = r("./src/reddit/actions/toaster.ts");
			const y = "SUBREDDIT_COUNTRY_SITE__LOADED",
				_ = "SUBREDDIT_COUNTRY_SITE__CHANGED",
				g = "SUBREDDIT_COUNTRY_SITE__UPDATE_SUCCESS",
				j = Object(n.a)(y),
				E = Object(n.a)(g),
				S = Object(n.a)(_),
				P = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					var o;
					if (!e) return;
					const a = await (async (e, t) => Object(d.a)(e, {
							...i,
							variables: {
								subredditId: t
							}
						}))(n(), e),
						c = a.body;
					a && a.ok && c && t(j({
						subredditId: e,
						subredditCountrySite: null === (o = c.data) || void 0 === o ? void 0 : o.subredditInfoById.countrySiteSettings
					}))
				}, I = (e, t) => async (r, s, n) => {
					let {
						gqlContext: d
					} = n;
					if (!e) return;
					const i = await c(d(), {
						subredditId: e,
						countryCode: t.countryCode,
						languageCode: t.languageCode
					});
					if (!i.ok) return r(Object(O.f)({
						kind: l.b.Error,
						text: u.fbt._("Something went wrong", null, {
							hk: "2PnKbu"
						}),
						duration: 5e3
					}));
					const o = i.body;
					r(E({
						subredditId: e,
						subredditCountrySite: o.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
					}))
				}, v = (e, t) => async (r, n, d) => {
					let {
						gqlContext: i
					} = d;
					if (!e || !h(n())) return;
					const o = {
							subredditId: e,
							countryCode: "",
							languageCode: t
						},
						a = await c(i(), o);
					if (a.ok) {
						const t = a.body;
						r(E({
							subredditId: e,
							subredditCountrySite: t.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
						}))
					} else s.l(e => {
						e.setExtra("subredditCountryLanginfo", o), s.c(a.error)
					})
				}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				n = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return d
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				n = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				d = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return b
			})), r.d(t, "k", (function() {
				return f
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "p", (function() {
				return y
			})), r.d(t, "q", (function() {
				return _
			})), r.d(t, "r", (function() {
				return g
			})), r.d(t, "s", (function() {
				return j
			})), r.d(t, "t", (function() {
				return E
			})), r.d(t, "u", (function() {
				return S
			})), r.d(t, "v", (function() {
				return P
			})), r.d(t, "w", (function() {
				return I
			})), r.d(t, "x", (function() {
				return v
			}));
			const s = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				n = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				d = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				i = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				o = "POLL_VOTE_SUCCESS",
				a = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				c = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				f = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				m = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				O = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				y = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				g = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				j = "GOVERNANCE__TRANSFER_PENDING",
				E = "GOVERNANCE__TRANSFER_SUCCESS",
				S = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				P = "GOVERNANCE__WALLETS_FETCH_PENDING",
				I = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				v = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/actions/toaster.ts"),
				n = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				d = r("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: d.b.Error,
					text: Object(n.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "e", (function() {
				return L
			})), r.d(t, "h", (function() {
				return U
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/post.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/config.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/reddit/models/Poll/index.ts"),
				b = r("./src/redditGQL/operations/PollVote.json"),
				f = r("./src/reddit/endpoints/governance/requester.ts");
			var p = r("./src/reddit/endpoints/governance/wallet.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/models/Vote/index.ts"),
				O = r("./src/reddit/selectors/crypto/points.ts"),
				y = r("./src/reddit/actions/governance/constants.ts"),
				_ = r("./src/reddit/actions/governance/errorToast.ts");
			const g = Object(n.a)(y.b),
				j = Object(n.a)(y.c),
				E = Object(n.a)(y.e),
				S = (Object(n.a)(y.f), Object(n.a)(y.g), Object(n.a)(y.h)),
				P = Object(n.a)(y.i),
				I = Object(n.a)(y.j),
				v = Object(n.a)(y.k),
				C = Object(n.a)(y.q),
				k = Object(n.a)(y.r),
				x = Object(n.a)(y.s),
				T = Object(n.a)(y.t),
				N = Object(n.a)(y.u),
				A = Object(n.a)(y.v),
				D = Object(n.a)(y.w),
				w = Object(n.a)(y.x),
				R = (e, t) => async (r, s, n) => {
					let d, {
							apiContext: i,
							gqlContext: a
						} = n,
						p = s().polls.models[e];
					if (r(I({
							pollId: e
						})), (d = p.type === l.a.GA ? await ((e, t, r) => Object(u.a)(e, {
								...b,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(a(), e, t) : await
							function(e, t, r, s) {
								return Object(f.a)(e, {
									method: "put",
									endpoint: `${c.a.metaUrl}/polls/${t}/${r}/votes/me/${s}`
								})
							}(i(), p.subredditId, e, t)).ok) {
						if (p.type === l.a.GA) {
							const {
								options: e
							} = d.body.data.updatePostPollVoteState.poll;
							r(E({
								pollId: p.id,
								optionId: t,
								options: e
							}))
						} else r(v(d.body));
						const n = s();
						if ((p = n.polls.models[e]) && Object(l.d)(p)) {
							const {
								postId: e
							} = p, t = n.posts.models[e];
							t && t.voteState === h.a.notVoted && r(Object(o.ib)(e))
						}
					} else r(P({
						pollId: e,
						error: d.error || d.errors[0].message
					})), Object(_.a)(r, d.error || d.errors[0].messsage)
				}, L = (e, t) => async (r, n, o) => {
					let {
						apiContext: u
					} = o;
					var l;
					r(x());
					const b = n().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(f.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${c.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(u(), {
						...e,
						contentId: b
					});
					p.ok ? (r(T({
						...p.body,
						subredditId: e.subredditId
					})), r(Object(a.f)({
						kind: m.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(d.a)(e.amount)), s.fbt._param("tokenName", (null === (l = Object(O.b)(n(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(i.f)())) : (r(C({
						error: p.error
					})), Object(_.a)(r, p.error))
				}, U = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					t(A());
					const d = await Object(p.a)(n(), e);
					d.ok ? t(D(d.body)) : t(N({
						error: d.error
					}))
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return D
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "e", (function() {
				return G
			})), r.d(t, "d", (function() {
				return q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				d = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/actions/upload.ts"),
				u = r("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				l = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/makeGqlRequest/index.ts"),
				f = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts"),
				m = r("./src/redditGQL/operations/CreateMediaUploadLease.json");
			var h = r("./src/reddit/helpers/correlationIdTracker.ts"),
				O = r("./src/reddit/helpers/imagePreview/index.ts"),
				y = r("./src/reddit/helpers/media/index.ts"),
				_ = r("./src/reddit/models/Upload/index.ts"),
				g = r("./src/reddit/selectors/telemetry.ts"),
				j = r("./src/telemetry/index.ts");
			const E = e => ({
				...g.o(e),
				screen: g.cb(e),
				profile: g.T(e),
				subreddit: g.lb(e)
			});
			var S = r("./src/reddit/helpers/trackers/postComposer.ts"),
				P = r("./src/reddit/models/PostCreationForm/index.ts"),
				I = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/postCreations.ts"),
				C = r("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				k = r("./src/reddit/actions/postCreation/constants.ts"),
				x = r("./src/reddit/actions/postCreation/general.ts");
			const T = Object(o.a)(k.u),
				N = Object(o.a)(k.v),
				A = Object(o.a)(k.t),
				D = e => async (t, r) => {
					t(T());
					const s = e.map(e => {
						let {
							url: r,
							uploadKey: s
						} = e;
						const n = Object(y.b)(Object(y.d)(r), "poster.png");
						return t(U(n, s, !0))
					});
					await Promise.all(s);
					const n = r().uploads,
						d = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return n[t]
						}).find(e => e.status !== _.a.SUCCESS);
					t(d ? A(d.error) : N())
				}, w = (e, t) => ({
					error: t ? {
						type: e,
						fields: [{
							field: "",
							msg: t
						}]
					} : {
						type: e
					}
				});
			const R = "RTE",
				L = "GALLERY",
				U = (e, t, r, n, i, o, u) => async (P, k, x) => {
					let {
						apiContext: T,
						gqlContext: N
					} = x;
					const A = Object(v.h)(k()),
						D = Date.now();
					let R = null,
						L = !1,
						U = !1,
						M = !1;
					const G = e => {
						if (!M && n && L) {
							M = !0;
							const r = k(),
								s = Date.now() - D,
								d = Object(h.c)(h.a.PostComposer);
							U ? (async e => {
								let {
									state: t,
									uploadKey: r,
									assetId: s,
									isCanceled: n,
									fileSource: d,
									uploadDuration: i,
									correlationId: o
								} = e;
								const a = t.uploads[r],
									c = n || a.status === _.a.CANCELED,
									{
										file: u,
										url: l,
										metadata: b,
										error: f
									} = a,
									p = b.mimetype || u.type,
									m = p.startsWith("video/"),
									h = a.status === _.a.SUCCESS;
								let O = "";
								f ? O = JSON.stringify(f) : c && (O = "canceled");
								const y = {
									width: b.width,
									height: b.height,
									duration: b.videoDuration && Math.round(1e3 * b.videoDuration)
								};
								Object(j.a)({
									source: "post_composer",
									action: "upload",
									correlationId: o,
									noun: m ? "video" : "image",
									...E(t),
									actionInfo: {
										...g.d(t),
										success: h,
										...O ? {
											reason: O
										} : {}
									},
									media: {
										mimetype: p,
										uploadDuration: i,
										source: d,
										fileName: u.name,
										size: u.size,
										type: m ? "video" : "image",
										...s ? {
											id: s
										} : {},
										...l ? {
											url: l
										} : {},
										...y
									}
								})
							})({
								state: r,
								uploadKey: t,
								assetId: R,
								isCanceled: e,
								fileSource: n,
								uploadDuration: s,
								correlationId: d
							}) : S.D(r, t)
						}
					};
					return await P(Object(c.l)(e, t, async h => {
						var _, g, j, E;
						L = !0, Object(c.k)(h.id, () => {
							G(!0)
						});
						const {
							error: S,
							metadata: v
						} = await async function(e, t, r, n) {
							const i = r && r.allowedPostTypes,
								o = r && r.name,
								a = await Object(y.h)(e) || e.type,
								c = Object(y.c)(e) || void 0;
							if (!c) return w("UNSUPPORTED_BROWSER");
							const u = {
								localUrl: c,
								mimetype: a,
								size: e.size
							};
							if (!a || !Object(y.k)(a)) return {
								error: {
									type: d.Y
								}
							};
							if (a.startsWith("image/")) {
								if (t && i && !i.images) {
									const e = s.fbt._("Images are not allowed in r/{subredditName}", [s.fbt._param("subredditName", o)], {
										hk: "3C2E7Q"
									});
									return w(d.Y, e)
								}
								if ("image/gif" === a) {
									if (e.size > d.eb) return w(d.O)
								} else if (e.size > d.gb) return w(d.W);
								const r = await Object(O.a)(c);
								if (n && (r.width < n || r.height < n)) {
									const e = s.fbt._("Image must be {min_image_width}x{min_image_height} pixels or larger.", [s.fbt._param("min_image_width", n.toString()), s.fbt._param("min_image_height", n.toString())], {
										hk: "2WFKgs"
									});
									return w(d.V, e)
								}
								u.width = r.width, u.height = r.height
							} else if (a.startsWith("video/")) {
								if (e.size > d.kb) return w(d.vc);
								let t;
								try {
									t = await Object(y.j)(c, !0)
								} catch (l) {
									return w(d.Y)
								}
								if (i) {
									const {
										videos: e,
										images: r
									} = i;
									if (r && !e && t.duration > d.lb) {
										const e = s.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [s.fbt._param("subredditName", o)], {
											hk: "46ULiz"
										});
										return w(d.Y, e)
									}
									if (!r && !e) {
										const e = s.fbt._("Videos are not allowed in r/{subredditName}", [s.fbt._param("subredditName", o)], {
											hk: "4uTUZb"
										});
										return w(d.Y, e)
									}
								}
								if (t.duration > d.jb) {
									const e = s.fbt._("Video is too long. Maximum video length is {duration} minutes.", [s.fbt._param("duration", (d.jb / 60).toString())], {
										hk: "20nB6Q"
									});
									return w(d.Y, e)
								}
								if (t.duration < d.rb) {
									const e = s.fbt._("Video is too short. Minimum video length is {duration} seconds.", [s.fbt._param("duration", d.rb.toString())], {
										hk: "49PSW8"
									});
									return w(d.Y, e)
								}
								if (0 === t.height || 0 === t.width) {
									const e = s.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return w(d.Y, e)
								}
								if (t.height < d.sb || t.width < d.tb) {
									const e = s.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [s.fbt._param("min_video_width", d.tb.toString()), s.fbt._param("min_video_height", d.sb.toString())], {
										hk: "2HSUGl"
									});
									return w(d.Y, e)
								}
								if (e.size / t.duration < d.qb) {
									const e = s.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [s.fbt._param("min_bitrate", (d.qb / d.Z).toString())], {
										hk: "1ehgDE"
									});
									return w(d.Y, e)
								}
								u.height = t.height, u.width = t.width, u.videoDuration = t.duration, u.videoFirstFrameUrl = t.firstFrame.dataUrl
							}
							return {
								metadata: u
							}
						}(e, r, A, u);
						if (S || !v) return {
							error: S
						};
						if (P(Object(c.m)({
								key: t,
								metadata: {
									fileSource: n,
									...v
								}
							})), U = !0, i && i(), o) {
							const e = v.mimetype,
								t = e && d.T[e];
							if (e && t) {
								const e = await (async (e, t) => {
									return await Object(b.a)(e, {
										...m,
										variables: {
											input: {
												mimetype: t
											}
										}
									})
								})(N(), t);
								if (e.ok) {
									const t = e.body,
										r = (null === (_ = t.data.createMediaUploadLease) || void 0 === _ ? void 0 : _.uploadLease.uploadLeaseUrl) || "",
										s = Object(C.a)({
											uploadLeaseUrl: r,
											uploadLeaseHeaders: null === (g = t.data.createMediaUploadLease) || void 0 === g ? void 0 : g.uploadLease.uploadLeaseHeaders
										});
									return R = (null === (j = t.data.createMediaUploadLease) || void 0 === j ? void 0 : j.mediaId) || null, {
										uploadLease: s
									}
								} {
									const t = null === (E = e.body.data.createMediaUploadLease) || void 0 === E ? void 0 : E.errors;
									let r = null;
									return t && (r = {
										fields: [{
											field: t[0].__typename || "",
											msg: t[0].message
										}],
										type: t[0].__typename || ""
									}), {
										error: r || void 0
									}
								}
							}
							return P(Object(a.f)({
								kind: I.b.Error,
								text: s.fbt._("Only .jpeg and .png image types are are allowed", null, {
									hk: "30Ms4V"
								}),
								duration: 6e3
							})), {
								error: void 0
							}
						}
						const k = e.name,
							x = await (async (e, t, r) => Object(l.a)(Object(f.a)(e, [p.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: d.ob.POST,
								data: {
									filepath: t,
									mimetype: r
								}
							}))(T(), k, v.mimetype);
						return x.ok ? (R = x.body.asset.asset_id, {
							uploadLease: x.body.args
						}) : {
							error: x.error || void 0
						}
					}, !0)), G(!1), k().uploads[t] || null
				}, M = (e, t) => async (r, s) => {
					const n = s().uploads[e];
					n && !Object(_.c)(n) && await r(U(n.file, n.key, t, n.metadata.fileSource, void 0))
				}, G = (e, t, r, d, o, c) => async (u, l) => {
					const b = e.map((e, s) => new Promise(async s => {
							const i = Object(_.d)(r, Object(n.a)().slice(-6));
							await u(U(e, i, d, t, () => s({
								uploadKey: i,
								isValid: !0
							}), o, c)), s({
								uploadKey: i,
								isValid: !1
							})
						})),
						f = await Promise.all(b),
						p = f.map(e => e.uploadKey);
					return u(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (r, n) => {
							const {
								uploads: d
							} = n(), o = e.map(e => d[e]).filter(e => e.status === _.a.FAILED && !e.metadata.mimetype).map(e => e.error), c = o.length > t ? t - 1 : o.length, u = o.length - c;
							o.slice(0, c).forEach(e => r(Object(a.f)({
								duration: a.a,
								kind: I.b.Error,
								text: Object(i.a)(e)
							}))), u > 0 && r(Object(a.f)({
								duration: a.a,
								kind: I.b.Error,
								text: s.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [s.fbt._plural(u, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(p)), f.filter(e => e.isValid).map(e => e.uploadKey)
				}, q = (e, t) => async (r, n) => {
					const d = n(),
						i = Object(v.X)(d),
						{
							items: o
						} = i,
						l = !o.length && 1 === e.length,
						b = Object(v.O)(d) && !l;
					let f = !1,
						p = e;
					if (b) {
						if (Object(P.x)(i)) return void r(Object(a.f)({
							kind: I.b.Error,
							text: s.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						p.some(e => Object(y.n)(e.type)) && r(Object(a.f)({
							duration: a.a,
							kind: I.b.Error,
							text: s.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), p = p.filter(e => Object(y.m)(e.type));
						const e = Math.max(0, u.b - o.length);
						p.length > e && (r(Object(a.f)({
							kind: I.b.Error,
							text: s.fbt._("You have hit the limit of {images_limit} images", [s.fbt._param("images_limit", `${u.b}`)], {
								hk: "6M4kX"
							})
						})), p = p.slice(0, e))
					} else p = p.slice(0, 1), f = !0, r(Object(c.j)(L, !0));
					const m = await r(G(p, t, L, !0));
					if (!m.length) return;
					const h = m.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						O = 0 === o.length;
					r(Object(x.d)({
						...i,
						items: f ? h : [...o, ...h],
						selectedKey: O ? m[0] : m[m.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return U
			})), r.d(t, "f", (function() {
				return M
			})), r.d(t, "e", (function() {
				return V
			})), r.d(t, "c", (function() {
				return K
			})), r.d(t, "d", (function() {
				return J
			})), r.d(t, "a", (function() {
				return X
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/telemetry/index.ts"),
				i = r("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				o = r("./src/reddit/actions/governance/index.ts"),
				a = r("./src/reddit/actions/pages/subreddit.ts"),
				c = r("./src/reddit/actions/postDraft.ts"),
				u = r("./src/reddit/actions/scheduledPosts/index.ts"),
				l = r("./src/reddit/actions/urlRequested.ts"),
				b = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = r("./src/config.ts"),
				p = r("./src/lib/convertToCamelCase/index.ts"),
				m = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/reddit/endpoints/post/create.ts");
			var O = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				y = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				_ = r("./src/reddit/featureFlags/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				j = r("./src/reddit/helpers/scheduledPosts/index.ts"),
				E = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				P = r("./src/reddit/models/Poll/index.ts"),
				I = r("./src/reddit/models/PostCreationForm/index.ts"),
				v = r("./src/reddit/models/User/index.ts"),
				C = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				k = r("./src/reddit/selectors/postCreations.ts"),
				x = r("./src/reddit/selectors/postDraft.ts"),
				T = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				A = r("./src/reddit/models/Post/index.ts"),
				D = r("./src/reddit/models/ScheduledPost/index.ts"),
				w = r("./src/reddit/actions/postCreation/constants.ts"),
				R = r("./src/reddit/actions/postCreation/general.ts"),
				L = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const U = Object(n.a)(w.w),
				M = Object(n.a)(w.P),
				G = Object(n.a)(w.o),
				q = Object(n.a)(w.y),
				F = Object(n.a)(w.db),
				V = Object(n.a)(w.J),
				B = Object(n.a)(w.a),
				$ = Object(n.a)(w.F),
				W = e => `/r/${e}/about/${D.s}`,
				z = (e, t) => {
					const r = e || {
							duration: s.E,
							options: []
						},
						{
							govType: n,
							newSubreddit: d,
							newTopMod: i
						} = Object(k.u)(t),
						o = {
							...r
						};
					return n && (o.type = n), o.type === P.a.ReplaceTopMod ? (o.params = {
						userName: i
					}, o.options = P.f[P.a.ReplaceTopMod]()) : o.type === P.a.Spinoff ? (o.params = {
						subreddit: d
					}, o.options = P.f[P.a.Spinoff](d)) : o.options = o.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), o
				},
				H = e => {
					const t = e.uploads,
						r = Object(k.X)(e),
						n = Object(k.a)(e),
						d = Object(k.jb)(e);
					if (n === s.bc.POST) return b.a.getPendingThumbnailUploads(d, t);
					if (n === s.bc.MEDIA && r && r.items.length) {
						const {
							video: e
						} = r.items[0];
						if (e && e.thumbnail && !t[I.n]) return [{
							...e.thumbnail,
							uploadKey: I.n
						}]
					}
				},
				K = (e, t) => async (r, n, d) => {
					let {
						apiContext: i
					} = d, o = n();
					const {
						pending: a
					} = o.creations.api.post.submit, u = Object(x.g)(o);
					if (a || u) return;
					r($(e)), o = n();
					const l = Object(k.a)(o),
						b = _.d.rteVideoPoster(o),
						f = H(o),
						p = l === s.bc.MEDIA;
					f && (b || p) && (await r(L.f(f)), H(n())) || (e === I.r.Draft ? await r(Object(c.r)(t.draftId)) : e === I.r.ScheduledPost && Object(T.r)(o) ? await r(Y(t)) : e === I.r.ScheduledPost ? await r(Q(t)) : await r(J(t)))
				}, Y = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const i = r(),
						o = Object(k.eb)(i),
						a = Object(k.fb)(i, e),
						c = Object(k.h)(i),
						b = Object(T.r)(i);
					if (!(a && c.id && o && Object(j.f)(b))) return;
					const f = c.id,
						p = Object(T.a)(i, {
							subredditId: f,
							scheduledPostId: b
						});
					if (p && Object(d.a)(Object(S.r)(p)(i)), t(U(a)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(k.x)(r()))) return;
					const {
						isPoll: m,
						polls: h
					} = Object(k.u)(i), _ = z(h, i), g = {
						...Object(O.e)({
							poll: m ? _ : void 0,
							submission: a,
							schedule: o,
							subredditId: c.id,
							scheduledPostId: b
						})
					}, E = await Object(y.a)(n(), g);
					if (E.ok) return t(Object(u.e)({
						subredditId: c.id
					})), void t(Object(l.a)(W(c.name), !1));
					const P = E.error;
					t(G(P))
				}, Q = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const i = r(),
						o = Object(k.eb)(i),
						a = Object(k.fb)(i, e),
						c = Object(k.h)(i),
						b = Object(T.b)(i);
					if (!a || !c.id || !o) return;
					if (t(U(a)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(k.x)(r()))) return;
					const {
						isPoll: f,
						polls: p
					} = Object(k.u)(i), m = z(p, i), h = {
						duration: m.duration,
						options: m.options
					}, y = {
						...Object(O.d)({
							poll: f ? h : void 0,
							submission: a,
							schedule: o,
							subredditId: c.id
						}),
						creationToken: b
					}, _ = await Object(O.a)(n(), y);
					if (_.ok) {
						t(Object(u.e)({
							subredditId: c.id
						}));
						const e = _.body.data.createScheduledPost.scheduledPost;
						return e && Object(d.a)(Object(S.o)(Object(g.d)(e))(i)), void t(Object(l.a)(W(c.name), !1))
					}
					const j = _.error;
					t(G(j))
				}, J = e => async (t, r, n) => {
					let {
						apiContext: d
					} = n;
					const c = r(),
						u = Object(k.fb)(c, e),
						{
							isPoll: b,
							polls: O
						} = Object(k.u)(c),
						y = z(O, c);
					if (!u) return;
					if (t(U(u)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(k.x)(r()))) return;
					let g;
					const j = b && _.d.spPolls(c);
					if ((g = j ? await
							function(e, t, r) {
								const n = t.destSubreddit.id;
								return Object(m.a)(e, {
									method: s.ob.POST,
									endpoint: `${f.a.metaUrl}/polls/${n}`,
									type: "json",
									data: {
										poll: r,
										subredditId: n,
										...Object(p.a)(Object(h.d)(t))
									}
								}).then(async e => {
									const r = e.ok ? {
											...e,
											body: {
												json: {
													data: e.body
												}
											}
										} : e,
										s = await Object(h.e)(r, t);
									if (s.ok) {
										return {
											body: {
												...s.body,
												poll: e.body.poll
											},
											ok: !0,
											status: e.status
										}
									}
									return {
										error: s.body,
										ok: !1,
										status: e.status
									}
								})
							}(d(), u, y) : b ? await Object(h.b)(d(), {
								...u,
								kind: I.p.POLL,
								poll: y
							}) : u.kind === I.p.GALLERY ? await Object(h.a)(d(), u) : await Object(h.c)(d(), u)).ok) {
						const e = Object(N.m)(c),
							r = g.body;
						t(M({
							draftId: u.draftId,
							response: r
						})), j && t(Object(o.c)({
							poll: r.poll
						}));
						const s = Object(C.b)(c);
						u.kind !== I.p.LINK && u.kind !== I.p.RICH_TEXT && u.kind !== I.p.MARKDOWN || b || !s || t(Object(i.c)());
						const n = (r.path || `/user/${Object(v.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(a.subredditInvalidateListing)(u.destSubreddit.name)), t(Object(l.a)(n, !1))
					} else {
						if (b) {
							const e = g.error;
							t(q(e))
						}
						const e = g.error;
						X(t, e)
					}
					const S = Object(R.o)(u.kind),
						P = g.ok && g.body && g.body.id && Object(A.y)(g.body.id),
						x = r();
					E.B(x, S, P, e.correlationId)
				}, X = (e, t) => {
					t.type === s.L.BAD_CAPTCHA_ERROR ? e(B()) : t.type === s.L.VALIDATION_ERROR ? e(F(t)) : t.type === s.L.SUBMIT_VALIDATION_ERROR ? e(V(t)) : e(G(t))
				}
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return n
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "m", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "j", (function() {
				return b
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "r", (function() {
				return _
			})), r.d(t, "u", (function() {
				return g
			})), r.d(t, "p", (function() {
				return j
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "v", (function() {
				return S
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "x", (function() {
				return I
			})), r.d(t, "w", (function() {
				return v
			})), r.d(t, "t", (function() {
				return C
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			const n = "SCHEDULED_POSTS_REQUESTED",
				d = "SCHEDULED_POSTS_LOADED",
				i = "STANDALONE_SCHEDULED_POSTS_LOADED",
				o = "RECURRING_SCHEDULED_POSTS_LOADED",
				a = "SCHEDULED_POSTS_FAILED",
				c = "SCHEDULED_POST_CREATION_SUCCEEDED",
				u = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				l = "SCHEDULED_POST_MUTATE_REQUESTED",
				b = "SCHEDULED_POST_MUTATE_FAILED",
				f = "STANDALONE_POST_MUTATE_SUCCESS",
				p = "RECURRING_POST_MUTATE_SUCCESS",
				m = "RECURRING_POST__EDIT_MODAL_LOAD",
				h = "RECURRING_POST__EDIT_LOAD",
				O = "STANDALONE_POST__EDIT_LOAD",
				y = "SCHEDULED_POST__DELETE_SUCCESS",
				_ = () => s.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				g = () => s.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				j = () => s.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				E = () => s.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				S = () => s.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				P = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				I = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				v = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				C = () => s.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return _
			})), r.d(t, "a", (function() {
				return j
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react-router-redux/es/index.js"),
				d = r("./src/telemetry/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/scheduledPosts/index.ts"),
				a = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				b = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				f = r("./src/reddit/models/ScheduledPost/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/routes/postCreation/index.ts"),
				h = r("./src/reddit/selectors/scheduledPosts/index.ts");
			const O = Object(i.a)(a.n),
				y = Object(i.a)(a.b),
				_ = (e, t) => async (r, s, d) => {
					const i = Object(h.a)(s(), {
						scheduledPostId: t,
						subredditId: e
					});
					i && (await r(Object(n.b)(Object(m.c)(i.subreddit.name, i.collectionId))), r((Object(f.q)(i) ? y : O)(i)))
				}, g = (e, t) => {
					Object(f.q)(t) ? e(Object(o.d)({
						scheduledPost: t
					})) : e(Object(o.h)({
						scheduledPost: t
					}))
				}, j = (e, t, r) => async (n, i, m) => {
					let {
						gqlContext: O
					} = m;
					n(Object(o.g)());
					const y = Object(h.a)(i(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (y && Object(f.q)(y) && Object(d.a)(Object(b.u)()(i(), y)), !y) return void n(Object(o.f)({
						message: s.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(r).length) return void g(n, y);
					const _ = await Object(u.a)(O(), {
							...r,
							id: t
						}),
						E = _.body;
					if (!(_.ok && E && E.data && E.data.updateScheduledPost && E.data.updateScheduledPost.ok && E.data.updateScheduledPost.scheduledPost)) return n(Object(o.f)({
						message: _.error && _.error.fields && _.error.fields.length && _.error.fields[0].msg || s.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void n(Object(c.f)(Object(c.e)(a.t(), p.b.Error, a.s(), j(e, t, r))));
					n(Object(c.f)(Object(c.e)(a.w(), p.b.SuccessCommunity))), g(n, Object(l.d)(E.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return y
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "b", (function() {
				return A
			}));
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = r("./src/reddit/actions/scheduledPosts/edit.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				c = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				u = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = r("./src/reddit/models/ScheduledPost/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				p = r("./src/telemetry/index.ts");
			const m = 25,
				h = 1e4,
				O = Object(n.a)(d.g),
				y = Object(n.a)(d.k),
				_ = Object(n.a)(d.j),
				g = Object(n.a)(d.o),
				j = Object(n.a)(d.d),
				E = Object(n.a)(d.f),
				S = Object(n.a)(d.m),
				P = Object(n.a)(d.a),
				I = Object(n.a)(d.c),
				v = Object(n.a)(d.e),
				C = Object(n.a)(d.h),
				k = (e, t) => {
					e(v()), e(Object(o.f)(Object(o.e)(d.r(), b.b.Error, d.s(), x(t))))
				},
				x = e => {
					let {
						subredditId: t,
						includeStandalone: r = {
							standaloneFirst: m
						},
						includeRecurring: s = {
							recurringFirst: h
						},
						...n
					} = e;
					return async (e, d, i) => {
						let {
							gqlContext: o
						} = i;
						if (Object(f.h)(d(), {
								subredditId: t
							})) return;
						e(O());
						const u = {
								subredditId: t,
								includeRecurring: s,
								includeStandalone: r,
								...n
							},
							l = await Object(a.b)(o(), u);
						Object(a.f)(l, u) ? N(e, Object(c.e)(l.body.data), u) : k(e, u)
					}
				},
				T = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const d = r();
					if (!Object(f.h)(d, {
							subredditId: e
						})) return t(x({
						subredditId: e
					}));
					if (!Object(f.g)(d, {
							subredditId: e,
							type: l.g.standalonePosts
						})) return;
					const i = Object(f.c)(d, {
						subredditId: e,
						type: l.g.standalonePosts
					});
					if (!i) return;
					t(O());
					const o = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: m,
								standaloneAfter: i
							}
						},
						u = await Object(a.b)(n(), o);
					u.ok ? N(t, Object(c.e)(u.body.data), o) : t(v())
				}, N = (e, t, r) => {
					Object(c.b)(t) ? e(E(t)) : Object(c.a)(t) ? e(P(t)) : Object(c.c)(t) ? e(S(t)) : k(e, r)
				}, A = (e, t) => async (r, n, d) => {
					const o = {},
						a = n();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							o[e] = !t[e];
							break;
						case "isSticky":
							const r = !!t.sticky && "NONE" !== t.sticky;
							o.sticky = r ? "NONE" : "SECOND";
							break;
						default:
							return Object(s.a)(e)
					}
					Object(p.a)(Object(u.t)(e, o[e], Object(l.q)(t))(a)), r(Object(i.a)(t.subreddit.id, t.id, o))
				}
		},
		"./src/reddit/actions/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return M
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "h", (function() {
				return q
			})), r.d(t, "i", (function() {
				return F
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/postCreation/general.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/postCreation/submit.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				l = r("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				b = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/constants/modals.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./src/lib/omitHeaders/index.ts"),
				h = r("./src/reddit/constants/headers.ts"),
				O = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const y = e => ({
				public_description: e.publicDescription,
				name: e.name,
				type: e.type,
				over_18: e.over18,
				restrict_commenting: e.restrictCommenting,
				restrict_posting: e.restrictPosting,
				existing_tags: e.existingTags.join(","),
				new_tags: e.newTags.join(","),
				primary_tag: e.primaryTagId
			});
			var _ = r("./src/lib/makeGqlRequest/index.ts"),
				g = r("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var j = r("./src/reddit/helpers/correlationIdTracker.ts"),
				E = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				S = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				P = r("./src/reddit/selectors/meta.ts"),
				I = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				k = r("./src/telemetry/index.ts"),
				x = r("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const T = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				N = "SUBREDDIT__CREATE_PENDING",
				A = "SUBREDDIT__CREATE_SUCCEEDED",
				D = "SUBREDDIT__CREATE_FAILED",
				w = "SUBREDDIT__CREATE_CLEARED",
				R = Object(d.a)(N),
				L = Object(d.a)(A),
				U = Object(d.a)(D),
				M = Object(d.a)(w),
				G = Object(d.a)(T),
				q = e => async (t, r, d) => {
					let {
						apiContext: _
					} = d;
					var g;
					const T = r(),
						{
							name: N,
							type: A,
							crosspostId: D
						} = e;
					if (Object(v.l)(T)) return;
					t(R({
						subredditName: N
					}));
					const w = await ((e, t) => Object(p.a)(Object(m.a)(e, [h.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: n.ob.POST,
						data: y(t)
					}))(_(), e);
					if (w.ok) {
						const r = w.body,
							d = r.fullname;
						Object(k.a)(Object(E.d)(A, e, d)(T)), t(L({
							subredditName: N
						}));
						const p = await Object(S.b)(T);
						if (D) {
							const e = Object(I.G)(T, {
								postId: D
							});
							t(Object(i.h)(e.title)), t(Object(i.g)({
								submissionType: n.bc.CROSSPOST
							})), await t(Object(a.d)({
								destSubreddit: {
									...r,
									isProfile: !1
								},
								sourcePostId: D,
								postFieldValidationPending: Promise.resolve()
							})), Object(l.b)(D)
						}
						await t(Object(s.b)(`${r.path}`)), p ? p === b.Se.NewModule && t(Object(c.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (t(Object(o.h)(f.a.POST_FLOW_UPSELL_MODAL_ID)), Object(k.a)(Object(E.g)()(T))), Object(j.b)(j.a.SubredditCreation), t(Object(x.f)(d, null !== (g = Object(C.db)(T)) && void 0 !== g ? g : Object(P.j)(T)))
					} else w.error && Object(k.a)(Object(E.h)(w.error.type, N)(T)), t(U({
						subredditName: N,
						error: w.error
					}))
				}, F = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const d = r(),
						i = {
							name: e
						},
						o = await ((e, t) => Object(_.a)(e, {
							...g,
							variables: t
						}))(n(), {
							input: i
						});
					let a = null;
					if (o.ok) {
						a = o.body.data.validateCreateSubredditInput.fieldErrors
					}
					if (a) {
						const r = {
							fields: [{
								field: a[0].field,
								msg: a[0].message
							}],
							type: a[0].code
						};
						t(U({
							subredditName: e,
							error: r
						})), r && Object(k.a)(Object(E.h)(r.type, e)(d))
					} else await t(M())
				}
		},
		"./src/reddit/actions/upload.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "j", (function() {
				return T
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/get.js"),
				n = r.n(s),
				d = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/uploadToS3/index.ts"),
				a = r("./src/reddit/models/Upload/index.ts");
			const c = "UPLOAD_PENDING",
				u = "UPLOAD_UPLOADING",
				l = "UPLOAD_METADATA_CHANGED",
				b = "UPLOAD_PROGRESS",
				f = "UPLOAD_SUCCESS",
				p = "UPLOAD_FAILED",
				m = "UPLOAD_CANCELED",
				h = "UPLOAD_REMOVED",
				O = Object(i.a)(c),
				y = Object(i.a)(u),
				_ = Object(i.a)(l),
				g = Object(i.a)(b),
				j = Object(i.a)(f),
				E = Object(i.a)(p),
				S = Object(i.a)(m),
				P = Object(i.a)(h),
				I = new Map,
				v = (e, t) => {
					const r = I.get(e) || [];
					r.push(t), I.set(e, r)
				},
				C = (e, t) => {
					const r = I.get(e);
					r && r.forEach(r => r(e, t)), I.delete(e)
				},
				k = function(e, t, r) {
					let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (i, c) => {
						const u = t;
						if (c().uploads[u] && Object(a.c)(c().uploads[u])) return;
						const l = Object(d.a)(),
							b = () => {
								const e = c().uploads[u];
								return !e || e.id !== l || e.status === a.a.CANCELED
							};
						i(O({
							key: u,
							id: l,
							file: e
						}));
						const {
							uploadLease: f,
							error: p
						} = await r(c().uploads[u]);
						if (b()) return;
						if (p || !f) return void i(E({
							key: u,
							error: p
						}));
						let m;
						v(l, () => {
							m && m.abort()
						}), i(y({
							key: u
						}));
						const h = await Object(o.a)(e, f, e => (m = e, s && e.on("progress", e => {
							if (!b() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								i(g({
									key: u,
									progress: t
								}))
							}
						}), e));
						if (m = null, !b())
							if (h.ok) {
								const e = decodeURIComponent(h.body.PostResponse.Location);
								i(j({
									key: u,
									url: e
								}))
							} else {
								const e = n()(h, "body.Error.Message.0"),
									t = {
										type: "ERROR",
										...e ? {
											fields: [{
												field: "0",
												msg: e
											}]
										} : {}
									};
								i(E({
									key: u,
									error: t
								}))
							}
					}
				},
				x = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (r, s) => {
						const n = s().uploads[e];
						n && (C(n.id, t), r(t ? P({
							key: e
						}) : S({
							key: e
						})))
					}
				},
				T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (r, s) => {
						Object.keys(s().uploads).forEach(s => {
							s.startsWith(e) && r(x(s, t))
						})
					}
				}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = 20,
				n = 180
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "l", (function() {
				return c
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "n", (function() {
				return y
			}));
			var s, n = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function o(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case s.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case s.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					case s.ArbitrumMainnet:
						return "https://a4ba.arbitrum.io/rpc";
					default:
						return `https://meta-api.reddit.com/ethereum/${e}`
				}
			}

			function a(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby";
					case s.ArbitrumRinkeby:
						return 5391184;
					case s.ArbitrumNitroDevnet:
						return 421612;
					case s.ArbitrumMainnet:
						return 42170;
					default: {
						const [, t] = e.split(":");
						return t
					}
				}
			}

			function c(e) {
				return e === s.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, r) {
				return Object(d.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(d.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function b(e, t, r) {
				return await Object(d.a)(e, {
					method: "delete",
					endpoint: `${n.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumNova = "ethereum:42170", e.ArbitrumRinkeby = "ethereum:5391184", e.ArbitrumNitroDevnet = "ethereum:421612", e.ArbitrumMainnet = "ethereum:42170", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(s || (s = {}));
			const f = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				m = e => ({
					type: "claim",
					subredditId: e
				}),
				h = e => ({
					type: "subscribe",
					subredditId: e
				}),
				O = (e, t, r, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: s
				});
			async function y(e, t) {
				return await Object(d.a)(e, {
					method: "put",
					endpoint: `${n.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/config.ts"),
				n = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				d = r("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(d.a)(e, {
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: n.ob.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							s = {
								[t.subredditId]: r
							};
						return {
							...e,
							body: s
						}
					}
					return e
				})
			}

			function o(e, t) {
				return Object(d.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${s.a.metaUrl}/wallets/${t.subredditId}`,
					method: n.ob.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/endpoints/post/create.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return _
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "a", (function() {
				return S
			}));
			var s = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/helpers/flair.ts"),
				u = r("./src/reddit/helpers/name/index.ts"),
				l = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				b = r("./src/reddit/models/Poll/index.ts"),
				f = r("./src/reddit/models/Post/index.ts"),
				p = r("./src/reddit/models/PostCreationForm/index.ts"),
				m = r("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function h(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const O = e => {
					switch (e.kind) {
						case p.p.CROSSPOST:
							return p.p.CROSSPOST;
						case p.p.LINK:
							return p.p.LINK;
						case p.p.POLL:
							return p.p.POLL;
						case p.p.MEDIA:
							return e.makeGif ? p.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				y = e => {
					switch (e.kind) {
						case p.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case p.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case p.p.LINK:
						case p.p.MEDIA:
							return {
								url: e.url
							};
						case p.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case p.p.POLL:
							return e.poll.type === b.a.Prediction ? {
								duration: 999999,
								end_timestamp: h(e.poll.endDate),
								options: e.poll.options.map(e => e.text),
								prediction: !0,
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							} : {
								duration: Math.floor(e.poll.duration / 864e5),
								options: e.poll.options.map(e => e.text),
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							}
					}
				},
				_ = e => {
					const t = Object(u.i)(e.destSubreddit.name);
					return {
						...e.destSubreddit.isProfile ? {
							sr: `u_${t}`,
							submit_type: "profile"
						} : {
							sr: t,
							submit_type: "subreddit"
						},
						api_type: "json",
						show_error_list: !0,
						draft_id: e.draftId || void 0,
						title: e.title,
						discussion_type: e.isChatPost ? f.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== p.p.POLL ? {
							kind: O(e),
							original_content: e.isOC
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...y(e),
						...e.kind === p.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === p.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(c.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === p.j.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				g = e => {
					const t = /comments\/(\w+)\/.*$/.exec(e),
						r = t && t[1];
					return r ? `${n.Nb.Post}_${r}` : ""
				},
				j = async (e, t) => {
					if (!e.ok) return Object(l.b)(e);
					const r = e.body.json.data;
					let n = r.url;
					n || t.kind !== p.p.MEDIA || (n = await ((e, t) => new Promise(r => {
						const s = new WebSocket(e),
							n = e => {
								s.close(), clearTimeout(d), r(e)
							},
							d = setTimeout(() => {
								n("")
							}, t);
						s.onmessage = e => {
							const t = JSON.parse(e.data),
								r = "success" === t.type ? t.payload.redirect : "";
							n(r)
						}, s.onerror = e => {
							n("")
						}
					}))(r.websocket_url, 3e4));
					const d = r.id || g(n),
						i = Object(s.parse)(n).path,
						o = r.drafts_count;
					return {
						...e,
						body: {
							id: d,
							path: i,
							draftsCount: o
						}
					}
				}, E = (e, t) => Object(d.a)(Object(i.a)(e, [o.a]), {
					endpoint: Object(m.a)(Object(a.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
					method: n.ob.POST,
					data: _(t),
					type: "json"
				}).then(e => j(e, t)), S = (e, t) => Object(d.a)(Object(i.a)(e, [o.a]), {
					endpoint: Object(m.a)(Object(a.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
					method: n.ob.POST,
					data: {
						..._(t),
						items: t.galleryItems.map(e => ({
							caption: e.caption,
							outbound_url: e.url,
							media_id: e.assetId
						}))
					},
					type: "json"
				}).then(e => j(e, t));
			t.c = (e, t) => Object(d.a)(Object(i.a)(e, [o.a]), {
				endpoint: Object(m.a)(Object(a.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: n.ob.POST,
				data: _(t)
			}).then(async e => await j(e, t))
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "a", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/reddit/helpers/flair.ts"),
				d = r("./src/reddit/helpers/richTextJson/index.ts"),
				i = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/models/PostCreationForm/index.ts"),
				a = r("./src/reddit/models/ScheduledPost/index.ts"),
				c = r("./src/redditGQL/operations/CreateScheduledPost.json"),
				u = r("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const l = (e, t) => Object(s.a)(e, {
					...u,
					variables: {
						...t,
						includeRecurring: !(!t.includeRecurring || !t.includeRecurring.recurringFirst),
						includeStandalone: !(!t.includeStandalone || !t.includeStandalone.standaloneFirst),
						recurringAfter: t.includeRecurring ? t.includeRecurring.recurringAfter : void 0,
						recurringFirst: t.includeRecurring ? t.includeRecurring.recurringFirst : void 0,
						standaloneAfter: t.includeStandalone ? t.includeStandalone.standaloneAfter : void 0,
						standaloneFirst: t.includeStandalone ? t.includeStandalone.standaloneFirst : void 0
					}
				}),
				b = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const r = e.body;
					return !!(r.data && r.data.subredditInfoById && r.data.subredditInfoById.scheduledPosts && r.data.subredditInfoById.scheduledPosts[t] && r.data.subredditInfoById.scheduledPosts[t].edges)
				},
				f = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => b(e, a.g.standalonePosts))(e)) && !(t.includeRecurring && !(e => b(e, a.g.recurringPosts))(e))),
				p = e => {
					let {
						poll: t,
						schedule: r,
						submission: s,
						subredditId: d
					} = e;
					return {
						collectionId: s.collectionId || "",
						discussionType: s.isChatPost ? i.b.Chat : i.b.Comment,
						isContestMode: s.isContestMode,
						isPostAsMetaMod: s.isPostAsMetaMod,
						isSpoiler: s.isSpoiler,
						isNsfw: s.isNSFW,
						poll: t && j(t),
						title: s.title,
						isOriginalContent: s.isOC,
						flair: s.flair ? {
							id: s.flair.templateId,
							text: Object(n.g)(s.flair)
						} : {},
						sticky: s.sticky,
						subredditId: d,
						suggestedCommentSort: s.suggestedSort,
						isSendReplies: s.sendReplies,
						...m(r),
						..._(s),
						assetIds: g(s)
					}
				},
				m = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				h = e => ({
					scheduling: Object.keys(e).length > 0 ? {
						clientTimezone: e.timezoneName || void 0,
						publishAt: e.submitDate || void 0,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				O = e => {
					let {
						poll: t,
						schedule: r,
						scheduledPostId: s,
						submission: n,
						subredditId: d
					} = e;
					const i = p({
						poll: t,
						schedule: r,
						submission: n,
						subredditId: d
					});
					return {
						id: s,
						...i,
						flair: Object.keys(i.flair || {}).length ? {
							...i.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				y = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				_ = e => {
					switch (e.kind) {
						case o.p.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case o.p.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case o.p.LINK:
							return {
								content: {}, link: {
									url: y(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				g = e => {
					let t = [];
					if (e.document) {
						const r = e.document || [];
						t = Object(d.e)(r)
					}
					return t
				},
				j = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				E = (e, t) => Object(s.a)(e, {
					...c,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/redditGQL/operations/UpdateScheduledPost.json"),
				n = r("./src/lib/makeGqlRequest/index.ts");
			const d = (e, t) => Object(n.a)(e, {
				...s,
				variables: {
					input: t
				}
			})
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js");

			function n(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function d(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(n).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return d
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			}));
			const s = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: f(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				n = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: l(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				d = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...s(e),
							...n(e)
						}
					}
				}),
				i = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				o = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				a = e => i(e) && o(e),
				c = e => !i(e) && o(e),
				u = e => i(e) && !o(e),
				l = e => e.map(e => b(e.node)),
				b = e => ({
					id: e.id,
					title: e.title,
					body: e.body,
					postKind: e.postKind,
					collectionId: e.collections.edges.length ? e.collections.edges[0].node.id : void 0,
					discussionType: e.discussionType,
					isContestMode: e.isContestMode,
					isPostAsMetaMod: e.isPostAsMetaMod,
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNsfw,
					isOriginalContent: e.isOriginalContent,
					isSendReplies: e.isSendReplies,
					isSticky: !!e.sticky && "NONE" !== e.sticky,
					mediaAssets: e.mediaAssets,
					subreddit: {
						...e.subreddit
					},
					suggestedCommentSort: e.suggestedCommentSort,
					owner: {
						...e.owner
					},
					poll: e.poll,
					contentType: e.contentType,
					clientTimezone: e.clientTimezone,
					publishAt: e.publishAt.split(".")[0],
					state: e.state,
					flair: e.flair ? {
						...e.flair
					} : void 0,
					sticky: e.sticky,
					isModDistinguished: "MODERATOR" === e.distinguishedAs,
					url: e.url
				}),
				f = e => e.map(e => p(e.node)),
				p = e => ({
					...b(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				m = e => (e => !!e.frequency && !!e.interval)(e) ? p(e) : b(e)
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/isEqual.js"),
				n = r.n(s),
				d = r("./node_modules/lodash/xorWith.js"),
				i = r.n(d);
			t.a = (e, t) => {
				const r = i()(e, t, n.a);
				return !(!r || 0 !== r.length)
			}
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "g", (function() {
				return P
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			r("./node_modules/react/index.js");
			const n = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function d(e, t) {
				for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), d = 2; d < r; d++) s[d - 2] = arguments[d];
				if (n(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let r = 0;
						(e = new Error(t.replace(/%s/g, () => String(s[r++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const i = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				o = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			var a = function(e, t, r) {
					const n = e.length;
					if (0 === n) return "";
					if (1 === n) return e[0];
					const a = e[n - 1];
					let c = e[0];
					for (let d = 1; d < n - 1; ++d) switch (r) {
						case o.SEMICOLON:
							c = s.fbt._("{previous items}; {following items}", [s.fbt._param("previous items", c), s.fbt._param("following items", e[d])], {
								hk: "4hs4xq"
							});
							break;
						default:
							c = s.fbt._("{previous items}, {following items}", [s.fbt._param("previous items", c), s.fbt._param("following items", e[d])], {
								hk: "2z8RMb"
							})
					}
					return function(e, t, r, n) {
						switch (r) {
							case i.AND:
								return s.fbt._("{list of items} and {last item }", [s.fbt._param("list of items", e), s.fbt._param("last item ", t)], {
									hk: "1ylan1"
								});
							case i.OR:
								return s.fbt._("{list of items} or {last item}", [s.fbt._param("list of items", e), s.fbt._param("last item", t)], {
									hk: "3q8AmB"
								});
							case i.NONE:
								switch (n) {
									case o.SEMICOLON:
										return s.fbt._("{previous item}; {last item}", [s.fbt._param("previous item", e), s.fbt._param("last item", t)], {
											hk: "1h77rJ"
										});
									default:
										return s.fbt._("{list of items}, {last item}", [s.fbt._param("list of items", e), s.fbt._param("last item", t)], {
											hk: "3Q0iaX"
										})
								}
								default:
									d(!1, "Invalid conjunction %s provided to intlList", r)
						}
					}(c, a, t || i.AND, r || o.COMMA)
				},
				c = r("./src/lib/timezone/index.ts"),
				u = r("./src/reddit/helpers/isArrayEqual.ts"),
				l = r("./src/reddit/helpers/ordinal/index.ts"),
				b = r("./src/reddit/models/ScheduledPost/index.ts");
			const f = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				p = (e, t) => {
					if (e && t) {
						const r = Object(c.f)(h(e, t)),
							n = f(r);
						return s.fbt._("At {time}", [s.fbt._param("time", n)], {
							hk: "25s5Tg"
						})
					}
					return s.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				m = e => e.slice(0, 5),
				h = (e, t) => `${e}T${m(t)}:00`,
				O = e => {
					const [t, r] = e.split("T");
					return [t, m(r)]
				},
				y = e => {
					const [t, r] = O(e);
					if (t && r) {
						const e = Object(c.f)(h(t, r));
						return f(e)
					}
					return ""
				},
				_ = e => {
					const t = Object(c.d)(e);
					let r, s = e;
					if (t) {
						r = t.offset, s = `(GMT${Object(c.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: s,
						offset: r
					}
				},
				g = e => "string" == typeof e,
				j = e => {
					const t = new Date,
						r = e - t.getDay();
					return t.setDate(t.getDate() + r), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				E = e => {
					const t = (e => {
						const [t, r] = O(e);
						if (t && r) {
							return Object(c.f)(h(t, r)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === b.d.Hourly) return 2 === e.interval ? s.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? s.fbt._("Every {hour interval} hours", [s.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : s.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === b.d.Daily) return 2 === e.interval ? s.fbt._("Every other day at {start time}", [s.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? s.fbt._("Every {day interval} days at {start time}", [s.fbt._param("day interval", e.interval.toString()), s.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : s.fbt._("Every day at {start time}", [s.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === b.d.Weekly) {
						const r = (e => a(e.map(b.l).sort((e, t) => e - t).map(j), i.AND, o.COMMA))(e.byWeekDays);
						return 2 === e.interval ? s.fbt._("Every other week on {days of week } at {start time}", [s.fbt._param("days of week ", r), s.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? s.fbt._("Every {interval} weeks on {days of week} at {start time}", [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of week", r), s.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : s.fbt._("Every week on {days of week} at {start time}", [s.fbt._param("days of week", r), s.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const r = (e => a(e.sort((e, t) => e - t).map(l.a), i.AND, o.COMMA))(e.byMonthDays);
					return 2 === e.interval ? s.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", r), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? s.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [s.fbt._param("interval", e.interval.toString()), s.fbt._param("days of month", r), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : s.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [s.fbt._param("days of month", r), s.fbt._plural(e.byMonthDays.length), s.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				S = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = b.b);
					const r = Object(c.f)(e.publishAt),
						s = Object(b.r)(r.getDay()),
						n = r.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== s && (t = b.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== n && (t = b.b), {
						recurrenceInfo: e.frequency ? {
							frequency: e.frequency,
							byMonthDays: e.byMonthDays,
							byWeekDays: e.byWeekDays,
							interval: e.interval
						} : null,
						frequencyOption: t,
						submitDate: e.publishAt,
						timezoneName: e.clientTimezone
					}
				},
				P = (e, t) => {
					if (!e && t || e && !t) return !1;
					if (!e && !t) return !0;
					for (const r in e) {
						if (!t) return !1;
						if (e.hasOwnProperty(r)) {
							if (Array.isArray(e[r]) && (!Array.isArray(t[r]) || !Object(u.a)(e[r], t[r]))) return !1;
							if (e[r] !== t[r]) return !1
						}
					}
					return !0
				}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				d = r("./src/reddit/actions/economics/me/constants.ts");
			const i = {};
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.a: {
							const r = t.payload.claimPoints || {},
								s = Object.keys(r).reduce((t, s) => (t[s] = {
									...e[s],
									availableClaims: r[s]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (s[t] = s[t] || {
									availableClaims: []
								}, s[t].isClaiming = !0)
							}), s
						}
						case n.b:
						case n.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === n.b
								}
							};
						default:
							return e
					}
				},
				a = r("./src/reddit/actions/governance/constants.ts");
			const c = 15e4,
				u = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function b(e) {
				var t, r, s, n, d;
				const i = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					o = null == i ? void 0 : i.contracts,
					a = null == o ? void 0 : o.unlocked,
					u = null !== (s = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== s ? s : e.provider,
					b = !!(null === (n = e.walletProvider) || void 0 === n ? void 0 : n.inTransition),
					f = null == i ? void 0 : i.metaTransactions,
					p = (null == f ? void 0 : f.allowedContractMethods) || {},
					m = (null == f ? void 0 : f.gasLimit) || c,
					h = (null == a ? void 0 : a.decimals) || 0,
					O = "1" + "0".repeat(h);
				return {
					allowedContractMethods: p,
					blockchainProvider: u,
					contractAddress: (null == a ? void 0 : a.address) || "",
					contracts: o,
					decimals: h,
					displayConversion: O,
					gasLimit: m,
					images: e.images || l,
					inTransition: b,
					name: e.name,
					nomenclature: null === (d = e.extra) || void 0 === d ? void 0 : d.nomenclature,
					polls: e.polls,
					symbol: (null == a ? void 0 : a.token) || ""
				}
			}
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.a: {
						const {
							subredditId: r,
							meta: s
						} = t.payload;
						return {
							...e,
							[r]: b(s)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.n: {
						const {
							subredditId: r,
							wallets: s
						} = t.payload, n = Object.keys(s).reduce((t, n) => {
							return {
								...t,
								[n]: {
									...e[n] || {},
									[r]: s[n]
								}
							}
						}, {});
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				claims: o,
				points: f,
				publicWallets: m
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				d = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(i.a)({
				features: {
					crypto: o.a
				}
			});
			const a = (e, t) => {
				var r, s, n;
				return t ? null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[t] : void 0
			};

			function c() {
				const e = Object(n.gb)(),
					t = Object(s.e)(t => Object(n.s)(t, {
						pageLayer: e
					})),
					r = Object(s.e)(e => a(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const u = (e, t) => {
				var r;
				const s = null === (r = a(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return s === d.a.Ethereum || s === d.a.Rinkeby || s === d.a.EthTraderEthereum || s === d.a.EthTraderRinkeby || s === d.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return i
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "j", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "p", (function() {
				return O
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "r", (function() {
				return g
			})), r.d(t, "m", (function() {
				return j
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "b", (function() {
				return v
			}));
			var s = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				n = r("./src/reddit/models/Flair/index.ts"),
				d = r("./src/reddit/models/ScheduledPost/index.ts");
			const i = (e, t) => {
					let {
						subredditId: r
					} = t;
					return ((e, t) => {
						let {
							subredditId: r,
							type: s
						} = t;
						return !!e.posts.scheduledPosts[s].models[r]
					})(e, {
						subredditId: r,
						type: d.g.standalonePosts
					})
				},
				o = (e, t) => {
					let {
						subredditId: r,
						type: s
					} = t;
					return !!e.posts.scheduledPosts[s].pageInfo[r] && e.posts.scheduledPosts[s].pageInfo[r].hasNextPage
				},
				a = (e, t) => {
					let {
						subredditId: r,
						type: s
					} = t;
					return e.posts.scheduledPosts[s].pageInfo[r] ? e.posts.scheduledPosts[s].pageInfo[r].endCursor : null
				},
				c = e => e.posts.scheduledPosts.api.pending,
				u = e => e.posts.scheduledPosts.api.pendingUpdate,
				l = e => e.posts.scheduledPosts.api.error,
				b = {},
				f = [],
				p = (e, t) => {
					let {
						subredditId: r
					} = t;
					return (e.posts.scheduledPosts.standalonePosts.postOrder[r] || f).filter(t => !!(e.posts.scheduledPosts.standalonePosts.models[r] || b)[t]).map(t => e.posts.scheduledPosts.standalonePosts.models[r][t])
				},
				m = (e, t) => {
					let {
						subredditId: r
					} = t;
					return (e.posts.scheduledPosts.recurringPosts.postOrder[r] || f).filter(t => !!(e.posts.scheduledPosts.recurringPosts.models[r] || b)[t]).map(t => e.posts.scheduledPosts.recurringPosts.models[r][t])
				},
				h = (e, t) => {
					let {
						subredditId: r,
						scheduledPostId: s,
						type: n
					} = t;
					return (e.posts.scheduledPosts[n].models[r] || b)[s] || void 0
				},
				O = (e, t) => {
					let {
						subredditId: r,
						scheduledPostId: s
					} = t;
					return h(e, {
						subredditId: r,
						scheduledPostId: s,
						type: d.g.standalonePosts
					})
				},
				y = (e, t) => {
					let {
						subredditId: r,
						scheduledPostId: s
					} = t;
					const n = h(e, {
						subredditId: r,
						scheduledPostId: s,
						type: d.g.recurringPosts
					});
					return n || n
				},
				_ = (e, t) => {
					let {
						subredditId: r,
						scheduledPostId: s
					} = t;
					return O(e, {
						subredditId: r,
						scheduledPostId: s
					}) || y(e, {
						subredditId: r,
						scheduledPostId: s
					})
				},
				g = e => e.creations.formData.scheduledPostId,
				j = e => {
					let {
						scheduledPost: t
					} = e;
					return (e => {
						let {
							flair: t,
							isNsfw: r,
							isSpoiler: d,
							isOriginalContent: i
						} = e;
						const o = [];
						return i && o.push({
							text: "OC",
							type: n.f.Oc
						}), t && o.push(...Object(s.c)(t)), d && o.push({
							text: "spoiler",
							type: n.f.Spoiler
						}), r && o.push({
							text: "nsfw",
							type: n.f.Nsfw
						}), o
					})(t)
				},
				E = e => {
					let {
						scheduledPost: t
					} = e;
					const r = j({
							scheduledPost: t
						}),
						s = r.find(e => e.type === n.f.Richtext);
					return s || (r.find(e => e.type === n.f.Text) || null)
				},
				S = e => e.posts.scheduledPosts[d.g.recurringPosts].editModal.scheduledPostId,
				P = e => e.posts.scheduledPosts[d.g.recurringPosts].editModal.subredditId,
				I = e => e.posts.scheduledPosts.api.pendingUpdate,
				v = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"737d59db38fc"}')
		},
		"./src/redditGQL/operations/GetSubredditCountrySiteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"abd8b9be540b"}')
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"2289de7a3370"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"db256acfa640"}')
		},
		"./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c21fac68db2d"}')
		},
		"./src/redditGQL/operations/ValidateCreateSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"4c43ed06b3c2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~SubredditForkingCTA.2bab5d5ec038e3e53160.js.map