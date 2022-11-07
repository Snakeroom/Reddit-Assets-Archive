// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.1e1f7ed842c4a43cc89f.js
// Retrieved at 11/7/2022, 5:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/higherOrderComponents/asTooltip.tsx"),
				s = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/constants/index.ts"),
				r = o("./node_modules/react/index.js"),
				l = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				d = o("./src/reddit/actions/tooltip.ts"),
				c = o("./src/reddit/components/UserIcon/index.tsx"),
				u = o("./src/reddit/controls/Dropdown/index.tsx"),
				v = o("./src/reddit/endpoints/modQueue/modActivity.ts"),
				m = o("./src/reddit/helpers/graphql/helpers.ts"),
				b = o("./src/reddit/helpers/trackers/modListing.ts"),
				h = o("./src/reddit/hooks/useGqlContext.ts"),
				p = o("./src/reddit/hooks/useTracking.ts"),
				k = o("./src/reddit/selectors/modQueue.ts"),
				_ = o("./src/reddit/selectors/platform.ts"),
				f = o("./src/reddit/selectors/subreddit.ts"),
				g = o("./src/reddit/selectors/tooltip.ts"),
				C = o("./src/reddit/selectors/user.ts"),
				A = o("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				w = o.n(A),
				S = o("./src/config.ts"),
				R = o("./node_modules/fbt/lib/FbtPublic.js"),
				j = o("./src/lib/timeAgo/index.ts"),
				y = o("./src/redditGQL/types.ts");
			const N = `${S.a.assetPath}/img/snoo-sunglasses.png`,
				O = e => {
					let {
						data: t
					} = e;
					var o, n, a, r, i, d, u;
					const v = (null === (o = t.info) || void 0 === o ? void 0 : o.displayName) || (null === (n = t.info) || void 0 === n ? void 0 : n.name),
						{
							lastModAction: b
						} = t;
					return l.a.createElement("div", {
						className: Object(s.a)(w.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, l.a.createElement(c.a, {
						className: w.a.modIcon,
						userName: v || "",
						iconUrl: null === (r = null === (a = null == t ? void 0 : t.info) || void 0 === a ? void 0 : a.icon) || void 0 === r ? void 0 : r.url,
						isNSFW: !!(null === (d = null === (i = t.info) || void 0 === i ? void 0 : i.profile) || void 0 === d ? void 0 : d.isNsfw),
						style: {
							height: "24px",
							width: "24px"
						}
					}), l.a.createElement("div", {
						className: w.a.subredditRowText
					}, l.a.createElement("div", {
						className: Object(s.a)(w.a.username, "text-neutral-content-strong")
					}, v), l.a.createElement("div", {
						className: Object(s.a)(w.a.detailText, "text-neutral-content-weak")
					}, b && l.a.createElement(l.a.Fragment, null, ((e, t) => {
						switch (e) {
							case y.v.AddNote:
								return R.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case y.v.AddRemovalReason:
								return R.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case y.v.AdjustPostCrowdControlLevel:
								return R.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case y.v.EnablePostCrowdControlFilter:
								return R.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case y.v.DisablePostCrowdControlFilter:
								return R.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case y.v.ApproveComment:
								return R.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case y.v.ApproveLink:
								return R.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case y.v.BanUser:
								return R.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case y.v.Collections:
								return R.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case y.v.DeleteNote:
								return R.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case y.v.Distinguish:
								return "SubredditPost" === t ? R.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : R.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case y.v.EditFlair:
								return "SubredditPost" === t ? R.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : R.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case y.v.IgnoreReports:
								return "SubredditPost" === t ? R.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : R.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case y.v.Lock:
								return "SubredditPost" === t ? R.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : R.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case y.v.MarkNsfw:
								return R.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case y.v.MarkOriginalContent:
								return R.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case y.v.MuteUser:
								return R.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case y.v.RemoveComment:
								return R.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case y.v.RemoveLink:
								return R.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case y.v.SetContestMode:
								return R.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case y.v.SetSuggestedsort:
								return R.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case y.v.ShowComment:
								return R.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case y.v.SpamComment:
								return R.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case y.v.SpamLink:
								return R.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case y.v.Spoiler:
								return R.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case y.v.Sticky:
								return "SubredditPost" === t ? R.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : R.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case y.v.UnbanUser:
								return R.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case y.v.Unlock:
								return "SubredditPost" === t ? R.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : R.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case y.v.UnmuteUser:
								return R.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case y.v.UnsetContestMode:
								return R.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case y.v.UnsnoozeReports:
								return "SubredditPost" === t ? R.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : R.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case y.v.Unspoiler:
								return R.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case y.v.Unsticky:
								return "SubredditPost" === t ? R.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : R.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case y.v.UpdateRemovalReason:
							case y.v.WikiBanned:
							case y.v.WikiContributor:
							case y.v.WikiPageListed:
							case y.v.WikiPermLevel:
							case y.v.WikiRevise:
							case y.v.WikiUnbanned:
							case y.v.AcceptModeratorInvite:
							case y.v.AddCommunityTopics:
							case y.v.AddContributor:
							case y.v.AddModerator:
							case y.v.CreateAward:
							case y.v.CreateScheduledPost:
							case y.v.CreateRemovalReason:
							case y.v.CommunityStyling:
							case y.v.CommunityWidgets:
							case y.v.CreateRule:
							case y.v.DeleteAward:
							case y.v.DeleteRule:
							case y.v.DeleteScheduledPost:
							case y.v.DeleteOverriddenClassification:
							case y.v.DeleteRemovalReason:
							case y.v.DisableAward:
							case y.v.EditPostRequirements:
							case y.v.EditRule:
							case y.v.EditScheduledPost:
							case y.v.EditSettings:
							case y.v.EnableAward:
							case y.v.Events:
							case y.v.HiddenAward:
							case y.v.InviteModerator:
							case y.v.InviteSubscriber:
							case y.v.ModAwardGiven:
							case y.v.ModmailEnrollment:
							case y.v.OverrideClassification:
							case y.v.RemoveCommunityTopics:
							case y.v.RemoveContributor:
							case y.v.RemoveModerator:
							case y.v.RemoveWikiContributor:
							case y.v.ReorderModerators:
							case y.v.ReorderRules:
							case y.v.SetPermissions:
							case y.v.SnoozeReports:
							case y.v.SubmitContentRatingSurvey:
							case y.v.SubmitScheduledPost:
							case y.v.UnignoreReports:
							case y.v.UninviteModerator:
							default:
								return R.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == b ? void 0 : b.action, null === (u = null == b ? void 0 : b.target) || void 0 === u ? void 0 : u.__typename), " ", Object(j.d)(Object(m.g)(b.createdAt) / 1e3)))))
				},
				x = e => {
					let {
						mostRecentAction: t
					} = e;
					return l.a.createElement("div", {
						className: w.a.emptyTooltip
					}, l.a.createElement("img", {
						alt: R.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: N,
						className: w.a.snooImage
					}), l.a.createElement("div", {
						className: Object(s.a)(w.a.emptyText, "text-neutral-content-strong")
					}, R.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), l.a.createElement("div", {
						className: Object(s.a)(w.a.emptyDetailText, "text-neutral-content-weak")
					}, R.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && l.a.createElement("div", {
						className: w.a.lastActionContainer
					}, l.a.createElement("div", {
						className: Object(s.a)(w.a.lastActionTitle, "text-neutral-content-weak")
					}, R.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), l.a.createElement(O, {
						data: t
					})))
				},
				E = e => {
					let {
						orderedModsList: t,
						subredditName: o,
						mods: n,
						mostRecentAction: a
					} = e;
					return 0 === t.length ? l.a.createElement(x, {
						mostRecentAction: a
					}) : l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(s.a)(w.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", R.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [R.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), o), n && t.slice(0, 10).map(e => l.a.createElement(O, {
						data: n[e],
						key: e
					})), t.length > 10 && l.a.createElement("div", {
						className: Object(s.a)(w.a.detailText, w.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", R.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				P = Object(n.a)(u.a),
				D = e => e ? Object.keys(e).sort((t, o) => ((e, t, o) => {
					var n, s, a, r;
					const l = null === (s = null === (n = o[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === s ? void 0 : s.createdAt,
						i = null === (r = null === (a = o[t]) || void 0 === a ? void 0 : a.lastModAction) || void 0 === r ? void 0 : r.createdAt,
						d = Object(m.g)(l || "");
					return Object(m.g)(i || "") - d
				})(t, o, e)).filter(t => {
					var o, n;
					return (new Date).getTime() - Object(m.g)((null === (n = null === (o = e[t]) || void 0 === o ? void 0 : o.lastModAction) || void 0 === n ? void 0 : n.createdAt) || "") < 15 * a.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: o,
					maxMods: n,
					isModqueue: a
				} = e;
				const u = Object(i.e)(_.c),
					m = o || u,
					A = Object(i.e)(e => Object(f.h)(e, {
						subredditId: m || ""
					})) || "",
					S = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[m || ""]) || {}
					}),
					{
						mods: R
					} = S,
					j = Object(r.useCallback)(e => D(e), [])(R),
					[y, N] = Object(r.useState)(void 0),
					O = Object(h.a)();
				Object(r.useEffect)(() => {
					(async () => {
						var e, t, o, n;
						if (0 === j.length && A) {
							const s = null === (t = null === (e = (await Object(v.c)(O(), {
								subredditName: A
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == s ? void 0 : s.actions) && (null === (n = null === (o = s.actions) || void 0 === o ? void 0 : o.edges) || void 0 === n || n.map(e => {
								var t;
								const {
									moderatorInfo: o,
									...n
								} = null == e ? void 0 : e.node, s = null === (t = null == o ? void 0 : o.name) || void 0 === t ? void 0 : t.toLowerCase();
								"reddit" !== s && "automoderator" !== s && N({
									info: o,
									lastModAction: n
								})
							}))
						}
					})()
				}, [O, j.length, A]);
				const x = (e => `mod_activity_tooltip_id-${e}`)(A || ""),
					M = Object(i.d)(),
					U = Object(p.a)(),
					L = Object(r.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), M(Object(d.h)({
							tooltipId: x
						})), U(Object(b.a)(!!a, A))
					}, [M, x, U, A, a]),
					I = Object(i.e)(e => Object(g.b)(x)(e)),
					T = Object(i.e)(k.c),
					q = Object(i.e)(C.l),
					W = n || 5;
				return l.a.createElement("div", {
					className: Object(s.a)(w.a.preview, t),
					id: x,
					onClick: L,
					"data-testid": "mod-activity-preview"
				}, R && j.length > 0 ? j.slice(0, W).map((e, t) => {
					var o, n, a, r, i, d, u, v, m, b;
					return l.a.createElement(c.a, {
						className: Object(s.a)(w.a.userIcon, {
							[w.a.noMargin]: t === j.length - 1 && !(t === W - 1 && j.length > W)
						}),
						style: {
							height: "24px",
							width: "24px"
						},
						key: null === (n = null === (o = R[e]) || void 0 === o ? void 0 : o.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (r = null === (a = R[e]) || void 0 === a ? void 0 : a.info) || void 0 === r ? void 0 : r.displayName) || "",
						iconUrl: null === (u = null === (d = null === (i = R[e]) || void 0 === i ? void 0 : i.info) || void 0 === d ? void 0 : d.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (b = null === (m = null === (v = R[e]) || void 0 === v ? void 0 : v.info) || void 0 === m ? void 0 : m.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : T ? null : l.a.createElement(c.a, {
					className: Object(s.a)(w.a.userIcon, w.a.noMargin),
					userName: (null == q ? void 0 : q.displayName) || "",
					iconUrl: null == q ? void 0 : q.accountIcon,
					isNSFW: !1,
					style: {
						height: "24px",
						width: "24px"
					}
				}), j.length > W && l.a.createElement("div", {
					className: Object(s.a)(w.a.moreMods, "text-neutral-content-weak")
				}, "+", j.length - W), l.a.createElement(P, {
					tooltipId: x,
					isOpen: I,
					className: w.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, l.a.createElement(E, {
					orderedModsList: j,
					subredditName: A || "",
					mods: R,
					mostRecentAction: y
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, o) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.1e1f7ed842c4a43cc89f.js.map