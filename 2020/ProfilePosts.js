// https://www.redditstatic.com/desktop2x/ProfilePosts.6919d1d389fa5b9991e1.js
// Retrieved at 4/8/2020, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePosts", "reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				a = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return r(a(e, t), 1)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./node_modules/linkify-it/index.js"),
				a = n.n(r),
				o = n("./node_modules/tlds/index.js"),
				s = n.n(o),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				l = n("./node_modules/lodash/values.js"),
				c = n.n(l);
			const d = e => c()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = a()().tlds(s.a).set({
					fuzzyIP: !0
				}),
				h = a()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				f = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				g = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				b = a()().tlds(s.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				x = p.normalize;
			p.normalize = e => {
				x.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const y = (e, t) => {
					return (b.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				_ = e => {
					return [...g.match(e) || [], ...h.match(e) || []].map(e => !d(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				w = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				a = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(a.e)(e),
					s = encodeURIComponent("".concat(t).concat(o));
				return "".concat(r.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(s)
			}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				f = n.n(h);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = p.a.div("FooterContainer", f.a), x = p.a.div("UserAgreement", f.a), y = p.a.a("UserAgreementLink", f.a), _ = p.a.a("PrivacyLink", f.a);
			var E = () => o.a.createElement(b, null, o.a.createElement(x, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", o.a.createElement(y, {
					href: "".concat(r.a.redditUrl, "/help/useragreement")
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", o.a.createElement(_, {
					href: "".concat(r.a.redditUrl, "/help/privacypolicy")
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				w = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				S = n("./src/reddit/components/RichTextJson/index.tsx"),
				k = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				v = n.n(k),
				L = n("./src/lib/linkMatchers/index.ts"),
				N = n("./src/lib/linkMatchers/customLinks.ts"),
				C = n("./src/reddit/controls/OutboundLink/index.tsx");
			const O = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(O);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, a, o] = t.slice(r, r + 3);
						n.push(e), n.push([o, a])
					}
					return n
				};
			var P = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = v()(t, j)), e.parseRegularLinks && (t = v()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = L.e.add(N.g.subreddit.prefix, N.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const a of t) n.push(e.slice(r ? r.lastIndex : 0, a.index)), r = a, n.push([a.url, a.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, a] = t;
							return o.a.createElement(C.a, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, a)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				T = n("./src/reddit/contexts/PageLayer/index.tsx"),
				B = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/reddit/models/ContentGate.ts"),
				I = n("./src/reddit/selectors/meta.ts"),
				R = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/components/ContentGate/index.m.less"),
				H = n.n(G);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js"), F = p.a.div("ButtonsContainer", H.a), z = p.a.div("Container", H.a), A = p.a.div("Description", H.a), M = p.a.div("PrivateSubredditDetails", H.a), W = p.a.div("PrivateSubredditDescription", H.a), Y = p.a.h3("PrivateSubredditName", H.a), q = p.a.a("Link", H.a), V = p.a.wrapped(B.h, "LinkRouterButton", H.a), J = p.a.wrapped(B.g, "LinkButton", H.a), K = p.a.wrapped(B.k, "SecondaryLinkRouterButton", H.a), X = p.a.wrapped(B.j, "SecondaryLinkButton", H.a), Z = p.a.wrapped(V, "GoHomeLinkButton", H.a), Q = p.a.img("Image", H.a), $ = p.a.img("ImagePlaceholder", H.a), ee = p.a.wrapped(V, "LeftLinkRouterButton", H.a), te = p.a.wrapped(J, "LeftLinkButton", H.a), ne = p.a.wrapped(X, "SecondaryLeftLinkButton", H.a), re = p.a.wrapped(K, "SecondaryLeftLinkRouterButton", H.a), ae = p.a.h3("Title", H.a), oe = p.a.div("PageBody", H.a), se = p.a.div("QuarantineMessageWrapper", H.a), ie = Object(l.c)({
				isLoggedIn: R.F,
				language: R.O,
				origin: I.j,
				user: R.i
			}), le = Object(T.t)(), ce = Object(s.b)(ie, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(u.A(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(d.l)())
					}
				}
			}), de = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					isLoggedIn: s,
					language: i,
					location: l,
					origin: u,
					pageLayer: p,
					quarantineRequiresEmail: h,
					quarantineMessage: f,
					quarantineMessageHtml: g,
					quarantineMessageRTJson: b,
					setNSFWPreference: x,
					subredditDescription: y,
					subredditName: _,
					user: E
				} = e, k = () => {
					s ? x() : Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case D.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/gold/premium-crest.png")
						}), o.a.createElement(ae, null, U._("r/{community name} is a Reddit Premium community", [U._param("community name", _)], {
							hk: "2lyDwB"
						})), o.a.createElement(A, null, U._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(F, null, E ? o.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/premium")
						}, U._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(te, {
							href: Object(c.a)(l, u)
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), E ? o.a.createElement(V, {
							to: "/"
						}, U._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(X, {
							href: Object(c.a)(l, u)
						}, U._("Log In", null, {
							hk: "35J1JT"
						}))));
					case D.a.Nsfw:
					case D.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), o.a.createElement(ae, null, n === D.a.Nsfw ? U._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : U._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(A, null, U._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(F, null, o.a.createElement(ee, {
							to: "/"
						}, U._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(X, {
							onClick: k
						}, U._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case D.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/private.png")
						}), o.a.createElement(ae, null, U._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), y && y.length && o.a.createElement(M, null, o.a.createElement(Y, null, "r/", _), o.a.createElement(W, null, o.a.createElement("div", null, y))), o.a.createElement(A, null, U._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), o.a.createElement(F, null, E ? o.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/message/compose?to=/r/").concat(_)
						}, U._("Message Mods", null, {
							hk: "vVe1i"
						})) : o.a.createElement(ne, {
							href: Object(c.a)(l, u)
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(V, {
							to: "/"
						}, E ? U._("Go Home", null, {
							hk: "49p4or"
						}) : U._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case D.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), o.a.createElement(ae, null, U._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(A, null, U._("This community is {=quarantined}", [U._param("=quarantined", o.a.createElement(q, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, U._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(se, null, b ? o.a.createElement(S.a, {
							content: b,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : g ? o.a.createElement(w.a, {
							html: g
						}) : f || U._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), U._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(F, null, ((e, t, n, a) => {
							return !(e && e.hasVerifiedEmail) && a ? o.a.createElement(F, null, o.a.createElement(re, {
								to: "/"
							}, U._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(J, {
								href: "".concat(r.a.redditUrl, "/prefs/update")
							}, U._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(F, null, o.a.createElement(ee, {
								to: "/"
							}, U._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(X, {
								onClick: n
							}, U._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(E, 0, a, h)));
					case D.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/banned.png")
						}), o.a.createElement(ae, null, U._("r/{community name} has been banned from Reddit", [U._param("community name", _)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(A, null, e ? o.a.createElement(P, {
							linkClassName: H.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : U._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(F, null, o.a.createElement(V, {
							to: "/"
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(ae, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(F, null, o.a.createElement(V, {
							to: "/"
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement($, null), o.a.createElement(ae, null, U._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(A, null, U._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(F, null, E && o.a.createElement(m.a, {
							eventSource: "content_gate"
						}), o.a.createElement(Z, {
							to: "/"
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.ProfileDoesNotExist:
					case D.a.ProfileDeleted:
					case D.a.ProfileSuspended:
					case D.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(ae, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case D.a.ProfileBlockedForLegalReason:
									return U._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case D.a.ProfileDeleted:
									return U._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case D.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, U._("This account has been {=suspended} .", [U._param("=suspended", o.a.createElement(q, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, U._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case D.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ae, null, U._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(A, null, U._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(F, null, o.a.createElement(Z, {
							to: "/"
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(ae, null, U._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(F, null, o.a.createElement(Z, {
							to: "/"
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(ae, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(F, null, o.a.createElement(V, {
							to: "/"
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = le(ce(Object(i.i)(e => o.a.createElement(z, null, o.a.createElement("div", null, o.a.createElement(oe, null, de(e))), o.a.createElement(E, null)))))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				SecondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				secondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(f),
				b = n("./src/lib/lessComponent.tsx");
			const x = "create-community-button",
				y = b.a.wrapped(u.i, "SecondaryButton", g.a),
				_ = b.a.wrapped(c.c, "StyledTooltip", g.a),
				E = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.Y)(e),
					userIsSuspended: h.K
				});
			t.a = Object(s.b)(E, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(n)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: x
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(d.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: a,
					onHideTooltip: s,
					openCommunityCreation: i,
					sendEvent: l,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: d
				} = e;
				return o.a.createElement(y, {
					className: t,
					disabled: d || c,
					onClick: () => i(l),
					onMouseEnter: a,
					onMouseLeave: s,
					id: x
				}, r.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), c ? o.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: x,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: x,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "a", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/PostList/Placeholder.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = n.n(d);
			const m = i.a.div("PrimaryText", u.a),
				p = i.a.wrapped(l.a, "BackgroundPlaceholder", u.a),
				h = i.a.div("Wrapper", u.a);
			var f = e => {
				let {
					children: t,
					className: n
				} = e;
				return o.a.createElement(h, {
					className: n
				}, o.a.createElement(p, {
					isLoading: !1,
					layout: c.g.Classic
				}), o.a.createElement(m, null, t))
			};
			var g = e => {
				let {
					className: t,
					profileName: n,
					timeSort: a = s.Qb.ALL
				} = e;
				return o.a.createElement(f, {
					className: t
				}, a === s.Qb.ALL ? r.fbt._("hmm... {profileName} hasn't commented on anything", [r.fbt._param("profileName", "u/".concat(n))], {
					hk: "1MHn3t"
				}) : r.fbt._("hmm... {profileName} hasn't commented recently", [r.fbt._param("profileName", "u/".concat(n))], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
					let {
						className: t,
						profileName: n,
						timeSort: a = s.Qb.ALL
					} = e;
					return o.a.createElement(f, {
						className: t
					}, a === s.Qb.ALL ? r.fbt._("hmm... {profileName} hasn't posted anything", [r.fbt._param("profileName", "u/".concat(n))], {
						hk: "28vBEd"
					}) : r.fbt._("hmm... {profileName} hasn't posted recently", [r.fbt._param("profileName", "u/".concat(n))], {
						hk: "38GhqN"
					}))
				},
				x = n("./src/reddit/components/Translated/index.tsx");
			var y = e => {
					let {
						className: t,
						verb: n
					} = e;
					return o.a.createElement(f, {
						className: t
					}, o.a.createElement(x.a, {
						msgId: "listings.privateEmpty",
						replacements: {
							verb: n
						}
					}))
				},
				_ = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				E = n("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				w = n.n(E),
				S = () => o.a.createElement("div", {
					className: w.a.container
				}, o.a.createElement(_.a, {
					className: w.a.hideIcon
				}), o.a.createElement("h3", {
					className: w.a.title
				}, o.a.createElement(x.a, {
					msgId: "profile.forbidden.title"
				})), o.a.createElement("p", {
					className: w.a.subtitle
				}, o.a.createElement(x.a, {
					msgId: "profile.forbidden.savedSubtitle"
				})))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/contexts/Tooltip.ts"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				y = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				_ = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				E = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				w = n("./src/reddit/selectors/telemetry.ts"),
				S = n("./src/reddit/selectors/tooltip.ts"),
				k = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				v = n.n(k);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = "view--layout--FUE",
				C = "LayoutSwitch--picker",
				O = Object(l.a)(b.a),
				j = {
					[h.d.Card]: E.a,
					[h.d.Classic]: y.a,
					[h.d.Compact]: _.a
				},
				P = {
					[h.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				T = Object(f.t)(),
				B = Object(i.c)({
					dropdownIsOpen: Object(S.b)(C),
					postLayout: f.M,
					redditStyle: f.A
				}),
				D = Object(s.b)(B, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.v)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: C
					}))
				}));
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: r,
							subredditId: a
						} = this.props;
						t ? t(e) : (n(e, a), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(w.screen)(t),
							subreddit: Object(w.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: a
						} = this.props, s = n || h.e[a], i = e === s, l = j[e], d = P[e];
						return o.a.createElement(x.b, L({}, t, {
							className: Object(c.a)(v.a.LayoutItem, {
								[v.a.selected]: i
							}),
							"data-layout": e,
							displayText: d(),
							iconWrapperClassName: v.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: v.a.LayoutItemTextClassName
						}), o.a.createElement(l, {
							className: v.a.LayoutIcon,
							onClick: i ? void 0 : r
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(O, L({}, e, {
							className: v.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: v.a.DropdownRow,
							rowIconClassName: v.a.DropdownRowIcon,
							rowSelectedClassName: v.a.DropdownRowSelected,
							tooltipId: C
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: r
					} = this.props, a = t || h.e[r];
					return o.a.createElement("div", {
						className: Object(c.a)(v.a.Container, e),
						id: N
					}, o.a.createElement("div", {
						className: v.a.DropdownContainer,
						onClick: n
					}, this.renderItem(a, {
						id: C,
						showDropdownTriangle: !0
					}), o.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(D(Object(p.c)(Object(d.a)(I))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.array.sort.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				l = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/reselect/es/index.js")),
				h = n("./src/lib/addQueryParams/index.ts"),
				f = n("./src/lib/constants/index.ts"),
				g = n("./src/reddit/components/CountrySort/index.tsx"),
				b = n("./src/reddit/components/ListingSort/index.tsx"),
				x = n("./src/reddit/components/TimeSort/index.tsx"),
				y = n("./src/reddit/constants/listings.ts"),
				_ = n("./src/reddit/constants/listingSorts.ts"),
				E = n("./src/reddit/controls/InternalLink/index.tsx"),
				w = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/helpers/trackers/navigation.ts"),
				k = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				v = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				C = n.n(N);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = new Set([f.N.CONTROVERSIAL, f.N.TOP]),
				P = new Set([f.N.CONTROVERSIAL, f.N.RISING]),
				T = "ListingSort--Overflow",
				B = Object(d.t)({
					isFrontpage: d.y,
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				D = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, v.a, L.i, d.C, (e, t, n, r, a) => {
					if (e) return {
						isPopularPage: a,
						sortOptions: e
					};
					const o = [f.N.HOT, f.N.NEW, f.N.TOP, f.N.RISING];
					return (t && (r || n) || a && n) && o.unshift(f.N.BEST), {
						isPopularPage: a,
						sortOptions: o
					}
				});
			class I extends a.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(S.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: n
						} = this.props;
						return n ? Object(h.a)(t, {
							sort: e
						}) : Object(w.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: r,
							sort: o
						} = this.props, i = r && !!n && e === f.N.HOT && o === f.N.HOT;
						return a.a.createElement(a.a.Fragment, {
							key: e
						}, a.a.createElement(E.a, {
							className: Object(s.a)(C.a.SortLink, e === o && C.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, a.a.createElement(b.a, {
							className: C.a.SortIcon,
							sort: e
						}), a.a.createElement("div", {
							className: C.a.SortLabel
						}, Object(_.a)(e))), i && a.a.createElement(g.a, {
							baseUrl: y.c[y.b.Popular],
							buttonClassName: C.a.DropdownButton,
							className: C.a.CountrySort,
							disabled: t,
							dropdownClassName: C.a.Dropdown,
							rowClassName: C.a.DropdownRow,
							rowSelectedClassName: C.a.DropdownRowSelected,
							wrapperClassName: C.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: C.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: r,
						sortOptions: o,
						timeSort: i
					} = this.props, l = !t && j.has(r), c = P.has(r), d = o.filter(e => !P.has(e)), u = o.filter(e => P.has(e) && e !== r);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(b.d, O({}, this.props, {
						buttonClassName: C.a.DropdownButton,
						className: Object(s.a)(C.a.SortDropdown, e),
						rowClassName: C.a.DropdownRow,
						rowIconClassName: C.a.DropdownRowIcon,
						rowSelectedClassName: C.a.DropdownRowSelected,
						showTitle: !1
					})), a.a.createElement("div", {
						className: Object(s.a)(C.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(r), l && a.a.createElement(x.a, {
						baseUrl: this.getSortUrl(r),
						buttonClassName: C.a.DropdownButton,
						className: C.a.TimeSort,
						dropdownClassName: C.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: C.a.DropdownRow,
						rowSelectedClassName: C.a.DropdownRowSelected,
						timeSort: i || f.Rb,
						wrapperClassName: C.a.DropdownSortWrapper
					}), u.length > 0 && a.a.createElement(b.d, O({}, this.props, {
						className: Object(s.a)(C.a.SortOverflow, e),
						dropdownClassName: C.a.Dropdown,
						dropdownId: T,
						rowClassName: C.a.DropdownRow,
						rowIconClassName: C.a.DropdownRowIcon,
						rowSelectedClassName: C.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), a.a.createElement("button", {
						className: C.a.SortOverflowButton,
						id: T
					}, a.a.createElement(k.a, null))))
				}
			}
			var R = B(Object(o.b)(D)(Object(c.c)(I))),
				G = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				H = n.n(G);
			const U = Object(d.t)({
					isProfilePage: d.G,
					pageLayer: e => e
				}),
				F = Object(o.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (n) {
								const a = Object(i.c)({
									sort: t,
									timeSort: r
								});
								e(Object(l.G)(n, a))
							}
						}
					}
				});
			class z extends a.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: n,
						disabled: r = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: l,
						subredditId: c,
						timeSort: d,
						updateSortPreference: u
					} = this.props;
					return a.a.createElement("div", {
						className: Object(s.a)(H.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, a.a.createElement(R, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !o && a.a.createElement(m.a, {
						className: H.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = U(F(Object(c.c)(z)))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
				}
				return n
			};
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: r,
					widthLeft: o,
					gutter: i
				} = e, u = d(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return a.a.createElement("div", c({
					className: Object(s.a)(l.a.expandRightContainer, t)
				}, u), a.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: o,
						height: r,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), a.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(s.h, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(s.h, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfilePosts/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/profilePosts.ts"),
				p = n("./src/reddit/actions/pages/profileShared.ts"),
				h = n("./src/reddit/components/ContentGate/index.tsx"),
				f = n("./src/reddit/components/EmptyProfile/index.ts"),
				g = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				b = n("./src/reddit/components/JumpToContent/index.tsx"),
				x = n("./src/reddit/components/LayoutNavigation/index.tsx"),
				y = n("./src/reddit/components/ListingPostList/index.tsx"),
				_ = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				E = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				w = n("./src/reddit/contexts/PageLayer/index.tsx"),
				S = n("./src/reddit/helpers/trackers/screenview.ts"),
				k = n("./src/reddit/layout/page/Listing/index.tsx"),
				v = n("./src/reddit/models/ContentGate.ts"),
				L = n("./src/reddit/pages/ErrorPages/index.tsx"),
				N = n("./src/reddit/selectors/profile.ts"),
				C = n("./src/reddit/selectors/user.ts");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = Object(w.t)(),
				P = Object(l.a)(w.B, C.T, (e, t) => {
					let {
						location: n
					} = t;
					return a()([...Object(d.a)(n.search)])
				}, w.M, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.profileName
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(N.j)(e, {
						profileName: n.params.profileName
					})
				}, C.G, (e, t) => {
					let {
						match: n
					} = t;
					return Object(C.f)(e, c.Sb + n.params.profileName)
				}, (e, t, n, r, a, o, s, i) => {
					const {
						sort: l,
						t: c
					} = Object(p.b)(n), d = Object(u.a)("u_".concat(a), l, n);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: s,
						isOwnProfile: e,
						isProfileNSFW: !!o && o.isNSFW,
						layout: r,
						listingKey: d,
						profileName: a,
						sort: l,
						timeSort: c
					}
				}),
				T = Object(i.b)(P, (e, t) => ({
					onLoadMore: () => e(m.g()),
					onLayoutChange: () => e(m.h(Object.assign({}, t.match, {
						queryParams: a()([...Object(d.a)(t.location.search)])
					})))
				}));
			class B extends s.a.Component {
				render() {
					const {
						contentGateInfo: e,
						over18Prefs: t,
						isLoggedIn: n,
						isOwnProfile: r,
						isProfileNSFW: a,
						listingKey: o,
						onLoadMore: i,
						onLayoutChange: l,
						pageLayer: d,
						profileName: u,
						sort: m,
						timeSort: p
					} = this.props;
					if (!d || !u) return null;
					if (e && (e.profileDeleted || e.profileSuspended)) return s.a.createElement(h.default, {
						contentGateType: e.profileDeleted ? v.a.ProfileDeleted : v.a.ProfileSuspended,
						profileName: u
					});
					if (403 === d.status) return s.a.createElement(L.a, null);
					if (404 === d.status) return s.a.createElement(h.default, {
						contentGateType: v.a.ProfileDoesNotExist,
						profileName: u
					});
					const w = u.toLowerCase(),
						N = "/user/".concat(u, "/posts/"),
						C = {
							listingKey: o,
							listingName: w
						};
					if (!t && a && !r) return s.a.createElement(h.default, {
						contentGateType: v.a.Nsfw,
						subredditName: u
					});
					const j = !n,
						P = {
							sort: m,
							baseUrl: N,
							sortOptions: c.rb,
							subredditId: this.props.subredditId,
							timeSort: p
						};
					return s.a.createElement(k.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: s.a.createElement(s.a.Fragment, null, s.a.createElement(_.a, {
							profileName: u
						}), !j && s.a.createElement(x.a, P)),
						content: s.a.createElement(s.a.Fragment, null, j && s.a.createElement(g.a, P), s.a.createElement(b.a, null), s.a.createElement(y.a, {
							listingKey: o,
							listingName: w,
							listingViewed: (e, t) => Object(S.l)(o, m, t, e, p),
							noPostsComponent: () => s.a.createElement(f.c, {
								profileName: u,
								timeSort: p
							}),
							onLoadMore: i,
							onTryAgain: l,
							inSubredditOrProfile: !1
						})),
						sidebar: s.a.createElement(E.a, O({}, C, {
							profileName: u
						}))
					})
				}
			}
			t.default = j(T(B))
		}
	}
]);
//# sourceMappingURL=ProfilePosts.6919d1d389fa5b9991e1.js.map