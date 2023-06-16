// https://www.redditstatic.com/desktop2x/Governance~Reddit~SubredditForkingCTA.dadbd5ffe68a04087e1a.js
// Retrieved at 6/16/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~SubredditForkingCTA"], {
		"./src/lib/asyncActions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = e => `${e}_REQUESTED`,
				i = e => `${e}_SUCCEEDED`,
				d = e => `${e}_FAILED`;

			function o(e) {
				const t = s(e),
					r = i(e),
					o = d(e);
				return {
					requestedActionType: t,
					requested: Object(n.a)(t),
					succeededActionType: r,
					succeeded: Object(n.a)(r),
					failedActionType: o,
					failed: Object(n.a)(o)
				}
			}
			var a;
			! function(e) {
				e[e.New = 0] = "New", e[e.Pending = 1] = "Pending", e[e.Succeeded = 2] = "Succeeded", e[e.Failed = 3] = "Failed"
			}(a || (a = {}));
			const c = (e, t, r) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.New,
					s = arguments.length > 1 ? arguments[1] : void 0;
				switch (s.type) {
					case e:
						return n === a.New ? a.Pending : n;
					case t:
						return n === a.Pending ? a.Succeeded : n;
					case r:
						return n === a.Pending ? a.Failed : n;
					default:
						return n
				}
			})
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t),
					i = new n.BigNumber(r.dividedBy(s)),
					d = new n.BigNumber("100").multipliedBy(i);
				return new n.BigNumber(d).toNumber()
			}
		},
		"./src/lib/reCaptchaEnterprise/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			r("./src/lib/reCaptchaEnterprise/reCaptcha.css");
			var n = r("./src/config.ts"),
				s = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const i = e => "object" == typeof e && null !== e,
				d = () => "undefined" != typeof window && i(window) && i(window.grecaptcha) && i(window.grecaptcha.enterprise),
				o = () => d() ? window.grecaptcha.enterprise : void 0,
				a = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				c = e => Object(s.a)(a(e), d),
				u = e => new Promise(t => e.ready(t));
			var l, b = r("./node_modules/ts-error/lib/cjs.js"),
				p = r.n(b);
			class MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError extends p.a {
				constructor() {
					super("reCaptcha Enterprise site key is not set")
				}
			}
			class ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError extends p.a {
				constructor() {
					super("reCaptcha Enterprise client is not ready")
				}
			}
			class ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError extends p.a {
				constructor() {
					super("reCaptcha Enterprise client is not available")
				}
			}! function(e) {
				e.PageLoad = "PAGE_LOAD", e.PostSubmit = "post_submit"
			}(l || (l = {}));
			var f = l;
			const m = new class {
				constructor() {
					var e = this;
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.a.reCaptchaEnterprise.siteKey,
						r = arguments.length > 1 ? arguments[1] : void 0;
					this.siteKey = t, this.isReady = !1, this.hasSiteKey = () => !!this.siteKey, this.hasClient = () => !!this.instance, this.setInstance = e => {
						e && (this.instance = e, this.isReady = !1)
					}, this.scriptUrl = () => a(this.siteKey), this.ensureSiteKey = () => {
						if (!this.hasSiteKey) throw new MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError
					}, this.ensureClient = () => {
						const e = this.instance;
						if (!e) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
						return e
					}, this.waitUntilClientIsReady = async () => {
						const e = this.ensureClient();
						return await u(e), this.isReady = !0, e
					}, this.ensureClientIsReady = () => {
						const e = this.ensureClient();
						if (!this.isReady) throw new ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError;
						return e
					}, this.loadScript = async function() {
						let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						if (!e.instance || t) {
							e.ensureSiteKey(), await c(e.siteKey);
							const t = o();
							if (!t) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
							e.setInstance(t)
						}
						e.isReady || await e.waitUntilClientIsReady()
					}, this.execute = async e => {
						this.ensureSiteKey();
						const t = this.ensureClientIsReady(),
							r = await t.execute(this.siteKey, e);
						if (e.fast) {
							return JSON.parse(r)[1]
						}
						return r
					}, this.setInstance(r || o())
				}
			};
			t.b = m
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, r) {},
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
				return v
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "f", (function() {
				return P
			}));
			var n = r("./node_modules/@sentry/minimal/esm/index.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/GetSubredditCountrySiteSettings.json"),
				o = r("./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json");
			const a = e => ({
				input: {
					subredditId: e.subredditId,
					countryCode: e.countryCode || "",
					languageCode: e.languageCode || ""
				}
			});
			var c = async (e, t) => Object(i.a)(e, {
				...o,
				variables: a(t)
			}), u = r("./node_modules/fbt/lib/FbtPublic.js"), l = r("./src/reddit/models/Toast/index.ts"), b = r("./node_modules/reselect/es/index.js"), p = r("./src/reddit/constants/experiments.ts"), f = r("./src/reddit/helpers/chooseVariant/index.ts"), m = r("./src/reddit/selectors/user.ts");
			const h = Object(b.a)(e => Object(f.c)(e, {
				experimentEligibilitySelector: m.S,
				experimentName: p.bc
			}), e => e === p.Xd);
			var O = r("./src/reddit/actions/toaster.ts");
			const y = "SUBREDDIT_COUNTRY_SITE__LOADED",
				_ = "SUBREDDIT_COUNTRY_SITE__CHANGED",
				g = "SUBREDDIT_COUNTRY_SITE__UPDATE_SUCCESS",
				E = Object(s.a)(y),
				j = Object(s.a)(g),
				S = Object(s.a)(_),
				v = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					var o;
					if (!e) return;
					const a = await (async (e, t) => Object(i.a)(e, {
							...d,
							variables: {
								subredditId: t
							}
						}))(s(), e),
						c = a.body;
					a && a.ok && c && t(E({
						subredditId: e,
						subredditCountrySite: null === (o = c.data) || void 0 === o ? void 0 : o.subredditInfoById.countrySiteSettings
					}))
				}, C = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					if (!e) return;
					const d = await c(i(), {
						subredditId: e,
						countryCode: t.countryCode,
						languageCode: t.languageCode
					});
					if (!d.ok) return r(Object(O.f)({
						kind: l.b.Error,
						text: u.fbt._("Something went wrong", null, {
							hk: "2PnKbu"
						}),
						duration: 5e3
					}));
					const o = d.body;
					r(j({
						subredditId: e,
						subredditCountrySite: o.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
					}))
				}, P = (e, t) => async (r, s, i) => {
					let {
						gqlContext: d
					} = i;
					if (!e || !h(s())) return;
					const o = {
							subredditId: e,
							countryCode: "",
							languageCode: t
						},
						a = await c(d(), o);
					if (a.ok) {
						const t = a.body;
						r(j({
							subredditId: e,
							subredditCountrySite: t.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
						}))
					} else n.l(e => {
						e.setExtra("subredditCountryLanginfo", o), n.c(a.error)
					})
				}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				i = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
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
				return p
			})), r.d(t, "l", (function() {
				return f
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
				return E
			})), r.d(t, "t", (function() {
				return j
			})), r.d(t, "u", (function() {
				return S
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "w", (function() {
				return C
			})), r.d(t, "x", (function() {
				return P
			}));
			const n = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				i = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				d = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				o = "POLL_VOTE_SUCCESS",
				a = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				c = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				m = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				O = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				y = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				g = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				E = "GOVERNANCE__TRANSFER_PENDING",
				j = "GOVERNANCE__TRANSFER_SUCCESS",
				S = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				v = "GOVERNANCE__WALLETS_FETCH_PENDING",
				C = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				P = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = r("./src/reddit/models/Toast/index.ts");

			function d(e, t) {
				e(Object(n.f)({
					duration: 5e3,
					kind: i.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "e", (function() {
				return L
			})), r.d(t, "h", (function() {
				return U
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/post.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/config.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/reddit/models/Poll/index.ts"),
				b = r("./src/redditGQL/operations/PollVote.json"),
				p = r("./src/reddit/endpoints/governance/requester.ts");
			var f = r("./src/reddit/endpoints/governance/wallet.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/models/Vote/index.ts"),
				O = r("./src/reddit/selectors/crypto/points.ts"),
				y = r("./src/reddit/actions/governance/constants.ts"),
				_ = r("./src/reddit/actions/governance/errorToast.ts");
			const g = Object(s.a)(y.b),
				E = Object(s.a)(y.c),
				j = Object(s.a)(y.e),
				S = (Object(s.a)(y.f), Object(s.a)(y.g), Object(s.a)(y.h)),
				v = Object(s.a)(y.i),
				C = Object(s.a)(y.j),
				P = Object(s.a)(y.k),
				I = Object(s.a)(y.q),
				k = Object(s.a)(y.r),
				w = Object(s.a)(y.s),
				x = Object(s.a)(y.t),
				A = Object(s.a)(y.u),
				N = Object(s.a)(y.v),
				T = Object(s.a)(y.w),
				R = Object(s.a)(y.x),
				D = (e, t) => async (r, n, s) => {
					let i, {
							apiContext: d,
							gqlContext: a
						} = s,
						f = n().polls.models[e];
					if (r(C({
							pollId: e
						})), (i = f.type === l.a.GA ? await ((e, t, r) => Object(u.a)(e, {
								...b,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(a(), e, t) : await
							function(e, t, r, n) {
								return Object(p.a)(e, {
									method: "put",
									endpoint: `${c.a.metaUrl}/polls/${t}/${r}/votes/me/${n}`
								})
							}(d(), f.subredditId, e, t)).ok) {
						if (f.type === l.a.GA) {
							const {
								options: e
							} = i.body.data.updatePostPollVoteState.poll;
							r(j({
								pollId: f.id,
								optionId: t,
								options: e
							}))
						} else r(P(i.body));
						const s = n();
						if ((f = s.polls.models[e]) && Object(l.d)(f)) {
							const {
								postId: e
							} = f, t = s.posts.models[e];
							t && t.voteState === h.a.notVoted && r(Object(o.ib)(e))
						}
					} else r(v({
						pollId: e,
						error: i.error || i.errors[0].message
					})), Object(_.a)(r, i.error || i.errors[0].messsage)
				}, L = (e, t) => async (r, s, o) => {
					let {
						apiContext: u
					} = o;
					var l;
					r(w());
					const b = s().transfers.communityPoints.contentId || void 0,
						f = await
					function(e, t) {
						return Object(p.a)(e, {
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
					f.ok ? (r(x({
						...f.body,
						subredditId: e.subredditId
					})), r(Object(a.f)({
						kind: m.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(i.a)(e.amount)), n.fbt._param("tokenName", (null === (l = Object(O.b)(s(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(d.f)())) : (r(I({
						error: f.error
					})), Object(_.a)(r, f.error))
				}, U = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(N());
					const i = await Object(f.a)(s(), e);
					i.ok ? t(T(i.body)) : t(A({
						error: i.error
					}))
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return T
			})), r.d(t, "b", (function() {
				return D
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/formatApiError/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/actions/upload.ts"),
				u = r("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				l = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/makeGqlRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts"),
				m = r("./src/redditGQL/operations/CreateMediaUploadLease.json");
			var h = r("./src/reddit/helpers/correlationIdTracker.ts"),
				O = r("./src/reddit/helpers/imagePreview/index.ts"),
				y = r("./src/reddit/helpers/media/index.ts"),
				_ = r("./src/reddit/models/Upload/index.ts"),
				g = r("./src/reddit/selectors/telemetry.ts"),
				E = r("./src/telemetry/index.ts");
			const j = e => ({
				...g.o(e),
				screen: g.cb(e),
				profile: g.T(e),
				subreddit: g.lb(e)
			});
			var S = r("./src/reddit/helpers/trackers/postComposer.ts"),
				v = r("./src/reddit/models/PostCreationForm/index.ts"),
				C = r("./src/reddit/models/Toast/index.ts"),
				P = r("./src/reddit/selectors/postCreations.ts"),
				I = r("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				k = r("./src/reddit/actions/postCreation/constants.ts"),
				w = r("./src/reddit/actions/postCreation/general.ts");
			const x = Object(o.a)(k.u),
				A = Object(o.a)(k.v),
				N = Object(o.a)(k.t),
				T = e => async (t, r) => {
					t(x());
					const n = e.map(e => {
						let {
							url: r,
							uploadKey: n
						} = e;
						const s = Object(y.b)(Object(y.d)(r), "poster.png");
						return t(U(s, n, !0, !1))
					});
					await Promise.all(n);
					const s = r().uploads,
						i = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return s[t]
						}).find(e => e.status !== _.a.SUCCESS);
					t(i ? N(i.error) : A())
				}, R = (e, t) => ({
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
			const D = "RTE",
				L = "GALLERY",
				U = (e, t, r, s, d, o, u, v) => async (k, w, x) => {
					let {
						apiContext: A,
						gqlContext: N
					} = x;
					const T = Object(P.h)(w()),
						D = Date.now();
					let L = null,
						U = !1,
						M = !1,
						G = !1;
					const q = e => {
						if (!G && d && U) {
							G = !0;
							const r = w(),
								n = Date.now() - D,
								s = Object(h.c)(h.a.PostComposer);
							M ? (async e => {
								let {
									state: t,
									uploadKey: r,
									assetId: n,
									isCanceled: s,
									fileSource: i,
									uploadDuration: d,
									correlationId: o
								} = e;
								const a = t.uploads[r],
									c = s || a.status === _.a.CANCELED,
									{
										file: u,
										url: l,
										metadata: b,
										error: p
									} = a,
									f = b.mimetype || u.type,
									m = f.startsWith("video/"),
									h = a.status === _.a.SUCCESS;
								let O = "";
								p ? O = JSON.stringify(p) : c && (O = "canceled");
								const y = {
									width: b.width,
									height: b.height,
									duration: b.videoDuration && Math.round(1e3 * b.videoDuration)
								};
								Object(E.a)({
									source: "post_composer",
									action: "upload",
									correlationId: o,
									noun: m ? "video" : "image",
									...j(t),
									actionInfo: {
										...g.d(t),
										success: h,
										...O ? {
											reason: O
										} : {}
									},
									media: {
										mimetype: f,
										uploadDuration: d,
										source: i,
										fileName: u.name,
										size: u.size,
										type: m ? "video" : "image",
										...n ? {
											id: n
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
								assetId: L,
								isCanceled: e,
								fileSource: d,
								uploadDuration: n,
								correlationId: s
							}) : S.E(r, t)
						}
					};
					return await k(Object(c.l)(e, t, async h => {
						var _, g, E, j;
						U = !0, Object(c.k)(h.id, () => {
							q(!0)
						});
						const {
							error: S,
							metadata: P
						} = await async function(e, t, r, s, d) {
							const o = s && s.allowedPostTypes,
								a = s && s.name,
								c = await Object(y.h)(e) || e.type,
								u = Object(y.c)(e) || void 0;
							if (!u) return R("UNSUPPORTED_BROWSER");
							const l = {
								localUrl: u,
								mimetype: c,
								size: e.size
							};
							if (!c || !Object(y.k)(c)) return {
								error: {
									type: i.Y
								}
							};
							if (c.startsWith("image/")) {
								if (t && r && o && !o.images) {
									const e = n.fbt._("Images are not allowed in r/{subredditName}", [n.fbt._param("subredditName", a)], {
										hk: "3C2E7Q"
									});
									return R(i.Y, e)
								}
								if ("image/gif" === c) {
									if (e.size > i.eb) return R(i.N)
								} else if (e.size > i.gb) return R(i.W);
								const s = await Object(O.a)(u);
								if (d && (s.width < d || s.height < d)) {
									const e = n.fbt._("Image must be {min_image_width}x{min_image_height} pixels or larger.", [n.fbt._param("min_image_width", d.toString()), n.fbt._param("min_image_height", d.toString())], {
										hk: "2WFKgs"
									});
									return R(i.V, e)
								}
								l.width = s.width, l.height = s.height
							} else if (c.startsWith("video/")) {
								if (e.size > i.kb) return R(i.vc);
								let t;
								try {
									t = await Object(y.j)(u, !0)
								} catch (b) {
									return R(i.Y)
								}
								if (o) {
									const {
										videos: e,
										images: r
									} = o;
									if (r && !e && t.duration > i.lb) {
										const e = n.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [n.fbt._param("subredditName", a)], {
											hk: "46ULiz"
										});
										return R(i.Y, e)
									}
									if (!r && !e) {
										const e = n.fbt._("Videos are not allowed in r/{subredditName}", [n.fbt._param("subredditName", a)], {
											hk: "4uTUZb"
										});
										return R(i.Y, e)
									}
								}
								if (t.duration > i.jb) {
									const e = n.fbt._("Video is too long. Maximum video length is {duration} minutes.", [n.fbt._param("duration", (i.jb / 60).toString())], {
										hk: "20nB6Q"
									});
									return R(i.Y, e)
								}
								if (t.duration < i.rb) {
									const e = n.fbt._("Video is too short. Minimum video length is {duration} seconds.", [n.fbt._param("duration", i.rb.toString())], {
										hk: "49PSW8"
									});
									return R(i.Y, e)
								}
								if (0 === t.height || 0 === t.width) {
									const e = n.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return R(i.Y, e)
								}
								if (t.height < i.sb || t.width < i.tb) {
									const e = n.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [n.fbt._param("min_video_width", i.tb.toString()), n.fbt._param("min_video_height", i.sb.toString())], {
										hk: "2HSUGl"
									});
									return R(i.Y, e)
								}
								if (e.size / t.duration < i.qb) {
									const e = n.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [n.fbt._param("min_bitrate", (i.qb / i.Z).toString())], {
										hk: "1ehgDE"
									});
									return R(i.Y, e)
								}
								l.height = t.height, l.width = t.width, l.videoDuration = t.duration, l.videoFirstFrameUrl = t.firstFrame.dataUrl
							}
							return {
								metadata: l
							}
						}(e, r, s, T, v);
						if (S || !P) return {
							error: S
						};
						if (k(Object(c.m)({
								key: t,
								metadata: {
									fileSource: d,
									...P
								}
							})), M = !0, o && o(), u) {
							const e = P.mimetype,
								t = e && i.T[e];
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
										n = Object(I.a)({
											uploadLeaseUrl: r,
											uploadLeaseHeaders: null === (g = t.data.createMediaUploadLease) || void 0 === g ? void 0 : g.uploadLease.uploadLeaseHeaders
										});
									return L = (null === (E = t.data.createMediaUploadLease) || void 0 === E ? void 0 : E.mediaId) || null, {
										uploadLease: n
									}
								} {
									const t = null === (j = e.body.data.createMediaUploadLease) || void 0 === j ? void 0 : j.errors;
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
							return k(Object(a.f)({
								kind: C.b.Error,
								text: n.fbt._("Only .jpeg and .png image types are are allowed", null, {
									hk: "30Ms4V"
								}),
								duration: 6e3
							})), {
								error: void 0
							}
						}
						const w = e.name,
							x = await (async (e, t, r) => Object(l.a)(Object(p.a)(e, [f.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: i.ob.POST,
								data: {
									filepath: t,
									mimetype: r
								}
							}))(A(), w, P.mimetype);
						return x.ok ? (L = x.body.asset.asset_id, {
							uploadLease: x.body.args
						}) : {
							error: x.error || void 0
						}
					}, !0)), q(!1), w().uploads[t] || null
				}, M = (e, t) => async (r, n) => {
					const s = n().uploads[e];
					s && !Object(_.c)(s) && await r(U(s.file, s.key, t, !1, s.metadata.fileSource, void 0))
				}, G = (e, t, r, i, o, c) => async (u, l) => {
					const b = e.map((e, n) => new Promise(async n => {
							const d = Object(_.d)(r, Object(s.a)().slice(-6));
							await u(U(e, d, i, !0, t, () => n({
								uploadKey: d,
								isValid: !0
							}), o, c)), n({
								uploadKey: d,
								isValid: !1
							})
						})),
						p = await Promise.all(b),
						f = p.map(e => e.uploadKey);
					return u(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (r, s) => {
							const {
								uploads: i
							} = s(), o = e.map(e => i[e]).filter(e => e.status === _.a.FAILED && !e.metadata.mimetype).map(e => e.error), c = o.length > t ? t - 1 : o.length, u = o.length - c;
							o.slice(0, c).forEach(e => r(Object(a.f)({
								duration: a.a,
								kind: C.b.Error,
								text: Object(d.a)(e)
							}))), u > 0 && r(Object(a.f)({
								duration: a.a,
								kind: C.b.Error,
								text: n.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [n.fbt._plural(u, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(f)), p.filter(e => e.isValid).map(e => e.uploadKey)
				}, q = (e, t) => async (r, s) => {
					const i = s(),
						d = Object(P.Z)(i),
						{
							items: o
						} = d,
						l = !o.length && 1 === e.length,
						b = Object(P.P)(i) && !l;
					let p = !1,
						f = e;
					if (b) {
						if (Object(v.x)(d)) return void r(Object(a.f)({
							kind: C.b.Error,
							text: n.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						f.some(e => Object(y.n)(e.type)) && r(Object(a.f)({
							duration: a.a,
							kind: C.b.Error,
							text: n.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), f = f.filter(e => Object(y.m)(e.type));
						const e = Math.max(0, u.b - o.length);
						f.length > e && (r(Object(a.f)({
							kind: C.b.Error,
							text: n.fbt._("You have hit the limit of {images_limit} images", [n.fbt._param("images_limit", `${u.b}`)], {
								hk: "6M4kX"
							})
						})), f = f.slice(0, e))
					} else f = f.slice(0, 1), p = !0, r(Object(c.j)(L, !0));
					const m = await r(G(f, t, L, !0));
					if (!m.length) return;
					const h = m.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						O = 0 === o.length;
					r(Object(w.d)({
						...d,
						items: p ? h : [...o, ...h],
						selectedKey: O ? m[0] : m[m.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return q
			})), r.d(t, "f", (function() {
				return F
			})), r.d(t, "e", (function() {
				return K
			})), r.d(t, "c", (function() {
				return J
			})), r.d(t, "d", (function() {
				return ee
			})), r.d(t, "a", (function() {
				return te
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/reCaptchaEnterprise/index.ts"),
				d = r("./src/telemetry/index.ts"),
				o = r("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				a = r("./src/reddit/actions/governance/index.ts"),
				c = r("./src/reddit/actions/pages/subreddit/index.ts"),
				u = r("./src/reddit/actions/postDraft.ts"),
				l = r("./src/reddit/actions/reCaptchaEnterprise.ts"),
				b = r("./src/reddit/actions/scheduledPosts/index.ts"),
				p = r("./src/reddit/actions/urlRequested.ts"),
				f = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				m = r("./src/config.ts"),
				h = r("./src/lib/convertToCamelCase/index.ts"),
				O = r("./src/lib/makeApiRequest/index.ts"),
				y = r("./src/reddit/endpoints/post/create.ts");
			var _ = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				g = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				E = r("./src/reddit/featureFlags/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				S = r("./src/reddit/helpers/scheduledPosts/index.ts"),
				v = r("./src/reddit/helpers/trackers/postComposer.ts"),
				C = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				P = r("./src/reddit/models/Poll/index.ts"),
				I = r("./src/reddit/models/Post/index.ts"),
				k = r("./src/reddit/models/PostCreationForm/index.ts"),
				w = r("./src/reddit/models/ScheduledPost/index.ts"),
				x = r("./src/reddit/models/User/index.ts"),
				A = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				N = r("./src/reddit/selectors/postCreations.ts"),
				T = r("./src/reddit/selectors/postDraft.ts"),
				R = r("./src/reddit/selectors/postGuidance.ts"),
				D = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				L = r("./src/reddit/selectors/user.ts"),
				U = r("./src/reddit/actions/postCreation/constants.ts"),
				M = r("./src/reddit/actions/postCreation/general.ts"),
				G = r("./src/reddit/actions/postCreation/mediaUpload.ts");
			const q = Object(s.a)(U.w),
				F = Object(s.a)(U.Q),
				V = Object(s.a)(U.o),
				B = Object(s.a)(U.y),
				$ = Object(s.a)(U.eb),
				K = Object(s.a)(U.K),
				W = Object(s.a)(U.a),
				H = Object(s.a)(U.G),
				z = e => `/r/${e}/about/${w.s}`,
				Q = (e, t) => {
					const r = e || {
							duration: n.D,
							options: []
						},
						{
							govType: s,
							newSubreddit: i,
							newTopMod: d
						} = Object(N.u)(t),
						o = {
							...r
						};
					return s && (o.type = s), o.type === P.a.ReplaceTopMod ? (o.params = {
						userName: d
					}, o.options = P.f[P.a.ReplaceTopMod]()) : o.type === P.a.Spinoff ? (o.params = {
						subreddit: i
					}, o.options = P.f[P.a.Spinoff](i)) : o.options = o.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), o
				},
				Y = e => {
					const t = e.uploads,
						r = Object(N.Z)(e),
						s = Object(N.a)(e),
						i = Object(N.lb)(e);
					if (s === n.bc.POST) return f.a.getPendingThumbnailUploads(i, t);
					if (s === n.bc.MEDIA && r && r.items.length) {
						const {
							video: e
						} = r.items[0];
						if (e && e.thumbnail && !t[k.n]) return [{
							...e.thumbnail,
							uploadKey: k.n
						}]
					}
				},
				J = (e, t) => async (r, s, i) => {
					let {
						apiContext: d
					} = i, o = s();
					const {
						pending: a
					} = o.creations.api.post.submit, c = Object(T.g)(o);
					if (a || c) return;
					r(H(e)), o = s();
					const l = Object(N.a)(o),
						b = E.d.rteVideoPoster(o),
						p = Y(o),
						f = l === n.bc.MEDIA;
					p && (b || f) && (await r(G.f(p)), Y(s())) || (e === k.r.Draft ? await r(Object(u.r)(t.draftId)) : e === k.r.ScheduledPost && Object(D.r)(o) ? await r(X(t)) : e === k.r.ScheduledPost ? await r(Z(t)) : await r(ee(t)))
				}, X = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r(),
						o = Object(N.gb)(i),
						a = Object(N.hb)(i, e),
						c = Object(N.h)(i),
						u = Object(D.r)(i);
					if (!(a && c.id && o && Object(S.f)(u))) return;
					const l = c.id,
						f = Object(D.a)(i, {
							subredditId: l,
							scheduledPostId: u
						});
					if (f && Object(d.a)(Object(C.r)(f)(i)), t(q(a)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(N.x)(r()))) return;
					if (e.postGuidanceValidationPending && (await e.postGuidanceValidationPending, Object(R.c)(r()))) return;
					const {
						isPoll: m,
						polls: h
					} = Object(N.u)(i), O = Q(h, i), y = {
						...Object(_.e)({
							poll: m ? O : void 0,
							submission: a,
							schedule: o,
							subredditId: c.id,
							scheduledPostId: u
						})
					}, E = await Object(g.a)(s(), y);
					if (E.ok) return t(Object(b.e)({
						subredditId: c.id
					})), void t(Object(p.a)(z(c.name), !1));
					const j = E.error;
					t(V(j))
				}, Z = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r(),
						o = Object(N.gb)(i),
						a = Object(N.hb)(i, e),
						c = Object(N.h)(i),
						u = Object(D.b)(i);
					if (!a || !c.id || !o) return;
					if (t(q(a)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(N.x)(r()))) return;
					if (e.postGuidanceValidationPending && (await e.postGuidanceValidationPending, Object(R.c)(r()))) return;
					const {
						isPoll: l,
						polls: f
					} = Object(N.u)(i), m = Q(f, i), h = {
						duration: m.duration,
						options: m.options
					}, O = {
						...Object(_.d)({
							poll: l ? h : void 0,
							submission: a,
							schedule: o,
							subredditId: c.id
						}),
						creationToken: u
					}, y = await Object(_.a)(s(), O);
					if (y.ok) {
						t(Object(b.e)({
							subredditId: c.id
						}));
						const e = y.body.data.createScheduledPost.scheduledPost;
						return e && Object(d.a)(Object(C.o)(Object(j.d)(e))(i)), void t(Object(p.a)(z(c.name), !1))
					}
					const g = y.error;
					t(V(g))
				}, ee = e => async (t, r, s) => {
					let {
						apiContext: d
					} = s;
					const u = r(),
						b = Object(N.hb)(u, e),
						{
							isPoll: f,
							polls: _
						} = Object(N.u)(u),
						g = Q(_, u);
					if (!b) return;
					if (t(q(b)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(N.x)(r()))) return;
					if (e.postGuidanceValidationPending && (await e.postGuidanceValidationPending, Object(R.c)(r()))) return;
					let j;
					t(Object(l.b)({
						action: i.a.PostSubmit,
						catchAndLogError: !0
					}));
					const S = f && E.d.spPolls(u);
					if ((j = S ? await
							function(e, t, r) {
								const s = t.destSubreddit.id;
								return Object(O.a)(e, {
									method: n.ob.POST,
									endpoint: `${m.a.metaUrl}/polls/${s}`,
									type: "json",
									data: {
										poll: r,
										subredditId: s,
										...Object(h.a)(Object(y.d)(t))
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
										n = await Object(y.e)(r, t);
									if (n.ok) {
										return {
											body: {
												...n.body,
												poll: e.body.poll
											},
											ok: !0,
											status: e.status
										}
									}
									return {
										error: n.body,
										ok: !1,
										status: e.status
									}
								})
							}(d(), b, g) : f ? await Object(y.b)(d(), {
								...b,
								kind: k.p.POLL,
								poll: g
							}) : b.kind === k.p.GALLERY ? await Object(y.a)(d(), b) : await Object(y.c)(d(), b)).ok) {
						const e = Object(L.m)(u),
							r = j.body;
						t(F({
							draftId: b.draftId,
							response: r
						})), S && t(Object(a.c)({
							poll: r.poll
						}));
						const n = Object(A.b)(u);
						b.kind !== k.p.LINK && b.kind !== k.p.RICH_TEXT && b.kind !== k.p.MARKDOWN || f || !n || t(Object(o.c)());
						const s = (r.path || `/user/${Object(x.e)(e)}/submitted`).replace(/^\/r\/u_/, "/user/");
						t(Object(c.subredditInvalidateListing)(b.destSubreddit.name)), t(Object(p.a)(s, !1))
					} else {
						if (f) {
							const e = j.error;
							t(B(e))
						}
						const e = j.error;
						te(t, e)
					}
					const C = Object(M.o)(b.kind),
						P = j.ok && j.body && j.body.id && Object(I.y)(j.body.id),
						w = r();
					v.C(w, C, P, e.correlationId)
				}, te = (e, t) => {
					t.type === n.K.BAD_CAPTCHA_ERROR ? e(W()) : t.type === n.K.VALIDATION_ERROR ? e($(t)) : t.type === n.K.SUBMIT_VALIDATION_ERROR ? e(K(t)) : e(V(t))
				}
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "e", (function() {
				return E
			}));
			var n = r("./src/lib/asyncActions/index.ts"),
				s = r("./src/lib/constants/euCookiePolicy.ts"),
				i = r("./src/lib/reCaptchaEnterprise/index.ts"),
				d = r("./src/lib/sentry/index.ts");

			function o(e) {
				return t => async (r, n, s) => {
					const i = n();
					if (e(i)) return t(r, n, s)
				}
			}
			var a = r("./node_modules/lodash/every.js"),
				c = r.n(a),
				u = r("./src/reddit/constants/experiments.ts"),
				l = r("./src/reddit/featureFlags/index.ts"),
				b = r("./src/reddit/featureFlags/utils.ts"),
				p = r("./src/reddit/helpers/chooseVariant/index.ts"),
				f = r("./src/reddit/selectors/meta.ts");
			const m = e => l.d.reCaptchaEnterprise(e) && !Object(f.d)(e),
				h = e => !!Object(p.c)(e, {
					experimentEligibilitySelector: Object(b.d)(Object(b.b)(...s.c)),
					experimentName: u.nf
				}),
				O = Object(n.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return o(e => c()([m, h, e => e.tracking.reCaptchaEnterprise.load === n.a.New], t => t(e)))(async t => {
						t(O.requested());
						try {
							await i.b.loadScript(), t(O.succeeded())
						} catch (r) {
							if (t(O.failed()), !e) throw r;
							d.c.withScope(e => {
								Object(d.a)(e, {
									serverLogging: !1
								}), d.c.captureException(r)
							})
						}
					})
				},
				_ = Object(n.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				g = e => o(e => c()([m, h, e => e.tracking.reCaptchaEnterprise.load === n.a.Succeeded], t => t(e)))(async t => {
					t(_.requested());
					try {
						const r = await i.b.execute({
							action: e.action,
							fast: e.fast
						});
						return t(_.succeeded({
							token: r
						})), r
					} catch (r) {
						if (t(_.failed()), e.catchAndLogError) return d.c.withScope(e => {
							Object(d.a)(e, {
								serverLogging: !1
							}), d.c.captureException(r)
						}), "";
						throw r
					}
				}),
				E = Object(n.b)("SEND_RECAPTCHA_TOKEN")
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return s
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "m", (function() {
				return d
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
				return p
			})), r.d(t, "d", (function() {
				return f
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
				return E
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "v", (function() {
				return S
			})), r.d(t, "s", (function() {
				return v
			})), r.d(t, "x", (function() {
				return C
			})), r.d(t, "w", (function() {
				return P
			})), r.d(t, "t", (function() {
				return I
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = "SCHEDULED_POSTS_REQUESTED",
				i = "SCHEDULED_POSTS_LOADED",
				d = "STANDALONE_SCHEDULED_POSTS_LOADED",
				o = "RECURRING_SCHEDULED_POSTS_LOADED",
				a = "SCHEDULED_POSTS_FAILED",
				c = "SCHEDULED_POST_CREATION_SUCCEEDED",
				u = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				l = "SCHEDULED_POST_MUTATE_REQUESTED",
				b = "SCHEDULED_POST_MUTATE_FAILED",
				p = "STANDALONE_POST_MUTATE_SUCCESS",
				f = "RECURRING_POST_MUTATE_SUCCESS",
				m = "RECURRING_POST__EDIT_MODAL_LOAD",
				h = "RECURRING_POST__EDIT_LOAD",
				O = "STANDALONE_POST__EDIT_LOAD",
				y = "SCHEDULED_POST__DELETE_SUCCESS",
				_ = () => n.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				g = () => n.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				E = () => n.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				j = () => n.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				S = () => n.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				v = () => n.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				C = () => n.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				P = () => n.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				I = () => n.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return _
			})), r.d(t, "a", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react-router-redux/es/index.js"),
				i = r("./src/telemetry/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/scheduledPosts/index.ts"),
				a = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/endpoints/scheduledPosts/update.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				b = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				p = r("./src/reddit/models/ScheduledPost/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/routes/postCreation/index.ts"),
				h = r("./src/reddit/selectors/scheduledPosts/index.ts");
			const O = Object(d.a)(a.n),
				y = Object(d.a)(a.b),
				_ = (e, t) => async (r, n, i) => {
					const d = Object(h.a)(n(), {
						scheduledPostId: t,
						subredditId: e
					});
					d && (await r(Object(s.b)(Object(m.c)(d.subreddit.name, d.collectionId))), r((Object(p.q)(d) ? y : O)(d)))
				}, g = (e, t) => {
					Object(p.q)(t) ? e(Object(o.d)({
						scheduledPost: t
					})) : e(Object(o.h)({
						scheduledPost: t
					}))
				}, E = (e, t, r) => async (s, d, m) => {
					let {
						gqlContext: O
					} = m;
					s(Object(o.g)());
					const y = Object(h.a)(d(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (y && Object(p.q)(y) && Object(i.a)(Object(b.u)()(d(), y)), !y) return void s(Object(o.f)({
						message: n.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(r).length) return void g(s, y);
					const _ = await Object(u.a)(O(), {
							...r,
							id: t
						}),
						j = _.body;
					if (!(_.ok && j && j.data && j.data.updateScheduledPost && j.data.updateScheduledPost.ok && j.data.updateScheduledPost.scheduledPost)) return s(Object(o.f)({
						message: _.error && _.error.fields && _.error.fields.length && _.error.fields[0].msg || n.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void s(Object(c.f)(Object(c.e)(a.t(), f.b.Error, a.s(), E(e, t, r))));
					s(Object(c.f)(Object(c.e)(a.w(), f.b.SuccessCommunity))), g(s, Object(l.d)(j.data.updateScheduledPost.scheduledPost))
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
				return E
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return N
			}));
			var n = r("./src/lib/assertNever.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/scheduledPosts/constants.ts"),
				d = r("./src/reddit/actions/scheduledPosts/edit.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/scheduledPosts/index.ts"),
				c = r("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				u = r("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = r("./src/reddit/models/ScheduledPost/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/scheduledPosts/index.ts"),
				f = r("./src/telemetry/index.ts");
			const m = 25,
				h = 1e4,
				O = Object(s.a)(i.g),
				y = Object(s.a)(i.k),
				_ = Object(s.a)(i.j),
				g = Object(s.a)(i.o),
				E = Object(s.a)(i.d),
				j = Object(s.a)(i.f),
				S = Object(s.a)(i.m),
				v = Object(s.a)(i.a),
				C = Object(s.a)(i.c),
				P = Object(s.a)(i.e),
				I = Object(s.a)(i.h),
				k = (e, t) => {
					e(P()), e(Object(o.f)(Object(o.e)(i.r(), b.b.Error, i.s(), w(t))))
				},
				w = e => {
					let {
						subredditId: t,
						includeStandalone: r = {
							standaloneFirst: m
						},
						includeRecurring: n = {
							recurringFirst: h
						},
						...s
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: o
						} = d;
						if (Object(p.h)(i(), {
								subredditId: t
							})) return;
						e(O());
						const u = {
								subredditId: t,
								includeRecurring: n,
								includeStandalone: r,
								...s
							},
							l = await Object(a.b)(o(), u);
						Object(a.f)(l, u) ? A(e, Object(c.e)(l.body.data), u) : k(e, u)
					}
				},
				x = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r();
					if (!Object(p.h)(i, {
							subredditId: e
						})) return t(w({
						subredditId: e
					}));
					if (!Object(p.g)(i, {
							subredditId: e,
							type: l.g.standalonePosts
						})) return;
					const d = Object(p.c)(i, {
						subredditId: e,
						type: l.g.standalonePosts
					});
					if (!d) return;
					t(O());
					const o = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: m,
								standaloneAfter: d
							}
						},
						u = await Object(a.b)(s(), o);
					u.ok ? A(t, Object(c.e)(u.body.data), o) : t(P())
				}, A = (e, t, r) => {
					Object(c.b)(t) ? e(j(t)) : Object(c.a)(t) ? e(v(t)) : Object(c.c)(t) ? e(S(t)) : k(e, r)
				}, N = (e, t) => async (r, s, i) => {
					const o = {},
						a = s();
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
							return Object(n.a)(e)
					}
					Object(f.a)(Object(u.t)(e, o[e], Object(l.q)(t))(a)), r(Object(d.a)(t.subreddit.id, t.id, o))
				}
		},
		"./src/reddit/actions/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return x
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "f", (function() {
				return M
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "h", (function() {
				return q
			})), r.d(t, "i", (function() {
				return F
			}));
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/postCreation/general.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/postCreation/submit.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				l = r("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				b = r("./src/reddit/constants/experiments.ts"),
				p = r("./src/reddit/constants/modals.ts"),
				f = r("./src/lib/makeApiRequest/index.ts"),
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
			var E = r("./src/reddit/helpers/correlationIdTracker.ts"),
				j = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				S = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				v = r("./src/reddit/selectors/meta.ts"),
				C = r("./src/reddit/selectors/posts.ts"),
				P = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				k = r("./src/telemetry/index.ts"),
				w = r("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const x = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				A = "SUBREDDIT__CREATE_PENDING",
				N = "SUBREDDIT__CREATE_SUCCEEDED",
				T = "SUBREDDIT__CREATE_FAILED",
				R = "SUBREDDIT__CREATE_CLEARED",
				D = Object(i.a)(A),
				L = Object(i.a)(N),
				U = Object(i.a)(T),
				M = Object(i.a)(R),
				G = Object(i.a)(x),
				q = e => async (t, r, i) => {
					let {
						apiContext: _
					} = i;
					var g;
					const x = r(),
						{
							name: A,
							type: N,
							crosspostId: T
						} = e;
					if (Object(P.l)(x)) return;
					t(D({
						subredditName: A
					}));
					const R = await ((e, t) => Object(f.a)(Object(m.a)(e, [h.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: s.ob.POST,
						data: y(t)
					}))(_(), e);
					if (R.ok) {
						const r = R.body,
							i = r.fullname;
						Object(k.a)(Object(j.d)(N, e, i)(x)), t(L({
							subredditName: A
						}));
						const f = await Object(S.b)(x);
						if (T) {
							const e = Object(C.F)(x, {
								postId: T
							});
							t(Object(d.h)(e.title)), t(Object(d.g)({
								submissionType: s.bc.CROSSPOST
							})), await t(Object(a.d)({
								destSubreddit: {
									...r,
									isProfile: !1
								},
								sourcePostId: T,
								postFieldValidationPending: Promise.resolve()
							})), Object(l.b)(T)
						}
						await t(Object(n.b)(`${r.path}`)), f ? f === b.bf.NewModule && t(Object(c.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (t(Object(o.h)(p.a.POST_FLOW_UPSELL_MODAL_ID)), Object(k.a)(Object(j.g)()(x))), Object(E.b)(E.a.SubredditCreation), t(Object(w.f)(i, null !== (g = Object(I.db)(x)) && void 0 !== g ? g : Object(v.k)(x)))
					} else R.error && Object(k.a)(Object(j.h)(R.error.type, A)(x)), t(U({
						subredditName: A,
						error: R.error
					}))
				}, F = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r(),
						d = {
							name: e
						},
						o = await ((e, t) => Object(_.a)(e, {
							...g,
							variables: t
						}))(s(), {
							input: d
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
						})), r && Object(k.a)(Object(j.h)(r.type, e)(i))
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
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "k", (function() {
				return P
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "j", (function() {
				return x
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/get.js"),
				s = r.n(n),
				i = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/uploadToS3/index.ts"),
				a = r("./src/reddit/models/Upload/index.ts");
			const c = "UPLOAD_PENDING",
				u = "UPLOAD_UPLOADING",
				l = "UPLOAD_METADATA_CHANGED",
				b = "UPLOAD_PROGRESS",
				p = "UPLOAD_SUCCESS",
				f = "UPLOAD_FAILED",
				m = "UPLOAD_CANCELED",
				h = "UPLOAD_REMOVED",
				O = Object(d.a)(c),
				y = Object(d.a)(u),
				_ = Object(d.a)(l),
				g = Object(d.a)(b),
				E = Object(d.a)(p),
				j = Object(d.a)(f),
				S = Object(d.a)(m),
				v = Object(d.a)(h),
				C = new Map,
				P = (e, t) => {
					const r = C.get(e) || [];
					r.push(t), C.set(e, r)
				},
				I = (e, t) => {
					const r = C.get(e);
					r && r.forEach(r => r(e, t)), C.delete(e)
				},
				k = function(e, t, r) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (d, c) => {
						const u = t;
						if (c().uploads[u] && Object(a.c)(c().uploads[u])) return;
						const l = Object(i.a)(),
							b = () => {
								const e = c().uploads[u];
								return !e || e.id !== l || e.status === a.a.CANCELED
							};
						d(O({
							key: u,
							id: l,
							file: e
						}));
						const {
							uploadLease: p,
							error: f
						} = await r(c().uploads[u]);
						if (b()) return;
						if (f || !p) return void d(j({
							key: u,
							error: f
						}));
						let m;
						P(l, () => {
							m && m.abort()
						}), d(y({
							key: u
						}));
						const h = await Object(o.a)(e, p, e => (m = e, n && e.on("progress", e => {
							if (!b() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								d(g({
									key: u,
									progress: t
								}))
							}
						}), e));
						if (m = null, !b())
							if (h.ok) {
								const e = decodeURIComponent(h.body.PostResponse.Location);
								d(E({
									key: u,
									url: e
								}))
							} else {
								const e = s()(h, "body.Error.Message.0"),
									t = {
										type: "ERROR",
										...e ? {
											fields: [{
												field: "0",
												msg: e
											}]
										} : {}
									};
								d(j({
									key: u,
									error: t
								}))
							}
					}
				},
				w = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (r, n) => {
						const s = n().uploads[e];
						s && (I(s.id, t), r(t ? v({
							key: e
						}) : S({
							key: e
						})))
					}
				},
				x = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (r, n) => {
						Object.keys(n().uploads).forEach(n => {
							n.startsWith(e) && r(w(n, t))
						})
					}
				}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = 20,
				s = 180
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return d
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
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "n", (function() {
				return y
			}));
			var n, s = r("./src/config.ts"),
				i = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function o(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case n.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					case n.ArbitrumMainnet:
						return "https://a4ba.arbitrum.io/rpc";
					default:
						return `https://meta-api.reddit.com/ethereum/${e}`
				}
			}

			function a(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 5391184;
					case n.ArbitrumNitroDevnet:
						return 421612;
					case n.ArbitrumMainnet:
						return 42170;
					default: {
						const [, t] = e.split(":");
						return t
					}
				}
			}

			function c(e) {
				return e === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, r) {
				return Object(i.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(i.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function b(e, t, r) {
				return await Object(i.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumNova = "ethereum:42170", e.ArbitrumRinkeby = "ethereum:5391184", e.ArbitrumNitroDevnet = "ethereum:421612", e.ArbitrumMainnet = "ethereum:42170", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
			const p = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				f = e => ({
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
				O = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function y(e, t) {
				return await Object(i.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				i = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e, t) {
				return Object(i.a)(e, {
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.ob.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							n = {
								[t.subredditId]: r
							};
						return {
							...e,
							body: n
						}
					}
					return e
				})
			}

			function o(e, t) {
				return Object(i.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.ob.POST,
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
				return E
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "a", (function() {
				return S
			}));
			var n = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/helpers/flair.ts"),
				u = r("./src/reddit/helpers/name/index.ts"),
				l = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				b = r("./src/reddit/models/Poll/index.ts"),
				p = r("./src/reddit/models/Post/index.ts"),
				f = r("./src/reddit/models/PostCreationForm/index.ts"),
				m = r("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function h(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const O = e => {
					switch (e.kind) {
						case f.p.CROSSPOST:
							return f.p.CROSSPOST;
						case f.p.LINK:
							return f.p.LINK;
						case f.p.POLL:
							return f.p.POLL;
						case f.p.MEDIA:
							return e.makeGif ? f.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				y = e => {
					switch (e.kind) {
						case f.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case f.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case f.p.LINK:
						case f.p.MEDIA:
							return {
								url: e.url
							};
						case f.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case f.p.POLL:
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
						discussion_type: e.isChatPost ? p.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						recaptcha_token: e.reCaptchaEnterpriseToken,
						...e.kind !== f.p.POLL ? {
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
						...e.kind === f.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === f.p.MEDIA && e.makeGif ? {
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
							unlist: e.eventSchedule.submitTime === f.j.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				g = e => {
					const t = /comments\/(\w+)\/.*$/.exec(e),
						r = t && t[1];
					return r ? `${s.Ob.Post}_${r}` : ""
				},
				E = async (e, t) => {
					if (!e.ok) return Object(l.b)(e);
					const r = e.body.json.data;
					let s = r.url;
					s || t.kind !== f.p.MEDIA || (s = await ((e, t) => new Promise(r => {
						const n = new WebSocket(e),
							s = e => {
								n.close(), clearTimeout(i), r(e)
							},
							i = setTimeout(() => {
								s("")
							}, t);
						n.onmessage = e => {
							const t = JSON.parse(e.data),
								r = "success" === t.type ? t.payload.redirect : "";
							s(r)
						}, n.onerror = e => {
							s("")
						}
					}))(r.websocket_url, 3e4));
					const i = r.id || g(s),
						d = Object(n.parse)(s).path,
						o = r.drafts_count;
					return {
						...e,
						body: {
							id: i,
							path: d,
							draftsCount: o
						}
					}
				}, j = (e, t) => Object(i.a)(Object(d.a)(e, [o.a]), {
					endpoint: Object(m.a)(Object(a.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
					method: s.ob.POST,
					data: _(t),
					type: "json"
				}).then(e => E(e, t)), S = (e, t) => Object(i.a)(Object(d.a)(e, [o.a]), {
					endpoint: Object(m.a)(Object(a.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
					method: s.ob.POST,
					data: {
						..._(t),
						items: t.galleryItems.map(e => ({
							caption: e.caption,
							outbound_url: e.url,
							media_id: e.assetId
						}))
					},
					type: "json"
				}).then(e => E(e, t));
			t.c = (e, t) => Object(i.a)(Object(d.a)(e, [o.a]), {
				endpoint: Object(m.a)(Object(a.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.ob.POST,
				data: _(t)
			}).then(async e => await E(e, t))
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "a", (function() {
				return j
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/reddit/helpers/flair.ts"),
				i = r("./src/reddit/helpers/richTextJson/index.ts"),
				d = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/models/PostCreationForm/index.ts"),
				a = r("./src/reddit/models/ScheduledPost/index.ts"),
				c = r("./src/redditGQL/operations/CreateScheduledPost.json"),
				u = r("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const l = (e, t) => Object(n.a)(e, {
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
				p = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => b(e, a.g.standalonePosts))(e)) && !(t.includeRecurring && !(e => b(e, a.g.recurringPosts))(e))),
				f = e => {
					let {
						poll: t,
						schedule: r,
						submission: n,
						subredditId: i
					} = e;
					return {
						collectionId: n.collectionId || "",
						discussionType: n.isChatPost ? d.b.Chat : d.b.Comment,
						isContestMode: n.isContestMode,
						isPostAsMetaMod: n.isPostAsMetaMod,
						isSpoiler: n.isSpoiler,
						isNsfw: n.isNSFW,
						poll: t && E(t),
						title: n.title,
						isOriginalContent: n.isOC,
						flair: n.flair ? {
							id: n.flair.templateId,
							text: Object(s.g)(n.flair)
						} : {},
						sticky: n.sticky,
						subredditId: i,
						suggestedCommentSort: n.suggestedSort,
						isSendReplies: n.sendReplies,
						...m(r),
						..._(n),
						assetIds: g(n)
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
						scheduledPostId: n,
						submission: s,
						subredditId: i
					} = e;
					const d = f({
						poll: t,
						schedule: r,
						submission: s,
						subredditId: i
					});
					return {
						id: n,
						...d,
						flair: Object.keys(d.flair || {}).length ? {
							...d.flair
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
						t = Object(i.d)(r)
					}
					return t
				},
				E = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				j = (e, t) => Object(n.a)(e, {
					...c,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/redditGQL/operations/UpdateScheduledPost.json"),
				s = r("./src/lib/makeGqlRequest/index.ts");
			const i = (e, t) => Object(s.a)(e, {
				...n,
				variables: {
					input: t
				}
			})
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function i(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function d(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			}));
			const n = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: p(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				s = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: l(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				i = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...n(e),
							...s(e)
						}
					}
				}),
				d = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				o = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				a = e => d(e) && o(e),
				c = e => !d(e) && o(e),
				u = e => d(e) && !o(e),
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
				p = e => e.map(e => f(e.node)),
				f = e => ({
					...b(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				m = e => (e => !!e.frequency && !!e.interval)(e) ? f(e) : b(e)
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/isEqual.js"),
				s = r.n(n),
				i = r("./node_modules/lodash/xorWith.js"),
				d = r.n(i);
			t.a = (e, t) => {
				const r = d()(e, t, s.a);
				return !(!r || 0 !== r.length)
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./src/lib/fastdom/index.ts");
			const i = "https://js.stripe.com/v3/",
				d = "https://www.paypalobjects.com/api/checkout.js",
				o = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${n.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function a(e, t) {
				return t() ? Promise.resolve() : new Promise((r, n) => s.a.write(() => {
					t() && r();
					const s = document.head;
					let i = s.querySelector(`script[src='${e}']`);

					function d() {
						this.removeEventListener("load", d), this.removeEventListener("error", o), r()
					}

					function o() {
						this.removeEventListener("load", d), this.removeEventListener("error", o), i && s.removeChild(i), n()
					}
					i || ((i = document.createElement("script")).src = e, s.appendChild(i)), i.addEventListener("load", d), i.addEventListener("error", o)
				}))
			}

			function c() {
				return a(i, () => "undefined" != typeof Stripe)
			}

			function u() {
				return a(d, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function l() {
				return Promise.all(Object.keys(o).map(e => {
					const t = "__" + e;
					return a(o[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
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
				return j
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "g", (function() {
				return v
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			r("./node_modules/react/index.js");
			const s = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function i(e, t) {
				for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
				if (s(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let r = 0;
						(e = new Error(t.replace(/%s/g, () => String(n[r++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const d = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				o = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			var a = function(e, t, r) {
					const s = e.length;
					if (0 === s) return "";
					if (1 === s) return e[0];
					const a = e[s - 1];
					let c = e[0];
					for (let i = 1; i < s - 1; ++i) switch (r) {
						case o.SEMICOLON:
							c = n.fbt._("{previous items}; {following items}", [n.fbt._param("previous items", c), n.fbt._param("following items", e[i])], {
								hk: "4hs4xq"
							});
							break;
						default:
							c = n.fbt._("{previous items}, {following items}", [n.fbt._param("previous items", c), n.fbt._param("following items", e[i])], {
								hk: "2z8RMb"
							})
					}
					return function(e, t, r, s) {
						switch (r) {
							case d.AND:
								return n.fbt._("{list of items} and {last item }", [n.fbt._param("list of items", e), n.fbt._param("last item ", t)], {
									hk: "1ylan1"
								});
							case d.OR:
								return n.fbt._("{list of items} or {last item}", [n.fbt._param("list of items", e), n.fbt._param("last item", t)], {
									hk: "3q8AmB"
								});
							case d.NONE:
								switch (s) {
									case o.SEMICOLON:
										return n.fbt._("{previous item}; {last item}", [n.fbt._param("previous item", e), n.fbt._param("last item", t)], {
											hk: "1h77rJ"
										});
									default:
										return n.fbt._("{list of items}, {last item}", [n.fbt._param("list of items", e), n.fbt._param("last item", t)], {
											hk: "3Q0iaX"
										})
								}
								default:
									i(!1, "Invalid conjunction %s provided to intlList", r)
						}
					}(c, a, t || d.AND, r || o.COMMA)
				},
				c = r("./src/lib/timezone/index.ts"),
				u = r("./src/reddit/helpers/isArrayEqual.ts"),
				l = r("./src/reddit/helpers/ordinal/index.ts"),
				b = r("./src/reddit/models/ScheduledPost/index.ts");
			const p = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				f = (e, t) => {
					if (e && t) {
						const r = Object(c.f)(h(e, t)),
							s = p(r);
						return n.fbt._("At {time}", [n.fbt._param("time", s)], {
							hk: "25s5Tg"
						})
					}
					return n.fbt._("Submit post at scheduled event time", null, {
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
						return p(e)
					}
					return ""
				},
				_ = e => {
					const t = Object(c.d)(e);
					let r, n = e;
					if (t) {
						r = t.offset, n = `(GMT${Object(c.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: n,
						offset: r
					}
				},
				g = e => "string" == typeof e,
				E = e => {
					const t = new Date,
						r = e - t.getDay();
					return t.setDate(t.getDate() + r), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				j = e => {
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
					if (e.frequency === b.d.Hourly) return 2 === e.interval ? n.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? n.fbt._("Every {hour interval} hours", [n.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : n.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === b.d.Daily) return 2 === e.interval ? n.fbt._("Every other day at {start time}", [n.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? n.fbt._("Every {day interval} days at {start time}", [n.fbt._param("day interval", e.interval.toString()), n.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : n.fbt._("Every day at {start time}", [n.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === b.d.Weekly) {
						const r = (e => a(e.map(b.l).sort((e, t) => e - t).map(E), d.AND, o.COMMA))(e.byWeekDays);
						return 2 === e.interval ? n.fbt._("Every other week on {days of week } at {start time}", [n.fbt._param("days of week ", r), n.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? n.fbt._("Every {interval} weeks on {days of week} at {start time}", [n.fbt._param("interval", e.interval.toString()), n.fbt._param("days of week", r), n.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : n.fbt._("Every week on {days of week} at {start time}", [n.fbt._param("days of week", r), n.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const r = (e => a(e.sort((e, t) => e - t).map(l.a), d.AND, o.COMMA))(e.byMonthDays);
					return 2 === e.interval ? n.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [n.fbt._param("days of month", r), n.fbt._plural(e.byMonthDays.length), n.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? n.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [n.fbt._param("interval", e.interval.toString()), n.fbt._param("days of month", r), n.fbt._plural(e.byMonthDays.length), n.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : n.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [n.fbt._param("days of month", r), n.fbt._plural(e.byMonthDays.length), n.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				S = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = b.b);
					const r = Object(c.f)(e.publishAt),
						n = Object(b.r)(r.getDay()),
						s = r.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== n && (t = b.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== s && (t = b.b), {
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
				v = (e, t) => {
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
			var n = r("./node_modules/redux/es/redux.js"),
				s = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				i = r("./src/reddit/actions/economics/me/constants.ts");
			const d = {};
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.a: {
							const r = t.payload.claimPoints || {},
								n = Object.keys(r).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: r[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case s.b:
						case s.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === s.b
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
				var t, r, n, s, i;
				const d = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					o = null == d ? void 0 : d.contracts,
					a = null == o ? void 0 : o.unlocked,
					u = null !== (n = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== n ? n : e.provider,
					b = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					p = null == d ? void 0 : d.metaTransactions,
					f = (null == p ? void 0 : p.allowedContractMethods) || {},
					m = (null == p ? void 0 : p.gasLimit) || c,
					h = (null == a ? void 0 : a.decimals) || 0,
					O = "1" + "0".repeat(h);
				return {
					allowedContractMethods: f,
					blockchainProvider: u,
					contractAddress: (null == a ? void 0 : a.address) || "",
					contracts: o,
					decimals: h,
					displayConversion: O,
					gasLimit: m,
					images: e.images || l,
					inTransition: b,
					name: e.name,
					nomenclature: null === (i = e.extra) || void 0 === i ? void 0 : i.nomenclature,
					polls: e.polls,
					symbol: (null == a ? void 0 : a.token) || ""
				}
			}
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.a: {
						const {
							subredditId: r,
							meta: n
						} = t.payload;
						return {
							...e,
							[r]: b(n)
						}
					}
					default:
						return e
				}
			};
			const f = {};
			var m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.n: {
						const {
							subredditId: r,
							wallets: n
						} = t.payload, s = Object.keys(n).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[r]: n[s]
								}
							}
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				claims: o,
				points: p,
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
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				i = r("./src/reddit/endpoints/governance/crypto.ts"),
				d = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(d.a)({
				features: {
					crypto: o.a
				}
			});
			const a = (e, t) => {
				var r, n, s;
				return t ? null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function c() {
				const e = Object(s.ib)(),
					t = Object(n.e)(t => Object(s.s)(t, {
						pageLayer: e
					})),
					r = Object(n.e)(e => a(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const u = (e, t) => {
				var r;
				const n = null === (r = a(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return n === i.a.Ethereum || n === i.a.Rinkeby || n === i.a.EthTraderEthereum || n === i.a.EthTraderRinkeby || n === i.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return d
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
				return f
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
				return E
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "b", (function() {
				return P
			}));
			var n = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/models/ScheduledPost/index.ts");
			const d = (e, t) => {
					let {
						subredditId: r
					} = t;
					return ((e, t) => {
						let {
							subredditId: r,
							type: n
						} = t;
						return !!e.posts.scheduledPosts[n].models[r]
					})(e, {
						subredditId: r,
						type: i.g.standalonePosts
					})
				},
				o = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					return !!e.posts.scheduledPosts[n].pageInfo[r] && e.posts.scheduledPosts[n].pageInfo[r].hasNextPage
				},
				a = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					return e.posts.scheduledPosts[n].pageInfo[r] ? e.posts.scheduledPosts[n].pageInfo[r].endCursor : null
				},
				c = e => e.posts.scheduledPosts.api.pending,
				u = e => e.posts.scheduledPosts.api.pendingUpdate,
				l = e => e.posts.scheduledPosts.api.error,
				b = {},
				p = [],
				f = (e, t) => {
					let {
						subredditId: r
					} = t;
					return (e.posts.scheduledPosts.standalonePosts.postOrder[r] || p).filter(t => !!(e.posts.scheduledPosts.standalonePosts.models[r] || b)[t]).map(t => e.posts.scheduledPosts.standalonePosts.models[r][t])
				},
				m = (e, t) => {
					let {
						subredditId: r
					} = t;
					return (e.posts.scheduledPosts.recurringPosts.postOrder[r] || p).filter(t => !!(e.posts.scheduledPosts.recurringPosts.models[r] || b)[t]).map(t => e.posts.scheduledPosts.recurringPosts.models[r][t])
				},
				h = (e, t) => {
					let {
						subredditId: r,
						scheduledPostId: n,
						type: s
					} = t;
					return (e.posts.scheduledPosts[s].models[r] || b)[n] || void 0
				},
				O = (e, t) => {
					let {
						subredditId: r,
						scheduledPostId: n
					} = t;
					return h(e, {
						subredditId: r,
						scheduledPostId: n,
						type: i.g.standalonePosts
					})
				},
				y = (e, t) => {
					let {
						subredditId: r,
						scheduledPostId: n
					} = t;
					const s = h(e, {
						subredditId: r,
						scheduledPostId: n,
						type: i.g.recurringPosts
					});
					return s || s
				},
				_ = (e, t) => {
					let {
						subredditId: r,
						scheduledPostId: n
					} = t;
					return O(e, {
						subredditId: r,
						scheduledPostId: n
					}) || y(e, {
						subredditId: r,
						scheduledPostId: n
					})
				},
				g = e => e.creations.formData.scheduledPostId,
				E = e => {
					let {
						scheduledPost: t
					} = e;
					return (e => {
						let {
							flair: t,
							isNsfw: r,
							isSpoiler: i,
							isOriginalContent: d
						} = e;
						const o = [];
						return d && o.push({
							text: "OC",
							type: s.f.Oc
						}), t && o.push(...Object(n.c)(t)), i && o.push({
							text: "spoiler",
							type: s.f.Spoiler
						}), r && o.push({
							text: "nsfw",
							type: s.f.Nsfw
						}), o
					})(t)
				},
				j = e => {
					let {
						scheduledPost: t
					} = e;
					const r = E({
							scheduledPost: t
						}),
						n = r.find(e => e.type === s.f.Richtext);
					return n || (r.find(e => e.type === s.f.Text) || null)
				},
				S = e => e.posts.scheduledPosts[i.g.recurringPosts].editModal.scheduledPostId,
				v = e => e.posts.scheduledPosts[i.g.recurringPosts].editModal.subredditId,
				C = e => e.posts.scheduledPosts.api.pendingUpdate,
				P = e => e.posts.scheduledPosts.api.creationToken
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~SubredditForkingCTA.dadbd5ffe68a04087e1a.js.map