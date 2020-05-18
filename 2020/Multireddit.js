// https://www.redditstatic.com/desktop2x/Multireddit.a1f306fb507f644220a7.js
// Retrieved at 5/18/2020, 11:20:08 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				a = n("./node_modules/tlds/index.js"),
				i = n.n(a),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				l = n("./node_modules/lodash/values.js"),
				c = n.n(l);
			const d = e => c()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				x = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				g = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				f = p.normalize;
			p.normalize = e => {
				f.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const E = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				_ = e => {
					return [...x.match(e) || [], ...b.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				y = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				k = e => {
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
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const a = Object(s.e)(e),
					i = encodeURIComponent("".concat(t).concat(a));
				return "".concat(r.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(i)
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(d);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => a.a.createElement(o.d, null, a.a.createElement(o.h, null, a.a.createElement(c.a, null, a.a.createElement(o.p, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(l.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(o.b, null)))), a.a.createElement(o.k, null, a.a.createElement(o.o, {
				className: u.a.ModalText
			}, e.modalText)), a.a.createElement(o.f, null, a.a.createElement(o.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "3DgVq6"
			})), a.a.createElement(o.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
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
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
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
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(b);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = p.a.div("FooterContainer", h.a), f = p.a.div("UserAgreement", h.a), E = p.a.a("UserAgreementLink", h.a), _ = p.a.a("PrivacyLink", h.a);
			var y = () => a.a.createElement(g, null, a.a.createElement(f, null, x._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [x._param("=User Agreement", a.a.createElement(E, {
					href: "".concat(r.a.redditUrl, "/help/useragreement")
				}, x._("User Agreement", null, {
					hk: "2srkM2"
				}))), x._param("=Privacy Policy", a.a.createElement(_, {
					href: "".concat(r.a.redditUrl, "/help/privacypolicy")
				}, x._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), x._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				k = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				C = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				O = n.n(C),
				j = n("./src/lib/linkMatchers/index.ts"),
				w = n("./src/lib/linkMatchers/customLinks.ts"),
				T = n("./src/reddit/controls/OutboundLink/index.tsx");
			const N = /\[(.+?)\]\((.+?)\)/g,
				L = e => {
					const t = e.split(N);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, a] = t.slice(r, r + 3);
						n.push(e), n.push([a, s])
					}
					return n
				};
			var B = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = O()(t, L)), e.parseRegularLinks && (t = O()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.e.add(w.g.subreddit.prefix, w.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return a.a.createElement(T.a, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, s)
						}
						return a.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				S = n("./src/reddit/contexts/PageLayer/index.tsx"),
				P = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/models/ContentGate.ts"),
				M = n("./src/reddit/selectors/meta.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				R = n.n(F);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = p.a.div("ButtonsContainer", R.a), H = p.a.div("Container", R.a), z = p.a.div("Description", R.a), G = p.a.div("PrivateSubredditDetails", R.a), W = p.a.div("PrivateSubredditDescription", R.a), J = p.a.h3("PrivateSubredditName", R.a), X = p.a.a("Link", R.a), q = p.a.wrapped(P.h, "LinkRouterButton", R.a), V = p.a.wrapped(P.g, "LinkButton", R.a), Z = p.a.wrapped(P.k, "SecondaryLinkRouterButton", R.a), K = p.a.wrapped(P.j, "SecondaryLinkButton", R.a), Y = p.a.wrapped(q, "GoHomeLinkButton", R.a), Q = p.a.img("Image", R.a), $ = p.a.img("ImagePlaceholder", R.a), ee = p.a.wrapped(q, "LeftLinkRouterButton", R.a), te = p.a.wrapped(V, "LeftLinkButton", R.a), ne = p.a.wrapped(K, "SecondaryLeftLinkButton", R.a), re = p.a.wrapped(Z, "SecondaryLeftLinkRouterButton", R.a), se = p.a.h3("Title", R.a), ae = p.a.div("PageBody", R.a), ie = p.a.div("QuarantineMessageWrapper", R.a), oe = Object(l.c)({
				isLoggedIn: D.H,
				language: D.R,
				origin: M.j,
				user: D.j
			}), le = Object(S.t)(), ce = Object(i.b)(oe, (e, t) => {
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
					continueToQuarantinedSubreddit: s,
					isLoggedIn: i,
					language: o,
					location: l,
					origin: u,
					pageLayer: p,
					quarantineRequiresEmail: b,
					quarantineMessage: h,
					quarantineMessageHtml: x,
					quarantineMessageRTJson: g,
					setNSFWPreference: f,
					subredditDescription: E,
					subredditName: _,
					user: y
				} = e, C = () => {
					i ? f() : Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case I.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/gold/premium-crest.png")
						}), a.a.createElement(se, null, A._("r/{community name} is a Reddit Premium community", [A._param("community name", _)], {
							hk: "2lyDwB"
						})), a.a.createElement(z, null, A._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(U, null, y ? a.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/premium")
						}, A._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(te, {
							href: Object(c.a)(l, u)
						}, A._("Sign Up", null, {
							hk: "rvpjy"
						})), y ? a.a.createElement(q, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(K, {
							href: Object(c.a)(l, u)
						}, A._("Log in", null, {
							hk: "odEG4"
						}))));
					case I.a.Nsfw:
					case I.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), a.a.createElement(se, null, n === I.a.Nsfw ? A._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : A._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(z, null, A._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(U, null, a.a.createElement(ee, {
							to: "/"
						}, A._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(K, {
							onClick: C
						}, A._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case I.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/private.png")
						}), a.a.createElement(se, null, A._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), E && E.length && a.a.createElement(G, null, a.a.createElement(J, null, "r/", _), a.a.createElement(W, null, a.a.createElement("div", null, E))), a.a.createElement(z, null, A._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), a.a.createElement(U, null, y ? a.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/message/compose?to=/r/").concat(_)
						}, A._("Message Mods", null, {
							hk: "vVe1i"
						})) : a.a.createElement(ne, {
							href: Object(c.a)(l, u)
						}, A._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(q, {
							to: "/"
						}, y ? A._("Go Home", null, {
							hk: "49p4or"
						}) : A._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case I.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), a.a.createElement(se, null, A._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(z, null, A._("This community is {=quarantined}", [A._param("=quarantined", a.a.createElement(X, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, A._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(ie, null, g ? a.a.createElement(v.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : x ? a.a.createElement(k.a, {
							html: x
						}) : h || A._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), A._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(U, null, ((e, t, n, s) => {
							return !(e && e.hasVerifiedEmail) && s ? a.a.createElement(U, null, a.a.createElement(re, {
								to: "/"
							}, A._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(V, {
								href: "".concat(r.a.redditUrl, "/prefs/update")
							}, A._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(U, null, a.a.createElement(ee, {
								to: "/"
							}, A._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(K, {
								onClick: n
							}, A._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(y, 0, s, b)));
					case I.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/banned.png")
						}), a.a.createElement(se, null, A._("r/{community name} has been banned from Reddit", [A._param("community name", _)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(z, null, e ? a.a.createElement(B, {
							linkClassName: R.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : A._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(U, null, a.a.createElement(q, {
							to: "/"
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case I.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, A._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(U, null, a.a.createElement(q, {
							to: "/"
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case I.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement($, null), a.a.createElement(se, null, A._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(z, null, A._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(U, null, y && a.a.createElement(m.a, {
							eventSource: "content_gate"
						}), a.a.createElement(Y, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case I.a.ProfileDoesNotExist:
					case I.a.ProfileDeleted:
					case I.a.ProfileSuspended:
					case I.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case I.a.ProfileBlockedForLegalReason:
									return A._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case I.a.ProfileDeleted:
									return A._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case I.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, A._("This account has been {=suspended} .", [A._param("=suspended", a.a.createElement(X, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, A._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case I.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(se, null, A._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(z, null, A._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(U, null, a.a.createElement(Y, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case I.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, A._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(U, null, a.a.createElement(Y, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case I.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, A._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(U, null, a.a.createElement(q, {
							to: "/"
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = le(ce(Object(o.i)(e => a.a.createElement(H, null, a.a.createElement("div", null, a.a.createElement(ae, null, de(e))), a.a.createElement(y, null)))))
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = n.n(h),
				g = n("./src/lib/lessComponent.tsx");
			const f = "create-community-button",
				E = g.a.wrapped(u.i, "SecondaryButton", x.a),
				_ = g.a.wrapped(c.c, "StyledTooltip", x.a),
				y = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.bb)(e),
					userIsSuspended: b.N
				});
			t.a = Object(i.b)(y, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(n)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: f
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(d.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: i,
					openCommunityCreation: o,
					sendEvent: l,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: d
				} = e;
				return a.a.createElement(E, {
					className: t,
					disabled: d || c,
					onClick: () => o(l),
					onMouseEnter: s,
					onMouseLeave: i,
					id: f
				}, r.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), c ? a.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: f,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? a.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: f,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
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
		"./src/reddit/components/MultiredditTopBar/Button/index.m.less": function(e, t, n) {
			e.exports = {
				textBase: "LcUEFMijsseUG0elP8bNx",
				button: "_14uJB4G3tqOEYET63pRdyA",
				hoverText: "_3GSO2RiUsPx69akefymMHH",
				text: "_2RcDSmyTF8XzvMXlNYdfB3",
				withHover: "_1eiwN-M8gLxB0Wrix2rZI9",
				icon: "nVpAL8k7NeDtiXcPNAmaX"
			}
		},
		"./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3d7Sfwey7uejnzrmv0eHPD",
				isFollowed: "mmRAVpxPd7_dKF--axI5t"
			}
		},
		"./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "bX6SqXfzfxpv4GQbuIYVZ",
				button: "_1qiH6rUwyms3uD12BWyHR5"
			}
		},
		"./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less": function(e, t, n) {
			e.exports = {
				shareMenu: "_3mn7XQLztyLrhr3ZAQyl5y",
				shareIcon: "_373yJBxVgon33agUR-lV0m"
			}
		},
		"./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1doK8qD1dkYaqBY5YEJaOD",
				pencilIcon: "_3PELp5Muvbc7hRTVQW0VEa",
				dropdownRow: "KXZPPPGdP_LlVeAK0oMa",
				icon: "_3T9KQ0BWvW9jR5SmmqJgVE",
				public: "_1mAvxBXazRTEPbQEYYMhFI",
				private: "_2slZfnU3hwgD9b8dT79p1F"
			}
		},
		"./src/reddit/components/MultiredditTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1f7kdhvpHh0S3ClTn3xFCa",
				layoutContainer: "_2CnZ_NKcI15TLBqdLMIYmu",
				layoutCard: "_1xUCmooih5FTp8z5c-oD6U",
				actions: "_1T_vh62Hnliedh8W_NT8-m",
				icon: "_2xtXouwF6uqK9UUpun6xXY",
				content: "_3zG_bpPw8e9TAPq07QCJya",
				header: "_1-u63wf24mXQJg7YnYaR_O",
				multiredditName: "_3I-SyNPeXukMGT4sLs6sFH",
				flair: "_3OqxkWiGGZGmXF0KTa12_h",
				descriptionContainer: "_2SmhQkTKjbD38r3jy00afr",
				meta: "_9uTR_Kf5w51DX_D_Zzj6b",
				usernameLink: "_3O7szJf96hs9FVHDx2qH9d"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/page.ts"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = l.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(r.g)(Object(d.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(r.g)(Object(d.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(o.a)(b))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/reddit/constants/elementClassNames.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = n.n(u),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const g = b.a.button("IconButton", m.a),
				f = b.a.wrapped(c.a, "SubscribeIcon", m.a),
				E = b.a.wrapped(l.a, "UnsubscribeIcon", m.a),
				_ = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, r = x(e, ["border", "small"]);
					return a.a.createElement(g, r, a.a.createElement(f, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", m.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, r = x(e, ["border", "small"]);
					return t ? a.a.createElement(o.f, h({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					})) : a.a.createElement(o.n, h({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", m.a),
				k = e => {
					var {
						icon: t
					} = e, n = x(e, ["icon"]);
					return t ? a.a.createElement(_, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : a.a.createElement(y, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				},
				v = b.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: r,
						type: s
					} = e, o = x(e, ["border", "language", "small", "type"]);
					return a.a.createElement(g, o, a.a.createElement(E, {
						className: Object(p.a)(i.n, o.className, {
							[m.a.isSmall]: r
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				C = b.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: s,
						type: i
					} = e, l = x(e, ["border", "language", "small", "type"]);
					const c = a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === i ? r.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : r.fbt._("Following", null, {
							hk: "1wQlVR"
						})), a.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === i ? r.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : r.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						d = Object(p.a)(l.className, {
							[m.a.isSmall]: s
						});
					return t ? a.a.createElement(o.i, h({}, l, {
						className: d,
						children: c
					})) : a.a.createElement(o.n, h({}, l, {
						className: d,
						children: c
					}))
				}, "UnsubscribeButton", m.a),
				O = e => {
					var {
						icon: t
					} = e, n = x(e, ["icon"]);
					return t ? a.a.createElement(v, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : a.a.createElement(C, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				};
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: n = !1,
						id: r,
						language: s,
						small: i = !1
					} = this.props, o = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? a.a.createElement(O, h({}, o, {
						language: s,
						type: this.props.identifier.type
					})) : a.a.createElement(k, h({}, o, {
						id: r
					}), this.props.children, Object(d.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				a = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: n
					} = e;
					return a[s({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(a.a))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return w
			})), n.d(t, "a", (function() {
				return N
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const b = Object(l.c)({
				language: p.R
			});
			var h = Object(i.b)(b, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				x = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				y = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				k = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				C = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = n.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => a.a.createElement(x.a, {
					className: Object(c.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, a.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? a.a.createElement(E.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : a.a.createElement(a.a.Fragment, null, e.isError ? a.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : a.a.createElement(a.a.Fragment, null, e.communities.map(t => a.a.createElement(N, j({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && a.a.createElement(f.n, {
					className: O.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				T = Object(l.c)({
					hideNSFWPref: p.A
				}),
				N = Object(i.b)(T)(e => a.a.createElement("div", {
					className: O.a.communityItemContainer
				}, a.a.createElement(y.a, {
					widthRight: g.t
				}, a.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? a.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : a.a.createElement(_.a, {
					className: O.a.planetIcon,
					"data-redditstyle": !0
				})), a.a.createElement("div", {
					className: O.a.communityDescriptionContainer
				}, a.a.createElement(o.a, {
					className: O.a.communityName,
					to: Object(v.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(v.b)(e.name, e.type)), a.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && a.a.createElement("p", {
					className: O.a.subscriberCount
				}, r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && a.a.createElement(d.b, {
					flair: {
						type: k.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? a.a.createElement(E.a, {
					className: Object(c.a)(O.a.communityCta, O.a.smallLoadingIcon),
					sizePx: 12
				}) : a.a.createElement(f.n, {
					className: Object(c.a)(O.a.communityCta, {
						[O.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? a.a.createElement(h, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : a.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && a.a.createElement("p", {
					title: e.description,
					className: O.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === r.a.PROFILE ? Object(s.c)(e) : Object(s.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				o = n("./src/reddit/selectors/user.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				language: o.R,
				userIsSubscriber: i.bb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(a.d([n], !0)),
					onSubscriptionsRequested: () => e(a.e()),
					onUnsubscribe: () => e(a.d([n], !1))
				}
			})
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				o = n.n(i);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(a.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", o.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(i.b)("plus"), e.className)
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(o);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(i.b)("share"), l.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, s.a.createElement("g", null, s.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), s.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("title", null, "Planet"), s.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				l = n.n(o);
			t.a = Object(a.a)(e => s.a.createElement("div", {
				className: Object(i.a)(l.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: l.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: l.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: l.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/Multireddit/index.m.less": function(e, t, n) {
			e.exports = {
				sidebar: "_398UHHJSXVL0IJVGTkTa9B",
				planetIcon: "_1r6EMjMnKM7lL8H8H3Vs4t",
				emptyMessageText: "_1rJj6Qsj1uaYq4iwCBZX9_",
				emptyMessage: "_23HF_LA75CXQvFP4nnxWQD"
			}
		},
		"./src/reddit/pages/Multireddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.regexp.search.js"), n("./node_modules/core-js/modules/es6.array.sort.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(s),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				p = n("./src/reddit/actions/multireddit/index.ts"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/helpers/trackers/screenview.ts"),
				x = n("./src/reddit/components/ContentGate/index.tsx"),
				g = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = n("./src/reddit/components/JumpToContent/index.tsx"),
				E = n("./src/reddit/components/ListingPostList/index.tsx"),
				_ = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				y = n("./src/lib/classNames/index.ts"),
				k = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/actions/modal.ts"),
				C = n("./src/reddit/constants/modals.ts"),
				O = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				j = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				w = n("./src/reddit/icons/svgs/User/index.tsx"),
				T = n("./src/reddit/models/Multireddit/index.ts"),
				N = n("./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less"),
				L = n.n(N);
			const B = Object(l.b)(null, e => ({
					onEditClicked: () => e(Object(v.h)(C.a.MULTIREDDIT_EDIT))
				})),
				S = {
					[T.e.Public]: {
						icon: o.a.createElement(w.a, {
							className: Object(y.a)(L.a.icon, L.a.public)
						}),
						text: r.fbt._("Public", null, {
							hk: "8ZeHp"
						})
					},
					[T.e.Hidden]: {
						icon: o.a.createElement(w.a, {
							className: Object(y.a)(L.a.icon, L.a.public)
						}),
						text: r.fbt._("Hidden", null, {
							hk: "1qlAJf"
						})
					},
					[T.e.Private]: {
						icon: o.a.createElement(j.a, {
							className: Object(y.a)(L.a.icon, L.a.private)
						}),
						text: r.fbt._("Private", null, {
							hk: "2HVerT"
						})
					}
				};
			var P = B(e => {
					const {
						multireddit: t,
						onEditClicked: n
					} = e;
					return o.a.createElement(o.a.Fragment, null, S[t.visibility].icon, S[t.visibility].text, o.a.createElement("button", {
						className: L.a.button,
						onClick: n
					}, o.a.createElement(O.a, {
						className: L.a.pencilIcon
					})))
				}),
				I = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				M = n("./src/reddit/components/RichTextJson/index.tsx"),
				D = n("./src/reddit/constants/postLayout.ts"),
				F = n("./src/reddit/contexts/PageLayer/index.tsx"),
				R = n("./src/reddit/controls/InternalLink/index.tsx"),
				A = n("./src/reddit/helpers/name/index.ts"),
				U = n("./src/reddit/models/Flair/index.ts"),
				H = n("./src/reddit/selectors/multireddit.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/actions/subscription/index.ts"),
				W = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/components/MultiredditTopBar/Button/index.m.less")),
				J = n.n(W);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var q = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			var V = o.a.memo(e => {
					var {
						className: t,
						onClick: n,
						children: r,
						hoverText: s,
						text: a,
						icon: i
					} = e, l = q(e, ["className", "onClick", "children", "hoverText", "text", "icon"]);
					return o.a.createElement("button", X({
						className: Object(y.a)(t, J.a.button, s ? J.a.withHover : null),
						onClick: n
					}, l), o.a.createElement("span", {
						className: J.a.icon
					}, i), a && o.a.createElement("span", {
						className: J.a.text
					}, a), s && o.a.createElement("span", {
						className: J.a.hoverText
					}, s), r)
				}),
				Z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				K = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Y = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				Q = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				$ = n("./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less"),
				ee = n.n($);
			const te = Object(l.b)(null, (e, t) => ({
				onFollowClick: () => {
					e(Object(G.b)(t.multireddit.url)), t.multireddit.isFollowed ? t.sendEvent(Object(K.g)(t.multireddit.url)) : t.sendEvent(Object(K.d)(t.multireddit.url))
				}
			}));
			var ne = Object(Z.c)(te(e => o.a.createElement(V, {
					className: Object(y.a)(ee.a.button, e.multireddit.isFollowed ? ee.a.isFollowed : null),
					hoverText: e.multireddit.isFollowed ? r.fbt._("Unfollow", null, {
						hk: "PezOE"
					}) : void 0,
					icon: e.multireddit.isFollowed ? o.a.createElement(Q.a, null) : o.a.createElement(Y.a, null),
					onClick: e.onFollowClick,
					text: e.multireddit.isFollowed ? r.fbt._("Following", null, {
						hk: "1wsu4d"
					}) : r.fbt._("Follow", null, {
						hk: "1DZLve"
					})
				}))),
				re = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				se = n("./src/reddit/components/OverflowMenu/index.tsx"),
				ae = n("./src/reddit/controls/Dropdown/Row.tsx"),
				ie = n("./src/reddit/selectors/activeModalId.ts"),
				oe = n("./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less"),
				le = n.n(oe);
			const ce = Object(c.c)({
				isConfirmDeleteOpen: e => "MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION" === Object(ie.a)(e),
				showOwnerButtons: (e, t) => Object(H.c)(e, t.multireddit.url)
			});
			var de = Object(l.b)(ce, (e, t) => ({
					deleteConfirmed: () => e(Object(p.c)(t.multireddit.url)),
					onDuplicateClicked: () => e(Object(v.h)(C.a.MULTIREDDIT_DUPLICATE)),
					onEdit: () => e(Object(v.h)(C.a.MULTIREDDIT_EDIT)),
					toggleConfirmDelete: () => e(Object(v.i)("MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION"))
				}))(Object(Z.c)(e => {
					const {
						deleteConfirmed: t,
						isConfirmDeleteOpen: n,
						multireddit: s,
						onDuplicateClicked: a,
						onEdit: i,
						sendEvent: l,
						showOwnerButtons: c,
						toggleConfirmDelete: d
					} = e;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(se.b, {
						className: le.a.button,
						dropdownId: "MULTIREDDIT_TOP_BAR_OVERFLOW",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, c && o.a.createElement(ae.b, {
						displayText: r.fbt._("Edit Details", null, {
							hk: "q4B9D"
						}),
						onClick: i
					}), o.a.createElement(ae.b, {
						displayText: r.fbt._("Duplicate", null, {
							hk: "4DZaW1"
						}),
						onClick: a
					}), c && o.a.createElement(ae.b, {
						className: Object(y.a)(le.a.warning),
						displayText: r.fbt._("Delete Custom Feed", null, {
							hk: "3QSOzN"
						}),
						onClick: d
					})), n && o.a.createElement(re.a, {
						toggleModal: d,
						onConfirm: t,
						actionText: r.fbt._("Delete", null, {
							hk: "3PGKcp"
						}),
						cancelActionText: r.fbt._("Keep", null, {
							hk: "1nkPG8"
						}),
						headerText: r.fbt._("Delete Custom Feed?", null, {
							hk: "szoK6"
						}),
						modalText: r.fbt._("Are you sure you would like to delete this Custom Feed? This will not affect the communities you have added.", null, {
							hk: "2GGkLQ"
						}),
						trackClick: () => {
							l(Object(K.a)(s.url))
						},
						withOverlay: !0
					}))
				})),
				ue = n("./node_modules/lodash/noop.js"),
				me = n.n(ue),
				pe = n("./src/config.ts"),
				be = n("./src/lib/copyToClipboard/index.ts"),
				he = n("./src/reddit/actions/toaster.ts"),
				xe = n("./src/reddit/actions/tooltip.ts"),
				ge = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				fe = n("./src/reddit/controls/Dropdown/index.tsx"),
				Ee = n("./src/reddit/icons/fonts/Share/index.tsx"),
				_e = n("./src/reddit/models/Toast/index.ts"),
				ye = n("./src/reddit/selectors/tooltip.ts"),
				ke = n("./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less"),
				ve = n.n(ke);
			const Ce = "MULTIREDDIT_TOP_BAR_SHARE",
				Oe = Object(ge.a)(fe.a),
				je = Object(c.c)({
					isConfirmPublicOpen: e => "MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION" === Object(ie.a)(e),
					isDropdownOpen: Object(ye.b)(Ce),
					isUpdatePending: e => e.multireddits.api.edit.pending
				}),
				we = Object(l.b)(je, (e, t) => ({
					copyLink: () => {
						if (Object(be.a)(pe.a.redditUrl + t.multireddit.url)) {
							const t = Object(he.d)(r.fbt._("Copied link!", null, {
								hk: "2IxdQz"
							}), _e.b.SuccessCommunity);
							e(Object(he.e)(t))
						} else {
							const t = Object(he.d)(r.fbt._("Something went wrong", null, {
								hk: "GmeVt"
							}), _e.b.Error);
							e(Object(he.e)(t))
						}
					},
					toggleConfirmPublic: () => e(Object(v.i)("MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION")),
					toggleDropdown: () => {
						e(Object(xe.h)({
							tooltipId: Ce
						})), t.sendEvent(Object(K.e)(t.multireddit.url))
					},
					updateVisibility: n => e(Object(p.e)({
						multipath: t.multireddit.url,
						visibility: n
					}))
				}));
			class Te extends o.a.Component {
				constructor() {
					super(...arguments), this.onShareButtonClick = async () => {
						this.props.multireddit.visibility === T.e.Private ? this.props.toggleConfirmPublic() : this.props.toggleDropdown()
					}, this.onMakePublicConfirm = () => {
						this.props.updateVisibility(T.e.Public)
					}
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(V, {
						className: ve.a.shareMenu,
						disabled: this.props.isUpdatePending,
						icon: o.a.createElement(Ee.a, {
							className: ve.a.shareIcon
						}),
						id: Ce,
						onClick: this.onShareButtonClick,
						text: r.fbt._("Share", null, {
							hk: "2e7dE3"
						})
					}, o.a.createElement(Oe, {
						isOpen: this.props.isDropdownOpen,
						tooltipId: Ce,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(ae.b, {
						displayText: r.fbt._("Copy link", null, {
							hk: "1RMEDS"
						}),
						onClick: this.props.copyLink
					}))), this.props.isConfirmPublicOpen && o.a.createElement(re.a, {
						toggleModal: this.props.toggleConfirmPublic,
						onConfirm: this.onMakePublicConfirm,
						actionText: r.fbt._("Make public", null, {
							hk: "2jdbN"
						}),
						headerText: r.fbt._("Make Custom Feed Public?", null, {
							hk: "3UHhCD"
						}),
						modalText: o.a.createElement(o.a.Fragment, null, r.fbt._("This Custom Feed is currently private.", null, {
							hk: "15Ymz2"
						}), o.a.createElement("br", null), o.a.createElement("br", null), r.fbt._("Would you like to make it public so you can share it with other people?", null, {
							hk: "3IbJao"
						})),
						trackClick: me.a,
						withOverlay: !0
					}))
				}
			}
			var Ne = Object(Z.c)(we(Te)),
				Le = n("./src/reddit/components/MultiredditTopBar/index.m.less"),
				Be = n.n(Le);
			const {
				fbt: Se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pe = Object(c.c)({
				isLoggedIn: z.I,
				layout: (e, t) => D.e[Object(F.N)(e, t)],
				userIsOwner: (e, t) => Object(H.c)(e, t.multireddit.url)
			}), Ie = Object(l.b)(Pe), Me = Object(F.t)(), De = {};
			var Fe = Me(Ie(e => o.a.createElement("div", {
					className: Be.a.container
				}, o.a.createElement("div", {
					className: Object(y.a)(Be.a.layoutContainer, e.layout === D.d.Card ? Be.a.layoutCard : null)
				}, o.a.createElement("img", {
					className: Be.a.icon,
					src: e.multireddit.icon
				}), o.a.createElement("div", {
					className: Be.a.content
				}, o.a.createElement("div", {
					className: Be.a.header
				}, o.a.createElement("h1", {
					className: Be.a.multiredditName
				}, e.multireddit.displayText), e.multireddit.isNSFW && o.a.createElement(k.b, {
					className: Be.a.flair,
					flair: {
						type: U.f.Nsfw,
						text: "nsfw"
					}
				})), o.a.createElement("div", {
					className: Be.a.meta
				}, Se._({
					"*": "{communitiesCount} communities in this custom feed",
					_1: "1 community in this custom feed"
				}, [Se._plural(e.multireddit.subredditCount, "communitiesCount")], {
					hk: "12Ej7M"
				}), o.a.createElement("span", null, " • "), e.userIsOwner ? o.a.createElement(P, {
					multireddit: e.multireddit
				}) : o.a.createElement(o.a.Fragment, null, Se._("Curated by {multiredditFeedAuthorLink}", [Se._param("multiredditFeedAuthorLink", o.a.createElement(R.a, {
					className: Be.a.usernameLink,
					to: "/".concat(Object(A.c)(Object(T.i)(e.multireddit.url)))
				}, Object(A.c)(Object(T.i)(e.multireddit.url))))], {
					hk: "3AKmgH"
				}))), o.a.createElement("div", {
					className: Be.a.descriptionContainer
				}, e.multireddit.descriptionRtJson ? o.a.createElement(M.a, {
					content: e.multireddit.descriptionRtJson,
					rtJsonElementProps: De
				}) : o.a.createElement(I.a, {
					html: e.multireddit.descriptionHtml || e.multireddit.description
				}))), o.a.createElement("div", {
					className: Be.a.actions
				}, !e.userIsOwner && e.isLoggedIn && o.a.createElement(ne, {
					multireddit: e.multireddit
				}), o.a.createElement(Ne, {
					multireddit: e.multireddit
				}), e.isLoggedIn && o.a.createElement(de, {
					multireddit: e.multireddit
				})))))),
				Re = n("./src/reddit/icons/svgs/Planet/index.tsx"),
				Ae = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ue = n("./src/reddit/models/ContentGate.ts"),
				He = n("./src/reddit/pages/Multireddit/index.m.less"),
				ze = n.n(He);
			const Ge = e => o.a.createElement("div", {
					className: ze.a.emptyMessage
				}, o.a.createElement(Re.a, {
					className: ze.a.planetIcon
				}), o.a.createElement("div", {
					className: ze.a.emptyMessageText
				}, e.multireddit && 0 !== e.multireddit.subredditCount ? r.fbt._("There are no posts in this custom feed", null, {
					hk: "16ubpi"
				}) : r.fbt._("There are 0 communities in this custom feed", null, {
					hk: "tKC2v"
				}))),
				We = Object(F.t)({
					currentMultireddit: F.c,
					pageLayer: e => e
				}),
				Je = (e, t) => {
					let {
						match: n
					} = t;
					return n.params.sort || d.M.HOT
				},
				Xe = (e, t) => {
					let {
						location: n
					} = t;
					return a()([...Object(u.a)(n.search)])
				},
				qe = (e, t) => {
					const n = Object(F.d)(e, {
						pageLayer: t.pageLayer
					});
					if (n) return n.url; {
						const {
							currentMultireddit: e
						} = t;
						if (!e) return "";
						const {
							multiredditName: n,
							username: r
						} = e;
						return Object(T.h)(r || "me", n)
					}
				},
				Ve = Object(c.a)(Je, Xe, qe, (e, t, n) => Object(m.a)(n, e, t)),
				Ze = Object(c.a)(Xe, e => {
					const t = b.t in e && e[b.t].toUpperCase();
					return "string" == typeof t && t in d.Pb ? d.Pb[t] : d.Qb
				}),
				Ke = Object(c.c)({
					listingKey: Ve,
					listingName: qe,
					multireddit: F.d,
					over18Prefs: z.W,
					sort: Je,
					timeSort: Ze
				});
			class Ye extends o.a.Component {
				constructor() {
					super(...arguments), this.noPosts = () => o.a.createElement(Ge, {
						multireddit: this.props.multireddit
					})
				}
				render() {
					const {
						listingKey: e,
						listingName: t,
						match: {
							params: {
								username: n
							}
						},
						multireddit: r,
						over18Prefs: s,
						sort: a,
						timeSort: i
					} = this.props;
					return r ? r.isNSFW && !s ? o.a.createElement(x.default, {
						contentGateType: Ue.a.NsfwCustomFeed
					}) : o.a.createElement(Ae.a, {
						className: this.props.className,
						content: o.a.createElement(o.a.Fragment, null, r && o.a.createElement(g.a, {
							sort: a,
							baseUrl: n ? r.url.replace(/\/$/, "") : "/me/m/".concat(r.name),
							timeSort: i
						}), o.a.createElement(f.a, null), o.a.createElement(E.a, {
							listingKey: e,
							listingName: t,
							listingViewed: (t, n) => Object(h.e)(e, a, n, t, i),
							noPostsComponent: this.noPosts,
							onLoadMore: this.props.onLoadMorePosts,
							inSubredditOrProfile: !1
						})),
						contentNavBar: r ? o.a.createElement(o.a.Fragment, null, Object(T.f)(r) && o.a.createElement(Fe, {
							multireddit: r
						})) : null,
						fitPageToContent: !0,
						sidebar: r ? o.a.createElement(_.a, {
							className: ze.a.sidebar,
							listingKey: e,
							listingName: t,
							multireddit: r,
							multiUsername: n
						}) : null
					}) : o.a.createElement(x.default, {
						contentGateType: Ue.a.CustomFeedDoesNotExist
					})
				}
			}
			const Qe = We(Object(l.b)(Ke, (e, t) => ({
				onLoadMorePosts: () => e(Object(p.f)({
					sort: t.match.params.sort,
					multiredditName: t.match.params.multiredditName,
					username: t.match.params.username
				}))
			}))(Ye));
			t.default = e => o.a.createElement(Qe, e)
		}
	}
]);
//# sourceMappingURL=Multireddit.a1f306fb507f644220a7.js.map